import { HostedAppStatus } from '@shieldmaidengames/webgames-internal-shared';
import { SmgHostedAppSlug } from '@shieldmaidengames/webgames-shared';
import { Container } from 'ditox';
import IHostedApplication from './IHostedApplication.js';
export default abstract class BaseHostedApplication implements IHostedApplication {
    protected abstract appSlug: SmgHostedAppSlug;
    protected _status: HostedAppStatus;
    get slug(): string;
    get status(): "Fresh" | "Bootstrapping" | "Ready" | "Running" | "Halting" | "Halted";
    abstract start(): Promise<void>;
    protected registerExtras(_container: Container): Promise<void>;
    protected registerScenes(_container: Container): Promise<void>;
    protected registerRoutes(_container: Container): Promise<void>;
    /**
     * Core implementation of the register method
     *
     * This should handle most cases, but override if needed!
     */
    register(container: Container): Promise<void>;
}
//# sourceMappingURL=baseHostedApplication.d.ts.map