
import {html} from 'lit-element';
import { SquidInputBase } from '../squid-input-base/squid-input-base.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-combobox.scss';
export class SquidCombobox extends SquidInputBase {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            value:{
                type:String,
                attribute:true,
                reflect:true},
            disabled:{type:Boolean},
            required:{type:Boolean},
            readonly:{type:Boolean},
            autofocus:{type:Boolean},
            datalabel:{type:String,attribute:true,},
            datavalue:{type:String,attribute:true}
        };
    }
    constructor() {
        super();
        this.bindMethods(['_openOptions','_closeOptions','_keyDown', '_selectNext','_selectPrevious','_keyInput','_selectValue',]);
        this._data = [];
        this._displayData = [];
        this.activeElement;
        this.addEventListener('blur', this._closeOptions);
    }
    set value(value) {
        if(this.renderRoot.querySelector('input')){
            const oldValue = this.renderRoot.querySelector('input').value;
            if(value !== oldValue) {
                if(this._objectData){
                    console.log([...this._objectData.values()]);
                    const objValue = [...this._objectData.values()].indexOf(value);
                    this.renderRoot.querySelector('input').value = [...this._objectData.keys()][objValue];
                } else {
                    this.renderRoot.querySelector('input').value = value; 
                }
            }
            this.dispatchEvent(new CustomEvent('squid-input-change'));
        }
    }
    get value(){
        if(this.renderRoot.querySelector('input')){
            if(this._objectData){
                return this._objectData.get(this.renderRoot.querySelector('input').value);
            }
            return this.renderRoot.querySelector('input').value;
        }
        return '';
    }
    
    set data(value){
        
        let oldValue = this._data;
        this._objectData = null;
        if(value.find(item => typeof item === 'object')) {
            if(!this.datalabel || !this.datavalue){
                console.error(`We must have a ${this.datalabel?'':' datalabel '} ${this.datavalue?'':' datavalue '}`);
            }
            this._objectData = new Map();
            value.forEach(item => this._objectData.set(item[this.datalabel],item[this.datavalue]));
            this._data = [...this._objectData.keys()];
            console.log(this._data);
        } else {
            this._data = value;
        }
        this._displayData = this._data;
        this.requestUpdate('data',oldValue);
        console.log(this.value, this.getAttribute('value'));
        // if(this.value !== this.getAttribute('value')){
        // this.value = this.getAttribute('value');
        // }
    }
    firstUpdated(){
        this.buildRefs();
        
    }
    render(){
        return html`
<div id="container" data-ref="wrapper">
    <label for="" id='${this.id}-label' class='combobox-label'><slot name='label'></slot></label>
    <div class='combobox-wrapper'>
        <div id='${this.id}-combobox'>
            <input type='text' role="combobox"
            aria-labelledby='${this.id}-label'
            aria-haspopup="grid"
            aria-expanded="false"
            aria-autocomplete="list"
            aria-controls="ex1-grid"
            id=${this.id}-input
            data-ref="input"
            ?disabled=${this.disabled}
            ?required=${this.required}
            ?readonly=${this.readonly}
            ?autofocus=${this.autofocus}

            @input=${this._keyInput}
            @keydown=${this._keyDown}
            aria-describedby="helpers-${this._uid}"
            >
            <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
        </div>
        <div aria-labelledby="${this.id}-label"
            role="grid"
            data-ref="optionsList"
            id="${this.id}-grid"
            class="grid hidden">
            ${this._displayData.map((option, index) => html`
            <div tabindex="-1" class="result-row" role="row" id="result-row-${index}" @click=${this._selectValue}>
                ${option}
            </div>`)}
        </div>
    </div>
</div> 
        `;
    }
    /**
       * Open the option grid
       */
    _openOptions(){
        if(!this.disabled){
            const { optionsList, input } = this.refs;
            optionsList.setAttribute('open', 'open');
            input.setAttribute('aria-expanded', 'true');
        }
    }
    /**
       * Closes the option grid
       */
    _closeOptions(){
        if(!this.disabled){
            const { optionsList, input } = this.refs;
            optionsList.removeAttribute('open');
            input.setAttribute('aria-expanded', 'false');
        }
    }
    /**
     * Capture the key down event
     * @param {Event} evt keydown event
     */
    _keyDown(evt){
        const { optionsList } = this.refs;
        if(optionsList.hasAttribute('open')){
            if(evt.key === 'ArrowDown' || evt.key === 'ArrowRight'){
                this._selectNext();
            }
            if(evt.key === 'ArrowUp'|| evt.key === 'ArrowLeft'){
                this._selectPrevious();
            }
            if(evt.key === 'Enter'){
                const { input } = this.refs;
                input.value = this._displayData[this.activeElement];
                this._closeOptions();
            }
        }
        // } else {
        //     this._openOptions();
        // }
        if(evt.key === 'Escape'){
            const { input } = this.refs;
            input.value = '';
            this._closeOptions();
        }
    }
    /**
     * 
     */
    _selectPrevious() {
        const elements = this.shadowRoot.querySelector('.active-decendant');
        if(elements){
            elements.classList.remove('active-decendant');
        }
        if(this.activeElement === undefined){
            this.activeElement = this._displayData.length - 1;
        } else {
            if(this.activeElement === 0) {
                this.activeElement = this._displayData.length - 1;
            } else {
                this.activeElement--;
            }
        }
        this.shadowRoot.querySelectorAll('.result-row').item(this.activeElement).classList.add('active-decendant');
    }
    /**
     * 
     * 
     * @return {Element} new active element
     */
    _selectNext() {
        const elements = this.shadowRoot.querySelector('.active-decendant');
        if(elements){
            elements.classList.remove('active-decendant');
        }
        if(this.activeElement === undefined){
            this.activeElement = 0;
        } else {
            if(this.activeElement === this._displayData.length - 1) {
                this.activeElement = 0;
            } else {
                this.activeElement++;
            }
        }
        this.shadowRoot.querySelectorAll('.result-row').item(this.activeElement).classList.add('active-decendant');
    }

    /**
     * 
     * @param {Event} evt Input value of the key
     */
    _keyInput(evt){
        const { optionsList, input } = this.refs;
        const oldValue = this._displayData;
        if(!optionsList.hasAttribute('open')){
            if(input.value && evt.key !== 'ArrowDown' && evt.key !== 'ArrowUp'){
                this._openOptions();
            }
        }
        this._displayData = this._data.filter(label => {
            return label.toLowerCase().includes(input.value.toLowerCase());
        });
        if(this._displayData.length === 0){
            this._closeOptions();
        }
        this.activeElement = undefined;
        const elements = this.shadowRoot.querySelector('.active-decendant');
        if(elements){
            elements.classList.remove('active-decendant');
        }
        this.requestUpdate('_displayData',oldValue);
    }

    /**
     * the click event for a selected value
     * @param {MouseEvent} evt click event
     */
    _selectValue(evt){
        const item = parseInt(evt.currentTarget.id.replace('result-row-',''));
        console.log(item);
        const { input } = this.refs;
        input.value = this._displayData[item];
        this.activeElement = undefined;
        this._closeOptions();
    }

}
defineSquidElement('squid-combobox',SquidCombobox);
