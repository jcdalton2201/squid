
import { html} from 'lit';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-accordion-group.scss';
/**
 * 
 * @tag squid-accordion-group
 * @summary `SquidAccordion` is a web component. 

The `SquidAccordionGroup` element exists to group instances of `SquidAccordion`. Importing the accordion group also implicitly imports the accordions. The primary function is to group accordions so that only one accordion is open at a time. * 
 * @example <squid-accordion-group>
  <!-- one -->
  <squid-accordion>
    <span slot="summary">The first accordion in the group</span>
    <div slot="content">
      <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
    </div>
  </squid-accordion>

  <!-- two -->
  <squid-accordion>
    <span slot="summary">The middle child</span>
    <div slot="content">
      <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
    </div>
  </squid-accordion>

  <!-- three -->
  <squid-accordion>
    <span slot="summary">Accordion number three</span>
    <div slot="content">
      <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
    </div>
  </squid-accordion>
</squid-accordion-group> 
*/
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
            const focused = accordions.reduce((current, step) =>document.activeElement === current ? current : step
                , false);
            const focusedIndex = accordions.indexOf(focused);
            const previous = accordions[focusedIndex - 1];
            const next = accordions[focusedIndex + 1];
            if (keyCode === 38) {
                if(previous){
                    previous.focus();
                }
                
            } else {
                if(next){
                    next.focus();
                }
            }
        }
    }
}
defineSquidElement('squid-accordion-group',SquidAccordionGroup);
