import { ActivityTemplateRegistry, ComponentDependencies, DefaultAppActivities } from '@shieldmaidengames/webgames-display-components';
import { token } from 'ditox';
import ApplicationRootController from './applicationRootController.js';

export type ApplicationRootDeps = ComponentDependencies & {
    controller: ApplicationRootController;
    activities: ActivityTemplateRegistry<DefaultAppActivities>;
}

export const APPLICATION_ROOT_TOKEN = token<ApplicationRootDeps>('Application Root Dependencies');
export const APPLICATION_ROOT_CONTROLLER_TOKEN = token<ApplicationRootController>('Application Root Controller dependencies');
export const APPLICATION_ROOT_ACTIVITIES_TOKEN = token<ActivityTemplateRegistry<DefaultAppActivities>>('Application Root activity templates');