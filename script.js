// ============================================================
// PRO 6x6 FOOTBALL - Online Multiplayer
// ============================================================

// ─── Network State ───
let socket = null;
let isHost = false;
let localTeam = 'player';
let playerName = 'Player';
let opponentName = 'Opponent';
let roomCode = '';
let isConnected = false;
let isInRoom = false;
let myPlayerId = '';
let opponentInput = { up: false, down: false, left: false, right: false, pass: false, shoot: false, tackle: false, switch: false };
let prevOpponentInput = { ...opponentInput };

// ─── DOM refs ───
const $ = id => document.getElementById(id);
const mainMenu = $('main-menu');
const roomScreen = $('room-screen');
const gameOverScreen = $('game-over-screen');
const waitingOverlay = $('waiting-overlay');

// ─── Socket.IO Connection ───
function connectSocket() {
  if (socket && socket.connected) return;
  // In dev (Vite on 5173), connect to server port; in production, same origin
  const serverUrl = location.port === '5173' ? `http://${location.hostname}:3001` : '';
  socket = io(serverUrl, { transports: ['websocket', 'polling'] });

  socket.on('connect', () => {
    console.log('[Socket] Connected:', socket.id);
    myPlayerId = socket.id;
    isConnected = true;
  });

  socket.on('disconnect', () => {
    console.log('[Socket] Disconnected');
    isConnected = false;
    isInRoom = false;
    showMainMenu();
  });

  // Room events
  socket.on('room_created', (data) => {
    roomCode = data.code;
    showRoom();
  });

  socket.on('room_joined', (data) => {
    roomCode = data.code;
    isHost = false;
    localTeam = 'opponent';
    showRoom();
  });

  socket.on('room_error', (data) => {
    alert(data.message || 'Room error');
    hideOverlay(waitingOverlay);
  });

  socket.on('room_player_joined', (data) => {
    updateRoomPlayers(data.players);
  });

  socket.on('room_player_left', (data) => {
    if (data.players.length < 2) {
      $('room-start-btn').disabled = true;
      $('room-hint').textContent = 'Waiting for opponent to reconnect...';
    }
    updateRoomPlayers(data.players);
  });

  socket.on('room_game_start', (data) => {
    isHost = data.hostId === myPlayerId;
    localTeam = isHost ? 'player' : 'opponent';
    if (data.players[0]) playerName = data.players[0].name;
    if (data.players[1]) opponentName = data.players[1].name;
    $('room-screen').classList.add('hidden');
    startOnlineMatch();
  });

  socket.on('room_opponent_input', (data) => {
    opponentInput = data;
  });

  socket.on('room_game_state', (data) => {
    applyRemoteState(data);
  });
}

// ─── Menu System ───
function showMainMenu() {
  hideOverlay(roomScreen);
  hideOverlay(gameOverScreen);
  showOverlay(mainMenu);
  updateNameInput();
}

function showOverlay(el) { if (el) el.classList.remove('hidden'); }
function hideOverlay(el) { if (el) el.classList.add('hidden'); }

// Tabs
document.querySelectorAll('.menu-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.menu-tab-content').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    const content = $(`tab-${target}`);
    if (content) content.classList.add('active');
  });
});

// ─── Google Sign-In ───
function handleGoogleCredential(response) {
  try {
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    playerName = payload.name || payload.email.split('@')[0];
    $('name-input').value = playerName;
    $('user-display-name').textContent = playerName;
    if (payload.picture) {
      $('user-avatar').src = payload.picture;
      $('user-avatar').classList.remove('hidden');
    }
    $('user-info').classList.remove('hidden');
    $('name-signin-btn').disabled = true;
    $('name-input').disabled = true;
    $('create-room-btn').disabled = false;
    $('join-room-btn').disabled = false;
    connectSocket();
  } catch (e) {
    console.error('[Google] Parse error:', e);
  }
}
window.handleGoogleCredential = handleGoogleCredential;

// ─── Name Input ───
const nameInput = $('name-input');
const nameBtn = $('name-signin-btn');

nameInput.addEventListener('input', () => {
  const val = nameInput.value.trim();
  nameBtn.disabled = val.length < 2;
  if (val.length >= 2) {
    $('create-room-btn').disabled = false;
    $('join-room-btn').disabled = false;
  } else {
    $('create-room-btn').disabled = true;
    $('join-room-btn').disabled = true;
  }
});

nameBtn.addEventListener('click', () => {
  const val = nameInput.value.trim();
  if (val.length < 2) return;
  playerName = val;
  $('user-display-name').textContent = playerName;
  $('user-info').classList.remove('hidden');
  $('user-avatar').classList.add('hidden');
  nameBtn.disabled = true;
  nameInput.disabled = true;
  $('create-room-btn').disabled = false;
  $('join-room-btn').disabled = false;
  connectSocket();
});

$('user-signout').addEventListener('click', () => {
  playerName = '';
  $('user-info').classList.add('hidden');
  nameInput.disabled = false;
  nameInput.value = '';
  nameBtn.disabled = true;
  $('create-room-btn').disabled = true;
  $('join-room-btn').disabled = true;
});

function updateNameInput() {
  if (playerName && playerName !== 'Player') {
    $('user-display-name').textContent = playerName;
    $('user-info').classList.remove('hidden');
    nameInput.value = playerName;
    nameInput.disabled = true;
    nameBtn.disabled = true;
    $('create-room-btn').disabled = false;
    $('join-room-btn').disabled = false;
  }
}

// ─── Room Actions ───
$('create-room-btn').addEventListener('click', () => {
  if (!isConnected) connectSocket();
  if (!playerName) { alert('Set your name first'); return; }
  isHost = true;
  localTeam = 'player';
  showOverlay(waitingOverlay);
  $('waiting-text').textContent = 'Creating room...';
  setTimeout(() => {
    socket.emit('room_create', { name: playerName });
    hideOverlay(waitingOverlay);
  }, 300);
});

$('join-room-btn').addEventListener('click', () => {
  const code = $('room-code-input').value.trim().toUpperCase();
  if (code.length < 3) { alert('Enter a valid room code'); return; }
  if (!isConnected) connectSocket();
  if (!playerName) { alert('Set your name first'); return; }
  isHost = false;
  localTeam = 'opponent';
  showOverlay(waitingOverlay);
  $('waiting-text').textContent = 'Joining room...';
  setTimeout(() => {
    socket.emit('room_join', { code, name: playerName });
    hideOverlay(waitingOverlay);
  }, 300);
});

