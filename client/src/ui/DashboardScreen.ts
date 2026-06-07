import { FieldColor } from '../../../shared/index.js';

function footballSvg(size: string): string {
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <ellipse cx="100" cy="100" rx="70" ry="80" fill="white"/>
    <polygon points="100,50 128,72 118,106 82,106 72,72" fill="#00f0ff" stroke="#00f0ff" stroke-width="2.5"/>
    <line x1="100" y1="50" x2="100" y2="12" stroke="#00f0ff" stroke-width="3" stroke-linecap="round"/>
    <line x1="128" y1="72" x2="160" y2="56" stroke="#00f0ff" stroke-width="3" stroke-linecap="round"/>
    <line x1="118" y1="106" x2="148" y2="140" stroke="#00f0ff" stroke-width="3" stroke-linecap="round"/>
    <line x1="82" y1="106" x2="52" y2="140" stroke="#00f0ff" stroke-width="3" stroke-linecap="round"/>
    <line x1="72" y1="72" x2="40" y2="56" stroke="#00f0ff" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="100" cy="100" rx="68" ry="78" fill="none" stroke="#00f0ff" stroke-width="2"/>
  </svg>`;
}

function trophySvg(): string {
  return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-1 1.26V22h6v-3.74c-.53-.28-1-.71-1-1.26v-2.34"/>
    <path d="M8 4h8v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4z"/>
  </svg>`;
}

function gearSvg(): string {
  return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>`;
}

function paletteSvg(): string {
  return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.5-4.5-10-10-10z"/>
  </svg>`;
}

function bookSvg(): string {
  return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/>
  </svg>`;
}

function logoutSvg(): string {
  return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`;
}

const dashboardStyles = `
  .dash-touch-btn {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
  }
  .dash-touch-btn:active {
    transform: scale(0.96) !important;
  }

  .dashboard-glass-card {
    background: rgba(30, 41, 59, 0.45) !important;
    border: 1px solid rgba(255, 255, 255, 0.06) !important;
    border-radius: 20px;
    padding: 24px 20px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: all 0.3s ease;
  }
  @media (hover: hover) {
    .dashboard-glass-card:hover {
      border-color: rgba(0, 240, 255, 0.25) !important;
      background: rgba(30, 41, 59, 0.6) !important;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }
  }

  .lobby-tag-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
    border-radius: 8px; padding: 6px 12px; font-size: 0.75rem;
    cursor: pointer; font-weight: 700; transition: all 0.2s;
    letter-spacing: 1px; display: inline-flex; align-items: center; gap: 6px;
  }
  @media (hover: hover) {
    .lobby-tag-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #00f0ff;
      color: #00f0ff;
    }
  }

  .neon-border-blue {
    border: 1px solid rgba(0, 240, 255, 0.15) !important;
    box-shadow: 0 4px 20px rgba(0, 240, 255, 0.03);
  }
  .neon-border-orange {
    border: 1px solid rgba(245, 158, 11, 0.15) !important;
    box-shadow: 0 4px 20px rgba(245, 158, 11, 0.03);
  }
  .btn-mode-primary {
    background: linear-gradient(135deg, #00f0ff 0%, #0ea5e9 100%);
    border: none; color: #fff; padding: 12px 24px; font-size: 0.9rem;
    font-weight: 800; border-radius: 10px; cursor: pointer;
    transition: all 0.2s; letter-spacing: 1.5px; text-transform: uppercase;
    box-shadow: 0 4px 12px rgba(0, 240, 255, 0.2);
  }
  @media (hover: hover) {
    .btn-mode-primary:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 20px rgba(0, 240, 255, 0.4);
    }
  }
  .btn-mode-primary:active { transform: scale(0.98) !important; }

  .btn-mode-sec {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff; padding: 12px 20px; font-size: 0.85rem;
    font-weight: 700; border-radius: 10px; cursor: pointer;
    transition: all 0.2s; letter-spacing: 1.5px; text-transform: uppercase;
  }
  @media (hover: hover) {
    .btn-mode-sec:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.2);
    }
  }
  .btn-mode-sec:active { transform: scale(0.97) !important; }

  .join-code-input {
    background: rgba(0,0,0,0.3); border: 1.5px solid rgba(255,255,255,0.1);
    color: #fff; padding: 10px 14px; font-size: 0.95rem; border-radius: 10px;
    outline: none; transition: border-color 0.25s; text-align: center;
    font-family: 'Rajdhani', sans-serif; font-weight: 700; letter-spacing: 2px;
    width: 130px; text-transform: uppercase;
  }
  .join-code-input:focus { border-color: #00f0ff; }

  @keyframes dashCardIn {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .dash-card-anim {
    animation: dashCardIn 0.4s ease both;
  }
  .dash-card-anim:nth-child(2) { animation-delay: 0.08s; }
  .dash-card-anim:nth-child(3) { animation-delay: 0.16s; }
`;

