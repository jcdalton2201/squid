import{i as a,x as s}from"./lit-element-85df8e35.js";import{S as l}from"./squid-checkbox-31a0a936.js";import{d as c}from"./defineSquidElement-344f2f43.js";import"./squid-input-base-b6539e8b.js";import"./baseElement-edd97de1.js";import"./findParentForm-f0d0b1da.js";import"./squidEvents-397fab83.js";var d=a`#container .toggle-wrapper{display:inline-block;height:12px;position:relative;width:60px}#container .label-wrapper{color:var(--font-color-default,#4d4d4d);font-size:.75rem;letter-spacing:.5px;margin-bottom:var(--space-inset-xs,.25rem .25rem .25rem .25rem);opacity:.9;position:relative;vertical-align:middle}#container label{text-transform:capitalize}#container input{height:0;opacity:0;width:0}#container input:focus+.simpleToggleSwitch{box-shadow:0 0 1px 2px #0d8bf2}#container input:disabled+.simpleToggleSwitch{cursor:not-allowed}#container input:read-only+.simpleToggleSwitch{cursor:not-allowed}#container .simpleToggleSwitch{background-color:grey;border-radius:34px;bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0;-webkit-transition:.4s;transition:.4s}#container .simpleToggleSwitch:before{background-color:#4d4d4d;border-radius:50%;bottom:-6px;content:"";height:24px;left:4px;position:absolute;-webkit-transition:.4s;transition:.4s;width:24px}#container .checkbox_toggle:checked{opacity:1}#container .checkbox_toggle:checked+.simpleToggleSwitch{background-color:var(--color-primary-default,#0e307a)}#container .checkbox_toggle:checked+.simpleToggleSwitch:before{background-color:var(--color-primary-default,#0e307a);filter:brightness(80%) saturate(80%);-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}`;class n extends l{static get styles(){return[d]}constructor(){super(),this.checked=!1}render(){return s` <div id="container" data-ref="wrapper">
            <label
                class="label-wrapper"
                for="squid-toggle-${this._uid}"
                data-ref="label"
                ><slot></slot>${this._showDisabled}
                <p class='toggle-wrapper'>
                    <input
                        class="checkbox_toggle"
                        roll="switch"
                        type="checkbox"
                        name="squid-toggle"
                        value="${this.value}"
                        id="squid-toggle-${this._uid}"
                        data-ref="toggle"
                        ?disabled=${this.disabled}
                        ?required=${this.required}
                        ?readonly=${this.readonly}
                        ?autofocus=${this.autofocus}
                        ?compact=${this.compact}
                        ?checked=${this.checked}
                        aria-checked=${this.checked}
                        @change=${this.__onChange}
                        aria-describedby="helpers-${this._uid}"
                    />

                    <span
                        class="simpleToggleSwitch"
                        aria-hidden="true"
                        data-ref="side"
                    >
                    </span>
                </p>
            </label>
            <squid-helpers id="helpers-${this._uid}" data-ref="helpers"></squid-helpers>
        </div>`}}c("squid-toggle",n);const x={title:"input"},p=t=>`<squid-toggle ${t.checked?"checked":""} ${t.disabled?"disabled":""}>${t.label}</squid-toggle>`,e=p.bind({});e.args={label:"Toggle Alerts",checked:!1,disabled:!1};e.story={name:"toggle",parameters:{argTypes:{}}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"args => {\n  return `<squid-toggle ${args.checked ? 'checked' : ''} ${args.disabled ? 'disabled' : ''}>${args.label}</squid-toggle>`;\n}",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const w=["toggle"];export{w as __namedExportsOrder,x as default,e as toggle};
//# sourceMappingURL=squid-toggle.stories-946089bb.js.map
