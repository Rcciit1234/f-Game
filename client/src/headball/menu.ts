import { HBHeadBallNetwork } from './network.js';

type MenuState = 'main' | 'creating' | 'host_waiting' | 'joining' | 'joined' | 'error';

export class HBMenu {
  private container: HTMLElement;
  private onStartAI: () => void;
  private onStartOnline: (network: HBHeadBallNetwork) => void;
  private onBack: () => void;
  private network: HBHeadBallNetwork;
  private state: MenuState = 'main';
  private roomCode: string = '';
  private peerName: string = '';
  private isReady = false;
  private opponentJoined = false;
  private errorMsg: string = '';
  private joinCodeInput: string = '';
  private animFrameId = 0;
  private menuCanvas: HTMLCanvasElement | null = null;
  private menuAnimTime = 0;
  private menuAnimLastTime = 0;

  constructor(
    container: HTMLElement,
    onStartAI: () => void,
    onStartOnline: (network: HBHeadBallNetwork) => void,
    onBack: () => void,
    network: HBHeadBallNetwork,
  ) {
    this.container = container;
    this.onStartAI = onStartAI;
    this.onStartOnline = onStartOnline;
    this.onBack = onBack;
    this.network = network;
    HBMenu.injectStyles();
    this.setupNetwork();
    this.buildMain();
  }

  private static injectStyles() {
    if (document.getElementById('hb-anim-style')) return;
    const style = document.createElement('style');
    style.id = 'hb-anim-style';
    style.textContent = `
@keyframes hbFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes hbPulse {
  0%, 100% { filter: drop-shadow(0 0 15px rgba(0,240,255,0.15)); }
  50% { filter: drop-shadow(0 0 35px rgba(0,240,255,0.35)); }
}
@keyframes hbFadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes hbBtnGlow {
  0%, 100% { box-shadow: 0 4px 15px rgba(37,99,235,0.2); }
  50% { box-shadow: 0 4px 30px rgba(37,99,235,0.5); }
}
@keyframes hbCodePulse {
  0%, 100% { border-color: rgba(0,240,255,0.15); }
  50% { border-color: rgba(0,240,255,0.4); }
}
@keyframes hbWiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-3deg); }
  75% { transform: rotate(3deg); }
}
@keyframes hbFloodPulse {
  0%, 100% { opacity: 0.06; }
  50% { opacity: 0.12; }
}
@keyframes hbFooty1 {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(50px, -25px) rotate(90deg); }
  50% { transform: translate(-20px, 30px) rotate(180deg); }
  75% { transform: translate(30px, -15px) rotate(270deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}
@keyframes hbFooty2 {
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-40px, -30px) rotate(120deg); }
  66% { transform: translate(25px, 25px) rotate(240deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}
@keyframes hbFooty3 {
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  25% { transform: translate(-30px, -40px) rotate(90deg) scale(0.9); }
  50% { transform: translate(35px, 20px) rotate(180deg) scale(1.1); }
  75% { transform: translate(-25px, -10px) rotate(270deg) scale(0.95); }
  100% { transform: translate(0, 0) rotate(360deg) scale(1); }
}
@keyframes hfCheerBlue {
  0%, 2%, 28%, 100% { transform: translateY(0); }
  3%, 12% { transform: translateY(-4px); }
}
@keyframes hfCheerRed {
  0%, 52%, 78%, 100% { transform: translateY(0); }
  53%, 62% { transform: translateY(-4px); }
}
@keyframes hfArmLUp {
  0%, 2%, 28%, 100% { transform: rotate(0deg); }
  3%, 12% { transform: rotate(-65deg) translateX(-2px); }
}
@keyframes hfArmRUp {
  0%, 2%, 28%, 100% { transform: rotate(0deg); }
  3%, 12% { transform: rotate(65deg) translateX(2px); }
}
@keyframes hfArmLRed {
  0%, 52%, 78%, 100% { transform: rotate(0deg); }
  53%, 62% { transform: rotate(-65deg) translateX(-2px); }
}
@keyframes hfArmRRed {
  0%, 52%, 78%, 100% { transform: rotate(0deg); }
  53%, 62% { transform: rotate(65deg) translateX(2px); }
}
@keyframes hfBubbleBlue {
  0%, 2%, 25%, 100% { opacity: 0; transform: scale(0) translateY(0); }
  3%, 12% { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes hfBubbleRed {
  0%, 52%, 75%, 100% { opacity: 0; transform: scale(0) translateY(0); }
  53%, 62% { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes hbFlagFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-8px) rotate(-1deg); }
  50% { transform: translateY(-12px) rotate(0.5deg); }
  75% { transform: translateY(-4px) rotate(1deg); }
}
@keyframes hbFlagWave {
  0%, 100% { transform: skewY(0deg); }
  25% { transform: skewY(2deg); }
  75% { transform: skewY(-2deg); }
}
@keyframes hbFlagUnfurl {
  from { width: 0; opacity: 0; }
  to { width: 100%; opacity: 1; }
}
@keyframes hbSparkleDrift {
  0% { transform: translateY(0) translateX(0) scale(0); opacity: 0; }
  20% { opacity: 0.5; scale: 1; }
  80% { opacity: 0.3; }
  100% { transform: translateY(-60px) translateX(20px) scale(0); opacity: 0; }
}
.hb-menu-card {
  background: rgba(8,8,24,0.45);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 24px;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  animation: hbFadeIn 0.5s ease;
  max-width: 290px;
  width: 100%;
  box-shadow: 0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05);
}
.hb-btn-primary {
  transition: all 0.2s cubic-bezier(0.34,1.56,0.64,1) !important;
}
.hb-btn-primary:hover {
  transform: translateY(-2px) scale(1.03) !important;
  box-shadow: 0 8px 32px rgba(37,99,235,0.5) !important;
}
.hb-btn-primary:active {
  transform: scale(0.95) !important;
  transition-duration: 0.05s !important;
}
.hb-btn-secondary {
  transition: all 0.2s ease !important;
}
.hb-btn-secondary:hover {
  color: rgba(255,255,255,0.7) !important;
  transform: scale(1.02) !important;
}
    `.trim();
    document.head.appendChild(style);
  }

