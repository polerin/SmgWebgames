import { SmgPlayer, SmgGameSlug, GameInstance } from '@shieldmaidengames/multipipe-shared';
export default class LoadGameCue extends Event {
    readonly game: SmgGameSlug;
    readonly player: SmgPlayer;
    readonly gameInstance: GameInstance;
    static EVENT_NAME: "LoadGameCue";
    constructor(game: SmgGameSlug, player: SmgPlayer, gameInstance: GameInstance);
}
//# sourceMappingURL=LoadGameCue.d.ts.map