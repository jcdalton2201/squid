import"./squid-input-mask-b67c95c6.js";import"./squid-input-2d30322a.js";import"./lit-element-85df8e35.js";import"./squid-input-base-b6539e8b.js";import"./baseElement-edd97de1.js";import"./findParentForm-f0d0b1da.js";import"./defineSquidElement-344f2f43.js";import"./squidEvents-397fab83.js";const b={title:"input"},s=e=>{let n="",r="",t="";return e.disabled&&(n="disabled"),e.readonly&&(r="readonly"),e.required&&(t="required"),`<squid-input-mask  mask="${e.mask}"
    ${n} 
    ${r} 
    ${t} 
    minlength="${e.minlength}"
    min="${e.min}"
    max="${e.max}"
    autocomplete="${e.autocomplete}"
    placeholder="${e.placeholder}"
    maxlength="${e.maxlength}">${e.label}</squid-input-mask`},a=s.bind({});a.args={label:"Label",disabled:!1,readonly:!1,required:!1,maxlength:"",minlength:"",pattern:"",autocomplete:"",min:"",max:"",placeholder:"",mask:""};a.story={name:"input-mask",parameters:{argTypes:{}}};var l,i,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
  return \`<squid-input-mask  mask="\${args.mask}"
    \${disabled} 
    \${readonly} 
    \${required} 
    minlength="\${args.minlength}"
    min="\${args.min}"
    max="\${args.max}"
    autocomplete="\${args.autocomplete}"
    placeholder="\${args.placeholder}"
    maxlength="\${args.maxlength}">\${args.label}</squid-input-mask\`;
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const q=["inputMask"];export{q as __namedExportsOrder,b as default,a as inputMask};
//# sourceMappingURL=squid-input-mask.stories-20b60737.js.map
