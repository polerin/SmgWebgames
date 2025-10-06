import BaseMenu from '../base_menu.js';
import { UserMenuDeps, UserMenuToken } from './definitions.js';
import { injectDependencies } from '../../../util/index.js';
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IInjectableController, IInjectableHost } from '../../../interfaces/index.js';
import { consume } from '@lit/context';
import { userContext } from '../../../contexts/index.js';
import { SmgUserContext } from '@shieldmaidengames/webgames-shared';

@customElement('user-menu')
export default class UserMenu extends BaseMenu implements IInjectableHost<UserMenuDeps> {
    protected override controller?: IInjectableController<UserMenuDeps>;

    @state()
    public controllerStatus = false;

    @consume({context: userContext, subscribe: true})
    @state()
    public currentUser?: SmgUserContext;

    public override connectedCallback(): void {
        super.connectedCallback();

        injectDependencies(this, UserMenuToken);
    }

    public inject(deps: UserMenuDeps): void {
        if (this.controller !== undefined) {
            console.warn('Attempting to call inject on a welcome menu that already has its dependencies');

            return;
        }

        this.controller = deps.userMenuController;

        // end of deps assignment, address any lifecycle callbacks
        this.controller?.addHost(this);
        this.controller?.hostConnected?.();

        this.controllerStatus = (this.controller !== undefined);
    };

    protected override render(): TemplateResult {
        if (this.controllerStatus === false) {
            return html`<div class="webcomponent-error">No Menu Controller</div>`;
        }

        const userName = this.currentUser?.data?.name ?? 'Unknown user!';

        return html`<div class="contained-menu contained-menu--user">Welcome ${userName}!</div>`;
    }

}
