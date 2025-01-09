import { SmgGameDefinition } from '../types/index.js';

import type { SmgGameSlug } from '../gameRegistry.js';
import { GameRegistry } from '../gameRegistry.js';

export function gameDataBySlug(slug: SmgGameSlug): SmgGameDefinition | undefined {
    return GameRegistry[slug];
}