
import {html} from 'lit-element';
import { SquidInput } from '../squid-input/squid-input.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-select.scss';
export class SquidSelect extends SquidInput {
    static get styles() {
        return [styles];
    }
    
    constructor() {
        super();
        this.bindMethods(['__slotUpdate','__onChange','__setValue']);
    }
    
    firstUpdated(){
        this.buildRefs();
    }
    get checkValidity() {
        const input = this.renderRoot.querySelector('select');
        return input.checkValidity.bind(input);
    }
    set value(_value){

        if(this.renderRoot.querySelector('select')){
            this.__setValue(_value);
        } else {
            setTimeout(()=>{this.__setValue(_value);} );
        }

        
    }
    get value(){
        return this.renderRoot.querySelector('select').value;
    }
    render(){
        return html`
        <div id="container" data-ref="wrapper">
            <div class="label-wrapper">
                <label class="select__label" for="squid-input-${this._uid}" data-ref="label"><slot name='label'></slot>${this._showDisabled}</label>
            </div>
            <select class="select__input" 
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
                    @change=${this.__onChange}
                    aria-describedby=" helpers-${this._uid} counter-${this._uid}"
                    class="">
                    </select>
            <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
            <slot @slotchange=${this.__slotUpdate}></slot>
        </div>`;
    }
    __onChange() {
        this.dispatchEvent(new CustomEvent('squid-select-change'));
    }
    __slotUpdate(){
        const { input } = this.refs;
        if(this.querySelector('option')){
            input.innerHTML = '';
            this.querySelectorAll('option').forEach(item => {
                input.appendChild(item);
            });
        }
    }
    __setValue(_value){
        const oldValue = this.renderRoot.querySelector('select').value;
        if(_value !== oldValue) {
            this.renderRoot.querySelector('select').value = _value; 
        }
        this.dispatchEvent(new CustomEvent('squid-select-change'));
    }
}
defineSquidElement('squid-select',SquidSelect);
