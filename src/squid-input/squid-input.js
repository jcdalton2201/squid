
import {html} from 'lit';
import {SquidInputBase} from '../squid-input-base/squid-input-base.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-input.scss';
/**
 * @tag squid-input
 * @summary The `SquidInput` component is an implementation the HTML [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element.

> Text inputs allow text or numeric values to be entered and edited in one line.
> Text areas allow multiple lines of text to be entered.

Squid breaks up the input elements each into their own component for convenience including [`SquidCheckbox`](../squid-checkbox), [`SquidCombobox`](../squid-checkbox), [`SquidEmail`](../squid-email), `SquidInput`, [`SquidNumber`](../squid-number), [`SquidPassword`](../squid-password), [`SquidRadio`](../squid-radio), [`SquidSearch`](../squid-search), [`SquidSelect`](SquidSelect), [`SquidSsn`](../squid-ssn), [`SquidTelephone`](../squid-telephone) and [`SquidTextarea`](../squid-textarea).
 * @prop {String} disabled -  A proxy for the input disabled attribute. Reflected as a property. 
 * @prop {String} required -  A proxy for the input required attribute. Reflected as a property. 
 * @prop {String} autofocus -  A proxy for the input autofocus attribute. Reflected as a property. 
 * @prop {String} compact -  Uses a compact input. This specific style is not defined by the ONE Design System, but used widely across Financial Services. 
 * @prop {String} tooltip -  Sets a tooltip on the combobox label using [`SquidTooltip`](../squid-tooltip). Reflected as a property. 
 * @prop {String} placeholder -  A proxy for the input placeholder attribute. Reflected as a property. 
 * @prop {String} value -  Sets the input's value and emits an `squid-change` event when updated. Reflected as a property. 
 * @prop {String} minlength -  The input's `minlength` attribute (`minLength` property). Reflected here solely as `minlength`. 
 * @prop {String} maxlength -  The input's `maxlength` attribute (`maxLength` property). Reflected here solely as `maxlength`. 
 * @prop {String} readonly -  A proxy for the input's `readonly` attribute (`readOnly`) property. Reflected here as `readonly`. 
 * @prop {String} autocomplete -  A proxy for the input's `autocomplete` property. Reflected as a property. 
 * @prop {String} pattern -  A RegEx to be used by the input for validation purposes. Serves as a proxy for the input's pattern property/attribute. 
 * @prop {String} min -  A proxy for the input's `min` attribute. Reflected as a property. 
 * @prop {String} max -  A proxy for the input's `max` attribute. Reflected as a property. 
 * @prop {String} counter -  Displays an instance of the [`SquidCharacterCount`](../squid-character-count) component if set to true and a maxlength is provided. Reflected as a property. 
 * @event squid-input-change - Event dispatched for an input change.
 * @example <squid-input required minlength="3" maxlength="5" tooltip="Tooltip text">
 * This input will run validations
 * </squid-input>
 */
export class SquidInput extends SquidInputBase {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            minlength:{type:String,attribute:true},
            maxlength:{type:String},
            autocomplete:{type:String},
            tooltip:{type:String},
            pattern:{type:String},
            min:{type:String},
            max:{type:String},
            value:{type:String},
            placeholder:{type:String},
            size:{type:String},
            errorMessage:{type:String},
            step:{type:String},
            disabled:{type:Boolean},
            required:{type:Boolean},
            readonly:{type:Boolean},
            autofocus:{type:Boolean},
            compact:{type:Boolean},
            counter:{type:Boolean},
            name:{type:String},
        };
    }
    constructor(type){
        super();
        this._showDisabled = '';
        this._inputType = type;
    }
    firstUpdated(){
        this.updatePattern();
        this.update();
    }
    updatePattern(){
        if(this.pattern){
            const input = this.renderRoot.querySelector('input');
            input.pattern = this.pattern;
        }
    }
    updated(changedProperties){
        if (changedProperties.has('value')) {
            this.updatePattern();
        }
    }

    render(){
        return html`
        <div id="container" data-ref="wrapper">
            <div class="label-wrapper">
                <label class="textfield__label" for="squid-input-${this._uid}" data-ref="label"><slot></slot>${this._showDisabled}</label>
                <squid-character-count data-ref="counter" ?hidden=${!this.counter} id="counter-${this._uid}" ></squid-character-count>
                ${this.maxlength?'maxlength='+this.maxlength:'NO'}
            </div>
            <input class="textfield__input" 
                    maxlength="${this.maxlength}"
                    type="${this._inputType}" 
                    name="${this.name}" 
                    value="${this.value}" 
                    id="squid-input-${this._uid}" 
                    data-ref="input"
                    ${this.pattern?'pattern='+this.pattern:''}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    ?readonly=${this.readonly}
                    ?autofocus=${this.autofocus}
                    ?compact=${this.compact}
                    @input=${this.__onInput}
                    
                    ${this.max?'max='+this.max:''}
                    minlength='${this.minlength}'
                    ${this.min?'min='+this.min:''}
                    placeholder="${this.placeholder?this.placeholder:''}"
                    autocomplete="${this.autocomplete?this.autocomplete:''}"
                     
                    aria-describedby=" helpers-${this._uid} counter-${this._uid}"
                    class="">
            <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
        </div>
        `;
    }
   
    __onInput(evt) {
        this.value = evt.target.value;
    }
}
defineSquidElement('squid-input',SquidInput);
