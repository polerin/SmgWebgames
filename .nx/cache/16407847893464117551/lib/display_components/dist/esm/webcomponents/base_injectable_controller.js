export default class BaseInjectableController {
    constructor() {
        this.abortControllers = [];
    }
    addHost(host) {
        if (this.host !== undefined) {
            throw new Error('Attempting to add host to a controller that already has one');
        }
        this.host = host;
        this.host.addController(this);
        this.addListeners();
    }
    hostConnected() {
        /** no-op override to implement */
    }
    hostDisconnected() {
        this.host?.removeController(this);
        this.removeListeners();
        this.host = undefined;
    }
    /**
     * Utility method, eases registration of event listeners to be removed later
     *
     * This registers the listener and adds an abort signal if one has not been previously specified
     */
    addEventListener(eventName, handler, options = {}) {
        if (this.host === undefined) {
            console.warn("Attempting to register listener without a host");
            return;
        }
        let constructedOptions;
        if (typeof options === 'boolean') {
            constructedOptions = { capture: options };
        }
        else {
            constructedOptions = { ...options };
        }
        if (constructedOptions.signal === undefined) {
            const abortController = new AbortController();
            constructedOptions.signal = abortController.signal;
            this.abortControllers.push();
        }
        this.host.addEventListener(eventName, handler, constructedOptions);
    }
    addListeners() {
        /** no-op, override to implement  */
    }
    /**
     * By default this method only removes listeners registered with this class's addEventListener()
     */
    removeListeners() {
        while (this.abortControllers.length > 0) {
            const controller = this.abortControllers.pop();
            controller?.abort();
        }
    }
}
//# sourceMappingURL=base_injectable_controller.js.map