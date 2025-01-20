import { SmgUser } from './smg_core.js';
import { SmgHostedAppDefinition } from '../hostedApplications/types.js';

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