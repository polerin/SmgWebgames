import { coerceToNonEmpty, isNonEmptyString, isPaginatedImperative, isPaginatedOutcome } from '@shieldmaidengames/webgames-shared';
import { BaseCommandDefinition, BaseCommandResult, PaginatedCommandDefinition, PaginatedCommandResult } from './types.js';

export function isBaseCommandDefinition(subject: unknown): subject is BaseCommandDefinition<any> {
    const command = coerceToNonEmpty<BaseCommandDefinition<any>>(subject); 

    if (command === false) {
        return false;
    }

    if (isNonEmptyString(command, 'commandName') &&
        isNonEmptyString(command, 'commandInstanceId', true)
    ) {
        return true;
    }

    return false;
}

export function isBaseCommandResult(subject: unknown): subject is BaseCommandResult<any> {
    const result = coerceToNonEmpty<BaseCommandResult<any>>(subject);

    if (result === false) {
        return false;
    }

    if (
        typeof result.commandName !== 'string' ||
        typeof result.commandHandler !== 'string' ||
        result.commandName === '' ||
        result.commandHandler === '' ||
        !(
            'commandInstanceId' in result &&
            typeof result.commandInstanceId === 'string' &&
            result.commandInstanceId !== ''
        )
    ) {
        return false;
    }

    return true;
}

export function isPaginatedDefinition(subject: unknown): subject is PaginatedCommandDefinition<any> {
    if (!isBaseCommandDefinition(subject) || !isPaginatedImperative(subject)) {
        return false;
    }
     
    return true;
}

export function isPaginatedResult(subject: unknown): subject is PaginatedCommandResult<any> {
    if (!isBaseCommandResult(subject) || !isPaginatedOutcome(subject)) {
        return false;
    }

    return true;
}