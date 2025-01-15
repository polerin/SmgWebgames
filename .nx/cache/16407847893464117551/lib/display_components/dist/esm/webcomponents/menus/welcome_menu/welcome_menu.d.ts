import BaseMenu from '../base_menu.js';
import { WelcomeMenuDeps } from './definitions.js';
import { PropertyValues, TemplateResult } from 'lit';
import { Ref } from 'lit/directives/ref.js';
import { IInjectableController, IInjectableHost } from '../../../interfaces/index.js';
import { SmgPlayer } from '@shieldmaidengames/webgames-shared';
export default class WelcomeMenu extends BaseMenu implements IInjectableHost<WelcomeMenuDeps> {
    protected controller?: IInjectableController<WelcomeMenuDeps>;
    controllerStatus: boolean;
    get playerName(): string | undefined;
    currentPlayer?: SmgPlayer;
    protected nameInput: Ref<HTMLInputElement>;
    connectedCallback(): void;
    inject(deps: WelcomeMenuDeps): void;
    protected render(): TemplateResult;
    protected renderLoginMenu(): TemplateResult;
    protected renderWelcomeChoices(): TemplateResult;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected handleLoginClick: (e: Event) => void;
}
//# sourceMappingURL=welcome_menu.d.ts.map