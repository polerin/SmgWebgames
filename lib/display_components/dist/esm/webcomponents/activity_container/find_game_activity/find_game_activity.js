var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { FindGameActivityToken } from './definitions.js';
import { injectDependencies } from '../../../util/index.js';
import { html } from 'lit';
// import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { customElement, property, state } from 'lit/decorators.js';
import BaseActivityContainer from '../base_activity_container.js';
let FindGameActivity = class FindGameActivity extends BaseActivityContainer {
    constructor() {
        super(...arguments);
        this.controllerStatus = false;
        this.gameList = [];
    }
    connectedCallback() {
        super.connectedCallback();
        injectDependencies(this, FindGameActivityToken);
    }
    inject(deps) {
        if (this.controller !== undefined) {
            console.warn('Attempting to call inject on a find game activity container that already has its dependencies');
            return;
        }
        this.controller = deps.controller;
        // end of deps assignment, address any lifecycle callbacks
        this.controller?.addHost(this);
        this.controller?.hostConnected();
        this.controllerStatus = (this.controller !== undefined);
    }
    ;
    render() {
        if (this.controllerStatus === false) {
            return html ``;
        }
        if (this.gameDefinition === undefined) {
            return html `No Game definition supplied`;
        }
        if (this.player === undefined) {
            return html `No Player information supplied`;
        }
        return html `<div class="activity_container activity_container--find-game related-to--${this.gameDefinition.slug}">
            <h3>Find a game: ${this.gameDefinition.slug}</h3> 
            <find-game-menu .player=${this.player} .gameDefinition=${this.gameDefinition}></find-game-menu>
            <game-list .player=${this.player} .gameDefinition=${this.gameDefinition} .gameList=${this.gameList}></game-list>
        </div>`;
    }
};
__decorate([
    property()
], FindGameActivity.prototype, "gameDefinition", void 0);
__decorate([
    property()
], FindGameActivity.prototype, "player", void 0);
__decorate([
    state()
], FindGameActivity.prototype, "controllerStatus", void 0);
__decorate([
    state()
], FindGameActivity.prototype, "gameList", void 0);
FindGameActivity = __decorate([
    customElement('find-game-activity')
], FindGameActivity);
export default FindGameActivity;
//# sourceMappingURL=find_game_activity.js.map