import { createContainer } from 'ditox';
import type { Container } from 'ditox';
import { WORKER_CONTROLLER_TOKEN } from './worker/dependencies.js';
import { WorkerController } from './worker/index.js';

export function createWorkerDependencyContainer(): Container {
    const container = createContainer();

    container.bindFactory(WORKER_CONTROLLER_TOKEN, (_container) => new WorkerController());

    return container;
} 