import { RegisteredActivities } from '../constants/index.js';
import { RegisteredActivity } from '../types/activities.js';

/**
 * Is the subject one of the registered activities
 */
export function isRegisteredActivity(subject: unknown): subject is RegisteredActivity {
    return typeof subject === 'string' && RegisteredActivities.includes(subject as RegisteredActivity);
}