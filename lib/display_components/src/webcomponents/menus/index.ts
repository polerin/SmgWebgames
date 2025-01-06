import WelcomeMenu from './welcome_menu/welcome_menu.js';

// Register all of the components with the window object
declare global {

  interface HTMLElementTagNameMap {
    "welcome-menu": WelcomeMenu;
  }
}

export function registerMenuElements() {
    console.log('registering multipipe menu elements');
    WelcomeMenu.prototype;
}

export { default as BaseMenu } from './base_menu.js';
export * from './welcome_menu/index.js';