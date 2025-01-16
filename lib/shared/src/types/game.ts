import { SmgHostedAppDefinition, SmgUser } from './smg_core.js';

export type GameInstance = {
    game: SmgHostedAppDefinition;
    gameInstanceId: string;
    gameName: string;
    state: unknown;
    gameData: unknown;
    players: SmgUser[];
}

export type DevInstance = GameInstance & {
    devPurpose: string;
}