/** Create a factory function that calls multiple  */
export function createMultiFactory(factoryToken) {
    // create our root function that will construct multiples
    return (container) => {
        const factories = container.get(factoryToken);
        console.log('Multifactory', factoryToken, factories);
        if (factories === undefined) {
            return [];
        }
        const output = factories.map((factory) => factory(container));
        return output;
    };
}
//# sourceMappingURL=injection.js.map