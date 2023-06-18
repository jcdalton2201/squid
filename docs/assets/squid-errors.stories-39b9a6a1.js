import{i as f,x as _}from"./lit-element-2d3d1b94.js";import{d as p}from"./defineSquidElement-344f2f43.js";import{f as b}from"./findParentForm-f0d0b1da.js";import{f as v}from"./findShadowRoot-ceb75e0a.js";import{B as y}from"./baseElement-49f2f951.js";var x=f``;class g extends y{static get styles(){return[x]}static get properties(){return{id:{type:String},_message:{type:String,reflex:!1}}}constructor(){super(),this.bindMethods(["handleChange","_onDescribesInput"]),this.validityMessages=new Map([["customError",this._generateMessage(100,"This field is invalid")],["badInput",this._generateMessage(4,"This field is invalid")],["patternMismatch",this._generateMessage(9,"This field does not follow the proper pattern")],["rangeOverflow",this._generateMessage(8,"The value does not fit in the necessary range")],["stepMismatch",this._generateMessage(7,"The value is not a valid step")],["tooLong",this._generateMessage(6,"The value is too long")],["tooShort",this._generateMessage(6,"The value is too short")],["typeMismatch",this._generateMessage(5,"The entered value is not the right format")],["valueMissing",this._generateMessage(10,"This field is required")]]),this._inputs=[],this.validators=this.validators||[]}set id(e){const s=e;this._id=e;const i=`[aria-describedby="${e}"]`,n=v(this);setTimeout(n?()=>this.setDescribes(n):()=>this.setSelector(i)),this.requestUpdate("id",s)}get id(){return this._id}get form(){return this._form=this._form||b(this),this._form}setSelector(e){this.describes=document.querySelector(e),this._initInput(this.describes),this.count=this.describes?this.describes.value.length.toString():0,this._invalidClass={checkbox:"checkbox__input--error",textarea:"textfield__textarea--error"}[this.describes.type]||"textfield__input-error",this.describes.tagName==="SELECT"&&(this._invalidClass="select__input--error")}setDescribes(e){this.describes=e.querySelector("input"),this.describes||(this.describes=e.querySelector("textarea")),this.describes&&(this._initInput(this.describes),this._invalidClass={checkbox:"checkbox__input--error",textarea:"textfield__textarea--error"}[this.describes.type]||"textfield__input-error",this.describes.tagName==="SELECT"&&(this._invalidClass="select__input--error"))}render(){return _`<div class="helpers" data-ref="helpers">${this._message}</div>`}connectedCallback(){super.connectedCallback(),this._addEventListeners()}_addEventListeners(e){e=e||this.describes,e&&(e.addEventListener("change",this.handleChange),e.addEventListener("blur",this.handleChange),e.addEventListener("input",this._onDescribesInput),this.form&&(this.form.addEventListener("submit",this.handleChange,!0),this.form.addEventListener("reset",this.handleChange,!0)))}appendHelper(e){this._message=e}_onDescribesInput(){this.shadowRoot.querySelector(".error")&&(this.appendHelper(this.validityMessages.get("valid")),this.describes?this.describes.classList.remove(this._invalidClass):this._inputs.forEach(e=>e.classList.remove(this._invalidClass)))}preventDefault(e,s){this.form===e.target&&e.type==="submit"&&s&&e.preventDefault()}checkValidity(){let e={};return this.describes?e=this.describes.validity:this._inputs[0]&&(e=this._inputs[0].validity),e||(e=this._inputs[0].validity),e}setHelper(e){e&&e.message?this.appendHelper(e.message):this.appendHelper("")}handleChange(e){const s=this.describes&&this.describes.validity&&this.describes.validity.valid===!1,n=s||s;this.preventDefault(e,n);let l=this.checkValidity();const h=[];this.validityMessages.forEach((r,d)=>h.push(d));const m=h.filter(r=>l[r]).map(r=>this.validityMessages.get(r)).reduce((r,d)=>r.priority>d.priority?r:d,{});this.setHelper(m),this.describes?l.valid===!1?this._inputInvalid(this.describes):this._inputValid(this.describes):this._inputs.length&&(l.valid===!1?this._inputs.forEach(this._inputInvalid):this._inputs.forEach(this._inputValid))}_inputInvalid(e){e.classList.add(this._invalidClass),e.setAttribute("aria-invalid",!0)}_inputValid(e){e.classList.remove(this._invalidClass),e.setAttribute("aria-invalid",!1)}_initInput(e){e&&e.dataset.helperText?this._message=e.dataset.helperText:this._message=this.innerHTML,this._addEventListeners(e)}_generateMessage(e,s,i="error"){return{priority:e,message:s,type:i}}bindMethod(e){this[e]=this[e].bind(this)}bindMethods(e=[]){e.forEach(s=>this.bindMethod(s))}setCustomError(e){const s=this.validityMessages.get("customError");s.message=e}}class M extends g{}p("squid-errors",g);p("squid-helpers",M);const T={title:"errors"},q=t=>{let e="",s="",i="";return t.disabled&&(e="disabled"),t.readonly&&(s="readonly"),t.required&&(i="required"),`<squid-input  ${e} 
                          ${s} 
                          ${i} 
                          minlength="${t.minlength}"
                          min="${t.min}"
                          max="${t.max}"
                          pattern="${t.pattern}"
                          autocomplete="${t.autocomplete}"
                          placeholder="${t.placeholder}"
                          maxlength="${t.maxlength}">${t.label}</squid-input>`},a=q.bind({});a.args={label:"Label",disabled:!1,readonly:!1,required:!1,maxlength:"",minlength:"",pattern:"",autocomplete:"",min:"",max:"",placeholder:""};a.story={name:"errors",parameters:{argTypes:{}}};var o,c,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  let disabled = '';
  let readonly = '';
  let required = '';
  if (args.disabled) {
    disabled = 'disabled';
  }
  if (args.readonly) {
    readonly = 'readonly';
  }
  if (args.required) {
    required = 'required';
  }
  return \`<squid-input  \${disabled} 
                          \${readonly} 
                          \${required} 
                          minlength="\${args.minlength}"
                          min="\${args.min}"
                          max="\${args.max}"
                          pattern="\${args.pattern}"
                          autocomplete="\${args.autocomplete}"
                          placeholder="\${args.placeholder}"
                          maxlength="\${args.maxlength}">\${args.label}</squid-input>\`;
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const I=["errors"];export{I as __namedExportsOrder,T as default,a as errors};
//# sourceMappingURL=squid-errors.stories-39b9a6a1.js.map
