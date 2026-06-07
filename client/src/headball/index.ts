import { HBGame } from './game.js';
import { HBMenu } from './menu.js';

let currentGame: HBGame | null = null;
let currentMenu: HBMenu | null = null;

export function startHeadBall(container: HTMLElement, onBack?: () => void) {
  const goBack = () => {
    currentGame = null;
    currentMenu = null;
    container.innerHTML = '';
    onBack?.();
  };

  currentMenu = new HBMenu(
    container,
    () => {
      currentMenu?.destroy();
      currentMenu = null;
      currentGame = new HBGame(container, () => {
        goBack();
      });
      currentGame.start('local_ai');
    },
    () => {
      // Online mode - placeholder
    },
    goBack
  );
}
