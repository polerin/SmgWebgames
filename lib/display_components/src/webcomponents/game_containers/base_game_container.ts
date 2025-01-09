import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default abstract class BaseGameContainer extends LitElement{

    @property()
    public jsPath?: string;


}