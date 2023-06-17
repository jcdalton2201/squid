import"./squid-input-2d30322a.js";import"./lit-element-85df8e35.js";import"./squid-input-base-b6539e8b.js";import"./baseElement-edd97de1.js";import"./findParentForm-f0d0b1da.js";import"./defineSquidElement-344f2f43.js";const u={title:"input"},o=e=>`
    <form name="userForm" autocomplete>
    <squid-input ${e.counter?"counter":""} 
                         ${e.disabled?"disabled":""} 
                         ${e.readonly?"readonly":""} 
                         ${e.required?"required":""} 
                         minlength="${e.minlength}"
                         min="${e.min}"
                         max="${e.max}"
                         pattern="${e.pattern}"
                         autocomplete="${e.autocomplete}"
                         name="${e.name}"
                         placeholder="${e.placeholder}"
                         maxlength="${e.maxlength}">${e.label}</squid-input>
    </form>`,n=o.bind({});n.args={label:"Label",name:"first",disabled:!1,readonly:!1,required:!1,maxlength:"",minlength:"",pattern:"",autocomplete:"",min:"",max:"",placeholder:"",counter:!1};n.story={name:"input",parameters:{argTypes:{label:{control:"text"},disabled:{control:"boolean"},maxlength:{control:"text"}}}};var t,r,a;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return \`
    <form name="userForm" autocomplete>
    <squid-input \${args.counter ? 'counter' : ''} 
                         \${args.disabled ? 'disabled' : ''} 
                         \${args.readonly ? 'readonly' : ''} 
                         \${args.required ? 'required' : ''} 
                         minlength="\${args.minlength}"
                         min="\${args.min}"
                         max="\${args.max}"
                         pattern="\${args.pattern}"
                         autocomplete="\${args.autocomplete}"
                         name="\${args.name}"
                         placeholder="\${args.placeholder}"
                         maxlength="\${args.maxlength}">\${args.label}</squid-input>
    </form>\`;
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const c=["input"];export{c as __namedExportsOrder,u as default,n as input};
//# sourceMappingURL=squid-input.stories-a3f08c6a.js.map
