
import {html} from 'lit';
import { SquidInputBase } from '../squid-input-base/squid-input-base.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-combobox.scss';
/**
 * @tag squid-combobox
 * @summary A combobox is a combination of input element and a select element much like a [datalist](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist), but with some subtle differences. The W3C defines a combobox as:

> A combobox is a widget made up of the combination of two distinct elements: 1) a single-line textbox, and 2) an associated pop-up element for helping users set the value of the textbox. The popup may be a listbox, grid, tree, or dialog. Many implementations also include a third optional element -- a graphical button adjacent to the textbox, indicating the availability of the popup. Activating the button displays the popup if suggestions are available.
_[-source](https://www.w3.org/TR/wai-aria-practices/#combobox)_
 * @prop {Boolean} disabled - A proxy for the input disabled attribute. Reflected as a property. 
 * @prop {Boolean} required - A proxy for the input disabled attribute. Reflected as a property. 
 * @prop {Boolean} autofocus -  A proxy for the input autofocus attribute. Reflected as a property. 
 * @prop {String} tooltip -  Sets a tooltip on the combobox label using [`SquidTooltip`](../squid-tooltip). Reflected as a property. 
 * @prop {String} placeholder -  A proxy for the input placeholder attribute. Reflected as a property. 
 * @prop {String} size -  Can set the size on the input. Reflected as a property. 
 * @prop {String} value -  Sets the input's value and emits an `squid-change` event when updated. Reflected as a property. 
 * @prop {String} datalabel -  Set the string to tell you what property you wish to show in your object array
 * @prop {String} datavalue -  Set the string to tell you what property you wish to be your key in your object array
 * @prop {Array} data -  This is the data set you wish to show in the popdown.  It can be an Array of Strings
or an Array of objects with datalabel and datavalue attributes set
 * @event squid-change - A [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) emitted each time a new value is comitted. The event's `detail` property will contain the newly comitted value. 
 * @example <squid-combobox name="world" placeholder="Harry Potter characters">
  <label slot="label">Favorite Harry Potter Character</label>
  <option value="ME">Harry Potter</option>
  <option value="Ron Weasley">Ron Weasley</option>
  <option value="Hermione Granger">Hermione Granger</option>
  <option value="Albus Dumbledore">Albus Dumbledore</option>
  <option value="Severus Snape">Severus Snape</option>
  <option value="Sirius Black">Sirius Black</option>
  <option value="Neville 'freaking' Longbottom">Neville Longbottom</option>
  <option value="Voldemort">He Who Must Not Be Named</option>
</squid-combobox>
 */
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
        this.activeElemen = null;
        this.addEventListener('blur', this._closeOptions);
    }
    set value(value) {
        if(this.renderRoot.querySelector('input')){
            const oldValue = this.renderRoot.querySelector('input').value;
            if(value !== oldValue) {
                if(this._objectData){
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
        } else {
            this._data = value;
        }
        this._displayData = this._data;
        this.requestUpdate('data',oldValue);
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
        const { input } = this.refs;
        input.value = this._displayData[item];
        this.activeElement = undefined;
        this._closeOptions();
    }

}
defineSquidElement('squid-combobox',SquidCombobox);
