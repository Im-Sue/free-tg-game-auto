import{a as B}from"./chunk-FMELEEEB.js";import{a as f}from"./chunk-IM6LLRHH.js";import{a as m}from"./chunk-KJFAD5C4.js";import{Ea as p,Pa as b}from"./chunk-M54COW6Q.js";import{I as x,v as u}from"./chunk-K4MPEKC5.js";import{f as k,m as i,o as d}from"./chunk-ICCOEXX5.js";i();d();x();i();d();var y=k(B()),T=(s,c)=>{let r=window.URL||window.webkitURL||window,t=r.createObjectURL(s),n=document.createElement("a");n.href=t,n.download=c,n.click(),r.revokeObjectURL(t)},A=(s=[],c="result.csv",r)=>{let t=y.default.unparse(s,r),n="\uFEFF",e=new Blob([`${n}${t}`],{type:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"});T(e,c)},C=A;i();d();b();function _(s){let c=m(),r=e=>{let o=p({localType:e})?.coinId;return c?.[o]},t=e=>{if(!!e)return Array.isArray(e)?e.reduce((o,a)=>(o[a]=r(a),o),{}):r(e)},n=t(s);return{getCoinByLocalType:t,value:n}}var g=_;function j(){let{keyringIdentities:s}=f(),{getCoinByLocalType:c}=g();return{downloadAddress:()=>{let t=[],n=(e=[])=>[...new Set(e.map(o=>Object.keys(o.account)).flat())].sort((o,a)=>o.localeCompare(a));for(let e of s){let o=n(e.walletIdentities),a=o.map(l=>c(l)?.chainName),h=[e.keyringName,...a];t.push(h);for(let l of e.walletIdentities){let v=o.map(L=>l.account[L]),I=[l.walletName,...v];t.push(I)}t.push([])}C(t,`${u("wallet_extension_addaccount_text_wallet_address")}.csv`)}}}var q=j;export{q as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-JV2QGIZV.js.map
