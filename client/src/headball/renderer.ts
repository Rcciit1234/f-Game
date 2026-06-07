import { HBPlayerState, HBBallState, HBMatchState, HB_FIELD, HB_PLAYER, HB_BALL } from '../../../shared/headball.js';

const COLORS = {
  sky1: '#0f172a',
  sky2: '#1e293b',
  grass: '#2d8a4e',
  stripe: '#33a055',
  line: 'rgba(255,255,255,0.25)',
  goalPost: '#ffffff',
  goalNet: 'rgba(255,255,255,0.08)',
  goalGlowHome: 'rgba(37,99,235,0.15)',
  goalGlowAway: 'rgba(220,38,38,0.15)',
  stand: '#1a1a2e',
  standUpper: '#16213e',
  roof: 'rgba(15,52,96,0.15)',
};

export class HBRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private scale = 1;

  constructor(container: HTMLElement) {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'headball-canvas';
    this.canvas.style.cssText = 'display:block;width:100%;height:100%;position:absolute;inset:0';
    this.ctx = this.canvas.getContext('2d')!;
    container.appendChild(this.canvas);
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  private resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.canvas.width = w;
    this.canvas.height = h;
    this.scale = Math.min(w / HB_FIELD.WIDTH, h / HB_FIELD.HEIGHT);
  }

  getCanvas() { return this.canvas; }

  render(state: HBMatchState) {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    ctx.save();
    const ox = (w - HB_FIELD.WIDTH * this.scale) / 2;
    const oy = (h - HB_FIELD.HEIGHT * this.scale) / 2;
    ctx.translate(ox, oy);
    ctx.scale(this.scale, this.scale);

    this.drawBackground(ctx);
    this.drawField(ctx);
    this.drawGoals(ctx, state);
    this.drawBall(ctx, state.ball);
    if (state.homePlayer) this.drawPlayer(ctx, state.homePlayer, false);
    if (state.awayPlayer) this.drawPlayer(ctx, state.awayPlayer, true);
    this.drawScoreboard(ctx, state);

    ctx.restore();

    if (state.state === 'countdown') {
      this.drawOverlay(ctx, w, h, String(state.countdownTimer), state.countdownTimer <= 0 ? '#00f0ff' : '#fff', 80);
    }
    if (state.state === 'ended') {
      const isDraw = state.homeScore === state.awayScore;
      const winner = state.homeScore > state.awayScore ? 'HOME' : 'AWAY';
      this.drawOverlay(ctx, w, h, isDraw ? 'DRAW!' : `${winner} WINS!`, isDraw ? '#fff' : '#00f0ff', 36);
    }
  }

  private drawBackground(ctx: CanvasRenderingContext2D) {
    const grad = ctx.createLinearGradient(0, 0, 0, HB_FIELD.GROUND_Y);
    grad.addColorStop(0, COLORS.sky1);
    grad.addColorStop(1, COLORS.sky2);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, HB_FIELD.WIDTH, HB_FIELD.GROUND_Y);

    for (let i = 0; i < 40; i++) {
      const x = Math.random() * HB_FIELD.WIDTH;
      const y = Math.random() * HB_FIELD.GROUND_Y * 0.4;
      ctx.fillStyle = `rgba(255,255,255,${0.1 + Math.random() * 0.3})`;
      ctx.beginPath();
      ctx.arc(x, y, 0.5 + Math.random(), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawField(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = COLORS.grass;
    ctx.fillRect(0, HB_FIELD.GROUND_Y - 4, HB_FIELD.WIDTH, HB_FIELD.HEIGHT - HB_FIELD.GROUND_Y + 4);

    for (let i = 0; i <= 10; i++) {
      if (i % 2 === 0) continue;
      ctx.fillStyle = COLORS.stripe;
      ctx.globalAlpha = 0.08;
      ctx.fillRect(i * (HB_FIELD.WIDTH / 10), HB_FIELD.GROUND_Y - 4, HB_FIELD.WIDTH / 10, HB_FIELD.HEIGHT - HB_FIELD.GROUND_Y + 4);
    }
    ctx.globalAlpha = 1;

    ctx.strokeStyle = COLORS.line;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([]);

    ctx.strokeRect(2, HB_FIELD.GROUND_Y - 4, HB_FIELD.WIDTH - 4, HB_FIELD.HEIGHT - HB_FIELD.GROUND_Y);

    ctx.beginPath();
    ctx.moveTo(HB_FIELD.WIDTH / 2, HB_FIELD.GROUND_Y - 4);
    ctx.lineTo(HB_FIELD.WIDTH / 2, HB_FIELD.HEIGHT);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(HB_FIELD.WIDTH / 2, HB_FIELD.GROUND_Y, 40, 0, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(HB_FIELD.WIDTH / 2, HB_FIELD.GROUND_Y, 3, 0, Math.PI * 2);
    ctx.fillStyle = COLORS.line;
    ctx.fill();
  }

  private drawGoals(ctx: CanvasRenderingContext2D, state: HBMatchState) {
    const postW = HB_FIELD.GOAL_POST_RADIUS * 2;
    const goalH = HB_FIELD.GOAL_HEIGHT;

    for (const side of [-1, 1]) {
      const gx = side > 0 ? HB_FIELD.WIDTH : 0;
      const glowColor = side > 0 ? COLORS.goalGlowAway : COLORS.goalGlowHome;

      ctx.fillStyle = glowColor;
      ctx.fillRect(
        side > 0 ? gx - HB_FIELD.GOAL_DEPTH : gx,
        HB_FIELD.GOAL_Y,
        HB_FIELD.GOAL_DEPTH,
        goalH
      );

      ctx.fillStyle = COLORS.goalPost;
      ctx.fillRect(gx - postW / 2, HB_FIELD.GOAL_Y, postW, goalH);
      if (side > 0) {
        ctx.fillRect(gx - HB_FIELD.GOAL_DEPTH, HB_FIELD.GOAL_Y, postW, goalH);
      } else {
        ctx.fillRect(gx, HB_FIELD.GOAL_Y, postW, goalH);
      }

      ctx.fillRect(gx - HB_FIELD.GOAL_DEPTH / 2 - postW / 4, HB_FIELD.GOAL_Y, HB_FIELD.GOAL_DEPTH + postW / 2, postW);

      ctx.strokeStyle = COLORS.goalNet;
      ctx.lineWidth = 0.5;
      const netW = HB_FIELD.GOAL_DEPTH;
      const netLines = 8;
      for (let i = 0; i <= netLines; i++) {
        const t = i / netLines;
        ctx.beginPath();
        ctx.moveTo(gx, HB_FIELD.GOAL_Y + t * goalH);
        ctx.lineTo(side > 0 ? gx - netW : gx + netW, HB_FIELD.GOAL_Y + t * goalH);
        ctx.stroke();
      }
      for (let i = 0; i <= 6; i++) {
        const t = i / 6;
        ctx.beginPath();
        ctx.moveTo(side > 0 ? gx - netW * t : gx + netW * t, HB_FIELD.GOAL_Y);
        ctx.lineTo(side > 0 ? gx - netW * t : gx + netW * t, HB_FIELD.GOAL_Y + goalH);
        ctx.stroke();
      }
    }
  }

  private drawPlayer(ctx: CanvasRenderingContext2D, player: HBPlayerState, isAway: boolean) {
    const x = player.x;
    const y = player.y;
    const hr = player.headSize;
    const bodyTop = y - HB_PLAYER.BODY_HEIGHT - hr * 2;
    const bodyBot = y;
    const dir = player.facingRight ? 1 : -1;

    ctx.save();
    ctx.translate(x, bodyBot);

    const legAnim = Math.sin(player.animFrame) * 6;
    const isRunning = Math.abs(player.vx) > 20;

    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(-HB_PLAYER.BODY_WIDTH / 3, -6 + legAnim, 4, HB_PLAYER.LEG_LENGTH);
    ctx.fillRect(HB_PLAYER.BODY_WIDTH / 3 - 4, -6 - legAnim, 4, HB_PLAYER.LEG_LENGTH);

    ctx.fillStyle = '#fff';
    ctx.fillRect(-HB_PLAYER.BODY_WIDTH / 3, -6 + legAnim + HB_PLAYER.LEG_LENGTH - 3, 4, 3);
    ctx.fillRect(HB_PLAYER.BODY_WIDTH / 3 - 4, -6 - legAnim + HB_PLAYER.LEG_LENGTH - 3, 4, 3);

    ctx.fillStyle = player.jerseyColor;
    ctx.fillRect(-HB_PLAYER.BODY_WIDTH / 2, -HB_PLAYER.BODY_HEIGHT, HB_PLAYER.BODY_WIDTH, HB_PLAYER.BODY_HEIGHT);

    ctx.fillStyle = '#f0d0b0';
    ctx.fillRect(-HB_PLAYER.BODY_WIDTH / 2 - 2, -HB_PLAYER.BODY_HEIGHT + 6, 4, 8);
    ctx.fillRect(HB_PLAYER.BODY_WIDTH / 2 - 2, -HB_PLAYER.BODY_HEIGHT + 6, 4, 8);

    const kickSwing = player.isKicking ? dir * 8 : 0;
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(dir * (HB_PLAYER.BODY_WIDTH / 2) + kickSwing - 2, -HB_PLAYER.BODY_HEIGHT + 6, 4, 6);

    ctx.translate(0, -HB_PLAYER.BODY_HEIGHT - hr);

    ctx.fillStyle = player.skinColor;
    ctx.beginPath();
    ctx.arc(0, 0, hr, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = player.hairColor;
    ctx.beginPath();
    ctx.ellipse(0, -hr * 0.2, hr * 0.95, hr * 0.55, 0, Math.PI, 0);
    ctx.fill();

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.ellipse(dir * 5, -2, 5, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(dir * 5 - 2, -2, 4, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.arc(dir * 5 + 1, -1, 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#c97a5a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(dir * 4, 3, 3, 0.1, Math.PI - 0.1);
    ctx.stroke();

    ctx.fillStyle = player.jerseyColor;
    ctx.font = `bold ${hr * 0.7}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(player.name.charAt(0).toUpperCase(), 0, -hr * 0.5);

    ctx.restore();
  }

  private drawBall(ctx: CanvasRenderingContext2D, ball: HBBallState) {
    ctx.save();
    ctx.translate(ball.x, ball.y);

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(0, 0, ball.radius + 1, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.arc(0, 0, ball.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(0, -ball.radius * 0.2, ball.radius * 0.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.arc(0, 0, ball.radius * 0.15, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  private drawScoreboard(ctx: CanvasRenderingContext2D, state: HBMatchState) {
    const mx = HB_FIELD.WIDTH / 2;
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.roundRect(mx - 80, 8, 160, 32, 8);
    ctx.fill();

    ctx.fillStyle = '#2563eb';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(state.homeScore), mx - 6, 24);

    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(':', mx, 24);

    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(String(state.awayScore), mx + 6, 24);

    const remaining = Math.max(0, state.matchDuration - state.elapsedSeconds);
    const mins = Math.floor(remaining / 60);
    const secs = Math.floor(remaining % 60);
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${mins}:${secs.toString().padStart(2, '0')}`, mx, 48);
  }

  private drawOverlay(ctx: CanvasRenderingContext2D, w: number, h: number, text: string, color: string, size: number) {
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = color;
    ctx.font = `bold ${size}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = color;
    ctx.shadowBlur = 30;
    ctx.fillText(text, w / 2, h / 2);
    ctx.shadowBlur = 0;
  }

  drawTouchControls() {
    if (!('ontouchstart' in window)) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const s = this.scale;

    const btnR = 35 * this.scale;
    const pad = 20 * this.scale;

    ctx.globalAlpha = 0.25;

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(pad + btnR, h - pad - btnR, btnR, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(pad + btnR * 3 + 10 * this.scale, h - pad - btnR, btnR, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = `${16 * this.scale}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('◀', pad + btnR, h - pad - btnR);
    ctx.fillText('▶', pad + btnR * 3 + 10 * this.scale, h - pad - btnR);

    const kickX = w - pad - btnR;
    const kickY = h - pad - btnR;
    ctx.fillStyle = '#ef4444';
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.arc(kickX, kickY, btnR * 1.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${14 * this.scale}px sans-serif`;
    ctx.fillText('⚽', kickX, kickY);

    const jumpX = w / 2;
    const jumpY = pad + btnR;
    ctx.fillStyle = '#22c55e';
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.arc(jumpX, jumpY, btnR, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = '#fff';
    ctx.fillText('↑', jumpX, jumpY);

    ctx.globalAlpha = 1;
  }
}
