import{S as n}from"./squid-input-2d30322a.js";import{d as o}from"./defineSquidElement-344f2f43.js";import"./lit-element-85df8e35.js";import"./squid-input-base-b6539e8b.js";import"./baseElement-edd97de1.js";import"./findParentForm-f0d0b1da.js";class i extends n{static get properties(){return{...super.properties}}constructor(){super("email")}}o("squid-email",i);const g={title:"input"},m=e=>`<squid-email ${e.counter?"counter":""} 
                        ${e.disabled?"disabled":""} 
                        ${e.readonly?"readonly":""} 
                        ${e.required?"required":""} 
                       minlength="${e.minlength}"
                       min="${e.min}"
                       max="${e.max}"
                       pattern="${e.pattern}"
                       autocomplete="${e.autocomplete}"
                       placeholder="${e.placeholder}"
                       maxlength="${e.maxlength}">${e.label}</squid-email>`,a=m.bind({});a.args={label:"Label",disabled:!1,readonly:!1,required:!1,maxlength:"",minlength:"",pattern:"",autocomplete:"",min:"",max:"",placeholder:"",counter:!1};a.story={name:"email",parameters:{argTypes:{label:{control:"text"},disabled:{control:"boolean"},maxlength:{control:"text"}}}};var t,r,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return \`<squid-email \${args.counter ? 'counter' : ''} 
                        \${args.disabled ? 'disabled' : ''} 
                        \${args.readonly ? 'readonly' : ''} 
                        \${args.required ? 'required' : ''} 
                       minlength="\${args.minlength}"
                       min="\${args.min}"
                       max="\${args.max}"
                       pattern="\${args.pattern}"
                       autocomplete="\${args.autocomplete}"
                       placeholder="\${args.placeholder}"
                       maxlength="\${args.maxlength}">\${args.label}</squid-email>\`;
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const h=["email"];export{h as __namedExportsOrder,g as default,a as email};
//# sourceMappingURL=squid-email.stories-f8764c68.js.map
