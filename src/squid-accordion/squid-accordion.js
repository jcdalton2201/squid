
import {html} from 'lit';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import { emitEvent } from '../utils/squidEvents.js';
import styles from './squid-accordion.scss';
/**
 * 
 * @prop   {String} theme - The anchor's href. If not set, the value will default to a `javascript:void(0)` value. Reflected as a property. 
 * @prop   {Boolean} open - The variant attribute defines what class of button is rendered. It is reflected by the `type` property on the element. The possible values are `'link'`, `'action'`, `'progressive'`, `'regressive'`, `'destructive'`, `'ghost'`, `'text'`, `'left'` and `'right'`. If one of the button values is used, the anchor will be given a role of `'button'`. This was previously the `type` attribute until version 5.
 * @tag squid-accordion
 * @summary `SquidAccordion` is a web component. 

Accordions provide progressive disclosure, showing focused content and allow users to expose additional content if they choose. Accordions contain a title, an expanded and a collapsed state, spacing, and icons indicating open and close.
 * @example <squid-accordion>
  <span slot="summary">This will the the accordion's title</span>
  <div slot="content">
    <p>The accordion's content should be placed in the content slot.</p>
    <p>Anything inside this slot will be hidden unless the accordion is open.</p>
  </div>
</squid-accordion>
 */
export class SquidAccordion extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            theme:{
                type:String,
                attribute:true
            },
            open:{
                type:Boolean,
                attribute:true,
                reflect:true
            }
        };
    }
    constructor() {
        super();
        this.bindMethods(['toggle']);
        this.theme='light';
        this.open = false;
    }
    firstUpdated(){
        this.buildRefs();
    }
    render(){
        return html`
<div class="accordion accordion--${this.theme}" data-ref="accordion">
    <div class="accordion-item">
        <button @click=${this.toggle} class="accordion-title ${this.open ? 'accordion-title--active':''}"" 
            aria-controls="content-${this._uid}"
            aria-expanded="${this.open}" 
            data-ref="summary" 
            id="summary-${this._uid}">
                <slot name="summary"></slot>
        </button>
        <div class="accordion-section ${this.open ? 'accordion-section--active':''}" 
            data-ref="content"
            aria-hidden="${!this.open}" 
            id="content-${this._uid}" 
            aria-labelledby="summary-${this._uid}">
                <div class="accordion-content">
                    <slot name="content"></slot>
                </div>
        </div>
    </div>
</div>        
        `;
    }
    get focus() {
        const { summary } = this.refs;
        return () => summary.focus();
    }
    /**
   * Set the open parameter and call
   * handle toggle to update visual state
   */
    toggle() {
        this.open = !this.open;
        this.requestUpdate();
        emitEvent('accordion-toggle',this.open,this);
    }
}
defineSquidElement('squid-accordion',SquidAccordion);
