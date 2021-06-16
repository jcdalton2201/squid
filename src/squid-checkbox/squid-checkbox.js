import { html } from 'lit';
import { SquidInputBase } from '../squid-input-base/squid-input-base.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-checkbox.scss';
import { emitEvent } from '../utils/squidEvents';
export class SquidCheckbox extends SquidInputBase {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            minlength: { type: String },
            maxlength: { type: String },
            tooltip: { type: String },
            pattern: { type: String },
            min: { type: String },
            max: { type: String },
            value: { type: String, reflect: true },
            placeholder: { type: String },
            size: { type: String },
            errorMessage: { type: String },
            step: { type: String },
            disabled: { type: Boolean },
            required: { type: Boolean },
            readonly: { type: Boolean },
            autofocus: { type: Boolean },
            compact: { type: Boolean },
            checked: { type: Boolean, attribute: true,reflect:true },
        };
    }
    constructor() {
        super();
        this.bindMethods(['__onChange']);
        this._value = false;
    }
    get indeterminate() {
        return this.__getInput().indeterminate;
    }
    
    set indeterminate(status) {
        const input  = this.__getInput();
        input.indeterminate = status;
        input.setAttribute('aria-checked', 'mixed');
    }
    render() {
        return html`
            <div id="container" data-ref="wrapper">
                <input
                    class="checkbox__input"
                    type="checkbox"
                    name="squid-input"
                    value="${this.value}"
                    id="squid-input-${this._uid}"
                    data-ref="input"
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    ?readonly=${this.readonly}
                    ?autofocus=${this.autofocus}
                    ?compact=${this.compact}
                    ?checked=${this.checked}
                    aria-checked=${this.checked}
                    @change=${this.__onChange}
                    aria-describedby="helpers-${this._uid}"
                />
                <label
                    class="checkbox__label"
                    for="squid-input-${this._uid}"
                    data-ref="label"
                    
                    ><slot></slot>${this._showDisabled}</label
                >
                <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
            </div>
        `;
    }
    updated(){
        emitEvent('changed',this.checked,this);
    }
    /**
     * Handle the checking of the box
     * @param {Event} evt onChange Event
     */
    __onChange(evt){
        console.log('onchange');
        if(this.checked !== evt.currentTarget.checked) {
            this.checked = evt.currentTarget.checked;
        }
    }
}
defineSquidElement('squid-checkbox', SquidCheckbox);
