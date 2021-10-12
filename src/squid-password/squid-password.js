import { SquidInput } from '../squid-input/squid-input.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
/**
 * @tag squid-password
 * @summary The `SquidPassword` element is an implementation of a text field as password. This particular element is analagous to an `HTMLInputElement` with a type of `'password'`.
 * @example <squid-password>Enter password</squid-password>
 */
export class SquidPassword extends SquidInput {
    constructor() {
        super('password');
    }
}
defineSquidElement('squid-password',SquidPassword);
