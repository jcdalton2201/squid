
import {html} from 'lit';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-datepicker.scss';
import { SquidInput } from '../squid-input/squid-input.js';
import '../squid-calendar/squid-calendar.js';
/**
 * @tag squid-datepicker
 * @summary The `SquidDatepicker` component is an version of input with a type of text.  
 * It will use the [SquidCalendar](../squid-Calendar) to display a calendar for picking a date.
 * @prop {String} disabled - A proxy for the input disabled attribute. Reflected as a property. 
 * @prop {String} required - A proxy for the input required attribute. Reflected as a property. 
 * @prop {String} autofocus - A proxy for the input autofocus attribute. Reflected as a property. 
 * @prop {String} placeholder - A proxy for the input placeholder attribute. Reflected as a property. 
 * @prop {String} value - Sets the input's value and emits an `squid-change` event when updated. Reflected as a property. 
 * @prop {String} autocomplete - A proxy for the input's `autocomplete` property. Reflected as a property. 
 * @prop {String} pattern - A RegEx to be used by the input for validation purposes. Serves as a proxy for the input's pattern property/attribute. 
 * @event squid-change A [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) emitted each time the input's value is changed. Not to be confused with the browser `change` event which only fires when an input is blurred. The `detail` property contains the input's value.
 * @example <squid-datepicker required >This input will run validations</squid-datepicker
 */
export class SquidDatepicker extends SquidInput {
    static get styles() {
        return [...super.styles, styles];
    }
    static get properties() {
        return {
            value: {
                type: String,
                reflect: true,
                converter: {
                    toAttribute(value) {
                        if(value instanceof Date){
                            return this.localization.format(value);
                        } 
                        return value;
                    },
                    fromAttribute(value) {
                        if(value){
                            return new Date(value);
                        }
                        return null;
                    },
                },
            },
        };
    }
    constructor() {
        super();
        this.bindMethods(['toggleCalendar', 'selectedValue']);
        const lang = document.querySelector('html').lang || 'en-US';
        this.dayFormat = this.dayFormat || '2-digit';
        this.monthFormat = this.monthFormat || '2-digit';
        this.yearFormat = this.yearFormat || 'numeric';
        this.localization = new Intl.DateTimeFormat(lang, {
            day: this.dayFormat,
            month: this.monthFormat,
            year: this.yearFormat,
        });
    }
    firstUpdated(){
        this.buildRefs();
    }
    render(){
        return html`
    <div id="container" data-ref="wrapper">
        <div class="label-wrapper">
            <label class="textfield__label" for="squid-input-${this._uid}" data-ref="label"><slot></slot>${this._showDisabled}</label>
            <squid-character-count data-ref="counter" ?hidden=${!this.counter} id="counter-${this._uid}" }></squid-character-count>
        </div>
        <input class="textfield__input" 
                type="${this._inputType}" 
                name="squid-input" 
                id="squid-input-${this._uid}" 
                data-ref="input"
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                value=${this.value ?this.value:''}
                ?autofocus=${this.autofocus}
                ?compact=${this.compact}
                @input=${this.__onInput}
                maxlength="${this.maxlength?this.maxlength:''}"
                max="${this.max?this.max:''}"
                minlength="${this.minlength?this.minlength:''}"
                min="${this.min?this.min:''}"
                placeholder="${this.placeholder?this.placeholder:''}"
                autocomplete="${this.autocomplete?this.autocomplete:''}"
                @click=${this.toggleCalendar}
                aria-describedby=" helpers-${this._uid} counter-${this._uid}"
                class="">
        <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
        <squid-calendar  class='hide' @date-selected=${this.selectedValue} @date-submit=${this.selectedValue} @date-close=${this.toggleCalendar}  data-ref="calendar" id="calendar-${this._uid}"></squid-calendar>
    </div>
        `;
    }
    toggleCalendar(){
        const { calendar } = this.refs;
        const newDate = new Date(this.value);
        if(newDate != 'Invalid Date'){
            calendar.value = new Date(this.value);
        }
        calendar.classList.toggle('hide');
    }
    selectedValue(){
        const { calendar, input } = this.refs;
        try {
            input.value = this.localization.format(calendar.value);            
        } catch (error) {
            input.value = '';
        }
        this.value = input.value;
        calendar.classList.toggle('hide');
    }
}
defineSquidElement('squid-datepicker',SquidDatepicker);
