import { BaseApiController, buildAsyncHandler } from '@shieldmaidengames/webgames-internal-server-shared';
import { AvailableApplicationsDefinition } from '@shieldmaidengames/webgames-internal-server-shared';
import { Request, Response, Router } from 'express';

export default class ApplicationApiController extends BaseApiController
{
    public override addRoutes(router: Router): void {
        router.get(
            '/available',
            buildAsyncHandler(this.availableApplications, this.getExtractor('availableApplications'))
        ); 
    }
    
    protected availableApplications = (def: AvailableApplicationsDefinition, req: Request, res: Response): AvailableApplicationsResult => {

    }

}