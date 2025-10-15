
import { isLoginAttempt, isLoginOutcome } from '../../types/index.js';
import type { LoginOutcome, LoginAttempt } from '../../types/index.js';
import { coerceToMessageType } from '../types/index.js';
import type { MessageBase } from '../types/index.js';
import { AppMessageNames } from './constants.js';

/**
 * Message sent from contexts to the shared worker describing a login attempt by a user
 */
export type LoginAttemptMessage = MessageBase<typeof AppMessageNames.LoginAttempt, LoginAttempt>;

export function isLoginAttemptMessage(subject: unknown): subject is LoginAttemptMessage {
    const msg = coerceToMessageType(subject, AppMessageNames.LoginAttempt);

    if (msg === false || !isLoginAttempt(msg.data)) {
        console.info('Not a login attempt message!', {subject, msg});
        return false;
    }

    return true;
}

/**
 * Message sent from the shared worker to contexts describing the outcome of a login attempt
 */
export type LoginOutcomeMessage = MessageBase<typeof AppMessageNames.LoginOutcome, LoginOutcome>;

export function isLoginOutcomeMessage(subject:unknown): subject is LoginOutcomeMessage {
    const msg = coerceToMessageType(subject, AppMessageNames.LoginOutcome);

    if (msg === false || !isLoginOutcome(msg.data)) {
        return false;
    }

    return true;
}