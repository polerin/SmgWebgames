import { ComponentDependencies } from '@shieldmaidengames/webgames-display-components';
import { token } from 'ditox';
import ApplicationRootController from './application_root_controller.js';

export type ApplicationRootDeps = ComponentDependencies & {
    controller: ApplicationRootController;
}

export const ApplicationRootToken = token<ApplicationRootDeps>('Application Root Dependencies');