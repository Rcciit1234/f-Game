export interface TouchState {
  steer: number;
  throttle: number;
  jump: boolean;
  sprint: boolean;
  kick: boolean;
  cameraYaw: number;
  cameraPitch: number;
}

export class TouchController {
  private container: HTMLDivElement;
  private joystickBase: HTMLDivElement;
  private joystickKnob: HTMLDivElement;

  private jumpBtn: HTMLButtonElement;
  private kickBtn: HTMLButtonElement;
  private boostBtn: HTMLButtonElement;
  private muteBtn: HTMLButtonElement;

  private joystickActive = false;
  private joystickId = -1;
  private joystickCenter = { x: 0, y: 0 };
  private joystickDelta = { x: 0, y: 0 };
  private joystickRadius = 50;

  private cameraActive = false;
  private cameraId = -1;
  private cameraLast = { x: 0, y: 0 };
  private cameraDelta = { x: 0, y: 0 };
  private cameraSmooth = { yaw: 0, pitch: 0 };

  private _jump = false;
  private _kick = false;
  private _sprint = false;
  private _mute = false;

  public onMuteToggle: (() => void) | null = null;

  // UI state
  private hudVisible = false;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'touch-controls';
    this.container.style.cssText = `
      position: fixed; inset: 0; z-index: 200;
      touch-action: none; user-select: none; -webkit-user-select: none;
      pointer-events: none;
    `;

    this.joystickBase = document.createElement('div');
    this.joystickBase.style.cssText = `
      position: absolute; bottom: 80px; left: 80px;
      width: 110px; height: 110px; border-radius: 50%;
      background: rgba(255,255,255,0.08);
      border: 2px solid rgba(255,255,255,0.15);
      pointer-events: auto;
      transform: translate(-50%, -50%);
    `;

    this.joystickKnob = document.createElement('div');
    this.joystickKnob.style.cssText = `
      position: absolute; top: 50%; left: 50%;
      width: 50px; height: 50px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,240,255,0.6), rgba(0,240,255,0.2));
      transform: translate(-50%, -50%);
      transition: none;
    `;
    this.joystickBase.appendChild(this.joystickKnob);

    this.jumpBtn = this.createButton('🦘', `
      position: absolute; bottom: 40px; right: 180px;
      width: 64px; height: 64px; border-radius: 50%;
      background: rgba(0,240,255,0.2); border: 2px solid rgba(0,240,255,0.4);
      color: #fff; font-size: 1.5rem;
      pointer-events: auto;
    `);

    this.kickBtn = this.createButton('⚽', `
      position: absolute; bottom: 40px; right: 40px;
      width: 72px; height: 72px; border-radius: 50%;
      background: rgba(139,92,246,0.2); border: 2px solid rgba(139,92,246,0.4);
      color: #fff; font-size: 1.8rem;
      pointer-events: auto;
    `);

    this.boostBtn = this.createButton('⚡', `
      position: absolute; bottom: 120px; right: 100px;
      width: 56px; height: 56px; border-radius: 50%;
      background: rgba(255,200,0,0.15); border: 2px solid rgba(255,200,0,0.3);
      color: #ffd700; font-size: 1.3rem;
      pointer-events: auto;
    `);

    this.muteBtn = this.createButton('🔊', `
      position: absolute; top: 60px; right: 20px;
      width: 44px; height: 44px; border-radius: 50%;
      background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
      color: #fff; font-size: 1rem;
      pointer-events: auto;
    `);

    this.container.appendChild(this.joystickBase);
    this.container.appendChild(this.jumpBtn);
    this.container.appendChild(this.kickBtn);
    this.container.appendChild(this.boostBtn);
    this.container.appendChild(this.muteBtn);

    this.setupJoystickEvents();
    this.setupCameraEvents();
    this.setupButtonEvents();

