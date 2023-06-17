import"./squid-button-25e9610d.js";import"./lit-element-85df8e35.js";import"./defineSquidElement-344f2f43.js";import"./findParentForm-f0d0b1da.js";import"./baseElement-edd97de1.js";const c={title:"links"},s=e=>`<squid-button size="${e.size}" 
                          variant="${e.variant}" 
                          ${e.loading?"loading":""}
                          ${e.disabled?"disabled":""}>${e.title}</squid-button>`,t=s.bind({});t.args={variant:"action",title:"Test Button"};t.story={name:"button",parameters:{argTypes:{}},argTypes:{loading:{control:"boolean"},disabled:{control:"boolean"},title:{control:"text"},size:{control:"text"},variant:{control:{type:"select",options:["action","progressive","destructive","regressive","text","right","left"]}}}};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return \`<squid-button size="\${args.size}" 
                          variant="\${args.variant}" 
                          \${args.loading ? 'loading' : ''}
                          \${args.disabled ? 'disabled' : ''}>\${args.title}</squid-button>\`;
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const p=["button"];export{p as __namedExportsOrder,t as button,c as default};
//# sourceMappingURL=squid-button.stories-36e2d14d.js.map
