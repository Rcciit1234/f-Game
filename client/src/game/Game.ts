import { SceneManager } from '../rendering/SceneManager.js';
import { PhysicsWorld } from '../physics/PhysicsWorld.js';
import { InputManager } from '../input/InputManager.js';
import { TouchController } from '../input/TouchController.js';
import { CameraController } from '../rendering/CameraController.js';
import { NetworkManager } from './NetworkManager.js';
import { GameState } from './GameState.js';
import { Player } from '../entities/Player.js';
import { Ball } from '../entities/Ball.js';
import { Goal } from '../entities/Goal.js';
import { Stadium } from '../rendering/Stadium.js';
import { HUD } from '../ui/HUD.js';
import { MainMenu } from '../ui/MainMenu.js';
import { Minimap } from '../ui/Minimap.js';
import { Effects } from '../rendering/Effects.js';
import { AudioManager } from '../audio/AudioManager.js';
import {
  MatchState, Team, PlayerInput,
} from '../../../shared/index.js';

export class Game {
  private sceneManager!: SceneManager;
  private physics!: PhysicsWorld;
  private input!: InputManager;
  private touchCtrl!: TouchController;
  private cameraCtrl!: CameraController;
  private network!: NetworkManager;
  private state!: GameState;
  private hud!: HUD;
  private menu!: MainMenu;
  private minimap!: Minimap;
  private effects!: Effects;
  private audio!: AudioManager;
  private stadium!: Stadium;

  private players: Map<string, Player> = new Map();
  private ball!: Ball;
  private goals: Goal[] = [];

  private localPlayerId: string | null = null;
  private inputSequence = 0;

  private isRunning = false;
  private animFrameId: number | null = null;
  private lastTime = 0;

  private pendingCameras: string[] = [];
  private _wasKickoff = false;
  private latencyInterval: number | null = null;

  async init() {
    this.sceneManager = new SceneManager();
    this.physics = new PhysicsWorld();
    this.input = new InputManager();
    this.touchCtrl = new TouchController();
    this.input.setTouchController(this.touchCtrl);
    this.state = new GameState();
    this.network = new NetworkManager();
    this.hud = new HUD();
    this.menu = new MainMenu();
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
      this.network.disconnect();
      this.cleanupMatch();
      this.menu.show();
    };

    this.stadium.build();

    const blueGoal = new Goal(this.sceneManager.scene, this.physics.world, Team.Blue);
    const redGoal = new Goal(this.sceneManager.scene, this.physics.world, Team.Red);
    this.goals = [blueGoal, redGoal];

    this.ball = new Ball(this.sceneManager.scene, this.physics.world);

    this.setupEvents();

    // Track latency
    this.latencyInterval = window.setInterval(() => {
      const ping = this.network.getPing?.() ?? 0;
      this.hud.updateLatency(ping);
    }, 2000);

    this.menu.show();

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

  private setupEvents() {
    this.menu.onPlay = (name: string) => {
      this.audio.init();
      this.audio.playMenuClick();
      this.network.connect(name);
      this.menu.showConnecting();
    };

    this.network.onMatchFound = (data) => {
      this.localPlayerId = this.network.socketId;
      this.state.matchId = data.matchId;
      this.menu.hide();
      if (this.input.isMobile) {
        this.touchCtrl.show();
      }
      this.minimap.setLocalPlayerId(this.localPlayerId!);
      this.audio.startEngine();
      this.audio.startCrowdAmbient();
      this.hud.show();
    };

    this.network.onStateUpdate = (data) => {
      this.state.update(data);
      this.syncEntities();
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
        this.effects.goalExplosion(data.ball.position);
      }
    };

    this.network.onGoalScored = (data) => {
      this.effects.goalCelebration(data.team);
      this.hud.showGoalNotification(data.team, data.scorer);
      this.audio.playGoalScored();
    };

    this.network.onMatchEnd = (data) => {
      this.audio.playMatchEnd();
      this.hud.showMatchEnd(data);
      setTimeout(() => {
        this.cleanupMatch();
        this.menu.show();
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
      this.menu.setConnected(true);
    };
    this.network.onDisconnected = () => {
      this.menu.setConnected(false);
    };
    this.network.onQueueUpdate = (count: number) => {
      this.menu.setQueueCount(count);
    };
  }

  private cleanupMatch() {
    this.audio.stopEngine();
    this.audio.stopCrowdAmbient();
    this.touchCtrl.hide();
    this.hud.hide();
    this.players.forEach((p) => p.remove());
    this.players.clear();
    this.localPlayerId = null;
  }

  private syncEntities() {
    const players = this.state.getPlayers();
    const ballState = this.state.getBall();

    if (ballState) {
      this.ball.sync(ballState);
    }

    players.forEach((player) => {
      let p = this.players.get(player.id);
      const isLocal = player.id === this.localPlayerId;

      if (!p) {
        const pName = player.name || (player.isAI ? 'AI' : 'Player');
        const pNum = String(Math.floor(Math.random() * 99) + 1);
        if (isLocal) {
          p = new Player(this.sceneManager.scene, this.physics.world, player.team, 'player', 'You', '');
        } else {
          p = new Player(this.sceneManager.scene, this.physics.world, player.team, player.isAI ? 'ai' : 'remote', pName, pNum);
        }
        this.players.set(player.id, p);
      }

      p.sync(player.bike);

      if (isLocal) {
        this.cameraCtrl.follow(p.mesh);
      }
    });
  }

  private updateHUD() {
    const state = this.state;
    this.hud.updateScore(state.blueScore, state.redScore);
    this.hud.updateTimer(state.elapsedSeconds);

    // Update boost gauge
    if (this.localPlayerId) {
      const player = state.players.get(this.localPlayerId);
      if (player) {
        this.hud.updateBoost(player.bike.boost);
      }
    }
  }

  private updateAudio() {
    if (!this.localPlayerId) return;
    const player = this.state.players.get(this.localPlayerId);
    if (!player) return;
    const speed = Math.sqrt(
      player.bike.velocity.x ** 2 +
      player.bike.velocity.y ** 2 +
      player.bike.velocity.z ** 2
    );
    this.audio.updateEngine(speed, player.bike.isBoosting);
  }

  private handleInput(dt: number) {
    if (!this.localPlayerId) return;

    const rawInput = this.input.getRawInput();
    this.inputSequence++;

    const input: PlayerInput = {
      steer: rawInput.steer,
      throttle: rawInput.throttle,
      jump: rawInput.jump,
      sprint: rawInput.sprint,
      kick: rawInput.kick,
      kickDirection: rawInput.kickDirection,
      camera: rawInput.camera,
      sequence: this.inputSequence,
    };

    this.network.sendInput(input);

    const players = this.state.getPlayers();
    const ballState = this.state.getBall();
    this.minimap.update(players, ballState);
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
