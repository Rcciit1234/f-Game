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

interface TrailPoint { x: number; y: number; }
interface Particle { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; color: string; size: number; }
interface Confetti { x: number; y: number; vx: number; vy: number; color: string; rot: number; rv: number; size: number; }
interface RainDrop { x: number; y: number; speed: number; length: number; alpha: number; }

export class HBRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private scale = 1;
  private lastTime = 0;
  private dt = 0.016;
  private time = 0;
  private lastState = '';
  private stateEntryTime = 0;
  private stars: {x: number; y: number; baseAlpha: number; phase: number; speed: number}[] = [];
  private trail: TrailPoint[] = [];
  private particles: Particle[] = [];
  private confetti: Confetti[] = [];
  private confettiSpawned = false;
  private prevKickingHome = false;
  private prevKickingAway = false;
  private kickSparkTime = 0;
  private kickSparkX = 0;
  private kickSparkY = 0;
  private goalParticlesSpawned = false;
  private rain: RainDrop[] = [];
  private prevHomeScore = 0;
  private prevAwayScore = 0;
  private lastScoredBy: 'home' | 'away' | null = null;

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

    for (let i = 0; i < 25; i++) {
      this.rain.push({
        x: Math.random() * HB_FIELD.WIDTH,
        y: Math.random() * HB_FIELD.GROUND_Y,
        speed: 200 + Math.random() * 300,
        length: 5 + Math.random() * 8,
        alpha: 0.01 + Math.random() * 0.02,
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
    this.dt = this.lastTime ? Math.min((now - this.lastTime) / 1000, 0.05) : 0.016;
    this.lastTime = now;
    this.time += this.dt;

    if (state.state !== this.lastState) {
      this.lastState = state.state;
      this.stateEntryTime = this.time;
      if (state.state === 'goal_scored') this.goalParticlesSpawned = false;
      if (state.state === 'ended') this.confettiSpawned = false;
    }

    if (state.homeScore > this.prevHomeScore) this.lastScoredBy = 'home';
    if (state.awayScore > this.prevAwayScore) this.lastScoredBy = 'away';
    this.prevHomeScore = state.homeScore;
    this.prevAwayScore = state.awayScore;

    ctx.clearRect(0, 0, w, h);

    ctx.save();
    const ox = (w - HB_FIELD.WIDTH * this.scale) / 2;
    const oy = (h - HB_FIELD.HEIGHT * this.scale) / 2;
    ctx.translate(ox, oy);
    ctx.scale(this.scale, this.scale);

    this.drawRain(ctx);
    this.drawBackground(ctx);
    this.drawStands(ctx, state);
    this.drawField(ctx);
    this.drawGoals(ctx, state);

    if (state.homePlayer) this.drawShadow(ctx, state.homePlayer.x, state.homePlayer.y, 10);
    if (state.awayPlayer) this.drawShadow(ctx, state.awayPlayer.x, state.awayPlayer.y, 10);
    this.drawShadow(ctx, state.ball.x, state.ball.y, state.ball.radius * 0.6);

    this.drawBall(ctx, state.ball);
    if (state.homePlayer) this.drawPlayer(ctx, state.homePlayer, false, state.ball, state);
    if (state.awayPlayer) this.drawPlayer(ctx, state.awayPlayer, true, state.ball, state);
    this.drawScoreboard(ctx, state);

    ctx.restore();

    this.updateParticles(ctx, w, h);

    if (state.state === 'countdown') {
      this.drawCountdown(ctx, w, h, state);
    } else if (state.state === 'goal_scored') {
      this.drawGoalCelebration(ctx, w, h);
    } else if (state.state === 'ended') {
      this.drawMatchEnd(ctx, w, h, state, this.dt);
    }
  }

  private drawRain(ctx: CanvasRenderingContext2D) {
    for (const drop of this.rain) {
      drop.y += drop.speed * this.dt;
      if (drop.y > HB_FIELD.GROUND_Y) {
        drop.y = -drop.length;
        drop.x = Math.random() * HB_FIELD.WIDTH;
      }
      ctx.strokeStyle = `rgba(255,255,255,${drop.alpha})`;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x - drop.length * 0.3, drop.y - drop.length);
      ctx.stroke();
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

    // Sweeping floodlight beams
    ctx.save();
    const lightPoles = [
      { x: 120, targetAngle: 0.08, phase: 0 },
      { x: HB_FIELD.WIDTH - 120, targetAngle: -0.08, phase: Math.PI }
    ];
    for (const pole of lightPoles) {
      const sweep = Math.sin(this.time * 0.45 + pole.phase) * 0.28;
      const angle = Math.PI / 2 + pole.targetAngle + sweep;
      
      // Draw floodlight bulb glow
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(pole.x, 30, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      
      // Beam cone
      const beamLen = 340;
      const beamEndWidth = 85;
      const endX = pole.x + Math.cos(angle) * beamLen;
      const endY = 30 + Math.sin(angle) * beamLen;
      const dx = Math.cos(angle + Math.PI / 2) * beamEndWidth;
      const dy = Math.sin(angle + Math.PI / 2) * beamEndWidth;
      
      const lightGrad = ctx.createLinearGradient(pole.x, 30, endX, endY);
      lightGrad.addColorStop(0, 'rgba(255, 255, 255, 0.22)');
      lightGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.08)');
      lightGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = lightGrad;
      
      ctx.beginPath();
      ctx.moveTo(pole.x, 30);
      ctx.lineTo(endX - dx, endY - dy);
      ctx.lineTo(endX + dx, endY + dy);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }

  private drawStands(ctx: CanvasRenderingContext2D, state: HBMatchState) {
    const isGoal = state.state === 'goal_scored';
    const goalElapsed = isGoal ? this.time - this.stateEntryTime : 0;
    const ready = isGoal ? Math.min(1, Math.max(0,
      goalElapsed < 0.3 ? goalElapsed / 0.3 :
      goalElapsed < 1.7 ? 1 :
      (2.0 - goalElapsed) / 0.3
    )) : 0;

    // Draw full background seating bowl
    const standsGrad = ctx.createLinearGradient(0, 70, 0, 328);
    standsGrad.addColorStop(0, '#070a14');
    standsGrad.addColorStop(0.4, '#10152b');
    standsGrad.addColorStop(1, '#151d38');
    ctx.fillStyle = standsGrad;
    ctx.fillRect(0, 70, HB_FIELD.WIDTH, 258);

    // Draw tier rails
    ctx.strokeStyle = '#22304d';
    ctx.lineWidth = 1.5;
    for (let r = 0; r < 5; r++) {
      const ry = 100 + r * 44;
      ctx.beginPath();
      ctx.moveTo(0, ry);
      ctx.lineTo(HB_FIELD.WIDTH, ry);
      ctx.stroke();
    }

    // Populate fans in a nice crowd
    const cols = 22;
    const rows = 5;
    for (let r = 0; r < rows; r++) {
      const fy = 100 + r * 44 + 32; // Seat bottom
      for (let c = 0; c < cols; c++) {
        const fx = 30 + c * (HB_FIELD.WIDTH - 60) / (cols - 1) + (r % 2) * 6;
        
        // Split crowd cheering based on who scored
        const isLeftSide = fx < HB_FIELD.WIDTH / 2;
        const celebrate = isGoal && ready > 0 &&
          ((isLeftSide && this.lastScoredBy === 'home') || (!isLeftSide && this.lastScoredBy === 'away'));
        const sad = isGoal && ready > 0 &&
          ((isLeftSide && this.lastScoredBy === 'away') || (!isLeftSide && this.lastScoredBy === 'home'));

        let bob = Math.sin(this.time * 6 + c * 0.4 + r) * 1.5;
        if (celebrate) {
          bob = Math.sin(this.time * 16 + c * 1.2) * 5 - 4;
        } else if (sad) {
          bob = Math.sin(this.time * 2 + c) * 0.3 + 1.5; // low bobbing / sad
        }

        // Draw Fan Shirt
        const teamColor = isLeftSide ? '#2563eb' : '#dc2626';
        ctx.fillStyle = teamColor;
        ctx.beginPath();
        ctx.roundRect(fx - 7, fy - 12 + bob, 14, 12, 3);
        ctx.fill();

        // Draw Fan Face
        ctx.fillStyle = '#f0c8a0';
        ctx.beginPath();
        ctx.arc(fx, fy - 16 + bob, 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw Fan Hat/Hair (some fans wear caps)
        if ((c + r) % 3 === 0) {
          // Hat
          ctx.fillStyle = teamColor;
          ctx.beginPath();
          ctx.ellipse(fx, fy - 19 + bob, 5, 2.5, 0, Math.PI, 0);
          ctx.fill();
          // Hat bill/brim
          ctx.fillRect(fx - 4, fy - 19 + bob, 8, 1);
        } else {
          // Hair
          ctx.fillStyle = ['#332211', '#111111', '#c0a080', '#664422'][Math.floor((c + r) % 4)];
          ctx.beginPath();
          ctx.ellipse(fx, fy - 18.5 + bob, 4.5, 2, 0, Math.PI, 0);
          ctx.fill();
        }

        // Celebrate: wave arms up!
        if (celebrate) {
          ctx.strokeStyle = '#f0c8a0';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(fx - 6, fy - 10 + bob);
          ctx.lineTo(fx - 11, fy - 18 + bob);
          ctx.moveTo(fx + 6, fy - 10 + bob);
          ctx.lineTo(fx + 11, fy - 18 + bob);
          ctx.stroke();
        }

        // A few fans wave flags
        if ((c === 3 || c === 9 || c === 13 || c === 18) && r === 0) {
          ctx.save();
          ctx.translate(fx, fy - 22 + bob);
          const flagWave = Math.sin(this.time * 8 + c) * 0.25;
          ctx.rotate(flagWave);
          
          // Flag pole
          ctx.strokeStyle = '#888';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -18);
          ctx.stroke();
          
          // Flag banner
          ctx.fillStyle = teamColor;
          ctx.beginPath();
          ctx.moveTo(0, -18);
          ctx.lineTo(15, -18 + Math.sin(this.time * 10) * 1.5);
          ctx.lineTo(12, -10 + Math.sin(this.time * 10 + 1) * 1.5);
          ctx.lineTo(0, -10);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // Camera flashes popping in the stands
    if (Math.random() < 0.12) {
      const flashCol = Math.floor(Math.random() * cols);
      const flashRow = Math.floor(Math.random() * rows);
      const flashX = 30 + flashCol * (HB_FIELD.WIDTH - 60) / (cols - 1) + (Math.random() - 0.5) * 12;
      const flashY = 100 + flashRow * 44 + 16;
      
      ctx.save();
      const flashGrad = ctx.createRadialGradient(flashX, flashY, 1, flashX, flashY, 20);
      flashGrad.addColorStop(0, '#ffffff');
      flashGrad.addColorStop(0.2, 'rgba(255, 245, 170, 0.95)');
      flashGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = flashGrad;
      ctx.beginPath();
      ctx.arc(flashX, flashY, 20, 0, Math.PI * 2);
      ctx.fill();
      
      // Star flare lines
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(flashX - 14, flashY); ctx.lineTo(flashX + 14, flashY);
      ctx.moveTo(flashX, flashY - 14); ctx.lineTo(flashX, flashY + 14);
      ctx.stroke();
      ctx.restore();
    }

    // Draw scrolling LED Advertisement Board above the field boundary
    ctx.fillStyle = '#060912';
    ctx.fillRect(0, 328, HB_FIELD.WIDTH, 18);
    ctx.strokeStyle = '#1d273d';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(0, 328, HB_FIELD.WIDTH, 18);
    
    // Led Text
    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    
    const text = "★ HEAD BALL PRO ★ SCORE GOALS ★ DEFEAT THE OPPONENT ★ PLAY MULTIPLAYER ONLINE ★ TOUCH CONTROLS ON MOBILE ★";
    const textWidth = ctx.measureText(text).width;
    const scrollSpeed = 50; // pixels per second
    const offset = (this.time * scrollSpeed) % (textWidth + HB_FIELD.WIDTH);
    const textX = HB_FIELD.WIDTH - offset;
    ctx.fillText(text, textX, 337);
    if (textX + textWidth < HB_FIELD.WIDTH) {
      ctx.fillText(text, textX + textWidth + 100, 337);
    }

    // Goal scored notification text
    if (isGoal && ready > 0.5) {
      ctx.save();
      ctx.globalAlpha = (ready - 0.5) * 2;
      ctx.fillStyle = '#ffdd00';
      ctx.font = 'bold 18px Rajdhani, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('⚽ GOAL!', HB_FIELD.WIDTH / 2, 90 + Math.sin(this.time * 8) * 3);
      ctx.restore();
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

  private drawShadow(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
    const heightAbove = HB_FIELD.GROUND_Y - y;
    const alpha = Math.max(0.08, 0.3 - heightAbove / HB_FIELD.GROUND_Y * 0.25);
    ctx.fillStyle = `rgba(0,0,0,${alpha})`;
    ctx.beginPath();
    ctx.ellipse(x, HB_FIELD.GROUND_Y - 2, size * 1.5, 3, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawGoals(ctx: CanvasRenderingContext2D, state: HBMatchState) {
    const postW = HB_FIELD.GOAL_POST_RADIUS * 2;
    const goalH = HB_FIELD.GOAL_HEIGHT;
    const isGoal = state.state === 'goal_scored';
    const goalElapsed = isGoal ? this.time - this.stateEntryTime : 0;
    const ripple = isGoal
      ? 3 * Math.sin(goalElapsed * 20) * Math.max(0, 1 - goalElapsed / 0.6)
      : 0;

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
        const ripp = ripple * Math.sin(t * Math.PI * 3);
        ctx.beginPath();
        ctx.moveTo(gx + ripp, HB_FIELD.GOAL_Y + t * goalH);
        ctx.lineTo(side > 0 ? gx - netW + ripp : gx + netW - ripp, HB_FIELD.GOAL_Y + t * goalH);
        ctx.stroke();
      }
      for (let i = 0; i <= 6; i++) {
        const t = i / 6;
        const ripp = ripple * Math.sin(t * Math.PI * 2);
        ctx.beginPath();
        ctx.moveTo(side > 0 ? gx - netW * t + ripp : gx + netW * t - ripp, HB_FIELD.GOAL_Y);
        ctx.lineTo(side > 0 ? gx - netW * t + ripp : gx + netW * t - ripp, HB_FIELD.GOAL_Y + goalH);
        ctx.stroke();
      }
    }
  }

  private drawPlayer(ctx: CanvasRenderingContext2D, player: HBPlayerState, isAway: boolean, ball: HBBallState, state: HBMatchState) {
    const x = player.x;
    const y = player.y;
    const hr = player.headSize;
    const dir = player.facingRight ? 1 : -1;

    // Head center in local coords is at y-offset = -BODY_HEIGHT - headSize
    const headY = -HB_PLAYER.BODY_HEIGHT - hr;

    // Squash & Stretch based on vertical velocity (vy)
    let scaleY = 1;
    if (!player.isGrounded) {
      scaleY = 1 + Math.max(-0.15, Math.min(0.15, player.vy * 0.0004));
    }
    const scaleX = 1 / scaleY;

    ctx.save();
    ctx.translate(x, y);

    // --- 1. RENDER KICK / SPEED TRAILS ---
    if (Math.abs(player.vx) > 30) {
      const speedAlpha = Math.min(0.2, Math.abs(player.vx) / 600);
      ctx.strokeStyle = `rgba(255,255,255,${speedAlpha})`;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 3; i++) {
        const ly = -12 + i * 8;
        ctx.beginPath();
        ctx.moveTo(0, ly);
        ctx.lineTo(-dir * (15 + Math.abs(player.vx) * 0.04), ly);
        ctx.stroke();
      }
    }

    if (player.isKicking) {
      const kickProgress = 1 - player.kickTimer / HB_PLAYER.KICK_DURATION;
      const sparkR = 7 + kickProgress * 14;
      const sparkAlpha = 0.45 * (1 - kickProgress);
      ctx.strokeStyle = `rgba(255,255,255,${sparkAlpha})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(dir * 18, -12, sparkR, 0, Math.PI * 2);
      ctx.stroke();
    }

    // --- 2. RENDER THE DETAILED SNEAKER / SHOE ---
    const footBaseX = dir * 8;
    const footBaseY = -6;

    let shoeX = footBaseX;
    let shoeY = footBaseY;
    let shoeRot = 0;

    if (player.isKicking) {
      const kickProgress = 1 - player.kickTimer / HB_PLAYER.KICK_DURATION;
      const swingFactor = Math.sin(kickProgress * Math.PI);
      shoeX += dir * swingFactor * 24;
      shoeY -= swingFactor * 15;
      shoeRot = -dir * swingFactor * 1.5;
    } else if (Math.abs(player.vx) > 10) {
      // Walking bob cycle
      const cycle = player.animFrame * 1.5;
      shoeX += Math.sin(cycle) * 5;
      shoeY += Math.abs(Math.cos(cycle)) * -6;
      shoeRot = Math.sin(cycle) * 0.18 * dir;
    } else {
      // Idle bobbing matching the head
      shoeY += Math.sin(this.time * 6) * 1;
    }

    ctx.save();
    ctx.translate(shoeX, shoeY);
    ctx.rotate(shoeRot);
    ctx.scale(dir, 1);

    // Sole (white/gray highlight)
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(-14, 2, 28, 4, 2);
    ctx.fill();

    // Studs / Cleats (red/orange accents)
    ctx.fillStyle = '#e11d48';
    ctx.fillRect(-10, 6, 2, 2);
    ctx.fillRect(-4, 6, 2, 2);
    ctx.fillRect(4, 6, 2, 2);
    ctx.fillRect(8, 6, 2, 2);

    // Cleat Body (team colored)
    ctx.fillStyle = player.jerseyColor;
    ctx.beginPath();
    ctx.moveTo(-14, 2);
    ctx.lineTo(-14, -6);
    ctx.quadraticCurveTo(-10, -10, -2, -8);
    ctx.lineTo(8, -8);
    ctx.quadraticCurveTo(14, -6, 14, 2);
    ctx.closePath();
    ctx.fill();

    // Sneaker Toe Cap (white highlight)
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(8, -8);
    ctx.quadraticCurveTo(14, -6, 14, 2);
    ctx.lineTo(8, 2);
    ctx.closePath();
    ctx.fill();

    // Cleat Laces details
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-2, -6); ctx.lineTo(2, -8);
    ctx.moveTo(-1, -4); ctx.lineTo(3, -6);
    ctx.moveTo(0, -2); ctx.lineTo(4, -4);
    ctx.stroke();

    // Heel patch (dark charcoal)
    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.moveTo(-14, 2);
    ctx.lineTo(-14, -4);
    ctx.lineTo(-8, 2);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

    // --- 3. RENDER THE GIANT HEAD (with Squash & Stretch) ---
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Skin Head
    ctx.fillStyle = player.skinColor;
    ctx.beginPath();
    ctx.arc(0, headY, hr * 1.35, 0, Math.PI * 2);
    ctx.fill();

    // Team jersey collar at bottom of head
    ctx.fillStyle = player.jerseyColor;
    ctx.beginPath();
    ctx.ellipse(0, headY + hr * 1.15, hr * 0.7, hr * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(-hr * 0.3, headY + hr * 1.05);
    ctx.lineTo(0, headY + hr * 1.35);
    ctx.lineTo(hr * 0.3, headY + hr * 1.05);
    ctx.closePath();
    ctx.fill();

    // Hair
    ctx.fillStyle = player.hairColor;
    ctx.beginPath();
    ctx.arc(0, headY - hr * 0.35, hr * 1.4, Math.PI * 1.05, Math.PI * 1.95);
    ctx.ellipse(0, headY - hr * 0.85, hr * 1.35, hr * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eyes (with random blinking cycle)
    const eyeX = dir * 9;
    const eyeY = headY - 1;
    const blinkPeriod = 4.0;
    const blinkDuration = 0.15;
    const offset = isAway ? 2.0 : 0;
    const isBlinking = ((this.time + offset) % blinkPeriod) < blinkDuration;

    if (isBlinking) {
      // Draw closed blinking line
      ctx.strokeStyle = '#111';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(eyeX - 7, eyeY);
      ctx.lineTo(eyeX + 7, eyeY);
      ctx.stroke();
    } else {
      // Open eye whites
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(eyeX, eyeY, 8.5, 10.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#111111';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Look at the ball direction
      const dx = ball.x - (player.x + eyeX);
      const dy = ball.y - (player.y + eyeY);
      const dist = Math.sqrt(dx * dx + dy * dy);
      let lookX = 0;
      let lookY = 0;
      if (dist > 5) {
        lookX = (dx / dist) * 3;
        lookY = (dy / dist) * 3;
      }
      
      // Pupils
      ctx.fillStyle = '#111111';
      ctx.beginPath();
      ctx.arc(eyeX + lookX, eyeY + lookY, 3.8, 0, Math.PI * 2);
      ctx.fill();
      
      // Reflection glow dot
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(eyeX + lookX - 1.2, eyeY + lookY - 1.2, 1.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Eyebrows
    ctx.strokeStyle = player.hairColor;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(eyeX - 9, eyeY - 13);
    ctx.lineTo(eyeX + 6, eyeY - 12);
    ctx.stroke();

    // Mouth Expression
    const isCelebrating = state.state === 'goal_scored' && this.lastScoredBy === player.team;
    const isSad = state.state === 'goal_scored' && this.lastScoredBy !== player.team;

    ctx.save();
    ctx.translate(dir * 13, headY + 15);
    if (isCelebrating) {
      // Happy open smile
      ctx.fillStyle = '#b91c1c';
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-5, 0, 10, 2);
    } else if (isSad) {
      // Frown
      ctx.strokeStyle = '#111';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(0, 4, 6, Math.PI, 0);
      ctx.stroke();
    } else {
      // Determined line smile
      ctx.strokeStyle = '#111';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(0, -2, 6, 0.2, Math.PI - 0.2);
      ctx.stroke();
    }
    ctx.restore();

    // Headband with the player's capital initial
    ctx.fillStyle = player.jerseyColor;
    ctx.beginPath();
    ctx.ellipse(0, headY - 15, hr * 1.34, 5.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.45)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(0, headY - 15, hr * 1.34, 5.5, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${hr * 0.7}px Rajdhani, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(player.name.charAt(0).toUpperCase(), 0, headY - 15);

    ctx.restore(); // restore Squash & Stretch scale

    ctx.restore(); // restore player translation
  }

  private drawBall(ctx: CanvasRenderingContext2D, ball: HBBallState) {
    const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
    if (speed > 100) {
      this.trail.push({ x: ball.x, y: ball.y });
      if (this.trail.length > 6) this.trail.shift();
    } else if (this.trail.length > 0) {
      this.trail.shift();
    }

    for (let i = 0; i < this.trail.length; i++) {
      const t = this.trail[i];
      const alpha = (i / this.trail.length) * 0.2;
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      const r = ball.radius * (0.3 + 0.7 * (i / this.trail.length));
      ctx.beginPath();
      ctx.arc(t.x, t.y, r, 0, Math.PI * 2);
      ctx.fill();
    }

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
    ctx.font = 'bold 16px sans-serif';
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

    if (!this.goalParticlesSpawned && elapsed < 0.05) {
      this.goalParticlesSpawned = true;
      const burstColors = ['#00f0ff', '#fff', '#8b5cf6', '#22c55e', '#f59e0b'];
      for (let i = 0; i < 30; i++) {
        const angle = (Math.PI * 2 * i) / 30 + (Math.random() - 0.5) * 0.4;
        const speed = 80 + Math.random() * 150;
        this.particles.push({
          x: w / 2, y: h / 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1, maxLife: 0.6 + Math.random() * 0.4,
          color: burstColors[Math.floor(Math.random() * burstColors.length)],
          size: 2 + Math.random() * 4,
        });
      }
    }

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

  private drawMatchEnd(ctx: CanvasRenderingContext2D, w: number, h: number, state: HBMatchState, dt: number) {
    const elapsed = this.time - this.stateEntryTime;

    if (!this.confettiSpawned && elapsed < 0.05) {
      this.confettiSpawned = true;
      const confettiColors = ['#2563eb', '#dc2626', '#00f0ff', '#8b5cf6', '#22c55e', '#f59e0b', '#fff'];
      for (let i = 0; i < 60; i++) {
        this.confetti.push({
          x: Math.random() * w,
          y: -Math.random() * h * 0.5,
          vx: (Math.random() - 0.5) * 100,
          vy: 80 + Math.random() * 200,
          color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
          rot: Math.random() * Math.PI * 2,
          rv: (Math.random() - 0.5) * 8,
          size: 4 + Math.random() * 6,
        });
      }
    }

    for (const c of this.confetti) {
      c.x += c.vx * dt;
      c.y += c.vy * dt;
      c.vy += 180 * dt;
      c.rot += c.rv * dt;
      if (c.y > h + 20) { c.y = -20; c.x = Math.random() * w; c.vy = 80 + Math.random() * 120; }
    }

    for (const c of this.confetti) {
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rot);
      ctx.fillStyle = c.color;
      ctx.globalAlpha = 0.85;
      ctx.fillRect(-c.size / 2, -2, c.size, 4);
      ctx.restore();
    }
    ctx.globalAlpha = 1;

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

  private updateParticles(ctx: CanvasRenderingContext2D, w: number, h: number) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx * this.dt;
      p.y += p.vy * this.dt;
      p.vy += 100 * this.dt;
      p.life -= this.dt / p.maxLife;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.translate(p.x, p.y);
      ctx.beginPath();
      ctx.arc(0, 0, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    ctx.globalAlpha = 1;
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
    const jumpPulse = 1 + 0.04 * Math.sin(this.time * 2.5 + 1);
    const defPulse = 1 + 0.04 * Math.sin(this.time * 2.8 + 2);

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

    const defX = w - pad - btnR;
    const defY = h - pad - btnR - btnR * 2.4;
    ctx.fillStyle = '#3b82f6';
    ctx.globalAlpha = 0.3;
    ctx.save();
    ctx.translate(defX, defY);
    ctx.scale(defPulse, defPulse);
    ctx.beginPath();
    ctx.arc(0, 0, btnR, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = '#fff';
    ctx.font = `${16 * this.scale}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⬇', defX, defY);

    const jumpX = w / 2;
    const jumpY = pad + btnR;
    ctx.fillStyle = '#22c55e';
    ctx.globalAlpha = 0.3;
    ctx.save();
    ctx.translate(jumpX, jumpY);
    ctx.scale(jumpPulse, jumpPulse);
    ctx.beginPath();
    ctx.arc(0, 0, btnR, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = '#fff';
    ctx.fillText('↑', jumpX, jumpY);

    ctx.globalAlpha = 1;
  }
}
