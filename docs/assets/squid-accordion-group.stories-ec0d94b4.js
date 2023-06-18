import{i as h,x as m}from"./lit-element-2d3d1b94.js";import{B as f}from"./baseElement-49f2f951.js";import{d as g}from"./defineSquidElement-344f2f43.js";var y=h`:host{display:block}::slotted(squid-accordion){border-top:1px solid grey;margin-bottom:0}::slotted(squid-accordion:first-of-type){border-top:0}`;class q extends f{static get styles(){return[y]}static get properties(){return{}}constructor(){super(),this.bindMethods(["_manageGroup","_onKeyDown"])}disconnected(){this.super(),this.removeAttribute("keydown",this._onKeyDown)}firstUpdated(){this.addEventListener("keydown",this._onKeyDown)}render(){return m`<div data-ref="group" @accordion-toggle=${this._manageGroup}><slot></slot></div>`}_manageGroup(n){n.detail&&this.querySelectorAll("[open]").forEach(o=>{o!==n.currentTarget&&(o.open=!1)})}_onKeyDown(n){const{keyCode:o}=n;if(o===38||o===40){const t=[...this.querySelectorAll("squid-accordion")],p=t.reduce((s,l)=>document.activeElement===s?s:l,!1),r=t.indexOf(p),i=t[r-1],a=t[r+1];o===38?i&&i.focus():a&&a.focus()}}}g("squid-accordion-group",q);const A={title:"accordion-group"},v=()=>`
    <squid-accordion-group>
    <!-- one -->
    <squid-accordion>
      <span slot="summary">The first accordion in the group</span>
      <div slot="content">
        <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
      </div>
    </squid-accordion>
  
    <!-- two -->
    <squid-accordion>
      <span slot="summary">The middle child</span>
      <div slot="content">
        <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
      </div>
    </squid-accordion>
  
    <!-- three -->
    <squid-accordion>
      <span slot="summary">Accordion number three</span>
      <div slot="content">
        <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
      </div>
    </squid-accordion>
  </squid-accordion-group>
    `,e=v.bind({});e.args={};e.story={name:"accordion-group",parameters:{argTypes:{}}};var d,c,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return \`
    <squid-accordion-group>
    <!-- one -->
    <squid-accordion>
      <span slot="summary">The first accordion in the group</span>
      <div slot="content">
        <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
      </div>
    </squid-accordion>
  
    <!-- two -->
    <squid-accordion>
      <span slot="summary">The middle child</span>
      <div slot="content">
        <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
      </div>
    </squid-accordion>
  
    <!-- three -->
    <squid-accordion>
      <span slot="summary">Accordion number three</span>
      <div slot="content">
        <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
      </div>
    </squid-accordion>
  </squid-accordion-group>
    \`;
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const G=["accordionGroup"];export{G as __namedExportsOrder,e as accordionGroup,A as default};
//# sourceMappingURL=squid-accordion-group.stories-ec0d94b4.js.map
