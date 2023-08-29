
import {html} from 'lit';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-radio-group.scss';
import '../squid-radio/squid-radio.js';
import { BaseElement } from '../utils/baseElement.js';
import { emitEvent } from '../utils/squidEvents.js';
/**
 * @tag squid-radio-group
 * @summary a collection of radio buttons describing a set of related options. Only one radio button in a group can be selected at the same time.
 * @prop {String} value - The value attribute is one which all <input>s share; however, it serves a special purpose for inputs of type radio: when a form is submitted, only radio buttons which are currently checked are submitted to the server, and the reported value is the value of the value attribute. If the value is not otherwise specified, it is the string on by default. This is demonstrated in the section Value above.
 * @example <squid-radio-group>
  <h1 slot="title">Vote</h1>
  <squid-radio name='test' value='yes' >YES</squid-radio>
  <squid-radio name='test' value='no'>No</squid-radio>
  <squid-radio name='test' value='maybe'>Maybe</squid-radio>
</squid-radio-group>
 */
export class SquidRadioGroup extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            value: { type: String, attribute: true,reflect:true },
        };
    }
    get value(){
        if(!this.querySelector('squid-radio[checked]')){
            return '';
        }
        return this.querySelector('squid-radio[checked]').value;
    }
    set value(_value){
        setTimeout(()=>{
            this.options?.forEach((radio) => {
                if(radio.value === _value) {
                    radio.checked = true;
                } else {
                    radio.checked = false;
                }
            });
        });
    }
    constructor(){
        super();
        this.internals = this.attachInternals();
        this.bindMethods(['__onChange','__onFieldsetKeyup','slotChange']);
    }
    async firstUpdated(){
        this.options = [...this.querySelectorAll('squid-radio')].map(item => item);
        this.addEventListener('keydown',this.__onFieldsetKeyup);
        if(this.value){
            this.requestUpdate();
        }
    }
    render(){
        return html`
<fieldset>
        <legend><slot name='title'></slot></legend>
        <slot @squid-change=${this.__onChange} @slotchange=${this.slotChange}></slot>
</fielset>
        `;
    }
    /**check the if the element is valid */
    checkValidity (){
        return true;
    }
    slotChange(){
       
    }
    /**
     * update all of the radio buttons.
     * @param {Event} evt squid-change event
     */
    __onChange(evt){
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        this.options.forEach(item =>{
            if(item !== evt.target){
                item.checked = false;
                item.__getInput().checked = false;
            }
        });
        emitEvent('change',evt.target.value, this);
    }

    /**
     * Trap up and down keys to step through the group
     * @param {Event} evt keypress evetn.
     */
    __onFieldsetKeyup(evt){
        const code = evt.code;
        const isArrowKey = code === 'ArrowDown' || code === 'ArrowUp';
        if(isArrowKey){
            evt.preventDefault();
            const { options } = this;
            const currentIndex = options.indexOf(evt.target);
            if(code === 'ArrowUp'){
                if(currentIndex === 0){
                    options[options.length -1].focus();
                }else {
                    options[currentIndex -1].focus();
                }
            }
            if(code === 'ArrowDown'){
                if(currentIndex === options.length -1){
                    options[0].focus();
                }else {
                    options[currentIndex + 1].focus();
                }
            }

        }
    }
}
defineSquidElement('squid-radio-group',SquidRadioGroup);
