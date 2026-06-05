export class AudioManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;

  private crowdNoise: AudioBufferSourceNode | null = null;
  private crowdGain: GainNode | null = null;

  private currentIntensity = 0;
  private muted = false;
  private initialized = false;

  init() {
    if (this.initialized) return;
    try {
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.3;
      this.masterGain.connect(this.ctx.destination);
      this.initialized = true;
    } catch {
      console.warn('[Audio] Web Audio API not available');
    }
  }

  private ensureContext() {
    if (this.ctx?.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // ─── Crowd Ambient ───
  startCrowdAmbient() {
    if (!this.ctx || !this.masterGain || this.crowdNoise) return;
    this.ensureContext();

    const bufferSize = Math.floor(this.ctx.sampleRate * 2);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      const t = i / this.ctx.sampleRate;
      data[i] = (Math.random() * 2 - 1) * 0.3;
      if (Math.sin(t * 2 * Math.PI * 0.5) > 0.8) {
        data[i] += (Math.random() * 2 - 1) * 0.15;
      }
    }

    this.crowdNoise = this.ctx.createBufferSource();
    this.crowdNoise.buffer = buffer;
    this.crowdNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 350;
    filter.Q.value = 0.5;

    this.crowdGain = this.ctx.createGain();
    this.crowdGain.gain.value = 0;

    this.crowdNoise.connect(filter);
    filter.connect(this.crowdGain);
    this.crowdGain.connect(this.masterGain);
    this.crowdNoise.start();

    this.crowdGain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 2);

    if (this.ctx) {
      const lfo = this.ctx.createOscillator();
      lfo.frequency.value = 0.08;
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.value = 0.015;
      lfo.connect(lfoGain);
      lfoGain.connect(this.crowdGain.gain);
      lfo.start();
      (this.crowdNoise as any)._lfo = lfo;
    }
  }

  setMatchIntensity(intensity: number) {
    this.currentIntensity = intensity;
    if (!this.crowdGain) return;
    const targetVol = 0.02 + Math.min(1, intensity) * 0.08;
    this.crowdGain.gain.linearRampToValueAtTime(
      targetVol,
      this.ctx!.currentTime + 0.5,
    );
  }

  stopCrowdAmbient() {
    if (!this.crowdNoise) return;
    if (this.crowdGain) {
      this.crowdGain.gain.linearRampToValueAtTime(0, this.ctx!.currentTime + 1);
    }
    setTimeout(() => {
      try {
        this.crowdNoise?.stop();
        (this.crowdNoise as any)?._lfo?.stop();
      } catch {}
      this.crowdNoise = null;
      this.crowdGain = null;
    }, 1200);
  }

  // ─── One-shot Sounds ───
  playBallKick(power: number) {
    if (!this.ctx || !this.masterGain) return;
    this.ensureContext();

    const vol = Math.min(0.12, 0.03 + power * 0.003);

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.08);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  playGoalHorn() {
    if (!this.ctx || !this.masterGain) return;
    this.ensureContext();

    const duration = 1.5;

    const osc1 = this.ctx.createOscillator();
    osc1.type = 'square';
    osc1.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc1.frequency.linearRampToValueAtTime(330, this.ctx.currentTime + duration * 0.3);
    osc1.frequency.linearRampToValueAtTime(440, this.ctx.currentTime + duration * 0.6);

    const gain1 = this.ctx.createGain();
    gain1.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain1.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 0.2);
    gain1.gain.linearRampToValueAtTime(0.06, this.ctx.currentTime + duration);

    const filter1 = this.ctx.createBiquadFilter();
    filter1.type = 'lowpass';
    filter1.frequency.value = 800;

    osc1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(this.masterGain);
    osc1.start();
    osc1.stop(this.ctx.currentTime + duration);

    const osc2 = this.ctx.createOscillator();
    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(330, this.ctx.currentTime);
    osc2.frequency.linearRampToValueAtTime(440, this.ctx.currentTime + duration * 0.4);
    osc2.frequency.linearRampToValueAtTime(554, this.ctx.currentTime + duration * 0.7);

    const gain2 = this.ctx.createGain();
    gain2.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain2.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.2);
    gain2.gain.linearRampToValueAtTime(0.02, this.ctx.currentTime + duration);

    const filter2 = this.ctx.createBiquadFilter();
    filter2.type = 'lowpass';
    filter2.frequency.value = 600;

    osc2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(this.masterGain);
    osc2.start();
    osc2.stop(this.ctx.currentTime + duration);
  }

  playCrowdRoar(intensity: number = 0.5) {
    if (!this.ctx || !this.masterGain) return;
    this.ensureContext();

    const duration = 1.0 + intensity;
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const t = i / this.ctx.sampleRate;
      const envelope = Math.sin(Math.PI * t / duration) * intensity;
      data[i] = (Math.random() * 2 - 1) * 0.5 * envelope;
      if (Math.sin(t * 2 * Math.PI * 2) > 0.7) {
        data[i] += (Math.random() * 2 - 1) * 0.3 * envelope;
      }
    }

    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1000 + intensity * 1000;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.15 * intensity, this.ctx.currentTime + 0.1);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + duration - 0.3);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    source.start();
    source.stop(this.ctx.currentTime + duration);
  }

  playWhistle() {
    if (!this.ctx || !this.masterGain) return;
    this.ensureContext();

    const duration = 0.6;

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(1000, this.ctx.currentTime + 0.1);
    osc.frequency.linearRampToValueAtTime(1200, this.ctx.currentTime + 0.2);
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime + 0.3);
    osc.frequency.linearRampToValueAtTime(800, this.ctx.currentTime + 0.5);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime + 0.25);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 600;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playCountdownBeep() {
    if (!this.ctx || !this.masterGain) return;
    this.ensureContext();

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 600;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  playCountdownGo() {
    if (!this.ctx || !this.masterGain) return;
    this.ensureContext();

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(1200, this.ctx.currentTime + 0.3);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  }

  playMenuClick() {
    if (!this.ctx || !this.masterGain) return;
    this.ensureContext();

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(500, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }

  // ─── Match events ───
  playMatchStart() {
    this.playWhistle();
    this.playCrowdRoar(0.7);
  }

  playGoalScored() {
    this.playGoalHorn();
    setTimeout(() => this.playCrowdRoar(1.0), 200);
  }

  playMatchEnd() {
    setTimeout(() => this.playWhistle(), 500);
    this.playCrowdRoar(0.5);
  }

  stopMatchAudio() {
    this.stopCrowdAmbient();
  }

  // ─── Master control ───
  setMasterVolume(vol: number) {
    if (this.masterGain) {
      this.masterGain.gain.value = Math.max(0, Math.min(1, vol));
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.masterGain) {
      this.masterGain.gain.value = this.muted ? 0 : 0.3;
    }
    return this.muted;
  }

  setVolume(v: number) {
    if (this.masterGain) {
      this.masterGain.gain.value = this.muted ? 0 : Math.max(0, Math.min(1, v));
    }
  }

  dispose() {
    this.stopCrowdAmbient();
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
    this.initialized = false;
  }
}
