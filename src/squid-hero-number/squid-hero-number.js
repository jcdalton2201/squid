
import { html} from 'lit';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-hero-number.scss';
/**
 * @tag squid-hero-number
 * @summary The `SquidHeroNumber` elemement is a stylized display of a number and label.
> Hero Numbers are used to surface important data points in a stylistic manner. One common usage is displaying account balances or other critical account information.

Further information and usage guidelines can be found at the lsquid above.
 * @prop {String}  number -  The number to display. This is reflected as a property. 
 * @prop {String}  local -  locale identifier string such as `'en-US'` or `'de-DE'` 
 * @prop {String}  size -  The size of the hero number and label itself. Reflected as a property. 
 * @prop {String}  label -  An optional label to append to the element. Reflected as a property. 
 * @prop {String}  alignment -  The alignment of the element. Setting the value to `'center'` will center the contents, any other value will left align the elements. Reflected as a property. 
 * @prop {String}  currency -  set the format of the currecy. Exampe `'USD'` 
 * @example <squid-hero-number number="1234.56"  label="Available credit"></squid-hero-number>
<squid-hero-number number="1234.56"  label="Current balance" alignment="center"></squid-hero-number>
<squid-hero-number number="1234.56"  label="Current balance" size="small" currency="USD"></squid-hero-number>
 */
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



