import{a as jt}from"./chunk-TQEP4B6B.js";import{a as Zt}from"./chunk-E6PQQLEO.js";import{a as qt}from"./chunk-R7R6LTH6.js";import{a as h,f as Qt}from"./chunk-TAZU4KSU.js";import{a as Kt}from"./chunk-DZDHGH5B.js";import{a as Xt}from"./chunk-U3CLRNWK.js";import{a as Jt}from"./chunk-3EYFKVOU.js";import{a as Yt}from"./chunk-MCRNCTJS.js";import{c as $e}from"./chunk-7ODXCTBK.js";import{e as Rt,h as zt,k as at}from"./chunk-UIABO6UG.js";import{a as nt}from"./chunk-I27PVEIN.js";import{b as Ht}from"./chunk-RUSRHRGO.js";import{f as Vt,i as $t}from"./chunk-CFT6B56M.js";import{t as it}from"./chunk-SJIW4WAV.js";import{s as Ut}from"./chunk-5JJQQHKZ.js";import{r as Bt}from"./chunk-ZPOCIBPN.js";import{T as t,W as rt,Y as Ge,_ as Me}from"./chunk-CA5MYYD6.js";import{b as Pe}from"./chunk-4JZ3HIS7.js";import{$a as Ue,Qa as G,Sa as P,Ta as Q,Ua as ee,Va as V,Wa as ie,Xa as S,Ya as bt,Za as ce,ab as $,cb as Le,db as st,hb as He,ib as vt,m as Vs,pb as Ve}from"./chunk-M54COW6Q.js";import{b as tt,q as O}from"./chunk-RIJWHGTU.js";import{I as kt,l as se,v as g}from"./chunk-K4MPEKC5.js";import{a as Ot,g as $s}from"./chunk-CXUPEGDW.js";import{f as Be,m as U,o as H}from"./chunk-ICCOEXX5.js";U();H();var a=Be(Ot()),os=Be(Vs()),x=Be($s());kt();Ve();U();H();var z=Be(Ot());Ve();U();H();kt();Ve();var es=({gasLimit:r,gasPrice:e,maxPriorityFeePerGas:s,maxFeePerGas:i,baseFeePerGas:o,supportEip1559:u,extFee:m}={})=>{let n="",c="";if(!u)n=G(r,e),c=e;else{let l=P(o,s);c=Math.min(l,i),n=G(r,c)}return{minGasFee:P(n,m),minGasPrice:c}},ts=({gasLimit:r,gasPrice:e,maxPriorityFeePerGas:s,maxFeePerGas:i,supportEip1559:o,extFee:u,gasPriceInfo:m={},gasLimitInfo:n={},gasType:c})=>{let{baseFee:l}=m,{originGasLimit:w}=n;if(c!==t.CUSTOM)return es({gasLimit:w,gasPrice:e,maxPriorityFeePerGas:s,maxFeePerGas:i,baseFeePerGas:l,supportEip1559:o,extFee:u});let d=Q(i,s),p=Math.min(d,l),y=Math.min(r,w);return es({gasLimit:y,gasPrice:e,maxPriorityFeePerGas:s,maxFeePerGas:i,baseFeePerGas:p,supportEip1559:o,extFee:u})};function Qs(r,e){let{isNetworkFeeLoading:s,gasLimit:i,gasPrice:o,maxFeePerGas:u,maxPriorityFeePerGas:m,supportEip1559:n,gasLimitInfo:c}=r;return!s&&(ie(i,0)||n&&(ie(u,0)||V(m,0))||!n&&ie(o,0)||c?.queryGasLimitErrorUseDefault&&e!==Xt.DEPLOY_CONTRACT)}async function Xs(r,e){let{from:s,to:i,data:o,value:u="0"}=e,m={checkTypes:[Ge.VERIFY_GAS_LIMIT],coinId:r,from:s,to:i,amount:u,inputData:o,tokenAddress:i},{data:n=[]}=await Vt(m),c=n?.find((l={})=>l.checkType===Ge.VERIFY_GAS_LIMIT);return c&&c?.result===!1&&c?.resultCode!=="306001"?c.msg||g("wallet_extension_toast_text_unknown_error"):!1}var is=()=>e=>vt(e,0),rs=({gasPrice:r,gasLimit:e,extFee:s,baseCoin:i={},currencyId:o})=>{let u=P(G(r,e),s),m=st(u),n=it(m,{symbol:i?.symbol}),c=at(i?.coinId,u,{currencyId:o,useApproximate:!0});return{gasFeeDisplay:`${n}${c}`,gasFee:m}},Re=({gasPrice:r,gasLimit:e,maxPriorityFeePerGas:s,maxFeePerGas:i,supportEip1559:o,extFee:u,gasPriceInfo:m,gasLimitInfo:n,gasType:c,baseCoin:l={},currencyId:w})=>{let{minGasFee:d,minGasPrice:p}=ts({gasLimit:e,gasPrice:r,maxPriorityFeePerGas:s,maxFeePerGas:i,supportEip1559:o,extFee:u,gasPriceInfo:m,gasLimitInfo:n,gasType:c}),y=st(d),_=it(y,{symbol:l?.symbol}),C=at(l?.coinId,d,{currencyId:w,useApproximate:!0});return{minGasPrice:p,minGasFee:y,minGasFeeDisplay:`${_}${C}`}},ss=(r={},e={wait:200,disabled:!1,fetchOnce:!1})=>{let{wait:s,disabled:i,fetchOnce:o}=e,{coinId:u,supportEip1559:m,tx:n,needExtFee:c=!1}=r,[l,w]=(0,z.useState)(null),[d,p]=(0,z.useState)({data:"",loading:!1,error:""});return(0,z.useEffect)(()=>{!c||i||p(y=>({...y,loading:!0,error:""}))},[n,c,i]),Ut(()=>{if(!c||i){p(f=>({...f,loading:!1,error:""}));return}if(o===l&&o!==null){p(f=>({...f,loading:!1,error:""}));return}let y=S(n.gasPrice,"0")&&S(n.gasLimit,"0"),_=S(n.maxFeePerGas,"0")&&S(n.maxPriorityFeePerGas,"0")&&S(n.gasLimit,"0");if(!(m?_:y)){p(f=>({...f,loading:!1,error:""}));return}(async()=>{try{let f={...n,value:Pe(n.value),gasLimit:Pe(n.gasLimit)},E=m?{...f,maxFeePerGas:Pe(n.maxFeePerGas),maxPriorityFeePerGas:Pe(n.maxPriorityFeePerGas)}:{...f,gasPrice:Pe(n.gasPrice)},L=Bt(E),T=Qt(L),Y=await $t({coinId:u},{inputData:T});p(K=>({...K,data:Y,loading:!1,error:""}))}catch(f){p(E=>({...E,loading:!1,error:f.error_message||"Network error"}))}finally{o&&w(o)}})()},[u,n,o,c],{wait:s}),d},Rs=({commonTx:r,gasPrice:e,priorityFee:s,supportEip1559:i})=>(0,z.useMemo)(()=>i?{...r,maxFeePerGas:e,maxPriorityFeePerGas:s}:{...r,gasPrice:e},[r,e,s,i]),as=({coinId:r,from:e,to:s,value:i,inputData:o,gasLimit:u,supportEip1559:m,needExtFee:n,fastGasPrice:c,fastPriorityFee:l,customGasPrice:w,customMaxBaseFee:d,customMaxPriorityFee:p,customGasLimit:y,estimatedL1FeeOptions:_})=>{let C=(0,z.useMemo)(()=>({from:e,to:s,value:i,data:o}),[e,s,i,o]),A=(0,z.useMemo)(()=>({...C,gasLimit:u}),[C,u]),f=Rs({commonTx:A,gasPrice:c,priorityFee:l,supportEip1559:m}),E=(0,z.useMemo)(()=>m?{...C,maxFeePerGas:$(P(d,p)),maxPriorityFeePerGas:$(p),gasLimit:y}:{...C,gasPrice:$(w),gasLimit:y},[C,m,w,d,p,y]),L=ss({coinId:r,tx:f,type:"fast",supportEip1559:m,needExtFee:n},_),T=ss({coinId:r,tx:E,type:"custom",supportEip1559:m,needExtFee:n},_);return(0,z.useMemo)(()=>{let Y=L.loading||T.loading,K=L.error||T.error,k={[t.SLOW]:L.data,[t.STANDARD]:L.data,[t.FAST]:L.data,[t.CUSTOM]:T.data};return{loading:Y,error:K,data:k}},[L,T])};U();H();var X={customInput:"_customInput_y9e7y_1",maxBaseFeeWarning:"_maxBaseFeeWarning_y9e7y_4",customGWei:"_customGWei_y9e7y_10",customInputSubTitle:"_customInputSubTitle_y9e7y_17",customGasFeeWarning:"_customGasFeeWarning_y9e7y_21",customGasFeeWarningFold:"_customGasFeeWarningFold_y9e7y_24",gweiText:"_gweiText_y9e7y_27"};var me=r=>(0,os.isNil)(r)||ie(r,0);function ns({className:r}){return a.default.createElement(tt,{className:r,desc:g("wallet_extension_transfer_text_higher_than_necessary"),type:tt.TYPE.warn,closable:!1})}var zs=({isSignInfoLoading:r,signInfo:e,initialGasLimitInfo:s,isGasLimitLoading:i,visible:o,address:u,inputData:m,tokenAddress:n,coinId:c,value:l,initialGasData:w,estimatedL1FeeOptions:d,onBack:p,onClose:y,onGasChange:_,currencyId:C,minimumGasLimit:A,gasReturn:f,onServerDataChange:E,onGasTypeManualChange:L,isMev:T,mevInfo:Y})=>{let K=(0,a.useRef)(!1),[,k]=zt(c,{withPrice:!0}),re=jt(),ue=is(),{initialGasType:xe=t.STANDARD,initialCustomMaxBaseFee:Se,initialCustomMaxPriorityFee:ae,initialCustomGasPrice:ye,initialCustomGasLimit:le}=w||{},Te=me(Se)?void 0:Le(Se),De=me(ae)?void 0:Le(ae),Ee=me(ye)?void 0:Le(ye),ze=me(le)?void 0:le,[Ie,Ye]=(0,a.useState)(),[ge,Ke]=(0,a.useState)(),[ct,cs]=(0,a.useState)(),[mt,ut]=(0,a.useState)(),[Ne,lt]=(0,a.useState)(xe),[I,he]=(0,a.useState)(xe),ms=F=>{let{priorityRate:M}=Y||{},B=et=>G(et,M),W=(et,Us)=>{let Hs=ee([0,G(Us,Q(M,1))]);return P(et,Hs)},{supportEip1559:R,max:Fe,min:Xe,normal:ht,fastPriorityFee:ve,proposePriorityFee:At,safePriorityFee:Wt}=F,oe={};return R&&M&&(oe.fastPriorityFee=B(ve),oe.safePriorityFee=B(Wt),oe.proposePriorityFee=B(At),oe.max=W(Fe,ve),oe.normal=W(ht,At),oe.min=W(Xe,Wt)),{...F,...oe}},b=(0,a.useMemo)(()=>T?e?.gasPrice?ms(e?.gasPrice):$e:e?.gasPrice||$e,[e?.gasPrice,T]),us=e?.needExtFee,{min:ls,normal:fs,max:ps,minGasPrice:Fs,supportEip1559:v,suggestBaseFee:Gs,safePriorityFee:de,proposePriorityFee:_e,fastPriorityFee:Ce}=b,Z=ue(ls),j=ue(fs),q=ue(ps),N=(0,a.useMemo)(()=>{let F=bt(s?.minGasLimit,A)?s?.minGasLimit:A,M={...s,minGasLimit:F};return V(M?.gasLimit,M?.minGasLimit)&&(M.gasLimit=M?.minGasLimit),M},[s,A]),ft=`${N?.gasLimit||0}`,J=ze||ft,pt=`${N?.minGasLimit||ft}`,Ft=`${N?.maxGasLimit||1500*1e4}`,Ps=h(Z),Gt=h(j),xs=h(q),Pt=Le(Fs),Ze=h(Gs),ys=h(Q(Z,de)),xt=h(Q(j,_e)),Ts=h(Q(q,Ce)),gs=h(de),yt=h(_e),ds=h(Ce),Ae=(0,a.useRef)(),We=(0,a.useRef)(),Oe=(0,a.useRef)(),je=(0,a.useRef)(),Tt={[t.SLOW]:Ps,[t.STANDARD]:Gt,[t.FAST]:xs,[t.CUSTOM]:me(Ae.current)?Gt:Ae.current},gt={[t.SLOW]:ys,[t.STANDARD]:xt,[t.FAST]:Ts,[t.CUSTOM]:me(We.current)?xt:We.current},dt={[t.SLOW]:gs,[t.STANDARD]:yt,[t.FAST]:ds,[t.CUSTOM]:me(Oe.current)?yt:Oe.current},fe=typeof ct=="string"?ct:Ee||Tt[I],ne=typeof Ie=="string"?Ie:Te||gt[I],pe=typeof ge=="string"?ge:De||dt[I],te=typeof mt=="string"?mt:J,D=as({coinId:c,from:u,to:n,value:l,inputData:m,gasLimit:J,supportEip1559:v,needExtFee:us,slowGasPrice:Z,safePriorityFee:de,standardGasPrice:j,proposePriorityFee:_e,fastGasPrice:q,fastPriorityFee:Ce,customGasPrice:fe,customMaxBaseFee:ne,customMaxPriorityFee:pe,customGasLimit:te,estimatedL1FeeOptions:{wait:200,...d}}),ke=r||i||D.loading,{minGasFeeDisplay:_s,minGasFee:Cs,minGasPrice:Ls}=Re({gasPrice:Z,gasLimit:J,maxPriorityFeePerGas:de,maxFeePerGas:Z,supportEip1559:v,extFee:D?.data?.[t.SLOW],gasPriceInfo:b,gasLimitInfo:N,gasType:Ne,baseCoin:k,currencyId:C}),Ms=h(Ls),{minGasFeeDisplay:ws,minGasFee:Ss,minGasPrice:Ds}=Re({gasPrice:j,gasLimit:J,maxPriorityFeePerGas:_e,maxFeePerGas:j,supportEip1559:v,extFee:D?.data?.[t.STANDARD],gasPriceInfo:b,gasLimitInfo:N,gasType:Ne,baseCoin:k,currencyId:C}),Es=h(Ds),{minGasFeeDisplay:Is,minGasFee:Ns,minGasPrice:hs}=Re({gasPrice:q,gasLimit:J,maxPriorityFeePerGas:Ce,maxFeePerGas:q,supportEip1559:v,extFee:D?.data?.[t.FAST],gasPriceInfo:b,gasLimitInfo:N,gasType:Ne,baseCoin:k,currencyId:C}),As=h(hs),_t=ie(ne,0)?g("extension_wallet_transaction_errortip_basefeelimit"):"",Ct=V(ne,Ze)&&S(ne,0)?g("extension_wallet_transaction_errortip_notsuccess",{baseFee:Ze}):"",Lt=ie(pe,0)?g("extension_wallet_transaction_errortip_priorityfeelimit"):"",Mt=V(fe,Pt)?g("wallet_extension_transaction_customize_error_gasprice_mustbe",{minGasPriceGWei:Pt}):"",wt=V(te,pt)||S(te,Ft)?g("wallet_extension_transaction_customize_error_gas_restriction",{minGasLimit:nt(pt,0),maxGasLimit:nt(Ft)}):"",St=!wt&&(!v&&!Mt||v&&!_t&&!Lt),Dt=P(ne,pe),be=$(Ue((v?Dt:fe)||0)),Ws=h(be),{gasFeeDisplay:Et}=rs({gasPrice:Ue(be),gasLimit:Ue(te),extFee:D?.data?.[t.CUSTOM],baseCoin:k,currencyId:C}),Os=P(G(Z,J),D?.data?.[t.SLOW]),ks=P(G(j,J),D?.data?.[t.STANDARD]),It=P(G(q,J),D?.data?.[t.FAST]),Nt=P(G(be,te),D?.data?.[t.CUSTOM]),qe=S(Nt,G(It,2)),Je=[{typeKey:t.SLOW,gasFee:Cs,unitPrice:`${se.ceilShort(Ms,2)} ${g("extension_wallet_transaction_input_gwei")}`,totalPrice:_s,estimatedTime:re(b,Z),onClick:()=>(L?.(),he(t.SLOW))},{typeKey:t.STANDARD,gasFee:Ss,unitPrice:`${se.ceilShort(Es,2)} ${g("extension_wallet_transaction_input_gwei")}`,totalPrice:ws,estimatedTime:re(b,j),onClick:()=>(L?.(),he(t.STANDARD))},{typeKey:t.FAST,gasFee:Ns,unitPrice:`${se.ceilShort(As,2)} ${g("extension_wallet_transaction_input_gwei")}`,totalPrice:Is,estimatedTime:re(b,q),onClick:()=>(L?.(),he(t.FAST))}],bs=(0,a.useMemo)(()=>f&&f?.status!==Yt.empty&&(!f?.tip?.error||f?.tip?.key===Ht.exceedGasLimit)?Je?.map(F=>F?.typeKey!==t.CUSTOM&&se.lte(se.mul(F?.gasFee,k?.usdPrice),f?.activity?.gas)?{supportGasReturn:!0,...F}:F):Je,[f,Je,k?.usdPrice]),vs=re(b,be,!St),Bs={unitPricePrefix:se.ceilShort(Ws,2),unitPriceSuffix:g("extension_wallet_transaction_input_gwei"),totalPrice:Et?a.default.createElement(Jt,{style:{color:qe?"var(--okd-color-semantic-notice)":null},text:Et,maxWidth:"120px"}):"",renderWarning:F=>!F&&qe?a.default.createElement(ns,{className:X.customGasFeeWarningFold}):null,estimatedTime:vs,onClick:()=>{lt(t.CUSTOM)},canConfirm:St,onConfirm:()=>{he(t.CUSTOM),L?.();let F=$(fe),M=$(Dt),B=$(pe),W=te,R=D?.data?.[t.CUSTOM];K.current=!0,_({gasType:t.CUSTOM,maxFeePerGas:M,maxPriorityFeePerGas:B,gasPrice:F,gasLimit:W,isGasLimitLoading:i,isNetworkFeeLoading:ke,networkFee:Nt,supportEip1559:v,gasLimitInfo:N,gasPriceInfo:b,extFee:R,customConfirmed:K.current}),Ae.current=fe,We.current=ne,Oe.current=pe,je.current=te}};if((0,a.useEffect)(()=>{lt(I)},[o]),(0,a.useEffect)(()=>{if(I===t.CUSTOM)return;let F,M,B,W,R,Fe=J;I===t.SLOW?(B=Z,F=Z,M=de,R=Os,W=D?.data?.[t.SLOW]):I===t.STANDARD?(B=j,F=j,M=_e,R=ks,W=D?.data?.[t.STANDARD]):I===t.FAST&&(B=q,F=q,M=Ce,R=It,W=D?.data?.[t.FAST]),_({gasType:I,maxFeePerGas:F,maxPriorityFeePerGas:M,gasPrice:B,gasLimit:Fe,isGasLimitLoading:i,isNetworkFeeLoading:ke,networkFee:R,supportEip1559:v,gasLimitInfo:N,gasPriceInfo:b,extFee:W})},[I,Z,j,q,N,i,ke,_]),(0,a.useEffect)(()=>{if(I===t.CUSTOM&&!o){let F=je.current;typeof F=="string"&&V(F,N?.minGasLimit)&&(F=N?.minGasLimit,ut(N?.minGasLimit),je.current=N?.minGasLimit);let M=$(Ae.current||Ee||Tt[I]),B=$(We.current||Te||gt[I]),W=$(Oe.current||De||dt[I]),R=P(B,W),Fe=typeof F=="string"?F:J,Xe=D?.data?.[t.CUSTOM],ve=P(G((v?R:M)||0,Fe),D?.data?.[t.CUSTOM]);_({gasType:I,maxFeePerGas:R,maxPriorityFeePerGas:W,gasPrice:M,gasLimit:Fe,isGasLimitLoading:i,isNetworkFeeLoading:ke,networkFee:ve,supportEip1559:v,gasLimitInfo:N,gasPriceInfo:b,extFee:Xe,customConfirmed:K.current})}},[N,b,D]),(0,a.useEffect)(()=>{typeof E=="function"&&E({signInfo:e})},[e]),!o)return null;let Qe=()=>a.default.createElement("span",{className:X.customGWei},g("extension_wallet_transaction_input_gwei"));return a.default.createElement(Zt,{feeType:Ne,feeDataList:bs,onBack:p,onClose:y,custom:{...Bs,components:()=>a.default.createElement(a.default.Fragment,null,v?a.default.createElement(a.default.Fragment,null,a.default.createElement(O.Number,{className:X.customInput,size:O.SIZE.sm,title:a.default.createElement("div",{className:"network-fee--refresh-animation"},g("extension_wallet_transaction_text_maxbase_fee"),a.default.createElement("span",{className:X.customInputSubTitle},g("extension_wallet_transaction_text_current",{number:se.ceilShort(Ze,2)}))),value:ne,error:_t,errorType:O.TIP_TYPE.always,precision:9,enableMinus:!1,onChange:Ye,max:1e7,tips:Ct&&a.default.createElement("div",{className:X.maxBaseFeeWarning},Ct),suffix:Qe()}),a.default.createElement(O.Number,{className:X.customInput,size:O.SIZE.sm,title:g("extension_wallet_transaction_text_priority_fee"),value:pe,error:Lt,errorType:O.TIP_TYPE.always,precision:9,enableMinus:!1,onChange:Ke,max:1e7,suffix:Qe()})):a.default.createElement(O.Number,{className:X.customInput,size:O.SIZE.sm,title:a.default.createElement(a.default.Fragment,null,g("wallet_transfer_gasfee_subtitle_gas_price"),a.default.createElement("span",{className:X.customInputSubTitle},g("extension_wallet_transaction_input_gwei"))),value:fe,error:Mt,errorType:O.TIP_TYPE.always,precision:9,enableMinus:!1,onChange:cs,max:1e7,suffix:Qe()}),a.default.createElement(O.Number,{size:O.SIZE.sm,title:g("wallet_transfer_gasfee_subtitle_custom_gas_limit"),value:te,error:wt,errorType:O.TIP_TYPE.always,enableMinus:!1,onChange:ut,max:15e6,min:0,precision:0}),qe&&a.default.createElement(ns,{className:X.customGasFeeWarning}))}})};function ot(r){let{coinId:e,address:s,inputData:i,tokenAddress:o,value:u,gasLimitOptions:m,initialGasData:n,onDappGasIllegal:c}=r,l=Rt(e)||{},[w,d]=(0,a.useState)(n),[p,y]=(0,a.useState)(n?.initialGasType!==t.CUSTOM),[_,C]=Kt({coinId:e,address:s,chainId:l?.chainId}),[A,f,E]=qt({address:s,inputData:i,tokenAddress:o,coinId:e,value:u},{wait:200,...m}),L=_||E;return(0,a.useEffect)(()=>{if(L)return;let T={...n||{}},{initialGasType:Y,initialCustomMaxBaseFee:K,initialCustomMaxPriorityFee:k,initialCustomGasPrice:re,initialCustomGasLimit:ue}=T,{min:xe,safePriorityFee:Se,supportEip1559:ae,max:ye}=C?.gasPrice||$e,{gasLimit:le}=A||{};if(Y===t.CUSTOM){let Te=V(ue,le);Te&&(T.initialCustomGasLimit=le);let De=ae&&(V(k,Se)||V(P(K,k),xe)),Ee=!ae&&V(re,xe),ze=S(ue,G(le,1.2)),Ie=!ae&&S(re,G(ye,1.2)),Ye=ae&&S(P(K,k),G(ye,1.2)),ge=Te||De||Ee,Ke=ze||Ie||Ye;ge&&(T.initialCustomMaxPriorityFee=null,T.initialCustomMaxBaseFee=null,T.initialCustomGasPrice=null,T.initialGasType=t.STANDARD,c?.(rt[t.SLOW])),!ge&&Ke&&c?.(rt[t.FAST]),d(T)}y(!0)},[L]),p?a.default.createElement(zs,{...r,initialGasData:w,isSignInfoLoading:_,signInfo:C,initialGasLimitInfo:A,isGasLimitLoading:f,onGasTypeManualChange:()=>{c?.("")}}):null}ot.propTypes={visible:x.default.bool,address:x.default.string,inputData:x.default.string,tokenAddress:x.default.string,coinId:x.default.oneOfType([x.default.string,x.default.number]),value:x.default.string,initialGasData:x.default.shape({initialGasType:x.default.string,initialCustomMaxBaseFee:x.default.string,initialCustomMaxPriorityFee:x.default.string,initialCustomGasPrice:x.default.string,initialCustomGasLimit:x.default.string}),gasLimitOptions:x.default.object,estimatedL1FeeOptions:x.default.object,onBack:x.default.func,onClose:x.default.func,onGasChange:x.default.func,onServerDataChange:x.default.func,minimumGasLimit:x.default.string};ot.defaultProps={visible:!1,address:"",inputData:"",tokenAddress:"",coinId:"",value:"0",initialGasData:{initialGasType:t.STANDARD,initialCustomMaxBaseFee:"0",initialCustomMaxPriorityFee:void 0,initialCustomGasPrice:"0",initialCustomGasLimit:"0"},gasLimitOptions:{},estimatedL1FeeOptions:{},onBack:()=>{},onClose:()=>{},onGasChange:()=>{},onServerDataChange:()=>{},minimumGasLimit:"0"};var Vi=(0,a.memo)(ot);U();H();Ve();var Zi=(r,e)=>{let s=r.find(i=>i?.checkType===e);return s?!s?.result:!1},ji=(r,e,s)=>{let i=r.find(o=>o?.checkType===Ge.OVERWRITTEN)||{};return i.toastType===Me.FAILED?e():i.toastType===Me.PENDING?s():r},qi=(r=[])=>{let e={hasFailedTx:!1,hasPendingTx:!1,nonce:0,newNonce:0,originGasPrice:"0",originPriorityFee:"0"},s=r.find(i=>i?.checkType===Ge.OVERWRITTEN)||{};return e.nonce=s.nonce,e.newNonce=s.newNonce,e.originGasPrice=G(s?.gasPrice,1.1),e.originPriorityFee=G(s?.originPriorityFee,1.1),s.toastType===Me.FAILED?e.hasFailedTx=!0:s.toastType===Me.PENDING&&(e.hasPendingTx=!0),e},Ji=(r,e,s)=>{let{userGasInfo:i,serverGasInfo:o,originTxGasInfo:u}=e,{originGasPrice:m,originPriorityFee:n}=u,{supportEip1559:c}=i;if(c){let p=!1,{maxFeePerGas:y,maxPriorityFeePerGas:_}=i,{normal:C,proposePriorityFee:A}=o,f=m,E=n,L=ee([y,C,f]);ce(L,y)||(p=!0);let T=ee([_,A,E]),Y="0";return ce(T,_)||(Y=Q(T,_),p=!0),p?s({maxFeePerGas:P(L,Y),maxPriorityFeePerGas:T}):r}let{gasPrice:l}=i,{normal:w}=o,d=ee([l,w,m]);return ce(d,l)?r:s({gasPrice:d})},Qi=({userGasInfo:r,serverGasInfo:e,originTxGasInfo:s})=>{let{originGasPrice:i,originPriorityFee:o}=s,{supportEip1559:u}=r;if(u){let l=!1,{maxFeePerGas:w,maxPriorityFeePerGas:d}=r,{normal:p,proposePriorityFee:y}=e,_=i,C=o,A=ee([w,p,_]);ce(A,w)||(l=!0);let f=ee([d,y,C]),E="0";if(ce(f,d)||(E=Q(f,d),l=!0),l)return{maxFeePerGas:He(P(A,E),0),maxPriorityFeePerGas:He(f,0)}}let{gasPrice:m}=r,{normal:n}=e,c=ee([m,n,i]);return ce(c,m)?{}:{gasPrice:He(c,0)}},Xi=(r,e,s)=>{let{userGasInfo:i,updateGasInfo:o,baseCoinAmountAvailable:u}=e,{supportEip1559:m,gasLimit:n}=i;if(m){let{maxFeePerGas:l}=o;return S(G(l,n),u)?s():r}let{gasPrice:c}=o;return S(G(c,n),u)?s():r},er=({userGasInfo:r,updateGasInfo:e,baseCoinAmountAvailable:s,L1FEE:i})=>{let{supportEip1559:o,gasLimit:u}=r;if(o){let{maxFeePerGas:n}=e;return!!S(P(G(n,u),i),s)}let{gasPrice:m}=e;return!!S(P(G(m,u),i),s)};U();H();var rr={ON_CHAIN:0,NEW:1},ar="UserReject";export{ts as a,Qs as b,Xs as c,Vi as d,Zi as e,ji as f,qi as g,Ji as h,Qi as i,Xi as j,er as k,rr as l,ar as m};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-3QCQMWWZ.js.map
