import { SquidInput } from '../squid-input/squid-input.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
/**
 * @tag squid-number
 * @summary The `SquidNumber` element is an implementation of a text field as number. This particular element is analagous to an `HTMLInputElement` with a type of `'number'`.
 * @example <squid-number>Enter number</squid-number>
 */
export class SquidNumber extends SquidInput {
    constructor() {
        super('number');
    }
    /**
     * 
     * @param {Event} evt keydown event
     */
    __onInput(evt) {
        if(evt.target.value === '' && evt.target.validity.badInput){
            return;
        } else {
            this.value = evt.target.value;
        }
    }
}
defineSquidElement('squid-number',SquidNumber);
