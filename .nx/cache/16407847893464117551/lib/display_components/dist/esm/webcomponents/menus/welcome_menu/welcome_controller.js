import { LoggedInEvent, LogInCue } from '../../../events/index.js';
import BaseInjectableController from '../../base_injectable_controller.js';
export default class WelcomeController extends BaseInjectableController {
    constructor() {
        super(...arguments);
        this.handleLogInCue = (e) => {
            if (!(e instanceof LogInCue)) {
                return;
            }
            // Temp, replace when we actually have a log in flow
            this.host?.dispatchEvent(new LoggedInEvent({ name: e.playerName }));
        };
    }
    addListeners() {
        this.addEventListener(LogInCue.EVENT_NAME, this.handleLogInCue);
    }
}
//# sourceMappingURL=welcome_controller.js.map