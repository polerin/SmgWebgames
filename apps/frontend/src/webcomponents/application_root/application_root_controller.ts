import { SwapActivityCue, BaseInjectableController, LoggedInEvent, RegisteredActivity } from '@shieldmaidengames/webgames-display-components';
import { ApplicationRootDeps } from './definitions.js';
import ApplicationRoot from './application_root.js';
import { AppMessageNames, FullStateUpdateMessage, isFullStateUpdateMessage, isLoginOutcomeMessage, isMessageBase } from '@shieldmaidengames/webgames-shared';
import { CoordinatedMethodMap, LoginAttemptMessage, LoginOutcomeMessage, MessageMapHandler } from '@shieldmaidengames/webgames-shared';

export default class ApplicationRootController extends BaseInjectableController<ApplicationRootDeps> {

    protected override host?: ApplicationRoot;

   protected internalMessageMap: CoordinatedMethodMap<ApplicationRootController> = {
        [AppMessageNames.LoginOutcome] : {
            beforeCallback: isLoginOutcomeMessage,
            callback: 'handleLoginOutcomeMessage',
        },
        [AppMessageNames.FullStateUpdate] : {
            beforeCallback: isFullStateUpdateMessage,
            callback: 'handleFullStateUpdateMessage',
        },
    }; 

    protected messageHandler!: MessageMapHandler<ApplicationRootController>;

    public constructor(protected sharedWorker: SharedWorker) {
        super();
        this.messageHandler = new MessageMapHandler(this, this.internalMessageMap);
        this.sharedWorker.port.addEventListener('message', this.workerMessageReceived)
        this.sharedWorker.port.start();
    }

    public override hostConnected(): void {
    }

    protected workerMessageReceived = async (message: MessageEvent): Promise<void> => {
        if (!(message instanceof MessageEvent)) {
            console.warn('Received a non-MessageEvent argument somehow');
            return Promise.reject();
        }

        const messageContents = message.data;
        if (!isMessageBase(messageContents)) {
            console.warn('non-structured message encoutered, skipping', message);
            return Promise.reject();
        }

        void this.messageHandler.handle(messageContents.name, messageContents);
    }

    protected override addListeners(): void {
        this.addEventListener(SwapActivityCue.EVENT_NAME, (e) => this.handleSwapActivityCue(e));
        this.addEventListener(LoggedInEvent.EVENT_NAME, (e) => this.handleLoggedInEvent(e));

    }


    protected handleLoggedInEvent = (e: Event): void => {
        if (!(e instanceof LoggedInEvent) || this.host === undefined) {
            return;
        }

        console.log("logging in user", e.user);
        
        this.sharedWorker.port.postMessage(<LoginAttemptMessage>{
            name: AppMessageNames.LoginAttempt, data: {user: {...e.user}}}
        );

        // @todo set pending state for login
    };

    protected handleLoginOutcomeMessage = (message: LoginOutcomeMessage): void => {
        if (!this.host) { 
            return;
        }

        if (message.data.outcome === 'Success' && message.data.user) {
            console.info('Successful login, setting user', message.data.user);
            this.host.currentUser = message.data.user;
        }

        this.swapActivity('home');
    }

    protected handleFullStateUpdateMessage = (message: FullStateUpdateMessage): void => {
        console.info('Full state update received', {message});

        CURRENT WORK LOCATION: Full state is now typedchecked correctly, handle the update locally.
    }

    protected handleSwapActivityCue(e: Event): void {
       console.info('Start new activity cue received', e); 
    }

    protected swapActivity(newActivity: RegisteredActivity) {
        this.host?.setActivity(newActivity);
    }
}