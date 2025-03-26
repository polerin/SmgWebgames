import { BaseApiController, buildAsyncHandler, EndpointFunction } from '@shieldmaidengames/webgames-internal-server-shared';
import { AvailableApplicationsDefinition } from '@shieldmaidengames/webgames-internal-server-shared';
import { AvailableApplicationsResult } from '@shieldmaidengames/webgames-shared';
import { Request, Response, Router } from 'express';

export default class ApplicationApiController extends BaseApiController
{
    public override addRoutes(router: Router): void {
        router.get(
            '/available',
            buildAsyncHandler(this.availableApplications as EndpointFunction<any, any>, this.getExtractor('availableApplications'))
        ); 
    }
    
    protected availableApplications = (def: AvailableApplicationsDefinition, req: Request, res: Response): Promise<AvailableApplicationsResult> => {
        throw new Error('not implementeded yet');
    }

}