  private setupNetwork() {
    this.network.onRoomCreated = (code) => {
      this.roomCode = code;
      this.opponentJoined = false;
      this.isReady = false;
      this.setState('host_waiting');
    };

    this.network.onRoomJoined = (hostName) => {
      this.peerName = hostName;
      this.isReady = false;
      this.setState('joined');
    };

    this.network.onPlayerJoined = (name) => {
      this.peerName = name;
      this.opponentJoined = true;
      this.isReady = false;
      this.setState('host_waiting');
    };

    this.network.onMatchStart = () => {
      this.destroy();
      this.onStartOnline(this.network);
    };

    this.network.onError = (msg) => {
      this.errorMsg = msg;
      this.setState('error');
    };
  }

  private setState(s: MenuState) {
    this.state = s;
    this.build();
  }

  private build() {
    switch (this.state) {
      case 'main': this.buildMain(); break;
      case 'creating': this.buildCreating(); break;
      case 'host_waiting': this.buildHostWaiting(); break;
      case 'joining': this.buildJoining(); break;
      case 'joined': this.buildJoined(); break;
      case 'error': this.buildError(); break;
    }
  }

  private wrap(inner: string) {
    const fan = (side: 'L' | 'R', team: 'blue' | 'red', idx: number, top: number, left: number) => {
      const isBlue = team === 'blue';
      const color = isBlue ? '#6abfde' : '#c60b1e';
      const bodyClass = isBlue ? 'hf-body-b' : 'hf-body-r';
      const cheerAnim = isBlue ? 'hfCheerBlue' : 'hfCheerRed';
      const armL = isBlue ? 'hfArmLUp' : 'hfArmLRed';
      const armR = isBlue ? 'hfArmRUp' : 'hfArmRRed';
      const bubble = isBlue ? 'hfBubbleBlue' : 'hfBubbleRed';
      const delay = idx * 0.3;
      return `<div style="position:absolute;top:${top}%;left:${left}%;animation:${cheerAnim} 10s ease-in-out ${delay}s infinite;">
        <div style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);white-space:nowrap;font-size:7px;font-weight:900;color:#00f0ff;animation:${bubble} 10s ease-in-out ${delay}s infinite;">⚽ GOAL!</div>
        <div style="width:12px;height:12px;border-radius:50%;background:#f0d0b0;margin:0 auto;position:relative;z-index:1;"></div>
        <div style="position:relative;width:14px;height:18px;border-radius:2px 2px 0 0;background:${color};margin:0 auto;">
          <div style="position:absolute;top:-16px;right:100%;width:2.5px;height:12px;background:#f0d0b0;border-radius:2px;transform-origin:bottom center;animation:${armL} 10s ease-in-out ${delay}s infinite;"></div>
          <div style="position:absolute;top:-16px;left:100%;width:2.5px;height:12px;background:#f0d0b0;border-radius:2px;transform-origin:bottom center;animation:${armR} 10s ease-in-out ${delay}s infinite;"></div>
        </div>
      </div>`;
    };

    return `
      <div style="position:relative;overflow:hidden;height:100%;background:linear-gradient(180deg,#0d0d1a 0%,#1a1530 30%,#1a0a00 55%,#0d0d1a 100%);color:#fff;font-family:sans-serif;">
        <div style="position:absolute;inset:0;opacity:0.08;background-image:linear-gradient(rgba(255,200,100,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,200,100,0.03) 1px,transparent 1px);background-size:60px 60px;transform:perspective(300px) rotateX(60deg);transform-origin:center bottom;"></div>

        <div style="position:absolute;top:0;left:5%;width:90%;height:50px;background:linear-gradient(180deg,#1a1a2e,#12122a);border-radius:0 0 50% 50%;box-shadow:0 4px 30px rgba(255,180,80,0.08);"></div>
        <div style="position:absolute;top:10px;left:5%;width:90%;height:2px;background:linear-gradient(90deg,transparent,rgba(255,200,100,0.15),transparent);animation:hbFloodPulse 4s ease-in-out infinite;"></div>

        <div style="position:absolute;top:40px;left:8%;width:2px;height:180px;background:linear-gradient(to bottom,rgba(255,200,100,0.1),transparent);transform:rotate(-4deg);animation:hbFloodPulse 3s ease-in-out infinite;"></div>
        <div style="position:absolute;top:40px;right:8%;width:2px;height:180px;background:linear-gradient(to bottom,rgba(255,200,100,0.1),transparent);transform:rotate(4deg);animation:hbFloodPulse 3s ease-in-out infinite reverse;"></div>

        <div style="position:absolute;bottom:15%;left:50%;transform:translateX(-50%);width:260px;height:70px;background:radial-gradient(ellipse,rgba(45,138,78,0.1),transparent);border-radius:50%;"></div>

        <canvas id="hb-menu-canvas" style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;"></canvas>

        <!-- Argentina Flag (left) -->
        <div style="position:absolute;top:28%;left:1.5%;z-index:10;pointer-events:none;animation:hbFlagFloat 6s ease-in-out infinite;">
          <div style="width:2.5px;height:110px;background:linear-gradient(to bottom,rgba(255,255,255,0.12),rgba(200,200,200,0.35));margin:0 auto;"></div>
          <div style="background:rgba(0,0,0,0.35);border-radius:4px;padding:4px;display:inline-block;">
            <div style="width:95px;height:60px;border:1.5px solid rgba(255,255,255,0.12);border-radius:2px;overflow:hidden;position:relative;animation:hbFlagWave 4s ease-in-out infinite;transform-origin:left center;">
              <div style="height:33.33%;background:#6abfde;"></div>
              <div style="height:33.33%;background:#ffffff;"></div>
              <div style="height:33.34%;background:#6abfde;"></div>
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:18px;height:18px;border-radius:50%;background:radial-gradient(circle,#ffdd44 40%,#ffc400 70%,#e6a800 100%);box-shadow:0 0 10px rgba(255,196,0,0.5);border:1px solid rgba(230,168,0,0.3);"></div>
            </div>
          </div>
          <div style="text-align:center;font-size:8px;font-weight:700;color:rgba(255,255,255,0.35);margin-top:4px;letter-spacing:1px;">ARGENTINA</div>
        </div>

        <!-- Spain Flag (right) -->
        <div style="position:absolute;top:28%;right:1.5%;z-index:10;pointer-events:none;animation:hbFlagFloat 7s ease-in-out infinite reverse;">
          <div style="width:2.5px;height:110px;background:linear-gradient(to bottom,rgba(255,255,255,0.12),rgba(200,200,200,0.35));margin:0 auto;"></div>
          <div style="background:rgba(0,0,0,0.35);border-radius:4px;padding:4px;display:inline-block;">
            <div style="width:95px;height:60px;border:1.5px solid rgba(255,255,255,0.12);border-radius:2px;overflow:hidden;position:relative;animation:hbFlagWave 4.5s ease-in-out infinite reverse;transform-origin:right center;">
              <div style="height:25%;background:#c60b1e;"></div>
              <div style="height:50%;background:#ffc400;"></div>
              <div style="height:25%;background:#c60b1e;"></div>
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:22px;height:24px;background:#c60b1e;border-radius:3px 3px 5px 5px;"></div>
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:14px;height:16px;background:linear-gradient(180deg,#ffc400 40%,#c60b1e 40%);border-radius:1px;"></div>
            </div>
          </div>
          <div style="text-align:center;font-size:8px;font-weight:700;color:rgba(255,255,255,0.35);margin-top:4px;letter-spacing:1px;">ESPAÑA</div>
        </div>

        ${fan('L', 'blue', 0, 20, 8)}
        ${fan('L', 'blue', 1, 30, 11)}
        ${fan('L', 'blue', 2, 40, 7)}

        ${fan('R', 'red', 0, 22, 83)}
        ${fan('R', 'red', 1, 32, 80)}
        ${fan('R', 'red', 2, 42, 86)}

        <div style="position:absolute;font-size:22px;top:18%;left:22%;opacity:0.06;animation:hbFooty1 14s linear infinite;pointer-events:none;">⚽</div>
        <div style="position:absolute;font-size:16px;top:35%;right:20%;opacity:0.04;animation:hbFooty2 18s linear infinite;pointer-events:none;">⚽</div>
        <div style="position:absolute;font-size:28px;top:48%;left:45%;opacity:0.04;animation:hbFooty3 20s linear infinite;pointer-events:none;">⚽</div>

        <div style="position:relative;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;padding:20px;box-sizing:border-box;">
          <div class="hb-menu-card">
            ${inner}
          </div>
        </div>
      </div>
    `;
  }

