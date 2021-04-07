import { html } from 'lit-element';
import { render } from 'lit-html';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-drawer.scss';
import '../squid-button/squid-button.js';
import { BaseElement } from '../utils/baseElement.js';
export class SquidDrawer extends BaseElement {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            position:{
                type:'String'
            }
        };
    }
    constructor() {
        super();
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
            <div class="button-wrapper">
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