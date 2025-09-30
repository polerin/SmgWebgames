import { SmgUser } from '@shieldmaidengames/webgames-shared';

export default class LoggedInEvent extends Event {
    public static EVENT_NAME = 'LoggedInEvent' as const;
    public readonly name = LoggedInEvent.EVENT_NAME;
    public readonly data: {
        user: SmgUser;
    };

    public constructor(user: SmgUser) {
        super(LoggedInEvent.EVENT_NAME, {bubbles: true, composed: true});
        this.data = {user};
    }
}