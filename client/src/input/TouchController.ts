export interface TouchState {
  steer: number;
  throttle: number;
  jump: boolean;
  sprint: boolean;
  kick: boolean;
  kickPower: number;
  kickDirection: { x: number; z: number };
  cameraYaw: number;
  cameraPitch: number;
}

const DEADZONE = 0.15;
const JOYSTICK_RADIUS = 50;
const CHARGE_MAX_MS = 800;

function svgIcon(d: string, viewBox = '0 0 24 24'): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
}

const ICONS = {
  kick: svgIcon('<path d="M6 2L4 8l3 3 4-4-3-3z"/><path d="M8 10L3 19l2 2 9-5-4-4z"/><path d="M21 18c-2 0-4-2-6-4l-3 3c2 2 4 4 6 4 2 0 3-1 3-3z"/>'),
  jump: svgIcon('<path d="M12 2v8"/><path d="M9 7l3 3 3-3"/><path d="M5 16v2a2 2 0 002 2h10a2 2 0 002-2v-2"/>'),
  boost: svgIcon('<polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>'),
  mute: svgIcon('<polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'),
  unmute: svgIcon('<polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"/><path d="M19.1 4.9a10 10 0 010 14.2M15.5 8.5a5 5 0 010 7"/>'),
  cameraReset: svgIcon('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'),
};

export class TouchController {
  private container: HTMLDivElement;
  private joystickBase: HTMLDivElement;
  private joystickKnob: HTMLDivElement;

  private jumpBtn: HTMLButtonElement;
  private kickBtn: HTMLButtonElement;
  private boostBtn: HTMLButtonElement;
  private muteBtn: HTMLButtonElement;
  private cameraResetBtn: HTMLButtonElement;
  private cameraZone: HTMLDivElement;
  private chargeRing: HTMLDivElement;

  private joystickActive = false;
  private joystickId = -1;
  private joystickCenter = { x: 0, y: 0 };
  private joystickDelta = { x: 0, y: 0 };
  private joystickSmooth = { x: 0, y: 0 };

  private cameraActive = false;
  private cameraId = -1;
  private cameraLast = { x: 0, y: 0 };
  private cameraDelta = { x: 0, y: 0 };
  private cameraSmooth = { yaw: 0, pitch: 0 };

  private _jump = false;
  private _kick = false;
  private _kickPower = 0;
  private _kickDir: { x: number; z: number } = { x: 0, z: 1 };
  private _sprint = false;
  private _mute = false;

  private kickStartTime = 0;
  private kickChargeInterval: number | null = null;

