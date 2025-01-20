import { SmgHostedAppDefinition } from '@shieldmaidengames/webgames-shared';
import { PaginatedCommandDefinition, PaginatedCommandResult } from '../types.js';


/**
 * @todo add user check when login is supported
 */
export type AvailableApplicationsDefinition = PaginatedCommandDefinition<{
    // showPublic: bool;
    // user
}>;

export type AvailableApplicationsResult = PaginatedCommandResult<SmgHostedAppDefinition[]>;
