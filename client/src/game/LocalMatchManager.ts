import {
  PlayerState, PlayerInput, BallState, MatchState, MatchConfig,
  Team, TeamMode, AnimationState, Position, PlayerPhysicsState,
  FIELD, PLAYER_PHYSICS, BALL,
} from '../../../shared/index.js';

interface LocalMatch {
  id: string;
  state: MatchState;
  config: MatchConfig;
  players: Map<string, PlayerState>;
  ball: BallState;
  blueScore: number;
  redScore: number;
  elapsedSeconds: number;
  kickoffTimer: number;
  lastInputs: Map<string, PlayerInput>;
  lastUpdateTime: number;
  goalScoredTimer: number;
  ended: boolean;
  teamMode: { blue: TeamMode; red: TeamMode };
}

export interface LocalMatchCallbacks {
  onMatchFound: (data: { matchId: string; config: MatchConfig; teamMode: { blue: TeamMode; red: TeamMode }; playerId: string }) => void;
  onStateUpdate: (data: any) => void;
  onGoalScored: (data: { team: Team; blueScore: number; redScore: number; scorer: string | null }) => void;
  onMatchEnd: (data: { blueScore: number; redScore: number; winner: Team | null }) => void;
  onCountdown: (data: { time: number }) => void;
}

let matchCounter = 0;

export class LocalMatchManager {
  private match: LocalMatch | null = null;
  private tickInterval: number | null = null;
  private countdownInterval: number | null = null;
  private playerName: string;
  private humanPlayerId: string;
  private callbacks: LocalMatchCallbacks;

  constructor(playerName: string, callbacks: LocalMatchCallbacks) {
    this.playerName = playerName;
    this.humanPlayerId = `local_${Date.now()}`;
    this.callbacks = callbacks;
  }

  startPractice(team: 'blue' | 'red') {
    matchCounter++;
    const matchId = `local_practice_${matchCounter}`;
    const match: LocalMatch = {
      id: matchId,
      state: MatchState.Kickoff,
      config: {
        maxGoals: 5,
        timeLimitSeconds: 300,
        teams: 2,
        playersPerTeam: 6,
      },
      players: new Map(),
      ball: {
        position: { x: 0, y: BALL.RADIUS, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        spin: { x: 0, y: 0, z: 0 },
        lastTouchBy: null,
        lastTouchTeam: null,
      },
      blueScore: 0,
      redScore: 0,
      elapsedSeconds: 0,
      kickoffTimer: 3,
      lastInputs: new Map(),
      lastUpdateTime: Date.now(),
      goalScoredTimer: 0,
      ended: false,
      teamMode: { blue: 'normal', red: 'normal' },
    };

    const chosenTeam = team === 'blue' ? Team.Blue : Team.Red;
    const teamCounts = new Map<Team, number>();
    const humanTeamIndex = team === 'blue' ? 0 : 6;
    const positions: Position[] = ['GK', 'DF', 'DF', 'MF', 'MF', 'FW'];

    for (let i = 0; i < 12; i++) {
      let playerState: PlayerState;
      const isHumanSlot = i === humanTeamIndex;

      if (isHumanSlot) {
        const count = teamCounts.get(chosenTeam) || 0;
        teamCounts.set(chosenTeam, count + 1);
        const pos = this.getFormationPosition(chosenTeam, count);
        playerState = {
          id: this.humanPlayerId,
          name: this.playerName,
          team: chosenTeam,
          isAI: false,
          physics: {
            position: pos,
            velocity: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: chosenTeam === Team.Blue ? 0 : Math.PI, z: 0 },
            angularVelocity: { x: 0, y: 0, z: 0 },
            sprint: false,
            stamina: PLAYER_PHYSICS.STAMINA_MAX,
            isGrounded: true,
            animationState: 'idle',
            animationTime: 0,
          },
          connected: true,
          jerseyNumber: count + 1,
          position: positions[count] || 'MF',
          hasBall: false,
        };
      } else {
        const playerTeam: Team = i < 6 ? Team.Blue : Team.Red;
        const teamIndex = i < 6 ? i : i - 6;
        const aiId = `ai_${matchId}_${i}`;
        const aiName = `AI_${teamIndex + 1}`;
        const pos = this.getFormationPosition(playerTeam, teamIndex);
        playerState = {
          id: aiId,
          name: aiName,
          team: playerTeam,
          isAI: true,
          physics: {
            position: pos,
            velocity: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: playerTeam === Team.Blue ? 0 : Math.PI, z: 0 },
            angularVelocity: { x: 0, y: 0, z: 0 },
            sprint: false,
            stamina: PLAYER_PHYSICS.STAMINA_MAX,
            isGrounded: true,
            animationState: 'idle',
            animationTime: 0,
          },
          connected: false,
          jerseyNumber: teamIndex + 1,
          position: positions[teamIndex] || 'MF',
          hasBall: false,
        };
        teamCounts.set(playerTeam, (teamCounts.get(playerTeam) || 0) + 1);
      }

      match.players.set(playerState.id, playerState);
    }