$('room-leave-btn').addEventListener('click', () => {
  if (socket) socket.emit('room_leave');
  isInRoom = false;
  showMainMenu();
});

$('copy-code-btn').addEventListener('click', () => {
  navigator.clipboard.writeText(roomCode).catch(() => {});
  $('copy-code-btn').textContent = 'Copied!';
  setTimeout(() => { $('copy-code-btn').innerHTML = '<i class="fa-regular fa-copy"></i> Copy'; }, 2000);
});

$('room-start-btn').addEventListener('click', () => {
  if (socket && isHost) {
    socket.emit('room_start_game');
  }
});

$('return-menu-btn').addEventListener('click', () => {
  if (socket) socket.emit('room_leave');
  isInRoom = false;
  showMainMenu();
});

function showRoom() {
  hideOverlay(mainMenu);
  hideOverlay(waitingOverlay);
  showOverlay(roomScreen);
  isInRoom = true;
  $('room-code-display').textContent = roomCode;
  $('room-code-display').style.letterSpacing = '8px';

  if (isHost) {
    $('room-player-host').querySelector('.room-player-name').textContent = playerName || 'You';
    $('room-player-host').querySelector('.room-player-dot').className = 'room-player-dot host';
    $('room-player-guest').querySelector('.room-player-name').textContent = 'Waiting for opponent...';
    $('room-player-guest').querySelector('.room-player-dot').className = 'room-player-dot';
    $('room-start-btn').disabled = true;
    $('room-hint').textContent = 'Share the room code with your opponent';
  } else {
    $('room-player-host').querySelector('.room-player-name').textContent = 'Host';
    $('room-player-host').querySelector('.room-player-dot').className = 'room-player-dot host';
    $('room-player-guest').querySelector('.room-player-name').textContent = playerName || 'You';
    $('room-player-guest').querySelector('.room-player-dot').className = 'room-player-dot connected';
    $('room-start-btn').style.display = 'none';
    $('room-hint').textContent = 'Waiting for host to start the game...';
  }
}

function updateRoomPlayers(players) {
  if (!players || players.length === 0) return;
  const host = players[0];
  const guest = players[1];

  $('room-player-host').querySelector('.room-player-name').textContent = host.name;
  $('room-player-host').querySelector('.room-player-dot').className = 'room-player-dot host';

  if (guest) {
    $('room-player-guest').querySelector('.room-player-name').textContent = guest.name;
    $('room-player-guest').querySelector('.room-player-dot').className = 'room-player-dot connected';
    opponentName = guest.name;
    if (isHost) {
      $('room-start-btn').disabled = false;
      $('room-hint').textContent = 'Opponent joined! Start the game';
    }
  } else {
    $('room-player-guest').querySelector('.room-player-name').textContent = 'Waiting for opponent...';
    $('room-player-guest').querySelector('.room-player-dot').className = 'room-player-dot';
    if (isHost) {
      $('room-start-btn').disabled = true;
      $('room-hint').textContent = 'Share the room code with your opponent';
    }
  }
}

// ─── GAME ───
const canvas = $('gameCanvas');
const ctx = canvas.getContext('2d');

const WIDTH = 900;
const HEIGHT = 600;
const PITCH_PADDING = 50;
const GOAL_WIDTH = 120;
const PLAYER_RADIUS = 14;
const BALL_RADIUS = 8;
const FRICTION = 0.965;
const PLAYER_SPEED = 2.8;
const PLAYER_ACCEL = 0.3;
const BALL_BOUNCE = 0.5;

canvas.width = WIDTH;
canvas.height = HEIGHT;

const TEAM_COLORS = { player: '#2563eb', opponent: '#e11d48' };
const SHIRT_COLORS = { player: '#1d4ed8', opponent: '#be123c' };

let gameState = 'START';
let timer = 60;
let playerScore = 0, opponentScore = 0;
let matchTimerId = null;
let shakeTime = 0, shakeIntensity = 0;
let heldBy = null;
let particles = [];
let crowdBlue = [], crowdRed = [];
let goalScored = null;
let celebrationTimer = 0;
let p1Index = 0, p2Index = 0;
let scoreboardStyle = 'A';
let groundMode = 0;
let crowdGoalText = null;

// ─── Audio ───
let audioCtx = null, crowdGain = null, crowdSource = null;

function initAudio() {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const sr = audioCtx.sampleRate, len = sr * 4;
    const buf = audioCtx.createBuffer(1, len, sr);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      d[i] = (last + 0.015 * w) / 1.015;
      last = d[i]; d[i] *= 3.5;
    }
    crowdSource = audioCtx.createBufferSource();
    crowdSource.buffer = buf; crowdSource.loop = true;
    const bp = audioCtx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = 500; bp.Q.value = 0.4;
    crowdGain = audioCtx.createGain();
    crowdGain.gain.value = 0.035;
    crowdSource.connect(bp); bp.connect(crowdGain); crowdGain.connect(audioCtx.destination);
    crowdSource.start();
  } catch (e) {}
}

function playCheer() {
  if (!audioCtx || !crowdGain) return;
  crowdGain.gain.setValueAtTime(0.15, audioCtx.currentTime);
  crowdGain.gain.exponentialRampToValueAtTime(0.035, audioCtx.currentTime + 2.5);
  for (let i = 0; i < 3; i++) {
    try {
      const osc = audioCtx.createOscillator(), g = audioCtx.createGain();
      osc.type = 'sine'; osc.frequency.value = 500 + Math.random() * 500;
      g.gain.setValueAtTime(0.025, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5 + Math.random());
      osc.connect(g); g.connect(audioCtx.destination); osc.start(); osc.stop(audioCtx.currentTime + 2);
    } catch (e) {}
  }
}

function playKick() {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator(), g = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(120, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.08);
    g.gain.setValueAtTime(0.08, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    osc.connect(g); g.connect(audioCtx.destination); osc.start(); osc.stop(audioCtx.currentTime + 0.12);
  } catch (e) {}
}

function playWhistle() {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator(), g = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.setValueAtTime(950, audioCtx.currentTime + 0.12);
    osc.frequency.setValueAtTime(780, audioCtx.currentTime + 0.25);
    g.gain.setValueAtTime(0.12, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
    osc.connect(g); g.connect(audioCtx.destination); osc.start(); osc.stop(audioCtx.currentTime + 0.5);
  } catch (e) {}
}

// ─── Controls ───
const keys = {};
const keysJustPressed = {};

