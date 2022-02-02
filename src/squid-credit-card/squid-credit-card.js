
// import {html} from 'lit-element';
import { SquidSsn } from '../squid-ssn/squid-ssn.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-credit-card.scss';
/**
 * @tag squid-credit-card
 * @summary `SquidCreditCard` is an implementation of [`SquidInput`](../squid-input) that serves as a credit-card number mask for privacy reasons.
 * @prop {String} value - value of the input.
 * @event squid-change - The input value has changed.
 * @example <form name="cc-number" autocomplete="cc-number"><squid-credit-card>Credit Card</squid-credit-card></form>
 */
export class SquidCreditCard extends SquidSsn {
    static get styles() {
        return [...super.styles,styles];
    }
    static get properties() {
        return {};
    }
    constructor() {
        super();
        this.name = 'ccnumber';
        this.autocomplete = 'cc-number';
    }
    firstUpdated(){
        super.firstUpdated();
        this._placeholder = '****************';
        this.minlength = 16;
        this.maxlength = 16;
    }
    /**
     * Mask the value of the SSN
     * @param {String} value value to add a mask to
     */
    _addMask(value=''){
        const placeholderCharacter = '-';
        const unmaskedValue = this._unmask(value);
        const firstThree = unmaskedValue.slice(0, 16).padEnd(16, placeholderCharacter);
        let maskedValue = '';
        maskedValue += firstThree;
        this.maskedValue = firstThree;
        return maskedValue;
    }
    /**
     * Unmask the input value
     * @param {String} value the Masked value
     */
    _unmask(value=''){
        return value.replace(/\D/g, '').slice(0, 16);
    }
    /**
     * Mask the value to not be seen
     * @param {String} value value to be masked
     * @param {Event} evt keyboard event
     */
    async _mask(value='', evt={}) {
        const unmaskedValue = this._unmask(value);
        const maskedValue = this._addMask(unmaskedValue);
        const isDelete = evt.inputType === 'deleteContentBackward';
        this.unmaskedValue = unmaskedValue;
        this.maskedValue = maskedValue;
    
        const obfuscateValue = await this._obfuscate(maskedValue);
        const start = isDelete ?  this._cachedSelection : unmaskedValue.length;
        this._manageCursor(obfuscateValue, start, evt);
        this._isDelete = undefined;
    }
    /**
     * Manage the location of the cursor
     * @param {String} maskedValue the masked value
     * @param {number} selectionStart the current cursor location
     * @param {Event} event keyboard Event
     */
    _manageCursor(maskedValue, selectionStart, evt={}) {
    
        if (evt.inputType === 'deleteContentBackward') {
            selectionStart = this._cachedSelection - 1;
        }
    
        this.__getInput().setSelectionRange(selectionStart, selectionStart);
    }
    /**
     * Obfuscate the input value
     * @param {String} value value to obfucate
     */
    _obfuscate(value=''){
        return new Promise(resolve => {
            const input  = this.__getInput();
            let obfuscatedValue = value.slice(0, 12).replace(/[0-9]/g, '•') + value.slice(12, 16);
            this._obfuscatedValue = obfuscatedValue;
            this._value = this.unmaskedValue.slice(0, 16);
            if (this.maskState === 'visible') {
                input.value = value;
            } else {
                input.value = this._obfuscatedValue;
            }
            resolve(this.maskedValue);
        });
    }
    /**
     * Overwrite the checkValidity to handel error messages
     */
    checkValidity() {
        console.log(this.internals.form);
        if (!this._value ||this._value.length < 16 || !this.luhnCheck(this._value)){
            this.setCustomValidity('Please enter in a valid credit card number');
            return false;
        } else {
            this.setCustomValidity('');
        }
        return super.checkValidity();
    }
    /**
     * This is a luhn algorithm  or modulus 10 to check if it is a valid cc number
     * @param {Number} number credit card number to check the luhn alg
     * @returns Boolean
     */
    luhnCheck(number){
        let nCheck = 0;
        number = number.replace(/\D/g,'');
        number.split('').forEach((item, n) => {
            let nDigit = parseInt(item, 10);
            if (!(n % 2) && (nDigit *= 2) > 9) nDigit -= 9;
            nCheck += nDigit;
        });
        return (nCheck % 10) === 0;
    }
    
}
defineSquidElement('squid-credit-card',SquidCreditCard);
