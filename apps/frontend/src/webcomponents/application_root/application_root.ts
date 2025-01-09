import { IInjectableController, IInjectableHost, injectDependencies, RegisteredActivity, playerContext } from '@shieldmaidengames/multipipe-display-components';
import { ApplicationRootDeps, ApplicationRootToken } from './definitions.js';
import { customElement, property, state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { html, LitElement, TemplateResult } from 'lit';
import { activity_templates } from './activity_templates/index.js';
import { SmgPlayer } from '@shieldmaidengames/multipipe-shared';

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

    @provide({ context: playerContext })
    public currentPlayer?: SmgPlayer;

    public override connectedCallback(): void {
        super.connectedCallback();

        injectDependencies(this, ApplicationRootToken);
    }

    public inject(deps: ApplicationRootDeps): void {
        if (this.controller !== undefined) {
            console.warn('Attempting to call inject on an application root when already has its dependencies');

            return;
        }

        this.controller = deps.controller;

        // end of deps assignment, address any lifecycle callbacks
        this.controller?.addHost(this);
        this.controller?.hostConnected?.();

        this.controllerStatus = (this.controller !== undefined);
    };

    protected override render(): TemplateResult {
        const activity = activity_templates[this.currentActivity];
        return html`
            <h1>Application yay?</h1>
            <div class="activity activity--current">
                ${activity(false)}
            </div>
        `
    }
}