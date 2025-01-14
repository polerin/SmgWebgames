var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { StartNewGameCue } from '../../../events/index.js';
import BaseMenu from '../base_menu.js';
import { html } from 'lit';
// import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { customElement, property } from 'lit/decorators.js';
let FindGameMenu = class FindGameMenu extends BaseMenu {
    constructor() {
        super(...arguments);
        this.gameList = [];
        this.devList = [];
    }
    render() {
        return html `<div class="menu_container menu_container--find-game">
                Blah balah blah
                <a @click=${(e) => this.handleStartGameClick(e)}>Start new game</a>
        </div>`;
    }
    handleStartGameClick(e) {
        if (!(e instanceof Event) || e.type !== 'click') {
            console.error("handleStartGameClick was supplied an invalid event object");
            return;
        }
        if (!this.player || !this.gameDefinition) {
            console.error("Attempting to dispatch a StartNewGameCue without player/game information");
            return;
        }
        this.dispatchEvent(new StartNewGameCue(this.player, this.gameDefinition));
    }
};
__decorate([
    property()
], FindGameMenu.prototype, "gameDefinition", void 0);
__decorate([
    property()
], FindGameMenu.prototype, "gameList", void 0);
__decorate([
    property()
], FindGameMenu.prototype, "devList", void 0);
__decorate([
    property()
], FindGameMenu.prototype, "player", void 0);
FindGameMenu = __decorate([
    customElement('find-game-menu')
], FindGameMenu);
export default FindGameMenu;
//# sourceMappingURL=find_game_menu.js.map