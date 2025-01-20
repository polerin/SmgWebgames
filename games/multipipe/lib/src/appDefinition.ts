import { SmgHostedAppDefinition } from '@shieldmaidengames/webgames-shared';

export const multipipeAppDefinition: SmgHostedAppDefinition = {
    name: 'Multipipe!',
    slug: 'multipipe',
    description: 'Multiplayer pipe building chaos',
    isMultiplayer: true,
    multiplayerMax: 4,
    isPublic: false,
} as const;

declare namespace global {
    interface IHostedApplications {
        multipipe: typeof multipipeAppDefinition;
    }
}