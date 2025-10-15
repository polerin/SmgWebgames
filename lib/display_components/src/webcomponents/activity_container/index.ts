import { FindGameActivity } from './find_game_activity/index.js';

declare global {
    interface HTMLElementTagNameMap {
        'find-game-activity': FindGameActivity;
    }
}

export function registerActivityContainers(): void {
    console.info("registering activity containers");
    FindGameActivity.prototype;
}

export {default as BaseActivityContainer } from './baseActivityContainer.js';

export * from './find_game_activity/index.js';