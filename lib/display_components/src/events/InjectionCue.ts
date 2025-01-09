import { Token } from 'ditox';
import { ComponentDependencies, TokenSubject } from '../types/component_dependencies.js';

export default class InjectionCue<
    TokenType extends Token<DepType>,
    DepType extends ComponentDependencies = TokenSubject<TokenType>
> extends Event {
    public static EVENT_NAME = 'InjectionCueEvent' as const;

    public constructor(
        public readonly token: TokenType,
        public readonly callback: (deps: DepType | PromiseLike<DepType>) => void) {
            super(InjectionCue.EVENT_NAME, { bubbles: true, composed: true}    
        );
    }
}
