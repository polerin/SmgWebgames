import { Container, Token } from 'ditox';
import { ResolutionRequestSubject, TokenSubject } from '../types/index.js';
export declare function requestDependencies<TokenType extends Token<any>>(element: HTMLElement, requestedToken: TokenType): Promise<TokenSubject<TokenType>>;
export declare function injectionResolverFactory(container: Container): ResolutionRequestSubject<any>;
//# sourceMappingURL=injection.d.ts.map