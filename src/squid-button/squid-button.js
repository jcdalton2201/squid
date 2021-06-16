
import {html} from 'lit';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-button.scss';
import { findParentForm } from '../utils/findParentForm.js';
import { BaseElement } from '../utils/baseElement.js';
export class SquidButton extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            variant:{type:String},
            size:{type:String},
            disabled:{type:Boolean},
            loading:{type:Boolean},
            type:{type:String}
        };
    }
    constructor() {
        super();
        this.variant = 'action';
        this.size = '';
        this.disabled = false;
        this.type='';
        this.form = findParentForm(this);
    }
    render(){
        return html`
<button data-ref='button' 
        roll='button' 
        class='${this.variant} ${this.size}' 
        ?disabled=${this.disabled} 
        type='${this.type}'
        @click=${this.__onButtonClick}>
    <slot data-ref='slot' ?loading=${this.loading} ></slot>
    <svg data-ref='spinner'  aria-hidden="true" focusable="false" data-prefix="fad" data-icon="spinner" role="img"
    viewBox="0 0 512 512"
    ?loading=${this.loading} 
    class="spinner ${this.size === 'small' ? 'small' : ''}">
        <g class="group">
            <path fill="currentColor"
                d="M108.92 355.08a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM256 416a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm208-208a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm-60.92 147.08a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-198.16a48 48 0 1 0-48-48 48 48 0 0 0 48 48z"
                class="secondary"></path>
            <path fill="currentColor"
                d="M108.92 60.92a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM48 208a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM256 0a48 48 0 1 0 48 48 48 48 0 0 0-48-48z"
                class="primary"></path>
        </g>
    </svg>
</button>
        `;
    }

    /**
     * Submits a form if there is one.
     */
    submitForm(){
        if(!this.disabled) {
            const submitEvent = new Event('submit');
            this.form.dispatchEvent(submitEvent);
            this.form._squidSubmit = true;
        }
    }
    /**
     * 
     * @param {Event} evt Button Event fire
     */
    __onButtonClick(evt ={}){
        const triggerEvent = this.form && !this.disabled && evt && !evt.defaultPrevented;
        setTimeout(()=> {
            if(triggerEvent && this.type !== 'reset') {
                this.submitForm();
            } else {
                if(triggerEvent && this.type === 'reset') {
                    this.form.reset();
                }
            }
        });
    }
    /**
     * Overload of connectedCallback
     */
    connectedCallback() {
        super.connectedCallback();
        this.form = findParentForm(this);
        if(this.form){
            this.form.addEventListener('submit',this.__onFormSubmit);
        }
    }

    /**
     * 
     * @param {Event} evt 
     */
    __onFormSubmit(evt){
        if(!evt.isTrusted && evt.target._squidSubmit && !evt.defaultPrevented) {
            evt.target.submit();
        }
        delete evt.target._squidSubmit;
    }
}
defineSquidElement('squid-button',SquidButton);
