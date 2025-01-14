class StartNewGameCue extends Event {
    constructor(player, game) {
        super(StartNewGameCue.EVENT_NAME);
        this.player = player;
        this.game = game;
    }
}
StartNewGameCue.EVENT_NAME = 'StartNewGameCue';
export default StartNewGameCue;
//# sourceMappingURL=StartNewGameCue.js.map