window.addEventListener('keydown', e => {
  if (!keys[e.code]) keysJustPressed[e.code] = true;
  keys[e.code] = true;
  if (!audioCtx) initAudio();
});

window.addEventListener('keyup', e => { keys[e.code] = false; });

function consumeJustPressed(code) {
  if (keysJustPressed[code]) { keysJustPressed[code] = false; return true; }
  return false;
}

function triggerShake(intensity = 8) { shakeTime = 10; shakeIntensity = intensity; }

// ─── Particles ───
function emitParticles(x, y, color, count = 12) {
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2, s = 1 + Math.random() * 4;
    particles.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, decay: 0.015 + Math.random() * 0.025, size: 2 + Math.random() * 4, color });
  }
}

// ─── Crowd ───
function generateCrowd() {
  crowdBlue = []; crowdRed = [];
  const blueShades = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#1d4ed8', '#1e40af'];
  const redShades = ['#e11d48', '#f43f5e', '#fb7185', '#fda4af', '#be123c', '#9f1239'];
  const rows = 3, spacing = 22, offY = 8;
  for (let row = 0; row < rows; row++) {
    const y = offY + row * 11;
    const y2 = HEIGHT - offY - row * 11;
    for (let x = 10; x < WIDTH / 2 - 10; x += spacing + Math.random() * 6) {
      crowdBlue.push({ x, y, phase: Math.random() * Math.PI * 2, speed: 0.3 + Math.random() * 0.5, color: blueShades[Math.floor(Math.random() * blueShades.length)], size: 3 + Math.random() * 3, bob: 0.5 + Math.random() * 1 });
      crowdBlue.push({ x, y: y2, phase: Math.random() * Math.PI * 2, speed: 0.3 + Math.random() * 0.5, color: blueShades[Math.floor(Math.random() * blueShades.length)], size: 3 + Math.random() * 3, bob: 0.5 + Math.random() * 1 });
    }
    for (let x = WIDTH / 2 + 10; x < WIDTH - 10; x += spacing + Math.random() * 6) {
      crowdRed.push({ x, y, phase: Math.random() * Math.PI * 2, speed: 0.3 + Math.random() * 0.5, color: redShades[Math.floor(Math.random() * redShades.length)], size: 3 + Math.random() * 3, bob: 0.5 + Math.random() * 1 });
      crowdRed.push({ x, y: y2, phase: Math.random() * Math.PI * 2, speed: 0.3 + Math.random() * 0.5, color: redShades[Math.floor(Math.random() * redShades.length)], size: 3 + Math.random() * 3, bob: 0.5 + Math.random() * 1 });
    }
  }
}

