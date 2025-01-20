import { Router } from 'express';
import { ExtractorMap, IApiController, Extractor } from './definitions.js';

export default abstract class BaseApiController implements IApiController
{

    public abstract addRoutes(router: Router): void;

    constructor(
        protected extractorMap: ExtractorMap,
    ) {}

    protected getExtractor(endpointName: string): Extractor<any> | undefined {
        return this.extractorMap.get(endpointName);
    }
}