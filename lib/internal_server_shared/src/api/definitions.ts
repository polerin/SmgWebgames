import type { NextFunction, Request, Response, Router } from 'express';

/**
 * API controllers should only expose endpoints (as EndpointFunction)
 * 
 * Private methods are ok for other things
 */
export interface IApiController {
    addRoutes(router: Router): void;
}

/**
 * Basic shape of an endpoint
 * 
 * This is used (in part) to help define the ExtractorMap
 */
export type EndpointFunction<DefinitionType, ResultType> =
    | ((definition: DefinitionType | undefined, req: Request, resp: Response, next?: NextFunction) => Promise<ResultType>)
    | ((definition: DefinitionType | undefined, req: Request, resp: Response) => Promise<ResultType>);

/**
 * Get the extractor type for an Endpoint function
 */
export type ExtractorForEndpoint<Endpoint> = Endpoint extends 
    EndpointFunction<infer DefinitionType, unknown> ? Extractor<DefinitionType> : never;
/**
 * Extractors are functions that accept an express request and return a command definition
 * 
 * The extractor should enforce the API endpoint validation and default values.
 * 
 * @throws ExtractionError when an invalid request is supplied
 */
export type Extractor<DefinitionType> = (req: Request) => DefinitionType;

/**
 * Map of Extractor functions to be injected into IApiController objects
 * 
 * This eases the automation of supplying an extractor to the endpoint.
 */
export type ExtractorMap = Map<string, Extractor<any>>;
