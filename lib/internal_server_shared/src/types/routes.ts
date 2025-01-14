import type { Router } from 'express';

export type SmgHostedAppRouterDefinition = {
    appName: string;
    router: Router;
}
