import { Container, Token } from 'ditox';
import { TokenSubject } from '../types/index.js';
import { InjectionCue } from '../events/index.js';
import IInjectableHost from '../interfaces/injectable_host.js';

export function injectDependencies<
    TokenType extends Token<any>,
    DepsType extends TokenSubject<TokenType> = TokenSubject<TokenType>
>(
    element: IInjectableHost<DepsType>,
    requestedToken: TokenType
): Promise<void> {
    const injectionPromise = new Promise<DepsType>((resolve, reject) => {
            try {
                element.dispatchEvent(new InjectionCue(requestedToken, resolve));
            } catch (e: unknown) {
                    reject(e);
            }
    });
    
    return injectionPromise
        .then((deps: DepsType) => element.inject(deps))
        .catch((e: unknown) => console.error("Unable to retrieve dependencies", e));
}

export function injectionResolverFactory(container: Container): (r: InjectionCue<any>) => void {
    return (request: InjectionCue<any>): void => {
        if (!(request instanceof InjectionCue)) {
            console.log('Non-injection request supplied to injection resolver');
            return;
        }
    
        console.log("received injection request", request);
        if (!request.token || !request.callback) {
            console.error("Improperly formatted injection request", {...request});
    
            throw new Error("Unable to satisfy injection request: " + request.token);
        }

        const resolved = container.resolve(request.token);

        request.callback(resolved);
    };
}