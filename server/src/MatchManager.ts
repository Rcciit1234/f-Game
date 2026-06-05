import { Socket } from 'socket.io';
import { Server as SocketIOServer } from 'socket.io';
import {
  PlayerState, PlayerInput, BallState, MatchInfo, MatchState,
  Team, PlayerPhysicsState, ClientEvent, ServerEvent, MatchConfig, TeamMode, Position,
  FIELD, PLAYER_PHYSICS, BALL,
} from '../../shared/index.js';
import { AIController } from './AIController.js';

interface QueuedPlayer {
  socket: Socket;
  name: string;
}

interface Match {
  id: string;
  state: MatchState;
  config: MatchConfig;
  players: Map<string, PlayerState>;
  ball: BallState;
  blueScore: number;
  redScore: number;
  elapsedSeconds: number;
  kickoffTimer: number;
  lastInputs: Map<string, PlayerInput>;
  lastUpdateTime: number;
  tickRate: number;
  tickAccumulator: number;
  goalScoredTimer: number;
  ended: boolean;
  playerControlMap: Map<string, string>;
  teamMode: { blue: TeamMode; red: TeamMode };
}

let matchCounter = 0;

export class MatchManager {
  private io: SocketIOServer;
  private queue: QueuedPlayer[] = [];
  private matches: Map<string, Match> = new Map();
  private playerMatchMap: Map<string, string> = new Map();
  private tickInterval: NodeJS.Timeout | null = null;

  constructor(io: SocketIOServer) {
    this.io = io;
    this.startTicks();
  }

  addPlayerToMatch(socketId: string, matchId: string) {
    this.playerMatchMap.set(socketId, matchId);
  }

  private startTicks() {
    this.tickInterval = setInterval(() => this.tick(), 1000 / 30);
  }

  private matchmakingTimer: NodeJS.Timeout | null = null;

  addToQueue(socket: Socket, name: string) {
    if (this.playerMatchMap.has(socket.id)) return;
    this.queue.push({ socket, name });
    console.log(`[Queue] ${name} joined queue. Queue size: ${this.queue.length}`);

    if (this.queue.length >= 12) {
      if (this.matchmakingTimer) {
        clearTimeout(this.matchmakingTimer);
        this.matchmakingTimer = null;
      }
      this.createMatch();
    } else if (this.queue.length >= 1 && this.queue.length < 12) {
      if (!this.matchmakingTimer) {
        const countdown = Math.max(3, 12 - this.queue.length);
        this.matchmakingTimer = setTimeout(() => {
          this.matchmakingTimer = null;
          this.createMatch();
        }, countdown * 1000);
        console.log(`[Queue] Match starting in ${countdown}s (waiting for more players...)`);
      }
    }
  }

  removeFromQueue(socket: Socket) {
    this.queue = this.queue.filter(q => q.socket.id !== socket.id);
  }

  removePlayer(socketId: string) {
    this.queue = this.queue.filter(q => q.socket.id !== socketId);
    const matchId = this.playerMatchMap.get(socketId);
    if (matchId) {
      const match = this.matches.get(matchId);
      if (match) {
        const player = match.players.get(socketId);
        if (player) {
          player.connected = false;
          this.io.to(matchId).emit(ServerEvent.PlayerLeft, { id: socketId });
        }
      }
    }
  }

  handlePlayerInput(socketId: string, input: PlayerInput) {
    const matchId = this.playerMatchMap.get(socketId);
    if (!matchId) return;
    const match = this.matches.get(matchId);
    if (!match) return;

    const player = match.players.get(socketId);
    if (!player || player.isAI) return;

    if (player.physics.stamina < PLAYER_PHYSICS.STAMINA_MIN_TO_SPRINT) {
      input.sprint = false;
    }

    match.lastInputs.set(socketId, input);
  }

  switchPlayer(socketId: string, newPlayerId: string) {
    const matchId = this.playerMatchMap.get(socketId);
    if (!matchId) return;
    const match = this.matches.get(matchId);
    if (!match) return;

    const player = match.players.get(newPlayerId);
    if (!player || player.team !== match.players.get(socketId)?.team) return;

    this.playerMatchMap.set(socketId, newPlayerId);
    this.io.to(socketId).emit(ServerEvent.MatchStateUpdate, this.getStateForPlayer(match, socketId));
    this.io.to(socketId).emit('switch_confirmed', { playerId: newPlayerId });
  }

