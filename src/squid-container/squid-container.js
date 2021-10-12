
import { html} from 'lit';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-container.scss';
/**
 * @tag squid-container
 * @summary This is a contain around a section of html. 
 * @prop {String} bgColor - Adds background color to the container            
 * @prop {String} radius - The container's border-radius. Valid values are `null`, `'0'`, `'2'` and `'4'`. Reflected as a property. Each background color will switch the default text color for accessibility reasons, though this can be overridden by normal CSS. 
 * @prop {String} padding - The padding size in the container. Sizes reflect ODS sizing options: `null`, `'tiny'`, `'small'`, `'normal'`, `'medium'`, `'large'`, `'xlarge'` and `'xxlarge'`. Reflected as a property. 
 * @prop {String} elevation - The elevation attribute denotes size of the component's box shadow. Valid values are null, ( `'1'`), (`'2'`) and ( `'3'`).
 * @example <squid-container  padding="normal" elevation="1" radius="4">
  <h1>Squid Container</h1>

  <p>Really just a fancy, accessible wrapper.</p>
</squid-container>
 */
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
            },
            bgColor:{
                type:String,
                attribute:true
            },
        };
    }
    constructor() {
        super();
        this.bgColor = 'white';
    }
    render(){
        return html`
        <div class="container" data-ref="container" 
            radius="${this.radius ? this.radius:''}"
            padding="${this.padding ? this.padding:''}"
            elevation="${this.elevation ? this.elevation:''}"
            margin="${this.margin ? this.margin:''}"
            style="background-color:${this.bgColor}"
        
        ><slot></slot></div>
        `;
    }
}
defineSquidElement('squid-container',SquidContainer);
