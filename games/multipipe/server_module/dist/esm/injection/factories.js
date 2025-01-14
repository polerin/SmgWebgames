import express from 'express';
import { SMG_HOSTED_APP_SERVER_ARTIFACT_ROOT_TOKEN } from '@shieldmaidengames/webgames-internal-server-shared';
import { multipipeApiRouter } from '../server/index.js';
export const multipipeRouterFactory = (container) => {
    const artifactRoot = container.resolve(SMG_HOSTED_APP_SERVER_ARTIFACT_ROOT_TOKEN);
    const multipipeRouter = express.Router();
    const artifactPath = artifactRoot + '/multipipe';
    console.info('setting multipipe artifact path to', artifactRoot);
    const gameRouter = express.static(artifactPath);
    multipipeRouter.use('/', gameRouter);
    multipipeRouter.use('/api', multipipeApiRouter);
    return {
        appName: 'multipipe',
        router: multipipeRouter,
    };
};
//# sourceMappingURL=factories.js.map