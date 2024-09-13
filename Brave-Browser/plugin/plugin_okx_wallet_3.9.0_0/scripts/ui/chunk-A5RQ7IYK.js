import{a as T,k as E}from"./chunk-FFQESTX4.js";import{d as c}from"./chunk-R7VTXTCL.js";import{p as l,q as m}from"./chunk-URG4MCPH.js";import{a as L}from"./chunk-IOCZ22XI.js";import{a as p,b as d}from"./chunk-JERFAOJH.js";import{e as i}from"./chunk-FQ4XEVKF.js";import{a as y}from"./chunk-CXUPEGDW.js";import{f as o,m as a,o as s}from"./chunk-ICCOEXX5.js";a();s();var f=o(T()),u=o(L());var C=o(y());var _=()=>{let e=(0,u.useHistory)(),t=E();return(0,C.useCallback)(async r=>{let g=await c.hasConnectedLedger(),{walletName:h}=t(r),n=`${m}?${f.default.stringify({type:i.addChain,walletId:r})}`;g?e.push(n):d.openModal(p.hardWareNotConnected,{walletName:h,onButtonClick:()=>{globalThis.platform.openExtensionInBrowser(l)},onExtButtonClick:()=>{globalThis.platform.openExtensionInBrowser(`${n}&hideBack=1`)}})},[e,t])};export{_ as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-A5RQ7IYK.js.map
