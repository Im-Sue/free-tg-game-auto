import{b as O}from"./chunk-X6EEBMFW.js";import{w as L}from"./chunk-KVIYCH5A.js";import{a as y}from"./chunk-U43G73LH.js";import{a as I}from"./chunk-YUPWBXXL.js";import{n as S,o as F}from"./chunk-URG4MCPH.js";import{y as B}from"./chunk-ZPOCIBPN.js";import{a as b}from"./chunk-IOCZ22XI.js";import{B as T,o as D}from"./chunk-RIJWHGTU.js";import{I as h,v as f}from"./chunk-K4MPEKC5.js";import{R as C,c as Q}from"./chunk-XIGC6FD5.js";import{a as _}from"./chunk-CXUPEGDW.js";import{f as l,m as o,o as e}from"./chunk-ICCOEXX5.js";o();e();var c=l(_());var H=({looker:t,chainId:r,tokenId:s,contractAddress:a})=>{let[n,p]=(0,c.useState)({}),[u,d]=(0,c.useState)(!1),k=(0,c.useCallback)(async()=>{if(!r||!s)return;d(!0);let i=await L({looker:t,chainId:r,tokenId:s,contractAddress:a}),{tokenStandard:v}=i,g={...i,locationId:`${i?.btcNftUtxoDetail?.txId}:${i?.btcNftUtxoDetail?.outputIndex}${v===y.Ordinals?i?.btcNftUtxoDetail?.outputSatOffset:""}`,price:i?.salePrice||i?.lastPrice||i?.bestOfferPrice};return p(g),d(!1),g},[r,a,t,s]);return{loading:u,nftInfo:n,getNFTInfo:k}},J=H;o();e();var P=l(b()),U=l(_());var Y=()=>{let t=(0,P.useLocation)();return(0,U.useMemo)(()=>I(t.search?.slice(1)),[t.search])},w=Y;o();e();var E=l(_()),A=l(B()),M=l(b());h();var j=(t={})=>{let r=(0,M.useHistory)(),s=(0,A.useDispatch)(),{claim:a,offerAddress:n,accountAddress:p}=w();return(0,E.useCallback)((u={})=>{if(t?.chainName==="Solana"&&t?.sale){let d=D.tip({alignBottom:!1,title:f("extension_wallet_detail_title_transfer_faild"),children:f("extension_wallet_detail_text_transfer_faild"),confirmText:f("wallet_extension_btn_general_ok"),onConfirm:()=>{d.destroy()}});return}if(a){s(O.setToAddress(p)),r.push({pathname:F,state:{nftInfo:{...t,...u,claim:!0,accountAddress:n}}});return}r.push({pathname:S,state:{nftInfo:{...t,...u}}})},[a,r,t,s,p,n,f])},it=j;o();e();var m=l(_());h();var $=l(Q());o();e();var x={root:"_root_1sfmf_1",circle:"_circle_1sfmf_11",loader:"_loader_1sfmf_16"};function q({className:t,tooltip:r,count:s}){let a=m.default.createElement(m.default.Fragment,null,m.default.createElement(C.Circle,{className:x.circle,loaderClassName:x.loader}),s),n=(0,$.default)(t,x.root);return r?m.default.createElement(T,{className:n,title:f("wallet_brc20_tooltips_card_state_locked_tooltips"),placement:T.DIRECTION.top},a):m.default.createElement("div",{className:n},a)}var gt=q;export{J as a,w as b,it as c,gt as d};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-K5HHWT43.js.map
