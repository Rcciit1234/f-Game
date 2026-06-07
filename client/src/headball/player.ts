import { HBPlayerState, HB_FIELD, HB_PLAYER } from '../../../shared/headball.js';

export function createPlayer(id: string, name: string, team: 'home' | 'away'): HBPlayerState {
  const isHome = team === 'home';
  return {
    id,
    name,
    team,
    x: isHome ? HB_FIELD.WIDTH * 0.25 : HB_FIELD.WIDTH * 0.75,
    y: HB_FIELD.GROUND_Y,
    vx: 0,
    vy: 0,
    isGrounded: true,
    facingRight: !isHome,
    isJumping: false,
    isKicking: false,
    kickTimer: 0,
    headSize: HB_PLAYER.HEAD_RADIUS,
    skinColor: ['#e8b88a', '#c68642', '#8d5524', '#f0c8a0'][Math.floor(Math.random() * 4)],
    hairColor: ['#4a3728', '#1a1a1a', '#8b4513', '#ffd700', '#c0c0c0'][Math.floor(Math.random() * 5)],
    jerseyColor: isHome ? '#2563eb' : '#dc2626',
    animFrame: 0,
  };
}

export function getPlayerTopY(player: HBPlayerState): number {
  return player.y - HB_PLAYER.BODY_HEIGHT - player.headSize * 2;
}

export function getPlayerRect(player: HBPlayerState): { left: number; right: number; top: number; bottom: number } {
  return {
    left: player.x - HB_PLAYER.BODY_WIDTH / 2,
    right: player.x + HB_PLAYER.BODY_WIDTH / 2,
    top: getPlayerTopY(player),
    bottom: player.y,
  };
}
