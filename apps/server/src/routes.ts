import type Express from 'express';
import express from 'express';

import { SmgHostedAppRouterDefinition } from '@shieldmaidengames/webgames-internal-server-shared'

export const addServerRoutes = (
    app: Express.Application,
    artifactRoot: string,
    hostedAppRoutes: SmgHostedAppRouterDefinition[] = []): void =>
{

    app.use('/',
        express.static(artifactRoot + '/frontend', {
          index: ['index.html']
        })
    );

    app.use('/worker/',
        express.static(artifactRoot + '/shared_worker', {
            index: ['index.js']
        })
    );

    // register all hosted applincation routes (injected from SMG_HOSTED_APP_SERVER_ROUTERS_TOKEN)
    hostedAppRoutes.forEach((routeDef) => app.use(`/${routeDef.appName}`, routeDef.router));
}