// ─── Ball ───
class Ball {
  constructor() { this.reset(); this.trail = []; }
  reset() { this.x = WIDTH / 2; this.y = HEIGHT / 2; this.vx = 0; this.vy = 0; this.lastKickedBy = null; this.angle = 0; this.trail = []; }
  update() {
    if (heldBy) {
      this.vx = 0; this.vy = 0;
      const off = PLAYER_RADIUS + 6;
      this.x = heldBy.x + Math.cos(heldBy.angle) * off;
      this.y = heldBy.y + Math.sin(heldBy.angle) * off;
      this.trail = []; return;
    }
    this.x += this.vx; this.y += this.vy;
    const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    this.angle += spd * 0.1;
    if (spd > 2 && this.trail.length < 20) this.trail.push({ x: this.x, y: this.y, life: 1 });
    this.trail = this.trail.filter(t => { t.life -= 0.05; return t.life > 0; });
    this.vx *= FRICTION; this.vy *= FRICTION;
    if (this.y - BALL_RADIUS < PITCH_PADDING || this.y + BALL_RADIUS > HEIGHT - PITCH_PADDING) {
      this.vy *= -BALL_BOUNCE;
      this.y = this.y < HEIGHT / 2 ? PITCH_PADDING + BALL_RADIUS : HEIGHT - PITCH_PADDING - BALL_RADIUS;
      emitParticles(this.x, this.y, '#ffffff', 6);
    }
    if (this.x - BALL_RADIUS < PITCH_PADDING || this.x + BALL_RADIUS > WIDTH - PITCH_PADDING) {
      const inGoal = this.y > HEIGHT / 2 - GOAL_WIDTH / 2 && this.y < HEIGHT / 2 + GOAL_WIDTH / 2;
      if (!inGoal) {
        this.vx *= -BALL_BOUNCE;
        this.x = this.x < WIDTH / 2 ? PITCH_PADDING + BALL_RADIUS : WIDTH - PITCH_PADDING - BALL_RADIUS;
        emitParticles(this.x, this.y, '#ffffff', 6);
      } else {
        if (this.x < PITCH_PADDING) scoreGoal('opponent');
        if (this.x > WIDTH - PITCH_PADDING) scoreGoal('player');
      }
    }
  }
  draw() {
    this.trail.forEach((t, i) => {
      ctx.globalAlpha = t.life * 0.25;
      ctx.beginPath(); ctx.arc(t.x, t.y, BALL_RADIUS * 0.8 * t.life, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill();
    });
    ctx.globalAlpha = 1;
    ctx.beginPath(); ctx.ellipse(this.x, this.y + 10, BALL_RADIUS, BALL_RADIUS * 0.5, 0, 0, Math.PI * 2); ctx.fillStyle = 'rgba(0,0,0,0.2)'; ctx.fill();
    ctx.save(); ctx.translate(this.x, this.y); ctx.rotate(this.angle);
    ctx.beginPath(); ctx.arc(0, 0, BALL_RADIUS, 0, Math.PI * 2);
    const g = ctx.createRadialGradient(-2, -2, 1, 0, 0, BALL_RADIUS);
    g.addColorStop(0, '#fff'); g.addColorStop(0.5, '#eee'); g.addColorStop(1, '#aaa');
    ctx.fillStyle = g; ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.1)'; ctx.lineWidth = 0.5; ctx.stroke();
    ctx.fillStyle = '#222';
    const r = BALL_RADIUS * 0.5;
    for (let i = 0; i < 5; i++) {
      ctx.save(); ctx.rotate((Math.PI * 2 / 5) * i); ctx.beginPath();
      for (let j = 0; j < 5; j++) {
        const px = r + Math.cos(j * Math.PI * 2 / 5) * 2.5, py = Math.sin(j * Math.PI * 2 / 5) * 2.5;
        j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath(); ctx.fill(); ctx.restore();
    }
    ctx.beginPath();
    for (let j = 0; j < 5; j++) {
      const px = Math.cos(j * Math.PI * 2 / 5) * 3, py = Math.sin(j * Math.PI * 2 / 5) * 3;
      j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath(); ctx.fill();
    ctx.restore();
  }
}

// ─── Player ───
class Player {
  constructor(x, y, team, role = 'field') {
    this.startX = x; this.startY = y;
    this.x = x; this.y = y;
    this.vx = 0; this.vy = 0;
    this.team = team; this.role = role;
    this.color = TEAM_COLORS[team]; this.shirtColor = SHIRT_COLORS[team];
    this.skinColor = '#ffdbac';
    this.isControlled = false;
    this.kickAnim = 0; this.moveAnim = 0;
    this.angle = team === 'player' ? 0 : Math.PI;
    this.holdTime = 0;
  }
  reset() {
    this.x = this.startX; this.y = this.startY;
    this.vx = 0; this.vy = 0;
    this.kickAnim = 0; this.moveAnim = 0; this.holdTime = 0;
  }
  update(ball) {
    this.handleInput(ball);
    const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (spd > 0.1) { this.angle = Math.atan2(this.vy, this.vx); this.moveAnim += spd * 0.12; }
    else if (this.moveAnim > 0.01) this.moveAnim *= 0.92;

    this.x += this.vx; this.y += this.vy;
    this.vx *= 0.88; this.vy *= 0.88;
    this.x = Math.max(PITCH_PADDING + PLAYER_RADIUS, Math.min(WIDTH - PITCH_PADDING - PLAYER_RADIUS, this.x));
    this.y = Math.max(PITCH_PADDING + PLAYER_RADIUS, Math.min(HEIGHT - PITCH_PADDING - PLAYER_RADIUS, this.y));

    const dx = ball.x - this.x, dy = ball.y - this.y, dist = Math.sqrt(dx * dx + dy * dy);

    if (heldBy === this) {
      this.holdTime += 0.016;
      if (this.isControlled) {
        if (keys['Space']) {
          this.releaseBall(ball, this.angle, 14);
        }
        if (this.holdTime > 1.5) {
          const gx = this.team === 'player' ? WIDTH - PITCH_PADDING : PITCH_PADDING;
          this.releaseBall(ball, Math.atan2(HEIGHT / 2 - this.y, gx - this.x), 8);
        }
      }
    } else if (!heldBy && dist < PLAYER_RADIUS + BALL_RADIUS + 4) {
      const bs = Math.sqrt(ball.vx ** 2 + ball.vy ** 2);
      if (this.role === 'gk' || bs < 4) {
        heldBy = this; this.holdTime = 0;
      }
    }
    if (this.kickAnim > 0) this.kickAnim -= 0.07;
  }

  releaseBall(ball, angle, power) {
    ball.vx = Math.cos(angle) * power; ball.vy = Math.sin(angle) * power;
    this.kickAnim = 1; heldBy = null; this.holdTime = 0;
    emitParticles(ball.x, ball.y, '#ffffff', 8); playKick();
    if (this.isControlled) triggerShake(6);
  }

  handleActions(ball) {
    if (heldBy === this) {
      if (consumeJustPressed(this.passKey())) {
        const mates = players.filter(p => p.team === this.team && p !== this);
        if (mates.length > 0) {
          let t = mates[0], md = Infinity;
          mates.forEach(m => { const d = Math.sqrt((m.x - this.x) ** 2 + (m.y - this.y) ** 2); if (d < md) { md = d; t = m; } });
          this.releaseBall(ball, Math.atan2(t.y - this.y, t.x - this.x), 11);
          emitParticles(ball.x, ball.y, TEAM_COLORS[this.team], 10);
        }
        return;
      }
      if (consumeJustPressed(this.shootKey())) {
        const gx = this.team === 'player' ? WIDTH - PITCH_PADDING : PITCH_PADDING;
        const gy = HEIGHT / 2 + (Math.random() - 0.5) * 60;
        this.releaseBall(ball, Math.atan2(gy - this.y, gx - this.x), 16);
        emitParticles(ball.x, ball.y, '#ffdd00', 12);
        return;
      }
    }
    if (consumeJustPressed(this.tackleKey())) {
      if (heldBy && heldBy.team !== this.team) {
        const d = Math.sqrt((heldBy.x - this.x) ** 2 + (heldBy.y - this.y) ** 2);
        if (d < PLAYER_RADIUS * 2 + 12) {
          heldBy = this; this.holdTime = 0;
          emitParticles(ball.x, ball.y, '#ffffff', 10);
          triggerShake(4); playKick();
        }
      }
    }
  }

  passKey() { return this.team === 'player' ? 'KeyE' : 'KeyG'; }
  shootKey() { return this.team === 'player' ? 'KeyC' : 'KeyF'; }
  tackleKey() { return this.team === 'player' ? 'KeyQ' : 'KeyH'; }
  switchKey() { return this.team === 'player' ? 'KeyZ' : 'KeyN'; }

  handleInput(ball) {
    if (!this.isControlled) return;

    // Apply local keyboard input for our team
    if (this.team === localTeam) {
      if (this.team === 'player') {
        if (keys['KeyW'] || keys['ArrowUp']) this.vy -= PLAYER_ACCEL;
        if (keys['KeyS'] || keys['ArrowDown']) this.vy += PLAYER_ACCEL;
        if (keys['KeyA'] || keys['ArrowLeft']) this.vx -= PLAYER_ACCEL;
        if (keys['KeyD'] || keys['ArrowRight']) this.vx += PLAYER_ACCEL;
      } else {
        if (keys['KeyI']) this.vy -= PLAYER_ACCEL;
        if (keys['KeyK']) this.vy += PLAYER_ACCEL;
        if (keys['KeyJ']) this.vx -= PLAYER_ACCEL;
        if (keys['KeyL']) this.vx += PLAYER_ACCEL;
      }
      const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (spd > PLAYER_SPEED) { this.vx = (this.vx / spd) * PLAYER_SPEED; this.vy = (this.vy / spd) * PLAYER_SPEED; }
      this.handleActions(ball);
    } else {
      // Apply opponent input received over network
      if (opponentInput.up) this.vy -= PLAYER_ACCEL;
      if (opponentInput.down) this.vy += PLAYER_ACCEL;
      if (opponentInput.left) this.vx -= PLAYER_ACCEL;
      if (opponentInput.right) this.vx += PLAYER_ACCEL;
      const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (spd > PLAYER_SPEED) { this.vx = (this.vx / spd) * PLAYER_SPEED; this.vy = (this.vy / spd) * PLAYER_SPEED; }
      // Handle opponent actions from network (edge-triggered via prevOpponentInput)
      if (opponentInput.pass && !prevOpponentInput.pass && heldBy === this) {
        const mates = players.filter(p => p.team === this.team && p !== this);
        if (mates.length > 0) {
          let t = mates[0], md = Infinity;
          mates.forEach(m => { const d = Math.sqrt((m.x - this.x) ** 2 + (m.y - this.y) ** 2); if (d < md) { md = d; t = m; } });
          this.releaseBall(ball, Math.atan2(t.y - this.y, t.x - this.x), 11);
          emitParticles(ball.x, ball.y, TEAM_COLORS[this.team], 10);
        }
      }
      if (opponentInput.shoot && !prevOpponentInput.shoot && heldBy === this) {
        const gx = this.team === 'player' ? WIDTH - PITCH_PADDING : PITCH_PADDING;
        const gy = HEIGHT / 2 + (Math.random() - 0.5) * 60;
        this.releaseBall(ball, Math.atan2(gy - this.y, gx - this.x), 16);
        emitParticles(ball.x, ball.y, '#ffdd00', 12);
      }
      if (opponentInput.tackle && !prevOpponentInput.tackle) {
        if (heldBy && heldBy.team !== this.team) {
          const d = Math.sqrt((heldBy.x - this.x) ** 2 + (heldBy.y - this.y) ** 2);
          if (d < PLAYER_RADIUS * 2 + 12) {
            heldBy = this; this.holdTime = 0;
            emitParticles(ball.x, ball.y, '#ffffff', 10);
            triggerShake(4); playKick();
          }
        }
      }
    }
  }

  draw() {
    const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    const lean = Math.min(spd * 0.4, 4);
    const leg = Math.sin(this.moveAnim) * 12;
    const arm = Math.sin(this.moveAnim) * 8;
    ctx.save(); ctx.translate(this.x, this.y);
    const da = heldBy === this && this.kickAnim > 0 ? this.angle + this.kickAnim * 0.3 : this.angle;
    ctx.rotate(da);
    ctx.beginPath(); ctx.ellipse(0, 14, PLAYER_RADIUS - 2, 5, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.15)'; ctx.fill();
    ctx.fillStyle = this.team === 'player' ? '#1a1a4a' : '#4a1a1a';
    ctx.save(); ctx.translate(-4, 3 - lean); ctx.rotate(leg * 0.025); ctx.fillRect(-3, 0, 5, 14); ctx.restore();
    ctx.save(); ctx.translate(4, 3 - lean); ctx.rotate(-leg * 0.025); ctx.fillRect(-2, 0, 5, 14); ctx.restore();
    ctx.fillStyle = '#111';
    const so = leg * 0.03; ctx.fillRect(-7 + so, 14 - lean - 2, 6, 4); ctx.fillRect(1 - so, 14 - lean - 2, 6, 4);
    ctx.fillStyle = this.color; ctx.beginPath(); ctx.roundRect(-11, -10 - lean, 22, 16, 6); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.fillRect(-2, -10 - lean, 4, 16);
    ctx.fillStyle = this.color;
    ctx.save(); ctx.translate(-13, -6 - lean); ctx.rotate(-arm * 0.015); ctx.fillRect(-3, 0, 5, 10); ctx.restore();
    ctx.save(); ctx.translate(8, -6 - lean); ctx.rotate(arm * 0.015); ctx.fillRect(-2, 0, 5, 10); ctx.restore();
    ctx.fillStyle = this.skinColor; ctx.fillRect(-16, 2 - lean + arm * 0.015, 4, 4); ctx.fillRect(12, 2 - lean - arm * 0.015, 4, 4);
    if (this.kickAnim > 0) {
      ctx.fillStyle = '#222'; ctx.save(); ctx.translate(10, -2); ctx.rotate(this.kickAnim * 0.3); ctx.fillRect(0, -3, 16, 5);
      ctx.fillStyle = '#111'; ctx.fillRect(14, -5, 6, 9); ctx.restore();
    }
    ctx.beginPath(); ctx.arc(0, -12 - lean, 7, 0, Math.PI * 2); ctx.fillStyle = this.skinColor; ctx.fill();
    ctx.beginPath(); ctx.arc(0, -12 - lean, 7, Math.PI, 0); ctx.fillStyle = '#333'; ctx.fill();
    ctx.fillStyle = '#222'; ctx.beginPath(); ctx.arc(3, -14 - lean, 1.2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(-3, -14 - lean, 1.2, 0, Math.PI * 2); ctx.fill();
    if (this.isControlled) {
      ctx.restore(); ctx.save(); ctx.translate(this.x, this.y);
      ctx.beginPath(); ctx.arc(0, 0, PLAYER_RADIUS + 8, 0, Math.PI * 2);
      ctx.strokeStyle = this.team === 'player' ? '#60a5fa' : '#fb7185';
      ctx.lineWidth = 2; ctx.setLineDash([4, 4]); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = this.team === 'player' ? '#60a5fa' : '#fb7185';
      ctx.beginPath(); ctx.moveTo(0, -PLAYER_RADIUS - 18); ctx.lineTo(-5, -PLAYER_RADIUS - 28); ctx.lineTo(5, -PLAYER_RADIUS - 28); ctx.fill();
    }
    ctx.restore();
  }
}

// ─── Game Objects ───
const players = [];
const ball = new Ball();

function initTeams() {
  players.length = 0;
  players.push(new Player(PITCH_PADDING + 30, HEIGHT / 2, 'player', 'gk'));
  players.push(new Player(180, 150, 'player'));
  players.push(new Player(180, 450, 'player'));
  players.push(new Player(320, HEIGHT / 2, 'player'));
  players.push(new Player(400, 120, 'player'));
  players.push(new Player(400, 480, 'player'));
  players.push(new Player(WIDTH - PITCH_PADDING - 30, HEIGHT / 2, 'opponent', 'gk'));
  players.push(new Player(WIDTH - 180, 150, 'opponent'));
  players.push(new Player(WIDTH - 180, 450, 'opponent'));
  players.push(new Player(WIDTH - 320, HEIGHT / 2, 'opponent'));
  players.push(new Player(WIDTH - 400, 120, 'opponent'));
  players.push(new Player(WIDTH - 400, 480, 'opponent'));
}

// ─── Drawing ───
function drawStadium() {
  const g = ctx.createLinearGradient(0, 0, 0, PITCH_PADDING);
  g.addColorStop(0, '#0a0a14'); g.addColorStop(1, '#000'); ctx.fillStyle = g;
  ctx.fillRect(0, 0, WIDTH, PITCH_PADDING);
  const g2 = ctx.createLinearGradient(0, HEIGHT - PITCH_PADDING, 0, HEIGHT);
  g2.addColorStop(0, '#000'); g2.addColorStop(1, '#0a0a14'); ctx.fillStyle = g2;
  ctx.fillRect(0, HEIGHT - PITCH_PADDING, WIDTH, PITCH_PADDING);
  ctx.fillStyle = '#12122a'; ctx.fillRect(0, 0, WIDTH, 4); ctx.fillRect(0, HEIGHT - 4, WIDTH, 4);
  ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = 1;
  for (let y = 5; y < PITCH_PADDING; y += 8) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WIDTH, y); ctx.stroke(); }
  for (let y = HEIGHT - PITCH_PADDING; y < HEIGHT - 4; y += 8) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WIDTH, y); ctx.stroke(); }
}

