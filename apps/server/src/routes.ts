import type Express from 'express';
import express from 'express';

import { SmgGameRouterDefinition } from '@shieldmaidengames/webgames-internal-server-shared'

export const addServerRoutes = (
    app: Express.Application,
    artifactRoot: string,
    gameRoutes: SmgGameRouterDefinition[] = []): void =>
{

    app.use('/',
        express.static(artifactRoot + '/frontend', {
          index: ['index.html']
        })
    );

    // register all game routes (injected from SMG_GAME_SERVER_ROUTERS_TOKEN)
    gameRoutes.forEach((routeDef) => app.use(`/${routeDef.gameName}`, routeDef.router));
}