export class DashboardScreen {
  private container: HTMLDivElement;
  private userPhotoEl: HTMLDivElement;
  private userNameEl: HTMLDivElement;
  private userSubEl: HTMLDivElement;
  private colorSwatches: HTMLDivElement;
  private colorSection: HTMLDivElement;
  private selectedColor: FieldColor = FieldColor.Green;
  private mainCards: HTMLDivElement;

  public onCreateRoom: (() => void) | null = null;
  public onJoinRoom: ((code: string) => void) | null = null;
  public onPractice: ((team: 'blue' | 'red') => void) | null = null;
  public onSettings: (() => void) | null = null;
  public onGuide: (() => void) | null = null;
  public onExit: (() => void) | null = null;
  public onColorChange: ((color: FieldColor) => void) | null = null;
  public onHeadBall: (() => void) | null = null;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'dashboard-screen';
    this.container.style.cssText = `
      position: fixed; inset: 0; z-index: 550;
      display: none; flex-direction: column;
      background: radial-gradient(circle at center, #0f172a 0%, #020617 100%);
      font-family: 'Rajdhani', 'Segoe UI', system-ui, sans-serif;
      padding: max(20px, env(safe-area-inset-top, 0px) + 10px)
               max(16px, env(safe-area-inset-right, 0px) + 16px)
               max(20px, env(safe-area-inset-bottom, 0px) + 10px)
               max(16px, env(safe-area-inset-left, 0px) + 16px);
      transition: opacity 0.3s;
      overflow-y: auto;
    `;

    // Dynamic grid background
    const bg = document.createElement('div');
    bg.style.cssText = `position: absolute; inset: 0; overflow: hidden; pointer-events: none;`;
    bg.innerHTML = `
      <div style="position:absolute;top:-200px;right:-100px;width:450px;height:450px;
        background:radial-gradient(circle,rgba(0,240,255,0.06),transparent 75%);border-radius:50%;filter:blur(30px);"></div>
      <div style="position:absolute;bottom:-150px;left:-150px;width:450px;height:450px;
        background:radial-gradient(circle,rgba(139,92,246,0.06),transparent 75%);border-radius:50%;filter:blur(30px);"></div>
    `;
    this.container.appendChild(bg);

    // Inject styles once
    if (!document.getElementById('dash-style')) {
      const style = document.createElement('style');
      style.id = 'dash-style';
      style.textContent = dashboardStyles;
      document.head.appendChild(style);
    }

    // Profile and Header Area
    const header = document.createElement('div');
    header.style.cssText = `
      position: relative; z-index: 1;
      display: flex; align-items: center; justify-content: space-between;
      padding: 12px 0 16px; margin-bottom: 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    `;

    const userProfileBlock = document.createElement('div');
    userProfileBlock.style.cssText = `display: flex; align-items: center; gap: 14px;`;

    this.userPhotoEl = document.createElement('div');
    this.userPhotoEl.style.cssText = `
      width: 46px; height: 46px; border-radius: 50%;
      background: linear-gradient(135deg, #00f0ff, #8b5cf6);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; overflow: hidden;
      border: 2px solid #00f0ff;
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
    `;
    this.userPhotoEl.innerHTML = footballSvg('30px');

    const userInfo = document.createElement('div');
    userInfo.style.cssText = `display: flex; flex-direction: column; justify-content: center;`;