function drawFloodlights() {
  [{ x: 30, h: -30 }, { x: WIDTH - 30, h: -30 }].forEach(t => {
    ctx.fillStyle = '#222'; ctx.fillRect(t.x - 3, t.h, 6, PITCH_PADDING + 15);
    ctx.fillStyle = '#333'; ctx.fillRect(t.x - 10, t.h - 5, 20, 10);
    const grad = ctx.createRadialGradient(t.x, PITCH_PADDING, 5, t.x, PITCH_PADDING, 300);
    grad.addColorStop(0, 'rgba(255,255,200,0.12)'); grad.addColorStop(0.3, 'rgba(255,255,200,0.04)'); grad.addColorStop(1, 'rgba(255,255,200,0)');
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.moveTo(t.x - 120, PITCH_PADDING); ctx.lineTo(t.x + 120, PITCH_PADDING);
    ctx.lineTo(t.x + 250, HEIGHT - PITCH_PADDING); ctx.lineTo(t.x - 250, HEIGHT - PITCH_PADDING); ctx.closePath(); ctx.fill();
    if (t.x < WIDTH / 2) {
      ctx.beginPath(); ctx.moveTo(t.x - 80, PITCH_PADDING + 5); ctx.lineTo(t.x + 80, PITCH_PADDING + 5);
      ctx.lineTo(t.x + 180, HEIGHT - PITCH_PADDING); ctx.lineTo(t.x - 180, HEIGHT - PITCH_PADDING); ctx.closePath();
      ctx.fillStyle = 'rgba(255,255,200,0.03)'; ctx.fill();
    }
  });
}

