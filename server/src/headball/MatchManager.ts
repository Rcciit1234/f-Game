import { Socket } from 'socket.io';
import { Server as SocketIOServer } from 'socket.io';
import { HBPlayerState, HBBallState, HBInput, HB_FIELD, HB_PLAYER, HB_BALL, HB_MATCH } from '../../../shared/headball.js';

interface HBOnlineMatch {
  id: string;
  homeSocket: Socket;
  awaySocket: Socket;
  homePlayer: HBPlayerState;
  awayPlayer: HBPlayerState;
  ball: HBBallState;
  homeScore: number;
  awayScore: number;
  elapsedSeconds: number;
  state: 'countdown' | 'playing' | 'goal_scored' | 'ended';
  countdownTimer: number;
  goalScoredTimer: number;
  homeInput: HBInput;
  awayInput: HBInput;
  lastUpdateTime: number;
  tickAccumulator: number;
  finalStateSent: boolean;
}

let matchCounter = 0;

export class HBHeadBallMatchManager {
  private io: SocketIOServer;
  private activePlayers: Map<string, { socket: Socket; name: string; team: 'home' | 'away'; matchId: string | null }> = new Map();
  private matches: Map<string, HBOnlineMatch> = new Map();
  private tickInterval: NodeJS.Timeout | null = null;

  constructor(io: SocketIOServer) {
    this.io = io;
    this.startTicks();
  }

  addPlayer(socketId: string, socket: Socket, name: string, team: 'home' | 'away') {
    this.activePlayers.set(socketId, { socket, name, team, matchId: null });
  }

  removePlayer(socketId: string) {
    this.activePlayers.delete(socketId);
  }

  handleInput(socketId: string, input: HBInput) {
    for (const [, match] of this.matches) {
      if (match.homeSocket.id === socketId) {
        match.homeInput = { ...input };
        return;
      }
      if (match.awaySocket.id === socketId) {
        match.awayInput = { ...input };
        return;
      }
    }
  }

  startMatch(homeSocketId: string, awaySocketId: string) {
    const homeData = this.activePlayers.get(homeSocketId);
    const awayData = this.activePlayers.get(awaySocketId);
    if (!homeData || !awayData) return;

    matchCounter++;
    const matchId = `hb_match_${matchCounter}`;

    const homePlayer = this.createPlayer(homeSocketId, homeData.name, 'home');
    const awayPlayer = this.createPlayer(awaySocketId, awayData.name, 'away');

    const match: HBOnlineMatch = {
      id: matchId,
      homeSocket: homeData.socket,
      awaySocket: awayData.socket,
      homePlayer,
      awayPlayer,
      ball: this.createBall(),
      homeScore: 0,
      awayScore: 0,
      elapsedSeconds: 0,
      state: 'countdown',
      countdownTimer: 3,
      goalScoredTimer: 0,
      homeInput: { left: false, right: false, jump: false, kick: false, kickHold: false },
      awayInput: { left: false, right: false, jump: false, kick: false, kickHold: false },
      lastUpdateTime: Date.now(),
      tickAccumulator: 0,
      finalStateSent: false,
    };

    this.matches.set(matchId, match);

    this.activePlayers.set(homeSocketId, { ...homeData, matchId });
    this.activePlayers.set(awaySocketId, { ...awayData, matchId });

    match.homeSocket.join(matchId);
    match.awaySocket.join(matchId);

    this.io.to(matchId).emit('hb_match_start', {
      matchId,
      homePlayer: this.serializePlayer(homePlayer),
      awayPlayer: this.serializePlayer(awayPlayer),
      ball: match.ball,
    });

    this.startCountdown(match);
  }

  private startCountdown(match: HBOnlineMatch) {
    let count = 3;
    match.countdownTimer = count;
    this.broadcast(match);

    const interval = setInterval(() => {
      count--;
      match.countdownTimer = count;
      this.io.to(match.id).emit('hb_countdown', { time: count });

      if (count <= 0) {
        clearInterval(interval);
        match.state = 'playing';
        match.lastUpdateTime = Date.now();
        this.broadcast(match);
      }
    }, 1000);
  }

  private startTicks() {
    this.tickInterval = setInterval(() => this.tick(), 1000 / 30);
  }

  private tick() {
    const now = Date.now();
    for (const [, match] of this.matches) {
      if (match.state !== 'playing' && match.state !== 'goal_scored') continue;

      const dt = Math.min((now - match.lastUpdateTime) / 1000, 0.05);
      match.lastUpdateTime = now;

      if (match.state === 'playing') {
        match.elapsedSeconds += dt;
        this.updateMatch(match, dt);
        this.broadcast(match);

        if (match.elapsedSeconds >= HB_MATCH.DURATION) {
          match.state = 'ended';
          this.endMatch(match);
        }
      } else if (match.state === 'goal_scored') {
        match.goalScoredTimer -= dt;
        if (match.goalScoredTimer <= 0) {
          match.state = 'playing';
          match.goalScoredTimer = 0;
          this.resetPositions(match);
          this.broadcast(match);
        }
      }
    }
  }

