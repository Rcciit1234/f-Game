import { HBGame } from './game.js';
import { HBMenu } from './menu.js';
import { HBHeadBallNetwork } from './network.js';

let currentGame: HBGame | null = null;
let currentMenu: HBMenu | null = null;
let currentNetwork: HBHeadBallNetwork | null = null;

export function startHeadBall(container: HTMLElement, onBack?: () => void) {
  const network = new HBHeadBallNetwork();
  currentNetwork = network;

  const cleanup = () => {
    currentGame = null;
    currentMenu = null;
    container.innerHTML = '';
    if (currentNetwork) {
      currentNetwork.disconnect();
      currentNetwork = null;
    }
    onBack?.();
  };

  currentMenu = new HBMenu(
    container,
    () => {
      currentMenu?.destroy();
      currentMenu = null;
      currentGame = new HBGame(container, () => {
        cleanup();
      });
      currentGame.start('local_ai');
    },
    (net: HBHeadBallNetwork) => {
      currentMenu?.destroy();
      currentMenu = null;
      currentGame = new HBGame(container, () => {
        cleanup();
      });
      currentGame.startOnline(net);
    },
    cleanup,
    network,
  );
}
