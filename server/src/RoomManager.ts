import { Server as SocketIOServer, Socket } from 'socket.io';

interface RoomPlayer {
  id: string;
  name: string;
}

interface Room {
  code: string;
  players: RoomPlayer[];
  gameStarted: boolean;
}

export class RoomManager {
  private rooms: Map<string, Room> = new Map();
  private socketToRoom: Map<string, string> = new Map();
  private io: SocketIOServer;

  constructor(io: SocketIOServer) {
    this.io = io;
  }

  createRoom(socket: Socket, name: string): string {
    const code = this.generateCode();
    const room: Room = {
      code,
      players: [{ id: socket.id, name }],
      gameStarted: false,
    };
    this.rooms.set(code, room);
    this.socketToRoom.set(socket.id, code);
    socket.join(`room:${code}`);
    console.log(`[Room] ${name} (${socket.id}) created room ${code}`);
    return code;
  }

  joinRoom(socket: Socket, code: string, name: string): { success: boolean; error?: string; room?: { code: string; players: { id: string; name: string }[] } } {
    const codeUpper = code.toUpperCase();
    const room = this.rooms.get(codeUpper);
    if (!room) return { success: false, error: 'Room not found' };
    if (room.players.length >= 2) return { success: false, error: 'Room is full' };
    if (room.gameStarted) return { success: false, error: 'Game already started' };

    room.players.push({ id: socket.id, name });
    this.socketToRoom.set(socket.id, codeUpper);
    socket.join(`room:${codeUpper}`);

    console.log(`[Room] ${name} (${socket.id}) joined room ${codeUpper}`);

    this.io.to(`room:${codeUpper}`).emit('room_player_joined', {
      players: room.players.map(p => ({ id: p.id, name: p.name })),
    });

    return {
      success: true,
      room: {
        code: codeUpper,
        players: room.players.map(p => ({ id: p.id, name: p.name })),
      },
    };
  }

  leaveRoom(socket: Socket): void {
    const code = this.socketToRoom.get(socket.id);
    if (!code) return;
    const room = this.rooms.get(code);
    if (!room) {
      this.socketToRoom.delete(socket.id);
      return;
    }

    room.players = room.players.filter(p => p.id !== socket.id);
    this.socketToRoom.delete(socket.id);
    socket.leave(`room:${code}`);

    if (room.players.length === 0) {
      this.rooms.delete(code);
      console.log(`[Room] Room ${code} deleted (empty)`);
    } else {
      this.io.to(`room:${code}`).emit('room_player_left', {
        players: room.players.map(p => ({ id: p.id, name: p.name })),
      });
    }
  }

  handleStartGame(socket: Socket): boolean {
    const code = this.socketToRoom.get(socket.id);
    if (!code) return false;
    const room = this.rooms.get(code);
    if (!room) return false;
    if (room.players.length < 2) return false;
    if (room.players[0].id !== socket.id) {
      socket.emit('room_error', { message: 'Only the host can start the game' });
      return false;
    }

    room.gameStarted = true;
    this.io.to(`room:${code}`).emit('room_game_start', {
      players: room.players.map(p => ({ id: p.id, name: p.name })),
      hostId: room.players[0].id,
    });
    console.log(`[Room] Game started in room ${code}`);
    return true;
  }

  relayInput(socket: Socket, data: any): void {
    const code = this.socketToRoom.get(socket.id);
    if (!code) return;
    socket.to(`room:${code}`).emit('room_opponent_input', data);
  }

  relayGameState(socket: Socket, data: any): void {
    const code = this.socketToRoom.get(socket.id);
    if (!code) return;
    socket.to(`room:${code}`).emit('room_game_state', data);
  }

  removePlayer(socketId: string): void {
    const code = this.socketToRoom.get(socketId);
    if (!code) return;
    const room = this.rooms.get(code);
    if (!room) return;

    room.players = room.players.filter(p => p.id !== socketId);
    this.socketToRoom.delete(socketId);

    if (room.players.length === 0) {
      this.rooms.delete(code);
    } else {
      this.io.to(`room:${code}`).emit('room_player_left', {
        players: room.players.map(p => ({ id: p.id, name: p.name })),
      });
    }
  }

  private generateCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code: string;
    do {
      code = '';
      for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
    } while (this.rooms.has(code));
    return code;
  }
}
