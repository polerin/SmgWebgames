import { hostedAppStatusNames } from './consts.js';
import { SmgHostedAppSlug } from '@shieldmaidengames/webgames-shared';
export type HostedAppStatus = typeof hostedAppStatusNames[number];
export type HostedAppStatusReport = {
    appName: SmgHostedAppSlug;
    status: HostedAppStatus;
    failureReason?: string;
    failureCode?: string;
};
//# sourceMappingURL=types.d.ts.map