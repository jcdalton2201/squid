import { SquidInput } from '../squid-input/squid-input.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
export class SquidPassword extends SquidInput {
    constructor() {
        super('password');
    }
}
defineSquidElement('squid-password',SquidPassword);
