import{b as r}from"./chunk-4RHFH7IF.js";import{B as o,C as i}from"./chunk-ZPOCIBPN.js";import{d as n,f as c}from"./chunk-2G2AXMFT.js";import{m as a,o as t}from"./chunk-ICCOEXX5.js";a();t();c();var s="Token",k=r(s),p={chainTokens:[],chainTokenPrice:{},chainTokenBalance:{}},l=e=>e.metamask.rpcEvmChainTokens||[],x=e=>e.metamask.rpcEvmChainTokenPrice||{},g=e=>e.metamask.rpcEvmChainTokenBalance||{},m=o({name:k,initialState:p,reducers:{}}),{reducer:T}=m,B=e=>async()=>{await n().addChainToken(e)},E=e=>async()=>{await n().updateChainToken(e)},P=e=>async()=>{await n().updateChainTokenPrice(e)},f=e=>async()=>{await n().updateChainTokenBalance(e)},v=T;export{k as a,l as b,x as c,g as d,B as e,E as f,P as g,f as h,v as i};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-KRHB66KZ.js.map
