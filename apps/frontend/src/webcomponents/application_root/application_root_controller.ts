import { SwapActivityCue, BaseInjectableController, LoggedInEvent, RegisteredActivity } from '@shieldmaidengames/webgames-display-components';
import { ApplicationRootDeps } from './definitions.js';
import ApplicationRoot from './application_root.js';
import { AppMessageNames } from '@shieldmaidengames/webgames-shared';
import type { LoginAttemptMessage } from '@shieldmaidengames/webgames-shared';

export default class ApplicationRootController extends BaseInjectableController<ApplicationRootDeps> {

    protected override host?: ApplicationRoot;

    public constructor(protected sharedWorker: SharedWorker) {
        super();

        this.sharedWorker.port.addEventListener('message', this.workerMessageReceived)
        this.sharedWorker.port.start();
    }

    public override hostConnected(): void {
    }

    protected workerMessageReceived(message: MessageEvent): void {
        if (!(message instanceof MessageEvent)) {
            console.warn('Received a non-MessageEvent argument somehow');
        }

        console.log("Main app received message.", message);
    }

    protected override addListeners(): void {
        this.addEventListener(SwapActivityCue.EVENT_NAME, (e) => this.handleSwapActivityCue(e));
        this.addEventListener(LoggedInEvent.EVENT_NAME, (e) => this.handleLoggedInEvent(e));
    }


    protected handleLoggedInEvent(e: Event): void {
        if (!(e instanceof LoggedInEvent) || this.host === undefined) {
            return;
        }

        console.log("setting user", e.user);
        
        this.sharedWorker.port.postMessage(<LoginAttemptMessage>{
            name: AppMessageNames.LoginAttempt, data: {user: {...e.user}}}
        );

        CURRENT WORK LOCATION, NEED TO MOVE THE BELOW TWO LINES INTO A LOGIN OUTCOME MESSAGE HANDLER

        this.host.currentUser = e.user;

        this.swapActivity('home');
    }

    protected handleSwapActivityCue(e: Event): void {
       console.info('Start new activity cue received', e); 
    }

    protected swapActivity(newActivity: RegisteredActivity) {
        this.host?.setActivity(newActivity);
    }
}