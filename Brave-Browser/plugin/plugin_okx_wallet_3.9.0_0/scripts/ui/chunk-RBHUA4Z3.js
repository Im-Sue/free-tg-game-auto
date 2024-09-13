import{a as Fe,b as Pe,c as je,e as Me,f as Ne,g as Ee,h as Ge,i as b}from"./chunk-CH3OIAHP.js";import{a as O}from"./chunk-L7ZCJVL2.js";import{a as Ce}from"./chunk-FV6MP3UU.js";import{C as F,E as h,a as Ae}from"./chunk-CFT6B56M.js";import{d as he,e as be}from"./chunk-OSWXWF4A.js";import{B as T,C as qe,E as D,H as ye,I as w,J as Ie,M as we,S as Oe,X as ve,Y as Ve,Z as Re,_ as Se,ca as Te,ha as De}from"./chunk-ZPOCIBPN.js";import{d as S,f as me}from"./chunk-2G2AXMFT.js";import{m as xe}from"./chunk-M54COW6Q.js";import{c as L,f as I,m as a,o as s}from"./chunk-ICCOEXX5.js";var v=L((Wt,A)=>{a();s();var He=Ce(),_e=D();function We(e,t,r){(r!==void 0&&!_e(e[t],r)||r===void 0&&!(t in e))&&He(e,t,r)}A.exports=We});var j=L((Yt,P)=>{a();s();var Je=ye(),Ke=Fe(),Ye=ve(),$e="[object Object]",Be=Function.prototype,Ue=Object.prototype,C=Be.toString,Qe=Ue.hasOwnProperty,Xe=C.call(Object);function Ze(e){if(!Ye(e)||Je(e)!=$e)return!1;var t=Ke(e);if(t===null)return!0;var r=Qe.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&C.call(r)==Xe}P.exports=Ze});var V=L((Ut,M)=>{a();s();function ze(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}M.exports=ze});var E=L((Zt,N)=>{a();s();var ke=Ge(),et=b();function tt(e){return ke(e,et(e))}N.exports=tt});var K=L((er,J)=>{a();s();var G=v(),rt=je(),it=Me(),nt=Ne(),at=Ee(),H=Ve(),_=Oe(),st=be(),ot=Re(),lt=Ie(),ut=w(),ft=j(),ct=Te(),W=V(),dt=E();function gt(e,t,r,i,n,u,o){var l=W(e,r),f=W(t,r),q=o.get(f);if(q){G(e,r,q);return}var c=u?u(l,f,r+"",e,t,o):void 0,x=c===void 0;if(x){var y=_(f),d=!y&&ot(f),p=!y&&!d&&ct(f);c=f,y||d||p?_(l)?c=l:st(l)?c=nt(l):d?(x=!1,c=rt(f,!0)):p?(x=!1,c=it(f,!0)):c=[]:ft(f)||H(f)?(c=l,H(l)?c=dt(l):(!ut(l)||lt(l))&&(c=at(f))):x=!1}x&&(o.set(f,c),n(c,f,i,u,o),o.delete(f)),G(e,r,c)}J.exports=gt});var B=L((ir,$)=>{a();s();var pt=we(),Lt=v(),xt=Pe(),mt=K(),qt=w(),yt=b(),It=V();function Y(e,t,r,i,n){e!==t&&xt(t,function(u,o){if(n||(n=new pt),qt(u))mt(e,t,o,r,Y,i,n);else{var l=i?i(It(e,o),u,o+"",e,t,n):void 0;l===void 0&&(l=u),Lt(e,o,l)}},yt)}$.exports=Y});var Q=L((sr,U)=>{a();s();var wt=D(),Ot=De(),vt=Se(),Vt=w();function Rt(e,t,r){if(!Vt(r))return!1;var i=typeof t;return(i=="number"?Ot(r)&&vt(t,r.length):i=="string"&&t in r)?wt(r[t],e):!1}U.exports=Rt});var Z=L((ur,X)=>{a();s();var St=he(),Tt=Q();function Dt(e){return St(function(t,r){var i=-1,n=r.length,u=n>1?r[n-1]:void 0,o=n>2?r[2]:void 0;for(u=e.length>3&&typeof u=="function"?(n--,u):void 0,o&&Tt(r[0],r[1],o)&&(u=n<3?void 0:u,n=1),t=Object(t);++i<n;){var l=r[i];l&&e(t,l,i,u)}return t})}X.exports=Dt});var k=L((dr,z)=>{a();s();var Ft=B(),ht=Z(),bt=ht(function(e,t,r){Ft(e,t,r)});z.exports=bt});a();s();var te=I(Ae());me();var R=I(k()),re="txHistoryRejectValues",At={hideValuelessNft:"hideValuelessNft"},xr={NORMAL:0,RISKY:1,VALUELESS:2},ee={[At.hideValuelessNft]:!0},ie=async()=>{try{return await S().getSelectedWallet()}catch{return null}},ne=()=>{try{let e=localStorage.getItem(re);return e?JSON.parse(e)??{}??{}:{}}catch{return{}}},ae=(e={})=>{try{let t=JSON.stringify(e);return localStorage.setItem(re,t),!0}catch{return!1}},mr=async(e,t)=>{try{let r=await ie();if(!r)return!1;let i=ne(),n={[r]:{[e]:t}};return ae((0,R.default)({},i,n))}catch{return!1}},se=async()=>{let e=await ie();if(!e)return{};let t=ne(),r=t?.[e]??{};if((0,te.default)(r)){let i={[e]:ee};return ae((0,R.default)({},t,i)),ee}return r};a();s();var de=I(xe());var m=T({name:"txHistory",initialState:{filters:{status:[1,2,3,4],dates:O().stringDates,mainCoinId:""},txList:[],initLoading:!0,scrollLoading:!1,filterLoading:!1,lastRowId:""},reducers:{setInitLoading:(e,t)=>{e.initLoading=t.payload},setScrollLoading:(e,t)=>{e.scrollLoading=t.payload},setFilterLoading:(e,t)=>{e.filterLoading=t.payload},setFilters:(e,t)=>{e.filters={...e.filters,...t.payload}},setLastRowId:(e,t)=>{e.lastRowId=t.payload},setTxList:(e,t)=>{e.txList=t.payload},mergeTxList:(e,t)=>{e.txList=[...e.txList,...t.payload]},resetFilters(e){e.filters={status:[1,2,3,4],dates:O().stringDates,mainCoinId:""}},resetTxHistory:e=>{e.txList=[],e.initLoading=!1,e.scrollLoading=!1,e.filterLoading=!1,e.lastRowId=""}}}),{actions:Ct,reducer:Pt}=m,Rr=Pt,Sr=e=>e[m.name].txList,jt=e=>e[m.name].filters,Mt=e=>{let t=jt(e),{dates:[r,i],mainCoinId:n}=t;return{startDate:new Date(`${r} 00:00:00`).getTime(),endDate:new Date(`${i} 23:59:59`).getTime(),mainCoinId:n,status:[1,2,3,4]}},Nt=e=>e[m.name].initLoading,Et=e=>e[m.name].scrollLoading,Gt=e=>e[m.name].lastRowId,Tr=e=>e[m.name].filterLoading,{setFilters:Ht,setTxList:oe,mergeTxList:le,setInitLoading:ue,setScrollLoading:fe,setFilterLoading:ge,resetTxHistory:Dr,setLastRowId:ce,resetFilters:Fr}=Ct;var _t=(e,t={initLoad:!1,scrollLoad:!1,autoRefresh:!1,fromCoinDetail:!1})=>async(r,i)=>{let n={...e},{initLoad:u,scrollLoad:o,fromCoinDetail:l}=t,f=l?h:F,q=i(),c=Gt(q),x=Nt(q),y=Et(q);if(!(o&&(!c||y||x))){if(u&&r(ue(!0)),o&&r(fe(!0)),u&&r(ce("")),o&&(n.lastRowId=c),!l)try{let d=await se();n.hideValuelessNft=d?.hideValuelessNft??!0}catch(d){console.error(d)}try{let d=await f(n),p=d?.content;(0,de.isEmpty)(p)&&(p=[]),r(o?le(p):oe(p));let pe=p.length,Le=d.hasViewMore?p[pe-1]?.rowId:"";r(ce(Le))}catch{r(o?le([]):oe([]))}u&&r(ue(!1)),o&&r(fe(!1)),r(ge(!1))}};function hr(e){return async(t,r)=>{await t(Ht(e)),await t(ge(!0));let i=r();t(_t(Mt(i)))}}export{Q as a,At as b,xr as c,mr as d,se as e,Rr as f,Sr as g,jt as h,Mt as i,Nt as j,Et as k,Tr as l,Ht as m,oe as n,ue as o,Dr as p,ce as q,Fr as r,_t as s,hr as t};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-RBHUA4Z3.js.map
