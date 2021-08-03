import { BaseElement } from '../utils/baseElement.js';
import {findParentForm} from '../utils/findParentForm.js';
export class SquidInputBase extends BaseElement {
    constructor() {
        super();
        this._uid = btoa(Math.floor(Math.random()*100000)).replace(/=/gi,'');
        this.bindMethods(['__onFormReset','__getInput','__getHelper']);
        const {form} = this;
        this.addEventListener('keydown', evt => {
            if(form && evt.code === 'Enter') {
                form.dispatchEvent(new CustomEvent('submit'));
            }
        });
        if(form) {
            form.addEventListener('reset', this.__onFormReset);
        }
    }
    /**
     * @returns {HTMLElement}
     */
    get form() {
        this._form = this._form || findParentForm(this);
        return this._form;
    }
    /**
     * Proxy input checkValidity
     */
    get checkValidity() {
        const input = this.__getInput();
        return input.checkValidity.bind(input);
    }
    /**
     * proxy input validity
     */
    get validity() {
        const input = this.__getInput();
        return input ? input.validity: {};
    }
    /**
     * proxy input validationMessage
     * @returns {String}
     */
    get validationMessage() {
        const input = this.__getInput();
        return input ? input.validationMessage : null;
    }
    /**
     * proxy input willValidate
     * @returns {Boolean}
     */
    get willValidate() {
        const input = this.__getInput();
        return input ? input.willValidate: null;
    }
    /**
     * proxy blur function
     */
    blur() {
        const input = this.__getInput();
        if(input){
            input.blur();
        }
    }
    /**
     * proxy click function
     */
    click() {
        const input = this.__getInput();
        if(input) {
            input.click();
        }
    }
    /**
     * proxy focus function
     */
    focus() {
        const input = this.__getInput();
        if(input){
            input.focus();
        }
    }
    /**
     * Change the default error message
     * @param {String} key the key of the error message
     * @param {String} message the new error message
     * @returns {String} the new error message
     */
    setErrorMessage(key, message) {
        const helpers = this.__getHelper();
        return helpers ? helpers.setErrorMessage(key, message) : null;
    }
    /**
     * 
     * @param {String} message message to be set
     */
    setCustomValidity(message = '') {
        const input = this.__getInput();
        const helpers = this.__getHelper();
        if(!message) {
            message = '';
        }
        if(input){
            input.setCustomValidity(message);
        }
        if(helpers){
            helpers.setCustomError(message);
        }

    }
    /**
     * Set the element's helper text
     * @param {String} value Helper Text
     */
    setHelper(value) {
        const helpers = this.__getHelper();
        if(helpers) {
            helpers.setHelperText(value);
        }
    }

    __onFormReset() {
        this.value = '';
    }
    /**
     * @returns {HTMLInputElement}
     */
    __getInput(){
        return this.renderRoot.querySelector('input');
    }
    /**
     * @returns {HTMLElement}
     */
    __getHelper(){
        return this.renderRoot.querySelector('squid-helpers');
    }
}