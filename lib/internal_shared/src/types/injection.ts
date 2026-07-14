import { Token, Container, FactoryOptions } from 'ditox'
import { coerceToNonEmpty } from '@shieldmaidengames/webgames-shared';

/**
 * Typecheck for TokenBinding<T>
 */
export function isTokenBindingDefinition(subject: unknown): subject is TokenBindingDefinition<any> {
    const binding = coerceToNonEmpty<TokenBindingDefinition<unknown>>(subject);

    if (binding === false) {
        return false;
    }

    if (binding.token === undefined) {
        // token is required
        return false;
    }

    if (binding.factory === undefined && binding.value === undefined) {
        // you need at least one of these
        return false;
    }

    if (binding.factory !== undefined && binding.value !== undefined) {
        // don't allow both factory and value, because that doesn't make sense.
        return false;
    }

    if (binding.value !== undefined && binding.factoryOptions !== undefined) {
        //factory options only make sense on factories
        return false;
    }

    return true;
}

/**
 * Data type describing a valid Ditox binding call
 */
export type TokenBindingDefinition<T> = {
    token: Token<T>,
    factory?: (container: Container) => T
    value?: T,
    factoryOptions?: FactoryOptions<T>
};
