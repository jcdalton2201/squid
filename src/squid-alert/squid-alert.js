
import {html} from 'lit';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-alert.scss';
/**
 * @prop   {String} type -  The `type` attribute controls the type of the alert component. Valid types are `'global'`, `'success'`, `'warning'`, `'error'` or `'informational'`. For guidance on when to use which alert, see the ONE Design System documentation linked above.
 * @tag squid-alert
 * @summary `SquidAlert` is a web component. 

> Alerts allow for communication between a system and a user.
> There are two types of alerts; global alerts and in-app alerts. Global alerts are system-generated and persistent, while inline alerts are presented as feedback in response to a user interaction.

By default the `SquidAlert` element is a global alert, but can be toggled using the `type` attribute.
 * @example <h2>Success alert</h2>
<squid-alert type="success">
  <p slot="message">Message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
  <span slot="button-text">Acknowledge</span>
</squid-alert>
<h2>Warning alert</h2>
<squid-alert type="warning">
  <p slot="message">Message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
  <span slot="button-text">Acknowledge</span>
</squid-alert>
<h2>Error alert</h2>
<squid-alert type="error">
  <p slot="message">Message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
  <span slot="button-text">Acknowledge</span>
</squid-alert>
<h2>Informational alert</h2>
<squid-alert type="informational">
  <p slot="message">Message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
  <span slot="button-text">Acknowledge</span>
</squid-alert>
*/
export class SquidAlert extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            type:{type:String,attribute: true,reflect:true},
        };
    }
    constructor(){
        super();
        this['focus'] = this['focus'].bind(this);
        this.type = 'global';
        this._allowedTypes = ['global', 'informational', 'success', 'error', 'warning'];
    }
    firstUpdated(){
        this.buildRefs();
        this.focus();
    }
    render(){
        return html`
<div class='alert ${this._allowedTypes.includes(this.type)? 'alert-'+this.type:'alert-global'}' aria-label="alert" role="alertdialog" aria-live="polite" data-ref="alert">
        <p class='alert-message'>
            <svg id='alert-informational' class='${this.type === 'informational'?'':'hide'}' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.657 16.938C12.869 17.958 11.085 19 10.274 19c-.37 0-.81-.487-.81-.788 0-.186.068-.556.207-.903.14-.301 1.46-4.031 2.04-5.793.162-.486.046-.625-.07-.625-.44 0-1.46.787-1.854 1.181-.094.093-.37-.278-.37-.394 0-.116.115-.301.207-.463.858-1.228 2.481-2.293 3.64-2.293.3 0 .648.463.648.949 0 .255-.092.557-.186.881l-2.039 5.861c-.022.047.047.21.139.21.3 0 1.181-.534 1.622-.882.185-.138.393-.232.487-.232.093 0 .186.047.186.232 0 .348-.21.672-.464.997zm.347-10.288c-.163.14-.44.21-.694.21-.464 0-1.044-.348-1.044-1.02 0-.602.44-1.136.65-1.298.138-.092.439-.185.624-.185.811 0 1.044.718 1.044 1.042 0 .51-.395 1.113-.58 1.251z" fill="#0D74AF" fill-rule="evenodd"/></svg>
            <svg id='alert-global' class='${this.type === 'global'?'':'hide'}' width='24' height='21' xmlns='http://www.w3.org/2000/svg'><path d='M23.538 17.488L13.86 1.208c-1.023-1.61-2.697-1.61-3.72 0L.462 17.488c-1.024 1.61-.288 3.047 1.634 3.047h19.808c1.921 0 2.658-1.436 1.634-3.047zM11.923 6.66a.943.943 0 0 1 1.014 1.004l-.444 5.94a.5.5 0 0 1-.537.458.499.499 0 0 1-.463-.458l-.444-5.94a.94.94 0 0 1 .874-1.004zm.07 11.028a1.12 1.12 0 0 1-1.125-1.114 1.12 1.12 0 0 1 1.125-1.114 1.12 1.12 0 0 1 1.125 1.114 1.12 1.12 0 0 1-1.125 1.114z' fill='#F8CC01' fill-rule='evenodd'/></svg>
            <svg id='alert-warning' class='${this.type === 'warning'?'':'hide'}' width='24' height='21' xmlns='http://www.w3.org/2000/svg'><path d='M23.538 17.488L13.86 1.208c-1.023-1.61-2.697-1.61-3.72 0L.462 17.488c-1.024 1.61-.288 3.047 1.634 3.047h19.808c1.921 0 2.658-1.436 1.634-3.047zM11.923 6.66a.943.943 0 0 1 1.014 1.004l-.444 5.94a.5.5 0 0 1-.537.458.499.499 0 0 1-.463-.458l-.444-5.94a.94.94 0 0 1 .874-1.004zm.07 11.028a1.12 1.12 0 0 1-1.125-1.114 1.12 1.12 0 0 1 1.125-1.114 1.12 1.12 0 0 1 1.125 1.114 1.12 1.12 0 0 1-1.125 1.114z' fill='#273B49' fill-rule='evenodd'/></svg>
            <svg id='alert-success' class='${this.type === 'success'?'':'hide'}' width='24' height='24' xmlns='http://www.w3.org/2000/svg'%><path d='M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm5.78 8.432l-7 8.06a.757.757 0 0 1-.54.258h-.026a.752.752 0 0 1-.53-.22l-3-3a.75.75 0 1 1 1.06-1.06l2.43 2.43 6.473-7.453a.75.75 0 0 1 1.133.985z' fill='#128020' fill-rule='evenodd'/%></svg>
            <svg id='alert-error' class='${this.type === 'error'?'':'hide'}' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><path d='M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12c6.627 0 12-5.372 12-12S18.627 0 12 0zm5.53 16.47a.75.75 0 1 1-1.061 1.06L12 13.06l-4.47 4.47a.747.747 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.938 12l-4.47-4.47A.75.75 0 0 1 7.53 6.47L12 10.94l4.469-4.47a.75.75 0 0 1 1.06 1.06L13.06 12l4.47 4.47z' fill='#D03027' fill-rule='evenodd'/></svg>
            <slot name='message'></slot>
        </p>
        <button class='alert-close' aria-label="Close" data-ref="close" @click=${this.remove}></button>
        <a tabindx='0' class="alert-link"  data-ref="acknowledge" tabindex="0" @click=${this.remove}><slot name='button-text'></slot></a>
</div>        `;
    }
    remove(evt){
        if(evt){
            evt.preventDefault();
        }
        this.parentNode.removeChild(this);
        this.dispatchEvent(new Event('alert-closed'));
    }
    focus() {
        const { close, acknowledge } = this.refs;
        if(this.type === 'global') {
            close.focus();
        } else {
            acknowledge.focus();
        }
    }
}
defineSquidElement('squid-alert',SquidAlert);
