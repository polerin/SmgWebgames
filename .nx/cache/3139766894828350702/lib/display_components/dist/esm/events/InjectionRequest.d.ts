import { Token } from 'ditox';
import { ComponentDependencies, TokenSubject } from '../types/component_dependencies.js';
export default class InjectionRequest<TokenType extends Token<DepType>, DepType extends ComponentDependencies = TokenSubject<TokenType>> extends Event {
    token: TokenType;
    callback: (deps: DepType | PromiseLike<DepType>) => void;
    static EVENT_NAME: "InjectionRequestEvent";
    constructor(token: TokenType, callback: (deps: DepType | PromiseLike<DepType>) => void);
}
//# sourceMappingURL=InjectionRequest.d.ts.map