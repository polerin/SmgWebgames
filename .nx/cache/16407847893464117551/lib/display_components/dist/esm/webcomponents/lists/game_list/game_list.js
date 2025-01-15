var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LoadGameCue, StartNewGameCue } from '../../../events/index.js';
import { map } from 'lit/directives/map.js';
let GameList = class GameList extends LitElement {
    constructor() {
        super(...arguments);
        this.gameList = [];
        this.devList = [];
    }
    render() {
        return html `${this.renderNormalGames()} ${this.renderDevGames()}`;
    }
    renderNormalGames() {
        if (this.gameList.length === 0) {
            return html `<h3>No games found, <a @click=${(e) => this.handleStartGameClick(e)}>start one?</a></h3>`;
        }
        return html `<h3>Current Games</h3>
            <dl>${map(this.gameList, this.renderListItem)}</dl>`;
    }
    renderDevGames() {
        if (this.devList.length === 0) {
            return html ``;
        }
        return html `<h3>Dev Games</h3>
            <dl>${map(this.devList, this.renderListItem)}</dl>`;
    }
    renderListItem(itemDetails) {
        return html `
            <dt>${itemDetails.gameName} - (${itemDetails.players.length} players)</dt>
            <dd><a @click=${() => this.handleJoinGameClick(itemDetails)}>Join Game</a></dd>`;
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
    handleJoinGameClick(gameInfo) {
        if (!this.gameDefinition || !this.player) {
            console.error('Not enough information to fire join game event');
            return;
        }
        const loadCue = new LoadGameCue(this.gameDefinition.slug, this.player, gameInfo);
        this.dispatchEvent(loadCue);
    }
};
__decorate([
    property()
], GameList.prototype, "gameDefinition", void 0);
__decorate([
    property()
], GameList.prototype, "gameList", void 0);
__decorate([
    property()
], GameList.prototype, "devList", void 0);
__decorate([
    property()
], GameList.prototype, "player", void 0);
GameList = __decorate([
    customElement('game-list')
], GameList);
export default GameList;
//# sourceMappingURL=game_list.js.map