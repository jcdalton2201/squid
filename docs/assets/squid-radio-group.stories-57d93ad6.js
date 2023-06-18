import{i as u,x as l}from"./lit-element-2d3d1b94.js";import{d as p}from"./defineSquidElement-344f2f43.js";import"./squid-radio-da9fd825.js";import{B as c}from"./baseElement-49f2f951.js";import"./squid-input-base-50233efb.js";import"./findParentForm-f0d0b1da.js";import"./squidEvents-397fab83.js";var m=u``;class q extends c{static get styles(){return[m]}static get properties(){return{}}get value(){return this.querySelector("squid-radio[checked]")?this.querySelector("squid-radio[checked]").value:""}set value(e){this.querySelector(`squid-radio[value="${e}"]`).checked=!0}constructor(){super(),this.bindMethods(["__onChange","__onFieldsetKeyup"])}async firstUpdated(){this.options=[...this.querySelectorAll("squid-radio")].map(e=>e),this.addEventListener("keydown",this.__onFieldsetKeyup)}render(){return l`
<fieldset>
        <legend><slot name='title'></slot></legend>
        <slot @squid-change=${this.__onChange}></slot>
</fielset>
        `}__onChange(e){e.stopPropagation(),e.stopImmediatePropagation(),this.options.forEach(r=>{r!==e.target&&(r.checked=!1,r.__getInput().checked=!1)})}__onFieldsetKeyup(e){const r=e.code;if(r==="ArrowDown"||r==="ArrowUp"){e.preventDefault();const{options:t}=this,s=t.indexOf(e.target);r==="ArrowUp"&&(s===0?t[t.length-1].focus():t[s-1].focus()),r==="ArrowDown"&&(s===t.length-1?t[0].focus():t[s+1].focus())}}}p("squid-radio-group",q);const E={title:"radio"},h=i=>`
<squid-radio-group>
  <h1 slot="title">${i.title}</h1>
  <squid-radio name='test' value='yes' >YES</squid-radio>
  <squid-radio name='test' value='no'>No</squid-radio>
  <squid-radio name='test' value='maybe'>Maybe</squid-radio>
</squid-radio-group>
  `,o=h.bind({});o.args={title:"Title"};o.story={name:"radio-group",parameters:{argTypes:{}}};var a,d,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return \`
<squid-radio-group>
  <h1 slot="title">\${args.title}</h1>
  <squid-radio name='test' value='yes' >YES</squid-radio>
  <squid-radio name='test' value='no'>No</squid-radio>
  <squid-radio name='test' value='maybe'>Maybe</squid-radio>
</squid-radio-group>
  \`;
}`,...(n=(d=o.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const b=["radioGroup"];export{b as __namedExportsOrder,E as default,o as radioGroup};
//# sourceMappingURL=squid-radio-group.stories-57d93ad6.js.map
