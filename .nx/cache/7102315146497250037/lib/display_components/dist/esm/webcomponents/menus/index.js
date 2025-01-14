import FindGameMenu from './find_game/find_game_menu.js';
import WelcomeMenu from './welcome_menu/welcome_menu.js';
export function registerMenuElements() {
    console.log('registering multipipe menu elements');
    WelcomeMenu.prototype;
    FindGameMenu.prototype;
}
export { default as BaseMenu } from './base_menu.js';
export * from './welcome_menu/index.js';
export * from './find_game/index.js';
//# sourceMappingURL=index.js.map