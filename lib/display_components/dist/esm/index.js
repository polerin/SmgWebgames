/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

class InjectionCue extends Event {
    constructor(token, callback) {
        super(InjectionCue.EVENT_NAME, { bubbles: true, composed: true });
        this.token = token;
        this.callback = callback;
    }
}
InjectionCue.EVENT_NAME = 'InjectionCueEvent';

class FindGameCue extends Event {
    constructor(player) {
        super(FindGameCue.EVENT_NAME);
        this.player = player;
    }
}
FindGameCue.EVENT_NAME = 'FindGameCue';

class LoadGameCue extends Event {
    constructor(game, player, gameInstance) {
        super(LoadGameCue.EVENT_NAME, { bubbles: true });
        this.game = game;
        this.player = player;
        this.gameInstance = gameInstance;
    }
}
LoadGameCue.EVENT_NAME = 'LoadGameCue';

class StartNewGameCue extends Event {
    constructor(player, game) {
        super(StartNewGameCue.EVENT_NAME);
        this.player = player;
        this.game = game;
    }
}
StartNewGameCue.EVENT_NAME = 'StartNewGameCue';

class SwapActivityCue extends Event {
    constructor(activityName) {
        super(SwapActivityCue.EVENT_NAME, { bubbles: true });
        this.activityName = activityName;
    }
}
SwapActivityCue.EVENT_NAME = 'SwapActivityCue';

class LoggedInEvent extends Event {
    constructor(player) {
        super(LoggedInEvent.EVENT_NAME, { bubbles: true, composed: true });
        this.player = player;
    }
}
LoggedInEvent.EVENT_NAME = 'LoggedInEvent';