    this.userNameEl = document.createElement('div');
    this.userNameEl.style.cssText = `
      font-size: 1.3rem; font-weight: 800; color: #fff;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      letter-spacing: 0.5px;
    `;
    this.userNameEl.textContent = 'Player';

    this.userSubEl = document.createElement('div');
    this.userSubEl.style.cssText = `
      color: #00f0ff; font-size: 0.75rem; letter-spacing: 1px;
      text-transform: uppercase; font-weight: 700;
    `;
    this.userSubEl.textContent = 'Lvl 1 Rookie • Ready';

    userInfo.appendChild(this.userNameEl);
    userInfo.appendChild(this.userSubEl);
    userProfileBlock.appendChild(this.userPhotoEl);
    userProfileBlock.appendChild(userInfo);

    // Right Side Stats & Settings
    const headerRight = document.createElement('div');
    headerRight.style.cssText = `display: flex; align-items: center; gap: 12px;`;

    const trophyBadge = document.createElement('div');
    trophyBadge.style.cssText = `
      background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3);
      padding: 6px 14px; border-radius: 20px; font-weight: 800; font-size: 0.8rem;
      color: #fbbf24; display: flex; align-items: center; gap: 6px; letter-spacing: 0.5px;
    `;
    trophyBadge.innerHTML = `${trophySvg()} ARENA`;

    const configBtn = document.createElement('button');
    configBtn.className = 'lobby-tag-btn dash-touch-btn';
    configBtn.innerHTML = gearSvg();
    configBtn.style.cssText = `width: 38px; height: 38px; border-radius: 50%; justify-content: center; padding: 0;`;
    configBtn.addEventListener('click', () => this.onSettings?.());

    headerRight.appendChild(trophyBadge);
    headerRight.appendChild(configBtn);

    header.appendChild(userProfileBlock);
    header.appendChild(headerRight);
    this.container.appendChild(header);

    // Modes & Layout Body
    this.mainCards = document.createElement('div');
    this.mainCards.style.cssText = `
      position: relative; z-index: 1;
      display: grid; grid-template-columns: 1fr; gap: 16px;
      margin-bottom: 16px;
    `;

    const mediaCheck = () => {
      this.mainCards.style.gridTemplateColumns = window.innerWidth > 768 ? '1fr 1fr' : '1fr';
    };
    window.addEventListener('resize', mediaCheck);
    setTimeout(mediaCheck, 100);

    // Card 1: Online Match Card
    const onlineCard = document.createElement('div');
    onlineCard.className = 'dashboard-glass-card neon-border-blue dash-card-anim';
    onlineCard.style.cssText = `display: flex; flex-direction: column; justify-content: space-between; min-height: 200px;`;

    const onlineHeader = document.createElement('div');
    onlineHeader.style.cssText = `margin-bottom: 16px;`;
    onlineHeader.innerHTML = `
      <div style="font-size: 0.75rem; font-weight: 800; color: #00f0ff; letter-spacing: 2px; text-transform: uppercase;">ONLINE ARENA</div>
      <div style="font-size: 1.4rem; font-weight: 900; color: #fff; margin: 4px 0 2px; letter-spacing: 0.5px;">MULTIPLAYER ROOM</div>
      <div style="font-size: 0.8rem; color: rgba(255,255,255,0.4); font-weight: 600;">Play online matches against friends and rivals.</div>
    `;

    const onlineActions = document.createElement('div');
    onlineActions.style.cssText = `display: flex; flex-direction: column; gap: 12px; margin-top: auto;`;

    const hostBtn = document.createElement('button');
    hostBtn.className = 'btn-mode-primary dash-touch-btn';
    hostBtn.textContent = 'HOST NEW LOBBY';
    hostBtn.addEventListener('click', () => this.onCreateRoom?.());

    const joinRow = document.createElement('div');
    joinRow.style.cssText = `display: flex; gap: 8px; width: 100%;`;

    const codeInput = document.createElement('input');
    codeInput.type = 'text';
    codeInput.className = 'join-code-input';
    codeInput.placeholder = 'CODE';
    codeInput.maxLength = 5;

