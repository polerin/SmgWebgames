import { BaseHostedApplication } from '@shieldmaidengames/webgames-internal-server-shared';
import { bindMultiValue } from 'ditox';
import { SMG_HOSTED_APP_SERVER_ROUTER_FACTORY_TOKEN, } from '@shieldmaidengames/webgames-internal-server-shared';
import { multipipeRouterFactory } from './index.js';
export default class MultipipeApplication extends BaseHostedApplication {
    constructor() {
        super(...arguments);
        this.appSlug = 'multipipe';
    }
    async start() {
        this._status = 'Running';
        return Promise.resolve();
    }
    registerRoutes(container) {
        // Binding the value as that is the only way we can collect multiple factories per token
        bindMultiValue(container, SMG_HOSTED_APP_SERVER_ROUTER_FACTORY_TOKEN, multipipeRouterFactory);
        return Promise.resolve();
    }
}
//# sourceMappingURL=application.js.map