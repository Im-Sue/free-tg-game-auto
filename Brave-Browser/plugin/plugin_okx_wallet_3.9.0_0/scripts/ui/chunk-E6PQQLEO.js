import{d as M}from"./chunk-2LLM6N6U.js";import{a as Z}from"./chunk-PYJPOVV7.js";import{x as p}from"./chunk-SJIW4WAV.js";import{T as t,U as x,X as D}from"./chunk-CA5MYYD6.js";import{c as C}from"./chunk-VMYDP774.js";import{I as E,v as n}from"./chunk-K4MPEKC5.js";import{L as G,X as A,c as O}from"./chunk-XIGC6FD5.js";import{a as I,g as K}from"./chunk-CXUPEGDW.js";import{f,m as r,o as m}from"./chunk-ICCOEXX5.js";r();m();var a=f(I()),J=f(O()),o=f(K());E();r();m();var e=f(I()),T=f(O()),s=f(K());E();r();m();var W=({className:l,isSelected:u,estimatedTime:b,unitPrice:_,totalPrice:N,unitPricePrefix:d,unitPriceSuffix:P,totalPricePrefix:w,totalPriceSuffix:k,totalFiat:g,canConfirm:F,onConfirm:$,onClick:h,components:c,renderWarning:S})=>{let[y,z]=(0,e.useState)(u),[B,Q]=(0,e.useState)(!1),V=(0,T.default)("network-fee-custom",l,{"network-fee-custom--selected":u}),X=(0,T.default)("network-fee-custom__head",{"network-fee-custom__head--unfold":y}),R=(0,T.default)("network-fee-custom__narrow-icon",{"okx-wallet-plugin-arrow-small-up":y,"okx-wallet-plugin-arrow-small-down":!y}),ee=(0,T.default)("network-fee-custom__main__time",{"network-fee--refresh-animation":!B}),te=(0,T.default)("network-fee-custom__sub",{"network-fee--refresh-animation":!B}),oe=()=>{Q(!0),h()};return(0,e.useEffect)(()=>{z(u)},[u]),e.default.createElement("div",{className:V,onClick:oe},e.default.createElement("div",{className:X},e.default.createElement("div",{className:"network-fee-custom__type-icon"},e.default.createElement("img",{src:"/static/images/network-fee/okx-wallet-plugin-custom.png",alt:"type"})),e.default.createElement("div",{className:"network-fee-custom__content"},e.default.createElement("div",{className:"network-fee-custom__main"},e.default.createElement("div",{className:"network-fee-custom__main__title"},n(x[t.CUSTOM])),e.default.createElement("div",{className:ee},b)),e.default.createElement("div",{className:te},_?e.default.createElement("div",{className:"network-fee-custom__sub__unit"},_):e.default.createElement("div",{className:"network-fee-custom__sub__unit-price"},e.default.createElement("div",{className:"network-fee-custom__sub__unit-price--prefix"},d,"\xA0"),e.default.createElement("div",{className:"network-fee-custom__sub__unit-price--suffix"},P)),N?e.default.createElement("div",{className:"network-fee-custom__sub__total"},N):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"network-fee-custom__sub__total-price"},e.default.createElement("div",{className:"network-fee-custom__sub__total-price--prefix"},w,"\xA0"),e.default.createElement("div",{className:"network-fee-custom__sub__total-price--suffix"},k,"\xA0")),e.default.createElement("div",{className:"network-fee-custom__sub__total-fiat"},g)))),e.default.createElement(G,{className:R,onClick:()=>{z(!y)}})),S&&S(y),e.default.createElement("div",{className:(0,T.default)({"network-fee-custom--hide":!y})},e.default.createElement("div",{className:"network-fee-custom__body"},c()),e.default.createElement("div",{className:"network-fee-custom__foot"},e.default.createElement(A,{className:"network-fee-custom__confirm",category:A.CATEGORY.fill,type:A.TYPE.highlight,size:A.SIZE.lg,onClick:$,disabled:!F,block:!0},n("extension_wallet_transaction_btn_gasfeeconfirm")))))};W.propTypes={isSelected:s.default.bool,onConfirm:s.default.func,onClick:s.default.func,estimatedTime:s.default.string,unitPrice:s.default.string,totalPrice:s.default.string,unitPricePrefix:s.default.string,unitPriceSuffix:s.default.string,totalPricePrefix:s.default.string,totalPriceSuffix:s.default.string,totalFiat:s.default.string,canConfirm:s.default.bool,components:s.default.any};W.defaultProps={isSelected:!1,onConfirm:()=>{},onClick:()=>{},estimatedTime:"--",unitPrice:"",totalPrice:"",unitPricePrefix:"",unitPriceSuffix:"",totalPricePrefix:"",totalPriceSuffix:"",totalFiat:"",canConfirm:!1,components:""};var j=(0,e.memo)(W);r();m();var i=f(I()),q=f(O()),v=f(K());r();m();E();var U=({className:l,isSelected:u,estimatedTime:b,unitPrice:_,totalPrice:N,onClick:d,type:P,typeIcon:w,supportGasReturn:k})=>{let g=(0,q.default)("network-fee-item",l,{"network-fee-item--selected":u});return i.default.createElement("div",{className:g,onClick:d},i.default.createElement("div",{className:"network-fee-item__type-icon"},i.default.createElement("img",{src:`/static/images/network-fee/${w}.png`,alt:"type"})),i.default.createElement("div",{className:"network-fee-item__content"},i.default.createElement("div",{className:"network-fee-item__main"},i.default.createElement("div",{className:"network-fee-item__main__title"},P),i.default.createElement("div",{className:"network-fee-item__main__time network-fee--refresh-animation"},b)),i.default.createElement("div",{className:"network-fee-item__sub network-fee--refresh-animation"},i.default.createElement("div",{className:"network-fee-item__sub__unit"},_),i.default.createElement(C.Space,{direction:C.DIRECTION.vertical},i.default.createElement(p.Text,{className:"network-fee-item__text",size:p.SIZE.xs,align:p.ALIGN.right,type:p.TYPE.secondary,ellipsis:{tooltip:!0}},N),k&&i.default.createElement(p.Text,{align:p.ALIGN.right,size:p.SIZE.xs,type:p.TYPE.success},n("wallet_extension_network_daily_gas"))))))};U.propTypes={className:v.default.string,isSelected:v.default.bool,type:v.default.string,estimatedTime:v.default.string,unitPrice:v.default.string,totalPrice:v.default.string,onClick:v.default.func};U.defaultProps={className:"",isSelected:!1,type:"",estimatedTime:"",unitPrice:"",totalPrice:"",onClick:()=>{}};var H=(0,i.memo)(U);r();m();var ie=()=>l=>l===t.SLOW?`1 ${n("extension_wallet_transaction_text_minute")}`:l===t.STANDARD?`30 ${n("extension_wallet_transaction_text_second")}`:l===t.FAST?`15 ${n("extension_wallet_transaction_text_second")}`:"--",Y=({className:l,feeDataList:u,feeType:b=t.STANDARD,onBack:_,onClose:N,custom:d,onChange:P})=>{let w=ie(),[k,g]=(0,a.useState)(b),F=(0,J.default)("network-fee",{className:l}),h=[{type:n(x[t.SLOW]),typeKey:t.SLOW,typeIcon:D[t.SLOW],estimatedTime:w(t.SLOW),isSelected:k===t.SLOW},{type:n(x[t.STANDARD]),typeKey:t.STANDARD,typeIcon:D[t.STANDARD],estimatedTime:w(t.STANDARD),isSelected:k===t.STANDARD},{type:n(x[t.FAST]),typeKey:t.FAST,typeIcon:D[t.FAST],estimatedTime:w(t.FAST),isSelected:k===t.FAST}].map(c=>{let S=u.find(y=>y.typeKey===c.typeKey);return{...c,...S}});return a.default.createElement(C.Portal,{className:F,component:C.Container},a.default.createElement(Z,{title:n("wallet_transfer_subtitle_network_fee"),onBack:_,onClose:N,closeable:!1,stickyStyle:{backgroundColor:"var(--okd-color-background-base-secondary)"}}),a.default.createElement(M,{className:"network-fee__body",dataSource:h,renderItem:(c,S)=>a.default.createElement(H,{key:S,...c,onClick:()=>{g(c.typeKey),setTimeout(()=>{c?.onClick?.(),_?.()},100),P?.(c)}})},!!d&&a.default.createElement(j,{...d,isSelected:k===t.CUSTOM,onClick:()=>{g(t.CUSTOM),d?.onClick?.()},onConfirm:()=>{_?.(),d?.onConfirm?.()}})))};Y.propTypes={className:o.default.string,feeDataList:o.default.array,feeType:o.default.string,onBack:o.default.func,onClose:o.default.func,custom:o.default.shape({onClick:o.default.func,onConfirm:o.default.func,canConfirm:o.default.bool,components:o.default.any,className:o.default.string,isSelected:o.default.bool,type:o.default.string,estimatedTime:o.default.string,unitPricePrefix:o.default.string,unitPriceSuffix:o.default.string,totalPricePrefix:o.default.string,totalPriceSuffix:o.default.string,totalFiat:o.default.string})};Y.defaultProps={className:"",feeDataList:[],feeType:t.STANDARD,onBack:()=>{},onClose:()=>{},custom:{}};var ze=(0,a.memo)(Y);export{ze as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-E6PQQLEO.js.map
