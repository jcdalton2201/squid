import {  html } from 'lit';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-errors.scss';
import {findParentForm} from '../utils/findParentForm.js';
import {findSahdowRoot} from '../utils/findShadowRoot.js';
import { BaseElement } from '../utils/baseElement.js';
export class SquidErrors extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            id:{type:String},
            _message:{type:String,reflex:false}
        };
    }
    constructor() {
        super();
        this.bindMethods(['handleChange','_onDescribesInput']);
        /** Default validity messages intentionally newed up for each instance */
        this.validityMessages = new Map([
            ['customError', this._generateMessage(100, 'This field is invalid')],
            ['badInput', this._generateMessage(4, 'This field is invalid')],
            [
                'patternMismatch',
                this._generateMessage(
                    9,
                    'This field does not follow the proper pattern'
                ),
            ],
            [
                'rangeOverflow',
                this._generateMessage(
                    8,
                    'The value does not fit in the necessary range'
                ),
            ],
            [
                'stepMismatch',
                this._generateMessage(7, 'The value is not a valid step'),
            ],
            ['tooLong', this._generateMessage(6, 'The value is too long')],
            ['tooShort', this._generateMessage(6, 'The value is too short')],
            [
                'typeMismatch',
                this._generateMessage(5, 'The entered value is not the right format'),
            ],
            ['valueMissing', this._generateMessage(10, 'This field is required')],
        ]);
  
        /** Set up inputs array */
        this._inputs = [];
  
        /** Set up initial validators */
        this.validators = this.validators || [];
  
    }
    set id(value) {
        const oldValue = value;
        this._id = value;
        const selector = `[aria-describedby="${value}"]`;
        const parentHost = findSahdowRoot(this);
        if(parentHost) {
            setTimeout(()=>{
                this.describes = parentHost.querySelector('input');
                if(!this.describes){
                    this.describes = parentHost.querySelector('textarea');
                    
                }
                if(this.describes){
                    this._initInput(this.describes);
                    this._invalidClass = {
                        checkbox: 'checkbox__input--error',
                        textarea: 'textfield__textarea--error'
                    }[this.describes.type] || 'textfield__input-error';
                    if(this.describes.tagName === 'SELECT') {
                        this._invalidClass = 'select__input--error';
                    }
                }
            });
        } else {
            setTimeout(() => {
                this.describes = document.querySelector(selector);
                this._initInput(this.describes);
                this.count = this.describes ? this.describes.value.length.toString():0;
                this._invalidClass = {
                    checkbox: 'checkbox__input--error',
                    textarea: 'textfield__textarea--error'
                }[this.describes.type] || 'textfield__input-error';
                if(this.describes.tagName === 'SELECT') {
                    this._invalidClass = 'select__input--error';
                }
            });
        }
        this.requestUpdate('id',oldValue);
    }
    get id() {
        return this._id;
    }
    get form() {
        this._form = this._form || findParentForm(this);
        return this._form;
    }
    render(){
        return html`<div class="helpers" data-ref="helpers">${this._message}</div>`;
        
    }
    connectedCallback(){
        super.connectedCallback();
        this._addEventListeners();
    }
    /**
     * 
     * @param {HTMLElement} input input assigned value
     */
    _addEventListeners(input) {
        input = input || this.describes;
        if(input) {
            input.addEventListener('change', this.handleChange);
            input.addEventListener('blur', this.handleChange);
            input.addEventListener('input', this._onDescribesInput);
            if(this.form) {
                this.form.addEventListener('submit', this.handleChange,true);
                this.form.addEventListener('reset', this.handleChange,true);
            }
        }
    }
    appendHelper(helper){
        this._message = helper;
    }
    /**
   * Input input event watcher used to remove errors
   * when this.describes is altered
   */
    _onDescribesInput() {
        if (this.shadowRoot.querySelector('.error')) {
            this.appendHelper(this.validityMessages.get('valid'));
            if (this.describes) {
                this.describes.classList.remove(this._invalidClass);
            } else {
                this._inputs.forEach(input =>
                    input.classList.remove(this._invalidClass)
                );
            }
        }
    }
    /**
     * When the input changes display the messae
     * @param {Event} evt the event to change
     */
    handleChange(evt) {
        const describesInvalid = this.describes && this.describes.validity && this.describes.validity.valid === false;
        const inputsInvalid = describesInvalid;
        const isInvalid = describesInvalid || inputsInvalid;
        if (this.form === evt.target && evt.type === 'submit' && isInvalid) {
            evt.preventDefault();
        }
        let validity = {};
        if (this.describes) {
            validity = this.describes.validity;
        } else if (this._inputs[0]) {
            validity = this._inputs[0].validity;
        }
        if (!validity) {
            validity = this._inputs[0].validity;
        }
        const validityKeys = [];
        this.validityMessages.forEach((value, key) => validityKeys.push(key));
        const helper = validityKeys
            .filter(errorKey => validity[errorKey])
            .map(errorKey => this.validityMessages.get(errorKey))
            .reduce((current, next) => {
                return current.priority > next.priority ? current : next;
            }, {});
        if(helper && helper.message){
            this.appendHelper(helper.message);
        } else {
            this.appendHelper('');
        }

        if (this.describes) {
            if (validity.valid === false) {
                this._inputInvalid(this.describes);
            } else {
                this._inputValid(this.describes);
            }
        } else if (this._inputs.length) {
            if (validity.valid === false) {
                this._inputs.forEach(this._inputInvalid);
            } else {
                this._inputs.forEach(this._inputValid);
            }
        }
    }
    _inputInvalid(input) {
        input.classList.add(this._invalidClass);
        input.setAttribute('aria-invalid',true);
    }
    _inputValid(input) {
        input.classList.remove(this._invalidClass);
        input.setAttribute('aria-invalid',false);
    }
    /**
     * 
     * @param {HTMLElement} element input element
     */
    _initInput(element) {
        if(element && element.dataset.helperText) {
            this._message = element.dataset.helperText;
        } else {
            this._message = this.innerHTML;
        }
        this._addEventListeners(element);
    }
    /**
     * Set the message
     * @param {Number} priority 
     * @param {String} message 
     * @param {String} type 
     */
    _generateMessage(priority, message, type = 'error') {
        return {priority, message, type};
    }
    /**
     * bind this to the method
     * @param {String} methodName 
     * @returns void
     */
    bindMethod(methodName) {
        this[methodName] = this[methodName].bind(this);
    }
    /**
     * binds the array of methods with this.
     * @param {Array<String>} methods
     * @returns void 
     */
    bindMethods(methods =[]) {
        methods.forEach(method => this.bindMethod(method));
    }
    /**
     * Set the error message with this one.
     * @param {String} message error message
     */
    setCustomError(message){
        const customMessage = this.validityMessages.get('customError');
        customMessage.message = message;
    }
}
class SquidHelpers extends SquidErrors{}
defineSquidElement('squid-errors',SquidErrors);
defineSquidElement('squid-helpers',SquidHelpers);
