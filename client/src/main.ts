import { Game } from './game/Game.js';

const game = new Game();

function init() {
  game.init();

  // Always hide loading screen after game starts (regardless of platform)
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s';
    setTimeout(() => loadingScreen.remove(), 500);
  }

  // Hide native splash + status bar if running in Capacitor
  try {
    const { Capacitor } = window as any;
    if (Capacitor?.isNativePlatform?.()) {
      Capacitor.Plugins?.StatusBar?.hide();
    }
  } catch {}

  // Register service worker for PWA installability
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
