import { SmgHostedAppDefinition } from './types.js';

export default interface IHostedApplications {
    [appSlug: string]: SmgHostedAppDefinition;
};