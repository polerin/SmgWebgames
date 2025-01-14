import { BaseHostedApplication } from '@shieldmaidengames/webgames-internal-server-shared'
import { SmgHostedAppSlug } from '@shieldmaidengames/webgames-shared';

import { bindMultiValue, Container } from 'ditox';
import {
    SMG_HOSTED_APP_SERVER_ROUTER_FACTORY_TOKEN,
} from '@shieldmaidengames/webgames-internal-server-shared';

import { multipipeRouterFactory } from './index.js';

export default class MultipipeApplication extends BaseHostedApplication {
    
    protected override appSlug: SmgHostedAppSlug = 'multipipe';

    public override async start(): Promise<void> {
        this._status = 'Running';

        return Promise.resolve();
    }

    protected override registerRoutes(container: Container): Promise<void> {
        // Binding the value as that is the only way we can collect multiple factories per token
        bindMultiValue(
            container,
            SMG_HOSTED_APP_SERVER_ROUTER_FACTORY_TOKEN,
            multipipeRouterFactory
        );

        return Promise.resolve();
    }
    
}