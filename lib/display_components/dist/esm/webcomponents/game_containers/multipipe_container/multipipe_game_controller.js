import BaseGameController from '../base_game_controller.js';
export default class MultipipeGameController extends BaseGameController {
    constructor(config) {
        super();
        this.config = {
            gameJsPath: 'game/index.js',
        };
        this.buildConfig(config);
    }
    hostConnected() {
        super.hostConnected();
    }
}
//# sourceMappingURL=multipipe_game_controller.js.map