function drawCrowd(time) {
  const scoringTeam = goalScored;

  function drawSide(members, isBlue, cheering) {
    members.forEach(m => {
      let bobMul = 1;
      if (cheering === 'celebrate') bobMul = 3;
      else if (cheering === 'sad') bobMul = 0.2;
      const bob = Math.sin(time * 0.002 * m.speed + m.phase) * m.bob * bobMul;
      const yy = m.y + bob;
      ctx.fillStyle = m.color;
      ctx.beginPath(); ctx.arc(m.x, yy, m.size, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = m.color; ctx.globalAlpha = 0.3;
      ctx.beginPath(); ctx.arc(m.x + 1, yy + 3, m.size * 0.6, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
      if (cheering === 'celebrate') {
        ctx.strokeStyle = m.color; ctx.lineWidth = 2; ctx.globalAlpha = 0.5;
        ctx.beginPath(); ctx.moveTo(m.x - 4, yy - 2); ctx.lineTo(m.x - 8, yy - 10); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(m.x + 4, yy - 2); ctx.lineTo(m.x + 8, yy - 10); ctx.stroke();
        ctx.globalAlpha = 1;
      }
    });
  }

  let blueState = 'normal', redState = 'normal';
  if (scoringTeam === 'player') { blueState = 'celebrate'; redState = 'sad'; }
  else if (scoringTeam === 'opponent') { blueState = 'sad'; redState = 'celebrate'; }

  drawSide(crowdBlue, true, blueState);
  drawSide(crowdRed, false, redState);

  if (crowdGoalText) {
    ctx.save();
    ctx.globalAlpha = crowdGoalText.alpha;
    ctx.fillStyle = crowdGoalText.color;
    ctx.font = `900 ${crowdGoalText.size}px Outfit, sans-serif`;
    ctx.textAlign = 'center';
    ctx.shadowBlur = 20;
    ctx.shadowColor = crowdGoalText.color;
    ctx.fillText('GOAL!', crowdGoalText.x, crowdGoalText.y);
    ctx.restore();
  }
}

function drawPitch(time) {
  let pitchColor, stripeColor, lineColor, shadowColor, shadowAlpha;

  if (groundMode === 0) {
    pitchColor = '#1a4d1a'; stripeColor = '#1e5e1e'; lineColor = 'rgba(255,255,255,0.35)'; shadowColor = 'rgba(0,0,0,0.2)'; shadowAlpha = 'rgba(0,0,0,0.15)';
  } else if (groundMode === 1) {
    pitchColor = '#e8e8e0'; stripeColor = '#f0f0e8'; lineColor = 'rgba(0,0,0,0.25)'; shadowColor = 'rgba(0,0,0,0.1)'; shadowAlpha = 'rgba(0,0,0,0.08)';
  } else {
    pitchColor = '#1a1a1a'; stripeColor = '#222222'; lineColor = 'rgba(255,255,255,0.2)'; shadowColor = 'rgba(0,0,0,0.3)'; shadowAlpha = 'rgba(0,0,0,0.2)';
  }

  const pg = ctx.createLinearGradient(0, PITCH_PADDING, 0, HEIGHT - PITCH_PADDING);
  pg.addColorStop(0, pitchColor); pg.addColorStop(0.5, stripeColor); pg.addColorStop(1, pitchColor);
  ctx.fillStyle = pg;
  ctx.fillRect(PITCH_PADDING, PITCH_PADDING, WIDTH - PITCH_PADDING * 2, HEIGHT - PITCH_PADDING * 2);

  ctx.fillStyle = stripeColor;
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) ctx.fillRect(PITCH_PADDING + (i * (WIDTH - PITCH_PADDING * 2)) / 10, PITCH_PADDING, (WIDTH - PITCH_PADDING * 2) / 10, HEIGHT - PITCH_PADDING * 2);
  }

  ctx.strokeStyle = lineColor; ctx.lineWidth = 2;
  ctx.strokeRect(PITCH_PADDING, PITCH_PADDING, WIDTH - PITCH_PADDING * 2, HEIGHT - PITCH_PADDING * 2);
  ctx.beginPath(); ctx.moveTo(WIDTH / 2, PITCH_PADDING); ctx.lineTo(WIDTH / 2, HEIGHT - PITCH_PADDING); ctx.stroke();
  ctx.beginPath(); ctx.arc(WIDTH / 2, HEIGHT / 2, 70, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeRect(PITCH_PADDING, HEIGHT / 2 - 110, 90, 220);
  ctx.strokeRect(WIDTH - PITCH_PADDING - 90, HEIGHT / 2 - 110, 90, 220);

  ctx.save();
  ctx.shadowBlur = 15; ctx.shadowColor = '#00ff88';
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(PITCH_PADDING - 6, HEIGHT / 2 - GOAL_WIDTH / 2, 6, GOAL_WIDTH);
  ctx.fillRect(WIDTH - PITCH_PADDING, HEIGHT / 2 - GOAL_WIDTH / 2, 6, GOAL_WIDTH);
  ctx.shadowBlur = 0;
  ctx.fillStyle = shadowAlpha;
  ctx.fillRect(PITCH_PADDING - 12, HEIGHT / 2 - GOAL_WIDTH / 2 - 4, 6, GOAL_WIDTH + 8);
  ctx.fillRect(WIDTH - PITCH_PADDING + 6, HEIGHT / 2 - GOAL_WIDTH / 2 - 4, 6, GOAL_WIDTH + 8);
  ctx.restore();
}

// --- HUD ---
function updateHUD() {
  $('player-score').textContent = playerScore;
  $('opponent-score').textContent = opponentScore;
  $('player-score-b').textContent = playerScore;
  $('opponent-score-b').textContent = opponentScore;
  const mins = Math.floor(timer / 60), secs = timer % 60;
  const ts = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  $('match-timer').textContent = ts;
  $('match-timer-b').textContent = ts;
  // Update names
  $('p1-name').textContent = localTeam === 'player' ? playerName : opponentName;
  $('p2-name').textContent = localTeam === 'opponent' ? playerName : opponentName;
  $('p1-name-b').textContent = localTeam === 'player' ? playerName : opponentName;
  $('p2-name-b').textContent = localTeam === 'opponent' ? playerName : opponentName;
  // Update controller labels
  $('p1-ctrl-label').textContent = localTeam === 'player' ? playerName || 'P1 BLUE' : opponentName || 'P1 BLUE';
  $('p2-ctrl-label').textContent = localTeam === 'opponent' ? playerName || 'P2 RED' : opponentName || 'P2 RED';
}

function scoreGoal(team) {
  if (gameState !== 'PLAYING') return;
  gameState = 'GOAL';
  goalScored = team;
  celebrationTimer = 120;
  if (team === 'player') playerScore++; else opponentScore++;
  updateHUD();
  triggerShake(12);
  playCheer();

  const isBlue = team === 'player';
  crowdGoalText = {
    x: isBlue ? WIDTH * 0.25 : WIDTH * 0.75,
    y: PITCH_PADDING * 0.6,
    size: 1.6 + Math.random() * 0.3 + 'rem',
    color: isBlue ? '#60a5fa' : '#fb7185',
    alpha: 1
  };

  const sa = $(team === 'player' ? 'player-score' : 'opponent-score');
  sa.classList.add('pop'); setTimeout(() => sa.classList.remove('pop'), 300);
  const sb = $(team === 'player' ? 'player-score-b' : 'opponent-score-b');
  sb.classList.add('pop'); setTimeout(() => sb.classList.remove('pop'), 300);
  const alert = $('goal-alert');
  alert.classList.remove('hidden');
  setTimeout(() => {
    alert.classList.add('hidden');
    goalScored = null;
    crowdGoalText = null;
    resetPositions();
    gameState = 'PLAYING';
  }, 2000);
}

function resetPositions() { ball.reset(); heldBy = null; players.forEach(p => p.reset()); }

function updateControlledPlayers() {
  const local = players.filter(p => p.team === localTeam);
  const switchKey = localTeam === 'player' ? 'KeyZ' : 'KeyN';
  if (consumeJustPressed(switchKey)) {
    if (localTeam === 'player') p1Index = (p1Index + 1) % local.length;
    else p2Index = (p2Index + 1) % local.length;
  }
  players.forEach(p => p.isControlled = false);
  const idx = localTeam === 'player' ? p1Index : p2Index;
  if (local[idx]) local[idx].isControlled = true;
}

function updateParticles() {
  particles = particles.filter(p => { p.x += p.vx; p.y += p.vy; p.vx *= 0.96; p.vy *= 0.96; p.life -= p.decay; return p.life > 0; });
}

function drawParticles() {
  particles.forEach(p => { ctx.globalAlpha = p.life; ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2); ctx.fill(); });
  ctx.globalAlpha = 1;
}

