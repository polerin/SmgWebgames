import BaseGameContainer from './base_game_container.js';
export default class BaseGameController {
    addHost(host) {
        if (this.host !== undefined) {
            throw new Error('Attempting to add host to an already assigned controller');
        }
        if (!(host instanceof BaseGameContainer)) {
            throw new Error('Attempting to add a non-container host to the game controller');
        }
        // @todo this could do with more checking honestly.  Problem is circular references
        this.host = host;
    }
    hostConnected() {
        this.loadGameJs();
    }
    loadGameJs() {
        if (this.host?.jsPath) {
            this.addGameScriptTag(this.host.jsPath);
            return;
        }
        this.addGameScriptTag(this.config.gameJsPath);
    }
    addGameScriptTag(path) {
        const gameJsScript = document.createElement('script');
        gameJsScript.src = path;
        gameJsScript.type = 'module';
        console.info('Appending game js script tag to head', path);
        document.head.appendChild(gameJsScript);
    }
    buildConfig(config) {
        this.config = { ...this.config, ...config };
    }
}
//# sourceMappingURL=base_game_controller.js.map