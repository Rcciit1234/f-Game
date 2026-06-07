import * as THREE from 'three';
import { SceneManager } from '../rendering/SceneManager.js';
import { PhysicsWorld } from '../physics/PhysicsWorld.js';
import { InputManager } from '../input/InputManager.js';
import { TouchController } from '../input/TouchController.js';
import { CameraController } from '../rendering/CameraController.js';
import { NetworkManager } from './NetworkManager.js';
import { LocalMatchManager } from './LocalMatchManager.js';
import { GameState } from './GameState.js';
import { Player } from '../entities/Player.js';
import { Ball } from '../entities/Ball.js';
import { Goal } from '../entities/Goal.js';
import { Stadium } from '../rendering/Stadium.js';
import { HUD } from '../ui/HUD.js';
import { LoginScreen, AUTH_KEY } from '../ui/LoginScreen.js';
import type { AuthUser } from '../ui/LoginScreen.js';
import { DashboardScreen } from '../ui/DashboardScreen.js';
import { SettingsScreen } from '../ui/SettingsScreen.js';
import { GameScreen } from '../ui/GameScreen.js';
import { GuideScreen } from '../ui/GuideScreen.js';
import { Minimap } from '../ui/Minimap.js';
import { Effects } from '../rendering/Effects.js';
import { AudioManager } from '../audio/AudioManager.js';
import { PlayerSwitcher } from '../ui/PlayerSwitcher.js';
import { startHeadBall } from '../headball/index.js';
import {
  MatchState, Team, TeamMode, PlayerInput, FieldColor,
} from '../../../shared/index.js';

declare global {
  interface Window { google?: any; handleGoogleCredential?: (response: any) => void; }
}

export class Game {
  private sceneManager!: SceneManager;
  private physics!: PhysicsWorld;
  private input!: InputManager;
  private touchCtrl!: TouchController;
  private cameraCtrl!: CameraController;
  private network!: NetworkManager;
  private localMatch: LocalMatchManager | null = null;
  private state!: GameState;
  private hud!: HUD;
  private loginScreen!: LoginScreen;
  private dashboardScreen!: DashboardScreen;
  private settingsScreen!: SettingsScreen;
  private gameScreen!: GameScreen;
  private guideScreen!: GuideScreen;
  private minimap!: Minimap;
  private effects!: Effects;
  private audio!: AudioManager;
  private stadium!: Stadium;
  private playerSwitcher!: PlayerSwitcher;

  private players: Map<string, Player> = new Map();
  private ball!: Ball;
  private goals: Goal[] = [];

  private localPlayerId: string | null = null;
  private inputSequence = 0;

  private isRunning = false;
  private animFrameId: number | null = null;
  private lastTime = 0;
  private matchTime = 0;

  private pendingCameras: string[] = [];
  private _wasKickoff = false;
  private latencyInterval: number | null = null;
  private roomPlayers: { id: string; name: string }[] = [];

  private currentUser: AuthUser | null = null;

