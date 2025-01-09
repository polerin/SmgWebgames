import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LoadGameCue, StartNewGameCue } from '../../../events/index.js';
import { DevInstance, GameInstance, SmgGameDefinition, SmgPlayer } from '@shieldmaidengames/multipipe-shared';
import { map } from 'lit/directives/map.js';

@customElement('game-list')
export default class GameList extends LitElement {
        @property()
    public gameDefinition?: SmgGameDefinition;

    @property()
    public gameList: GameInstance[] = [];

    @property()
    public devList: DevInstance[] = [];

    @property()
    public player?: SmgPlayer;
    
    protected override render(): TemplateResult {
        return html`${this.renderNormalGames()} ${this.renderDevGames()}`;
    }

    protected renderNormalGames(): TemplateResult {
        if (this.gameList.length === 0) {
            return html`<h3>No games found, <a @click=${(e: Event) => this.handleStartGameClick(e)}>start one?</a></h3>`;
        }

        return html`<h3>Current Games</h3>
            <dl>${map(this.gameList, this.renderListItem)}</dl>`;
    }

    protected renderDevGames(): TemplateResult {
        if (this.devList.length === 0) {
            return html``;
        }

        return html`<h3>Dev Games</h3>
            <dl>${map(this.devList, this.renderListItem)}</dl>`;
    }

    protected renderListItem(itemDetails: GameInstance): TemplateResult {
        return html`
            <dt>${itemDetails.gameName} - (${itemDetails.players.length} players)</dt>
            <dd><a @click=${() => this.handleJoinGameClick(itemDetails)}>Join Game</a></dd>`;
    }

    protected handleStartGameClick(e: Event): void {
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

    protected handleJoinGameClick(gameInfo: GameInstance): void {
        if (!this.gameDefinition || !this.player) {
            console.error('Not enough information to fire join game event');

            return;
        }

        const loadCue = new LoadGameCue(
            this.gameDefinition.slug,
            this.player,
            gameInfo
        );

        this.dispatchEvent(loadCue);
    }
}