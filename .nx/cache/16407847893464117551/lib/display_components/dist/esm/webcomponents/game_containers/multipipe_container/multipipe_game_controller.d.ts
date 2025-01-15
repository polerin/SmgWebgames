import BaseGameContainer from '../base_game_container.js';
import BaseGameController from '../base_game_controller.js';
import { MultipipeGameControllerConfig } from './definitions.js';
export default class MultipipeGameController extends BaseGameController<BaseGameContainer, MultipipeGameControllerConfig> {
    protected config: {
        gameJsPath: string;
    };
    constructor(config: Partial<MultipipeGameControllerConfig>);
    hostConnected(): void;
}
//# sourceMappingURL=multipipe_game_controller.d.ts.map