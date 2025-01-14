import { Container, Token } from 'ditox';
export type DitoxFactoryFunction<T> = (container: Container) => T;
export type DitoxFactoryFunctionSet<T> = ReadonlyArray<DitoxFactoryFunction<T>>;
export type MultiFactory<SingleType> = DitoxFactoryFunction<Array<SingleType>> & {};
/** Create a factory function that calls multiple  */
export declare function createMultiFactory<SingleType>(factoryToken: Token<DitoxFactoryFunctionSet<SingleType>>): MultiFactory<SingleType>;
//# sourceMappingURL=injection.d.ts.map