import { SmgHostedAppSlug } from '@shieldmaidengames/webgames-shared';
import { HostedAppStatus } from '@shieldmaidengames/webgames-internal-shared';
import { Container } from 'ditox';
export default interface IHostedApplication {
    get slug(): SmgHostedAppSlug;
    get status(): HostedAppStatus;
    /**
     * Registration method that binds all dependencies including
     * routes and other such fun things.
     */
    register(container: Container): Promise<void>;
    /**
     * Start the application
     */
    start(): Promise<void>;
    createServerInstance?(): Promise<void>;
}
//# sourceMappingURL=IHostedApplication.d.ts.map