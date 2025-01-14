import { SmgPlayer } from '@shieldmaidengames/webgames-shared';

export default class LoggedInEvent extends Event {
    public static EVENT_NAME = 'LoggedInEvent' as const;

    public constructor(public readonly player: SmgPlayer) {
        super(LoggedInEvent.EVENT_NAME, {bubbles: true, composed: true});
    }
}