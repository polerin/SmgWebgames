import BaseMenu from '../base_menu.js';
import { WelcomeMenuDeps } from './types.js';
import WelcomeController from './welcome_controller.js';
import { PropertyValues, TemplateResult } from 'lit';
import { Ref } from 'lit/directives/ref.js';
export default class WelcomeMenu extends BaseMenu {
    protected controller?: WelcomeController;
    controllerStatus: boolean;
    protected nameInput: Ref<HTMLInputElement>;
    connectedCallback(): void;
    protected inject(deps: WelcomeMenuDeps): void;
    protected render(): TemplateResult;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected handleFindGameClick(e: Event): void;
}
//# sourceMappingURL=welcome_menu.d.ts.map