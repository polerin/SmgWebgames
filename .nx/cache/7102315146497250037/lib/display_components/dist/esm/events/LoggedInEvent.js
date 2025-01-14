class LoggedInEvent extends Event {
    constructor(player) {
        super(LoggedInEvent.EVENT_NAME, { bubbles: true, composed: true });
        this.player = player;
    }
}
LoggedInEvent.EVENT_NAME = 'LoggedInEvent';
export default LoggedInEvent;
//# sourceMappingURL=LoggedInEvent.js.map