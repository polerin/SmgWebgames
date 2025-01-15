import { SmgHostedAppDefinition, SmgPlayer } from '@shieldmaidengames/webgames-shared';
export default class StartNewGameCue extends Event {
    readonly player: SmgPlayer;
    readonly game: SmgHostedAppDefinition;
    static EVENT_NAME: "StartNewGameCue";
    constructor(player: SmgPlayer, game: SmgHostedAppDefinition);
}
//# sourceMappingURL=StartNewGameCue.d.ts.map