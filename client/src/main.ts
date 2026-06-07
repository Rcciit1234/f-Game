import { startHeadBall } from './headball/index.js';

function init() {
  const container = document.getElementById('app') || document.body;
  startHeadBall(container, () => {
    // Re-show the app div if user ever needs to go back
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
