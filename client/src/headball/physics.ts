import { HBPlayerState, HBBallState, HBInput, HB_FIELD, HB_PLAYER, HB_BALL } from '../../../shared/headball.js';

export function updatePlayer(player: HBPlayerState, input: HBInput, dt: number) {
  if (input.left) {
    player.vx = -HB_PLAYER.MOVE_SPEED;
    player.facingRight = false;
  } else if (input.right) {
    player.vx = HB_PLAYER.MOVE_SPEED;
    player.facingRight = true;
  } else {
    player.vx *= 0.75;
  }

  if (input.jump && player.isGrounded) {
    player.vy = HB_PLAYER.JUMP_VELOCITY;
    player.isGrounded = false;
    player.isJumping = true;
  }

  if (input.jump && player.isJumping && player.vy < 0) {
    player.vy += HB_PLAYER.JUMP_HOLD_FORCE * dt;
  }

  if (!player.isGrounded) {
    player.vy += HB_BALL.GRAVITY * dt;
  }

  player.x += player.vx * dt;
  player.y += player.vy * dt;

  if (player.y >= HB_FIELD.GROUND_Y) {
    player.y = HB_FIELD.GROUND_Y;
    player.vy = 0;
    player.isGrounded = true;
    player.isJumping = false;
  }

  const halfBody = HB_PLAYER.BODY_WIDTH / 2;
  if (player.x < halfBody) { player.x = halfBody; player.vx = 0; }
  if (player.x > HB_FIELD.WIDTH - halfBody) { player.x = HB_FIELD.WIDTH - halfBody; player.vx = 0; }

  player.kickTimer = Math.max(0, player.kickTimer - dt);
  if (player.kickTimer <= 0) player.isKicking = false;

  player.animFrame += dt * 8;
}

export function updateBall(ball: HBBallState, players: HBPlayerState[], dt: number) {
  ball.vy += HB_BALL.GRAVITY * dt;

  ball.vx *= (1 - HB_BALL.AIR_RESISTANCE);
  ball.vy *= (1 - HB_BALL.AIR_RESISTANCE);

  ball.x += ball.vx * dt;
  ball.y += ball.vy * dt;

  const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
  if (speed > HB_BALL.MAX_SPEED) {
    ball.vx = (ball.vx / speed) * HB_BALL.MAX_SPEED;
    ball.vy = (ball.vy / speed) * HB_BALL.MAX_SPEED;
  }

  if (ball.y + ball.radius >= HB_FIELD.GROUND_Y) {
    ball.y = HB_FIELD.GROUND_Y - ball.radius;
    ball.vy *= -HB_BALL.BOUNCE;
    ball.vx *= HB_BALL.GROUND_FRICTION;
    if (Math.abs(ball.vy) < 10) ball.vy = 0;
  }

  const inGoalLeft = ball.x - ball.radius < 0 && ball.y > HB_FIELD.GOAL_Y && ball.y < HB_FIELD.GROUND_Y;
  const inGoalRight = ball.x + ball.radius > HB_FIELD.WIDTH && ball.y > HB_FIELD.GOAL_Y && ball.y < HB_FIELD.GROUND_Y;

  if (!inGoalLeft && ball.x - ball.radius < 0) {
    ball.x = ball.radius;
    ball.vx *= -HB_BALL.BOUNCE;
  }
  if (!inGoalRight && ball.x + ball.radius > HB_FIELD.WIDTH) {
    ball.x = HB_FIELD.WIDTH - ball.radius;
    ball.vx *= -HB_BALL.BOUNCE;
  }

  if (ball.y - ball.radius < 0) {
    ball.y = ball.radius;
    ball.vy *= -HB_BALL.BOUNCE;
  }

  for (const player of players) {
    checkPlayerCollision(player, ball);
  }
}

