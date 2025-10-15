import { BaseActivityContainer, DefaultAppActivities, defaultAppActivityList, IInjectableController, IInjectableHost, injectDependencies, RegisteredActivity, userContext } from '@shieldmaidengames/webgames-display-components';
import { ApplicationRootDeps, APPLICATION_ROOT_TOKEN } from './definitions.js';
import { customElement, state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { html , TemplateResult } from 'lit';
import { SmgUserContext } from '@shieldmaidengames/webgames-shared';

@customElement('application-root')
export default class ApplicationRoot 
    extends BaseActivityContainer<DefaultAppActivities>
    implements IInjectableHost<ApplicationRootDeps>
{
    protected override controller?: IInjectableController<ApplicationRootDeps>;

    @state()
    protected controllerStatus = false;

    protected override defaultActivity: DefaultAppActivities = 'welcome';

    @provide({ context: userContext })
    public currentUser: SmgUserContext = {data: undefined};

    public override connectedCallback(): void {
        super.connectedCallback();

        injectDependencies(this, APPLICATION_ROOT_TOKEN);
    }

    public inject(deps: ApplicationRootDeps): void {
        if (this.controller !== undefined) {
            console.warn('Attempting to call inject on an application root when already has its dependencies');

            return;
        }

        this.controller = deps.controller;
        this.activities = deps.activities;

        // end of deps assignment, address any lifecycle callbacks
        this.controller?.addHost(this);
        this.controllerStatus = (this.controller !== undefined);
    };

    protected override render(): TemplateResult {
        return html`
            <h1>Application yay?</h1>
            <menu-container></menu-container>
            <div class="activity activity--current">
                ${this.renderCurrentActivity()}
            </div>
        `
    }
}