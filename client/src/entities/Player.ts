import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { Team, PlayerPhysicsState, AnimationState, Position } from '../../../shared/index.js';

const SKIN_COLORS = [0xffcc99, 0xf5cba7, 0xd4a574, 0x8d5524];
const HAIR_COLORS = [0x1a1a1a, 0x3d2b1f, 0x553322, 0x8b4513, 0xd4a017, 0x4a0e0e];
const HAIR_STYLES = ['short', 'medium', 'long', 'bald'];

type AnimClip = {
  leftArmX: number; leftArmZ: number;
  rightArmX: number; rightArmZ: number;
  leftLegX: number; rightLegX: number;
  bodyLeanZ: number;
  phaseSpeed: number;
  amplitude: number;
};

const ANIM_CLIPS: Record<string, AnimClip> = {
  idle: {
    leftArmX: 0.1, leftArmZ: 0.05,
    rightArmX: -0.1, rightArmZ: -0.05,
    leftLegX: 0, rightLegX: 0,
    bodyLeanZ: 0,
    phaseSpeed: 0.3, amplitude: 0.02,
  },
  walk: {
    leftArmX: 0.6, leftArmZ: 0.2,
    rightArmX: -0.6, rightArmZ: -0.2,
    leftLegX: -0.5, rightLegX: 0.5,
    bodyLeanZ: 0.03,
    phaseSpeed: 2.5, amplitude: 0.5,
  },
  run: {
    leftArmX: 0.8, leftArmZ: 0.3,
    rightArmX: -0.8, rightArmZ: -0.3,
    leftLegX: -0.7, rightLegX: 0.7,
    bodyLeanZ: 0.08,
    phaseSpeed: 4.0, amplitude: 0.7,
  },
  sprint: {
    leftArmX: 1.0, leftArmZ: 0.4,
    rightArmX: -1.0, rightArmZ: -0.4,
    leftLegX: -0.9, rightLegX: 0.9,
    bodyLeanZ: 0.15,
    phaseSpeed: 6.0, amplitude: 0.9,
  },
  dribble: {
    leftArmX: 0.5, leftArmZ: 0.6,
    rightArmX: -0.3, rightArmZ: -0.2,
    leftLegX: -0.5, rightLegX: 0.5,
    bodyLeanZ: 0.06,
    phaseSpeed: 3.0, amplitude: 0.5,
  },
  pass: {
    leftArmX: 0.3, leftArmZ: -0.2,
    rightArmX: -1.2, rightArmZ: 0.1,
    leftLegX: 0.2, rightLegX: -0.8,
    bodyLeanZ: 0.05,
    phaseSpeed: 0, amplitude: 0,
  },
  throughPass: {
    leftArmX: 0.4, leftArmZ: -0.2,
    rightArmX: -1.4, rightArmZ: 0.1,
    leftLegX: 0.3, rightLegX: -1.0,
    bodyLeanZ: 0.08,
    phaseSpeed: 0, amplitude: 0,
  },
  shoot: {
    leftArmX: 0.5, leftArmZ: -0.5,
    rightArmX: -1.8, rightArmZ: 0.2,
    leftLegX: 0.3, rightLegX: -1.5,
    bodyLeanZ: 0.12,
    phaseSpeed: 0, amplitude: 0,
  },
  tackle: {
    leftArmX: -0.3, leftArmZ: 0.5,
    rightArmX: -0.3, rightArmZ: -0.5,
    leftLegX: 1.2, rightLegX: 0,
    bodyLeanZ: -0.2,
    phaseSpeed: 0, amplitude: 0,
  },
  celebrate: {
    leftArmX: -2.5, leftArmZ: 0.3,
    rightArmX: -2.5, rightArmZ: -0.3,
    leftLegX: -0.1, rightLegX: 0.1,
    bodyLeanZ: 0,
    phaseSpeed: 0, amplitude: 0,
  },
  gkDive: {
    leftArmX: 1.5, leftArmZ: 0.5,
    rightArmX: 1.5, rightArmZ: -0.5,
    leftLegX: -0.5, rightLegX: 0.5,
    bodyLeanZ: -0.5,
    phaseSpeed: 0, amplitude: 0,
  },
};

