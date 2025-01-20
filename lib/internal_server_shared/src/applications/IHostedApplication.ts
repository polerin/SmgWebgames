import { Container } from 'ditox';
import { HostedAppStatus, SmgHostedAppDefinition } from '@shieldmaidengames/webgames-shared';

export default interface IHostedApplication {
    get slug(): string;
    get status(): HostedAppStatus;
    get definition(): SmgHostedAppDefinition;


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