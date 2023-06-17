import"./squid-sub-nav-615bf527.js";import{B as i}from"./baseElement-edd97de1.js";import{d as s}from"./defineSquidElement-344f2f43.js";import{i as a,x as o}from"./lit-element-85df8e35.js";var r=a`.name .label{color:var(--font-color-default,#666);cursor:pointer;display:inline-block;font-family:Cabin,Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:.75rem;font-weight:400;height:1rem;line-height:1rem;min-width:90%;padding:8px 0 8px 8px;text-decoration:none;white-space:nowrap}.name .label svg{height:12px;margin:0 8px;width:12px}.name .label.small{font-size:1rem;height:fit-content;line-height:1rem;min-width:auto;padding:.5rem}.name .label[theme=dark]{background-color:var(--color-neutral-20,#333);color:var(--color-white,#fff)}.name .hide{display:none}.name .rotate{transform:rotate(180deg)}.name slot{background-color:var(--nav-color-background,#fff);display:flex;flex-direction:column;position:absolute;z-index:100}`;class n extends i{static get styles(){return[r]}static get properties(){return{name:{type:String},theme:{type:String,attribute:!0}}}constructor(){super(),this.theme="white"}firstUpdated(){this.buildRefs()}render(){return o`
<div class='name' @mouseover=${this.showList} @mouseout=${this.hideList}>
    <div class='label' theme='${this.theme}'>${this.name} 
    <svg aria-hidden="true" 
    data-ref='icon'
    focusable="false" 
    data-icon="chevron-down" 
    role="img" 
    viewBox="0 0 448 512" 
    class="chevron-down">
    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 
    0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 
    24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 
    9.372-24.569 9.372-33.942 0z" class="">
    </path>
</svg></div>
    <slot data-ref='list' class='hide'></slot>
</div>`}showList(){const{list:e,icon:t}=this.refs;e.classList.remove("hide"),t.classList.add("rotate")}hideList(){const{list:e,icon:t}=this.refs;e.classList.add("hide"),t.classList.remove("rotate")}}s("squid-nav",n);
//# sourceMappingURL=squid-nav-38570675.js.map
