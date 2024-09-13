import{a as c}from"./chunk-M4STRGDO.js";import{a as u}from"./chunk-5JJQQHKZ.js";import{Y as r}from"./chunk-CA5MYYD6.js";import{Za as m,pb as E}from"./chunk-M54COW6Q.js";import{I as h,v as o}from"./chunk-K4MPEKC5.js";import{m as s,o as n}from"./chunk-ICCOEXX5.js";s();n();h();E();function w(){let l=c();return u(async({from:L,chainId:f,simulateTransactionParam:p={},...T})=>{let e=(await l({checkTypes:[r.TX_ANALYZE],from:L,chainId:f,bizLine:6,simulateTransactionParamList:[{sigVerify:!1,replaceRecentBlockhash:!0,...p}],...T}))?.[r.TX_ANALYZE]||{},[a]=e.simulateTransactionResultList||[],i=(e.simulateTransactionResultList||[]).find(t=>t?.msg||m(t?.unitGasLimit,"0"));if(i?.msg)throw new Error(i?.msg);if(!a||!!i)throw new Error(o("wallet_extension_alert_estimate_unavailable"));return{firstUnitLimit:a?.unitGasLimit,unitLimits:(e.simulateTransactionResultList||[]).map(t=>t?.unitGasLimit)}})}var F=w;export{F as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-KHK3QCC3.js.map
