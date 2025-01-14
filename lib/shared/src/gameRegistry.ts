import { SmgHostedAppDefinition } from './types/smg_core.js';

const HostedAppRegistry: Record<string, SmgHostedAppDefinition> = {
    'Multipipe': {
        name: 'Multipipe',
        slug: 'Multipipe',
        description: 'Chaos Plumbing',
        isMultiplayer: true,
        multiplayerMax: 4,
        isPublic: true,
    },
} as const;

export type SmgHostedAppSlug = keyof typeof HostedAppRegistry;

export { HostedAppRegistry };
