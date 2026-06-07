import { HBPlayerState, HBBallState, HBInput, HBMatchState, HB_FIELD, HB_PLAYER, HB_BALL, HB_MATCH } from '../../../shared/headball.js';
import { updatePlayer, updateBall, performKick } from './physics.js';
import { createPlayer } from './player.js';

export class HBMatch {
  state: HBMatchState;
  private goalScoredTimer = 0;
  private countdownInterval: ReturnType<typeof setInterval> | null = null;
  private onScoreChange?: (home: number, away: number) => void;
  private onStateChange?: (state: string) => void;

  constructor(homeId: string, homeName: string, awayId: string, awayName: string) {
    this.state = {
      id: '',
      state: 'lobby',
      homePlayer: createPlayer(homeId, homeName, 'home'),
      awayPlayer: createPlayer(awayId, awayName, 'away'),
      ball: this.createBall(),
      homeScore: 0,
      awayScore: 0,
      elapsedSeconds: 0,
      countdownTimer: HB_MATCH.COUNTDOWN_SECONDS,
      matchDuration: HB_MATCH.DURATION,
    };
  }

  private createBall(): HBBallState {
    return { x: HB_FIELD.WIDTH / 2, y: HB_FIELD.GROUND_Y - HB_BALL.RADIUS - 10, vx: 0, vy: 0, radius: HB_BALL.RADIUS, lastTouchBy: null, lastTouchTeam: null };
  }

  setCallbacks(onScore: (h: number, a: number) => void, onState: (s: string) => void) {
    this.onScoreChange = onScore;
    this.onStateChange = onState;
  }

  start() {
    this.state.state = 'countdown';
    this.state.countdownTimer = HB_MATCH.COUNTDOWN_SECONDS;
    this.resetPositions();
    this.onStateChange?.('countdown');

    this.countdownInterval = setInterval(() => {
      this.state.countdownTimer--;
      if (this.state.countdownTimer <= 0) {
        clearInterval(this.countdownInterval!);
        this.countdownInterval = null;
        this.state.state = 'playing';
        this.onStateChange?.('playing');
      }
    }, 1000);
  }

  update(dt: number, homeInput: HBInput, awayInput: HBInput) {
    if (this.state.state !== 'playing') {
      if (this.state.state === 'goal_scored') {
        this.goalScoredTimer -= dt;
        if (this.goalScoredTimer <= 0) {
          this.state.state = 'playing';
          this.resetPositions();
        }
      }
      return;
    }

    this.state.elapsedSeconds += dt;

    const h = this.state.homePlayer;
    const a = this.state.awayPlayer;

    updatePlayer(h, homeInput, dt);
    updatePlayer(a, awayInput, dt);

    if (homeInput.kick) performKick(h, this.state.ball, homeInput);
    if (awayInput.kick) performKick(a, this.state.ball, awayInput);

    updateBall(this.state.ball, [h, a], dt);

    this.checkGoal();

    if (this.state.elapsedSeconds >= this.state.matchDuration) {
      this.state.state = 'ended';
      this.onStateChange?.('ended');
    }
  }

  private checkGoal() {
    const ball = this.state.ball;
    const scoring: 'home' | 'away' | null =
      ball.x + ball.radius < 0 && ball.y > HB_FIELD.GOAL_Y && ball.y < HB_FIELD.GROUND_Y ? 'away' :
      ball.x - ball.radius > HB_FIELD.WIDTH && ball.y > HB_FIELD.GOAL_Y && ball.y < HB_FIELD.GROUND_Y ? 'home' : null;

    if (scoring) {
      if (scoring === 'home') this.state.homeScore++;
      else this.state.awayScore++;

      this.onScoreChange?.(this.state.homeScore, this.state.awayScore);

      if (this.state.homeScore >= HB_MATCH.WIN_GOALS || this.state.awayScore >= HB_MATCH.WIN_GOALS) {
        this.state.state = 'ended';
        this.onStateChange?.('ended');
        return;
      }

      this.state.state = 'goal_scored';
      this.goalScoredTimer = HB_MATCH.GOAL_SCORED_PAUSE;
    }
  }

  resetPositions() {
    const h = this.state.homePlayer;
    const a = this.state.awayPlayer;
    h.x = HB_FIELD.WIDTH * 0.25;
    h.y = HB_FIELD.GROUND_Y;
    h.vx = 0; h.vy = 0; h.isGrounded = true;
    a.x = HB_FIELD.WIDTH * 0.75;
    a.y = HB_FIELD.GROUND_Y;
    a.vx = 0; a.vy = 0; a.isGrounded = true;

    const ball = this.state.ball;
    ball.x = HB_FIELD.WIDTH / 2;
    ball.y = HB_FIELD.GROUND_Y - HB_BALL.RADIUS - 10;
    ball.vx = 0; ball.vy = 0;
    ball.lastTouchBy = null;
    ball.lastTouchTeam = null;
  }

  destroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }
}

export function getAIInput(player: HBPlayerState, opponent: HBPlayerState, ball: HBBallState): HBInput {
  const input: HBInput = { left: false, right: false, jump: false, kick: false, kickHold: false };
  const isHome = player.team === 'home';
  const myGoalX = isHome ? 0 : HB_FIELD.WIDTH;
  const oppGoalX = isHome ? HB_FIELD.WIDTH : 0;
  const distToBall = Math.sqrt((player.x - ball.x) ** 2 + (player.y - ball.y) ** 2);
  const ballNearOpponent = Math.sqrt((opponent.x - ball.x) ** 2 + (opponent.y - ball.y) ** 2) < 60;

  if (ball.lastTouchTeam === player.team || distToBall < 40) {
    const goalDir = oppGoalX > player.x ? 1 : -1;
    if (oppGoalX > player.x + 10) {
      input.right = true;
      player.facingRight = true;
    } else if (oppGoalX < player.x - 10) {
      input.left = true;
      player.facingRight = false;
    }

    if (distToBall < HB_PLAYER.KICK_RANGE + HB_BALL.RADIUS + 5) {
      input.kick = true;
      if (ball.y < player.y - 20) input.kickHold = true;
    }

    if (ball.y < player.y - 20 && player.isGrounded && Math.random() < 0.03) {
      input.jump = true;
    }
  } else {
    const dx = ball.x - player.x;
    if (dx > 5) { input.right = true; player.facingRight = true; }
    else if (dx < -5) { input.left = true; player.facingRight = false; }

    if (ball.y < player.y - 30 && player.isGrounded) {
      input.jump = true;
    }

    if (Math.abs(dx) < 30 && Math.random() < 0.02) {
      input.kick = true;
    }
  }

  if (ballNearOpponent && distToBall > 40) {
    const dx = opponent.x - player.x;
    if (dx > 5) { input.right = true; }
    else if (dx < -5) { input.left = true; }
  }

  return input;
}
