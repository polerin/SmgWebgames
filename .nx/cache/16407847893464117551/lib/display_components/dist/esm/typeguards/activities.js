import { RegisteredActivities } from '../constants/index.js';
/**
 * Is the subject one of the registered activities
 */
export function isRegisteredActivity(subject) {
    return typeof subject === 'string' && RegisteredActivities.includes(subject);
}
//# sourceMappingURL=activities.js.map