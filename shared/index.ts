export enum Team {
  Blue = 'blue',
  Red = 'red',
}

export enum FieldColor {
  Green = 'green',
  Clay = 'clay',
  Dark = 'dark',
}

export enum MatchState {
  Lobby = 'lobby',
  Kickoff = 'kickoff',
  Playing = 'playing',
  GoalScored = 'goal_scored',
  Halftime = 'halftime',
  Ended = 'ended',
}

export type TeamMode = 'attack' | 'defence' | 'normal';
export type Position = 'GK' | 'DF' | 'MF' | 'FW';

export interface PlayerPhysicsState {
  position: { x: number; y: number; z: number };
  velocity: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  angularVelocity: { x: number; y: number; z: number };
  sprint: boolean;
  stamina: number;
  isGrounded: boolean;
  animationState: AnimationState;
  animationTime: number;
}

export type AnimationState = 'idle' | 'walk' | 'run' | 'sprint' | 'dribble' | 'pass' | 'throughPass' | 'shoot' | 'tackle' | 'celebrate' | 'gkDive';

export interface PlayerState {
  id: string;
  name: string;
  team: Team;
  isAI: boolean;
  physics: PlayerPhysicsState;
  connected: boolean;
  jerseyNumber: number;
  position: Position;
  hasBall: boolean;
}

export interface BallState {
  position: { x: number; y: number; z: number };
  velocity: { x: number; y: number; z: number };
  spin: { x: number; y: number; z: number };
  lastTouchBy: string | null;
  lastTouchTeam: Team | null;
}

export interface PlayerInput {
  steer: number;
  throttle: number;
  sprint: boolean;
  kick: boolean;
  kickDirection?: { x: number; z: number };
  pass?: boolean;
  throughPass?: boolean;
  tackle?: boolean;
  switchPlayer?: boolean;
  camera: { yaw: number; pitch: number };
  sequence: number;
}

export interface MatchConfig {
  maxGoals: number | null;
  timeLimitSeconds: number | null;
  teams: number;
  playersPerTeam: number;
}

export interface MatchInfo {
  id: string;
  state: MatchState;
  config: MatchConfig;
  blueScore: number;
  redScore: number;
  elapsedSeconds: number;
  players: Map<string, PlayerState>;
  ball: BallState;
  kickoffTimer: number;
}

export enum ClientEvent {
  JoinQueue = 'join_queue',
  LeaveQueue = 'leave_queue',
  PlayerInput = 'player_input',
  Ready = 'ready',
  RequestMatchInfo = 'request_match_info',
  ChatMessage = 'chat_message',
  CreateRoom = 'create_room',
  JoinRoom = 'join_room',
  LeaveRoom = 'leave_room',
  StartRoomGame = 'start_room_game',
  SwitchPlayer = 'switch_player',
  StartPractice = 'start_practice',
  SetTeamMode = 'set_team_mode',
}

export enum ServerEvent {
  MatchFound = 'match_found',
  MatchStateUpdate = 'match_state_update',
  PlayerJoined = 'player_joined',
  PlayerLeft = 'player_left',
  GoalScored = 'goal_scored',
  MatchEnd = 'match_end',
  MatchCountdown = 'match_countdown',
  ChatMessage = 'chat_message',
  Error = 'error',
  RoomCreated = 'room_created',
  RoomJoined = 'room_joined',
  RoomPlayerJoined = 'room_player_joined',
  RoomPlayerLeft = 'room_player_left',
  RoomGameStart = 'room_game_start',
  RoomError = 'room_error',
  TeamModeUpdate = 'team_mode_update',
}

export interface RoomInfo {
  code: string;
  players: { id: string; name: string }[];
  hostId: string;
}

export interface ScoredData {
  team: Team;
  blueScore: number;
  redScore: number;
  scorer: string | null;
}

export const FIELD = {
  LENGTH: 100,
  WIDTH: 68,
  GOAL_WIDTH: 7.32,
  GOAL_HEIGHT: 2.44,
  GOAL_DEPTH: 2.5,
  CENTER_CIRCLE_RADIUS: 9.15,
  PENALTY_AREA_WIDTH: 40.3,
  PENALTY_AREA_LENGTH: 16.5,
} as const;

export const PLAYER_PHYSICS = {
  WALK_SPEED: 2.5,
  RUN_SPEED: 5,
  SPRINT_SPEED: 7.5,
  ACCELERATION: 12,
  SPRINT_ACCELERATION: 16,
  DECELERATION: 8,
  TURN_SPEED: 3.0,
  TURN_SPEED_SPRINT: 1.5,
  STAMINA_MAX: 100,
  STAMINA_DRAIN: 10,
  STAMINA_REGEN: 5,
  STAMINA_MIN_TO_SPRINT: 5,
  GK_SPRINT_SPEED: 6,
  TACKLE_RANGE: 2.0,
  TACKLE_DURATION: 0.5,
  DRIBBLE_DISTANCE: 0.7,
  KICK_RANGE: 2.0,
  PASS_SPEED: 14,
  THROUGH_PASS_SPEED: 18,
  SHOT_MIN_SPEED: 15,
  SHOT_MAX_SPEED: 35,
  SHOT_CHARGE_TIME: 0.8,
} as const;

export const BALL = {
  RADIUS: 0.22,
  MASS: 0.43,
  BOUNCE: 0.6,
  FRICTION: 0.35,
  SPIN_FACTOR: 0.02,
  AIR_RESISTANCE: 0.02,
  GROUND_ROLLING_FRICTION: 0.85,
} as const;
