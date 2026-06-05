import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { BallState, BALL } from '../../../shared/index.js';

export class Ball {
  public mesh: THREE.Mesh;
  public body: CANNON.Body;

  private scene: THREE.Scene;
  private world: CANNON.World;
  private spinSpeed = new THREE.Vector3();
  private spinAxis = new THREE.Vector3();

  constructor(scene: THREE.Scene, world: CANNON.World) {
    this.scene = scene;
    this.world = world;

    const tex = this.createSoccerTexture();
    const geo = new THREE.SphereGeometry(BALL.RADIUS, 32, 32);
    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.3,
      metalness: 0.02,
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    this.scene.add(this.mesh);

    this.body = new CANNON.Body({
      mass: BALL.MASS,
      shape: new CANNON.Sphere(BALL.RADIUS),
      material: new CANNON.Material('ball'),
    });
    this.body.position.set(0, BALL.RADIUS, 0);
    this.body.linearDamping = 0.05;
    this.body.angularDamping = 0.2;
    this.world.addBody(this.body);
  }

  private createSoccerTexture(): THREE.CanvasTexture {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);

    const pentagons = [
      { x: 256, y: 256, r: 50 },
      { x: 100, y: 180, r: 35 },
      { x: 412, y: 180, r: 35 },
      { x: 160, y: 380, r: 35 },
      { x: 352, y: 380, r: 35 },
      { x: 80, y: 320, r: 30 },
      { x: 432, y: 320, r: 30 },
      { x: 200, y: 110, r: 30 },
      { x: 312, y: 110, r: 30 },
      { x: 100, y: 460, r: 30 },
      { x: 412, y: 460, r: 30 },
      { x: 50, y: 90, r: 25 },
      { x: 462, y: 90, r: 25 },
      { x: 256, y: 50, r: 25 },
      { x: 50, y: 422, r: 25 },
      { x: 462, y: 422, r: 25 },
      { x: 256, y: 462, r: 25 },
    ];

    ctx.strokeStyle = '#cccccc';
    ctx.lineWidth = 2;
    for (let i = 0; i < pentagons.length; i++) {
      for (let j = i + 1; j < pentagons.length; j++) {
        const dx = pentagons[i].x - pentagons[j].x;
        const dy = pentagons[i].y - pentagons[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(pentagons[i].x, pentagons[i].y);
          ctx.lineTo(pentagons[j].x, pentagons[j].y);
          ctx.stroke();
        }
      }
    }

    ctx.fillStyle = '#222222';
    pentagons.forEach((p) => {
      this.drawPentagon(ctx, p.x, p.y, p.r);
    });

    ctx.fillStyle = '#dddddd';
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      let inPentagon = false;
      for (const p of pentagons) {
        const dx = x - p.x;
        const dy = y - p.y;
        if (Math.sqrt(dx * dx + dy * dy) < p.r + 5) {
          inPentagon = true;
          break;
        }
      }
      if (!inPentagon) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 1);
    return tex;
  }

  private drawPentagon(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
  }

  sync(state: BallState) {
    const speed = Math.sqrt(state.velocity.x ** 2 + state.velocity.z ** 2);

    this.spinAxis.x = state.spin.x;
    this.spinAxis.y = state.spin.y;
    this.spinAxis.z = state.spin.z;
    const spinMag = this.spinAxis.length();

    if (spinMag > 0.001) {
      this.spinAxis.normalize();
      this.mesh.rotateOnWorldAxis(this.spinAxis, spinMag * 0.05);
    }

    if (speed > 1) {
      this.spinSpeed.x = state.velocity.z * 0.5;
      this.spinSpeed.z = -state.velocity.x * 0.5;
      this.mesh.rotation.x += this.spinSpeed.x * 0.02;
      this.mesh.rotation.z += this.spinSpeed.z * 0.02;
    }

    this.mesh.position.set(state.position.x, state.position.y, state.position.z);

    this.body.position.set(state.position.x, state.position.y, state.position.z);
    this.body.velocity.set(state.velocity.x, state.velocity.y, state.velocity.z);
  }

  remove() {
    this.scene.remove(this.mesh);
    this.world.removeBody(this.body);
  }
}
