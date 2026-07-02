import { HBMatchState, HBInput, HB_MATCH } from '../../../shared/headball.js';
import { HBRenderer } from './renderer.js';
import { HBControls } from './controls.js';
import { HBMatch, getAIInput } from './match.js';
import { createPlayer } from './player.js';
import { HBHeadBallNetwork, HBOnlineStateData } from './network.js';
import { sound } from './sound.js';

type GameMode = 'local_ai' | 'online';

export class HBGame {
  private container: HTMLElement;
  private renderer: HBRenderer;
  private controls: HBControls;
  private match: HBMatch | null = null;
  private mode: GameMode = 'local_ai';
  private animId: number = 0;
  private lastTime: number = 0;
  private localInput: HBInput = { left: false, right: false, jump: false, kick: false, kickHold: false, superKick: false, defence: false, skyLob: false };
  private running = false;
  private onExit: () => void;

  private network: HBHeadBallNetwork | null = null;
  private onlineState: HBMatchState | null = null;
  private exitTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(container: HTMLElement, onExit: () => void) {
    this.container = container;
    this.renderer = new HBRenderer(container);
    this.controls = new HBControls();
    this.onExit = onExit;
    sound.init();
    this.controls.onMuteToggle = () => sound.toggleMute();
  }

  start(mode: GameMode = 'local_ai') {
    this.mode = mode;
    this.running = true;

    if (mode === 'local_ai') {
      this.match = new HBMatch('player1', 'You', 'player2', 'AI');
      this.match.setCallbacks(
        (h, a, team) => { sound.playCheer(); if (team) sound.playChant(team); },
        (s) => {
          if (s === 'countdown') sound.playWhistle();
          if (s === 'playing') sound.playWhistle();
          if (s === 'ended') {
            sound.playCheer();
            this.exitTimer = setTimeout(() => this.cleanup(), 3000);
          }
        }
      );
      this.match.onDefence = (x, y) => { this.renderer.spawnDefencePuff(x, y); };
      this.match.onSuperKick = (x, y, dir) => { this.renderer.triggerSuperKickFlash(x, y, dir); };
      this.match.onKick = () => {};
      this.controls.onInput((input) => {
        this.localInput = { ...input };
      });
      this.match.start();
      this.lastTime = performance.now();
      this.loop(this.lastTime);

      const escHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') this.cleanup();
      };
      window.addEventListener('keydown', escHandler);
      (this as any)._escHandler = escHandler;
    }
  }

  startOnline(network: HBHeadBallNetwork) {
    this.mode = 'online';
    this.running = true;
    this.network = network;

    this.controls.onInput((input) => {
      this.localInput = { ...input };
    });

    network.onStateUpdate = (data: HBOnlineStateData) => {
      this.onlineState = this.buildState(data);
    };

    network.onCountdown = (time: number) => {
      if (this.onlineState) {
        this.onlineState.state = 'countdown';
        this.onlineState.countdownTimer = time;
      }
    };

    network.onGoal = (data) => {
      sound.playCheer();
      if (data.team === 'home' || data.team === 'away') sound.playChant(data.team);
      if (this.onlineState) {
        this.onlineState.homeScore = data.homeScore;
        this.onlineState.awayScore = data.awayScore;
        this.onlineState.state = 'goal_scored';
      }
      setTimeout(() => {
        if (this.onlineState) {
          this.onlineState.state = 'playing';
        }
      }, 2000);
    };

    network.onMatchEnd = () => {
      if (this.onlineState) {
        this.onlineState.state = 'ended';
      }
      this.exitTimer = setTimeout(() => this.cleanup(), 3000);
    };

    network.onDisconnected = () => {
      this.cleanup();
    };

    this.lastTime = performance.now();
    this.loopOnline(this.lastTime);

    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') this.cleanup();
    };
    window.addEventListener('keydown', escHandler);
    (this as any)._escHandler = escHandler;
  }

  private buildState(data: HBOnlineStateData): HBMatchState {
    return {
      id: '',
      state: data.state as HBMatchState['state'],
      homePlayer: data.homePlayer,
      awayPlayer: data.awayPlayer,
      ball: data.ball,
      homeScore: data.homeScore,
      awayScore: data.awayScore,
      elapsedSeconds: data.elapsedSeconds,
      countdownTimer: data.countdownTimer,
      matchDuration: HB_MATCH.DURATION,
    };
  }

  private loop = (time: number) => {
    if (!this.running) return;
    sound.ensureResumed();
    const dt = Math.min((time - this.lastTime) / 1000, 0.05);
    this.lastTime = time;

    if (this.match) {
      const aiInput = getAIInput(
        this.match.state.awayPlayer,
        this.match.state.homePlayer,
        this.match.state.ball
      );
      this.match.update(dt, this.localInput, aiInput);
      this.renderer.render(this.match.state);
      this.renderer.drawTouchControls(sound.isMuted);
    }

    this.animId = requestAnimationFrame(this.loop);
  };

  private loopOnline = (time: number) => {
    if (!this.running) return;
    sound.ensureResumed();
    this.lastTime = time;

    if (this.network) {
      this.network.sendInput(this.localInput);
    }

    if (this.onlineState) {
      this.renderer.render(this.onlineState);
      this.renderer.drawTouchControls(sound.isMuted);
    }

    this.animId = requestAnimationFrame(this.loopOnline);
  };

  private cleanup() {
    this.running = false;
    cancelAnimationFrame(this.animId);
    if (this.exitTimer) clearTimeout(this.exitTimer);
    this.match?.destroy();
    this.controls.destroy();
    sound.destroy();
    const handler = (this as any)._escHandler;
    if (handler) window.removeEventListener('keydown', handler);
    this.container.innerHTML = '';
    this.onExit();
  }
}
