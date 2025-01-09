import { SmgPlayer, SmgGameSlug, GameInstance } from '@shieldmaidengames/multipipe-shared';

export default class LoadGameCue extends Event {
    public static EVENT_NAME = 'LoadGameCue' as const;

    public constructor(
        public readonly game: SmgGameSlug,
        public readonly player: SmgPlayer,
        public readonly gameInstance: GameInstance
    ) {
        super(LoadGameCue.EVENT_NAME, {bubbles: true});
    }
}