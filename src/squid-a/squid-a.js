import { html } from 'lit';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-a.scss';
/**
 * @prop   {String} href - The anchor's href. If not set, the value will default to a `javascript:void(0)` value. Reflected as a property. 
 * @prop   {String} variant - The variant attribute defines what class of button is rendered. It is reflected by the `type` property on the element. The possible values are `'link'`, `'action'`, `'progressive'`, `'regressive'`, `'destructive'`, `'ghost'`, `'text'`, `'left'` and `'right'`. If one of the button values is used, the anchor will be given a role of `'button'`. This was previously the `type` attribute until version 5.
 * @prop   {String} size - Changes the button's size. Valid values are `'normal'` and `'small'`.
 * @prop   {String} target - Sets the anchor's target. If set to `_blank` the anchor will also include a `rel="noopener"` unless the element's override attribute is set to 'allow'. 
 * @prop   {String} referrer - If set to 'allow' will not set the the anchor's `rel` attribute to `'noopener'`. This is strongly discouraged for security reasons. 
 * @prop   {Boolean} disabled - Sets the anchor to be disabled or not.
 * @tag squid-a
 * @summary `SquidA` is a web component. 

There are several variants of the button, called types. Each has it's own specific meaning and use cases; more detail can be found at the link above. Here's what the system says about the button component.

>Buttons communicate the action that will take place when triggered. They’re hierarchically more important than link text or another pattern that points to supplementary content.
 * @example <p><squid-a href="https://github.com/" target="_blank">GitHub in a new tab</squid-a></p>
<p><squid-a href="https://google">google</squid-a></p>
 */
export class SquidA extends BaseElement {
    static get styles() {
        return [styles];
    }
    constructor() {
        super();
        this.size = '';
        this._target ='';
        this.href = '';
        this.variant = 'action';
        this.referrer = '';
        this.rel = '';
    }
    static get properties() {
        return {
           
            href:{type:String},
            variant:{type:String},
            size:{type:String},
            target:{type:String},
            referrer:{type:String},
            disabled:{type:Boolean}
        };
    }
    set target(value) {
        let oldValue = this._target;
        if(value === '_blank' && this.getAttribute('referrer') !== 'allow'){
            this.rel = 'noopener';
        } 
        this._target = value;
        this.requestUpdate('target',oldValue);
    }
    get target() {
        return this._target;
    }
    render(){
        return html`
        <a data-ref="button" 
            href="${this.href}" 
            target="${this.target}" 
            referrer="${this.referrer}"
            class="${this.variant} ${this.size}"
            role="button" rel="${this.rel}">
                <slot></slot>
        </a>`;
    }
}
defineSquidElement('squid-a',SquidA);
