import { SwapActivityCue, BaseInjectableController, LoggedInEvent } from '@shieldmaidengames/webgames-display-components';
import { ApplicationRootDeps } from './definitions.js';
import ApplicationRoot from './application_root.js';

export default class ApplicationRootController extends BaseInjectableController<ApplicationRootDeps> {

    protected override host?: ApplicationRoot;

    public constructor(protected sharedWorker: SharedWorker) {
        super();

        this.sharedWorker.port.addEventListener('message', this.workerMessageReceived)
        this.sharedWorker.port.start();
        console.log("Did we get the shared worker?", this.sharedWorker);
    }

    public override hostConnected(): void {
        this.sharedWorker.port.postMessage({yep: "This is a host connected message"});
    }

    protected workerMessageReceived(message: MessageEvent): void {
        if (!(message instanceof MessageEvent)) {
            console.warn('Received a non-MessageEvent argument somehow');
        }

        console.log("heeeeeey yup.", message);
    }

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
        this.sharedWorker.port.postMessage({yep: "Current player set to " + e.player.name});
        this.host.currentPlayer = e.player;
    }
}