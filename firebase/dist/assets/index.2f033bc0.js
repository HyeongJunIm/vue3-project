const o0=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),sp={},a0="/",ke=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${a0}${r}`,r in sp)return;sp[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":o0,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jh(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Ve={},Mi=[],Bt=()=>{},l0=()=>!1,Vl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xh=t=>t.startsWith("onUpdate:"),tt=Object.assign,Zh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},c0=Object.prototype.hasOwnProperty,be=(t,e)=>c0.call(t,e),ie=Array.isArray,Fi=t=>Ml(t)==="[object Map]",k_=t=>Ml(t)==="[object Set]",he=t=>typeof t=="function",Ue=t=>typeof t=="string",ds=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",x_=t=>(Le(t)||he(t))&&he(t.then)&&he(t.catch),O_=Object.prototype.toString,Ml=t=>O_.call(t),u0=t=>Ml(t).slice(8,-1),D_=t=>Ml(t)==="[object Object]",ed=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fs=Jh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},h0=/-(\w)/g,xn=Fl(t=>t.replace(h0,(e,n)=>n?n.toUpperCase():"")),d0=/\B([A-Z])/g,pi=Fl(t=>t.replace(d0,"-$1").toLowerCase()),Ul=Fl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Kc=Fl(t=>t?`on${Ul(t)}`:""),Tr=(t,e)=>!Object.is(t,e),Gc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ya=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},f0=t=>{const e=parseFloat(t);return isNaN(e)?t:e},p0=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let op;const N_=()=>op||(op=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function No(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ue(r)?y0(r):No(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Ue(t)||Le(t))return t}const m0=/;(?![^(]*\))/g,g0=/:([^]+)/,_0=/\/\*[^]*?\*\//g;function y0(t){const e={};return t.replace(_0,"").split(m0).forEach(n=>{if(n){const r=n.split(g0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $l(t){let e="";if(Ue(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=$l(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function dU(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ue(e)&&(t.class=$l(e)),n&&(t.style=No(n)),t}const v0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",w0=Jh(v0);function L_(t){return!!t||t===""}const fU=t=>Ue(t)?t:t==null?"":ie(t)||Le(t)&&(t.toString===O_||!he(t.toString))?JSON.stringify(t,V_,2):String(t),V_=(t,e)=>e&&e.__v_isRef?V_(t,e.value):Fi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[Qc(r,s)+" =>"]=i,n),{})}:k_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qc(n))}:ds(e)?Qc(e):Le(e)&&!ie(e)&&!D_(e)?String(e):e,Qc=(t,e="")=>{var n;return ds(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ut;class M_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function F_(t){return new M_(t)}function E0(t,e=Ut){e&&e.active&&e.effects.push(t)}function td(){return Ut}function U_(t){Ut&&Ut.cleanups.push(t)}let Gr;class nd{constructor(e,n,r,i){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,E0(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,mi();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(T0(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),gi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=_r,n=Gr;try{return _r=!0,Gr=this,this._runnings++,ap(this),this.fn()}finally{lp(this),this._runnings--,Gr=n,_r=e}}stop(){var e;this.active&&(ap(this),lp(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function T0(t){return t.value}function ap(t){t._trackId++,t._depsLength=0}function lp(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)$_(t.deps[e],t);t.deps.length=t._depsLength}}function $_(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let _r=!0,zu=0;const B_=[];function mi(){B_.push(_r),_r=!1}function gi(){const t=B_.pop();_r=t===void 0?!0:t}function rd(){zu++}function id(){for(zu--;!zu&&Hu.length;)Hu.shift()()}function q_(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&$_(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Hu=[];function j_(t,e,n){rd();for(const r of t.keys()){let i;r._dirtyLevel<e&&(i!=null?i:i=t.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(i!=null?i:i=t.get(r)===r._trackId)&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Hu.push(r.scheduler)))}id()}const z_=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ja=new WeakMap,Qr=Symbol(""),Wu=Symbol("");function Vt(t,e,n){if(_r&&Gr){let r=Ja.get(t);r||Ja.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=z_(()=>r.delete(n))),q_(Gr,i)}}function jn(t,e,n,r,i,s){const o=Ja.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ie(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!ds(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ie(t)?ed(n)&&a.push(o.get("length")):(a.push(o.get(Qr)),Fi(t)&&a.push(o.get(Wu)));break;case"delete":ie(t)||(a.push(o.get(Qr)),Fi(t)&&a.push(o.get(Wu)));break;case"set":Fi(t)&&a.push(o.get(Qr));break}rd();for(const l of a)l&&j_(l,4);id()}function I0(t,e){var n;return(n=Ja.get(t))==null?void 0:n.get(e)}const b0=Jh("__proto__,__v_isRef,__isVue"),H_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ds)),cp=A0();function A0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=we(this);for(let s=0,o=this.length;s<o;s++)Vt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(we)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mi(),rd();const r=we(this)[e].apply(this,n);return id(),gi(),r}}),t}function R0(t){const e=we(this);return Vt(e,"has",t),e.hasOwnProperty(t)}class W_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?U0:Y_:s?Q_:G_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!i){if(o&&be(cp,n))return Reflect.get(cp,n,r);if(n==="hasOwnProperty")return R0}const a=Reflect.get(e,n,r);return(ds(n)?H_.has(n):b0(n))||(i||Vt(e,"get",n),s)?a:ze(a)?o&&ed(n)?a:a.value:Le(a)?i?ql(a):cn(a):a}}class K_ extends W_{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const l=Ji(s);if(!Xa(r)&&!Ji(r)&&(s=we(s),r=we(r)),!ie(e)&&ze(s)&&!ze(r))return l?!1:(s.value=r,!0)}const o=ie(e)&&ed(n)?Number(n)<e.length:be(e,n),a=Reflect.set(e,n,r,i);return e===we(i)&&(o?Tr(r,s)&&jn(e,"set",n,r):jn(e,"add",n,r)),a}deleteProperty(e,n){const r=be(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&jn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!ds(n)||!H_.has(n))&&Vt(e,"has",n),r}ownKeys(e){return Vt(e,"iterate",ie(e)?"length":Qr),Reflect.ownKeys(e)}}class S0 extends W_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const P0=new K_,C0=new S0,k0=new K_(!0),sd=t=>t,Bl=t=>Reflect.getPrototypeOf(t);function ua(t,e,n=!1,r=!1){t=t.__v_raw;const i=we(t),s=we(e);n||(Tr(e,s)&&Vt(i,"get",e),Vt(i,"get",s));const{has:o}=Bl(i),a=r?sd:n?ld:to;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function ha(t,e=!1){const n=this.__v_raw,r=we(n),i=we(t);return e||(Tr(t,i)&&Vt(r,"has",t),Vt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function da(t,e=!1){return t=t.__v_raw,!e&&Vt(we(t),"iterate",Qr),Reflect.get(t,"size",t)}function up(t){t=we(t);const e=we(this);return Bl(e).has.call(e,t)||(e.add(t),jn(e,"add",t,t)),this}function hp(t,e){e=we(e);const n=we(this),{has:r,get:i}=Bl(n);let s=r.call(n,t);s||(t=we(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Tr(e,o)&&jn(n,"set",t,e):jn(n,"add",t,e),this}function dp(t){const e=we(this),{has:n,get:r}=Bl(e);let i=n.call(e,t);i||(t=we(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&jn(e,"delete",t,void 0),s}function fp(){const t=we(this),e=t.size!==0,n=t.clear();return e&&jn(t,"clear",void 0,void 0),n}function fa(t,e){return function(r,i){const s=this,o=s.__v_raw,a=we(o),l=e?sd:t?ld:to;return!t&&Vt(a,"iterate",Qr),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function pa(t,e,n){return function(...r){const i=this.__v_raw,s=we(i),o=Fi(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?sd:e?ld:to;return!e&&Vt(s,"iterate",l?Wu:Qr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function er(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function x0(){const t={get(s){return ua(this,s)},get size(){return da(this)},has:ha,add:up,set:hp,delete:dp,clear:fp,forEach:fa(!1,!1)},e={get(s){return ua(this,s,!1,!0)},get size(){return da(this)},has:ha,add:up,set:hp,delete:dp,clear:fp,forEach:fa(!1,!0)},n={get(s){return ua(this,s,!0)},get size(){return da(this,!0)},has(s){return ha.call(this,s,!0)},add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear"),forEach:fa(!0,!1)},r={get(s){return ua(this,s,!0,!0)},get size(){return da(this,!0)},has(s){return ha.call(this,s,!0)},add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear"),forEach:fa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=pa(s,!1,!1),n[s]=pa(s,!0,!1),e[s]=pa(s,!1,!0),r[s]=pa(s,!0,!0)}),[t,n,e,r]}const[O0,D0,N0,L0]=x0();function od(t,e){const n=e?t?L0:N0:t?D0:O0;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(be(n,i)&&i in r?n:r,i,s)}const V0={get:od(!1,!1)},M0={get:od(!1,!0)},F0={get:od(!0,!1)},G_=new WeakMap,Q_=new WeakMap,Y_=new WeakMap,U0=new WeakMap;function $0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function B0(t){return t.__v_skip||!Object.isExtensible(t)?0:$0(u0(t))}function cn(t){return Ji(t)?t:ad(t,!1,P0,V0,G_)}function J_(t){return ad(t,!1,k0,M0,Q_)}function ql(t){return ad(t,!0,C0,F0,Y_)}function ad(t,e,n,r,i){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=B0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function zn(t){return Ji(t)?zn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ji(t){return!!(t&&t.__v_isReadonly)}function Xa(t){return!!(t&&t.__v_isShallow)}function X_(t){return zn(t)||Ji(t)}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function Sr(t){return Object.isExtensible(t)&&Ya(t,"__v_skip",!0),t}const to=t=>Le(t)?cn(t):t,ld=t=>Le(t)?ql(t):t;class Z_{constructor(e,n,r,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new nd(()=>e(this._value),()=>Us(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=we(this);return(!e._cacheable||e.effect.dirty)&&Tr(e._value,e._value=e.effect.run())&&Us(e,4),cd(e),e.effect._dirtyLevel>=2&&Us(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function q0(t,e,n=!1){let r,i;const s=he(t);return s?(r=t,i=Bt):(r=t.get,i=t.set),new Z_(r,i,s||!i,n)}function cd(t){var e;_r&&Gr&&(t=we(t),q_(Gr,(e=t.dep)!=null?e:t.dep=z_(()=>t.dep=void 0,t instanceof Z_?t:void 0)))}function Us(t,e=4,n){t=we(t);const r=t.dep;r&&j_(r,e)}function ze(t){return!!(t&&t.__v_isRef===!0)}function _e(t){return ey(t,!1)}function Za(t){return ey(t,!0)}function ey(t,e){return ze(t)?t:new j0(t,e)}class j0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:we(e),this._value=n?e:to(e)}get value(){return cd(this),this._value}set value(e){const n=this.__v_isShallow||Xa(e)||Ji(e);e=n?e:we(e),Tr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:to(e),Us(this,4))}}function Ot(t){return ze(t)?t.value:t}const z0={get:(t,e,n)=>Ot(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return ze(i)&&!ze(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function ty(t){return zn(t)?t:new Proxy(t,z0)}class H0{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>cd(this),()=>Us(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function W0(t){return new H0(t)}function K0(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=ry(t,n);return e}class G0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return I0(we(this._object),this._key)}}class Q0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ny(t,e,n){return ze(t)?t:he(t)?new Q0(t):Le(t)&&arguments.length>1?ry(t,e,n):_e(t)}function ry(t,e,n){const r=t[e];return ze(r)?r:new G0(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yr(t,e,n,r){try{return r?t(...r):t()}catch(i){Lo(i,e,n)}}function Jt(t,e,n,r){if(he(t)){const s=yr(t,e,n,r);return s&&x_(s)&&s.catch(o=>{Lo(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Jt(t[s],e,n,r));return i}function Lo(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){yr(l,null,10,[t,o,a]);return}}Y0(t,n,i,r)}function Y0(t,e,n,r=!0){console.error(t)}let no=!1,Ku=!1;const Tt=[];let En=0;const Ui=[];let or=null,Mr=0;const iy=Promise.resolve();let ud=null;function hn(t){const e=ud||iy;return t?e.then(this?t.bind(this):t):e}function J0(t){let e=En+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,i=Tt[r],s=ro(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function jl(t){(!Tt.length||!Tt.includes(t,no&&t.allowRecurse?En+1:En))&&(t.id==null?Tt.push(t):Tt.splice(J0(t.id),0,t),sy())}function sy(){!no&&!Ku&&(Ku=!0,ud=iy.then(ay))}function X0(t){const e=Tt.indexOf(t);e>En&&Tt.splice(e,1)}function Z0(t){ie(t)?Ui.push(...t):(!or||!or.includes(t,t.allowRecurse?Mr+1:Mr))&&Ui.push(t),sy()}function pp(t,e,n=no?En+1:0){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r()}}}function oy(t){if(Ui.length){const e=[...new Set(Ui)].sort((n,r)=>ro(n)-ro(r));if(Ui.length=0,or){or.push(...e);return}for(or=e,Mr=0;Mr<or.length;Mr++)or[Mr]();or=null,Mr=0}}const ro=t=>t.id==null?1/0:t.id,eb=(t,e)=>{const n=ro(t)-ro(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ay(t){Ku=!1,no=!0,Tt.sort(eb);const e=Bt;try{for(En=0;En<Tt.length;En++){const n=Tt[En];n&&n.active!==!1&&yr(n,null,14)}}finally{En=0,Tt.length=0,oy(),no=!1,ud=null,(Tt.length||Ui.length)&&ay()}}function tb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ve;d&&(i=n.map(f=>Ue(f)?f.trim():f)),h&&(i=n.map(f0))}let a,l=r[a=Kc(e)]||r[a=Kc(xn(e))];!l&&s&&(l=r[a=Kc(pi(e))]),l&&Jt(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jt(c,t,6,i)}}function ly(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!he(t)){const l=c=>{const u=ly(c,e,!0);u&&(a=!0,tt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Le(t)&&r.set(t,null),null):(ie(s)?s.forEach(l=>o[l]=null):tt(o,s),Le(t)&&r.set(t,o),o)}function zl(t,e){return!t||!Vl(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,pi(e))||be(t,e))}let et=null,cy=null;function el(t){const e=et;return et=t,cy=t&&t.type.__scopeId||null,e}function je(t,e=et,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Pp(-1);const s=el(e);let o;try{o=t(...i)}finally{el(s),r._d&&Pp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Yc(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:v}=t;let _,w;const y=el(t);try{if(n.shapeFlag&4){const T=i||r,b=T;_=wn(u.call(b,T,h,s,f,d,p)),w=l}else{const T=e;_=wn(T.length>1?T(s,{attrs:l,slots:a,emit:c}):T(s,null)),w=e.props?l:nb(l)}}catch(T){js.length=0,Lo(T,t,1),_=ae(Xt)}let E=_;if(w&&v!==!1){const T=Object.keys(w),{shapeFlag:b}=E;T.length&&b&7&&(o&&T.some(Xh)&&(w=rb(w,o)),E=Ir(E,w))}return n.dirs&&(E=Ir(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),_=E,el(y),_}const nb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vl(n))&&((e||(e={}))[n]=t[n]);return e},rb=(t,e)=>{const n={};for(const r in t)(!Xh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ib(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?mp(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!zl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?mp(r,o,c):!0:!!o;return!1}function mp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!zl(n,s))return!0}return!1}function sb({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const hd="components";function uy(t,e){return dy(hd,t,!0,e)||t}const hy=Symbol.for("v-ndc");function ob(t){return Ue(t)?dy(hd,t,!1)||t:t||hy}function dy(t,e,n=!0,r=!1){const i=et||rt;if(i){const s=i.type;if(t===hd){const a=eA(s,!1);if(a&&(a===e||a===xn(e)||a===Ul(xn(e))))return s}const o=gp(i[t]||s[t],e)||gp(i.appContext[t],e);return!o&&r?s:o}}function gp(t,e){return t&&(t[e]||t[xn(e)]||t[Ul(xn(e))])}const ab=t=>t.__isSuspense;function lb(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):Z0(t)}const cb=Symbol.for("v-scx"),ub=()=>Ct(cb);function pU(t,e){return dd(t,null,e)}const ma={};function xe(t,e,n){return dd(t,e,n)}function dd(t,e,{immediate:n,deep:r,flush:i,once:s,onTrack:o,onTrigger:a}=Ve){if(e&&s){const k=e;e=(...N)=>{k(...N),b()}}const l=rt,c=k=>r===!0?k:$r(k,r===!1?1:void 0);let u,h=!1,d=!1;if(ze(t)?(u=()=>t.value,h=Xa(t)):zn(t)?(u=()=>c(t),h=!0):ie(t)?(d=!0,h=t.some(k=>zn(k)||Xa(k)),u=()=>t.map(k=>{if(ze(k))return k.value;if(zn(k))return c(k);if(he(k))return yr(k,l,2)})):he(t)?e?u=()=>yr(t,l,2):u=()=>(f&&f(),Jt(t,l,3,[p])):u=Bt,e&&r){const k=u;u=()=>$r(k())}let f,p=k=>{f=E.onStop=()=>{yr(k,l,4),f=E.onStop=void 0}},v;if(Fo)if(p=Bt,e?n&&Jt(e,l,3,[u(),d?[]:void 0,p]):u(),i==="sync"){const k=ub();v=k.__watcherHandles||(k.__watcherHandles=[])}else return Bt;let _=d?new Array(t.length).fill(ma):ma;const w=()=>{if(!(!E.active||!E.dirty))if(e){const k=E.run();(r||h||(d?k.some((N,A)=>Tr(N,_[A])):Tr(k,_)))&&(f&&f(),Jt(e,l,3,[k,_===ma?void 0:d&&_[0]===ma?[]:_,p]),_=k)}else E.run()};w.allowRecurse=!!e;let y;i==="sync"?y=w:i==="post"?y=()=>xt(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),y=()=>jl(w));const E=new nd(u,Bt,y),T=td(),b=()=>{E.stop(),T&&Zh(T.effects,E)};return e?n?w():_=E.run():i==="post"?xt(E.run.bind(E),l&&l.suspense):E.run(),v&&v.push(b),b}function hb(t,e,n){const r=this.proxy,i=Ue(t)?t.includes(".")?fy(r,t):()=>r[t]:t.bind(r,r);let s;he(e)?s=e:(s=e.handler,n=e);const o=Mo(this),a=dd(i,s.bind(r),n);return o(),a}function fy(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function $r(t,e,n=0,r){if(!Le(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ze(t))$r(t.value,e,n,r);else if(ie(t))for(let i=0;i<t.length;i++)$r(t[i],e,n,r);else if(k_(t)||Fi(t))t.forEach(i=>{$r(i,e,n,r)});else if(D_(t))for(const i in t)$r(t[i],e,n,r);return t}function $i(t,e){if(et===null)return t;const n=Jl(et)||et.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,l=Ve]=e[i];s&&(he(s)&&(s={mounted:s,updated:s}),s.deep&&$r(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Or(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(mi(),Jt(l,n,8,[t.el,a,t,e]),gi())}}const ar=Symbol("_leaveCb"),ga=Symbol("_enterCb");function py(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hn(()=>{t.isMounted=!0}),Mt(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],my={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},db={name:"BaseTransition",props:my,setup(t,{slots:e}){const n=Ge(),r=py();return()=>{const i=e.default&&fd(e.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){for(const d of i)if(d.type!==Xt){s=d;break}}const o=we(t),{mode:a}=o;if(r.isLeaving)return Jc(s);const l=_p(s);if(!l)return Jc(s);const c=io(l,o,r,n);so(l,c);const u=n.subTree,h=u&&_p(u);if(h&&h.type!==Xt&&!Fr(l,h)){const d=io(h,o,r,n);if(so(h,d),a==="out-in")return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Jc(s);a==="in-out"&&l.type!==Xt&&(d.delayLeave=(f,p,v)=>{const _=gy(r,h);_[String(h.key)]=h,f[ar]=()=>{p(),f[ar]=void 0,delete c.delayedLeave},c.delayedLeave=v})}return s}}},fb=db;function gy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function io(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:v,onAppear:_,onAfterAppear:w,onAppearCancelled:y}=e,E=String(t.key),T=gy(n,t),b=(A,D)=>{A&&Jt(A,r,9,D)},k=(A,D)=>{const L=D[1];b(A,D),ie(A)?A.every(z=>z.length<=1)&&L():A.length<=1&&L()},N={mode:s,persisted:o,beforeEnter(A){let D=a;if(!n.isMounted)if(i)D=v||a;else return;A[ar]&&A[ar](!0);const L=T[E];L&&Fr(t,L)&&L.el[ar]&&L.el[ar](),b(D,[A])},enter(A){let D=l,L=c,z=u;if(!n.isMounted)if(i)D=_||l,L=w||c,z=y||u;else return;let F=!1;const re=A[ga]=H=>{F||(F=!0,H?b(z,[A]):b(L,[A]),N.delayedLeave&&N.delayedLeave(),A[ga]=void 0)};D?k(D,[A,re]):re()},leave(A,D){const L=String(t.key);if(A[ga]&&A[ga](!0),n.isUnmounting)return D();b(h,[A]);let z=!1;const F=A[ar]=re=>{z||(z=!0,D(),re?b(p,[A]):b(f,[A]),A[ar]=void 0,T[L]===t&&delete T[L])};T[L]=t,d?k(d,[A,F]):F()},clone(A){return io(A,e,n,r)}};return N}function Jc(t){if(Vo(t))return t=Ir(t),t.children=null,t}function _p(t){return Vo(t)?t.children?t.children[0]:void 0:t}function so(t,e){t.shapeFlag&6&&t.component?so(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fd(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===$t?(o.patchFlag&128&&i++,r=r.concat(fd(o.children,e,a))):(e||o.type!==Xt)&&r.push(a!=null?Ir(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Hl(t,e){return he(t)?(()=>tt({name:t.name},e,{setup:t}))():t}const $s=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Xc(t){he(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,d()),d=()=>{let f;return l||(f=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((v,_)=>{a(p,()=>v(h()),()=>_(p),u+1)});throw p}).then(p=>f!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return Hl({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const f=rt;if(c)return()=>Zc(c,f);const p=y=>{l=null,Lo(y,f,13,!r)};if(o&&f.suspense||Fo)return d().then(y=>()=>Zc(y,f)).catch(y=>(p(y),()=>r?ae(r,{error:y}):null));const v=_e(!1),_=_e(),w=_e(!!i);return i&&setTimeout(()=>{w.value=!1},i),s!=null&&setTimeout(()=>{if(!v.value&&!_.value){const y=new Error(`Async component timed out after ${s}ms.`);p(y),_.value=y}},s),d().then(()=>{v.value=!0,f.parent&&Vo(f.parent.vnode)&&(f.parent.effect.dirty=!0,jl(f.parent.update))}).catch(y=>{p(y),_.value=y}),()=>{if(v.value&&c)return Zc(c,f);if(_.value&&r)return ae(r,{error:_.value});if(n&&!w.value)return ae(n)}}})}function Zc(t,e){const{ref:n,props:r,children:i,ce:s}=e.vnode,o=ae(t,r,i);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Vo=t=>t.type.__isKeepAlive;function pb(t,e){_y(t,"a",e)}function pd(t,e){_y(t,"da",e)}function _y(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Wl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Vo(i.parent.vnode)&&mb(r,e,n,i),i=i.parent}}function mb(t,e,n,r){const i=Wl(e,t,r,!0);Kl(()=>{Zh(r[e],i)},n)}function Wl(t,e,n=rt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;mi();const a=Mo(n),l=Jt(e,n,t,o);return a(),gi(),l});return r?i.unshift(s):i.push(s),s}}const Yn=t=>(e,n=rt)=>(!Fo||t==="sp")&&Wl(t,(...r)=>e(...r),n),gb=Yn("bm"),Hn=Yn("m"),_b=Yn("bu"),yy=Yn("u"),Mt=Yn("bum"),Kl=Yn("um"),yb=Yn("sp"),vb=Yn("rtg"),wb=Yn("rtc");function vy(t,e=rt){Wl("ec",t,e)}function mU(t,e,n,r){let i;const s=n&&n[r];if(ie(t)||Ue(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Le(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function gU(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(ie(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return t}function _U(t,e,n={},r,i){if(et.isCE||et.parent&&$s(et.parent)&&et.parent.isCE)return e!=="default"&&(n.name=e),ae("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),an();const o=s&&wy(s(n)),a=ln($t,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function wy(t){return t.some(e=>nl(e)?!(e.type===Xt||e.type===$t&&!wy(e.children)):!0)?t:null}const Gu=t=>t?Oy(t)?Jl(t)||t.proxy:Gu(t.parent):null,Bs=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gu(t.parent),$root:t=>Gu(t.root),$emit:t=>t.emit,$options:t=>md(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,jl(t.update)}),$nextTick:t=>t.n||(t.n=hn.bind(t.proxy)),$watch:t=>hb.bind(t)}),eu=(t,e)=>t!==Ve&&!t.__isScriptSetup&&be(t,e),Eb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(eu(r,e))return o[e]=1,r[e];if(i!==Ve&&be(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&be(c,e))return o[e]=3,s[e];if(n!==Ve&&be(n,e))return o[e]=4,n[e];Qu&&(o[e]=0)}}const u=Bs[e];let h,d;if(u)return e==="$attrs"&&Vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ve&&be(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,be(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return eu(i,e)?(i[e]=n,!0):r!==Ve&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Ve&&be(t,o)||eu(e,o)||(a=s[0])&&be(a,o)||be(r,o)||be(Bs,o)||be(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yp(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qu=!0;function Tb(t){const e=md(t),n=t.proxy,r=t.ctx;Qu=!1,e.beforeCreate&&vp(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:v,deactivated:_,beforeDestroy:w,beforeUnmount:y,destroyed:E,unmounted:T,render:b,renderTracked:k,renderTriggered:N,errorCaptured:A,serverPrefetch:D,expose:L,inheritAttrs:z,components:F,directives:re,filters:H}=e;if(c&&Ib(c,r,null),o)for(const me in o){const de=o[me];he(de)&&(r[me]=de.bind(n))}if(i){const me=i.call(n,n);Le(me)&&(t.data=cn(me))}if(Qu=!0,s)for(const me in s){const de=s[me],Be=he(de)?de.bind(n,n):he(de.get)?de.get.bind(n,n):Bt,ut=!he(de)&&he(de.set)?de.set.bind(n):Bt,ht=M({get:Be,set:ut});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>ht.value,set:qe=>ht.value=qe})}if(a)for(const me in a)Ey(a[me],r,n,me);if(l){const me=he(l)?l.call(n):l;Reflect.ownKeys(me).forEach(de=>{qi(de,me[de])})}u&&vp(u,t,"c");function ee(me,de){ie(de)?de.forEach(Be=>me(Be.bind(n))):de&&me(de.bind(n))}if(ee(gb,h),ee(Hn,d),ee(_b,f),ee(yy,p),ee(pb,v),ee(pd,_),ee(vy,A),ee(wb,k),ee(vb,N),ee(Mt,y),ee(Kl,T),ee(yb,D),ie(L))if(L.length){const me=t.exposed||(t.exposed={});L.forEach(de=>{Object.defineProperty(me,de,{get:()=>n[de],set:Be=>n[de]=Be})})}else t.exposed||(t.exposed={});b&&t.render===Bt&&(t.render=b),z!=null&&(t.inheritAttrs=z),F&&(t.components=F),re&&(t.directives=re)}function Ib(t,e,n=Bt){ie(t)&&(t=Yu(t));for(const r in t){const i=t[r];let s;Le(i)?"default"in i?s=Ct(i.from||r,i.default,!0):s=Ct(i.from||r):s=Ct(i),ze(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function vp(t,e,n){Jt(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ey(t,e,n,r){const i=r.includes(".")?fy(n,r):()=>n[r];if(Ue(t)){const s=e[t];he(s)&&xe(i,s)}else if(he(t))xe(i,t.bind(n));else if(Le(t))if(ie(t))t.forEach(s=>Ey(s,e,n,r));else{const s=he(t.handler)?t.handler.bind(n):e[t.handler];he(s)&&xe(i,s,t)}}function md(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>tl(l,c,o,!0)),tl(l,e,o)),Le(e)&&s.set(e,l),l}function tl(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&tl(t,s,n,!0),i&&i.forEach(o=>tl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=bb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const bb={data:wp,props:Ep,emits:Ep,methods:Ps,computed:Ps,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Ps,directives:Ps,watch:Rb,provide:wp,inject:Ab};function wp(t,e){return e?t?function(){return tt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function Ab(t,e){return Ps(Yu(t),Yu(e))}function Yu(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Ps(t,e){return t?tt(Object.create(null),t,e):e}function Ep(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:tt(Object.create(null),yp(t),yp(e!=null?e:{})):e}function Rb(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function Ty(){return{app:null,config:{isNativeTag:l0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sb=0;function Pb(t,e){return function(r,i=null){he(r)||(r=tt({},r)),i!=null&&!Le(i)&&(i=null);const s=Ty(),o=new WeakSet;let a=!1;const l=s.app={_uid:Sb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:nA,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&he(c.install)?(o.add(c),c.install(l,...u)):he(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const d=ae(r,i);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Jl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Bi;Bi=l;try{return c()}finally{Bi=u}}};return l}}let Bi=null;function qi(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function Ct(t,e,n=!1){const r=rt||et;if(r||Bi){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Bi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}function Cb(){return!!(rt||et||Bi)}function kb(t,e,n,r=!1){const i={},s={};Ya(s,Ql,1),t.propsDefaults=Object.create(null),Iy(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:J_(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function xb(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=we(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(zl(t.emitsOptions,d))continue;const f=e[d];if(l)if(be(s,d))f!==s[d]&&(s[d]=f,c=!0);else{const p=xn(d);i[p]=Ju(l,a,p,f,t,!1)}else f!==s[d]&&(s[d]=f,c=!0)}}}else{Iy(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!be(e,h)&&((u=pi(h))===h||!be(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ju(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!be(e,h)&&!0)&&(delete s[h],c=!0)}c&&jn(t,"set","$attrs")}function Iy(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fs(l))continue;const c=e[l];let u;i&&be(i,u=xn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:zl(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=we(n),c=a||Ve;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Ju(i,l,h,c[h],t,!be(c,h))}}return o}function Ju(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=be(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=Mo(i);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===pi(n))&&(r=!0))}return r}function by(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!he(t)){const u=h=>{l=!0;const[d,f]=by(h,e,!0);tt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Le(t)&&r.set(t,Mi),Mi;if(ie(s))for(let u=0;u<s.length;u++){const h=xn(s[u]);Tp(h)&&(o[h]=Ve)}else if(s)for(const u in s){const h=xn(u);if(Tp(h)){const d=s[u],f=o[h]=ie(d)||he(d)?{type:d}:tt({},d);if(f){const p=Ap(Boolean,f.type),v=Ap(String,f.type);f[0]=p>-1,f[1]=v<0||p<v,(p>-1||be(f,"default"))&&a.push(h)}}}const c=[o,a];return Le(t)&&r.set(t,c),c}function Tp(t){return t[0]!=="$"&&!Fs(t)}function Ip(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function bp(t,e){return Ip(t)===Ip(e)}function Ap(t,e){return ie(e)?e.findIndex(n=>bp(n,t)):he(e)&&bp(e,t)?0:-1}const Ay=t=>t[0]==="_"||t==="$stable",gd=t=>ie(t)?t.map(wn):[wn(t)],Ob=(t,e,n)=>{if(e._n)return e;const r=je((...i)=>gd(e(...i)),n);return r._c=!1,r},Ry=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Ay(i))continue;const s=t[i];if(he(s))e[i]=Ob(i,s,r);else if(s!=null){const o=gd(s);e[i]=()=>o}}},Sy=(t,e)=>{const n=gd(e);t.slots.default=()=>n},Db=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=we(e),Ya(e,"_",n)):Ry(e,t.slots={})}else t.slots={},e&&Sy(t,e);Ya(t.slots,Ql,1)},Nb=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(tt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Ry(e,i)),o=e}else e&&(Sy(t,e),o={default:1});if(s)for(const a in i)!Ay(a)&&o[a]==null&&delete i[a]};function Xu(t,e,n,r,i=!1){if(ie(t)){t.forEach((d,f)=>Xu(d,e&&(ie(e)?e[f]:e),n,r,i));return}if($s(r)&&!i)return;const s=r.shapeFlag&4?Jl(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ve?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ue(c)?(u[c]=null,be(h,c)&&(h[c]=null)):ze(c)&&(c.value=null)),he(l))yr(l,a,12,[o,u]);else{const d=Ue(l),f=ze(l);if(d||f){const p=()=>{if(t.f){const v=d?be(h,l)?h[l]:u[l]:l.value;i?ie(v)&&Zh(v,s):ie(v)?v.includes(s)||v.push(s):d?(u[l]=[s],be(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,be(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,xt(p,n)):p()}}}const xt=lb;function Lb(t){return Vb(t)}function Vb(t,e){const n=N_();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Bt,insertStaticContent:p}=t,v=(m,g,I,x=null,C=null,$=null,Q=void 0,U=null,q=!!g.dynamicChildren)=>{if(m===g)return;m&&!Fr(m,g)&&(x=R(m),qe(m,C,$,!0),m=null),g.patchFlag===-2&&(q=!1,g.dynamicChildren=null);const{type:V,ref:Y,shapeFlag:te}=g;switch(V){case Gl:_(m,g,I,x);break;case Xt:w(m,g,I,x);break;case Na:m==null&&y(g,I,x,Q);break;case $t:F(m,g,I,x,C,$,Q,U,q);break;default:te&1?b(m,g,I,x,C,$,Q,U,q):te&6?re(m,g,I,x,C,$,Q,U,q):(te&64||te&128)&&V.process(m,g,I,x,C,$,Q,U,q,J)}Y!=null&&C&&Xu(Y,m&&m.ref,$,g||m,!g)},_=(m,g,I,x)=>{if(m==null)r(g.el=a(g.children),I,x);else{const C=g.el=m.el;g.children!==m.children&&c(C,g.children)}},w=(m,g,I,x)=>{m==null?r(g.el=l(g.children||""),I,x):g.el=m.el},y=(m,g,I,x)=>{[m.el,m.anchor]=p(m.children,g,I,x,m.el,m.anchor)},E=({el:m,anchor:g},I,x)=>{let C;for(;m&&m!==g;)C=d(m),r(m,I,x),m=C;r(g,I,x)},T=({el:m,anchor:g})=>{let I;for(;m&&m!==g;)I=d(m),i(m),m=I;i(g)},b=(m,g,I,x,C,$,Q,U,q)=>{g.type==="svg"?Q="svg":g.type==="math"&&(Q="mathml"),m==null?k(g,I,x,C,$,Q,U,q):D(m,g,C,$,Q,U,q)},k=(m,g,I,x,C,$,Q,U)=>{let q,V;const{props:Y,shapeFlag:te,transition:Z,dirs:ce}=m;if(q=m.el=o(m.type,$,Y&&Y.is,Y),te&8?u(q,m.children):te&16&&A(m.children,q,null,x,C,tu(m,$),Q,U),ce&&Or(m,null,x,"created"),N(q,m,m.scopeId,Q,x),Y){for(const Ce in Y)Ce!=="value"&&!Fs(Ce)&&s(q,Ce,null,Y[Ce],$,m.children,x,C,ge);"value"in Y&&s(q,"value",null,Y.value,$),(V=Y.onVnodeBeforeMount)&&vn(V,x,m)}ce&&Or(m,null,x,"beforeMount");const ye=Mb(C,Z);ye&&Z.beforeEnter(q),r(q,g,I),((V=Y&&Y.onVnodeMounted)||ye||ce)&&xt(()=>{V&&vn(V,x,m),ye&&Z.enter(q),ce&&Or(m,null,x,"mounted")},C)},N=(m,g,I,x,C)=>{if(I&&f(m,I),x)for(let $=0;$<x.length;$++)f(m,x[$]);if(C){let $=C.subTree;if(g===$){const Q=C.vnode;N(m,Q,Q.scopeId,Q.slotScopeIds,C.parent)}}},A=(m,g,I,x,C,$,Q,U,q=0)=>{for(let V=q;V<m.length;V++){const Y=m[V]=U?lr(m[V]):wn(m[V]);v(null,Y,g,I,x,C,$,Q,U)}},D=(m,g,I,x,C,$,Q)=>{const U=g.el=m.el;let{patchFlag:q,dynamicChildren:V,dirs:Y}=g;q|=m.patchFlag&16;const te=m.props||Ve,Z=g.props||Ve;let ce;if(I&&Dr(I,!1),(ce=Z.onVnodeBeforeUpdate)&&vn(ce,I,g,m),Y&&Or(g,m,I,"beforeUpdate"),I&&Dr(I,!0),V?L(m.dynamicChildren,V,U,I,x,tu(g,C),$):Q||de(m,g,U,null,I,x,tu(g,C),$,!1),q>0){if(q&16)z(U,g,te,Z,I,x,C);else if(q&2&&te.class!==Z.class&&s(U,"class",null,Z.class,C),q&4&&s(U,"style",te.style,Z.style,C),q&8){const ye=g.dynamicProps;for(let Ce=0;Ce<ye.length;Ce++){const Fe=ye[Ce],ot=te[Fe],rn=Z[Fe];(rn!==ot||Fe==="value")&&s(U,Fe,ot,rn,C,m.children,I,x,ge)}}q&1&&m.children!==g.children&&u(U,g.children)}else!Q&&V==null&&z(U,g,te,Z,I,x,C);((ce=Z.onVnodeUpdated)||Y)&&xt(()=>{ce&&vn(ce,I,g,m),Y&&Or(g,m,I,"updated")},x)},L=(m,g,I,x,C,$,Q)=>{for(let U=0;U<g.length;U++){const q=m[U],V=g[U],Y=q.el&&(q.type===$t||!Fr(q,V)||q.shapeFlag&70)?h(q.el):I;v(q,V,Y,null,x,C,$,Q,!0)}},z=(m,g,I,x,C,$,Q)=>{if(I!==x){if(I!==Ve)for(const U in I)!Fs(U)&&!(U in x)&&s(m,U,I[U],null,Q,g.children,C,$,ge);for(const U in x){if(Fs(U))continue;const q=x[U],V=I[U];q!==V&&U!=="value"&&s(m,U,V,q,Q,g.children,C,$,ge)}"value"in x&&s(m,"value",I.value,x.value,Q)}},F=(m,g,I,x,C,$,Q,U,q)=>{const V=g.el=m?m.el:a(""),Y=g.anchor=m?m.anchor:a("");let{patchFlag:te,dynamicChildren:Z,slotScopeIds:ce}=g;ce&&(U=U?U.concat(ce):ce),m==null?(r(V,I,x),r(Y,I,x),A(g.children||[],I,Y,C,$,Q,U,q)):te>0&&te&64&&Z&&m.dynamicChildren?(L(m.dynamicChildren,Z,I,C,$,Q,U),(g.key!=null||C&&g===C.subTree)&&_d(m,g,!0)):de(m,g,I,Y,C,$,Q,U,q)},re=(m,g,I,x,C,$,Q,U,q)=>{g.slotScopeIds=U,m==null?g.shapeFlag&512?C.ctx.activate(g,I,x,Q,q):H(g,I,x,C,$,Q,q):se(m,g,q)},H=(m,g,I,x,C,$,Q)=>{const U=m.component=Qb(m,x,C);if(Vo(m)&&(U.ctx.renderer=J),Yb(U),U.asyncDep){if(C&&C.registerDep(U,ee),!m.el){const q=U.subTree=ae(Xt);w(null,q,g,I)}}else ee(U,m,g,I,C,$,Q)},se=(m,g,I)=>{const x=g.component=m.component;if(ib(m,g,I))if(x.asyncDep&&!x.asyncResolved){me(x,g,I);return}else x.next=g,X0(x.update),x.effect.dirty=!0,x.update();else g.el=m.el,x.vnode=g},ee=(m,g,I,x,C,$,Q)=>{const U=()=>{if(m.isMounted){let{next:Y,bu:te,u:Z,parent:ce,vnode:ye}=m;{const bi=Py(m);if(bi){Y&&(Y.el=ye.el,me(m,Y,Q)),bi.asyncDep.then(()=>{m.isUnmounted||U()});return}}let Ce=Y,Fe;Dr(m,!1),Y?(Y.el=ye.el,me(m,Y,Q)):Y=ye,te&&Gc(te),(Fe=Y.props&&Y.props.onVnodeBeforeUpdate)&&vn(Fe,ce,Y,ye),Dr(m,!0);const ot=Yc(m),rn=m.subTree;m.subTree=ot,v(rn,ot,h(rn.el),R(rn),m,C,$),Y.el=ot.el,Ce===null&&sb(m,ot.el),Z&&xt(Z,C),(Fe=Y.props&&Y.props.onVnodeUpdated)&&xt(()=>vn(Fe,ce,Y,ye),C)}else{let Y;const{el:te,props:Z}=g,{bm:ce,m:ye,parent:Ce}=m,Fe=$s(g);if(Dr(m,!1),ce&&Gc(ce),!Fe&&(Y=Z&&Z.onVnodeBeforeMount)&&vn(Y,Ce,g),Dr(m,!0),te&&Oe){const ot=()=>{m.subTree=Yc(m),Oe(te,m.subTree,m,C,null)};Fe?g.type.__asyncLoader().then(()=>!m.isUnmounted&&ot()):ot()}else{const ot=m.subTree=Yc(m);v(null,ot,I,x,m,C,$),g.el=ot.el}if(ye&&xt(ye,C),!Fe&&(Y=Z&&Z.onVnodeMounted)){const ot=g;xt(()=>vn(Y,Ce,ot),C)}(g.shapeFlag&256||Ce&&$s(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&m.a&&xt(m.a,C),m.isMounted=!0,g=I=x=null}},q=m.effect=new nd(U,Bt,()=>jl(V),m.scope),V=m.update=()=>{q.dirty&&q.run()};V.id=m.uid,Dr(m,!0),V()},me=(m,g,I)=>{g.component=m;const x=m.vnode.props;m.vnode=g,m.next=null,xb(m,g.props,x,I),Nb(m,g.children,I),mi(),pp(m),gi()},de=(m,g,I,x,C,$,Q,U,q=!1)=>{const V=m&&m.children,Y=m?m.shapeFlag:0,te=g.children,{patchFlag:Z,shapeFlag:ce}=g;if(Z>0){if(Z&128){ut(V,te,I,x,C,$,Q,U,q);return}else if(Z&256){Be(V,te,I,x,C,$,Q,U,q);return}}ce&8?(Y&16&&ge(V,C,$),te!==V&&u(I,te)):Y&16?ce&16?ut(V,te,I,x,C,$,Q,U,q):ge(V,C,$,!0):(Y&8&&u(I,""),ce&16&&A(te,I,x,C,$,Q,U,q))},Be=(m,g,I,x,C,$,Q,U,q)=>{m=m||Mi,g=g||Mi;const V=m.length,Y=g.length,te=Math.min(V,Y);let Z;for(Z=0;Z<te;Z++){const ce=g[Z]=q?lr(g[Z]):wn(g[Z]);v(m[Z],ce,I,null,C,$,Q,U,q)}V>Y?ge(m,C,$,!0,!1,te):A(g,I,x,C,$,Q,U,q,te)},ut=(m,g,I,x,C,$,Q,U,q)=>{let V=0;const Y=g.length;let te=m.length-1,Z=Y-1;for(;V<=te&&V<=Z;){const ce=m[V],ye=g[V]=q?lr(g[V]):wn(g[V]);if(Fr(ce,ye))v(ce,ye,I,null,C,$,Q,U,q);else break;V++}for(;V<=te&&V<=Z;){const ce=m[te],ye=g[Z]=q?lr(g[Z]):wn(g[Z]);if(Fr(ce,ye))v(ce,ye,I,null,C,$,Q,U,q);else break;te--,Z--}if(V>te){if(V<=Z){const ce=Z+1,ye=ce<Y?g[ce].el:x;for(;V<=Z;)v(null,g[V]=q?lr(g[V]):wn(g[V]),I,ye,C,$,Q,U,q),V++}}else if(V>Z)for(;V<=te;)qe(m[V],C,$,!0),V++;else{const ce=V,ye=V,Ce=new Map;for(V=ye;V<=Z;V++){const Ft=g[V]=q?lr(g[V]):wn(g[V]);Ft.key!=null&&Ce.set(Ft.key,V)}let Fe,ot=0;const rn=Z-ye+1;let bi=!1,np=0;const vs=new Array(rn);for(V=0;V<rn;V++)vs[V]=0;for(V=ce;V<=te;V++){const Ft=m[V];if(ot>=rn){qe(Ft,C,$,!0);continue}let yn;if(Ft.key!=null)yn=Ce.get(Ft.key);else for(Fe=ye;Fe<=Z;Fe++)if(vs[Fe-ye]===0&&Fr(Ft,g[Fe])){yn=Fe;break}yn===void 0?qe(Ft,C,$,!0):(vs[yn-ye]=V+1,yn>=np?np=yn:bi=!0,v(Ft,g[yn],I,null,C,$,Q,U,q),ot++)}const rp=bi?Fb(vs):Mi;for(Fe=rp.length-1,V=rn-1;V>=0;V--){const Ft=ye+V,yn=g[Ft],ip=Ft+1<Y?g[Ft+1].el:x;vs[V]===0?v(null,yn,I,ip,C,$,Q,U,q):bi&&(Fe<0||V!==rp[Fe]?ht(yn,I,ip,2):Fe--)}}},ht=(m,g,I,x,C=null)=>{const{el:$,type:Q,transition:U,children:q,shapeFlag:V}=m;if(V&6){ht(m.component.subTree,g,I,x);return}if(V&128){m.suspense.move(g,I,x);return}if(V&64){Q.move(m,g,I,J);return}if(Q===$t){r($,g,I);for(let te=0;te<q.length;te++)ht(q[te],g,I,x);r(m.anchor,g,I);return}if(Q===Na){E(m,g,I);return}if(x!==2&&V&1&&U)if(x===0)U.beforeEnter($),r($,g,I),xt(()=>U.enter($),C);else{const{leave:te,delayLeave:Z,afterLeave:ce}=U,ye=()=>r($,g,I),Ce=()=>{te($,()=>{ye(),ce&&ce()})};Z?Z($,ye,Ce):Ce()}else r($,g,I)},qe=(m,g,I,x=!1,C=!1)=>{const{type:$,props:Q,ref:U,children:q,dynamicChildren:V,shapeFlag:Y,patchFlag:te,dirs:Z}=m;if(U!=null&&Xu(U,null,I,m,!0),Y&256){g.ctx.deactivate(m);return}const ce=Y&1&&Z,ye=!$s(m);let Ce;if(ye&&(Ce=Q&&Q.onVnodeBeforeUnmount)&&vn(Ce,g,m),Y&6)pe(m.component,I,x);else{if(Y&128){m.suspense.unmount(I,x);return}ce&&Or(m,null,g,"beforeUnmount"),Y&64?m.type.remove(m,g,I,C,J,x):V&&($!==$t||te>0&&te&64)?ge(V,g,I,!1,!0):($===$t&&te&384||!C&&Y&16)&&ge(q,g,I),x&&_t(m)}(ye&&(Ce=Q&&Q.onVnodeUnmounted)||ce)&&xt(()=>{Ce&&vn(Ce,g,m),ce&&Or(m,null,g,"unmounted")},I)},_t=m=>{const{type:g,el:I,anchor:x,transition:C}=m;if(g===$t){Kt(I,x);return}if(g===Na){T(m);return}const $=()=>{i(I),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(m.shapeFlag&1&&C&&!C.persisted){const{leave:Q,delayLeave:U}=C,q=()=>Q(I,$);U?U(m.el,$,q):q()}else $()},Kt=(m,g)=>{let I;for(;m!==g;)I=d(m),i(m),m=I;i(g)},pe=(m,g,I)=>{const{bum:x,scope:C,update:$,subTree:Q,um:U}=m;x&&Gc(x),C.stop(),$&&($.active=!1,qe(Q,m,g,I)),U&&xt(U,g),xt(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ge=(m,g,I,x=!1,C=!1,$=0)=>{for(let Q=$;Q<m.length;Q++)qe(m[Q],g,I,x,C)},R=m=>m.shapeFlag&6?R(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el);let W=!1;const P=(m,g,I)=>{m==null?g._vnode&&qe(g._vnode,null,null,!0):v(g._vnode||null,m,g,null,null,null,I),W||(W=!0,pp(),oy(),W=!1),g._vnode=m},J={p:v,um:qe,m:ht,r:_t,mt:H,mc:A,pc:de,pbc:L,n:R,o:t};let Ee,Oe;return e&&([Ee,Oe]=e(J)),{render:P,hydrate:Ee,createApp:Pb(P,Ee)}}function tu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Mb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function _d(t,e,n=!1){const r=t.children,i=e.children;if(ie(r)&&ie(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=lr(i[s]),a.el=o.el),n||_d(o,a)),a.type===Gl&&(a.el=o.el)}}function Fb(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Py(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Py(e)}const Ub=t=>t.__isTeleport,qs=t=>t&&(t.disabled||t.disabled===""),Rp=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Sp=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Zu=(t,e)=>{const n=t&&t.to;return Ue(n)?e?e(n):null:n},$b={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:v,createComment:_}}=c,w=qs(e.props);let{shapeFlag:y,children:E,dynamicChildren:T}=e;if(t==null){const b=e.el=v(""),k=e.anchor=v("");f(b,n,r),f(k,n,r);const N=e.target=Zu(e.props,p),A=e.targetAnchor=v("");N&&(f(A,N),o==="svg"||Rp(N)?o="svg":(o==="mathml"||Sp(N))&&(o="mathml"));const D=(L,z)=>{y&16&&u(E,L,z,i,s,o,a,l)};w?D(n,k):N&&D(N,A)}else{e.el=t.el;const b=e.anchor=t.anchor,k=e.target=t.target,N=e.targetAnchor=t.targetAnchor,A=qs(t.props),D=A?n:k,L=A?b:N;if(o==="svg"||Rp(k)?o="svg":(o==="mathml"||Sp(k))&&(o="mathml"),T?(d(t.dynamicChildren,T,D,i,s,o,a),_d(t,e,!0)):l||h(t,e,D,L,i,s,o,a,!1),w)A?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):_a(e,n,b,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const z=e.target=Zu(e.props,p);z&&_a(e,z,null,c,0)}else A&&_a(e,k,N,c,1)}Cy(e)},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&s(u),o&&s(c),a&16){const f=o||!qs(d);for(let p=0;p<l.length;p++){const v=l[p];i(v,e,n,f,!!v.dynamicChildren)}}},move:_a,hydrate:Bb};function _a(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=s===2;if(h&&r(o,e,n),(!h||qs(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&r(a,e,n)}function Bb(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Zu(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(qs(e.props))e.anchor=c(o(t),e,a(t),n,r,i,s),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,i,s)}Cy(e)}return e.anchor&&o(e.anchor)}const qb=$b;function Cy(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const $t=Symbol.for("v-fgt"),Gl=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Na=Symbol.for("v-stc"),js=[];let un=null;function an(t=!1){js.push(un=t?null:[])}function jb(){js.pop(),un=js[js.length-1]||null}let oo=1;function Pp(t){oo+=t}function ky(t){return t.dynamicChildren=oo>0?un||Mi:null,jb(),oo>0&&un&&un.push(t),t}function yU(t,e,n,r,i,s){return ky(Yl(t,e,n,r,i,s,!0))}function ln(t,e,n,r,i){return ky(ae(t,e,n,r,i,!0))}function nl(t){return t?t.__v_isVNode===!0:!1}function Fr(t,e){return t.type===e.type&&t.key===e.key}const Ql="__vInternal",xy=({key:t})=>t!=null?t:null,La=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||ze(t)||he(t)?{i:et,r:t,k:e,f:!!n}:t:null);function Yl(t,e=null,n=null,r=0,i=null,s=t===$t?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xy(e),ref:e&&La(e),scopeId:cy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:et};return a?(yd(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),oo>0&&!o&&un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&un.push(l),l}const ae=zb;function zb(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===hy)&&(t=Xt),nl(t)){const a=Ir(t,e,!0);return n&&yd(a,n),oo>0&&!s&&un&&(a.shapeFlag&6?un[un.indexOf(t)]=a:un.push(a)),a.patchFlag|=-2,a}if(tA(t)&&(t=t.__vccOpts),e){e=Hb(e);let{class:a,style:l}=e;a&&!Ue(a)&&(e.class=$l(a)),Le(l)&&(X_(l)&&!ie(l)&&(l=tt({},l)),e.style=No(l))}const o=Ue(t)?1:ab(t)?128:Ub(t)?64:Le(t)?4:he(t)?2:0;return Yl(t,e,n,r,i,o,s,!0)}function Hb(t){return t?X_(t)||Ql in t?tt({},t):t:null}function Ir(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Wb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&xy(a),ref:e&&e.ref?n&&i?ie(i)?i.concat(La(e)):[i,La(e)]:La(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$t?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ir(t.ssContent),ssFallback:t.ssFallback&&Ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Cs(t=" ",e=0){return ae(Gl,null,t,e)}function vU(t,e){const n=ae(Na,null,t);return n.staticCount=e,n}function Cp(t="",e=!1){return e?(an(),ln(Xt,null,t)):ae(Xt,null,t)}function wn(t){return t==null||typeof t=="boolean"?ae(Xt):ie(t)?ae($t,null,t.slice()):typeof t=="object"?lr(t):ae(Gl,null,String(t))}function lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ir(t)}function yd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),yd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ql in e)?e._ctx=et:i===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:et},n=32):(e=String(e),r&64?(n=16,e=[Cs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=$l([e.class,r.class]));else if(i==="style")e.style=No([e.style,r.style]);else if(Vl(i)){const s=e[i],o=r[i];o&&s!==o&&!(ie(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function vn(t,e,n,r=null){Jt(t,e,7,[n,r])}const Kb=Ty();let Gb=0;function Qb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Kb,s={uid:Gb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new M_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:by(r,i),emitsOptions:ly(r,i),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=tb.bind(null,s),t.ce&&t.ce(s),s}let rt=null;const Ge=()=>rt||et;let rl,eh;{const t=N_(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};rl=e("__VUE_INSTANCE_SETTERS__",n=>rt=n),eh=e("__VUE_SSR_SETTERS__",n=>Fo=n)}const Mo=t=>{const e=rt;return rl(t),t.scope.on(),()=>{t.scope.off(),rl(e)}},kp=()=>{rt&&rt.scope.off(),rl(null)};function Oy(t){return t.vnode.shapeFlag&4}let Fo=!1;function Yb(t,e=!1){e&&eh(e);const{props:n,children:r}=t.vnode,i=Oy(t);kb(t,n,i,e),Db(t,r);const s=i?Jb(t,e):void 0;return e&&eh(!1),s}function Jb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sr(new Proxy(t.ctx,Eb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Zb(t):null,s=Mo(t);mi();const o=yr(r,t,0,[t.props,i]);if(gi(),s(),x_(o)){if(o.then(kp,kp),e)return o.then(a=>{xp(t,a,e)}).catch(a=>{Lo(a,t,0)});t.asyncDep=o}else xp(t,o,e)}else Dy(t,e)}function xp(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=ty(e)),Dy(t,n)}let Op;function Dy(t,e,n){const r=t.type;if(!t.render){if(!e&&Op&&!r.render){const i=r.template||md(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=tt(tt({isCustomElement:s,delimiters:a},o),l);r.render=Op(i,c)}}t.render=r.render||Bt}{const i=Mo(t);mi();try{Tb(t)}finally{gi(),i()}}}function Xb(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Vt(t,"get","$attrs"),e[n]}}))}function Zb(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Xb(t)},slots:t.slots,emit:t.emit,expose:e}}function Jl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ty(Sr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bs)return Bs[n](t)},has(e,n){return n in e||n in Bs}}))}function eA(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function tA(t){return he(t)&&"__vccOpts"in t}const M=(t,e)=>q0(t,e,Fo);function j(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ie(e)?nl(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&nl(n)&&(n=[n]),ae(t,e,n))}const nA="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const rA="http://www.w3.org/2000/svg",iA="http://www.w3.org/1998/Math/MathML",cr=typeof document!="undefined"?document:null,Dp=cr&&cr.createElement("template"),sA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?cr.createElementNS(rA,t):e==="mathml"?cr.createElementNS(iA,t):cr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>cr.createTextNode(t),createComment:t=>cr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Dp.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Dp.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tr="transition",ws="animation",Xi=Symbol("_vtc"),Zi=(t,{slots:e})=>j(fb,Ly(t),e);Zi.displayName="Transition";const Ny={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},oA=Zi.props=tt({},my,Ny),Nr=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Np=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function Ly(t){const e={};for(const F in t)F in Ny||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=aA(i),v=p&&p[0],_=p&&p[1],{onBeforeEnter:w,onEnter:y,onEnterCancelled:E,onLeave:T,onLeaveCancelled:b,onBeforeAppear:k=w,onAppear:N=y,onAppearCancelled:A=E}=e,D=(F,re,H)=>{ir(F,re?u:a),ir(F,re?c:o),H&&H()},L=(F,re)=>{F._isLeaving=!1,ir(F,h),ir(F,f),ir(F,d),re&&re()},z=F=>(re,H)=>{const se=F?N:y,ee=()=>D(re,F,H);Nr(se,[re,ee]),Lp(()=>{ir(re,F?l:s),Vn(re,F?u:a),Np(se)||Vp(re,r,v,ee)})};return tt(e,{onBeforeEnter(F){Nr(w,[F]),Vn(F,s),Vn(F,o)},onBeforeAppear(F){Nr(k,[F]),Vn(F,l),Vn(F,c)},onEnter:z(!1),onAppear:z(!0),onLeave(F,re){F._isLeaving=!0;const H=()=>L(F,re);Vn(F,h),My(),Vn(F,d),Lp(()=>{!F._isLeaving||(ir(F,h),Vn(F,f),Np(T)||Vp(F,r,_,H))}),Nr(T,[F,H])},onEnterCancelled(F){D(F,!1),Nr(E,[F])},onAppearCancelled(F){D(F,!0),Nr(A,[F])},onLeaveCancelled(F){L(F),Nr(b,[F])}})}function aA(t){if(t==null)return null;if(Le(t))return[nu(t.enter),nu(t.leave)];{const e=nu(t);return[e,e]}}function nu(t){return p0(t)}function Vn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Xi]||(t[Xi]=new Set)).add(e)}function ir(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Xi];n&&(n.delete(e),n.size||(t[Xi]=void 0))}function Lp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let lA=0;function Vp(t,e,n,r){const i=t._endId=++lA,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Vy(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),s()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Vy(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${tr}Delay`),s=r(`${tr}Duration`),o=Mp(i,s),a=r(`${ws}Delay`),l=r(`${ws}Duration`),c=Mp(a,l);let u=null,h=0,d=0;e===tr?o>0&&(u=tr,h=o,d=s.length):e===ws?c>0&&(u=ws,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?tr:ws:null,d=u?u===tr?s.length:l.length:0);const f=u===tr&&/\b(transform|all)(,|$)/.test(r(`${tr}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Mp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Fp(n)+Fp(t[r])))}function Fp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function My(){return document.body.offsetHeight}function cA(t,e,n){const r=t[Xi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Up=Symbol("_vod"),uA=Symbol("_vsh"),hA=Symbol(""),dA=/(^|;)\s*display\s*:/;function fA(t,e,n){const r=t.style,i=Ue(n);let s=!1;if(n&&!i){if(e)if(Ue(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Va(r,a,"")}else for(const o in e)n[o]==null&&Va(r,o,"");for(const o in n)o==="display"&&(s=!0),Va(r,o,n[o])}else if(i){if(e!==n){const o=r[hA];o&&(n+=";"+o),r.cssText=n,s=dA.test(n)}}else e&&t.removeAttribute("style");Up in t&&(t[Up]=s?r.display:"",t[uA]&&(r.display="none"))}const $p=/\s*!important$/;function Va(t,e,n){if(ie(n))n.forEach(r=>Va(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pA(t,e);$p.test(n)?t.setProperty(pi(r),n.replace($p,""),"important"):t[r]=n}}const Bp=["Webkit","Moz","ms"],ru={};function pA(t,e){const n=ru[e];if(n)return n;let r=xn(e);if(r!=="filter"&&r in t)return ru[e]=r;r=Ul(r);for(let i=0;i<Bp.length;i++){const s=Bp[i]+r;if(s in t)return ru[e]=s}return e}const qp="http://www.w3.org/1999/xlink";function mA(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(qp,e.slice(6,e.length)):t.setAttributeNS(qp,e,n);else{const s=w0(e);n==null||s&&!L_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function gA(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?"":n;(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=L_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function _A(t,e,n,r){t.addEventListener(e,n,r)}function yA(t,e,n,r){t.removeEventListener(e,n,r)}const jp=Symbol("_vei");function vA(t,e,n,r,i=null){const s=t[jp]||(t[jp]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=wA(e);if(r){const c=s[e]=IA(r,i);_A(t,a,c,l)}else o&&(yA(t,a,o,l),s[e]=void 0)}}const zp=/(?:Once|Passive|Capture)$/;function wA(t){let e;if(zp.test(t)){e={};let r;for(;r=t.match(zp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):pi(t.slice(2)),e]}let iu=0;const EA=Promise.resolve(),TA=()=>iu||(EA.then(()=>iu=0),iu=Date.now());function IA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Jt(bA(r,n.value),e,5,[r])};return n.value=t,n.attached=TA(),n}function bA(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Hp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,AA=(t,e,n,r,i,s,o,a,l)=>{const c=i==="svg";e==="class"?cA(t,r,c):e==="style"?fA(t,n,r):Vl(e)?Xh(e)||vA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):RA(t,e,r,c))?gA(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mA(t,e,r,c))};function RA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hp(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Hp(e)&&Ue(n)?!1:e in t}const Fy=new WeakMap,Uy=new WeakMap,il=Symbol("_moveCb"),Wp=Symbol("_enterCb"),$y={name:"TransitionGroup",props:tt({},oA,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ge(),r=py();let i,s;return yy(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!OA(i[0].el,n.vnode.el,o))return;i.forEach(CA),i.forEach(kA);const a=i.filter(xA);My(),a.forEach(l=>{const c=l.el,u=c.style;Vn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[il]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c[il]=null,ir(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=we(t),a=Ly(o);let l=o.tag||$t;i=s,s=e.default?fd(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&so(u,io(u,a,r,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];so(u,io(u,a,r,n)),Fy.set(u,u.el.getBoundingClientRect())}return ae(l,null,s)}}},SA=t=>delete t.mode;$y.props;const PA=$y;function CA(t){const e=t.el;e[il]&&e[il](),e[Wp]&&e[Wp]()}function kA(t){Uy.set(t,t.el.getBoundingClientRect())}function xA(t){const e=Fy.get(t),n=Uy.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function OA(t,e,n){const r=t.cloneNode(),i=t[Xi];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=Vy(r);return s.removeChild(r),o}const DA=["ctrl","shift","alt","meta"],NA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>DA.some(n=>t[`${n}Key`]&&!e.includes(n))},wU=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=NA[e[o]];if(a&&a(i,e))return}return t(i,...s)})},LA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},EU=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=pi(i.key);if(e.some(o=>o===s||LA[o]===s))return t(i)})},VA=tt({patchProp:AA},sA);let Kp;function MA(){return Kp||(Kp=Lb(VA))}const By=(...t)=>{const e=MA().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=UA(r);if(!i)return;const s=e._component;!he(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,FA(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function FA(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function UA(t){return Ue(t)?document.querySelector(t):t}function Xl(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}const Wn=_e(!1);let th;function $A(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function BA(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const qy="ontouchstart"in window||window.navigator.maxTouchPoints>0;function qA(t){const e=t.toLowerCase(),n=BA(e),r=$A(e,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];if(s===!0||e.indexOf("mobile")!==-1?i.mobile=!0:i.desktop=!0,i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios?(i.firefox=!0,r.browser="firefox"):(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&s!==!0)&&(i.webkit=!0),i.edg?(r.browser="edgechromium",i.edgeChromium=!0):i.opr&&(r.browser="opera",i.opera=!0),i.safari&&(i.blackberry||i.bb?(r.browser="blackberry",i.blackberry=!0):i.playbook?(r.browser="playbook",i.playbook=!0):i.android?(r.browser="android",i.android=!0):i.kindle?(r.browser="kindle",i.kindle=!0):i.silk&&(r.browser="silk",i.silk=!0)),i.name=r.browser,i.platform=r.platform,e.indexOf("electron")!==-1)i.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)i.bex=!0;else{if(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),Wn.value===!0&&(th={is:{...i}}),qy===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)){delete i.mac,delete i.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(i,{mobile:!0,ios:!0,platform:o,[o]:!0})}i.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete i.desktop,i.mobile=!0)}return i}const Gp=navigator.userAgent||navigator.vendor||window.opera,jA={has:{touch:!1,webStorage:!1},within:{iframe:!1}},it={userAgent:Gp,is:qA(Gp),has:{touch:qy},within:{iframe:window.self!==window.top}},sl={install(t){const{$q:e}=t;Wn.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,it),Wn.value=!1}),e.platform=cn(this)):e.platform=this}};{let t;Xl(it.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Object.assign(sl,it),Wn.value===!0&&(Object.assign(sl,th,jA),th=null)}var Zl=(t,e)=>{const n=cn(t);for(const r in t)Xl(e,r,()=>n[r],i=>{n[r]=i});return e};const Xe={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(Xe,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function ni(){}function TU(t){return t.button===0}function jy(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function zA(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function zy(t){t.stopPropagation()}function ao(t){t.cancelable!==!1&&t.preventDefault()}function Fn(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function IU(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",ao,Xe.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",ao,Xe.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function nh(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],Xe[i[3]])})}function Hy(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],Xe[r[3]])}),t[n]=void 0)}function HA(t,e=250,n){let r=null;function i(){const s=arguments,o=()=>{r=null,n!==!0&&t.apply(this,s)};r!==null?clearTimeout(r):n===!0&&t.apply(this,s),r=setTimeout(o,e)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}const su=["sm","md","lg","xl"],{passive:Qp}=Xe;var WA=Zl({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:ni,setDebounce:ni,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,i=document.scrollingElement||document.documentElement,s=n===void 0||it.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=h=>{const[d,f]=s();if(f!==this.height&&(this.height=f),d!==this.width)this.width=d;else if(h!==!0)return;let p=this.sizes;this.gt.xs=d>=p.sm,this.gt.sm=d>=p.md,this.gt.md=d>=p.lg,this.gt.lg=d>=p.xl,this.lt.sm=d<p.sm,this.lt.md=d<p.md,this.lt.lg=d<p.lg,this.lt.xl=d<p.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,p=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",p!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${p}`)),this.name=p)};let a,l={},c=16;this.setSizes=h=>{su.forEach(d=>{h[d]!==void 0&&(l[d]=h[d])})},this.setDebounce=h=>{c=h};const u=()=>{const h=getComputedStyle(document.body);h.getPropertyValue("--q-size-sm")&&su.forEach(d=>{this.sizes[d]=parseInt(h.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{su.forEach(f=>{d[f]&&(this.sizes[f]=d[f])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&r.removeEventListener("resize",a,Qp),a=d>0?HA(this.__update,d):this.__update,r.addEventListener("resize",a,Qp)},this.setDebounce(c),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Wn.value===!0?e.push(u):u()}});const vt=Zl({isActive:!1,mode:!1},{__media:void 0,set(t){vt.mode=t,t==="auto"?(vt.__media===void 0&&(vt.__media=window.matchMedia("(prefers-color-scheme: dark)"),vt.__updateMedia=()=>{vt.set("auto")},vt.__media.addListener(vt.__updateMedia)),t=vt.__media.matches):vt.__media!==void 0&&(vt.__media.removeListener(vt.__updateMedia),vt.__media=void 0),vt.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){vt.set(vt.isActive===!1)},install({$q:t,ssrContext:e}){const{dark:n}=t.config;t.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}}),Wy=()=>!0;function KA(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function GA(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function QA(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return Wy;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(KA).map(GA)),()=>e.includes(window.location.hash)}var rh={__history:[],add:ni,remove:ni,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=it.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=Wy),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const i=QA(Object.assign({backButtonExit:!0},r)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},Yp={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Jp(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const sn=Zl({__langPack:{}},{getLocale:Jp,set(t=Yp,e){const n={...t,rtl:t.rtl===!0,getLocale:Jp};{if(n.set=sn.set,sn.__langConfig===void 0||sn.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(sn.__langPack,n),sn.props=n,sn.isoName=n.isoName,sn.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=sn.__langPack,sn.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||Yp)}});function YA(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let Ky=!1;function JA(t){Ky=t.isComposing===!0}function XA(t){return Ky===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function ri(t,e){return XA(t)===!0?!1:[].concat(e).includes(t.keyCode)}function Gy(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function ZA({is:t,has:e,within:n},r){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=Gy(t);s!==void 0&&i.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;i.push(s),i.push("native-mobile"),t.ios===!0&&(r[s]===void 0||r[s].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function eR(){const{is:t}=it,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const i=Gy(t);i!==void 0&&n.add(`platform-${i}`)}}it.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),it.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function tR(t){for(const e in t)YA(e,t[e])}var nR={install(t){if(this.__installed!==!0){if(Wn.value===!0)eR();else{const{$q:e}=t;e.config.brand!==void 0&&tR(e.config.brand);const n=ZA(it,e.config);document.body.classList.add.apply(document.body.classList,n)}it.is.ios===!0&&document.body.addEventListener("touchstart",ni),window.addEventListener("keydown",JA,!0)}}},rR={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const ol=Zl({iconMapFn:null,__icons:{}},{set(t,e){const n={...t,rtl:t.rtl===!0};n.set=ol.set,Object.assign(ol.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,Xl(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||rR)}}),Qy="_q_",vd="_q_l_",iR="_q_pc_",bU="_q_fo_",AU="_q_tabs_",ji=()=>{},al={};let Yy=!1;function sR(){Yy=!0}function ou(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(ou(t[r],e[r])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}for(s=t.entries(),r=s.next();r.done!==!0;){if(ou(r.value[1],e.get(r.value[0]))!==!0)return!1;r=s.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const i=Object.keys(t).filter(s=>t[s]!==void 0);if(n=i.length,n!==Object.keys(e).filter(s=>e[s]!==void 0).length)return!1;for(r=n;r--!==0;){const s=i[r];if(ou(t[s],e[s])!==!0)return!1}return!0}return t!==t&&e!==e}function lo(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function RU(t){return Object.prototype.toString.call(t)==="[object Date]"}const Xp=[sl,nR,vt,WA,rh,sn,ol];function oR(t,e){const n=By(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...i}=e._context;return Object.assign(n._context,i),n}function Zp(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function aR(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(Qy,n.$q),Zp(n,Xp),e.components!==void 0&&Object.values(e.components).forEach(r=>{lo(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{lo(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&Zp(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&Xp.includes(r)===!1)),Wn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var lR=function(t,e={}){const n={version:"2.14.6"};Yy===!1?(e.config!==void 0&&Object.assign(al,e.config),n.config={...al},sR()):n.config=e.config||{},aR(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},cR={version:"2.14.6",install:lR,lang:sn,iconSet:ol};const uR={__name:"App",setup(t){return vy(e=>{console.log("### onErrorCaptured ###"),console.log("err : ",e)}),(e,n)=>{const r=uy("router-view");return an(),ln(r)}}};function SU(t){return t}var hR=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Jy;const ec=t=>Jy=t,Xy=Symbol();function ih(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var zs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zs||(zs={}));function dR(){const t=F_(!0),e=t.run(()=>_e({}));let n=[],r=[];const i=Sr({install(s){ec(i),i._a=s,s.provide(Xy,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!hR?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Zy=()=>{};function em(t,e,n,r=Zy){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&td()&&U_(i),i}function Ai(t,...e){t.slice().forEach(n=>{n(...e)})}const fR=t=>t();function sh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];ih(i)&&ih(r)&&t.hasOwnProperty(n)&&!ze(r)&&!zn(r)?t[n]=sh(i,r):t[n]=r}return t}const pR=Symbol();function mR(t){return!ih(t)||!t.hasOwnProperty(pR)}const{assign:sr}=Object;function gR(t){return!!(ze(t)&&t.effect)}function _R(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=K0(n.state.value[t]);return sr(u,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=Sr(M(()=>{ec(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=ev(t,c,e,n,r,!0),l}function ev(t,e,n={},r,i,s){let o;const a=sr({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const p=r.state.value[t];!s&&!p&&(r.state.value[t]={}),_e({});let v;function _(A){let D;c=u=!1,typeof A=="function"?(A(r.state.value[t]),D={type:zs.patchFunction,storeId:t,events:f}):(sh(r.state.value[t],A),D={type:zs.patchObject,payload:A,storeId:t,events:f});const L=v=Symbol();hn().then(()=>{v===L&&(c=!0)}),u=!0,Ai(h,D,r.state.value[t])}const w=s?function(){const{state:D}=n,L=D?D():{};this.$patch(z=>{sr(z,L)})}:Zy;function y(){o.stop(),h=[],d=[],r._s.delete(t)}function E(A,D){return function(){ec(r);const L=Array.from(arguments),z=[],F=[];function re(ee){z.push(ee)}function H(ee){F.push(ee)}Ai(d,{args:L,name:A,store:b,after:re,onError:H});let se;try{se=D.apply(this&&this.$id===t?this:b,L)}catch(ee){throw Ai(F,ee),ee}return se instanceof Promise?se.then(ee=>(Ai(z,ee),ee)).catch(ee=>(Ai(F,ee),Promise.reject(ee))):(Ai(z,se),se)}}const T={_p:r,$id:t,$onAction:em.bind(null,d),$patch:_,$reset:w,$subscribe(A,D={}){const L=em(h,A,D.detached,()=>z()),z=o.run(()=>xe(()=>r.state.value[t],F=>{(D.flush==="sync"?u:c)&&A({storeId:t,type:zs.direct,events:f},F)},sr({},l,D)));return L},$dispose:y},b=cn(T);r._s.set(t,b);const N=(r._a&&r._a.runWithContext||fR)(()=>r._e.run(()=>(o=F_()).run(e)));for(const A in N){const D=N[A];if(ze(D)&&!gR(D)||zn(D))s||(p&&mR(D)&&(ze(D)?D.value=p[A]:sh(D,p[A])),r.state.value[t][A]=D);else if(typeof D=="function"){const L=E(A,D);N[A]=L,a.actions[A]=D}}return sr(b,N),sr(we(b),N),Object.defineProperty(b,"$state",{get:()=>r.state.value[t],set:A=>{_(D=>{sr(D,A)})}}),r._p.forEach(A=>{sr(b,o.run(()=>A({store:b,app:r._a,pinia:r,options:a})))}),p&&s&&n.hydrate&&n.hydrate(b.$state,p),c=!0,u=!0,b}function yR(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,l){const c=Cb();return a=a||(c?Ct(Xy,null):null),a&&ec(a),a=Jy,a._s.has(r)||(s?ev(r,e,i,a):_R(r,i,a)),a._s.get(r)}return o.$id=r,o}function PU(t){{t=we(t);const e={};for(const n in t){const r=t[n];(ze(r)||zn(r))&&(e[n]=ny(t,n))}return e}}var au=()=>dR();const tm=[{path:"/",name:"/",component:()=>ke(()=>import("./index.87405ce0.js"),["assets/index.87405ce0.js","assets/index.b14ef75f.css","assets/QPage.dd437337.js","assets/post.a5a91c36.js","assets/PostList.561afdc8.js","assets/PostItem.a7be6381.js","assets/QChip.ae868b30.js","assets/PostIcon.df7bf63f.js","assets/QForm.3e9cc91b.js","assets/PostForm.aaa30bfd.js","assets/PostForm.e73147ee.css","assets/QItemLabel.cdec951d.js","assets/format.c860d4da.js","assets/QCardActions.c6e8b992.js","assets/index.bf03c43f.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/validate-rules.51cb0822.js"])},{path:"/_admin",name:"/_admin",component:()=>ke(()=>import("./_admin.6c461ab2.js"),["assets/_admin.6c461ab2.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{layout:"admin"}},{path:"/:path(.*)",name:"/[...path]",component:()=>ke(()=>import("./_...path_.c9d4a2bc.js"),["assets/_...path_.c9d4a2bc.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/about",name:"/about",component:()=>ke(()=>import("./about.30d6bc8e.js"),["assets/about.30d6bc8e.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{layout:"admin"}},{path:"/admin",children:[{path:"",name:"/admin/",component:()=>ke(()=>import("./index.bdd408dc.js"),["assets/index.bdd408dc.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"dashboard",name:"/admin/dashboard",component:()=>ke(()=>import("./dashboard.8753456d.js"),["assets/dashboard.8753456d.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/docs",children:[{path:"",name:"/docs/",component:()=>ke(()=>import("./index.d4cf8f70.js"),["assets/index.d4cf8f70.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/ErrorNotFound",name:"/ErrorNotFound",component:()=>ke(()=>import("./ErrorNotFound.ed11a03c.js"),["assets/ErrorNotFound.ed11a03c.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/home",name:"home-page",component:()=>ke(()=>import("./home.f1ed11ed.js"),["assets/home.f1ed11ed.js","assets/QPage.dd437337.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAAuth:!0,width:"600px"}},{path:"/IndexPage",name:"/IndexPage",component:()=>ke(()=>import("./IndexPage.14d421f2.js"),["assets/IndexPage.14d421f2.js","assets/QPage.dd437337.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/mypage",name:"/mypage",component:()=>ke(()=>import("./mypage.5cf6c829.js"),["assets/mypage.5cf6c829.js","assets/QPage.dd437337.js","assets/BaseCard.3a214383.js","assets/route-block.1e6a8648.js"]),children:[{path:"bookmark",name:"/mypage/bookmark",component:()=>ke(()=>import("./bookmark.b4848310.js"),["assets/bookmark.b4848310.js","assets/post.a5a91c36.js","assets/PostList.561afdc8.js","assets/PostItem.a7be6381.js","assets/QChip.ae868b30.js","assets/PostIcon.df7bf63f.js"])},{path:"password",name:"/mypage/password",component:()=>ke(()=>import("./password.bc54c907.js"),["assets/password.bc54c907.js","assets/QForm.3e9cc91b.js","assets/QCardActions.c6e8b992.js","assets/BaseCard.3a214383.js","assets/validate-rules.51cb0822.js","assets/error-message.73b8b582.js"])},{path:"profile",name:"/mypage/profile",component:()=>ke(()=>import("./profile.3b6547b0.js"),["assets/profile.3b6547b0.js","assets/QForm.3e9cc91b.js","assets/QCardActions.c6e8b992.js","assets/BaseCard.3a214383.js","assets/error-message.73b8b582.js"])}],meta:{requiresAuth:!0}},{path:"/posts",children:[{path:":id",children:[{path:"",name:"/posts/[id]/",component:()=>ke(()=>import("./index.c8f8328c.js"),["assets/index.c8f8328c.js","assets/index.4a640d70.css","assets/QPage.dd437337.js","assets/format.c860d4da.js","assets/post.a5a91c36.js","assets/PostIcon.df7bf63f.js","assets/index.bf03c43f.js","assets/BaseCard.3a214383.js","assets/QForm.3e9cc91b.js","assets/validate-rules.51cb0822.js","assets/route-block.1e6a8648.js"]),meta:{width:"800px"}},{path:"edit",name:"/posts/[id]/edit",component:()=>ke(()=>import("./edit.65941051.js"),["assets/edit.65941051.js","assets/QPage.dd437337.js","assets/post.a5a91c36.js","assets/BaseCard.3a214383.js","assets/PostForm.aaa30bfd.js","assets/PostForm.e73147ee.css","assets/QForm.3e9cc91b.js","assets/QChip.ae868b30.js","assets/QItemLabel.cdec951d.js","assets/format.c860d4da.js","assets/QCardActions.c6e8b992.js","assets/index.bf03c43f.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/validate-rules.51cb0822.js","assets/route-block.1e6a8648.js"]),meta:{width:"800px"}}]}]},{path:"/search",children:[{path:"",name:"/search/",component:()=>ke(()=>import("./index.16e72ec5.js"),["assets/index.16e72ec5.js","assets/index.2ea60985.css","assets/QPage.dd437337.js","assets/PostItem.a7be6381.js","assets/QChip.ae868b30.js","assets/PostIcon.df7bf63f.js","assets/post.a5a91c36.js"])}]},{path:"/vueuse",children:[{path:"",name:"/vueuse/",component:()=>ke(()=>import("./index.8a88e065.js"),["assets/index.8a88e065.js","assets/QPage.dd437337.js"])}]}];/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ki=typeof document!="undefined";function vR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function lu(t,e){const n={};for(const r in e){const i=e[r];n[r]=dn(i)?i.map(t):t(i)}return n}const Hs=()=>{},dn=Array.isArray,tv=/#/g,wR=/&/g,ER=/\//g,TR=/=/g,IR=/\?/g,nv=/\+/g,bR=/%5B/g,AR=/%5D/g,rv=/%5E/g,RR=/%60/g,iv=/%7B/g,SR=/%7C/g,sv=/%7D/g,PR=/%20/g;function wd(t){return encodeURI(""+t).replace(SR,"|").replace(bR,"[").replace(AR,"]")}function CR(t){return wd(t).replace(iv,"{").replace(sv,"}").replace(rv,"^")}function oh(t){return wd(t).replace(nv,"%2B").replace(PR,"+").replace(tv,"%23").replace(wR,"%26").replace(RR,"`").replace(iv,"{").replace(sv,"}").replace(rv,"^")}function kR(t){return oh(t).replace(TR,"%3D")}function xR(t){return wd(t).replace(tv,"%23").replace(IR,"%3F")}function OR(t){return t==null?"":xR(t).replace(ER,"%2F")}function co(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const DR=/\/$/,NR=t=>t.replace(DR,"");function cu(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=FR(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:co(o)}}function LR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function nm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function VR(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&es(e.matched[r],n.matched[i])&&ov(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ov(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!MR(t[n],e[n]))return!1;return!0}function MR(t,e){return dn(t)?rm(t,e):dn(e)?rm(e,t):t===e}function rm(t,e){return dn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function FR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}var uo;(function(t){t.pop="pop",t.push="push"})(uo||(uo={}));var Ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ws||(Ws={}));function UR(t){if(!t)if(ki){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),NR(t)}const $R=/^[^#]+#/;function BR(t,e){return t.replace($R,"#")+e}function qR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const tc=()=>({left:window.scrollX,top:window.scrollY});function jR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=qR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function im(t,e){return(history.state?history.state.position-e:-1)+t}const ah=new Map;function zR(t,e){ah.set(t,e)}function HR(t){const e=ah.get(t);return ah.delete(t),e}let WR=()=>location.protocol+"//"+location.host;function av(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),nm(l,"")}return nm(n,t)+r+i}function KR(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=av(t,location),p=n.value,v=e.value;let _=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}_=v?d.position-v.position:0}else r(f);i.forEach(w=>{w(n.value,p,{delta:_,type:uo.pop,direction:_?_>0?Ws.forward:Ws.back:Ws.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return s.push(f),f}function u(){const{history:d}=window;!d.state||d.replaceState(Re({},d.state,{scroll:tc()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function sm(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?tc():null}}function GR(t){const{history:e,location:n}=window,r={value:av(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:WR()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Re({},e.state,sm(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=Re({},i.value,e.state,{forward:l,scroll:tc()});s(u.current,u,!0);const h=Re({},sm(r.value,l,null),{position:u.position+1},c);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function QR(t){t=UR(t);const e=GR(t),n=KR(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Re({location:"",base:t,go:r,createHref:BR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function YR(t){return typeof t=="string"||t&&typeof t=="object"}function lv(t){return typeof t=="string"||typeof t=="symbol"}const nr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cv=Symbol("");var om;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(om||(om={}));function ts(t,e){return Re(new Error,{type:t,[cv]:!0},e)}function Ln(t,e){return t instanceof Error&&cv in t&&(e==null||!!(t.type&e))}const am="[^/]+?",JR={sensitive:!1,strict:!1,start:!0,end:!0},XR=/[.+*?^${}()[\]/\\]/g;function ZR(t,e){const n=Re({},JR,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(XR,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:v,optional:_,regexp:w}=d;s.push({name:p,repeatable:v,optional:_});const y=w||am;if(y!==am){f+=10;try{new RegExp(`(${y})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${p}" (${y}): `+T.message)}}let E=v?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(E=_&&c.length<2?`(?:/${E})`:"/"+E),_&&(E+="?"),i+=E,f+=20,_&&(f+=-8),v&&(f+=-20),y===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=s[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:v,optional:_}=f,w=p in c?c[p]:"";if(dn(w)&&!v)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const y=dn(w)?w.join("/"):w;if(!y)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function eS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function tS(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=eS(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(lm(r))return 1;if(lm(i))return-1}return i.length-r.length}function lm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nS={type:0,value:""},rS=/[a-zA-Z0-9_]/;function iS(t){if(!t)return[[]];if(t==="/")return[[nS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:rS.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function sS(t,e,n){const r=ZR(iS(t.path),n),i=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function oS(t,e){const n=[],r=new Map;e=hm({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,d){const f=!d,p=aS(u);p.aliasOf=d&&d.record;const v=hm(e,u),_=[p];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of E)_.push(Re({},p,{components:d?d.record.components:p.components,path:T,aliasOf:d?d.record:p}))}let w,y;for(const E of _){const{path:T}=E;if(h&&T[0]!=="/"){const b=h.record.path,k=b[b.length-1]==="/"?"":"/";E.path=h.record.path+(T&&k+T)}if(w=sS(E,h,v),d?d.alias.push(w):(y=y||w,y!==w&&y.alias.push(w),f&&u.name&&!um(w)&&o(u.name)),p.children){const b=p.children;for(let k=0;k<b.length;k++)s(b[k],w,d&&d.children[k])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&l(w)}return y?()=>{o(y)}:Hs}function o(u){if(lv(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&tS(u,n[h])>=0&&(u.record.path!==n[h].record.path||!uv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!um(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},p,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ts(1,{location:u});v=d.record.name,f=Re(cm(h.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),u.params&&cm(u.params,d.keys.map(y=>y.name))),p=d.stringify(f)}else if(u.path!=null)p=u.path,d=n.find(y=>y.re.test(p)),d&&(f=d.parse(p),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(y=>y.re.test(h.path)),!d)throw ts(1,{location:u,currentLocation:h});v=d.record.name,f=Re({},h.params,u.params),p=d.stringify(f)}const _=[];let w=d;for(;w;)_.unshift(w.record),w=w.parent;return{name:v,path:p,params:f,matched:_,meta:cS(_)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function cm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function aS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function um(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cS(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function hm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function uv(t,e){return e.children.some(n=>n===t||uv(t,n))}function uS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(nv," "),o=s.indexOf("="),a=co(o<0?s:s.slice(0,o)),l=o<0?null:co(s.slice(o+1));if(a in e){let c=e[a];dn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function dm(t){let e="";for(let n in t){const r=t[n];if(n=kR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(dn(r)?r.map(s=>s&&oh(s)):[r&&oh(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function hS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=dn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const dS=Symbol(""),fm=Symbol(""),nc=Symbol(""),Ed=Symbol(""),lh=Symbol("");function Es(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ur(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ts(4,{from:n,to:e})):d instanceof Error?l(d):YR(d)?l(ts(2,{from:e,to:d})):(o&&r.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(r&&r.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function uu(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(fS(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ur(u,n,r,o,a,i))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=vR(u)?u.default:u;o.components[a]=h;const f=(h.__vccOpts||h)[e];return f&&ur(f,n,r,o,a,i)()}))}}return s}function fS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pm(t){const e=Ct(nc),n=Ct(Ed),r=M(()=>e.resolve(Ot(t.to))),i=M(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(es.bind(null,u));if(d>-1)return d;const f=mm(l[c-2]);return c>1&&mm(u)===f&&h[h.length-1].path!==f?h.findIndex(es.bind(null,l[c-2])):d}),s=M(()=>i.value>-1&&_S(n.params,r.value.params)),o=M(()=>i.value>-1&&i.value===n.matched.length-1&&ov(n.params,r.value.params));function a(l={}){return gS(l)?e[Ot(t.replace)?"replace":"push"](Ot(t.to)).catch(Hs):Promise.resolve()}return{route:r,href:M(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const pS=Hl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pm,setup(t,{slots:e}){const n=cn(pm(t)),{options:r}=Ct(nc),i=M(()=>({[gm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[gm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:j("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),mS=pS;function gS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _S(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!dn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function mm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gm=(t,e,n)=>t!=null?t:e!=null?e:n,yS=Hl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ct(lh),i=M(()=>t.route||r.value),s=Ct(fm,0),o=M(()=>{let c=Ot(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=M(()=>i.value.matched[o.value]);qi(fm,M(()=>o.value+1)),qi(dS,a),qi(lh,i);const l=_e();return xe(()=>[l.value,a.value,t.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!es(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return _m(n.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,_=j(d,Re({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return _m(n.default,{Component:_,route:c})||_}}});function _m(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vS=yS;function wS(t){const e=oS(t.routes,t),n=t.parseQuery||uS,r=t.stringifyQuery||dm,i=t.history,s=Es(),o=Es(),a=Es(),l=Za(nr);let c=nr;ki&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=lu.bind(null,R=>""+R),h=lu.bind(null,OR),d=lu.bind(null,co);function f(R,W){let P,J;return lv(R)?(P=e.getRecordMatcher(R),J=W):J=R,e.addRoute(J,P)}function p(R){const W=e.getRecordMatcher(R);W&&e.removeRoute(W)}function v(){return e.getRoutes().map(R=>R.record)}function _(R){return!!e.getRecordMatcher(R)}function w(R,W){if(W=Re({},W||l.value),typeof R=="string"){const g=cu(n,R,W.path),I=e.resolve({path:g.path},W),x=i.createHref(g.fullPath);return Re(g,I,{params:d(I.params),hash:co(g.hash),redirectedFrom:void 0,href:x})}let P;if(R.path!=null)P=Re({},R,{path:cu(n,R.path,W.path).path});else{const g=Re({},R.params);for(const I in g)g[I]==null&&delete g[I];P=Re({},R,{params:h(g)}),W.params=h(W.params)}const J=e.resolve(P,W),Ee=R.hash||"";J.params=u(d(J.params));const Oe=LR(r,Re({},R,{hash:CR(Ee),path:J.path})),m=i.createHref(Oe);return Re({fullPath:Oe,hash:Ee,query:r===dm?hS(R.query):R.query||{}},J,{redirectedFrom:void 0,href:m})}function y(R){return typeof R=="string"?cu(n,R,l.value.path):Re({},R)}function E(R,W){if(c!==R)return ts(8,{from:W,to:R})}function T(R){return N(R)}function b(R){return T(Re(y(R),{replace:!0}))}function k(R){const W=R.matched[R.matched.length-1];if(W&&W.redirect){const{redirect:P}=W;let J=typeof P=="function"?P(R):P;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=y(J):{path:J},J.params={}),Re({query:R.query,hash:R.hash,params:J.path!=null?{}:R.params},J)}}function N(R,W){const P=c=w(R),J=l.value,Ee=R.state,Oe=R.force,m=R.replace===!0,g=k(P);if(g)return N(Re(y(g),{state:typeof g=="object"?Re({},Ee,g.state):Ee,force:Oe,replace:m}),W||P);const I=P;I.redirectedFrom=W;let x;return!Oe&&VR(r,J,P)&&(x=ts(16,{to:I,from:J}),ht(J,J,!0,!1)),(x?Promise.resolve(x):L(I,J)).catch(C=>Ln(C)?Ln(C,2)?C:ut(C):de(C,I,J)).then(C=>{if(C){if(Ln(C,2))return N(Re({replace:m},y(C.to),{state:typeof C.to=="object"?Re({},Ee,C.to.state):Ee,force:Oe}),W||I)}else C=F(I,J,!0,m,Ee);return z(I,J,C),C})}function A(R,W){const P=E(R,W);return P?Promise.reject(P):Promise.resolve()}function D(R){const W=Kt.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(R):R()}function L(R,W){let P;const[J,Ee,Oe]=ES(R,W);P=uu(J.reverse(),"beforeRouteLeave",R,W);for(const g of J)g.leaveGuards.forEach(I=>{P.push(ur(I,R,W))});const m=A.bind(null,R,W);return P.push(m),ge(P).then(()=>{P=[];for(const g of s.list())P.push(ur(g,R,W));return P.push(m),ge(P)}).then(()=>{P=uu(Ee,"beforeRouteUpdate",R,W);for(const g of Ee)g.updateGuards.forEach(I=>{P.push(ur(I,R,W))});return P.push(m),ge(P)}).then(()=>{P=[];for(const g of Oe)if(g.beforeEnter)if(dn(g.beforeEnter))for(const I of g.beforeEnter)P.push(ur(I,R,W));else P.push(ur(g.beforeEnter,R,W));return P.push(m),ge(P)}).then(()=>(R.matched.forEach(g=>g.enterCallbacks={}),P=uu(Oe,"beforeRouteEnter",R,W,D),P.push(m),ge(P))).then(()=>{P=[];for(const g of o.list())P.push(ur(g,R,W));return P.push(m),ge(P)}).catch(g=>Ln(g,8)?g:Promise.reject(g))}function z(R,W,P){a.list().forEach(J=>D(()=>J(R,W,P)))}function F(R,W,P,J,Ee){const Oe=E(R,W);if(Oe)return Oe;const m=W===nr,g=ki?history.state:{};P&&(J||m?i.replace(R.fullPath,Re({scroll:m&&g&&g.scroll},Ee)):i.push(R.fullPath,Ee)),l.value=R,ht(R,W,P,m),ut()}let re;function H(){re||(re=i.listen((R,W,P)=>{if(!pe.listening)return;const J=w(R),Ee=k(J);if(Ee){N(Re(Ee,{replace:!0}),J).catch(Hs);return}c=J;const Oe=l.value;ki&&zR(im(Oe.fullPath,P.delta),tc()),L(J,Oe).catch(m=>Ln(m,12)?m:Ln(m,2)?(N(m.to,J).then(g=>{Ln(g,20)&&!P.delta&&P.type===uo.pop&&i.go(-1,!1)}).catch(Hs),Promise.reject()):(P.delta&&i.go(-P.delta,!1),de(m,J,Oe))).then(m=>{m=m||F(J,Oe,!1),m&&(P.delta&&!Ln(m,8)?i.go(-P.delta,!1):P.type===uo.pop&&Ln(m,20)&&i.go(-1,!1)),z(J,Oe,m)}).catch(Hs)}))}let se=Es(),ee=Es(),me;function de(R,W,P){ut(R);const J=ee.list();return J.length?J.forEach(Ee=>Ee(R,W,P)):console.error(R),Promise.reject(R)}function Be(){return me&&l.value!==nr?Promise.resolve():new Promise((R,W)=>{se.add([R,W])})}function ut(R){return me||(me=!R,H(),se.list().forEach(([W,P])=>R?P(R):W()),se.reset()),R}function ht(R,W,P,J){const{scrollBehavior:Ee}=t;if(!ki||!Ee)return Promise.resolve();const Oe=!P&&HR(im(R.fullPath,0))||(J||!P)&&history.state&&history.state.scroll||null;return hn().then(()=>Ee(R,W,Oe)).then(m=>m&&jR(m)).catch(m=>de(m,R,W))}const qe=R=>i.go(R);let _t;const Kt=new Set,pe={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:_,getRoutes:v,resolve:w,options:t,push:T,replace:b,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:Be,install(R){const W=this;R.component("RouterLink",mS),R.component("RouterView",vS),R.config.globalProperties.$router=W,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>Ot(l)}),ki&&!_t&&l.value===nr&&(_t=!0,T(i.location).catch(Ee=>{}));const P={};for(const Ee in nr)Object.defineProperty(P,Ee,{get:()=>l.value[Ee],enumerable:!0});R.provide(nc,W),R.provide(Ed,J_(P)),R.provide(lh,l);const J=R.unmount;Kt.add(R),R.unmount=function(){Kt.delete(R),Kt.size<1&&(c=nr,re&&re(),re=null,l.value=nr,_t=!1,me=!1),J()}}};function ge(R){return R.reduce((W,P)=>W.then(()=>D(P)),Promise.resolve())}return pe}function ES(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>es(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>es(c,l))||i.push(l))}return[n,r,i]}function CU(){return Ct(nc)}function TS(){return Ct(Ed)}function IS(t){const{extendRoutes:e}=t;return wS(Object.assign(t,{routes:typeof e=="function"?e(tm):tm}))}const ch={xs:18,sm:24,md:32,lg:38,xl:46},Td={size:String};function Id(t,e=ch){return M(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const Qe=t=>Sr(Hl(t)),hv=t=>Sr(t);function Nn(t,e){return t!==void 0&&t()||e}function dv(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function Li(t,e){return t!==void 0?e.concat(t()):e}function bS(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function kU(t,e,n,r,i,s){e.key=r+i;const o=j(t,e,n);return i===!0?$i(o,s()):o}const ym="0 0 24 24",vm=t=>t,hu=t=>`ionicons ${t}`,fv={"mdi-":t=>`mdi ${t}`,"icon-":vm,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":hu,"ion-ios":hu,"ion-logo":hu,"iconfont ":vm,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},pv={o_:"-outlined",r_:"-round",s_:"-sharp"},mv={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},AS=new RegExp("^("+Object.keys(fv).join("|")+")"),RS=new RegExp("^("+Object.keys(pv).join("|")+")"),wm=new RegExp("^("+Object.keys(mv).join("|")+")"),SS=/^[Mm]\s?[-+]?\.?\d/,PS=/^img:/,CS=/^svguse:/,kS=/^ion-/,xS=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var ll=Qe({name:"QIcon",props:{...Td,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Ge(),r=Id(t),i=M(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),s=M(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(SS.test(a)===!0){const[u,h=ym]=a.split("|");return{svg:!0,viewBox:h,nodes:u.split("&&").map(d=>{const[f,p,v]=d.split("@@");return j("path",{style:p,d:f,transform:v})})}}if(PS.test(a)===!0)return{img:!0,src:a.substring(4)};if(CS.test(a)===!0){const[u,h=ym]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:h}}let l=" ";const c=a.match(AS);if(c!==null)o=fv[c[1]](a);else if(xS.test(a)===!0)o=a;else if(kS.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(wm.test(a)===!0){o="notranslate material-symbols";const u=a.match(wm);u!==null&&(a=a.substring(6),o+=mv[u[1]]),l=a}else{o="notranslate material-icons";const u=a.match(RS);u!==null&&(a=a.substring(2),o+=pv[u[1]]),l=a}return{cls:o,content:l}});return()=>{const o={class:i.value,style:r.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?j(t.tag,o,Nn(e.default)):s.value.img===!0?j(t.tag,o,Li(e.default,[j("img",{src:s.value.src})])):s.value.svg===!0?j(t.tag,o,Li(e.default,[j("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?j(t.tag,o,Li(e.default,[j("svg",{viewBox:s.value.viewBox},[j("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),j(t.tag,o,Li(e.default,[s.value.content])))}}}),uh=Qe({name:"QAvatar",props:{...Td,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=Id(t),r=M(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),i=M(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const s=t.icon!==void 0?[j(ll,{name:t.icon})]:void 0;return j("div",{class:r.value,style:n.value},[j("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},bS(e.default,s))])}}}),OS=Qe({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:e}){const n=M(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>j("div",{class:n.value},Nn(e.default))}});const DS={size:{type:[Number,String],default:"1em"},color:String};function NS(t){return{cSize:M(()=>t.size in ch?`${ch[t.size]}px`:t.size),classes:M(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var gv=Qe({name:"QSpinner",props:{...DS,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=NS(t);return()=>j("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[j("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function hh(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function LS(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=Ot(t);if(e)return e.$el||e}function _v(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function VS(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function Em(t,e,n,r){n.modifiers.stop===!0&&zy(t);const i=n.modifiers.color;let s=n.modifiers.center;s=s===!0||r===!0;const o=document.createElement("span"),a=document.createElement("span"),l=jy(t),{left:c,top:u,width:h,height:d}=e.getBoundingClientRect(),f=Math.sqrt(h*h+d*d),p=f/2,v=`${(h-f)/2}px`,_=s?v:`${l.left-c-p}px`,w=`${(d-f)/2}px`,y=s?w:`${l.top-u-p}px`;a.className="q-ripple__inner",hh(a,{height:`${f}px`,width:`${f}px`,transform:`translate3d(${_},${y},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const E=()=>{o.remove(),clearTimeout(T)};n.abort.push(E);let T=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${v},${w},0) scale3d(1,1,1)`,a.style.opacity=.2,T=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,T=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(E),1)},275)},250)},50)}function Tm(t,{modifiers:e,value:n,arg:r}){const i=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var MS=hv({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&Em(i,t,r,i.qKeyEvent===!0)},keystart:VS(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&ri(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&Em(i,t,r,!0)},300)};Tm(r,e),t.__qripple=r,nh(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&Tm(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),Hy(e,"main"),delete t._qripple)}});const yv={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},FS=Object.keys(yv),US={align:{type:String,validator:t=>FS.includes(t)}};function $S(t){return M(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${yv[e]}`})}function Ma(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function vv(t){return t.appContext.config.globalProperties.$router!==void 0}function wv(t){return t.isUnmounted===!0||t.isDeactivated===!0}function Im(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function bm(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function BS(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(Array.isArray(i)===!1||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Am(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qS(t,e){return Array.isArray(t)===!0?Am(t,e):Array.isArray(e)===!0?Am(e,t):t===e}function jS(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(qS(t[n],e[n])===!1)return!1;return!0}const Ev={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Tv({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Ge(),{props:r,proxy:i,emit:s}=n,o=vv(n),a=M(()=>r.disable!==!0&&r.href!==void 0),l=M(e===!0?()=>o===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),c=M(()=>l.value===!0?y(r.to):null),u=M(()=>c.value!==null),h=M(()=>a.value===!0||u.value===!0),d=M(()=>r.type==="a"||h.value===!0?"a":r.tag||t||"div"),f=M(()=>a.value===!0?{href:r.href,target:r.target}:u.value===!0?{href:c.value.href,target:r.target}:{}),p=M(()=>{if(u.value===!1)return-1;const{matched:b}=c.value,{length:k}=b,N=b[k-1];if(N===void 0)return-1;const A=i.$route.matched;if(A.length===0)return-1;const D=A.findIndex(bm.bind(null,N));if(D!==-1)return D;const L=Im(b[k-2]);return k>1&&Im(N)===L&&A[A.length-1].path!==L?A.findIndex(bm.bind(null,b[k-2])):D}),v=M(()=>u.value===!0&&p.value!==-1&&BS(i.$route.params,c.value.params)),_=M(()=>v.value===!0&&p.value===i.$route.matched.length-1&&jS(i.$route.params,c.value.params)),w=M(()=>u.value===!0?_.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":v.value===!0?` ${r.activeClass}`:"":"");function y(b){try{return i.$router.resolve(b)}catch{}return null}function E(b,{returnRouterError:k,to:N=r.to,replace:A=r.replace}={}){if(r.disable===!0)return b.preventDefault(),Promise.resolve(!1);if(b.metaKey||b.altKey||b.ctrlKey||b.shiftKey||b.button!==void 0&&b.button!==0||r.target==="_blank")return Promise.resolve(!1);b.preventDefault();const D=i.$router[A===!0?"replace":"push"](N);return k===!0?D:D.then(()=>{}).catch(()=>{})}function T(b){if(u.value===!0){const k=N=>E(b,N);s("click",b,k),b.defaultPrevented!==!0&&k()}else s("click",b)}return{hasRouterLink:u,hasHrefLink:a,hasLink:h,linkTag:d,resolvedLink:c,linkIsActive:v,linkIsExactActive:_,linkClass:w,linkAttrs:f,getLink:y,navigateToRouterLink:E,navigateOnClick:T}}const Rm={none:0,xs:4,sm:8,md:16,lg:24,xl:32},zS={xs:8,sm:10,md:14,lg:20,xl:24},HS=["button","submit","reset"],WS=/[^\s]\/[^\s]/,KS=["flat","outline","push","unelevated"],GS=(t,e)=>t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e,QS={...Td,...Ev,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...KS.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...US.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function YS(t){const e=Id(t,zS),n=$S(t),{hasRouterLink:r,hasLink:i,linkTag:s,linkAttrs:o,navigateOnClick:a}=Tv({fallbackTag:"button"}),l=M(()=>{const _=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},_,{padding:t.padding.split(/\s+/).map(w=>w in Rm?Rm[w]+"px":w).join(" "),minWidth:"0",minHeight:"0"}):_}),c=M(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),u=M(()=>t.disable!==!0&&t.loading!==!0),h=M(()=>u.value===!0?t.tabindex||0:-1),d=M(()=>GS(t,"standard")),f=M(()=>{const _={tabindex:h.value};return i.value===!0?Object.assign(_,o.value):HS.includes(t.type)===!0&&(_.type=t.type),s.value==="a"?(t.disable===!0?_["aria-disabled"]="true":_.href===void 0&&(_.role="button"),r.value!==!0&&WS.test(t.type)===!0&&(_.type=t.type)):t.disable===!0&&(_.disabled="",_["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(_,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),_}),p=M(()=>{let _;t.color!==void 0?t.flat===!0||t.outline===!0?_=`text-${t.textColor||t.color}`:_=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(_=`text-${t.textColor}`);const w=t.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${d.value} q-btn--${w}`+(_!==void 0?" "+_:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),v=M(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:p,style:l,innerClasses:v,attributes:f,hasLink:i,linkTag:s,navigateOnClick:a,isActionable:u}}const{passiveCapture:Qt}=Xe;let Ri=null,Si=null,Pi=null;var Mn=Qe({name:"QBtn",props:{...QS,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=Ge(),{classes:i,style:s,innerClasses:o,attributes:a,hasLink:l,linkTag:c,navigateOnClick:u,isActionable:h}=YS(t),d=_e(null),f=_e(null);let p=null,v,_=null;const w=M(()=>t.label!==void 0&&t.label!==null&&t.label!==""),y=M(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),E=M(()=>({center:t.round})),T=M(()=>{const H=Math.max(0,Math.min(100,t.percentage));return H>0?{transition:"transform 0.6s",transform:`translateX(${H-100}%)`}:{}}),b=M(()=>{if(t.loading===!0)return{onMousedown:re,onTouchstart:re,onClick:re,onKeydown:re,onKeyup:re};if(h.value===!0){const H={onClick:N,onKeydown:A,onMousedown:L};if(r.$q.platform.has.touch===!0){const se=t.onTouchstart!==void 0?"":"Passive";H[`onTouchstart${se}`]=D}return H}return{onClick:Fn}}),k=M(()=>({ref:d,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:s.value,...a.value,...b.value}));function N(H){if(d.value!==null){if(H!==void 0){if(H.defaultPrevented===!0)return;const se=document.activeElement;if(t.type==="submit"&&se!==document.body&&d.value.contains(se)===!1&&se.contains(d.value)===!1){d.value.focus();const ee=()=>{document.removeEventListener("keydown",Fn,!0),document.removeEventListener("keyup",ee,Qt),d.value!==null&&d.value.removeEventListener("blur",ee,Qt)};document.addEventListener("keydown",Fn,!0),document.addEventListener("keyup",ee,Qt),d.value.addEventListener("blur",ee,Qt)}}u(H)}}function A(H){d.value!==null&&(n("keydown",H),ri(H,[13,32])===!0&&Si!==d.value&&(Si!==null&&F(),H.defaultPrevented!==!0&&(d.value.focus(),Si=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("keyup",z,!0),d.value.addEventListener("blur",z,Qt)),Fn(H)))}function D(H){d.value!==null&&(n("touchstart",H),H.defaultPrevented!==!0&&(Ri!==d.value&&(Ri!==null&&F(),Ri=d.value,p=H.target,p.addEventListener("touchcancel",z,Qt),p.addEventListener("touchend",z,Qt)),v=!0,_!==null&&clearTimeout(_),_=setTimeout(()=>{_=null,v=!1},200)))}function L(H){d.value!==null&&(H.qSkipRipple=v===!0,n("mousedown",H),H.defaultPrevented!==!0&&Pi!==d.value&&(Pi!==null&&F(),Pi=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("mouseup",z,Qt)))}function z(H){if(d.value!==null&&!(H!==void 0&&H.type==="blur"&&document.activeElement===d.value)){if(H!==void 0&&H.type==="keyup"){if(Si===d.value&&ri(H,[13,32])===!0){const se=new MouseEvent("click",H);se.qKeyEvent=!0,H.defaultPrevented===!0&&ao(se),H.cancelBubble===!0&&zy(se),d.value.dispatchEvent(se),Fn(H),H.qKeyEvent=!0}n("keyup",H)}F()}}function F(H){const se=f.value;H!==!0&&(Ri===d.value||Pi===d.value)&&se!==null&&se!==document.activeElement&&(se.setAttribute("tabindex",-1),se.focus()),Ri===d.value&&(p!==null&&(p.removeEventListener("touchcancel",z,Qt),p.removeEventListener("touchend",z,Qt)),Ri=p=null),Pi===d.value&&(document.removeEventListener("mouseup",z,Qt),Pi=null),Si===d.value&&(document.removeEventListener("keyup",z,!0),d.value!==null&&d.value.removeEventListener("blur",z,Qt),Si=null),d.value!==null&&d.value.classList.remove("q-btn--active")}function re(H){Fn(H),H.qSkipRipple=!0}return Mt(()=>{F(!0)}),Object.assign(r,{click:N}),()=>{let H=[];t.icon!==void 0&&H.push(j(ll,{name:t.icon,left:t.stack!==!0&&w.value===!0,role:"img","aria-hidden":"true"})),w.value===!0&&H.push(j("span",{class:"block"},[t.label])),H=Li(e.default,H),t.iconRight!==void 0&&t.round===!1&&H.push(j(ll,{name:t.iconRight,right:t.stack!==!0&&w.value===!0,role:"img","aria-hidden":"true"}));const se=[j("span",{class:"q-focus-helper",ref:f})];return t.loading===!0&&t.percentage!==void 0&&se.push(j("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[j("span",{class:"q-btn__progress-indicator fit block",style:T.value})])),se.push(j("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},H)),t.loading!==null&&se.push(j(Zi,{name:"q-transition--fade"},()=>t.loading===!0?[j("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[j(gv)])]:null)),$i(j(c.value,k.value,se),[[MS,y.value,void 0,E.value]])}}});const JS=j("div",{class:"q-space"});var Iv=Qe({name:"QSpace",setup(){return()=>JS}});const Uo={dark:{type:Boolean,default:null}};function $o(t,e){return M(()=>t.dark===null?e.dark.isActive:t.dark)}const XS={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},du={xs:2,sm:4,md:8,lg:16,xl:24};var ZS=Qe({name:"QSeparator",props:{...Uo,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const e=Ge(),n=$o(t,e.proxy.$q),r=M(()=>t.vertical===!0?"vertical":"horizontal"),i=M(()=>` q-separator--${r.value}`),s=M(()=>t.inset!==!1?`${i.value}-${XS[t.inset]}`:""),o=M(()=>`q-separator${i.value}${s.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(n.value===!0?" q-separator--dark":"")),a=M(()=>{const l={};if(t.size!==void 0&&(l[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const c=t.spaced===!0?`${du.md}px`:t.spaced in du?`${du[t.spaced]}px`:t.spaced,u=t.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${u[0]}`]=l[`margin${u[1]}`]=c}return l});return()=>j("hr",{class:o.value,style:a.value,"aria-orientation":r.value})}}),fu=Qe({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=M(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>j("div",{class:n.value},Nn(e.default))}}),pu=Qe({name:"QItem",props:{...Uo,...Ev,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ge(),i=$o(t,r),{hasLink:s,linkAttrs:o,linkClass:a,linkTag:l,navigateOnClick:c}=Tv(),u=_e(null),h=_e(null),d=M(()=>t.clickable===!0||s.value===!0||t.tag==="label"),f=M(()=>t.disable!==!0&&d.value===!0),p=M(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(s.value===!0&&t.active===null?a.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),v=M(()=>{if(t.insetLevel===void 0)return null;const E=r.lang.rtl===!0?"Right":"Left";return{["padding"+E]:16+t.insetLevel*56+"px"}});function _(E){f.value===!0&&(h.value!==null&&(E.qKeyEvent!==!0&&document.activeElement===u.value?h.value.focus():document.activeElement===h.value&&u.value.focus()),c(E))}function w(E){if(f.value===!0&&ri(E,[13,32])===!0){Fn(E),E.qKeyEvent=!0;const T=new MouseEvent("click",E);T.qKeyEvent=!0,u.value.dispatchEvent(T)}n("keyup",E)}function y(){const E=dv(e.default,[]);return f.value===!0&&E.unshift(j("div",{class:"q-focus-helper",tabindex:-1,ref:h})),E}return()=>{const E={ref:u,class:p.value,style:v.value,role:"listitem",onClick:_,onKeyup:w};return f.value===!0?(E.tabindex=t.tabindex||"0",Object.assign(E,o.value)):d.value===!0&&(E["aria-disabled"]="true"),j(l.value,E,y())}}}),eP=Qe({name:"QList",props:{...Uo,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=Ge(),r=$o(t,n.proxy.$q),i=M(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>j(t.tag,{class:i.value},Nn(e.default))}});function tP(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),sl.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const nP={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function rP({showing:t,avoidEmit:e,configureAnchorEl:n}){const{props:r,proxy:i,emit:s}=Ge(),o=_e(null);let a=null;function l(f){return o.value===null?!1:f===void 0||f.touches===void 0||f.touches.length<=1}const c={};n===void 0&&(Object.assign(c,{hide(f){i.hide(f)},toggle(f){i.toggle(f),f.qAnchorHandled=!0},toggleKey(f){ri(f,13)===!0&&c.toggle(f)},contextClick(f){i.hide(f),ao(f),hn(()=>{i.show(f),f.qAnchorHandled=!0})},prevent:ao,mobileTouch(f){if(c.mobileCleanup(f),l(f)!==!0)return;i.hide(f),o.value.classList.add("non-selectable");const p=f.target;nh(c,"anchor",[[p,"touchmove","mobileCleanup","passive"],[p,"touchend","mobileCleanup","passive"],[p,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),a=setTimeout(()=>{a=null,i.show(f),f.qAnchorHandled=!0},300)},mobileCleanup(f){o.value.classList.remove("non-selectable"),a!==null&&(clearTimeout(a),a=null),t.value===!0&&f!==void 0&&tP()}}),n=function(f=r.contextMenu){if(r.noParentEvent===!0||o.value===null)return;let p;f===!0?i.$q.platform.is.mobile===!0?p=[[o.value,"touchstart","mobileTouch","passive"]]:p=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:p=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],nh(c,"anchor",p)});function u(){Hy(c,"anchor")}function h(f){for(o.value=f;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function d(){if(r.target===!1||r.target===""||i.$el.parentNode===null)o.value=null;else if(r.target===!0)h(i.$el.parentNode);else{let f=r.target;if(typeof r.target=="string")try{f=document.querySelector(r.target)}catch{f=void 0}f!=null?(o.value=f.$el||f,n()):(o.value=null,console.error(`Anchor: target "${r.target}" not found`))}}return xe(()=>r.contextMenu,f=>{o.value!==null&&(u(),n(f))}),xe(()=>r.target,()=>{o.value!==null&&u(),d()}),xe(()=>r.noParentEvent,f=>{o.value!==null&&(f===!0?u():n())}),Hn(()=>{d(),e!==!0&&r.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),Mt(()=>{a!==null&&clearTimeout(a),u()}),{anchorEl:o,canShow:l,anchorEvents:c}}function iP(t,e){const n=_e(null);let r;function i(a,l){const c=`${l!==void 0?"add":"remove"}EventListener`,u=l!==void 0?l:r;a!==window&&a[c]("scroll",u,Xe.passive),window[c]("scroll",u,Xe.passive),r=l}function s(){n.value!==null&&(i(n.value),n.value=null)}const o=xe(()=>t.noParentEvent,()=>{n.value!==null&&(s(),e())});return Mt(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:i}}const bv={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Av=["beforeShow","show","beforeHide","hide"];function Rv({showing:t,canShow:e,hideOnRouteChange:n,handleShow:r,handleHide:i,processOnMount:s}){const o=Ge(),{props:a,emit:l,proxy:c}=o;let u;function h(y){t.value===!0?p(y):d(y)}function d(y){if(a.disable===!0||y!==void 0&&y.qAnchorHandled===!0||e!==void 0&&e(y)!==!0)return;const E=a["onUpdate:modelValue"]!==void 0;E===!0&&(l("update:modelValue",!0),u=y,hn(()=>{u===y&&(u=void 0)})),(a.modelValue===null||E===!1)&&f(y)}function f(y){t.value!==!0&&(t.value=!0,l("beforeShow",y),r!==void 0?r(y):l("show",y))}function p(y){if(a.disable===!0)return;const E=a["onUpdate:modelValue"]!==void 0;E===!0&&(l("update:modelValue",!1),u=y,hn(()=>{u===y&&(u=void 0)})),(a.modelValue===null||E===!1)&&v(y)}function v(y){t.value!==!1&&(t.value=!1,l("beforeHide",y),i!==void 0?i(y):l("hide",y))}function _(y){a.disable===!0&&y===!0?a["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!1):y===!0!==t.value&&(y===!0?f:v)(u)}xe(()=>a.modelValue,_),n!==void 0&&vv(o)===!0&&xe(()=>c.$route.fullPath,()=>{n.value===!0&&t.value===!0&&p()}),s===!0&&Hn(()=>{_(a.modelValue)});const w={show:d,hide:p,toggle:h};return Object.assign(c,w),w}let Br=[],ho=[];function Sv(t){ho=ho.filter(e=>e!==t)}function sP(t){Sv(t),ho.push(t)}function Sm(t){Sv(t),ho.length===0&&Br.length!==0&&(Br[Br.length-1](),Br=[])}function Pv(t){ho.length===0?t():Br.push(t)}function xU(t){Br=Br.filter(e=>e!==t)}let oP=1,aP=document.body;function Cv(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${oP++}`:t,al.globalNodes!==void 0){const r=al.globalNodes.class;r!==void 0&&(n.className=r)}return aP.appendChild(n),n}function lP(t){t.remove()}const zi=[];function cP(t){return zi.find(e=>e.contentEl!==null&&e.contentEl.contains(t))}function kv(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return Ma(t)}else if(t.__qPortal===!0){const n=Ma(t);return n!==void 0&&n.$options.name==="QPopupProxy"?(t.hide(e),n):t}t=Ma(t)}while(t!=null)}function uP(t,e,n){for(;n!==0&&t!==void 0&&t!==null;){if(t.__qPortal===!0){if(n--,t.$options.name==="QMenu"){t=kv(t,e);continue}t.hide(e)}t=Ma(t)}}function hP(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function xv(t,e,n,r){const i=_e(!1),s=_e(!1);let o=null;const a={},l=r==="dialog"&&hP(t);function c(h){if(h===!0){Sm(a),s.value=!0;return}s.value=!1,i.value===!1&&(l===!1&&o===null&&(o=Cv(!1,r)),i.value=!0,zi.push(t.proxy),sP(a))}function u(h){if(s.value=!1,h!==!0)return;Sm(a),i.value=!1;const d=zi.indexOf(t.proxy);d!==-1&&zi.splice(d,1),o!==null&&(lP(o),o=null)}return Kl(()=>{u(!0)}),t.proxy.__qPortal=!0,Xl(t.proxy,"contentEl",()=>e.value),{showPortal:c,hidePortal:u,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>l===!0?n():i.value===!0?[j(qb,{to:o},n())]:void 0}}const Ov={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Dv(t,e=()=>{},n=()=>{}){return{transitionProps:M(()=>{const r=`q-transition--${t.transitionShow||e()}`,i=`q-transition--${t.transitionHide||n()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:M(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}function Nv(){let t;const e=Ge();function n(){t=void 0}return pd(n),Mt(n),{removeTick:n,registerTick(r){t=r,hn(()=>{t===r&&(wv(e)===!1&&t(),t=void 0)})}}}function Lv(){let t=null;const e=Ge();function n(){t!==null&&(clearTimeout(t),t=null)}return pd(n),Mt(n),{removeTimeout:n,registerTimeout(r,i){n(),wv(e)===!1&&(t=setTimeout(r,i))}}}const dP=[null,document,document.body,document.scrollingElement,document.documentElement];function Vv(t,e){let n=LS(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return dP.includes(n)?window:n}function Mv(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function Fv(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let ya;function Fa(){if(ya!==void 0)return ya;const t=document.createElement("p"),e=document.createElement("div");hh(t,{width:"100%",height:"200px"}),hh(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let r=t.offsetWidth;return n===r&&(r=e.clientWidth),e.remove(),ya=n-r,ya}function fP(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}const Yr=[];let ns;function pP(t){ns=t.keyCode===27}function mP(){ns===!0&&(ns=!1)}function gP(t){ns===!0&&(ns=!1,ri(t,27)===!0&&Yr[Yr.length-1](t))}function Uv(t){window[t]("keydown",pP),window[t]("blur",mP),window[t]("keyup",gP),ns=!1}function $v(t){it.is.desktop===!0&&(Yr.push(t),Yr.length===1&&Uv("addEventListener"))}function cl(t){const e=Yr.indexOf(t);e!==-1&&(Yr.splice(e,1),Yr.length===0&&Uv("removeEventListener"))}const Jr=[];function Bv(t){Jr[Jr.length-1](t)}function qv(t){it.is.desktop===!0&&(Jr.push(t),Jr.length===1&&document.body.addEventListener("focusin",Bv))}function dh(t){const e=Jr.indexOf(t);e!==-1&&(Jr.splice(e,1),Jr.length===0&&document.body.removeEventListener("focusin",Bv))}const{notPassiveCapture:ul}=Xe,Xr=[];function hl(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let n=zi.length-1;for(;n>=0;){const r=zi[n].$;if(r.type.name==="QTooltip"){n--;continue}if(r.type.name!=="QDialog")break;if(r.props.seamless!==!0)return;n--}for(let r=Xr.length-1;r>=0;r--){const i=Xr[r];if((i.anchorEl.value===null||i.anchorEl.value.contains(e)===!1)&&(e===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(e)===!1))t.qClickOutside=!0,i.onClickOutside(t);else return}}function _P(t){Xr.push(t),Xr.length===1&&(document.addEventListener("mousedown",hl,ul),document.addEventListener("touchstart",hl,ul))}function Pm(t){const e=Xr.findIndex(n=>n===t);e!==-1&&(Xr.splice(e,1),Xr.length===0&&(document.removeEventListener("mousedown",hl,ul),document.removeEventListener("touchstart",hl,ul)))}let Cm,km;function xm(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function yP(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const fh={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{fh[`${t}#ltr`]=t,fh[`${t}#rtl`]=t});function Om(t,e){const n=t.split(" ");return{vertical:n[0],horizontal:fh[`${n[1]}#${e===!0?"rtl":"ltr"}`]}}function vP(t,e){let{top:n,left:r,right:i,bottom:s,width:o,height:a}=t.getBoundingClientRect();return e!==void 0&&(n-=e[1],r-=e[0],s+=e[1],i+=e[0],o+=e[0],a+=e[1]),{top:n,bottom:s,height:a,left:r,right:i,width:o,middle:r+(i-r)/2,center:n+(s-n)/2}}function wP(t,e,n){let{top:r,left:i}=t.getBoundingClientRect();return r+=e.top,i+=e.left,n!==void 0&&(r+=n[1],i+=n[0]),{top:r,bottom:r+1,height:1,left:i,right:i+1,width:1,middle:i,center:r}}function EP(t,e){return{top:0,center:e/2,bottom:e,left:0,middle:t/2,right:t}}function Dm(t,e,n,r){return{top:t[n.vertical]-e[r.vertical],left:t[n.horizontal]-e[r.horizontal]}}function jv(t,e=0){if(t.targetEl===null||t.anchorEl===null||e>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{jv(t,e+1)},10);return}const{targetEl:n,offset:r,anchorEl:i,anchorOrigin:s,selfOrigin:o,absoluteOffset:a,fit:l,cover:c,maxHeight:u,maxWidth:h}=t;if(it.is.ios===!0&&window.visualViewport!==void 0){const k=document.body.style,{offsetLeft:N,offsetTop:A}=window.visualViewport;N!==Cm&&(k.setProperty("--q-pe-left",N+"px"),Cm=N),A!==km&&(k.setProperty("--q-pe-top",A+"px"),km=A)}const{scrollLeft:d,scrollTop:f}=n,p=a===void 0?vP(i,c===!0?[0,0]:r):wP(i,a,r);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:h||"100vw",maxHeight:u||"100vh",visibility:"visible"});const{offsetWidth:v,offsetHeight:_}=n,{elWidth:w,elHeight:y}=l===!0||c===!0?{elWidth:Math.max(p.width,v),elHeight:c===!0?Math.max(p.height,_):_}:{elWidth:v,elHeight:_};let E={maxWidth:h,maxHeight:u};(l===!0||c===!0)&&(E.minWidth=p.width+"px",c===!0&&(E.minHeight=p.height+"px")),Object.assign(n.style,E);const T=EP(w,y);let b=Dm(p,T,s,o);if(a===void 0||r===void 0)mu(b,p,T,s,o);else{const{top:k,left:N}=b;mu(b,p,T,s,o);let A=!1;if(b.top!==k){A=!0;const D=2*r[1];p.center=p.top-=D,p.bottom-=D+2}if(b.left!==N){A=!0;const D=2*r[0];p.middle=p.left-=D,p.right-=D+2}A===!0&&(b=Dm(p,T,s,o),mu(b,p,T,s,o))}E={top:b.top+"px",left:b.left+"px"},b.maxHeight!==void 0&&(E.maxHeight=b.maxHeight+"px",p.height>b.maxHeight&&(E.minHeight=E.maxHeight)),b.maxWidth!==void 0&&(E.maxWidth=b.maxWidth+"px",p.width>b.maxWidth&&(E.minWidth=E.maxWidth)),Object.assign(n.style,E),n.scrollTop!==f&&(n.scrollTop=f),n.scrollLeft!==d&&(n.scrollLeft=d)}function mu(t,e,n,r,i){const s=n.bottom,o=n.right,a=Fa(),l=window.innerHeight-a,c=document.body.clientWidth;if(t.top<0||t.top+s>l)if(i.vertical==="center")t.top=e[r.vertical]>l/2?Math.max(0,l-s):0,t.maxHeight=Math.min(s,l);else if(e[r.vertical]>l/2){const u=Math.min(l,r.vertical==="center"?e.center:r.vertical===i.vertical?e.bottom:e.top);t.maxHeight=Math.min(s,u),t.top=Math.max(0,u-s)}else t.top=Math.max(0,r.vertical==="center"?e.center:r.vertical===i.vertical?e.top:e.bottom),t.maxHeight=Math.min(s,l-t.top);if(t.left<0||t.left+o>c)if(t.maxWidth=Math.min(o,c),i.horizontal==="middle")t.left=e[r.horizontal]>c/2?Math.max(0,c-o):0;else if(e[r.horizontal]>c/2){const u=Math.min(c,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.right:e.left);t.maxWidth=Math.min(o,u),t.left=Math.max(0,u-t.maxWidth)}else t.left=Math.max(0,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.left:e.right),t.maxWidth=Math.min(o,c-t.left)}var TP=Qe({name:"QMenu",inheritAttrs:!1,props:{...nP,...bv,...Uo,...Ov,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:xm},self:{type:String,validator:xm},offset:{type:Array,validator:yP},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Av,"click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){let i=null,s,o,a;const l=Ge(),{proxy:c}=l,{$q:u}=c,h=_e(null),d=_e(!1),f=M(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),p=$o(t,u),{registerTick:v,removeTick:_}=Nv(),{registerTimeout:w}=Lv(),{transitionProps:y,transitionStyle:E}=Dv(t),{localScrollTarget:T,changeScrollEvent:b,unconfigureScrollTarget:k}=iP(t,_t),{anchorEl:N,canShow:A}=rP({showing:d}),{hide:D}=Rv({showing:d,canShow:A,handleShow:ut,handleHide:ht,hideOnRouteChange:f,processOnMount:!0}),{showPortal:L,hidePortal:z,renderPortal:F}=xv(l,h,W,"menu"),re={anchorEl:N,innerRef:h,onClickOutside(P){if(t.persistent!==!0&&d.value===!0)return D(P),(P.type==="touchstart"||P.target.classList.contains("q-dialog__backdrop"))&&Fn(P),!0}},H=M(()=>Om(t.anchor||(t.cover===!0?"center middle":"bottom start"),u.lang.rtl)),se=M(()=>t.cover===!0?H.value:Om(t.self||"top start",u.lang.rtl)),ee=M(()=>(t.square===!0?" q-menu--square":"")+(p.value===!0?" q-menu--dark q-dark":"")),me=M(()=>t.autoClose===!0?{onClick:Kt}:{}),de=M(()=>d.value===!0&&t.persistent!==!0);xe(de,P=>{P===!0?($v(ge),_P(re)):(cl(ge),Pm(re))});function Be(){Pv(()=>{let P=h.value;P&&P.contains(document.activeElement)!==!0&&(P=P.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||P.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||P.querySelector("[autofocus], [data-autofocus]")||P,P.focus({preventScroll:!0}))})}function ut(P){if(i=t.noRefocus===!1?document.activeElement:null,qv(pe),L(),_t(),s=void 0,P!==void 0&&(t.touchPosition||t.contextMenu)){const J=jy(P);if(J.left!==void 0){const{top:Ee,left:Oe}=N.value.getBoundingClientRect();s={left:J.left-Oe,top:J.top-Ee}}}o===void 0&&(o=xe(()=>u.screen.width+"|"+u.screen.height+"|"+t.self+"|"+t.anchor+"|"+u.lang.rtl,R)),t.noFocus!==!0&&document.activeElement.blur(),v(()=>{R(),t.noFocus!==!0&&Be()}),w(()=>{u.platform.is.ios===!0&&(a=t.autoClose,h.value.click()),R(),L(!0),n("show",P)},t.transitionDuration)}function ht(P){_(),z(),qe(!0),i!==null&&(P===void 0||P.qClickOutside!==!0)&&(((P&&P.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),w(()=>{z(!0),n("hide",P)},t.transitionDuration)}function qe(P){s=void 0,o!==void 0&&(o(),o=void 0),(P===!0||d.value===!0)&&(dh(pe),k(),Pm(re),cl(ge)),P!==!0&&(i=null)}function _t(){(N.value!==null||t.scrollTarget!==void 0)&&(T.value=Vv(N.value,t.scrollTarget),b(T.value,R))}function Kt(P){a!==!0?(kv(c,P),n("click",P)):a=!1}function pe(P){de.value===!0&&t.noFocus!==!0&&_v(h.value,P.target)!==!0&&Be()}function ge(P){n("escapeKey"),D(P)}function R(){jv({targetEl:h.value,offset:t.offset,anchorEl:N.value,anchorOrigin:H.value,selfOrigin:se.value,absoluteOffset:s,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function W(){return j(Zi,y.value,()=>d.value===!0?j("div",{role:"menu",...r,ref:h,tabindex:-1,class:["q-menu q-position-engine scroll"+ee.value,r.class],style:[r.style,E.value],...me.value},Nn(e.default)):null)}return Mt(qe),Object.assign(c,{focus:Be,updatePosition:R}),F}}),IP=Qe({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:e}){const n=M(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>j("div",{class:n.value,role:"toolbar"},Nn(e.default))}});function bP(){const t=_e(!Wn.value);return t.value===!1&&Hn(()=>{t.value=!0}),t}const zv=typeof ResizeObserver!="undefined",Nm=zv===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ph=Qe({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let n=null,r,i={width:-1,height:-1};function s(l){l===!0||t.debounce===0||t.debounce==="0"?o():n===null&&(n=setTimeout(o,t.debounce))}function o(){if(n!==null&&(clearTimeout(n),n=null),r){const{offsetWidth:l,offsetHeight:c}=r;(l!==i.width||c!==i.height)&&(i={width:l,height:c},e("resize",i))}}const{proxy:a}=Ge();if(a.trigger=s,zv===!0){let l;const c=u=>{r=a.$el.parentNode,r?(l=new ResizeObserver(s),l.observe(r),o()):u!==!0&&hn(()=>{c(!0)})};return Hn(()=>{c()}),Mt(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():r&&l.unobserve(r))}),ni}else{let u=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",s,Xe.passive),c=void 0)},h=function(){u(),r&&r.contentDocument&&(c=r.contentDocument.defaultView,c.addEventListener("resize",s,Xe.passive),o())};const l=bP();let c;return Hn(()=>{hn(()=>{r=a.$el,r&&h()})}),Mt(u),()=>{if(l.value===!0)return j("object",{class:"q--avoid-card-border",style:Nm.style,tabindex:-1,type:"text/html",data:Nm.url,"aria-hidden":"true",onLoad:h})}}}}),AP=Qe({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ge(),i=Ct(vd,ji);if(i===ji)return console.error("QHeader needs to be child of QLayout"),ji;const s=_e(parseInt(t.heightHint,10)),o=_e(!0),a=M(()=>t.reveal===!0||i.view.value.indexOf("H")!==-1||r.platform.is.ios&&i.isContainer.value===!0),l=M(()=>{if(t.modelValue!==!0)return 0;if(a.value===!0)return o.value===!0?s.value:0;const y=s.value-i.scroll.value.position;return y>0?y:0}),c=M(()=>t.modelValue!==!0||a.value===!0&&o.value!==!0),u=M(()=>t.modelValue===!0&&c.value===!0&&t.reveal===!0),h=M(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),d=M(()=>{const y=i.rows.value.top,E={};return y[0]==="l"&&i.left.space===!0&&(E[r.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),y[2]==="r"&&i.right.space===!0&&(E[r.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),E});function f(y,E){i.update("header",y,E)}function p(y,E){y.value!==E&&(y.value=E)}function v({height:y}){p(s,y),f("size",y)}function _(y){u.value===!0&&p(o,!0),n("focusin",y)}xe(()=>t.modelValue,y=>{f("space",y),p(o,!0),i.animate()}),xe(l,y=>{f("offset",y)}),xe(()=>t.reveal,y=>{y===!1&&p(o,t.modelValue)}),xe(o,y=>{i.animate(),n("reveal",y)}),xe(i.scroll,y=>{t.reveal===!0&&p(o,y.direction==="up"||y.position<=t.revealOffset||y.position-y.inflectionPoint<100)});const w={};return i.instances.header=w,t.modelValue===!0&&f("size",s.value),f("space",t.modelValue),f("offset",l.value),Mt(()=>{i.instances.header===w&&(i.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const y=dv(e.default,[]);return t.elevated===!0&&y.push(j("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),y.push(j(ph,{debounce:0,onResize:v})),j("header",{class:h.value,style:d.value,onFocusin:_},y)}}}),RP=Qe({name:"QPageContainer",setup(t,{slots:e}){const{proxy:{$q:n}}=Ge(),r=Ct(vd,ji);if(r===ji)return console.error("QPageContainer needs to be child of QLayout"),ji;qi(iR,!0);const i=M(()=>{const s={};return r.header.space===!0&&(s.paddingTop=`${r.header.size}px`),r.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(s.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),s});return()=>j("div",{class:"q-page-container",style:i.value},Nn(e.default))}});const{passive:Lm}=Xe,SP=["both","horizontal","vertical"];var PP=Qe({name:"QScrollObserver",props:{axis:{type:String,validator:t=>SP.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:e}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,i,s;xe(()=>t.scrollTarget,()=>{l(),a()});function o(){r!==null&&r();const h=Math.max(0,Mv(i)),d=Fv(i),f={top:h-n.position.top,left:d-n.position.left};if(t.axis==="vertical"&&f.top===0||t.axis==="horizontal"&&f.left===0)return;const p=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:h,left:d},n.directionChanged=n.direction!==p,n.delta=f,n.directionChanged===!0&&(n.direction=p,n.inflectionPoint=n.position),e("scroll",{...n})}function a(){i=Vv(s,t.scrollTarget),i.addEventListener("scroll",c,Lm),c(!0)}function l(){i!==void 0&&(i.removeEventListener("scroll",c,Lm),i=void 0)}function c(h){if(h===!0||t.debounce===0||t.debounce==="0")o();else if(r===null){const[d,f]=t.debounce?[setTimeout(o,t.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];r=()=>{f(d),r=null}}}const{proxy:u}=Ge();return xe(()=>u.$q.lang.rtl,o),Hn(()=>{s=u.$el.parentNode,a()}),Mt(()=>{r!==null&&r(),l()}),Object.assign(u,{trigger:c,getPosition:()=>n}),ni}}),CP=Qe({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ge(),i=_e(null),s=_e(r.screen.height),o=_e(t.container===!0?0:r.screen.width),a=_e({position:0,direction:"down",inflectionPoint:0}),l=_e(0),c=_e(Wn.value===!0?0:Fa()),u=M(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),h=M(()=>t.container===!1?{minHeight:r.screen.height+"px"}:null),d=M(()=>c.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),f=M(()=>c.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function p(T){if(t.container===!0||document.qScrollPrevented!==!0){const b={position:T.position.top,direction:T.direction,directionChanged:T.directionChanged,inflectionPoint:T.inflectionPoint.top,delta:T.delta.top};a.value=b,t.onScroll!==void 0&&n("scroll",b)}}function v(T){const{height:b,width:k}=T;let N=!1;s.value!==b&&(N=!0,s.value=b,t.onScrollHeight!==void 0&&n("scrollHeight",b),w()),o.value!==k&&(N=!0,o.value=k),N===!0&&t.onResize!==void 0&&n("resize",T)}function _({height:T}){l.value!==T&&(l.value=T,w())}function w(){if(t.container===!0){const T=s.value>l.value?Fa():0;c.value!==T&&(c.value=T)}}let y=null;const E={instances:{},view:M(()=>t.view),isContainer:M(()=>t.container),rootRef:i,height:s,containerHeight:l,scrollbarWidth:c,totalWidth:M(()=>o.value+c.value),rows:M(()=>{const T=t.view.toLowerCase().split(" ");return{top:T[0].split(""),middle:T[1].split(""),bottom:T[2].split("")}}),header:cn({size:0,offset:0,space:!1}),right:cn({size:300,offset:0,space:!1}),footer:cn({size:0,offset:0,space:!1}),left:cn({size:300,offset:0,space:!1}),scroll:a,animate(){y!==null?clearTimeout(y):document.body.classList.add("q-body--layout-animate"),y=setTimeout(()=>{y=null,document.body.classList.remove("q-body--layout-animate")},155)},update(T,b,k){E[T][b]=k}};if(qi(vd,E),Fa()>0){let k=function(){T=null,b.classList.remove("hide-scrollbar")},N=function(){if(T===null){if(b.scrollHeight>r.screen.height)return;b.classList.add("hide-scrollbar")}else clearTimeout(T);T=setTimeout(k,300)},A=function(D){T!==null&&D==="remove"&&(clearTimeout(T),k()),window[`${D}EventListener`]("resize",N)},T=null;const b=document.body;xe(()=>t.container!==!0?"add":"remove",A),t.container!==!0&&A("add"),Kl(()=>{A("remove")})}return()=>{const T=Li(e.default,[j(PP,{onScroll:p}),j(ph,{onResize:v})]),b=j("div",{class:u.value,style:h.value,ref:t.container===!0?void 0:i,tabindex:-1},T);return t.container===!0?j("div",{class:"q-layout-container overflow-hidden",ref:i},[j(ph,{onResize:_}),j("div",{class:"absolute-full",style:d.value},[j("div",{class:"scroll",style:f.value},[b])])]):b}}});function Vm(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const e=parseInt(t,10);return isNaN(e)?0:e}var Ua=hv({name:"close-popup",beforeMount(t,{value:e}){const n={depth:Vm(e),handler(r){n.depth!==0&&setTimeout(()=>{const i=cP(t);i!==void 0&&uP(i,r,n.depth)})},handlerKey(r){ri(r,13)===!0&&n.handler(r)}};t.__qclosepopup=n,t.addEventListener("click",n.handler),t.addEventListener("keyup",n.handlerKey)},updated(t,{value:e,oldValue:n}){e!==n&&(t.__qclosepopup.depth=Vm(e))},beforeUnmount(t){const e=t.__qclosepopup;t.removeEventListener("click",e.handler),t.removeEventListener("keyup",e.handlerKey),delete t.__qclosepopup}});function kP(t){return td()?(U_(t),!0):!1}function hr(t){return typeof t=="function"?t():Ot(t)}const Bo=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const OU=t=>t!=null,xP=Object.prototype.toString,OP=t=>xP.call(t)==="[object Object]",dl=()=>{},DU=DP();function DP(){var t,e;return Bo&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function NP(t,e){function n(...r){return new Promise((i,s)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(i).catch(s)})}return n}const Hv=t=>t();function LP(t=Hv){const e=_e(!0);function n(){e.value=!1}function r(){e.value=!0}const i=(...s)=>{e.value&&t(...s)};return{isActive:ql(e),pause:n,resume:r,eventFilter:i}}const NU={mounted:"mounted",updated:"updated",unmounted:"unmounted"};function mh(t,e=!1,n="Timeout"){return new Promise((r,i)=>{setTimeout(e?()=>i(n):r,t)})}function VP(t){return t||Ge()}function LU(...t){if(t.length!==1)return ny(...t);const e=t[0];return typeof e=="function"?ql(W0(()=>({get:e,set:dl}))):_e(e)}function MP(t,e,n={}){const{eventFilter:r=Hv,...i}=n;return xe(t,NP(r,e),i)}function FP(t,e,n={}){const{eventFilter:r,...i}=n,{eventFilter:s,pause:o,resume:a,isActive:l}=LP(r);return{stop:MP(t,e,{...i,eventFilter:s}),pause:o,resume:a,isActive:l}}function UP(t,e=!0,n){VP()?Hn(t,n):e?t():hn(t)}function gh(t,e=!1){function n(h,{flush:d="sync",deep:f=!1,timeout:p,throwOnTimeout:v}={}){let _=null;const y=[new Promise(E=>{_=xe(t,T=>{h(T)!==e&&(_==null||_(),E(T))},{flush:d,deep:f,immediate:!0})})];return p!=null&&y.push(mh(p,v).then(()=>hr(t)).finally(()=>_==null?void 0:_())),Promise.race(y)}function r(h,d){if(!ze(h))return n(T=>T===h,d);const{flush:f="sync",deep:p=!1,timeout:v,throwOnTimeout:_}=d!=null?d:{};let w=null;const E=[new Promise(T=>{w=xe([t,h],([b,k])=>{e!==(b===k)&&(w==null||w(),T(b))},{flush:f,deep:p,immediate:!0})})];return v!=null&&E.push(mh(v,_).then(()=>hr(t)).finally(()=>(w==null||w(),hr(t)))),Promise.race(E)}function i(h){return n(d=>Boolean(d),h)}function s(h){return r(null,h)}function o(h){return r(void 0,h)}function a(h){return n(Number.isNaN,h)}function l(h,d){return n(f=>{const p=Array.from(f);return p.includes(h)||p.includes(hr(h))},d)}function c(h){return u(1,h)}function u(h=1,d){let f=-1;return n(()=>(f+=1,f>=h),d)}return Array.isArray(hr(t))?{toMatch:n,toContains:l,changed:c,changedTimes:u,get not(){return gh(t,!e)}}:{toMatch:n,toBe:r,toBeTruthy:i,toBeNull:s,toBeNaN:a,toBeUndefined:o,changed:c,changedTimes:u,get not(){return gh(t,!e)}}}function $P(t){return gh(t)}function BP(t){var e;const n=hr(t);return(e=n==null?void 0:n.$el)!=null?e:n}const fl=Bo?window:void 0;Bo&&window.document;Bo&&window.navigator;Bo&&window.location;function Mm(...t){let e,n,r,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,i]=t,e=fl):[e,n,r,i]=t,!e)return dl;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),l=xe(()=>[BP(e),hr(i)],([u,h])=>{if(o(),!u)return;const d=OP(h)?{...h}:h;s.push(...n.flatMap(f=>r.map(p=>a(u,f,p,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return kP(c),c}function VU(t,e,n){const{immediate:r=!0,delay:i=0,onError:s=dl,onSuccess:o=dl,resetOnExecute:a=!0,shallow:l=!0,throwError:c}=n!=null?n:{},u=l?Za(e):_e(e),h=_e(!1),d=_e(!1),f=Za(void 0);async function p(w=0,...y){a&&(u.value=e),f.value=void 0,h.value=!1,d.value=!0,w>0&&await mh(w);const E=typeof t=="function"?t(...y):t;try{const T=await E;u.value=T,h.value=!0,o(T)}catch(T){if(f.value=T,s(T),c)throw T}finally{d.value=!1}return u.value}r&&p(i);const v={state:u,isReady:h,isLoading:d,error:f,execute:p};function _(){return new Promise((w,y)=>{$P(d).toBe(!1).then(()=>w(v)).catch(y)})}return{...v,then(w,y){return _().then(w,y)}}}const va=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},wa="__vueuse_ssr_handlers__",qP=jP();function jP(){return wa in va||(va[wa]=va[wa]||{}),va[wa]}function zP(t,e){return qP[t]||e}function HP(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const Wv={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Fm="vueuse-storage";function WP(t,e,n,r={}){var i;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:h=fl,eventFilter:d,onError:f=L=>{console.error(L)},initOnMounted:p}=r,v=(u?Za:_e)(typeof e=="function"?e():e);if(!n)try{n=zP("getDefaultStorage",()=>{var L;return(L=fl)==null?void 0:L.localStorage})()}catch(L){f(L)}if(!n)return v;const _=hr(e),w=HP(_),y=(i=r.serializer)!=null?i:Wv[w],{pause:E,resume:T}=FP(v,()=>k(v.value),{flush:s,deep:o,eventFilter:d});h&&a&&UP(()=>{Mm(h,"storage",A),Mm(h,Fm,D),p&&A()}),p||A();function b(L,z){h&&h.dispatchEvent(new CustomEvent(Fm,{detail:{key:t,oldValue:L,newValue:z,storageArea:n}}))}function k(L){try{const z=n.getItem(t);if(L==null)b(z,null),n.removeItem(t);else{const F=y.write(L);z!==F&&(n.setItem(t,F),b(z,F))}}catch(z){f(z)}}function N(L){const z=L?L.newValue:n.getItem(t);if(z==null)return l&&_!=null&&n.setItem(t,y.write(_)),_;if(!L&&c){const F=y.read(z);return typeof c=="function"?c(F,_):w==="object"&&!Array.isArray(F)?{..._,...F}:F}else return typeof z!="string"?z:y.read(z)}function A(L){if(!(L&&L.storageArea!==n)){if(L&&L.key==null){v.value=_;return}if(!(L&&L.key!==t)){E();try{(L==null?void 0:L.newValue)!==y.write(v.value)&&(v.value=N(L))}catch(z){f(z)}finally{L?hn(T):T()}}}}function D(L){A(L.detail)}return v}function KP(t,e,n={}){const{window:r=fl}=n;return WP(t,e,r==null?void 0:r.localStorage,n)}const Kv=yR("auth",()=>{const t=KP("auth/user",null,{serializer:Wv.object}),e=M(()=>!!t.value),n=M(()=>{var s;return((s=t.value)==null?void 0:s.uid)||null});return{user:t,isAuthenticated:e,setUser:s=>{console.log("userDate: ",s),t.value=s,s?t.value={uid:s.uid,photoURL:s.photoURL,displayName:s.displayName,email:s.email,emailVerified:s.emailVerified}:t.value=null},uid:n,hasOwnContent:s=>e.value?n.value===s:!1}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},GP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new QP;const d=s<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class QP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YP=function(t){const e=Gv(t);return Qv.encodeByteArray(e,!0)},pl=function(t){return YP(t).replace(/\./g,"")},Yv=function(t){try{return Qv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=()=>JP().__FIREBASE_DEFAULTS__,ZP=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eC=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yv(t[1]);return e&&JSON.parse(e)},rc=()=>{try{return XP()||ZP()||eC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jv=t=>{var e,n;return(n=(e=rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xv=t=>{const e=Jv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zv=()=>{var t;return(t=rc())===null||t===void 0?void 0:t.config},ew=t=>{var e;return(e=rc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[pl(JSON.stringify(n)),pl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nC(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function rC(){var t;const e=(t=rc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sC(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oC(){return!rC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bd(){try{return typeof indexedDB=="object"}catch{return!1}}function rw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function aC(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lC,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,r)}}function cC(t,e){return t.replace(uC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uC=/\{\$([^}]+)}/g;function hC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Um(s)&&Um(o)){if(!fo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Um(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dC(t,e){const n=new fC(t,e);return n.subscribe.bind(n)}class fC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gu),i.error===void 0&&(i.error=gu),i.complete===void 0&&(i.complete=gu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=1e3,gC=2,_C=4*60*60*1e3,yC=.5;function $m(t,e=mC,n=gC){const r=e*Math.pow(n,t),i=Math.round(yC*r*(Math.random()-.5)*2);return Math.min(_C,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EC(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wC(t){return t===Vr?void 0:t}function EC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const IC={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},bC=Te.INFO,AC={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},RC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=AC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ic{constructor(e){this.name=e,this._logLevel=bC,this._logHandler=RC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const SC=(t,e)=>e.some(n=>t instanceof n);let Bm,qm;function PC(){return Bm||(Bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CC(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iw=new WeakMap,_h=new WeakMap,sw=new WeakMap,_u=new WeakMap,Ad=new WeakMap;function kC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iw.set(n,t)}).catch(()=>{}),Ad.set(e,t),e}function xC(t){if(_h.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_h.set(t,e)}let yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OC(t){yh=t(yh)}function DC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yu(this),e,...n);return sw.set(r,e.sort?e.sort():[e]),vr(r)}:CC().includes(t)?function(...e){return t.apply(yu(this),e),vr(iw.get(this))}:function(...e){return vr(t.apply(yu(this),e))}}function NC(t){return typeof t=="function"?DC(t):(t instanceof IDBTransaction&&xC(t),SC(t,PC())?new Proxy(t,yh):t)}function vr(t){if(t instanceof IDBRequest)return kC(t);if(_u.has(t))return _u.get(t);const e=NC(t);return e!==t&&(_u.set(t,e),Ad.set(e,t)),e}const yu=t=>Ad.get(t);function ow(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=vr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vr(o.result),l.oldVersion,l.newVersion,vr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const LC=["get","getKey","getAll","getAllKeys","count"],VC=["put","add","delete","clear"],vu=new Map;function jm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vu.get(e))return vu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||LC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return vu.set(e,s),s}OC(t=>({...t,get:(e,n,r)=>jm(e,n)||t.get(e,n,r),has:(e,n)=>!!jm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vh="@firebase/app",zm="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new ic("@firebase/app"),UC="@firebase/app-compat",$C="@firebase/analytics-compat",BC="@firebase/analytics",qC="@firebase/app-check-compat",jC="@firebase/app-check",zC="@firebase/auth",HC="@firebase/auth-compat",WC="@firebase/database",KC="@firebase/database-compat",GC="@firebase/functions",QC="@firebase/functions-compat",YC="@firebase/installations",JC="@firebase/installations-compat",XC="@firebase/messaging",ZC="@firebase/messaging-compat",ek="@firebase/performance",tk="@firebase/performance-compat",nk="@firebase/remote-config",rk="@firebase/remote-config-compat",ik="@firebase/storage",sk="@firebase/storage-compat",ok="@firebase/firestore",ak="@firebase/firestore-compat",lk="firebase",ck="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="[DEFAULT]",uk={[vh]:"fire-core",[UC]:"fire-core-compat",[BC]:"fire-analytics",[$C]:"fire-analytics-compat",[jC]:"fire-app-check",[qC]:"fire-app-check-compat",[zC]:"fire-auth",[HC]:"fire-auth-compat",[WC]:"fire-rtdb",[KC]:"fire-rtdb-compat",[GC]:"fire-fn",[QC]:"fire-fn-compat",[YC]:"fire-iid",[JC]:"fire-iid-compat",[XC]:"fire-fcm",[ZC]:"fire-fcm-compat",[ek]:"fire-perf",[tk]:"fire-perf-compat",[nk]:"fire-rc",[rk]:"fire-rc-compat",[ik]:"fire-gcs",[sk]:"fire-gcs-compat",[ok]:"fire-fst",[ak]:"fire-fst-compat","fire-js":"fire-js",[lk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Map,Eh=new Map;function hk(t,e){try{t.container.addComponent(e)}catch(n){ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(Eh.has(e))return ii.debug(`There were multiple attempts to register component ${e}.`),!1;Eh.set(e,t);for(const n of ml.values())hk(n,t);return!0}function Pr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wr=new _i("app","Firebase",dk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=ck;function aw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=Zv()),!n)throw wr.create("no-options");const s=ml.get(i);if(s){if(fo(n,s.options)&&fo(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new TC(i);for(const l of Eh.values())o.addComponent(l);const a=new fk(n,r,o);return ml.set(i,a),a}function sc(t=wh){const e=ml.get(t);if(!e&&t===wh&&Zv())return aw();if(!e)throw wr.create("no-app",{appName:t});return e}function Nt(t,e,n){var r;let i=(r=uk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ii.warn(a.join(" "));return}fn(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk="firebase-heartbeat-database",mk=1,po="firebase-heartbeat-store";let wu=null;function lw(){return wu||(wu=ow(pk,mk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(po)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),wu}async function gk(t){try{const n=(await lw()).transaction(po),r=await n.objectStore(po).get(cw(t));return await n.done,r}catch(e){if(e instanceof nn)ii.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ii.warn(n.message)}}}async function Hm(t,e){try{const r=(await lw()).transaction(po,"readwrite");await r.objectStore(po).put(e,cw(t)),await r.done}catch(n){if(n instanceof nn)ii.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ii.warn(r.message)}}}function cw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=1024,yk=30*24*60*60*1e3;class vk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ek(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=yk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wm(),{heartbeatsToSend:r,unsentEntries:i}=wk(this._heartbeatsCache.heartbeats),s=pl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wm(){return new Date().toISOString().substring(0,10)}function wk(t,e=_k){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Km(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Km(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ek{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bd()?rw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Km(t){return pl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){fn(new en("platform-logger",e=>new MC(e),"PRIVATE")),fn(new en("heartbeat",e=>new vk(e),"PRIVATE")),Nt(vh,zm,t),Nt(vh,zm,"esm2017"),Nt("fire-js","")}Tk("");function Rd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function uw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ik=uw,hw=new _i("auth","Firebase",uw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new ic("@firebase/auth");function bk(t,...e){gl.logLevel<=Te.WARN&&gl.warn(`Auth (${yi}): ${t}`,...e)}function $a(t,...e){gl.logLevel<=Te.ERROR&&gl.error(`Auth (${yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw Sd(t,...e)}function Rn(t,...e){return Sd(t,...e)}function dw(t,e,n){const r=Object.assign(Object.assign({},Ik()),{[e]:n});return new _i("auth","Firebase",r).create(e,{appName:t.name})}function Ak(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tn(t,"argument-error"),dw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hw.create(t,...e)}function ne(t,e,...n){if(!t)throw Sd(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $a(e),new Error(e)}function Kn(t,e){t||$n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Rk(){return Gm()==="http:"||Gm()==="https:"}function Gm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rk()||nw()||"connection"in navigator)?navigator.onLine:!0}function Pk(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=nC()||iC()}get(){return Sk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=new jo(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _n(t,e,n,r,i={}){return pw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=qo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fw.fetch()(mw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function pw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ck),e);try{const i=new Ok(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ea(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw dw(t,u,c);tn(t,u)}}catch(i){if(i instanceof nn)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function zo(t,e,n,r,i={}){const s=await _n(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Pd(t.config,i):`${t.config.apiScheme}://${i}`}function xk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ok{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),kk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}function Qm(t){return t!==void 0&&t.enterprise!==void 0}class Dk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Nk(t,e){return _n(t,"GET","/v2/recaptchaConfig",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(t,e){return _n(t,"POST","/v1/accounts:delete",e)}async function Vk(t,e){return _n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mk(t,e=!1){const n=Se(t),r=await n.getIdToken(e),i=Cd(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ks(Eu(i.auth_time)),issuedAtTime:Ks(Eu(i.iat)),expirationTime:Ks(Eu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Eu(t){return Number(t)*1e3}function Cd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $a("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yv(n);return i?JSON.parse(i):($a("Failed to decode base64 JWT payload"),null)}catch(i){return $a("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fk(t){const e=Cd(t);return ne(e,"internal-error"),ne(typeof e.exp!="undefined","internal-error"),ne(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&Uk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Uk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t){var e;const n=t.auth,r=await t.getIdToken(),i=await si(t,Vk(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?jk(s.providerUserInfo):[],a=qk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gw(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Bk(t){const e=Se(t);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jk(t){return t.map(e=>{var{providerId:n}=e,r=Rd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(t,e){const n=await pw(t,{},async()=>{const r=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Hk(t,e){return _n(t,"POST","/v2/accounts:revokeToken",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken!="undefined","internal-error"),ne(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Fk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await zk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mo;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){ne(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Zr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $k(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await si(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mk(this,e)}reload(){return Bk(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await si(this,Lk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:T,isAnonymous:b,providerData:k,stsTokenManager:N}=n;ne(E&&N,e,"internal-error");const A=mo.fromJSON(this.name,N);ne(typeof E=="string",e,"internal-error"),rr(h,e.name),rr(d,e.name),ne(typeof T=="boolean",e,"internal-error"),ne(typeof b=="boolean",e,"internal-error"),rr(f,e.name),rr(p,e.name),rr(v,e.name),rr(_,e.name),rr(w,e.name),rr(y,e.name);const D=new Zr({uid:E,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:A,createdAt:w,lastLoginAt:y});return k&&Array.isArray(k)&&(D.providerData=k.map(L=>Object.assign({},L))),_&&(D._redirectEventId=_),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new mo;i.updateFromServerResponse(n);const s=new Zr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _l(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new Map;function Bn(t){Kn(t instanceof Function,"Expected a class definition");let e=Ym.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ym.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_w.type="NONE";const Jm=_w;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ba(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ba("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hi(Bn(Jm),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Bn(Jm);const o=Ba(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Zr._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Hi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Hi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ww(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tw(e))return"Blackberry";if(Iw(e))return"Webos";if(kd(e))return"Safari";if((e.includes("chrome/")||vw(e))&&!e.includes("edge/"))return"Chrome";if(Ew(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yw(t=nt()){return/firefox\//i.test(t)}function kd(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vw(t=nt()){return/crios\//i.test(t)}function ww(t=nt()){return/iemobile/i.test(t)}function Ew(t=nt()){return/android/i.test(t)}function Tw(t=nt()){return/blackberry/i.test(t)}function Iw(t=nt()){return/webos/i.test(t)}function oc(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Wk(t=nt()){var e;return oc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kk(){return sC()&&document.documentMode===10}function bw(t=nt()){return oc(t)||Ew(t)||Iw(t)||Tw(t)||/windows phone/i.test(t)||ww(t)}function Gk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t,e=[]){let n;switch(t){case"Browser":n=Xm(nt());break;case"Worker":n=`${Xm(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(t,e={}){return _n(t,"GET","/v2/passwordPolicy",Jn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=6;class Xk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Jk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zm(this),this.idTokenSubscription=new Zm(this),this.beforeStateQueue=new Qk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Se(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yk(this),n=new Xk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Aw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xn(t){return Se(t)}class Zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=dC(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ex(t){ac=t}function Rw(t){return ac.loadJS(t)}function tx(){return ac.recaptchaEnterpriseScript}function nx(){return ac.gapiScript}function rx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ix="recaptcha-enterprise",sx="NO_RECAPTCHA";class ox{constructor(e){this.type=ix,this.auth=Xn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Nk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Dk(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Qm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(sx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Qm(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=tx();l.length!==0&&(l+=a),Rw(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function eg(t,e,n,r=!1){const i=new ox(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function yl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await eg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await eg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t,e){const n=Pr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(fo(s,e!=null?e:{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function lx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cx(t,e,n){const r=Xn(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Sw(e),{host:o,port:a}=ux(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hx()}function Sw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ux(t){const e=Sw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tg(o)}}}function tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function dx(t,e){return _n(t,"POST","/v1/accounts:update",e)}async function fx(t,e){return _n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function px(t,e){return zo(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}async function Pw(t,e){return _n(t,"POST","/v1/accounts:sendOobCode",Jn(t,e))}async function mx(t,e){return Pw(t,e)}async function gx(t,e){return Pw(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x(t,e){return zo(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function yx(t,e){return zo(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends xd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yl(e,n,"signInWithPassword",px);case"emailLink":return _x(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yl(e,r,"signUpPassword",fx);case"emailLink":return yx(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e){return zo(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="http://localhost";class oi extends xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:vx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ex(t){const e=ks(xs(t)).link,n=e?ks(xs(e)).deep_link_id:null,r=ks(xs(t)).deep_link_id;return(r?ks(xs(r)).link:null)||r||n||e||t}class Od{constructor(e){var n,r,i,s,o,a;const l=ks(xs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=wx((i=l.mode)!==null&&i!==void 0?i:null);ne(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ex(e);try{return new Od(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Od.parseLink(n);return ne(r,"argument-error"),go._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends Dd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ho{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Ho{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ho{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tx(t,e){return zo(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zr._fromIdTokenResponse(e,r,i),o=ng(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ng(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ng(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vl(e,n,r,i)}}function Cw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(t,s,e,r):s})}async function Ix(t,e,n=!1){const r=await si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await si(t,Cw(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=Cd(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(t,e,n=!1){const r="signIn",i=await Cw(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ax(t,e){return kw(Xn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t,e,n){var r;ne(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),ne(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ne(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(ne(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(t){const e=Xn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Rx(t,e,n){const r=Xn(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&xw(r,i,n),await yl(r,i,"getOobCode",gx)}async function Sx(t,e,n){const r=Xn(t),o=await yl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Tx).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ow(t),l}),a=await ai._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Px(t,e,n){return Ax(Se(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ow(t),r})}async function Cx(t,e){const n=Se(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&xw(n.auth,i,e);const{email:s}=await mx(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(t,e){return _n(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Se(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await si(r,kx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function xx(t,e){return Nw(Se(t),e,null)}function Ox(t,e){return Nw(Se(t),null,e)}async function Nw(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await si(t,dx(r,s));await t._updateTokensIfNecessary(o,!0)}function Dx(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function Nx(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function Lx(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function Vx(t){return Se(t).signOut()}const wl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wl,"1"),this.storage.removeItem(wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(){const t=nt();return kd(t)||oc(t)}const Fx=1e3,Ux=10;class Vw extends Lw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mx()&&Gk(),this.fallbackToPolling=bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Kk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ux):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vw.type="LOCAL";const $x=Vw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw extends Lw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mw.type="SESSION";const Fw=Mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Bx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Nd("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function jx(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(){return typeof Sn().WorkerGlobalScope!="undefined"&&typeof Sn().importScripts=="function"}async function zx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Wx(){return Uw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="firebaseLocalStorageDb",Kx=1,El="firebaseLocalStorage",Bw="fbase_key";class Wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cc(t,e){return t.transaction([El],e?"readwrite":"readonly").objectStore(El)}function Gx(){const t=indexedDB.deleteDatabase($w);return new Wo(t).toPromise()}function Ih(){const t=indexedDB.open($w,Kx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(El,{keyPath:Bw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(El)?e(r):(r.close(),await Gx(),e(await Ih()))})})}async function rg(t,e,n){const r=cc(t,!0).put({[Bw]:e,value:n});return new Wo(r).toPromise()}async function Qx(t,e){const n=cc(t,!1).get(e),r=await new Wo(n).toPromise();return r===void 0?null:r.value}function ig(t,e){const n=cc(t,!0).delete(e);return new Wo(n).toPromise()}const Yx=800,Jx=3;class qw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(Wx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zx(),!this.activeServiceWorker)return;this.sender=new qx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ih();return await rg(e,wl,"1"),await ig(e,wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ig(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cc(i,!1).getAll();return new Wo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qw.type="LOCAL";const Xx=qw;new jo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(t,e){return e?Bn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zx(t){return kw(t.auth,new Ld(t),t.bypassAuthState)}function e1(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),bx(n,new Ld(t),t.bypassAuthState)}async function t1(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Ix(n,new Ld(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zx;case"linkViaPopup":case"linkViaRedirect":return t1;case"reauthViaPopup":case"reauthViaRedirect":return e1;default:tn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=new jo(2e3,1e4);async function r1(t,e,n){const r=Xn(t);Ak(t,e,Dd);const i=jw(r,n);return new qr(r,"signInViaPopup",e,i).executeNotNull()}class qr extends zw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qr.currentPopupAction&&qr.currentPopupAction.cancel(),qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Nd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n1.get())};e()}}qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="pendingRedirect",qa=new Map;class s1 extends zw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qa.get(this.auth._key());if(!e){try{const r=await o1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qa.set(this.auth._key(),e)}return this.bypassAuthState||qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o1(t,e){const n=c1(e),r=l1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function a1(t,e){qa.set(t._key(),e)}function l1(t){return Bn(t._redirectPersistence)}function c1(t){return Ba(i1,t.config.apiKey,t.name)}async function u1(t,e,n=!1){const r=Xn(t),i=jw(r,e),o=await new s1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=10*60*1e3;class d1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h1&&this.cachedEventUids.clear(),this.cachedEventUids.has(sg(e))}saveEventToCache(e){this.cachedEventUids.add(sg(e)),this.lastProcessedEventTime=Date.now()}}function sg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(t,e={}){return _n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g1=/^https?/;async function _1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p1(t);for(const n of e)try{if(y1(n))return}catch{}tn(t,"unauthorized-domain")}function y1(t){const e=Th(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!g1.test(n))return!1;if(m1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=new jo(3e4,6e4);function og(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function w1(t){return new Promise((e,n)=>{var r,i,s;function o(){og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{og(),n(Rn(t,"network-request-failed"))},timeout:v1.get()})}if(!((i=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Sn().gapi)===null||s===void 0)&&s.load)o();else{const a=rx("iframefcb");return Sn()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},Rw(`${nx()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ja=null,e})}let ja=null;function E1(t){return ja=ja||w1(t),ja}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=new jo(5e3,15e3),I1="__/auth/iframe",b1="emulator/auth/iframe",A1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S1(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pd(e,b1):`https://${t.config.authDomain}/${I1}`,r={apiKey:e.apiKey,appName:t.name,v:yi},i=R1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qo(r).slice(1)}`}async function P1(t){const e=await E1(t),n=Sn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:S1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=Sn().setTimeout(()=>{s(o)},T1.get());function l(){Sn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k1=500,x1=600,O1="_blank",D1="http://localhost";class ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N1(t,e,n,r=k1,i=x1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},C1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=nt().toLowerCase();n&&(a=vw(c)?O1:n),yw(c)&&(e=e||D1,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Wk(c)&&a!=="_self")return L1(e||"",a),new ag(null);const h=window.open(e||"",a,u);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new ag(h)}function L1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="__/auth/handler",M1="emulator/auth/handler",F1=encodeURIComponent("fac");async function lg(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:i};if(e instanceof Dd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Ho){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${F1}=${encodeURIComponent(l)}`:"";return`${U1(t)}?${qo(a).slice(1)}${c}`}function U1({config:t}){return t.emulator?Pd(t,M1):`https://${t.authDomain}/${V1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="webStorageSupport";class $1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fw,this._completeRedirectFn=u1,this._overrideRedirectResult=a1}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lg(e,n,r,Th(),i);return N1(e,o,Nd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lg(e,n,r,Th(),i);return jx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P1(e),r=new d1(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tu,{type:Tu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Tu];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bw()||kd()||oc()}}const B1=$1;var cg="@firebase/auth",ug="1.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function z1(t){fn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Aw(t)},c=new Zk(r,i,s,l);return lx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fn(new en("auth-internal",e=>{const n=Xn(e.getProvider("auth").getImmediate());return(r=>new q1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(cg,ug,j1(t)),Nt(cg,ug,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=5*60,W1=ew("authIdTokenMaxAge")||H1;let hg=null;const K1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W1)return;const i=n==null?void 0:n.token;hg!==i&&(hg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function G1(t=sc()){const e=Pr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ax(t,{popupRedirectResolver:B1,persistence:[Xx,$x,Fw]}),r=ew("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const s=K1(r);Nx(n,s,()=>s(n.currentUser)),Dx(n,o=>s(o))}const i=Jv("auth");return i&&cx(n,`http://${i}`),n}function Q1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ex({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Q1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});z1("Browser");var Y1=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},G,Vd=Vd||{},le=Y1||self;function uc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ko(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function J1(t){return Object.prototype.hasOwnProperty.call(t,Iu)&&t[Iu]||(t[Iu]=++X1)}var Iu="closure_uid_"+(1e9*Math.random()>>>0),X1=0;function Z1(t,e,n){return t.call.apply(t.bind,arguments)}function eO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function It(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=Z1:It=eO,It.apply(null,arguments)}function Ta(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ct(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Cr(){this.s=this.s,this.o=this.o}var tO=0;Cr.prototype.s=!1;Cr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tO!=0)&&J1(this)};Cr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ww=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Md(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function dg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(uc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}bt.prototype.h=function(){this.defaultPrevented=!0};var nO=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};le.addEventListener("test",n,e),le.removeEventListener("test",n,e)}catch{}return t}();function _o(t){return/^[\s\xa0]*$/.test(t)}function hc(){var t=le.navigator;return t&&(t=t.userAgent)?t:""}function Tn(t){return hc().indexOf(t)!=-1}function Fd(t){return Fd[" "](t),t}Fd[" "]=function(){};function rO(t,e){var n=QO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var iO=Tn("Opera"),rs=Tn("Trident")||Tn("MSIE"),Kw=Tn("Edge"),bh=Kw||rs,Gw=Tn("Gecko")&&!(hc().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge"))&&!(Tn("Trident")||Tn("MSIE"))&&!Tn("Edge"),sO=hc().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge");function Qw(){var t=le.document;return t?t.documentMode:void 0}var Ah;e:{var bu="",Au=function(){var t=hc();if(Gw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Kw)return/Edge\/([\d\.]+)/.exec(t);if(rs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(sO)return/WebKit\/(\S+)/.exec(t);if(iO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Au&&(bu=Au?Au[1]:""),rs){var Ru=Qw();if(Ru!=null&&Ru>parseFloat(bu)){Ah=String(Ru);break e}}Ah=bu}var Rh;if(le.document&&rs){var fg=Qw();Rh=fg||parseInt(Ah,10)||void 0}else Rh=void 0;var oO=Rh;function yo(t,e){if(bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Gw){e:{try{Fd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:aO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yo.$.h.call(this)}}ct(yo,bt);var aO={2:"touch",3:"pen",4:"mouse"};yo.prototype.h=function(){yo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Go="closure_listenable_"+(1e6*Math.random()|0),lO=0;function cO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++lO,this.fa=this.ia=!1}function dc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ud(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function uO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Yw(t){const e={};for(const n in t)e[n]=t[n];return e}const pg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<pg.length;s++)n=pg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fc(t){this.src=t,this.g={},this.h=0}fc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ph(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new cO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Sh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Ww(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ph(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var $d="closure_lm_"+(1e6*Math.random()|0),Su={};function Xw(t,e,n,r,i){if(r&&r.once)return eE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Xw(t,e[s],n,r,i);return null}return n=jd(n),t&&t[Go]?t.O(e,n,Ko(r)?!!r.capture:!!r,i):Zw(t,e,n,!1,r,i)}function Zw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ko(i)?!!i.capture:!!i,a=qd(t);if(a||(t[$d]=a=new fc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=hO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(nE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hO(){function t(n){return e.call(t.src,t.listener,n)}const e=dO;return t}function eE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)eE(t,e[s],n,r,i);return null}return n=jd(n),t&&t[Go]?t.P(e,n,Ko(r)?!!r.capture:!!r,i):Zw(t,e,n,!0,r,i)}function tE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)tE(t,e[s],n,r,i);else r=Ko(r)?!!r.capture:!!r,n=jd(n),t&&t[Go]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ph(s,n,r,i),-1<n&&(dc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=qd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ph(e,n,r,i)),(n=-1<t?e[t]:null)&&Bd(n))}function Bd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Go])Sh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(nE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=qd(e))?(Sh(n,t),n.h==0&&(n.src=null,e[$d]=null)):dc(t)}}}function nE(t){return t in Su?Su[t]:Su[t]="on"+t}function dO(t,e){if(t.fa)t=!0;else{e=new yo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Bd(t),t=n.call(r,e)}return t}function qd(t){return t=t[$d],t instanceof fc?t:null}var Pu="__closure_events_fn_"+(1e9*Math.random()>>>0);function jd(t){return typeof t=="function"?t:(t[Pu]||(t[Pu]=function(e){return t.handleEvent(e)}),t[Pu])}function lt(){Cr.call(this),this.i=new fc(this),this.S=this,this.J=null}ct(lt,Cr);lt.prototype[Go]=!0;lt.prototype.removeEventListener=function(t,e,n,r){tE(this,t,e,n,r)};function mt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new bt(e,t);else if(e instanceof bt)e.target=e.target||t;else{var i=e;e=new bt(r,t),Jw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ia(o,r,!0,e)&&i}if(o=e.g=t,i=Ia(o,r,!0,e)&&i,i=Ia(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ia(o,r,!1,e)&&i}lt.prototype.N=function(){if(lt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dc(n[r]);delete t.g[e],t.h--}}this.J=null};lt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};lt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ia(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Sh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var zd=le.JSON.stringify;class fO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function pO(){var t=Hd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mO{constructor(){this.h=this.g=null}add(e,n){const r=rE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var rE=new fO(()=>new gO,t=>t.reset());class gO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _O(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function yO(t){le.setTimeout(()=>{throw t},0)}let vo,wo=!1,Hd=new mO,iE=()=>{const t=le.Promise.resolve(void 0);vo=()=>{t.then(vO)}};var vO=()=>{for(var t;t=pO();){try{t.h.call(t.g)}catch(n){yO(n)}var e=rE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wo=!1};function pc(t,e){lt.call(this),this.h=t||1,this.g=e||le,this.j=It(this.qb,this),this.l=Date.now()}ct(pc,lt);G=pc.prototype;G.ga=!1;G.T=null;G.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),mt(this,"tick"),this.ga&&(Wd(this),this.start()))}};G.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}G.N=function(){pc.$.N.call(this),Wd(this),delete this.g};function Kd(t,e,n){if(typeof t=="function")n&&(t=It(t,n));else if(t&&typeof t.handleEvent=="function")t=It(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(t,e||0)}function sE(t){t.g=Kd(()=>{t.g=null,t.i&&(t.i=!1,sE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class wO extends Cr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sE(this)}N(){super.N(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Eo(t){Cr.call(this),this.h=t,this.g={}}ct(Eo,Cr);var mg=[];function oE(t,e,n,r){Array.isArray(n)||(n&&(mg[0]=n.toString()),n=mg);for(var i=0;i<n.length;i++){var s=Xw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function aE(t){Ud(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bd(e)},t),t.g={}}Eo.prototype.N=function(){Eo.$.N.call(this),aE(this)};Eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mc(){this.g=!0}mc.prototype.Ea=function(){this.g=!1};function EO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function TO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Vi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+bO(t,n)+(r?" "+r:"")})}function IO(t,e){t.info(function(){return"TIMEOUT: "+e})}mc.prototype.info=function(){};function bO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return zd(n)}catch{return e}}var vi={},gg=null;function gc(){return gg=gg||new lt}vi.Ta="serverreachability";function lE(t){bt.call(this,vi.Ta,t)}ct(lE,bt);function To(t){const e=gc();mt(e,new lE(e))}vi.STAT_EVENT="statevent";function cE(t,e){bt.call(this,vi.STAT_EVENT,t),this.stat=e}ct(cE,bt);function Pt(t){const e=gc();mt(e,new cE(e,t))}vi.Ua="timingevent";function uE(t,e){bt.call(this,vi.Ua,t),this.size=e}ct(uE,bt);function Qo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){t()},e)}var _c={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},hE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gd(){}Gd.prototype.h=null;function _g(t){return t.h||(t.h=t.i())}function dE(){}var Yo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qd(){bt.call(this,"d")}ct(Qd,bt);function Yd(){bt.call(this,"c")}ct(Yd,bt);var Ch;function yc(){}ct(yc,Gd);yc.prototype.g=function(){return new XMLHttpRequest};yc.prototype.i=function(){return{}};Ch=new yc;function Jo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Eo(this),this.P=AO,t=bh?125:void 0,this.V=new pc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new fE}function fE(){this.i=null,this.g="",this.h=!1}var AO=45e3,pE={},kh={};G=Jo.prototype;G.setTimeout=function(t){this.P=t};function xh(t,e,n){t.L=1,t.A=wc(Gn(e)),t.u=n,t.S=!0,mE(t,null)}function mE(t,e){t.G=Date.now(),Xo(t),t.B=Gn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),IE(n.i,"t",r),t.o=0,n=t.l.J,t.h=new fE,t.g=zE(t.l,n?e:null,!t.u),0<t.O&&(t.M=new wO(It(t.Pa,t,t.g),t.O)),oE(t.U,t.g,"readystatechange",t.nb),e=t.I?Yw(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),To(),EO(t.j,t.v,t.B,t.m,t.W,t.u)}G.nb=function(t){t=t.target;const e=this.M;e&&In(t)==3?e.l():this.Pa(t)};G.Pa=function(t){try{if(t==this.g)e:{const u=In(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||bh||this.g&&(this.h.h||this.g.ja()||Eg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?To(3):To(2)),vc(this);var n=this.g.da();this.ca=n;t:if(gE(this)){var r=Eg(this.g);t="";var i=r.length,s=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){jr(this),Gs(this);var o="";break t}this.h.i=new le.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,TO(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_o(a)){var c=a;break t}}c=null}if(n=c)Vi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oh(this,n);else{this.i=!1,this.s=3,Pt(12),jr(this),Gs(this);break e}}this.S?(_E(this,u,o),bh&&this.i&&u==3&&(oE(this.U,this.V,"tick",this.mb),this.V.start())):(Vi(this.j,this.m,o,null),Oh(this,o)),u==4&&jr(this),this.i&&!this.J&&(u==4?$E(this.l,this):(this.i=!1,Xo(this)))}else WO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),jr(this),Gs(this)}}}catch{}finally{}};function gE(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function _E(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=RO(t,n),i==kh){e==4&&(t.s=4,Pt(14),r=!1),Vi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==pE){t.s=4,Pt(15),Vi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Vi(t.j,t.m,i,null),Oh(t,i);gE(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nf(e),e.M=!0,Pt(11))):(Vi(t.j,t.m,n,"[Invalid Chunked Response]"),jr(t),Gs(t))}G.mb=function(){if(this.g){var t=In(this.g),e=this.g.ja();this.o<e.length&&(vc(this),_E(this,t,e),this.i&&t!=4&&Xo(this))}};function RO(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?kh:(n=Number(e.substring(n,r)),isNaN(n)?pE:(r+=1,r+n>e.length?kh:(e=e.slice(r,r+n),t.o=r+n,e)))}G.cancel=function(){this.J=!0,jr(this)};function Xo(t){t.Y=Date.now()+t.P,yE(t,t.P)}function yE(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Qo(It(t.lb,t),e)}function vc(t){t.C&&(le.clearTimeout(t.C),t.C=null)}G.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(IO(this.j,this.B),this.L!=2&&(To(),Pt(17)),jr(this),this.s=2,Gs(this)):yE(this,this.Y-t)};function Gs(t){t.l.H==0||t.J||$E(t.l,t)}function jr(t){vc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wd(t.V),aE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Oh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Dh(n.i,t))){if(!t.K&&Dh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)bl(n),bc(n);else break e;tf(n),Pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Qo(It(n.ib,n),6e3));if(1>=RE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else zr(n,11)}else if((t.K||n.g==t)&&bl(n),!_o(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Jd(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Me(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=jE(r,r.J?r.pa:null,r.Y),o.K){SE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(vc(a),Xo(a)),r.g=o}else FE(r);0<n.j.length&&Ac(n)}else c[0]!="stop"&&c[0]!="close"||zr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?zr(n,7):ef(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}To(4)}catch{}}function SO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(uc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function PO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(uc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function vE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(uc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=PO(t),r=SO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var wE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ei(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ei){this.h=t.h,Tl(this,t.j),this.s=t.s,this.g=t.g,Il(this,t.m),this.l=t.l;var e=t.i,n=new Io;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yg(this,n),this.o=t.o}else t&&(e=String(t).match(wE))?(this.h=!1,Tl(this,e[1]||"",!0),this.s=Os(e[2]||""),this.g=Os(e[3]||"",!0),Il(this,e[4]),this.l=Os(e[5]||"",!0),yg(this,e[6]||"",!0),this.o=Os(e[7]||"")):(this.h=!1,this.i=new Io(null,this.h))}ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ds(e,vg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ds(e,vg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ds(n,n.charAt(0)=="/"?OO:xO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ds(n,NO)),t.join("")};function Gn(t){return new ei(t)}function Tl(t,e,n){t.j=n?Os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Il(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yg(t,e,n){e instanceof Io?(t.i=e,LO(t.i,t.h)):(n||(e=Ds(e,DO)),t.i=new Io(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function wc(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ds(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,kO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vg=/[#\/\?@]/g,xO=/[#\?:]/g,OO=/[#\?]/g,DO=/[#\?@]/g,NO=/#/g;function Io(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function kr(t){t.g||(t.g=new Map,t.h=0,t.i&&CO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=Io.prototype;G.add=function(t,e){kr(this),this.i=null,t=ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function EE(t,e){kr(t),e=ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function TE(t,e){return kr(t),e=ps(t,e),t.g.has(e)}G.forEach=function(t,e){kr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};G.ta=function(){kr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};G.Z=function(t){kr(this);let e=[];if(typeof t=="string")TE(this,t)&&(e=e.concat(this.g.get(ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return kr(this),this.i=null,t=ps(this,t),TE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function IE(t,e,n){EE(t,e),0<n.length&&(t.i=null,t.g.set(ps(t,e),Md(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function LO(t,e){e&&!t.j&&(kr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(EE(this,r),IE(this,i,n))},t)),t.j=e}var VO=class{constructor(t,e){this.g=t,this.map=e}};function bE(t){this.l=t||MO,le.PerformanceNavigationTiming?(t=le.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(le.g&&le.g.Ka&&le.g.Ka()&&le.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var MO=10;function AE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function RE(t){return t.h?1:t.g?t.g.size:0}function Dh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jd(t,e){t.g?t.g.add(e):t.h=e}function SE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bE.prototype.cancel=function(){if(this.i=PE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function PE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Md(t.i)}var FO=class{stringify(t){return le.JSON.stringify(t,void 0)}parse(t){return le.JSON.parse(t,void 0)}};function UO(){this.g=new FO}function $O(t,e,n){const r=n||"";try{vE(t,function(i,s){let o=i;Ko(i)&&(o=zd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function BO(t,e){const n=new mc;if(le.Image){const r=new Image;r.onload=Ta(ba,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ta(ba,n,r,"TestLoadImage: error",!1,e),r.onabort=Ta(ba,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ta(ba,n,r,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ba(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ec(t){this.l=t.ec||null,this.j=t.ob||!1}ct(Ec,Gd);Ec.prototype.g=function(){return new Tc(this.l,this.j)};Ec.prototype.i=function(t){return function(){return t}}({});function Tc(t,e){lt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Xd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(Tc,lt);var Xd=0;G=Tc.prototype;G.open=function(t,e){if(this.readyState!=Xd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bo(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||le).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zo(this)),this.readyState=Xd};G.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bo(this)),this.g&&(this.readyState=3,bo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof le.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;CE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function CE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}G.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zo(this):bo(this),this.readyState==3&&CE(this)}};G.Za=function(t){this.g&&(this.response=this.responseText=t,Zo(this))};G.Ya=function(t){this.g&&(this.response=t,Zo(this))};G.ka=function(){this.g&&Zo(this)};function Zo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bo(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Tc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qO=le.JSON.parse;function He(t){lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=kE,this.L=this.M=!1}ct(He,lt);var kE="",jO=/^https?$/i,zO=["POST","PUT"];G=He.prototype;G.Oa=function(t){this.M=t};G.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ch.g(),this.C=this.u?_g(this.u):_g(Ch),this.g.onreadystatechange=It(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){wg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=le.FormData&&t instanceof le.FormData,!(0<=Ww(zO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{DE(this),0<this.B&&((this.L=HO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.ua,this)):this.A=Kd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){wg(this,s)}};function HO(t){return rs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.ua=function(){typeof Vd!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mt(this,"timeout"),this.abort(8))};function wg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xE(t),Ic(t)}function xE(t){t.F||(t.F=!0,mt(t,"complete"),mt(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,mt(this,"complete"),mt(this,"abort"),Ic(this))};G.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ic(this,!0)),He.$.N.call(this)};G.La=function(){this.s||(this.G||this.v||this.l?OE(this):this.kb())};G.kb=function(){OE(this)};function OE(t){if(t.h&&typeof Vd!="undefined"&&(!t.C[1]||In(t)!=4||t.da()!=2)){if(t.v&&In(t)==4)Kd(t.La,0,t);else if(mt(t,"readystatechange"),In(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(wE)[1]||null;!i&&le.self&&le.self.location&&(i=le.self.location.protocol.slice(0,-1)),r=!jO.test(i?i.toLowerCase():"")}n=r}if(n)mt(t,"complete"),mt(t,"success");else{t.m=6;try{var s=2<In(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",xE(t)}}finally{Ic(t)}}}}function Ic(t,e){if(t.g){DE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||mt(t,"ready");try{n.onreadystatechange=r}catch{}}}function DE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(le.clearTimeout(t.A),t.A=null)}G.isActive=function(){return!!this.g};function In(t){return t.g?t.g.readyState:0}G.da=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}};G.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qO(e)}};function Eg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case kE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function WO(t){const e={};t=(t.g&&2<=In(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(_o(t[r]))continue;var n=_O(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}uO(e,function(r){return r.join(", ")})}G.Ia=function(){return this.m};G.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function NE(t){let e="";return Ud(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=NE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Ts(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function LE(t){this.Ga=0,this.j=[],this.l=new mc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ts("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ts("baseRetryDelayMs",5e3,t),this.hb=Ts("retryDelaySeedMs",1e4,t),this.eb=Ts("forwardChannelMaxRetries",2,t),this.xa=Ts("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new bE(t&&t.concurrentRequestLimit),this.Ja=new UO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}G=LE.prototype;G.ra=8;G.H=1;function ef(t){if(VE(t),t.H==3){var e=t.W++,n=Gn(t.I);if(Me(n,"SID",t.K),Me(n,"RID",e),Me(n,"TYPE","terminate"),ea(t,n),e=new Jo(t,t.l,e),e.L=2,e.A=wc(Gn(n)),n=!1,le.navigator&&le.navigator.sendBeacon)try{n=le.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&le.Image&&(new Image().src=e.A,n=!0),n||(e.g=zE(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Xo(e)}qE(t)}function bc(t){t.g&&(nf(t),t.g.cancel(),t.g=null)}function VE(t){bc(t),t.u&&(le.clearTimeout(t.u),t.u=null),bl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&le.clearTimeout(t.m),t.m=null)}function Ac(t){if(!AE(t.i)&&!t.m){t.m=!0;var e=t.Na;vo||iE(),wo||(vo(),wo=!0),Hd.add(e,t),t.C=0}}function KO(t,e){return RE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Qo(It(t.Na,t,e),BE(t,t.C)),t.C++,!0)}G.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Jo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Yw(s),Jw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ME(this,i,e),n=Gn(this.I),Me(n,"RID",t),Me(n,"CVER",22),this.F&&Me(n,"X-HTTP-Session-Id",this.F),ea(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(NE(s)))+"&"+e:this.o&&Zd(n,this.o,s)),Jd(this.i,i),this.bb&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),i.aa=!0,xh(i,n,null)):xh(i,n,e),this.H=2}}else this.H==3&&(t?Tg(this,t):this.j.length==0||AE(this.i)||Tg(this))};function Tg(t,e){var n;e?n=e.m:n=t.W++;const r=Gn(t.I);Me(r,"SID",t.K),Me(r,"RID",n),Me(r,"AID",t.V),ea(t,r),t.o&&t.s&&Zd(r,t.o,t.s),n=new Jo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ME(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Jd(t.i,n),xh(n,r,e)}function ea(t,e){t.na&&Ud(t.na,function(n,r){Me(e,r,n)}),t.h&&vE({},function(n,r){Me(e,r,n)})}function ME(t,e,n){n=Math.min(t.j.length,n);var r=t.h?It(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{$O(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function FE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;vo||iE(),wo||(vo(),wo=!0),Hd.add(e,t),t.A=0}}function tf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Qo(It(t.Ma,t),BE(t,t.A)),t.A++,!0)}G.Ma=function(){if(this.u=null,UE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Qo(It(this.jb,this),t)}};G.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pt(10),bc(this),UE(this))};function nf(t){t.B!=null&&(le.clearTimeout(t.B),t.B=null)}function UE(t){t.g=new Jo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Gn(t.wa);Me(e,"RID","rpc"),Me(e,"SID",t.K),Me(e,"AID",t.V),Me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Me(e,"TO",t.qa),Me(e,"TYPE","xmlhttp"),ea(t,e),t.o&&t.s&&Zd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=wc(Gn(e)),n.u=null,n.S=!0,mE(n,t)}G.ib=function(){this.v!=null&&(this.v=null,bc(this),tf(this),Pt(19))};function bl(t){t.v!=null&&(le.clearTimeout(t.v),t.v=null)}function $E(t,e){var n=null;if(t.g==e){bl(t),nf(t),t.g=null;var r=2}else if(Dh(t.i,e))n=e.F,SE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=gc(),mt(r,new uE(r,n)),Ac(t)}else FE(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&KO(t,e)||r==2&&tf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zr(t,5);break;case 4:zr(t,10);break;case 3:zr(t,6);break;default:zr(t,2)}}}function BE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function zr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=It(t.pb,t);n||(n=new ei("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||Tl(n,"https"),wc(n)),BO(n.toString(),r)}else Pt(2);t.H=0,t.h&&t.h.za(e),qE(t),VE(t)}G.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Pt(2)):(this.l.info("Failed to ping google.com"),Pt(1))};function qE(t){if(t.H=0,t.ma=[],t.h){const e=PE(t.i);(e.length!=0||t.j.length!=0)&&(dg(t.ma,e),dg(t.ma,t.j),t.i.i.length=0,Md(t.j),t.j.length=0),t.h.ya()}}function jE(t,e,n){var r=n instanceof ei?Gn(n):new ei(n);if(r.g!="")e&&(r.g=e+"."+r.g),Il(r,r.m);else{var i=le.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ei(null);r&&Tl(s,r),e&&(s.g=e),i&&Il(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Me(r,n,e),Me(r,"VER",t.ra),ea(t,r),r}function zE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new He(new Ec({ob:n})):new He(t.va),e.Oa(t.J),e}G.isActive=function(){return!!this.h&&this.h.isActive(this)};function HE(){}G=HE.prototype;G.Ba=function(){};G.Aa=function(){};G.za=function(){};G.ya=function(){};G.isActive=function(){return!0};G.Va=function(){};function Al(){if(rs&&!(10<=Number(oO)))throw Error("Environmental error: no available transport.")}Al.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){lt.call(this),this.g=new LE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!_o(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_o(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ms(this)}ct(Ht,lt);Ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=jE(t,null,t.Y),Ac(t)};Ht.prototype.close=function(){ef(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zd(t),t=n);e.j.push(new VO(e.fb++,t)),e.H==3&&Ac(e)};Ht.prototype.N=function(){this.g.h=null,delete this.j,ef(this.g),delete this.g,Ht.$.N.call(this)};function WE(t){Qd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ct(WE,Qd);function KE(){Yd.call(this),this.status=1}ct(KE,Yd);function ms(t){this.g=t}ct(ms,HE);ms.prototype.Ba=function(){mt(this.g,"a")};ms.prototype.Aa=function(t){mt(this.g,new WE(t))};ms.prototype.za=function(t){mt(this.g,new KE)};ms.prototype.ya=function(){mt(this.g,"b")};function GO(){this.blockSize=-1}function pn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ct(pn,GO);pn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Cu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}pn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Cu(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Cu(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Cu(this,r),i=0;break}}this.h=i,this.i+=e};pn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Pe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var QO={};function rf(t){return-128<=t&&128>t?rO(t,function(e){return new Pe([e|0],0>e?-1:0)}):new Pe([t|0],0>t?-1:0)}function bn(t){if(isNaN(t)||!isFinite(t))return Ki;if(0>t)return ft(bn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Nh;return new Pe(e,0)}function GE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ft(GE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=bn(Math.pow(e,8)),r=Ki,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=bn(Math.pow(e,s)),r=r.R(s).add(bn(o))):(r=r.R(n),r=r.add(bn(o)))}return r}var Nh=4294967296,Ki=rf(0),Lh=rf(1),Ig=rf(16777216);G=Pe.prototype;G.ea=function(){if(Yt(this))return-ft(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Nh+r)*e,e*=Nh}return t};G.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(qn(this))return"0";if(Yt(this))return"-"+ft(this).toString(t);for(var e=bn(Math.pow(t,6)),n=this,r="";;){var i=Sl(n,e).g;n=Rl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,qn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};G.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function qn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Yt(t){return t.h==-1}G.X=function(t){return t=Rl(this,t),Yt(t)?-1:qn(t)?0:1};function ft(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Pe(n,~t.h).add(Lh)}G.abs=function(){return Yt(this)?ft(this):this};G.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Pe(n,n[n.length-1]&-2147483648?-1:0)};function Rl(t,e){return t.add(ft(e))}G.R=function(t){if(qn(this)||qn(t))return Ki;if(Yt(this))return Yt(t)?ft(this).R(ft(t)):ft(ft(this).R(t));if(Yt(t))return ft(this.R(ft(t)));if(0>this.X(Ig)&&0>t.X(Ig))return bn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Aa(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Aa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Aa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Aa(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Pe(n,0)};function Aa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Is(t,e){this.g=t,this.h=e}function Sl(t,e){if(qn(e))throw Error("division by zero");if(qn(t))return new Is(Ki,Ki);if(Yt(t))return e=Sl(ft(t),e),new Is(ft(e.g),ft(e.h));if(Yt(e))return e=Sl(t,ft(e)),new Is(ft(e.g),e.h);if(30<t.g.length){if(Yt(t)||Yt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Lh,r=e;0>=r.X(t);)n=bg(n),r=bg(r);var i=Ci(n,1),s=Ci(r,1);for(r=Ci(r,2),n=Ci(n,2);!qn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ci(r,1),n=Ci(n,1)}return e=Rl(t,i.R(e)),new Is(i,e)}for(i=Ki;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=bn(n),o=s.R(e);Yt(o)||0<o.X(t);)n-=r,s=bn(n),o=s.R(e);qn(s)&&(s=Lh),i=i.add(s),t=Rl(t,o)}return new Is(i,t)}G.gb=function(t){return Sl(this,t).h};G.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Pe(n,this.h&t.h)};G.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Pe(n,this.h|t.h)};G.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Pe(n,this.h^t.h)};function bg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Pe(n,t.h)}function Ci(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Pe(i,t.h)}Al.prototype.createWebChannel=Al.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;_c.NO_ERROR=0;_c.TIMEOUT=8;_c.HTTP_ERROR=6;hE.COMPLETE="complete";dE.EventType=Yo;Yo.OPEN="a";Yo.CLOSE="b";Yo.ERROR="c";Yo.MESSAGE="d";lt.prototype.listen=lt.prototype.O;He.prototype.listenOnce=He.prototype.P;He.prototype.getLastError=He.prototype.Sa;He.prototype.getLastErrorCode=He.prototype.Ia;He.prototype.getStatus=He.prototype.da;He.prototype.getResponseJson=He.prototype.Wa;He.prototype.getResponseText=He.prototype.ja;He.prototype.send=He.prototype.ha;He.prototype.setWithCredentials=He.prototype.Oa;pn.prototype.digest=pn.prototype.l;pn.prototype.reset=pn.prototype.reset;pn.prototype.update=pn.prototype.j;Pe.prototype.add=Pe.prototype.add;Pe.prototype.multiply=Pe.prototype.R;Pe.prototype.modulo=Pe.prototype.gb;Pe.prototype.compare=Pe.prototype.X;Pe.prototype.toNumber=Pe.prototype.ea;Pe.prototype.toString=Pe.prototype.toString;Pe.prototype.getBits=Pe.prototype.D;Pe.fromNumber=bn;Pe.fromString=GE;var YO=function(){return new Al},JO=function(){return gc()},ku=_c,XO=hE,ZO=vi,Ag={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ra=dE,eD=He,tD=pn,Gi=Pe;const Rg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new ic("@firebase/firestore");function bs(){return li.logLevel}function K(t,...e){if(li.logLevel<=Te.DEBUG){const n=e.map(sf);li.debug(`Firestore (${gs}): ${t}`,...n)}}function On(t,...e){if(li.logLevel<=Te.ERROR){const n=e.map(sf);li.error(`Firestore (${gs}): ${t}`,...n)}}function is(t,...e){if(li.logLevel<=Te.WARN){const n=e.map(sf);li.warn(`Firestore (${gs}): ${t}`,...n)}}function sf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw On(e),new Error(e)}function Ne(t,e){t||oe()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class rD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iD{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new QE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new wt(e)}}class sD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class oD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new sD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new aD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=cD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new st(0,0))}static max(){return new ue(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ao.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ao?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends Ao{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const uD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Ao{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return uD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(De.fromString(e))}static fromName(e){return new X(De.fromString(e).popFirst(5))}static empty(){return new X(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new De(e.slice()))}}function hD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new br(i,X.empty(),e)}function dD(t){return new br(t.readTime,t.key,-1)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(ue.min(),X.empty(),-1)}static max(){return new br(ue.max(),X.empty(),-1)}}function fD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==pD)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Pn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Qs(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=af(r.target.error);this.V.reject(new Qs(e,i))}}static open(e,n,r,i){try{return new of(n,e.transaction(i,r))}catch(s){throw new Qs(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(K("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new _D(n)}}class Hr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Hr.S(nt())===12.2&&On("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return K("SimpleDb","Removing database:",e),Ur(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!bd())return!1;if(Hr.C())return!0;const e=nt(),n=Hr.S(e),r=0<n&&n<10,i=Hr.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(K("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Qs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new B(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Qs(e,o))},i.onupgradeneeded=s=>{K("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{K("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=of.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),O.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(K("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class gD{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Ur(this.k.delete())}}class Qs extends B{constructor(e,n){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function na(t){return t.name==="IndexedDbTransactionError"}class _D{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(K("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(K("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ur(r)}add(e){return K("SimpleDb","ADD",this.store.name,e,e),Ur(this.store.add(e))}get(e){return Ur(this.store.get(e)).next(n=>(n===void 0&&(n=null),K("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return K("SimpleDb","DELETE",this.store.name,e),Ur(this.store.delete(e))}count(){return K("SimpleDb","COUNT",this.store.name),Ur(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new O((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){K("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new O((r,i)=>{n.onerror=s=>{const o=af(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new O((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new gD(a),c=n(a.primaryKey,a.value,l);if(c instanceof O){const u=c.catch(h=>(l.done(),O.reject(h)));r.push(u)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>O.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ur(t){return new O((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=af(r.target.error);n(i)}})}let Sg=!1;function af(t){const e=Hr.S(nt());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Sg||(Sg=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}lf._e=-1;function Rc(t){return t==null}function Pl(t){return t===0&&1/t==-1/0}function yD(t){return typeof t=="number"&&Number.isInteger(t)&&!Pl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}}class Sa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:dt.RED,this.left=i!=null?i:dt.EMPTY,this.right=s!=null?s:dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new dt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,i,s){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cg(this.data.getIterator())}getIteratorFrom(e){return new Cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class Cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new gt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new XE("Invalid base64 string: "+s):s}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const vD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=vD.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ci(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cf(t){const e=t.mapValue.fields.__previous_value__;return Sc(e)?cf(e):e}function Ro(t){const e=Ar(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class So{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new So("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof So&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sc(t)?4:ED(t)?9007199254740991:10:oe()}function Dn(t,e){if(t===e)return!0;const n=ui(t);if(n!==ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ar(i.timestampValue),a=Ar(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ci(i.bytesValue).isEqual(ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Je(i.geoPointValue.latitude)===Je(s.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Je(i.integerValue)===Je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Je(i.doubleValue),a=Je(s.doubleValue);return o===a?Pl(o)===Pl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Pg(o)!==Pg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dn(o[l],a[l])))return!1;return!0}(t,e);default:return oe()}}function Po(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=ui(t),r=ui(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Je(s.integerValue||s.doubleValue),l=Je(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return kg(t.timestampValue,e.timestampValue);case 4:return kg(Ro(t),Ro(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ci(s),l=ci(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ae(a[c],l[c]);if(u!==0)return u}return Ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ae(Je(s.latitude),Je(o.latitude));return a!==0?a:Ae(Je(s.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=os(a[c],l[c]);if(u)return u}return Ae(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Pa.mapValue&&o===Pa.mapValue)return 0;if(s===Pa.mapValue)return 1;if(o===Pa.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Ae(l[h],u[h]);if(d!==0)return d;const f=os(a[l[h]],c[u[h]]);if(f!==0)return f}return Ae(l.length,u.length)}(t.mapValue,e.mapValue);default:throw oe()}}function kg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Ar(t),r=Ar(e),i=Ae(n.seconds,r.seconds);return i!==0?i:Ae(n.nanos,r.nanos)}function as(t){return Vh(t)}function Vh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ci(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Vh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vh(n.fields[o])}`;return i+"}"}(t.mapValue):oe()}function Cl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mh(t){return!!t&&"integerValue"in t}function uf(t){return!!t&&"arrayValue"in t}function xg(t){return!!t&&"nullValue"in t}function Og(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function za(t){return!!t&&"mapValue"in t}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ED(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=pt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ys(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];za(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){wi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(Ys(this.value))}}function ZE(t){const e=[];return wi(t.fields,(n,r)=>{const i=new pt([n]);if(za(r)){const s=ZE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,ue.min(),ue.min(),ue.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,ue.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,ue.min(),ue.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ue.min(),ue.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.position=e,this.inclusive=n}}function Dg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=os(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ng(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n="asc"){this.field=e,this.dir=n}}function TD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{}class Ze extends eT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bD(e,n,r):n==="array-contains"?new SD(e,r):n==="in"?new PD(e,r):n==="not-in"?new CD(e,r):n==="array-contains-any"?new kD(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AD(e,r):new RD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(os(n,this.value)):n!==null&&ui(this.value)===ui(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends eT{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new mn(e,n)}matches(e){return tT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function tT(t){return t.op==="and"}function nT(t){return ID(t)&&tT(t)}function ID(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function Fh(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+as(t.value);if(nT(t))return t.filters.map(e=>Fh(e)).join(",");{const e=t.filters.map(n=>Fh(n)).join(",");return`${t.op}(${e})`}}function rT(t,e){return t instanceof Ze?function(r,i){return i instanceof Ze&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof mn?function(r,i){return i instanceof mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&rT(o,i.filters[a]),!0):!1}(t,e):void oe()}function iT(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`}(t):t instanceof mn?function(n){return n.op.toString()+" {"+n.getFilters().map(iT).join(" ,")+"}"}(t):"Filter"}class bD extends Ze{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class AD extends Ze{constructor(e,n){super(e,"in",n),this.keys=sT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RD extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=sT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class SD extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uf(n)&&Po(n.arrayValue,this.value)}}class PD extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Po(this.value.arrayValue,n)}}class CD extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Po(this.value.arrayValue,n)}}class kD extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Po(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Lg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xD(t,e,n,r,i,s,o)}function hf(t){const e=fe(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>as(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>as(r)).join(",")),e.ce=n}return e.ce}function df(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ng(t.startAt,e.startAt)&&Ng(t.endAt,e.endAt)}function Uh(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function OD(t,e,n,r,i,s,o,a){return new Ei(t,e,n,r,i,s,o,a)}function ff(t){return new Ei(t)}function Vg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pf(t){return t.collectionGroup!==null}function Qi(t){const e=fe(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new gt(pt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Co(s,r))}),n.has(pt.keyField().canonicalString())||e.le.push(new Co(pt.keyField(),r))}return e.le}function Cn(t){const e=fe(t);return e.he||(e.he=DD(e,Qi(t))),e.he}function DD(t,e){if(t.limitType==="F")return Lg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Co(i.field,s)});const n=t.endAt?new ls(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ls(t.startAt.position,t.startAt.inclusive):null;return Lg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $h(t,e){const n=t.filters.concat([e]);return new Ei(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kl(t,e,n){return new Ei(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pc(t,e){return df(Cn(t),Cn(e))&&t.limitType===e.limitType}function oT(t){return`${hf(Cn(t))}|lt:${t.limitType}`}function xi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>iT(i)).join(", ")}]`),Rc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>as(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>as(i)).join(",")),`Target(${r})`}(Cn(t))}; limitType=${t.limitType})`}function Cc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Qi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Dg(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Qi(r),i)||r.endAt&&!function(o,a,l){const c=Dg(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Qi(r),i))}(t,e)}function ND(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aT(t){return(e,n)=>{let r=!1;for(const i of Qi(t)){const s=LD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function LD(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?os(l,c):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return JE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=new $e(X.comparator);function Qn(){return VD}const lT=new $e(X.comparator);function Ns(...t){let e=lT;for(const n of t)e=e.insert(n.key,n);return e}function cT(t){let e=lT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return Js()}function uT(){return Js()}function Js(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const MD=new $e(X.comparator),FD=new gt(X.comparator);function ve(...t){let e=FD;for(const n of t)e=e.add(n);return e}const UD=new gt(Ae);function $D(){return UD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pl(e)?"-0":e}}function dT(t){return{integerValue:""+t}}function fT(t,e){return yD(e)?dT(e):hT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this._=void 0}}function BD(t,e,n){return t instanceof ko?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Sc(s)&&(s=cf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof xo?mT(t,e):t instanceof Oo?gT(t,e):function(i,s){const o=pT(i,s),a=Mg(o)+Mg(i.Ie);return Mh(o)&&Mh(i.Ie)?dT(a):hT(i.serializer,a)}(t,e)}function qD(t,e,n){return t instanceof xo?mT(t,e):t instanceof Oo?gT(t,e):n}function pT(t,e){return t instanceof Do?function(r){return Mh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ko extends kc{}class xo extends kc{constructor(e){super(),this.elements=e}}function mT(t,e){const n=_T(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Oo extends kc{constructor(e){super(),this.elements=e}}function gT(t,e){let n=_T(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class Do extends kc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Mg(t){return Je(t.integerValue||t.doubleValue)}function _T(t){return uf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n){this.field=e,this.transform=n}}function jD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof xo&&i instanceof xo||r instanceof Oo&&i instanceof Oo?ss(r.elements,i.elements,Dn):r instanceof Do&&i instanceof Do?Dn(r.Ie,i.Ie):r instanceof ko&&i instanceof ko}(t.transform,e.transform)}class zD{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xc{}function vT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mf(t.key,Zt.none()):new ra(t.key,t.data,Zt.none());{const n=t.data,r=Dt.empty();let i=new gt(pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xr(t.key,r,new qt(i.toArray()),Zt.none())}}function HD(t,e,n){t instanceof ra?function(i,s,o){const a=i.value.clone(),l=Ug(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof xr?function(i,s,o){if(!Ha(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ug(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(wT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xs(t,e,n,r){return t instanceof ra?function(s,o,a,l){if(!Ha(s.precondition,o))return a;const c=s.value.clone(),u=$g(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof xr?function(s,o,a,l){if(!Ha(s.precondition,o))return a;const c=$g(s.fieldTransforms,l,o),u=o.data;return u.setAll(wT(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ha(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function WD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=pT(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function Fg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ss(r,i,(s,o)=>jD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends xc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xr extends xc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ug(t,e,n){const r=new Map;Ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qD(o,a,n[i]))}return r}function $g(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,BD(s,o,e))}return r}class mf extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KD extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&HD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=vT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>Fg(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>Fg(n,r))}}class gf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ne(e.mutations.length===r.length);let i=function(){return MD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new gf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,Ie;function JD(t){switch(t){default:return oe();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function ET(t){if(t===void 0)return On("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ye.OK:return S.OK;case Ye.CANCELLED:return S.CANCELLED;case Ye.UNKNOWN:return S.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return S.INTERNAL;case Ye.UNAVAILABLE:return S.UNAVAILABLE;case Ye.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ye.NOT_FOUND:return S.NOT_FOUND;case Ye.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ye.ABORTED:return S.ABORTED;case Ye.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ye.DATA_LOSS:return S.DATA_LOSS;default:return oe()}}(Ie=Ye||(Ye={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=new Gi([4294967295,4294967295],0);function Bg(t){const e=XD().encode(t),n=new tD;return n.update(e),new Uint8Array(n.digest())}function qg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gi([n,r],0),new Gi([i,s],0)]}class _f{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ls(`Invalid padding: ${n}`);if(r<0)throw new Ls(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ls(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ls(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Gi.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Gi.fromNumber(r)));return i.compare(ZD)===1&&(i=new Gi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Bg(e),[r,i]=qg(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _f(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Bg(e),[r,i]=qg(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oc(ue.min(),i,new $e(Ae),Qn(),ve())}}class ia{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ia(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class TT{constructor(e,n){this.targetId=e,this.fe=n}}class IT{constructor(e,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jg{constructor(){this.ge=0,this.pe=Hg(),this.ye=At.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ve(),n=ve(),r=ve();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:oe()}}),new ia(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Hg()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ne(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class eN{constructor(e){this.Be=e,this.ke=new Map,this.qe=Qn(),this.Qe=zg(),this.Ke=new $e(Ae)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Uh(s))if(r===0){const o=new X(s.path);this.We(n,o,Et.newNoDocument(o,ue.min()))}else Ne(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ci(r).toUint8Array()}catch(l){if(l instanceof XE)return is("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new _f(o,i,s)}catch(l){return is(l instanceof Ls?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Uh(a.target)){const l=new X(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Et.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ve();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Oc(e,n,this.Ke,this.qe,r);return this.qe=Qn(),this.Qe=zg(),this.Ke=new $e(Ae),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new jg,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new gt(Ae),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new jg),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function zg(){return new $e(X.comparator)}function Hg(){return new $e(X.comparator)}const tN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rN=(()=>({and:"AND",or:"OR"}))();class iN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bh(t,e){return t.useProto3Json||Rc(e)?e:{value:e}}function xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sN(t,e){return xl(t,e.toTimestamp())}function kn(t){return Ne(!!t),ue.fromTimestamp(function(n){const r=Ar(n);return new st(r.seconds,r.nanos)}(t))}function yf(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function AT(t){const e=De.fromString(t);return Ne(kT(e)),e}function jh(t,e){return yf(t.databaseId,e.path)}function xu(t,e){const n=AT(e);if(n.get(1)!==t.databaseId.projectId)throw new B(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(ST(n))}function RT(t,e){return yf(t.databaseId,e)}function oN(t){const e=AT(t);return e.length===4?De.emptyPath():ST(e)}function zh(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ST(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wg(t,e,n){return{name:jh(t,e),fields:n.value.mapValue.fields}}function aN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(Ne(u===void 0||typeof u=="string"),At.fromBase64String(u||"")):(Ne(u===void 0||u instanceof Uint8Array),At.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?S.UNKNOWN:ET(c.code);return new B(u,c.message||"")}(o);n=new IT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=xu(t,r.document.name),s=kn(r.document.updateTime),o=r.document.createTime?kn(r.document.createTime):ue.min(),a=new Dt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Wa(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=xu(t,r.document),s=r.readTime?kn(r.readTime):ue.min(),o=Et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Wa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=xu(t,r.document),s=r.removedTargetIds||[];n=new Wa([],s,i,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new YD(i,s),a=r.targetId;n=new TT(a,o)}}return n}function lN(t,e){let n;if(e instanceof ra)n={update:Wg(t,e.key,e.value)};else if(e instanceof mf)n={delete:jh(t,e.key)};else if(e instanceof xr)n={update:Wg(t,e.key,e.data),updateMask:_N(e.fieldMask)};else{if(!(e instanceof KD))return oe();n={verify:jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ko)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Do)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:sN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:oe()}(t,e.precondition)),n}function cN(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?kn(i.updateTime):kn(s);return o.isEqual(ue.min())&&(o=kn(s)),new zD(o,i.transformResults||[])}(n,e))):[]}function uN(t,e){return{documents:[RT(t,e.path)]}}function hN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=RT(t,i);const s=function(c){if(c.length!==0)return CT(mn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:Oi(d.field),direction:pN(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Bh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ut:n,parent:i}}function dN(t){let e=oN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ne(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const d=PT(h);return d instanceof mn&&nT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(p){return new Co(Di(p.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Rc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new ls(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ls(f,d)}(n.endAt)),OD(e,i,o,s,a,"F",l,c)}function fN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function PT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Di(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Di(n.unaryFilter.field);return Ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Di(n.unaryFilter.field);return Ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Di(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(Di(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mn.create(n.compositeFilter.filters.map(r=>PT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function pN(t){return tN[t]}function mN(t){return nN[t]}function gN(t){return rN[t]}function Oi(t){return{fieldPath:t.canonicalString()}}function Di(t){return pt.fromServerFormat(t.fieldPath)}function CT(t){return t instanceof Ze?function(n){if(n.op==="=="){if(Og(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NAN"}};if(xg(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Og(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NAN"}};if(xg(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(n.field),op:mN(n.op),value:n.value}}}(t):t instanceof mn?function(n){const r=n.getFilters().map(i=>CT(i));return r.length===1?r[0]:{compositeFilter:{op:gN(n.op),filters:r}}}(t):oe()}function _N(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=ue.min(),o=ue.min(),a=At.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.ct=e}}function vN(t){const e=dN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this._n=new EN}addToCollectionParentIndex(e,n){return this._n.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(br.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class EN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gt(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gt(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new cs(0)}static Ln(){return new cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Xs(r.mutation,i,qt.empty(),st.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const i=Wr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ns();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Qn();const o=Js(),a=function(){return Js()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof xr)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Xs(u.mutation,c,u.mutation.getFieldMask(),st.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new IN(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Js();let i=new $e((o,a)=>o-a),s=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||qt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||ve()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=uT();u.forEach(d=>{if(!s.has(d)){const f=vT(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Wr());let a=-1,l=s;return o.next(c=>O.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?O.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ve())).next(u=>({batchId:a,changes:cT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=Ns();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ns();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,l=>{const c=function(h,d){return new Ei(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Et.newInvalidDocument(u)))});let a=Ns();return o.forEach((l,c)=>{const u=s.get(l);u!==void 0&&Xs(u.mutation,c,qt.empty(),st.now()),Cc(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return O.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:kn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:vN(i.bundledQuery),readTime:kn(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this.overlays=new $e(X.comparator),this.hr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Wr(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Wr(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Wr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return O.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new QD(n,r));let s=this.hr.get(n);s===void 0&&(s=ve(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.Pr=new gt(at.Ir),this.Tr=new gt(at.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new at(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new at(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new X(new De([])),r=new at(n,e),i=new at(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new X(new De([])),r=new at(n,e),i=new at(n,e+1);let s=ve();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new at(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return X.comparator(e.key,n.key)||Ae(e.pr,n.pr)}static Er(e,n){return Ae(e.pr,n.pr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new gt(at.Ir)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new at(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),i=new at(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(Ae);return n.forEach(i=>{const s=new at(i,0),o=new at(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),O.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new at(new X(s),0);let a=new gt(Ae);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),O.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return O.forEach(n.mutations,i=>{const s=new at(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new at(n,0),i=this.wr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e){this.vr=e,this.docs=function(){return new $e(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Qn();const o=n.path,a=new X(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||fD(dD(u),r)<=0||(i.has(u.key)||Cc(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){oe()}Fr(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CN(this)}getSize(e){return O.resolve(this.size)}}class CN extends TN{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.persistence=e,this.Mr=new _s(n=>hf(n),df),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Or=0,this.Nr=new vf,this.targetCount=0,this.Lr=cs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),O.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.qn(n),O.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n){this.Br={},this.overlays={},this.kr=new lf(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new kN(this),this.indexManager=new wN,this.remoteDocumentCache=function(i){return new PN(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new yN(n),this.$r=new AN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new SN(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new ON(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return O.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class ON extends mD{constructor(e){super(),this.currentSequenceNumber=e}}class wf{constructor(e){this.persistence=e,this.zr=new vf,this.jr=null}static Hr(e){return new wf(e)}get Jr(){if(this.jr)return this.jr;throw oe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),O.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Jr,r=>{const i=X.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ue.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return O.or([()=>O.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ve(),i=ve();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ef(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return oC()?8:Hr.v(nt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new DN;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(bs()<=Te.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),O.resolve()):(bs()<=Te.DEBUG&&K("QueryEngine","Query:",xi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(bs()<=Te.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(n))):O.resolve())}ji(e,n){if(Vg(n))return O.resolve(null);let r=Cn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kl(n,null,"F"),r=Cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ve(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,kl(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return Vg(n)||i.isEqual(ue.min())?O.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?O.resolve(null):(bs()<=Te.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xi(n)),this.es(e,o,n,hD(i,-1)).next(a=>a))})}Zi(e,n){let r=new gt(aT(e));return n.forEach((i,s)=>{Cc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return bs()<=Te.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",xi(n)),this.zi.getDocumentsMatchingQuery(e,n,br.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new $e(Ae),this.rs=new _s(s=>hf(s),df),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bN(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function VN(t,e,n,r){return new LN(t,e,n,r)}async function xT(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ve();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function MN(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=O.resolve();return d.forEach(p=>{f=f.next(()=>u.getEntry(l,p)).next(v=>{const _=c.docVersions.get(p);Ne(_!==null),v.version.compareTo(_)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ve();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function OT(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function FN(t,e){const n=fe(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(At.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(v,_,w){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(n.Qr.updateTargetData(s,f))});let l=Qn(),c=ve();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(UN(s,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(ue.min())){const u=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function UN(t,e,n){let r=ve(),i=ve();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Qn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function $N(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function BN(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Hh(t,e,n){const r=fe(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!na(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Kg(t,e,n){const r=fe(t);let i=ue.min(),s=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=fe(l),d=h.rs.get(u);return d!==void 0?O.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,Cn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ue.min(),n?s:ve())).next(a=>(qN(r,ND(e),a),{documents:a,hs:s})))}function qN(t,e,n){let r=t.ss.get(e)||ue.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Gg{constructor(){this.activeTargetIds=$D()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jN{constructor(){this.no=new Gg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Gg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca=null;function Ou(){return Ca===null?Ca=function(){return 268435456+Math.round(2147483648*Math.random())}():Ca++,"0x"+Ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class KN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Ou(),l=this.bo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,s,o),this.Co(n,l,c,i).then(u=>(K("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw is("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=HN[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Ou();return new Promise((o,a)=>{const l=new eD;l.setWithCredentials(!0),l.listenOnce(XO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ku.NO_ERROR:const u=l.getResponseJson();K(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case ku.TIMEOUT:K(yt,`RPC '${e}' ${s} timed out`),a(new B(S.DEADLINE_EXCEEDED,"Request time out"));break;case ku.HTTP_ERROR:const h=l.getStatus();if(K(yt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(_){const w=_.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(w)>=0?w:S.UNKNOWN}(f.status);a(new B(p,f.message))}else a(new B(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(S.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{K(yt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);K(yt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const i=Ou(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=YO(),a=JO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");K(yt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const p=new WN({lo:_=>{f?K(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(K(yt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),K(yt,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},ho:()=>h.close()}),v=(_,w,y)=>{_.listen(w,E=>{try{y(E)}catch(T){setTimeout(()=>{throw T},0)}})};return v(h,Ra.EventType.OPEN,()=>{f||K(yt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Ra.EventType.CLOSE,()=>{f||(f=!0,K(yt,`RPC '${e}' stream ${i} transport closed`),p.Vo())}),v(h,Ra.EventType.ERROR,_=>{f||(f=!0,is(yt,`RPC '${e}' stream ${i} transport errored:`,_),p.Vo(new B(S.UNAVAILABLE,"The operation could not be completed")))}),v(h,Ra.EventType.MESSAGE,_=>{var w;if(!f){const y=_.data[0];Ne(!!y);const E=y,T=E.error||((w=E[0])===null||w===void 0?void 0:w.error);if(T){K(yt,`RPC '${e}' stream ${i} received error:`,T);const b=T.status;let k=function(D){const L=Ye[D];if(L!==void 0)return ET(L)}(b),N=T.message;k===void 0&&(k=S.INTERNAL,N="Unknown error status: "+b+" with message "+T.message),f=!0,p.Vo(new B(k,N)),h.close()}else K(yt,`RPC '${e}' stream ${i} received:`,y),p.mo(y)}}),v(a,ZO.STAT_EVENT,_=>{_.stat===Ag.PROXY?K(yt,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Ag.NOPROXY&&K(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.Ro()},0),p}}function Du(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){return new iN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new DT(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new B(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GN extends NT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=aN(this.serializer,e),r=function(s){if(!("targetChange"in s))return ue.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?kn(o.readTime):ue.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=zh(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Uh(l)?{documents:uN(s,l)}:{query:hN(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bT(s,o.resumeToken);const c=Bh(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ue.min())>0){a.readTime=xl(s,o.snapshotVersion.toTimestamp());const c=Bh(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=fN(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=zh(this.serializer),n.removeTarget=e,this.t_(n)}}class QN extends NT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=cN(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.T_(r,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=zh(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>lN(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new B(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(S.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,qh(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(S.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class JN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(On(n),this.g_=!1):K("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Ti(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=fe(l);c.v_.add(4),await sa(c),c.x_.set("Unknown"),c.v_.delete(4),await Nc(c)}(this))})}),this.x_=new JN(r,i)}}async function Nc(t){if(Ti(t))for(const e of t.F_)await e(!0)}async function sa(t){for(const e of t.F_)await e(!1)}function LT(t,e){const n=fe(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Af(n)?bf(n):ys(n).Jo()&&If(n,e))}function Tf(t,e){const n=fe(t),r=ys(n);n.C_.delete(e),r.Jo()&&VT(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Ti(n)&&n.x_.set("Unknown"))}function If(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ys(t).c_(e)}function VT(t,e){t.O_.Oe(e),ys(t).l_(e)}function bf(t){t.O_=new eN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ys(t).start(),t.x_.p_()}function Af(t){return Ti(t)&&!ys(t).Ho()&&t.C_.size>0}function Ti(t){return fe(t).v_.size===0}function MT(t){t.O_=void 0}async function ZN(t){t.C_.forEach((e,n)=>{If(t,e)})}async function eL(t,e){MT(t),Af(t)?(t.x_.S_(e),bf(t)):t.x_.set("Unknown")}async function tL(t,e,n){if(t.x_.set("Online"),e instanceof IT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ol(t,r)}else if(e instanceof Wa?t.O_.$e(e):e instanceof TT?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(ue.min()))try{const r=await OT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.C_.get(c);u&&s.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.C_.get(l);if(!u)return;s.C_.set(l,u.withResumeToken(At.EMPTY_BYTE_STRING,u.snapshotVersion)),VT(s,l);const h=new gr(u.target,l,c,u.sequenceNumber);If(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await Ol(t,r)}}async function Ol(t,e,n){if(!na(e))throw e;t.v_.add(1),await sa(t),t.x_.set("Offline"),n||(n=()=>OT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Nc(t)})}function FT(t,e){return e().catch(n=>Ol(t,n,e))}async function Lc(t){const e=fe(t),n=Rr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;nL(e);)try{const i=await $N(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,rL(e,i)}catch(i){await Ol(e,i)}UT(e)&&$T(e)}function nL(t){return Ti(t)&&t.D_.length<10}function rL(t,e){t.D_.push(e);const n=Rr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function UT(t){return Ti(t)&&!Rr(t).Ho()&&t.D_.length>0}function $T(t){Rr(t).start()}async function iL(t){Rr(t).d_()}async function sL(t){const e=Rr(t);for(const n of t.D_)e.I_(n.mutations)}async function oL(t,e,n){const r=t.D_.shift(),i=gf.from(r,e,n);await FT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lc(t)}async function aL(t,e){e&&Rr(t).P_&&await async function(r,i){if(function(o){return JD(o)&&o!==S.ABORTED}(i.code)){const s=r.D_.shift();Rr(r).Zo(),await FT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lc(r)}}(t,e),UT(t)&&$T(t)}async function Yg(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n.v_.add(3),await sa(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Nc(n)}async function lL(t,e){const n=fe(t);e?(n.v_.delete(2),await Nc(n)):e||(n.v_.add(2),await sa(n),n.x_.set("Unknown"))}function ys(t){return t.N_||(t.N_=function(n,r,i){const s=fe(n);return s.R_(),new GN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:ZN.bind(null,t),To:eL.bind(null,t),u_:tL.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Af(t)?bf(t):t.x_.set("Unknown")):(await t.N_.stop(),MT(t))})),t.N_}function Rr(t){return t.L_||(t.L_=function(n,r,i){const s=fe(n);return s.R_(),new QN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:iL.bind(null,t),To:aL.bind(null,t),E_:sL.bind(null,t),T_:oL.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Lc(t)):(await t.L_.stop(),t.D_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Rf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sf(t,e){if(On("AsyncQueue",`${e}: ${t}`),na(t))return new B(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Yi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(){this.B_=new $e(X.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):oe():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new us(e,n,Yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class uL{constructor(){this.queries=new _s(e=>oT(e),Pc),this.onlineState="Unknown",this.W_=new Set}}async function BT(t,e){const n=fe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new cL,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Sf(o,`Initialization of query '${xi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&Pf(n)}async function qT(t,e){const n=fe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function hL(t,e){const n=fe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&Pf(n)}function dL(t,e,n){const r=fe(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function Pf(t){t.W_.forEach(e=>{e.next()})}var Wh,Xg;(Xg=Wh||(Wh={})).j_="default",Xg.Cache="cache";class jT{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==Wh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e){this.key=e}}class HT{constructor(e){this.key=e}}class fL{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ve(),this.mutatedKeys=ve(),this.ha=aT(e),this.Pa=new Yi(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new Jg,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Cc(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?p!==v&&(r.track({type:3,doc:f}),_=!0):this.da(d,f)||(r.track({type:2,doc:f}),_=!0,(l&&this.ha(f,l)>0||c&&this.ha(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(l||c)&&(a=!0)),_&&(f?(o=o.add(f),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(f,p){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return v(f)-v(p)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,c=l!==this.ca;return this.ca=l,o.length!==0||c?{snapshot:new us(this.query,e.Pa,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Jg,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=ve(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new HT(r))}),this.la.forEach(r=>{e.has(r)||n.push(new zT(r))}),n}fa(e){this.ua=e.hs,this.la=ve();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return us.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class pL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mL{constructor(e){this.key=e,this.pa=!1}}class gL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new _s(a=>oT(a),Pc),this.Sa=new Map,this.ba=new Set,this.Da=new $e(X.comparator),this.Ca=new Map,this.va=new vf,this.Fa={},this.Ma=new Map,this.xa=cs.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function _L(t,e,n=!0){const r=JT(t);let i;const s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await WT(r,e,n,!0),i}async function yL(t,e){const n=JT(t);await WT(n,e,!0,!1)}async function WT(t,e,n,r){const i=await BN(t.localStore,Cn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await vL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&LT(t.remoteStore,i),a}async function vL(t,e,n,r,i){t.Na=(h,d,f)=>async function(v,_,w,y){let E=_.view.Ta(w);E.Xi&&(E=await Kg(v.localStore,_.query,!1).then(({documents:N})=>_.view.Ta(N,E)));const T=y&&y.targetChanges.get(_.targetId),b=y&&y.targetMismatches.get(_.targetId)!=null,k=_.view.applyChanges(E,v.isPrimaryClient,T,b);return e_(v,_.targetId,k.Va),k.snapshot}(t,h,d,f);const s=await Kg(t.localStore,e,!0),o=new fL(e,s.hs),a=o.Ta(s.documents),l=ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);e_(t,n,c.Va);const u=new pL(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),c.snapshot}async function wL(t,e,n){const r=fe(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!Pc(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Hh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Tf(r.remoteStore,i.targetId),Kh(r,i.targetId)}).catch(ta)):(Kh(r,i.targetId),await Hh(r.localStore,i.targetId,!0))}async function EL(t,e){const n=fe(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tf(n.remoteStore,r.targetId))}async function TL(t,e,n){const r=CL(t);try{const i=await function(o,a){const l=fe(o),c=st.now(),u=a.reduce((f,p)=>f.add(p.key),ve());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Qn(),v=ve();return l.os.getEntries(f,u).next(_=>{p=_,p.forEach((w,y)=>{y.isValidDocument()||(v=v.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,p)).next(_=>{h=_;const w=[];for(const y of a){const E=WD(y,h.get(y.key).overlayedDocument);E!=null&&w.push(new xr(y.key,E,ZE(E.value.mapValue),Zt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,w,a)}).next(_=>{d=_;const w=_.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(f,_.batchId,w)})}).then(()=>({batchId:d.batchId,changes:cT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Fa[o.currentUser.toKey()];c||(c=new $e(Ae)),c=c.insert(a,l),o.Fa[o.currentUser.toKey()]=c}(r,i.batchId,n),await oa(r,i.changes),await Lc(r.remoteStore)}catch(i){const s=Sf(i,"Failed to persist write");n.reject(s)}}async function KT(t,e){const n=fe(t);try{const r=await FN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?Ne(o.pa):i.removedDocuments.size>0&&(Ne(o.pa),o.pa=!1))}),await oa(n,r,e)}catch(r){await ta(r)}}function Zg(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=fe(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(c=!0)}),c&&Pf(l)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IL(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),s=i&&i.key;if(s){let o=new $e(X.comparator);o=o.insert(s,Et.newNoDocument(s,ue.min()));const a=ve().add(s),l=new Oc(ue.min(),new Map,new $e(Ae),o,a);await KT(r,l),r.Da=r.Da.remove(s),r.Ca.delete(e),Cf(r)}else await Hh(r.localStore,e,!1).then(()=>Kh(r,e,n)).catch(ta)}async function bL(t,e){const n=fe(t),r=e.batch.batchId;try{const i=await MN(n.localStore,e);QT(n,r,null),GT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oa(n,i)}catch(i){await ta(i)}}async function AL(t,e,n){const r=fe(t);try{const i=await function(o,a){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ne(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);QT(r,e,n),GT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oa(r,i)}catch(i){await ta(i)}}function GT(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function QT(t,e,n){const r=fe(t);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function Kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||YT(t,r)})}function YT(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(Tf(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),Cf(t))}function e_(t,e,n){for(const r of n)r instanceof zT?(t.va.addReference(r.key,e),RL(t,r)):r instanceof HT?(K("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||YT(t,r.key)):oe()}function RL(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(K("SyncEngine","New document in limbo: "+n),t.ba.add(r),Cf(t))}function Cf(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new X(De.fromString(e)),r=t.xa.next();t.Ca.set(r,new mL(n)),t.Da=t.Da.insert(n,r),LT(t.remoteStore,new gr(Cn(ff(n.path)),r,"TargetPurposeLimboResolution",lf._e))}}async function oa(t,e,n){const r=fe(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Ef.Ki(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.ya.u_(i),await async function(l,c){const u=fe(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>O.forEach(c,d=>O.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>O.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!na(h))throw h;K("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),p=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(p);u.ns=u.ns.insert(d,v)}}}(r.localStore,s))}async function SL(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await xT(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(l=>{l.reject(new B(S.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oa(n,r.us)}}function PL(t,e){const n=fe(t),r=n.Ca.get(e);if(r&&r.pa)return ve().add(r.key);{let i=ve();const s=n.Sa.get(e);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function JT(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=KT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IL.bind(null,e),e.ya.u_=hL.bind(null,e.eventManager),e.ya.La=dL.bind(null,e.eventManager),e}function CL(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AL.bind(null,e),e}class t_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return VN(this.persistence,new NN,e.initialUser,this.serializer)}createPersistence(e){return new xN(wf.Hr,this.serializer)}createSharedClientState(e){return new jN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SL.bind(null,this.syncEngine),await lL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uL}()}createDatastore(e){const n=Dc(e.databaseInfo.databaseId),r=function(s){return new KN(s)}(e.databaseInfo);return function(s,o,a,l){return new YN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new XN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Zg(this.syncEngine,n,0),function(){return Qg.D()?new Qg:new zN}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,u){const h=new gL(i,s,o,a,l,c);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=fe(r);K("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await sa(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=YE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{K("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(K("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nu(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function n_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DL(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Yg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Yg(e.remoteStore,i)),t._onlineComponents=e}function OL(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function DL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!OL(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await Nu(t,new t_)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Nu(t,new t_);return t._offlineComponents}async function ZT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await n_(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await n_(t,new kL))),t._onlineComponents}function NL(t){return ZT(t).then(e=>e.syncEngine)}async function eI(t){const e=await ZT(t),n=e.eventManager;return n.onListen=_L.bind(null,e.syncEngine),n.onUnlisten=wL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=EL.bind(null,e.syncEngine),n}function LL(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new XT({next:d=>{o.enqueueAndForget(()=>qT(s,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new B(S.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new B(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new jT(ff(a.path),u,{includeMetadataChanges:!0,ta:!0});return BT(s,h)}(await eI(t),t.asyncQueue,e,n,r)),r.promise}function VL(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new XT({next:d=>{o.enqueueAndForget(()=>qT(s,h)),d.fromCache&&l.source==="server"?c.reject(new B(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new jT(a,u,{includeMetadataChanges:!0,ta:!0});return BT(s,h)}(await eI(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t,e,n){if(!n)throw new B(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ML(t,e,n,r){if(e===!0&&r===!0)throw new B(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function i_(t){if(!X.isDocumentKey(t))throw new B(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function s_(t){if(X.isDocumentKey(t))throw new B(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vc(t);throw new B(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function FL(t,e){if(e<=0)throw new B(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ML("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new o_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new o_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nD;switch(r.type){case"firstParty":return new oD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=r_.get(n);r&&(K("ComponentProvider","Removing Datastore"),r_.delete(n),r.terminate())}(this),Promise.resolve()}}function UL(t,e,n,r={}){var i;const s=(t=gn(t,Mc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=wt.MOCK_USER;else{a=tw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new wt(c)}t._authCredentials=new rD(new QE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zn(this.firestore,e,this._query)}}class kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class Er extends Zn{constructor(e,n,r){super(e,n,ff(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new X(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function $U(t,e,...n){if(t=Se(t),nI("collection","path",e),t instanceof Mc){const r=De.fromString(e,...n);return s_(r),new Er(t,null,r)}{if(!(t instanceof kt||t instanceof Er))throw new B(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return s_(r),new Er(t.firestore,null,r)}}function kf(t,e,...n){if(t=Se(t),arguments.length===1&&(e=YE.newId()),nI("doc","path",e),t instanceof Mc){const r=De.fromString(e,...n);return i_(r),new kt(t,null,new X(r))}{if(!(t instanceof kt||t instanceof Er))throw new B(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return i_(r),new kt(t.firestore,t instanceof Er?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new DT(this,"async_queue_retry"),this.cu=()=>{const n=Du();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Du();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=Du();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Pn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!na(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw On("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=Rf.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&oe()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class Ii extends Mc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new $L}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rI(this),this._firestoreClient.terminate()}}function BL(t,e){const n=typeof t=="object"?t:sc(),r=typeof t=="string"?t:e||"(default)",i=Pr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Xv("firestore");s&&UL(i,...s)}return i}function xf(t){return t._firestoreClient||rI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,u){return new wD(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,tI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new xL(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(At.fromBase64String(e))}catch(n){throw new B(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=/^__.*__$/;class jL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}class iI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class Df{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Df(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return Dl(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(sI(this.Vu)&&qL.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class zL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dc(e)}Cu(e,n,r,i=!1){return new Df({Vu:e,methodName:n,Du:r,path:pt.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function la(t){const e=t._freezeSettings(),n=Dc(t._databaseId);return new zL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oI(t,e,n,r,i,s={}){const o=t.Cu(s.merge||s.mergeFields?2:0,e,n,i);Vf("Data must be an object, but it was:",o,r);const a=lI(r,o);let l,c;if(s.merge)l=new qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Gh(e,h,n);if(!o.contains(d))throw new B(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);uI(u,d)||u.push(d)}l=new qt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new jL(new Dt(a),l,c)}class Uc extends aa{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uc}}class Nf extends aa{_toFieldTransform(e){return new yT(e.path,new ko)}isEqual(e){return e instanceof Nf}}class Lf extends aa{constructor(e,n){super(e),this.Fu=n}_toFieldTransform(e){const n=new Do(e.serializer,fT(e.serializer,this.Fu));return new yT(e.path,n)}isEqual(e){return e instanceof Lf&&this.Fu===e.Fu}}function HL(t,e,n,r){const i=t.Cu(1,e,n);Vf("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();wi(r,(l,c)=>{const u=Mf(e,l,n);c=Se(c);const h=i.yu(u);if(c instanceof Uc)s.push(u);else{const d=ca(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new qt(s);return new iI(o,a,i.fieldTransforms)}function WL(t,e,n,r,i,s){const o=t.Cu(1,e,n),a=[Gh(e,r,n)],l=[i];if(s.length%2!=0)throw new B(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Gh(e,s[d])),l.push(s[d+1]);const c=[],u=Dt.empty();for(let d=a.length-1;d>=0;--d)if(!uI(c,a[d])){const f=a[d];let p=l[d];p=Se(p);const v=o.yu(f);if(p instanceof Uc)c.push(f);else{const _=ca(p,v);_!=null&&(c.push(f),u.set(f,_))}}const h=new qt(c);return new iI(u,h,o.fieldTransforms)}function aI(t,e,n,r=!1){return ca(n,t.Cu(r?4:3,e))}function ca(t,e){if(cI(t=Se(t)))return Vf("Unsupported field value:",e,t),lI(t,e);if(t instanceof aa)return function(r,i){if(!sI(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ca(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=st.fromDate(r);return{timestampValue:xl(i.serializer,s)}}if(r instanceof st){const s=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xl(i.serializer,s)}}if(r instanceof Of)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hs)return{bytesValue:bT(i.serializer,r._byteString)};if(r instanceof kt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yf(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${Vc(r)}`)}(t,e)}function lI(t,e){const n={};return JE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wi(t,(r,i)=>{const s=ca(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Of||t instanceof hs||t instanceof kt||t instanceof aa)}function Vf(t,e,n){if(!cI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vc(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function Gh(t,e,n){if((e=Se(e))instanceof Fc)return e._internalPath;if(typeof e=="string")return Mf(t,e);throw Dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const KL=new RegExp("[~\\*/\\[\\]]");function Mf(t,e,n){if(e.search(KL)>=0)throw Dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fc(...e.split("."))._internalPath}catch{throw Dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(S.INVALID_ARGUMENT,a+t+l)}function uI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($c("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GL extends Ff{data(){return super.data()}}function $c(t,e){return typeof e=="string"?Mf(t,e):e instanceof Fc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uf{}class Bc extends Uf{}function BU(t,e,...n){let r=[];e instanceof Uf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof $f).length,a=s.filter(l=>l instanceof qc).length;if(o>1||o>0&&a>0)throw new B(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class qc extends Bc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qc(e,n,r)}_apply(e){const n=this._parse(e);return hI(e._query,n),new Zn(e.firestore,e.converter,$h(e._query,n))}_parse(e){const n=la(e.firestore);return function(s,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){l_(h,u);const f=[];for(const p of h)f.push(a_(l,s,p));d={arrayValue:{values:f}}}else d=a_(l,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||l_(h,u),d=aI(a,o,h,u==="in"||u==="not-in");return Ze.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qU(t,e,n){const r=e,i=$c("where",t);return qc._create(i,r,n)}class $f extends Uf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $f(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)hI(o,l),o=$h(o,l)}(e._query,n),new Zn(e.firestore,e.converter,$h(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bf extends Bc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Co(s,o)}(e._query,this._field,this._direction);return new Zn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ei(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function jU(t,e="asc"){const n=e,r=$c("orderBy",t);return Bf._create(r,n)}class qf extends Bc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new qf(e,n,r)}_apply(e){return new Zn(e.firestore,e.converter,kl(e._query,this._limit,this._limitType))}}function zU(t){return FL("limit",t),qf._create("limit",t,"F")}class jf extends Bc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new jf(e,n,r)}_apply(e){const n=YL(e,this.type,this._docOrFields,this._inclusive);return new Zn(e.firestore,e.converter,function(i,s){return new Ei(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function HU(...t){return jf._create("startAfter",t,!1)}function YL(t,e,n,r){if(n[0]=Se(n[0]),n[0]instanceof Ff)return function(s,o,a,l,c){if(!l)throw new B(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const h of Qi(s))if(h.field.isKeyField())u.push(Cl(o,l.key));else{const d=l.data.field(h.field);if(Sc(d))throw new B(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new B(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(d)}return new ls(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=la(t.firestore);return function(o,a,l,c,u,h){const d=o.explicitOrderBy;if(u.length>d.length)throw new B(S.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let p=0;p<u.length;p++){const v=u[p];if(d[p].field.isKeyField()){if(typeof v!="string")throw new B(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof v}`);if(!pf(o)&&v.indexOf("/")!==-1)throw new B(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${v}' contains a slash.`);const _=o.path.child(De.fromString(v));if(!X.isDocumentKey(_))throw new B(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const w=new X(_);f.push(Cl(a,w))}else{const _=aI(l,c,v);f.push(_)}}return new ls(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function a_(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new B(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pf(e)&&n.indexOf("/")!==-1)throw new B(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!X.isDocumentKey(r))throw new B(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cl(t,new X(r))}if(n instanceof kt)return Cl(t,n._key);throw new B(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vc(n)}.`)}function l_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class JL{convertValue(e,n="none"){switch(ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Of(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ro(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Ne(kT(r));const i=new So(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||On(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fI extends Ff{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($c("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ka extends fI{data(e={}){return super.data(e)}}class XL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ka(this._firestore,this._userDataWriter,r.key,r,new Vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ka(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Vs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ka(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Vs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:ZL(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WU(t){t=gn(t,kt);const e=gn(t.firestore,Ii);return LL(xf(e),t._key).then(n=>eV(e,t,n))}class pI extends JL{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function KU(t){t=gn(t,Zn);const e=gn(t.firestore,Ii),n=xf(e),r=new pI(e);return QL(t._query),VL(n,t._query).then(i=>new XL(e,r,t,i))}function GU(t,e,n){t=gn(t,kt);const r=gn(t.firestore,Ii),i=dI(t.converter,e,n);return jc(r,[oI(la(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zt.none())])}function mI(t,e,n,...r){t=gn(t,kt);const i=gn(t.firestore,Ii),s=la(i);let o;return o=typeof(e=Se(e))=="string"||e instanceof Fc?WL(s,"updateDoc",t._key,e,n,r):HL(s,"updateDoc",t._key,e),jc(i,[o.toMutation(t._key,Zt.exists(!0))])}function QU(t){return jc(gn(t.firestore,Ii),[new mf(t._key,Zt.none())])}function YU(t,e){const n=gn(t.firestore,Ii),r=kf(t),i=dI(t.converter,e);return jc(n,[oI(la(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function jc(t,e){return function(r,i){const s=new Pn;return r.asyncQueue.enqueueAndForget(async()=>TL(await NL(r),i,s)),s.promise}(xf(t),e)}function eV(t,e,n){const r=n.docs.get(e._key),i=new pI(t);return new fI(t,i,e._key,r,new Vs(n.hasPendingWrites,n.fromCache),e.converter)}function JU(){return new Nf("serverTimestamp")}function XU(t){return new Lf("increment",t)}(function(e,n=!0){(function(i){gs=i})(yi),fn(new en("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ii(new iD(r.getProvider("auth-internal")),new lD(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new So(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Nt(Rg,"4.5.0",e),Nt(Rg,"4.5.0","esm2017")})();var tV="firebase",nV="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(tV,nV,"app");const gI="@firebase/installations",zf="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=1e4,yI=`w:${zf}`,vI="FIS_v2",rV="https://firebaseinstallations.googleapis.com/v1",iV=60*60*1e3,sV="installations",oV="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},hi=new _i(sV,oV,aV);function wI(t){return t instanceof nn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI({projectId:t}){return`${rV}/projects/${t}/installations`}function TI(t){return{token:t.token,requestStatus:2,expiresIn:cV(t.expiresIn),creationTime:Date.now()}}async function II(t,e){const r=(await e.json()).error;return hi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function bI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function lV(t,{refreshToken:e}){const n=bI(t);return n.append("Authorization",uV(e)),n}async function AI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function cV(t){return Number(t.replace("s","000"))}function uV(t){return`${vI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hV({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=EI(t),i=bI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:vI,appId:t.appId,sdkVersion:yI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await AI(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:TI(c.authToken)}}else throw await II("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dV(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV=/^[cdef][\w-]{21}$/,Qh="";function pV(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mV(t);return fV.test(n)?n:Qh}catch{return Qh}}function mV(t){return dV(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new Map;function PI(t,e){const n=zc(t);CI(n,e),gV(n,e)}function CI(t,e){const n=SI.get(t);if(!!n)for(const r of n)r(e)}function gV(t,e){const n=_V();n&&n.postMessage({key:t,fid:e}),yV()}let Kr=null;function _V(){return!Kr&&"BroadcastChannel"in self&&(Kr=new BroadcastChannel("[Firebase] FID Change"),Kr.onmessage=t=>{CI(t.data.key,t.data.fid)}),Kr}function yV(){SI.size===0&&Kr&&(Kr.close(),Kr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vV="firebase-installations-database",wV=1,di="firebase-installations-store";let Lu=null;function Hf(){return Lu||(Lu=ow(vV,wV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(di)}}})),Lu}async function Nl(t,e){const n=zc(t),i=(await Hf()).transaction(di,"readwrite"),s=i.objectStore(di),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&PI(t,e.fid),e}async function kI(t){const e=zc(t),r=(await Hf()).transaction(di,"readwrite");await r.objectStore(di).delete(e),await r.done}async function Hc(t,e){const n=zc(t),i=(await Hf()).transaction(di,"readwrite"),s=i.objectStore(di),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&PI(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wf(t){let e;const n=await Hc(t.appConfig,r=>{const i=EV(r),s=TV(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Qh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function EV(t){const e=t||{fid:pV(),registrationStatus:0};return xI(e)}function TV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(hi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=IV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bV(t)}:{installationEntry:e}}async function IV(t,e){try{const n=await hV(t,e);return Nl(t.appConfig,n)}catch(n){throw wI(n)&&n.customData.serverCode===409?await kI(t.appConfig):await Nl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bV(t){let e=await c_(t.appConfig);for(;e.registrationStatus===1;)await RI(100),e=await c_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Wf(t);return r||n}return e}function c_(t){return Hc(t,e=>{if(!e)throw hi.create("installation-not-found");return xI(e)})}function xI(t){return AV(t)?{fid:t.fid,registrationStatus:0}:t}function AV(t){return t.registrationStatus===1&&t.registrationTime+_I<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RV({appConfig:t,heartbeatServiceProvider:e},n){const r=SV(t,n),i=lV(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:yI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await AI(()=>fetch(r,a));if(l.ok){const c=await l.json();return TI(c)}else throw await II("Generate Auth Token",l)}function SV(t,{fid:e}){return`${EI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf(t,e=!1){let n;const r=await Hc(t.appConfig,s=>{if(!OI(s))throw hi.create("not-registered");const o=s.authToken;if(!e&&kV(o))return s;if(o.requestStatus===1)return n=PV(t,e),s;{if(!navigator.onLine)throw hi.create("app-offline");const a=OV(s);return n=CV(t,a),a}});return n?await n:r.authToken}async function PV(t,e){let n=await u_(t.appConfig);for(;n.authToken.requestStatus===1;)await RI(100),n=await u_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Kf(t,e):r}function u_(t){return Hc(t,e=>{if(!OI(e))throw hi.create("not-registered");const n=e.authToken;return DV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function CV(t,e){try{const n=await RV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Nl(t.appConfig,r),n}catch(n){if(wI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Nl(t.appConfig,r)}throw n}}function OI(t){return t!==void 0&&t.registrationStatus===2}function kV(t){return t.requestStatus===2&&!xV(t)}function xV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+iV}function OV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function DV(t){return t.requestStatus===1&&t.requestTime+_I<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NV(t){const e=t,{installationEntry:n,registrationPromise:r}=await Wf(e);return r?r.catch(console.error):Kf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LV(t,e=!1){const n=t;return await VV(n),(await Kf(n,e)).token}async function VV(t){const{registrationPromise:e}=await Wf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MV(t){if(!t||!t.options)throw Vu("App Configuration");if(!t.name)throw Vu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vu(t){return hi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="installations",FV="installations-internal",UV=t=>{const e=t.getProvider("app").getImmediate(),n=MV(e),r=Pr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$V=t=>{const e=t.getProvider("app").getImmediate(),n=Pr(e,DI).getImmediate();return{getId:()=>NV(n),getToken:i=>LV(n,i)}};function BV(){fn(new en(DI,UV,"PUBLIC")),fn(new en(FV,$V,"PRIVATE"))}BV();Nt(gI,zf);Nt(gI,zf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="analytics",qV="firebase_id",jV="origin",zV=60*1e3,HV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Gf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new ic("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WV={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zt=new _i("analytics","Analytics",WV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KV(t){if(!t.startsWith(Gf)){const e=zt.create("invalid-gtag-resource",{gtagURL:t});return Lt.warn(e.message),""}return t}function NI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function GV(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function QV(t,e){const n=GV("firebase-js-sdk-policy",{createScriptURL:KV}),r=document.createElement("script"),i=`${Gf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function YV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function JV(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await NI(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Lt.error(a)}t("config",i,s)}async function XV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await NI(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Lt.error(s)}}function ZV(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await XV(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await JV(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Lt.error(a)}}return i}function eM(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ZV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function tM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Gf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM=30,rM=1e3;class iM{constructor(e={},n=rM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const LI=new iM;function sM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function oM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:sM(r)},s=HV.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function aM(t,e=LI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw zt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new uM;return setTimeout(async()=>{a.abort()},n!==void 0?n:zV),VI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function VI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=LI){var s;const{appId:o,measurementId:a}=t;try{await lM(r,e)}catch(l){if(a)return Lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await oM(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!cM(c)){if(i.deleteThrottleMetadata(o),a)return Lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?$m(n,i.intervalMillis,nM):$m(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Lt.debug(`Calling attemptFetch again in ${u} millis`),VI(t,h,r,i)}}function lM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cM(t){if(!(t instanceof nn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class uM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function hM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dM(){if(bd())try{await rw()}catch(t){return Lt.warn(zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Lt.warn(zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fM(t,e,n,r,i,s,o){var a;const l=aM(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Lt.error(f)),e.push(l);const c=dM().then(f=>{if(f)return r.getId()}),[u,h]=await Promise.all([l,c]);tM(s)||QV(s,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[jV]="firebase",d.update=!0,h!=null&&(d[qV]=h),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e){this.app=e}_delete(){return delete Zs[this.app.options.appId],Promise.resolve()}}let Zs={},h_=[];const d_={};let Mu="dataLayer",mM="gtag",f_,MI,p_=!1;function gM(){const t=[];if(nw()&&t.push("This is a browser extension environment."),aC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=zt.create("invalid-analytics-context",{errorInfo:e});Lt.warn(n.message)}}function _M(t,e,n){gM();const r=t.options.appId;if(!r)throw zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zt.create("no-api-key");if(Zs[r]!=null)throw zt.create("already-exists",{id:r});if(!p_){YV(Mu);const{wrappedGtag:s,gtagCore:o}=eM(Zs,h_,d_,Mu,mM);MI=s,f_=o,p_=!0}return Zs[r]=fM(t,h_,d_,e,f_,Mu,n),new pM(t)}function yM(t=sc()){t=Se(t);const e=Pr(t,Ll);return e.isInitialized()?e.getImmediate():vM(t)}function vM(t,e={}){const n=Pr(t,Ll);if(n.isInitialized()){const i=n.getImmediate();if(fo(e,n.getOptions()))return i;throw zt.create("already-initialized")}return n.initialize({options:e})}function wM(t,e,n,r){t=Se(t),hM(MI,Zs[t.app.options.appId],e,n,r).catch(i=>Lt.error(i))}const m_="@firebase/analytics",g_="0.10.1";function EM(){fn(new en(Ll,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return _M(r,i,n)},"PUBLIC")),fn(new en("analytics-internal",t,"PRIVATE")),Nt(m_,g_),Nt(m_,g_,"esm2017");function t(e){try{const n=e.getProvider(Ll).getImmediate();return{logEvent:(r,i,s)=>wM(n,r,i,s)}}catch(n){throw zt.create("interop-component-reg-failed",{reason:n})}}}EM();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="firebasestorage.googleapis.com",UI="storageBucket",TM=2*60*1e3,IM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends nn{constructor(e,n,r=0){super(Fu(e),`Firebase Storage: ${n} (${Fu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var We;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(We||(We={}));function Fu(t){return"storage/"+t}function Qf(){const t="An unknown error occurred, please check the error payload for server response.";return new Ke(We.UNKNOWN,t)}function bM(t){return new Ke(We.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function AM(t){return new Ke(We.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ke(We.UNAUTHENTICATED,t)}function SM(){return new Ke(We.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function PM(t){return new Ke(We.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function CM(){return new Ke(We.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kM(){return new Ke(We.CANCELED,"User canceled the upload/download.")}function xM(t){return new Ke(We.INVALID_URL,"Invalid URL '"+t+"'.")}function OM(t){return new Ke(We.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function DM(){return new Ke(We.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+UI+"' property when initializing the app?")}function NM(){return new Ke(We.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function LM(){return new Ke(We.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VM(t){return new Ke(We.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Yh(t){return new Ke(We.INVALID_ARGUMENT,t)}function $I(){return new Ke(We.APP_DELETED,"The Firebase app was deleted.")}function MM(t){return new Ke(We.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function eo(t,e){return new Ke(We.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function As(t){throw new Ke(We.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw OM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},v=n===FI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",w=new RegExp(`^https?://${v}/${i}/${_}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<E.length;T++){const b=E[T],k=b.regex.exec(e);if(k){const N=k[b.indices.bucket];let A=k[b.indices.path];A||(A=""),r=new jt(N,A),b.postModify(r);break}}if(r==null)throw xM(e);return r}}class FM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(..._){c||(c=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(f,l())},_)}function d(){s&&clearTimeout(s)}function f(_,...w){if(c){d();return}if(_){d(),u.call(null,_,...w);return}if(l()||o){d(),u.call(null,_,...w);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,h(E)}let p=!1;function v(_){p||(p=!0,d(),!c&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function $M(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(t){return t!==void 0}function qM(t){return typeof t=="object"&&!Array.isArray(t)}function Yf(t){return typeof t=="string"||t instanceof String}function __(t){return Jf()&&t instanceof Blob}function Jf(){return typeof Blob!="undefined"}function y_(t,e,n,r){if(r<e)throw Yh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Yh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function BI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ti;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ti||(ti={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e,n,r,i,s,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ka(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ti.NO_ERROR,l=s.getStatus();if(!a||jM(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===ti.ABORT;r(!1,new ka(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new ka(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());BM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Qf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?$I():kM();o(l)}else{const l=CM();o(l)}};this.canceled_?n(!1,new ka(!1,null,!0)):this.backoffId_=UM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$M(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ka{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function HM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function WM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function KM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function QM(t,e,n,r,i,s,o=!0){const a=BI(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return KM(c,e),HM(c,n),WM(c,s),GM(c,r),new zM(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YM(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function JM(...t){const e=YM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Jf())return new Blob(t);throw new Ke(We.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function XM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZM(t){if(typeof atob=="undefined")throw VM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Uu{constructor(e,n){this.data=e,this.contentType=n||null}}function eF(t,e){switch(t){case An.RAW:return new Uu(qI(e));case An.BASE64:case An.BASE64URL:return new Uu(jI(t,e));case An.DATA_URL:return new Uu(nF(e),rF(e))}throw Qf()}function qI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function tF(t){let e;try{e=decodeURIComponent(t)}catch{throw eo(An.DATA_URL,"Malformed data URL.")}return qI(e)}function jI(t,e){switch(t){case An.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw eo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case An.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw eo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ZM(e)}catch(i){throw i.message.includes("polyfill")?i:eo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class zI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw eo(An.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=iF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function nF(t){const e=new zI(t);return e.base64?jI(An.BASE64,e.rest):tF(e.rest)}function rF(t){return new zI(t).contentType}function iF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){let r=0,i="";__(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(__(this.data_)){const r=this.data_,i=XM(r,e,n);return i===null?null:new mr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mr(r,!0)}}static getBlob(...e){if(Jf()){const n=e.map(r=>r instanceof mr?r.data_:r);return new mr(JM.apply(null,n))}else{const n=e.map(o=>Yf(o)?eF(An.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new mr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t){let e;try{e=JSON.parse(t)}catch{return null}return qM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function WI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aF(t,e){return e}class Rt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||aF}}let xa=null;function lF(t){return!Yf(t)||t.length<2?t:WI(t)}function KI(){if(xa)return xa;const t=[];t.push(new Rt("bucket")),t.push(new Rt("generation")),t.push(new Rt("metageneration")),t.push(new Rt("name","fullPath",!0));function e(s,o){return lF(o)}const n=new Rt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Rt("size");return i.xform=r,t.push(i),t.push(new Rt("timeCreated")),t.push(new Rt("updated")),t.push(new Rt("md5Hash",null,!0)),t.push(new Rt("cacheControl",null,!0)),t.push(new Rt("contentDisposition",null,!0)),t.push(new Rt("contentEncoding",null,!0)),t.push(new Rt("contentLanguage",null,!0)),t.push(new Rt("contentType",null,!0)),t.push(new Rt("metadata","customMetadata",!0)),xa=t,xa}function cF(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new jt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function uF(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return cF(r,t),r}function GI(t,e,n){const r=HI(e);return r===null?null:uF(t,r,n)}function hF(t,e,n,r){const i=HI(e);if(i===null||!Yf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Xf(d,n,r),p=BI({alt:"media",token:c});return f+p})[0]}function dF(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class QI{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t){if(!t)throw Qf()}function fF(t,e){function n(r,i){const s=GI(t,i,e);return YI(s!==null),s}return n}function pF(t,e){function n(r,i){const s=GI(t,i,e);return YI(s!==null),hF(s,i,t.host,t._protocol)}return n}function JI(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=SM():i=RM():n.getStatus()===402?i=AM(t.bucket):n.getStatus()===403?i=PM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function mF(t){const e=JI(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=bM(t.path)),s.serverResponse=i.serverResponse,s}return n}function gF(t,e,n){const r=e.fullServerUrl(),i=Xf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new QI(i,s,pF(t,n),o);return a.errorHandler=mF(e),a}function _F(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yF(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=_F(null,e)),r}function vF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let T=0;T<2;T++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=yF(e,r,i),u=dF(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=mr.getBlob(h,r,d);if(f===null)throw NM();const p={name:c.fullPath},v=Xf(s,t.host,t._protocol),_="POST",w=t.maxUploadRetryTime,y=new QI(v,_,fF(t,n),w);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=JI(e),y}class wF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ti.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ti.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ti.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw As("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw As("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw As("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw As("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw As("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class EF extends wF{initXhr(){this.xhr_.responseType="text"}}function XI(){return new EF}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new fi(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WI(this._location.path)}get storage(){return this._service}get parent(){const e=sF(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new fi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw MM(e)}}function TF(t,e,n){t._throwIfRoot("uploadBytes");const r=vF(t.storage,t._location,KI(),new mr(e,!0),n);return t.storage.makeRequestWithTokens(r,XI).then(i=>({metadata:i,ref:t}))}function IF(t){t._throwIfRoot("getDownloadURL");const e=gF(t.storage,t._location,KI());return t.storage.makeRequestWithTokens(e,XI).then(n=>{if(n===null)throw LM();return n})}function bF(t,e){const n=oF(t._location.path,e),r=new jt(t._location.bucket,n);return new fi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AF(t){return/^[A-Za-z]+:\/\//.test(t)}function RF(t,e){return new fi(t,e)}function ZI(t,e){if(t instanceof Zf){const n=t;if(n._bucket==null)throw DM();const r=new fi(n,n._bucket);return e!=null?ZI(r,e):r}else return e!==void 0?bF(t,e):t}function SF(t,e){if(e&&AF(e)){if(t instanceof Zf)return RF(t,e);throw Yh("To use ref(service, url), the first argument must be a Storage instance.")}else return ZI(t,e)}function v_(t,e){const n=e==null?void 0:e[UI];return n==null?null:jt.makeFromBucketSpec(n,t)}function PF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:tw(i,t.app.options.projectId))}class Zf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=FI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TM,this._maxUploadRetryTime=IM,this._requests=new Set,i!=null?this._bucket=jt.makeFromBucketSpec(i,this._host):this._bucket=v_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=v_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){y_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){y_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new FM($I());{const o=QM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const w_="@firebase/storage",E_="0.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="storage";function ZU(t,e,n){return t=Se(t),TF(t,e,n)}function e2(t){return t=Se(t),IF(t)}function t2(t,e){return t=Se(t),SF(t,e)}function CF(t=sc(),e){t=Se(t);const r=Pr(t,e0).getImmediate({identifier:e}),i=Xv("storage");return i&&kF(r,...i),r}function kF(t,e,n,r={}){PF(t,e,n,r)}function xF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Zf(n,r,i,e,yi)}function OF(){fn(new en(e0,xF,"PUBLIC").setMultipleInstances(!0)),Nt(w_,E_,""),Nt(w_,E_,"esm2017")}OF();const DF={apiKey:"AIzaSyD6VC8NjSdpxbzb7uZ4JhmGz9bysacJtl8",authDomain:"ihj-vue3-firebase-app-5e087.firebaseapp.com",projectId:"ihj-vue3-firebase-app-5e087",storageBucket:"ihj-vue3-firebase-app-5e087.appspot.com",messagingSenderId:"1060099979864",appId:"1:1060099979864:web:7d287ccf2cad674fe8282d",measurementId:"G-C0EXM69NTQ"},Wc=aw(DF);yM(Wc);const Wt=G1(Wc),ep=BL(Wc),NF=CF(Wc);var LF=async()=>{const t=Kv();Lx(Wt,e=>{console.log("###user : ",e),t.setUser(e)})},VF=Object.freeze(Object.defineProperty({__proto__:null,auth:Wt,db:ep,storage:NF,default:LF},Symbol.toStringTag,{value:"Module"}));const MF="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=";async function n2(){const t=new Un,e=await r1(Wt,t);console.log("user",e.user)}async function FF(){await Vx(Wt)}async function r2({email:t,password:e}){const{user:n}=await Sx(Wt,t,e);await Dw(n,{displayname:t.split("@")[0],photoURL:t0(n.uid)}),n0()}function t0(t){return`${MF}${t}`}async function i2({email:t,password:e}){const{user:n}=await Px(Wt,t,e);return n}async function s2(t){await Rx(Wt,t)}async function o2(t){await Ox(Wt.currentUser,t)}async function n0(){await Cx(Wt.currentUser)}async function a2(t){await Dw(Wt.currentUser,{displayName:t}),await mI(kf(ep,"users",Wt.currentUser.uid),{displayName:t})}async function l2(t){await xx(Wt.currentUser,t),await mI(kf(ep,"users",Wt.currentUser.uid),{email:t})}var UF={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={d:(h,d)=>{for(var f in d)n.o(d,f)&&!n.o(h,f)&&Object.defineProperty(h,f,{enumerable:!0,get:d[f]})},o:(h,d)=>Object.prototype.hasOwnProperty.call(h,d),r:h=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})}},r={};function i(){return document.createElement("canvas")}function s(h){for(var d=atob(h.split(",")[1]),f=h.split(",")[0].split(":")[1].split(";")[0],p=new ArrayBuffer(d.length),v=new Uint8Array(p),_=0;_<d.length;_++)v[_]=d.charCodeAt(_);return new Blob([p],{type:f})}function o(h,d){var f=d.width/d.height,p=Math.min(d.width,h.maxWidth,f*h.maxHeight);return h.maxSize>0&&h.maxSize<d.width*d.height/1e3&&(p=Math.min(p,Math.floor(1e3*h.maxSize/d.height))),h.scaleRatio&&(p=Math.min(p,Math.floor(h.scaleRatio*d.width))),h.debug&&(console.log("browser-image-resizer: original image size = "+d.width+" px (width) X "+d.height+" px (height)"),console.log("browser-image-resizer: scaled image size = "+p+" px (width) X "+Math.floor(p/f)+" px (height)")),p<=0&&(p=1,console.warn("browser-image-resizer: image size is too small")),p}function a(h,d){var f=document.createElement("canvas"),p=d.outputWidth/h.width;f.width=h.width*p,f.height=h.height*p;var v=h.getContext("2d").getImageData(0,0,h.width,h.height),_=f.getContext("2d").createImageData(f.width,f.height);return function(w,y,E){function T(Kt,pe,ge,R,W,P){var J=1-W,Ee=1-P;return Kt*J*Ee+pe*W*Ee+ge*J*P+R*W*P}var b,k,N,A,D,L,z,F,re,H,se,ee,me,de,Be,ut,ht,qe,_t;for(b=0;b<y.height;++b)for(N=b/E,A=Math.floor(N),D=Math.ceil(N)>w.height-1?w.height-1:Math.ceil(N),k=0;k<y.width;++k)L=k/E,z=Math.floor(L),F=Math.ceil(L)>w.width-1?w.width-1:Math.ceil(L),re=4*(k+y.width*b),H=4*(z+w.width*A),se=4*(F+w.width*A),ee=4*(z+w.width*D),me=4*(F+w.width*D),de=L-z,Be=N-A,ut=T(w.data[H],w.data[se],w.data[ee],w.data[me],de,Be),y.data[re]=ut,ht=T(w.data[H+1],w.data[se+1],w.data[ee+1],w.data[me+1],de,Be),y.data[re+1]=ht,qe=T(w.data[H+2],w.data[se+2],w.data[ee+2],w.data[me+2],de,Be),y.data[re+2]=qe,_t=T(w.data[H+3],w.data[se+3],w.data[ee+3],w.data[me+3],de,Be),y.data[re+3]=_t}(v,_,p),f.getContext("2d").putImageData(_,0,0),f}function l(h){var d=document.createElement("canvas");return d.width=h.width/2,d.height=h.height/2,d.getContext("2d").drawImage(h,0,0,d.width,d.height),d}n.r(r),n.d(r,{readAndCompressImage:()=>u});var c={quality:.5,maxWidth:800,maxHeight:600,autoRotate:!0,debug:!1,mimeType:"image/jpeg"};function u(h,d){return new Promise(function(f,p){var v=document.createElement("img"),_=new FileReader,w=Object.assign({},c,d);_.onload=function(y){v.onerror=function(){p("cannot load image.")},v.onload=function(){var E={img:v,config:w};try{var T=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},k=b.img,N=b.config,A=(b.orientation,i());A.width=k.width,A.height=k.height;var D=A.getContext("2d");N.mimeType==="image/jpeg"&&(D.fillStyle="#ffffff",D.fillRect(0,0,A.width,A.height),D.save()),D.drawImage(k,0,0),D.restore();for(var L=o(N,A);A.width>=2*L;)A=l(A);A.width>L&&(A=a(A,Object.assign(N,{outputWidth:L})));var z=A.toDataURL(N.mimeType,N.quality);return typeof N.onScale=="function"&&N.onScale(z),s(z)}(E);f(T)}catch(b){p(b)}},v.src=y.target.result};try{_.onerror=function(){p("cannot read image file.")},_.readAsDataURL(h)}catch(y){p(y)}})}return r})())})(UF);function $F(){return Ct(Qy)}var T_=Qe({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=M(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>j(t.tag,{class:n.value},Nn(e.default))}}),BF=Qe({name:"QCard",props:{...Uo,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Ge(),r=$o(t,n),i=M(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>j(t.tag,{class:i.value},Nn(e.default))}});function qF(t,e,n){let r;function i(){r!==void 0&&(rh.remove(r),r=void 0)}return Mt(()=>{t.value===!0&&i()}),{removeFromHistory:i,addToHistory(){r={condition:()=>n.value===!0,handler:e},rh.add(r)}}}let Rs=0,$u,Bu,Ms,qu=!1,I_,b_,A_,Lr=null;function jF(t){zF(t)&&Fn(t)}function zF(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=zA(t),n=t.shiftKey&&!t.deltaX,r=!n&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),i=n||r?t.deltaY:t.deltaX;for(let s=0;s<e.length;s++){const o=e[s];if(fP(o,r))return r?i<0&&o.scrollTop===0?!0:i>0&&o.scrollTop+o.clientHeight===o.scrollHeight:i<0&&o.scrollLeft===0?!0:i>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function R_(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Oa(t){qu!==!0&&(qu=!0,requestAnimationFrame(()=>{qu=!1;const{height:e}=t.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;(Ms===void 0||e!==window.innerHeight)&&(Ms=n-e,document.scrollingElement.scrollTop=r),r>Ms&&(document.scrollingElement.scrollTop-=Math.ceil((r-Ms)/8))}))}function S_(t){const e=document.body,n=window.visualViewport!==void 0;if(t==="add"){const{overflowY:r,overflowX:i}=window.getComputedStyle(e);$u=Fv(window),Bu=Mv(window),I_=e.style.left,b_=e.style.top,A_=window.location.href,e.style.left=`-${$u}px`,e.style.top=`-${Bu}px`,i!=="hidden"&&(i==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,it.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Oa,Xe.passiveCapture),window.visualViewport.addEventListener("scroll",Oa,Xe.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",R_,Xe.passiveCapture))}it.is.desktop===!0&&it.is.mac===!0&&window[`${t}EventListener`]("wheel",jF,Xe.notPassive),t==="remove"&&(it.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",Oa,Xe.passiveCapture),window.visualViewport.removeEventListener("scroll",Oa,Xe.passiveCapture)):window.removeEventListener("scroll",R_,Xe.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=I_,e.style.top=b_,window.location.href===A_&&window.scrollTo($u,Bu),Ms=void 0)}function HF(t){let e="add";if(t===!0){if(Rs++,Lr!==null){clearTimeout(Lr),Lr=null;return}if(Rs>1)return}else{if(Rs===0||(Rs--,Rs>0))return;if(e="remove",it.is.ios===!0&&it.is.nativeMobile===!0){Lr!==null&&clearTimeout(Lr),Lr=setTimeout(()=>{S_(e),Lr=null},100);return}}S_(e)}function WF(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,HF(e))}}}let Da=0;const KF={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},P_={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var GF=Qe({name:"QDialog",inheritAttrs:!1,props:{...bv,...Ov,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:t=>t==="standard"||["top","bottom","left","right"].includes(t)}},emits:[...Av,"shake","click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){const i=Ge(),s=_e(null),o=_e(!1),a=_e(!1);let l=null,c=null,u,h;const d=M(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:f}=WF(),{registerTimeout:p}=Lv(),{registerTick:v,removeTick:_}=Nv(),{transitionProps:w,transitionStyle:y}=Dv(t,()=>P_[t.position][0],()=>P_[t.position][1]),{showPortal:E,hidePortal:T,portalIsAccessible:b,renderPortal:k}=xv(i,s,Kt,"dialog"),{hide:N}=Rv({showing:o,hideOnRouteChange:d,handleShow:H,handleHide:se,processOnMount:!0}),{addToHistory:A,removeFromHistory:D}=qF(o,N,d),L=M(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${KF[t.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),z=M(()=>o.value===!0&&t.seamless!==!0),F=M(()=>t.autoClose===!0?{onClick:ht}:{}),re=M(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${z.value===!0?"modal":"seamless"}`,r.class]);xe(()=>t.maximized,pe=>{o.value===!0&&ut(pe)}),xe(z,pe=>{f(pe),pe===!0?(qv(_t),$v(de)):(dh(_t),cl(de))});function H(pe){A(),c=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,ut(t.maximized),E(),a.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),v(ee)):_(),p(()=>{if(i.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:ge,bottom:R}=document.activeElement.getBoundingClientRect(),{innerHeight:W}=window,P=window.visualViewport!==void 0?window.visualViewport.height:W;ge>0&&R>P/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-P,R>=W?1/0:Math.ceil(document.scrollingElement.scrollTop+R-P/2))),document.activeElement.scrollIntoView()}h=!0,s.value.click(),h=!1}E(!0),a.value=!1,n("show",pe)},t.transitionDuration)}function se(pe){_(),D(),Be(!0),a.value=!0,T(),c!==null&&(((pe&&pe.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),p(()=>{T(!0),a.value=!1,n("hide",pe)},t.transitionDuration)}function ee(pe){Pv(()=>{let ge=s.value;ge===null||ge.contains(document.activeElement)===!0||(ge=(pe!==""?ge.querySelector(pe):null)||ge.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||ge.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||ge.querySelector("[autofocus], [data-autofocus]")||ge,ge.focus({preventScroll:!0}))})}function me(pe){pe&&typeof pe.focus=="function"?pe.focus({preventScroll:!0}):ee(),n("shake");const ge=s.value;ge!==null&&(ge.classList.remove("q-animate--scale"),ge.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,s.value!==null&&(ge.classList.remove("q-animate--scale"),ee())},170))}function de(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&me():(n("escapeKey"),N()))}function Be(pe){l!==null&&(clearTimeout(l),l=null),(pe===!0||o.value===!0)&&(ut(!1),t.seamless!==!0&&(f(!1),dh(_t),cl(de))),pe!==!0&&(c=null)}function ut(pe){pe===!0?u!==!0&&(Da<1&&document.body.classList.add("q-body--dialog"),Da++,u=!0):u===!0&&(Da<2&&document.body.classList.remove("q-body--dialog"),Da--,u=!1)}function ht(pe){h!==!0&&(N(pe),n("click",pe))}function qe(pe){t.persistent!==!0&&t.noBackdropDismiss!==!0?N(pe):t.noShake!==!0&&me()}function _t(pe){t.allowFocusOutside!==!0&&b.value===!0&&_v(s.value,pe.target)!==!0&&ee('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:ee,shake:me,__updateRefocusTarget(pe){c=pe||null}}),Mt(Be);function Kt(){return j("div",{role:"dialog","aria-modal":z.value===!0?"true":"false",...r,class:re.value},[j(Zi,{name:"q-transition--fade",appear:!0},()=>z.value===!0?j("div",{class:"q-dialog__backdrop fixed-full",style:y.value,"aria-hidden":"true",tabindex:-1,onClick:qe}):null),j(Zi,w.value,()=>o.value===!0?j("div",{ref:s,class:L.value,style:y.value,tabindex:-1,...F.value},Nn(e.default)):null)])}return k}});const QF={__name:"AuthDialog",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=e,r=_e("SignInForm"),i=a=>{r.value=a},s={SignInForm:Xc(()=>ke(()=>import("./SignInForm.74a5fe5e.js"),["assets/SignInForm.74a5fe5e.js","assets/QForm.3e9cc91b.js","assets/error-message.73b8b582.js"])),SignUpForm:Xc(()=>ke(()=>import("./SignUpForm.b0e66030.js"),["assets/SignUpForm.b0e66030.js","assets/QForm.3e9cc91b.js","assets/validate-rules.51cb0822.js","assets/error-message.73b8b582.js"])),FindPasswordForm:Xc(()=>ke(()=>import("./FindPasswordForm.99cd9bd9.js"),["assets/FindPasswordForm.99cd9bd9.js","assets/QForm.3e9cc91b.js"]))},o=()=>{n("update:modelValue",!1)};return(a,l)=>(an(),ln(GF,{"model-value":t.modelValue,"onUpdate:modelValue":l[0]||(l[0]=c=>a.$emit("update:modelValue",c)),"transition-show":"none","transition-hide":"none",onHide:l[1]||(l[1]=c=>i("SignInForm"))},{default:je(()=>[ae(BF,{style:{width:"400px"}},{default:je(()=>[ae(T_,{class:"flex"},{default:je(()=>[ae(Iv),$i(ae(Mn,{icon:"close",flat:"",round:"",dense:""},null,512),[[Ua]])]),_:1}),ae(T_,{class:"q-px-xl q-pb-xl"},{default:je(()=>[(an(),ln(ob(s[r.value]),{onChangeView:i,onCloseDialog:o},null,32))]),_:1})]),_:1})]),_:1},8,["model-value"]))}},YF=Yl("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1),JF=["src"],XF={__name:"default",setup(t){const e=TS(),n=$F(),r=M(()=>({maxWidth:e.meta.width||"1080px",margin:"0 auto"})),i=_e(!1),s=()=>{i.value=!0},o=Kv();console.log("authStore : ",o);const a=async()=>{await FF(),n.notify("\uB85C\uADF8\uC544\uC6C3 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.")},l=async()=>{await n0(),n.notify("\uC774\uBA54\uC77C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694~!")};return(c,u)=>{const h=uy("router-view");return an(),ln(CP,{view:"lHh Lpr lff",class:"bg-grey-2"},{default:je(()=>[ae(AP,{bordered:"",class:"bg-white text-grey-9"},{default:je(()=>[ae(IP,null,{default:je(()=>[ae(Mn,{flat:"",dense:"",to:"/"},{default:je(()=>[ae(OS,null,{default:je(()=>[ae(uh,null,{default:je(()=>[YF]),_:1}),Cs(" \uCF54\uB529 \uD074\uB7FD ")]),_:1})]),_:1}),ae(Iv),ae(Mn,{stretch:"",flat:"",label:"Home",to:"/home"}),ae(Mn,{stretch:"",flat:"",label:"\uC218\uAC15\uD558\uAE30",href:"https://google.com",target:"_blanck"}),ae(Mn,{stretch:"",flat:"",label:"\uC628\uB77C\uC778 \uAC15\uC758",href:"https://google.com",target:"_blanck"}),ae(Mn,{stretch:"",flat:"",label:"\uC720\uD22C\uBE0C",href:"https://youtube.com/",target:"_blanck"}),ae(ZS,{class:"q-my-md q=mr-md",vertical:""}),Ot(o).isAuthenticated?Cp("",!0):(an(),ln(Mn,{key:0,unelevated:"",rounded:"",color:"primary",label:"\uB85C\uADF8\uC778/ \uD68C\uC6D0\uAC00\uC785",onClick:s})),Ot(o).isAuthenticated?(an(),ln(Mn,{key:1,round:"",flat:""},{default:je(()=>[ae(uh,null,{default:je(()=>[Yl("img",{src:Ot(o).user.photoURL||Ot(t0)(Ot(o).user.uid)},null,8,JF)]),_:1}),ae(TP,null,{default:je(()=>[ae(eP,{style:{"min-width":"100px"}},{default:je(()=>[Ot(o).user.emailVerified?$i((an(),ln(pu,{key:0,clickable:"",to:"/mypage/profile"},{default:je(()=>[ae(fu,null,{default:je(()=>[Cs("\uD504\uB85C\uD544")]),_:1})]),_:1})),[[Ua]]):$i((an(),ln(pu,{key:1,clickable:"",onClick:l},{default:je(()=>[ae(fu,{class:"text-red"},{default:je(()=>[Cs("\uC774\uBA54\uC77C\uC744 \uC778\uC99D\uD574\uC8FC\uC138\uC694.")]),_:1})]),_:1})),[[Ua]]),$i((an(),ln(pu,{clickable:"",onClick:a},{default:je(()=>[ae(fu,null,{default:je(()=>[Cs("\uB85C\uADF8\uC544\uC6C3")]),_:1})]),_:1})),[[Ua]])]),_:1})]),_:1})]),_:1})):Cp("",!0)]),_:1})]),_:1}),ae(RP,{style:No(r.value)},{default:je(()=>[ae(h)]),_:1},8,["style"]),ae(QF,{modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=d=>i.value=d)},null,8,["modelValue"])]),_:1})}}},ZF={admin:()=>ke(()=>import("./admin.24c3e34c.js"),["assets/admin.24c3e34c.js","assets/plugin-vue_export-helper.21dcd24c.js"]),default:XF,MainLayout:()=>ke(()=>import("./MainLayout.5540a62b.js"),["assets/MainLayout.5540a62b.js","assets/QItemLabel.cdec951d.js","assets/format.c860d4da.js","assets/plugin-vue_export-helper.21dcd24c.js"])};function eU(t){return t.map(e=>{var n;return{path:e.path,meta:e.meta,component:ZF[((n=e.meta)==null?void 0:n.layout)||"default"],children:e.path==="/"?[e]:[{...e,path:""}]}})}var ju=function(){return IS({scrollBehavior:()=>({left:0,top:0}),history:QR("/"),extendRoutes:n=>eU(n.map(r=>(r.path.includes("admin")&&(r={...r,meta:{...r.meta,layout:"admin"}}),r)))})};async function tU(t,e){const n=t(uR);n.use(cR,e);const r=typeof au=="function"?await au({}):au;n.use(r);const i=Sr(typeof ju=="function"?await ju({store:r}):ju);return r.use(({store:s})=>{s.router=i}),{app:n,store:r,router:i}}let nU=0;const Ga={},Qa={},on={},r0={},rU=/^\s*$/,i0=[],iU=[void 0,null,!0,!1,""],tp=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],sU=["top-left","top-right","bottom-left","bottom-right"],Ni={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function s0(t,e,n){if(!t)return Ss("parameter required");let r;const i={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(i,Ga),lo(t)===!1&&(i.type&&Object.assign(i,Ni[i.type]),t={message:t}),Object.assign(i,Ni[t.type||i.type],t),typeof i.icon=="function"&&(i.icon=i.icon(e)),i.spinner?(i.spinner===!0&&(i.spinner=gv),i.spinner=Sr(i.spinner)):i.spinner=!1,i.meta={hasMedia:Boolean(i.spinner!==!1||i.icon||i.avatar),hasText:C_(i.message)||C_(i.caption)},i.position){if(tp.includes(i.position)===!1)return Ss("wrong position",t)}else i.position="bottom";if(iU.includes(i.timeout)===!0)i.timeout=5e3;else{const l=Number(i.timeout);if(isNaN(l)||l<0)return Ss("wrong timeout",t);i.timeout=Number.isFinite(l)?l:0}i.timeout===0?i.progress=!1:i.progress===!0&&(i.meta.progressClass="q-notification__progress"+(i.progressClass?` ${i.progressClass}`:""),i.meta.progressStyle={animationDuration:`${i.timeout+1e3}ms`});const s=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(Ga.actions)===!0?Ga.actions:[]).concat(Ni[t.type]!==void 0&&Array.isArray(Ni[t.type].actions)===!0?Ni[t.type].actions:[]),{closeBtn:o}=i;if(o&&s.push({label:typeof o=="string"?o:e.lang.label.close}),i.actions=s.map(({handler:l,noDismiss:c,...u})=>({flat:!0,...u,onClick:typeof l=="function"?()=>{l(),c!==!0&&a()}:()=>{a()}})),i.multiLine===void 0&&(i.multiLine=i.actions.length>1),Object.assign(i.meta,{class:`q-notification row items-stretch q-notification--${i.multiLine===!0?"multi-line":"standard"}`+(i.color!==void 0?` bg-${i.color}`:"")+(i.textColor!==void 0?` text-${i.textColor}`:"")+(i.classes!==void 0?` ${i.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(i.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(i.multiLine===!0?"":" col"),leftClass:i.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...i.attrs}}),i.group===!1?(i.group=void 0,i.meta.group=void 0):((i.group===void 0||i.group===!0)&&(i.group=[i.message,i.caption,i.multiline].concat(i.actions.map(l=>`${l.label}*${l.icon}`)).join("|")),i.meta.group=i.group+"|"+i.position),i.actions.length===0?i.actions=void 0:i.meta.actionsClass="q-notification__actions row items-center "+(i.multiLine===!0?"justify-end":"col-auto")+(i.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),i.meta.uid=n.notif.meta.uid;const l=on[i.position].value.indexOf(n.notif);on[i.position].value[l]=i}else{const l=Qa[i.meta.group];if(l===void 0){if(i.meta.uid=nU++,i.meta.badge=1,["left","right","center"].indexOf(i.position)!==-1)on[i.position].value.splice(Math.floor(on[i.position].value.length/2),0,i);else{const c=i.position.indexOf("top")!==-1?"unshift":"push";on[i.position].value[c](i)}i.group!==void 0&&(Qa[i.meta.group]=i)}else{if(l.meta.timer&&(clearTimeout(l.meta.timer),l.meta.timer=void 0),i.badgePosition!==void 0){if(sU.includes(i.badgePosition)===!1)return Ss("wrong badgePosition",t)}else i.badgePosition=`top-${i.position.indexOf("left")!==-1?"right":"left"}`;i.meta.uid=l.meta.uid,i.meta.badge=l.meta.badge+1,i.meta.badgeClass=`q-notification__badge q-notification__badge--${i.badgePosition}`+(i.badgeColor!==void 0?` bg-${i.badgeColor}`:"")+(i.badgeTextColor!==void 0?` text-${i.badgeTextColor}`:"")+(i.badgeClass?` ${i.badgeClass}`:"");const c=on[i.position].value.indexOf(l);on[i.position].value[c]=Qa[i.meta.group]=i}}const a=()=>{oU(i),r=void 0};if(i.timeout>0&&(i.meta.timer=setTimeout(()=>{i.meta.timer=void 0,a()},i.timeout+1e3)),i.group!==void 0)return l=>{l!==void 0?Ss("trying to update a grouped one which is forbidden",t):a()};if(r={dismiss:a,config:t,notif:i},n!==void 0){Object.assign(n,r);return}return l=>{if(r!==void 0)if(l===void 0)r.dismiss();else{const c=Object.assign({},r.config,l,{group:!1,position:i.position});s0(c,e,r)}}}function oU(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=on[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete Qa[t.meta.group];const n=i0[""+t.meta.uid];if(n){const{width:r,height:i}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=i}on[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function C_(t){return t!=null&&rU.test(t)!==!0}function Ss(t,e){return console.error(`Notify: ${t}`,e),!1}function aU(){return Qe({name:"QNotifications",devtools:{hide:!0},setup(){return()=>j("div",{class:"q-notifications"},tp.map(t=>j(PA,{key:t,class:r0[t],tag:"div",name:`q-notification--${t}`},()=>on[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(j(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(j(ll,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(j(uh,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>j("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let s;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];s=e.caption?[j("div",a),j("div",{class:"q-notification__caption"},[e.caption])]:a}r.push(j("div",o,s))}const i=[j("div",{class:n.contentClass},r)];return e.progress===!0&&i.push(j("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&i.push(j("div",{class:n.actionsClass},e.actions.map(s=>j(Mn,s)))),n.badge>1&&i.push(j("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),j("div",{ref:s=>{i0[""+n.uid]=s},key:n.uid,class:n.class,...n.attrs},[j("div",{class:n.wrapperClass},i)])}))))}})}var lU={setDefaults(t){lo(t)===!0&&Object.assign(Ga,t)},registerType(t,e){lo(e)===!0&&(Ni[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>s0(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){tp.forEach(r=>{on[r]=_e([]);const i=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")!==-1?"top":"bottom",s=r.indexOf("left")!==-1?"start":r.indexOf("right")!==-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${s}`;r0[r]=`q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`});const n=Cv("q-notify");oR(aU(),e).mount(n)}}},cU={config:{notify:{position:"top"}},plugins:{Notify:lU}};const uU="/";async function hU({app:t,router:e,store:n},r){let i=!1;const s=l=>{try{return e.resolve(l).href}catch{}return Object(l)===l?null:l},o=l=>{if(i=!0,typeof l=="string"&&/^https?:\/\//.test(l)){window.location.href=l;return}const c=s(l);c!==null&&(window.location.href=c)},a=window.location.href.replace(window.location.origin,"");for(let l=0;i===!1&&l<r.length;l++)try{await r[l]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:uU})}catch(c){if(c&&c.url){o(c.url);return}console.error("[Quasar] boot error:",c);return}i!==!0&&(t.use(e),t.mount("#q-app"))}tU(By,cU).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",r=>r.map(i=>i.default)];return Promise[e]([ke(()=>Promise.resolve().then(function(){return VF}),void 0),ke(()=>import("./error-handler.a09c9098.js"),["assets/error-handler.a09c9098.js","assets/error-message.73b8b582.js"]),ke(()=>import("./navigation-guards.f3e30492.js"),[]),ke(()=>import("./algoliasearch.1202c35e.js"),[])]).then(r=>{const i=n(r).filter(s=>typeof s=="function");hU(t,i)})});export{hn as $,ni as A,TU as B,nh as C,IU as D,ao as E,$t as F,zy as G,jy as H,Hy as I,Fn as J,tP as K,Qe as L,bv as M,lU as N,Uo as O,Av as P,$o as Q,Lv as R,Ct as S,ji as T,vd as U,_e as V,M as W,Rv as X,qF as Y,xe as Z,Hn as _,Cs as a,JU as a$,Mt as a0,$i as a1,kU as a2,Nn as a3,Ge as a4,WF as a5,Hl as a6,fu as a7,ll as a8,pu as a9,pd as aA,pb as aB,ph as aC,Iv as aD,BF as aE,Ot as aF,ny as aG,VU as aH,uh as aI,T_ as aJ,EU as aK,Ua as aL,ZS as aM,GF as aN,ze as aO,iR as aP,WU as aQ,kf as aR,ep as aS,qU as aT,jU as aU,HU as aV,zU as aW,BU as aX,$U as aY,KU as aZ,mI as a_,CP as aa,IP as ab,Mn as ac,OS as ad,AP as ae,eP as af,RP as ag,NU as ah,hr as ai,OU as aj,dl as ak,kP as al,LU as am,Bo as an,DU as ao,OP as ap,TS as aq,CU as ar,AU as as,MS as at,ri as au,XA as av,Li as aw,ou as ax,Nv as ay,qi as az,SU as b,YU as b0,QU as b1,XU as b2,GU as b3,t2 as b4,ZU as b5,e2 as b6,UF as b7,NF as b8,HA as b9,jv as bA,Vv as bB,Om as bC,_P as bD,US as bE,$S as bF,pU as bG,qb as bH,Za as bI,cn as bJ,Sr as bK,W0 as bL,o2 as bM,a2 as bN,l2 as bO,sn as bP,RU as bQ,Yp as bR,i2 as bS,n2 as bT,r2 as bU,s2 as bV,gb as ba,_b as bb,yy as bc,TP as bd,$F as be,Wn as bf,bU as bg,Xl as bh,Pv as bi,xU as bj,gv as bk,Zi as bl,wv as bm,Td as bn,Id as bo,bS as bp,ql as bq,nP as br,Ov as bs,xm as bt,yP as bu,Dv as bv,iP as bw,rP as bx,xv as by,Pm as bz,Yl as c,yU as d,Cp as e,mU as f,uy as g,j as h,ln as i,ae as j,vU as k,dU as l,Hb as m,$l as n,an as o,gU as p,je as q,_U as r,PU as s,fU as t,Kv as u,nA as v,wU as w,Wb as x,hv as y,it as z};
