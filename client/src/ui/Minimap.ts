import { PlayerState, BallState, Team } from '../../../shared/index.js';

export class Minimap {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private size: number;
  private isMobile: boolean;
  private localPlayerId: string | null = null;

  constructor() {
    this.isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.size = this.isMobile ? 120 : 160;
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    this.canvas.style.cssText = `
      position: fixed; z-index: 101; border-radius: 50%;
      background: rgba(0,0,0,0.6); backdrop-filter: blur(5px);
      border: 2px solid rgba(255,255,255,0.1);
      ${this.isMobile
        ? 'bottom: 220px; right: 10px;'
        : 'bottom: 40px; left: 50%; transform: translateX(-50%);'}
    `;
    this.ctx = this.canvas.getContext('2d')!;
    document.body.appendChild(this.canvas);
  }

  setLocalPlayerId(id: string) {
    this.localPlayerId = id;
  }

  update(players: Map<string, PlayerState>, ball: BallState | null) {
    const ctx = this.ctx;
    const s = this.size;
    const cx = s / 2;
    const cy = s / 2;
    const scale = 1.2;

    ctx.clearRect(0, 0, s, s);

    // Field outline
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(cx, cy, cx - 4, cy - 4, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Center line
    ctx.beginPath();
    ctx.moveTo(cx, 4);
    ctx.lineTo(cx, s - 4);
    ctx.stroke();

    // Center circle
    ctx.beginPath();
    ctx.arc(cx, cy, 15, 0, Math.PI * 2);
    ctx.stroke();

    // Goal markers
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(cx - 6, 2, 12, 4);
    ctx.fillRect(cx - 6, s - 6, 12, 4);

    // Draw ball
    if (ball) {
      const bx = cx + ball.position.x * scale;
      const by = cy + ball.position.z * scale;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(bx, by, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw players
    players.forEach((player) => {
      const px = cx + player.physics.position.x * scale;
      const py = cy + player.physics.position.z * scale;
      const color = player.team === Team.Blue ? '#00f0ff' : '#ef4444';
      const isLocal = player.id === this.localPlayerId;
      const isAI = player.isAI;

      let alpha: string;
      let radius: number;
      let shape: 'circle' | 'diamond' | 'triangle';

      if (isLocal) {
        alpha = 'ff';
        radius = 4;
        shape = 'triangle';
      } else if (isAI) {
        alpha = '66';
        radius = 2;
        shape = 'diamond';
      } else {
        alpha = 'cc';
        radius = 3;
        shape = 'circle';
      }

      ctx.fillStyle = color + alpha;

      if (shape === 'circle') {
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      } else if (shape === 'diamond') {
        ctx.beginPath();
        ctx.moveTo(px, py - radius);
        ctx.lineTo(px + radius, py);
        ctx.lineTo(px, py + radius);
        ctx.lineTo(px - radius, py);
        ctx.closePath();
        ctx.fill();
      } else if (shape === 'triangle') {
        const angle = player.physics.rotation.y;
        ctx.beginPath();
        ctx.moveTo(px + Math.sin(angle) * radius * 1.5, py + Math.cos(angle) * radius * 1.5);
        ctx.lineTo(px + Math.sin(angle + 2.4) * radius, py + Math.cos(angle + 2.4) * radius);
        ctx.lineTo(px + Math.sin(angle - 2.4) * radius, py + Math.cos(angle - 2.4) * radius);
        ctx.closePath();
        ctx.fill();
      }

      // Direction indicator for non-AI human players
      if (!isAI) {
        const dirX = Math.sin(player.physics.rotation.y) * (radius + 2);
        const dirZ = Math.cos(player.physics.rotation.y) * (radius + 2);
        ctx.strokeStyle = color + alpha;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + dirX, py + dirZ);
        ctx.stroke();
      }
    });
  }
}
