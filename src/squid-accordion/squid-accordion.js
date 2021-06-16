
import {html} from 'lit';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import { emitEvent } from '../utils/squidEvents.js';
import styles from './squid-accordion.scss';
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
