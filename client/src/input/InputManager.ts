import { TouchController } from './TouchController.js';

export class InputManager {
  private keys: Set<string> = new Set();
  private mouseX = 0;
  private mouseY = 0;
  private _cameraYaw = 0;
  private _cameraPitch = 0;
  private _kickPressed = false;
  private kickFlag = false;
  private switchFlag = false;

  public camera = { yaw: 0, pitch: 0 };
  public isMobile = false;
  public touchController: TouchController | null = null;

  constructor() {
    this.isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.setupKeyboard();
    if (!this.isMobile) {
      this.setupPointerLock();
    }
  }

  setTouchController(tc: TouchController) {
    this.touchController = tc;
  }

  private setupKeyboard() {
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.key.toLowerCase());
      if (e.key === ' ' || e.key === 'Space') {
        e.preventDefault();
      }
      if (e.key === 'e' || e.key === 'E') {
        this.kickFlag = true;
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.key.toLowerCase());
    });
  }

  private setupPointerLock() {
    window.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        this.kickFlag = true;
      }
    });

    window.addEventListener('mousemove', (e) => {
      this._cameraYaw -= e.movementX * 0.002;
      this._cameraPitch -= e.movementY * 0.002;
      this._cameraPitch = Math.max(-1.2, Math.min(1.2, this._cameraPitch));
    });
  }

  requestPointerLock() {
    if (!this.isMobile) {
      document.body.requestPointerLock();
    }
  }

  consumeSwitchRequest(): boolean {
    if (this.switchFlag) {
      this.switchFlag = false;
      return true;
    }
    return false;
  }

  getRawInput() {
    const steer = (this.keys.has('a') || this.keys.has('arrowleft') ? -1 : 0) +
      (this.keys.has('d') || this.keys.has('arrowright') ? 1 : 0);

    const throttle = (this.keys.has('w') || this.keys.has('arrowup') ? 1 : 0) +
      (this.keys.has('s') || this.keys.has('arrowdown') ? -1 : 0);

    const sprint = this.keys.has('shift');

    this.camera = {
      yaw: this._cameraYaw,
      pitch: this._cameraPitch,
    };

    const kick = this.kickFlag;
    this.kickFlag = false;

    // On mobile, merge touch input (touch takes priority when active)
    if (this.isMobile && this.touchController && this.touchController.visible) {
      const touch = this.touchController.getTouchState();

      if (touch.switchPlayer) {
        this.switchFlag = true;
      }

      return {
        steer: touch.steer !== 0 ? touch.steer : Math.max(-1, Math.min(1, steer)),
        throttle: touch.throttle !== 0 ? touch.throttle : Math.max(-1, Math.min(1, throttle)),
        sprint: touch.sprint || sprint,
        kick: touch.kick || kick,
        kickDirection: touch.kick ? touch.kickDirection : undefined,
        pass: touch.pass,
        throughPass: touch.throughPass,
        tackle: touch.tackle,
        switchPlayer: touch.switchPlayer,
        camera: { yaw: touch.cameraYaw, pitch: touch.cameraPitch },
        sequence: 0,
      };
    }

    return {
      steer: Math.max(-1, Math.min(1, steer)),
      throttle: Math.max(-1, Math.min(1, throttle)),
      sprint,
      kick,
      kickDirection: undefined,
      pass: undefined,
      defence: undefined,
      camera: this.camera,
      sequence: 0,
    };
  }
}
