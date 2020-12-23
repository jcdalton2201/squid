
import {LitElement, html} from 'lit-element';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-character-count.scss';
import { findSahdowRoot } from '../utils/findShadowRoot.js';
export class SquidCharacterCount extends LitElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            max:{type:Number},
            count:{type:Number},
            id:{type:String}
        };
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
        const selector = `[aria-describedby="${value}"]`;
        const parentHost = findSahdowRoot(this);
        if(parentHost) {
            setTimeout(()=>{
                this.describes = parentHost.querySelector('input');
                this._initInput(this.describes);
            });
        } else {
            setTimeout(() => {
                this.describes = document.querySelector(selector);
                this._initInput(this.describes);
                this.count = this.describes ? this.describes.value.length.toString():0;
            });
        }
    }
    render(){
        return html`
        <span class="form-field--info" data-ref="counter" aria-live="polite">
            <span data-ref="count">${this.count}</span>/<span data-ref="limit">${this.max}</span>
        </span>
        `;
    }
    _initInput(input) {
        if(input) {
            this.count = input.value.length.toString();
            input.addEventListener('input',this._watchInput.bind(this));
            this.max = this.max || input.maxLength;
        }
    }
    _watchInput(evt) {
        this.count = evt.target.value.length || '0';
    }
}
defineSquidElement('squid-character-count',SquidCharacterCount);
