import { html } from 'lit';
import { SquidCheckbox } from '../squid-checkbox/squid-checkbox.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-toggle.scss';
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