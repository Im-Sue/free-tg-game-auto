import{l as G,p as z,s as O}from"./chunk-EHDEZCO2.js";import{d as $}from"./chunk-FORV77D5.js";import{c as u,d as U}from"./chunk-GYUX3JJ3.js";import{a as W,c as B,d as g}from"./chunk-YZAK46Y6.js";import{b as C}from"./chunk-JINEVGIZ.js";import{e as M}from"./chunk-EKQH7XTV.js";import{d as v}from"./chunk-2LLM6N6U.js";import{s as D,t as F,x as a}from"./chunk-SJIW4WAV.js";import{o as S}from"./chunk-5JJQQHKZ.js";import{a as V}from"./chunk-4JZ3HIS7.js";import{s as I,u as y,v as N}from"./chunk-JLA5HXVC.js";import{c as J}from"./chunk-I4WIGQLD.js";import{c as p}from"./chunk-VMYDP774.js";import{Qa as h,pb as q}from"./chunk-M54COW6Q.js";import{c as b}from"./chunk-RIJWHGTU.js";import{I as A,v as i}from"./chunk-K4MPEKC5.js";import{L as E,c as Z}from"./chunk-XIGC6FD5.js";import{a as w}from"./chunk-CXUPEGDW.js";import{f as x,m,o as n}from"./chunk-ICCOEXX5.js";m();n();var c=x(w());A();var Q=({approveInfo:e})=>c.default.createElement(g,null,c.default.createElement(B,{title:i(z(e.approvalType)?"extension_approve_maintitle_approve":"extension_revoke_approval_maintitle_revoke_approval"),summaryList:[{icon:{src:e.asset?.imageUrl||y},title:e.asset?.name||N,desc:c.default.createElement(G,{text:e.asset?.address})}]}),c.default.createElement(O,{approveInfo:e})),ae=Q;m();n();var o=x(w());var k=x(Z()),j=x(J());A();q();m();n();var s={root:"_root_pbsli_1",tokenImg:"_tokenImg_pbsli_5",coinDetail:"_coinDetail_pbsli_12",title:"_title_pbsli_16",in:"_in_pbsli_20",arrow:"_arrow_pbsli_23",fold:"_fold_pbsli_35"};var X=e=>e.nftName?e.nftName:e.tokenId?i("wallet_extension_network_text_unknown_tokenid",{tokenId:e.tokenId}):N,R=e=>{let r=e.asset||{},t="";if(r.assetType===u.NFT)t=`${e.tokenNum?`${e.tokenNum} `:""}${X(e)}`;else{let l=(0,j.isHexString)(e.rawValue)?V(e.rawValue):e.rawValue;t=F(l,{symbol:r.symbol,decimals:r.decimals})}return`${e.operator}${t}`},ee=e=>{let r=e.asset||{},t;return r.assetType===u.NFT?t=e.nftImageUrl||y:t=r.imageUrl||I,t},oe=({data:e,maxTitle:r})=>{let t=C(),l=(0,o.useMemo)(()=>{let _=e.asset||{};return[u.NATIVE,u.TOKEN].includes(_.assetType)?e.usdValue?D(h(e.usdValue,t.usdToThisRate),{symbol:t.symbol}):i("wallet_extension_text_barmark"):null},[e?.asset,e?.usdValue,t]);return o.default.createElement(p.Box,{className:s.root},o.default.createElement(b,{src:ee(e||{}),className:s.tokenImg,errorImg:I}),o.default.createElement(p.FlexBox,{direction:p.DIRECTION.vertical,className:s.coinDetail},o.default.createElement(a.AdaptiveText,{text:r,autoSize:M,ellipsis:{tooltip:!0},className:(0,k.default)(s.title,{[s.in]:e.operator===U.add})},e.title),l?o.default.createElement(a.Text,{size:a.SIZE.sm,type:a.TYPE.secondary,forceWrap:!0},l):null))},te=({assetChange:e=[],dappInfo:r,showDappInfo:t=!0,noFold:l})=>{let _=l?!1:e?.length>4,[L,{toggle:H}]=S(_),K=L?e.slice(0,4):e,f="",Y=K.map(T=>{let d=R(T||{});return f=d.length>f.length?d:f,{...T,title:d}});return o.default.createElement(g,null,o.default.createElement(W,{className:s.root,title:i("wallet_extension_modaltitle_asset_change"),tooltip:i("wallet_extension_modaldesc_asset_change")},o.default.createElement(v,{space:8,dataSource:Y,renderItem:T=>o.default.createElement(oe,{data:T||{},maxTitle:f})}),_&&o.default.createElement(p.Box,{align:p.ALIGN.center,className:(0,k.default)(s.arrow,{[s.fold]:L}),onClick:H},o.default.createElement(E,{className:"okx-wallet-plugin-add-arrow-chevrons"}))),t&&o.default.createElement($,{...r}))},We=te;export{ae as a,We as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-YWELIV7Q.js.map
