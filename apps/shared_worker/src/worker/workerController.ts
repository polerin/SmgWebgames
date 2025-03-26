import { AppMessageNames, DetailedError, isFullStateUpdateMessage, isLoginAttemptMessage, isMessageBase } from '@shieldmaidengames/webgames-shared';
import type { CoordinatedMethodMap, CoreApplicationState, FullStateUpdateMessage, LoginOutcomeMessage, MessageBase } from '@shieldmaidengames/webgames-shared';

export default class WorkerController {

    protected _state: CoreApplicationState = {
        currentUser: undefined,
    };

    protected currentPorts: MessagePort[] = [];

    protected internalMessageMap: CoordinatedMethodMap<
        typeof self,
        (msg: MessageBase<any, any>) => Promise<void>
    > = {
        [AppMessageNames.LoginAttempt] : {
            beforeCallback: isLoginAttemptMessage,
            callback: 'handleLoginAttempt',
        },
        [AppMessageNames.FullStateUpdate] : {
            beforeCallback: isFullStateUpdateMessage,
            callback:'handleFullStateUpdate',
        },
    }


    public _constructor() {

    }

    public handleConnectEvent = (connectEvent: MessageEvent): void => {
        console.info('Shared worker onconnect');
        this.addPort(connectEvent.ports[0]);
    }


    protected addPort(port: MessagePort): void {
        port.addEventListener('message', this.catchIncomingMessage); 
        this.currentPorts.push(port);

        port.start();

        this.sendStateUpdate(port);
    }

    protected removePort(portToRemove: MessagePort): void {
        this.currentPorts = this.currentPorts.filter((port) => port !== portToRemove);
        portToRemove.removeEventListener('message', this.catchIncomingMessage);
    }

    protected catchIncomingMessage = (message: MessageEvent): void => {
        void this.handleIncomingMessage(message);
    }

    protected async handleIncomingMessage(message: MessageEvent): Promise<void> {
        if (!isMessageBase(message)) {
            return Promise.reject(new DetailedError('Non-message base message received', message));
        }

        if (this.internalMessageMap[message.name] !== undefined) {
            await this.internalMessageMap[message.name](message);
        }
    
        //@todo Redispatch?
        return Promise.resolve();
    };

    protected async handleLoginAttempt(message: MessageBase<any, any> ): Promise<void> {
        if (!isLoginAttemptMessage(message)) {
            return;
        }

        this._state.currentUser = {name: message.name};

        this.postToAllPorts(<LoginOutcomeMessage>{
            name: AppMessageNames.LoginOutcome,
            data: {
                user: this._state.currentUser,
                outcome: 'Success'
            }
        });
    }

    protected sendStateUpdate(port?: MessagePort): void {

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