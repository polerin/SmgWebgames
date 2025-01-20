import { AvailableApplicationsDefinition, AvailableApplicationsResult } from './definitions.js';
import {isAvailableApplicationsDefinition } from './typeguards.js';
import BaseCommandHandler from '../baseCommandHandler.js';
import { IHostedApplication } from '@shieldmaidengames/webgames-internal-server-shared';
import { SmgHostedAppDefinition } from '@shieldmaidengames/webgames-shared';

export default class ListHostedApplications extends BaseCommandHandler<AvailableApplicationsDefinition, AvailableApplicationsResult>
{
    protected override _commandHandlerName = 'core.applications.listHosted';

    protected override typeGuard = isAvailableApplicationsDefinition;

    protected applications: SmgHostedAppDefinition[] = [];

    public constructor(hosted: IHostedApplication[]) {
        super();
        this.applications = hosted.map((app) => app.definition);
    }

    protected handle(command: AvailableApplicationsDefinition): Promise<AvailableApplicationsResult> {
        return Promise.resolve(this.buildCommandResult(command, this.applications));
    }
}