    this.hide();
    document.body.appendChild(this.container);
  }

  private createButton(text: string, style: string): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.style.cssText = style + `
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; -webkit-tap-highlight-color: transparent;
      outline: none; user-select: none;
    `;
    return btn;
  }

  private setupJoystickEvents() {
    const onStart = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const rect = this.joystickBase.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = touch.clientX - cx;
      const dy = touch.clientY - cy;
      if (Math.sqrt(dx * dx + dy * dy) < rect.width * 0.8) {
        this.joystickActive = true;
        this.joystickId = touch.identifier;
        this.joystickCenter = { x: cx, y: cy };
        e.preventDefault();
      }
    };

    const onMove = (e: TouchEvent) => {
      if (!this.joystickActive) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.identifier === this.joystickId) {
          const dx = t.clientX - this.joystickCenter.x;
          const dy = t.clientY - this.joystickCenter.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const clamped = Math.min(dist, this.joystickRadius);
          this.joystickDelta.x = dist > 0 ? (dx / dist) * clamped : 0;
          this.joystickDelta.y = dist > 0 ? (dy / dist) * clamped : 0;
          this.joystickKnob.style.transform = `translate(calc(-50% + ${this.joystickDelta.x}px), calc(-50% + ${this.joystickDelta.y}px))`;
          e.preventDefault();
        }
      }
    };

    const onEnd = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.identifier === this.joystickId) {
          this.joystickActive = false;
          this.joystickId = -1;
          this.joystickDelta = { x: 0, y: 0 };
          this.joystickKnob.style.transform = `translate(-50%, -50%)`;
        }
      }
    };

    this.joystickBase.addEventListener('touchstart', onStart, { passive: false });
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);
    window.addEventListener('touchcancel', onEnd);
  }

  private setupCameraEvents() {
    const onStart = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.identifier === this.joystickId) continue;
        if (!this.cameraActive) {
          this.cameraActive = true;
          this.cameraId = t.identifier;
          this.cameraLast = { x: t.clientX, y: t.clientY };
        }
      }
    };

    const onMove = (e: TouchEvent) => {
      if (!this.cameraActive) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.identifier === this.cameraId) {
          this.cameraDelta.x += t.clientX - this.cameraLast.x;
          this.cameraDelta.y += t.clientY - this.cameraLast.y;
          this.cameraLast = { x: t.clientX, y: t.clientY };
        }
      }
    };

    const onEnd = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.identifier === this.cameraId) {
          this.cameraActive = false;
          this.cameraId = -1;
          this.cameraDelta = { x: 0, y: 0 };
        }
      }
    };

    this.container.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd);
    window.addEventListener('touchcancel', onEnd);
  }

  private setupButtonEvents() {
    const press = (btn: HTMLButtonElement, key: string) => {
      btn.addEventListener('touchstart', (e) => {
        if (key === 'mute') {
          this._mute = !this._mute;
          this.muteBtn.textContent = this._mute ? '🔇' : '🔊';
          this.onMuteToggle?.();
        } else if (key === 'jump') {
          this._jump = true;
          btn.style.background = 'rgba(0,240,255,0.4)';
        } else if (key === 'kick') {
          this._kick = true;
          btn.style.background = 'rgba(139,92,246,0.4)';
        } else if (key === 'boost') {
          this._sprint = true;
          btn.style.background = 'rgba(255,200,0,0.3)';
        }
        e.preventDefault();
      }, { passive: false });

      const release = () => {
        if (key === 'jump') {
          this._jump = false;
          btn.style.background = 'rgba(0,240,255,0.2)';
        } else if (key === 'boost') {
          this._sprint = false;
          btn.style.background = 'rgba(255,200,0,0.15)';
        }
      };

      btn.addEventListener('touchend', release);
      btn.addEventListener('touchcancel', release);
    };

    press(this.jumpBtn, 'jump');
    press(this.kickBtn, 'kick');
    press(this.boostBtn, 'boost');
    press(this.muteBtn, 'mute');
  }

  getTouchState(): TouchState {
    const normX = this.joystickDelta.x / this.joystickRadius;
    const normY = -(this.joystickDelta.y / this.joystickRadius);

    this.cameraSmooth.yaw += this.cameraDelta.x * 0.005;
    this.cameraSmooth.pitch += this.cameraDelta.y * 0.005;
    this.cameraSmooth.pitch = Math.max(-1.2, Math.min(1.2, this.cameraSmooth.pitch));
    this.cameraDelta.x = 0;
    this.cameraDelta.y = 0;

    const kick = this._kick;
    this._kick = false;

    return {
      steer: Math.max(-1, Math.min(1, normX)),
      throttle: Math.max(-1, Math.min(1, normY)),
      jump: this._jump,
      sprint: this._sprint,
      kick,
      cameraYaw: this.cameraSmooth.yaw,
      cameraPitch: this.cameraSmooth.pitch,
    };
  }

  show() {
    this.container.style.display = '';
    this.hudVisible = true;
  }

  hide() {
    this.container.style.display = 'none';
    this.hudVisible = false;
  }

  get visible() {
    return this.hudVisible;
  }

  dispose() {
    this.container.remove();
  }
}
