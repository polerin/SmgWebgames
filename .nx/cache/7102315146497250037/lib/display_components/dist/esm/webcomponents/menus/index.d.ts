import FindGameMenu from './find_game/find_game_menu.js';
import WelcomeMenu from './welcome_menu/welcome_menu.js';
declare global {
    interface HTMLElementTagNameMap {
        "welcome-menu": WelcomeMenu;
        "find-game-menu": FindGameMenu;
    }
}
export declare function registerMenuElements(): void;
export { default as BaseMenu } from './base_menu.js';
export * from './welcome_menu/index.js';
export * from './find_game/index.js';
//# sourceMappingURL=index.d.ts.map