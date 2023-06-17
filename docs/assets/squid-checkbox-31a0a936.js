import{i as o,x as c}from"./lit-element-85df8e35.js";import{S as r}from"./squid-input-base-b6539e8b.js";import{d as i}from"./defineSquidElement-344f2f43.js";import{e as a}from"./squidEvents-397fab83.js";var n=o`.checkbox__label{color:var(--checkbox-font-color-default,#666);font-size:1rem}.checkbox__label+.checkbox__label:after{content:none}.checkbox__input{left:-9999em;opacity:1;position:absolute}.checkbox__input+.checkbox__label:after,.checkbox__input:hover+.checkbox__label:after{content:""}.checkbox__input:hover+.checkbox__label:before{border:2px solid var(--color-primary-default,#0e307a)}.checkbox__input:focus+.checkbox__label:after{content:""}.checkbox__input:focus+.checkbox__label:before{border:2px solid var(--color-primary-default,#0e307a)}.checkbox__input:disabled:checked+.checkbox__label:before{background-color:#4d4d4d;border:0}.checkbox__input:disabled+.checkbox__label:after{content:"";opacity:1}.checkbox__input:disabled+.checkbox__label:before{background-color:grey;border:1px solid grey}.checkbox__input:checked+.checkbox__label:after{content:"";opacity:1}.checkbox__input:checked+.checkbox__label:before{background-color:var(--color-primary-default,#0e307a);border-color:var(--color-primary-default,#0e307a)}.checkbox__input:checked:hover+.checkbox__label:after{content:"";opacity:1}.checkbox__input:checked:hover+.checkbox__label:before{filter:brightness(120%) saturate(120%)}.checkbox__input:checked:focus+.checkbox__label:after{content:"";opacity:1}.checkbox__input:checked:focus+.checkbox__label:before{filter:brightness(120%) saturate(120%)}.checkbox__input:indeterminate:disabled+.checkbox__label:before{background-color:#4d4d4d;border:0}.checkbox__input:indeterminate+.checkbox__label:before{background-color:#1448b8;border-color:#1448b8}.checkbox__input:indeterminate+.checkbox__label:after{background:url("data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h8' stroke='%23fff' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-position:50%;background-repeat:no-repeat;border:0;content:"";opacity:1}.checkbox__input+.checkbox__label{display:inline-block;line-height:24px;padding-left:40px;position:relative}.checkbox__input+.checkbox__label:after{content:none}.checkbox__input+.checkbox__label:after,.checkbox__input+.checkbox__label:before{content:"";display:inline-block;height:24px;left:0;position:absolute;top:0;width:24px}.checkbox__input+.checkbox__label:before{background:#fff;border:1px solid grey;border-radius:2px;box-sizing:border-box;margin-right:16px}.checkbox__input+.checkbox__label:after{background:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIgMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjQzNSAwIDEyIDEuMjU3IDMuMzc5IDEyIDAgNy41MTJsMS40MDQtMS41NjUgMi4wMDMgMi45MzF6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");background-position:50%;background-repeat:no-repeat;background-size:50% 50%;opacity:0}.checkbox__input--error+.checkbox__label:before{border:2px solid #de2131}.checkbox__helper{color:#273b49}.checkbox__helper,squid-helpers{display:block;font-size:12px;margin-top:8px;padding-left:40px}squid-helpers{color:#de2131}`;class l extends r{static get styles(){return[n]}static get properties(){return{minlength:{type:String},maxlength:{type:String},tooltip:{type:String},pattern:{type:String},min:{type:String},max:{type:String},value:{type:String,reflect:!0},placeholder:{type:String},size:{type:String},errorMessage:{type:String},step:{type:String},disabled:{type:Boolean},required:{type:Boolean},readonly:{type:Boolean},autofocus:{type:Boolean},compact:{type:Boolean},checked:{type:Boolean,attribute:!0,reflect:!0}}}constructor(){super(),this.bindMethods(["__onChange"]),this._value=!1,this.checked=!1}get indeterminate(){return this.__getInput().indeterminate}set indeterminate(e){const t=this.__getInput();t.indeterminate=e,t.setAttribute("aria-checked","mixed")}render(){return c`
            <div id="container" data-ref="wrapper">
                <input
                    class="checkbox__input"
                    type="checkbox"
                    name="squid-input"
                    value="${this.value}"
                    id="squid-input-${this._uid}"
                    data-ref="input"
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    ?readonly=${this.readonly}
                    ?autofocus=${this.autofocus}
                    ?compact=${this.compact}
                    ?checked=${this.checked}
                    aria-checked=${this.checked}
                    @change=${this.__onChange}
                    aria-describedby="helpers-${this._uid}"
                />
                <label
                    class="checkbox__label"
                    for="squid-input-${this._uid}"
                    data-ref="label"
                    
                    ><slot></slot>${this._showDisabled}</label
                >
                <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
            </div>
        `}updated(){a("changed",this.checked,this)}__onChange(e){console.log("onchange"),this.checked!==e.currentTarget.checked&&(this.checked=e.currentTarget.checked)}}i("squid-checkbox",l);export{l as S};
//# sourceMappingURL=squid-checkbox-31a0a936.js.map
