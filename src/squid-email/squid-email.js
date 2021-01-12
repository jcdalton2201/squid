
import { SquidInput } from '../squid-input/squid-input.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';

export class SquidEmail extends SquidInput {
    constructor() {
        super('email');
    }
}
defineSquidElement('squid-email',SquidEmail);
