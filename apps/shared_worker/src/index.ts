/**
 * Entry point for the core application shared worker
 */
console.info('Core shared worker loading');
onconnect = (connectEvent: MessageEvent) => {
    const port = connectEvent.ports[0];

    port.addEventListener('message', (message: MessageEvent) => {
        const workerResult = `Hi this is from the worker! ${message.data.yep}`;

        port.postMessage(workerResult);
    });
}

onerror = (error: ErrorEvent) => {
    console.error('Error encountered inside of core SharedWorker', error);
}