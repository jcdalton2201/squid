import{i as e,x as i}from"./lit-element-2d3d1b94.js";import{S as r}from"./squid-input-base-50233efb.js";import{d as a}from"./defineSquidElement-344f2f43.js";var n=e`#container{display:flex;flex-direction:column;width:auto}#container squid-helpers{color:var(--color-alert-error,#de2131)}#container .label-wrapper{color:var(--font-color-default,#4d4d4d);display:flex;font-size:.75rem;justify-content:space-between;letter-spacing:.5px;margin-bottom:var(--space-inset-xs,.25rem .25rem .25rem .25rem);opacity:.9;position:relative;vertical-align:middle}#container label{text-transform:capitalize}#container input{background-image:none;border:2px solid var(--font-color-default,#999);border-radius:var(--radius-default,.25rem);box-shadow:none;font-size:1rem;height:var(--font-size-default,1rem);line-height:1.5;margin:0;padding:var(--padding-default,.5rem);width:auto}#container input:disabled{cursor:not-allowed}#container input:read-only{cursor:not-allowed}#container input.textfield__input--error{border:2px solid var(--color-alert-error,#de2131)}`;class o extends r{static get styles(){return[n]}static get properties(){return{minlength:{type:String,attribute:!0},maxlength:{type:String},autocomplete:{type:String},tooltip:{type:String},pattern:{type:String},min:{type:String},max:{type:String},value:{type:String},placeholder:{type:String},size:{type:String},errorMessage:{type:String},step:{type:String},disabled:{type:Boolean},required:{type:Boolean},readonly:{type:Boolean},autofocus:{type:Boolean},compact:{type:Boolean},counter:{type:Boolean},name:{type:String}}}constructor(t){super(),this._showDisabled="",this._inputType=t}firstUpdated(){this.updatePattern(),this.update()}updatePattern(){if(this.pattern){const t=this.renderRoot.querySelector("input");t.pattern=this.pattern}}updated(t){t.has("value")&&this.updatePattern()}render(){return i`
        <div id="container" data-ref="wrapper">
            <div class="label-wrapper">
                <label class="textfield__label" for="squid-input-${this._uid}" data-ref="label"><slot></slot>${this._showDisabled}</label>
                <squid-character-count data-ref="counter" ?hidden=${!this.counter} id="counter-${this._uid}" ></squid-character-count>
                ${this.maxlength?"maxlength="+this.maxlength:"NO"}
            </div>
            <input class="textfield__input" 
                    maxlength="${this.maxlength}"
                    type="${this._inputType}" 
                    name="${this.name}" 
                    value="${this.value}" 
                    id="squid-input-${this._uid}" 
                    data-ref="input"
                    ${this.pattern?"pattern="+this.pattern:""}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    ?readonly=${this.readonly}
                    ?autofocus=${this.autofocus}
                    ?compact=${this.compact}
                    @input=${this.__onInput}
                    
                    ${this.max?"max="+this.max:""}
                    minlength='${this.minlength}'
                    ${this.min?"min="+this.min:""}
                    placeholder="${this.placeholder?this.placeholder:""}"
                    autocomplete="${this.autocomplete?this.autocomplete:""}"
                     
                    aria-describedby=" helpers-${this._uid} counter-${this._uid}"
                    class="">
            <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
        </div>
        `}__onInput(t){this.value=t.target.value}}a("squid-input",o);export{o as S};
//# sourceMappingURL=squid-input-3d76c19e.js.map
