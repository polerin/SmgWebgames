import { DetailedError } from '../../errors/index.js';

export type ICue = Event & { EVENT_NAME: string; };

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

export type ConstructorObject<T> = { new (...args: any[]): T };