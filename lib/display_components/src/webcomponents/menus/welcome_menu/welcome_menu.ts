import BaseMenu from '../base_menu.js';
import { WelcomeMenuDeps, WelcomeMenuToken } from './definitions.js';
import { injectDependencies } from '../../../util/index.js';
import { html, PropertyValues, TemplateResult } from 'lit';
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { customElement, state } from 'lit/decorators.js';
import { IInjectableController, IInjectableHost } from '../../../interfaces/index.js';
import { SmgPlayer } from '@shieldmaidengames/webgames-shared';
import { consume } from '@lit/context';
import { playerContext } from '../../../contexts/index.js';
import { LogInCue } from '../../../events/index.js';

@customElement('welcome-menu')
export default class WelcomeMenu extends BaseMenu implements IInjectableHost<WelcomeMenuDeps> {
    protected override controller?: IInjectableController<WelcomeMenuDeps>;

    @state()
    public controllerStatus = false;

    public get playerName () {
        return this.nameInput.value?.value
    };

    @consume({context: playerContext, subscribe: true})
    @state()
    public currentPlayer?: SmgPlayer;

    protected nameInput: Ref<HTMLInputElement> = createRef();

    public override connectedCallback(): void {
        super.connectedCallback();

        injectDependencies(this, WelcomeMenuToken);
    }

    public inject(deps: WelcomeMenuDeps): void {
        if (this.controller !== undefined) {
            console.warn('Attempting to call inject on a welcome menu that already has its dependencies');

            return;
        }

        this.controller = deps.welcomeController;

        // end of deps assignment, address any lifecycle callbacks
        this.controller?.addHost(this);
        this.controller?.hostConnected?.();

        this.controllerStatus = (this.controller !== undefined);
    };

    protected override render(): TemplateResult {
        if (this.controllerStatus === false) {
            return html`<div>No Menu Controller</div>`;
        }

        if (this.currentPlayer === undefined) {
            return this.renderLoginMenu();
        }

        return this.renderWelcomeChoices();
    }

    protected renderLoginMenu(): TemplateResult {
        return html`<div class="menu_container menu_container--welcome">
            <input type="text" ${ref(this.nameInput)} placeholder="Player Name"></input>
            <button value="login" @click=${(e: Event) => this.handleLoginClick(e)}>Login</button>
        </div>`;
    }

    protected renderWelcomeChoices(): TemplateResult {
        return html`<div>Currently logged in as: ${this.currentPlayer?.name}</div>`
    }

    protected override firstUpdated(_changedProperties: PropertyValues): void {
        this.nameInput.value?.focus();
    }

    protected handleLoginClick = (e: Event) => {
        if (!(e instanceof Event) || e.type !== 'click') {
            return;
        }

        e.preventDefault();

        if (this.playerName !== undefined) {
            this.dispatchEvent(new LogInCue(this.playerName));
        }
    }
}
