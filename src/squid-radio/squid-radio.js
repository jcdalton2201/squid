
import {html} from 'lit';
import { SquidInputBase } from '../squid-input-base/squid-input-base.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import { emitEvent } from '../utils/squidEvents.js';
import styles from './squid-radio.scss';
/**
 * @tag squid-radio
 * @summary <squid-radio> elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.

Only one radio button in a given group can be selected at the same time. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.
 * @prop {Boolean} disabled - Whether the form control is disabled
 * @prop {Boolean} required - Boolean. A value is required or must be check for the form to be submittable
 * @prop {Boolean} readonly - Boolean. The value is not editable
 * @prop {Boolean} autofocus - Automatically focus the form control when the page is loaded
 * @prop {Boolean} checked - A Boolean attribute which, if present, indicates that this radio button is the default selected one in the group.
 * @prop {String} name - Name of the form control. Submitted with the form as part of a name/value pair.
 * @prop {String} value - The value attribute is one which all `<input>`s share; however, it serves a special purpose for inputs of type radio: when a form is submitted, only radio buttons which are currently checked are submitted to the server, and the reported value is the value of the value attribute. If the value is not otherwise specified, it is the string on by default. This is demonstrated in the section Value above.
 * @example <squid-radio-group>
  <h1 slot="title">Vote</h1>
  <squid-radio name='test' value='yes' >YES</squid-radio>
  <squid-radio name='test' value='no'>No</squid-radio>
  <squid-radio name='test' value='maybe'>Maybe</squid-radio>
</squid-radio-group>
 */
export class SquidRadio extends SquidInputBase {
    constructor() {
        super();
        this.bindMethods(['__onChange']);
        // this.internals = this.attachInternals();
        this.is = 'radio';
        this.checked = false;
    }
    // static get formAssociated() {
    //     return true;
    // }
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            disabled: { type: Boolean },
            required: { type: Boolean },
            readonly: { type: Boolean },
            autofocus: { type: Boolean },
            checked: { type: Boolean, attribute: true,reflect:true },
            name: { type: String, attribute: true,reflect:true },
            value: { type: String, attribute: true,reflect:true },
        };
    }
    render() {
        return html`
            <div id="container" data-ref="wrapper">
                <input
                    class="radiobutton--input"
                    type="radio"
                    name="${this.name}"
                    value="${this.value}"
                    id="squid-input-${this._uid}"
                    data-ref="input"
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    ?readonly=${this.readonly}
                    ?autofocus=${this.autofocus}
                    aria-checked=${this.checked}
                    @change=${this.__onChange}
                    .checked=${this.checked}
                    aria-describedby="helpers-${this._uid}"
                />
                <label
                    class="radiobutton--label"
                    for="squid-input-${this._uid}"
                    data-ref="label"
                    
                    ><slot></slot>${this._showDisabled}</label
                >
                <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
            </div>
        `;
    }
    /**
     * Sync all of the inputs with the same name
     * @param {Event} evt change Event
     * @param {String} prop the input property
     */
    __onChange(){
        this.checked = this.__getInput().checked;
        this.requestUpdate('checked',null);
        emitEvent('squid-change',null,this);
    }
}
defineSquidElement('squid-radio',SquidRadio);
