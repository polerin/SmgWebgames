import { coerceToNonEmpty, isNonEmptyString } from '../utility/index.js';

export type SmgUser = {
    name: string;
}

export function isSmgUser(subject: unknown): subject is SmgUser {
    const user = coerceToNonEmpty<SmgUser>(subject);

    if (user !== false && isNonEmptyString(user, 'name')) {
        return true;
    }

    return false;
}

export type CoreApplicationState = {
    currentUser: SmgUser | undefined,
    // connectedInstances?
};

export function isCoreApplicationState(subject: unknown): subject is CoreApplicationState {
    const state = coerceToNonEmpty<CoreApplicationState>(subject);

    if (state === false) {
        return false;
    }

    if (state.currentUser === undefined || isSmgUser(state.currentUser)) {
        return true;
    }

    return false;    
}

/**
 * Details needed to attempt logging in a user
 */
export type LoginAttempt = {
    user: SmgUser;
};

export function isLoginAttempt(subject: unknown): subject is LoginAttempt {
    const result = coerceToNonEmpty<LoginAttempt>(subject);

    if (result !== false && isSmgUser(result.user)) {
        return true;
    }

    return false;
}


/**
 * Data describing the result of a login attempt
 */
export type LoginOutcome = {
    user?: SmgUser;
    outcome: 'Success' | 'Failure' | 'Pending';
};

export function isLoginOutcome(subject: unknown): subject is LoginOutcome {
    const result = coerceToNonEmpty<LoginOutcome>(subject);

    if (result === false || !isSmgUser(result.user)) {
        return false;
    }

    if (result.outcome !== 'Success' && result.outcome !== 'Failure' && result.outcome !== 'Pending') {
        return false;
    }

    return true;
}

/**
 * This type describes any kind of request/definition/etc
 * that is supplied to get a paginated outcome.  API Requests
 * Command definitions, Event Cues, etc.
 * 
 * This is mostly useful at the typechecking level.
 */
export type PaginatedImperitive = {
    /**
     * How many records to return
     */
    count: number;

    /**
     * What page (based on count) is being requested.  0 based
     */
    page: number;
};

export type PaginatedOutcome = {
    /**
     * How many total records are available for this request
     * 
     * May not be available for all request types
     */
    total?: number;

    /**
     * The page this set of records relate too
     */
    page: number;
    
}