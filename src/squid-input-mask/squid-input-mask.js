
import { SquidInput } from '../squid-input/squid-input.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import { MaskUtil } from '../utils/maskUtil.js';
import { emitEvent} from '../utils/squidEvents.js';
export class SquidInputMask extends SquidInput {
    constructor(){
        super();
    }
    static get properties() {
        return {
            ...super.properties,
            mask:{type:String},
        };
    }
    async firstUpdated(args){
        const { mask } = args;
        this.mask = this.mask || mask;
        this._maskUtil = new MaskUtil(this.__getInput(), this.mask, this);
        this.pattern = this._maskUtil.regExp;
    }
    /**
     * Overwrite the input event
     * @param {Event} evt input event
     */
    __onInput(){
        const input = this.__getInput();
        const _value = input.value;
        if(this._maskUtil) {
            const parsedData = this._maskUtil.parseRaw(_value);
            if (parsedData && _value !== parsedData) {
                if (input.value !== parsedData) {
                    input.value = parsedData;
                    this.value = parsedData;
                    this.setCustomValidity('');
                }
                emitEvent('squid-change',parsedData, this);
            } else if (!parsedData) {
                this.value = parsedData;
                input.value = _value;
                emitEvent('squid-change', _value, this);
                parsedData === false ? this.setCustomValidity('The information entered does not follow the proper format') : null;
            } else {
                emitEvent('squid-change', _value, this);
            }
        }
    }
}
defineSquidElement('squid-input-mask',SquidInputMask);
