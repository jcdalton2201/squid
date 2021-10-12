
import { SquidInput } from '../squid-input/squid-input.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
/**
 * @tag squid-email 
 * @summary The `SquidEmail` defines a field for an e-mail address. 
 * The input value is automatically validated to ensure it is a properly formatted e-mail address.
 * @example <squid-email>Test Email</squid-email>
 */

export class SquidEmail extends SquidInput {
    constructor() {
        super('email');
    }
}
defineSquidElement('squid-email',SquidEmail);
