import { Container, Token } from 'ditox';
import { isTokenBindingDefinition, TokenBindingDefinition } from '../types/index.js';
import { BindingAlreadyDefined, InvalidTokenBindingDefintion, UnknownToken } from '../errors/index.js';


/**
 * A Token module is a consumable set of dependency injection tokens with
 * associated factories or values.  This can later be used to bind
 * factories/tokens to a container, either one at a time or in bulk.
 */
export class TokenModule {
    private bindingMap: Map<symbol, TokenBindingDefinition<any>> = new Map();

    constructor(bindings?: TokenBindingDefinition<any>[]) {
        if (Array.isArray(bindings)) {
            bindings.forEach(this.bind);
        }
    }

    /**
     * Add the specifed binding definition or definitions to this module.
     * 
     * This does not add it to a container, just makes it available for later binding
     */
    public bind = (binding: TokenBindingDefinition<any> | TokenBindingDefinition<any>[]): void => {
        if (Array.isArray(binding)) {
            binding.forEach(this.bind)
            return;
        }

        if (!isTokenBindingDefinition(binding)) {
            throw new InvalidTokenBindingDefintion(
                "Detected invalid binding definition",
                { suppliedDefinition: binding }
            );
        }

        const target = binding.token.symbol;

        if (this.bindingMap.has(target)) {
            throw new BindingAlreadyDefined(
                "TokenModule already contains a definition for this token",
                { token: binding.token }
            );
        }

        this.bindingMap.set(target, binding);
    }

    /**
     * Bind all pre-created definitions to the specified container
     */
    public bindInContainer(container: Container, except?: Token<any>[]): void {
        let selected = Array.from(this.bindingMap.values());

        if (except !== undefined && except.length !== 0) {
            selected.filter((item) => !except.includes(item.token));
        }

        for (const entry of selected) {
            this.bindDefinition(entry, container);
        }
    }

    /**
     * Bind a token that has been pre-registered with this module to the specified container
     * 
     * If the binding is not known or 
     */
    public bindTokenInContainer(token: Token<any>, container: Container, rebind = false): void {
        const binding = this.bindingMap.get(token.symbol);

        if (binding === undefined) {
            throw new UnknownToken("Attempting to bind an unknown token to a container", { token });
        }

        if (container.hasToken(token) && rebind === false) {
            throw new BindingAlreadyDefined("Specified container already has a binding for token", { token });
        } else if (container.hasToken(token)) {
            container.remove(token);
        }

        this.bindDefinition(binding, container);
    }

    /**
     * Bind a specific TokenBindingDefinition to the specified Container
     */
    private bindDefinition(def: TokenBindingDefinition<any>, container: Container): void {
        if (def.value !== undefined) {
            container.bindValue(def.token, def.value);
        } else if (def.factory) {
            container.bindFactory(def.token, def.factory, def.factoryOptions);
        }
    }
}
