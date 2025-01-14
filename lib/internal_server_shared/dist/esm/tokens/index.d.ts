import type { Express } from 'express';
import { SmgHostedAppRouterDefinition } from '../types/index.js';
import { DitoxFactoryFunctionSet } from '@shieldmaidengames/webgames-internal-shared';
import { IHostedApplication } from '../hostedApplications/index.js';
export declare const SMG_HOSTED_APPS_TOKEN: import("ditox").Token<IHostedApplication[]>;
export declare const SMG_HOSTED_APP_FACTORY_TOKEN: import("ditox").Token<DitoxFactoryFunctionSet<IHostedApplication>>;
export declare const SMG_HOSTED_APP_SERVER_ROUTERS_TOKEN: import("ditox").Token<SmgHostedAppRouterDefinition[]>;
export declare const SMG_HOSTED_APP_SERVER_ROUTER_FACTORY_TOKEN: import("ditox").Token<DitoxFactoryFunctionSet<SmgHostedAppRouterDefinition>>;
export declare const SMG_HOSTED_APP_SERVER_ARTIFACT_ROOT_TOKEN: import("ditox").Token<string>;
export declare const SMG_ROOT_APP_TOKEN: import("ditox").Token<Express>;
//# sourceMappingURL=index.d.ts.map