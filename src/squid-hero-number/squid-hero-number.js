
import { html} from 'lit-element';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-hero-number.scss';
export class SquidHeroNumber extends BaseElement {
    static get styles() {
        return [styles];

    }
    constructor() {
        super();
        this._currency = '';
        this.alignment = '';
        this.size = '';
        this.numberStyle ={};
        this.local = (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
    }
    static get properties() {
        return {
            number:{
                type: Number,
                
            },
            label: {
                type: String
            },
            alignment: {
                type: String
            },
            size: {
                type: String
            },
            local: {
                type: String
            },
            currency: {
                type: String,
            }
        };
    }
    set currency(value) {
        this._currency = value;
        if(value) {
            this.numberStyle = {
                style: 'currency',
                currency : value 
            };
        } else {
            this.numberStyle = {};
        }
    }
    get currency() {
        return this._currency;
    }
    render(){
        return html`
<div data-ref='number' class='hero-numbers ${this.alignment} ${this.size}' ariadescribedby='label=${this.uuid}'>${new Intl.NumberFormat(this.local, this.numberStyle).format(this.number)}</div>
<div data-ref='label' class='hero-label ${this.alignment} ${this.size}' id='label-${this.uuid}'>${this.label}</div>
        `;
    }
}
defineSquidElement('squid-hero-number',SquidHeroNumber);



