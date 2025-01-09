import { ComponentDependencies } from '../../../types/index.js';
import { token } from 'ditox';
import PlayGameActivityController from './play_game_activity_controller.js';

export type PlayGameActivityDeps = ComponentDependencies & {
    controller: PlayGameActivityController;
}

export const PlayGameActivityToken = token<PlayGameActivityDeps>('Play Game Activity Dependencies');