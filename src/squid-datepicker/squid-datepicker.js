
import {html} from 'lit-element';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-datepicker.scss';
import { SquidInput } from '../squid-input/squid-input.js';
import '../squid-calendar/squid-calendar.js';
export class SquidDatepicker extends SquidInput {
    static get styles() {
        return [...super.styles, styles];
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
