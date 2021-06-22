
import {html} from 'lit';
import { SquidInputBase } from '../squid-input-base/squid-input-base.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import { emitEvent } from '../utils/squidEvents.js';
import styles from './squid-radio.scss';
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
                    ?checked=${this.checked}
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
