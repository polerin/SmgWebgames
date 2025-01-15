import BaseInjectableController from '../../base_injectable_controller.js';
import { WelcomeMenuDeps } from './definitions.js';
import WelcomeMenu from './welcome_menu.js';
export default class WelcomeController extends BaseInjectableController<WelcomeMenuDeps> {
    protected host?: WelcomeMenu;
    protected addListeners(): void;
    protected handleLogInCue: (e: Event) => void;
}
//# sourceMappingURL=welcome_controller.d.ts.map