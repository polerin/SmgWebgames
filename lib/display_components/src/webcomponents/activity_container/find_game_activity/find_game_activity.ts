import { FindGameActivityDeps, FindGameActivityToken } from './definitions.js';
import { injectDependencies } from '../../../util/index.js';
import FindGameActivityController from './find_game_activity_controller.js';
import { html, TemplateResult } from 'lit';
// import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { customElement, property, state } from 'lit/decorators.js';
import { IInjectableHost } from '../../../interfaces/index.js';
import BaseActivityContainer from '../base_activity_container.js';
import { GameInstance, SmgHostedAppDefinition, SmgUser } from '@shieldmaidengames/webgames-shared';

@customElement('find-game-activity')
export default class FindGameActivity extends BaseActivityContainer implements IInjectableHost<FindGameActivityDeps> {
    protected override controller?: FindGameActivityController;

    @property()
    public gameDefinition?: SmgHostedAppDefinition;

    @property()
    public user?: SmgUser;
    
    @state()
    public controllerStatus = false;

    @state()
    public gameList: GameInstance[] = [];

    public override connectedCallback(): void {
        super.connectedCallback();

        injectDependencies(this, FindGameActivityToken);
    }

    public inject(deps: FindGameActivityDeps): void {
        if (this.controller !== undefined) {
            console.warn('Attempting to call inject on a find game activity container that already has its dependencies');

            return;
        }

        this.controller = deps.controller;

        // end of deps assignment, address any lifecycle callbacks
        this.controller?.addHost(this);
        this.controller?.hostConnected();

        this.controllerStatus = (this.controller !== undefined);
    };

    protected override render(): TemplateResult {
        if (this.controllerStatus === false) {
            return html``;
        }

        if (this.gameDefinition === undefined) {
            return html`No Game definition supplied`;
        }

        if (this.user === undefined) {
            return html`No Player information supplied`;
        }

        return html`<div class="activity_container activity_container--find-game related-to--${this.gameDefinition.slug}">
            <h3>Find a game: ${this.gameDefinition.slug}</h3> 
            <find-game-menu .user=${this.user} .gameDefinition=${this.gameDefinition}></find-game-menu>
            <game-list .user=${this.user} .gameDefinition=${this.gameDefinition} .gameList=${this.gameList}></game-list>
        </div>`;
    }
}
