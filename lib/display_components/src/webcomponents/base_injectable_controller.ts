import { IInjectableController, IInjectableHost } from '../interfaces/index.js';
import { ComponentDependencies } from '../types/index.js';

type ListenerParams = Parameters<HTMLElement["addEventListener"]>;

export default abstract class BaseInjectableController<DepType extends ComponentDependencies> implements IInjectableController<DepType> {
    protected host?: IInjectableHost<DepType>;

    protected abortControllers: AbortController[] = [];

    public constructor() {
    }

    public addHost(host: IInjectableHost<DepType>): void {
        if (this.host !== undefined) {
            throw new Error('Attempting to add host to a controller that already has one');
        }

        this.host = host;
        this.host.addController(this);
        this.addListeners();
    }

    public hostConnected(): void {
        /** no-op override to implement */
    }

    public hostDisconnected(): void {
        this.host?.removeController(this);
        this.removeListeners();
        this.host = undefined;        
    }

    /**
     * Utility method, eases registration of event listeners to be removed later
     * 
     * This registers the listener and adds an abort signal if one has not been previously specified
     */
    protected addEventListener(
        eventName: ListenerParams[0],
        handler: ListenerParams[1],
        options: ListenerParams[2] = {}
    ): void {
        if (this.host === undefined) {
            console.warn("Attempting to register listener without a host");
            return;
        }

        let constructedOptions: ListenerParams[2];

        if (typeof options === 'boolean') {
            constructedOptions = { capture: options };
        } else {
            constructedOptions = {... options };
        }

        if (constructedOptions.signal === undefined) {
            const abortController = new AbortController();
            constructedOptions.signal = abortController.signal;
            this.abortControllers.push()
        }

        this.host.addEventListener(eventName, handler, constructedOptions);
    }

    protected addListeners(): void {
        /** no-op, override to implement  */
    }

    /**
     * By default this method only removes listeners registered with this class's addEventListener()
     */
    protected removeListeners(): void {
        while (this.abortControllers.length > 0) {
            const controller = this.abortControllers.pop();
            controller?.abort();
        }
    }
}