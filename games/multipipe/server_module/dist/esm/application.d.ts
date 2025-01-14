import { BaseHostedApplication } from '@shieldmaidengames/webgames-internal-server-shared';
import { SmgHostedAppSlug } from '@shieldmaidengames/webgames-shared';
import { Container } from 'ditox';
export default class MultipipeApplication extends BaseHostedApplication {
    protected appSlug: SmgHostedAppSlug;
    start(): Promise<void>;
    protected registerRoutes(container: Container): Promise<void>;
}
//# sourceMappingURL=application.d.ts.map