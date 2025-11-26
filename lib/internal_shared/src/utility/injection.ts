import { Container, Token } from 'ditox';

/**
 * This type represents a factory function that requires a container as it's only
 * argument, and will return a value of type T.
 * 
 * This type is used in the creation of multi-factory bindings, where these 
 * functions are called one by one to instantiate the requested objects.
 */
export type DitoxFactoryFunction<T> = (container: Container) => T;

/**
 * This represents a collection of DitoxFactoryFunctions.  They will
 * be called one by one to instantiate the requested objects.
 */
export type DitoxFactoryFunctionSet<T> = ReadonlyArray<DitoxFactoryFunction<T>>;

/**
 * This represents a function that uses the supplied _factory_ token to retrieve
 * a list of individual factory functions.  These functions are will then be used
 * to create an array of the requested values.
 * 
 * Please remeber, the individual factory methods should be bound to the
 * factory token, not whatever this MultiFactory is bound too.
 * @see createMultiFactory
 */
export type MultiFactory<SingleType> = DitoxFactoryFunction<Array<SingleType>> & {};

/**
 * This utility function is here to add the ability to register multiple factories for a type.
 * 
 * The basic problem is that while ditox does allow for the binding of multiple values to a token,
 * it does not have the ability to bind multiple factories to the same.  This neccesitates a
 * workaround such as this one.
 * 
 * During the binding phase, the basic flow is this:
 *  1) An enclosed generic function object (aka MultiFactory) is created, supplied with a ditox token,
 *      and returned.  All collected factories should be bound to this supplied (aka 'factory') token.
 *  2) This factory is bound to the a collective value token.  At this point, the created generic
 *      function object has not been called, and will not be called until the collection is needed.
 *      is required to satisfy another dependency
 *  3) Other bits of code register their factories to the _factory_ token.
 * 
 * After that, instantiation begins.  When a `resolve()` or `get` request is made to the collective
 * value token, the MultiFactory will use the _factory_ token to resolve all registered factories,
 * then iterate through and call them to create the requested collection of values.
 */
export function createMultiFactory<SingleType>(
    factoryToken: Token<DitoxFactoryFunctionSet<SingleType>>
): MultiFactory<SingleType> {
    // create our root function that will construct multiples
    return (container: Container): Array<SingleType> => {
        const factories = container.get(factoryToken);

        if (factories === undefined) {
            return [];
        }

        const output = factories.map((factory) => factory(container));

        return output;
    };
}
