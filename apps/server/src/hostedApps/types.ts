import { IHostedApplication } from '@shieldmaidengames/webgames-internal-server-shared';

export type HostedAppMapEntry = {
    app: IHostedApplication,
    failureReason?: string,
    failureCode?: string
}