
import {LitElement, html} from 'lit-element';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-sub-nav.scss';
export class SquidSubNav extends LitElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            href:{
                type:String
            },
            theme:{
                type:String
            }
        };
    }
    constructor() {
        super();
        this.theme='light';
    }
    render(){
        return html`
<div theme='${this.theme}'>
    <a  href=${this.href}><slot></slot></a>
</div>`;
    }
}
defineSquidElement('squid-sub-nav',SquidSubNav);
