import { SmgUser, SmgHostedAppSlug, GameInstance } from '@shieldmaidengames/webgames-shared';

export default class LoadGameCue extends Event {
    public static EVENT_NAME = 'LoadGameCue' as const;

    public constructor(
        public readonly game: SmgHostedAppSlug,
        public readonly user: SmgUser,
        public readonly gameInstance: GameInstance
    ) {
        super(LoadGameCue.EVENT_NAME, {bubbles: true});
    }
}