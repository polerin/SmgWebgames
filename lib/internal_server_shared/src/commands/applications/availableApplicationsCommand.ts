import { AvailableApplicationsDefinition, AvailableApplicationsResult } from './definitions.js';
import {isAvailableApplicationsDefinition } from './typeguards.js';
import BaseCommandHandler from '../baseCommandHandler.js';
import { IHostedApplication } from '@shieldmaidengames/webgames-shared';

export default class ListHostedApplications extends BaseCommandHandler<AvailableApplicationsDefinition, AvailableApplicationsResult>
{
    protected override _commandHandlerName = 'core.applications.listHosted';

    protected override typeGuard = isAvailableApplicationsDefinition;

    protected applications: SmgHostedApplicationDescription[] = [];

    public constructor(hosted: IHostedApplication[]) {

    }

    protected handle(command: AvailableApplicationsDefinition): Promise<AvailableApplicationsResult> {
        return Promise.resolve(this.buildCommandResult(command, this.hosted));
    }
}