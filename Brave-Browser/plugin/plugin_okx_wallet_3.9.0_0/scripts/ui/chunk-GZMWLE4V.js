import{b as f,d as u}from"./chunk-JEZIPKDY.js";import{a as p,c as m}from"./chunk-5JJQQHKZ.js";import{Ra as s,nb as l,pb as d}from"./chunk-M54COW6Q.js";import{m as a,o as c}from"./chunk-ICCOEXX5.js";a();c();d();a();c();var B=(...n)=>{let e=n.shift();return(...t)=>e?n.reduce((r,o)=>o(r),e(...t)):null},h=(...n)=>async(...e)=>n.slice(1).reduce((r,o)=>r.then(i=>o(i)),Promise.resolve(n[0](...e))),F=()=>{throw new Error};function C(n,e,t){let r={coinId:e,coinAmount:0,coinAmountInt:0,currencyAmount:0};return!Array.isArray(n)||!n?.length||(t?r=n.find(o=>+o.coinId==+e&&+o.addressType==+t)||{}:r=n.find(o=>+o.coinId==+e)||{}),r}function I(n,e){let t=u();return m(()=>C(t,n,e),[t,n,e])}var b=(n={})=>{let e=n.coinAmountInt||0;return String(e)},D=n=>{let e=I(n);return b(e)},k=(n,e)=>B(s,l)(n,10**e),A=(n,e)=>(f(n)?.coins||[]).find(i=>i.coinId===+e)||{},z=(n,e)=>{let t=A(n,e);return b(t)},E=()=>{let n=u();return p(e=>n.find(r=>r.coinId===+e)||{})},S=n=>{let e=u();return n.map(r=>e.find(o=>o.coinId===+r)||{})};export{B as a,h as b,F as c,C as d,I as e,D as f,k as g,z as h,E as i,S as j};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-GZMWLE4V.js.map
