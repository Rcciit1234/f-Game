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
  const footX = player.x + (player.facingRight ? 8 : -8);
  const footY = player.y - 2;

  const dx = ball.x - footX;
  const dy = ball.y - footY;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const hitDist = ball.radius + 6;

  const headCenterX = player.x;
  const headCenterY = player.y - HB_PLAYER.BODY_HEIGHT - player.headSize;
  const hdx = ball.x - headCenterX;
  const hdy = ball.y - headCenterY;
  const headDist = Math.sqrt(hdx * hdx + hdy * hdy);
  const headHitDist = ball.radius + player.headSize;

  if (headDist < headHitDist) {
    const overlap = headHitDist - headDist;
    if (headDist > 0.001) {
      ball.x += (hdx / headDist) * overlap;
      ball.y += (hdy / headDist) * overlap;
    }
    const dir = ball.x > player.x ? 1 : -1;
    ball.vx = dir * 150;
    ball.vy = -200;
    ball.lastTouchBy = player.id;
    ball.lastTouchTeam = player.team;
    return;
  }

  if (dist < hitDist) {
    const overlap = hitDist - dist;
    if (dist > 0.001) {
      ball.x += (dx / dist) * overlap;
      ball.y += (dy / dist) * overlap;
    }

    if (player.isKicking) {
      const dir = player.facingRight ? 1 : -1;
      ball.vx = dir * HB_PLAYER.LOW_KICK_SPEED;
      ball.vy = -80;
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

export function performKick(player: HBPlayerState, ball: HBBallState, input: HBInput) {
  if (player.isKicking) return;

  const dx = player.x - ball.x;
  const dy = (player.y - 10) - ball.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist > HB_PLAYER.KICK_RANGE + ball.radius) return;

  player.isKicking = true;
  player.kickTimer = HB_PLAYER.KICK_DURATION;

  const dir = player.facingRight ? 1 : -1;

  if (input.kickHold) {
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
