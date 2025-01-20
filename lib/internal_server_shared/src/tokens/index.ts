import { token } from 'ditox';
import type { Express } from 'express';
import { SmgHostedAppRouterDefinition } from '../types/index.js';
import { DitoxFactoryFunctionSet } from '@shieldmaidengames/webgames-internal-shared';
import { IHostedApplication } from '../../../shared/src/hostedApplications/index.js';

export const SMG_HOSTED_APPS_TOKEN = token<IHostedApplication[]>('Multifactory for all hosted applications');
export const SMG_HOSTED_APP_FACTORY_TOKEN = token<DitoxFactoryFunctionSet<IHostedApplication>>('Collective value token for app factories');

export const SMG_HOSTED_APP_SERVER_ROUTERS_TOKEN = token<SmgHostedAppRouterDefinition[]>('Multifactory for all hosted application routers');
export const SMG_HOSTED_APP_SERVER_ROUTER_FACTORY_TOKEN = token<DitoxFactoryFunctionSet<SmgHostedAppRouterDefinition>>('Collective value token for hosted application server router factories');

export const SMG_HOSTED_APP_SERVER_ARTIFACT_ROOT_TOKEN = token<string>('Server artifact root for file serving');
export const SMG_ROOT_APP_TOKEN = token<Express>('Root Application binding');