import express from 'express';
import { multipipeApiRouter } from './api/index.js';
import { Container } from 'ditox';
import { SMG_GAME_SERVER_ARTIFACT_ROOT_TOKEN, SmgGameRouterDefinition } from '@shieldmaidengames/webgames-internal-server-shared';

export const multipipeRouterFactory = (container: Container): SmgGameRouterDefinition => {
    const artifactRoot = container.resolve(SMG_GAME_SERVER_ARTIFACT_ROOT_TOKEN);

    const multipipeRouter = express.Router();
    const artifactPath = artifactRoot + '/multipipe';

    console.info('setting multipipe artifact path to', artifactRoot);

    const gameRouter = express.static(artifactPath);
    multipipeRouter.use('/', gameRouter);
    multipipeRouter.use('/api', multipipeApiRouter);

    return {
        gameName: 'multipipe',
        router: multipipeRouter,
    };
} 