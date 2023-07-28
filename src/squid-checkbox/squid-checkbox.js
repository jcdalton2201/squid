import { html } from 'lit';
import { SquidInputBase } from '../squid-input-base/squid-input-base.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-checkbox.scss';
import { emitEvent } from '../utils/squidEvents';
/**
 * @prop   {Boolean} checked - Analogue for the checkbox input's `checked` value. Reflected by the `checked` property.  
 * @prop   {Boolean} disabled - Analogue for the checkbox input's `disabled` property.
 * @prop   {Boolean} required - Analogue for the checkbox input's `required` property.
 * @prop   {String} value - The checkbox's value. Reflected by the `value` property.
 * @prop   {Boolean} indeterminate - Set the input to an indeterminate state. Will result in a falsy value.
 * @event  changed - `CustomEvent` emitted when the value changes. The detail property contains the property's `checked` property.
 * @tag squid-checkbox
 * @summary The `SquidCheckbox` element is an implementation of the [checkbox element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

> Checkboxes are used to select a single item or multiple items. A checkbox has two selection states: unselected and selected.
> The difference between radio buttons and checkboxes is that a radio button is for a single selection from a set of options and a checkbox allows for multiple selections from a set of options.
> The main difference between a toggle and a checkbox is that the [toggle switch](../squid-toggle) is for action and checkbox is for status.
 * @example <squid-checkbox>Chcekbox</squid-checkbox>
<squid-checkbox checked="true">Chcekbox checked</squid-checkbox>
<squid-checkbox disabled>Chcekbox &mdash; disabled</squid-checkbox>
<squid-checkbox required>Chcekbox &mdash; required</squid-checkbox>
 */
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
            checked: { type: Boolean, reflect: true },
        };
    }
    constructor() {
        super();
        this.bindMethods(['__onChange']);
        this._value = '';
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
                    .required=${this.required}
                    ?readonly=${this.readonly}
                    .autofocus=${this.autofocus}
                    .compact=${this.compact}
                    .checked=${this.checked}
                    aria-checked=${this.checked}
                    aria-disabled=${this.disabled}
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
        console.log('**_onchange**');
        if(this.checked !== evt.currentTarget.checked) {
            this.checked = evt.currentTarget.checked;
        }
        
    }
}
defineSquidElement('squid-checkbox', SquidCheckbox);
