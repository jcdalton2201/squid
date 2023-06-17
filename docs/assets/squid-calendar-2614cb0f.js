import{B as l}from"./baseElement-edd97de1.js";import{i as o,x as i}from"./lit-element-85df8e35.js";import{d as c}from"./defineSquidElement-344f2f43.js";import{e as s}from"./squidEvents-397fab83.js";const n=["Sun","Mon","Tue","Wes","Thur","Fri","Sat"],r=[{name:"January",abbr:"Jan"},{name:"February",abbr:"Feb"},{name:"March",abbr:"Mar"},{name:"April",abbr:"Apr"},{name:"May",abbr:"May"},{name:"June",abbr:"Jun"},{name:"July",abbr:"Jul"},{name:"August",abbr:"Aug"},{name:"September",abbr:"Sep"},{name:"October",abbr:"Oct"},{name:"November",abbr:"Nov"},{name:"December",abbr:"Dec"}];var d=o`.container{display:grid;grid-template-columns:repeat(7,1fr);max-width:200px}.container .header{background-color:var(--calendar-color-background-default,#1448b8);color:var(--calendar-color-default,#fff);grid-column:1/-1;padding:8px}.container .left-nav{grid-column:1/2;justify-content:flex-start;padding:4px}.container .left-nav,.container .middle-nav{background-color:#ccc;cursor:pointer;display:flex}.container .middle-nav{align-items:center;font-size:.9rem;grid-column:2/-2;justify-content:center}.container .right-nav{background-color:#ccc;cursor:pointer;display:flex;grid-column:-1/-2;justify-content:flex-end;padding:.25rem}.container .close-buttons{display:flex;grid-column:1/-1;justify-content:center}.container .close-buttons a{color:inherit;margin:0 4px;text-decoration:none}.container .day,.container .title{font-size:.9rem;text-align:center}.container .day{cursor:pointer;padding:16% 0}.container .day.selected-date{background-color:#148514;border-radius:50%;color:#fff}.container .year{cursor:pointer;font-size:.9rem;padding:16% 0;text-align:center}.container .year.even{grid-column:2/4}.container .year.odd{grid-column:4/6}.container .hide{display:none}`;class h extends l{static get styles(){return[d]}static get properties(){return{value:{type:String,reflect:!0,converter:{toAttribute(e){return e.toLocaleDateString()},fromAttribute(e){return e?new Date(e):null}}}}}constructor(){super(),this.bindMethods(["__generateMonth","__increment","__decrease","__selectDate","__removeSelectDate","__generateYears","__toggleYear","__setYear","submit","close"]);const e=Date.now();this.currentDate=new Date(e),this.displayMonth=new Date(e),this.displayMonth.setDate(1)}firstUpdated(){this.value&&(this.displayMonth=new Date(this.value.getTime()),this.requestUpdate())}shouldUpdate(e){return e.has("value")&&this.value&&(this.displayMonth=new Date(this.value.getTime()),this.requestUpdate()),e}render(){return i`
            <div data-ref="container" class="container">
                <div class="header">
                    ${this.value?n[this.value.getDay()]:n[this.displayMonth.getDay()]},
                    ${this.value?r[this.value.getMonth()].abbr:r[this.displayMonth.getMonth()].abbr}
                    ${this.value?this.value.getDate():this.currentDate.getDate()}
                    ${this.value?this.value.getFullYear():this.currentDate.getFullYear()}
                </div>
                <div class="left-nav"  @click=${this.__decrease}>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="chevron-left"
                        role="img"
                        width="14px"
                        height="14px"
                        viewBox="0 0 256 512"
                        class="chevron-left"
                    >
                        <path
                            fill="currentColor"
                            d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                            class=""
                        ></path>
                    </svg>
                </div>
                <div class="middle-nav" @click=${this.__toggleYear}>
                    ${r[this.displayMonth.getMonth()].name.toUpperCase()}
                    ${this.displayMonth.getFullYear()}
                </div>
                <div class="right-nav" @click=${this.__increment}>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="chevron-right"
                        role="img"
                        width="14px"
                        height="14px"
                        viewBox="0 0 256 512"
                        class="chevron-right"
                    >
                        <path
                            fill="currentColor"
                            d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                            class=""
                        ></path>
                    </svg>
                </div>
                <div class="title">SU</div>
                <div class="title">MO</div>
                <div class="title">TU</div>
                <div class="title">WE</div>
                <div class="title">TH</div>
                <div class="title">FR</div>
                <div class="title">SA</div>
                ${this.__generateMonth().map((e,t)=>i` <div
                        @click=${this.__selectDate}
                        class="day ${this.isYear?"hide":""} ${this.value&&this.value.getDate()===t+1&&this.value.getMonth()===this.displayMonth.getMonth()&&this.value.getFullYear()===this.displayMonth.getFullYear()?"selected-date":""}"
                        style="${t===0?"grid-column-start:"+(e+1):""}"
                    >
                        ${t+1}
                    </div>`)}
                ${this.__generateYears().map((e,t)=>i`
                        <div
                            @click=${this.__setYear}
                            class="year ${t%2?"odd":"even"} ${this.isYear?"":"hide"}"
                        >
                            ${e}
                        </div>
                    `)}
                <div class="close-buttons">
                    <a href="javascript:void(0)" @click=${this.close}>CLOSE</a>
                    <a href="javascript:void(0)" @click=${this.submit}>OK</a>
                </div>
            </div>
        `}close(){s("date-close",null,this)}submit(){s("date-submit",null,this)}__setYear(e){const t=parseInt(e.currentTarget.innerText);this.displayMonth.setFullYear(t),this.isYear=!1,this.requestUpdate()}__generateYears(){let e=-3;const t=[];for(let a=e;a<5;a++)t.push(this.displayMonth.getFullYear()+a);return t}__generateMonth(){const e=new Date(this.displayMonth.getFullYear(),this.displayMonth.getMonth()+1,0).getDate(),t=[];for(let a=1;a<=e;a++)this.displayMonth.setDate(a),t.push(this.displayMonth.getDay());return this.displayMonth.setDate(1),t}__increment(){this.isYear?this.displayMonth.setFullYear(this.displayMonth.getFullYear()+8):(this.displayMonth.setMonth(this.displayMonth.getMonth()+1),this.__removeSelectDate()),this.requestUpdate()}__decrease(){this.isYear?this.displayMonth.setFullYear(this.displayMonth.getFullYear()-8):(this.displayMonth.setMonth(this.displayMonth.getMonth()-1),this.__removeSelectDate()),this.requestUpdate()}__selectDate(e){this.__removeSelectDate(),e.currentTarget.classList.add("selected-date");const t=parseInt(e.currentTarget.innerText);this.value=new Date(this.displayMonth.getTime()),this.value.setDate(t),this.requestUpdate(),s("date-selected",{value:this.getAttribute("value")},this)}__removeSelectDate(){this.renderRoot.querySelector(".selected-date")&&this.renderRoot.querySelector(".selected-date").classList.remove("selected-date")}__toggleYear(){this.isYear=!this.isYear,this.requestUpdate()}}c("squid-calendar",h);
//# sourceMappingURL=squid-calendar-2614cb0f.js.map
