
import {LitElement, html} from 'lit-element';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-sub-nav.scss';
/**
 * @tag squid-sub-nav
 * @summary The `SquidSubNav` component is an of a sub navigation element.
The base element for a navigation it has an anchor element for linking.
 * @prop {String} href -the anchor link for clicks.
 * @prop {String} theme - sets a theme to `"light"` or `"dark"`. Default value is light
 * @example <squid-sub-nav href='https://google.com' theme='dark'>Google</squid-sub-nav>
 */
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
