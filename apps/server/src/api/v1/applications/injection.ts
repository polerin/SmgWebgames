import { ExtractorMap, IApiController } from '@shieldmaidengames/webgames-internal-server-shared';
import { token, Container, declareModule, injectable } from 'ditox';
import * as extractors from './extractors/index.js';
import ApplicationApiController from './controller.js';

export const API_V1_APPLICATIONS_EXTRACTORS_TOKEN = token<ExtractorMap>('API v1 Applications controller request extractors');
export const API_V1_APPLICATIONS_CONTROLLER_TOKEN = token<IApiController>('API v1 Applications controller');


export function bindApiV1ApplicationsDependencies(container: Container) {
    container.bindValue(API_V1_APPLICATIONS_EXTRACTORS_TOKEN, extractors);
    container.bindFactory(API_V1_APPLICATIONS_CONTROLLER_TOKEN, injectable(
        (extractors) => new ApplicationApiController(extractors),
        API_V1_APPLICATIONS_EXTRACTORS_TOKEN
    ));
}
