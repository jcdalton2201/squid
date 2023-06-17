import{i as l,x as c}from"./lit-element-85df8e35.js";import{S as d}from"./squid-input-2d30322a.js";import{d as p}from"./defineSquidElement-344f2f43.js";import"./squid-input-base-b6539e8b.js";import"./baseElement-edd97de1.js";import"./findParentForm-f0d0b1da.js";var u=l`.select__label{color:#666;display:block;font-family:Cabin,Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:.5px;margin-bottom:.25rem;opacity:.9}squid-errors{color:var(--color-alert-error,#de2131)}.select__label--disabled{color:grey}.select__wrapper{position:relative;width:100%}.select__wrapper .chevron-down{color:var(--select-color-font,#666);height:15px;overflow:hidden;position:absolute;right:1rem;top:calc(50% - 8px);width:15px}.select__wrapper .chevron-down[hidden]{display:none}.select__input{-webkit-appearance:none;-moz-appearance:none;background:#fff;background-color:var(--select-color-background,#fff);border:0;border-radius:.25rem;box-shadow:inset 0 0 0 1px #666;box-sizing:border-box;color:var(--select-color-font,#666);display:block;font-family:Cabin,Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;outline:0;padding:.5rem 1rem;width:100%}.select__input option{background-color:var(--select-color-option-background,#fff);color:var(--select-color-option-font,#666)}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.select__input{box-shadow:0 0 0 1px #666}}.select__input::-ms-expand{display:none}.select__input.select__input--error{box-shadow:inset 0 0 0 2px var(--color-alert-error,#de2131)}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.select__input.select__input--error{box-shadow:0 0 0 2px var(--color-alert-error,#de2131)}}.select__input:focus{box-shadow:inset 0 0 0 2px #0e307a}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.select__input:focus{box-shadow:0 0 0 2px #0e307a}}.select__input:hover{box-shadow:inset 0 0 0 2px #0e307a}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.select__input:hover{box-shadow:0 0 0 2px #0e307a}}.select__input:disabled,.select__input:disabled:hover{background-color:#e6e6e6;border:1px solid #ccc;box-shadow:none;color:#666;cursor:not-allowed}.select__helper{color:#1a1a1a}.select__helper,.select__helper--error{display:block;font-size:.75rem;margin-top:.5rem}.select__helper--error{color:var(--color-alert-error,#de2131)}:host{display:block;margin-bottom:24px;position:relative}.select__input.compact{font-size:.875rem;min-height:32px;padding:0 24px}`;class h extends d{static get styles(){return[u]}static get properties(){return{icon:{type:Boolean,reflect:!0}}}constructor(){super(),this.bindMethods(["__slotUpdate","__onChange","__setValue"])}firstUpdated(){this.buildRefs()}get checkValidity(){const e=this.renderRoot.querySelector("select");return e.checkValidity.bind(e)}set value(e){this.renderRoot.querySelector("select")?this.__setValue(e):setTimeout(()=>{this.__setValue(e)})}get value(){return this.renderRoot.querySelector("select").value}render(){return c`
        <div id="container" data-ref="wrapper">
            <div class="label-wrapper">
                <label class="select__label" for="squid-input-${this._uid}" data-ref="label"><slot name='label'></slot>${this._showDisabled}</label>
            </div>
            <div class='select__wrapper'>

            <select class="select__input" 
                    type="${this._inputType}" 
                    name="squid-input" 
                    value="" 
                    id="squid-input-${this._uid}" 
                    data-ref="input"
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    ?readonly=${this.readonly}
                    ?autofocus=${this.autofocus}
                    ?compact=${this.compact}
                    @change=${this.__onChange}
                    aria-describedby=" helpers-${this._uid} counter-${this._uid}"
                    class="">
                    </select>
                <svg aria-hidden="true" 
                    focusable="false" 
                    data-prefix="fas" 
                    role="img" 
                    viewBox="0 0 448 512" class="chevron-down"
                    ?hidden=${!this.icon}>
                  <path fill="currentColor" 
                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 
                        24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 
                        22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class="">
                        </path>
                </svg>
            </div>
            <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
            <slot @slotchange=${this.__slotUpdate}></slot>
        </div>`}__onChange(){this.dispatchEvent(new CustomEvent("squid-select-change"))}__slotUpdate(){const{input:e}=this.refs;this.querySelector("option")&&(e.innerHTML="",this.querySelectorAll("option").forEach(o=>{e.appendChild(o)}))}__setValue(e){const o=this.renderRoot.querySelector("select").value;e!==o&&(this.renderRoot.querySelector("select").value=e),this.dispatchEvent(new CustomEvent("squid-select-change"))}}p("squid-select",h);const w={title:"input"},_=t=>{const e=document.createElement("squid-select"),o=[];for(let s=0;s<t.data.length;s++)o.push(`<option value="${t.data[s]}">${t.data[s]}</option>`);return t.icon?e.setAttribute("icon",t.icon):e.removeAttribute("icon"),e.innerHTML=`<span slot='label'>${t.label}</span>${o.join("")}`,e},r=_.bind({});r.args={label:"JK",data:["Harry Potter","Ron Weasley","Hermione Granger","Albus Dumbledore","Severus Snape","Sirius Black","Voldemort"],value:"",icon:!0};r.story={name:"select",parameters:{argTypes:{icon:{control:"boolean"}}}};var i,n,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const element = document.createElement('squid-select');
  const options = [];
  for (let i = 0; i < args.data.length; i++) {
    options.push(\`<option value="\${args.data[i]}">\${args.data[i]}</option>\`);
  }
  if (args.icon) {
    element.setAttribute('icon', args.icon);
  } else {
    element.removeAttribute('icon');
  }
  element.innerHTML = \`<span slot='label'>\${args.label}</span>\${options.join('')}\`;
  return element;
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const y=["select"];export{y as __namedExportsOrder,w as default,r as select};
//# sourceMappingURL=squid-select.stories-9b29f913.js.map
