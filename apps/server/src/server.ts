import express from 'express';
import type { Express } from 'express';
import { addServerRoutes } from './routes.js';

import cors from 'cors';
import { SMG_APPLICATION_HOST } from './injection/index.js';
import {
    SMG_HOSTED_APP_SERVER_ARTIFACT_ROOT_TOKEN,
    SMG_HOSTED_APP_SERVER_ROUTERS_TOKEN,
} from '@shieldmaidengames/webgames-internal-server-shared';
import { Container } from 'ditox';
import { bindHosted } from './hostedApps/index.js';

/**
 * Build a basic hosting server
 * 
 * This will build and configure a basic express server with 
 */
export function buildHostingServer(): Express {
    // Create our root express application
    const app = express();

    // Set up some security and parsing middleware (this needs more love)
    app.use(cors());
    app.use(express.json());

    return app;
};

export function bootstrapHostedApplications(app: Express, serverContainer: Container): void
{
    // bind all hosted 
    bindHosted(serverContainer);

    const applicationHost = serverContainer.resolve(SMG_APPLICATION_HOST);
    applicationHost.boostrapAllApps(serverContainer)
    .then((report) => {
        console.info("Hosted applications bootstrapped, status", report)
        addServerRoutes(
            app,
            serverContainer.resolve(SMG_HOSTED_APP_SERVER_ARTIFACT_ROOT_TOKEN),
            serverContainer.resolve(SMG_HOSTED_APP_SERVER_ROUTERS_TOKEN),
        );

        console.info("!!! Server online!");
    });

}
