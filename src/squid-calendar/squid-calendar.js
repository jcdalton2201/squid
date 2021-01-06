import { BaseElement } from '../utils/baseElement.js';
import { html } from 'lit-element';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-calendar.scss';
import { months, dayOfWeek } from '../utils/dateUtils.js';
import { emitEvent } from '../utils/squidEvents.js';

export class SquidCalendar extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            value: {
                type: String,
                reflect: true,
                converter: {
                    toAttribute(value) {
                        return value.toLocaleDateString();
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
        this.bindMethods([
            '__generateMonth',
            '__increment',
            '__decrease',
            '__selectDate',
            '__removeSelectDate',
            '__generateYears',
            '__toggleYear',
            '__setYear',
            'submit',
            'close',
        ]);
        const millDate = Date.now();
        this.currentDate = new Date(millDate);
        this.displayMonth = new Date(millDate);
        this.displayMonth.setDate(1);
    }
    firstUpdated() {
        if (this.value) {
            this.displayMonth = new Date(this.value.getTime());
            this.requestUpdate();
        }
    }

    render() {
        return html`
            <div data-ref="container" class="container">
                <div class="header">
                    ${this.value ? dayOfWeek[this.value.getDay()] : dayOfWeek[this.displayMonth.getDay()]},
                    ${this.value ? months[this.value.getMonth()].abbr : months[this.displayMonth.getMonth()].abbr}
                    ${this.value ? this.value.getDate() : this.currentDate.getDate()}
                    ${this.value ? this.value.getFullYear() : this.currentDate.getFullYear()}
                </div>
                <div class="left-nav"  @click=${this.__decrease}>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="chevron-left"
                        role="img"
                        width="14px"
                        height="14px"
                        viewBox="0 0 256 512"
                        class="chevron-left"
                    >
                        <path
                            fill="currentColor"
                            d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                            class=""
                        ></path>
                    </svg>
                </div>
                <div class="middle-nav" @click=${this.__toggleYear}>
                    ${months[this.displayMonth.getMonth()].name.toUpperCase()}
                    ${this.displayMonth.getFullYear()}
                </div>
                <div class="right-nav" @click=${this.__increment}>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="chevron-right"
                        role="img"
                        width="14px"
                        height="14px"
                        viewBox="0 0 256 512"
                        class="chevron-right"
                    >
                        <path
                            fill="currentColor"
                            d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                            class=""
                        ></path>
                    </svg>
                </div>
                <div class="title">SU</div>
                <div class="title">MO</div>
                <div class="title">TU</div>
                <div class="title">WE</div>
                <div class="title">TH</div>
                <div class="title">FR</div>
                <div class="title">SA</div>
                ${this.__generateMonth().map(
        (item, index) => html` <div
                        @click=${this.__selectDate}
                        class="day ${this.isYear ? 'hide' : ''} ${this.value &&
                            this.value.getDate() === index + 1 &&
                            this.value.getMonth() ===
                            this.displayMonth.getMonth() &&
                            this.value.getFullYear() ===
                            this.displayMonth.getFullYear()
    ? 'selected-date'
    : ''}"
                        style="${index === 0
        ? 'grid-column-start:' + (item + 1)
        : ''}"
                    >
                        ${index + 1}
                    </div>`
    )}
                ${this.__generateYears().map(
        (item, index) => html`
                        <div
                            @click=${this.__setYear}
                            class="year ${index % 2 ? 'odd' : 'even'} ${this
    .isYear
    ? ''
    : 'hide'}"
                        >
                            ${item}
                        </div>
                    `
    )}
                <div class="close-buttons">
                    <a href="javascript:void(0)" @click=${this.close}>CLOSE</a>
                    <a href="javascript:void(0)" @click=${this.submit}>OK</a>
                </div>
            </div>
        `;
    }
    close() {
        emitEvent('date-close', null, this);  
    }
    submit() {
        emitEvent('date-submit', null, this);
    }
    /**
     *
     * @param {MouseEvent} evt Click event to set Year
     */
    __setYear(evt) {
        const temp = parseInt(evt.currentTarget.innerText);
        this.displayMonth.setFullYear(temp);
        this.isYear = false;
        this.requestUpdate();
    }
    __generateYears() {
        let index = -3;
        const items = [];
        for (let i = index; i < 5; i++) {
            items.push(this.displayMonth.getFullYear() + i);
        }
        return items;
    }
    __generateMonth() {
        const days = new Date(
            this.displayMonth.getFullYear(),
            this.displayMonth.getMonth() + 1,
            0
        ).getDate();
        const currentDateOfWeek = [];
        for (let index = 1; index <= days; index++) {
            this.displayMonth.setDate(index);
            currentDateOfWeek.push(this.displayMonth.getDay());
        }
        this.displayMonth.setDate(1);
        return currentDateOfWeek;
    }
    __increment() {
        if (this.isYear) {
            this.displayMonth.setFullYear(this.displayMonth.getFullYear() + 8);
        } else {
            this.displayMonth.setMonth(this.displayMonth.getMonth() + 1);
            this.__removeSelectDate();
        }
        this.requestUpdate();
    }
    __decrease() {
        if (this.isYear) {
            this.displayMonth.setFullYear(this.displayMonth.getFullYear() - 8);
        } else {
            this.displayMonth.setMonth(this.displayMonth.getMonth() - 1);
            this.__removeSelectDate();
        }
        this.requestUpdate();
    }
    /**
     *
     * @param {MouseEvent} evt click event
     */
    __selectDate(evt) {
        this.__removeSelectDate();
        evt.currentTarget.classList.add('selected-date');
        const temp = parseInt(evt.currentTarget.innerText);
        this.value = new Date(this.displayMonth.getTime());
        this.value.setDate(temp);
        this.requestUpdate();
        emitEvent('date-selected', {value:this.getAttribute('value')}, this);
    }
    __removeSelectDate() {
        if (this.renderRoot.querySelector('.selected-date')) {
            this.renderRoot
                .querySelector('.selected-date')
                .classList.remove('selected-date');
        }
    }
    __toggleYear() {
        this.isYear = !this.isYear;
        this.requestUpdate();
    }
}
defineSquidElement('squid-calendar', SquidCalendar);
