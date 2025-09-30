import { ComponentDependencies } from '../../../types/index.js';
import { token } from 'ditox';
import WelcomeController from './welcomeController.js';

export type WelcomeMenuDeps = ComponentDependencies & {
    welcomeController: WelcomeController;
}

export const WelcomeMenuToken = token<WelcomeMenuDeps>('Welcome Menu Dependencies');