class LoadGameCue extends Event {
    constructor(game, player, gameInstance) {
        super(LoadGameCue.EVENT_NAME, { bubbles: true });
        this.game = game;
        this.player = player;
        this.gameInstance = gameInstance;
    }
}
LoadGameCue.EVENT_NAME = 'LoadGameCue';
export default LoadGameCue;
//# sourceMappingURL=LoadGameCue.js.map