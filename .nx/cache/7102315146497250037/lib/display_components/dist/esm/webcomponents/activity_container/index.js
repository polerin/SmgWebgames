import { FindGameActivity } from './find_game_activity/index.js';
export function registerActivityContainers() {
    console.info("registering activity containers");
    FindGameActivity.prototype;
}
export { default as BaseActivityContainer } from './base_activity_container.js';
export * from './find_game_activity/index.js';
//# sourceMappingURL=index.js.map