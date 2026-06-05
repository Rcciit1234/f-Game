const SETTINGS_KEY = 'football_settings';

interface JoystickOffsets {
  joystickX: number;
  joystickY: number;
  actionX: number;
  actionY: number;
}

interface SettingsData {
  sound: number;
  brightness: number;
  joystick: JoystickOffsets;
}

function loadSettings(): SettingsData {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { sound: 80, brightness: 0, joystick: { joystickX: 0, joystickY: 0, actionX: 0, actionY: 0 } };
}

function saveSettings(data: SettingsData) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(data));
}

export { SETTINGS_KEY, loadSettings, saveSettings };
export type { SettingsData, JoystickOffsets };

export class SettingsScreen {
  private container: HTMLDivElement;
  private soundSlider: HTMLInputElement;
  private brightnessSlider: HTMLInputElement;
  private joystickXSlider: HTMLInputElement;
  private joystickYSlider: HTMLInputElement;
  private actionXSlider: HTMLInputElement;
  private actionYSlider: HTMLInputElement;
  private soundVal: HTMLSpanElement;
  private brightnessVal: HTMLSpanElement;
  private jxVal: HTMLSpanElement;
  private jyVal: HTMLSpanElement;
  private axVal: HTMLSpanElement;
  private ayVal: HTMLSpanElement;
  private brightnessOverlay: HTMLDivElement;
  private data: SettingsData;

  public onBack: (() => void) | null = null;
  public onSoundChange: ((val: number) => void) | null = null;
  public onBrightnessChange: ((val: number) => void) | null = null;
  public onJoystickChange: ((offsets: JoystickOffsets) => void) | null = null;

