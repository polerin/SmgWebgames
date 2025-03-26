import { PaginatedImperitive, PaginatedOutcome } from '@shieldmaidengames/webgames-shared';

/**
 * Asserts that subject is an array with values, and that each value is of the same root type
 * @todo it would be great to be able to pass in a non-base base type checker method
 */
export function isNonEmptyUniformArray<
    CollectionType extends ValueType[],
    ValueType extends 'string' | 'number' | 'boolean' | ((collectionItem: unknown) => boolean)
>(subject: unknown, valueType: ValueType): subject is CollectionType {
    return isUniformArray(subject, valueType) && subject.length > 0;
}

/**
 * Asserts that subject is an array and (if non-empty) that all values match the specified type
 */
export function isUniformArray<
    CollectionType extends ValueType[],
    ValueType extends 'string' | 'number' | 'boolean' | ((collectionItem: unknown) => boolean)
>(subject: unknown, valueType: ValueType): subject is CollectionType {
    const checker: (collectionItem: unknown) => boolean =
        typeof valueType === 'function' ? valueType : (item: unknown) => typeof item === valueType;

    return Array.isArray(subject) && subject.every(checker);
}

/**
 * Used in typechecking, asserts the subject is a defined object of type.
 *
 * Please note that this does not actually verify that it is the type, that
 * must be done inside of the consuming typechecking function.
 */
export function coerceToNonEmpty<T extends object>(subject: unknown): T | false {
    if (typeof subject !== 'object' || subject === null) {
        return false;
    }

    return subject as T;
}

/**
 * Used for filtering out undefined/null/empty values from an array
 */
export function filterNonEmpty<T>(item: unknown): item is T {
    return (
        item !== undefined &&
        item !== null &&
        !(Array.isArray(item) && item.length === 0) &&
        !(typeof item === 'object' && Object.values(item).length === 0)
    );
}

export function isNonEmptyString<
    SubjectType extends object,
    KeyName extends keyof SubjectType
>(subject: SubjectType, key: KeyName, optional = false): boolean {
    if (optional === true && !(key in subject)) {
        return true;
    }

    return (
        typeof subject[key] === 'string' &&
        subject[key] !== null &&
        subject[key] !== undefined &&
        subject[key] !== ''
    );
}

export function isPaginatedImperative(subject: unknown): subject is PaginatedImperitive {
    const imp = coerceToNonEmpty<PaginatedImperitive>(subject);

    if (
        imp === false ||
        typeof imp.page !== 'number' ||
        imp.page < 0 ||
        typeof imp.count !== 'number' ||
        imp.count < 1 
    ) { 
        return false;
    }

    return true;
}

export function isPaginatedOutcome(subject: unknown): subject is PaginatedOutcome {
    const outcome = coerceToNonEmpty<PaginatedOutcome>(subject);

    if (
        outcome === false ||
        typeof outcome.page !== 'number' ||
        outcome.page < 0 ||
        !(
            'total' in outcome &&
            typeof outcome.total === 'number' &&
            outcome.total >= 0
        ) 
    ) { 
        return false;
    }

    return true;
}