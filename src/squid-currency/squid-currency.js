import { SquidInput } from '../squid-input/squid-input.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
export class SquidCurrency extends SquidInput {
    static get properties() {
        return {
            ...super.properties,
            dollarOnly:{type:Boolean},
        };
    }
    constructor(){
        super();
        this.bindMethod('__onInputBlur');
        this.bindMethod('__validate');
    }
    async firstUpdated(){
        this.__getInput().addEventListener('blur',this.__onInputBlur);
        this.__getInput().addEventListener('change',this.__validate);
        this.isCentSet = false;
    }
    /**
     * Blur event on the input field
     * @param {Event} evt blur event
     */
    __onInputBlur(evt) {
        if(evt.currentTarget.value === '$'){
            this.value = '';
            this.setCustomValidity('');
        } else {
            if(evt.currentTarget.value.includes('.')) {
                let [dollars, cents] = this.__getInput().value.split('.');
                //If no input after decimal
                if (cents === '') {
                    cents = '00';
                    this.value = this.value + '' + cents;
                }
                // If one number is entered after decimal
                else if (cents.length === 1) {
                    cents += '0';
                    this.value = this.value + '0';
                }
                evt.target.value = dollars + '.' + cents;
            }
        }
    }
    /**
     * Run custom validation against the input's value
     */
    __validate(){
        const {validityMessages} = this.__getHelper();
        if (this.max && +this.cleanValue > +this.max) {
            this.setCustomValidity(validityMessages.get('rangeOverflow').message);
        } else if (this.min && +this.cleanValue < +this.min) {
            this.setCustomValidity(validityMessages.get('rangeOverflow').message);
        } else {
            this.setCustomValidity('');
        }
    }
    /**
     * Overwrite the input event
     * @param {Event} evt input event
     */
    __onInput(){
        const removeLeadingZeros = /^0+/;
        const notNumber = this.dollarOnly ? /[^\d]+/g : /[^\d.]+/g ;
        const currencyPattern = /^(0|0?[1-9]\d*)\.\d\d\d\d*$/;
        const threeDigitGroupings = /\B(?=(\d{3})+(?!\d))/g;
        const input = this.__getInput();
        let maskedValue = input.value.replace(notNumber, '');
        if (maskedValue[0] === '0' && maskedValue.length > 1) {
            maskedValue = maskedValue.replace(removeLeadingZeros, '');
        }
        if (maskedValue.includes('.')) {
            let [dollars, cents] = maskedValue.split('.');
            //Prefix with 0 if decimal is entered in the first position
            if (dollars === '') {
                dollars = '0';
            }
            maskedValue = dollars + '.' + cents;
            if (maskedValue.match(currencyPattern)) {
                maskedValue = dollars + '.' + cents.substring(0, 2);
            }
        }
        this.cleanValue = maskedValue;
        maskedValue = maskedValue.replace(threeDigitGroupings, ',');
        this.value = this.cleanValue;
        input.value = '$' + maskedValue;
    }
    
}
defineSquidElement('squid-currency',SquidCurrency);
