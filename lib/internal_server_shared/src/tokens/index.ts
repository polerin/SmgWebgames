import { token } from 'ditox';
import type { Express } from 'express';
import { SmgHostedAppRouterDefinition } from '../types/index.js';
import { DitoxFactoryFunctionSet } from '@shieldmaidengames/webgames-internal-shared';
import { IHostedApplication } from '@shieldmaidengames/webgames-internal-server-shared';

/**
 * This token represents the collection of all hosted applications
 * 
 * It references a MultiFactory which will call all factory functions registered to SMG_HOSTED_APP_FACTORY_TOKEN.
 * 
 * This token should be used by consuming code.
 */
export const SMG_HOSTED_APPS_TOKEN = token<IHostedApplication[]>('Multifactory for all hosted applications');

/**
 * This token represents the collection of registered factory functions that create hosted applications.
 * It references a multiValue() collection of objects but does not actually call those factories by itself.
 * 
 * All IHostedApplication factories should be bound to this token, but it should only be used in the
 * MultiFactory referenced by SMG_HOSTED_APPS_TOKEN.
 */
export const SMG_HOSTED_APP_FACTORY_TOKEN = token<DitoxFactoryFunctionSet<IHostedApplication>>('Collective value token for app factories');

/**
 * This token represents the collection of routers each application has registered
 */
export const SMG_HOSTED_APP_SERVER_ROUTERS_TOKEN = token<SmgHostedAppRouterDefinition[]>('Multifactory for all hosted application routers');
export const SMG_HOSTED_APP_SERVER_ROUTER_FACTORY_TOKEN = token<DitoxFactoryFunctionSet<SmgHostedAppRouterDefinition>>('Collective value token for hosted application server router factories');

export const SMG_HOSTED_APP_SERVER_ARTIFACT_ROOT_TOKEN = token<string>('Server artifact root for file serving');
export const SMG_ROOT_APP_TOKEN = token<Express>('Root Application binding');