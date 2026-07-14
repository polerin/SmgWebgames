import type { Container } from 'ditox';
import {
    WelcomeController,
    WelcomeMenuToken,
    UserMenuController,
    UserMenuToken,
    SMG_CORE_SHARED_WORKER,
    defaultAppActivityRegistry
} from '@shieldmaidengames/webgames-display-components';
import { ApplicationRootController, APPLICATION_ROOT_TOKEN, APPLICATION_ROOT_CONTROLLER_TOKEN, APPLICATION_ROOT_ACTIVITIES_TOKEN } from '../webcomponents/index.js';
import { TokenModule } from '@shieldmaidengames/webgames-internal-shared';


export const FrontendBindings = new TokenModule([
    {
        token: WelcomeMenuToken, 
        factory: () => new WelcomeController()
    },
    {
        token:UserMenuToken,
        factory: () => new UserMenuController()
    },
    {
        token: APPLICATION_ROOT_TOKEN,
        factory: (container: Container) => ({controller: container.resolve(APPLICATION_ROOT_CONTROLLER_TOKEN)})
    },
    {
        token: APPLICATION_ROOT_ACTIVITIES_TOKEN,
        value: defaultAppActivityRegistry
    },
    {
        token: APPLICATION_ROOT_CONTROLLER_TOKEN,
        factory: (container: Container) => new ApplicationRootController(container.resolve(SMG_CORE_SHARED_WORKER))
    },
]);
