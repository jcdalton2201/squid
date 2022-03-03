
import {html} from 'lit';
import { SquidInput } from '../squid-input/squid-input.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-ssn.scss';
import { emitEvent} from '../utils/squidEvents.js';
/**
 * @tag squid-ssn
 * @summary `SquidSsn` is an implementation of [`SquidInput`](../squid-input) that serves as a social-security number mask for privacy reasons.
 * @prop {String} value - value of the input.
 * @event squid-change - The input value has changed.
 * @example <squid-ssn>Social security number</squid-ssn>
 */
export class SquidSsn extends SquidInput {
    constructor() {
        super();
        this.bindMethod('_parseAddtion');
        this.bindMethod('_parseDeletion');
        this.bindMethod('__onKeydown');
        this.bindMethod('_addMask');
        this.bindMethod('_unmask');
        this.bindMethod('_manageCursor');
        this.bindMethod('__showHideToggle');
        this.bindMethod('__onBlur');
        this.bindMethod('__onFocus');
        this._isDelete = false;
        this.unmaskedValue = '';
        this.maskedValue = '';
        this._obfuscatedValue = '';
    }

    static get styles() {
        return [...super.styles,styles];
    }
    /** Get the value from the value attribute */
    // get value() {
    get value() {
        return this._value;
    }
    //     return this._value;
    // }

