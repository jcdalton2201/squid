
import {html} from 'lit-element';
import {SquidInputBase} from '../squid-input-base/squid-input-base.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-input.scss';
export class SquidInput extends SquidInputBase {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            minlength:{type:String},
            maxlength:{type:String},
            autocomplete:{type:String},
            tooltip:{type:String},
            pattern:{type:String},
            min:{type:String},
            max:{type:String},
            value:{type:String},
            placeholder:{type:String},
            size:{type:String},
            errorMessage:{type:String},
            step:{type:String},
            disabled:{type:Boolean},
            required:{type:Boolean},
            readonly:{type:Boolean},
            autofocus:{type:Boolean},
            compact:{type:Boolean},
            counter:{type:Boolean},
        };
    }
    constructor(type){
        super();
        this._showDisabled = '';
        this._inputType = type;
    }
    set pattern(value) {
        const input = this.renderRoot.querySelector('input');
        if(!input){
            setTimeout(()=>{
                const input = this.renderRoot.querySelector('input');
                const oldValue = input.pattern;
                if(value) {
                    input.pattern = value;
                }
                this.requestUpdate('pattern',oldValue);
            });
        } else {
            const oldValue = input.pattern;
            if(value) {
                input.pattern = value;
            }
            this.requestUpdate('pattern',oldValue);
        }
    }
    get pattern(){
        return this.renderRoot.querySelector('input').pattern;
    }
    set value(value) {
        const oldValue = this.renderRoot.querySelector('input').value;
        if(value !== oldValue) {
            this.renderRoot.querySelector('input').value = value; 
        }
        if(this.counter) {
            this.renderRoot.querySelector('squid-character-count').count = (value && value.length) || 0;
        }
        this.dispatchEvent(new CustomEvent('squid-input-change'));
    }
    get value(){
        return this.renderRoot.querySelector('input').value;
    }
    render(){
        return html`
        <div id="container" data-ref="wrapper">
            <div class="label-wrapper">
                <label class="textfield__label" for="squid-input-${this._uid}" data-ref="label"><slot></slot>${this._showDisabled}</label>
                <squid-character-count data-ref="counter" ?hidden=${!this.counter} id="counter-${this._uid}" ></squid-character-count>
            </div>
            <input class="textfield__input" 
                    type="${this._inputType}" 
                    name="squid-input" 
                    value="" 
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
                     
                    aria-describedby=" helpers-${this._uid} counter-${this._uid}"
                    class="">
            <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
        </div>
        `;
    }
   
    __onInput(evt) {
        this.value = evt.target.value;
    }
}
defineSquidElement('squid-input',SquidInput);
