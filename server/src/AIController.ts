import { PlayerState, PlayerInput, MatchState, Team, FIELD, PLAYER_PHYSICS, TeamMode } from '../../shared/index.js';

interface MatchLike {
  state: MatchState;
  ball: { position: { x: number; y: number; z: number }; velocity: { x: number; y: number; z: number }; lastTouchTeam: Team | null };
  players: Map<string, PlayerState>;
}

export class AIController {
  static getAIInput(player: PlayerState, match: MatchLike, teamMode: TeamMode = 'normal'): PlayerInput {
    const ball = match.ball;
    const myPos = player.physics.position;
    const isBlue = player.team === Team.Blue;

    const target = AIController.getAITarget(player, match, teamMode);
    const distToTarget = AIController.distance(myPos, target);

    const isGoalkeeper = player.position === 'GK';

    let steer = 0;
    let throttle = 0;
    let sprint = false;
    let kick = false;
    let pass = false;
    let throughPass = false;
    let tackle = false;
    let kickDir: { x: number; z: number } | undefined;

    if (isGoalkeeper) {
      const goalX = isBlue ? -FIELD.LENGTH / 2 + 2 : FIELD.LENGTH / 2 - 2;
      const targetZ = Math.max(-FIELD.GOAL_WIDTH / 2 + 0.5, Math.min(FIELD.GOAL_WIDTH / 2 - 0.5, ball.position.z));

      const diffZ = targetZ - myPos.z;
      steer = Math.max(-1, Math.min(1, diffZ * 0.2));
      throttle = Math.abs(myPos.x - goalX) > 1 ? Math.sign(goalX - myPos.x) * 0.5 : 0;

      const distToBall = AIController.distance(myPos, ball.position);
      if (distToBall < 3 && Math.abs(ball.position.x - goalX) < 12) {
        throttle = Math.sign(ball.position.x - myPos.x) * 0.8;
        sprint = true;
        if (distToBall < 1) {
          kick = true;
        }
      }
    } else if (player.hasBall) {
      const oppGoalX = isBlue ? FIELD.LENGTH / 2 : -FIELD.LENGTH / 2;
      const angleToGoal = Math.atan2(0 - myPos.z, oppGoalX - myPos.x);
      let facingAngle = player.physics.rotation.y;
      if (isBlue) facingAngle = -facingAngle;
      let angleDiff = angleToGoal - facingAngle;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

      steer = Math.max(-1, Math.min(1, angleDiff * 2));

      const distToGoal = Math.abs(isBlue ? FIELD.LENGTH / 2 - myPos.x : myPos.x + FIELD.LENGTH / 2);
      const canShoot = distToGoal < 25 && Math.abs(angleDiff) < 0.5;

      if (canShoot && Math.random() < 0.6) {
        kick = true;
        throttle = 1;
        sprint = true;
      } else {
        const nearestTeammate = AIController.findTeammate(player, match);
        if (nearestTeammate && Math.random() < 0.3) {
          const tdx = nearestTeammate.physics.position.x - myPos.x;
          const tdz = nearestTeammate.physics.position.z - myPos.z;
          const tdist = Math.sqrt(tdx * tdx + tdz * tdz);
          if (tdist > 3) {
            pass = true;
            kickDir = { x: tdx / tdist, z: tdz / tdist };
          }
        }
        if (!pass) {
          throttle = 1;
          sprint = distToGoal > 15;
        }
      }
    } else {
      const angleToTarget = Math.atan2(target.z - myPos.z, target.x - myPos.x);
      let facingAngle = player.physics.rotation.y;
      if (isBlue) facingAngle = -facingAngle;
      let angleDiff = angleToTarget - facingAngle;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

      steer = Math.max(-1, Math.min(1, angleDiff * 2));

      if (teamMode === 'attack') {
        throttle = 1;
        sprint = true;
      } else if (teamMode === 'defence') {
        throttle = 0.7;
        sprint = distToTarget < 8;
      } else {
        throttle = 0.8;
        sprint = distToTarget > 5 && Math.abs(angleDiff) < 0.5;
      }

      const distToBall = AIController.distance(myPos, ball.position);
      if (distToBall < PLAYER_PHYSICS.TACKLE_RANGE && ball.lastTouchTeam !== player.team) {
        tackle = true;
        throttle = 1;
      }
    }

    if (Math.random() < 0.002) {
      sprint = !sprint;
    }

    return {
      steer,
      throttle,
      sprint,
      kick,
      pass: pass || undefined,
      throughPass: throughPass || undefined,
      tackle: tackle || undefined,
      kickDirection: kickDir,
      camera: { yaw: 0, pitch: 0 },
      sequence: Date.now(),
    };
  }

