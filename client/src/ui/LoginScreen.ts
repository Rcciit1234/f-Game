import { FieldColor } from '../../../shared/index.js';

const AUTH_KEY = 'football_auth';

interface AuthUser {
  name: string;
  photo: string;
  method: 'google' | 'guest';
}

function footballSvg(size: string): string {
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <ellipse cx="100" cy="100" rx="70" ry="80" fill="white"/>
    <polygon points="100,50 128,72 118,106 82,106 72,72" fill="#dc2626" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="100" y1="50" x2="100" y2="12" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="128" y1="72" x2="160" y2="56" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="118" y1="106" x2="148" y2="140" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="82" y1="106" x2="52" y2="140" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="72" y1="72" x2="40" y2="56" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="100" cy="100" rx="68" ry="78" fill="none" stroke="#dc2626" stroke-width="2"/>
  </svg>`;
}

export { AUTH_KEY };
export type { AuthUser };

export class LoginScreen {
  private container: HTMLDivElement;
  private nameInput: HTMLInputElement;
  private statusEl: HTMLDivElement;
  private guestBtn: HTMLButtonElement;
  public googleBtnContainer: HTMLDivElement;

  public onLogin: ((user: AuthUser) => void) | null = null;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'login-screen';
    this.container.style.cssText = `
      position: fixed; inset: 0; z-index: 600;
      display: flex; align-items: center; justify-content: center;
      background: radial-gradient(circle at center, #0f172a 0%, #020617 100%);
      font-family: 'Rajdhani', 'Segoe UI', system-ui, sans-serif;
      transition: opacity 0.5s ease;
    `;

    // Dynamic cyber-pitch background decor
    const bgDecor = document.createElement('div');
    bgDecor.style.cssText = `position: absolute; inset: 0; overflow: hidden; pointer-events: none;`;
    bgDecor.innerHTML = `
      <!-- Glowing center radial gradient -->
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:70vw;height:70vw;
        background:radial-gradient(circle,rgba(0,240,255,0.06) 0%,transparent 70%);border-radius:50%;filter:blur(30px);"></div>
      <!-- Perspective Cyber Grid -->
      <div style="position:absolute;bottom:0;left:0;right:0;height:70%;
        background-image:
          linear-gradient(rgba(0,240,255,0.05) 1.5px,transparent 1.5px),
          linear-gradient(90deg,rgba(0,240,255,0.05) 1.5px,transparent 1.5px);
        background-size: 60px 60px;
        background-position: center bottom;
        transform: perspective(600px) rotateX(65deg) translateY(0) translateZ(0);
        mask-image: linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);
        -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);
        animation: gridScrollLogin 15s linear infinite;"></div>
    `;
    this.container.appendChild(bgDecor);

    // Neon Style Sheet for Login Screen
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gridScrollLogin {
        0% { background-position: center 0px; }
        100% { background-position: center 120px; }
      }
      @keyframes floatingLogoLogin {
        0%, 100% { transform: translateY(0); filter: drop-shadow(0 0 35px rgba(220, 38, 38, 0.4)); }
        50% { transform: translateY(-8px); filter: drop-shadow(0 0 50px rgba(0, 240, 255, 0.5)); }
      }
      .login-glass-card {
        background: rgba(15, 23, 42, 0.65) !important;
        border: 2px solid rgba(0, 240, 255, 0.15) !important;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6), 
                    inset 0 1px 0 rgba(255,255,255,0.05),
                    0 0 20px rgba(0, 240, 255, 0.05) !important;
      }
      .login-input-focus {
        border-color: #00f0ff !important;
        box-shadow: 0 0 15px rgba(0, 240, 255, 0.25), inset 0 0 5px rgba(0,240,255,0.1) !important;
      }
      .btn-glow-primary {
        background: linear-gradient(135deg, #00f0ff 0%, #8b5cf6 100%) !important;
        box-shadow: 0 4px 15px rgba(0, 240, 255, 0.3) !important;
      }
      .btn-glow-primary:hover {
        box-shadow: 0 4px 25px rgba(0, 240, 255, 0.55) !important;
        transform: scale(1.02) !important;
      }
      .btn-glow-primary:active {
        transform: scale(0.98) !important;
      }
      .status-pulse {
        display: inline-block;
        width: 8px; height: 8px;
        background-color: #22c55e;
        border-radius: 50%;
        margin-right: 6px;
        box-shadow: 0 0 10px #22c55e;
        animation: statusBlink 1.8s infinite;
      }
      @keyframes statusBlink {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    // Card Container
    const card = document.createElement('div');
    card.className = 'login-glass-card';
    card.style.cssText = `
      position: relative; z-index: 1;
      display: flex; flex-direction: column; align-items: center;
      width: min(380px, 92vw);
      padding: 36px 28px;
      border-radius: 24px;
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
      text-align: center;
    `;

    // Logo & Header
    const logoContainer = document.createElement('div');
    logoContainer.style.cssText = `
      margin-bottom: 0.8rem;
      animation: floatingLogoLogin 4s ease-in-out infinite;
    `;
    logoContainer.innerHTML = footballSvg('100px');

    const title = document.createElement('h1');
    title.style.cssText = `
      font-size: 2.5rem; font-weight: 900; letter-spacing: 1px;
      color: #fff; margin-bottom: 0.1rem; text-transform: uppercase;
      background: linear-gradient(135deg, #ffffff 40%, #c7d2fe 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    `;
    title.textContent = '6x6 FOOTBALL';

    const subtitle = document.createElement('p');
    subtitle.style.cssText = `
      font-size: 0.75rem; color: #00f0ff;
      margin-bottom: 1.8rem; letter-spacing: 4px; text-transform: uppercase;
      font-weight: 700;
    `;
    subtitle.textContent = 'Cyber Stadium Edition';

    // Simulated Server Status Badge
    const serverStatus = document.createElement('div');
    serverStatus.style.cssText = `
      display: flex; align-items: center; justify-content: center;
      background: rgba(255,255,255,0.03);
      padding: 6px 14px; border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.05);
      font-size: 0.7rem; color: rgba(255,255,255,0.5);
      letter-spacing: 1.5px; text-transform: uppercase;
      font-weight: 700; margin-bottom: 1.5rem;
    `;
    serverStatus.innerHTML = `<span class="status-pulse"></span> SERVERS ONLINE • PING 32ms`;
    
    // Google Sign-In button container
    this.googleBtnContainer = document.createElement('div');
    this.googleBtnContainer.style.cssText = `margin-bottom: 8px; width: 100%; display: flex; justify-content: center;`;

    const googleBtn = document.createElement('div');
    googleBtn.className = 'g_id_signin';
    googleBtn.setAttribute('data-type', 'standard');
    googleBtn.setAttribute('data-shape', 'pill');
    googleBtn.setAttribute('data-theme', 'filled_black');
    googleBtn.setAttribute('data-text', 'signin_with');
    googleBtn.setAttribute('data-size', 'large');
    googleBtn.setAttribute('data-logo_alignment', 'left');
    this.googleBtnContainer.appendChild(googleBtn);

    // Or divider
    const orDiv = document.createElement('div');
    orDiv.style.cssText = `
      display: flex; align-items: center; gap: 12px; width: 100%; margin: 16px 0;
      color: rgba(255,255,255,0.25); font-size: 0.7rem; letter-spacing: 2px;
      font-weight: 700;
    `;
    const l1 = document.createElement('div');
    l1.style.cssText = `flex:1; height:1px; background: rgba(255,255,255,0.08);`;
    const ot = document.createElement('span');
    ot.textContent = 'OR';
    const l2 = document.createElement('div');
    l2.style.cssText = `flex:1; height:1px; background: rgba(255,255,255,0.08);`;
    orDiv.appendChild(l1);
    orDiv.appendChild(ot);
    orDiv.appendChild(l2);

    // Guest Profile Entry
    const guestLabel = document.createElement('div');
    guestLabel.style.cssText = `
      color: rgba(255,255,255,0.45); font-size: 0.75rem; 
      letter-spacing: 1.5px; margin-bottom: 8px; text-transform: uppercase;
      font-weight: 700; text-align: left; width: 100%;
    `;
    guestLabel.textContent = 'ENTER GAMERTAG';

    this.nameInput = document.createElement('input');
    this.nameInput.type = 'text';
    this.nameInput.placeholder = 'Tag Name...';
    this.nameInput.maxLength = 16;
    this.nameInput.style.cssText = `
      background: rgba(0,0,0,0.3); border: 1.5px solid rgba(255,255,255,0.1);
      color: #fff; padding: 12px 20px; font-size: 1rem; border-radius: 12px;
      outline: none; width: 100%; text-align: center; box-sizing: border-box;
      transition: all 0.25s ease;
      font-family: 'Rajdhani', sans-serif;
      font-weight: 700; letter-spacing: 1.5px;
    `;
    this.nameInput.addEventListener('focus', () => this.nameInput.classList.add('login-input-focus'));
    this.nameInput.addEventListener('blur', () => this.nameInput.classList.remove('login-input-focus'));

    const names = ['Striker', 'Blaze', 'Phantom', 'Nitro', 'Vortex', 'Fury', 'Shadow', 'Thunder', 'Ace', 'Bolt', 'Rebel', 'Rogue'];
    this.nameInput.value = names[Math.floor(Math.random() * names.length)] + '#' + Math.floor(1000 + Math.random() * 9000);

    // Guest button
    this.guestBtn = document.createElement('button');
    this.guestBtn.className = 'btn-glow-primary';
    this.guestBtn.textContent = 'LAUNCH AS GUEST';
    this.guestBtn.style.cssText = `
      border: none;
      color: #fff; padding: 14px 24px; font-size: 0.95rem;
      font-weight: 800; border-radius: 12px; cursor: pointer;
      transition: all 0.2s ease; letter-spacing: 2px; width: 100%;
      margin-top: 14px;
      font-family: 'Rajdhani', sans-serif;
      text-transform: uppercase;
      -webkit-tap-highlight-color: transparent;
    `;
    this.guestBtn.addEventListener('click', () => {
      const name = this.nameInput.value.trim() || 'Player';
      this.onLogin?.({ name, photo: '', method: 'guest' });
    });

    // Status / Connection message
    this.statusEl = document.createElement('div');
    this.statusEl.style.cssText = `
      margin-top: 16px; color: rgba(0,240,255,0.4); 
      font-size: 0.75rem; font-weight: 700; height: 1.2em;
      letter-spacing: 1px; text-transform: uppercase;
    `;

    card.appendChild(logoContainer);
    card.appendChild(title);
    card.appendChild(subtitle);
    card.appendChild(serverStatus);
    card.appendChild(this.googleBtnContainer);
    card.appendChild(orDiv);
    card.appendChild(guestLabel);
    card.appendChild(this.nameInput);
    card.appendChild(this.guestBtn);
    card.appendChild(this.statusEl);

    this.container.appendChild(card);
    document.body.appendChild(this.container);
  }

  setStatus(msg: string) {
    this.statusEl.textContent = msg;
    if (msg.toLowerCase().includes('connect')) {
      this.statusEl.style.color = '#22c55e';
    } else if (msg.toLowerCase().includes('disconnect')) {
      this.statusEl.style.color = '#ef4444';
    } else {
      this.statusEl.style.color = 'rgba(0,240,255,0.4)';
    }
  }

  show() {
    this.container.style.display = 'flex';
    this.container.style.opacity = '1';
  }

  hide() {
    this.container.style.opacity = '0';
    setTimeout(() => { this.container.style.display = 'none'; }, 500);
  }

  destroy() {
    this.container.remove();
  }
}