// --- Ground Toggle ---
function toggleGround() { groundMode = (groundMode + 1) % 3; }

// --- Scoreboard Toggle ---
function toggleScoreboard() {
  const a = $('scoreboard-a'), b = $('scoreboard-b');
  const ca = $('controls-a'), cb = $('controls-b');
  if (scoreboardStyle === 'A') {
    a.classList.add('hidden'); b.classList.remove('hidden');
    ca.classList.add('hidden'); cb.classList.remove('hidden');
    scoreboardStyle = 'B';
  } else {
    a.classList.remove('hidden'); b.classList.add('hidden');
    ca.classList.remove('hidden'); cb.classList.add('hidden');
    scoreboardStyle = 'A';
  }
}

$('ground-toggle').addEventListener('click', toggleGround);
$('scoreboard-toggle').addEventListener('click', toggleScoreboard);

// --- On-screen controller buttons ---
document.querySelectorAll('.ctrl-btn[data-key]').forEach(btn => {
  const keyCode = btn.dataset.key;
  btn.addEventListener('mousedown', e => { e.preventDefault(); keys[keyCode] = true; keysJustPressed[keyCode] = true; });
  btn.addEventListener('mouseup', e => { keys[keyCode] = false; });
  btn.addEventListener('mouseleave', e => { keys[keyCode] = false; });
  btn.addEventListener('touchstart', e => { e.preventDefault(); keys[keyCode] = true; keysJustPressed[keyCode] = true; });
  btn.addEventListener('touchend', e => { keys[keyCode] = false; });
  btn.addEventListener('touchcancel', e => { keys[keyCode] = false; });
});

