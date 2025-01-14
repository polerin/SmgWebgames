import express from 'express';
import { addServerRoutes } from './routes.js';

import cors from 'cors';
import { serverContainer } from './serverBindings.js';
import {
    SMG_GAME_SERVER_ARTIFACT_ROOT_TOKEN,
    SMG_GAME_SERVER_ROUTERS_TOKEN,
} from '@shieldmaidengames/webgames-internal-server-shared';

import { addMultipipeBindings } from '@shieldmaidengames/multipipe-server';

const app = express();

app.use(cors());
app.use(express.json());

/** @todo see if this can be automated during some kind of module load */
addMultipipeBindings(serverContainer);

addServerRoutes(
    app,
    serverContainer.resolve(SMG_GAME_SERVER_ARTIFACT_ROOT_TOKEN),
    serverContainer.resolve(SMG_GAME_SERVER_ROUTERS_TOKEN),
);

export default app;
