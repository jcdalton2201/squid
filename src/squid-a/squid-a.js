import {LitElement, html} from 'lit-element';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-a.scss';
export class SquidA extends LitElement {
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
            expanded:{type:String},
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
