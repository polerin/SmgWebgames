import { InjectionCue } from '../events/index.js';
export function injectDependencies(element, requestedToken) {
    const injectionPromise = new Promise((resolve, reject) => {
        try {
            element.dispatchEvent(new InjectionCue(requestedToken, resolve));
        }
        catch (e) {
            reject(e);
        }
    });
    return injectionPromise
        .then((deps) => element.inject(deps))
        .catch((e) => console.error("Unable to retrieve dependencies", e));
}
export function injectionResolverFactory(container) {
    return (request) => {
        if (!(request instanceof InjectionCue)) {
            console.log('Non-injection request supplied to injection resolver');
            return;
        }
        console.log("received injection request", request);
        if (!request.token || !request.callback) {
            console.error("Improperly formatted injection request", { ...request });
            throw new Error("Unable to satisfy injection request: " + request.token);
        }
        const resolved = container.resolve(request.token);
        request.callback(resolved);
    };
}
//# sourceMappingURL=injection.js.map