import{i,x as t,B as a}from"./lit-element-85df8e35.js";import{d}from"./defineSquidElement-344f2f43.js";import"./squid-button-25e9610d.js";import{B as c}from"./baseElement-edd97de1.js";import"./findParentForm-f0d0b1da.js";var l=i`.drawer-wrapper{-webkit-overflow-scrolling:touch;overflow:auto;overflow-x:hidden;overflow-y:auto}.drawer-wrapper,.drawer-wrapper .drawer-background{bottom:0;left:0;position:fixed;right:0;top:0;z-index:1000}.drawer-wrapper .drawer-background{background-color:#b2b2bf;opacity:.7;overflow:hidden;-webkit-transition:opacity .2s ease-in-out;-o-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.drawer-wrapper .drawer-containter{background:#fff;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;max-width:25.125rem;outline:0;overflow-y:scroll;position:fixed;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;-o-transition:transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;width:90%;z-index:1100}.drawer-wrapper .drawer-containter.right{right:0;-webkit-transform:translate(100%);-ms-transform:translate(100%);transform:translate(100%)}.drawer-wrapper .drawer-containter.left{left:0;-webkit-transform:translate(-100%);-ms-transform:translate(-100%);transform:translate(-100%)}.drawer-wrapper .drawer-containter.display{-webkit-transform:translate(0);-ms-transform:translate(0);transform:translate(0)}.drawer-wrapper .drawer-containter .drawer-containter-headeer{-ms-flex-pack:justify;-webkit-box-shadow:inset 0 -1px 0 0 #dddde5;box-shadow:inset 0 -1px 0 0 #dddde5;display:flex;-ms-flex:0 0;flex:0 0;justify-content:space-between;min-height:3rem;padding:.75rem}.drawer-wrapper .drawer-containter .drawer-containter-headeer button{border:none;cursor:pointer}.drawer-wrapper .drawer-content{padding:.25rem}.button-wrapper[hide]{display:none}`;class p extends c{static get styles(){return[l]}static get properties(){return{position:{type:"String"},hide:{type:Boolean}}}constructor(){super(),this.hide=!1,this.position="left",this.bindMethods(["openDrawer","closeDrawer"]),this.drawerTemplate=()=>t`<div class="drawer-wrapper">
            <div role='presentation' class='drawer-background'></div>
            <section id='drawer-containter' class='drawer-containter ${this.position}'>
                <header class='drawer-containter-headeer'>
                    <h2><slot name='title'</slot></h2>
                    <button @click=${this.closeDrawer} type="button" title="Close drawer" aria-label="Close drawer" 
                            class="close-button">
                        <svg  viewBox="0 0 24 24" width="18" height="18" class="close-button" style="width: 1.125rem; height: 1.125rem;">
                        <path d="M5.587 3.467a1.5 1.5 0 1 0-2.194 2.046q.036.038.074.074l6.438 6.44-6.44 6.44a1.5 1.5 0 0 0 2.122 2.12l6.44-6.438 
                        6.44 6.44a1.5 1.5 0 0 0 2.12-2.122l-6.438-6.44 6.44-6.44a1.5 1.5 0 0 0-2.122-2.12l-6.44 6.438-6.44-6.44z">
                        </path>
                        </svg>
                    </button>
                </header>
            <div class='drawer-content'>
                <slot></slot>
            </div>
            </secton>
            </div>`}render(){return t` <div class="container">
            <div class="button-wrapper" ?hide=${this.hide} >
                <squid-button @click=${this.openDrawer} 
                    ><slot name='button'></slot></squid-button
                >
            </div>
            <div id="drawerWrapper"></div>
        </div>`}async closeDrawer(){a(t``,this.renderRoot.querySelector("#drawerWrapper"))}async openDrawer(){a(this.drawerTemplate(),this.renderRoot.querySelector("#drawerWrapper")),await this.updateComplete,console.log("open drawer"),setTimeout(()=>{this.renderRoot.querySelector(".drawer-containter").classList.add("display")}),console.log(this.renderRoot.querySelector(".drawer-containter"))}}d("squid-drawer",p);const v={title:"drawer"},u=r=>`<squid-drawer >
  <span slot='button'>${r.button}</span>
  <span slot='title'>${r.title}</span>
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
</squid-drawer>`,e=u.bind({});e.args={button:"Info",title:"Shakespears Quotes"};e.story={name:"drawer",parameters:{argTypes:{}}};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return \`<squid-drawer >
  <span slot='button'>\${args.button}</span>
  <span slot='title'>\${args.title}</span>
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
</squid-drawer>\`;
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const g=["drawer"];export{g as __namedExportsOrder,v as default,e as drawer};
//# sourceMappingURL=squid-drawer.stories-3ff68068.js.map
