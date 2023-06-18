import{i as l,x as d}from"./lit-element-2d3d1b94.js";import{S as c}from"./squid-input-base-50233efb.js";import{d as u}from"./defineSquidElement-344f2f43.js";import"./baseElement-49f2f951.js";import"./findParentForm-f0d0b1da.js";var h=l`#container{display:flex;flex-direction:column;width:auto}#container squid-helpers{color:var(--color-alert-error,#de2131)}#container .label-wrapper{color:var(--font-color-default,#4d4d4d);display:flex;font-size:.75rem;justify-content:space-between;letter-spacing:.5px;margin-bottom:var(--space-inset-xs,.25rem .25rem .25rem .25rem);opacity:.9;position:relative;vertical-align:middle}#container label{text-transform:capitalize}#container textarea{background-image:none;border:2px solid var(--font-color-default,#999);border-radius:var(--radius-default,.25rem);box-shadow:none;font-size:1rem;height:fit-content;line-height:1.5;margin:0;padding:var(--padding-default,.5rem);width:fit-content}#container textarea:disabled{cursor:not-allowed}#container textarea:read-only{cursor:not-allowed}#container textarea.textfield__input--error{border:2px solid var(--color-alert-error,#de2131)}`;class p extends c{static get styles(){return[h]}static get properties(){return{id:{type:String},name:{type:String},autocomplete:{type:String},autofocus:{type:Boolean},cols:{type:Number},counter:{type:Boolean},disabled:{type:Boolean},maxlength:{type:String},minlength:{type:String},placeholder:{type:String},readonly:{type:Boolean},required:{type:Boolean},rows:{type:Number},spellcheck:{type:Boolean},value:{type:String,attribute:!0},wrap:{type:String}}}constructor(){super(),this.bindMethods(["__onInput"])}get checkValidity(){const t=this.renderRoot.querySelector("textarea");return t.checkValidity.bind(t)}set value(t){var a;if((a=this==null?void 0:this.renderRoot)!=null&&a.querySelector("textarea")){const n=this.renderRoot.querySelector("textarea").value;t!==n&&(this.renderRoot.querySelector("textarea").value=t),this.counter&&(this.renderRoot.querySelector("squid-character-count").count=t&&t.length||0),this.dispatchEvent(new CustomEvent("squid-input-change"))}}get value(){return this.renderRoot.querySelector("textarea")?this.renderRoot.querySelector("textarea").value:""}firstUpdated(){this.buildRefs(),this.getAttribute("value")&&(this.renderRoot.querySelector("textarea").value=this.getAttribute("value"))}render(){return d`
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
            maxlength="${this.maxlength?this.maxlength:""}"
            minlength="${this.minlength?this.minlength:""}"
            placeholder="${this.placeholder?this.placeholder:""}"
            autocomplete="${this.autocomplete?this.autocomplete:""}"
            cols=${this.cols?this.cols:""}
            rows=${this.rows?this.rows:""}
            wrap=${this.wrap?this.wrap:""}
            aria-describedby=" helpers-${this._uid} counter-${this._uid}" 
            class="" ></textarea>
    <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
</div>
        `}__onInput(t){this.value=t.target.value}}u("squid-textarea",p);const b={title:"textarea"},m=e=>`<squid-textarea ${e.counter?"counter":""} 
    ${e.disabled?"disabled":""} 
    ${e.readonly?"readonly":""} 
    ${e.required?"required":""}
    ${e.spellcheck?"spellcheck":""}
    rows="${e.rows}"
    cols="${e.cols}"
    minlength="${e.minlength}"
    maxlength="${e.maxlength}"></squid-textarea`,r=m.bind({});r.args={maxlength:"",minlength:"",max:"",rows:10,cols:40,counter:!1,disabled:!1,readonly:!1,required:!1,spellcheck:!1};r.story={name:"textarea",parameters:{argTypes:{maxlength:{control:"text"},minlength:{control:"text"}}}};var i,o,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return \`<squid-textarea \${args.counter ? 'counter' : ''} 
    \${args.disabled ? 'disabled' : ''} 
    \${args.readonly ? 'readonly' : ''} 
    \${args.required ? 'required' : ''}
    \${args.spellcheck ? 'spellcheck' : ''}
    rows="\${args.rows}"
    cols="\${args.cols}"
    minlength="\${args.minlength}"
    maxlength="\${args.maxlength}"></squid-textarea\`;
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const q=["textarea"];export{q as __namedExportsOrder,b as default,r as textarea};
//# sourceMappingURL=squid-textarea.stories-42eaf293.js.map
