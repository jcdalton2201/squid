import { html } from 'lit';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-dialog.scss';
import { emitEvent} from '../utils/squidEvents.js';
/**
 * @tag squid-dialog
 * @summary The `SquidDialog` component is an for a overlay modal.

> Dialogs present critical information, require users to make decisions, and can afford specific tasks without leaving the current screen.
 * @prop {String} open -  If set, the dialog element will be displayed on the page. This is reflected as a property. 
 * @prop {String} overlay -  The theme of the dialog's overlay. Valid values are `'light'` and `'dark'` with `'light'` being the default. If no overlay value is set, the dialog will fallback to the light theme. This is reflected as a property. 
 * @prop {String} type -  Reflects the dialog's type. If set to `'decision'`, the dialog will behave as a decision dialog as documented in the global ONE Desigrn System documentation lsquided above. Reflected as a property. 
 * @event close A [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) emitted each time the element is closed. The detail property on the event will be the dialog's `returnValue` property. It is up to the user to decide how to set that value.
 * @example
 */
export class SquidDialog extends BaseElement {
    constructor() {
        super();
        this.bindMethods(['close','__documentKeypress']);
    }
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            overlay: { type: String },
            type: { type: String },
            open: { type: Boolean },
        };
    }
    render() {
        return html` <div class="dialog" data-ref="dialog" ?open=${this.open}>
            <div class="dialog-overlay ${this.overlay}" data-ref="overlay"></div>
            <div class="dialog-container" data-ref="over-content">
                <div class="header">
                    <button
                        action="javascript:void(0)"
                        class="dialog-close"
                        tabindex="0"
                        role="link"
                        aria-label="close"
                        data-ref="close"
                        @click=${this.close}
                    >
                        X
                    </button>
                </div>
                <div class="content">
                    <slot></slot>
                </div>
                <div class="dialog-buttons"><slot name="buttons"></slot></div>
            </div>
        </div>`;
    }

    /**
     * Show the modal and set the appropriate ODS classes
     * add document keydown listener for Escape key
     * to close the modal
     */
    showModal() {
        if (!this.open) {
            this.open = true;
            document.addEventListener('keydown',this.__documentKeypress);
        }
        emitEvent('open',null,this);
    }

    close(){
        this.open = false;
        emitEvent('close',null,this);
        document.removeEventListener('keydown',this.__documentKeypress);
    }
    /**
     * Handel the escape event
     * @param {Event} evt keypress event
     */
    __documentKeypress(evt){
        if(evt.key === 'Escape' && this.type !== 'decision'){
            this.open = false;
        }
    }
}
defineSquidElement('squid-dialog', SquidDialog);
