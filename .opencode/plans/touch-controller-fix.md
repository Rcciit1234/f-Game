# Touch Controller & Player Switching Fix Plan

## Files to Modify

### 1. `client/src/input/TouchController.ts` — Major rewrite

**Changes:**
- **Circular button layout**: Replace the rigid 2×3 grid with a diamond/circle layout
  - Kick (80px) — center anchor at bottom-right
  - Pass (56px) — top of circle
  - Defence (52px) — left
  - Boost (52px) — right
  - Switch (48px) — bottom-left
  - **Jump (48px) — new!** bottom-right
- **Fix stuck buttons**: Move `touchend`/`touchcancel` listeners from individual buttons to `window` level. Track each button's touch identifier so release fires even if finger slides off
- **Add jump**: New `_jump` state, jump button in layout, handled as held-state (like sprint)
- **Camera zone**: Stop using `e.preventDefault()` aggressively — only prevent when a camera touch is confirmed

**Layout diagram:**
```
                [Pass]
                 56px

    [Def]      [Kick]      [Boost]
     52px       80px         52px

          [Switch]  [Jump]
           48px     48px
```

### 2. `client/src/input/InputManager.ts` — 1-line fix

- Line 102: Change `jump: false` → `jump: touch.jump`

### 3. `client/src/ui/PlayerSwitcher.ts` — Team detection fix

- Remove unused `myTeamPlayers` filter block (lines 32-36)
- Fix team filter (line 41-44): Use `p.team === this.myTeam` instead of index-based `idx < 6`
- This ensures the switcher shows the correct teammates regardless of player array order

### 4. `client/src/game/Game.ts` — Guard PlayerSwitcher creation

- Line 637: Change `this.playerSwitcher = new PlayerSwitcher()` to `if (!this.playerSwitcher) this.playerSwitcher = new PlayerSwitcher()`
- Prevents leaking a new DOM element every frame

## Detailed TouchController.ts Structure

### Button positioning (circular)

```typescript
private anchorBottom = 180;
private anchorRight = 90;

// [angle, radius, size] relative to anchor
pass:    angle=-PI/2, radius=80, size=56   // top
defence: angle=PI,    radius=75, size=52   // left
boost:   angle=0,     radius=75, size=52   // right
switch:  angle=5PI/6, radius=70, size=48   // bottom-left
jump:    angle=PI/6,  radius=70, size=48   // bottom-right
kick:    center                            // at anchor (80px biggest)
```

### Touch event tracking

```typescript
interface ActionButton {
  btn: HTMLButtonElement;
  key: string;
  touchId: number;   // track which touch finger owns this button
  active: boolean;
}
```

- `touchstart` on each button → store `touchId`, activate state
- `touchend`/`touchcancel` on **window** → match by `touchId`, call `releaseButton()`
- This ensures release fires even if finger slides off the button

### State flags (consumed vs held)

| Flag | Type | Reset |
|------|------|-------|
| `_kick` | one-shot | consumed in `getTouchState()` |
| `_pass` | one-shot | consumed in `getTouchState()` |
| `_defence` | one-shot | consumed in `getTouchState()` |
| `_switch` | one-shot | consumed in `getTouchState()` |
| `_sprint` | held | set true on touchstart, false on touchend |
| `_jump` | held | set true on touchstart, false on touchend |

### TouchState interface (updated)

```typescript
export interface TouchState {
  steer: number;
  throttle: number;
  sprint: boolean;
  jump: boolean;       // NEW
  kick: boolean;
  kickPower: number;
  kickDirection: { x: number; z: number };
  pass: boolean;
  defence: boolean;
  switchPlayer: boolean;
  cameraYaw: number;
  cameraPitch: number;
}
```

## Verification

After changes, run:
```
cd client && npx tsc --noEmit && npx vite build
```