  constructor() {
    this.data = loadSettings();

    // Brightness overlay (global, applied immediately)
    this.brightnessOverlay = document.createElement('div');
    this.brightnessOverlay.id = 'brightness-overlay';
    this.brightnessOverlay.style.cssText = `
      position: fixed; inset: 0; z-index: 50; pointer-events: none;
      background: rgba(0,0,0,${this.data.brightness / 100 * 0.5});
      transition: background 0.2s;
    `;
    if (!document.getElementById('brightness-overlay')) {
      document.body.appendChild(this.brightnessOverlay);
    }

    this.container = document.createElement('div');
    this.container.id = 'settings-screen';
    this.container.style.cssText = `
      position: fixed; inset: 0; z-index: 560;
      display: none; flex-direction: column;
      background: rgba(5,5,10,0.97);
      font-family: 'Segoe UI', system-ui, sans-serif;
      padding: max(20px, env(safe-area-inset-top, 0px) + 10px)
               max(16px, env(safe-area-inset-right, 0px))
               max(20px, env(safe-area-inset-bottom, 0px))
               max(16px, env(safe-area-inset-left, 0px));
      overflow-y: auto;
    `;

    // Header
    const header = document.createElement('div');
    header.style.cssText = `display: flex; align-items: center; gap: 12px; margin-bottom: 24px;`;

    const backBtn = document.createElement('button');
    backBtn.textContent = '← BACK';
    backBtn.style.cssText = `
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.6); padding: 8px 16px; font-size: 0.75rem;
      font-weight: 600; border-radius: 8px; cursor: pointer; transition: all 0.2s;
      letter-spacing: 1px;
    `;
    backBtn.addEventListener('click', () => {
      this.saveCurrent();
      this.onBack?.();
    });

    const title = document.createElement('h2');
    title.style.cssText = `
      font-size: 1.3rem; font-weight: 900;
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    `;
    title.textContent = 'Settings';

    header.appendChild(backBtn);
    header.appendChild(title);
    this.container.appendChild(header);

    // Section helper
    const addSection = (icon: string, label: string): HTMLDivElement => {
      const sec = document.createElement('div');
      sec.style.cssText = `
        background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
        border-radius: 16px; padding: 20px; margin-bottom: 16px;
      `;
      const secTitle = document.createElement('div');
      secTitle.style.cssText = `
        font-size: 0.8rem; font-weight: 700; color: #fbbf24; margin-bottom: 16px;
        letter-spacing: 1px;
      `;
      secTitle.textContent = `${icon} ${label}`;
      sec.appendChild(secTitle);
      this.container.appendChild(sec);
      return sec;
    };

    const addSlider = (
      parent: HTMLDivElement,
      label: string,
      value: number,
      onChange: (v: number) => void,
      valDisplay: HTMLSpanElement,
    ): HTMLInputElement => {
      const row = document.createElement('div');
      row.style.cssText = `display: flex; align-items: center; gap: 12px; margin-bottom: 10px;`;

      const lbl = document.createElement('div');
      lbl.style.cssText = `color: rgba(255,255,255,0.5); font-size: 0.75rem; min-width: 90px;`;
      lbl.textContent = label;

      const input = document.createElement('input');
      input.type = 'range';
      input.min = '0';
      input.max = '100';
      input.value = String(value);
      input.style.cssText = `
        flex: 1; height: 4px; -webkit-appearance: none; appearance: none;
        background: linear-gradient(90deg, #fbbf24, #f59e0b);
        border-radius: 2px; outline: none;
      `;
      input.addEventListener('input', () => {
        const v = parseInt(input.value);
        valDisplay.textContent = String(v);
        onChange(v);
      });

      if (!valDisplay) {
        valDisplay = document.createElement('span');
      }
      valDisplay.style.cssText = `color: rgba(255,255,255,0.3); font-size: 0.75rem; min-width: 28px; text-align: right;`;
      valDisplay.textContent = String(value);

      row.appendChild(lbl);
      row.appendChild(input);
      row.appendChild(valDisplay);
      parent.appendChild(row);
      return input;
    };

    // 1. Sound
    const soundSec = addSection('🔊', 'Sound');
    this.soundVal = document.createElement('span');
    this.soundSlider = addSlider(soundSec, 'Volume', this.data.sound, (v) => {
      this.data.sound = v;
      this.onSoundChange?.(v);
    }, this.soundVal);
    this.soundVal.textContent = String(this.data.sound);

    // 2. Brightness
    const brightSec = addSection('☀️', 'Brightness');
    this.brightnessVal = document.createElement('span');
    this.brightnessSlider = addSlider(brightSec, 'Darken', this.data.brightness, (v) => {
      this.data.brightness = v;
      this.brightnessOverlay.style.background = `rgba(0,0,0,${v / 100 * 0.5})`;
      this.onBrightnessChange?.(v);
    }, this.brightnessVal);
    this.brightnessVal.textContent = String(this.data.brightness);

    // 3. Joystick Position
    const joySec = addSection('🕹️', 'Joystick Position');
    const joyHint = document.createElement('div');
    joyHint.style.cssText = `color: rgba(255,255,255,0.2); font-size: 0.65rem; margin-bottom: 12px;`;
    joyHint.textContent = 'Adjust joystick and button positions on screen';
    joySec.appendChild(joyHint);

    this.jxVal = document.createElement('span');
    this.jyVal = document.createElement('span');
    this.axVal = document.createElement('span');
    this.ayVal = document.createElement('span');

    this.joystickXSlider = addSlider(joySec, 'Joy X', this.data.joystick.joystickX, (v) => {
      this.data.joystick.joystickX = v;
      this.syncJoystick();
    }, this.jxVal);
    this.jxVal.textContent = String(this.data.joystick.joystickX);

    this.joystickYSlider = addSlider(joySec, 'Joy Y', this.data.joystick.joystickY, (v) => {
      this.data.joystick.joystickY = v;
      this.syncJoystick();
    }, this.jyVal);
    this.jyVal.textContent = String(this.data.joystick.joystickY);

    this.actionXSlider = addSlider(joySec, 'Btns X', this.data.joystick.actionX, (v) => {
      this.data.joystick.actionX = v;
      this.syncJoystick();
    }, this.axVal);
    this.axVal.textContent = String(this.data.joystick.actionX);

    this.actionYSlider = addSlider(joySec, 'Btns Y', this.data.joystick.actionY, (v) => {
      this.data.joystick.actionY = v;
      this.syncJoystick();
    }, this.ayVal);
    this.ayVal.textContent = String(this.data.joystick.actionY);

    document.body.appendChild(this.container);
  }

  private syncJoystick() {
    this.onJoystickChange?.(this.data.joystick);
  }

  private saveCurrent() {
    saveSettings(this.data);
  }

  show() {
    // Reload from localStorage in case settings changed externally
    this.data = loadSettings();

    this.soundSlider.value = String(this.data.sound);
    this.soundVal.textContent = String(this.data.sound);
    this.brightnessSlider.value = String(this.data.brightness);
    this.brightnessVal.textContent = String(this.data.brightness);
    this.joystickXSlider.value = String(this.data.joystick.joystickX);
    this.jxVal.textContent = String(this.data.joystick.joystickX);
    this.joystickYSlider.value = String(this.data.joystick.joystickY);
    this.jyVal.textContent = String(this.data.joystick.joystickY);
    this.actionXSlider.value = String(this.data.joystick.actionX);
    this.axVal.textContent = String(this.data.joystick.actionX);
    this.actionYSlider.value = String(this.data.joystick.actionY);
    this.ayVal.textContent = String(this.data.joystick.actionY);

    this.brightnessOverlay.style.display = '';
    this.container.style.display = 'flex';
  }

  hide() {
    this.saveCurrent();
    this.brightnessOverlay.style.display = 'none';
    this.container.style.display = 'none';
  }
}
