import { customElement } from 'lit/decorators.js';
import BaseGameContainer from '../base_game_container.js';
import { html, TemplateResult } from 'lit';
import MultipipeGameController from './multipipe_game_controller.js';
import { MultipipeGameContainerDeps, MultipipeGameContainerToken } from './definitions.js';
import { injectDependencies } from '../../../util/index.js';
import { IInjectableHost } from '../../../interfaces/index.js';

@customElement('mutipipe-game-container')
export default class MultipipeGameContainer
    extends BaseGameContainer 
    implements IInjectableHost<MultipipeGameContainerDeps>
{
    protected controller?: MultipipeGameController;

    public override connectedCallback(): void {
        super.connectedCallback();

        injectDependencies(this, MultipipeGameContainerToken);
    }

    public inject(deps: MultipipeGameContainerDeps): void {
        this.controller = deps.multipipeGameController;

        this.controller.addHost(this);
        this.controller.hostConnected();
    }

    protected override render(): TemplateResult {
        return html`<canvas id="multipipe-game-canvas"></canvas>`;
    }
}