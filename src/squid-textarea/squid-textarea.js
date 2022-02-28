import {html} from 'lit';
import { SquidInputBase } from '../squid-input-base/squid-input-base.js';
import { defineSquidElement } from '../utils/defineSquidElement.js';
import styles from './squid-textarea.scss';
/**
 * @tag squid-textarea
 * @summary The `<textarea>` HTML element represents a multi-line plain-text editing control, 
 * useful when you want to allow users to enter a sizeable amount of free-form text, 
 * for example a comment on a review or feedback form.
 * @prop {String} autocomplete - This attribute indicates whether the value of the control can be automatically completed by the browser. values are `off`, `on`.
 * @prop {Boolean} autofocus - This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.
 * @prop {String} cols -The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20
 * @prop {Boolean} counter - Displays an instance of the [`SquidCharacterCount`](../squid-character-count) component if set to true and a maxlength is provided. Reflected as a property. 
 * @prop {Boolean} disabled -This Boolean attribute indicates that the user cannot interact with the control.
 * @prop {String} maxlength - The maximum number of characters (UTF-16 code units) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.
 * @prop {String} minlength - The minimum number of characters (UTF-16 code units) required that the user should enter.
 * @prop {String} placeholder - A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.
 * @prop {Boolean} readonly - This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.
 * @prop {Boolean} required - This attribute specifies that the user must fill in a value before submitting a form.
 * @prop {String} rows - The number of visible text lines for the control.
 * @prop {Boolean} spellcheck - Specifies whether the `<textarea>` is subject to spell checking by the underlying browser/OS. The value can be: `true`, `false`, `default`.
 * @prop {String} value - The text inside of the text area.
 * @prop {String} wrap - Indicates how the control wraps text. Possible values are: `hard`, `soft`, `off`.
 * @prop {String} id - An id attribute to allow the `<textarea>` to be associated with a `<label>` element for accessibility purposes
 * @prop {String} name - The name of the control.
* @event squid-input-change - change of the value.
 * @example <squid-textarea cols='100'>Tell us your story</squid-textarea>
 */
export class SquidTextarea extends SquidInputBase {
    static get styles() {
        return [styles];
    }
    static get properties() {
        return {
            id:{type:String},
            name:{type:String},
            autocomplete:{type:String},
            autofocus:{type:Boolean},
            cols:{type:Number},
            counter:{type:Boolean},
            disabled:{type:Boolean},
            maxlength:{type:String},
            minlength:{type:String},
            placeholder:{type:String},
            readonly:{type:Boolean},
            required:{type:Boolean},
            rows:{type:Number},
            spellcheck:{type:Boolean},
            value:{type:String,attribute:true},
            wrap:{type:String},
        };
    }
    constructor() {
        super();
        this.bindMethods(['__onInput']);
    }
    get checkValidity() {
        const input = this.renderRoot.querySelector('textarea');
        return input.checkValidity.bind(input);
    }
    set value(value) {
        if(this?.renderRoot?.querySelector('textarea')){
            const oldValue = this.renderRoot.querySelector('textarea').value;
            if(value !== oldValue) {
                this.renderRoot.querySelector('textarea').value = value; 
            }
            if(this.counter) {
                this.renderRoot.querySelector('squid-character-count').count = (value && value.length) || 0;
            }
            this.dispatchEvent(new CustomEvent('squid-input-change'));
        }
    }
    get value(){
        if(this.renderRoot.querySelector('textarea')){
            return this.renderRoot.querySelector('textarea').value;
        }
        return '';
    }
    firstUpdated(){
        this.buildRefs();
        if(this.getAttribute('value')){
            this.renderRoot.querySelector('textarea').value = this.getAttribute('value');
        }
    }
    render(){
        return html`
<div id="container" data-ref="wrapper">
    <div class="label-wrapper">
        <label class="textfield__label" for="squid-input-${this.id}" data-ref="label"><slot></slot>${this._showDisabled}</label>
        <squid-character-count data-ref="counter" ?hidden=${!this.counter} id="counter-${this._uid}"></squid-character-count>
    </div>
    <textarea class="textfield__input" 
            type="${this._inputType}" 
            name="${this.name}" 
            id="squid-input-${this.id}" 
            data-ref="input"
            ?disabled=${this.disabled}
            ?required=${this.required}
            ?readonly=${this.readonly}
            ?autofocus=${this.autofocus}
            ?spellcheck=${this.spellcheck}
            @input=${this.__onInput}
            maxlength="${this.maxlength?this.maxlength:''}"
            minlength="${this.minlength?this.minlength:''}"
            placeholder="${this.placeholder?this.placeholder:''}"
            autocomplete="${this.autocomplete?this.autocomplete:''}"
            cols=${this.cols?this.cols:''}
            rows=${this.rows?this.rows:''}
            wrap=${this.wrap?this.wrap:''}
            aria-describedby=" helpers-${this._uid} counter-${this._uid}" 
            class="" ></textarea>
    <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
</div>
        `;
    }
    __onInput(evt){
        this.value = evt.target.value;
    }
}
defineSquidElement('squid-textarea',SquidTextarea);
