import{S as n}from"./squid-input-mask-0ad20b82.js";import{d as a}from"./defineSquidElement-344f2f43.js";import"./squid-input-3d76c19e.js";import"./lit-element-2d3d1b94.js";import"./squid-input-base-50233efb.js";import"./baseElement-49f2f951.js";import"./findParentForm-f0d0b1da.js";import"./squidEvents-397fab83.js";class i extends n{constructor(){super()}async firstUpdated(r){r.mask="(111) 111-1111",super.firstUpdated(r)}}a("squid-telephone",i);const b={title:"input"},d=t=>`<squid-telephone>
    ${t.label}
    </squid-telephone>`,e=d.bind({});e.args={label:"Telephone"};e.story={name:"telephone",parameters:{argTypes:{}}};var s,o,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return \`<squid-telephone>
    \${args.label}
    </squid-telephone>\`;
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const g=["telephone"];export{g as __namedExportsOrder,b as default,e as telephone};
//# sourceMappingURL=squid-telephone.stories-90017fc2.js.map
