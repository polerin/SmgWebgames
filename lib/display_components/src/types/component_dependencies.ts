import { Token } from 'ditox';
import { InjectionRequest } from '../events/index.js';

export type ComponentDependencies = {};


export type TokenSubject<TokenType> = TokenType extends Token<infer SubjectType> ? SubjectType : never;
export type ResolutionRequestSubject<RequestType> = RequestType extends InjectionRequest<any, infer DepType> ? DepType : never;
export type InjectionResolver<RequestType extends InjectionRequest<any, any>> = (request: RequestType) => ResolutionRequestSubject<RequestType>;
