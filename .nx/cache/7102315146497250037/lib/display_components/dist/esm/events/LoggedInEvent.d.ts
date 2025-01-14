import { SmgPlayer } from '@shieldmaidengames/webgames-shared';
export default class LoggedInEvent extends Event {
    readonly player: SmgPlayer;
    static EVENT_NAME: "LoggedInEvent";
    constructor(player: SmgPlayer);
}
//# sourceMappingURL=LoggedInEvent.d.ts.map