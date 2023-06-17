import{i as a,x as n}from"./lit-element-85df8e35.js";import{B as s}from"./baseElement-edd97de1.js";import{d}from"./defineSquidElement-344f2f43.js";import{e as l}from"./squidEvents-397fab83.js";var g=a`.accordion{box-sizing:border-box}.accordion button{background:none;border:0;font-family:Cabin,Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;margin:0 0 1rem;padding:0;text-align:left}.accordion .accordion-item{border-top:1px solid #ccc;overflow:hidden}.accordion .accordion-item:first-child{border-top:0}.accordion .accordion-title{background:none;border:0;box-sizing:border-box;cursor:pointer;display:block;font-family:Cabin,Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;margin:0;padding:1rem .5rem;position:relative;text-align:left;width:100%}.accordion .accordion-title:hover{background-color:#e6e6e6;color:#666;outline:0 none}.accordion .accordion-title:hover:after{background:url('data:image/svg+xml;utf8,<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class=""><path fill="blue" d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z" class=""></path></svg>');background-repeat:no-repeat;z-index:100}.accordion .accordion-title:after{background-size:cover;background:url('data:image/svg+xml;utf8,<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class=""><path fill="$color-neutral-50" d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z" class=""></path></svg>');background-repeat:no-repeat;content:"";height:12px;position:absolute;right:.5rem;top:calc(50% - 6px);width:12px}.accordion .accordion-title.accordion-title--active:hover{color:grey}.accordion .accordion-title.accordion-title--active:hover:after{background:url('data:image/svg+xml;utf8,<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" ><path fill="blue" d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"></path></svg>');background-repeat:no-repeat;height:12px;width:12px}.accordion .accordion-title.accordion-title--active:after{background-size:cover;background:url('data:image/svg+xml;utf8,<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" ><path fill="black" d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"></path></svg>');background-repeat:no-repeat;content:"";height:12px;position:absolute;right:.5rem;top:calc(50% - 1px);width:12px}.accordion .accordion-section{display:block;max-height:0;overflow:hidden;transition:max-height .25s cubic-bezier(0,.25,.75,1);will-change:max-height}.accordion .accordion-section.accordion-section--active{max-height:600px;transition:max-height .25s ease-in}.accordion .accordion-section.accordion-section--active *{margin-top:0;padding-top:0}.accordion .accordion-section .accordion-content{padding:.5rem .5rem 1rem}.accordion.accordion--dark .accordion-title{background-color:#195ae6;color:#fff}.accordion.accordion--dark .accordion-title:hover{background-color:#477beb;color:#fff}.accordion.accordion--dark .accordion-title:after{background:url('data:image/svg+xml;utf8,<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class=""><path fill="white" d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z" class=""></path></svg>');background-repeat:no-repeat}.accordion.accordion--dark .accordion-title.accordion-title--active:after{background:url('data:image/svg+xml;utf8,<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" ><path fill="white" d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"></path></svg>');background-repeat:no-repeat}.accordion.accordion--dark .accordion-section{background-color:#195ae6;color:#fff}:host{display:block}`;class h extends s{static get styles(){return[g]}static get properties(){return{theme:{type:String,attribute:!0},open:{type:Boolean,attribute:!0,reflect:!0}}}constructor(){super(),this.bindMethods(["toggle"]),this.theme="light",this.open=!1}firstUpdated(){this.buildRefs()}render(){return n`
<div class="accordion accordion--${this.theme}" data-ref="accordion">
    <div class="accordion-item">
        <button @click=${this.toggle} class="accordion-title ${this.open?"accordion-title--active":""}"" 
            aria-controls="content-${this._uid}"
            aria-expanded="${this.open}" 
            data-ref="summary" 
            id="summary-${this._uid}">
                <slot name="summary"></slot>
        </button>
        <div class="accordion-section ${this.open?"accordion-section--active":""}" 
            data-ref="content"
            aria-hidden="${!this.open}" 
            id="content-${this._uid}" 
            aria-labelledby="summary-${this._uid}">
                <div class="accordion-content">
                    <slot name="content"></slot>
                </div>
        </div>
    </div>
</div>        
        `}get focus(){const{summary:r}=this.refs;return()=>r.focus()}toggle(){this.open=!this.open,this.requestUpdate(),l("accordion-toggle",this.open,this)}}d("squid-accordion",h);const f={title:"accordion"},p=c=>`<squid-accordion>
  <span slot="summary">${c.label}</span>
  <div slot="content">
    <p>Hello</p>
  </div>
  </squid-accordion`,o=p.bind({});o.args={label:"This is a lable"};o.story={name:"accordion",parameters:{argTypes:{}}};var t,e,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return \`<squid-accordion>
  <span slot="summary">\${args.label}</span>
  <div slot="content">
    <p>Hello</p>
  </div>
  </squid-accordion\`;
}`,...(i=(e=o.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const x=["accordion"];export{x as __namedExportsOrder,o as accordion,f as default};
//# sourceMappingURL=squid-accordion.stories-76a276d0.js.map
