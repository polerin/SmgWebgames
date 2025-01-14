import { SwapActivityCue, BaseInjectableController, LoggedInEvent } from '@shieldmaidengames/webgames-display-components';
import { ApplicationRootDeps } from './definitions.js';
import ApplicationRoot from './application_root.js';

export default class ApplicationRootController extends BaseInjectableController<ApplicationRootDeps> {

    protected override host?: ApplicationRoot;

    protected override addListeners(): void {
        this.addEventListener(SwapActivityCue.EVENT_NAME, (e) => this.handleSwapActivityCue(e));
        this.addEventListener(LoggedInEvent.EVENT_NAME, (e) => this.handleLoggedInEvent(e));
    }

    protected handleSwapActivityCue(e: Event): void {
       console.info('Start new activity cue received', e); 
    }

    protected handleLoggedInEvent(e: Event): void {
        console.log('in handle loggeadsfalsdkfjalj', e, this);
        if (!(e instanceof LoggedInEvent) || this.host === undefined) {
            return;
        }

        console.log("setting player", e.player);
        this.host.currentPlayer = e.player;
    }
}