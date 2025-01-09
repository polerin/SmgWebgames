import MultipipeGameContainer from './multipipe_container/multipipe_game_container.js';

export * from './multipipe_container/index.js';

declare global {
    interface HTMLElementTagNameMap {
        'mutipipe-game-container': MultipipeGameContainer;
    }
}

export function registerGameContainerElements() {
    MultipipeGameContainer.prototype;
}

export { default as BaseGameContainer } from './base_game_container.js';
export { default as BaseGameController } from './base_game_controller.js';

export * from './multipipe_container/index.js';
export * from './definitions.js';