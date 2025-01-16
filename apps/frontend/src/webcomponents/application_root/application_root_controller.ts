import { SwapActivityCue, BaseInjectableController, LoggedInEvent, RegisteredActivity } from '@shieldmaidengames/webgames-display-components';
import { ApplicationRootDeps } from './definitions.js';
import ApplicationRoot from './application_root.js';

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
        console.log('in handle loggeadsfalsdkfjalj', e, this);
        if (!(e instanceof LoggedInEvent) || this.host === undefined) {
            return;
        }

        console.log("setting user", e.user);
        this.sharedWorker.port.postMessage({yep: "Current user set to " + e.user.name});
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