import { SmgPlayer, SmgHostedAppSlug, GameInstance } from '@shieldmaidengames/webgames-shared';
export default class LoadGameCue extends Event {
    readonly game: SmgHostedAppSlug;
    readonly player: SmgPlayer;
    readonly gameInstance: GameInstance;
    static EVENT_NAME: "LoadGameCue";
    constructor(game: SmgHostedAppSlug, player: SmgPlayer, gameInstance: GameInstance);
}
//# sourceMappingURL=LoadGameCue.d.ts.map