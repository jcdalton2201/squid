
import { html} from 'lit-element';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-container.scss';
export class SquidContainer extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            radius:{
                type:Number,
                attribute:true
            },
            padding:{
                type:String,
                attribute:true
            },
            elevation:{
                type:Number,
                attribute:true
            },
            margin:{
                type:String,
                attribute:true
            }
        };
    }
    render(){
        return html`
        <div class="container" data-ref="container" 
            radius="${this.radius ? this.radius:''}"
            padding="${this.padding ? this.padding:''}"
            elevation="${this.elevation ? this.elevation:''}"
            margin="${this.margin ? this.margin:''}"
        
        ><slot></slot></div>
        `;
    }
}
defineSquidElement('squid-container',SquidContainer);
