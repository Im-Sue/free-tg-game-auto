import{c as de}from"./chunk-DCMAUS7C.js";import{e as pe,g as me,i as ue,k as _e,m as S}from"./chunk-3QCQMWWZ.js";import{b as ce}from"./chunk-TAZU4KSU.js";import{i as le}from"./chunk-GZMWLE4V.js";import{b as ie}from"./chunk-ADIQBHVU.js";import{f as ae}from"./chunk-LF2PURXZ.js";import{c as re,f as se}from"./chunk-CFT6B56M.js";import{s as ee,t as te}from"./chunk-SJIW4WAV.js";import{ab as oe,y as Ne}from"./chunk-ZPOCIBPN.js";import{Y,k as ne}from"./chunk-CA5MYYD6.js";import{Qa as V,Ra as Q,Sa as W,Ta as X,m as De,pb as ve}from"./chunk-M54COW6Q.js";import{G as K,o as N}from"./chunk-RIJWHGTU.js";import{I as O,l as U,v as t}from"./chunk-K4MPEKC5.js";import{X as T}from"./chunk-XIGC6FD5.js";import{a as J}from"./chunk-CXUPEGDW.js";import{f as A,m as s,o as i}from"./chunk-ICCOEXX5.js";s();i();s();i();O();s();i();var L=A(J());s();i();s();i();var y=A(J()),fe=A(Ne());O();ve();s();i();var w={title:"_title_1xthp_1",subtitle:"_subtitle_1xthp_9",fee:"_fee_1xthp_15",feeTitle:"_feeTitle_1xthp_21",feeDetail:"_feeDetail_1xthp_26",speedDetail:"_speedDetail_1xthp_33",gasDetail:"_gasDetail_1xthp_36"};var be=()=>{let x=ie(),E=le(),m=ae(),u=(0,fe.useSelector)(oe),_=ce(),d=de(),n=async(e,c,o,h=0)=>{let{baseCoin:g}=await x(o,!0),f=m?.[g.coinId]||"0",C=V(e,c),P=te(W(C,h),{symbol:g.symbol,decimals:g.decimals}),p=ee(V(Q(W(C,h),10**g.decimals),f),{symbol:u.symbol});return`${P} ${p}`},a=(e,c)=>{let o=_(e);return t("wallet_extension_transaction_confirmation_gas_detail",{gasPrice:U.thousandFormat(o),gasLimit:U.thousandFormat(c)})},l=async(e,c)=>{try{return await d({...e,coinId:c})}catch{return""}},r=({userGasInfo:e,updateGasInfo:c,fetchParams:o})=>{let{gasPrice:h,maxFeePerGas:g,maxPriorityFeePerGas:f}=c,{supportEip1559:C,gasLimit:P,gasPrice:p,maxFeePerGas:G,maxPriorityFeePerGas:B}=e;return C?(delete o.gasPrice,{...o,value:o?.amount,maxFeePerGas:g||G,maxPriorityFeePerGas:f||B,gasLimit:P}):{...o,value:o?.amount,gasPrice:h||p,gasLimit:P}};return async({coinId:e,baseCoinAmountUse:c,userGasInfo:o,updateGasInfo:h,serverSignInfo:g,fetchParams:f})=>{let{gasPrice:C,maxFeePerGas:P}=h,{supportEip1559:p,gasLimit:G,gasPrice:B,maxFeePerGas:R}=o,b=0;g?.needExtFee&&(b=await l(r({userGasInfo:o,updateGasInfo:h,fetchParams:f}),e));let H=p?R:B,M=await n(H,G,e),I=a(H,G),k=p?P:C,v=await n(k,G,e,b),we=a(k,G);return new Promise((Ce,$)=>{let q=N.prompt({hideCloseBtn:!1,alignBottom:!1,titleCenter:!1,infoType:null,confirmText:t("extension_toast_btn_confirmgasfee"),confirmBtnProps:{type:T.TYPE.highlight,size:T.SIZE.lg},onConfirm:async()=>{q.destroy();let{baseCoin:j}=await x(e,!0),{coinAmountInt:Ee}=E(j.coinId),Ge=X(Ee,c);_e({userGasInfo:o,updateGasInfo:h,baseCoinAmountAvailable:Ge,L1FEE:b})?(K.error({title:t("extension_toast_text_insufficient_balance")}),$(new Error(S))):Ce(h)},onClose:()=>{q.destroy(),$(new Error(S))},renderContent:j=>y.default.createElement(j,null,y.default.createElement("div",{className:w.title},t("extension_toast_title_transaction_replace")),y.default.createElement("div",{className:w.subtitle},t("extension_toast_subtitle_gasincrease")),y.default.createElement("div",{className:w.feeTitle},t("extension_toast_title_current_transaction")),y.default.createElement("div",{className:w.fee},y.default.createElement("div",{className:w.feeDetail},M),y.default.createElement("div",{className:w.gasDetail},I)),y.default.createElement("div",{className:w.feeTitle},t("extension_toast_title_gasprice")),y.default.createElement("div",{className:w.fee},y.default.createElement("div",{className:w.speedDetail},v),y.default.createElement("div",{className:w.gasDetail},we)))})})}},xe=be;var ke=()=>{let x=xe();return async({coinId:m,baseCoinAmountUse:u,userGasInfo:_,serverGasInfo:d,serverSignInfo:n,originTxGasInfo:a,fetchParams:l})=>{let r=ue({userGasInfo:_,serverGasInfo:d,originTxGasInfo:a});return r?.gasPrice||r?.maxFeePerGas?(await x({coinId:m,baseCoinAmountUse:u,userGasInfo:_,updateGasInfo:r,serverSignInfo:n,fetchParams:l}),Promise.resolve(r)):Promise.resolve()}},Fe=ke;s();i();var z={content:"_content_18w99_1",title:"_title_18w99_4",text:"_text_18w99_10"};var Se=()=>{let x=Fe();return async({coinId:m,baseCoinAmountUse:u="0",showSelectNonceDialog:_=!1,onChainNonce:d="0",newNonce:n="0",userGasInfo:a={},serverGasInfo:l={},serverSignInfo:r={},originTxGasInfo:F={},fetchParams:e={},title:c="",text:o="",confirmText:h="",cancelText:g=""})=>new Promise((f,C)=>{if(_){let P=N.prompt({hideCloseBtn:!0,alignBottom:!1,titleCenter:!1,infoType:null,cancelBtnProps:{category:T.CATEGORY.outline,size:T.SIZE.lg},confirmBtnProps:{type:T.TYPE.highlight,size:T.SIZE.lg},confirmText:h,cancelText:g,onConfirm:async()=>{P.destroy();try{let p=await x({coinId:m,baseCoinAmountUse:u,userGasInfo:a,serverGasInfo:l,serverSignInfo:r,originTxGasInfo:F,fetchParams:e});f(p?{nonce:d,updateGasInfo:p}:{nonce:d})}catch(p){C(p)}},onCancel:()=>{P.destroy(),f({nonce:n})},renderContent:p=>L.default.createElement(p,null,L.default.createElement("div",{className:z.content},L.default.createElement("div",{className:z.title},c),L.default.createElement("div",{className:z.text},o)))})}else f({nonce:n})})},Z=Se;var Be=()=>{let x=Z();return async({coinId:m,baseCoinAmountUse:u,hasFailedTx:_,onChainNonce:d,newNonce:n,userGasInfo:a,serverGasInfo:l,originTxGasInfo:r,serverSignInfo:F,fetchParams:e})=>x({coinId:m,baseCoinAmountUse:u,showSelectNonceDialog:_,onChainNonce:d,newNonce:n,userGasInfo:a,serverGasInfo:l,serverSignInfo:F,originTxGasInfo:r,fetchParams:e,title:t("wallet_extension_transaction_popup_failed_transaction"),text:t("wallet_extension_transaction_popup_replace_failed_transaction"),confirmText:t("wallet_extension_transaction_popup_btn_replace"),cancelText:t("wallet_extension_transaction_popup_btn_skip")})},he=Be;s();i();O();var Le=()=>{let x=Z();return async({coinId:m,baseCoinAmountUse:u,hasPendingTx:_,onChainNonce:d,newNonce:n,userGasInfo:a,serverGasInfo:l,originTxGasInfo:r,serverSignInfo:F,fetchParams:e})=>x({coinId:m,baseCoinAmountUse:u,showSelectNonceDialog:_,onChainNonce:d,newNonce:n,userGasInfo:a,serverGasInfo:l,serverSignInfo:F,fetchParams:e,originTxGasInfo:r,title:t("wallet_extension_transaction_popup_pending_transaction"),text:t("wallet_extension_transaction_popup_replace_pending_transaction"),confirmText:t("wallet_extension_transaction_popup_btn_replace"),cancelText:t("wallet_extension_transaction_popup_btn_continue_wait")})},ge=Le;s();i();O();var Te=A(De());var Re=()=>async({isRepeat:E,onCancel:m})=>new Promise((u,_)=>{if(E){let d=N.prompt({alignBottom:!1,hideCloseBtn:!0,infoType:N.Prompt.INFO_TYPE.warn,confirmBtnProps:{type:T.TYPE.highlight,size:T.SIZE.lg},cancelBtnProps:{category:T.CATEGORY.outline,size:T.SIZE.lg},title:t("wallet_extension_popup_repeat_order"),confirmText:t("wallet_extension_popup_repeat_order_btn_continue"),cancelText:m?t("wallet_extension_popup_repeat_order_btn_viewhistory"):null,text:t("wallet_extension_popup_repeat_order_desc"),onConfirm:()=>{d.destroy(),u()},onCancel:()=>{d.destroy(),(0,Te.isFunction)(m)&&m(),_(new Error(S))}})}else u()}),ye=Re;var Pe="FetchError";var Ut=()=>{let x=he(),E=ge(),m=ye(),u=async({coinId:n,from:a,to:l,amount:r,gasPrice:F})=>{let[{data:e=[]},{data:c={}}]=await Promise.all([se({checkTypes:[Y.REPEAT,Y.OVERWRITTEN],coinId:n,from:a,to:l,amount:r,gasPrice:F}),re({coinId:n,address:a},{fromAddr:a,scenario:ne.SCENARIO_SEND_COIN})]);return{txToastCheckData:e,signInfoData:c}},_=n=>{let{hasFailedTx:a,hasPendingTx:l,nonce:r,newNonce:F,originGasPrice:e,originPriorityFee:c}=me(n),o=pe(n,Y.REPEAT);return{hasFailedTx:a,hasPendingTx:l,nonce:r,newNonce:F,originGasPrice:e,originPriorityFee:c,isRepeat:o}};return async({coinId:n,from:a,to:l,amount:r,gasPrice:F,baseCoinAmountUse:e,userGasInfo:c,whetherCheckRepeat:o,onRepeatCancel:h})=>{let g=[],f={};try{let v=await u({coinId:n,from:a,to:l,amount:r,gasPrice:F});if(!Array.isArray(v.txToastCheckData)||typeof v.signInfoData!="object")throw new Error(Pe);g=v.txToastCheckData,f=v.signInfoData?.info||{}}catch{throw new Error(Pe)}let C=_(g),{nonce:P,newNonce:p,originGasPrice:G,originPriorityFee:B,hasFailedTx:R,hasPendingTx:b,isRepeat:H}=C,M={originGasPrice:G,originPriorityFee:B},I={coinId:n,baseCoinAmountUse:e,onChainNonce:P,newNonce:p,userGasInfo:c,serverGasInfo:f.gasPrice,serverSignInfo:f,originTxGasInfo:M,fetchParams:{amount:r,coinId:n,from:a,gasPrice:F,to:l}},k={nonce:p};return R?k=await x({...I,hasFailedTx:R}):b&&(k=await E({...I,hasPendingTx:b})),o&&await m({isRepeat:H,onCancel:h}),k}};export{Ut as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-5NV3TIKF.js.map
