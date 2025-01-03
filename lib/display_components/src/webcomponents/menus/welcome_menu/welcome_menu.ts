import BaseMenu from '../base_menu.js'
import { WelcomeMenuDeps, WelcomeMenuToken } from './types.js';
import { requestDependencies } from '../../../util/index.js';
import WelcomeController from './welcome_controller.js';
import { html, PropertyValues, TemplateResult } from 'lit';
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { FindGameRequest } from '../../../events/index.js';
import { customElement, state } from 'lit/decorators.js';

@customElement('welcome-menu')
export default class WelcomeMenu extends BaseMenu {
    protected override controller?: WelcomeController;

    @state()
    public controllerStatus = false;

    protected nameInput: Ref<HTMLInputElement> = createRef();

    public override connectedCallback(): void {
        requestDependencies(this, WelcomeMenuToken)
        .then((deps: WelcomeMenuDeps) => this.inject(deps))
        .catch((e: unknown) => console.error("Unable to retrieve dependencies for Welcome Menu", e));
    }
    
    protected inject(deps: WelcomeMenuDeps): void {
        this.controller = deps.welcomeController;

        // end of deps assignment, address any lifecycle callbacks
        this.controller?.addHost(this);
        this.controller?.hostConnected();
    };

    protected override render(): TemplateResult {
        if (this.controllerStatus === false) {
            return html`<div>No Menu Controller</div>`;
        }

        return html`<div class="menu_container menu_container--welcome">
            <input type="text" ${ref(this.nameInput)} placeholder="Player Name"></input>
            <button @click=${(e: Event) => this.handleFindGameClick(e)}>Find Game</button>
        </div>`
    }

    protected override firstUpdated(_changedProperties: PropertyValues): void {
        this.nameInput.value?.focus();
    }

    protected handleFindGameClick(e: Event): void {
        if (!(e instanceof Event) || e.type !== 'click') {
            console.error('Called handleFindGameClick with a non-click event', e);
            return;
        }

        const playerName = this.nameInput.value?.value;

        if (playerName === undefined || playerName.length < 3) {
            console.error('Attempting to handle find game without a valid name');
            return;
        }

        this.dispatchEvent(new FindGameRequest({ name: playerName }));
    }
}
