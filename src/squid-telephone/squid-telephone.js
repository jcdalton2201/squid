import { SquidInputMask } from '../squid-input-mask/squid-input-mask.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
/**
 * @tag squid-telephone
 * @summary `SquidTelephone` is an implementation of [`SquidInputMask`](../squid-input-mask).
 * @example <squid-telephone>Phone number</squid-telephone>
 */
export class SquidTelephone extends SquidInputMask {
    constructor(){
        super();
    }
    async firstUpdated(args){
        args.mask = '(111) 111-1111';
        super.firstUpdated(args);
    }
}
defineSquidElement('squid-telephone',SquidTelephone);
