import{c as ze,m as P,o as J}from"./chunk-ICCOEXX5.js";var Ae=ze((k,R)=>{P();J();(function(o,h){typeof k=="object"&&typeof R<"u"?h(k):typeof define=="function"&&define.amd?define(["exports"],h):(o=typeof globalThis<"u"?globalThis:o||self,h(o.Superstruct={}))})(k,function(o){"use strict";class h extends TypeError{constructor(n,t){let r,{message:i,explanation:c,...f}=n,{path:d}=n,a=d.length===0?i:`At path: ${d.join(".")} -- ${i}`;super(c??a),c!=null&&(this.cause=a),Object.assign(this,f),this.name=this.constructor.name,this.failures=()=>r??(r=[n,...t()])}}function B(e){return l(e)&&typeof e[Symbol.iterator]=="function"}function l(e){return typeof e=="object"&&e!=null}function N(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let n=Object.getPrototypeOf(e);return n===null||n===Object.prototype}function y(e){return typeof e=="symbol"?e.toString():typeof e=="string"?JSON.stringify(e):`${e}`}function G(e){let{done:n,value:t}=e.next();return n?void 0:t}function H(e,n,t,r){if(e===!0)return;e===!1?e={}:typeof e=="string"&&(e={message:e});let{path:i,branch:c}=n,{type:f}=t,{refinement:d,message:a=`Expected a value of type \`${f}\`${d?` with refinement \`${d}\``:""}, but received: \`${y(r)}\``}=e;return{value:r,type:f,refinement:d,key:i[i.length-1],path:i,branch:c,...e,message:a}}function*j(e,n,t,r){B(e)||(e=[e]);for(let i of e){let c=H(i,n,t,r);c&&(yield c)}}function*E(e,n,t={}){let{path:r=[],branch:i=[e],coerce:c=!1,mask:f=!1}=t,d={path:r,branch:i};if(c&&(e=n.coercer(e,d),f&&n.type!=="type"&&l(n.schema)&&l(e)&&!Array.isArray(e)))for(let s in e)n.schema[s]===void 0&&delete e[s];let a="valid";for(let s of n.validator(e,d))s.explanation=t.message,a="not_valid",yield[s,void 0];for(let[s,b,Ee]of n.entries(e,d)){let Se=E(b,Ee,{path:s===void 0?r:[...r,s],branch:s===void 0?i:[...i,b],coerce:c,mask:f,message:t.message});for(let w of Se)w[0]?(a=w[0].refinement!=null?"not_refined":"not_valid",yield[w[0],void 0]):c&&(b=w[1],s===void 0?e=b:e instanceof Map?e.set(s,b):e instanceof Set?e.add(b):l(e)&&(b!==void 0||s in e)&&(e[s]=b))}if(a!=="not_valid")for(let s of n.refiner(e,d))s.explanation=t.message,a="not_refined",yield[s,void 0];a==="valid"&&(yield[void 0,e])}class u{constructor(n){let{type:t,schema:r,validator:i,refiner:c,coercer:f=a=>a,entries:d=function*(){}}=n;this.type=t,this.schema=r,this.entries=d,this.coercer=f,i?this.validator=(a,s)=>{let b=i(a,s);return j(b,s,this,a)}:this.validator=()=>[],c?this.refiner=(a,s)=>{let b=c(a,s);return j(b,s,this,a)}:this.refiner=()=>[]}assert(n,t){return M(n,this,t)}create(n,t){return T(n,this,t)}is(n){return S(n,this)}mask(n,t){return _(n,this,t)}validate(n,t={}){return $(n,this,t)}}function M(e,n,t){let r=$(e,n,{message:t});if(r[0])throw r[0]}function T(e,n,t){let r=$(e,n,{coerce:!0,message:t});if(r[0])throw r[0];return r[1]}function _(e,n,t){let r=$(e,n,{coerce:!0,mask:!0,message:t});if(r[0])throw r[0];return r[1]}function S(e,n){return!$(e,n)[0]}function $(e,n,t={}){let r=E(e,n,t),i=G(r);if(i[0])return[new h(i[0],function*(){for(let f of r)f[0]&&(yield f[0])}),void 0];{let c=i[1];return[void 0,c]}}function L(...e){let n=e[0].type==="type",t=e.map(i=>i.schema),r=Object.assign({},...t);return n?A(r):g(r)}function p(e,n){return new u({type:e,schema:null,validator:n})}function Q(e,n){return new u({...e,refiner:(t,r)=>t===void 0||e.refiner(t,r),validator(t,r){return t===void 0?!0:(n(t,r),e.validator(t,r))}})}function U(e){return new u({type:"dynamic",schema:null,*entries(n,t){yield*e(n,t).entries(n,t)},validator(n,t){return e(n,t).validator(n,t)},coercer(n,t){return e(n,t).coercer(n,t)},refiner(n,t){return e(n,t).refiner(n,t)}})}function W(e){let n;return new u({type:"lazy",schema:null,*entries(t,r){n??(n=e()),yield*n.entries(t,r)},validator(t,r){return n??(n=e()),n.validator(t,r)},coercer(t,r){return n??(n=e()),n.coercer(t,r)},refiner(t,r){return n??(n=e()),n.refiner(t,r)}})}function X(e,n){let{schema:t}=e,r={...t};for(let i of n)delete r[i];switch(e.type){case"type":return A(r);default:return g(r)}}function Y(e){let n=e instanceof u?{...e.schema}:{...e};for(let t in n)n[t]=D(n[t]);return g(n)}function Z(e,n){let{schema:t}=e,r={};for(let i of n)r[i]=t[i];return g(r)}function C(e,n){return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."),p(e,n)}function K(){return p("any",()=>!0)}function V(e){return new u({type:"array",schema:e,*entries(n){if(e&&Array.isArray(n))for(let[t,r]of n.entries())yield[t,r,e]},coercer(n){return Array.isArray(n)?n.slice():n},validator(n){return Array.isArray(n)||`Expected an array value, but received: ${y(n)}`}})}function v(){return p("bigint",e=>typeof e=="bigint")}function x(){return p("boolean",e=>typeof e=="boolean")}function ee(){return p("date",e=>e instanceof Date&&!isNaN(e.getTime())||`Expected a valid \`Date\` object, but received: ${y(e)}`)}function ne(e){let n={},t=e.map(r=>y(r)).join();for(let r of e)n[r]=r;return new u({type:"enums",schema:n,validator(r){return e.includes(r)||`Expected one of \`${t}\`, but received: ${y(r)}`}})}function te(){return p("func",e=>typeof e=="function"||`Expected a function, but received: ${y(e)}`)}function re(e){return p("instance",n=>n instanceof e||`Expected a \`${e.name}\` instance, but received: ${y(n)}`)}function ie(){return p("integer",e=>typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)||`Expected an integer, but received: ${y(e)}`)}function oe(e){return new u({type:"intersection",schema:null,*entries(n,t){for(let r of e)yield*r.entries(n,t)},*validator(n,t){for(let r of e)yield*r.validator(n,t)},*refiner(n,t){for(let r of e)yield*r.refiner(n,t)}})}function ce(e){let n=y(e),t=typeof e;return new u({type:"literal",schema:t==="string"||t==="number"||t==="boolean"?e:null,validator(r){return r===e||`Expected the literal \`${n}\`, but received: ${y(r)}`}})}function fe(e,n){return new u({type:"map",schema:null,*entries(t){if(e&&n&&t instanceof Map)for(let[r,i]of t.entries())yield[r,r,e],yield[r,i,n]},coercer(t){return t instanceof Map?new Map(t):t},validator(t){return t instanceof Map||`Expected a \`Map\` object, but received: ${y(t)}`}})}function z(){return p("never",()=>!1)}function se(e){return new u({...e,validator:(n,t)=>n===null||e.validator(n,t),refiner:(n,t)=>n===null||e.refiner(n,t)})}function ue(){return p("number",e=>typeof e=="number"&&!isNaN(e)||`Expected a number, but received: ${y(e)}`)}function g(e){let n=e?Object.keys(e):[],t=z();return new u({type:"object",schema:e||null,*entries(r){if(e&&l(r)){let i=new Set(Object.keys(r));for(let c of n)i.delete(c),yield[c,r[c],e[c]];for(let c of i)yield[c,r[c],t]}},validator(r){return l(r)||`Expected an object, but received: ${y(r)}`},coercer(r){return l(r)?{...r}:r}})}function D(e){return new u({...e,validator:(n,t)=>n===void 0||e.validator(n,t),refiner:(n,t)=>n===void 0||e.refiner(n,t)})}function de(e,n){return new u({type:"record",schema:null,*entries(t){if(l(t))for(let r in t){let i=t[r];yield[r,r,e],yield[r,i,n]}},validator(t){return l(t)||`Expected an object, but received: ${y(t)}`}})}function ae(){return p("regexp",e=>e instanceof RegExp)}function ye(e){return new u({type:"set",schema:null,*entries(n){if(e&&n instanceof Set)for(let t of n)yield[t,t,e]},coercer(n){return n instanceof Set?new Set(n):n},validator(n){return n instanceof Set||`Expected a \`Set\` object, but received: ${y(n)}`}})}function I(){return p("string",e=>typeof e=="string"||`Expected a string, but received: ${y(e)}`)}function pe(e){let n=z();return new u({type:"tuple",schema:null,*entries(t){if(Array.isArray(t)){let r=Math.max(e.length,t.length);for(let i=0;i<r;i++)yield[i,t[i],e[i]||n]}},validator(t){return Array.isArray(t)||`Expected an array, but received: ${y(t)}`}})}function A(e){let n=Object.keys(e);return new u({type:"type",schema:e,*entries(t){if(l(t))for(let r of n)yield[r,t[r],e[r]]},validator(t){return l(t)||`Expected an object, but received: ${y(t)}`},coercer(t){return l(t)?{...t}:t}})}function le(e){let n=e.map(t=>t.type).join(" | ");return new u({type:"union",schema:null,coercer(t){for(let r of e){let[i,c]=r.validate(t,{coerce:!0});if(!i)return c}return t},validator(t,r){let i=[];for(let c of e){let[...f]=E(t,c,r),[d]=f;if(d[0])for(let[a]of f)a&&i.push(a);else return[]}return[`Expected the value to satisfy a union of \`${n}\`, but received: ${y(t)}`,...i]}})}function q(){return p("unknown",()=>!0)}function O(e,n,t){return new u({...e,coercer:(r,i)=>S(r,n)?e.coercer(t(r,i),i):e.coercer(r,i)})}function be(e,n,t={}){return O(e,q(),r=>{let i=typeof n=="function"?n():n;if(r===void 0)return i;if(!t.strict&&N(r)&&N(i)){let c={...r},f=!1;for(let d in i)c[d]===void 0&&(c[d]=i[d],f=!0);if(f)return c}return r})}function me(e){return O(e,I(),n=>n.trim())}function he(e){return m(e,"empty",n=>{let t=F(n);return t===0||`Expected an empty ${e.type} but received one with a size of \`${t}\``})}function F(e){return e instanceof Map||e instanceof Set?e.size:e.length}function $e(e,n,t={}){let{exclusive:r}=t;return m(e,"max",i=>r?i<n:i<=n||`Expected a ${e.type} less than ${r?"":"or equal to "}${n} but received \`${i}\``)}function ge(e,n,t={}){let{exclusive:r}=t;return m(e,"min",i=>r?i>n:i>=n||`Expected a ${e.type} greater than ${r?"":"or equal to "}${n} but received \`${i}\``)}function we(e){return m(e,"nonempty",n=>F(n)>0||`Expected a nonempty ${e.type} but received an empty one`)}function ke(e,n){return m(e,"pattern",t=>n.test(t)||`Expected a ${e.type} matching \`/${n.source}/\` but received "${t}"`)}function je(e,n,t=n){let r=`Expected a ${e.type}`,i=n===t?`of \`${n}\``:`between \`${n}\` and \`${t}\``;return m(e,"size",c=>{if(typeof c=="number"||c instanceof Date)return n<=c&&c<=t||`${r} ${i} but received \`${c}\``;if(c instanceof Map||c instanceof Set){let{size:f}=c;return n<=f&&f<=t||`${r} with a size ${i} but received one with a size of \`${f}\``}else{let{length:f}=c;return n<=f&&f<=t||`${r} with a length ${i} but received one with a length of \`${f}\``}})}function m(e,n,t){return new u({...e,*refiner(r,i){yield*e.refiner(r,i);let c=t(r,i),f=j(c,i,e,r);for(let d of f)yield{...d,refinement:n}}})}o.Struct=u,o.StructError=h,o.any=K,o.array=V,o.assert=M,o.assign=L,o.bigint=v,o.boolean=x,o.coerce=O,o.create=T,o.date=ee,o.defaulted=be,o.define=p,o.deprecated=Q,o.dynamic=U,o.empty=he,o.enums=ne,o.func=te,o.instance=re,o.integer=ie,o.intersection=oe,o.is=S,o.lazy=W,o.literal=ce,o.map=fe,o.mask=_,o.max=$e,o.min=ge,o.never=z,o.nonempty=we,o.nullable=se,o.number=ue,o.object=g,o.omit=X,o.optional=D,o.partial=Y,o.pattern=ke,o.pick=Z,o.record=de,o.refine=m,o.regexp=ae,o.set=ye,o.size=je,o.string=I,o.struct=C,o.trimmed=me,o.tuple=pe,o.type=A,o.union=le,o.unknown=q,o.validate=$})});export{Ae as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-MHPFRLZZ.js.map
