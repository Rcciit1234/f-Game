import { PlayerState, BallState, MatchState, Team } from '../../../shared/index.js';

export class GameState {
  public matchId: string = '';
  public state: MatchState = MatchState.Lobby;
  public players: Map<string, PlayerState> = new Map();
  public ball: BallState = { position: { x: 0, y: 0.22, z: 0 }, velocity: { x: 0, y: 0, z: 0 }, spin: { x: 0, y: 0, z: 0 }, lastTouchBy: null, lastTouchTeam: null };
  public blueScore = 0;
  public redScore = 0;
  public elapsedSeconds = 0;
  public kickoffTimer = 0;

  // Player switching state
  public currentPlayerId: string | null = null;
  public myTeam: Team | null = null;
  public myTeamPlayerIds: string[] = [];

  update(data: any) {
    this.matchId = data.id || this.matchId;
    this.state = data.state ?? this.state;
    this.blueScore = data.blueScore ?? this.blueScore;
    this.redScore = data.redScore ?? this.redScore;
    this.elapsedSeconds = data.elapsedSeconds ?? this.elapsedSeconds;
    this.kickoffTimer = data.kickoffTimer ?? this.kickoffTimer;

    if (data.players) {
      this.players.clear();
      Object.entries(data.players).forEach(([id, player]) => {
        this.players.set(id, player as PlayerState);
      });
      this.refreshMyTeamPlayers();
    }

    if (data.ball) {
      this.ball = data.ball as BallState;
    }
  }

  private refreshMyTeamPlayers() {
    if (!this.myTeam) return;
    const teamPlayers: { id: string; jersey: number }[] = [];
    this.players.forEach((p, id) => {
      if (p.team === this.myTeam) {
        teamPlayers.push({ id, jersey: p.jerseyNumber });
      }
    });
    teamPlayers.sort((a, b) => a.jersey - b.jersey);
    this.myTeamPlayerIds = teamPlayers.map(p => p.id);

    // If currentPlayerId is no longer valid, switch to first teammate
    if (this.currentPlayerId && !this.myTeamPlayerIds.includes(this.currentPlayerId)) {
      this.currentPlayerId = this.myTeamPlayerIds[0] || null;
    }
  }

  setLocalTeam(team: Team) {
    this.myTeam = team;
    this.refreshMyTeamPlayers();
    if (this.myTeamPlayerIds.length > 0 && !this.currentPlayerId) {
      this.currentPlayerId = this.myTeamPlayerIds[0];
    }
  }

  switchToPlayer(playerId: string): boolean {
    if (!this.myTeamPlayerIds.includes(playerId)) return false;
    this.currentPlayerId = playerId;
    return true;
  }

  getNextPlayerId(): string | null {
    if (!this.currentPlayerId || this.myTeamPlayerIds.length === 0) return null;
    const idx = this.myTeamPlayerIds.indexOf(this.currentPlayerId);
    const nextIdx = (idx + 1) % this.myTeamPlayerIds.length;
    return this.myTeamPlayerIds[nextIdx];
  }

  getCurrentPlayer(): PlayerState | undefined {
    return this.currentPlayerId ? this.players.get(this.currentPlayerId) : undefined;
  }

  getPlayers(): Map<string, PlayerState> {
    return this.players;
  }

  getBall(): BallState {
    return this.ball;
  }

  getLocalPlayer(localId: string): PlayerState | undefined {
    return this.players.get(localId);
  }

  getTeamPlayers(team: string): PlayerState[] {
    const result: PlayerState[] = [];
    this.players.forEach((p) => {
      if (p.team === team) result.push(p);
    });
    return result;
  }
}