    // /** When the value changes, make sure the emit events and set up masks */
    // set value(_value) {
    //     const value = this._unmask(_value.toString());
    //     emitEvent('squid-change', _value,this);
    //     const input = this.__getInput();
    //     if(input){
    //         this._mask(value);
    //     }
    // }
    updated(changedProperties){
        if (changedProperties.has('value')) {
            const value = this._unmask(this.value.toString());
            emitEvent('squid-change', this.value,this);
            this._mask(value);
        }
    }
    render(){
        return html`
        <div id="container" data-ref="wrapper">
            <div class="label-wrapper">
                <label class="textfield__label" for="squid-input-${this._uid}" data-ref="label"><slot></slot>${this._showDisabled}</label>
                <button class='toggle-button' data-ref='toggleButton' @click=${this.__showHideToggle}>Hide</button>
            </div>
            <input class="textfield__input" 
                    type="${this._inputType}" 
                    name="${this.name?this.name:''}"
                    value="${this.value}" 
                    id="squid-input-${this._uid}" 
                    data-ref="input"
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    ?readonly=${this.readonly}
                    ?autofocus=${this.autofocus}
                    ?compact=${this.compact}
                    @keydown=${this.__onKeydown}
                    @input=${this.__onInput}
                    @blur=${this.__onBlur}
                    @focus=${this.__onFocus}
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
    firstUpdated(){
        super.connectedCallback();
        this.hasValidation = true;
        this.maskState = 'hidden';
        this._placeholder = '___-__-____';
        // this.pattern = "^\d{3}-\d{2}-\d{4}$";
        this.minlength = 11;
        this.maxlength = 11;
        this._toggleButtonText();
    }
    /**
     * Manage the location of the cursor
     * @param {String} maskedValue the masked value
     * @param {number} selectionStart the current cursor location
     * @param {Event} event keyboard Event
     */
    _manageCursor(maskedValue, selectionStart, evt={}) {
        if (selectionStart >= 3 && selectionStart < 5) {
            selectionStart += 1;
        } else if (selectionStart >= 5) {
            selectionStart += 2;
        }
    
        if (evt.inputType === 'deleteContentBackward') {
            selectionStart = this._cachedSelection - 1;
        }
    
        this.__getInput().setSelectionRange(selectionStart, selectionStart);
    }
    /**
     * Handel the blur event to add placeholder back in.
     * 
     */
    __onBlur(){
        const input  = this.__getInput();
        if (input.value === this._placeholder) {
            input.value = '';
        }
        this.checkValidity();
    }

    __onFocus(){
        setTimeout(() => {
            const input  = this.__getInput();
            if (input.value === '') {
                input.setSelectionRange(0, 0);
            } else {
                const firstPlaceholder = input.value.indexOf('_');
                input.setSelectionRange(firstPlaceholder, firstPlaceholder);
            }
        });
    }
    /**
     * Handel the input event
     * @param {Event} evt input event
     */
    __onInput(evt){
        if(!evt.inputType && this._isDelete){
            evt.inputType = 'deleteContentBackward';
        }
        if(evt.inputType !== 'deleteContentBackward'){
            this._parseAddtion(evt);
        } else {
            this._parseDeletion(evt);
        }
    }
    /**
     * Handels the keydown event
     * @param {Event} evt handel keydown event
     */
    __onKeydown(evt){
        const deleteKeys = [8,64];
        const { key } = evt;
        const input = this.__getInput();
        const { selectionStart } = input;
        this._isDelete = deleteKeys.includes(evt.keyCode);
        this._cachedValue = this.unmaskedValue || '';
        this._cachedSelection = selectionStart;
        if(key.match(/[0-9]$/)){
            input.value = '';
        } else {
            if(key.toString().includes('Arrow')) {
                setTimeout(()=>{
                    this._cachedSelection = input.selectionStart;
                });
            }
        }
    }
    /**
     * Handel the paste event
     * @param {Event} evt Paste Event
     */
    __onPaste(evt){
        const pastedValue = evt.clipboardData.getData('text/plain');
        this._mask(pastedValue);
    }
    /**
     * adding to the mask   
     * @param {Event} evt keyboard Event passed
     */
    _parseAddtion(evt){
        const oldValue = this._addMask(this._cachedValue);
        const newValue = this._unmask(oldValue.slice(0,this._cachedSelection) + this.__getInput().value + oldValue.slice(this._cachedSelection));
        this._mask(newValue,evt);
    }
    /**
     * deleting to the mask
     * @param {Event} evt keyboard Event passed
     */
    _parseDeletion(evt){
        const maskedValue = this._addMask(this._cachedValue);
        const value = this._unmask(`${maskedValue.slice(0,this._cachedSelection -1)}${maskedValue.slice(this._cachedSelection)}`);
        this._mask(value,evt);
    }

    /**
     * Mask the value of the SSN
     * @param {String} value value to add a mask to
     */
    _addMask(value=''){
        const placeholderCharacter = '_';
        const unmaskedValue = this._unmask(value);
        const firstThree = unmaskedValue.slice(0, 3).padEnd(3, placeholderCharacter);
        const secondTwo = unmaskedValue.slice(3, 5).padEnd(2, placeholderCharacter);
        const lastFour = unmaskedValue.slice(5, 9).padEnd(4, placeholderCharacter);

        let maskedValue = '';
        if(firstThree.length === 3){
            maskedValue += `${firstThree}-`;
        } else {
            maskedValue += firstThree;
        }
        if(secondTwo.length === 2){
            maskedValue += `${secondTwo}-`;
        } else {
            maskedValue += secondTwo;
        }

        maskedValue += lastFour;

        this.maskedValue = maskedValue;
        return maskedValue;
    }
    /**
     * Unmask the input value
     * @param {String} value the Masked value
     */
    _unmask(value=''){
        return value.replace(/\D/g, '').slice(0, 9);
    }

    /**
     * Mask the value to not be seen
     * @param {String} value value to be masked
     * @param {Event} evt keyboard event
     */
    async _mask(value='', evt={}) {
        const unmaskedValue = this._unmask(value);
        const maskedValue = this._addMask(unmaskedValue);
        const isDelete = evt.inputType === 'deleteContentBackward';
        this.unmaskedValue = unmaskedValue;
        this.maskedValue = maskedValue;
    
        const obfuscateValue = await this._obfuscate(maskedValue);
        const start = isDelete ?  this._cachedSelection : unmaskedValue.length;
        this._manageCursor(obfuscateValue, start, evt);
        this._isDelete = undefined;
    }

    /**
     * Obfuscate the input value
     * @param {String} value value to obfucate
     */
    _obfuscate(value=''){
        return new Promise(resolve => {
            const input  = this.__getInput();
            let obfuscatedValue = value.slice(0, 7).replace(/[0-9]/g, '•') + value.slice(7, 12);
            this._obfuscatedValue = obfuscatedValue;
            this._value = this.unmaskedValue.slice(0, 9);
            if (this.maskState === 'visible') {
                input.value = value;
            } else {
                input.value = this._obfuscatedValue;
            }
            resolve(this.maskedValue);
        });
    }
    /**
     * toggle the text to show or hide ssn
     */
    _toggleButtonText(){
        const toggleButton = this.renderRoot.querySelector('button');
        if (this.maskState === 'hidden') {
            toggleButton.innerHTML = 'Show';
        } else if (this.maskState === 'visible') {
            toggleButton.innerHTML = 'Hide';
        }
    }
    /**
     * toggle the value of input from hidden to showing the value
     */
    __showHideToggle() {
        const input = this.__getInput();
        if (this.maskState === 'visible') {
            this.maskState = 'hidden';
            input.value = this._obfuscatedValue;
        } else {
            this.maskState = 'visible';
            input.value = this.maskedValue;
        }
        this._toggleButtonText();
    }
    /**
     * Overwrite the checkValidity to handel error messages
     */
    checkValidity() {
        if (this._value.length < 9){
            this.setCustomValidity('Please enter in a valid ssn');
            return false;
        } else {
            this.setCustomValidity('');
        }
        return super.checkValidity();
    }
}
defineSquidElement('squid-ssn',SquidSsn);
