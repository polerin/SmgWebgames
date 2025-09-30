import { SwapActivityCue, BaseInjectableController, LogInCue, FullStateUpdateCue, RegisteredActivity } from '@shieldmaidengames/webgames-display-components';
import { ApplicationRootDeps } from './definitions.js';
import ApplicationRoot from './applicationRoot.js';
import { AppMessageNames, isFullStateUpdateMessage, isLoginOutcomeMessage, buildIsCue, FullStateUpdateMessage, CoreApplicationState } from '@shieldmaidengames/webgames-shared';
import { CoordinatedMethodMap, LoginAttemptMessage, LoginOutcomeMessage, MessageMapHandler } from '@shieldmaidengames/webgames-shared';

export default class ApplicationRootController extends BaseInjectableController<ApplicationRootDeps> {

   protected override host?: ApplicationRoot;

   /**
    * Map of messages that might come in from the shared worker to their handlers (with checks)
    */
   protected workerMessageMap: CoordinatedMethodMap<ApplicationRootController> = {
        [AppMessageNames.LoginOutcome] : {
            beforeCallback: isLoginOutcomeMessage,
            callback: 'handleLoginOutcomeMessage',
        },
        [AppMessageNames.FullStateUpdate] : {
            beforeCallback: isFullStateUpdateMessage,
            callback: 'handleFullStateUpdateMessage',
        },
    };

    /**
     * Map of DOM event 'cues' that might come in to their handlers (with checks)
     */
    protected cueMap: CoordinatedMethodMap<ApplicationRootController> = {
        [SwapActivityCue.EVENT_NAME]: {
            beforeCallback: buildIsCue(SwapActivityCue),
            callback: 'handleSwapActivityCue'
        },
        [LogInCue.EVENT_NAME]: {
            beforeCallback: buildIsCue(LogInCue),
            'callback': 'handleLogInCue',
        },
    }; 

    protected workerMessageHandler: MessageMapHandler<ApplicationRootController>;
    protected cueMessageHandler: MessageMapHandler<ApplicationRootController>;

    protected currentApplicationState: CoreApplicationState = {
        currentUser: undefined,
    };

    public constructor(protected sharedWorker: SharedWorker) {
        super();
        this.workerMessageHandler = new MessageMapHandler(this, this.workerMessageMap);
        this.cueMessageHandler = new MessageMapHandler(this, this.cueMap);
        this.sharedWorker.port.addEventListener('message', this.workerMessageHandler.receiveMessageEvent)
        this.sharedWorker.port.start();
    }

    public override hostConnected(): void {
    }

    protected override addListeners(): void {
        Object.keys(this.cueMap).forEach((key) => this.addEventListener(key, this.cueMessageHandler.receiveMessageObject));
    }

    protected handleLogInCue = (e: Event): void => {
        if (!(e instanceof LogInCue) || this.host === undefined) {
            return;
        }

        console.log("logging in user", e.data.userName);
        
        this.sharedWorker.port.postMessage(<LoginAttemptMessage>{
            name: AppMessageNames.LoginAttempt, data: {user: {name: e.data.userName}}}
        )

        // @todo set pending state for login
    };

    protected handleLoginOutcomeMessage = (message: LoginOutcomeMessage): void => {
        if (!this.host) { 
            return;
        }

        if (message.data.outcome === 'Success' && message.data.user) {
            console.info('Successful login, setting user', message.data.user);
            this.host.currentUser = {data: message.data.user};
        }

        this.swapActivity('home');
    }

    protected handleFullStateUpdateMessage(message: FullStateUpdateMessage): void {
        console.info('Full state update received', {message});
        
        this.currentApplicationState = {... message.data ?? {currentUser: undefined}};

        this.host?.dispatchEvent(new FullStateUpdateCue({...message.data}));
    }

    protected handleSwapActivityCue(e: Event): void {
       console.info('Start new activity cue received', e); 
    }

    protected swapActivity(newActivity: RegisteredActivity) {
        this.host?.setActivity(newActivity);
    }
}