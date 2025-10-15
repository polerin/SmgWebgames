import { bindModule, Container, createContainer, injectable } from 'ditox';
import {
    WelcomeController,
    WelcomeMenuToken,
    UserMenuController,
    UserMenuToken,
    SharedWorkerDeps,
    SMG_CORE_SHARED_WORKER,
    defaultAppActivityRegistry
} from '@shieldmaidengames/webgames-display-components';
import { ApplicationRootController, APPLICATION_ROOT_TOKEN, APPLICATION_ROOT_CONTROLLER_TOKEN, APPLICATION_ROOT_ACTIVITIES_TOKEN } from '../webcomponents/index.js';


export const FrontendContainer = createContainer();

FrontendContainer.bindFactory(WelcomeMenuToken, () => ({
     welcomeController: new WelcomeController()
}));

FrontendContainer.bindFactory(UserMenuToken, () => ({
    userMenuController: new UserMenuController()
}));

FrontendContainer.bindFactory(
    APPLICATION_ROOT_TOKEN,
    (container) => ({controller: container.resolve(APPLICATION_ROOT_CONTROLLER_TOKEN)})
);

FrontendContainer.bindValue(
    APPLICATION_ROOT_ACTIVITIES_TOKEN,
    defaultAppActivityRegistry
);

FrontendContainer.bindFactory(
    APPLICATION_ROOT_CONTROLLER_TOKEN,
    (container) => new ApplicationRootController(container.resolve(SMG_CORE_SHARED_WORKER))
);

bindModule(FrontendContainer, SharedWorkerDeps);


// /** todo re-evaluate */
// export function buildMutipipeFrontendDeps(parent: Container): Container {
//     const frontendDeps = createContainer(parent);

//     frontendDeps.bindValue(MultipipeGameControllerConfigToken, {
//         gameJsPath: "game/index.js",
//     })

//     frontendDeps.bindFactory(MultipipeGameControllerToken, injectable(
//         (config) => new MultipipeGameController(config),
//         MultipipeGameControllerConfigToken
//     ));

//     frontendDeps.bindFactory(MultipipeGameContainerToken, injectable(
//         (controller) => ({ multipipeGameController: controller}),
//         MultipipeGameControllerToken
//     ));

//     return frontendDeps;
// }
