import DetailedError from '../errors/detailed_error.js';
import { CoordinatedMethodMap, CoordinatedMethodMapDetailedEntry, CoordinatedMethodMapEntry, MappedMethodBase, MappedSubjectBase } from '../types/index.js';
import { isCoordinatedMethod, isCoordinatedMethodMapDetailedEntry } from './typeguards.js';

export default class MessageMapHandler<
    Subject extends MappedSubjectBase,
    MethodType extends MappedMethodBase = MappedMethodBase,
    MappedItemType extends CoordinatedMethodMapEntry<Subject, MethodType, any> = CoordinatedMethodMapEntry<Subject, MethodType, any>,
    MapType extends CoordinatedMethodMap<Subject, MethodType, MappedItemType> = CoordinatedMethodMap<Subject, MethodType, MappedItemType>,
    DetailEntry extends CoordinatedMethodMapDetailedEntry<Subject, MethodType, any> = CoordinatedMethodMapDetailedEntry<Subject, MethodType, any>
> {

    private mapFns: Record<string, MethodType> = {};

    constructor(
        subject: Subject,
        protected map: MapType = {} as MapType
    ) {
        this.buildMapFunctions(subject, map);
    }

    public buildMapFunctions(subject: Subject, map: MapType): void {
        for (const key in map) {
            this.addMapFunction(subject, key, map[key])
        }
    }

    public addMapFunction(subject: Subject, messageName: string, handler: unknown): void {
        if (this.mapFns[messageName]) {
            throw new DetailedError('Attempting to add an entry with a key that is already in use', {messageName});
        }

        if (!isCoordinatedMethod(subject, handler) && !isCoordinatedMethodMapDetailedEntry(subject, handler)) {
            return;
        }

        try {
            // @todo this is an ugly type juggle
            this.mapFns[messageName] = this.buildMapFunction(subject, handler as unknown as MappedItemType);
        } catch (errorDetails) {
            console.error('Encountered error building Map Function', {messageName, handler, errorDetails});
        }
    }

    public handle(key: keyof MapType, data: unknown): void | Promise<void> {
        if (key in this.mapFns) {
            this.mapFns[key](data);

            return;
        }
    }

    public getKeyDetails(key: keyof MapType): DetailEntry['extraConfig'] | undefined {
        if (!(typeof this.map[key] === 'object')  || this.map[key] === null) {
            return undefined;
        }
        
        return ('extraConfig' in this.map[key]) ? this.map[key].extraConfig : undefined;
    } 

    protected buildMapFunction(subject: Subject, entry: MappedItemType) {
        switch (typeof entry) {
            case 'function': 
                return entry as unknown as MethodType;

            case 'string':
                return this.buildStringKeyMethod(subject, entry);

            case 'object':
                return this.buildObjectKeyMethod(subject, entry);

            default:
                throw new DetailedError('unknown map entry type supplied', { type: typeof entry, entry });
        }
    }

    protected buildStringKeyMethod(subject: Subject, methodName: keyof Subject): MethodType {
        if (!(methodName in subject) || typeof subject[methodName] !== 'function') {
            throw new DetailedError('Invalid string map entry supplied', {methodName, subject} )
        }

        // Build a handler function for the string key type
        return ((...args: any[]) => {
            if (!(methodName in subject) || typeof subject[methodName] !== 'function') {
                throw new DetailedError('Mapped handler is no longer a function', {methodName, subject} )
            }

            subject[methodName](...args);
        }) as MethodType;
    }

    protected buildObjectKeyMethod(subject: Subject, methodObject: object) : MethodType {
        if (!isCoordinatedMethodMapDetailedEntry(subject, methodObject)) {
            throw new DetailedError('invalid detailed message handling object supplied', {methodObject});
        }
        if (methodObject.beforeCallback !== undefined && typeof methodObject.beforeCallback !== 'function') {
            throw new DetailedError('Mapped handler beforeCallback is not a function', {type: typeof methodObject.beforeCallback});
        }      
        const callback = methodObject.callback;
        const beforeCallback = methodObject.beforeCallback ?? (() => true);

        if (typeof callback === 'string' ) {
            callback;
            subject[callback]();
        }

        if (typeof callback === 'function') {
            return ((...args: any[]) => {
                if (beforeCallback(...args) === false) {
                    console.info('Method handler beforeCallback returned false', {methodObject, args})
                    // our before filter said not to execute this
                    return;
                }
                
                callback(...args);

            }) as MethodType;
        }
                   
        //build a handler function for the DetailEntry type 
        return ((...args: any[]) => {
            if (beforeCallback(...args) === false) {
                // our before filter said not to execute this
                return;
            }

            if (callback in subject && typeof subject[callback] === 'function') {
               subject[callback](...args);

               return;
            }

            throw new DetailedError('Mapped handler does not have viable callback', {methodObject});
        }) as MethodType;
    }
}