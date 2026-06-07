import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import { ClientEvent, ServerEvent } from '../../shared/index.js';
import { MatchManager } from './MatchManager.js';
import { RoomManager } from './RoomManager.js';
import { HBHeadBallMatchManager } from './headball/MatchManager.js';
import { HBHeadBallRoomManager } from './headball/RoomManager.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST'],
  },
  pingInterval: 1000,
  pingTimeout: 2000,
});

// Health endpoint (before static files so it's not intercepted)
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', players: io.engine.clientsCount });
});

// Serve static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));
} else {
  app.use(express.static(path.join(__dirname, '..', '..')));
}

const matchManager = new MatchManager(io);
const roomManager = new RoomManager(io, matchManager);
const hbMatchManager = new HBHeadBallMatchManager(io);
const hbRoomManager = new HBHeadBallRoomManager(io, hbMatchManager);

io.on('connection', (socket) => {
  console.log(`[Server] Player connected: ${socket.id}`);

  let playerName = `Player_${socket.id.slice(0, 4)}`;

  // ─── 3D Game Matchmaking ───
  socket.on('join_queue', (data?: { name?: string }) => {
    if (data?.name) playerName = data.name;
    matchManager.addToQueue(socket, playerName);
  });

  socket.on('leave_queue', () => {
    matchManager.removeFromQueue(socket);
  });

  socket.on('player_input', (input) => {
    matchManager.handlePlayerInput(socket.id, input);
  });

  socket.on('ready', () => {
    // No ready state needed - match auto-starts
  });

  socket.on('request_match_info', () => {
    matchManager.sendMatchInfo(socket);
  });

  socket.on('chat_message', (msg: string) => {
    matchManager.handleChat(socket.id, msg);
  });

  socket.on('switch_player', (data: { playerId: string }) => {
    matchManager.switchPlayer(socket.id, data.playerId);
  });

  // ─── Room System ───
  socket.on(ClientEvent.CreateRoom, (data: { name: string }) => {
    const result = roomManager.createRoom(socket, data.name || playerName);
    socket.emit(ServerEvent.RoomCreated, result);
  });

  socket.on(ClientEvent.JoinRoom, (data: { code: string; name: string }) => {
    const result = roomManager.joinRoom(socket, data.code, data.name || playerName);
    if (result.success) {
      socket.emit(ServerEvent.RoomJoined, result.room);
    } else {
      socket.emit(ServerEvent.RoomError, { message: result.error });
    }
  });

  socket.on(ClientEvent.LeaveRoom, () => {
    roomManager.leaveRoom(socket);
  });

  socket.on(ClientEvent.StartRoomGame, () => {
    roomManager.handleStartGame(socket);
  });

  // ─── Practice Mode ───
  socket.on(ClientEvent.StartPractice, (data: { team: 'blue' | 'red'; name?: string }) => {
    if (data?.name) playerName = data.name;
    matchManager.createPracticeMatch(socket, data.team || 'blue');
  });

  socket.on(ClientEvent.SetTeamMode, (data: { mode: string }) => {
    matchManager.handleTeamMode(socket.id, data.mode as any);
  });

  // ─── Head Ball ───
  socket.on('hb_create_room', (data: { name?: string }) => {
    hbRoomManager.createRoom(socket, data?.name || playerName);
  });

  socket.on('hb_join_room', (data: { code: string; name?: string }) => {
    hbRoomManager.joinRoom(socket, data.code, data?.name || playerName);
  });

  socket.on('hb_leave_room', () => {
    hbRoomManager.leaveRoom(socket);
  });

  socket.on('hb_ready', () => {
    hbRoomManager.handleReady(socket);
  });

  socket.on('hb_input', (input: any) => {
    hbMatchManager.handleInput(socket.id, input);
  });

  socket.on('disconnect', () => {
    console.log(`[Server] Player disconnected: ${socket.id}`);
    matchManager.removePlayer(socket.id);
    roomManager.removePlayer(socket.id);
    hbRoomManager.removePlayer(socket.id);
  });
});

// SPA fallback (MUST be last - catches all non-API routes)
if (process.env.NODE_ENV === 'production') {
  app.use((_req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
  });
}

server.listen(PORT, () => {
  console.log(`[Server] 6x6 3D Football Game server running on port ${PORT}`);
  console.log(`[Server] Waiting for players...`);
});
