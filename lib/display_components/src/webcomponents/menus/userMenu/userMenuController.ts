import BaseInjectableController from '../../base_injectable_controller.js';
import { UserMenuDeps } from './definitions.js';
import UserMenu from './userMenu.js';

export default class WelcomeController 
    extends BaseInjectableController<UserMenuDeps>
{
    protected override host?: UserMenu;

    protected override addListeners(): void {
        // this.addEventListener(LogInCue.EVENT_NAME, this.handleLogInCue);
    }
}