class LogInCue extends Event {
    constructor(playerName) {
        super(LogInCue.EVENT_NAME, { bubbles: true, composed: true });
        this.playerName = playerName;
    }
}
LogInCue.EVENT_NAME = 'LogInCue';

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,e$4=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$4=Symbol(),o$6=new WeakMap;let n$6 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$6.set(s,t));}return t}toString(){return this.cssText}};const r$6=t=>new n$6("string"==typeof t?t:t+"",void 0,s$4),S$1=(s,o)=>{if(e$4)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$4=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$6(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$3,defineProperty:e$3,getOwnPropertyDescriptor:r$5,getOwnPropertyNames:h$3,getOwnPropertySymbols:o$5,getPrototypeOf:n$5}=Object,a$1=globalThis,c$3=a$1.trustedTypes,l$1=c$3?c$3.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$3=(t,s)=>!i$3(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$3};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$3(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$5(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$5(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$3(t),...o$5(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$4(s));}else void 0!==s&&i.push(c$4(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$3)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,i$2=t$2.trustedTypes,s$3=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$2="$lit$",h$2=`lit$${Math.random().toFixed(9).slice(2)}$`,o$4="?"+h$2,n$4=`<${o$4}>`,r$4=document,l=()=>r$4.createComment(""),c$2=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f$2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$4.createTreeWalker(r$4,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$3?s$3.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f$2;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$2?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f$2,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f$2:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f$2?s+n$4:d>=0?(o.push(a),s.slice(0,d)+e$2+s.slice(d)+h$2+x):s+h$2+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$2)){const i=v[a++],s=r.getAttribute(t).split(h$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h$2)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h$2),s=t.length-1;if(s>0){r.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$4)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$2,t+1));)d.push({type:7,index:c}),t+=h$2.length-1;}c++;}}static createElement(t,i){const s=r$4.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$2(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$4).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$4,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c$2(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c$2(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$4.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=S(this,t,i,0),o=!c$2(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c$2(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$2.litHtmlPolyfillSupport;j?.(N,R),(t$2.litHtmlVersions??=[]).push("3.2.1");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r$3 = class r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(s,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return T}};r$3._$litElement$=!0,r$3["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:r$3});const i$1=globalThis.litElementPolyfillSupport;i$1?.({LitElement:r$3});(globalThis.litElementVersions??=[]).push("4.1.1");

class BaseMenu extends r$3 {
    render() {
        return x `<h1> WELL EHELLOO</h1>`;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$3={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$3},r$2=(t=o$3,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$3(t){return (e,o)=>"object"==typeof o?r$2(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$1(r){return n$3({...r,state:!0,attribute:!1})}

let FindGameMenu = class FindGameMenu extends BaseMenu {
    constructor() {
        super(...arguments);
        this.gameList = [];
        this.devList = [];
    }
    render() {
        return x `<div class="menu_container menu_container--find-game">
                Blah balah blah
                <a @click=${(e) => this.handleStartGameClick(e)}>Start new game</a>
        </div>`;
    }
    handleStartGameClick(e) {
        if (!(e instanceof Event) || e.type !== 'click') {
            console.error("handleStartGameClick was supplied an invalid event object");
            return;
        }
        if (!this.player || !this.gameDefinition) {
            console.error("Attempting to dispatch a StartNewGameCue without player/game information");
            return;
        }
        this.dispatchEvent(new StartNewGameCue(this.player, this.gameDefinition));
    }
};
__decorate([
    n$3()
], FindGameMenu.prototype, "gameDefinition", void 0);
__decorate([
    n$3()
], FindGameMenu.prototype, "gameList", void 0);
__decorate([
    n$3()
], FindGameMenu.prototype, "devList", void 0);
__decorate([
    n$3()
], FindGameMenu.prototype, "player", void 0);
FindGameMenu = __decorate([
    t$1('find-game-menu')
], FindGameMenu);
var FindGameMenu$1 = FindGameMenu;

function token(options) {
    const normalized = typeof options === 'string' ? { description: options } : options;
    const symbol = (normalized === null || normalized === void 0 ? void 0 : normalized.key)
        ? Symbol.for(normalized.key)
        : Symbol(normalized === null || normalized === void 0 ? void 0 : normalized.description);
    return { symbol };
}

const WelcomeMenuToken = token('Welcome Menu Dependencies');

function injectDependencies(element, requestedToken) {
    const injectionPromise = new Promise((resolve, reject) => {
        try {
            element.dispatchEvent(new InjectionCue(requestedToken, resolve));
        }
        catch (e) {
            reject(e);
        }
    });
    return injectionPromise
        .then((deps) => element.inject(deps))
        .catch((e) => console.error("Unable to retrieve dependencies", e));
}
function injectionResolverFactory(container) {
    return (request) => {
        if (!(request instanceof InjectionCue)) {
            console.log('Non-injection request supplied to injection resolver');
            return;
        }
        console.log("received injection request", request);
        if (!request.token || !request.callback) {
            console.error("Improperly formatted injection request", { ...request });
            throw new Error("Unable to satisfy injection request: " + request.token);
        }
        const resolved = container.resolve(request.token);
        request.callback(resolved);
    };
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f$1=o=>void 0===o.strings;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$2=(i,t)=>{const e=i._$AN;if(void 0===e)return !1;for(const i of e)i._$AO?.(t,!1),s$2(i,t);return !0},o$2=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c$1(t);}};function h$1(i){void 0!==this._$AN?(o$2(this),this._$AM=i,r(this)):this._$AM=i;}function n$2(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s$2(r[i],!1),o$2(r[i]);else null!=r&&(s$2(r,!1),o$2(r));else s$2(this,i);}const c$1=i=>{i.type==t.CHILD&&(i._$AP??=n$2,i._$AQ??=h$1);};class f extends i{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s$2(this,i),o$2(this));}setValue(t){if(f$1(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=()=>new h;class h{}const o$1=new WeakMap,n$1=e$1(class extends f{render(i){return E}update(i,[s]){const e=s!==this.Y;return e&&void 0!==this.Y&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=s,this.ht=i.options?.host,this.rt(this.ct=i.element)),E}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const i=this.ht??globalThis;let s=o$1.get(i);void 0===s&&(s=new WeakMap,o$1.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t);}else this.Y.value=t;}get lt(){return "function"==typeof this.Y?o$1.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0);}reconnected(){this.rt(this.ct);}});

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let s$1 = class s extends Event{constructor(s,t,e){super("context-request",{bubbles:!0,composed:!0}),this.context=s,this.callback=t,this.subscribe=e??!1;}};

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n(n){return n}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s{constructor(t,s,i,h){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,s)=>{this.unsubscribe&&(this.unsubscribe!==s&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,s)),this.unsubscribe=s;},this.host=t,void 0!==s.context){const t=s;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1;}else this.context=s,this.callback=i,this.subscribe=h??!1;this.host.addController(this);}hostConnected(){this.dispatchRequest();}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0);}dispatchRequest(){this.host.dispatchEvent(new s$1(this.context,this.t,this.subscribe));}}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c({context:c,subscribe:e}){return (o,n)=>{"object"==typeof n?n.addInitializer((function(){new s(this,{context:c,callback:t=>{o.set.call(this,t);},subscribe:e});})):o.constructor.addInitializer((o=>{new s(o,{context:c,callback:t=>{o[n]=t;},subscribe:e});}));}}

const playerContext = n(Symbol('player instance'));

const gameContext = n('game instance');

let WelcomeMenu = class WelcomeMenu extends BaseMenu {
    constructor() {
        super(...arguments);
        this.controllerStatus = false;
        this.nameInput = e();
        this.handleLoginClick = (e) => {
            if (!(e instanceof Event) || e.type !== 'click') {
                return;
            }
            e.preventDefault();
            if (this.playerName !== undefined) {
                this.dispatchEvent(new LogInCue(this.playerName));
            }
        };
    }
    get playerName() {
        return this.nameInput.value?.value;
    }
    ;
    connectedCallback() {
        super.connectedCallback();
        injectDependencies(this, WelcomeMenuToken);
    }
    inject(deps) {
        if (this.controller !== undefined) {
            console.warn('Attempting to call inject on a welcome menu that already has its dependencies');
            return;
        }
        this.controller = deps.welcomeController;
        // end of deps assignment, address any lifecycle callbacks
        this.controller?.addHost(this);
        this.controller?.hostConnected?.();
        this.controllerStatus = (this.controller !== undefined);
    }
    ;
    render() {
        if (this.controllerStatus === false) {
            return x `<div>No Menu Controller</div>`;
        }
        if (this.currentPlayer === undefined) {
            return this.renderLoginMenu();
        }
        return this.renderWelcomeChoices();
    }
    renderLoginMenu() {
        return x `<div class="menu_container menu_container--welcome">
            <input type="text" ${n$1(this.nameInput)} placeholder="Player Name"></input>
            <button value="login" @click=${(e) => this.handleLoginClick(e)}>Login</button>
        </div>`;
    }
    renderWelcomeChoices() {
        return x `<div>Currently logged in as: ${this.currentPlayer?.name}</div>`;
    }
    firstUpdated(_changedProperties) {
        this.nameInput.value?.focus();
    }
};
__decorate([
    r$1()
], WelcomeMenu.prototype, "controllerStatus", void 0);
__decorate([
    c({ context: playerContext, subscribe: true }),
    r$1()
], WelcomeMenu.prototype, "currentPlayer", void 0);
WelcomeMenu = __decorate([
    t$1('welcome-menu')
], WelcomeMenu);
var WelcomeMenu$1 = WelcomeMenu;

class BaseInjectableController {
    constructor() {
        this.abortControllers = [];
    }
    addHost(host) {
        if (this.host !== undefined) {
            throw new Error('Attempting to add host to a controller that already has one');
        }
        this.host = host;
        this.host.addController(this);
        this.addListeners();
    }
    hostConnected() {
        /** no-op override to implement */
    }
    hostDisconnected() {
        this.host?.removeController(this);
        this.removeListeners();
        this.host = undefined;
    }
    /**
     * Utility method, eases registration of event listeners to be removed later
     *
     * This registers the listener and adds an abort signal if one has not been previously specified
     */
    addEventListener(eventName, handler, options = {}) {
        if (this.host === undefined) {
            console.warn("Attempting to register listener without a host");
            return;
        }
        let constructedOptions;
        if (typeof options === 'boolean') {
            constructedOptions = { capture: options };
        }
        else {
            constructedOptions = { ...options };
        }
        if (constructedOptions.signal === undefined) {
            const abortController = new AbortController();
            constructedOptions.signal = abortController.signal;
            this.abortControllers.push();
        }
        this.host.addEventListener(eventName, handler, constructedOptions);
    }
    addListeners() {
        /** no-op, override to implement  */
    }
    /**
     * By default this method only removes listeners registered with this class's addEventListener()
     */
    removeListeners() {
        while (this.abortControllers.length > 0) {
            const controller = this.abortControllers.pop();
            controller?.abort();
        }
    }
}

class WelcomeController extends BaseInjectableController {
    constructor() {
        super(...arguments);
        this.handleLogInCue = (e) => {
            if (!(e instanceof LogInCue)) {
                return;
            }
            // Temp, replace when we actually have a log in flow
            this.host?.dispatchEvent(new LoggedInEvent({ name: e.playerName }));
        };
    }
    addListeners() {
        this.addEventListener(LogInCue.EVENT_NAME, this.handleLogInCue);
    }
}

function registerMenuElements() {
    console.log('registering multipipe menu elements');
    WelcomeMenu$1.prototype;
    FindGameMenu$1.prototype;
}

class BaseGameContainer extends r$3 {
}
__decorate([
    n$3()
], BaseGameContainer.prototype, "jsPath", void 0);

const MultipipeGameContainerToken = token('Multipipe Game Container Dependencies');
const MultipipeGameControllerToken = token('Multipipe Game Controller');
const MultipipeGameControllerConfigToken = token('Multipipe Game Controller configuration');

let MultipipeGameContainer = class MultipipeGameContainer extends BaseGameContainer {
    connectedCallback() {
        super.connectedCallback();
        injectDependencies(this, MultipipeGameContainerToken);
    }
    inject(deps) {
        this.controller = deps.multipipeGameController;
        this.controller.addHost(this);
        this.controller.hostConnected();
    }
    render() {
        return x `<canvas id="multipipe-game-canvas"></canvas>`;
    }
};
MultipipeGameContainer = __decorate([
    t$1('mutipipe-game-container')
], MultipipeGameContainer);
var MultipipeGameContainer$1 = MultipipeGameContainer;

class BaseGameController {
    addHost(host) {
        if (this.host !== undefined) {
            throw new Error('Attempting to add host to an already assigned controller');
        }
        if (!(host instanceof BaseGameContainer)) {
            throw new Error('Attempting to add a non-container host to the game controller');
        }
        // @todo this could do with more checking honestly.  Problem is circular references
        this.host = host;
    }
    hostConnected() {
        this.loadGameJs();
    }
    loadGameJs() {
        if (this.host?.jsPath) {
            this.addGameScriptTag(this.host.jsPath);
            return;
        }
        this.addGameScriptTag(this.config.gameJsPath);
    }
    addGameScriptTag(path) {
        const gameJsScript = document.createElement('script');
        gameJsScript.src = path;
        gameJsScript.type = 'module';
        console.info('Appending game js script tag to head', path);
        document.head.appendChild(gameJsScript);
    }
    buildConfig(config) {
        this.config = { ...this.config, ...config };
    }
}

class MultipipeGameController extends BaseGameController {
    constructor(config) {
        super();
        this.config = {
            gameJsPath: 'game/index.js',
        };
        this.buildConfig(config);
    }
    hostConnected() {
        super.hostConnected();
    }
}

function registerGameContainerElements() {
    MultipipeGameContainer$1.prototype;
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*o(o,f){if(void 0!==o){let i=0;for(const t of o)yield f(t,i++);}}

let GameList = class GameList extends r$3 {
    constructor() {
        super(...arguments);
        this.gameList = [];
        this.devList = [];
    }
    render() {
        return x `${this.renderNormalGames()} ${this.renderDevGames()}`;
    }
    renderNormalGames() {
        if (this.gameList.length === 0) {
            return x `<h3>No games found, <a @click=${(e) => this.handleStartGameClick(e)}>start one?</a></h3>`;
        }
        return x `<h3>Current Games</h3>
            <dl>${o(this.gameList, this.renderListItem)}</dl>`;
    }
    renderDevGames() {
        if (this.devList.length === 0) {
            return x ``;
        }
        return x `<h3>Dev Games</h3>
            <dl>${o(this.devList, this.renderListItem)}</dl>`;
    }
    renderListItem(itemDetails) {
        return x `
            <dt>${itemDetails.gameName} - (${itemDetails.players.length} players)</dt>
            <dd><a @click=${() => this.handleJoinGameClick(itemDetails)}>Join Game</a></dd>`;
    }
    handleStartGameClick(e) {
        if (!(e instanceof Event) || e.type !== 'click') {
            console.error("handleStartGameClick was supplied an invalid event object");
            return;
        }
        if (!this.player || !this.gameDefinition) {
            console.error("Attempting to dispatch a StartNewGameCue without player/game information");
            return;
        }
        this.dispatchEvent(new StartNewGameCue(this.player, this.gameDefinition));
    }
    handleJoinGameClick(gameInfo) {
        if (!this.gameDefinition || !this.player) {
            console.error('Not enough information to fire join game event');
            return;
        }
        const loadCue = new LoadGameCue(this.gameDefinition.slug, this.player, gameInfo);
        this.dispatchEvent(loadCue);
    }
};
__decorate([
    n$3()
], GameList.prototype, "gameDefinition", void 0);
__decorate([
    n$3()
], GameList.prototype, "gameList", void 0);
__decorate([
    n$3()
], GameList.prototype, "devList", void 0);
__decorate([
    n$3()
], GameList.prototype, "player", void 0);
GameList = __decorate([
    t$1('game-list')
], GameList);
var GameList$1 = GameList;

function registerListElements() {
    console.log('registering list elements');
    GameList$1.prototype;
}

const FindGameActivityToken = token('Find Game Activity Dependencies');

class FindGameActivityController extends BaseInjectableController {
    addListeners() {
        this.addEventListener(StartNewGameCue.EVENT_NAME, this.handleStartNewGameCue);
        this.addEventListener(LoadGameCue.EVENT_NAME, this.handleJoinGameCue);
    }
    handleStartNewGameCue(_e) {
        this.host?.dispatchEvent(new SwapActivityCue('join_game'));
    }
    handleJoinGameCue(e) {
        this.host?.dispatchEvent(new SwapActivityCue('join_game'));
    }
}

class BaseActivityContainer extends r$3 {
    render() {
        return x `<h1> WELL EHELLOO</h1>`;
    }
}

let FindGameActivity = class FindGameActivity extends BaseActivityContainer {
    constructor() {
        super(...arguments);
        this.controllerStatus = false;
        this.gameList = [];
    }
    connectedCallback() {
        super.connectedCallback();
        injectDependencies(this, FindGameActivityToken);
    }
    inject(deps) {
        if (this.controller !== undefined) {
            console.warn('Attempting to call inject on a find game activity container that already has its dependencies');
            return;
        }
        this.controller = deps.controller;
        // end of deps assignment, address any lifecycle callbacks
        this.controller?.addHost(this);
        this.controller?.hostConnected();
        this.controllerStatus = (this.controller !== undefined);
    }
    ;
    render() {
        if (this.controllerStatus === false) {
            return x ``;
        }
        if (this.gameDefinition === undefined) {
            return x `No Game definition supplied`;
        }
        if (this.player === undefined) {
            return x `No Player information supplied`;
        }
        return x `<div class="activity_container activity_container--find-game related-to--${this.gameDefinition.slug}">
            <h3>Find a game: ${this.gameDefinition.slug}</h3> 
            <find-game-menu .player=${this.player} .gameDefinition=${this.gameDefinition}></find-game-menu>
            <game-list .player=${this.player} .gameDefinition=${this.gameDefinition} .gameList=${this.gameList}></game-list>
        </div>`;
    }
};
__decorate([
    n$3()
], FindGameActivity.prototype, "gameDefinition", void 0);
__decorate([
    n$3()
], FindGameActivity.prototype, "player", void 0);
__decorate([
    r$1()
], FindGameActivity.prototype, "controllerStatus", void 0);
__decorate([
    r$1()
], FindGameActivity.prototype, "gameList", void 0);
FindGameActivity = __decorate([
    t$1('find-game-activity')
], FindGameActivity);
var FindGameActivity$1 = FindGameActivity;

function registerActivityContainers() {
    console.info("registering activity containers");
    FindGameActivity$1.prototype;
}

const RegisteredActivities = ['welcome', 'find_game', 'join_game', 'start_game'];

/**
 * Is the subject one of the registered activities
 */
function isRegisteredActivity(subject) {
    return typeof subject === 'string' && RegisteredActivities.includes(subject);
}

function registerAllComponents() {
    registerMenuElements();
    registerListElements();
    registerGameContainerElements();
    registerActivityContainers();
}

export { BaseActivityContainer, BaseGameContainer, BaseGameController, BaseInjectableController, BaseMenu, FindGameActivity$1 as FindGameActivity, FindGameActivityController, FindGameActivityToken, FindGameCue, FindGameMenu$1 as FindGameMenu, InjectionCue, LoadGameCue, LogInCue, LoggedInEvent, MultipipeGameContainer$1 as MultipipeGameContainer, MultipipeGameContainerToken, MultipipeGameController, MultipipeGameControllerConfigToken, MultipipeGameControllerToken, RegisteredActivities, StartNewGameCue, SwapActivityCue, WelcomeController, WelcomeMenu$1 as WelcomeMenu, WelcomeMenuToken, gameContext, injectDependencies, injectionResolverFactory, isRegisteredActivity, playerContext, registerActivityContainers, registerAllComponents, registerGameContainerElements, registerListElements, registerMenuElements };
//# sourceMappingURL=index.js.map
