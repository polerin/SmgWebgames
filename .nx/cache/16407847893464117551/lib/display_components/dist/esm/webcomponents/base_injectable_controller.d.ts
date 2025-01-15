import { IInjectableController, IInjectableHost } from '../interfaces/index.js';
import { ComponentDependencies } from '../types/index.js';
type ListenerParams = Parameters<HTMLElement["addEventListener"]>;
export default abstract class BaseInjectableController<DepType extends ComponentDependencies> implements IInjectableController<DepType> {
    protected host?: IInjectableHost<DepType>;
    protected abortControllers: AbortController[];
    constructor();
    addHost(host: IInjectableHost<DepType>): void;
    hostConnected(): void;
    hostDisconnected(): void;
    /**
     * Utility method, eases registration of event listeners to be removed later
     *
     * This registers the listener and adds an abort signal if one has not been previously specified
     */
    protected addEventListener(eventName: ListenerParams[0], handler: ListenerParams[1], options?: ListenerParams[2]): void;
    protected addListeners(): void;
    /**
     * By default this method only removes listeners registered with this class's addEventListener()
     */
    protected removeListeners(): void;
}
export {};
//# sourceMappingURL=base_injectable_controller.d.ts.map