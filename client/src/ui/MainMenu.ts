export class MainMenu {
  private container: HTMLDivElement;
  private nameInput: HTMLInputElement;
  private playBtn: HTMLButtonElement;
  private quickPlayBtn: HTMLButtonElement;
  private statusEl: HTMLDivElement;
  private connDot: HTMLDivElement;
  private queueCountEl: HTMLDivElement;
  private isMobile: boolean;

  public onPlay: ((name: string) => void) | null = null;

  constructor() {
    this.isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.container = document.createElement('div');
    this.container.id = 'main-menu';
    this.container.style.cssText = `
      position: fixed; inset: 0; z-index: 500;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #05050a 0%, #0d0d2b 100%);
      transition: opacity 0.5s;
    `;

    // Animated background grid
    const bgDecor = document.createElement('div');
    bgDecor.style.cssText = `
      position: absolute; inset: 0; overflow: hidden; pointer-events: none;
    `;
    bgDecor.innerHTML = `
      <div style="position:absolute;top:-200px;left:-200px;width:600px;height:600px;
        background:radial-gradient(circle,rgba(0,240,255,0.08),transparent 70%);border-radius:50%;"></div>
      <div style="position:absolute;bottom:-200px;right:-200px;width:600px;height:600px;
        background:radial-gradient(circle,rgba(139,92,246,0.08),transparent 70%);border-radius:50%;"></div>
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:800px;height:800px;
        background:radial-gradient(circle,rgba(0,240,255,0.03),transparent 60%);border-radius:50%;"></div>
      <div style="position:absolute;top:0;left:0;right:0;bottom:0;
        background-image:
          linear-gradient(rgba(0,240,255,0.03) 1px,transparent 1px),
          linear-gradient(90deg,rgba(0,240,255,0.03) 1px,transparent 1px);
        background-size: 60px 60px;"></div>
    `;
    this.container.appendChild(bgDecor);

    // Title with glow
    const title = document.createElement('h1');
    title.style.cssText = `
      font-size: clamp(2.5rem, 12vw, 5.5rem); font-weight: 900; letter-spacing: -3px;
      background: linear-gradient(135deg, #00f0ff, #8b5cf6, #00f0ff);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      margin-bottom: 0.25rem; position: relative; text-align: center;
      text-shadow: 0 0 80px rgba(0,240,255,0.3);
    `;
    title.textContent = '6x6 FOOTBALL';

    const subtitle = document.createElement('p');
    subtitle.style.cssText = `
      font-size: clamp(0.6rem, 3vw, 0.85rem); color: rgba(0,240,255,0.5); margin-bottom: 2.5rem;
      letter-spacing: 6px; text-transform: uppercase;
    `;
    subtitle.textContent = '3D Football Game';

    // Name input
    const inputContainer = document.createElement('div');
    inputContainer.style.cssText = `
      display: flex; flex-direction: column; gap: 12px; align-items: center; width: 100%;
    `;

    this.nameInput = document.createElement('input');
    this.nameInput.type = 'text';
    this.nameInput.placeholder = 'Enter your name';
    this.nameInput.maxLength = 16;
    this.nameInput.style.cssText = `
      background: rgba(255,255,255,0.03); border: 1px solid rgba(0,240,255,0.15);
      color: #fff; padding: 12px 24px; font-size: 1rem; border-radius: 8px;
      outline: none; width: min(280px, 85vw); text-align: center;
      transition: border-color 0.3s;
    `;
    this.nameInput.addEventListener('focus', () => {
      this.nameInput.style.borderColor = '#00f0ff';
    });
    this.nameInput.addEventListener('blur', () => {
      this.nameInput.style.borderColor = 'rgba(0,240,255,0.15)';
    });
    this.nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.play();
    });

    const names = ['Striker', 'Blaze', 'Phantom', 'Nitro', 'Vortex', 'Fury', 'Shadow', 'Thunder', 'Ace', 'Bolt'];
    this.nameInput.value = names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random() * 100);

    // Find Match button
    this.playBtn = document.createElement('button');
    this.playBtn.textContent = 'FIND MATCH';
    this.playBtn.style.cssText = `
      background: linear-gradient(135deg, #00f0ff, #8b5cf6);
      color: #fff; border: none; padding: 14px 48px; font-size: clamp(1rem, 4vw, 1.1rem);
      font-weight: 700; border-radius: 8px; cursor: pointer;
      transition: all 0.3s; letter-spacing: 2px;
      width: min(280px, 85vw);
    `;
    this.playBtn.addEventListener('mouseenter', () => {
      this.playBtn.style.transform = 'translateY(-2px)';
      this.playBtn.style.boxShadow = '0 8px 30px rgba(0,240,255,0.3)';
    });
    this.playBtn.addEventListener('mouseleave', () => {
      this.playBtn.style.transform = '';
      this.playBtn.style.boxShadow = '';
    });
    this.playBtn.addEventListener('click', () => this.play());

    // Quick Play button
    this.quickPlayBtn = document.createElement('button');
    this.quickPlayBtn.textContent = '⚡ QUICK PLAY';
    this.quickPlayBtn.style.cssText = `
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.6); padding: 10px 24px; font-size: clamp(0.8rem, 3vw, 0.9rem);
      font-weight: 600; border-radius: 8px; cursor: pointer;
      transition: all 0.2s; letter-spacing: 1px;
      width: min(280px, 85vw);
    `;
    this.quickPlayBtn.addEventListener('click', () => {
      const name = this.nameInput.value.trim() || 'Player';
      this.onPlay?.(name);
      this.showConnecting();
    });

    // Status
    this.statusEl = document.createElement('div');
    this.statusEl.style.cssText = `
      margin-top: 0.5rem; color: rgba(0,240,255,0.6); font-size: 0.85rem;
    `;

    // Connection + queue status row
    const statusRow = document.createElement('div');
    statusRow.style.cssText = `
      display: flex; align-items: center; gap: 8px; margin-top: 1rem;
      color: rgba(255,255,255,0.25); font-size: 0.7rem;
    `;

    this.connDot = document.createElement('div');
    this.connDot.style.cssText = `
      width: 6px; height: 6px; border-radius: 50%;
      background: #eab308; transition: background 0.3s;
    `;

    const connLabel = document.createElement('span');
    connLabel.textContent = 'Connecting...';

    this.queueCountEl = document.createElement('div');
    this.queueCountEl.style.cssText = `
      margin-left: auto; color: rgba(255,255,255,0.2);
    `;
    this.queueCountEl.textContent = '';

    statusRow.appendChild(this.connDot);
    statusRow.appendChild(connLabel);
    statusRow.appendChild(this.queueCountEl);

    // Controls info
    const controls = document.createElement('div');
    controls.style.cssText = `
      margin-top: 2rem; color: rgba(255,255,255,0.15); font-size: clamp(0.55rem, 2.5vw, 0.7rem);
      text-align: center; line-height: 2;
    `;
    const controlsHTML = this.isMobile
      ? `
         Left Stick - Move &nbsp;|&nbsp; Right Drag - Look<br>
         Jump &nbsp;|&nbsp; Boost &nbsp;|&nbsp; Kick (hold to charge)
         <br><br>
         <a href="https://github.com/Rcciit1234" target="_blank" style="color:rgba(0,240,255,0.3);text-decoration:none;transition:color 0.3s;"
            onmouseover="this.style.color='rgba(0,240,255,0.8)'" onmouseout="this.style.color='rgba(0,240,255,0.3)'">github.com/Rcciit1234</a>`
      : `
         W/Up - Run Forward &nbsp;|&nbsp; S/Down - Run Back<br>
         A/Left - Strafe Left &nbsp;|&nbsp; D/Right - Strafe Right<br>
         Space - Jump &nbsp;|&nbsp; Shift - Sprint &nbsp;|&nbsp; Click/E - Kick<br>
         Mouse - Look Around &nbsp;|&nbsp; M - Mute
         <br><br>
         <a href="https://github.com/Rcciit1234" target="_blank" style="color:rgba(0,240,255,0.3);text-decoration:none;transition:color 0.3s;"
            onmouseover="this.style.color='rgba(0,240,255,0.8)'" onmouseout="this.style.color='rgba(0,240,255,0.3)'">github.com/Rcciit1234</a>`;
    controls.innerHTML = controlsHTML;

    inputContainer.appendChild(this.nameInput);
    inputContainer.appendChild(this.playBtn);
    inputContainer.appendChild(this.quickPlayBtn);
    inputContainer.appendChild(this.statusEl);
    inputContainer.appendChild(statusRow);

    this.container.appendChild(title);
    this.container.appendChild(subtitle);
    this.container.appendChild(inputContainer);
    this.container.appendChild(controls);

    document.body.appendChild(this.container);
  }

  private play() {
    const name = this.nameInput.value.trim() || 'Player';
    this.onPlay?.(name);
    this.showConnecting();
  }

  setConnected(connected: boolean) {
    this.connDot.style.background = connected ? '#22c55e' : '#ef4444';
    this.connDot.style.boxShadow = connected
      ? '0 0 6px rgba(34,197,94,0.4)'
      : '0 0 6px rgba(239,68,68,0.4)';
  }

  setQueueCount(count: number) {
    if (count > 0) {
      this.queueCountEl.textContent = `${count} in queue`;
    } else {
      this.queueCountEl.textContent = '';
    }
  }

  showConnecting() {
    this.playBtn.disabled = true;
    this.playBtn.textContent = 'SEARCHING...';
    this.playBtn.style.opacity = '0.6';
    this.quickPlayBtn.disabled = true;
    this.quickPlayBtn.style.opacity = '0.4';
    this.statusEl.textContent = 'Looking for players...';

    let dots = 0;
    const interval = setInterval(() => {
      dots = (dots + 1) % 4;
      this.statusEl.textContent = 'Looking for players' + '.'.repeat(dots);
    }, 500);

    (this.container as any)._dotsInterval = interval;
  }

  show() {
    this.container.style.display = 'flex';
    this.container.style.opacity = '1';
    this.playBtn.disabled = false;
    this.playBtn.textContent = 'FIND MATCH';
    this.playBtn.style.opacity = '1';
    this.quickPlayBtn.disabled = false;
    this.quickPlayBtn.style.opacity = '1';
    this.statusEl.textContent = '';

    const interval = (this.container as any)._dotsInterval;
    if (interval) clearInterval(interval);
  }

  hide() {
    this.container.style.opacity = '0';
    setTimeout(() => {
      this.container.style.display = 'none';
    }, 500);

    const interval = (this.container as any)._dotsInterval;
    if (interval) clearInterval(interval);
  }
}
