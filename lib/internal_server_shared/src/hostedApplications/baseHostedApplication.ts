import { HostedAppStatus } from '@shieldmaidengames/webgames-internal-shared';
import { SmgHostedAppSlug } from '@shieldmaidengames/webgames-shared';
import { Container } from 'ditox';
import IHostedApplication from './IHostedApplication.js';

export default abstract class BaseHostedApplication implements IHostedApplication {
    protected abstract appSlug: SmgHostedAppSlug;
    protected _status: HostedAppStatus = 'Fresh';
    
    public get slug() {
        return this.appSlug;
    }

    public get status() {
        return this._status;
    }
    
    public abstract start(): Promise<void>;

    protected async registerExtras(_container: Container): Promise<void> {
        /** template, intentional no-op */
        return Promise.resolve();
    }
    
    protected registerScenes(_container: Container): Promise<void> {
        /** template, intentional no-op */
        return Promise.resolve();
    }

    protected registerRoutes(_container: Container): Promise<void> {
        /** template, intentional no-op */
        return Promise.resolve();
    }

    /**
     * Core implementation of the register method
     * 
     * This should handle most cases, but override if needed!
     */
    public async register(container: Container): Promise<void> {
        console.info(`Loading ${this.appSlug}`);
        this._status = 'Bootstrapping';

        try {
            await Promise.all([
                this.registerRoutes(container),
                this.registerScenes(container),
                this.registerExtras(container),
            ]);
        } catch (e: unknown) {
            console.error(`Unable to load application ${this.appSlug}`, e);
        }

        this._status = 'Ready';
    }




}