  private static findTeammate(player: PlayerState, match: MatchLike): PlayerState | null {
    let nearest: PlayerState | null = null;
    let nearestDist = Infinity;
    for (const [, p] of match.players) {
      if (p.id === player.id || p.team !== player.team) continue;
      const dx = p.physics.position.x - player.physics.position.x;
      const dz = p.physics.position.z - player.physics.position.z;
      const dist = dx * dx + dz * dz;
      if (dist < nearestDist && dist > 0) {
        nearestDist = dist;
        nearest = p;
      }
    }
    return nearest;
  }

  private static getAITarget(player: PlayerState, match: MatchLike, teamMode: TeamMode): { x: number; y: number; z: number } {
    const ball = match.ball;
    const myPos = player.physics.position;
    const isBlue = player.team === Team.Blue;

    if (player.position === 'GK') {
      const goalX = isBlue ? -FIELD.LENGTH / 2 + 3 : FIELD.LENGTH / 2 - 3;
      return {
        x: goalX,
        y: 0,
        z: Math.max(-FIELD.GOAL_WIDTH / 2, Math.min(FIELD.GOAL_WIDTH / 2, ball.position.z * 0.5)),
      };
    }

    if (teamMode === 'attack') {
      const oppGoalX = isBlue ? FIELD.LENGTH / 2 - 5 : -FIELD.LENGTH / 2 + 5;
      if (player.position === 'FW') {
        return {
          x: Math.max(-FIELD.LENGTH / 2 + 2, Math.min(FIELD.LENGTH / 2 - 2, ball.position.x * 0.4 + oppGoalX * 0.6)),
          y: 0,
          z: ball.position.z,
        };
      } else if (player.position === 'MF') {
        return {
          x: Math.max(-FIELD.LENGTH / 2 + 5, Math.min(FIELD.LENGTH / 2 - 5, ball.position.x + 5 * (isBlue ? 1 : -1))),
          y: 0,
          z: ball.position.z * 0.8,
        };
      } else {
        return {
          x: Math.max(-FIELD.LENGTH / 2 + 3, Math.min(FIELD.LENGTH / 2 - 3, ball.position.x * 0.6)),
          y: 0,
          z: ball.position.z * 0.5,
        };
      }
    }

    if (teamMode === 'defence') {
      const ownGoalX = isBlue ? -FIELD.LENGTH / 2 + 8 : FIELD.LENGTH / 2 - 8;
      if (player.position === 'DF') {
        return {
          x: Math.max(-FIELD.LENGTH / 2 + 3, Math.min(FIELD.LENGTH / 2 - 3, (ball.position.x + ownGoalX) / 2)),
          y: 0,
          z: ball.position.z * 0.5,
        };
      } else {
        return {
          x: Math.max(-FIELD.LENGTH / 2 + 3, Math.min(FIELD.LENGTH / 2 - 3, ball.position.x * 0.3 + ownGoalX * 0.7)),
          y: 0,
          z: ball.position.z * 0.6,
        };
      }
    }

    if (player.position === 'DF') {
      return {
        x: Math.max(-FIELD.LENGTH / 2 + 3, Math.min(FIELD.LENGTH / 2 - 3, ball.position.x * 0.5)),
        y: 0,
        z: ball.position.z * 0.4,
      };
    } else if (player.position === 'MF') {
      return {
        x: Math.max(-FIELD.LENGTH / 2 + 2, Math.min(FIELD.LENGTH / 2 - 2, ball.position.x)),
        y: 0,
        z: ball.position.z,
      };
    } else {
      const goalX = isBlue ? FIELD.LENGTH / 2 - 5 : -FIELD.LENGTH / 2 + 5;
      return {
        x: Math.max(-FIELD.LENGTH / 2 + 2, Math.min(FIELD.LENGTH / 2 - 2, ball.position.x * 0.6 + goalX * 0.4)),
        y: 0,
        z: ball.position.z,
      };
    }
  }

  private static distance(a: { x: number; y: number; z: number }, b: { x: number; y: number; z: number }): number {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);
  }
}
