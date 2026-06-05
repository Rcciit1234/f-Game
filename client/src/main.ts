import { Game } from './game/Game.js';

let game: Game | null = null;
let bootError: HTMLDivElement | null = null;

function showError(msg: string) {
  const loading = document.getElementById('loading-screen');
  if (loading) {
    loading.innerHTML = `
      <div style="text-align:center;padding:20px;max-width:400px;">
        <div style="font-size:3rem;margin-bottom:1rem;">⚠️</div>
        <h2 style="color:#ef4444;margin-bottom:0.5rem;font-size:1.2rem;">Launch Error</h2>
        <p style="color:rgba(255,255,255,0.5);font-size:0.85rem;margin-bottom:1rem;">${msg}</p>
        <button onclick="location.reload()" style="
          background:linear-gradient(135deg,#00f0ff,#8b5cf6);color:#fff;
          border:none;padding:10px 28px;border-radius:8px;font-size:0.9rem;
          font-weight:700;cursor:pointer;
        ">Retry</button>
      </div>
    `;
  }
  console.error('Boot error:', msg);
}

function removeLoading() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    const loaderBar = loadingScreen.querySelector('.loader-bar');
    if (loaderBar) {
      (loaderBar as HTMLElement).style.display = 'none';
    }
    const loadingText = loadingScreen.querySelector('.loading-text');
    if (loadingText) {
      loadingText.innerHTML = '<span class="tap-to-play-btn">TAP TO ENTER STADIUM</span>';
    }
    loadingScreen.style.cursor = 'pointer';

    const enterGame = () => {
      loadingScreen.removeEventListener('click', enterGame);
      loadingScreen.removeEventListener('touchstart', enterGame);
      
      if (game) {
        try {
          const audio = (game as any).audio;
          if (audio) {
            audio.init?.();
            audio.playMenuClick?.();
          }
        } catch (e) {
          console.error('Audio initialization error:', e);
        }
      }
      
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transform = 'scale(1.1)';
      setTimeout(() => loadingScreen.remove(), 500);
    };

    loadingScreen.addEventListener('click', enterGame);
    loadingScreen.addEventListener('touchstart', enterGame);
  }
}

let bootTimer: number | null = null;

async function init() {
  try {
    bootTimer = window.setTimeout(() => {
      if (document.getElementById('loading-screen')) {
        showError('Game is taking too long to start. Check your browser supports WebGL.');
      }
    }, 15000);

    game = new Game();
    await game.init();
    if (bootTimer !== null) { clearTimeout(bootTimer); bootTimer = null; }
    removeLoading();

    try {
      const { Capacitor } = window as any;
      if (Capacitor?.isNativePlatform?.()) {
        Capacitor.Plugins?.StatusBar?.hide();
      }
    } catch {}

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  } catch (err) {
    if (bootTimer !== null) { clearTimeout(bootTimer); bootTimer = null; }
    const msg = err instanceof Error ? err.message : String(err);
    showError(msg);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { init(); });
} else {
  init();
}
