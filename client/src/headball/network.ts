import { io, Socket } from 'socket.io-client';
import { HBInput, HBPlayerState, HBBallState } from '../../../shared/headball.js';

export interface HBOnlineMatchData {
  matchId: string;
  homePlayer: HBPlayerState;
  awayPlayer: HBPlayerState;
  ball: HBBallState;
}

export interface HBOnlineStateData {
  homePlayer: HBPlayerState;
  awayPlayer: HBPlayerState;
  ball: HBBallState;
  homeScore: number;
  awayScore: number;
  elapsedSeconds: number;
  state: string;
  countdownTimer: number;
}

const NAMES = ['Fox','Wolf','Bear','Hawk','Lynx','Owl','Puma','Cobra','Elk','Viper'];
function randName() { return NAMES[Math.floor(Math.random() * NAMES.length)] + (Math.floor(Math.random() * 99) + 1); }

export class HBHeadBallNetwork {
  private socket: Socket;
  private _connected = false;
  public playerName: string;

  onConnected?: () => void;
  onDisconnected?: () => void;
  onError?: (msg: string) => void;

  onRoomCreated?: (code: string) => void;
  onRoomJoined?: (hostName: string) => void;
  onPlayerJoined?: (name: string) => void;

  onMatchStart?: (data: HBOnlineMatchData) => void;
  onStateUpdate?: (data: HBOnlineStateData) => void;
  onCountdown?: (time: number) => void;
  onGoal?: (data: { team: string; homeScore: number; awayScore: number }) => void;
  onMatchEnd?: (data: { homeScore: number; awayScore: number; winner: string | null }) => void;

  constructor() {
    this.playerName = randName();
    const serverUrl = import.meta.env.VITE_SERVER_URL || undefined;
    this.socket = io(serverUrl, { transports: ['websocket', 'polling'] });

    this.socket.on('connect', () => {
      this._connected = true;
      this.onConnected?.();
    });

    this.socket.on('disconnect', () => {
      this._connected = false;
      this.onDisconnected?.();
    });

    this.socket.on('connect_error', (err) => {
      this.onError?.(err.message);
    });

    this.socket.on('hb_room_created', (data: { code: string }) => {
      this.onRoomCreated?.(data.code);
    });

    this.socket.on('hb_room_joined', (data: { code: string; name: string }) => {
      this.onRoomJoined?.(data.name);
    });

    this.socket.on('hb_player_joined', (data: { id: string; name: string }) => {
      this.onPlayerJoined?.(data.name);
    });

    this.socket.on('hb_match_start', (data: HBOnlineMatchData) => {
      this.onMatchStart?.(data);
    });

    this.socket.on('hb_state', (data: HBOnlineStateData) => {
      this.onStateUpdate?.(data);
    });

    this.socket.on('hb_countdown', (data: { time: number }) => {
      this.onCountdown?.(data.time);
    });

    this.socket.on('hb_goal', (data: { team: string; homeScore: number; awayScore: number }) => {
      this.onGoal?.(data);
    });

    this.socket.on('hb_match_end', (data: { homeScore: number; awayScore: number; winner: string | null }) => {
      this.onMatchEnd?.(data);
    });
  }

  get connected() { return this._connected; }

  createRoom() { this.socket.emit('hb_create_room', { name: this.playerName }); }

  joinRoom(code: string) { this.socket.emit('hb_join_room', { code: code.toUpperCase(), name: this.playerName }); }

  leaveRoom() { this.socket.emit('hb_leave_room'); }

  sendReady() { this.socket.emit('hb_ready'); }

  sendInput(input: HBInput) { this.socket.emit('hb_input', input); }

  disconnect() {
    this.socket.removeAllListeners();
    this.socket.disconnect();
  }
}
