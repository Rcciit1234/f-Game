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
  private lastTime = 0;
  private time = 0;
  private lastState = '';
  private stateEntryTime = 0;
  private stars: {x: number; y: number; baseAlpha: number; phase: number; speed: number}[] = [];

  constructor(container: HTMLElement) {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'headball-canvas';
    this.canvas.style.cssText = 'display:block;width:100%;height:100%;position:absolute;inset:0';
    this.ctx = this.canvas.getContext('2d')!;
    container.appendChild(this.canvas);
    this.resize();
    window.addEventListener('resize', () => this.resize());

    for (let i = 0; i < 60; i++) {
      this.stars.push({
        x: Math.random() * HB_FIELD.WIDTH,
        y: Math.random() * HB_FIELD.GROUND_Y * 0.35 + 10,
        baseAlpha: 0.08 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 2,
      });
    }
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

    const now = performance.now();
    const dt = this.lastTime ? Math.min((now - this.lastTime) / 1000, 0.05) : 0.016;
    this.lastTime = now;
    this.time += dt;

    if (state.state !== this.lastState) {
      this.lastState = state.state;
      this.stateEntryTime = this.time;
    }

    ctx.clearRect(0, 0, w, h);

    ctx.save();
    const ox = (w - HB_FIELD.WIDTH * this.scale) / 2;
    const oy = (h - HB_FIELD.HEIGHT * this.scale) / 2;
    ctx.translate(ox, oy);
    ctx.scale(this.scale, this.scale);

    this.drawBackground(ctx);
    this.drawStands(ctx);
    this.drawField(ctx);
    this.drawGoals(ctx, state);
    this.drawBall(ctx, state.ball);
    if (state.homePlayer) this.drawPlayer(ctx, state.homePlayer, false);
    if (state.awayPlayer) this.drawPlayer(ctx, state.awayPlayer, true);
    this.drawScoreboard(ctx, state);

    ctx.restore();

    if (state.state === 'countdown') {
      this.drawCountdown(ctx, w, h, state);
    } else if (state.state === 'goal_scored') {
      this.drawGoalCelebration(ctx, w, h);
    } else if (state.state === 'ended') {
      this.drawMatchEnd(ctx, w, h, state);
    }
  }

  private drawBackground(ctx: CanvasRenderingContext2D) {
    const grad = ctx.createLinearGradient(0, 0, 0, HB_FIELD.GROUND_Y);
    grad.addColorStop(0, COLORS.sky1);
    grad.addColorStop(1, COLORS.sky2);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, HB_FIELD.WIDTH, HB_FIELD.GROUND_Y);

    for (const star of this.stars) {
      const twinkle = 0.5 + 0.5 * Math.sin(this.time * star.speed + star.phase);
      const alpha = star.baseAlpha * twinkle;
      if (alpha < 0.02) continue;
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      const r = 0.5 + star.baseAlpha * 2;
      ctx.beginPath();
      ctx.arc(star.x, star.y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawStands(ctx: CanvasRenderingContext2D) {
    const standW = 50;
    const standH = 90;
    const baseY = HB_FIELD.GOAL_Y - standH + 10;

    for (const side of [-1, 1]) {
      const sx = side > 0 ? HB_FIELD.WIDTH - standW / 2 - 5 : -standW / 2 + 5;

      const grad = ctx.createLinearGradient(sx, baseY, sx, baseY + standH);
      grad.addColorStop(0, '#16213e');
      grad.addColorStop(1, '#1a1a2e');
      ctx.fillStyle = grad;
      ctx.fillRect(sx, baseY, standW, standH);

      ctx.fillStyle = 'rgba(15,52,96,0.25)';
      ctx.fillRect(sx - 5, baseY, standW + 10, 6);

      const crowdColors = ['#2a2a3e', '#1e2a4e', '#3a1a2e', '#2a3a1e', '#2a2a2a', '#1e3a4e'];
      for (let row = 0; row < 6; row++) {
        const ry = baseY + standH - 8 - row * 13;
        const offset = (row % 2) * 2;
        for (let col = 0; col < 10; col++) {
          ctx.fillStyle = crowdColors[(row + col) % crowdColors.length];
          ctx.fillRect(sx + 4 + col * 4 + offset, ry, 2, 3);
        }
      }
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
    const bodyBot = y;
    const dir = player.facingRight ? 1 : -1;

    ctx.save();
    ctx.translate(x, bodyBot);

    const legAnim = Math.sin(player.animFrame) * 6;

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
    const isGoal = state.state === 'goal_scored';
    const elapsed = this.time - this.stateEntryTime;
    const goalFlash = isGoal ? Math.max(0, 1 - elapsed / 0.6) : 0;

    const pulse = 1 + 0.03 * Math.sin(this.time * 2);

    ctx.save();
    ctx.translate(mx, 24);

    ctx.fillStyle = `rgba(0,0,0,${0.45 + 0.05 * Math.sin(this.time * 1.5)})`;
    ctx.beginPath();
    ctx.roundRect(-80, -16, 160, 32, 8);
    ctx.fill();

    const homeScale = 1 + goalFlash * 0.25;
    const awayScale = 1 + goalFlash * 0.25;

    ctx.save();
    ctx.translate(-6, 0);
    ctx.scale(homeScale, homeScale);
    ctx.fillStyle = isGoal ? '#00f0ff' : '#2563eb';
    ctx.font = `bold ${16}px sans-serif`;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(state.homeScore), 0, 0);
    ctx.restore();

    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(':', 0, 0);

    ctx.save();
    ctx.translate(6, 0);
    ctx.scale(awayScale, awayScale);
    ctx.fillStyle = isGoal ? '#00f0ff' : '#dc2626';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(String(state.awayScore), 0, 0);
    ctx.restore();

    ctx.restore();

    const remaining = Math.max(0, state.matchDuration - state.elapsedSeconds);
    const mins = Math.floor(remaining / 60);
    const secs = Math.floor(remaining % 60);
    const isUrgent = remaining <= 10;

    if (isUrgent) {
      const blink = Math.sin(this.time * 4) > 0;
      ctx.fillStyle = blink ? '#ef4444' : 'rgba(255,255,255,0.6)';
    } else {
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
    }
    ctx.font = `bold ${isUrgent ? 16 : 14}px monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${mins}:${secs.toString().padStart(2, '0')}`, mx, 48);
  }

  private drawCountdown(ctx: CanvasRenderingContext2D, w: number, h: number, state: HBMatchState) {
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.fillRect(0, 0, w, h);

    const cycleTime = (this.time - this.stateEntryTime) % 1.0;
    const number = state.countdownTimer;

    let scale: number;
    if (cycleTime < 0.2) {
      scale = 0.3 + (1.15 - 0.3) * (cycleTime / 0.2);
    } else if (cycleTime < 0.35) {
      const t = (cycleTime - 0.2) / 0.15;
      scale = 1.15 + (1.0 - 1.15) * t;
    } else {
      scale = 1.0;
    }

    const color = number <= 0 ? '#00f0ff' : '#fff';
    const glowSize = number <= 0 ? 60 : 30 + Math.sin(this.time * 3) * 10;

    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.scale(scale, scale);

    ctx.fillStyle = color;
    ctx.font = 'bold 100px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = color;
    ctx.shadowBlur = glowSize;
    ctx.fillText(String(number), 0, 0);
    ctx.shadowBlur = 0;

    ctx.restore();

    const ringRadius = 80;
    const progress = 1 - cycleTime;
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, ringRadius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, ringRadius, -Math.PI / 2, -Math.PI / 2 + progress * Math.PI * 2);
    ctx.stroke();
  }

  private drawGoalCelebration(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const elapsed = this.time - this.stateEntryTime;

    if (elapsed < 0.3) {
      const flashAlpha = 0.2 * (1 - elapsed / 0.3);
      ctx.fillStyle = `rgba(255,255,255,${flashAlpha})`;
      ctx.fillRect(0, 0, w, h);
    }

    let textScale: number;
    let textAlpha: number;
    if (elapsed < 0.4) {
      const t = elapsed / 0.4;
      textScale = 0.3 + (1.15 - 0.3) * t;
      textAlpha = 1;
    } else if (elapsed < 0.6) {
      const t = (elapsed - 0.4) / 0.2;
      textScale = 1.15 + (1.0 - 1.15) * t;
      textAlpha = 1;
    } else {
      textScale = 1.0;
      textAlpha = elapsed > 1.5 ? Math.max(0, 1 - (elapsed - 1.5) / 0.5) : 1;
    }

    const glowPulse = 20 + 15 * Math.sin(this.time * 5);

    ctx.save();
    ctx.globalAlpha = textAlpha;
    ctx.translate(w / 2, h / 2 - 20);

    ctx.scale(textScale, textScale);
    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = glowPulse;
    ctx.fillText('⚽ GOAL!', 0, 0);
    ctx.shadowBlur = 0;

    ctx.restore();
  }

  private drawMatchEnd(ctx: CanvasRenderingContext2D, w: number, h: number, state: HBMatchState) {
    const elapsed = this.time - this.stateEntryTime;

    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 0, w, h);

    const isDraw = state.homeScore === state.awayScore;
    const homeWon = state.homeScore > state.awayScore;

    let mainText: string;
    let subText: string;
    let color: string;
    let emoji: string;

    if (isDraw) {
      mainText = 'DRAW!';
      subText = `${state.homeScore} - ${state.awayScore}`;
      color = '#fff';
      emoji = '🤝';
    } else if (homeWon) {
      mainText = 'HOME WINS!';
      subText = `${state.homeScore} - ${state.awayScore}`;
      color = '#00f0ff';
      emoji = '🏆';
    } else {
      mainText = 'AWAY WINS!';
      subText = `${state.homeScore} - ${state.awayScore}`;
      color = '#00f0ff';
      emoji = '🏆';
    }

    let titleScale: number;
    if (elapsed < 0.5) {
      const t = elapsed / 0.5;
      titleScale = 0 + (1.15 - 0) * t;
    } else if (elapsed < 0.7) {
      const t = (elapsed - 0.5) / 0.2;
      titleScale = 1.15 + (1.0 - 1.15) * t;
    } else {
      titleScale = 1.0;
    }

    const glowPulse = 25 + 15 * Math.sin(this.time * 3);

    ctx.save();
    ctx.translate(w / 2, h / 2 - 30);

    ctx.save();
    ctx.scale(titleScale, titleScale);
    ctx.fillStyle = color;
    ctx.font = 'bold 42px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = color;
    ctx.shadowBlur = glowPulse;
    ctx.fillText(mainText, 0, 0);
    ctx.shadowBlur = 0;
    ctx.restore();

    ctx.fillStyle = color;
    ctx.font = '28px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, 0, -55);

    const scoreAlpha = Math.min(1, Math.max(0, (elapsed - 0.5) / 0.3));
    ctx.globalAlpha = scoreAlpha;
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(subText, 0, 50);

    ctx.restore();
  }

  drawTouchControls() {
    if (!('ontouchstart' in window)) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const s = this.scale;

    const btnR = 35 * this.scale;
    const pad = 20 * this.scale;

    const kickPulse = 1 + 0.05 * Math.sin(this.time * 3);

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
    ctx.save();
    ctx.translate(kickX, kickY);
    ctx.scale(kickPulse, kickPulse);
    ctx.beginPath();
    ctx.arc(0, 0, btnR * 1.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.globalAlpha = 0.25;
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${14 * this.scale}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
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
