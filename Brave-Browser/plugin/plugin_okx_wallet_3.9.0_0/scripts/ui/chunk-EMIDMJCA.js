import{a}from"./chunk-T2LI56ZH.js";import{b as s}from"./chunk-ADIQBHVU.js";import{c}from"./chunk-CFT6B56M.js";import{m as i,o as r}from"./chunk-ICCOEXX5.js";i();r();function S(){let f=s();return async(d,n,o)=>{let u=await c(n,o),{coinFeeList:l,...F}=u?.data?.info||{},C=n.coinId,t=(l||[]).find(({coinId:e})=>C===e);if(t){let{coin:e}=await f(t.coinId,!1);if(e){let{chainId:I,address:g}=e,m=await a({chainId:I,address:o.toAddr,contractAddress:g,type:d});return{info:F,feeCoin:t,fee:m?.data?.fee||"0"}}}return null}}var L=S;export{L as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-EMIDMJCA.js.map
