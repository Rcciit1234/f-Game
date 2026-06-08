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
@keyframes hbGradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes hbFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes hbPulse {
  0%, 100% { filter: drop-shadow(0 0 15px rgba(0,240,255,0.15)); }
  50% { filter: drop-shadow(0 0 35px rgba(0,240,255,0.35)); }
}
@keyframes hbOrbDrift {
  0% { transform: translate(0, 0); }
  25% { transform: translate(30px, -20px); }
  50% { transform: translate(-20px, -50px); }
  75% { transform: translate(-40px, -10px); }
  100% { transform: translate(0, 0); }
}
@keyframes hbOrbDrift2 {
  0% { transform: translate(0, 0); }
  33% { transform: translate(-30px, 30px); }
  66% { transform: translate(20px, -20px); }
  100% { transform: translate(0, 0); }
}
@keyframes hbGridScroll {
  0% { transform: perspective(400px) rotateX(60deg) translateY(0); }
  100% { transform: perspective(400px) rotateX(60deg) translateY(60px); }
}
@keyframes hbFadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes hbBtnGlow {
  0%, 100% { box-shadow: 0 4px 15px rgba(37,99,235,0.2); }
  50% { box-shadow: 0 4px 25px rgba(37,99,235,0.4); }
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
@keyframes hbSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.hb-btn-primary {
  transition: all 0.25s ease !important;
}
.hb-btn-primary:hover {
  transform: translateY(-2px) scale(1.02) !important;
  box-shadow: 0 6px 30px rgba(37,99,235,0.45) !important;
}
.hb-btn-primary:active {
  transform: scale(0.96) !important;
}
.hb-btn-secondary {
  transition: all 0.25s ease !important;
}
.hb-btn-secondary:hover {
  color: rgba(255,255,255,0.7) !important;
}
.hb-code-input:focus {
  border-color: rgba(0,240,255,0.5) !important;
  box-shadow: 0 0 20px rgba(0,240,255,0.1) !important;
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
    return `
      <div style="position:relative;overflow:hidden;height:100%;background:linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#0f172a 100%);background-size:200% 200%;animation:hbGradientShift 8s ease infinite;color:#fff;font-family:sans-serif;">
        <div style="position:absolute;inset:0;opacity:0.15;background-image:linear-gradient(rgba(0,240,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,255,0.06) 1px,transparent 1px);background-size:60px 60px;animation:hbGridScroll 20s linear infinite;"></div>
        <div style="position:absolute;width:450px;height:450px;border-radius:50%;background:radial-gradient(circle,rgba(0,240,255,0.06) 0%,transparent 70%);top:50%;left:15%;filter:blur(40px);animation:hbOrbDrift 12s ease-in-out infinite;"></div>
        <div style="position:absolute;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(139,92,246,0.06) 0%,transparent 70%);top:20%;right:10%;filter:blur(40px);animation:hbOrbDrift2 15s ease-in-out infinite;"></div>
        <div style="position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;padding:20px;box-sizing:border-box;animation:hbFadeIn 0.4s ease;">
          ${inner}
        </div>
      </div>
    `;
  }

  private btnStyle(primary = true) {
    return primary
      ? 'class="hb-btn-primary" style="padding:12px 24px;border:none;border-radius:12px;background:linear-gradient(135deg,#2563eb,#8b5cf6);color:#fff;font-size:1rem;font-weight:700;cursor:pointer;-webkit-tap-highlight-color:transparent;width:100%;box-shadow:0 4px 15px rgba(37,99,235,0.2);animation:hbBtnGlow 3s ease-in-out infinite;'
      : 'class="hb-btn-secondary" style="padding:8px 16px;border:none;border-radius:8px;background:transparent;color:rgba(255,255,255,0.4);font-size:0.85rem;cursor:pointer;width:100%;';
  }

  // ─── Main ───
  private buildMain() {
    this.container.innerHTML = this.wrap(`
      <div style="font-size:3rem;margin-bottom:10px;animation:hbFloat 3s ease-in-out infinite;">⚽</div>
      <h1 style="font-size:1.8rem;margin:0;background:linear-gradient(90deg,#00f0ff,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:hbPulse 2.5s ease-in-out infinite;">HEAD BALL</h1>
      <p style="color:rgba(255,255,255,0.4);font-size:0.85rem;margin:0;">1v1 Big-Head Football</p>
      <div style="display:flex;flex-direction:column;gap:12px;margin-top:20px;width:220px;">
        <button id="hb-ai-btn" style="${this.btnStyle(true)}">Play vs AI</button>
        <button id="hb-create-btn" style="${this.btnStyle(true)}">Create Room</button>
        <button id="hb-join-btn" style="${this.btnStyle(true)}">Join Room</button>
        <button id="hb-back-btn" style="${this.btnStyle(false)}" data-role="back">← Back</button>
      </div>
    `);
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
    this.container.innerHTML = '';
    const style = document.getElementById('hb-anim-style');
    if (style) style.remove();
  }
}
