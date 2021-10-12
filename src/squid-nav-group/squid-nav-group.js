
import { html } from 'lit-element';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-nav-group.scss';
/**
 * @tag squid-nav-group
 * @summary The `SquidNavGroup` component is an of a  navigation element.
This is a group of squid nav elements.
 * @prop {String} theme - sets a theme to `"light"` or `"dark"`. Default value is light
 * @example <squid-nav-group>
    <squid-nav name='Search Engine' theme='dark'>
        <squid-sub-nav href='https://google.com' theme='dark'>Google</squid-sub-nav>
        <squid-sub-nav href='https://bing.com' theme='dark'>Bing</squid-sub-nav>
    </squid-nav>
    <squid-nav name='News' theme='dark'>
        <squid-sub-nav href='https://CNN.com' theme='dark'>CNN</squid-sub-nav>
        <squid-sub-nav href='https://www.bbc.co.uk/news' theme='dark'>BBC</squid-sub-nav>
    </squid-nav>
</squid-nav-group>
 */
export class SquidNavGroup extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            theme:{
                type:String
            }
        };
    }
    shouldUpdate(changedProperties){
        this.querySelectorAll('squid-sub-nav').forEach(item => this.setTheme(item));
        return changedProperties;
    }
    firstUpdated(){
        this.querySelectorAll('squid-nav').forEach(item => this.setTheme(item));
    }
    render(){
        return html`<slot></slot>`;
    }
    setTheme(item){
        if(this.theme){
            item.setAttribute('theme',this.theme);
            this.requestUpdate();
        }
    }
}
defineSquidElement('squid-nav-group',SquidNavGroup);
