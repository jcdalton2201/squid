
import {html} from 'lit-element';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-radio-group.scss';
import '../squid-radio/squid-radio.js';
import { BaseElement } from '../utils/baseElement.js';
export class SquidRadioGroup extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {};
    }
    get value(){
        if(!this.querySelector('squid-radio[checked]')){
            return '';
        }
        return this.querySelector('squid-radio[checked]').value;
    }
    set value(_value){
        this.querySelector(`squid-radio[value="${_value}"]`).checked = true;
    }
    constructor(){
        super();
        this.bindMethods(['__onChange','__onFieldsetKeyup']);
    }
    async firstUpdated(){
        this.options = [...this.querySelectorAll('squid-radio')].map(item => item);
        this.addEventListener('keydown',this.__onFieldsetKeyup);
    }
    render(){
        return html`
<fieldset>
        <legend><slot name='title'></slot></legend>
        <slot @squid-change=${this.__onChange}></slot>
</fielset>
        `;
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
