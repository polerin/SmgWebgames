export default class BaseHostedApplication {
    constructor() {
        this._status = 'Fresh';
    }
    get slug() {
        return this.appSlug;
    }
    get status() {
        return this._status;
    }
    async registerExtras(_container) {
        /** template, intentional no-op */
        return Promise.resolve();
    }
    registerScenes(_container) {
        /** template, intentional no-op */
        return Promise.resolve();
    }
    registerRoutes(_container) {
        /** template, intentional no-op */
        return Promise.resolve();
    }
    /**
     * Core implementation of the register method
     *
     * This should handle most cases, but override if needed!
     */
    async register(container) {
        console.info(`Loading ${this.appSlug}`);
        this._status = 'Bootstrapping';
        try {
            await Promise.all([
                this.registerRoutes(container),
                this.registerScenes(container),
                this.registerExtras(container),
            ]);
        }
        catch (e) {
            console.error(`Unable to load application ${this.appSlug}`, e);
        }
        this._status = 'Ready';
    }
}
//# sourceMappingURL=baseHostedApplication.js.map