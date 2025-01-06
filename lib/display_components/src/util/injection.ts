import { Container, Token } from 'ditox';
import { ResolutionRequestSubject, TokenSubject } from '../types/index.js';
import { InjectionRequest } from '../events/index.js';

export function requestDependencies<
    TokenType extends Token<any>
>(
    element: HTMLElement,
    requestedToken: TokenType
): Promise<TokenSubject<TokenType>> {
    return new Promise<TokenSubject<TokenType>>((resolve, reject) => {
        try {
                element.dispatchEvent(new InjectionRequest(requestedToken, resolve));
        } catch (e: unknown) {
                reject(e);
        }
    });
}

export function injectionResolverFactory(container: Container): (r: InjectionRequest<any>) => void {
    console.info('creating injection resolver for container', container);

    return (request: InjectionRequest<any>): void => {
        if (!(request instanceof InjectionRequest)) {
            console.log('Non-injection request supplied to injection resolver');
            return;
        }
    
        console.log("received injection request", request);
        if (!request.token || !request.callback) {
            console.error("Improperly formatted injection request", {...request});
    
            throw new Error("Unable to satisfy injection request: " + request.token);
        }

        console.info("Resolving Injection request: ", request.token);
        const resolved = container.resolve(request.token);

        request.callback(resolved);
    };
}