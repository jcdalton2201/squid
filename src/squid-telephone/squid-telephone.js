import { SquidInputMask } from '../squid-input-mask/squid-input-mask.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
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
