import { LoggedInEvent, LogInCue } from '../../../events/index.js';
import BaseInjectableController from '../../base_injectable_controller.js';
import { WelcomeMenuDeps } from './definitions.js';
import WelcomeMenu from './welcomeMenu.js';

export default class WelcomeController 
    extends BaseInjectableController<WelcomeMenuDeps>
{
    protected override host?: WelcomeMenu;

    protected override addListeners(): void {
        // this.addEventListener(LogInCue.EVENT_NAME, this.handleLogInCue);
    }

    protected handleLogInCue = (e: Event) => {
        if (!(e instanceof LogInCue)) {
            return;
        }

        // Temp, replace when we actually have a log in flow
        this.host?.dispatchEvent(new LoggedInEvent({name: e.data.userName}));
    }

}