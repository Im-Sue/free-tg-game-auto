import{a as h}from"./chunk-2PQSDICF.js";import{h as S,l as g}from"./chunk-FFQESTX4.js";import{Wa as I,mb as N,y as v}from"./chunk-ZPOCIBPN.js";import{a as l,b}from"./chunk-A7LNVEYU.js";import{c as a,h as W}from"./chunk-2YWUVAR3.js";import{hc as k}from"./chunk-M54COW6Q.js";import{a as R}from"./chunk-CXUPEGDW.js";import{f as w,m as C,o as L}from"./chunk-ICCOEXX5.js";C();L();var d=w(R()),m=w(v());W();b();var y=(t,o,r,n)=>{let e=o[n]||[],c=(t||[]).filter(s=>e.some(p=>s.coinId===p.coinId));return(r||[]).reduce((s,i)=>{let p=c.find(u=>u.coinId===i.coinId);return p&&s.push(p),s},[])},j=(t,o)=>(o&&(t=(t||[]).filter(r=>!Object.values(k).includes(r.protocolId))),t),q=()=>{let t=S(),o=g(t),r=(0,m.useSelector)(I),n=(0,m.useSelector)(N),{data:e,loading:c,run:f}=h(async()=>{let[p,u]=await Promise.all([a(l.getSupportCustomChains),a(l.getXRC20ProtocolList,{chainId:0})]),M=p.data||[],P=u.data||[];return{supportNetworkList:M,protocolList:P}},{manual:!0,cacheKey:"customNetwork"}),s=(0,d.useMemo)(()=>j(e?.protocolList,o),[e?.protocolList,o]),i=(0,d.useMemo)(()=>y(e?.supportNetworkList,r,n,t),[e?.supportNetworkList,r,n,t]);return{data:{protocolList:s,supportNetworkList:i},run:f,loading:c}},O=q;export{O as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-LRK34NUQ.js.map
