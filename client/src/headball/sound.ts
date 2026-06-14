export class HBSound {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private crowdGain: GainNode | null = null;
  private crowdSource: AudioBufferSourceNode | null = null;
  private _isMuted = false;
  private _inited = false;

  get isMuted() { return this._isMuted; }

  init() {
    if (this._inited) return;
    try {
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.4;
      this.masterGain.connect(this.ctx.destination);
      this.startCrowd();
      this._inited = true;
    } catch { /* audio not supported */ }
  }

  private startCrowd() {
    if (!this.ctx || !this.masterGain) return;
    const ctx = this.ctx;
    const sr = ctx.sampleRate;
    const len = sr * 4;
    const buf = ctx.createBuffer(1, len, sr);
    const data = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      last = (last + (Math.random() - 0.5) * 0.4) * 0.98;
      data[i] = last;
    }

    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;

    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 600;
    bp.Q.value = 0.8;

    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 200;

    this.crowdGain = ctx.createGain();
    this.crowdGain.gain.value = 0.08;

    src.connect(bp);
    bp.connect(hp);
    hp.connect(this.crowdGain);
    this.crowdGain.connect(this.masterGain);
    src.start();
    this.crowdSource = src;
  }

  private stopCrowd() {
    if (this.crowdSource) {
      try { this.crowdSource.stop(); } catch {}
      this.crowdSource = null;
    }
    this.crowdGain = null;
  }

  playCheer() {
    if (!this.ctx || !this.masterGain || this._isMuted) return;
    const ctx = this.ctx;

    if (this.crowdGain) {
      this.crowdGain.gain.cancelScheduledValues(ctx.currentTime);
      this.crowdGain.gain.setValueAtTime(this.crowdGain.gain.value, ctx.currentTime);
      this.crowdGain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.1);
      this.crowdGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 2.5);
    }

    for (let i = 0; i < 3; i++) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 700 + Math.random() * 600;
      g.gain.setValueAtTime(0.03, ctx.currentTime + i * 0.15);
      g.gain.linearRampToValueAtTime(0, ctx.currentTime + i * 0.15 + 0.6);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(ctx.currentTime + i * 0.15);
      osc.stop(ctx.currentTime + i * 0.15 + 0.6);
    }
  }

  playKick() {
    if (!this.ctx || !this.masterGain || this._isMuted) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(120, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.08);
    g.gain.setValueAtTime(0.12, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.08);
    osc.connect(g);
    g.connect(this.masterGain);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  }

  playWhistle() {
    if (!this.ctx || !this.masterGain || this._isMuted) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(950, ctx.currentTime + 0.2);
    osc.frequency.linearRampToValueAtTime(780, ctx.currentTime + 0.4);
    g.gain.setValueAtTime(0.08, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
    osc.connect(g);
    g.connect(this.masterGain);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
  }

  toggleMute() {
    this._isMuted = !this._isMuted;
    if (this.masterGain) {
      this.masterGain.gain.value = this._isMuted ? 0 : 0.4;
    }
    return this._isMuted;
  }

  destroy() {
    this.stopCrowd();
    if (this.ctx) {
      try { this.ctx.close(); } catch {}
      this.ctx = null;
    }
    this.masterGain = null;
    this._inited = false;
  }
}

export const sound = new HBSound();
