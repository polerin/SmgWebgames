class InjectionCue extends Event {
    constructor(token, callback) {
        super(InjectionCue.EVENT_NAME, { bubbles: true, composed: true });
        this.token = token;
        this.callback = callback;
    }
}
InjectionCue.EVENT_NAME = 'InjectionCueEvent';
export default InjectionCue;
//# sourceMappingURL=InjectionCue.js.map