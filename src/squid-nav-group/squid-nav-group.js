
import { html } from 'lit-element';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-nav-group.scss';
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
        console.log(this.theme);
        console.log('should update');
        this.querySelectorAll('squid-sub-nav').forEach(item => {
            if(this.theme){
                item.setAttribute('theme',this.theme);
                this.requestUpdate();
            }
        });
        return changedProperties;
    }
    firstUpdated(){
        this.querySelectorAll('squid-nav').forEach(item => {
            if(this.theme){
                item.setAttribute('theme',this.theme);
                this.requestUpdate();
            }
        });
    }
    render(){
        return html`<slot></slot>`;
    }
}
defineSquidElement('squid-nav-group',SquidNavGroup);
