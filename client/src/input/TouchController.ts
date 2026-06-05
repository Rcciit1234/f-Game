export interface TouchState {
  steer: number;
  throttle: number;
  sprint: boolean;
  kick: boolean;
  kickPower: number;
  kickDirection: { x: number; z: number };
  pass: boolean;
  throughPass: boolean;
  tackle: boolean;
  switchPlayer: boolean;
  cameraYaw: number;
  cameraPitch: number;
}

const DEADZONE = 0.15;
const JOYSTICK_RADIUS = 50;

function svgIcon(d: string, viewBox = '0 0 24 24'): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
}

const ICONS = {
  shoot: svgIcon('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'),
  pass: svgIcon('<path d="M5 16c1-6 6-10 12-10"/><path d="M17 6l-4 4 4 4"/>'),
  throughPass: svgIcon('<path d="M2 18l8-8 4 4 8-8"/><path d="M18 6h4v4"/>'),
  sprint: svgIcon('<polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>'),
  tackle: svgIcon('<path d="M12 2l8 3.5v7a10 10 0 01-8 9.5 10 10 0 01-8-9.5v-7L12 2z"/>'),
  switchIcon: svgIcon('<path d="M20 8a9 9 0 01-16 5"/><path d="M4 16a9 9 0 0116-5"/><path d="M4 4v4h4"/><path d="M20 20v-4h-4"/>'),
  mute: svgIcon('<polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'),
  unmute: svgIcon('<polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"/><path d="M19.1 4.9a10 10 0 010 14.2M15.5 8.5a5 5 0 010 7"/>'),
  cameraReset: svgIcon('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'),
};

export class TouchController {
  private container: HTMLDivElement;
  private joystickBase: HTMLDivElement;
  private joystickKnob: HTMLDivElement;

  private shootBtn: HTMLButtonElement;
  private passBtn: HTMLButtonElement;
  private throughBtn: HTMLButtonElement;
  private tackleBtn: HTMLButtonElement;
  private sprintBtn: HTMLButtonElement;
  private switchBtn: HTMLButtonElement;
  private muteBtn: HTMLButtonElement;
  private cameraResetBtn: HTMLButtonElement;
  private cameraZone: HTMLDivElement;

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

  private _kick = false;
  private _kickPower = 0;
  private _kickDir: { x: number; z: number } = { x: 0, z: 1 };
  private _sprint = false;
  private _pass = false;
  private _throughPass = false;
  private _tackle = false;
  private _switch = false;
  private _mute = false;

  private actionButtons: { btn: HTMLButtonElement; key: string; touchId: number; active: boolean }[] = [];

  public onMuteToggle: (() => void) | null = null;
  public onHaptic: (() => void) | null = null;
  public onCameraReset: (() => void) | null = null;

  private hudVisible = false;

  private anchorBottom = 160;
  private anchorRight = 85;