    const joinBtn = document.createElement('button');
    joinBtn.className = 'btn-mode-sec dash-touch-btn';
    joinBtn.style.cssText = `flex: 1; padding: 10px 16px;`;
    joinBtn.textContent = 'JOIN LOBBY';
    joinBtn.addEventListener('click', () => {
      const code = codeInput.value.trim().toUpperCase();
      if (code) {
        this.onJoinRoom?.(code);
      }
    });

    joinRow.appendChild(codeInput);
    joinRow.appendChild(joinBtn);
    onlineActions.appendChild(hostBtn);
    onlineActions.appendChild(joinRow);
    onlineCard.appendChild(onlineHeader);
    onlineCard.appendChild(onlineActions);

    // Card 2: Practice vs Bots Card
    const practiceCard = document.createElement('div');
    practiceCard.className = 'dashboard-glass-card neon-border-orange dash-card-anim';
    practiceCard.style.cssText = `display: flex; flex-direction: column; justify-content: space-between; min-height: 200px;`;

    const practiceHeader = document.createElement('div');
    practiceHeader.style.cssText = `margin-bottom: 16px;`;
    practiceHeader.innerHTML = `
      <div style="font-size: 0.75rem; font-weight: 800; color: #fbbf24; letter-spacing: 2px; text-transform: uppercase;">TRAINING SYSTEM</div>
      <div style="font-size: 1.4rem; font-weight: 900; color: #fff; margin: 4px 0 2px; letter-spacing: 0.5px;">VS BOTS PRACTICE</div>
      <div style="font-size: 0.8rem; color: rgba(255,255,255,0.4); font-weight: 600;">Play an offline scrimmage match against AI players.</div>
    `;

    const practiceActions = document.createElement('div');
    practiceActions.style.cssText = `display: flex; flex-direction: column; gap: 8px; margin-top: auto;`;

    const selectTeamLabel = document.createElement('div');
    selectTeamLabel.style.cssText = `font-size: 0.7rem; color: rgba(255,255,255,0.3); font-weight: 800; letter-spacing: 1px; text-transform: uppercase; text-align: center; margin-bottom: 4px;`;
    selectTeamLabel.textContent = 'CHOOSE TEAM TO START MATCH';

    const teamsRow = document.createElement('div');
    teamsRow.style.cssText = `display: flex; gap: 10px; width: 100%;`;

    const blueTeamBtn = document.createElement('button');
    blueTeamBtn.className = 'btn-mode-primary dash-touch-btn';
    blueTeamBtn.style.cssText = `flex: 1; background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%); box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);`;
    blueTeamBtn.textContent = 'BLUE';
    blueTeamBtn.addEventListener('click', () => this.onPractice?.('blue'));

    const redTeamBtn = document.createElement('button');
    redTeamBtn.className = 'btn-mode-primary dash-touch-btn';
    redTeamBtn.style.cssText = `flex: 1; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); box-shadow: 0 4px 10px rgba(239, 68, 68, 0.25);`;
    redTeamBtn.textContent = 'RED';
    redTeamBtn.addEventListener('click', () => this.onPractice?.('red'));

    teamsRow.appendChild(blueTeamBtn);
    teamsRow.appendChild(redTeamBtn);
    practiceActions.appendChild(selectTeamLabel);
    practiceActions.appendChild(teamsRow);
    practiceCard.appendChild(practiceHeader);
    practiceCard.appendChild(practiceActions);

    // Card 3: Head Ball
    const headBallCard = document.createElement('div');
    headBallCard.className = 'dashboard-glass-card neon-border-green dash-card-anim';
    headBallCard.style.cssText = `display: flex; flex-direction: column; justify-content: space-between; min-height: 200px;`;

    const hbHeader = document.createElement('div');
    hbHeader.style.cssText = `margin-bottom: 16px;`;
    hbHeader.innerHTML = `
      <div style="font-size: 0.75rem; font-weight: 800; color: #22c55e; letter-spacing: 2px; text-transform: uppercase;">ARCADE MODE</div>
      <div style="font-size: 1.4rem; font-weight: 900; color: #fff; margin: 4px 0 2px; letter-spacing: 0.5px;">⚽ HEAD BALL</div>
      <div style="font-size: 0.8rem; color: rgba(255,255,255,0.4); font-weight: 600;">1v1 big-head football. Quick 90s matches.</div>
    `;

