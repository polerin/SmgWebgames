/**
 * Entry point for the core application shared worker
 */
console.info("Loading inside shared worker");
onconnect = (connectEvent) => {
    const port = connectEvent.ports[0];
    port.addEventListener('message', (message) => {
        const workerResult = `Hi this is from the worker! ${message.data.yep}`;
        port.postMessage(workerResult);
    });
};
onerror = (error) => {
    console.error('hwaaaaaaaaaat?', error);
};
//# sourceMappingURL=index.js.map
