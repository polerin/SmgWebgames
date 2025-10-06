import { IInjectableController, IInjectableHost, injectDependencies, RegisteredActivity, userContext } from '@shieldmaidengames/webgames-display-components';
import { ApplicationRootDeps, APPLICATION_ROOT_TOKEN } from './definitions.js';
import { customElement, state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { html, LitElement, TemplateResult } from 'lit';
import { activityTemplates } from './activityTemplates/index.js';
import { SmgUserContext } from '@shieldmaidengames/webgames-shared';

@customElement('application-root')
export default class ApplicationRoot 
    extends LitElement
    implements IInjectableHost<ApplicationRootDeps>
{
    protected controller?: IInjectableController<ApplicationRootDeps>;

    @state()
    protected controllerStatus = false;

    @state()
    protected currentActivity: RegisteredActivity = 'welcome';

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

        // end of deps assignment, address any lifecycle callbacks
        this.controller?.addHost(this);
        this.controllerStatus = (this.controller !== undefined);
    };

    public setActivity(newActivity: RegisteredActivity): void {
        if (this.currentActivity === newActivity) {
            // don't trigger any rerender or anything
            console.info('Specified activity is already active');

            return;
        }

        this.currentActivity = newActivity;
    }

    public getActivity(): RegisteredActivity {
        return this.currentActivity;
    }

    protected override render(): TemplateResult {
        const activity = activityTemplates[this.currentActivity];
        return html`
            <h1>Application yay?</h1>
            <menu-container></menu-container>
            <div class="activity activity--current">
                ${activity(false)}
            </div>
        `
    }
}