import { SmgGameDefinition, SmgPlayer } from '@shieldmaidengames/multipipe-shared';

export default class StartNewGameCue extends Event {
    public static EVENT_NAME = 'StartNewGameCue' as const;

    public constructor(
        public readonly player: SmgPlayer,
        public readonly game: SmgGameDefinition
    ) {
        super(StartNewGameCue.EVENT_NAME);
    }
}