import { SmgHostedAppDefinition, SmgPlayer } from './smg_core.js';

export type GameInstance = {
    game: SmgHostedAppDefinition;
    gameInstanceId: string;
    gameName: string;
    state: unknown;
    gameData: unknown;
    players: SmgPlayer[];
}

export type DevInstance = GameInstance & {
    devPurpose: string;
}