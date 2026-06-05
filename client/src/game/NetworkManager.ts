import { io, Socket } from 'socket.io-client';
import {
  MatchState, Team, PlayerState, BallState, TeamMode,
  PlayerInput, ServerEvent, ClientEvent, MatchInfo, MatchConfig, RoomInfo
} from '../../../shared/index.js';

export class NetworkManager {
  public socket: Socket | null = null;
  public socketId: string = '';
  public playerName: string = '';

  public onMatchFound: ((data: any) => void) | null = null;
  public onStateUpdate: ((data: any) => void) | null = null;
  public onGoalScored: ((data: any) => void) | null = null;
  public onMatchEnd: ((data: any) => void) | null = null;
  public onCountdown: ((data: any) => void) | null = null;
  public onPlayerJoined: ((data: any) => void) | null = null;
  public onPlayerLeft: ((data: any) => void) | null = null;
  public onError: ((data: any) => void) | null = null;
  public onChatMessage: ((data: any) => void) | null = null;
  public onConnected: (() => void) | null = null;
  public onDisconnected: (() => void) | null = null;
  public onQueueUpdate: ((count: number) => void) | null = null;

  // Room callbacks
  public onRoomCreated: ((data: RoomInfo) => void) | null = null;
  public onRoomJoined: ((data: RoomInfo) => void) | null = null;
  public onRoomPlayerJoined: ((data: { id: string; name: string }) => void) | null = null;
  public onRoomPlayerLeft: ((data: { id: string; name: string }) => void) | null = null;
  public onRoomGameStart: ((data: { matchId: string }) => void) | null = null;
  public onRoomError: ((data: { message: string }) => void) | null = null;

  // Switch player callback
  public onSwitchConfirmed: ((data: { playerId: string }) => void) | null = null;

  // Practice mode callbacks
  public onTeamModeUpdate: ((data: { team: Team; mode: TeamMode }) => void) | null = null;

  // Scorer ID for celebrations
  public lastScorerId: string | null = null;

  connect(playerName: string) {
    this.playerName = playerName;
    const serverUrl = import.meta.env.VITE_SERVER_URL || undefined;
    this.socket = io(serverUrl, {
      transports: ['websocket', 'polling'],
    });

    this.socket.on('connect', () => {
      console.log('[Network] Connected:', this.socket?.id);
      this.socketId = this.socket?.id || '';
      this.onConnected?.();
    });

    this.socket.on('disconnect', () => {
      console.log('[Network] Disconnected');
      this.onDisconnected?.();
    });

    this.socket.on(ServerEvent.MatchFound, (data) => {
      console.log('[Network] Match found:', data.matchId);
      this.onMatchFound?.(data);
    });

    this.socket.on(ServerEvent.MatchStateUpdate, (data) => {
      this.onStateUpdate?.(data);
    });

    this.socket.on(ServerEvent.GoalScored, (data) => {
      console.log('[Network] Goal!', data);
      this.lastScorerId = data.scorer || null;
      this.onGoalScored?.(data);
    });

    this.socket.on(ServerEvent.MatchEnd, (data) => {
      console.log('[Network] Match ended:', data);
      this.onMatchEnd?.(data);
    });

    this.socket.on(ServerEvent.MatchCountdown, (data) => {
      this.onCountdown?.(data);
    });

    this.socket.on(ServerEvent.PlayerJoined, (data) => {
      this.onPlayerJoined?.(data);
    });

    this.socket.on(ServerEvent.PlayerLeft, (data) => {
      this.onPlayerLeft?.(data);
    });

    this.socket.on(ServerEvent.ChatMessage, (data) => {
      this.onChatMessage?.(data);
    });

    this.socket.on(ServerEvent.Error, (data) => {
      console.error('[Network] Error:', data);
      this.onError?.(data);
    });

    this.socket.on('queue_size' as any, (count: number) => {
      this.onQueueUpdate?.(count);
    });

    // Room event listeners
    this.socket.on(ServerEvent.RoomCreated, (data: RoomInfo) => {
      console.log('[Network] Room created:', data.code);
      this.onRoomCreated?.(data);
    });

    this.socket.on(ServerEvent.RoomJoined, (data: RoomInfo) => {
      console.log('[Network] Room joined:', data.code);
      this.onRoomJoined?.(data);
    });

    this.socket.on(ServerEvent.RoomPlayerJoined, (data: { id: string; name: string }) => {
      console.log('[Network] Room player joined:', data.name);
      this.onRoomPlayerJoined?.(data);
    });

    this.socket.on(ServerEvent.RoomPlayerLeft, (data: { id: string; name: string }) => {
      console.log('[Network] Room player left:', data.name);
      this.onRoomPlayerLeft?.(data);
    });

    this.socket.on(ServerEvent.RoomGameStart, (data: { matchId: string }) => {
      console.log('[Network] Room game starting:', data.matchId);
      this.onRoomGameStart?.(data);
    });

    this.socket.on(ServerEvent.RoomError, (data: { message: string }) => {
      console.error('[Network] Room error:', data.message);
      this.onRoomError?.(data);
    });

    // Switch player confirmation
    this.socket.on('switch_player_response' as any, (data: { playerId: string; success: boolean }) => {
      if (data.success) {
        console.log('[Network] Switch confirmed to player:', data.playerId);
        this.onSwitchConfirmed?.(data);
      }
    });

    // Practice mode events
    this.socket.on(ServerEvent.TeamModeUpdate, (data: { team: Team; mode: TeamMode }) => {
      console.log('[Network] Team mode update:', data.team, data.mode);
      this.onTeamModeUpdate?.(data);
    });
  }

  getPing(): number {
    return (this.socket as any)?.ping ?? 0;
  }

  sendInput(input: PlayerInput) {
    this.socket?.emit(ClientEvent.PlayerInput, input);
  }

  sendChatMessage(msg: string) {
    this.socket?.emit(ClientEvent.ChatMessage, msg);
  }

  leaveQueue() {
    this.socket?.emit(ClientEvent.LeaveQueue);
  }

  requestMatchInfo() {
    this.socket?.emit(ClientEvent.RequestMatchInfo);
  }

  // Room methods
  createRoom() {
    this.socket?.emit(ClientEvent.CreateRoom, { name: this.playerName });
  }

  joinRoom(code: string) {
    this.socket?.emit(ClientEvent.JoinRoom, { code: code.toUpperCase(), name: this.playerName });
  }

  leaveRoom() {
    this.socket?.emit(ClientEvent.LeaveRoom);
  }

  startRoomGame() {
    this.socket?.emit(ClientEvent.StartRoomGame);
  }

  switchPlayer(newPlayerId: string) {
    this.socket?.emit(ClientEvent.SwitchPlayer, { playerId: newPlayerId });
  }

  // Practice mode methods
  startPractice(team: 'blue' | 'red') {
    this.socket?.emit(ClientEvent.StartPractice, { team, name: this.playerName });
  }

  sendTeamMode(mode: TeamMode) {
    this.socket?.emit(ClientEvent.SetTeamMode, { mode });
  }

  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
  }
}
