export class HBSound {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private bgmGain: GainNode | null = null;
  private bgmSource: AudioBufferSourceNode | null = null;
  private _isMuted = false;
  private _inited = false;

  get isMuted() { return this._isMuted; }

  init() {
    if (this._inited) return;
    try {
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.5;
      this.masterGain.connect(this.ctx.destination);
      this._inited = true;
      this.playMenuMusic();
    } catch { /* audio not supported */ }
  }

  ensureResumed() {
    if (this.ctx?.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playMenuMusic() {
    if (!this.ctx || !this.masterGain) return;
    this.ensureResumed();
    fetch('/song.mp3')
      .then(r => r.arrayBuffer())
      .then(buf => this.ctx!.decodeAudioData(buf))
      .then(audio => {
        this.stopMenuMusic();
        this.bgmGain = this.ctx!.createGain();
        this.bgmGain.gain.value = 0.35;
        this.bgmGain.connect(this.masterGain!);
        const src = this.ctx!.createBufferSource();
        src.buffer = audio;
        src.loop = true;
        src.connect(this.bgmGain);
        src.start();
        this.bgmSource = src;
      })
      .catch(() => {});
  }

  private stopMenuMusic() {
    if (this.bgmSource) {
      try { this.bgmSource.stop(); } catch {}
      this.bgmSource.disconnect();
      this.bgmSource = null;
    }
    if (this.bgmGain) {
      this.bgmGain.disconnect();
      this.bgmGain = null;
    }
  }

  playCheer() {
    if (!this.ctx || !this.masterGain || this._isMuted) return;
    this.ensureResumed();
    const ctx = this.ctx;

    for (let i = 0; i < 3; i++) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 700 + Math.random() * 600;
      g.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.15);
      g.gain.linearRampToValueAtTime(0, ctx.currentTime + i * 0.15 + 0.6);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(ctx.currentTime + i * 0.15);
      osc.stop(ctx.currentTime + i * 0.15 + 0.6);
    }
  }

  playKick() {
    if (!this.ctx || !this.masterGain || this._isMuted) return;
    this.ensureResumed();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(120, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.08);
    g.gain.setValueAtTime(0.2, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.08);
    osc.connect(g);
    g.connect(this.masterGain);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  }

  playWhistle() {
    if (!this.ctx || !this.masterGain || this._isMuted) return;
    this.ensureResumed();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(950, ctx.currentTime + 0.2);
    osc.frequency.linearRampToValueAtTime(780, ctx.currentTime + 0.4);
    g.gain.setValueAtTime(0.15, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
    osc.connect(g);
    g.connect(this.masterGain);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
  }

  playChant(team: 'home' | 'away') {
    if (this._isMuted || !window.speechSynthesis) return;
    this.ensureResumed();
    window.speechSynthesis.cancel();
    const text = team === 'home' ? 'Go Argentina' : 'Go Spain';
    const voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < 4; i++) {
      const msg = new SpeechSynthesisUtterance(text);
      const v = voices.find(v => v.lang.startsWith('en')) || voices[i] || null;
      if (v) msg.voice = v;
      msg.rate = 0.85 + Math.random() * 0.35;
      msg.pitch = 0.5 + Math.random() * 0.7;
      msg.volume = 0.8;
      msg.lang = 'en-US';
      setTimeout(() => speechSynthesis.speak(msg), i * 100 + Math.random() * 60);
    }
  }

  toggleMute() {
    this._isMuted = !this._isMuted;
    if (this.masterGain) {
      this.masterGain.gain.value = this._isMuted ? 0 : 0.5;
    }
    return this._isMuted;
  }

  destroy() {
    this.stopMenuMusic();
    if (this.ctx) {
      try { this.ctx.close(); } catch {}
      this.ctx = null;
    }
    this.masterGain = null;
    this._inited = false;
  }
}

export const sound = new HBSound();
