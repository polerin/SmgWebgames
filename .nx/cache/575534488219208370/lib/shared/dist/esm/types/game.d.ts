import { SmgGameDefinition, SmgPlayer } from './smg_core.js';
export type GameInstance = {
    game: SmgGameDefinition;
    gameInstanceId: string;
    gameName: string;
    state: unknown;
    gameData: unknown;
    players: SmgPlayer[];
};
export type DevInstance = GameInstance & {
    devPurpose: string;
};
//# sourceMappingURL=game.d.ts.map