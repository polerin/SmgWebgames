import { isPaginatedDefinition } from '../typeguards.js';
import { AvailableApplicationsDefinition } from './definitions.js';


/**
 * @todo add User checking to this when login is supported
 */
export function isAvailableApplicationsDefinition(subject: unknown): subject is AvailableApplicationsDefinition {
    if (!isPaginatedDefinition(subject)) {
        return false;
    }

    return true;
}