import { SmgGameDefinition } from './types/smg_core.js';

const GameRegistry: Record<string, SmgGameDefinition> = {
    'Multipipe': {
        name: 'Multipipe',
        slug: 'Multipipe',
        description: 'Chaos Plumbing',
        isMultiplayer: true,
        multiplayerMax: 4,
        isPublic: true,
    },
} as const;

export type SmgGameSlug = keyof typeof GameRegistry;

export { GameRegistry };
