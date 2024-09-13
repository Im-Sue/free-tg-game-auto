import{i as I}from"./chunk-FFQESTX4.js";import{d as g}from"./chunk-ZDQ5EBGN.js";import{a as N}from"./chunk-EWK7ZFVN.js";import{a as C}from"./chunk-5JJQQHKZ.js";import{Pa as A,m as b,pa as i,qa as f,ya as l}from"./chunk-M54COW6Q.js";import{f as y,m as o,o as n}from"./chunk-ICCOEXX5.js";o();n();A();var r=y(b());o();n();A();var L=(t="")=>[f,l,i].includes(t)||g(t),u=L;var U=t=>{let c=I(t),T=N();return C(d=>{if((0,r.isEmpty)(c))return[];let{addressType:k={},account:m={}}=c,h=Object.entries(m).filter(([e])=>u(e)).map(([,e])=>e),p=k?.bitcoin?.map(e=>e.address)??[],w=(0,r.uniq)((0,r.union)(h,p));if((0,r.isEmpty)(d))return w;let s=T?.find(e=>e.chainId===Number(d))?.localType;if(!s||!u(s))return[];if(s===i)return(0,r.uniq)(p);let a=m[s];return a?[a]:[]})};export{U as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-UDYIY37L.js.map
