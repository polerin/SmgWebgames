import { Token } from 'ditox';
import { ComponentDependencies, TokenSubject } from '../types/component_dependencies.js';
export default class InjectionCue<TokenType extends Token<DepType>, DepType extends ComponentDependencies = TokenSubject<TokenType>> extends Event {
    readonly token: TokenType;
    readonly callback: (deps: DepType | PromiseLike<DepType>) => void;
    static EVENT_NAME: "InjectionCueEvent";
    constructor(token: TokenType, callback: (deps: DepType | PromiseLike<DepType>) => void);
}
//# sourceMappingURL=InjectionCue.d.ts.map