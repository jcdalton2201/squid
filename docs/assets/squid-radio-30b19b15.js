import{i as e,x as t}from"./lit-element-85df8e35.js";import{S as o}from"./squid-input-base-b6539e8b.js";import{d as i}from"./defineSquidElement-344f2f43.js";import{e as r}from"./squidEvents-397fab83.js";var a=e`.radiobutton--label{color:var --font-color-default,#666;font-size:1rem}.radiobutton--input{box-sizing:border-box;left:6px;margin:0;opacity:1;padding:0;position:absolute;top:6px}.radiobutton--input:focus{outline:1px auto -webkit-focus-ring-color;outline-offset:-3px}.radiobutton--input:focus+.radiobutton--label:before,.radiobutton--input:hover+.radiobutton--label:before{border:2px solid var(--color-primary-default,#0e307a)}.radiobutton--input:checked+.radiobutton--label:before{border:.5rem solid var(--color-primary-default,#0e307a)}.radiobutton--input:checked:focus+.radiobutton--label:before,.radiobutton--input:checked:hover+.radiobutton--label:before{filter:brightness(80%) saturate(80%)}.radiobutton--input:disabled+.radiobutton--label{color:#666}.radiobutton--input:disabled+.radiobutton--label:before{background-color:#e6e6e6;border:1px solid #ccc}.radiobutton--input:disabled:checked+.radiobutton--label{color:#666}.radiobutton--input:disabled:checked+.radiobutton--label:before{border:.5rem solid #ccc}.radiobutton--input+.radiobutton--label{display:inline-block;line-height:24px;padding-left:40px;position:relative}.radiobutton--input+.radiobutton--label:after,.radiobutton--input+.radiobutton--label:before{content:"";display:inline-block;height:24px;left:0;position:absolute;top:0;width:24px}.radiobutton--input+.radiobutton--label:before{background:#fff;border:1px solid #4d4d4d;border-radius:50%;box-sizing:border-box;margin-right:1rem}.radiobutton--error+.radiobutton--label:before{border:.125rem solid #de2131}.radiobutton--helper{color:#1a1a1a}.radiobutton--helper,.radiobutton--helper--error{display:block;font-size:.875rem;margin-top:1rem;padding-left:40px}.radiobutton--helper--error{color:#de2131}:host{display:block;margin-bottom:24px;position:relative}`;class d extends o{constructor(){super(),this.bindMethods(["__onChange"]),this.is="radio",this.checked=!1}static get styles(){return[a]}static get properties(){return{disabled:{type:Boolean},required:{type:Boolean},readonly:{type:Boolean},autofocus:{type:Boolean},checked:{type:Boolean,attribute:!0,reflect:!0},name:{type:String,attribute:!0,reflect:!0},value:{type:String,attribute:!0,reflect:!0}}}render(){return t`
            <div id="container" data-ref="wrapper">
                <input
                    class="radiobutton--input"
                    type="radio"
                    name="${this.name}"
                    value="${this.value}"
                    id="squid-input-${this._uid}"
                    data-ref="input"
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    ?readonly=${this.readonly}
                    ?autofocus=${this.autofocus}
                    aria-checked=${this.checked}
                    @change=${this.__onChange}
                    ?checked=${this.checked}
                    aria-describedby="helpers-${this._uid}"
                />
                <label
                    class="radiobutton--label"
                    for="squid-input-${this._uid}"
                    data-ref="label"
                    
                    ><slot></slot>${this._showDisabled}</label
                >
                <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
            </div>
        `}__onChange(){this.checked=this.__getInput().checked,this.requestUpdate("checked",null),r("squid-change",null,this)}}i("squid-radio",d);
//# sourceMappingURL=squid-radio-30b19b15.js.map
