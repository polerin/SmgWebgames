import { SmgHostedAppDefinition } from './types/smg_core.js';
declare const HostedAppRegistry: Record<string, SmgHostedAppDefinition>;
export type SmgHostedAppSlug = keyof typeof HostedAppRegistry;
export { HostedAppRegistry };
//# sourceMappingURL=gameRegistry.d.ts.map