  private updateMatch(match: HBOnlineMatch, dt: number) {
    this.updatePlayerPhysics(match.homePlayer, match.homeInput, dt);
    this.updatePlayerPhysics(match.awayPlayer, match.awayInput, dt);
    this.updateBallPhysics(match);

    const goal = this.checkGoal(match);
    if (goal) {
      if (goal === 'home') match.homeScore++;
      else match.awayScore++;

      if (match.homeScore >= HB_MATCH.WIN_GOALS || match.awayScore >= HB_MATCH.WIN_GOALS) {
        match.state = 'ended';
        this.endMatch(match);
        return;
      }

      match.state = 'goal_scored';
      match.goalScoredTimer = HB_MATCH.GOAL_SCORED_PAUSE;
      this.io.to(match.id).emit('hb_goal', { team: goal, homeScore: match.homeScore, awayScore: match.awayScore });
    }
  }

  private updatePlayerPhysics(player: HBPlayerState, input: HBInput, dt: number) {
    if (input.left) { player.vx = -HB_PLAYER.MOVE_SPEED; player.facingRight = false; }
    else if (input.right) { player.vx = HB_PLAYER.MOVE_SPEED; player.facingRight = true; }
    else { player.vx *= 0.75; }

    if (input.jump && player.isGrounded) {
      player.vy = HB_PLAYER.JUMP_VELOCITY;
      player.isGrounded = false;
      player.isJumping = true;
    }

    if (input.jump && player.isJumping && player.vy < 0) {
      player.vy += HB_PLAYER.JUMP_HOLD_FORCE * dt;
    }

    if (!player.isGrounded) player.vy += HB_BALL.GRAVITY * dt;

    player.x += player.vx * dt;
    player.y += player.vy * dt;

    if (player.y >= HB_FIELD.GROUND_Y) {
      player.y = HB_FIELD.GROUND_Y;
      player.vy = 0;
      player.isGrounded = true;
      player.isJumping = false;
    }

    const hb = HB_PLAYER.BODY_WIDTH / 2;
    if (player.x < hb) { player.x = hb; player.vx = 0; }
    if (player.x > HB_FIELD.WIDTH - hb) { player.x = HB_FIELD.WIDTH - hb; player.vx = 0; }

    player.kickTimer = Math.max(0, player.kickTimer - dt);
    if (player.kickTimer <= 0) player.isKicking = false;
    player.animFrame += dt * 8;
  }

  private updateBallPhysics(match: HBOnlineMatch) {
    const ball = match.ball;
    ball.vy += HB_BALL.GRAVITY * (1 / 30);

    ball.vx *= (1 - HB_BALL.AIR_RESISTANCE);
    ball.vy *= (1 - HB_BALL.AIR_RESISTANCE);

    ball.x += ball.vx * (1 / 30);
    ball.y += ball.vy * (1 / 30);

    const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
    if (speed > HB_BALL.MAX_SPEED) {
      ball.vx = (ball.vx / speed) * HB_BALL.MAX_SPEED;
      ball.vy = (ball.vy / speed) * HB_BALL.MAX_SPEED;
    }

    if (ball.y + ball.radius >= HB_FIELD.GROUND_Y) {
      ball.y = HB_FIELD.GROUND_Y - ball.radius;
      ball.vy *= -HB_BALL.BOUNCE;
      ball.vx *= HB_BALL.GROUND_FRICTION;
      if (Math.abs(ball.vy) < 10) ball.vy = 0;
    }

    const inGoalLeft = ball.x - ball.radius < 0 && ball.y > HB_FIELD.GOAL_Y && ball.y < HB_FIELD.GROUND_Y;
    const inGoalRight = ball.x + ball.radius > HB_FIELD.WIDTH && ball.y > HB_FIELD.GOAL_Y && ball.y < HB_FIELD.GROUND_Y;

    if (!inGoalLeft && ball.x - ball.radius < 0) { ball.x = ball.radius; ball.vx *= -HB_BALL.BOUNCE; }
    if (!inGoalRight && ball.x + ball.radius > HB_FIELD.WIDTH) { ball.x = HB_FIELD.WIDTH - ball.radius; ball.vx *= -HB_BALL.BOUNCE; }

    if (ball.y - ball.radius < 0) { ball.y = ball.radius; ball.vy *= -HB_BALL.BOUNCE; }

    this.checkPlayerCollision(match.homePlayer, ball);
    this.checkPlayerCollision(match.awayPlayer, ball);

    if (match.homeInput.kick) this.performKick(match.homePlayer, ball, match.homeInput);
    if (match.awayInput.kick) this.performKick(match.awayPlayer, ball, match.awayInput);
  }

