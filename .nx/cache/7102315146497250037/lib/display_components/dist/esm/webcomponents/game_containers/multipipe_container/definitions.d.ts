import MultipipeGameController from './multipipe_game_controller.js';
import { GameControllerConfig } from '../definitions.js';
export type MultipipeGameContainerDeps = {
    multipipeGameController: MultipipeGameController;
};
export type MultipipeGameControllerConfig = GameControllerConfig;
export declare const MultipipeGameContainerToken: import("ditox").Token<MultipipeGameContainerDeps>;
export declare const MultipipeGameControllerToken: import("ditox").Token<MultipipeGameController>;
export declare const MultipipeGameControllerConfigToken: import("ditox").Token<GameControllerConfig>;
//# sourceMappingURL=definitions.d.ts.map