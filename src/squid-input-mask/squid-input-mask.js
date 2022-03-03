
import { SquidInput } from '../squid-input/squid-input.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import { MaskUtil } from '../utils/maskUtil.js';
import { emitEvent} from '../utils/squidEvents.js';
/**
 * @tag squid-input-mask
 * @summary The `SquidInputMask` is functionally an `SquidInput` component with an input mask attached to enforece a particular pattern. This now serves as the base class for [SquidTelephone](../squid-telephone).
 * @prop {String} mask - The mask to apply to the input. Includes two options: alpha: `'A'` and numeric `'1'`. So a mask for a telephone might be `(111) 111-1111`. For alphanumeric characters, use the `'e'` character. Reflected as a property. **NOTE:** Updating the mask property after the element has been connected to the DOM will not create a new mask.
 * @example <squid-input-mask mask="(111) 111-1111">Telephone Number</squid-input-mask>
<squid-input-mask mask="1AAAA11AAAA111111" helper="Format: 1AAAA11AAAA111111">Vehicle Identification Number</squid-input-mask>
 */
export class SquidInputMask extends SquidInput {
    constructor(){
        super();
        this._value = '';
    }
    static get properties() {
        console.log(super.properties);
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

    updated(changedProperties){
        if (changedProperties.has('value')) {
            this.addMask();
        }
    }
    
    addMask(){
        this._value = this.value;
        const input = this.renderRoot.querySelector('input');
        if(this._maskUtil){
            const parsedData = this._maskUtil.parseRaw(this._value);
            console.log(this.value);
            if (parsedData && this._value !== parsedData) {
                if (input.value !== parsedData) {
                    input.value = parsedData;
                    this.value = parsedData;
                    this.setCustomValidity('');
                }
                emitEvent('squid-change',parsedData, this);
            } else if (!parsedData) {
                this.value = parsedData;
                input.value = this._value;
                emitEvent('squid-change', this._value, this);
                if(parsedData === false){
                    this.setCustomValidity('The information entered does not follow the proper format'); 
                }
            } else {
                emitEvent('squid-change', this._value, this);
            }
        }
    }
    /**
     * Overwrite the input event
     * @param {Event} evt input event
     */
    __onInput(){
        const input = this.renderRoot.querySelector('input');
        const _value = input.value;
        this.value = _value;
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
                if(parsedData === false){
                    this.setCustomValidity('The information entered does not follow the proper format'); 
                }
            } else {
                emitEvent('squid-change', _value, this);
            }
        }
    }
}
defineSquidElement('squid-input-mask',SquidInputMask);
