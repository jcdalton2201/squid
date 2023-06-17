import{i as u,x as r}from"./lit-element-85df8e35.js";import{S as h}from"./squid-input-base-b6539e8b.js";import{d as b}from"./defineSquidElement-344f2f43.js";import"./baseElement-edd97de1.js";import"./findParentForm-f0d0b1da.js";var m=u`squid-helpers{color:var(--color-alert-error,#de2131)}label{color:var(--dark-gray,#4d4d4d);font-size:.75rem;letter-spacing:.5px;margin-bottom:var(--padding-small,4px);opacity:.9}.combobox-wrapper{font-size:1rem;position:relative}.combobox-wrapper input{background-image:none;border:2px solid var(--gray-default,#999);border-radius:var(--radius-default,4px);box-shadow:none;font-size:1rem;height:var(--height-default,1rem);line-height:1.5;margin:0;padding:var(--padding-default,8px);width:auto}.combobox-wrapper input:disabled{cursor:not-allowed}.combobox-wrapper input:read-only{cursor:not-allowed}.combobox-wrapper input.textfield__input--error{border:2px solid var(--color-alert-error,#de2131)}.combobox-wrapper .grid{background:#fff;border:1px solid #1a1a1a;display:none;list-style:none;margin:9px 0 0;min-width:230px;padding:0;position:absolute;top:1.7em;z-index:1}.combobox-wrapper .grid[open]{display:block}.combobox-wrapper .grid .result-row{cursor:default;margin:0;padding:2px}.combobox-wrapper .grid .result-row.active-decendant,.combobox-wrapper .grid .result-row:hover{background-color:#d1defa}.combobox-wrapper .grid .result-row:focus{background-color:#d1defa;outline:1px auto webkit-focus-ring-color}`;class f extends h{static get styles(){return[m]}static get properties(){return{value:{type:String,attribute:!0,reflect:!0},disabled:{type:Boolean},required:{type:Boolean},readonly:{type:Boolean},autofocus:{type:Boolean},datalabel:{type:String,attribute:!0},datavalue:{type:String,attribute:!0}}}constructor(){super(),this.bindMethods(["_openOptions","_closeOptions","_keyDown","_selectNext","_selectPrevious","_keyInput","_selectValue"]),this._data=[],this._displayData=[],this.activeElemen=null,this.addEventListener("blur",this._closeOptions)}set value(e){if(this.renderRoot.querySelector("input")){const t=this.renderRoot.querySelector("input").value;if(e!==t)if(this._objectData){const i=[...this._objectData.values()].indexOf(e);this.renderRoot.querySelector("input").value=[...this._objectData.keys()][i]}else this.renderRoot.querySelector("input").value=e;this.dispatchEvent(new CustomEvent("squid-input-change"))}}get value(){return this.renderRoot.querySelector("input")?this._objectData?this._objectData.get(this.renderRoot.querySelector("input").value):this.renderRoot.querySelector("input").value:""}set data(e){let t=this._data;this._objectData=null,e.find(i=>typeof i=="object")?((!this.datalabel||!this.datavalue)&&console.error(`We must have a ${this.datalabel?"":" datalabel "} ${this.datavalue?"":" datavalue "}`),this._objectData=new Map,e.forEach(i=>this._objectData.set(i[this.datalabel],i[this.datavalue])),this._data=[...this._objectData.keys()]):this._data=e,this._displayData=this._data,this.requestUpdate("data",t)}firstUpdated(){this.buildRefs()}render(){return r`
<div id="container" data-ref="wrapper">
    <label for="" id='${this.id}-label' class='combobox-label'><slot name='label'></slot></label>
    <div class='combobox-wrapper'>
        <div id='${this.id}-combobox'>
            <input type='text' role="combobox"
            aria-labelledby='${this.id}-label'
            aria-haspopup="grid"
            aria-expanded="false"
            aria-autocomplete="list"
            aria-controls="ex1-grid"
            id=${this.id}-input
            data-ref="input"
            ?disabled=${this.disabled}
            ?required=${this.required}
            ?readonly=${this.readonly}
            ?autofocus=${this.autofocus}

            @input=${this._keyInput}
            @keydown=${this._keyDown}
            aria-describedby="helpers-${this._uid}"
            >
            <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
        </div>
        <div aria-labelledby="${this.id}-label"
            role="grid"
            data-ref="optionsList"
            id="${this.id}-grid"
            class="grid hidden">
            ${this._displayData.map((e,t)=>r`
            <div tabindex="-1" class="result-row" role="row" id="result-row-${t}" @click=${this._selectValue}>
                ${e}
            </div>`)}
        </div>
    </div>
</div> 
        `}_openOptions(){if(!this.disabled){const{optionsList:e,input:t}=this.refs;e.setAttribute("open","open"),t.setAttribute("aria-expanded","true")}}_closeOptions(){if(!this.disabled){const{optionsList:e,input:t}=this.refs;e.removeAttribute("open"),t.setAttribute("aria-expanded","false")}}_keyDown(e){const{optionsList:t}=this.refs;if(t.hasAttribute("open")&&((e.key==="ArrowDown"||e.key==="ArrowRight")&&this._selectNext(),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&this._selectPrevious(),e.key==="Enter")){const{input:i}=this.refs;i.value=this._displayData[this.activeElement],this._closeOptions()}if(e.key==="Escape"){const{input:i}=this.refs;i.value="",this._closeOptions()}}_selectPrevious(){const e=this.shadowRoot.querySelector(".active-decendant");e&&e.classList.remove("active-decendant"),this.activeElement===void 0?this.activeElement=this._displayData.length-1:this.activeElement===0?this.activeElement=this._displayData.length-1:this.activeElement--,this.shadowRoot.querySelectorAll(".result-row").item(this.activeElement).classList.add("active-decendant")}_selectNext(){const e=this.shadowRoot.querySelector(".active-decendant");e&&e.classList.remove("active-decendant"),this.activeElement===void 0?this.activeElement=0:this.activeElement===this._displayData.length-1?this.activeElement=0:this.activeElement++,this.shadowRoot.querySelectorAll(".result-row").item(this.activeElement).classList.add("active-decendant")}_keyInput(e){const{optionsList:t,input:i}=this.refs,c=this._displayData;t.hasAttribute("open")||i.value&&e.key!=="ArrowDown"&&e.key!=="ArrowUp"&&this._openOptions(),this._displayData=this._data.filter(p=>p.toLowerCase().includes(i.value.toLowerCase())),this._displayData.length===0&&this._closeOptions(),this.activeElement=void 0;const o=this.shadowRoot.querySelector(".active-decendant");o&&o.classList.remove("active-decendant"),this.requestUpdate("_displayData",c)}_selectValue(e){const t=parseInt(e.currentTarget.id.replace("result-row-","")),{input:i}=this.refs;i.value=this._displayData[t],this.activeElement=void 0,this._closeOptions()}}b("squid-combobox",f);const q={title:"input"},y=s=>{const e=document.createElement("squid-combobox");return e.data=s.data,e.innerHTML=`<span slot='label'>${s.label}</span>`,e},a=y.bind({});a.args={label:"Star Wars",data:["Harry Potter","Ron Weasley","Hermione Granger","Albus Dumbledore","Severus Snape","Sirius Black","Voldemort"]};a.story={name:"combobox",parameters:{argTypes:{}}};var l,n,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const element = document.createElement('squid-combobox');
  element.data = args.data;
  element.innerHTML = \`<span slot='label'>\${args.label}</span>\`;
  return element;
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const D=["combobox"];export{D as __namedExportsOrder,a as combobox,q as default};
//# sourceMappingURL=squid-combobox.stories-6607f8f4.js.map
