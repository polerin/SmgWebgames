import { SmgGameDefinition, SmgPlayer } from '@shieldmaidengames/webgames-shared';
export default class StartNewGameCue extends Event {
    readonly player: SmgPlayer;
    readonly game: SmgGameDefinition;
    static EVENT_NAME: "StartNewGameCue";
    constructor(player: SmgPlayer, game: SmgGameDefinition);
}
//# sourceMappingURL=StartNewGameCue.d.ts.map