  private checkPlayerCollision(player: HBPlayerState, ball: HBBallState) {
    const footX = player.x + (player.facingRight ? 8 : -8);
    const footY = player.y - 2;
    const dx = ball.x - footX;
    const dy = ball.y - footY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitDist = ball.radius + 6;

    if (dist < hitDist) {
      if (dist > 0.001) {
        ball.x += (dx / dist) * (hitDist - dist);
        ball.y += (dy / dist) * (hitDist - dist);
      }
      if (player.isKicking) {
        const dir = player.facingRight ? 1 : -1;
        ball.vx = dir * HB_PLAYER.LOW_KICK_SPEED;
        ball.vy = -80;
        ball.lastTouchBy = player.id;
        ball.lastTouchTeam = player.team;
      } else {
        const pushDir = ball.x > player.x ? 1 : -1;
        ball.vx += pushDir * 80;
        ball.vy = -Math.abs(ball.vy) * 0.3 - 60;
        ball.lastTouchBy = player.id;
        ball.lastTouchTeam = player.team;
      }
    }
  }

  private performKick(player: HBPlayerState, ball: HBBallState, input: HBInput) {
    if (player.isKicking) return;
    const dx = player.x - ball.x;
    const dy = (player.y - 10) - ball.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > HB_PLAYER.KICK_RANGE + ball.radius) return;

    player.isKicking = true;
    player.kickTimer = HB_PLAYER.KICK_DURATION;
    const dir = player.facingRight ? 1 : -1;

    if (input.kickHold) {
      ball.vx = dir * HB_PLAYER.HIGH_KICK_SPEED;
      ball.vy = HB_PLAYER.HIGH_KICK_Y;
    } else {
      ball.vx = dir * HB_PLAYER.LOW_KICK_SPEED;
      ball.vy = -80;
    }
    ball.lastTouchBy = player.id;
    ball.lastTouchTeam = player.team;
    ball.x = player.x + dir * (HB_PLAYER.KICK_RANGE * 0.5);
    ball.y = player.y - 8;
  }

  private checkGoal(match: HBOnlineMatch): 'home' | 'away' | null {
    const ball = match.ball;
    if (ball.x + ball.radius < 0 && ball.y > HB_FIELD.GOAL_Y && ball.y < HB_FIELD.GROUND_Y) return 'away';
    if (ball.x - ball.radius > HB_FIELD.WIDTH && ball.y > HB_FIELD.GOAL_Y && ball.y < HB_FIELD.GROUND_Y) return 'home';
    return null;
  }

  private resetPositions(match: HBOnlineMatch) {
    match.homePlayer.x = HB_FIELD.WIDTH * 0.25;
    match.homePlayer.y = HB_FIELD.GROUND_Y;
    match.homePlayer.vx = 0; match.homePlayer.vy = 0; match.homePlayer.isGrounded = true;
    match.awayPlayer.x = HB_FIELD.WIDTH * 0.75;
    match.awayPlayer.y = HB_FIELD.GROUND_Y;
    match.awayPlayer.vx = 0; match.awayPlayer.vy = 0; match.awayPlayer.isGrounded = true;
    match.ball.x = HB_FIELD.WIDTH / 2;
    match.ball.y = HB_FIELD.GROUND_Y - HB_BALL.RADIUS - 10;
    match.ball.vx = 0; match.ball.vy = 0;
    match.ball.lastTouchBy = null;
    match.ball.lastTouchTeam = null;
  }

  private endMatch(match: HBOnlineMatch) {
    if (match.finalStateSent) return;
    match.finalStateSent = true;
    const winner = match.homeScore > match.awayScore ? 'home' : match.awayScore > match.homeScore ? 'away' : null;
    this.io.to(match.id).emit('hb_match_end', {
      homeScore: match.homeScore,
      awayScore: match.awayScore,
      winner,
    });
  }

  private broadcast(match: HBOnlineMatch) {
    this.io.to(match.id).emit('hb_state', {
      homePlayer: this.serializePlayer(match.homePlayer),
      awayPlayer: this.serializePlayer(match.awayPlayer),
      ball: match.ball,
      homeScore: match.homeScore,
      awayScore: match.awayScore,
      elapsedSeconds: match.elapsedSeconds,
      state: match.state,
      countdownTimer: match.countdownTimer,
    });
  }

  private serializePlayer(p: HBPlayerState) {
    return { ...p };
  }

  private createPlayer(id: string, name: string, team: 'home' | 'away'): HBPlayerState {
    return {
      id, name, team,
      x: team === 'home' ? HB_FIELD.WIDTH * 0.25 : HB_FIELD.WIDTH * 0.75,
      y: HB_FIELD.GROUND_Y,
      vx: 0, vy: 0, isGrounded: true,
      facingRight: team !== 'home',
      isJumping: false, isKicking: false, kickTimer: 0,
      headSize: HB_PLAYER.HEAD_RADIUS,
      skinColor: '#e8b88a',
      hairColor: '#4a3728',
      jerseyColor: team === 'home' ? '#2563eb' : '#dc2626',
      animFrame: 0,
    };
  }

  private createBall(): HBBallState {
    return {
      x: HB_FIELD.WIDTH / 2,
      y: HB_FIELD.GROUND_Y - HB_BALL.RADIUS - 10,
      vx: 0, vy: 0, radius: HB_BALL.RADIUS,
      lastTouchBy: null, lastTouchTeam: null,
    };
  }

  dispose() {
    if (this.tickInterval) clearInterval(this.tickInterval);
  }
}
