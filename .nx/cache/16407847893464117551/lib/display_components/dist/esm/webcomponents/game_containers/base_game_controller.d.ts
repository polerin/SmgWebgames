import { ReactiveController, ReactiveControllerHost } from 'lit';
import BaseGameContainer from './base_game_container.js';
import { GameControllerConfig } from './definitions.js';
export default abstract class BaseGameController<ContainerType extends BaseGameContainer, ConfigType extends GameControllerConfig = GameControllerConfig> implements ReactiveController {
    protected host?: ContainerType;
    protected abstract config: ConfigType;
    addHost(host: ReactiveControllerHost): void;
    hostConnected(): void;
    loadGameJs(): void;
    protected addGameScriptTag(path: string): void;
    protected buildConfig(config: Partial<ConfigType>): void;
}
//# sourceMappingURL=base_game_controller.d.ts.map