import { SmgHostedAppDefinition } from '../types/index.js';

import type { SmgHostedAppSlug } from '../gameRegistry.js';
import { HostedAppRegistry } from '../gameRegistry.js';

export function gameDataBySlug(slug: SmgHostedAppSlug): SmgHostedAppDefinition | undefined {
    return HostedAppRegistry[slug];
}