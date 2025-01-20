import { SmgHostedAppSlug, HostedAppStatus } from '@shieldmaidengames/webgames-shared';

export type HostedAppStatusReport = {
    appName: SmgHostedAppSlug;
    status: HostedAppStatus;
    failureReason?: string;
    failureCode?: string;
};