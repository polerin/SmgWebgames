import { token } from 'ditox';
import MultipipeGameController from './multipipe_game_controller.js';
import { GameControllerConfig } from '../definitions.js';

export type MultipipeGameContainerDeps = {
    multipipeGameController: MultipipeGameController;
};

export type MultipipeGameControllerConfig = GameControllerConfig;

export const MultipipeGameContainerToken = token<MultipipeGameContainerDeps>('Multipipe Game Container Dependencies');
export const MultipipeGameControllerToken = token<MultipipeGameController>('Multipipe Game Controller');
export const MultipipeGameControllerConfigToken = token<MultipipeGameControllerConfig>('Multipipe Game Controller configuration');
