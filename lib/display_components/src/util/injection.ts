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

export function injectionResolverFactory(container: Container): ResolutionRequestSubject<any> {
    return (request: InjectionRequest<any>) => container.resolve(request.token);
}