  private btnStyle(primary = true) {
    return primary
      ? 'class="hb-btn-primary" style="padding:12px 24px;border:none;border-radius:12px;background:linear-gradient(135deg,#2563eb,#8b5cf6);color:#fff;font-size:1rem;font-weight:700;cursor:pointer;-webkit-tap-highlight-color:transparent;width:100%;box-shadow:0 4px 15px rgba(37,99,235,0.2);animation:hbBtnGlow 3s ease-in-out infinite;'
      : 'class="hb-btn-secondary" style="padding:8px 16px;border:none;border-radius:8px;background:transparent;color:rgba(255,255,255,0.4);font-size:0.85rem;cursor:pointer;width:100%;';
  }

  // ─── Canvas Animation ───
  private startMenuAnimation() {
    cancelAnimationFrame(this.animFrameId);
    const canvas = document.getElementById('hb-menu-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    this.menuCanvas = canvas;
    const ctx = canvas.getContext('2d')!;
    let w = 0, h = 0;

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
    };
    resize();
    window.addEventListener('resize', resize);

    this.menuAnimTime = 0;
    this.menuAnimLastTime = 0;

    const loop = (t: number) => {
      if (!this.menuCanvas || !document.contains(this.menuCanvas)) {
        this.animFrameId = 0;
        return;
      }
      if (this.menuAnimLastTime === 0) this.menuAnimLastTime = t;
      const rawDt = (t - this.menuAnimLastTime) / 1000;
      this.menuAnimLastTime = t;
      this.menuAnimTime += Math.min(rawDt, 0.05);

      ctx.save();
      ctx.scale(devicePixelRatio, devicePixelRatio);
      ctx.clearRect(0, 0, w, h);

      const time = this.menuAnimTime;
      const s = Math.min(w / 540, h / 600) * 0.7;
      const cy = h * 0.56;

      this.drawMenuChar(ctx, w * 0.22, cy, s, time, true);
      this.drawMenuChar(ctx, w * 0.78, cy, s, time, false);

      ctx.fillStyle = 'rgba(255,255,255,0.04)';
      for (let i = 0; i < 8; i++) {
        const px = ((i * 0.31 + time * 0.015) % 1) * w;
        const py = h * 0.2 + Math.sin(time * 0.4 + i * 1.7) * h * 0.18;
        ctx.beginPath();
        ctx.arc(px, py, 1.2 + Math.sin(time + i) * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      this.animFrameId = requestAnimationFrame(loop);
    };
    this.animFrameId = requestAnimationFrame(loop);
  }

  private drawMenuChar(
    ctx: CanvasRenderingContext2D,
    cx: number, cy: number,
    scale: number, time: number,
    isArgentina: boolean,
  ) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);

    const skin = '#f0c8a0';
    const jersey = isArgentina ? '#6abfde' : '#c60b1e';
    const bW = 44, bH = 38, hr = 34;
    const headY = -hr * 0.5;
    const num = isArgentina ? '10' : '8';
    const hair = isArgentina ? '#3a2a1a' : '#9a8a7a';
    const bob = Math.sin(time * 2.5) * 3;
    const armWave = Math.sin(time * 4) * 7;
    const blinkCycle = time % 4;
    const blinking = blinkCycle > 3.85;
    const lookX = isArgentina ? 2 : -2;

    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.beginPath();
    ctx.ellipse(0, bH + 16, bW * 0.6, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.translate(0, bob);

    ctx.strokeStyle = '#222';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-8, bH - 4); ctx.lineTo(-12, bH + 12);
    ctx.moveTo(8, bH - 4); ctx.lineTo(12, bH + 12);
    ctx.stroke();

    ctx.fillStyle = jersey;
    ctx.beginPath();
    ctx.roundRect(-bW / 2, 0, bW, bH, 6);
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(-bW / 2, 0, bW, bH, 6);
    ctx.clip();
    if (isArgentina) {
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      for (let i = -20; i < 30; i += 8) ctx.fillRect(i, 0, 3, bH);
    } else {
      ctx.fillStyle = 'rgba(255,196,0,0.45)';
      ctx.fillRect(-bW / 2, bH * 0.3, bW, bH * 0.18);
    }
    ctx.restore();

    ctx.fillStyle = '#fff';
    ctx.font = 'bold 15px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(num, 0, bH * 0.55);

    ctx.strokeStyle = skin;
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-bW / 2, 6);
    ctx.lineTo(-bW / 2 - 20, -8 + armWave);
    ctx.moveTo(bW / 2, 6);
    ctx.lineTo(bW / 2 + 20, -8 - armWave);
    ctx.stroke();

    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.arc(-bW / 2 - 20, -8 + armWave, 4, 0, Math.PI * 2);
    ctx.arc(bW / 2 + 20, -8 - armWave, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.arc(0, headY, hr, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = jersey;
    ctx.beginPath();
    ctx.ellipse(0, headY - hr * 0.35, hr * 0.85, 5.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.save();
    ctx.beginPath();
    ctx.ellipse(0, headY - hr * 0.35, hr * 0.85, 5.5, 0, 0, Math.PI * 2);
    ctx.clip();
    if (isArgentina) {
      ctx.fillStyle = '#fff';
      for (let i = -24; i < 30; i += 7) ctx.fillRect(i, headY - hr * 0.35 - 6, 2.5, 12);
    }
    ctx.restore();

    ctx.fillStyle = hair;
    ctx.beginPath();
    ctx.arc(0, headY - hr * 0.35, hr * 1.05, Math.PI * 1.05, Math.PI * 1.95);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, headY - hr * 0.8, hr * 1, hr * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();

    if (blinking) {
      ctx.strokeStyle = '#111';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-16, headY - 2); ctx.lineTo(-4, headY - 2);
      ctx.moveTo(4, headY - 2); ctx.lineTo(16, headY - 2);
      ctx.stroke();
    } else {
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.ellipse(-10, headY - 2, 7, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(10, headY - 2, 7, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#111';
      ctx.beginPath();
      ctx.arc(-10 + lookX, headY - 1, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(10 + lookX, headY - 1, 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(-8 + lookX, headY - 4, 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(12 + lookX, headY - 4, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = hair;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-17, headY - 13); ctx.lineTo(-5, headY - 12);
    ctx.moveTo(5, headY - 12); ctx.lineTo(17, headY - 13);
    ctx.stroke();

    ctx.strokeStyle = '#b91c1c';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, headY + 10, 8, 0.15, Math.PI - 0.15);
    ctx.stroke();

    if (isArgentina) {
      ctx.fillStyle = 'rgba(50,35,20,0.18)';
      ctx.beginPath();
      ctx.ellipse(0, headY + 5, 13, 7, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  // ─── Main ───
  private buildMain() {
    this.container.innerHTML = this.wrap(`
      <div style="font-size:2.8rem;margin-bottom:4px;animation:hbFloat 3s ease-in-out infinite;">⚽</div>
      <h1 style="font-size:2.2rem;margin:0;background:linear-gradient(135deg,#00f0ff,#8b5cf6,#00f0ff);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:hbPulse 2.5s ease-in-out infinite;letter-spacing:3px;text-shadow:0 0 40px rgba(0,240,255,0.15);">HEAD BALL</h1>
      <p style="color:rgba(255,255,255,0.35);font-size:0.8rem;margin:0;letter-spacing:2px;text-transform:uppercase;">1v1 Big-Head Football</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px;width:100%;">
        <button id="hb-ai-btn" style="${this.btnStyle(true)}">🎮 Play vs AI</button>
        <button id="hb-create-btn" style="${this.btnStyle(true)}">🌐 Create Room</button>
        <button id="hb-join-btn" style="${this.btnStyle(true)}">🔗 Join Room</button>
        <button id="hb-back-btn" style="${this.btnStyle(false)}" data-role="back">← Back</button>
      </div>
    `);
    this.startMenuAnimation();
    this.listen('hb-ai-btn', 'click', () => this.onStartAI());
    this.listen('hb-create-btn', 'click', () => this.becomeHost());
    this.listen('hb-join-btn', 'click', () => this.setState('joining'));
    this.listen('hb-back-btn', 'click', () => { this.destroy(); this.onBack(); });
  }

  private becomeHost() {
    this.isReady = false;
    this.opponentJoined = false;
    this.peerName = '';
    this.setState('creating');
    this.network.createRoom();
  }

  // ─── Creating ───
  private buildCreating() {
    this.container.innerHTML = this.wrap(`
      <div style="font-size:2rem;margin-bottom:10px;">⏳</div>
      <p style="color:rgba(255,255,255,0.6);font-size:1rem;margin:0;">Creating room...</p>
      <p style="color:rgba(255,255,255,0.2);font-size:0.75rem;margin:0;">Connecting to server</p>
      <button id="hb-cancel-btn" style="${this.btnStyle(false)}">Cancel</button>
    `);
    this.listen('hb-cancel-btn', 'click', () => this.setState('main'));
  }

  // ─── Host Waiting ───
  private buildHostWaiting() {
    const statusHtml = this.opponentJoined
      ? `<p style="color:#22c55e;font-size:0.95rem;margin:0;">${this.peerName} joined!</p>`
      : `<p style="color:rgba(255,255,255,0.4);font-size:0.85rem;margin:0;">Waiting for opponent...</p>`;

    const readyLabel = this.isReady ? '✅ Ready!' : 'Ready';
    const readyDisabled = this.isReady ? 'opacity:0.5;cursor:default;' : '';

    this.container.innerHTML = this.wrap(`
      <div style="font-size:2rem;margin-bottom:5px;">🏠</div>
      <p style="color:rgba(255,255,255,0.4);font-size:0.8rem;margin:0;">Your room code</p>
      <div style="font-size:2.5rem;font-weight:900;letter-spacing:8px;background:rgba(255,255,255,0.05);padding:10px 24px;border-radius:12px;background:linear-gradient(135deg,#00f0ff22,#8b5cf622);">${this.roomCode}</div>
      ${statusHtml}
      <button id="hb-ready-btn" style="${this.btnStyle(true)} ${readyDisabled}">${readyLabel}</button>
      <button id="hb-leave-btn" style="${this.btnStyle(false)}">Cancel</button>
    `);
    const readyBtn = document.getElementById('hb-ready-btn');
    if (readyBtn && !this.isReady) {
      readyBtn.addEventListener('click', () => {
        this.isReady = true;
        this.network.sendReady();
        this.setState('host_waiting');
      });
    }
    this.listen('hb-leave-btn', 'click', () => {
      this.network.leaveRoom();
      this.setState('main');
    });
  }

  // ─── Joining ───
  private buildJoining() {
    this.container.innerHTML = this.wrap(`
      <div style="font-size:2rem;margin-bottom:10px;">🔗</div>
      <p style="color:rgba(255,255,255,0.6);font-size:1rem;margin:0;">Join a Room</p>
      <p style="color:rgba(255,255,255,0.3);font-size:0.75rem;margin:0;">Enter the 4-character code</p>
      <input id="hb-code-input" type="text" maxlength="4" placeholder="ABCD" value="${this.joinCodeInput}" style="
        padding:12px 16px;border:1px solid rgba(255,255,255,0.15);border-radius:10px;
        background:rgba(255,255,255,0.05);color:#fff;font-size:1.3rem;font-weight:700;
        text-align:center;letter-spacing:6px;text-transform:uppercase;width:160px;outline:none;
        font-family:monospace;
      "/>
      <button id="hb-join-confirm-btn" style="${this.btnStyle(true)}">Join</button>
      <button id="hb-join-back-btn" style="${this.btnStyle(false)}">← Back</button>
    `);
    const input = document.getElementById('hb-code-input') as HTMLInputElement;
    if (input) {
      input.addEventListener('input', () => { this.joinCodeInput = input.value.toUpperCase(); });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.doJoin();
      });
      setTimeout(() => input.focus(), 100);
    }
    this.listen('hb-join-confirm-btn', 'click', () => this.doJoin());
    this.listen('hb-join-back-btn', 'click', () => {
      this.joinCodeInput = '';
      this.setState('main');
    });
  }

  private doJoin() {
    const code = this.joinCodeInput.trim();
    if (code.length < 3) return;
    this.isReady = false;
    this.peerName = '';
    this.network.joinRoom(code);
    this.setState('creating');
  }

  // ─── Joined ───
  private buildJoined() {
    const readyLabel = this.isReady ? '✅ Ready!' : 'Ready';
    const readyDisabled = this.isReady ? 'opacity:0.5;cursor:default;' : '';

    this.container.innerHTML = this.wrap(`
      <div style="font-size:2rem;margin-bottom:5px;">🤝</div>
      <p style="color:#22c55e;font-size:1rem;margin:0;">Connected!</p>
      <p style="color:rgba(255,255,255,0.4);font-size:0.85rem;margin:0;">vs <strong style="color:#fff;">${this.peerName}</strong></p>
      <button id="hb-ready-btn" style="${this.btnStyle(true)} ${readyDisabled}">${readyLabel}</button>
      <button id="hb-leave-btn" style="${this.btnStyle(false)}">Leave Room</button>
    `);
    const readyBtn = document.getElementById('hb-ready-btn');
    if (readyBtn && !this.isReady) {
      readyBtn.addEventListener('click', () => {
        this.isReady = true;
        this.network.sendReady();
        this.setState('joined');
      });
    }
    this.listen('hb-leave-btn', 'click', () => {
      this.network.leaveRoom();
      this.setState('main');
    });
  }

  // ─── Error ───
  private buildError() {
    this.container.innerHTML = this.wrap(`
      <div style="font-size:2rem;margin-bottom:10px;">⚠️</div>
      <p style="color:#ef4444;font-size:1rem;margin:0;">${this.errorMsg}</p>
      <button id="hb-err-back-btn" style="${this.btnStyle(false)}">← Back</button>
    `);
    this.listen('hb-err-back-btn', 'click', () => this.setState('main'));
  }

  private listen(id: string, event: string, handler: () => void) {
    const el = document.getElementById(id);
    if (el) el.addEventListener(event, handler);
  }

  destroy() {
    cancelAnimationFrame(this.animFrameId);
    this.animFrameId = 0;
    this.menuCanvas = null;
    this.container.innerHTML = '';
    const style = document.getElementById('hb-anim-style');
    if (style) style.remove();
  }
}
