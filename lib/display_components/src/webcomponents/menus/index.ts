import FindGameMenu from './find_game/find_game_menu.js';
import WelcomeMenu from './welcome_menu/welcome_menu.js';

// Register all of the components with the window object
declare global {

  interface HTMLElementTagNameMap {
    "welcome-menu": WelcomeMenu;
    "find-game-menu": FindGameMenu;
  }
}

export function registerMenuElements() {
    console.log('registering multipipe menu elements');
    WelcomeMenu.prototype;
    FindGameMenu.prototype;
}

export { default as BaseMenu } from './base_menu.js';
export * from './welcome_menu/index.js';
export * from './find_game/index.js';