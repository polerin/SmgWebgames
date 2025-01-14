import * as serverShared from '@shieldmaidengames/webgames-internal-server-shared';
import { createMultiFactory } from '@shieldmaidengames/webgames-internal-shared';

import { createContainer } from 'ditox';
import path from 'path';

import * as serverTokens from './tokens.js';
import ApplicationHost from '../hostedApps/applicationHost.js';

export const serverContainer = createContainer();

serverContainer.bindValue(
    serverShared.SMG_HOSTED_APP_SERVER_ARTIFACT_ROOT_TOKEN,
    path.resolve(process.env.PWD ?? "./", './artifacts')
);

serverContainer.bindFactory(
    serverShared.SMG_HOSTED_APP_SERVER_ROUTERS_TOKEN, 
    createMultiFactory(serverShared.SMG_HOSTED_APP_SERVER_ROUTER_FACTORY_TOKEN)
);

serverContainer.bindFactory(
    serverShared.SMG_HOSTED_APPS_TOKEN,
    createMultiFactory(serverShared.SMG_HOSTED_APP_FACTORY_TOKEN)
);

serverContainer.bindFactory(
    serverTokens.SMG_APPLICATION_HOST,
    (container) => new ApplicationHost(
        container.resolve(serverShared.SMG_HOSTED_APPS_TOKEN)
    )
);