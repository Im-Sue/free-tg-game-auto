import{b as u}from"./chunk-2ZLYTJ3L.js";import{c as s,d as o,g as f,i as m}from"./chunk-JLA5HXVC.js";import{b as w}from"./chunk-I4WIGQLD.js";import{a as O}from"./chunk-CXUPEGDW.js";import{f as D,m as a,o as i}from"./chunk-ICCOEXX5.js";a();i();var t=D(O());var V=e=>{let[k,c]=(0,t.useState)({}),r=(0,t.useMemo)(()=>{switch(e){case s:case f:return s;case o:case m:return o;default:return e}},[e]);return(0,t.useEffect)(()=>{let n;return r&&(async()=>{n=(await w.current_networks).liveQuery().subscribe(async(_,N)=>{if(!N){let A=await u(r);c(A)}});let R=await u(r);c(R)})(),()=>{n&&n?.unsubscribe()}},[r]),k};export{V as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-QNZPWHPG.js.map
