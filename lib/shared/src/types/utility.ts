import { coerceToNonEmpty } from '../utility/index.js';

export type Typeguard<DesiredType> = (subject: unknown) => subject is DesiredType; 

export type MappedMethodBase = ((...any: any[]) => void) | ((...args: any[]) => Promise<void>);
export type MappedSubjectBase = {[index: string|number|symbol] : MappedMethodBase | any};

/** Utility type that filters out anything that doesn't match MethodOf<> */
type filterMethodOf<
    Subject extends MappedSubjectBase,
    MethodName extends unknown,
    MethodType extends MappedMethodBase,
    Outcome extends any
> = MethodName extends string ?
    MethodName extends keyof Subject ?
    Subject[MethodName] extends MethodType ? Outcome : never :never : never;

/** Utility type that allows a string to be verified as a member method of an object */
export type MethodOf<
    Subject extends MappedSubjectBase,
    MethodName extends keyof Subject & string,
    MethodType extends MappedMethodBase
> = MethodName extends keyof Subject ? Subject[MethodName] extends MethodType ? MethodName : never : never;

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

/**
 * Utility type that allows a string (as MethodOf<>) or a function object as MethodDetail.
 * Both must extend MethodType
 */
export type MethodOfOrFunction<
    Subject extends MappedSubjectBase,
    MethodDetail extends keyof Subject & string,
    MethodType extends MappedMethodBase
> = MappedMethodBase | MethodOf<Subject, MethodDetail, MethodType>

export function isCoordinatedMethod<
    MethodTarget extends MappedSubjectBase
>(methodTarget: MethodTarget, methodDefinition: unknown): methodDefinition is MethodOfOrFunction<MethodTarget, any, any> {
    if (typeof methodDefinition === 'function') {
        // no easy way to inspect params, alas
        return true;
    }

    return isMethodOf(methodTarget, methodDefinition);
}

/** Map of simple callbacks */
export type MethodMap<
    Subject extends MappedSubjectBase,
    MethodType extends MappedMethodBase,
    MappedItemType extends MethodOfOrFunction<Subject, any, MethodType>
> = {
    [index: string] : MappedItemType
};

export type CoordinatedMethodMapEntry<
    Subject extends MappedSubjectBase,
    MethodType extends MappedMethodBase,
    ExtraConfig extends {[index: string] : any}
> = CoordinatedMethodMapDetailedEntry<Subject, MethodType, ExtraConfig> 
    | MethodOfOrFunction<Subject, any, MethodType>;


export type CoordinatedMethodMapDetailedEntry<
    Subject extends MappedSubjectBase,
    MethodType extends MappedMethodBase,
    ExtraConfig extends {[index: string] : any},
> = filterMethodOf<Subject,keyof Subject | MappedMethodBase , MethodType, {
    callback: keyof Subject | MappedMethodBase;
    beforeCallback?: (...params: any[]) => boolean,
    extraConfig?: ExtraConfig
}>;

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

export type CoordinatedMethodMap<
    Subject extends MappedSubjectBase,
    MethodType extends MappedMethodBase = MappedMethodBase ,
    MappedItemType extends CoordinatedMethodMapEntry<any, any, any> = CoordinatedMethodMapEntry<Subject, MethodType, any>
> = { [id: string] : MappedItemType };