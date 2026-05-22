import { Game } from './game/Game.js';

const game = new Game();

function init() {
  game.init();
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transition = 'opacity 0.5s';
      setTimeout(() => loadingScreen.remove(), 500);
    }, 1500);
  }

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
