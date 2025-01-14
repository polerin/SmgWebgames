import { createContainer } from 'ditox';
import { WelcomeController, WelcomeMenuToken } from '@shieldmaidengames/webgames-display-components';
import { ApplicationRootController, ApplicationRootToken } from './webcomponents/index.js';

export const FrontendContainer = createContainer();

FrontendContainer.bindFactory(WelcomeMenuToken, () => ({
     welcomeController: new WelcomeController()
}));

FrontendContainer.bindFactory(ApplicationRootToken, () => ({
     controller: new ApplicationRootController()
}));
