import"./squid-sub-nav-615bf527.js";import{B as i}from"./baseElement-edd97de1.js";import{d as o}from"./defineSquidElement-344f2f43.js";import{i as d,x as h}from"./lit-element-85df8e35.js";import"./squid-nav-38570675.js";var m=d`:host{display:flex}`;class p extends i{static get styles(){return[m]}static get properties(){return{theme:{type:String}}}shouldUpdate(e){return this.querySelectorAll("squid-sub-nav").forEach(a=>this.setTheme(a)),e}firstUpdated(){this.querySelectorAll("squid-nav").forEach(e=>this.setTheme(e))}render(){return h`<slot></slot>`}setTheme(e){this.theme&&(e.setAttribute("theme",this.theme),this.requestUpdate())}}o("squid-nav-group",p);const f={title:"nav"},v=t=>`<squid-nav-group theme='${t.theme}'>
    <squid-nav  name='Search Engine'>
    <squid-sub-nav  href='https://google.com'>google</squid-sub-nav>
    <squid-sub-nav  href='https://bing.com'>bing</squid-sub-nav>
    </squid-nav>
    <squid-nav name='News' >
    <squid-sub-nav href='https://CNN.com' >CNN</squid-sub-nav>
    <squid-sub-nav href='https://www.bbc.co.uk/news'>BBC</squid-sub-nav>
</squid-nav>
    </squid-nav-group>`,s=v.bind({});s.args={theme:"light"};s.story={name:"nav-group",parameters:{argTypes:{}}};var n,r,u;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return \`<squid-nav-group theme='\${args.theme}'>
    <squid-nav  name='Search Engine'>
    <squid-sub-nav  href='https://google.com'>google</squid-sub-nav>
    <squid-sub-nav  href='https://bing.com'>bing</squid-sub-nav>
    </squid-nav>
    <squid-nav name='News' >
    <squid-sub-nav href='https://CNN.com' >CNN</squid-sub-nav>
    <squid-sub-nav href='https://www.bbc.co.uk/news'>BBC</squid-sub-nav>
</squid-nav>
    </squid-nav-group>\`;
}`,...(u=(r=s.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const N=["navGroup"];export{N as __namedExportsOrder,f as default,s as navGroup};
//# sourceMappingURL=squid-nav-group.stories-0f258d43.js.map
