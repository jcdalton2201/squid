import {html} from 'lit-element';
import { SquidInputBase } from '../squid-input-base/squid-input-base.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-textarea.scss';
export class SquidTextarea extends SquidInputBase {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            id:{type:String},
            name:{type:String},
            autocomplete:{type:String},
            autofocus:{type:Boolean},
            cols:{type:Number},
            counter:{type:Boolean},
            disabled:{type:Boolean},
            maxlength:{type:String},
            minlength:{type:String},
            placeholder:{type:String},
            readonly:{type:Boolean},
            required:{type:Boolean},
            rows:{type:Number},
            spellcheck:{type:Boolean},
            value:{type:String,attribute:true},
            wrap:{type:String},
        };
    }
    constructor() {
        super();
        this.bindMethods(['__onInput']);
    }
    get checkValidity() {
        const input = this.renderRoot.querySelector('textarea');
        return input.checkValidity.bind(input);
    }
    set value(value) {
        if(this.renderRoot.querySelector('textarea')){
            const oldValue = this.renderRoot.querySelector('textarea').value;
            if(value !== oldValue) {
                this.renderRoot.querySelector('textarea').value = value; 
            }
            if(this.counter) {
                this.renderRoot.querySelector('squid-character-count').count = (value && value.length) || 0;
            }
            this.dispatchEvent(new CustomEvent('squid-input-change'));
        }
    }
    get value(){
        if(this.renderRoot.querySelector('textarea')){
            return this.renderRoot.querySelector('textarea').value;
        }
        return '';
    }
    firstUpdated(){
        this.buildRefs();
        if(this.getAttribute('value')){
            this.renderRoot.querySelector('textarea').value = this.getAttribute('value');
        }
    }
    render(){
        return html`
<div id="container" data-ref="wrapper">
    <div class="label-wrapper">
        <label class="textfield__label" for="squid-input-${this.id}" data-ref="label"><slot></slot>${this._showDisabled}</label>
        <squid-character-count data-ref="counter" ?hidden=${!this.counter} id="counter-${this._uid}"></squid-character-count>
    </div>
    <textarea class="textfield__input" 
            type="${this._inputType}" 
            name="${this.name}" 
            id="squid-input-${this.id}" 
            data-ref="input"
            ?disabled=${this.disabled}
            ?required=${this.required}
            ?readonly=${this.readonly}
            ?autofocus=${this.autofocus}
            ?spellcheck=${this.spellcheck}
            @input=${this.__onInput}
            maxlength="${this.maxlength?this.maxlength:''}"
            minlength="${this.minlength?this.minlength:''}"
            placeholder="${this.placeholder?this.placeholder:''}"
            autocomplete="${this.autocomplete?this.autocomplete:''}"
            cols=${this.cols?this.cols:''}
            rows=${this.rows?this.rows:''}
            wrap=${this.wrap?this.wrap:''}
            aria-describedby=" helpers-${this._uid} counter-${this._uid}" 
            class="" ></textarea>
    <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
</div>
        `;
    }
    __onInput(evt){
        this.value = evt.target.value;
    }
}
defineSquidElement('squid-textarea',SquidTextarea);
