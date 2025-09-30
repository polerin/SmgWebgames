import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { UserContext, userContext } from '../../../contexts/index.js';

@customElement('menu-container')
export default class MenuContainer extends LitElement {

    @consume({context: userContext, subscribe: true})
    @state()
    public currentUser?: UserContext;

    protected override render(): TemplateResult {
        const currentMenu = this.renderCurrentMenu();
        console.info('current menu', currentMenu);
        return html`<div class="menu_container"> ${this.renderCurrentMenu()} </div>`;
    }

    protected renderCurrentMenu() {
        console.log('rendering menu!', this.currentUser);
        if (this.currentUser?.data === undefined) {
            return html`<welcome-menu></welcome-menu>`;
        }

        return html`<user-menu></user-menu>`;
    }
}
