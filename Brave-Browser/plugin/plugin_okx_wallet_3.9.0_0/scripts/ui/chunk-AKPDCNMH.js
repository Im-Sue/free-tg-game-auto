import{Fa as i,Ia as m,Pa as w,d as e,e as u,i as o,j as h,k as c,ka as U,l as D,la as f}from"./chunk-M54COW6Q.js";import{b as l,g,m as a,o as r}from"./chunk-ICCOEXX5.js";function E(s){if(!s)return H.getUrl();s?.length||(s=i());let{rpcUrl:t}=m(y,s),{hostname:p}=new URL(t||"https://exchainrpc.okex.org"),n=p.split(".");return`wallet.${n[1]}.${n[2]}`}function F(){return x.getUrl()}function S(){return A.getUrl()}var y,H,x,A,L=l(()=>{"use strict";a();r();u();w();h();D();({OKEXCHAIN_CHAIN_ID:y}=(f(),g(U))),H=c;x=(()=>{let s="";return(async()=>{try{let{wssDomain:t}=await e.get("wssDomain");s=t}catch{}})(),{setUrlFromLocalAsync:async()=>{try{let{wssDomain:t}=await e.get("wssDomain");s=t}catch{}},setUrl:t=>{s=t},getUrl:()=>new URL(s||o.app.defaultAppDomains.wssDomains[0]).host}})(),A=(()=>{let s="";return(async()=>{try{let{staticDomain:t}=await e.get("staticDomain");s=t}catch{}})(),{setUrlFromLocalAsync:async()=>{try{let{staticDomain:t}=await e.get("staticDomain");s=t}catch{}},setUrl:t=>{s=t},getUrl:()=>new URL(s||o.app.defaultAppDomains.staticDomains[0]).host}})()});export{H as a,E as b,x as c,A as d,F as e,S as f,L as g};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-AKPDCNMH.js.map
