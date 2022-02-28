import { html, render } from 'lit';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-drawer.scss';
import '../squid-button/squid-button.js';
import { BaseElement } from '../utils/baseElement.js';
/**
 * @tag squid-drawer
 * @summary The `SquidDrawer` A navigation drawer provides access to destinations and app functionality, such as switching accounts. It can either be permanently on-screen or controlled by a navigation menu icon.

> Drawer has two slots that should be filled.
> slot='button' is the name that goes in the button field
> slot='title' is the title that will display in the drawer
> The rest of the html will be placed in the drawer.
 * @prop {String} position - Determines what side the drawer will be on. the values are `right` and `left`
 * @event
 * @example <squid-drawer >
    <span slot='button'>Info</span>
    <span slot='title'>Shakespears Quotes</span>
    <squid-accordion-group>
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
  </squid-drawer>
 */
export class SquidDrawer extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            position:{
                type:'String'
            },
            hide:{
                type: Boolean
            }
        };
    }
    constructor() {
        super();
        this.hide = false;
        this.position = 'left';
        this.bindMethods(['openDrawer','closeDrawer']);
        this.drawerTemplate = () =>
            html`<div class="drawer-wrapper">
            <div role='presentation' class='drawer-background'></div>
            <section id='drawer-containter' class='drawer-containter ${this.position}'>
                <header class='drawer-containter-headeer'>
                    <h2><slot name='title'</slot></h2>
                    <button @click=${this.closeDrawer} type="button" title="Close drawer" aria-label="Close drawer" 
                            class="close-button">
                        <svg  viewBox="0 0 24 24" width="18" height="18" class="close-button" style="width: 1.125rem; height: 1.125rem;">
                        <path d="M5.587 3.467a1.5 1.5 0 1 0-2.194 2.046q.036.038.074.074l6.438 6.44-6.44 6.44a1.5 1.5 0 0 0 2.122 2.12l6.44-6.438 
                        6.44 6.44a1.5 1.5 0 0 0 2.12-2.122l-6.438-6.44 6.44-6.44a1.5 1.5 0 0 0-2.122-2.12l-6.44 6.438-6.44-6.44z">
                        </path>
                        </svg>
                    </button>
                </header>
            <div class='drawer-content'>
                <slot></slot>
            </div>
            </secton>
            </div>`;
    }
    render() {
        return html` <div class="container">
            <div class="button-wrapper" ?hide=${this.hide} >
                <squid-button @click=${this.openDrawer} 
                    ><slot name='button'></slot></squid-button
                >
            </div>
            <div id="drawerWrapper"></div>
        </div>`;
    }
    async closeDrawer() {
        render(
            html``,
            this.renderRoot.querySelector('#drawerWrapper')
        );
    }
    async openDrawer() {
        render(
            this.drawerTemplate(),
            this.renderRoot.querySelector('#drawerWrapper')
        );
        await this.updateComplete;
        console.log('open drawer');
        setTimeout(()=>{
            this.renderRoot.querySelector('.drawer-containter').classList.add('display');
        });
        console.log(this.renderRoot.querySelector('.drawer-containter'));
        
    }
}
defineSquidElement('squid-drawer', SquidDrawer);