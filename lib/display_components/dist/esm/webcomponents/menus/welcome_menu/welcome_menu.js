var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseMenu from '../base_menu.js';
import { WelcomeMenuToken } from './definitions.js';
import { injectDependencies } from '../../../util/index.js';
import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';
import { customElement, state } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { playerContext } from '../../../contexts/index.js';
import { LogInCue } from '../../../events/index.js';
let WelcomeMenu = class WelcomeMenu extends BaseMenu {
    constructor() {
        super(...arguments);
        this.controllerStatus = false;
        this.nameInput = createRef();
        this.handleLoginClick = (e) => {
            if (!(e instanceof Event) || e.type !== 'click') {
                return;
            }
            e.preventDefault();
            if (this.playerName !== undefined) {
                this.dispatchEvent(new LogInCue(this.playerName));
            }
        };
    }
    get playerName() {
        return this.nameInput.value?.value;
    }
    ;
    connectedCallback() {
        super.connectedCallback();
        injectDependencies(this, WelcomeMenuToken);
    }
    inject(deps) {
        if (this.controller !== undefined) {
            console.warn('Attempting to call inject on a welcome menu that already has its dependencies');
            return;
        }
        this.controller = deps.welcomeController;
        // end of deps assignment, address any lifecycle callbacks
        this.controller?.addHost(this);
        this.controller?.hostConnected?.();
        this.controllerStatus = (this.controller !== undefined);
    }
    ;
    render() {
        if (this.controllerStatus === false) {
            return html `<div>No Menu Controller</div>`;
        }
        if (this.currentPlayer === undefined) {
            return this.renderLoginMenu();
        }
        return this.renderWelcomeChoices();
    }
    renderLoginMenu() {
        return html `<div class="menu_container menu_container--welcome">
            <input type="text" ${ref(this.nameInput)} placeholder="Player Name"></input>
            <button value="login" @click=${(e) => this.handleLoginClick(e)}>Login</button>
        </div>`;
    }
    renderWelcomeChoices() {
        return html `<div>Currently logged in as: ${this.currentPlayer?.name}</div>`;
    }
    firstUpdated(_changedProperties) {
        this.nameInput.value?.focus();
    }
};
__decorate([
    state()
], WelcomeMenu.prototype, "controllerStatus", void 0);
__decorate([
    consume({ context: playerContext, subscribe: true }),
    state()
], WelcomeMenu.prototype, "currentPlayer", void 0);
WelcomeMenu = __decorate([
    customElement('welcome-menu')
], WelcomeMenu);
export default WelcomeMenu;
//# sourceMappingURL=welcome_menu.js.map