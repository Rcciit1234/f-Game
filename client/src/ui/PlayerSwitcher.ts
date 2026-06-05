import { Team } from '../../../shared/index.js';

export class PlayerSwitcher {
  private container: HTMLDivElement;
  private buttons: Map<string, HTMLButtonElement> = new Map();
  private currentPlayerId: string | null = null;
  private myTeam: Team = Team.Blue;
  private hideTimer: number | null = null;

  public onSwitch: ((playerId: string) => void) | null = null;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'player-switcher';
    this.container.style.cssText = `
      position: fixed; bottom: ${window.innerWidth < 768 ? '90px' : '60px'};
      left: 50%; transform: translateX(-50%);
      display: none; gap: 6px; z-index: 150;
      padding: 8px 12px; background: rgba(0,0,0,0.7);
      border-radius: 16px; backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.08);
      transition: opacity 0.3s;
    `;
    document.body.appendChild(this.container);
  }

  setTeam(team: Team) {
    this.myTeam = team;
  }

  updatePlayers(players: { id: string; name: string; isAI: boolean; jerseyNumber: number }[], currentId: string) {
    this.currentPlayerId = currentId;

    // Filter to just the current player's team using actual team field
    const teamPlayers = players.filter((_, idx) => {
      const isBlue = idx < 6;
      return (this.myTeam === Team.Blue && isBlue) || (this.myTeam === Team.Red && !isBlue);
    });

    this.buttons.clear();
    this.container.innerHTML = '';

    const label = document.createElement('div');
    label.style.cssText = `
      color: rgba(255,255,255,0.2); font-size: 0.5rem; letter-spacing: 1px;
      text-transform: uppercase; writing-mode: vertical-lr;
      display: flex; align-items: center; justify-content: center;
      padding-right: 4px;
    `;
    label.textContent = 'TEAM';
    this.container.appendChild(label);

    teamPlayers.forEach((p) => {
      const btn = document.createElement('button');
      const isActive = p.id === currentId;
      const position = this.getPositionLabel(p.jerseyNumber);

      btn.style.cssText = `
        width: 44px; height: 44px; border-radius: 12px;
        border: 2px solid ${isActive ? '#00f0ff' : 'rgba(255,255,255,0.1)'};
        background: ${isActive ? 'rgba(0,240,255,0.15)' : 'rgba(255,255,255,0.04)'};
        color: ${isActive ? '#00f0ff' : 'rgba(255,255,255,0.5)'};
        font-size: 0.7rem; font-weight: 700; cursor: pointer;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        transition: all 0.15s; outline: none; gap: 1px;
        box-shadow: ${isActive ? '0 0 12px rgba(0,240,255,0.2)' : 'none'};
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
        user-select: none;
        -webkit-user-select: none;
      `;
      btn.innerHTML = `
        <span style="font-size:0.8rem;">${p.jerseyNumber}</span>
        <span style="font-size:0.45rem;opacity:0.6;">${position}</span>
      `;

      btn.addEventListener('touchstart', () => {
        btn.style.transform = 'scale(0.9)';
      }, { passive: true });

      btn.addEventListener('touchend', () => {
        btn.style.transform = '';
      }, { passive: true });

      btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.9)';
      });
      btn.addEventListener('mouseup', () => {
        btn.style.transform = '';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.onSwitch?.(p.id);
      });

      this.container.appendChild(btn);
      this.buttons.set(p.id, btn);
    });

    this.show();
  }

  highlightPlayer(playerId: string) {
    this.currentPlayerId = playerId;
    this.buttons.forEach((btn, id) => {
      const isActive = id === playerId;
      btn.style.borderColor = isActive ? '#00f0ff' : 'rgba(255,255,255,0.1)';
      btn.style.background = isActive ? 'rgba(0,240,255,0.15)' : 'rgba(255,255,255,0.04)';
      btn.style.color = isActive ? '#00f0ff' : 'rgba(255,255,255,0.5)';
      btn.style.boxShadow = isActive ? '0 0 12px rgba(0,240,255,0.2)' : 'none';
    });
  }

  private getPositionLabel(num: number): string {
    const positions = ['GK', 'DF', 'DF', 'MF', 'MF', 'FW'];
    return positions[num - 1] || '';
  }

  show() {
    this.container.style.display = 'flex';
    this.container.style.opacity = '1';

    if (this.hideTimer !== null) {
      clearTimeout(this.hideTimer);
    }
    this.hideTimer = window.setTimeout(() => {
      this.container.style.opacity = '0.3';
    }, 5000);
  }

  hide() {
    this.container.style.display = 'none';
    if (this.hideTimer !== null) {
      clearTimeout(this.hideTimer);
    }
  }
}
