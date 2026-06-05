import { Team } from '../../../shared/index.js';

export class HUD {
  private container: HTMLDivElement;
  private scoreEl: HTMLDivElement;
  private timerEl: HTMLDivElement;
  private possessionEl: HTMLDivElement;
  private countdownEl: HTMLDivElement;
  private goalNotificationEl: HTMLDivElement;
  private matchEndEl: HTMLDivElement;
  private notificationEl: HTMLDivElement;
  private staminaFill: HTMLDivElement;
  private latencyDot: HTMLDivElement;
  private pauseBtn: HTMLButtonElement;
  private notificationTimeout: number | null = null;
  private isMobile: boolean;
  private currentMode: 'attack' | 'defence' = 'attack';

  public onPauseQuit: (() => void) | null = null;
  public onModeToggle: ((mode: 'attack' | 'defence') => void) | null = null;
  private ignoreModeToggle = false;

  private teamAName = 'HOME';
  private teamBName = 'AWAY';

  private totalPossessionTicks = 0;
  private teamAPossessionTicks = 0;

  constructor() {
    this.isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.container = document.createElement('div');
    this.container.id = 'hud';
    this.container.style.cssText = `
      position: fixed; inset: 0; pointer-events: none; z-index: 100;
      font-family: 'Rajdhani', 'Segoe UI', system-ui, sans-serif;
    `;

    this.scoreEl = document.createElement('div');
    this.scoreEl.style.cssText = `
      position: absolute; top: ${this.isMobile ? '10px' : '20px'}; left: 50%; transform: translateX(-50%);
      display: flex; align-items: center; gap: ${this.isMobile ? '8px' : '14px'};
      background: rgba(0,0,0,0.65); padding: ${this.isMobile ? '6px 14px' : '8px 24px'}; border-radius: 12px;
      backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08);
    `;
    this.scoreEl.innerHTML = this.buildScoreHTML('0', '0');

    this.timerEl = document.createElement('div');
    this.timerEl.style.cssText = `
      position: absolute; top: ${this.isMobile ? '48px' : '72px'}; left: 50%; transform: translateX(-50%);
      color: rgba(255,255,255,0.8); font-size: ${this.isMobile ? '0.9rem' : '1.1rem'}; font-weight: 700;
      background: rgba(0,0,0,0.4); padding: 2px 14px; border-radius: 6px;
      font-variant-numeric: tabular-nums; letter-spacing: 0.5px;
    `;
    this.timerEl.textContent = '5:00';

    this.possessionEl = document.createElement('div');
    this.possessionEl.style.cssText = `
      position: absolute; top: ${this.isMobile ? '72px' : '98px'}; left: 50%; transform: translateX(-50%);
      display: flex; align-items: center; gap: 6px;
      font-size: 0.6rem; font-weight: 600; color: rgba(255,255,255,0.5);
      letter-spacing: 0.5px;
    `;
    this.possessionEl.textContent = '';

    // Stamina gauge
    const staminaContainer = document.createElement('div');
    staminaContainer.style.cssText = `
      position: absolute; bottom: ${this.isMobile ? '180px' : '120px'}; left: ${this.isMobile ? '16px' : '30px'};
      width: ${this.isMobile ? '80px' : '120px'}; height: 6px;
      background: rgba(255,255,255,0.08); border-radius: 3px;
      overflow: hidden; border: 1px solid rgba(0,200,100,0.15);
    `;
    this.staminaFill = document.createElement('div');
    this.staminaFill.style.cssText = `
      width: 100%; height: 100%;
      background: linear-gradient(90deg, #22c55e, #16a34a, #15803d);
      border-radius: 3px; transition: width 0.15s;
    `;
    staminaContainer.appendChild(this.staminaFill);

    const staminaLabel = document.createElement('div');
    staminaLabel.style.cssText = `
      position: absolute; bottom: ${this.isMobile ? '192px' : '132px'}; left: ${this.isMobile ? '16px' : '30px'};
      color: rgba(0,200,100,0.5); font-size: 0.5rem; letter-spacing: 1px;
      text-transform: uppercase;
    `;
    staminaLabel.textContent = 'Stamina';

    // Latency indicator
    this.latencyDot = document.createElement('div');
    this.latencyDot.style.cssText = `
      position: absolute; top: ${this.isMobile ? '10px' : '15px'}; right: ${this.isMobile ? '10px' : '15px'};
      width: 8px; height: 8px; border-radius: 50%;
      background: #22c55e; box-shadow: 0 0 6px rgba(34,197,94,0.4);
      transition: background 0.3s;
    `;

    // Pause/quit button
    this.pauseBtn = document.createElement('button');
    this.pauseBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="4" x2="6" y2="20"/><line x1="18" y1="4" x2="18" y2="20"/></svg>`;
    this.pauseBtn.style.cssText = `
      position: absolute; top: ${this.isMobile ? '8px' : '15px'}; left: ${this.isMobile ? '8px' : '15px'};
      width: 40px; height: 40px; border-radius: 10px;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.6); display: flex; align-items: center; justify-content: center;
      pointer-events: auto; cursor: pointer; z-index: 102;
      -webkit-tap-highlight-color: transparent; outline: none;
    `;
    this.pauseBtn.addEventListener('click', () => {
      this.onPauseQuit?.();
    });

    // Countdown overlay
    this.countdownEl = document.createElement('div');
    this.countdownEl.style.cssText = `
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      font-size: 6rem; font-weight: 900; color: #fff;
      text-shadow: 0 0 40px rgba(255,255,255,0.3);
      opacity: 0; transition: opacity 0.3s;
    `;

    // Goal notification
    this.goalNotificationEl = document.createElement('div');
    this.goalNotificationEl.style.cssText = `
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      font-size: 4rem; font-weight: 900;
      text-shadow: 0 0 60px rgba(255,255,255,0.5);
      opacity: 0; transition: all 0.5s;
      text-align: center;
    `;

    const flash = document.createElement('div');
    flash.id = 'goal-flash';
    flash.style.cssText = `
      position: fixed; inset: 0; z-index: 99; pointer-events: none;
      opacity: 0; transition: opacity 0.15s;
    `;
    document.body.appendChild(flash);

    // Match end
    this.matchEndEl = document.createElement('div');
    this.matchEndEl.style.cssText = `
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      opacity: 0; transition: opacity 0.5s;
      text-align: center; pointer-events: none;
    `;

    // Notification overlay
    this.notificationEl = document.createElement('div');
    this.notificationEl.style.cssText = `
      position: absolute; top: 100px; left: 50%; transform: translateX(-50%);
      color: #fff; font-size: 0.85rem; font-weight: 600;
      background: rgba(0,0,0,0.5); padding: 4px 16px; border-radius: 6px;
      opacity: 0; transition: opacity 0.3s;
      pointer-events: none;
    `;

    this.container.appendChild(this.scoreEl);
    this.container.appendChild(this.timerEl);
    this.container.appendChild(this.possessionEl);
    this.container.appendChild(staminaContainer);
    this.container.appendChild(staminaLabel);
    this.container.appendChild(this.latencyDot);
    this.container.appendChild(this.pauseBtn);
    this.container.appendChild(this.countdownEl);
    this.container.appendChild(this.goalNotificationEl);
    this.container.appendChild(this.matchEndEl);
    this.container.appendChild(this.notificationEl);

    document.body.appendChild(this.container);
  }

  private buildScoreHTML(blue: string, red: string): string {
    return `
      <div style="display:flex;align-items:center;gap:${this.isMobile ? '4px' : '8px'};">
        <span style="font-size:${this.isMobile ? '0.55rem' : '0.65rem'};color:rgba(255,255,255,0.5);max-width:50px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right;">
          ${this.teamAName}
        </span>
        <div style="display:flex;align-items:center;gap:${this.isMobile ? '4px' : '6px'};">
          <div style="width:6px;height:6px;border-radius:50%;background:#00f0ff;"></div>
          <span style="color:#00f0ff;font-size:${this.isMobile ? '1.4rem' : '1.6rem'};font-weight:800;font-variant-numeric:tabular-nums;">${blue}</span>
        </div>
        <span style="color:rgba(255,255,255,0.2);font-size:${this.isMobile ? '0.6rem' : '0.7rem'};letter-spacing:1px;">VS</span>
        <div style="display:flex;align-items:center;gap:${this.isMobile ? '4px' : '6px'};">
          <span style="color:#ef4444;font-size:${this.isMobile ? '1.4rem' : '1.6rem'};font-weight:800;font-variant-numeric:tabular-nums;">${red}</span>
          <div style="width:6px;height:6px;border-radius:50%;background:#ef4444;"></div>
        </div>
        <span style="font-size:${this.isMobile ? '0.55rem' : '0.65rem'};color:rgba(255,255,255,0.5);max-width:50px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
          ${this.teamBName}
        </span>
      </div>
    `;
  }

  setTeamNames(teamA: string, teamB: string) {
    this.teamAName = teamA;
    this.teamBName = teamB;
  }

  updateScore(blue: number, red: number) {
    this.scoreEl.innerHTML = this.buildScoreHTML(String(blue), String(red));
  }

  updateTimer(seconds: number) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    this.timerEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  updateStamina(amount: number) {
    const pct = Math.max(0, Math.min(100, amount));
    this.staminaFill.style.width = `${pct}%`;
    if (pct < 25) {
      this.staminaFill.style.background = 'linear-gradient(90deg, #ef4444, #dc2626)';
    } else if (pct < 50) {
      this.staminaFill.style.background = 'linear-gradient(90deg, #f59e0b, #d97706)';
    } else {
      this.staminaFill.style.background = 'linear-gradient(90deg, #22c55e, #16a34a, #15803d)';
    }
  }

  updatePossession(teamA: Team, ticks: number) {
    if (ticks > 0) {
      const pct = Math.round((teamA === Team.Blue ? ticks : (1 - ticks)) * 100);
      this.possessionEl.innerHTML = `
        <span style="color:#00f0ff;">${pct}%</span>
        <span style="color:rgba(255,255,255,0.3);">|</span>
        <span style="color:#ef4444;">${100 - pct}%</span>
      `;
    }
  }

  updateLatency(ping: number) {
    let color: string;
    if (ping < 100) color = '#22c55e';
    else if (ping < 200) color = '#eab308';
    else color = '#ef4444';
    this.latencyDot.style.background = color;
    this.latencyDot.style.boxShadow = `0 0 6px ${color}66`;
  }

  showCountdown(time: number) {
    if (time > 0) {
      this.countdownEl.textContent = time.toString();
      this.countdownEl.style.opacity = '1';
      this.countdownEl.style.transform = 'translate(-50%, -50%) scale(1.2)';
      setTimeout(() => {
        this.countdownEl.style.opacity = '0';
        this.countdownEl.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 800);
    } else {
      this.countdownEl.textContent = 'GO!';
      this.countdownEl.style.color = '#00f0ff';
      this.countdownEl.style.opacity = '1';
      this.countdownEl.style.transform = 'translate(-50%, -50%) scale(1.5)';
      setTimeout(() => {
        this.countdownEl.style.opacity = '0';
        this.countdownEl.style.transform = 'translate(-50%, -50%) scale(1)';
        this.countdownEl.style.color = '#fff';
      }, 1000);
    }
  }

  showGoalNotification(team: string, scorer: string | null) {
    const color = team === 'blue' ? '#00f0ff' : '#ef4444';
    const teamName = team === 'blue' ? 'BLUE' : 'RED';
    this.goalNotificationEl.innerHTML = `
      <div style="color:${color};font-size:4.5rem;font-weight:900;text-shadow:0 0 40px ${color}66;">GOAL!</div>
      <div style="font-size:1.2rem;color:#aaa;margin-top:8px">${teamName} TEAM</div>
    `;
    this.goalNotificationEl.style.opacity = '1';
    this.goalNotificationEl.style.transform = 'translate(-50%, -50%) scale(1.2)';

    const flash = document.getElementById('goal-flash');
    if (flash) {
      flash.style.background = color;
      flash.style.opacity = '0.15';
      setTimeout(() => { flash.style.opacity = '0'; }, 300);
    }

    setTimeout(() => {
      this.goalNotificationEl.style.opacity = '0';
      this.goalNotificationEl.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 2500);
  }

  showMatchEnd(data: { blueScore: number; redScore: number; winner: string | null }) {
    const winnerName = data.winner === 'blue' ? 'BLUE' : data.winner === 'red' ? 'RED' : null;
    const msg = winnerName ? `${winnerName} TEAM WINS!` : "DRAW!";
    const winnerColor = data.winner === 'blue' ? '#00f0ff' : data.winner === 'red' ? '#ef4444' : '#fff';

    this.matchEndEl.innerHTML = `
      <div style="background:rgba(0,0,0,0.75);backdrop-filter:blur(12px);border-radius:16px;padding:24px 40px;border:1px solid rgba(255,255,255,0.08);pointer-events:auto;">
        <div style="color:${winnerColor};font-size:2.2rem;font-weight:900;margin-bottom:6px;">${msg}</div>
        <div style="font-size:1.8rem;color:rgba(255,255,255,0.6);font-weight:700;font-variant-numeric:tabular-nums;">
          <span style="color:#00f0ff;">${data.blueScore}</span>
          <span style="color:rgba(255,255,255,0.25);margin:0 10px;">-</span>
          <span style="color:#ef4444;">${data.redScore}</span>
        </div>
      </div>
    `;
    this.matchEndEl.style.opacity = '1';
  }

  showNotification(msg: string) {
    this.notificationEl.textContent = msg;
    this.notificationEl.style.opacity = '1';
    if (this.notificationTimeout !== null) clearTimeout(this.notificationTimeout);
    this.notificationTimeout = window.setTimeout(() => {
      this.notificationEl.style.opacity = '0';
    }, 1500);
  }

  hide() {
    this.container.style.display = 'none';
  }

  showModeButton(visible: boolean) {
    // Mode toggle is built into the layout; visibility is always on
  }

  setMode(mode: 'attack' | 'defence' | 'normal') {
    if (mode === 'attack' || mode === 'defence') {
      this.currentMode = mode;
    }
  }

  show() {
    this.container.style.display = '';
  }
}
