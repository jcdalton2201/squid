import { SquidInput } from '../squid-input/squid-input.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
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