  async init() {
    this.sceneManager = new SceneManager();
    this.physics = new PhysicsWorld();
    this.input = new InputManager();
    this.touchCtrl = new TouchController();
    this.input.setTouchController(this.touchCtrl);
    this.state = new GameState();
    this.network = new NetworkManager();
    this.hud = new HUD();
    this.loginScreen = new LoginScreen();
    this.dashboardScreen = new DashboardScreen();
    this.settingsScreen = new SettingsScreen();
    this.gameScreen = new GameScreen();
    this.guideScreen = new GuideScreen();
    this.minimap = new Minimap();
    this.effects = new Effects(this.sceneManager.scene);
    this.audio = new AudioManager();
    this.stadium = new Stadium(this.sceneManager.scene);
    this.cameraCtrl = new CameraController(this.sceneManager.camera);

    // Wire haptics
    if (this.input.isMobile) {
      this.touchCtrl.onHaptic = () => {
        try { navigator.vibrate?.(12); } catch {}
      };
    }

    // Wire camera reset
    this.touchCtrl.onCameraReset = () => {
      this.cameraCtrl.snapBehind();
    };

    this.touchCtrl.onMuteToggle = () => {
      const muted = this.audio.toggleMute();
      this.hud.showNotification(muted ? 'Audio OFF' : 'Audio ON');
    };

    // Wire pause/quit
    this.hud.onPauseQuit = () => {
      if (!this.localMatch) {
        this.network.disconnect();
      }
      this.cleanupMatch();
      this.dashboardScreen.show();
    };

    this.stadium.build();

    const blueGoal = new Goal(this.sceneManager.scene, this.physics.world, Team.Blue);
    const redGoal = new Goal(this.sceneManager.scene, this.physics.world, Team.Red);
    this.goals = [blueGoal, redGoal];

    this.ball = new Ball(this.sceneManager.scene, this.physics.world);

    this.setupUI();
    this.setupEvents();

    // Track latency
    this.latencyInterval = window.setInterval(() => {
      const ping = this.network.getPing?.() ?? 0;
      this.hud.updateLatency(ping);
    }, 2000);

    const loadingEl = document.getElementById('loading-screen');
    if (loadingEl) {
      loadingEl.style.opacity = '0';
      setTimeout(() => loadingEl?.remove(), 500);
    }

    // Check for persisted auth
    const saved = this.getSavedAuth();
    if (saved) {
      this.currentUser = saved;
      this.dashboardScreen.setUser(saved.name, saved.photo);
      this.dashboardScreen.show();
    } else {
      this.initGoogleSignIn();
      this.loginScreen.show();
    }

    this.isRunning = true;
    this.lastTime = performance.now();
    this.animate();

    window.addEventListener('resize', () => this.sceneManager.onResize());

    window.addEventListener('keydown', (e) => {
      if (e.key === 'm' || e.key === 'M') {
        const muted = this.audio.toggleMute();
        this.hud.showNotification(muted ? 'Audio OFF' : 'Audio ON');
      }
    });
  }

  private getSavedAuth(): AuthUser | null {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return null;
  }

