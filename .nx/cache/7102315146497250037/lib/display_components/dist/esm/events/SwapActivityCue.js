class SwapActivityCue extends Event {
    constructor(activityName) {
        super(SwapActivityCue.EVENT_NAME, { bubbles: true });
        this.activityName = activityName;
    }
}
SwapActivityCue.EVENT_NAME = 'SwapActivityCue';
export default SwapActivityCue;
//# sourceMappingURL=SwapActivityCue.js.map