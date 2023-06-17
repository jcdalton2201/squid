import{i as t,x as o}from"./lit-element-85df8e35.js";import{B as d}from"./baseElement-edd97de1.js";import{d as s}from"./defineSquidElement-344f2f43.js";var l=t`.container[radius="2"]{border-radius:.125rem}.container[radius="4"]{border-radius:.25rem}.container[padding=tiny]{padding:.5rem}.container[padding=small]{padding:1rem}.container[padding=normal]{padding:24px}.container[padding=medium]{padding:2rem}.container[padding=large]{padding:48px}.container[padding=xlarge]{padding:4rem}.container[padding=xxlarge]{padding:96px}.container[margin=tiny]{margin:.5rem}.container[margin=small]{margin:1rem}.container[margin=normal]{margin:24px}.container[margin=medium]{margin:2rem}.container[margin=large]{margin:48px}.container[margin=xlarge]{margin:4rem}.container[margin=xxlarge]{margin:96px}.container[elevation]{box-shadow:none}.container[elevation="1"]{box-shadow:0 .125rem .25rem -1px rgba(0,0,0,.2),0 .25rem 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.container[elevation="2"]{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px .125rem rgba(0,0,0,.12)}.container[elevation="3"]{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px .125rem rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.container[elevation=none]{box-shadow:none}`;class u extends d{static get styles(){return[l]}static get properties(){return{radius:{type:Number,attribute:!0},padding:{type:String,attribute:!0},elevation:{type:Number,attribute:!0},margin:{type:String,attribute:!0},bgColor:{type:String,attribute:!0}}}constructor(){super(),this.bgColor="white"}render(){return o`
        <div class="container" data-ref="container" 
            radius="${this.radius?this.radius:""}"
            padding="${this.padding?this.padding:""}"
            elevation="${this.elevation?this.elevation:""}"
            margin="${this.margin?this.margin:""}"
            style="background-color:${this.bgColor}"
        
        ><slot></slot></div>
        `}}s("squid-container",u);const x={title:"container"},m=i=>`<squid-container
      bgColor='${i.bgColor}' 
      radius='${i.radius}' elevation='${i.elevation}' padding='${i.padding}' margin='${i.margin}'>
    <h1>This is a container</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </squid-container`,e=m.bind({});e.args={radius:"",padding:"tiny",elevation:"none",margin:"tiny",bgColor:"white"};e.story={name:"container",parameters:{},argTypes:{padding:{control:{type:"select",options:["null","tiny","small","normal","medium","large","xlarge","xxlarge"]}},margin:{control:{type:"select",options:["null","tiny","small","normal","medium","large","xlarge","xxlarge"]}},elevation:{control:{type:"select",options:["none","1","2","3"]}},radius:{control:{type:"select",options:["2","4"]}}}};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"args => {\n  return `<squid-container\n      bgColor='${args.bgColor}' \n      radius='${args.radius}' elevation='${args.elevation}' padding='${args.padding}' margin='${args.margin}'>\n    <h1>This is a container</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </squid-container`;\n}",...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const b=["container"];export{b as __namedExportsOrder,e as container,x as default};
//# sourceMappingURL=squid-container.stories-a1aeedef.js.map