  handleTeamMode(socketId: string, mode: TeamMode) {
    const matchId = this.playerMatchMap.get(socketId);
    if (!matchId) return;
    const match = this.matches.get(matchId);
    if (!match) return;

    const player = match.players.get(socketId);
    if (!player) return;

    match.teamMode[player.team] = mode;

    for (const [, p] of match.players) {
      if (p.team === player.team) {
        this.io.to(p.id).emit(ServerEvent.TeamModeUpdate, { team: player.team, mode });
      }
    }
  }

  private createMatch() {
    matchCounter++;
    const matchId = `match_${matchCounter}`;

    const positions: Position[] = ['GK', 'DF', 'DF', 'MF', 'MF', 'FW'];
    const teamCounts = new Map<Team, number>();

    const match: Match = {
      id: matchId,
      state: MatchState.Kickoff,
      config: {
        maxGoals: 5,
        timeLimitSeconds: 300,
        teams: 2,
        playersPerTeam: 6,
      },
      players: new Map(),
      ball: {
        position: { x: 0, y: BALL.RADIUS, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        spin: { x: 0, y: 0, z: 0 },
        lastTouchBy: null,
        lastTouchTeam: null,
      },
      blueScore: 0,
      redScore: 0,
      elapsedSeconds: 0,
      kickoffTimer: 3,
      lastInputs: new Map(),
      lastUpdateTime: Date.now(),
      tickRate: 30,
      tickAccumulator: 0,
      goalScoredTimer: 0,
      ended: false,
      playerControlMap: new Map(),
      teamMode: { blue: 'normal', red: 'normal' },
    };

    this.queue.forEach((q) => {
      this.playerMatchMap.set(q.socket.id, matchId);
    });

    for (let i = 0; i < 12; i++) {
      const playerTeam: Team = i < 6 ? Team.Blue : Team.Red;
      const teamIndex = i < 6 ? i : i - 6;
      const qIndex = this.queue.findIndex((q, idx) => {
        const playersInTeam = idx < 6 ? playerTeam === Team.Blue : playerTeam === Team.Red;
        return playersInTeam;
      });

      const isHuman = i < this.queue.length;
      const socketId = isHuman ? this.queue[i].socket.id : `ai_${matchId}_${i}`;
      const playerName = isHuman ? this.queue[i].name : `AI_${teamIndex + 1}`;

      const count = teamCounts.get(playerTeam) || 0;
      teamCounts.set(playerTeam, count + 1);
      const pos = this.getFormationPosition(playerTeam, teamIndex);

      const playerState: PlayerState = {
        id: socketId,
        name: playerName,
        team: playerTeam,
        isAI: !isHuman,
        physics: {
          position: pos,
          velocity: { x: 0, y: 0, z: 0 },
          rotation: { x: 0, y: playerTeam === Team.Blue ? 0 : Math.PI, z: 0 },
          angularVelocity: { x: 0, y: 0, z: 0 },
          sprint: false,
          stamina: PLAYER_PHYSICS.STAMINA_MAX,
          isGrounded: true,
          animationState: 'idle',
          animationTime: 0,
        },
        connected: isHuman,
        jerseyNumber: teamIndex + 1,
        position: positions[teamIndex] || 'MF',
        hasBall: false,
      };

      match.players.set(playerState.id, playerState);

      if (isHuman) {
        this.queue[i].socket.join(matchId);
        this.playerMatchMap.set(socketId, matchId);
      }
    }

    this.queue = [];
    this.matches.set(matchId, match);

    this.resetPositions(match);
    this.startKickoffCountdown(match);

    match.players.forEach((player) => {
      if (player.connected) {
        const socket = this.findSocket(player.id);
        if (socket) {
          socket.emit(ServerEvent.MatchFound, {
            matchId,
            config: match.config,
            teamMode: { blue: 'normal', red: 'normal' },
            playerId: player.id,
          });
        }
      }
    });

    console.log(`[Match] Created match ${matchId} with ${this.queue.length} players`);
  }

  private findSocket(playerId: string): Socket | null {
    const sockets = this.io.sockets.sockets;
    for (const [, socket] of sockets) {
      if (socket.id === playerId) return socket;
    }
    return null;
  }

  private startKickoffCountdown(match: Match) {
    match.state = MatchState.Kickoff;
    match.kickoffTimer = 3;
    this.broadcastState(match);

    const interval = setInterval(() => {
      match.kickoffTimer--;
      this.io.to(match.id).emit(ServerEvent.MatchCountdown, { time: match.kickoffTimer });

      if (match.kickoffTimer <= 0) {
        clearInterval(interval);
        match.state = MatchState.Playing;
        this.broadcastState(match);
      }
    }, 1000);
  }

  private tick() {
    this.matches.forEach((match) => {
      if (match.state !== MatchState.Playing && match.state !== MatchState.Kickoff) return;

      const now = Date.now();
      const dt = Math.min((now - match.lastUpdateTime) / 1000, 0.05);
      match.lastUpdateTime = now;

      if (match.state === MatchState.Playing) {
        match.elapsedSeconds += dt;

        if (match.config.timeLimitSeconds && match.elapsedSeconds >= match.config.timeLimitSeconds) {
          this.endMatch(match);
          return;
        }

        this.simulateAI(match, dt);
        this.simulatePlayers(match, dt);
      }

      this.simulateBall(match, dt);
      this.checkBallInteractions(match);
      this.broadcastState(match);
    });
  }

  private simulateBall(match: Match, dt: number) {
    const ball = match.ball;
    ball.velocity.y -= 9.81 * dt;

    ball.position.x += ball.velocity.x * dt;
    ball.position.y += ball.velocity.y * dt;
    ball.position.z += ball.velocity.z * dt;

    const spinFactor = BALL.SPIN_FACTOR;
    ball.velocity.x += ball.spin.y * spinFactor * dt;
    ball.velocity.z -= ball.spin.x * spinFactor * dt;

    if (ball.position.y < BALL.RADIUS) {
      ball.position.y = BALL.RADIUS;
      ball.velocity.y *= -BALL.BOUNCE;
      ball.velocity.x *= (1 - BALL.GROUND_ROLLING_FRICTION * dt);
      ball.velocity.z *= (1 - BALL.GROUND_ROLLING_FRICTION * dt);
      ball.spin.x *= 0.9;
      ball.spin.y *= 0.9;
      ball.spin.z *= 0.9;
    }

    ball.velocity.x *= (1 - BALL.AIR_RESISTANCE * dt);
    ball.velocity.z *= (1 - BALL.AIR_RESISTANCE * dt);

    const halfLength = FIELD.LENGTH / 2;
    const halfWidth = FIELD.WIDTH / 2;

    const inGoalX = Math.abs(ball.position.x) > halfLength - FIELD.GOAL_DEPTH;
    const inGoalZ = Math.abs(ball.position.z) < FIELD.GOAL_WIDTH / 2;
    const inGoalY = ball.position.y < FIELD.GOAL_HEIGHT;

    if (inGoalX && inGoalZ && inGoalY) {
      const scoringTeam = ball.position.x > 0 ? Team.Red : Team.Blue;
      this.handleGoal(match, scoringTeam);
      return;
    }

    if (Math.abs(ball.position.x) > halfLength) {
      ball.position.x = Math.sign(ball.position.x) * halfLength;
      ball.velocity.x *= -BALL.BOUNCE;
    }
    if (Math.abs(ball.position.z) > halfWidth) {
      ball.position.z = Math.sign(ball.position.z) * halfWidth;
      ball.velocity.z *= -BALL.BOUNCE;
    }
  }

  private checkBallInteractions(match: Match) {
    const ball = match.ball;
    const ballPos = ball.position;

    for (const [, player] of match.players) {
      const pPos = player.physics.position;
      const dx = pPos.x - ballPos.x;
      const dz = pPos.z - ballPos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const minDist = PLAYER_PHYSICS.DRIBBLE_DISTANCE + BALL.RADIUS;

      if (dist < minDist && dist > 0.01) {
        const nx = dx / dist;
        const nz = dz / dist;

        if (player.hasBall) {
          const overlap = minDist - dist;
          ball.position.x = pPos.x - nx * minDist;
          ball.position.z = pPos.z - nz * minDist;
          const ballFollowSpeed = 0.3;
          ball.velocity.x += (ball.position.x - ballPos.x) * ballFollowSpeed;
          ball.velocity.z += (ball.position.z - ballPos.z) * ballFollowSpeed;
        } else {
          const overlap = minDist - dist;
          ball.position.x += nx * overlap;
          ball.position.z += nz * overlap;

          const pSpeed = Math.sqrt(
            player.physics.velocity.x ** 2 + player.physics.velocity.z ** 2,
          );
          const hitForce = Math.min(15, pSpeed * 0.4 + 2);
          ball.velocity.x += nx * hitForce;
          ball.velocity.z += nz * hitForce;
          if (ball.position.y < 0.5) {
            ball.velocity.y = Math.abs(player.physics.velocity.y) * 0.3 + 0.5;
          }
          ball.lastTouchBy = player.id;
          ball.lastTouchTeam = player.team;
        }
      }
    }
  }

  private simulatePlayers(match: Match, dt: number) {
    match.players.forEach((player) => {
      const input = match.lastInputs.get(player.id);
      if (!input && !player.isAI) return;
      if (!input) return;

      const physics = player.physics;
      const isBlue = player.team === Team.Blue;
      const dir = isBlue ? 1 : -1;

      const isSprinting = input.sprint && physics.stamina > PLAYER_PHYSICS.STAMINA_MIN_TO_SPRINT;
      const maxSpeed = isSprinting ? PLAYER_PHYSICS.SPRINT_SPEED : PLAYER_PHYSICS.RUN_SPEED;
      const accel = isSprinting ? PLAYER_PHYSICS.SPRINT_ACCELERATION : PLAYER_PHYSICS.ACCELERATION;

      if (isSprinting) {
        physics.stamina = Math.max(0, physics.stamina - PLAYER_PHYSICS.STAMINA_DRAIN * dt);
      } else {
        physics.stamina = Math.min(PLAYER_PHYSICS.STAMINA_MAX, physics.stamina + PLAYER_PHYSICS.STAMINA_REGEN * dt);
      }

      const currentSpeed = Math.sqrt(physics.velocity.x ** 2 + physics.velocity.z ** 2);

      if (Math.abs(input.throttle) > 0.1) {
        const forwardX = Math.sin(physics.rotation.y) * dir;
        const forwardZ = Math.cos(physics.rotation.y) * dir;

        physics.velocity.x += forwardX * accel * input.throttle * dt;
        physics.velocity.z += forwardZ * accel * input.throttle * dt;
      }

      if (input.throttle < 0) {
        physics.velocity.x *= (1 - PLAYER_PHYSICS.DECELERATION * dt);
        physics.velocity.z *= (1 - PLAYER_PHYSICS.DECELERATION * dt);
      }

      if (Math.abs(input.steer) > 0.1 && currentSpeed > 0.3) {
        const turnSpeed = isSprinting ? PLAYER_PHYSICS.TURN_SPEED_SPRINT : PLAYER_PHYSICS.TURN_SPEED;
        physics.rotation.y += turnSpeed * input.steer * dt * dir;
      }

      const friction = isSprinting ? 0.5 : 1.5;
      physics.velocity.x *= (1 - friction * dt);
      physics.velocity.z *= (1 - friction * dt);

      if (currentSpeed > maxSpeed) {
        const scale = maxSpeed / currentSpeed;
        physics.velocity.x *= scale;
        physics.velocity.z *= scale;
      }

      physics.position.x += physics.velocity.x * dt;
      physics.position.z += physics.velocity.z * dt;

      if (input.kick || input.pass || input.throughPass) {
        this.performKick(player, input, match);
      }

      if (player.hasBall) {
        this.dribbleBall(player, match, dt);
      }

      this.checkPossession(player, match);

      const halfLength = FIELD.LENGTH / 2 - 0.5;
      const halfWidth = FIELD.WIDTH / 2 - 0.5;
      if (Math.abs(physics.position.x) > halfLength) {
        physics.position.x = Math.sign(physics.position.x) * halfLength;
        physics.velocity.x *= -0.3;
      }
      if (Math.abs(physics.position.z) > halfWidth) {
        physics.position.z = Math.sign(physics.position.z) * halfWidth;
        physics.velocity.z *= -0.3;
      }
    });
  }

  private performKick(player: PlayerState, input: PlayerInput, match: Match) {
    const ball = match.ball;
    const pPos = player.physics.position;
    const dx = pPos.x - ball.position.x;
    const dz = pPos.z - ball.position.z;
    const dist = Math.sqrt(dx * dx + dz * dz);

    if (dist > PLAYER_PHYSICS.KICK_RANGE) return;

    let kickSpeed: number;
    let kickY: number;
    let forwardX: number;
    let forwardZ: number;

    if (input.kickDirection) {
      const kd = input.kickDirection;
      const kMag = Math.sqrt(kd.x * kd.x + kd.z * kd.z);
      if (kMag > 0.01) {
        forwardX = kd.x / kMag;
        forwardZ = kd.z / kMag;
      } else {
        forwardX = 0;
        forwardZ = 1;
      }
    } else {
      const dir = player.team === Team.Blue ? 1 : -1;
      forwardX = Math.sin(player.physics.rotation.y) * dir;
      forwardZ = Math.cos(player.physics.rotation.y) * dir;
    }

    if (input.throughPass) {
      kickSpeed = PLAYER_PHYSICS.THROUGH_PASS_SPEED;
      kickY = 2 + Math.random() * 0.5;
    } else if (input.pass) {
      kickSpeed = PLAYER_PHYSICS.PASS_SPEED;
      kickY = 0.5;
    } else if (input.kick) {
      const speed = Math.sqrt(
        player.physics.velocity.x ** 2 + player.physics.velocity.z ** 2,
      );
      const chargeRatio = Math.min(1, speed / PLAYER_PHYSICS.SPRINT_SPEED);
      kickSpeed = PLAYER_PHYSICS.SHOT_MIN_SPEED + (PLAYER_PHYSICS.SHOT_MAX_SPEED - PLAYER_PHYSICS.SHOT_MIN_SPEED) * chargeRatio;
      kickY = 1 + chargeRatio * 2;
    } else {
      kickSpeed = PLAYER_PHYSICS.PASS_SPEED;
      kickY = 0.5;
    }

    ball.velocity.x = forwardX * kickSpeed;
    ball.velocity.z = forwardZ * kickSpeed;
    ball.velocity.y = kickY;

    ball.spin.x = (Math.random() - 0.5) * kickSpeed * BALL.SPIN_FACTOR;
    ball.spin.y = (Math.random() - 0.5) * kickSpeed * BALL.SPIN_FACTOR;
    ball.spin.z = (Math.random() - 0.5) * kickSpeed * BALL.SPIN_FACTOR;

    ball.lastTouchBy = player.id;
    ball.lastTouchTeam = player.team;
    player.hasBall = false;

    const pushOut = 1.5;
    ball.position.x += forwardX * pushOut;
    ball.position.z += forwardZ * pushOut;
  }

  private dribbleBall(player: PlayerState, match: Match, dt: number) {
    const ball = match.ball;
    const speed = Math.sqrt(
      player.physics.velocity.x ** 2 + player.physics.velocity.z ** 2,
    );
    if (speed < 0.5) return;

    const dir = player.team === Team.Blue ? 1 : -1;
    const forwardX = Math.sin(player.physics.rotation.y) * dir;
    const forwardZ = Math.cos(player.physics.rotation.y) * dir;

    const targetX = player.physics.position.x + forwardX * PLAYER_PHYSICS.DRIBBLE_DISTANCE;
    const targetZ = player.physics.position.z + forwardZ * PLAYER_PHYSICS.DRIBBLE_DISTANCE;

    const lerpSpeed = Math.min(1, 10 * dt);
    ball.position.x += (targetX - ball.position.x) * lerpSpeed;
    ball.position.z += (targetZ - ball.position.z) * lerpSpeed;
    ball.position.y = BALL.RADIUS;

    ball.velocity.x = forwardX * speed * 0.5;
    ball.velocity.z = forwardZ * speed * 0.5;
    ball.velocity.y = 0;
  }

  private checkPossession(player: PlayerState, match: Match) {
    const ball = match.ball;
    const pPos = player.physics.position;
    const dx = pPos.x - ball.position.x;
    const dz = pPos.z - ball.position.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    const takeDist = PLAYER_PHYSICS.DRIBBLE_DISTANCE + BALL.RADIUS;

    if (dist < takeDist && match.state === MatchState.Playing) {
      for (const [, other] of match.players) {
        if (other.id !== player.id) {
          other.hasBall = false;
        }
      }
      player.hasBall = true;
      ball.lastTouchBy = player.id;
      ball.lastTouchTeam = player.team;
    }
  }

  private simulateAI(match: Match, dt: number) {
    match.players.forEach((player) => {
      if (!player.isAI) return;
      const inputs = AIController.getAIInput(player, match, match.teamMode[player.team]);
      match.lastInputs.set(player.id, inputs);
    });
  }

  private handleGoal(match: Match, scoringTeam: Team) {
    if (scoringTeam === Team.Blue) match.blueScore++;
    else match.redScore++;

    match.state = MatchState.GoalScored;
    match.goalScoredTimer = 3;

    for (const [, player] of match.players) {
      player.hasBall = false;
    }

    const scorer = match.ball.lastTouchBy;
    this.io.to(match.id).emit(ServerEvent.GoalScored, {
      team: scoringTeam,
      blueScore: match.blueScore,
      redScore: match.redScore,
      scorer,
    });

    if (match.config.maxGoals && (match.blueScore >= match.config.maxGoals || match.redScore >= match.config.maxGoals)) {
      setTimeout(() => this.endMatch(match), 3000);
    } else {
      setTimeout(() => {
        this.resetPositions(match);
        this.startKickoffCountdown(match);
      }, 3000);
    }

    this.broadcastState(match);
  }

  private endMatch(match: Match) {
    match.state = MatchState.Ended;
    match.ended = true;
    this.broadcastState(match);

    this.io.to(match.id).emit(ServerEvent.MatchEnd, {
      blueScore: match.blueScore,
      redScore: match.redScore,
      winner: match.blueScore > match.redScore ? Team.Blue :
              match.redScore > match.blueScore ? Team.Red : null,
    });
  }

  private getFormationPosition(team: Team, index: number): { x: number; y: number; z: number } {
    const isBlue = team === Team.Blue;
    const direction = isBlue ? 1 : -1;
    const fieldLengthHalf = FIELD.LENGTH / 2 - 5;

    const positions: [number, number][] = [
      [fieldLengthHalf * direction * -0.95, 0],
      [fieldLengthHalf * direction * -0.55, -12],
      [fieldLengthHalf * direction * -0.55, 12],
      [fieldLengthHalf * direction * -0.15, -8],
      [fieldLengthHalf * direction * -0.15, 8],
      [fieldLengthHalf * direction * 0.3, 0],
    ];

    const pos = positions[index] || positions[5];
    return { x: pos[0], y: 0.5, z: pos[1] };
  }

  private resetPositions(match: Match) {
    let blueIdx = 0;
    let redIdx = 0;

    match.players.forEach((player) => {
      if (player.team === Team.Blue) {
        const pos = this.getFormationPosition(Team.Blue, blueIdx);
        player.physics.position = { ...pos };
        player.physics.rotation = { x: 0, y: 0, z: 0 };
        player.physics.velocity = { x: 0, y: 0, z: 0 };
        player.physics.angularVelocity = { x: 0, y: 0, z: 0 };
        player.physics.stamina = PLAYER_PHYSICS.STAMINA_MAX;
        player.hasBall = false;
        blueIdx++;
      } else {
        const pos = this.getFormationPosition(Team.Red, redIdx);
        player.physics.position = { ...pos };
        player.physics.rotation = { x: 0, y: Math.PI, z: 0 };
        player.physics.velocity = { x: 0, y: 0, z: 0 };
        player.physics.angularVelocity = { x: 0, y: 0, z: 0 };
        player.physics.stamina = PLAYER_PHYSICS.STAMINA_MAX;
        player.hasBall = false;
        redIdx++;
      }
    });

    match.ball = {
      position: { x: 0, y: BALL.RADIUS, z: 0 },
      velocity: { x: 0, y: 0, z: 0 },
      spin: { x: 0, y: 0, z: 0 },
      lastTouchBy: null,
      lastTouchTeam: null,
    };
  }

  private getStateForPlayer(match: Match, playerId: string) {
    return {
      id: match.id,
      state: match.state,
      players: this.serializePlayers(match),
      ball: match.ball,
      blueScore: match.blueScore,
      redScore: match.redScore,
      elapsedSeconds: match.elapsedSeconds,
    };
  }

  private broadcastState(match: Match) {
    const state = {
      id: match.id,
      state: match.state,
      players: this.serializePlayers(match),
      ball: match.ball,
      blueScore: match.blueScore,
      redScore: match.redScore,
      elapsedSeconds: match.elapsedSeconds,
      kickoffTimer: match.kickoffTimer,
    };

    this.io.to(match.id).emit(ServerEvent.MatchStateUpdate, state);
  }

  private serializePlayers(match: Match): Record<string, PlayerState> {
    const obj: Record<string, PlayerState> = {};
    match.players.forEach((p, id) => {
      obj[id] = p;
    });
    return obj;
  }

  getMatchForPlayer(playerId: string): Match | undefined {
    const matchId = this.playerMatchMap.get(playerId);
    if (!matchId) return undefined;
    return this.matches.get(matchId);
  }

  getPlayerMatchMap(): Map<string, string> {
    return this.playerMatchMap;
  }

  sendMatchInfo(socket: Socket) {
    const matchId = this.playerMatchMap.get(socket.id);
    if (!matchId) return;
    const match = this.matches.get(matchId);
    if (!match) return;
    socket.emit(ServerEvent.MatchStateUpdate, this.getStateForPlayer(match, socket.id));
  }

  handleChat(socketId: string, msg: string) {
    const matchId = this.playerMatchMap.get(socketId);
    if (!matchId) return;
    const match = this.matches.get(matchId);
    if (!match) return;
    const player = match.players.get(socketId);
    if (!player) return;
    this.io.to(matchId).emit('chat_message', { id: socketId, name: player.name, msg });
  }

  createPracticeMatch(socket: Socket, teamColor: 'blue' | 'red') {
    matchCounter++;
    const matchId = `practice_${matchCounter}`;
    const playerTeam = teamColor === 'blue' ? Team.Blue : Team.Red;
    const positions: Position[] = ['GK', 'DF', 'DF', 'MF', 'MF', 'FW'];

    const match: Match = {
      id: matchId,
      state: MatchState.Kickoff,
      config: {
        maxGoals: 5,
        timeLimitSeconds: 300,
        teams: 2,
        playersPerTeam: 6,
      },
      players: new Map(),
      ball: {
        position: { x: 0, y: BALL.RADIUS, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        spin: { x: 0, y: 0, z: 0 },
        lastTouchBy: null,
        lastTouchTeam: null,
      },
      blueScore: 0,
      redScore: 0,
      elapsedSeconds: 0,
      kickoffTimer: 3,
      lastInputs: new Map(),
      lastUpdateTime: Date.now(),
      tickRate: 30,
      tickAccumulator: 0,
      goalScoredTimer: 0,
      ended: false,
      playerControlMap: new Map(),
      teamMode: { blue: 'normal', red: 'normal' },
    };

    for (let i = 0; i < 12; i++) {
      const team: Team = i < 6 ? Team.Blue : Team.Red;
      const teamIndex = i < 6 ? i : i - 6;
      const isHuman = i === 0 && team === playerTeam;
      const pId = isHuman ? socket.id : `ai_${matchId}_${i}`;
      const pName = isHuman ? 'You' : `AI_${teamIndex + 1}`;
      const pos = this.getFormationPosition(team, teamIndex);

      const playerState: PlayerState = {
        id: pId,
        name: pName,
        team,
        isAI: !isHuman,
        physics: {
          position: pos,
          velocity: { x: 0, y: 0, z: 0 },
          rotation: { x: 0, y: team === Team.Blue ? 0 : Math.PI, z: 0 },
          angularVelocity: { x: 0, y: 0, z: 0 },
          sprint: false,
          stamina: PLAYER_PHYSICS.STAMINA_MAX,
          isGrounded: true,
          animationState: 'idle',
          animationTime: 0,
        },
        connected: isHuman,
        jerseyNumber: teamIndex + 1,
        position: positions[teamIndex] || 'MF',
        hasBall: false,
      };

      match.players.set(pId, playerState);
    }

    this.playerMatchMap.set(socket.id, matchId);
    socket.join(matchId);
    this.matches.set(matchId, match);

    this.resetPositions(match);
    this.startKickoffCountdown(match);

    socket.emit(ServerEvent.MatchFound, {
      matchId,
      config: match.config,
      teamMode: { blue: 'normal', red: 'normal' },
      playerId: socket.id,
    });

    console.log(`[Practice] Created practice match ${matchId} for ${socket.id}`);
  }

  createMatchFromRoom(hostId: string, guestId: string, hostName: string, guestName: string): string | null {
    matchCounter++;
    const matchId = `room_${matchCounter}`;
    const positions: Position[] = ['GK', 'DF', 'DF', 'MF', 'MF', 'FW'];

    const match: Match = {
      id: matchId,
      state: MatchState.Kickoff,
      config: {
        maxGoals: 5,
        timeLimitSeconds: 300,
        teams: 2,
        playersPerTeam: 6,
      },
      players: new Map(),
      ball: {
        position: { x: 0, y: BALL.RADIUS, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        spin: { x: 0, y: 0, z: 0 },
        lastTouchBy: null,
        lastTouchTeam: null,
      },
      blueScore: 0,
      redScore: 0,
      elapsedSeconds: 0,
      kickoffTimer: 3,
      lastInputs: new Map(),
      lastUpdateTime: Date.now(),
      tickRate: 30,
      tickAccumulator: 0,
      goalScoredTimer: 0,
      ended: false,
      playerControlMap: new Map(),
      teamMode: { blue: 'normal', red: 'normal' },
    };

    for (let i = 0; i < 12; i++) {
      const team: Team = i < 6 ? Team.Blue : Team.Red;
      const teamIndex = i < 6 ? i : i - 6;
      const isHost = i === 0 && team === Team.Blue;
      const isGuest = i === 0 && team === Team.Red;
      const isHuman = (isHost && i === 0) || (isGuest && i === 6);
      let pId: string;
      let pName: string;

      if (i === 0) {
        pId = hostId;
        pName = hostName;
      } else if (i === 6) {
        pId = guestId;
        pName = guestName;
      } else {
        pId = `ai_${matchId}_${i}`;
        pName = `AI_${teamIndex + 1}`;
      }

      const pos = this.getFormationPosition(team, teamIndex);
      const playerState: PlayerState = {
        id: pId,
        name: pName,
        team,
        isAI: !(i === 0 || i === 6),
        physics: {
          position: pos,
          velocity: { x: 0, y: 0, z: 0 },
          rotation: { x: 0, y: team === Team.Blue ? 0 : Math.PI, z: 0 },
          angularVelocity: { x: 0, y: 0, z: 0 },
          sprint: false,
          stamina: PLAYER_PHYSICS.STAMINA_MAX,
          isGrounded: true,
          animationState: 'idle',
          animationTime: 0,
        },
        connected: i === 0 || i === 6,
        jerseyNumber: teamIndex + 1,
        position: positions[teamIndex] || 'MF',
        hasBall: false,
      };

      match.players.set(pId, playerState);
    }

    this.matches.set(matchId, match);
    this.resetPositions(match);
    this.startKickoffCountdown(match);

    match.players.forEach((player) => {
      if (player.connected) {
        this.playerMatchMap.set(player.id, matchId);
      }
    });

    return matchId;
  }

  dispose() {
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
    }
  }
}
