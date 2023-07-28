import { html } from 'lit';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-checkbox-group.scss';
import { findParentForm } from '../utils/findParentForm.js';
import { emitEvent } from '../utils/squidEvents';
/**
 * @prop {String} legend - Set the fieldset's legend text. Reflected as a property.
 * @prop {String} tagName - By default set to `squid-checkbox`. This tells the component what tag name to check for changes on. Must be set before the element is created. After that, changes will cause unexpected behavior.
 * @event squid-change - A [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) emitted each time a new value is comitted. The event's `detail` property will contain the newly comitted value.  This value will always be an array.
 * @tag squid-checkbox-group
 * @summary Creates an accessible checkbox group using [`SquidCheckbox`](../squid-checkbox) or a similar component.

The `SquidCheckbox` element is an implementation of the [checkbox element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

> Checkboxes are used to select a single item or multiple items. A checkbox has two selection states: unselected and selected.
> The difference between radio buttons and checkboxes is that a radio button is for a single selection from a set of options and a checkbox allows for multiple selections from a set of options.
> The main difference between a toggle and a checkbox is that the [toggle switch](../squid-toggle) is for action and checkbox is for status.
 * @example <squid-checkbox-group legend="Favorite Star Wars Movies">
  <squid-checkbox value="The Phantom Menace" disabled>The Phantom Menace</squid-checkbox>
  <squid-checkbox value="Attack of the Clones" disabled>Attack of the Clones</squid-checkbox>
  <squid-checkbox value="Revenge of the Sith" disabled>Revenge of the Sith</squid-checkbox>
  <squid-checkbox value="A New Hope">A New Hope</squid-checkbox>
  <squid-checkbox value="The Empire Strikes Back">The Empire Strikes Back</squid-checkbox>
  <squid-checkbox value="Return of the Jedi">Return of the Jedi</squid-checkbox>
  <squid-checkbox value="The Force Awakens">The Force Awakens</squid-checkbox>
  <squid-checkbox value="The Last Jedi">The Last Jedi</squid-checkbox>
  <squid-checkbox value="Rogue One">Rogue One</squid-checkbox>
  <squid-checkbox value="Solo">Solo</squid-checkbox>
</squid-checkbox-group>
 * 
 */
export class SquidCheckboxGroup extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            legend: { type: String },
            required: { type: Boolean },
            value: {
                type: String, converter: {
                    fromAttribute(value) {
                        return value.split(',');
                    }
                }
            }
        };
    }
    constructor() {
        super();
        this.value = [];
        this.internals = this.attachInternals();
        this.bindMethods(['__onChange', 'slotChange','updateCheckBoxes']);
        const { form } = this;
        this.addEventListener('keydown', evt => {
            if (form && evt.code === 'Enter') {
                form.dispatchEvent(new CustomEvent('submit'));
            }
        });
        this.addEventListener('changed', this.__onChange);

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
    set value(items) {
        if (items instanceof Array && items.length > 0) {
            setTimeout(()=>{
                this.renderOptions?.host?.querySelectorAll('squid-checkbox').forEach((checkbox) => {
                    // this.elements.forEach((checkbox)=>{
                    if (items.includes(checkbox.value)) {
                        checkbox.checked = true;
                    } else {
                        checkbox.checked = false;
                    }
                });
            });
        } else {
            this.elements.map((checkbox) => checkbox.checked = false);
        }
    }
    /**check the if the element is valid */
    checkValidity() {
        return true;
    }
    /**
     * Custom change event from checkbox
     * @param {Event} evt change Event
     */
    __onChange(evt) {
        evt.stopImmediatePropagation();
        emitEvent('group-changed', this.value, this);
    }
    slotChange() {
        this.updateCheckBoxes();
    }
    updateCheckBoxes() {
        if (this.value instanceof Array && this.value.length > 0) {
            this.renderOptions?.host?.querySelectorAll('squid-checkbox').forEach((checkbox) => {
                // this.elements.forEach((checkbox)=>{
                console.log(checkbox);
                if (this.value.includes(checkbox.value)) {
                    checkbox.checked = true;
                } else {
                    checkbox.checked = false;
                }
            });
        } else {
            this.elements.map((checkbox) => checkbox.checked = false);
        }
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
                <slot @slotchange=${this.slotChange}></slot>
            </div>
        </fieldset>`;
    }
}
SquidCheckboxGroup.childTag = 'squid-checkbox';
defineSquidElement('squid-checkbox-group', SquidCheckboxGroup);
