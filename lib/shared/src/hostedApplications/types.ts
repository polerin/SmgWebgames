import { hostedAppStatusNames } from './consts.js';
import IHostedApplications from './IHostedApplications.js';

/**
 * To add a slug, extend IHostedApplications in the hosted application
 */
export type SmgHostedAppSlug<
    slug extends keyof IHostedApplications = keyof IHostedApplications
> = slug extends string ? slug : never;


export type HostedAppStatus = typeof hostedAppStatusNames[number];


export type SmgHostedAppDefinition = {
    name: string;
    slug: SmgHostedAppSlug;
    description: string;
    isMultiplayer: boolean;
    multiplayerMax?: number;
    isPublic: boolean;
};