import{d as n,f as x}from"./chunk-2G2AXMFT.js";import{a as c,b as A}from"./chunk-A7LNVEYU.js";import{c as a,f as o,h as y}from"./chunk-2YWUVAR3.js";import{m as s,o as u}from"./chunk-ICCOEXX5.js";s();u();y();A();x();var l=async(t={})=>{let{data:e}=await a(c.queryAccountExist,t);return e},q=async t=>{let{data:e}=await a(c.queryAccountInfo,t);return e},w=async(t,e)=>{let r=await n().getSignRequestHeaders({walletId:e});return await o(c.createWaxAccount,t,{headers:r})||{}},g=async(t,e)=>{let r=await n().getSignRequestHeaders({walletId:e});return await o(c.createFreeWaxAccount,t,{headers:r})||{}},W=async t=>{let{data:e}=await a(c.queryAccountStatus,t);return e||{}},h=async t=>{let{data:e}=await a(c.checkAccountPattern,t);return e??!1};export{l as a,q as b,w as c,g as d,W as e,h as f};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-X6XBAGXF.js.map
