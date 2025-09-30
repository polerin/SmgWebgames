import { ComponentDependencies } from '@shieldmaidengames/webgames-display-components';
import { token } from 'ditox';
import ApplicationRootController from './application_root_controller.js';

export type ApplicationRootDeps = ComponentDependencies & {
    controller: ApplicationRootController;
}

export const APPLICATION_ROOT_TOKEN = token<ApplicationRootDeps>('Application Root Dependencies');
export const APPLICATION_ROOT_CONTROLLER_TOKEN = token<ApplicationRootController>('Application Root Controller dependencies');