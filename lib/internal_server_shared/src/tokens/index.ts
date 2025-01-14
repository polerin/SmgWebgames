import { token } from 'ditox';
import type { Express } from 'express';
import { SmgGameRouterDefinition } from '../types/index.js';
import { DitoxFactoryFunctionSet } from '@shieldmaidengames/webgames-internal-shared';

export const SMG_GAME_SERVER_ROUTERS_TOKEN = token<SmgGameRouterDefinition[]>(Symbol.for('Multifactory for Game Server routers'));
export const SMG_GAME_SERVER_ROUTER_FACTORY_TOKEN = token<DitoxFactoryFunctionSet<SmgGameRouterDefinition>>(Symbol.for('Collective value token for game server router factories'));
export const SMG_GAME_SERVER_ARTIFACT_ROOT_TOKEN = token<string>(Symbol.for('Game server artifact root for file serving'));
export const SMG_SERVER_APP_TOKEN = token<Express>(Symbol.for('Root Application binding'));