// ─── Network input sender ───
function sendLocalInput() {
  if (!socket || !isInRoom) return;
  const local = players.filter(p => p.team === localTeam);
  const idx = localTeam === 'player' ? p1Index : p2Index;
  const cp = local[idx];
  let input = {
    up: false, down: false, left: false, right: false,
    pass: false, shoot: false, tackle: false, switch: false
  };
  if (localTeam === 'player') {
    if (keys['KeyW'] || keys['ArrowUp']) input.up = true;
    if (keys['KeyS'] || keys['ArrowDown']) input.down = true;
    if (keys['KeyA'] || keys['ArrowLeft']) input.left = true;
    if (keys['KeyD'] || keys['ArrowRight']) input.right = true;
  } else {
    if (keys['KeyI']) input.up = true;
    if (keys['KeyK']) input.down = true;
    if (keys['KeyJ']) input.left = true;
    if (keys['KeyL']) input.right = true;
  }
  if (cp && heldBy === cp) {
    input.pass = !!keys[cp.passKey()];
    input.shoot = !!keys[cp.shootKey()];
    input.tackle = !!keys[cp.tackleKey()];
  }
  socket.emit('room_input', input);
}

// ─── State sync (host → guest) ───
function sendGameState() {
  if (!socket || !isHost || !isInRoom) return;
  const state = {
    players: players.map(p => ({ x: p.x, y: p.y, vx: p.vx, vy: p.vy, angle: p.angle })),
    ball: { x: ball.x, y: ball.y, vx: ball.vx, vy: ball.vy },
    scores: { player: playerScore, opponent: opponentScore },
    timer: timer,
    heldById: heldBy ? players.indexOf(heldBy) : -1,
    gameState: gameState
  };
  socket.emit('room_game_state', state);
}

function applyRemoteState(state) {
  if (!state || isHost) return;
  for (let i = 0; i < state.players.length && i < players.length; i++) {
    const sp = state.players[i];
    const lp = players[i];
    lp.x = sp.x; lp.y = sp.y;
    lp.vx = sp.vx; lp.vy = sp.vy;
    lp.angle = sp.angle;
  }
  ball.x = state.ball.x; ball.y = state.ball.y;
  ball.vx = state.ball.vx; ball.vy = state.ball.vy;
  playerScore = state.scores.player;
  opponentScore = state.scores.opponent;
  timer = state.timer;
  gameState = state.gameState;
  if (state.heldById >= 0 && state.heldById < players.length) {
    heldBy = players[state.heldById];
  } else {
    heldBy = null;
  }
  updateHUD();
}

// ─── Game Loop ───
function gameLoop(time) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.save();
  if (shakeTime > 0) { ctx.translate((Math.random() - 0.5) * shakeIntensity, (Math.random() - 0.5) * shakeIntensity); shakeTime--; }
  drawStadium();
  drawCrowd(time);
  drawFloodlights();
  drawPitch(time);
  updateParticles();

  if (gameState === 'PLAYING' || gameState === 'GOAL') {
    updateControlledPlayers();
    players.forEach(p => { p.update(ball); });
    ball.update();
    // Send local input to opponent
    sendLocalInput();
    // Host sends authoritative state to guest
    if (isHost) sendGameState();
  }

  players.sort((a, b) => a.y - b.y).forEach(p => p.draw());
  ball.draw();
  drawParticles();

  if (goalScored && celebrationTimer > 0) {
    celebrationTimer--;
    if (celebrationTimer % 4 === 0) {
      const cx = WIDTH / 2 + (Math.random() - 0.5) * 300, cy = HEIGHT / 2 + (Math.random() - 0.5) * 200;
      emitParticles(cx, cy, ['#e11d48', '#2563eb', '#00ff88', '#ffaa00'][Math.floor(Math.random() * 4)], 3);
    }
  }

  if (crowdGoalText && celebrationTimer < 60) {
    crowdGoalText.alpha = Math.max(0, celebrationTimer / 60);
  }

  Object.keys(keysJustPressed).forEach(k => { keysJustPressed[k] = false; });
  prevOpponentInput = { ...opponentInput };
  ctx.restore();
  requestAnimationFrame(gameLoop);
}

// ─── Online Match Start ───
function startOnlineMatch() {
  playerScore = 0; opponentScore = 0; timer = 60;
  p1Index = 0; p2Index = 0; scoreboardStyle = 'A';
  updateHUD(); initTeams(); resetPositions();
  particles = []; goalScored = null; crowdGoalText = null;
  initAudio();

  $('game-over-screen').classList.add('hidden');
  $('result-text').style.color = '';

  if (localTeam === 'player') {
    $('controller-p1').classList.remove('hidden');
    $('controller-p2').classList.add('hidden');
  } else {
    $('controller-p1').classList.add('hidden');
    $('controller-p2').classList.remove('hidden');
  }

  gameState = 'PLAYING';
  if (matchTimerId) clearInterval(matchTimerId);
  matchTimerId = setInterval(() => {
    if (gameState === 'PLAYING') { timer--; updateHUD(); if (timer <= 0) endOnlineMatch(); }
  }, 1000);
  playWhistle();
}

function endOnlineMatch() {
  gameState = 'END';
  clearInterval(matchTimerId);
  const res = $('result-text');
  const isDraw = playerScore === opponentScore;
  if (isDraw) {
    res.textContent = 'DRAW!';
    res.style.color = '#ffaa00';
  } else {
    const weWon = (playerScore > opponentScore) === (localTeam === 'player');
    res.textContent = weWon ? 'YOU WIN!' : 'YOU LOSE!';
    res.style.color = weWon ? '#2563eb' : '#e11d48';
  }
  $('final-player-score').textContent = playerScore;
  $('final-opponent-score').textContent = opponentScore;
  $('game-over-screen').classList.remove('hidden');
  playCheer();
  $('controller-p1').classList.add('hidden');
  $('controller-p2').classList.add('hidden');
}

// ─── Initialization ───
$('controller-p1').classList.add('hidden');
$('controller-p2').classList.add('hidden');

initTeams();
generateCrowd();
drawPitch(0);
updateHUD();
requestAnimationFrame(gameLoop);
showMainMenu();