    const hbActions = document.createElement('div');
    hbActions.style.cssText = `display: flex; flex-direction: column; gap: 8px; margin-top: auto;`;

    const hbPlayBtn = document.createElement('button');
    hbPlayBtn.className = 'btn-mode-primary dash-touch-btn';
    hbPlayBtn.style.cssText = `background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); box-shadow: 0 4px 10px rgba(34,197,94,0.25);`;
    hbPlayBtn.textContent = 'PLAY HEAD BALL';
    hbPlayBtn.addEventListener('click', () => this.onHeadBall?.());

    hbActions.appendChild(hbPlayBtn);
    headBallCard.appendChild(hbHeader);
    headBallCard.appendChild(hbActions);

    this.mainCards.appendChild(onlineCard);
    this.mainCards.appendChild(practiceCard);
    this.mainCards.appendChild(headBallCard);
    this.container.appendChild(this.mainCards);

    // Bottom utilities row
    const utilitiesRow = document.createElement('div');
    utilitiesRow.style.cssText = `
      position: relative; z-index: 1;
      display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
      margin-bottom: 12px;
    `;

    const themeBtn = document.createElement('button');
    themeBtn.className = 'lobby-tag-btn dash-touch-btn';
    themeBtn.innerHTML = `${paletteSvg()} GROUND THEME`;
    themeBtn.style.cssText = `justify-content: center; padding: 12px; border-radius: 12px;`;
    themeBtn.addEventListener('click', () => this.toggleColorPicker());

    const guideBtn = document.createElement('button');
    guideBtn.className = 'lobby-tag-btn dash-touch-btn';
    guideBtn.innerHTML = `${bookSvg()} MANUAL & GUIDE`;
    guideBtn.style.cssText = `justify-content: center; padding: 12px; border-radius: 12px;`;
    guideBtn.addEventListener('click', () => this.onGuide?.());

    utilitiesRow.appendChild(themeBtn);
    utilitiesRow.appendChild(guideBtn);
    this.container.appendChild(utilitiesRow);

    // Ground/Pitch Theme selector tray (hidden by default)
    this.colorSection = document.createElement('div');
    this.colorSection.className = 'dashboard-glass-card';
    this.colorSection.style.cssText = `
      position: relative; z-index: 1;
      display: none; flex-direction: column; align-items: center;
      margin-bottom: 16px; padding: 16px 20px;
    `;

    const colorTitle = document.createElement('div');
    colorTitle.style.cssText = `color: rgba(255,255,255,0.4); font-size: 0.75rem; letter-spacing: 1px; margin-bottom: 12px; text-transform: uppercase; font-weight: 700;`;
    colorTitle.textContent = 'CHOOSE PITCH COLOR';

    this.colorSwatches = document.createElement('div');
    this.colorSwatches.style.cssText = `display: flex; gap: 20px; justify-content: center;`;

    const colors: { key: FieldColor; bg: string; label: string }[] = [
      { key: FieldColor.Green, bg: 'linear-gradient(135deg, #1a8a3a, #2a9a4a)', label: 'Green' },
      { key: FieldColor.Black, bg: 'linear-gradient(135deg, #111111, #222222)', label: 'Black' },
    ];

    colors.forEach((c) => {
      const swatch = document.createElement('button');
      const isActive = c.key === this.selectedColor;
      swatch.style.cssText = `
        width: 48px; height: 48px; border-radius: 50%;
        background: ${c.bg}; border: 3px solid ${isActive ? '#00f0ff' : 'rgba(255,255,255,0.15)'};
        cursor: pointer; transition: all 0.2s; outline: none;
        box-shadow: ${isActive ? '0 0 14px rgba(0,240,255,0.45)' : 'none'};
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
        position: relative;
      `;
      swatch.title = c.label;
      swatch.addEventListener('click', () => {
        this.selectedColor = c.key;
        this.updateSwatches(colors);
        this.onColorChange?.(c.key);
      });
      this.colorSwatches.appendChild(swatch);
    });

