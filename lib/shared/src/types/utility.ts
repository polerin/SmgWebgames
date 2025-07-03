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


/**
 * Utility type that allows a string (as MethodOf<>) or a function object as MethodDetail.
 * Both must extend MethodType
 */
export type MethodOfOrFunction<
    Subject extends MappedSubjectBase,
    MethodDetail extends keyof Subject & string,
    MethodType extends MappedMethodBase
> = MappedMethodBase | MethodOf<Subject, MethodDetail, MethodType>


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

export type CoordinatedMethodMap<
    Subject extends MappedSubjectBase,
    MethodType extends MappedMethodBase = MappedMethodBase ,
    MappedItemType extends CoordinatedMethodMapEntry<any, any, any> = CoordinatedMethodMapEntry<Subject, MethodType, any>
> = { [id: string] : MappedItemType };