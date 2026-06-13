import { HBInput } from '../../../shared/headball.js';

export type HBKeyMap = Record<string, keyof HBInput | 'none'>;

const KEY_MAP: HBKeyMap = {
  'a': 'left', 'A': 'left', 'ArrowLeft': 'left',
  'd': 'right', 'D': 'right', 'ArrowRight': 'right',
  'w': 'jump', 'W': 'jump', 'ArrowUp': 'jump',
  ' ': 'kick',
  's': 'kickHold', 'S': 'kickHold', 'ArrowDown': 'kickHold',
  'm': 'superKick', 'M': 'superKick',
};

export class HBControls {
  private keys: Set<string> = new Set();
  private callbacks: Array<(input: HBInput) => void> = [];
  private touchState: HBInput = { left: false, right: false, jump: false, kick: false, kickHold: false, superKick: false, defence: false };

  private leftTouch: number | null = null;
  private rightTouch: number | null = null;
  private jumpTouch: number | null = null;
  private kickTouch: number | null = null;
  private defenceTouch: number | null = null;

  constructor() {
    this.setupKeyboard();
    this.setupTouch();
  }

  private setupKeyboard() {
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.key);
      if (e.key === ' ') e.preventDefault();
      this.fireCallbacks();
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.key);
      this.fireCallbacks();
    });
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.fireCallbacks();
    });
  }

  private setupTouch() {
    if (!('ontouchstart' in window)) return;

    const getInput = (): HBInput => ({
      ...this.touchState,
      left: this.leftTouch !== null,
      right: this.rightTouch !== null,
      jump: this.jumpTouch !== null,
      kick: this.kickTouch !== null,
      kickHold: false,
      defence: this.defenceTouch !== null,
      superKick: false,
    });

    const el = () => document.getElementById('headball-canvas') || document.body;

    el().addEventListener('touchstart', (e) => {
      for (const touch of e.changedTouches) {
        const x = touch.clientX;
        const y = touch.clientY;
        const sw = window.innerWidth;
        const sh = window.innerHeight;

        if (x < sw * 0.35 && y > sh * 0.65) {
          this.leftTouch = touch.identifier;
        } else if (x > sw * 0.35 && x < sw * 0.5 && y > sh * 0.65) {
          this.rightTouch = touch.identifier;
        } else if (x < sw * 0.5 && y < sh * 0.3) {
          this.jumpTouch = touch.identifier;
        } else if (x > sw * 0.65 && y >= sh * 0.55) {
          this.kickTouch = touch.identifier;
        } else if (x > sw * 0.65 && y >= sh * 0.3 && y < sh * 0.55) {
          this.defenceTouch = touch.identifier;
        }
      }
      this.fireCallbacksWith(getInput());
    });

    const releaseTouch = (e: TouchEvent) => {
      for (const touch of e.changedTouches) {
        if (touch.identifier === this.leftTouch) this.leftTouch = null;
        if (touch.identifier === this.rightTouch) this.rightTouch = null;
        if (touch.identifier === this.jumpTouch) this.jumpTouch = null;
        if (touch.identifier === this.kickTouch) this.kickTouch = null;
        if (touch.identifier === this.defenceTouch) this.defenceTouch = null;
      }
      this.fireCallbacksWith(getInput());
    };

    window.addEventListener('touchend', releaseTouch);
    window.addEventListener('touchcancel', releaseTouch);
  }

  getInput(): HBInput {
    const input: HBInput = {
      left: this.keys.has('a') || this.keys.has('A') || this.keys.has('ArrowLeft') || this.touchState.left,
      right: this.keys.has('d') || this.keys.has('D') || this.keys.has('ArrowRight') || this.touchState.right,
      jump: this.keys.has('w') || this.keys.has('W') || this.keys.has('ArrowUp') || this.touchState.jump,
      kick: this.keys.has(' ') || this.touchState.kick,
      kickHold: this.keys.has('s') || this.keys.has('S') || this.keys.has('ArrowDown') || this.touchState.kickHold,
      superKick: this.keys.has('m') || this.keys.has('M') || this.touchState.superKick,
      defence: this.touchState.defence,
    };
    return input;
  }

  onInput(cb: (input: HBInput) => void) {
    this.callbacks.push(cb);
  }

  private fireCallbacks() {
    this.fireCallbacksWith(this.getInput());
  }

  private fireCallbacksWith(input: HBInput) {
    for (const cb of this.callbacks) cb(input);
  }

  destroy() {
    this.callbacks = [];
    this.keys.clear();
  }
}
