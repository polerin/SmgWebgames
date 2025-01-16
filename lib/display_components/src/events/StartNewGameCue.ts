import { SmgHostedAppDefinition, SmgUser } from '@shieldmaidengames/webgames-shared';

export default class StartNewGameCue extends Event {
    public static EVENT_NAME = 'StartNewGameCue' as const;

    public constructor(
        public readonly user: SmgUser,
        public readonly game: SmgHostedAppDefinition
    ) {
        super(StartNewGameCue.EVENT_NAME);
    }
}