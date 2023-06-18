import{i as n,x as d}from"./lit-element-2d3d1b94.js";import{B as l}from"./baseElement-49f2f951.js";import{d as c}from"./defineSquidElement-344f2f43.js";import{e as t}from"./squidEvents-397fab83.js";import"./squid-button-58b8614e.js";import"./findParentForm-f0d0b1da.js";var p=n`.header{display:flex;flex-direction:row-reverse}.header button{background:transparent;border:none;color:rgba(72,71,71,.75);cursor:pointer;font-size:1.25rem}`;class u extends l{constructor(){super(),this.bindMethods(["hideModal","__documentKeypress"])}static get styles(){return[p]}static get properties(){return{open:{type:Boolean}}}firstUpdated(){this.open&&(this.hideModal(),this.showModal())}render(){return d` <dialog id="${this.id}" ?open=${this.open} >
        <div class="header">
                            <button
                                action="javascript:void(0)"
                                class="dialog-close"
                                tabindex="0"
                                role="link"
                                aria-label="close"
                                data-ref="close"
                                @click=${this.hideModal}
                            >
                                X
                            </button>
                        </div>
                        <div class="content"><slot></slot>
                        </div>
        </dialog>`}showModal(){this.open=!0,this.renderRoot.querySelector("dialog").showModal(),document.addEventListener("keydown",this.__documentKeypress),t("open",null,this)}hideModal(){this.open=!1,this.renderRoot.querySelector("dialog").close(),t("close",null,this),document.removeEventListener("keydown",this.__documentKeypress)}__documentKeypress(a){a.key==="Escape"&&this.type!=="decision"&&(this.open=!1)}}c("squid-dialog",u);const _={title:"dialog",parameters:{actions:{}}},m=o=>`
    <squid-dialog ${o.open?"open":""}> 
    <h1> ${o.label}</h1>
    </squid-dialog>
    `,e=m.bind({});e.args={label:"We Have a Title",open:!1};e.story={name:"dialog",parameters:{argTypes:{label:{control:"text"}},myaction:()=>{document.addEventListener("click",()=>console.log("meme"))}}};var s,r,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return \`
    <squid-dialog \${args.open ? 'open' : ''}> 
    <h1> \${args.label}</h1>
    </squid-dialog>
    \`;
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const q=["dialog"];export{q as __namedExportsOrder,_ as default,e as dialog};
//# sourceMappingURL=squid-dialog.stories-d5147c4c.js.map
