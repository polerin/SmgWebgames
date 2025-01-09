import { ReactiveController, ReactiveControllerHost } from 'lit';
import BaseGameContainer from './base_game_container.js';
import { GameControllerConfig } from './definitions.js';
export default abstract class BaseGameController<
    ContainerType extends BaseGameContainer,
    ConfigType extends GameControllerConfig = GameControllerConfig
> implements ReactiveController {
   
    protected host?: ContainerType;
    protected abstract config: ConfigType;
    
    public addHost(host: ReactiveControllerHost): void {
        if (this.host !== undefined) {
            throw new Error('Attempting to add host to an already assigned controller');
        }

        if (!(host instanceof BaseGameContainer)) {
            throw new Error('Attempting to add a non-container host to the game controller');
        }

        // @todo this could do with more checking honestly.  Problem is circular references
        this.host = <ContainerType>host;
    }

    public hostConnected(): void {
        this.loadGameJs();
    }

    public loadGameJs(): void {
        if (this.host?.jsPath) {
            this.addGameScriptTag(this.host.jsPath);

            return;
        }

        this.addGameScriptTag(this.config.gameJsPath);
    }

    protected addGameScriptTag(path: string) {        
        const gameJsScript = document.createElement('script');
        gameJsScript.src = path;
        gameJsScript.type = 'module';

        console.info('Appending game js script tag to head', path);

        document.head.appendChild(gameJsScript);
    }

    protected buildConfig(config: Partial<ConfigType>) {
        this.config = {... this.config, ... config};
    }

}
