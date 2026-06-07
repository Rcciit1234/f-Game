import { HBMatchState, HBInput, HBPlayerState, HBBallState, HB_FIELD, HB_MATCH } from '../../../shared/headball.js';
import { HBRenderer } from './renderer.js';
import { HBControls } from './controls.js';
import { HBMatch, getAIInput } from './match.js';
import { createPlayer } from './player.js';

type GameMode = 'local_ai' | 'online';

export class HBGame {
  private container: HTMLElement;
  private renderer: HBRenderer;
  private controls: HBControls;
  private match: HBMatch | null = null;
  private mode: GameMode = 'local_ai';
  private animId: number = 0;
  private lastTime: number = 0;
  private localInput: HBInput = { left: false, right: false, jump: false, kick: false, kickHold: false };
  private running = false;
  private onExit: () => void;

  constructor(container: HTMLElement, onExit: () => void) {
    this.container = container;
    this.renderer = new HBRenderer(container);
    this.controls = new HBControls();
    this.onExit = onExit;
  }

  start(mode: GameMode = 'local_ai') {
    this.mode = mode;
    this.running = true;

    this.match = new HBMatch('player1', 'You', 'player2', 'AI');
    this.match.setCallbacks(
      (h, a) => {},
      (s) => {
        if (s === 'ended') {
          setTimeout(() => this.cleanup(), 3000);
        }
      }
    );

    this.controls.onInput((input) => {
      this.localInput = { ...input };
    });

    this.match.start();
    this.lastTime = performance.now();
    this.loop(this.lastTime);

    if (this.mode === 'local_ai') {
      const escHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') this.cleanup();
      };
      window.addEventListener('keydown', escHandler);
      (this as any)._escHandler = escHandler;
    }
  }

  private loop = (time: number) => {
    if (!this.running) return;
    const dt = Math.min((time - this.lastTime) / 1000, 0.05);
    this.lastTime = time;

    if (this.match) {
      const aiInput = getAIInput(
        this.match.state.awayPlayer,
        this.match.state.homePlayer,
        this.match.state.ball
      );

      this.match.update(dt, this.localInput, aiInput);
      this.renderer.render(this.match.state);
      this.renderer.drawTouchControls();
    }

    this.animId = requestAnimationFrame(this.loop);
  };

  private cleanup() {
    this.running = false;
    cancelAnimationFrame(this.animId);
    this.match?.destroy();
    this.controls.destroy();
    const handler = (this as any)._escHandler;
    if (handler) window.removeEventListener('keydown', handler);
    this.container.innerHTML = '';
    this.onExit();
  }
}
