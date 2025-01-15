import { Container, Token } from 'ditox';
import { TokenSubject } from '../types/index.js';
import { InjectionCue } from '../events/index.js';
import IInjectableHost from '../interfaces/injectable_host.js';
export declare function injectDependencies<TokenType extends Token<any>, DepsType extends TokenSubject<TokenType> = TokenSubject<TokenType>>(element: IInjectableHost<DepsType>, requestedToken: TokenType): Promise<void>;
export declare function injectionResolverFactory(container: Container): (r: InjectionCue<any>) => void;
//# sourceMappingURL=injection.d.ts.map