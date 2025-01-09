import { ComponentDependencies } from '../../../types/index.js';
import { token } from 'ditox';
import FindGameActivityController from './find_game_activity_controller.js';

export type FindGameActivityDeps = ComponentDependencies & {
    controller: FindGameActivityController;
}

export const FindGameActivityToken = token<FindGameActivityDeps>('Find Game Activity Dependencies');