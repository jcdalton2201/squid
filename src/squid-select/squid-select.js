
import {html} from 'lit';
import { SquidInput } from '../squid-input/squid-input.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-select.scss';

/**
 * @tag squid-select
 * @summary The <select> HTML element represents a control that provides a menu of options:
 * @prop {Boolean} icon - A boolean value to show the chevron on the input element
 * @slot label - The label element for this input.
 * @event squid-select-change - A change to the input's value.
 * @example <squid-select name="pets" id="pet-select">
 * <span slot='label'>Animals</span>
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</squid-select>
 */
export class SquidSelect extends SquidInput {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            icon: {
                type:Boolean,
                reflect: true
            },
            value: { 
                type: String,
            },
        };
    }
    constructor() {
        super();
        this.value ='';
        this.firstUpdate = false;
        this.bindMethods(['__slotUpdate','__onChange','__setValue']);
    }
    
    firstUpdated(){
        this.buildRefs();
    }
    updated() {
        this.updateSelect();
    }
    updateSelect() {
        if(this.value && !this.firstUpdate){
            this.firstUpdate = true;
            this.shadowRoot.querySelectorAll('option').forEach((element)=>{
                if(element.value === this.value){
                    element.selected = true;
                } else {
                    element.selected = false;
                }
            });
            this.requestUpdate();
        }
    }
    get checkValidity() {
        const input = this.renderRoot.querySelector('select');
        return input.checkValidity.bind(input);
    }
    
    render(){
        return html`
        <div id="container" data-ref="wrapper">
            <div class="label-wrapper">
                <label class="select__label" for="squid-input-${this._uid}" data-ref="label"><slot name='label'></slot>${this._showDisabled}</label>
            </div>
            <div class='select__wrapper'>

            <select class="select__input" 
                    type="${this._inputType}" 
                    name="squid-input" 
                    value="${this.value}"
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
                <svg aria-hidden="true" 
                    focusable="false" 
                    data-prefix="fas" 
                    role="img" 
                    viewBox="0 0 448 512" class="chevron-down"
                    ?hidden=${!this.icon}>
                  <path fill="currentColor" 
                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 
                        24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 
                        22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class="">
                        </path>
                </svg>
            </div>
            <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
            <slot @slotchange=${this.__slotUpdate}></slot>
        </div>`;
    }
    __onChange(evt) {
        this.value = evt.target.value;
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
        setTimeout(()=>{
            this.updateSelect();
        });
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
