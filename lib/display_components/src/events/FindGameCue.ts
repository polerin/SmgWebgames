import { SmgUser } from '@shieldmaidengames/webgames-shared';

export default class FindGameCue extends Event {
    public static EVENT_NAME = 'FindGameCue' as const;

    public constructor(public readonly user: SmgUser) {
        super(FindGameCue.EVENT_NAME);
    }
}