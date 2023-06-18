import{i,s as a,x as n}from"./lit-element-2d3d1b94.js";import{d as l}from"./defineSquidElement-344f2f43.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r;((r=window.HTMLSlotElement)===null||r===void 0?void 0:r.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var s=i`div[theme=dark]{background-color:var(--color-neutral-20,#333)}div[theme=dark],div[theme=dark] a{color:var(--color-white,#fff)}a{color:inherit;cursor:pointer;display:inline-block;font-family:Cabin,Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:.875rem;font-weight:400;height:1rem;padding:1rem;text-decoration:none;white-space:nowrap}a,a.small{line-height:1rem}a.small{font-size:1rem;height:fit-content;min-width:auto;padding:.5rem}a:visited{color:var(--font-color-default,#666)}a:hover{color:var(--color-white,#fff)}a:active,a:hover{text-decoration:none}a:active{filter:brightness(80%) saturate(80%)}div{background-color:var(--nav-color-background,#fff);color:var(--font-color-default,#666);display:flex;flex-wrap:wrap;height:fit-content;width:fit-content;width:100%}div:hover{background-color:var(--color-primary-default,#0e307a);color:var(--color-white,#fff)}`;class d extends a{static get styles(){return[s]}static get properties(){return{href:{type:String},theme:{type:String}}}constructor(){super(),this.theme="light"}render(){return n`
<div theme='${this.theme}'>
    <a  href=${this.href}><slot></slot></a>
</div>`}}l("squid-sub-nav",d);
//# sourceMappingURL=squid-sub-nav-a7c4584e.js.map
