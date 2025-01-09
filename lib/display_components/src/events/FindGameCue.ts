import { SmgPlayer } from '@shieldmaidengames/multipipe-shared';

export default class FindGameCue extends Event {
    public static EVENT_NAME = 'FindGameCue' as const;

    public constructor(public readonly player: SmgPlayer) {
        super(FindGameCue.EVENT_NAME);
    }
}