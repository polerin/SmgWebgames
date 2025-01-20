import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FindGameCue, LoadGameCue } from '../../../events/index.js';
import { SmgHostedAppDefinition } from '@shieldmaidengames/webgames-shared';
import { map } from 'lit/directives/map.js';

@customElement('application-list')
export default class ApplicationList extends LitElement {
    @property()
    public appList: SmgHostedAppDefinition[] = [];
    
    protected override render(): TemplateResult {
        return html`<div class="app-listing">
            ${map(this.appList, (app) => this.renderListItem(app))}
        </div>`;
    }

    protected renderListItem(itemDetails: SmgHostedAppDefinition): TemplateResult {
        const linkText = itemDetails.isMultiplayer ? "Find Game" : "Play Game";

        return html`
            <div>
                <span class="application--name">${itemDetails.name}</span>
                <span class="application--description">${itemDetails.description}</span>
                <span class="application--menu">
                    <a @click=${() => this.handleJoinGameClick(itemDetails)}>${linkText}</a>
                </span>
            </div>`;
    }

    protected handleJoinGameClick(gameInfo: SmgHostedAppDefinition): void {
        let cue = gameInfo.isMultiplayer ? new FindGameCue(gameInfo) : new LoadGameCue(gameInfo);
        this.dispatchEvent(cue);
    }
}