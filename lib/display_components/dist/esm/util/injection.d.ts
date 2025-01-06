import { Container, Token } from 'ditox';
import { TokenSubject } from '../types/index.js';
import { InjectionRequest } from '../events/index.js';
export declare function requestDependencies<TokenType extends Token<any>>(element: HTMLElement, requestedToken: TokenType): Promise<TokenSubject<TokenType>>;
export declare function injectionResolverFactory(container: Container): (r: InjectionRequest<any>) => void;
//# sourceMappingURL=injection.d.ts.map