  public onMuteToggle: (() => void) | null = null;
  public onHaptic: (() => void) | null = null;
  public onCameraReset: (() => void) | null = null;

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
      position: absolute;
      bottom: max(40px, env(safe-area-inset-bottom, 0px) + 20px);
      left: max(40px, env(safe-area-inset-left, 0px) + 20px);
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
      will-change: transform;
    `;
    this.joystickBase.appendChild(this.joystickKnob);

    this.jumpBtn = this.createBtn(ICONS.jump, `
      position: absolute;
      bottom: max(40px, env(safe-area-inset-bottom, 0px) + 20px);
      right: 180px;
      width: 56px; height: 56px; border-radius: 50%;
      background: rgba(0,240,255,0.2); border: 2px solid rgba(0,240,255,0.4);
      color: #00f0ff;
      pointer-events: auto;
    `);

    this.kickBtn = this.createBtn(ICONS.kick, `
      position: absolute;
      bottom: max(40px, env(safe-area-inset-bottom, 0px) + 20px);
      right: 40px;
      width: 72px; height: 72px; border-radius: 50%;
      background: rgba(139,92,246,0.2); border: 2px solid rgba(139,92,246,0.4);
      color: #a78bfa;
      pointer-events: auto;
    `);

    // Charge ring overlay on kick button
    this.chargeRing = document.createElement('div');
    this.chargeRing.style.cssText = `
      position: absolute; inset: -3px; border-radius: 50%;
      border: 3px solid rgba(255,200,0,0);
      pointer-events: none; transition: border-color 0.1s;
    `;
    this.kickBtn.appendChild(this.chargeRing);

    this.boostBtn = this.createBtn(ICONS.boost, `
      position: absolute;
      bottom: max(120px, env(safe-area-inset-bottom, 0px) + 100px);
      right: 100px;
      width: 52px; height: 52px; border-radius: 50%;
      background: rgba(255,200,0,0.15); border: 2px solid rgba(255,200,0,0.3);
      color: #fbbf24;
      pointer-events: auto;
    `);

    this.muteBtn = this.createBtn(ICONS.mute, `
      position: absolute;
      bottom: max(120px, env(safe-area-inset-bottom, 0px) + 100px);
      left: max(40px, env(safe-area-inset-left, 0px) + 20px);
      width: 44px; height: 44px; border-radius: 50%;
      background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
      color: rgba(255,255,255,0.6);
      pointer-events: auto;
    `);

    this.cameraResetBtn = this.createBtn(ICONS.cameraReset, `
      position: absolute;
      bottom: max(180px, env(safe-area-inset-bottom, 0px) + 160px);
      left: max(40px, env(safe-area-inset-left, 0px) + 20px);
      width: 44px; height: 44px; border-radius: 50%;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
      color: rgba(255,255,255,0.5);
      pointer-events: auto;
    `);

    // Camera drag zone (right 50%)
    this.cameraZone = document.createElement('div');
    this.cameraZone.style.cssText = `
      position: absolute; top: 0; right: 0; width: 50%; height: 100%;
      pointer-events: auto;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02));
    `;

    this.container.appendChild(this.joystickBase);
    this.container.appendChild(this.jumpBtn);
    this.container.appendChild(this.kickBtn);
    this.container.appendChild(this.boostBtn);
    this.container.appendChild(this.muteBtn);
    this.container.appendChild(this.cameraResetBtn);
    this.container.appendChild(this.cameraZone);

    this.setupJoystickEvents();
    this.setupCameraEvents();
    this.setupButtonEvents();
    this.setupCameraReset();

    this.hide();
    document.body.appendChild(this.container);
  }

  private createBtn(html: string, style: string): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.innerHTML = html;
    btn.style.cssText = style + `
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; -webkit-tap-highlight-color: transparent;
      outline: none; user-select: none;
      transition: transform 0.1s, filter 0.1s;
      will-change: transform;
    `;
    return btn;
  }

  private setBtnActive(btn: HTMLButtonElement, active: boolean) {
    btn.style.transform = active ? 'scale(0.9)' : 'scale(1)';
    btn.style.filter = active ? 'brightness(1.4)' : 'brightness(1)';
  }

  private haptic() {
    this.onHaptic?.();
    try { navigator.vibrate?.(12); } catch {}
  }

  // ─── Joystick ───

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
          const clamped = Math.min(dist, JOYSTICK_RADIUS);
          this.joystickDelta.x = dist > 0 ? (dx / dist) * clamped : 0;
          this.joystickDelta.y = dist > 0 ? (dy / dist) * clamped : 0;
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
          this.joystickSmooth = { x: 0, y: 0 };
          this.joystickKnob.style.transform = `translate(-50%, -50%)`;
        }
      }
    };

    this.joystickBase.addEventListener('touchstart', onStart, { passive: false });
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);
    window.addEventListener('touchcancel', onEnd);
  }

  // ─── Camera ───

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

    this.cameraZone.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd);
    window.addEventListener('touchcancel', onEnd);
  }

  private setupCameraReset() {
    this.cameraResetBtn.addEventListener('touchstart', (e) => {
      this.cameraSmooth = { yaw: 0, pitch: 0 };
      this.onCameraReset?.();
      this.haptic();
      this.setBtnActive(this.cameraResetBtn, true);
      e.preventDefault();
    });
    this.cameraResetBtn.addEventListener('touchend', () => {
      this.setBtnActive(this.cameraResetBtn, false);
    });
    this.cameraResetBtn.addEventListener('touchcancel', () => {
      this.setBtnActive(this.cameraResetBtn, false);
    });
  }

  // ─── Buttons ───

  private setupButtonEvents() {
    const press = (btn: HTMLButtonElement, key: string) => {
      btn.addEventListener('touchstart', (e) => {
        if (key === 'mute') {
          this._mute = !this._mute;
          this.muteBtn.innerHTML = this._mute ? ICONS.unmute : ICONS.mute;
          this.onMuteToggle?.();
        } else if (key === 'jump') {
          this._jump = true;
          this.haptic();
          this.setBtnActive(btn, true);
        } else if (key === 'kick') {
          this.kickStartTime = Date.now();
          this._kickPower = 0;
          this.setBtnActive(btn, true);
          this.haptic();
          // Read joystick angle at kick start (update continuously)
          this.updateKickDir();
          this.kickChargeInterval = window.setInterval(() => {
            const elapsed = Date.now() - this.kickStartTime;
            this._kickPower = Math.min(1, elapsed / CHARGE_MAX_MS);
            const pct = this._kickPower * 100;
            this.chargeRing.style.borderColor = `rgba(255,200,0,${0.2 + this._kickPower * 0.8})`;
            this.chargeRing.style.background = `conic-gradient(rgba(255,200,0,${this._kickPower * 0.3}) ${pct}%, transparent ${pct}%)`;
            this.updateKickDir();
          }, 50);
        } else if (key === 'boost') {
          this._sprint = true;
          this.haptic();
          this.setBtnActive(btn, true);
        }
        e.preventDefault();
      }, { passive: false });

      const release = () => {
        if (key === 'jump') {
          this._jump = false;
          this.setBtnActive(btn, false);
        } else if (key === 'kick') {
          this._kick = true;
          this.updateKickDir();
          this.setBtnActive(btn, false);
          this.chargeRing.style.borderColor = 'rgba(255,200,0,0)';
          this.chargeRing.style.background = 'none';
          if (this.kickChargeInterval !== null) {
            clearInterval(this.kickChargeInterval);
            this.kickChargeInterval = null;
          }
        } else if (key === 'boost') {
          this._sprint = false;
          this.setBtnActive(btn, false);
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

  private updateKickDir() {
    const dx = this.joystickDelta.x;
    const dy = this.joystickDelta.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > DEADZONE * JOYSTICK_RADIUS) {
      this._kickDir = { x: dx / dist, z: -(dy / dist) };
    }
    // If joystick is neutral, keep last direction
  }

  // ─── Public API ───

  getTouchState(): TouchState {
    // Apply deadzone
    const rawX = this.joystickDelta.x / JOYSTICK_RADIUS;
    const rawY = -(this.joystickDelta.y / JOYSTICK_RADIUS);

    const mag = Math.sqrt(rawX * rawX + rawY * rawY);
    let normX = 0;
    let normY = 0;
    if (mag > DEADZONE) {
      const scaled = (mag - DEADZONE) / (1 - DEADZONE);
      normX = (rawX / mag) * scaled;
      normY = (rawY / mag) * scaled;
    }

    // Smooth joystick (lerp)
    const smoothFactor = 0.4;
    this.joystickSmooth.x += (normX - this.joystickSmooth.x) * smoothFactor;
    this.joystickSmooth.y += (normY - this.joystickSmooth.y) * smoothFactor;

    // Update knob position with smoothing
    if (this.joystickActive) {
      const knobX = this.joystickSmooth.x * JOYSTICK_RADIUS;
      const knobY = -this.joystickSmooth.y * JOYSTICK_RADIUS;
      this.joystickKnob.style.transform = `translate(calc(-50% + ${knobX}px), calc(-50% + ${knobY}px))`;
    }

    this.cameraSmooth.yaw += this.cameraDelta.x * 0.005;
    this.cameraSmooth.pitch += this.cameraDelta.y * 0.005;
    this.cameraSmooth.pitch = Math.max(-1.2, Math.min(1.2, this.cameraSmooth.pitch));
    this.cameraDelta.x = 0;
    this.cameraDelta.y = 0;

    const kick = this._kick;
    const kickPower = this._kickPower;
    const kickDir = { ...this._kickDir };
    this._kick = false;
    this._kickPower = 0;

    return {
      steer: Math.max(-1, Math.min(1, this.joystickSmooth.x)),
      throttle: Math.max(-1, Math.min(1, this.joystickSmooth.y)),
      jump: this._jump,
      sprint: this._sprint,
      kick,
      kickPower,
      kickDirection: kickDir,
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
    if (this.kickChargeInterval !== null) {
      clearInterval(this.kickChargeInterval);
    }
    this.container.remove();
  }
}
