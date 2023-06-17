import{T as u,x as c}from"./lit-element-85df8e35.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},d=o=>(...t)=>({_$litDirective$:o,values:t});let a=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,e){this._$Ct=t,this._$AM=s,this._$Ci=e}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i="important",h=" !"+i,b=d(class extends a{constructor(o){var t;if(super(o),o.type!==l.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,s)=>{const e=o[s];return e==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(o,[t]){const{style:s}=o.element;if(this.ut===void 0){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach(e=>{t[e]==null&&(this.ut.delete(e),e.includes("-")?s.removeProperty(e):s[e]="")});for(const e in t){const n=t[e];if(n!=null){this.ut.add(e);const r=typeof n=="string"&&n.endsWith(h);e.includes("-")||r?s.setProperty(e,r?n.slice(0,-11):n,r?i:""):s[e]=n}}return u}});const $=({primary:o,backgroundColor:t=null,size:s,label:e,onClick:n})=>{const r=o?"storybook-button--primary":"storybook-button--secondary";return c`
    <button
      type="button"
      class=${["storybook-button",`storybook-button--${s||"medium"}`,r].join(" ")}
      style=${b({backgroundColor:t})}
      @click=${n}
    >
      ${e}
    </button>
  `};export{$ as B};
//# sourceMappingURL=Button-391d94fd.js.map
