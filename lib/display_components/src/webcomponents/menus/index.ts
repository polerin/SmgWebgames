import FindGameMenu from './find_game/find_game_menu.js';
import WelcomeMenu from './welcome_menu/welcomeMenu.js';
import MenuContainer from './menuContainer/menuContainer.js';
import UserMenu from './userMenu/userMenu.js';

// Register all of the components with the window object
declare global {

  interface HTMLElementTagNameMap {
    "welcome-menu": WelcomeMenu;
    "find-game-menu": FindGameMenu;
    "menu-container": MenuContainer;
    "user-menu": UserMenu;
  }
}

export function registerMenuElements() {
    console.log('registering appliction host menu elements');

    WelcomeMenu.prototype;
    FindGameMenu.prototype;
    MenuContainer.prototype;
    UserMenu.prototype;
}

export { default as BaseMenu } from './base_menu.js';
export * from './welcome_menu/index.js';
export * from './find_game/index.js';
export * from './menuContainer/index.js';
export * from './userMenu/index.js';