import { Token } from 'ditox';
import { InjectionCue } from '../events/index.js';

export type ComponentDependencies = {};


export type TokenSubject<TokenType> = TokenType extends Token<infer SubjectType> ? SubjectType : never;
export type ResolutionRequestSubject<RequestType> = RequestType extends InjectionCue<any, infer DepType> ? DepType : never;
export type InjectionResolver<RequestType extends InjectionCue<any, any>> = (request: RequestType) => ResolutionRequestSubject<RequestType>;
