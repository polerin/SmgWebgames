class FindGameCue extends Event {
    constructor(player) {
        super(FindGameCue.EVENT_NAME);
        this.player = player;
    }
}
FindGameCue.EVENT_NAME = 'FindGameCue';
export default FindGameCue;
//# sourceMappingURL=FindGameCue.js.map