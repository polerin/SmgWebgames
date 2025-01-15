import express from 'express';
import { addServerRoutes } from './routes.js';

import cors from 'cors';
import { serverContainer, SMG_APPLICATION_HOST } from './injection/index.js';
import {
    SMG_HOSTED_APP_SERVER_ARTIFACT_ROOT_TOKEN,
    SMG_HOSTED_APP_SERVER_ROUTERS_TOKEN,
} from '@shieldmaidengames/webgames-internal-server-shared';
import { bindHosted } from './hostedApps/index.js';


const app = express();

app.use(cors());
app.use(express.json());

bindHosted(serverContainer);

const applicationHost = serverContainer.resolve(SMG_APPLICATION_HOST);
applicationHost.boostrapAllApps(serverContainer);

addServerRoutes(
    app,
    serverContainer.resolve(SMG_HOSTED_APP_SERVER_ARTIFACT_ROOT_TOKEN),
    serverContainer.resolve(SMG_HOSTED_APP_SERVER_ROUTERS_TOKEN),
);

console.info("!!! Server online!");

export default app;
