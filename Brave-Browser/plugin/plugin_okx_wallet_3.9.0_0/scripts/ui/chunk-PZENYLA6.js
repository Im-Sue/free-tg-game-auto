import{a as D}from"./chunk-3EYFKVOU.js";import{Ub as A,m as J}from"./chunk-M54COW6Q.js";import{O as S,e as B}from"./chunk-RIJWHGTU.js";import{I as H,v as $}from"./chunk-K4MPEKC5.js";import{L as P,R as C,X as g,c as x}from"./chunk-XIGC6FD5.js";import{a as f}from"./chunk-CXUPEGDW.js";import{f as d,m as s,o}from"./chunk-ICCOEXX5.js";s();o();s();o();var v=d(f()),L=d(x()),K=({className:r,children:t,noPadding:n,noMargin:m})=>{let a=(0,L.default)("send-form__row",r,{"send-form__row--no-margin":m,"send-form__row--no-padding":n});return v.default.createElement("div",{className:a},t)},Y=(0,v.memo)(K);s();o();var u=d(f()),z=d(x()),Q=({className:r,buttonClick:t,title:n,buttonTitle:m})=>{let a=(0,z.default)("send-form__input-bottom-bar",r);return u.default.createElement("div",{className:a},u.default.createElement("div",{className:"send-form__input-bottom-bar__title"},n),m&&u.default.createElement("div",{className:"send-form__input-bottom-bar__button",onClick:t},"\xA0\xA0",m))},M=(0,u.memo)(Q);s();o();var p=d(f());var U=({inputComponent:r,...t})=>{let{tag:n,loading:m}=t;return p.default.createElement("div",{className:"send-form__input-custom-render"},r,m&&p.default.createElement(C.Circle,{className:"send-form__input-custom-render__loading",size:C.SIZE.sm}),n&&p.default.createElement(S,{className:"send-form__input-custom-render__tag"},p.default.createElement(D,{text:n,maxWidth:"170px"})))},Z=(0,p.memo)(U);s();o();var e=d(f()),I=d(x()),F=d(J());s();o();var h=d(f());H();s();o();var T={inline:"_inline_1yunh_1",badge:"_badge_1yunh_5"};var w=({addressType:r})=>h.default.createElement("div",{className:T.inline},h.default.createElement(B,{className:T.badge,type:B.TYPE.rounded},$(A[r])));var V=({className:r,options:t,onSelect:n})=>{let m=(0,I.default)("send-form__select-address",r),[a,W]=(0,e.useState)({}),j=i=>{let l=(0,F.cloneDeep)(a);l[i]=!l[i],W(l)};return!t||!t.length?null:e.default.createElement("div",{className:m},e.default.createElement("div",{className:"send-form__select-address__container"},t.map(({group:i,list:l},y)=>l&&l.length&&e.default.createElement("div",{className:"send-form__select-address__group",key:i},e.default.createElement("div",{className:"send-form__select-address__group-title",onClick:()=>{j(`${i}${y}`)}},e.default.createElement("span",{className:"send-form__select-address__group-title-text"},i),e.default.createElement(P,{className:(0,I.default)("okx-wallet-plugin-arrow-small-down","send-form__select-address__group-title-icon",{"send-form__select-address__group-title-icon--flip":a[`${i}${y}`]})})),!a[`${i}${y}`]&&e.default.createElement("div",{className:"send-form__select-address__group-list"},l.map(k=>{let{address:b,name:E,addressType:c,hideName:q}=k;return e.default.createElement("div",{className:"send-form__select-address__group-item",onClick:()=>{n(k)},key:b},E&&!q?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"send-form__select-address__group-item-name"},E),e.default.createElement("div",{className:"send-form__select-address__group-item-address"},b),c&&e.default.createElement(w,{addressType:c})):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:c?"send-form__select-address__group-item-address":"send-form__select-address__group-item-noname"},b),c&&e.default.createElement(w,{addressType:c})))}))))))},G=(0,e.memo)(V);s();o();var N=d(f());var X=({children:r,...t})=>{let m={...{category:g.CATEGORY.fill,type:g.TYPE.highlight,size:g.SIZE.lg,block:!0},...t};return N.default.createElement(g,{...m},r)},O=(0,N.memo)(X);var ze={Row:Y,InputBottomBar:M,InputCustomRender:Z,SelectAddress:G,ConfirmButton:O};export{ze as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-PZENYLA6.js.map
