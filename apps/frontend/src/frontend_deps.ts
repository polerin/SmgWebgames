import { createContainer } from 'ditox';
import { FRONTEND_TOKENS } from './frontend_tokens.js';
import { WelcomeController } from '@shieldmaidengames/multipipe-display-components';

export const FrontendContainer = createContainer();

FrontendContainer.bindFactory(FRONTEND_TOKENS.WelcomeMenu, () => ({
     welcomeController: new WelcomeController()
}));