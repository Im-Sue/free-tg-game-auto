import{c as p,g as N}from"./chunk-5JJQQHKZ.js";import{ab as T,bb as y,y as E}from"./chunk-ZPOCIBPN.js";import{Qa as a,pb as U}from"./chunk-M54COW6Q.js";import{I as D,r as k,s as x}from"./chunk-K4MPEKC5.js";import{a as P}from"./chunk-CXUPEGDW.js";import{c as g,f as S,m as o,o as n}from"./chunk-ICCOEXX5.js";var M=g((te,f)=>{o();n();var b=N(),d=1/0,F=17976931348623157e292;function I(e){if(!e)return e===0?e:0;if(e=b(e),e===d||e===-d){var r=e<0?-1:1;return r*F}return e===e?e:0}f.exports=I});var w=g((ce,h)=>{o();n();var j=M();function q(e){var r=j(e),t=r%1;return r===r?t?r-t:r:0}h.exports=q});o();n();var R=S(P()),i=S(E());o();n();D();var m=(e,r)=>x("okex_wallet",e,r,{storageType:k.chromeStorage});o();n();var C={coinTickers:"coinTickers"};U();var Q=e=>(0,i.useSelector)(y).find(({currencyId:c})=>c===e)||{},u=()=>{let{data:e}=m(C.coinTickers);return e||{}},V=()=>{let e=u(),r=(0,i.useSelector)(T);return p(()=>Object.keys(e).reduce((t,c)=>(t[c]=a(e?.[c]?.coinToUSDRate,r?.usdToThisRate),t),{}),[e,r?.usdToThisRate])},W=()=>{let e=u();return p(()=>Object.keys(e).reduce((r,t)=>(r[t]=e?.[t]?.coinToUSDRate,r),{}),[e])},Z=e=>{let r=u(),t=(0,i.useSelector)(T),c=r?.[e]?.coinToUSDRate;return(0,R.useMemo)(()=>a(c,t?.usdToThisRate),[c,t?.usdToThisRate])},$=e=>u()?.[e]?.coinToUSDRate,l=e=>{let{data:r}=m(C.coinTickers);return r?.[e]?.coinPriceChangePercent24h};export{w as a,m as b,C as c,Q as d,u as e,V as f,W as g,Z as h,$ as i,l as j};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-LF2PURXZ.js.map
