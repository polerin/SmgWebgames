import { declareModule, optional } from 'ditox';
import { SharedWorkerDefaultPath } from '../constants/index.js';
import { SMG_CORE_SHARED_WORKER, SMG_CORE_SHARED_WORKER_URI } from './tokens.js';
export const SharedWorkerDeps = declareModule({
    factory: (container) => {
        const uri = container.resolve(optional(SMG_CORE_SHARED_WORKER_URI, SharedWorkerDefaultPath));
        console.log("firing a new shared worker with uri " + uri);
        const sharedWorker = new SharedWorker(uri);
        sharedWorker.addEventListener('error', (error) => console.error('SharedWorker error received', error));
        return { sharedWorker };
    },
    exports: {
        sharedWorker: SMG_CORE_SHARED_WORKER,
    }
});
//# sourceMappingURL=bindings.js.map