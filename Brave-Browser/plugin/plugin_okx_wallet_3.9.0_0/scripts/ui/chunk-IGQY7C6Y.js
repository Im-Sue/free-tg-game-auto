import{c as l,d as m}from"./chunk-PRHPRTXY.js";import{b as c}from"./chunk-4RHFH7IF.js";import{B as d,C as f,s as a}from"./chunk-ZPOCIBPN.js";import{b as u}from"./chunk-4JZ3HIS7.js";import{c as i}from"./chunk-I4WIGQLD.js";import{bb as s,pb as g}from"./chunk-M54COW6Q.js";import{f as x,m as r,o as n}from"./chunk-ICCOEXX5.js";r();n();var p=x(i());g();var t=c("Send"),A={tokenAddress:"",toAddress:"",toAddressErrorKey:null,amount:"",maxMode:!1,amountErrorKey:null,inputData:"",nonce:"",suggestedNonce:null,fromPage:null,txMeta:null,customGasInfo:null,chainGasInfo:null},y=d({name:t,initialState:A,reducers:{setTokenAddress(e,o){e.tokenAddress=o.payload},setToAddress(e,o){e.toAddress=o.payload},setToAddressErrorKey(e,o){e.toAddressErrorKey=o.payload},setAmount(e,o){e.amount=o.payload},setAmountErrorKey(e,o){e.amountErrorKey=o.payload},setCustomGasInfo(e,o){e.customGasInfo=o.payload},setChainGasInfo(e,o){e.chainGasInfo={...e.chainGasInfo,...o.payload}},setInputData(e,o){e.inputData=o.payload},setNonce(e,o){e.nonce=o.payload},setFromPage(e,o){e.fromPage=o.payload},setSuggestedNonce(e,o){e.suggestedNonce=o.payload},setTxMeta(e,o){e.txMeta=o.payload},setMaxMode(e,o){e.maxMode=o.payload},resetAll(e){e.toAddress="",e.toAddressErrorKey=null,e.amount="",e.amountErrorKey=null,e.inputData="",e.nonce="",e.fromPage=null,e.suggestedNonce=null,e.txMeta=null,e.maxMode=!1,e.customGasInfo=null,e.chainGasInfo=null}}}),H=e=>e[t].tokenAddress,S=e=>e[t].toAddress;var k=e=>e[t].toAddressErrorKey,I=e=>e[t].amount,C=e=>{let o=I(e);return(0,p.addHexPrefix)(u(s(o)))},F=e=>e[t].amountErrorKey,v=e=>e[t].inputData,W=e=>{let{inputData:o}=e[t];return o&&(m(o)?a(o):l(o))},b=e=>e[t].nonce,j=e=>e[t].fromPage,q=e=>e[t].suggestedNonce;var w=e=>e[t].customGasInfo||e[t].chainGasInfo||{},z=e=>e[t].chainGasInfo||{},{actions:M,reducer:T}=y,{setTokenAddress:B,setToAddress:J,setToAddressErrorKey:L,setAmount:O,setAmountErrorKey:Q,setInputData:R,setNonce:U,setFromPage:V,setSuggestedNonce:X,setChainGasInfo:Y,setCustomGasInfo:Z,resetAll:_,setTxMeta:$,setMaxMode:ee}=M,oe=T;export{t as a,H as b,S as c,k as d,I as e,C as f,F as g,v as h,W as i,b as j,j as k,q as l,w as m,z as n,B as o,J as p,L as q,O as r,Q as s,R as t,U as u,V as v,X as w,Y as x,Z as y,_ as z,oe as A};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-IGQY7C6Y.js.map
