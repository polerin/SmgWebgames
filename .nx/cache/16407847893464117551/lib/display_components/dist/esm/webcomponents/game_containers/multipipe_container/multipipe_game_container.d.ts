import BaseGameContainer from '../base_game_container.js';
import { TemplateResult } from 'lit';
import MultipipeGameController from './multipipe_game_controller.js';
import { MultipipeGameContainerDeps } from './definitions.js';
import { IInjectableHost } from '../../../interfaces/index.js';
export default class MultipipeGameContainer extends BaseGameContainer implements IInjectableHost<MultipipeGameContainerDeps> {
    protected controller?: MultipipeGameController;
    connectedCallback(): void;
    inject(deps: MultipipeGameContainerDeps): void;
    protected render(): TemplateResult;
}
//# sourceMappingURL=multipipe_game_container.d.ts.map