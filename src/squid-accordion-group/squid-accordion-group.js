
import { html} from 'lit';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-accordion-group.scss';
export class SquidAccordionGroup extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {};
    }
    constructor() {
        super();
        this.bindMethods(['_manageGroup','_onKeyDown']);
    }
    disconnected(){
        this.super();
        this.removeAttribute('keydown',this._onKeyDown);
    }
    firstUpdated(){
        this.addEventListener('keydown',this._onKeyDown);
    }
    render(){
        return html`<div data-ref="group" @accordion-toggle=${this._manageGroup}><slot></slot></div>`;
    }
    /**
     * 
     * @param {Event} evt 
     */
    _manageGroup(evt){
        if(evt.detail){
            this.querySelectorAll('[open]').forEach(accordion => {
                if(accordion !== evt.currentTarget) {
                    accordion.open = false;
                }
            });
        }
    }

    _onKeyDown(evt){
        const { keyCode } = evt;
        if (keyCode === 38 || keyCode === 40) {
            const accordions = [...this.querySelectorAll('squid-accordion')];
            const focused = accordions.reduce((current, next) =>
                document.activeElement === current ? current : next
            , false);
            const focusedIndex = accordions.indexOf(focused);
            const previous = accordions[focusedIndex - 1];
            const next = accordions[focusedIndex + 1];
            if (keyCode === 38) {
                previous ? previous.focus() : null;
            } else {
                next ? next.focus() : null;
            }
        }
    }
}
defineSquidElement('squid-accordion-group',SquidAccordionGroup);
