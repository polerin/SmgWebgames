import { html, LitElement, ReactiveController, TemplateResult } from 'lit';

export default abstract class BaseActivityContainer extends LitElement {

    protected controller?: ReactiveController;

    protected override render(): TemplateResult {
       return html`<h1> WELL EHELLOO</h1>`; 
    }
}