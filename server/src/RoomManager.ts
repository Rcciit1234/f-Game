import { Server as SocketIOServer, Socket } from 'socket.io';
import { ServerEvent, RoomInfo } from '../../shared/index.js';
import { MatchManager } from './MatchManager.js';

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
  private matchManager: MatchManager;

  constructor(io: SocketIOServer, matchManager: MatchManager) {
    this.io = io;
    this.matchManager = matchManager;
  }

  createRoom(socket: Socket, name: string): RoomInfo {
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
    return {
      code,
      players: room.players.map(p => ({ id: p.id, name: p.name })),
      hostId: socket.id,
    };
  }

  joinRoom(socket: Socket, code: string, name: string): { success: boolean; error?: string; room?: { code: string; players: { id: string; name: string }[]; hostId: string } } {
    const codeUpper = code.toUpperCase();
    const room = this.rooms.get(codeUpper);
    if (!room) return { success: false, error: 'Room not found' };
    if (room.players.length >= 2) return { success: false, error: 'Room is full' };
    if (room.gameStarted) return { success: false, error: 'Game already started' };

    room.players.push({ id: socket.id, name });
    this.socketToRoom.set(socket.id, codeUpper);
    socket.join(`room:${codeUpper}`);

    console.log(`[Room] ${name} (${socket.id}) joined room ${codeUpper}`);

    this.io.to(`room:${codeUpper}`).emit(ServerEvent.RoomPlayerJoined, {
      id: socket.id,
      name,
    });

    return {
      success: true,
      room: {
        code: codeUpper,
        players: room.players.map(p => ({ id: p.id, name: p.name })),
        hostId: room.players[0].id,
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

    const player = room.players.find(p => p.id === socket.id);
    room.players = room.players.filter(p => p.id !== socket.id);
    this.socketToRoom.delete(socket.id);
    socket.leave(`room:${code}`);

    if (room.players.length === 0) {
      this.rooms.delete(code);
      console.log(`[Room] Room ${code} deleted (empty)`);
    } else {
      this.io.to(`room:${code}`).emit(ServerEvent.RoomPlayerLeft, {
        id: socket.id,
        name: player?.name || 'unknown',
      });
    }
  }

  handleStartGame(socket: Socket): boolean {
    const code = this.socketToRoom.get(socket.id);
    if (!code) return false;
    const room = this.rooms.get(code);
    if (!room) return false;
    if (room.players.length < 2) {
      socket.emit(ServerEvent.RoomError, { message: 'Need at least 2 players to start' });
      return false;
    }
    if (room.players[0].id !== socket.id) {
      socket.emit(ServerEvent.RoomError, { message: 'Only the host can start the game' });
      return false;
    }

    room.gameStarted = true;

    // Create a 6v6 match: host on Blue, guest on Red
    const hostId = room.players[0].id;
    const guestId = room.players[1].id;
    const hostName = room.players[0].name;
    const guestName = room.players[1].name;

    const sockets: Map<string, Socket> = new Map();
    const ns = this.io.sockets;
    ns.sockets.forEach((sock) => {
      if (sock.id === hostId) sockets.set(hostId, sock);
      if (sock.id === guestId) sockets.set(guestId, sock);
    });

    const matchId = this.matchManager.createMatchFromRoom(hostId, guestId, hostName, guestName);

    if (matchId) {
      sockets.forEach((sock) => {
        sock?.join(matchId);
      });
      this.matchManager.addPlayerToMatch(hostId, matchId);
      this.matchManager.addPlayerToMatch(guestId, matchId);

      console.log(`[Room] 3D Game started in room ${code}, match: ${matchId}`);

      this.io.to(`room:${code}`).emit(ServerEvent.RoomGameStart, {
        matchId,
        players: room.players.map(p => ({ id: p.id, name: p.name })),
        hostId: room.players[0].id,
      });

      // Clean up room after starting
      setTimeout(() => {
        this.rooms.delete(code);
        room.players.forEach(p => this.socketToRoom.delete(p.id));
      }, 5000);
    } else {
      socket.emit(ServerEvent.RoomError, { message: 'Failed to create match' });
    }
    return true;
  }

  removePlayer(socketId: string): void {
    const code = this.socketToRoom.get(socketId);
    if (!code) return;
    const room = this.rooms.get(code);
    if (!room) return;

    const player = room.players.find(p => p.id === socketId);
    room.players = room.players.filter(p => p.id !== socketId);
    this.socketToRoom.delete(socketId);

    if (room.players.length === 0) {
      this.rooms.delete(code);
    } else {
      this.io.to(`room:${code}`).emit(ServerEvent.RoomPlayerLeft, {
        id: socketId,
        name: player?.name || 'unknown',
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
