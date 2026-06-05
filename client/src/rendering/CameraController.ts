import * as THREE from 'three';

export class CameraController {
  private camera: THREE.PerspectiveCamera;
  private target: THREE.Object3D | null = null;

  private pos = new THREE.Vector3();
  private lookTarget = new THREE.Vector3();

  private yaw = 0;
  private pitch = -0.3;
  private distance = 8;

  private isMobile: boolean;

  // Auto-follow for mobile
  private autoYaw = 0;
  private autoPitch = -0.25;
  private autoDistance = 9;

  // Switch transition state
  private switchActive = false;
  private switchTimer = 0;
  private switchDuration = 0.3;
  private switchStartPos = new THREE.Vector3();
  private switchEndPos = new THREE.Vector3();
  private switchStartLook = new THREE.Vector3();
  private switchEndLook = new THREE.Vector3();

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    this.pos.copy(camera.position);
    this.isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (this.isMobile) {
      this.yaw = 0;
      this.pitch = this.autoPitch;
      this.distance = this.autoDistance;
    }
  }

  follow(target: THREE.Object3D) {
    this.target = target;
  }

  snapBehind() {
    this.yaw = this.autoYaw;
    this.pitch = this.autoPitch;
  }

  switchTarget(targetPos: THREE.Vector3, duration: number = 0.3) {
    this.switchStartPos.copy(this.camera.position);
    this.switchStartLook.copy(this.lookTarget);
    this.switchEndPos.copy(targetPos);
    this.switchEndPos.y += (this.isMobile ? 1.8 : 1.2);
    this.switchEndLook.copy(targetPos);
    this.switchEndLook.y += 1.2;
    this.switchDuration = Math.max(0.1, duration);
    this.switchTimer = 0;
    this.switchActive = true;
  }

  private updateSwitch(dt: number) {
    if (!this.switchActive) return;
    this.switchTimer += dt;
    const t = Math.min(1, this.switchTimer / this.switchDuration);
    const smoothT = t * t * (3 - 2 * t);

    this.camera.position.lerpVectors(this.switchStartPos, this.switchEndPos, smoothT);
    this.lookTarget.lerpVectors(this.switchStartLook, this.switchEndLook, smoothT);
    this.camera.lookAt(this.lookTarget);

    if (t >= 1) {
      this.switchActive = false;
    }
  }

  update(dt: number, cameraInput?: { yaw: number; pitch: number }) {
    if (!this.target && !this.switchActive) return;

    // If switch is active, override normal camera movement
    if (this.switchActive) {
      this.updateSwitch(dt);
      return;
    }

    if (cameraInput) {
      this.yaw = cameraInput.yaw;
      this.pitch = Math.max(-1.0, Math.min(0.8, cameraInput.pitch));
    } else if (this.isMobile) {
      const followSpeed = this.isMobile ? 4 * dt : 2 * dt;
      this.yaw += (this.autoYaw - this.yaw) * Math.min(1, followSpeed);
      this.pitch += (this.autoPitch - this.pitch) * Math.min(1, followSpeed);
    }

    const targetPos = new THREE.Vector3();
    this.target!.getWorldPosition(targetPos);

    const idealPos = new THREE.Vector3(
      targetPos.x + Math.sin(this.yaw) * Math.cos(this.pitch) * this.distance,
      targetPos.y + (this.isMobile ? 1.8 : 1.2) + Math.sin(this.pitch) * this.distance,
      targetPos.z + Math.cos(this.yaw) * Math.cos(this.pitch) * this.distance,
    );

    const smooth = Math.min(1, 8 * dt);
    this.pos.lerp(idealPos, smooth);
    this.lookTarget.lerp(targetPos.clone().add(new THREE.Vector3(0, 1.2, 0)), smooth);

    this.camera.position.copy(this.pos);
    this.camera.lookAt(this.lookTarget);
  }
}
