import{i as n,x as a}from"./lit-element-85df8e35.js";import{B as l}from"./baseElement-edd97de1.js";import{d as u}from"./defineSquidElement-344f2f43.js";import{f as h}from"./findParentForm-f0d0b1da.js";import{e as g}from"./squidEvents-397fab83.js";var m=n`:host{border:0;display:block;margin-bottom:2rem;outline:0;padding:0}.fieldset{border:0;margin-bottom:0;outline:0;padding:0}.fieldset__legend{font-size:16px;font-weight:600;line-height:1.5em;margin-bottom:24px}.fieldset__legend [class*=__helper--error]{font-size:12px;font-weight:400;line-height:1.5em;margin-top:.25rem;padding:0}.fieldset .form-field:last-of-type{margin-bottom:0}`;class d extends l{static get styles(){return[m]}static get properties(){return{legend:{type:String},required:{type:Boolean}}}constructor(){super(),this.bindMethods(["__onChange"]);const{form:e}=this;this.addEventListener("keydown",c=>{e&&c.code==="Enter"&&e.dispatchEvent(new CustomEvent("submit"))}),this.addEventListener("changed",this.__onChange)}get form(){return this._form=this._form||h(this),this._form}get checkedElements(){return this.querySelectorAll(`${this.constructor.childTag}[checked]`)}get elements(){return[...this.querySelectorAll(`${this.constructor.childTag}`)]}get value(){return[...this.checkedElements].map(e=>e.value)}__onChange(e){e.stopImmediatePropagation(),g("group-changed",this.value,this)}render(){return a`<fieldset class="fieldset" data-ref="fieldset">
            <legend class="fieldset__legend" data-ref="legend">
                ${this.legend}
            </legend>
            <div
                class="checkbox-group"
                data-ref="checkboxGroup"
                aria-describedby="helpers"
            >
                <slot></slot>
            </div>
        </fieldset>`}}d.childTag="squid-checkbox";u("squid-checkbox-group",d);const v={title:"checkbox"},p=o=>`
  <form action="javascript:void(0)"><squid-checkbox-group legend="${o.legend}">
  <squid-checkbox value="The Last Jedi">The Last Jedi</squid-checkbox>
<squid-checkbox value="Rogue One" class='findme'>Rogue One</squid-checkbox>
<squid-checkbox value="Solo">Solo</squid-checkbox>
  </squid-checkbox-group></form>`,t=p.bind({});t.args={legend:"Favorite StarWars movie"};t.story={name:"checkbox-group",parameters:{argTypes:{}}};var r,s,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return \`
  <form action="javascript:void(0)"><squid-checkbox-group legend="\${args.legend}">
  <squid-checkbox value="The Last Jedi">The Last Jedi</squid-checkbox>
<squid-checkbox value="Rogue One" class='findme'>Rogue One</squid-checkbox>
<squid-checkbox value="Solo">Solo</squid-checkbox>
  </squid-checkbox-group></form>\`;
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const _=["checkboxGroup"];export{_ as __namedExportsOrder,t as checkboxGroup,v as default};
//# sourceMappingURL=squid-checkbox-group.stories-0712249c.js.map
