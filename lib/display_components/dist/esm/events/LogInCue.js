class LogInCue extends Event {
    constructor(playerName) {
        super(LogInCue.EVENT_NAME, { bubbles: true, composed: true });
        this.playerName = playerName;
    }
}
LogInCue.EVENT_NAME = 'LogInCue';
export default LogInCue;
//# sourceMappingURL=LogInCue.js.map