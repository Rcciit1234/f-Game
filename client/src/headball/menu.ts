export class HBMenu {
  private container: HTMLElement;
  private onStartAI: () => void;
  private onStartOnline: () => void;
  private onBack: () => void;

  constructor(container: HTMLElement, onStartAI: () => void, onStartOnline: () => void, onBack: () => void) {
    this.container = container;
    this.onStartAI = onStartAI;
    this.onStartOnline = onStartOnline;
    this.onBack = onBack;
    this.build();
  }

  private build() {
    this.container.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;font-family:sans-serif;gap:20px;padding:20px;">
        <div style="font-size:3rem;margin-bottom:10px;">⚽</div>
        <h1 style="font-size:1.8rem;margin:0;background:linear-gradient(90deg,#00f0ff,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">HEAD BALL</h1>
        <p style="color:rgba(255,255,255,0.4);font-size:0.85rem;margin:0;">1v1 Big-Head Football</p>
        <div style="display:flex;flex-direction:column;gap:12px;margin-top:20px;width:220px;">
          <button id="hb-ai-btn" style="padding:12px 24px;border:none;border-radius:10px;background:linear-gradient(135deg,#2563eb,#8b5cf6);color:#fff;font-size:1rem;font-weight:700;cursor:pointer;-webkit-tap-highlight-color:transparent;">Play vs AI</button>
          <button id="hb-online-btn" style="padding:12px 24px;border:1px solid rgba(255,255,255,0.15);border-radius:10px;background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.6);font-size:1rem;cursor:pointer;-webkit-tap-highlight-color:transparent;">Online (soon)</button>
          <button id="hb-back-btn" style="padding:8px 16px;border:none;border-radius:8px;background:transparent;color:rgba(255,255,255,0.3);font-size:0.85rem;cursor:pointer;margin-top:10px;">← Back</button>
        </div>
      </div>
    `;

    document.getElementById('hb-ai-btn')?.addEventListener('click', () => this.onStartAI());
    document.getElementById('hb-online-btn')?.addEventListener('click', () => {
      (document.getElementById('hb-online-btn') as HTMLButtonElement)!.textContent = 'Coming Soon!';
    });
    document.getElementById('hb-back-btn')?.addEventListener('click', () => {
      this.destroy();
      this.onBack();
    });
  }

  destroy() {
    this.container.innerHTML = '';
  }
}
