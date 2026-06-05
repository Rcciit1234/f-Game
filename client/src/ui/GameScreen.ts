export class GameScreen {
  private container: HTMLDivElement;
  private codeEl: HTMLDivElement;
  private playersEl: HTMLDivElement;
  private startBtn: HTMLButtonElement;
  private leaveBtn: HTMLButtonElement;
  private statusEl: HTMLDivElement;
  private isHost = false;
  private roomCode = '';

  public onStart: (() => void) | null = null;
  public onLeave: (() => void) | null = null;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'game-screen';
    this.container.style.cssText = `
      position: fixed; inset: 0; z-index: 400;
      display: none; flex-direction: column; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #05050a 0%, #0d0d2b 100%);
      font-family: 'Rajdhani', 'Segoe UI', system-ui, sans-serif;
    `;

    const card = document.createElement('div');
    card.style.cssText = `
      background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 20px; padding: 40px; width: min(380px, 90vw);
      backdrop-filter: blur(12px); text-align: center;
    `;

    const title = document.createElement('h2');
    title.style.cssText = `font-size: 1.2rem; color: rgba(255,255,255,0.5); margin-bottom: 4px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700;`;
    title.textContent = 'Room Lobby';

    const codeLabel = document.createElement('div');
    codeLabel.style.cssText = `color: rgba(255,255,255,0.3); font-size: 0.75rem; margin-top: 16px; margin-bottom: 8px; letter-spacing: 1px;`;
    codeLabel.textContent = 'Share this code:';

    this.codeEl = document.createElement('div');
    this.codeEl.style.cssText = `
      font-size: 2.5rem; font-weight: 900; letter-spacing: 8px;
      background: linear-gradient(135deg, #00f0ff, #8b5cf6);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      padding: 12px 0; cursor: pointer; user-select: all;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    `;

    const copyHint = document.createElement('div');
    copyHint.style.cssText = `color: rgba(255,255,255,0.2); font-size: 0.65rem; margin-bottom: 16px; letter-spacing: 1px;`;
    copyHint.textContent = 'Tap to copy';

    this.codeEl.addEventListener('click', () => {
      navigator.clipboard.writeText(this.roomCode).catch(() => {});
      copyHint.textContent = 'Copied!';
      copyHint.style.color = '#00f0ff';
      setTimeout(() => {
        copyHint.textContent = 'Tap to copy';
        copyHint.style.color = 'rgba(255,255,255,0.2)';
      }, 1500);
    });

    const divider = document.createElement('div');
    divider.style.cssText = `height: 1px; background: rgba(255,255,255,0.06); margin: 16px 0;`;

    const playersTitle = document.createElement('div');
    playersTitle.style.cssText = `color: rgba(255,255,255,0.3); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; font-weight: 700;`;
    playersTitle.textContent = 'Players';

    this.playersEl = document.createElement('div');
    this.playersEl.style.cssText = `
      display: flex; flex-direction: column; gap: 8px; padding: 12px 0;
    `;

    this.statusEl = document.createElement('div');
    this.statusEl.style.cssText = `
      color: rgba(255,255,255,0.2); font-size: 0.8rem; padding: 8px 0; letter-spacing: 1px;
    `;
    this.statusEl.textContent = 'Waiting for players...';

    const btnRow = document.createElement('div');
    btnRow.style.cssText = `display: flex; gap: 12px; margin-top: 16px; justify-content: center;`;

    this.startBtn = document.createElement('button');
    this.startBtn.textContent = 'START GAME';
    this.startBtn.style.cssText = `
      background: linear-gradient(135deg, #00f0ff, #8b5cf6);
      color: #fff; border: none; padding: 12px 32px; font-size: 0.95rem;
      font-weight: 700; border-radius: 8px; cursor: pointer;
      transition: all 0.2s; letter-spacing: 1px; flex: 1;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
      user-select: none;
      -webkit-user-select: none;
    `;
    this.startBtn.addEventListener('click', () => this.onStart?.());
    this.startBtn.addEventListener('touchstart', () => {
      if (!this.startBtn.disabled) this.startBtn.style.transform = 'scale(0.97)';
    }, { passive: true });
    this.startBtn.addEventListener('touchend', () => {
      this.startBtn.style.transform = '';
    }, { passive: true });

    this.leaveBtn = document.createElement('button');
    this.leaveBtn.textContent = 'LEAVE';
    this.leaveBtn.style.cssText = `
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.5); padding: 12px 24px; font-size: 0.85rem;
      font-weight: 600; border-radius: 8px; cursor: pointer; transition: all 0.2s;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
      user-select: none;
      -webkit-user-select: none;
    `;
    this.leaveBtn.addEventListener('click', () => this.onLeave?.());
    this.leaveBtn.addEventListener('touchstart', () => {
      this.leaveBtn.style.transform = 'scale(0.97)';
    }, { passive: true });
    this.leaveBtn.addEventListener('touchend', () => {
      this.leaveBtn.style.transform = '';
    }, { passive: true });
    this.leaveBtn.addEventListener('mouseenter', () => {
      this.leaveBtn.style.borderColor = 'rgba(255,255,255,0.2)';
      this.leaveBtn.style.background = 'rgba(255,255,255,0.08)';
    });
    this.leaveBtn.addEventListener('mouseleave', () => {
      this.leaveBtn.style.borderColor = 'rgba(255,255,255,0.1)';
      this.leaveBtn.style.background = 'rgba(255,255,255,0.05)';
    });

    btnRow.appendChild(this.startBtn);
    btnRow.appendChild(this.leaveBtn);

    card.appendChild(title);
    card.appendChild(codeLabel);
    card.appendChild(this.codeEl);
    card.appendChild(copyHint);
    card.appendChild(divider);
    card.appendChild(playersTitle);
    card.appendChild(this.playersEl);
    card.appendChild(this.statusEl);
    card.appendChild(btnRow);
    this.container.appendChild(card);
    document.body.appendChild(this.container);
  }

  show(code: string, isHost: boolean, players: { id: string; name: string }[]) {
    this.roomCode = code;
    this.isHost = isHost;
    this.codeEl.textContent = code;
    this.startBtn.style.display = isHost ? '' : 'none';
    this.updatePlayers(players);
    if (isHost) {
      this.startBtn.disabled = players.length < 2;
      this.startBtn.style.opacity = players.length < 2 ? '0.4' : '1';
      this.statusEl.textContent = players.length < 2 ? 'Waiting for opponent...' : 'Ready! Press START';
    } else {
      this.statusEl.textContent = 'Joined! Waiting for host to start...';
    }
    this.container.style.display = 'flex';
  }

  updatePlayers(players: { id: string; name: string }[]) {
    this.playersEl.innerHTML = '';
    players.forEach((p, i) => {
      const row = document.createElement('div');
      const teamColor = i === 0 ? '#00f0ff' : '#ef4444';
      const isYou = this.isHost ? i === 0 : i === 1;
      row.style.cssText = `
        display: flex; align-items: center; gap: 10px; padding: 8px 12px;
        background: rgba(255,255,255,0.03); border-radius: 8px;
        border-left: 3px solid ${teamColor};
      `;
      row.innerHTML = `
        <div style="width:24px;height:24px;border-radius:50%;background:${teamColor};display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;color:#fff;">
          ${i === 0 ? 'B' : 'R'}
        </div>
        <div style="flex:1;text-align:left;color:rgba(255,255,255,0.8);font-size:0.85rem;font-weight:600;">
          ${p.name} ${isYou ? '<span style="color:rgba(255,255,255,0.3);font-size:0.7rem;">(You)</span>' : ''}
        </div>
        <div style="color:${teamColor};font-size:0.6rem;text-transform:uppercase;letter-spacing:1px;font-weight:700;">
          ${i === 0 ? 'Team Blue' : 'Team Red'}
        </div>
      `;
      this.playersEl.appendChild(row);
    });

    if (this.isHost) {
      this.startBtn.disabled = players.length < 2;
      this.startBtn.style.opacity = players.length < 2 ? '0.4' : '1';
      this.statusEl.textContent = players.length < 2 ? 'Waiting for opponent...' : 'Ready! Press START';
    }
  }

  hide() {
    this.container.style.display = 'none';
  }

  showStartError(msg: string) {
    this.statusEl.textContent = msg;
    this.statusEl.style.color = '#ef4444';
    setTimeout(() => {
      this.statusEl.style.color = 'rgba(255,255,255,0.2)';
    }, 3000);
  }
}