    this.colorSection.appendChild(colorTitle);
    this.colorSection.appendChild(this.colorSwatches);
    this.container.appendChild(this.colorSection);

    // Logout button
    const exitBtn = document.createElement('button');
    exitBtn.className = 'dash-touch-btn';
    exitBtn.style.cssText = `
      align-self: center; margin-top: auto; margin-bottom: 8px;
      position: relative; z-index: 1;
      background: rgba(239, 68, 68, 0.08); border: 1.5px solid rgba(239, 68, 68, 0.2);
      color: rgba(239, 68, 68, 0.85); padding: 10px 24px; font-size: 0.8rem;
      font-weight: 800; border-radius: 12px; cursor: pointer;
      transition: all 0.2s; letter-spacing: 1.5px;
      display: inline-flex; align-items: center; gap: 8px;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
      user-select: none;
      -webkit-user-select: none;
    `;
    exitBtn.innerHTML = `${logoutSvg()} LOGOUT`;
    exitBtn.addEventListener('mouseenter', () => {
      exitBtn.style.background = 'rgba(239, 68, 68, 0.18)';
      exitBtn.style.borderColor = '#ef4444';
    });
    exitBtn.addEventListener('mouseleave', () => {
      exitBtn.style.background = 'rgba(239, 68, 68, 0.08)';
      exitBtn.style.borderColor = 'rgba(239, 68, 68, 0.2)';
    });
    exitBtn.addEventListener('click', () => this.onExit?.());
    this.container.appendChild(exitBtn);

    document.body.appendChild(this.container);
  }

  private updateSwatches(colors: { key: FieldColor; bg: string }[]) {
    const swatches = this.colorSwatches.querySelectorAll('button');
    swatches.forEach((swatch, i) => {
      const el = swatch as HTMLButtonElement;
      const isActive = colors[i].key === this.selectedColor;
      el.style.borderColor = isActive ? '#00f0ff' : 'rgba(255,255,255,0.15)';
      el.style.boxShadow = isActive ? '0 0 14px rgba(0,240,255,0.45)' : 'none';
    });
  }

  private toggleColorPicker() {
    const isHidden = this.colorSection.style.display === 'none';
    this.colorSection.style.display = isHidden ? 'flex' : 'none';
  }

  setColor(color: FieldColor) {
    this.selectedColor = color;
  }

  setUser(name: string, photo: string) {
    this.userNameEl.textContent = name;

    let stats = { wins: 0, matches: 0, level: 1, xp: 0 };
    try {
      const statsRaw = localStorage.getItem('football_career_stats');
      if (statsRaw) stats = JSON.parse(statsRaw);
    } catch {}

    const winRate = stats.matches > 0 ? Math.round((stats.wins / stats.matches) * 100) : 0;
    this.userSubEl.innerHTML = `Lvl ${stats.level} Rookie <span style="color:rgba(255,255,255,0.25);margin:0 5px;">•</span> ${stats.wins} Wins (${winRate}% WR)`;

    if (photo) {
      this.userPhotoEl.style.background = 'transparent';
      this.userPhotoEl.innerHTML = `<img src="${photo}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" />`;
    } else {
      this.userPhotoEl.style.background = 'linear-gradient(135deg, #00f0ff, #8b5cf6)';
      this.userPhotoEl.innerHTML = footballSvg('30px');
    }
  }

  show() {
    this.container.style.display = 'flex';
    this.container.style.opacity = '1';
    // Re-trigger card animations by resetting animation
    const cards = this.mainCards.querySelectorAll('.dash-card-anim');
    cards.forEach((c, i) => {
      (c as HTMLElement).style.animation = 'none';
      void (c as HTMLElement).offsetHeight;
      (c as HTMLElement).style.animation = '';
    });
  }

  hide() {
    this.container.style.opacity = '0';
    setTimeout(() => { this.container.style.display = 'none'; }, 300);
  }
}
