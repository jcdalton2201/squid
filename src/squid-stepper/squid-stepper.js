
import {html} from 'lit';
import {render} from 'lit';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-stepper.scss';
export class SquidStepper extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            name: { type: String, reflect: true },
            label: {
                type:String
            },
            value: {
                type:String,
                reflect: true
            }
        };
    }
    static get formAssociated(){
        return true;
    }
    firstUpdated(){
        this.buildRefs();
        this._optionsObserver.observe(this, { childList: true });
        if(!this.value){
            this.value = this.optionsMap.keys().next().value;
        }
        this.__displayValue();
        this.__setValue();
        console.log(this.internals.form);
    }
    constructor() {
        super();
        this.internals = this.attachInternals();
        this.bindMethods(['getOptions','increase','decrease','__displayValue','_manageOptions']);
        this.getOptions();
        this._optionsObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => this._manageOptions(mutation));
        });
    }
    getOptions(){
        const options = [...this.querySelectorAll('option')].map(item => [item.value,item.text]);
        this.optionsMap = new Map(options);
        this.keys = [...this.optionsMap.keys()];
        let maxLength = 0;
        [...this.optionsMap.values()].forEach(item => {
            if(item.length > maxLength){
                maxLength = item.length;
            }
        });
        this.displayLength = `${maxLength * 0.75}rem`;
    }
    _manageOptions(){
        this.getOptions();
        /*check to see if we have valid value*/
        if(![...this.optionsMap.keys()].find(item => item === this.value)){
            this.value = this.optionsMap.keys().next().value;
        } 
        this.__displayValue();

    }
    __displayValue(){
        const {valueInput, increase, decrease} = this.refs;
        let index = this.keys.indexOf(this.value);
        decrease.classList.remove('disabled');
        increase.classList.remove('disabled');
        if(index === 0){
            decrease.classList.add('disabled');
        }
        if(index === this.keys.length - 1 ){
            increase.classList.add('disabled');
        }
        render(html`${this.optionsMap.get(this.value)}`,valueInput);
        this.requestUpdate();
    }
    render(){
        return html`
        <div id="container" data-ref="wrapper">
         <label class="stepper-label" for="squid-stepper" data-ref="label">${this.label}</label>
         <div class='input'>
          <button class='decrease' data-ref='decrease' @click=${this.decrease} aria-label="decrease value">
          <svg aria-hidden="true" 
                  focusable="false"  
                  data-icon="minus-circle" 
                  role="img"  
                  viewBox="0 0 24 24"
                  height="18px" 
                  class="minus-circle"
                  
                  >
                  <path d="M1.5 12A1.5 1.5 0 0 1 3 10.5h18a1.5 1.5 0 0 1 0 3H3A1.5 1.5 0 0 1 1.5 12z"></path>
          </svg>
          </button>
          <div class='value' data-ref='valueInput' style='width:${this.displayLength}'></div>
          <button class='increase' @click=${this.increase} data-ref='increase' aria-label="increase value">
          <svg aria-hidden="true" 
               focusable="false" 
               data-icon="plus-circle" 
               role="img"  
               viewBox="0 0 24 24"
               height="18px" 
               class="plus-circle">
               <path d="M12 1.5A1.5 1.5 0 0 0 10.5 3v7.5H3a1.5 1.5 0 0 0 0 3h7.5V21a1.5 1.5 0 0 0 3 0v-7.5H21a1.5 1.5 0 0 0 0-3h-7.5V3A1.5 1.5 0 0 0 12 1.5z"></path>
            </path>
          </svg>
     </button>
         </div>
        </div>
        `;
    }
    __setValue(){
        this.internals.setFormValue(this.value);
        this.dispatchEvent(new Event('change'));
    }
    increase(){
        let index = this.keys.indexOf(this.value);
        if(index < this.keys.length - 1){
            this.value = this.keys[index + 1];
            this.__displayValue();
        }
        
        this.__setValue();
    }
    decrease(){
        let index = this.keys.indexOf(this.value);
        if(index > 0){
            this.value = this.keys[index - 1];
            this.__displayValue();
        }
        
        this.__setValue();
    }
}
defineSquidElement('squid-stepper',SquidStepper);
