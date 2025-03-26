import { createWorkerDependencyContainer } from './injection.js';
import { WORKER_CONTROLLER_TOKEN } from './worker/index.js';

/**
 * Entry point for the core application shared worker
 */
console.info('Core shared worker loading');
const container = createWorkerDependencyContainer();
const workerController = container.resolve(WORKER_CONTROLLER_TOKEN);

onconnect = workerController.handleConnectEvent;

onerror = (error: ErrorEvent) => {
    console.error('Error encountered inside of core SharedWorker', error);
}