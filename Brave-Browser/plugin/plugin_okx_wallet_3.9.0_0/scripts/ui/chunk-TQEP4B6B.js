import{Qa as s,Va as m,Wa as o,Xa as e,Za as c,ob as i,pb as q}from"./chunk-M54COW6Q.js";import{I as T,v as C}from"./chunk-K4MPEKC5.js";import{m as l,o as w}from"./chunk-ICCOEXX5.js";l();w();T();q();var L=()=>{let n=C("extension_wallet_transaction_text_minute"),x=C("extension_wallet_transaction_text_second");return(t,r,d)=>{if(d)return`-- ${n}`;let a=i(t.minCost,n,x),_=i(t.normalCost,n,x),$=i(t.maxCost,n,x),u=`> 3 ${n}`,p=`> 10 ${n}`,S=`> 60 ${n}`;return c(r,t.min)?$:e(r,t.min)&&m(r,t.normal)?`< ${$}`:c(r,t.normal)?_:e(r,t.normal)&&m(r,t.max)?`< ${_}`:c(r,t.max)?a:e(r,t.max)?`< ${a}`:m(r,t.min)?o(r,s(t.min,.85))?S:o(r,s(t.min,.9))?p:(o(r,s(t.min,.95)),u):`-- ${n}`}};export{L as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-TQEP4B6B.js.map
