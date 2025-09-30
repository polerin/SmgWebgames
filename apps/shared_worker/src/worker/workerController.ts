import { AppMessageNames, DetailedError, isFullStateUpdateMessage, isLoginAttemptMessage, isMessageBase, MessageMapHandler } from '@shieldmaidengames/webgames-shared';
import type { CoordinatedMethodMap, CoreApplicationState, FullStateUpdateMessage, LoginOutcomeMessage, MessageBase, MappedSubjectBase, MappedMethodBase } from '@shieldmaidengames/webgames-shared';

export default class WorkerController implements MappedSubjectBase {

    protected _state: CoreApplicationState = {
        currentUser: undefined,
    };

    protected currentPorts: MessagePort[] = [];

    protected internalMessageMap: CoordinatedMethodMap<WorkerController> = {
        [AppMessageNames.LoginAttempt] : {
            beforeCallback: isLoginAttemptMessage,
            callback: 'handleLoginAttempt',
        },
        [AppMessageNames.FullStateUpdate] : {
            beforeCallback: isFullStateUpdateMessage,
            callback:'handleFullStateUpdate',
        },
    };

    protected messageHandler: MessageMapHandler<WorkerController>;

    public constructor() {
        this.messageHandler = new MessageMapHandler(this, this.internalMessageMap);
    }

    public handleConnectEvent = (connectEvent: MessageEvent): void => {
        console.info('Shared worker onconnect');
        this.addPort(connectEvent.ports[0]);
    }

    protected addPort(port: MessagePort): void {
        port.addEventListener('message', this.messageHandler.receiveMessageEvent); 
        this.currentPorts.push(port);

        port.start();

        this.sendStateUpdate(port);
    }

    protected removePort(portToRemove: MessagePort): void {
        this.currentPorts = this.currentPorts.filter((port) => port !== portToRemove);
        portToRemove.removeEventListener('message', this.messageHandler.receiveMessageEvent);
    }

    protected async handleLoginAttempt(message: MessageBase<any, any> ): Promise<void> {
        if (!isLoginAttemptMessage(message)) {
            console.error('Unknown message type passed to shared worker handleLoginAttempt()', message);
            return;
        }
        this._state.currentUser = { ...message.data.user};

        this.postToAllPorts(<LoginOutcomeMessage>{
            name: AppMessageNames.LoginOutcome,
            data: {
                user: this._state.currentUser,
                outcome: 'Success'
            }
        });
    }

    protected sendStateUpdate(port?: MessagePort): void {
        console.info('Sending full state update', {port});
        const update: FullStateUpdateMessage = {name: AppMessageNames.FullStateUpdate, data: this._state};

        if (port !== undefined) {
            port.postMessage(update);

            return;
        }
        this.postToAllPorts(update);
    }

    protected postToAllPorts<MessageType extends MessageBase<any, any>>(message: MessageType): void {
        this.currentPorts.forEach((port) => port.postMessage(message));
    }
}