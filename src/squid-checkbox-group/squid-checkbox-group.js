import { html } from 'lit-element';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-checkbox-group.scss';
import {findParentForm} from '../utils/findParentForm.js';
import { emitEvent } from '../utils/squidEvents';
export class SquidCheckboxGroup extends BaseElement{
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            legend: { type:String },
            required: { type: Boolean },
        };
    }
    constructor() {
        super();
        this.bindMethods(['__onChange']);
        const {form} = this;
        this.addEventListener('keydown', evt => {
            if(form && evt.code === 'Enter') {
                form.dispatchEvent(new CustomEvent('submit'));
            }
        });
        this.addEventListener('changed',this.__onChange);

    }
    /**
     * @returns {HTMLElement}
     */
    get form() {
        this._form = this._form || findParentForm(this);
        return this._form;
    }
    /** Get all checked checkboxes */
    get checkedElements() {
        return this.querySelectorAll(`${this.constructor.childTag}[checked]`);
    }
    /** Get all child checkboxes */
    get elements() {
        return [...this.querySelectorAll(`${this.constructor.childTag}`)];
    }
    /** Return the value of all checked squid-checkboxes */
    get value() {
        return [...this.checkedElements].map(checkbox => checkbox.value);
    }
    /**
     * Custom change event from checkbox
     * @param {Event} evt change Event
     */
    __onChange(evt){
        evt.stopImmediatePropagation();
        emitEvent('group-changed',this.value,this);
    }
    render() {
        return html`<fieldset class="fieldset" data-ref="fieldset">
            <legend class="fieldset__legend" data-ref="legend">
                ${this.legend}
            </legend>
            <div
                class="checkbox-group"
                data-ref="checkboxGroup"
                aria-describedby="helpers"
            >
                <slot></slot>
            </div>
        </fieldset>`;
    }
}
SquidCheckboxGroup.childTag = 'squid-checkbox';
defineSquidElement('squid-checkbox-group', SquidCheckboxGroup);