  private buttonLayout: { key: string; angle: number; radius: number; size: number }[] = [
    { key: 'pass',       angle: -Math.PI / 2, radius: 78, size: 58 },
    { key: 'through',    angle: -Math.PI / 4, radius: 72, size: 50 },
    { key: 'tackle',     angle: Math.PI / 2,  radius: 72, size: 54 },
    { key: 'sprint',     angle: 0,            radius: 68, size: 52 },
    { key: 'switch',     angle: Math.PI,      radius: 68, size: 48 },
  ];

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
      bottom: max(50px, calc(env(safe-area-inset-bottom, 0px) + 30px));
      left: max(50px, calc(env(safe-area-inset-left, 0px) + 30px));
      width: 120px; height: 120px; border-radius: 50%;
      background: rgba(255,255,255,0.08);
      border: 2px solid rgba(255,255,255,0.15);
      pointer-events: auto;
    `;

    this.joystickKnob = document.createElement('div');
    this.joystickKnob.style.cssText = `
      position: absolute; top: 50%; left: 50%;
      width: 54px; height: 54px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,240,255,0.6), rgba(0,240,255,0.2));
      transform: translate(-50%, -50%);
      transition: none;
      will-change: transform;
    `;
    this.joystickBase.appendChild(this.joystickKnob);

    this.shootBtn = this.createBtn(ICONS.shoot);
    this.shootBtn.style.cssText += `
      position: absolute;
      width: 80px; height: 80px; border-radius: 50%;
      background: rgba(34,197,94,0.25); border: 2.5px solid rgba(34,197,94,0.5);
      color: #4ade80;
      pointer-events: auto;
      z-index: 11;
    `;

    this.passBtn = this.createBtn(ICONS.pass);
    this.throughBtn = this.createBtn(ICONS.throughPass);
    this.tackleBtn = this.createBtn(ICONS.tackle);
    this.sprintBtn = this.createBtn(ICONS.sprint);
    this.switchBtn = this.createBtn(ICONS.switchIcon);

    this.styleActionBtn(this.passBtn, 'rgba(59,130,246,0.2)', 'rgba(59,130,246,0.4)', '#60a5fa');
    this.styleActionBtn(this.throughBtn, 'rgba(139,92,246,0.2)', 'rgba(139,92,246,0.4)', '#a78bfa');
    this.styleActionBtn(this.tackleBtn, 'rgba(249,115,22,0.2)', 'rgba(249,115,22,0.4)', '#fb923c');
    this.styleActionBtn(this.sprintBtn, 'rgba(255,200,0,0.15)', 'rgba(255,200,0,0.3)', '#fbbf24');
    this.styleActionBtn(this.switchBtn, 'rgba(168,85,247,0.15)', 'rgba(168,85,247,0.3)', '#c084fc');

    this.muteBtn = this.createBtn(ICONS.mute);
    this.muteBtn.style.cssText += `
      position: absolute;
      top: max(20px, calc(env(safe-area-inset-top, 0px) + 10px));
      right: max(20px, calc(env(safe-area-inset-right, 0px) + 10px));
      width: 36px; height: 36px; border-radius: 50%;
      background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
      color: rgba(255,255,255,0.6);
      pointer-events: auto;
      z-index: 12;
    `;

    this.cameraResetBtn = this.createBtn(ICONS.cameraReset);
    this.cameraResetBtn.style.cssText += `
      position: absolute;
      top: max(20px, calc(env(safe-area-inset-top, 0px) + 10px));
      right: max(70px, calc(env(safe-area-inset-right, 0px) + 50px));
      width: 36px; height: 36px; border-radius: 50%;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
      color: rgba(255,255,255,0.5);
      pointer-events: auto;
      z-index: 12;
    `;

    this.cameraZone = document.createElement('div');
    this.cameraZone.style.cssText = `
      position: absolute; top: 0; right: 0; width: 50%; height: 100%;
      pointer-events: auto;
      background: transparent;
    `;

    this.container.appendChild(this.cameraZone);
    this.container.appendChild(this.joystickBase);
    this.container.appendChild(this.shootBtn);
    this.container.appendChild(this.passBtn);
    this.container.appendChild(this.throughBtn);
    this.container.appendChild(this.tackleBtn);
    this.container.appendChild(this.sprintBtn);
    this.container.appendChild(this.switchBtn);
    this.container.appendChild(this.muteBtn);
    this.container.appendChild(this.cameraResetBtn);

    this.positionActionButtons();

    this.setupJoystickEvents();
    this.setupCameraEvents();
    this.setupButtonEvents();
    this.setupCameraReset();

    this.applyOffsets();

    this.hide();
    document.body.appendChild(this.container);
  }

  private styleActionBtn(btn: HTMLButtonElement, bg: string, border: string, color: string) {
    btn.style.cssText += `
      position: absolute;
      border-radius: 50%;
      background: ${bg}; border: 2px solid ${border};
      color: ${color};
      pointer-events: auto;
      z-index: 10;
    `;
  }

  private positionActionButtons() {
    this.shootBtn.style.bottom = `${this.anchorBottom}px`;
    this.shootBtn.style.right = `${this.anchorRight}px`;

    this.buttonLayout.forEach(({ key, angle, radius, size }) => {
      const dx = Math.cos(angle) * radius;
      const dy = Math.sin(angle) * radius;
      const btn = this.getButton(key);
      if (!btn) return;
      btn.style.width = `${size}px`;
      btn.style.height = `${size}px`;
      btn.style.bottom = `${this.anchorBottom - dy}px`;
      btn.style.right = `${this.anchorRight - dx}px`;
    });
  }

  private getButton(key: string): HTMLButtonElement | null {
    switch (key) {
      case 'pass': return this.passBtn;
      case 'through': return this.throughBtn;
      case 'tackle': return this.tackleBtn;
      case 'sprint': return this.sprintBtn;
      case 'switch': return this.switchBtn;
      default: return null;
    }
  }

  applyOffsets() {
    try {
      const raw = localStorage.getItem('football_settings');
      if (!raw) return;
      const data = JSON.parse(raw);
      const j = data.joystick || {};
      const jx = j.joystickX || 0;
      const jy = j.joystickY || 0;
      const ax = j.actionX || 0;
      const ay = j.actionY || 0;

      const safeB = 'env(safe-area-inset-bottom, 0px)';
      const safeL = 'env(safe-area-inset-left, 0px)';
      const safeR = 'env(safe-area-inset-right, 0px)';
      const safeT = 'env(safe-area-inset-top, 0px)';

      this.joystickBase.style.bottom = `max(50px, calc(${safeB} + 30px + ${jy}px))`;
      this.joystickBase.style.left = `max(50px, calc(${safeL} + 30px + ${jx}px))`;

      this.shootBtn.style.bottom = `max(30px, calc(${safeB} + ${this.anchorBottom}px + ${ay}px))`;
      this.shootBtn.style.right = `max(10px, calc(${safeR} + ${this.anchorRight}px + ${ax}px))`;

      this.buttonLayout.forEach(({ key, angle, radius }) => {
        const dx = Math.cos(angle) * radius;
        const dy = Math.sin(angle) * radius;
        const btn = this.getButton(key);
        if (!btn) return;
        btn.style.bottom = `max(30px, calc(${safeB} + ${this.anchorBottom - dy}px + ${ay}px))`;
        btn.style.right = `max(10px, calc(${safeR} + ${this.anchorRight - dx}px + ${ax}px))`;
      });

      this.muteBtn.style.top = `max(20px, calc(${safeT} + 10px + ${ay * 0.3}px))`;
      this.muteBtn.style.right = `max(20px, calc(${safeR} + 10px + ${ax}px))`;

      this.cameraResetBtn.style.top = `max(20px, calc(${safeT} + 10px + ${ay * 0.3}px))`;
      this.cameraResetBtn.style.right = `max(70px, calc(${safeR} + 50px + ${ax}px))`;
    } catch (e) {
      // ignore parse errors
    }
  }

  private createBtn(html: string): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.innerHTML = html;
    btn.style.cssText = `
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
    window.addEventListener('touchend', onEnd, { passive: false });
    window.addEventListener('touchcancel', onEnd, { passive: false });
  }

  // ─── Camera ───

  private setupCameraEvents() {
    const onStart = (e: TouchEvent) => {
      e.preventDefault();
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

    this.cameraZone.addEventListener('touchstart', onStart, { passive: false });
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd, { passive: false });
    window.addEventListener('touchcancel', onEnd, { passive: false });
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
    const allBtns: { btn: HTMLButtonElement; key: string }[] = [
      { btn: this.shootBtn, key: 'shoot' },
      { btn: this.passBtn, key: 'pass' },
      { btn: this.throughBtn, key: 'through' },
      { btn: this.tackleBtn, key: 'tackle' },
      { btn: this.sprintBtn, key: 'sprint' },
      { btn: this.switchBtn, key: 'switch' },
      { btn: this.muteBtn, key: 'mute' },
    ];

    allBtns.forEach(({ btn, key }) => {
      const ab = { btn, key, touchId: -1, active: false };
      this.actionButtons.push(ab);

      btn.addEventListener('touchstart', (e: TouchEvent) => {
        const touch = e.changedTouches[0];
        ab.touchId = touch.identifier;
        ab.active = true;

        if (key === 'mute') {
          this._mute = !this._mute;
          this.muteBtn.innerHTML = this._mute ? ICONS.unmute : ICONS.mute;
          this.onMuteToggle?.();
        } else if (key === 'shoot') {
          this._kick = true;
          this._kickPower = 1;
          this.updateKickDir();
          this.setBtnActive(btn, true);
          this.haptic();
        } else if (key === 'pass') {
          this._pass = true;
          this.haptic();
          this.setBtnActive(btn, true);
        } else if (key === 'through') {
          this._throughPass = true;
          this.haptic();
          this.setBtnActive(btn, true);
        } else if (key === 'tackle') {
          this._tackle = true;
          this.haptic();
          this.setBtnActive(btn, true);
        } else if (key === 'sprint') {
          this._sprint = true;
          this.haptic();
          this.setBtnActive(btn, true);
        } else if (key === 'switch') {
          this._switch = true;
          this.haptic();
          this.setBtnActive(btn, true);
        }
        e.preventDefault();
      }, { passive: false });
    });

    const onWindowEnd = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        for (const ab of this.actionButtons) {
          if (ab.touchId === t.identifier) {
            this.releaseButton(ab);
            ab.touchId = -1;
            ab.active = false;
          }
        }
      }
    };

    window.addEventListener('touchend', onWindowEnd, { passive: false });
    window.addEventListener('touchcancel', onWindowEnd, { passive: false });
  }

  private releaseButton(ab: { btn: HTMLButtonElement; key: string }) {
    const { btn, key } = ab;
    if (key === 'shoot') {
      this.setBtnActive(btn, false);
    } else if (key === 'sprint') {
      this._sprint = false;
      this.setBtnActive(btn, false);
    } else if (key === 'pass') {
      this.setBtnActive(btn, false);
    } else if (key === 'through') {
      this.setBtnActive(btn, false);
    } else if (key === 'tackle') {
      this.setBtnActive(btn, false);
    } else if (key === 'switch') {
      this.setBtnActive(btn, false);
    }
  }

  private updateKickDir() {
    const dx = this.joystickDelta.x;
    const dy = this.joystickDelta.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > DEADZONE * JOYSTICK_RADIUS) {
      this._kickDir = { x: dx / dist, z: -(dy / dist) };
    }
  }

  // ─── Public API ───

  getTouchState(): TouchState {
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

    const smoothFactor = 0.4;
    this.joystickSmooth.x += (normX - this.joystickSmooth.x) * smoothFactor;
    this.joystickSmooth.y += (normY - this.joystickSmooth.y) * smoothFactor;

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
    const pass = this._pass;
    const throughPass = this._throughPass;
    const tackle = this._tackle;
    const switchPlayer = this._switch;
    this._kick = false;
    this._kickPower = 0;
    this._pass = false;
    this._throughPass = false;
    this._tackle = false;
    this._switch = false;

    return {
      steer: Math.max(-1, Math.min(1, this.joystickSmooth.x)),
      throttle: Math.max(-1, Math.min(1, this.joystickSmooth.y)),
      sprint: this._sprint,
      kick,
      kickPower,
      kickDirection: kickDir,
      pass,
      throughPass,
      tackle,
      switchPlayer,
      cameraYaw: this.cameraSmooth.yaw,
      cameraPitch: this.cameraSmooth.pitch,
    };
  }

  show() {
    this.container.style.display = 'block';
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
