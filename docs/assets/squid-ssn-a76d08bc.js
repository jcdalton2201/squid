import{i as h,x as o}from"./lit-element-85df8e35.js";import{S as d}from"./squid-input-2d30322a.js";import{d as u}from"./defineSquidElement-344f2f43.js";import{e as c}from"./squidEvents-397fab83.js";var _=h`.toggle-button{background:none;border:0;color:#0e307a;cursor:pointer;font-size:.875rem}.toggle-button:hover{filter:brightness(80%) saturate(80%)}`;class r extends d{constructor(){super(),this.bindMethod("_parseAddtion"),this.bindMethod("_parseDeletion"),this.bindMethod("__onKeydown"),this.bindMethod("_addMask"),this.bindMethod("_unmask"),this.bindMethod("_manageCursor"),this.bindMethod("__showHideToggle"),this.bindMethod("__onBlur"),this.bindMethod("__onFocus"),this._isDelete=!1,this.unmaskedValue="",this.maskedValue="",this._obfuscatedValue=""}static get styles(){return[...super.styles,_]}get value(){return this._value}updated(e){if(e.has("value")){const t=this._unmask(this.value.toString());c("squid-change",this.value,this),this._mask(t)}}render(){return o`
        <div id="container" data-ref="wrapper">
            <div class="label-wrapper">
                <label class="textfield__label" for="squid-input-${this._uid}" data-ref="label"><slot></slot>${this._showDisabled}</label>
                <button class='toggle-button' data-ref='toggleButton' @click=${this.__showHideToggle}>Hide</button>
            </div>
            <input class="textfield__input" 
                    type="${this._inputType}" 
                    name="${this.name?this.name:""}"
                    value="${this.value}" 
                    id="squid-input-${this._uid}" 
                    data-ref="input"
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    ?readonly=${this.readonly}
                    ?autofocus=${this.autofocus}
                    ?compact=${this.compact}
                    @keydown=${this.__onKeydown}
                    @input=${this.__onInput}
                    @blur=${this.__onBlur}
                    @focus=${this.__onFocus}
                    maxlength="${this.maxlength?this.maxlength:""}"
                    max="${this.max?this.max:""}"
                    minlength="${this.minlength?this.minlength:""}"
                    min="${this.min?this.min:""}"
                    placeholder="${this.placeholder?this.placeholder:""}"
                    autocomplete="${this.autocomplete?this.autocomplete:""}"
                     
                    aria-describedby=" helpers-${this._uid} counter-${this._uid}"
                    class="">
            <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
        </div>
        `}firstUpdated(){super.connectedCallback(),this.hasValidation=!0,this.maskState="hidden",this._placeholder="___-__-____",this.minlength=11,this.maxlength=11,this._toggleButtonText()}_manageCursor(e,t,s={}){t>=3&&t<5?t+=1:t>=5&&(t+=2),s.inputType==="deleteContentBackward"&&(t=this._cachedSelection-1),this.__getInput().setSelectionRange(t,t)}__onBlur(){const e=this.__getInput();e.value===this._placeholder&&(e.value=""),this.checkValidity()}__onFocus(){setTimeout(()=>{const e=this.__getInput();if(e.value==="")e.setSelectionRange(0,0);else{const t=e.value.indexOf("_");e.setSelectionRange(t,t)}})}__onInput(e){console.log("on input"),!e.inputType&&this._isDelete&&(e.inputType="deleteContentBackward"),e.inputType!=="deleteContentBackward"?this._parseAddtion(e):this._parseDeletion(e)}__onKeydown(e){const t=[8,64],{key:s}=e,i=this.__getInput(),{selectionStart:n}=i;this._isDelete=t.includes(e.keyCode),this._cachedValue=this.unmaskedValue||"",this._cachedSelection=n,s.match(/[0-9]$/)?i.value="":s.toString().includes("Arrow")&&setTimeout(()=>{this._cachedSelection=i.selectionStart})}__onPaste(e){const t=e.clipboardData.getData("text/plain");this._mask(t)}_parseAddtion(e){const t=this._addMask(this._cachedValue),s=this._unmask(t.slice(0,this._cachedSelection)+this.__getInput().value+t.slice(this._cachedSelection));this._mask(s,e)}_parseDeletion(e){const t=this._addMask(this._cachedValue),s=this._unmask(`${t.slice(0,this._cachedSelection-1)}${t.slice(this._cachedSelection)}`);this._mask(s,e)}_addMask(e=""){const t="_",s=this._unmask(e),i=s.slice(0,3).padEnd(3,t),n=s.slice(3,5).padEnd(2,t),l=s.slice(5,9).padEnd(4,t);let a="";return i.length===3?a+=`${i}-`:a+=i,n.length===2?a+=`${n}-`:a+=n,a+=l,this.maskedValue=a,a}_unmask(e=""){return e.replace(/\D/g,"").slice(0,9)}async _mask(e="",t={}){const s=this._unmask(e),i=this._addMask(s),n=t.inputType==="deleteContentBackward";this.unmaskedValue=s,this.maskedValue=i;const l=await this._obfuscate(i),a=n?this._cachedSelection:s.length;this._manageCursor(l,a,t),this._isDelete=void 0}_obfuscate(e=""){return new Promise(t=>{const s=this.__getInput();let i=e.slice(0,7).replace(/[0-9]/g,"•")+e.slice(7,12);this._obfuscatedValue=i,this._value=this.unmaskedValue.slice(0,9),this.maskState==="visible"?s.value=e:s.value=this._obfuscatedValue,t(this.maskedValue)})}_toggleButtonText(){const e=this.renderRoot.querySelector("button");this.maskState==="hidden"?e.innerHTML="Show":this.maskState==="visible"&&(e.innerHTML="Hide")}__showHideToggle(){const e=this.__getInput();this.maskState==="visible"?(this.maskState="hidden",e.value=this._obfuscatedValue):(this.maskState="visible",e.value=this.maskedValue),this._toggleButtonText()}checkValidity(){return this._value.length<9?(this.setCustomValidity("Please enter in a valid ssn"),!1):(this.setCustomValidity(""),super.checkValidity())}}u("squid-ssn",r);export{r as S};
//# sourceMappingURL=squid-ssn-a76d08bc.js.map