export class Player {
  public mesh: THREE.Group;
  public body: CANNON.Body;
  public nameLabel: THREE.Sprite;

  private scene: THREE.Scene;
  private world: CANNON.World;
  private team: Team;
  private type: 'player' | 'ai' | 'remote';
  private teamColor: number;
  private shortsColor: number;
  private sockColor: number;

  private torso: THREE.Group;
  private headGroup: THREE.Group;
  private leftArm: THREE.Group;
  private rightArm: THREE.Group;
  private leftLeg: THREE.Group;
  private rightLeg: THREE.Group;
  private leftFoot: THREE.Group;
  private rightFoot: THREE.Group;

  private animPhase = 0;
  private playerName = '';
  private playerNumber = '';

  private currentAnim: AnimationState = 'idle';
  private prevAnim: AnimationState = 'idle';
  private animBlend = 1;
  private blendSpeed = 8;
  private animTime = 0;

  private isCelebrating = false;
  private celebrateTimer = 0;
  private celebrateDuration = 1.5;
  private speechBubble: THREE.Sprite | null = null;
  private speechBubbleTimer = 0;

  private hasBall = false;

  constructor(
    scene: THREE.Scene, world: CANNON.World,
    team: Team, type: 'player' | 'ai' | 'remote',
    playerName = '', playerNumber = '',
    position: Position = 'MF',
  ) {
    this.scene = scene;
    this.world = world;
    this.team = team;
    this.type = type;
    this.playerName = playerName || (type === 'ai' ? 'AI' : 'Player');
    this.playerNumber = playerNumber || String(Math.floor(Math.random() * 99) + 1);

    this.teamColor = team === Team.Blue ? 0x00e5ff : 0xef4444;
    this.shortsColor = team === Team.Blue ? 0x0055aa : 0x8b0000;
    this.sockColor = team === Team.Blue ? 0x00bfff : 0xdc2626;

    const skinIdx = Math.floor(Math.random() * SKIN_COLORS.length);
    const skinColor = SKIN_COLORS[skinIdx];
    const hairIdx = Math.floor(Math.random() * HAIR_COLORS.length);
    const hairColor = HAIR_COLORS[hairIdx];
    const hairStyle = HAIR_STYLES[Math.floor(Math.random() * HAIR_STYLES.length)];

    this.mesh = new THREE.Group();

    const bodyScale = this.getBodyScale(position);
    this.mesh.scale.set(bodyScale, bodyScale, bodyScale);

    this.torso = this.createBody(skinColor);
    this.headGroup = this.createHead(skinColor, hairColor, hairStyle);
    this.leftArm = this.createArm(skinColor);
    this.rightArm = this.createArm(skinColor);

    const legResult = this.createLeg(skinColor);
    this.leftLeg = legResult.left;
    this.rightLeg = legResult.right;
    this.leftFoot = legResult.leftFoot;
    this.rightFoot = legResult.rightFoot;

    this.mesh.add(this.torso);
    this.mesh.add(this.headGroup);
    this.mesh.add(this.leftArm);
    this.mesh.add(this.rightArm);
    this.mesh.add(this.leftLeg);
    this.mesh.add(this.rightLeg);

    this.torso.position.y = 0.05;
    this.headGroup.position.set(0, 0.85, 0);
    this.leftArm.position.set(-0.28, 0.55, 0);
    this.rightArm.position.set(0.28, 0.55, 0);
    this.leftLeg.position.set(-0.12, -0.35, 0);
    this.rightLeg.position.set(0.12, -0.35, 0);

    this.nameLabel = this.createNameLabel();
    this.scene.add(this.mesh);

    const bodyRadius = position === 'GK' ? 0.4 : 0.35;
    const bodyHeight = position === 'GK' ? 1.9 : 1.75;
    this.body = new CANNON.Body({
      mass: position === 'GK' ? 85 : 70,
      shape: new CANNON.Cylinder(bodyRadius, bodyRadius, bodyHeight, 8),
      material: new CANNON.Material('player'),
    });
    this.body.position.set(0, 0.9, 0);
    this.world.addBody(this.body);
  }

