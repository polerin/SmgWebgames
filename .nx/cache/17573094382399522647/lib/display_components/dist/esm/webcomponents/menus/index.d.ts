import WelcomeMenu from './welcome_menu/welcome_menu.js';
declare global {
    interface HTMLElementTagNameMap {
        "welcome-menu": WelcomeMenu;
    }
}
export declare function registerMenuElements(): void;
export { default as BaseMenu } from './base_menu.js';
export * from './welcome_menu/index.js';
//# sourceMappingURL=index.d.ts.map