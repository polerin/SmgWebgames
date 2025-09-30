import { MessageBase } from './types/base_message.js';
import { coerceToNonEmpty, isNonEmptyString } from '../utility/typeguards.js';
import { CoordinatedMethodMapDetailedEntry, MappedMethodBase, MappedSubjectBase, MethodOf, MethodOfOrFunction } from '../types/utility.js';
import { DetailedError } from '../errors/index.js';

export function isMessageBase(subject: unknown, expectedName?: string): subject is MessageBase<any, any> {
    const msg = coerceToNonEmpty<MessageBase<any, any>>(subject);

    if (msg === false || !isNonEmptyString(msg, 'name') || typeof msg.data !== 'object') {
       return false; 
    }

    if (expectedName !== undefined && msg.name !== expectedName) {
        return false;
    }

    return true;
}

export function coerceToMessageType<
    MessageType extends MessageBase<any, any> = MessageBase<any, any>
>(subject: unknown, expectedName?: string): MessageType | false {
    if (!isMessageBase(subject, expectedName)) {
        return false;
    }

    if (expectedName!== undefined && subject.name !== expectedName) {
        return false;
    }

    return <MessageType>subject;
}

/**
 * @todo this is a little sketch still, add more detail
 */
export function isCoordinatedMethodMapDetailedEntry<
    MapSubject extends MappedSubjectBase,
    MapMethodType extends MappedMethodBase = MappedMethodBase,
>(
    mapSubject: MapSubject,
    typecheckSubject: unknown
): typecheckSubject is CoordinatedMethodMapDetailedEntry<MapSubject, MapMethodType, any> {
    const entry = coerceToNonEmpty<CoordinatedMethodMapDetailedEntry<MapSubject, MapMethodType, any>>(typecheckSubject);

    if (entry === false) {
        return false;
    }
    
    return isCoordinatedMethod(mapSubject, entry.callback) &&
        (entry.beforeCallback === undefined || typeof entry.beforeCallback === 'function');
}

export function isMethodOf<MethodTarget extends MappedSubjectBase, MethodName extends string & keyof MethodTarget>(methodTarget: MethodTarget, methodName: MethodName | unknown): methodName is MethodOf<MethodTarget, MethodName, any> {
    // I hates it my precious
    if (typeof methodName !== 'string' ||
        !(methodName in methodTarget) ||
        typeof methodTarget[methodName] !== 'function'
    ) {
        return false;
    }

    return true;
}

export function isCoordinatedMethod<
    MethodTarget extends MappedSubjectBase
>(methodTarget: MethodTarget, methodDefinition: unknown): methodDefinition is MethodOfOrFunction<MethodTarget, any, any> {
    if (typeof methodDefinition === 'function') {
        // no easy way to inspect params, alas
        return true;
    }

    return isMethodOf(methodTarget, methodDefinition);
}

export function buildIsCue<TargetType extends Event>() {
    const targetClass: (new (...args: any[]) => TargetType) = arguments[0];

    if (targetClass === undefined ||
        targetClass === null ||
        !('prototype' in targetClass) ||
        !(targetClass.prototype instanceof Event) ||
        !('EVENT_NAME' in targetClass) ||
        !(typeof targetClass.EVENT_NAME === 'string') 
    ) {
        throw new DetailedError('Attempting to build a cue typeguard from a non-cue class', {targetClass});
    }

    return (subject: unknown): subject is TargetType => {
        return subject instanceof targetClass && subject.type === targetClass.EVENT_NAME;
    }
}