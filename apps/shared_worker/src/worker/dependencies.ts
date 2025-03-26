import { token } from 'ditox';
import WorkerController from './workerController.js';

export const WORKER_CONTROLLER_TOKEN = token<WorkerController>('Service worker controller');