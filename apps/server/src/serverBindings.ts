import { 
    SMG_GAME_SERVER_ARTIFACT_ROOT_TOKEN,
    SMG_GAME_SERVER_ROUTERS_TOKEN,
    SMG_GAME_SERVER_ROUTER_FACTORY_TOKEN,
} from '@shieldmaidengames/webgames-internal-server-shared';
import { createMultiFactory } from '@shieldmaidengames/webgames-internal-shared';

import { createContainer } from 'ditox';
import path from 'path';

export const serverContainer = createContainer();

serverContainer.bindValue(SMG_GAME_SERVER_ARTIFACT_ROOT_TOKEN, path.resolve(process.env.PWD ?? "./", './artifacts'));
serverContainer.bindFactory(SMG_GAME_SERVER_ROUTERS_TOKEN, createMultiFactory(SMG_GAME_SERVER_ROUTER_FACTORY_TOKEN));