function checkPlayerCollision(player: HBPlayerState, ball: HBBallState) {
  const headCenterX = player.x;
  const headCenterY = player.y - HB_PLAYER.BODY_HEIGHT - player.headSize;

  const hdx = ball.x - headCenterX;
  const hdy = ball.y - headCenterY;
  const headDist = Math.sqrt(hdx * hdx + hdy * hdy);
  const headHitDist = ball.radius + player.headSize * 1.3;

  if (headDist < headHitDist) {
    const overlap = headHitDist - headDist;
    if (headDist > 0.001) {
      ball.x += (hdx / headDist) * overlap;
      ball.y += (hdy / headDist) * overlap;
    }
    if (player.isKicking) {
      ball.lastTouchBy = player.id;
      ball.lastTouchTeam = player.team;
      return;
    }
    const dir = ball.x > player.x ? 1 : -1;
    const upForce = player.vy < 0 ? Math.abs(player.vy) * 0.4 : 0;
    ball.vx = dir * 200;
    ball.vy = -250 - upForce;
    ball.lastTouchBy = player.id;
    ball.lastTouchTeam = player.team;
    return;
  }

  const bodyLeft = player.x - HB_PLAYER.BODY_WIDTH * 0.8;
  const bodyRight = player.x + HB_PLAYER.BODY_WIDTH * 0.8;
  const bodyTop = headCenterY + player.headSize * 0.5;
  const bodyBottom = player.y - 2;
  const cx = Math.max(bodyLeft, Math.min(ball.x, bodyRight));
  const cy = Math.max(bodyTop, Math.min(ball.y, bodyBottom));
  const bdx = ball.x - cx;
  const bdy = ball.y - cy;
  const bodyDist = Math.sqrt(bdx * bdx + bdy * bdy);

  if (bodyDist < ball.radius) {
    const overlap = ball.radius - bodyDist;
    if (bodyDist > 0.001) {
      ball.x += (bdx / bodyDist) * overlap;
      ball.y += (bdy / bodyDist) * overlap;
    } else {
      ball.y -= ball.radius;
    }
    const pushDir = ball.x > player.x ? 1 : -1;
    ball.vx += pushDir * 100;
    ball.vy = -Math.abs(ball.vy) * 0.3 - 80;
    ball.lastTouchBy = player.id;
    ball.lastTouchTeam = player.team;
    return;
  }

  const footX = player.x + (player.facingRight ? 8 : -8);
  const footY = player.y - 2;
  const fdx = ball.x - footX;
  const fdy = ball.y - footY;
  const footDist = Math.sqrt(fdx * fdx + fdy * fdy);
  const footHitDist = ball.radius + 10;

  if (footDist < footHitDist) {
    const overlap = footHitDist - footDist;
    if (footDist > 0.001) {
      ball.x += (fdx / footDist) * overlap;
      ball.y += (fdy / footDist) * overlap;
    }
    if (player.isKicking) {
      ball.lastTouchBy = player.id;
      ball.lastTouchTeam = player.team;
    } else {
      const pushDir = ball.x > player.x ? 1 : -1;
      ball.vx += pushDir * 80;
      ball.vy = -Math.abs(ball.vy) * 0.3 - 60;
      ball.lastTouchBy = player.id;
      ball.lastTouchTeam = player.team;
    }
  }
}

export function performDefence(player: HBPlayerState, ball: HBBallState) {
  const dx = Math.abs(player.x - ball.x);
  const dy = Math.abs((player.y - 15) - ball.y);
  if (dx > HB_PLAYER.BODY_WIDTH + ball.radius || dy > 40) return;
  ball.vx *= 0.1;
  ball.vy = -50;
  ball.skyLobActive = false;
  ball.x = player.x + (player.facingRight ? 15 : -15);
  ball.y = player.y - 22;
  ball.lastTouchBy = player.id;
  ball.lastTouchTeam = player.team;
}

export function performKick(player: HBPlayerState, ball: HBBallState, input: HBInput) {
  if (player.isKicking) return;

  const dx = player.x - ball.x;
  const dy = (player.y - 10) - ball.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist > HB_PLAYER.KICK_RANGE + ball.radius + 5) return;

  player.isKicking = true;
  player.kickTimer = HB_PLAYER.KICK_DURATION;

  const dir = player.facingRight ? 1 : -1;

  if (input.skyLob) {
    ball.vy = HB_PLAYER.JUMP_VELOCITY;
    ball.vx = dir * HB_PLAYER.LOW_KICK_SPEED * 0.6;
    ball.skyLobActive = true;
  } else if (ball.skyLobActive && ball.lastTouchBy === player.id) {
    ball.vx = dir * 500;
    ball.vy = -180;
    ball.skyLobActive = false;
  } else if (input.kickHold) {
    ball.vx = dir * HB_PLAYER.HIGH_KICK_SPEED;
    ball.vy = HB_PLAYER.HIGH_KICK_Y;
  } else {
    ball.vx = dir * HB_PLAYER.LOW_KICK_SPEED;
    ball.vy = -80;
  }

  ball.lastTouchBy = player.id;
  ball.lastTouchTeam = player.team;
  ball.x = player.x + dir * (HB_PLAYER.KICK_RANGE * 0.5);
  ball.y = player.y - 8;
}

export function performSuperKick(player: HBPlayerState, ball: HBBallState) {
  if (player.isGrounded) return;
  const dir = player.facingRight ? 1 : -1;
  ball.vx = dir * HB_PLAYER.LOW_KICK_SPEED * 1.3;
  ball.vy = -400;
  ball.skyLobActive = false;
  ball.lastTouchBy = player.id;
  ball.lastTouchTeam = player.team;
  ball.x = player.x + dir * (HB_PLAYER.KICK_RANGE * 0.7);
  ball.y = player.y - player.headSize - 10;
  player.isKicking = true;
  player.kickTimer = HB_PLAYER.KICK_DURATION;
}
