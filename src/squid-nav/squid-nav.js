
import { html } from 'lit-element';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-nav.scss';
/**
 * @tag squid-nav
 * @summary The `SquidNav` component is an of a  navigation element.
The base element for a navigation it has an anchor element for linking.
 * @prop {String} name -The label for this element.
 * @prop {String} theme - sets a theme to `"light"` or `"dark"`. Default value is light
 * @event
 * @example <squid-nav name='Search Engine' theme='dark'>
    <squid-sub-nav href='https://google.com' theme='dark'>Google</squid-sub-nav>
    <squid-sub-nav href='https://bing.com' theme='dark'>Bing</squid-sub-nav>
</squid-nav>
 */
export class SquidNav extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            name:{
                type:String
            },
            theme: {
                type:String,
                attribute: true
            }
        };
    }
    constructor() {
        super();
        this.theme = 'white';
        
    }
    firstUpdated(){
        this.buildRefs();
    }
    render(){
        return html`
<div class='name' @mouseover=${this.showList} @mouseout=${this.hideList}>
    <div class='label' theme='${this.theme}'>${this.name} 
    <svg aria-hidden="true" 
    data-ref='icon'
    focusable="false" 
    data-icon="chevron-down" 
    role="img" 
    viewBox="0 0 448 512" 
    class="chevron-down">
    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 
    0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 
    24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 
    9.372-24.569 9.372-33.942 0z" class="">
    </path>
</svg></div>
    <slot data-ref='list' class='hide'></slot>
</div>`;
    }
    showList(){
        const { list, icon } = this.refs;
        list.classList.remove('hide');
        icon.classList.add('rotate');
    }
    hideList(){
        const { list, icon } = this.refs;
        list.classList.add('hide');
        icon.classList.remove('rotate');
    }
}
defineSquidElement('squid-nav',SquidNav);