  private saveAuth(user: AuthUser) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  }

  private clearAuth() {
    localStorage.removeItem(AUTH_KEY);
  }

  private initGoogleSignIn() {
    let attempts = 0;
    const tryInit = () => {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: '457479229860-2eg25haho3f30lh24eu9582tp1g3ahtf.apps.googleusercontent.com',
          callback: (response: any) => {
            try {
              const payload = JSON.parse(atob(response.credential.split('.')[1]));
              const user: AuthUser = {
                name: payload.name || 'Player',
                photo: payload.picture || '',
                method: 'google',
              };
              this.onLogin(user);
            } catch {
              this.loginScreen.setStatus('Google sign-in failed');
            }
          },
        });
        window.google.accounts.id.renderButton(
          this.loginScreen.googleBtnContainer,
          { type: 'standard', shape: 'pill', theme: 'filled_black', text: 'signin_with', size: 'large' },
        );
      } else {
        attempts++;
        if (attempts < 50) {
          setTimeout(tryInit, 200);
        } else {
          console.log('[Game] Google Sign-In SDK not available after 10s, guest login only');
        }
      }
    };
    tryInit();
  }

  private onLogin(user: AuthUser) {
    this.currentUser = user;
    this.saveAuth(user);
    this.loginScreen.hide();
    this.dashboardScreen.setUser(user.name, user.photo);
    this.dashboardScreen.show();
    this.audio.init();
    this.audio.playMenuClick();
  }

  private setupUI() {
    this.loginScreen.onLogin = (user: AuthUser) => {
      this.onLogin(user);
    };

    this.dashboardScreen.onCreateRoom = () => {
      const name = this.currentUser?.name || 'Player';
      if (!this.network.socket) {
        this.network.connect(name);
      }
      this.network.createRoom();
    };

    this.dashboardScreen.onJoinRoom = (code: string) => {
      const name = this.currentUser?.name || 'Player';
      if (!this.network.socket) {
        this.network.connect(name);
      }
      this.network.joinRoom(code);
    };

    this.dashboardScreen.onSettings = () => {
      this.settingsScreen.show();
    };

    this.dashboardScreen.onGuide = () => {
      this.guideScreen.show();
    };

    this.dashboardScreen.onExit = () => {
      this.clearAuth();
      this.currentUser = null;
      this.dashboardScreen.hide();
      this.loginScreen.show();
    };

    this.dashboardScreen.onColorChange = (color: FieldColor) => {
      this.stadium.setFieldColor(color);
    };

    this.dashboardScreen.onHeadBall = () => {
      this.audio.playMenuClick();
      this.dashboardScreen.hide();
      document.getElementById('game-container')!.style.display = 'none';
      const hbContainer = document.createElement('div');
      hbContainer.id = 'headball-container';
      hbContainer.style.cssText = 'position:fixed;inset:0;z-index:200;background:#0f172a';
      document.body.appendChild(hbContainer);
      const restore = () => {
        const el = document.getElementById('headball-container');
        if (el) el.remove();
        document.getElementById('game-container')!.style.display = '';
        this.dashboardScreen.show();
      };
      startHeadBall(hbContainer, restore);
    };

    this.dashboardScreen.onPractice = (team: 'blue' | 'red') => {
      this.audio.init();
      this.audio.playMenuClick();
      const name = this.currentUser?.name || 'Player';
      this.dashboardScreen.hide();
      this.localMatch = new LocalMatchManager(name, {
        onMatchFound: (data) => {
          this.localPlayerId = data.playerId;
          this.state.matchId = data.matchId;
          if (this.input.isMobile) {
            this.touchCtrl.show();
          }
          this.minimap.setLocalPlayerId(this.localPlayerId!);
          this.audio.startCrowdAmbient();
          this.hud.show();
          if (data.teamMode) {
            this.hud.showModeButton(true);
          } else {
            this.hud.showModeButton(false);
          }
        },
        onStateUpdate: (data) => {
          this.state.update(data);
          this.matchTime = data.elapsedSeconds || 0;
          this.syncEntities(data.elapsedSeconds ? 1 / 60 : 1 / 60);
          this.updateHUD();
          this.updateAudio();
          if (data.state === MatchState.Playing) {
            const wasKickoff = this._wasKickoff;
            if (wasKickoff) {
              this.audio.playMatchStart();
              this.input.requestPointerLock();
            }
            this._wasKickoff = false;
          }
          if (data.state === MatchState.Kickoff) {
            this._wasKickoff = true;
          }
          if (data.state === MatchState.GoalScored) {
            this.effects.goalExplosion(data.ball?.position);
          }
        },
        onGoalScored: (data) => {
          this.effects.goalCelebration(data.team);
          this.hud.showGoalNotification(data.team, data.scorer);
          this.audio.playGoalScored();
          if (data.scorer) {
            const scorerEntity = this.players.get(data.scorer);
            if (scorerEntity) {
              scorerEntity.celebrate();
            }
          }
        },
        onMatchEnd: (data) => {
          this.audio.playMatchEnd();
          this.hud.showMatchEnd(data);
          this.recordMatchResult(data.winner);
          setTimeout(() => {
            this.cleanupMatch();
            this.dashboardScreen.show();
          }, 5000);
        },
        onCountdown: (data) => {
          this.hud.showCountdown(data.time);
          if (data.time > 0) {
            this.audio.playCountdownBeep();
          } else {
            this.audio.playCountdownGo();
          }
        },
      });
      this.localMatch.startPractice(team);
    };

    this.hud.onModeToggle = (mode: 'attack' | 'defence') => {
      if (this.localMatch) {
        this.localMatch.sendTeamMode(mode);
      } else {
        this.network.sendTeamMode(mode);
      }
      this.hud.showNotification(mode === 'attack' ? 'Attack Mode' : 'Defence Mode');
    };

    this.settingsScreen.onBack = () => {
      this.settingsScreen.hide();
      this.dashboardScreen.show();
    };

    this.settingsScreen.onSoundChange = (val: number) => {
      this.audio.setVolume?.(val / 100);
    };

    this.settingsScreen.onJoystickChange = (offsets) => {
      this.touchCtrl.applyOffsets();
    };

    this.guideScreen.onBack = () => {
      this.guideScreen.hide();
      this.dashboardScreen.show();
    };

    // GameScreen room callbacks
    this.gameScreen.onStart = () => {
      this.network.startRoomGame();
    };

    this.gameScreen.onLeave = () => {
      this.network.leaveRoom();
      this.gameScreen.hide();
      this.dashboardScreen.show();
    };
  }

  private setupEvents() {
    // Room event handlers
    this.network.onRoomCreated = (data) => {
      this.roomPlayers = data.players || [{ id: this.network.socketId, name: this.network.playerName }];
      this.gameScreen.show(data.code, true, this.roomPlayers);
      this.dashboardScreen.hide();
    };

    this.network.onRoomJoined = (data) => {
      this.roomPlayers = data.players || [];
      const isHost = data.hostId === this.network.socketId;
      this.gameScreen.show(data.code, isHost, this.roomPlayers);
      this.dashboardScreen.hide();
    };

    this.network.onRoomPlayerJoined = (data) => {
      if (!this.roomPlayers.find(p => p.id === data.id)) {
        this.roomPlayers.push({ id: data.id, name: data.name });
      }
      this.gameScreen.updatePlayers(this.roomPlayers);
    };

    this.network.onRoomPlayerLeft = (data) => {
      this.roomPlayers = this.roomPlayers.filter(p => p.id !== data.id);
      this.gameScreen.updatePlayers(this.roomPlayers);
    };

    this.network.onRoomError = (data) => {
      this.gameScreen.showStartError?.(data.message);
    };

    this.network.onRoomGameStart = (data) => {
      this.localPlayerId = this.network.socketId;
      this.state.matchId = data.matchId;
      this.gameScreen.hide();
      if (this.input.isMobile) {
        this.touchCtrl.show();
      }
      this.minimap.setLocalPlayerId(this.localPlayerId!);
      this.audio.startCrowdAmbient();
      this.hud.show();
    };

    // Match events
    this.network.onMatchFound = (data) => {
      this.localPlayerId = this.network.socketId;
      this.state.matchId = data.matchId;
      this.loginScreen.hide();
      this.dashboardScreen.hide();
      if (this.input.isMobile) {
        this.touchCtrl.show();
      }
      this.minimap.setLocalPlayerId(this.localPlayerId!);
      this.audio.startCrowdAmbient();
      this.hud.show();

      // Show mode toggle for practice matches
      if (data.teamMode) {
        this.hud.showModeButton(true);
        const myTeam = data.teamMode.blue !== undefined
          ? ('blue' as Team)
          : ('red' as Team);
        // Wait for first state update to know our team
      } else {
        this.hud.showModeButton(false);
      }
    };

    this.network.onStateUpdate = (data) => {
      this.state.update(data);
      this.matchTime = data.elapsedSeconds || 0;
      this.syncEntities(data.elapsedSeconds ? 1 / 60 : 1 / 60);
      this.updateHUD();
      this.updateAudio();

      if (data.state === MatchState.Playing) {
        const wasKickoff = this._wasKickoff;
        if (wasKickoff) {
          this.audio.playMatchStart();
          this.input.requestPointerLock();
        }
        this._wasKickoff = false;
      }
      if (data.state === MatchState.Kickoff) {
        this._wasKickoff = true;
      }

      if (data.state === MatchState.GoalScored) {
        this.effects.goalExplosion(data.ball?.position);
      }
    };

    this.network.onGoalScored = (data) => {
      this.effects.goalCelebration(data.team);
      this.hud.showGoalNotification(data.team, data.scorer);
      this.audio.playGoalScored();

      const scorerId = this.network.lastScorerId;
      if (scorerId) {
        const scorerEntity = this.players.get(scorerId);
        if (scorerEntity) {
          scorerEntity.celebrate();
        }
      }
    };

    this.network.onMatchEnd = (data) => {
      this.audio.playMatchEnd();
      this.hud.showMatchEnd(data);
      this.recordMatchResult(data.winner);
      setTimeout(() => {
        this.cleanupMatch();
        this.dashboardScreen.show();
      }, 5000);
    };

    this.network.onCountdown = (data) => {
      this.hud.showCountdown(data.time);
      if (data.time > 0) {
        this.audio.playCountdownBeep();
      } else {
        this.audio.playCountdownGo();
      }
    };

    this.network.onPlayerJoined = (data) => {
      console.log('Player joined:', data);
    };

    this.network.onPlayerLeft = (data) => {
      const player = this.players.get(data.id);
      if (player) player.remove();
      this.players.delete(data.id);
    };

    // Connection status
    this.network.onConnected = () => {
      this.loginScreen.setStatus('Connected');
    };
    this.network.onDisconnected = () => {
      this.loginScreen.setStatus('Disconnected');
    };
    this.network.onQueueUpdate = (count: number) => {
      // queue count handled by server now
    };

    // Player switching - server confirmation
    this.network.onSwitchConfirmed = (data) => {
      const switched = this.state.switchToPlayer(data.playerId);
      if (switched) {
        this.onPlayerSwitched(data.playerId);
      }
    };

    // Practice mode - team mode updates
    this.network.onTeamModeUpdate = (data) => {
      const myPlayer = this.state.myTeam;
      if (myPlayer && data.team === myPlayer) {
        this.hud.setMode(data.mode);
      }
    };
  }

  // ========== Remaining methods unchanged ==========

  private onPlayerSwitched(playerId: string) {
    const player = this.state.players.get(playerId);
    const playerEntity = this.players.get(playerId);
    if (!player || !playerEntity) return;

    this.cameraCtrl.follow(playerEntity.mesh);

    const targetPos = new THREE.Vector3(
      player.physics.position.x,
      player.physics.position.y,
      player.physics.position.z,
    );
    this.cameraCtrl.switchTarget(targetPos, 0.3);

    this.playerSwitcher?.highlightPlayer(playerId);
    this.hud.showNotification(`Switched to #${player.jerseyNumber}`);
  }

  private handleSwitchPlayer(newPlayerId: string) {
    if (this.localMatch) {
      const switched = this.state.switchToPlayer(newPlayerId);
      if (switched) {
        this.onPlayerSwitched(newPlayerId);
      }
    } else {
      this.network.switchPlayer(newPlayerId);
    }
  }

  private switchToNextPlayer() {
    const nextId = this.state.getNextPlayerId();
    if (nextId && nextId !== this.state.currentPlayerId) {
      this.handleSwitchPlayer(nextId);
    }
  }

  private cleanupMatch() {
    this.audio.stopMatchAudio();
    this.touchCtrl.hide();
    this.hud.hide();
    this.playerSwitcher?.hide();
    this.players.forEach((p) => p.remove());
    this.players.clear();
    this.localPlayerId = null;
    this.state.currentPlayerId = null;
    this.state.myTeam = null;
    this.state.myTeamPlayerIds = [];
    if (this.localMatch) {
      this.localMatch.destroy();
      this.localMatch = null;
    }
  }

  private syncEntities(dt: number = 1 / 60) {
    const players = this.state.getPlayers();
    const ballState = this.state.getBall();

    if (ballState) {
      this.ball.sync(ballState);
    }

    players.forEach((player) => {
      let p = this.players.get(player.id);
      const isLocal = player.id === this.localPlayerId;

      if (!p) {
        const pNum = String(player.jerseyNumber || Math.floor(Math.random() * 99) + 1);
        if (isLocal) {
          p = new Player(this.sceneManager.scene, this.physics.world, player.team, 'player', 'You', pNum, player.position);
        } else {
          p = new Player(this.sceneManager.scene, this.physics.world, player.team, player.isAI ? 'ai' : 'remote', player.name || 'AI', pNum, player.position);
        }
        this.players.set(player.id, p);
      }

      p.setHasBall(player.hasBall);
      p.sync(player.physics, dt);

      if (isLocal) {
        this.cameraCtrl.follow(p.mesh);
      }
    });

    if (this.localPlayerId && !this.state.myTeam) {
      const myPlayer = this.state.players.get(this.localPlayerId);
      if (myPlayer) {
        this.state.setLocalTeam(myPlayer.team);
        if (!this.playerSwitcher) {
          this.playerSwitcher = new PlayerSwitcher();
        }
        this.playerSwitcher.setTeam(myPlayer.team);
        this.playerSwitcher.onSwitch = (playerId: string) => {
          this.handleSwitchPlayer(playerId);
        };
        this.playerSwitcher.show();
      }
    }

    if (this.playerSwitcher && this.state.myTeam) {
      const playerList = Array.from(this.state.players.values()).map(p => ({
        id: p.id,
        name: p.name,
        isAI: p.isAI,
        jerseyNumber: p.jerseyNumber,
      }));
      const currentId = this.state.currentPlayerId || this.localPlayerId || '';
      this.playerSwitcher.updatePlayers(playerList, currentId);
    }
  }

  private updateHUD() {
    const state = this.state;
    this.hud.updateScore(state.blueScore, state.redScore);
    this.hud.updateTimer(state.elapsedSeconds);

    if (this.localPlayerId) {
      const player = state.players.get(this.localPlayerId);
      if (player) {
        this.hud.updateStamina(player.physics.stamina);
      }
    }
  }

  private updateAudio() {
    if (!this.localPlayerId) return;
    const player = this.state.players.get(this.localPlayerId);
    if (!player) return;
    const speed = Math.sqrt(
      player.physics.velocity.x ** 2 +
      player.physics.velocity.y ** 2 +
      player.physics.velocity.z ** 2
    );
    this.audio.setMatchIntensity(speed / 7.5);
  }

  private handleInput(dt: number) {
    if (!this.localPlayerId) {
      console.log('[DIAG] handleInput: no localPlayerId');
      return;
    }

    if (this.input.consumeSwitchRequest()) {
      this.switchToNextPlayer();
    }

    const rawInput = this.input.getRawInput();
    this.inputSequence++;

    if (rawInput.steer !== 0 || rawInput.throttle !== 0) {
      console.log('[DIAG] handleInput steer/throttle:', rawInput.steer, rawInput.throttle);
    }

    // Handle switch player
    if (rawInput.switchPlayer) {
      this.switchToNextPlayer();
    }

    // Handle pass — calculate direction to nearest teammate
    if (rawInput.pass) {
      const nearest = this.findNearestTeammate();
      if (nearest) {
        const myPlayer = this.state.players.get(this.localPlayerId);
        if (myPlayer) {
          const dx = nearest.position.x - myPlayer.physics.position.x;
          const dz = nearest.position.z - myPlayer.physics.position.z;
          const dist = Math.sqrt(dx * dx + dz * dz);
          if (dist > 0) {
            rawInput.kickDirection = { x: dx / dist, z: dz / dist };
          }
        }
      }
    }

    const input: PlayerInput = {
      steer: rawInput.steer,
      throttle: rawInput.throttle,
      sprint: rawInput.sprint,
      kick: rawInput.kick,
      kickDirection: rawInput.kickDirection,
      pass: rawInput.pass || undefined,
      throughPass: rawInput.throughPass || undefined,
      tackle: rawInput.tackle || undefined,
      switchPlayer: rawInput.switchPlayer || undefined,
      camera: rawInput.camera,
      sequence: this.inputSequence,
    };

    if (this.localMatch) {
      this.localMatch.handleInput(input);
    } else {
      this.network.sendInput(input);
    }

    const players = this.state.getPlayers();
    const ballState = this.state.getBall();
    this.minimap.update(players, ballState);
  }

  private switchToDefender() {
    const myPlayer = this.state.players.get(this.localPlayerId!);
    if (!myPlayer) return;

    const ball = this.state.getBall();
    if (!ball) return;

    let closestId: string | null = null;
    let closestDist = Infinity;

    for (const [id, player] of this.state.players) {
      if (id === this.localPlayerId) continue;
      if (player.team !== myPlayer.team) continue;

      const dx = player.physics.position.x - ball.position.x;
      const dz = player.physics.position.z - ball.position.z;
      const dist = dx * dx + dz * dz;
      if (dist < closestDist) {
        closestDist = dist;
        closestId = id;
      }
    }

    if (closestId) {
      this.handleSwitchPlayer(closestId);
    }
  }

  private findNearestTeammate(): { position: { x: number; z: number } } | null {
    const myPlayer = this.state.players.get(this.localPlayerId!);
    if (!myPlayer) return null;

    let nearest: { position: { x: number; z: number } } | null = null;
    let nearestDist = Infinity;

    for (const [id, player] of this.state.players) {
      if (id === this.localPlayerId) continue;
      if (player.team !== myPlayer.team) continue;

      const dx = player.physics.position.x - myPlayer.physics.position.x;
      const dz = player.physics.position.z - myPlayer.physics.position.z;
      const dist = dx * dx + dz * dz;
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = { position: { x: player.physics.position.x, z: player.physics.position.z } };
      }
    }

    return nearest;
  }

  private animate() {
    if (!this.isRunning) return;

    this.animFrameId = requestAnimationFrame(() => this.animate());

    const now = performance.now();
    const dt = Math.min((now - this.lastTime) / 1000, 0.05);
    this.lastTime = now;

    this.physics.step(dt);
    this.handleInput(dt);
    this.cameraCtrl.update(dt, this.input.camera);
    this.effects.update(dt);
    this.sceneManager.render();
  }

  private recordMatchResult(winner: string | null) {
    try {
      const statsKey = 'football_career_stats';
      const statsRaw = localStorage.getItem(statsKey);
      let stats = statsRaw ? JSON.parse(statsRaw) : { wins: 0, matches: 0, level: 1, xp: 0 };
      
      stats.matches++;
      const myTeam = this.state.myTeam;
      if (winner && myTeam && winner === myTeam) {
        stats.wins++;
        stats.xp += 100;
      } else if (!winner) {
        stats.xp += 30;
      } else {
        stats.xp += 10;
      }
      
      const xpNeeded = stats.level * 200;
      if (stats.xp >= xpNeeded) {
        stats.xp -= xpNeeded;
        stats.level++;
        this.hud.showNotification(`LEVEL UP! Now Level ${stats.level}!`);
      }
      
      localStorage.setItem(statsKey, JSON.stringify(stats));
      if (this.currentUser) {
        this.dashboardScreen.setUser(this.currentUser.name, this.currentUser.photo);
      }
    } catch (e) {
      console.error('Error saving career stats:', e);
    }
  }

  destroy() {
    this.isRunning = false;
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
    if (this.latencyInterval !== null) {
      clearInterval(this.latencyInterval);
    }
    this.network.disconnect();
    this.audio.dispose();
    this.sceneManager.dispose();
  }
}
