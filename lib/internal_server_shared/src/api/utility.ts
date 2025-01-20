import type { NextFunction, Request, Response } from 'express';

import type { EndpointFunction, ExtractorForEndpoint } from './definitions.js';
import { DetailedError } from '@shieldmaidengames/webgames-shared';

export function buildAsyncHandler<FnType extends EndpointFunction<any, any>>(
    controllerFunction: FnType,
    extractor?: ExtractorForEndpoint<FnType> | undefined
) {
    return (req: Request, res: Response, next?: NextFunction): void => {
        const requestDef = extractor !== undefined ? extractor(req) : undefined;
        
        controllerFunction(requestDef, req, res, next)
            .then((result) => res.status(200).send(result))
            .catch((error) => buildErrorResponse(res, error));
    };
}

export function buildErrorResponse(res: Response, error: unknown) {
    if (error instanceof Error) {
        res.status(500).send({
            message: error.message,
        });

        return;
    }

    if (error instanceof DetailedError) {
        res.status(500).send({
            message: error.message,
            details: error.details,
        });

        return;
    }

    res.status(500).send({
        message: 'Unknown Error',
    });
}