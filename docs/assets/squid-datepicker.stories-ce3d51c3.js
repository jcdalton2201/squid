import{i as l,x as n}from"./lit-element-2d3d1b94.js";import{d as o}from"./defineSquidElement-344f2f43.js";import{S as u}from"./squid-input-3d76c19e.js";import"./squid-calendar-e5f703ba.js";import"./squid-input-base-50233efb.js";import"./baseElement-49f2f951.js";import"./findParentForm-f0d0b1da.js";import"./squidEvents-397fab83.js";var c=l`#container{max-width:200px}#container squid-calendar.hide{display:none}`;class h extends u{static get styles(){return[...super.styles,c]}static get properties(){return{value:{type:String,reflect:!0,converter:{toAttribute(e){return e instanceof Date?this.localization.format(e):e},fromAttribute(e){return e?new Date(e):null}}}}}constructor(){super(),this.bindMethods(["toggleCalendar","selectedValue"]);const e=document.querySelector("html").lang||"en-US";this.dayFormat=this.dayFormat||"2-digit",this.monthFormat=this.monthFormat||"2-digit",this.yearFormat=this.yearFormat||"numeric",this.localization=new Intl.DateTimeFormat(e,{day:this.dayFormat,month:this.monthFormat,year:this.yearFormat})}firstUpdated(){this.buildRefs()}render(){return n`
    <div id="container" data-ref="wrapper">
        <div class="label-wrapper">
            <label class="textfield__label" for="squid-input-${this._uid}" data-ref="label"><slot></slot>${this._showDisabled}</label>
            <squid-character-count data-ref="counter" ?hidden=${!this.counter} id="counter-${this._uid}" }></squid-character-count>
        </div>
        <input class="textfield__input" 
                type="${this._inputType}" 
                name="squid-input" 
                id="squid-input-${this._uid}" 
                data-ref="input"
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                value=${this.value?this.value:""}
                ?autofocus=${this.autofocus}
                ?compact=${this.compact}
                @input=${this.__onInput}
                maxlength="${this.maxlength?this.maxlength:""}"
                max="${this.max?this.max:""}"
                minlength="${this.minlength?this.minlength:""}"
                min="${this.min?this.min:""}"
                placeholder="${this.placeholder?this.placeholder:""}"
                autocomplete="${this.autocomplete?this.autocomplete:""}"
                @click=${this.toggleCalendar}
                aria-describedby=" helpers-${this._uid} counter-${this._uid}"
                class="">
        <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
        <squid-calendar value='${this.value}'  class='hide' @date-selected=${this.selectedValue} @date-submit=${this.selectedValue} @date-close=${this.toggleCalendar}  data-ref="calendar" id="calendar-${this._uid}"></squid-calendar>
    </div>
        `}toggleCalendar(){const{calendar:e}=this.refs;new Date(this.value)!="Invalid Date"&&(e.value=new Date(this.value)),e.classList.toggle("hide")}selectedValue(){const{calendar:e,input:t}=this.refs;try{t.value=this.localization.format(e.value)}catch{t.value=""}this.value=t.value,e.classList.toggle("hide")}}o("squid-datepicker",h);const x={title:"input"},p=i=>{let e="",t="";return i.disabled&&(e="disabled"),i.required&&(t="required"),`<squid-datepicker ${e} 
                              ${t} 
                              autocomplete="${i.autocomplete}"
                              placeholder="${i.placeholder}">
              ${i.label}
            </squid-datepicker`},a=p.bind({});a.args={label:"Label",disabled:!1,required:!1,autocomplete:"",placeholder:""};a.story={name:"datepicker",parameters:{argTypes:{}}};var r,s,d;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  let disabled = '';
  let required = '';
  if (args.disabled) {
    disabled = 'disabled';
  }
  if (args.required) {
    required = 'required';
  }
  return \`<squid-datepicker \${disabled} 
                              \${required} 
                              autocomplete="\${args.autocomplete}"
                              placeholder="\${args.placeholder}">
              \${args.label}
            </squid-datepicker\`;
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const k=["datepicker"];export{k as __namedExportsOrder,a as datepicker,x as default};
//# sourceMappingURL=squid-datepicker.stories-ce3d51c3.js.map
