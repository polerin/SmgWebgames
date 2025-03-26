export type Typeguard<DesiredType> = (subject: unknown) => subject is DesiredType; 

/** Utility type that allows a string to be verified as a member method of an object */
export type MethodOf<
    Subject extends object,
    MethodName extends keyof Subject,
    MethodType extends Function
> = Subject[MethodName] extends MethodType ? MethodName : never;

export type MethodOfOrFunction<
    Subject extends object,
    MethodName extends keyof Subject,
    MethodType extends Function
> = MethodOf<Subject, MethodName, MethodType>
| ((...any: any[]) => void)
| ((...args: any[]) => Promise<void>) 


export type MethodMap<
    Subject extends object,
    MethodType extends Function,
    MappedItemType extends object = MethodOf<Subject, any, MethodType>
> = {
    [index: string] : MappedItemType
};

export type CoordinatedMethodMapEntry<
    Subject extends object,
    MethodType extends (...args:any) => any,
    ExtraConfig extends {[index: string] : any}
> =
    MethodOfOrFunction<Subject, any, MethodType> |
    {
        callback: MethodOf<Subject, any, MethodType> 
        beforeCallback?: (...params: any[]) => boolean,
        extraConfig?: ExtraConfig
    };

export type CoordinatedMethodMap<
    Subject extends object,
    MethodType extends (...args: any[]) => any,
    MappedItemType extends CoordinatedMethodMapEntry<any, any, any> = CoordinatedMethodMapEntry<Subject, MethodType, any>
> = {
    [index: string] : MappedItemType
};