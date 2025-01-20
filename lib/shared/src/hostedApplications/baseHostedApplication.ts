import { Container } from 'ditox';
import IHostedApplication from './IHostedApplication.js';
import { HostedAppStatus, SmgHostedAppDefinition } from './types.js';

export default abstract class BaseHostedApplication implements IHostedApplication {
    protected _status: HostedAppStatus = 'Fresh';

    /**
     * Implement in child classes.
     */
    protected abstract _description: SmgHostedAppDefinition;
    
    public get slug() {
        return this._description.slug;
    }

    public get status() {
        return this._status;
    }

    public get definition() {
        return this._description;
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
        console.info(`Loading ${this.slug}`);
        this._status = 'Bootstrapping';

        try {
            await Promise.all([
                this.registerRoutes(container),
                this.registerScenes(container),
                this.registerExtras(container),
            ]);
        } catch (e: unknown) {
            console.error(`Unable to load application ${this.slug}`, e);
        }

        this._status = 'Ready';
    }




}