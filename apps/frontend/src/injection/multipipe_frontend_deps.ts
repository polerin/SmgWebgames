import { Container, createContainer, injectable } from 'ditox';
import { MultipipeGameContainerToken, MultipipeGameController, MultipipeGameControllerConfigToken, MultipipeGameControllerToken } from '@shieldmaidengames/webgames-display-components';
// import { MULTIPIPE_GAME_TOKENS } from './multipipe_game_tokens.js';

export function buildMutipipeFrontendDeps(parent: Container): Container {
    const gameDeps = createContainer(parent);

    gameDeps.bindValue(MultipipeGameControllerConfigToken, {
        gameJsPath: "game/index.js",
    })

    gameDeps.bindFactory(MultipipeGameControllerToken, injectable(
        (config) => new MultipipeGameController(config),
        MultipipeGameControllerConfigToken
    ));

    gameDeps.bindFactory(MultipipeGameContainerToken, injectable(
        (controller) => ({ multipipeGameController: controller}),
        MultipipeGameControllerToken
    ));

    return gameDeps;
}
