import { DevInstance, GameInstance, SmgHostedAppDefinition, SmgPlayer } from '@shieldmaidengames/webgames-shared';
import { StartNewGameCue } from '../../../events/index.js';
import BaseMenu from '../base_menu.js';
import { html, TemplateResult } from 'lit';
// import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { customElement, property } from 'lit/decorators.js';

@customElement('find-game-menu')
export default class FindGameMenu extends BaseMenu {
    @property()
    public gameDefinition?: SmgHostedAppDefinition;

    @property()
    public gameList: GameInstance[] = [];

    @property()
    public devList: DevInstance[] = [];

    @property()
    public player?: SmgPlayer;
    
    protected override render(): TemplateResult {
        return html`<div class="menu_container menu_container--find-game">
                Blah balah blah
                <a @click=${(e: Event) => this.handleStartGameClick(e)}>Start new game</a>
        </div>`;
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
}
