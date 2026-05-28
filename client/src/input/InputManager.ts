import { TouchController } from './TouchController.js';

export class InputManager {
  private keys: Set<string> = new Set();
  private mouseX = 0;
  private mouseY = 0;
  private _cameraYaw = 0;
  private _cameraPitch = 0;
  private _kickPressed = false;
  private kickFlag = false;

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

  getRawInput() {
    const steer = (this.keys.has('a') || this.keys.has('arrowleft') ? -1 : 0) +
      (this.keys.has('d') || this.keys.has('arrowright') ? 1 : 0);

    const throttle = (this.keys.has('w') || this.keys.has('arrowup') ? 1 : 0) +
      (this.keys.has('s') || this.keys.has('arrowdown') ? -1 : 0);

    const jump = this.keys.has(' ') || this.keys.has('space');
    const sprint = this.keys.has('shift');

    this.camera = {
      yaw: this._cameraYaw,
      pitch: this._cameraPitch,
    };

    const kick = this.kickFlag;
    this.kickFlag = false;

    // On mobile, merge touch input (touch takes priority when active)
    if (this.isMobile && this.touchController) {
      const touch = this.touchController.getTouchState();
      return {
        steer: touch.steer !== 0 ? touch.steer : Math.max(-1, Math.min(1, steer)),
        throttle: touch.throttle !== 0 ? touch.throttle : Math.max(-1, Math.min(1, throttle)),
        jump: touch.jump || jump,
        sprint: touch.sprint || sprint,
        kick: touch.kick || kick,
        kickDirection: touch.kick ? touch.kickDirection : undefined,
        camera: { yaw: touch.cameraYaw, pitch: touch.cameraPitch },
        sequence: 0,
      };
    }

    return {
      steer: Math.max(-1, Math.min(1, steer)),
      throttle: Math.max(-1, Math.min(1, throttle)),
      jump,
      sprint,
      kick,
      camera: this.camera,
      sequence: 0,
    };
  }
}
