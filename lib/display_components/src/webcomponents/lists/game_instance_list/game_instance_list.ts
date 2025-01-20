import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StartNewGameCue } from '../../../events/index.js';
import { DevInstance, GameInstance, SmgHostedAppDefinition, SmgUser } from '@shieldmaidengames/webgames-shared';
import { map } from 'lit/directives/map.js';

@customElement('game-instance-list')
export default class GameInstanceList extends LitElement {
    @property()
    public gameDefinition?: SmgHostedAppDefinition;

    @property()
    public gameList: GameInstance[] = [];

    @property()
    public devList: DevInstance[] = [];

    @property()
    public user?: SmgUser;
    
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

        if (!this.user || !this.gameDefinition) {
            console.error("Attempting to dispatch a StartNewGameCue without user/game information");

            return;
        }

        this.dispatchEvent(new StartNewGameCue(this.user, this.gameDefinition));
    }

    protected handleJoinGameClick(_gameInfo: GameInstance): void {
        if (!this.gameDefinition || !this.user) {
            console.error('Not enough information to fire join game event');

            return;
        }

        // Swap this to a JoinGameCue when that is created
        // const loadCue = new LoadGameCue(
        //     gameInfo
        // );

        // this.dispatchEvent(loadCue);
    }
}