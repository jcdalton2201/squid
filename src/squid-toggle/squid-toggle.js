import { html } from 'lit';
import { SquidCheckbox } from '../squid-checkbox/squid-checkbox.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-toggle.scss';
/**
 * @tag squid-toggle
 * @summary The `SquidToggle` element is an implementation of the [checkbox element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

> Toggle is a special type of checkbox that presents as a switch.
> The main difference between a toggle and a checkbox is that the toggle switch is for action and checkbox is for status.
 * @prop   {Boolean} checked - Analogue for the checkbox input's `checked` value. Reflected by the `checked` property.  
 * @prop   {Boolean} disabled - Analogue for the checkbox input's `disabled` property.
 * @prop   {Boolean} required - Analogue for the checkbox input's `required` property.
 * @prop   {String} value - The checkbox's value. Reflected by the `value` property.
 * @prop   {Boolean} indeterminate - Set the input to an indeterminate state. Will result in a falsy value.
 * @event  changed - `CustomEvent` emitted when the value changes. The detail property contains the property's `checked` property.
 * @example <squid-toggle>Chcekbox</squid-toggle>
<squid-toggle checked="true">Chcekbox checked</squid-toggle>
<squid-toggle disabled>Chcekbox &mdash; disabled</squid-toggle>
<squid-toggle required>Chcekbox &mdash; required</squid-toggle>
 */
export class SquidToggle extends SquidCheckbox {
    static get styles() {
        return [styles];
    }
    constructor() {
        super();
        this.checked = false;
    }
    render() {
        return html` <div id="container" data-ref="wrapper">
            <label
                class="label-wrapper"
                for="squid-toggle-${this._uid}"
                data-ref="label"
                ><slot></slot>${this._showDisabled}
                <p class='toggle-wrapper'>
                    <input
                        class="checkbox_toggle"
                        roll="switch"
                        type="checkbox"
                        name="squid-toggle"
                        value="${this.value}"
                        id="squid-toggle-${this._uid}"
                        data-ref="toggle"
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

                    <span
                        class="simpleToggleSwitch"
                        aria-hidden="true"
                        data-ref="side"
                    >
                    </span>
                </p>
            </label>
            <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
        </div>`;
    }
}
defineSquidElement('squid-toggle', SquidToggle);