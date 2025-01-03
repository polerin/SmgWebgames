import { SmgPlayer } from '@shieldmaidengames/multipipe-shared';

export default class FindGameRequest extends Event {
    public static EVENT_NAME = 'FindGameRequest' as const;

    public constructor(public player: SmgPlayer) {
        super(FindGameRequest.EVENT_NAME);
    }
}