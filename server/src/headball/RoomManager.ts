import { Socket } from 'socket.io';
import { Server as SocketIOServer } from 'socket.io';
import { HBHeadBallMatchManager } from './MatchManager.js';

interface HBRoom {
  code: string;
  players: { socket: Socket; name: string; team: 'home' | 'away' | null; ready: boolean }[];
}

export class HBHeadBallRoomManager {
  private io: SocketIOServer;
  private matchManager: HBHeadBallMatchManager;
  private rooms: Map<string, HBRoom> = new Map();

  constructor(io: SocketIOServer, matchManager: HBHeadBallMatchManager) {
    this.io = io;
    this.matchManager = matchManager;
  }

  createRoom(socket: Socket, name: string): { code: string } {
    const code = this.generateCode();
    const room: HBRoom = {
      code,
      players: [{ socket, name, team: 'home', ready: false }],
    };
    this.rooms.set(code, room);
    socket.join(`hb_room:${code}`);
    socket.emit('hb_room_created', { code });

    const hostPlayer = room.players[0];
    this.matchManager.addPlayer(socket.id, socket, name, 'home');

    return { code };
  }

  joinRoom(socket: Socket, code: string, name: string): { success: boolean; error?: string } {
    const room = this.rooms.get(code.toUpperCase());
    if (!room) return { success: false, error: 'Room not found' };
    if (room.players.length >= 2) return { success: false, error: 'Room is full' };

    room.players.push({ socket, name, team: 'away', ready: false });
    socket.join(`hb_room:${code}`);
    socket.emit('hb_room_joined', { code, name: room.players[0].name });

    this.matchManager.addPlayer(socket.id, socket, name, 'away');

    this.io.to(`hb_room:${code}`).emit('hb_player_joined', { id: socket.id, name });

    return { success: true };
  }

  leaveRoom(socket: Socket) {
    for (const [, room] of this.rooms) {
      const idx = room.players.findIndex(p => p.socket.id === socket.id);
      if (idx !== -1) {
        room.players.splice(idx, 1);
        this.matchManager.removePlayer(socket.id);
        if (room.players.length === 0) {
          this.rooms.delete(room.code);
        }
        return;
      }
    }
  }

  handleReady(socket: Socket) {
    for (const [, room] of this.rooms) {
      const player = room.players.find(p => p.socket.id === socket.id);
      if (player) {
        player.ready = true;
        const allReady = room.players.length === 2 && room.players.every(p => p.ready);
        if (allReady) {
          this.matchManager.startMatch(room.players[0].socket.id, room.players[1].socket.id);
          this.rooms.delete(room.code);
        }
        return;
      }
    }
  }

  removePlayer(socketId: string) {
    for (const [code, room] of this.rooms) {
      const idx = room.players.findIndex(p => p.socket.id === socketId);
      if (idx !== -1) {
        room.players.splice(idx, 1);
        this.matchManager.removePlayer(socketId);
        if (room.players.length === 0) {
          this.rooms.delete(code);
        }
        return;
      }
    }
  }

  private generateCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code: string;
    do {
      code = '';
      for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
    } while (this.rooms.has(code));
    return code;
  }
}
