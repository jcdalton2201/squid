import{S as m}from"./squid-input-2d30322a.js";import{d as t}from"./defineSquidElement-344f2f43.js";import"./lit-element-85df8e35.js";import"./squid-input-base-b6539e8b.js";import"./baseElement-edd97de1.js";import"./findParentForm-f0d0b1da.js";class u extends m{constructor(){super("number")}}t("squid-number",u);const $={title:"input"},s=e=>`<squid-number ${e.counter?"counter":""} 
                          ${e.disabled?"disabled":""} 
                          ${e.readonly?"readonly":""} 
                          ${e.required?"required":""}
                          min="${e.min}"
                          max="${e.max}"
                          name="${e.name}"
                          autocomplete="${e.autocomplete}"
                          placeholder="${e.placeholder}">${e.label}</squid-number`,r=s.bind({});r.args={label:"Number",disabled:!1,readonly:!1,required:!1,autocomplete:"",min:"",max:"",placeholder:"",counter:"",name:"first"};r.story={name:"number",parameters:{argTypes:{}}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return \`<squid-number \${args.counter ? 'counter' : ''} 
                          \${args.disabled ? 'disabled' : ''} 
                          \${args.readonly ? 'readonly' : ''} 
                          \${args.required ? 'required' : ''}
                          min="\${args.min}"
                          max="\${args.max}"
                          name="\${args.name}"
                          autocomplete="\${args.autocomplete}"
                          placeholder="\${args.placeholder}">\${args.label}</squid-number\`;
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const q=["number"];export{q as __namedExportsOrder,$ as default,r as number};
//# sourceMappingURL=squid-number.stories-19e7f82e.js.map
