export class GuideScreen {
  private container: HTMLDivElement;
  private isMobile: boolean;

  public onBack: (() => void) | null = null;

  constructor() {
    this.isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.container = document.createElement('div');
    this.container.id = 'guide-screen';
    this.container.style.cssText = `
      position: fixed; inset: 0; z-index: 450;
      display: none; flex-direction: column; align-items: center; justify-content: center;
      background: rgba(5,5,10,0.97);
      font-family: 'Segoe UI', system-ui, sans-serif;
      overflow-y: auto; padding: 20px;
    `;

    const card = document.createElement('div');
    card.style.cssText = `
      background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 20px; padding: 32px; width: min(500px, 95vw);
      max-height: 90vh; overflow-y: auto;
    `;

    const title = document.createElement('h2');
    title.style.cssText = `
      font-size: 1.5rem; font-weight: 900; margin-bottom: 20px; text-align: center;
      background: linear-gradient(135deg, #00f0ff, #8b5cf6);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    `;
    title.textContent = 'HOW TO PLAY';

    const rulesTitle = this.createSectionTitle('Game Rules');
    const rules = this.createTextBlock(
      '⚽ 1v1 Head Ball — Score more goals than your opponent in 90 seconds!\n' +
      'Kick the ball into the opponent\'s goal to score.\n' +
      'Tap kick for a low shot, hold kick for a high lob.\n' +
      'Jump to head the ball for extra power.\n' +
      'First to 10 goals or most goals after 90s wins.'
    );

    const kbTitle = this.createSectionTitle('Keyboard Controls');
    const kbContent = this.isMobile ? document.createElement('div') : this.createControlsGrid([
      ['A / Arrow Left', 'Move Left'],
      ['D / Arrow Right', 'Move Right'],
      ['W / Arrow Up', 'Jump'],
      ['Space', 'Kick (tap=low, hold=high lob)'],
      ['S / Arrow Down', 'Kick Hold (charge lob)'],
      ['Escape', 'Exit match'],
    ]);

    const mobileTitle = this.createSectionTitle('Mobile Controls');
    const mobileContent = this.createControlsGrid([
      ['◀ Left Button', 'Move Left'],
      ['▶ Right Button', 'Move Right'],
      ['↑ Jump Button', 'Jump'],
      ['⚽ Kick Button', 'Kick (tap=low, hold=high lob)'],
    ]);

    const tipsTitle = this.createSectionTitle('Tips');
    const tips = this.createTextBlock(
      '💡 Jump before kicking to head the ball for extra power.\n' +
      '💡 Hold kick longer for a high lob over the goalkeeper.\n' +
      '💡 Stay between the ball and your goal to defend.\n' +
      '💡 Quick taps are harder for the opponent to predict.'
    );

    const backBtn = document.createElement('button');
    backBtn.textContent = '← BACK';
    backBtn.style.cssText = `
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.6); padding: 12px 32px; margin-top: 20px;
      font-size: 0.85rem; font-weight: 600; border-radius: 8px;
      cursor: pointer; width: 100%; transition: all 0.2s;
    `;
    backBtn.addEventListener('click', () => this.onBack?.());

    card.appendChild(title);
    card.appendChild(rulesTitle);
    card.appendChild(rules);
    if (!this.isMobile) {
      card.appendChild(kbTitle);
      card.appendChild(kbContent);
    }
    card.appendChild(mobileTitle);
    card.appendChild(mobileContent);
    card.appendChild(tipsTitle);
    card.appendChild(tips);
    card.appendChild(backBtn);
    this.container.appendChild(card);
    document.body.appendChild(this.container);
  }

  private createSectionTitle(text: string): HTMLDivElement {
    const el = document.createElement('div');
    el.style.cssText = `
      font-size: 0.85rem; font-weight: 700; color: #00f0ff; margin-top: 20px; margin-bottom: 8px;
      letter-spacing: 2px; text-transform: uppercase;
    `;
    el.textContent = text;
    return el;
  }

  private createTextBlock(text: string): HTMLDivElement {
    const el = document.createElement('div');
    el.style.cssText = `
      color: rgba(255,255,255,0.6); font-size: 0.8rem; line-height: 1.7;
      white-space: pre-wrap;
    `;
    el.textContent = text;
    return el;
  }

  private createControlsGrid(controls: [string, string][]): HTMLDivElement {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';

    controls.forEach(([key, action]) => {
      const row = document.createElement('div');
      row.style.cssText = `
        display: flex; justify-content: space-between; align-items: center;
        padding: 6px 12px; background: rgba(255,255,255,0.02); border-radius: 6px;
      `;
      const keyEl = document.createElement('span');
      keyEl.style.cssText = `
        color: #00f0ff; font-size: 0.75rem; font-weight: 600; font-family: monospace;
        background: rgba(0,240,255,0.08); padding: 2px 8px; border-radius: 4px;
      `;
      keyEl.textContent = key;
      const actionEl = document.createElement('span');
      actionEl.style.cssText = 'color: rgba(255,255,255,0.5); font-size: 0.75rem;';
      actionEl.textContent = action;
      row.appendChild(keyEl);
      row.appendChild(actionEl);
      container.appendChild(row);
    });
    return container;
  }

  show() { this.container.style.display = 'flex'; }
  hide() { this.container.style.display = 'none'; }
}
