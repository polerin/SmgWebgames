import type { CoreApplicationState, FullStateUpdate } from '@shieldmaidengames/webgames-shared';
/**
 * Entry point for the core application shared worker
 */
console.info('Core shared worker loading');
const appState: CoreApplicationState = {
    currentUser: undefined
};

onconnect = (connectEvent: MessageEvent) => {
    console.info('Shared worker onconnect');
    const port = connectEvent.ports[0];

    port.addEventListener('message', (message: MessageEvent) => {
        const workerResult = `Hi this is from the worker! ${message.data.yep}`;

        port.postMessage(workerResult);
    });

    port.start();
    port.postMessage(new FullStateUpdate(appState));

}

onerror = (error: ErrorEvent) => {
    console.error('Error encountered inside of core SharedWorker', error);
}