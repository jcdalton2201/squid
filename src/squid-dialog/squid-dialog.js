import { html } from 'lit-element';
import { BaseElement } from '../utils/baseElement.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-dialog.scss';
import { emitEvent} from '../utils/squidEvents.js';
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
