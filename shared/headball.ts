export interface HBPlayerState {
  id: string;
  name: string;
  team: 'home' | 'away';
  x: number;
  y: number;
  vx: number;
  vy: number;
  isGrounded: boolean;
  facingRight: boolean;
  isJumping: boolean;
  isKicking: boolean;
  kickTimer: number;
  headSize: number;
  skinColor: string;
  hairColor: string;
  jerseyColor: string;
  animFrame: number;
}

export interface HBBallState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  lastTouchBy: string | null;
  lastTouchTeam: 'home' | 'away' | null;
}

export interface HBInput {
  left: boolean;
  right: boolean;
  jump: boolean;
  kick: boolean;
  kickHold: boolean;
  superKick: boolean;
  defence: boolean;
}

export interface HBMatchState {
  id: string;
  state: 'lobby' | 'countdown' | 'playing' | 'goal_scored' | 'ended';
  homePlayer: HBPlayerState;
  awayPlayer: HBPlayerState;
  ball: HBBallState;
  homeScore: number;
  awayScore: number;
  elapsedSeconds: number;
  countdownTimer: number;
  matchDuration: number;
}

export const HB_FIELD = {
  WIDTH: 800,
  HEIGHT: 400,
  GROUND_Y: 350,
  GOAL_WIDTH: 70,
  GOAL_HEIGHT: 100,
  GOAL_Y: 250,
  GOAL_DEPTH: 30,
  GOAL_POST_RADIUS: 4,
} as const;

export const HB_PLAYER = {
  HEAD_RADIUS: 22,
  BODY_WIDTH: 16,
  BODY_HEIGHT: 26,
  LEG_LENGTH: 18,
  ARM_LENGTH: 14,
  MOVE_SPEED: 170,
  JUMP_VELOCITY: -360,
  JUMP_HOLD_FORCE: -180,
  MAX_JUMP_HOLD_TIME: 0.15,
  KICK_RANGE: 32,
  KICK_DURATION: 0.25,
  LOW_KICK_SPEED: 320,
  HIGH_KICK_SPEED: 220,
  HIGH_KICK_Y: -180,
  HEAD_BOUNCE: 1.2,
} as const;

export const HB_BALL = {
  RADIUS: 7,
  GRAVITY: 350,
  BOUNCE: 0.6,
  GROUND_FRICTION: 0.88,
  AIR_RESISTANCE: 0.001,
  MAX_SPEED: 480,
} as const;

export const HB_MATCH = {
  DURATION: 90,
  COUNTDOWN_SECONDS: 3,
  GOAL_SCORED_PAUSE: 2,
  WIN_GOALS: 10,
} as const;
