import{e as M,k as Q}from"./chunk-UIABO6UG.js";import{d as z}from"./chunk-2LLM6N6U.js";import{a as J}from"./chunk-PYJPOVV7.js";import{b}from"./chunk-AO6MUSOH.js";import{t as Y,v as G,x as S}from"./chunk-SJIW4WAV.js";import{o as H}from"./chunk-5JJQQHKZ.js";import{T as e}from"./chunk-CA5MYYD6.js";import{c as m}from"./chunk-VMYDP774.js";import{la as ne,m as te,ob as A,pb as re,q as j}from"./chunk-M54COW6Q.js";import{q as g}from"./chunk-RIJWHGTU.js";import{I as v,l as i,v as k}from"./chunk-K4MPEKC5.js";import{X as L,c as oe}from"./chunk-XIGC6FD5.js";import{a as Z}from"./chunk-CXUPEGDW.js";import{f as B,m as u,o as w}from"./chunk-ICCOEXX5.js";u();w();var p=B(Z());v();var ee=B(te());ne();u();w();var t=B(Z()),I=B(oe());v();u();w();var X={[e.SLOW]:{label:"wallet_transfer_subtitle_trading_speed_slow",icon:`/static/images/network-fee/okx-wallet-plugin-${e.SLOW}.png`},[e.STANDARD]:{label:"wallet_transfer_subtitle_trading_speed_average",icon:`/static/images/network-fee/okx-wallet-plugin-${e.STANDARD}.png`},[e.FAST]:{label:"wallet_transfer_subtitle_trading_speed_fast",icon:`/static/images/network-fee/okx-wallet-plugin-${e.FAST}.png`},[e.CUSTOM]:{label:"wallet_transfer_gasfee_subtitle_custom_gas_fee",icon:`/static/images/network-fee/okx-wallet-plugin-${e.CUSTOM}.png`}};u();w();var a={"networkFee-panel":"_networkFee-panel_1mqf0_1",networkFeePanel:"_networkFee-panel_1mqf0_1","networkFee-panel-content":"_networkFee-panel-content_1mqf0_4",networkFeePanelContent:"_networkFee-panel-content_1mqf0_4","networkFee-panel-desc":"_networkFee-panel-desc_1mqf0_7",networkFeePanelDesc:"_networkFee-panel-desc_1mqf0_7","networkFee-panel-option__header":"_networkFee-panel-option__header_1mqf0_11",networkFeePanelOptionHeader:"_networkFee-panel-option__header_1mqf0_11","networkFee-panel-option__icon":"_networkFee-panel-option__icon_1mqf0_14",networkFeePanelOptionIcon:"_networkFee-panel-option__icon_1mqf0_14","networkFee-panel-option__content":"_networkFee-panel-option__content_1mqf0_17",networkFeePanelOptionContent:"_networkFee-panel-option__content_1mqf0_17","networkFee-panel-option__title":"_networkFee-panel-option__title_1mqf0_20",networkFeePanelOptionTitle:"_networkFee-panel-option__title_1mqf0_20","networkFee-panel-option__desc":"_networkFee-panel-option__desc_1mqf0_25",networkFeePanelOptionDesc:"_networkFee-panel-option__desc_1mqf0_25","networkFee-panel-option__children":"_networkFee-panel-option__children_1mqf0_31",networkFeePanelOptionChildren:"_networkFee-panel-option__children_1mqf0_31","networkFee-panel-custom-option":"_networkFee-panel-custom-option_1mqf0_34",networkFeePanelCustomOption:"_networkFee-panel-custom-option_1mqf0_34","networkFee-panel-custom-option__extend":"_networkFee-panel-custom-option__extend_1mqf0_38",networkFeePanelCustomOptionExtend:"_networkFee-panel-custom-option__extend_1mqf0_38","networkFee-panel-custom-option__extend__icon":"_networkFee-panel-custom-option__extend__icon_1mqf0_41",networkFeePanelCustomOptionExtendIcon:"_networkFee-panel-custom-option__extend__icon_1mqf0_41","networkFee-panel-custom-option__un_extend":"_networkFee-panel-custom-option__un_extend_1mqf0_45",networkFeePanelCustomOptionUnExtend:"_networkFee-panel-custom-option__un_extend_1mqf0_45","networkFee-panel-custom-option__confirm":"_networkFee-panel-custom-option__confirm_1mqf0_48",networkFeePanelCustomOptionConfirm:"_networkFee-panel-custom-option__confirm_1mqf0_48"};var ae=r=>{let{icon:o,label:s,coinId:n,currencyId:c,estimatedTime:F,estimatedFee:d,estimatedRate:T,children:q,headerChildren:_,headerClick:C,onClick:E,selected:f}=r,x=M(n),N=Y(d,{symbol:x?.symbol,decimals:x?.decimals}),l=Q(n,d,{currencyId:c,formatted:!0,useApproximate:!0});return t.default.createElement(z.Card,{direction:m.DIRECTION.vertical,selected:f,onClick:E},t.default.createElement(m.FlexBox,{align:m.ALIGN.center,onClick:C,className:a["networkFee-panel-option__header"]},t.default.createElement(b,{className:a["networkFee-panel-option__icon"],src:o,size:b.SIZE.lg}),t.default.createElement(m.Box,{className:a["networkFee-panel-option__content"]},t.default.createElement(m.FlexBox,{justify:"space-between",className:a["networkFee-panel-option__title"]},t.default.createElement(S.Text,{strong:!0,inherit:!0},s),t.default.createElement(S.Text,{strong:!0,inherit:!0},F)),t.default.createElement(m.FlexBox,{justify:"space-between",className:a["networkFee-panel-option__desc"]},t.default.createElement(S.Text,{inherit:!0},T),t.default.createElement(S.Text,{inherit:!0},`${N} ${l}`))),_),t.default.createElement(m.Box,{className:a["networkFee-panel-option__children"]},q))},le=({coinId:r,title:o,subTitle:s,currencyId:n,itemKey:c="level",options:F,visible:d,value:T,className:q,onToggleVisible:_,onChange:C,...E})=>{let[f,{toggle:x}]=H(T?.level===e.CUSTOM),N=(0,t.useCallback)(l=>{let{level:y,children:O,confirmDisabled:U}=l,{icon:$,label:V}=X[y]||{},h=y===e.CUSTOM;return t.default.createElement(ae,{coinId:r,icon:$,value:T,label:k(V),selected:T[c]===l[c],...l,currencyId:n,onClick:()=>{y!==e.CUSTOM&&(C?.(l),_?.())},headerClick:h?x:void 0,headerChildren:h&&t.default.createElement(b,{size:b.SIZE.xxs,icon:f?"okx-wallet-plugin-arrow-small-up":"okx-wallet-plugin-arrow-small-down",className:a["networkFee-panel-custom-option__extend__icon"]})},h&&t.default.createElement(m.Box,{className:(0,I.default)(a["networkFee-panel-custom-option"],{[a["networkFee-panel-custom-option__extend"]]:f,[a["networkFee-panel-custom-option__un_extend"]]:!f})},t.default.createElement(G,null),O,t.default.createElement(L,{block:!0,category:L.CATEGORY.fill,type:L.TYPE.highlight,size:L.SIZE.lg,onClick:()=>{let{children:W,...P}=l;C?.(P),_?.()},disabled:U,className:a["networkFee-panel-custom-option__confirm"]},k("extension_wallet_transaction_btn_gasfeeconfirm"))))},[r,n,f,c,C,_,x,T]);return d?t.default.createElement(m.Portal,{component:m.Container,className:(0,I.default)(a["networkFee-panel"],q)},t.default.createElement(J,{onBack:()=>{_()},title:o||k("wallet_transfer_subtitle_network_fee")}),t.default.createElement(m.Box,{className:a["networkFee-panel-content"]},!!s&&t.default.createElement(S.Text,{className:a["networkFee-panel-desc"]},s),t.default.createElement(z,{space:16,dataSource:F,renderItem:N,...E}))):null},K=le;u();w();v();re();var R=(r,o)=>{let s=k("extension_wallet_transaction_text_minute"),n=k("extension_wallet_transaction_text_second"),c=A(o.minCost,s,n),F=A(o.normalCost,s,n),d=A(o.maxCost,s,n);return i.eq(r,o.min)?d:i.gt(r,o.min)&&i.lt(r,o.normal)?`< ${d}`:i.eq(r,o.normal)?F:i.gt(r,o.normal)&&i.lt(r,o.max)?`< ${F}`:i.eq(r,o.max)?c:i.gt(r,o.max)?`< ${c}`:`-- ${s}`};var ie=[e.SLOW,e.STANDARD,e.FAST,e.CUSTOM],_e={[e.SLOW]:{satBytes:"min",estimatedTime:"maxCost"},[e.STANDARD]:{satBytes:"normal",estimatedTime:"normalCost"},[e.FAST]:{satBytes:"max",estimatedTime:"minCost"},[e.CUSTOM]:{satBytes:"normal",estimatedTime:"normalCost"}},me=({coinId:r,value:o,visible:s,signInfo:n,currencyId:c,estimatedFee:F,onChange:d,onToggleVisible:T})=>{let q=M(r),[_,C]=(0,p.useState)(o?.satBytes);(0,p.useEffect)(()=>{!_&&n?.normal&&C(n?.normal)},[n?.normal]);let E=(0,p.useMemo)(()=>{let{min:l,mempoolMin:y}=n||{},O=y||l||0;return i.lt(_,O)?k("extension_btc_minmum_alert_fee_lowerthan",{feerate:O}):null},[_,n]),f=(0,p.useMemo)(()=>(0,ee.isEmpty)(o)?0:i.ceilTruncate(i.div(F,o?.satBytes),0),[o,F]),x=q?.localType===j?k("wallet_extension_transfer_unit_sat_b"):"",N=(0,p.useMemo)(()=>ie.map(l=>{let y=_e[l],{satBytes:O,...U}=Object.keys(y).reduce((W,P)=>({level:l,...W,[P]:n?.[y[P]]}),{}),$=l===e.CUSTOM&&p.default.createElement(g.Number,{enableMinus:!1,precision:0,size:g.SIZE.sm,value:_,errorType:g.TIP_TYPE.always,error:E,onChange:C}),h=l===e.CUSTOM?_:O;return{...U,estimatedTime:R(h,n),satBytes:h,estimatedRate:`${h} ${x}`,estimatedFee:i.mul(h,f),children:$,confirmDisabled:!!E}}),[f,E,_,x,n]);return p.default.createElement(K,{coinId:r,value:o,itemKey:"level",visible:s,title:x,currencyId:c,options:N,onChange:d,onToggleVisible:T})},Je=me;export{_e as a,Je as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-MTAR53YL.js.map
