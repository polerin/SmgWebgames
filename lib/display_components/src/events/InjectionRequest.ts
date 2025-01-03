import { Token } from 'ditox';
import { ComponentDependencies, TokenSubject } from '../types/component_dependencies.js';

export default class InjectionRequest<
    TokenType extends Token<DepType>,
    DepType extends ComponentDependencies = TokenSubject<TokenType>
> extends Event {
    public static EVENT_NAME = 'InjectionRequestEvent' as const;

    public constructor(
        public token: TokenType,
        public callback: (deps: DepType | PromiseLike<DepType>) => void) {
        super(InjectionRequest.EVENT_NAME);
    }
}
