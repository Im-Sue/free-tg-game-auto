import{a as O,b as G}from"./chunk-ZJICRI36.js";import{c as j}from"./chunk-BFVA6OLJ.js";import{a as K}from"./chunk-EWK7ZFVN.js";import{d as M}from"./chunk-SR2BDP3A.js";import{Ra as E,y as X}from"./chunk-ZPOCIBPN.js";import{n as p}from"./chunk-CA5MYYD6.js";import{Ea as U,Pa as V,la as R,m as S,q as y,r as F,s as b,v as D}from"./chunk-M54COW6Q.js";import{G as W}from"./chunk-RIJWHGTU.js";import{I as Q,v as k}from"./chunk-K4MPEKC5.js";import{a as P}from"./chunk-CXUPEGDW.js";import{f as h,m as L,o as x}from"./chunk-ICCOEXX5.js";L();x();var B=h(P()),I=h(X()),l=h(S());Q();R();L();x();V();R();var T=h(S());function w(t,e){return!e||!t||!t.length?null:t.find(o=>(0,T.toLower)(o.address)===(0,T.toLower)(e))||null}function $(t,e,i){let r,o=w(t,i);return o&&o.networks.indexOf(e)!==-1&&(r=o.name),r}function J(t,e,i){let r,o=U({localType:e});if(o){let d=t.find(N=>{let A=(0,T.toLower)(N.account[o.chain]),u=(0,T.toLower)(i),f=!1;if(e===y||e===D||e===F||e===b){let a=N.accountsMap[e];if(a){let c=Object.values(a).map(m=>m.address);f=c.find(m=>(0,T.toLower)(m)===A)&&c.find(m=>(0,T.toLower)(m)===u),f=Boolean(f)}}return A===u||f});d&&(r=`${d.keyringName} - ${d.walletName}`)}return r}function Z(t){let{baseCoinId:e,network:i,name:r}=t||{},o=j({coinId:e}),d=(0,I.useSelector)(O),N=K(),A=i||o?.localType;return(0,B.useMemo)(()=>{let u=d||[];r&&(u=u.filter(({name:a,address:c})=>a.indexOf(r)!==-1||c.indexOf(r)!==-1)),A&&(u=u.filter(({networks:a})=>a.indexOf(A)!==-1));let f=(0,l.keyBy)(N,"localType");return u.map(a=>({...a,networks:a.networks.map(c=>{let m=f[c];return{name:c,iconUrl:m?.image}})}))},[d,N,r,A])}function q(t){let e=(0,I.useSelector)(O);return(0,B.useCallback)((i,r)=>$(e,r??t,i),[e])}function z(t){let e=(0,I.useSelector)(E);return(0,B.useCallback)((i,r)=>J(e,r??t,i),[e])}function v(t){let e=q(t),i=z(t);return(0,B.useCallback)((r,o)=>{let d=e(r,o);return d?{name:d,address:r,type:p.ADDRESS_BOOK}:(d=i(r,o),d?{name:d,address:r,type:p.WALLET_ACCOUNT}:null)},[e,i])}function ee(t){return(0,I.useSelector)(G)[t]||[]}function ge(t){let e=(0,I.useSelector)(O);return w(e,t)}function Ie(t,e){let i=[],r=[],o=[],d=[],N=v(t),A=q(t),u=z(t),f=ee(t),a=Z({network:t}),c=(0,I.useSelector)(E),m=M();return(0,B.useMemo)(()=>{f?.length&&(r=f.map(({type:n,name:s,address:g})=>{if(n===p.ADDRESS_BOOK)s=A(g);else if(n===p.WALLET_ACCOUNT)s=u(g);else if(n===p.DIRECT){let C=N(g);C&&(s=C.name)}return{type:n,address:g,name:s}}),r=r.filter(({address:n})=>(0,l.toLower)(n)!==(0,l.toLower)(e)),r?.length&&i.push({group:k("wallet_extension_send_dropdown_recent_address"),list:r}));let _;if(t===y)_=[],c.forEach(n=>{m(y,n.walletId)?.forEach((s,g)=>{(0,l.toLower)(s.address)!==(0,l.toLower)(e)&&_.push({address:s.address,group:n.keyringName,name:n.walletName,type:p.WALLET_ACCOUNT,addressType:s.addressType,hideName:g!==0,walletId:n.walletId})})});else{let n=c.filter(s=>{let g=!s.backupData.length,C=(0,l.toLower)(s.account[t]),H=(0,l.toLower)(e);return g&&C!==H&&!!C});n?.length&&(_=n.map(s=>({address:s.account[t],group:s.keyringName,name:s.walletName,type:p.WALLET_ACCOUNT,walletId:s.walletId})))}return d=Object.entries((0,l.groupBy)(_,"group")),d.forEach(([n,s])=>{i.push({group:n,list:s})}),a?.length&&(o=a.map(({address:n,name:s})=>({address:n,name:s,type:p.ADDRESS_BOOK})),o=o.filter(({address:n})=>(0,l.toLower)(n)!==(0,l.toLower)(e)),o?.length&&i.push({group:k("wallet_extension_send_dropdown_address_book"),list:o})),i},[e,f,a,c])}function Ne(t){let e=(0,I.useSelector)(O);return()=>{e&&e?.length>=200?W.error({title:k("wallet_extension_addressbook_toast_address_limit_reached")}):t&&t()}}export{Z as a,v as b,ge as c,Ie as d,Ne as e};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-PBOUQOH2.js.map
