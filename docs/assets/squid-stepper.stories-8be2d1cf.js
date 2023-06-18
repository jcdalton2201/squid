import{i as o,x as p}from"./lit-element-2d3d1b94.js";import{B as u}from"./baseElement-49f2f951.js";import{d}from"./defineSquidElement-344f2f43.js";var c=o`#container label{color:var(--font-color-default,#4d4d4d);font-size:.75rem;letter-spacing:.5px;margin-bottom:.25rem .25rem .25rem .25rem;opacity:.9}#container .input{align-items:center;display:flex;font-size:1rem;text-align:center}#container .input button{align-items:center;border:1px solid #1a1a1a;border-radius:50%;cursor:pointer;display:flex;height:30px;justify-content:center;width:30px}#container .input button.disabled{background-color:#b3b3b3;cursor:not-allowed}#container .input button:hover{border-color:var(--color-primary-default,#0e307a)}#container .input button:focus{outline:1px auto #0d8bf2}`;class h extends u{static get styles(){return[c]}static get properties(){return{name:{type:String,reflect:!0},label:{type:String},value:{type:String,reflect:!0}}}static get formAssociated(){return!0}firstUpdated(){this.buildRefs(),this._optionsObserver.observe(this,{childList:!0}),this.value||(this.value=this.optionsMap.keys().next().value),this.__setValue(),this.__displayValue(),console.log(this.internals.form)}updated(){this.__displayValue()}constructor(){super(),this.internals=this.attachInternals(),this.bindMethods(["getOptions","increase","decrease","__displayValue","_manageOptions"]),this.getOptions(),this._optionsObserver=new MutationObserver(e=>{e.forEach(t=>this._manageOptions(t))})}getOptions(){const e=[...this.querySelectorAll("option")].map(s=>[s.value,s.text]);this.optionsMap=new Map(e),this.keys=[...this.optionsMap.keys()];let t=0;[...this.optionsMap.values()].forEach(s=>{s.length>t&&(t=s.length)}),this.displayLength=`${t*.75}rem`}_manageOptions(){this.getOptions(),[...this.optionsMap.keys()].find(e=>e===this.value)||(this.value=this.optionsMap.keys().next().value),this.__displayValue()}__displayValue(){const{increase:e,decrease:t}=this.refs;let s=this.keys.indexOf(this.value);t.classList.remove("disabled"),e.classList.remove("disabled"),s===0&&t.classList.add("disabled"),s===this.keys.length-1&&e.classList.add("disabled")}render(){return p`
        <div id="container" data-ref="wrapper">
         <label class="stepper-label" for="squid-stepper" data-ref="label">${this.label}</label>
         <div class='input'>
          <button class='decrease' data-ref='decrease' @click=${this.decrease} aria-label="decrease value">
          <svg aria-hidden="true" 
                  focusable="false"  
                  data-icon="minus-circle" 
                  role="img"  
                  viewBox="0 0 24 24"
                  height="18px" 
                  class="minus-circle"
                  
                  >
                  <path d="M1.5 12A1.5 1.5 0 0 1 3 10.5h18a1.5 1.5 0 0 1 0 3H3A1.5 1.5 0 0 1 1.5 12z"></path>
          </svg>
          </button>
          <div class='value' data-ref='valueInput' style='width:${this.displayLength}'>${this.value}</div>
          <button class='increase' @click=${this.increase} data-ref='increase' aria-label="increase value">
          <svg aria-hidden="true" 
               focusable="false" 
               data-icon="plus-circle" 
               role="img"  
               viewBox="0 0 24 24"
               height="18px" 
               class="plus-circle">
               <path d="M12 1.5A1.5 1.5 0 0 0 10.5 3v7.5H3a1.5 1.5 0 0 0 0 3h7.5V21a1.5 1.5 0 0 0 3 0v-7.5H21a1.5 1.5 0 0 0 0-3h-7.5V3A1.5 1.5 0 0 0 12 1.5z"></path>
            </path>
          </svg>
     </button>
         </div>
        </div>
        `}__setValue(){this.internals.setFormValue(this.value),this.dispatchEvent(new Event("change"))}increase(){let e=this.keys.indexOf(this.value);e<this.keys.length-1&&(this.value=this.keys[e+1],this.__displayValue()),this.__setValue()}decrease(){let e=this.keys.indexOf(this.value);e>0&&(this.value=this.keys[e-1],this.__displayValue()),this.__setValue()}checkValidity(){return!0}validity(){return!0}validationMessage(){return""}willValidate(){return!0}}d("squid-stepper",h);const m={title:"stepper"},v=i=>`<squid-stepper value='${i.value}' label='${i.label}'>
    <option value='1'>First</option>
                <option value='2'>Buisness</option>
                <option value='3'>Coach</option>
    </squid-stepper`,a=v.bind({});a.args={value:"",label:"Traveller Class"};a.story={name:"stepper",parameters:{notes:{readme},argTypes:{}}};var r,l,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return \`<squid-stepper value='\${args.value}' label='\${args.label}'>
    <option value='1'>First</option>
                <option value='2'>Buisness</option>
                <option value='3'>Coach</option>
    </squid-stepper\`;
}`,...(n=(l=a.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const y=["stepper"];export{y as __namedExportsOrder,m as default,a as stepper};
//# sourceMappingURL=squid-stepper.stories-8be2d1cf.js.map
