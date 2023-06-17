import{S as h}from"./squid-input-2d30322a.js";import{d as m}from"./defineSquidElement-344f2f43.js";import"./lit-element-85df8e35.js";import"./squid-input-base-b6539e8b.js";import"./baseElement-edd97de1.js";import"./findParentForm-f0d0b1da.js";class g extends h{static get properties(){return{...super.properties,dollarOnly:{type:Boolean}}}constructor(){super(),this.bindMethod("__onInputBlur"),this.bindMethod("__validate")}async firstUpdated(){this.__getInput().addEventListener("blur",this.__onInputBlur),this.__getInput().addEventListener("change",this.__validate),this.isCentSet=!1}__onInputBlur(t){if(t.currentTarget.value==="$")this.value="",this.setCustomValidity("");else if(t.currentTarget.value.includes(".")){let[i,r]=this.__getInput().value.split(".");r===""?(r="00",this.value=this.value+""+r):r.length===1&&(r+="0",this.value=this.value+"0"),t.target.value=i+"."+r}}__validate(){const{validityMessages:t}=this.__getHelper();this.max&&+this.cleanValue>+this.max?this.setCustomValidity(t.get("rangeOverflow").message):this.min&&+this.cleanValue<+this.min?this.setCustomValidity(t.get("rangeOverflow").message):this.setCustomValidity("")}__onInput(){const t=/^0+/,i=this.dollarOnly?/[^\d]+/g:/[^\d.]+/g,r=/^(0|0?[1-9]\d*)\.\d\d\d\d*$/,d=/\B(?=(\d{3})+(?!\d))/g,o=this.__getInput();let e=o.value.replace(i,"");if(e[0]==="0"&&e.length>1&&(e=e.replace(t,"")),e.includes(".")){let[s,n]=e.split(".");s===""&&(s="0"),e=s+"."+n,e.match(r)&&(e=s+"."+n.substring(0,2))}this.cleanValue=e,e=e.replace(d,","),this.value=this.cleanValue,o.value="$"+e,this.requestUpdate()}setDollorSign(){const t=/^0+/,i=this.dollarOnly?/[^\d]+/g:/[^\d.]+/g,r=/^(0|0?[1-9]\d*)\.\d\d\d\d*$/,d=/\B(?=(\d{3})+(?!\d))/g;let e=this.renderRoot.querySelector("input").value.replace(i,"");if(e[0]==="0"&&e.length>1&&(e=e.replace(t,"")),e.includes(".")){let[s,n]=e.split(".");s===""&&(s="0"),e=s+"."+n,e.match(r)&&(e=s+"."+n.substring(0,2))}this.cleanValue=e,e=e.replace(d,","),this.value="$"+e}updated(t){t.has("value")&&this.setDollorSign()}}m("squid-currency",g);const x={title:"input"},y=l=>{let t="",i="",r="";return l.disabled&&(t="disabled"),l.readonly&&(i="readonly"),l.required&&(r="required"),`<squid-currency ${t} 
                       ${i} 
                       ${r} 
                       min="${l.min}"
                       max="${l.max}"
                       autocomplete="${l.autocomplete}"
                       placeholder="${l.placeholder}">${l.label}</squid-currency>`},a=y.bind({});a.args={label:"Label",disabled:!1,readonly:!1,required:!1,autocomplete:"",min:"",max:"",placeholder:""};a.story={name:"currency",parameters:{argTypes:{label:{control:"text"},disabled:{control:"boolean"},maxlength:{control:"text"}}}};var u,c,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
  return \`<squid-currency \${disabled} 
                       \${readonly} 
                       \${required} 
                       min="\${args.min}"
                       max="\${args.max}"
                       autocomplete="\${args.autocomplete}"
                       placeholder="\${args.placeholder}">\${args.label}</squid-currency>\`;
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const V=["currency"];export{V as __namedExportsOrder,a as currency,x as default};
//# sourceMappingURL=squid-currency.stories-d5bd2215.js.map