    match.teamMode = {
      blue: chosenTeam === Team.Blue ? 'attack' : 'defence',
      red: chosenTeam === Team.Red ? 'attack' : 'defence',
    };

    this.resetPositions(match);
    this.match = match;

    this.callbacks.onMatchFound({
      matchId,
      config: match.config,
      teamMode: match.teamMode,
      playerId: this.humanPlayerId,
    });

    this.broadcastState(match);
    this.startKickoffCountdown(match);
    this.startTicks();
  }

  handleInput(input: PlayerInput) {
    if (!this.match) return;
    this.match.lastInputs.set(this.humanPlayerId, input);
  }

  sendTeamMode(mode: TeamMode) {
    if (!this.match) return;
    const player = this.match.players.get(this.humanPlayerId);
    if (!player) return;
    this.match.teamMode[player.team] = mode;
  }

  destroy() {
    if (this.tickInterval !== null) {
      clearInterval(this.tickInterval);
      this.tickInterval = null;
    }
    if (this.countdownInterval !== null) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
    this.match = null;
  }

  private startTicks() {
    this.tickInterval = window.setInterval(() => this.tick(), 1000 / 30);
  }

  private startKickoffCountdown(match: LocalMatch) {
    match.state = MatchState.Kickoff;
    match.kickoffTimer = 3;
    this.broadcastState(match);

    this.countdownInterval = window.setInterval(() => {
      if (!this.match) { this.clearCountdown(); return; }
      match.kickoffTimer--;
      this.callbacks.onCountdown({ time: match.kickoffTimer });

      if (match.kickoffTimer <= 0) {
        this.clearCountdown();
        match.state = MatchState.Playing;
        this.broadcastState(match);
      }
    }, 1000);
  }

  private clearCountdown() {
    if (this.countdownInterval !== null) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }

  private tick() {
    const match = this.match;
    if (!match) return;
    if (match.state !== MatchState.Playing && match.state !== MatchState.Kickoff) return;

    const now = Date.now();
    const dt = Math.min((now - match.lastUpdateTime) / 1000, 0.05);
    match.lastUpdateTime = now;

    if (match.state === MatchState.Playing) {
      match.elapsedSeconds += dt;

      if (match.config.timeLimitSeconds && match.elapsedSeconds >= match.config.timeLimitSeconds) {
        this.endMatch(match);
        return;
      }

      this.simulateAI(match, dt);
      this.simulatePlayers(match, dt);
    }

    this.simulateBall(match, dt);
    this.checkBallInteractions(match);
    this.broadcastState(match);
  }

  private simulateBall(match: LocalMatch, dt: number) {
    const ball = match.ball;
    ball.velocity.y -= 9.81 * dt;

    ball.position.x += ball.velocity.x * dt;
    ball.position.y += ball.velocity.y * dt;
    ball.position.z += ball.velocity.z * dt;

    const spinFactor = BALL.SPIN_FACTOR;
    ball.velocity.x += ball.spin.y * spinFactor * dt;
    ball.velocity.z -= ball.spin.x * spinFactor * dt;

    if (ball.position.y < BALL.RADIUS) {
      ball.position.y = BALL.RADIUS;
      ball.velocity.y *= -BALL.BOUNCE;
      ball.velocity.x *= (1 - BALL.GROUND_ROLLING_FRICTION * dt);
      ball.velocity.z *= (1 - BALL.GROUND_ROLLING_FRICTION * dt);
      ball.spin.x *= 0.9;
      ball.spin.y *= 0.9;
      ball.spin.z *= 0.9;
    }

    ball.velocity.x *= (1 - BALL.AIR_RESISTANCE * dt);
    ball.velocity.z *= (1 - BALL.AIR_RESISTANCE * dt);

    const halfLength = FIELD.LENGTH / 2;
    const halfWidth = FIELD.WIDTH / 2;

    const inGoalX = Math.abs(ball.position.x) > halfLength - FIELD.GOAL_DEPTH;
    const inGoalZ = Math.abs(ball.position.z) < FIELD.GOAL_WIDTH / 2;
    const inGoalY = ball.position.y < FIELD.GOAL_HEIGHT;

    if (inGoalX && inGoalZ && inGoalY) {
      const scoringTeam = ball.position.x > 0 ? Team.Red : Team.Blue;
      this.handleGoal(match, scoringTeam);
      return;
    }

    if (Math.abs(ball.position.x) > halfLength) {
      ball.position.x = Math.sign(ball.position.x) * halfLength;
      ball.velocity.x *= -BALL.BOUNCE;
    }
    if (Math.abs(ball.position.z) > halfWidth) {
      ball.position.z = Math.sign(ball.position.z) * halfWidth;
      ball.velocity.z *= -BALL.BOUNCE;
    }
  }

  private checkBallInteractions(match: LocalMatch) {
    const ball = match.ball;
    const ballPos = ball.position;

    for (const [, player] of match.players) {
      const pPos = player.physics.position;
      const dx = pPos.x - ballPos.x;
      const dz = pPos.z - ballPos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const minDist = PLAYER_PHYSICS.DRIBBLE_DISTANCE + BALL.RADIUS;

      if (dist < minDist && dist > 0.01) {
        const overlap = minDist - dist;
        const nx = dx / dist;
        const nz = dz / dist;

        if (player.hasBall) {
          ball.position.x = pPos.x - nx * minDist;
          ball.position.z = pPos.z - nz * minDist;
          const ballFollowSpeed = 0.3;
          ball.velocity.x += (ball.position.x - ballPos.x) * ballFollowSpeed;
          ball.velocity.z += (ball.position.z - ballPos.z) * ballFollowSpeed;
        } else {
          ball.position.x += nx * overlap;
          ball.position.z += nz * overlap;

          const pSpeed = Math.sqrt(
            player.physics.velocity.x ** 2 + player.physics.velocity.z ** 2,
          );
          const hitForce = Math.min(15, pSpeed * 0.4 + 2);
          ball.velocity.x += nx * hitForce;
          ball.velocity.z += nz * hitForce;
          if (ball.position.y < 0.5) {
            ball.velocity.y = Math.abs(player.physics.velocity.y) * 0.3 + 0.5;
          }

          ball.lastTouchBy = player.id;
          ball.lastTouchTeam = player.team;
        }
      }
    }
  }

  private handleGoal(match: LocalMatch, scoringTeam: Team) {
    if (scoringTeam === Team.Blue) match.blueScore++;
    else match.redScore++;

    match.state = MatchState.GoalScored;
    match.goalScoredTimer = 3;

    for (const [, player] of match.players) {
      player.hasBall = false;
    }

    this.callbacks.onGoalScored({
      team: scoringTeam,
      blueScore: match.blueScore,
      redScore: match.redScore,
      scorer: match.ball.lastTouchBy,
    });

    if (match.config.maxGoals && (match.blueScore >= match.config.maxGoals || match.redScore >= match.config.maxGoals)) {
      setTimeout(() => this.endMatch(match), 3000);
    } else {
      setTimeout(() => {
        if (!this.match) return;
        this.resetPositions(match);
        this.startKickoffCountdown(match);
      }, 3000);
    }

    this.broadcastState(match);
  }

  private endMatch(match: LocalMatch) {
    match.state = MatchState.Ended;
    match.ended = true;
    this.broadcastState(match);

    this.callbacks.onMatchEnd({
      blueScore: match.blueScore,
      redScore: match.redScore,
      winner: match.blueScore > match.redScore ? Team.Blue :
              match.redScore > match.blueScore ? Team.Red : null,
    });
  }

  private simulatePlayers(match: LocalMatch, dt: number) {
    match.players.forEach((player) => {
      const input = match.lastInputs.get(player.id);
      if (!input && !player.isAI) return;
      if (!input) return;

      const physics = player.physics;
      const isBlue = player.team === Team.Blue;
      const dir = isBlue ? 1 : -1;

      const isSprinting = input.sprint && physics.stamina > PLAYER_PHYSICS.STAMINA_MIN_TO_SPRINT;
      const maxSpeed = isSprinting ? PLAYER_PHYSICS.SPRINT_SPEED : PLAYER_PHYSICS.RUN_SPEED;
      const accel = isSprinting ? PLAYER_PHYSICS.SPRINT_ACCELERATION : PLAYER_PHYSICS.ACCELERATION;

      if (isSprinting) {
        physics.stamina = Math.max(0, physics.stamina - PLAYER_PHYSICS.STAMINA_DRAIN * dt);
      } else {
        physics.stamina = Math.min(PLAYER_PHYSICS.STAMINA_MAX, physics.stamina + PLAYER_PHYSICS.STAMINA_REGEN * dt);
      }

      const currentSpeed = Math.sqrt(physics.velocity.x ** 2 + physics.velocity.z ** 2);

      if (Math.abs(input.throttle) > 0.1) {
        const forwardX = Math.sin(physics.rotation.y) * dir;
        const forwardZ = Math.cos(physics.rotation.y) * dir;

        physics.velocity.x += forwardX * accel * input.throttle * dt;
        physics.velocity.z += forwardZ * accel * input.throttle * dt;
      }

      if (input.throttle < 0) {
        physics.velocity.x *= (1 - PLAYER_PHYSICS.DECELERATION * dt);
        physics.velocity.z *= (1 - PLAYER_PHYSICS.DECELERATION * dt);
      }

      if (Math.abs(input.steer) > 0.1 && currentSpeed > 0.3) {
        const turnSpeed = isSprinting ? PLAYER_PHYSICS.TURN_SPEED_SPRINT : PLAYER_PHYSICS.TURN_SPEED;
        physics.rotation.y += turnSpeed * input.steer * dt * dir;
      }

      const friction = isSprinting ? 0.5 : 1.5;
      physics.velocity.x *= (1 - friction * dt);
      physics.velocity.z *= (1 - friction * dt);

      if (currentSpeed > maxSpeed) {
        const scale = maxSpeed / currentSpeed;
        physics.velocity.x *= scale;
        physics.velocity.z *= scale;
      }

      physics.position.x += physics.velocity.x * dt;
      physics.position.z += physics.velocity.z * dt;

      // Check tackle
      if (input.tackle && player.hasBall) {
        this.performKick(player, input, match);
      }

      if (input.kick || input.pass || input.throughPass) {
        this.performKick(player, input, match);
      }

      // Ball carrier dribble
      if (player.hasBall) {
        this.dribbleBall(player, match, dt);
      }

      // Ball possession check
      this.checkPossession(player, match);

      // Update animation state
      const newAnim = this.getAnimationState(physics, input, currentSpeed);
      if (physics.animationState !== newAnim) {
        physics.animationState = newAnim;
        physics.animationTime = 0;
      }
      physics.animationTime += dt;

      // Clamp to field
      const halfLength = FIELD.LENGTH / 2 - 0.5;
      const halfWidth = FIELD.WIDTH / 2 - 0.5;
      if (Math.abs(physics.position.x) > halfLength) {
        physics.position.x = Math.sign(physics.position.x) * halfLength;
        physics.velocity.x *= -0.3;
      }
      if (Math.abs(physics.position.z) > halfWidth) {
        physics.position.z = Math.sign(physics.position.z) * halfWidth;
        physics.velocity.z *= -0.3;
      }
    });
  }

  private getAnimationState(physics: PlayerPhysicsState, input: PlayerInput, speed: number): AnimationState {
    if (input.tackle) return 'tackle';
    if (input.throughPass) return 'throughPass';
    if (input.pass) return 'pass';
    if (input.kick) return 'shoot';
    if (speed > PLAYER_PHYSICS.RUN_SPEED + 1) return 'sprint';
    if (speed > PLAYER_PHYSICS.WALK_SPEED + 1) return physics.animationState === 'dribble' ? 'dribble' : 'run';
    if (speed > 0.5) return 'walk';
    return 'idle';
  }

  private performKick(player: PlayerState, input: PlayerInput, match: LocalMatch) {
    const ball = match.ball;
    const pPos = player.physics.position;
    const dx = pPos.x - ball.position.x;
    const dz = pPos.z - ball.position.z;
    const dist = Math.sqrt(dx * dx + dz * dz);

    if (dist > PLAYER_PHYSICS.KICK_RANGE) return;

    let kickSpeed: number;
    let kickY: number;
    let forwardX: number;
    let forwardZ: number;

    if (input.kickDirection) {
      const kd = input.kickDirection;
      const kMag = Math.sqrt(kd.x * kd.x + kd.z * kd.z);
      if (kMag > 0.01) {
        forwardX = kd.x / kMag;
        forwardZ = kd.z / kMag;
      } else {
        forwardX = 0;
        forwardZ = 1;
      }
    } else {
      const dir = player.team === Team.Blue ? 1 : -1;
      forwardX = Math.sin(player.physics.rotation.y) * dir;
      forwardZ = Math.cos(player.physics.rotation.y) * dir;
    }

    if (input.throughPass) {
      kickSpeed = PLAYER_PHYSICS.THROUGH_PASS_SPEED;
      kickY = 2 + Math.random() * 0.5;
    } else if (input.pass) {
      kickSpeed = PLAYER_PHYSICS.PASS_SPEED;
      kickY = 0.5;
    } else if (input.kick) {
      const speed = Math.sqrt(
        player.physics.velocity.x ** 2 + player.physics.velocity.z ** 2,
      );
      const chargeRatio = Math.min(1, speed / PLAYER_PHYSICS.SPRINT_SPEED);
      kickSpeed = PLAYER_PHYSICS.SHOT_MIN_SPEED + (PLAYER_PHYSICS.SHOT_MAX_SPEED - PLAYER_PHYSICS.SHOT_MIN_SPEED) * chargeRatio;
      kickY = 1 + chargeRatio * 2;
    } else {
      kickSpeed = PLAYER_PHYSICS.PASS_SPEED;
      kickY = 0.5;
    }

    ball.velocity.x = forwardX * kickSpeed;
    ball.velocity.z = forwardZ * kickSpeed;
    ball.velocity.y = kickY;

    ball.spin.x = (Math.random() - 0.5) * kickSpeed * BALL.SPIN_FACTOR;
    ball.spin.y = (Math.random() - 0.5) * kickSpeed * BALL.SPIN_FACTOR;
    ball.spin.z = (Math.random() - 0.5) * kickSpeed * BALL.SPIN_FACTOR;

    ball.lastTouchBy = player.id;
    ball.lastTouchTeam = player.team;
    player.hasBall = false;

    const pushOut = 1.5;
    ball.position.x += forwardX * pushOut;
    ball.position.z += forwardZ * pushOut;
  }

  private dribbleBall(player: PlayerState, match: LocalMatch, dt: number) {
    const ball = match.ball;
    const speed = Math.sqrt(
      player.physics.velocity.x ** 2 + player.physics.velocity.z ** 2,
    );
    if (speed < 0.5) {
      ball.position.x = player.physics.position.x + PLAYER_PHYSICS.DRIBBLE_DISTANCE * 0.5;
      ball.position.z = player.physics.position.z;
      return;
    }

    const dir = player.team === Team.Blue ? 1 : -1;
    const forwardX = Math.sin(player.physics.rotation.y) * dir;
    const forwardZ = Math.cos(player.physics.rotation.y) * dir;

    const targetX = player.physics.position.x + forwardX * PLAYER_PHYSICS.DRIBBLE_DISTANCE;
    const targetZ = player.physics.position.z + forwardZ * PLAYER_PHYSICS.DRIBBLE_DISTANCE;

    const lerpSpeed = Math.min(1, 10 * dt);
    ball.position.x += (targetX - ball.position.x) * lerpSpeed;
    ball.position.z += (targetZ - ball.position.z) * lerpSpeed;
    ball.position.y = BALL.RADIUS;

    ball.velocity.x = forwardX * speed * 0.5;
    ball.velocity.z = forwardZ * speed * 0.5;
    ball.velocity.y = 0;
  }

  private checkPossession(player: PlayerState, match: LocalMatch) {
    const ball = match.ball;
    const pPos = player.physics.position;
    const dx = pPos.x - ball.position.x;
    const dz = pPos.z - ball.position.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    const takeDist = PLAYER_PHYSICS.DRIBBLE_DISTANCE + BALL.RADIUS;

    if (dist < takeDist && match.state === MatchState.Playing) {
      if (ball.lastTouchBy !== player.id || player.hasBall) {
        for (const [, other] of match.players) {
          if (other.id !== player.id) {
            other.hasBall = false;
          }
        }
        player.hasBall = true;
        ball.lastTouchBy = player.id;
        ball.lastTouchTeam = player.team;
      }
    }
  }

  private simulateAI(match: LocalMatch, dt: number) {
    match.players.forEach((player) => {
      if (!player.isAI) return;
      const inputs = this.getAIInput(player, match, match.teamMode[player.team]);
      match.lastInputs.set(player.id, inputs);
    });
  }

  private getAIInput(player: PlayerState, match: LocalMatch, teamMode: TeamMode = 'normal'): PlayerInput {
    const ball = match.ball;
    const myPos = player.physics.position;
    const isBlue = player.team === Team.Blue;

    const target = this.getAITarget(player, match, teamMode);
    const distToTarget = this.distance(myPos, target);

    const playerIndex = this.getPlayerIndex(player, match);
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

      const distToBall = this.distance(myPos, ball.position);
      if (distToBall < 3 && Math.abs(ball.position.x - goalX) < 12) {
        throttle = Math.sign(ball.position.x - myPos.x) * 0.8;
        sprint = true;
        if (distToBall < 1) {
          kick = true;
        }
      }
    } else if (player.hasBall) {
      const angleToGoal = Math.atan2(
        (isBlue ? FIELD.LENGTH / 2 : -FIELD.LENGTH / 2) - myPos.z,
        0 - myPos.x,
      );
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
        const nearestTeammate = this.findTeammate(player, match);
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

      const distToBall = this.distance(myPos, ball.position);
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

  private findTeammate(player: PlayerState, match: LocalMatch): PlayerState | null {
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

  private getAITarget(player: PlayerState, match: LocalMatch, teamMode: TeamMode): { x: number; y: number; z: number } {
    const ball = match.ball;
    const myPos = player.physics.position;
    const isBlue = player.team === Team.Blue;
    const playerIndex = this.getPlayerIndex(player, match);

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

  private getPlayerIndex(player: PlayerState, match: LocalMatch): number {
    let idx = 0;
    for (const [, p] of match.players) {
      if (p.team === player.team) {
        if (p.id === player.id) return idx;
        idx++;
      }
    }
    return 0;
  }

  private distance(a: { x: number; y: number; z: number }, b: { x: number; y: number; z: number }): number {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);
  }

  private getFormationPosition(team: Team, index: number): { x: number; y: number; z: number } {
    const isBlue = team === Team.Blue;
    const direction = isBlue ? 1 : -1;
    const fieldLengthHalf = FIELD.LENGTH / 2 - 5;

    const positions: [number, number][] = [
      [fieldLengthHalf * direction * -0.95, 0],
      [fieldLengthHalf * direction * -0.55, -12],
      [fieldLengthHalf * direction * -0.55, 12],
      [fieldLengthHalf * direction * -0.15, -8],
      [fieldLengthHalf * direction * -0.15, 8],
      [fieldLengthHalf * direction * 0.3, 0],
    ];

    const pos = positions[index] || positions[5];
    return { x: pos[0], y: 0.5, z: pos[1] };
  }

  private resetPositions(match: LocalMatch) {
    let blueIdx = 0;
    let redIdx = 0;

    match.players.forEach((player) => {
      if (player.team === Team.Blue) {
        const pos = this.getFormationPosition(Team.Blue, blueIdx);
        player.physics.position = { ...pos };
        player.physics.rotation = { x: 0, y: 0, z: 0 };
        player.physics.velocity = { x: 0, y: 0, z: 0 };
        player.physics.angularVelocity = { x: 0, y: 0, z: 0 };
        player.physics.stamina = PLAYER_PHYSICS.STAMINA_MAX;
        player.hasBall = false;
        blueIdx++;
      } else {
        const pos = this.getFormationPosition(Team.Red, redIdx);
        player.physics.position = { ...pos };
        player.physics.rotation = { x: 0, y: Math.PI, z: 0 };
        player.physics.velocity = { x: 0, y: 0, z: 0 };
        player.physics.angularVelocity = { x: 0, y: 0, z: 0 };
        player.physics.stamina = PLAYER_PHYSICS.STAMINA_MAX;
        player.hasBall = false;
        redIdx++;
      }
    });

    match.ball = {
      position: { x: 0, y: BALL.RADIUS, z: 0 },
      velocity: { x: 0, y: 0, z: 0 },
      spin: { x: 0, y: 0, z: 0 },
      lastTouchBy: null,
      lastTouchTeam: null,
    };
  }

  private broadcastState(match: LocalMatch) {
    const playersObj: Record<string, PlayerState> = {};
    match.players.forEach((p, id) => {
      playersObj[id] = p;
    });

    this.callbacks.onStateUpdate({
      id: match.id,
      state: match.state,
      players: playersObj,
      ball: match.ball,
      blueScore: match.blueScore,
      redScore: match.redScore,
      elapsedSeconds: match.elapsedSeconds,
      kickoffTimer: match.kickoffTimer,
    });
  }
}
