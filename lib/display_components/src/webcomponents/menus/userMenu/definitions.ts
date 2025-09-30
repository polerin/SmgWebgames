import { ComponentDependencies } from '../../../types/index.js';
import { token } from 'ditox';
import UserMenuController from './userMenuController.js';

export type UserMenuDeps = ComponentDependencies & {
    userMenuController: UserMenuController;
}

export const UserMenuToken = token<UserMenuDeps>('Welcome Menu Dependencies');