  private getBodyScale(position: Position): number {
    switch (position) {
      case 'GK': return 1.1;
      case 'DF': return 1.04;
      case 'FW': return 0.98;
      default: return 1.0;
    }
  }

  setHasBall(v: boolean) {
    this.hasBall = v;
  }

  celebrate() {
    this.isCelebrating = true;
    this.celebrateTimer = 0;
    this.body.velocity.y = 4;
    this.setAnimation('celebrate');
    this.createSpeechBubble();
  }

  private createSpeechBubble() {
    if (this.speechBubble) {
      this.scene.remove(this.speechBubble);
    }
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 80;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(0,0,0,0.85)';
    const rx = 40, ry = 30;
    ctx.beginPath();
    ctx.roundRect(64 - rx, 10, rx * 2, ry * 2, 12);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('GOAL!', 64, 45);
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({
      map: tex, transparent: true, depthTest: false, sizeAttenuation: true,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(1.2, 0.75, 1);
    sprite.position.set(0, 1.6, 0);
    sprite.renderOrder = 1000;
    this.mesh.add(sprite);
    this.speechBubble = sprite;
    this.speechBubbleTimer = 0;
  }

  setAnimation(state: AnimationState, force = false) {
    if (state === this.currentAnim && !force) return;
    if (force) {
      this.currentAnim = state;
      this.animBlend = 1;
      return;
    }
    this.prevAnim = this.currentAnim;
    this.currentAnim = state;
    this.animBlend = 0;
  }

  private updateAnimations(dt: number) {
    if (this.isCelebrating) {
      this.celebrateTimer += dt;
      if (this.celebrateTimer > this.celebrateDuration) {
        this.isCelebrating = false;
        this.setAnimation('idle', true);
      }
      if (this.speechBubble) {
        this.speechBubbleTimer += dt;
        this.speechBubble.position.y = 1.6 + this.speechBubbleTimer * 0.3;
        const bp = Math.min(1, this.speechBubbleTimer / 2);
        this.speechBubble.material.opacity = 1 - bp;
        if (bp >= 1) {
          this.mesh.remove(this.speechBubble);
          this.speechBubble.material.dispose();
          this.speechBubble = null;
        }
      }
    }

    if (this.animBlend < 1) {
      this.animBlend = Math.min(1, this.animBlend + this.blendSpeed * dt);
    }

    const speed = ANIM_CLIPS[this.currentAnim]?.phaseSpeed || 0;
    this.animPhase += speed * dt;

    const clip = ANIM_CLIPS[this.currentAnim] || ANIM_CLIPS.idle;
    const prevClip = ANIM_CLIPS[this.prevAnim] || ANIM_CLIPS.idle;
    const t = this.animBlend;

    const sinPhase = Math.sin(this.animPhase);
    const idleBreath = Math.sin(this.animPhase * 0.5) * 0.02;

    const lerp = (a: number, b: number) => a + (b - a) * t;

    const lArmX = lerp(
      prevClip.leftArmX + (prevClip.amplitude || 0) * sinPhase,
      clip.leftArmX + (clip.amplitude || 0) * sinPhase,
    );
    const lArmZ = lerp(prevClip.leftArmZ, clip.leftArmZ);
    const rArmX = lerp(
      prevClip.rightArmX + (prevClip.amplitude || 0) * -sinPhase,
      clip.rightArmX + (clip.amplitude || 0) * -sinPhase,
    );
    const rArmZ = lerp(prevClip.rightArmZ, clip.rightArmZ);
    const lLegX = lerp(
      prevClip.leftLegX + (prevClip.amplitude || 0) * sinPhase,
      clip.leftLegX + (clip.amplitude || 0) * sinPhase,
    );
    const rLegX = lerp(
      prevClip.rightLegX + (prevClip.amplitude || 0) * -sinPhase,
      clip.rightLegX + (clip.amplitude || 0) * -sinPhase,
    );

    const isKicking = ['pass', 'throughPass', 'shoot'].includes(this.currentAnim);
    if (isKicking) {
      const kickProgress = Math.min(1, this.animPhase / 0.4);
      const kickSwing = Math.sin(kickProgress * Math.PI) * 1.5;
      this.rightLeg.rotation.x = -kickSwing;
      this.rightLeg.rotation.z = 0;
    } else {
      this.leftArm.rotation.x = lArmX;
      this.leftArm.rotation.z = lArmZ;
      this.rightArm.rotation.x = rArmX;
      this.rightArm.rotation.z = rArmZ;
      this.leftLeg.rotation.x = lLegX;
      this.rightLeg.rotation.x = rLegX;
    }

    this.torso.rotation.z = lerp(prevClip.bodyLeanZ, clip.bodyLeanZ) + idleBreath;
  }

  private createBody(skinColor: number): THREE.Group {
    const group = new THREE.Group();

    const jerseyMat = new THREE.MeshStandardMaterial({
      color: this.teamColor, roughness: 0.5, metalness: 0.05,
    });
    const jersey = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.30, 0.45, 12), jerseyMat);
    jersey.castShadow = true;
    jersey.position.y = 0.1;

    const numCanvas = document.createElement('canvas');
    numCanvas.width = 32;
    numCanvas.height = 40;
    const ctx = numCanvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.playerNumber, 16, 20);
    const numTex = new THREE.CanvasTexture(numCanvas);
    const numMat = new THREE.MeshBasicMaterial({
      map: numTex, transparent: true, depthTest: false, side: THREE.FrontSide,
    });
    const numMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.18), numMat);
    numMesh.position.set(0, 0.08, 0.28);
    jersey.add(numMesh);

    group.add(jersey);

    const shortsMat = new THREE.MeshStandardMaterial({
      color: this.shortsColor, roughness: 0.6, metalness: 0.05,
    });
    const shorts = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.24, 0.20, 12), shortsMat);
    shorts.position.y = -0.22;
    shorts.castShadow = true;
    group.add(shorts);

    return group;
  }

  private createHead(skinColor: number, hairColor: number, hairStyle: string): THREE.Group {
    const group = new THREE.Group();
    const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.6 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.9 });

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.06, 8), skinMat);
    neck.position.y = -0.16;
    neck.castShadow = true;
    group.add(neck);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), skinMat);
    head.castShadow = true;
    group.add(head);

    if (hairStyle === 'short') {
      const hair = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), hairMat);
      hair.position.y = 0.05;
      hair.scale.set(1.02, 0.25, 1.02);
      group.add(hair);
    } else if (hairStyle === 'medium') {
      const hair = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 16), hairMat);
      hair.position.y = 0.04;
      hair.scale.set(1.05, 0.4, 1.05);
      group.add(hair);
    } else if (hairStyle === 'long') {
      const hair = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 16), hairMat);
      hair.position.y = 0.03;
      hair.scale.set(1.08, 0.55, 1.08);
      group.add(hair);
    }

    const eyeGeo = new THREE.SphereGeometry(0.03, 8, 8);
    const pupilGeo = new THREE.SphereGeometry(0.015, 8, 8);

    const leftEye = new THREE.Mesh(eyeGeo, whiteMat);
    leftEye.position.set(-0.07, 0.03, 0.14);
    group.add(leftEye);
    const leftPupil = new THREE.Mesh(pupilGeo, blackMat);
    leftPupil.position.set(-0.07, 0.03, 0.17);
    group.add(leftPupil);

    const rightEye = new THREE.Mesh(eyeGeo, whiteMat);
    rightEye.position.set(0.07, 0.03, 0.14);
    group.add(rightEye);
    const rightPupil = new THREE.Mesh(pupilGeo, blackMat);
    rightPupil.position.set(0.07, 0.03, 0.17);
    group.add(rightPupil);

    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 8), new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.6 }));
    nose.position.set(0, -0.02, 0.16);
    group.add(nose);

    const earGeo = new THREE.SphereGeometry(0.025, 8, 8);
    const leftEar = new THREE.Mesh(earGeo, skinMat);
    leftEar.position.set(-0.16, 0, 0);
    leftEar.scale.z = 0.4;
    group.add(leftEar);
    const rightEar = new THREE.Mesh(earGeo, skinMat);
    rightEar.position.set(0.16, 0, 0);
    rightEar.scale.z = 0.4;
    group.add(rightEar);

    return group;
  }

  private createArm(skinColor: number): THREE.Group {
    const group = new THREE.Group();
    const armMat = new THREE.MeshStandardMaterial({
      color: this.teamColor, roughness: 0.5, metalness: 0.05,
    });
    const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.12, 8), armMat);
    sleeve.position.y = -0.08;
    sleeve.castShadow = true;
    group.add(sleeve);

    const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.6 });
    const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.055, 0.16, 8), skinMat);
    forearm.position.y = -0.24;
    forearm.castShadow = true;
    group.add(forearm);

    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), skinMat);
    hand.position.y = -0.36;
    group.add(hand);

    return group;
  }

  private createLeg(skinColor: number): { left: THREE.Group; right: THREE.Group; leftFoot: THREE.Group; rightFoot: THREE.Group } {
    const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.6 });
    const sockMat = new THREE.MeshStandardMaterial({
      color: this.sockColor, roughness: 0.5, metalness: 0.05,
    });
    const bootMat = new THREE.MeshStandardMaterial({
      color: 0x111111, roughness: 0.5, metalness: 0.1,
    });

    const createOne = (): { leg: THREE.Group; foot: THREE.Group } => {
      const leg = new THREE.Group();

      const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.18, 8), skinMat);
      thigh.position.y = -0.09;
      thigh.castShadow = true;
      leg.add(thigh);

      const sock = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.075, 0.16, 8), sockMat);
      sock.position.y = -0.26;
      sock.castShadow = true;
      leg.add(sock);

      const foot = new THREE.Group();
      const boot = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.16), bootMat);
      boot.position.set(0, -0.03, 0.02);
      boot.castShadow = true;
      foot.add(boot);
      foot.position.set(0, -0.40, 0);
      leg.add(foot);

      return { leg, foot };
    };

    const left = createOne();
    const right = createOne();

    return { left: left.leg, right: right.leg, leftFoot: left.foot, rightFoot: right.foot };
  }

  private createNameLabel(): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    const textW = ctx.measureText(this.playerName).width + 40;
    ctx.beginPath();
    ctx.roundRect(128 - textW / 2, 8, textW, 44, 22);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.playerName, 128, 30);
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({
      map: tex, transparent: true, depthTest: false, sizeAttenuation: true,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(1.5, 0.4, 1);
    sprite.position.set(0, 1.5, 0);
    sprite.renderOrder = 999;
    this.mesh.add(sprite);
    return sprite;
  }

  sync(state: PlayerPhysicsState, dt: number = 1 / 60) {
    this.mesh.position.set(state.position.x, state.position.y, state.position.z);
    this.mesh.rotation.set(0, state.rotation.y, 0);
    this.body.position.set(state.position.x, state.position.y, state.position.z);

    const speed = Math.sqrt(state.velocity.x ** 2 + state.velocity.z ** 2);

    const animState = state.animationState || 'idle';
    this.setAnimation(animState);

    this.updateAnimations(dt);
  }

  remove() {
    this.scene.remove(this.mesh);
    this.world.removeBody(this.body);
  }
}
