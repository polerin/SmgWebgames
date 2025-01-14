var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement } from 'lit/decorators.js';
import BaseGameContainer from '../base_game_container.js';
import { html } from 'lit';
import { MultipipeGameContainerToken } from './definitions.js';
import { injectDependencies } from '../../../util/index.js';
let MultipipeGameContainer = class MultipipeGameContainer extends BaseGameContainer {
    connectedCallback() {
        super.connectedCallback();
        injectDependencies(this, MultipipeGameContainerToken);
    }
    inject(deps) {
        this.controller = deps.multipipeGameController;
        this.controller.addHost(this);
        this.controller.hostConnected();
    }
    render() {
        return html `<canvas id="multipipe-game-canvas"></canvas>`;
    }
};
MultipipeGameContainer = __decorate([
    customElement('mutipipe-game-container')
], MultipipeGameContainer);
export default MultipipeGameContainer;
//# sourceMappingURL=multipipe_game_container.js.map