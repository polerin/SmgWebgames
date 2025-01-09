import BaseGameContainer from '../base_game_container.js';
import BaseGameController from '../base_game_controller.js';
import { MultipipeGameControllerConfig } from './definitions.js';

export default class MultipipeGameController 
    extends BaseGameController<BaseGameContainer, MultipipeGameControllerConfig>
{

    protected config = {
        gameJsPath: 'game/index.js',
    };

    public constructor(config: Partial<MultipipeGameControllerConfig>) {
        super();
        this.buildConfig(config);
    }

    public override hostConnected(): void {
        super.hostConnected();

    }
}
