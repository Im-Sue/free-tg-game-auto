import{o as s}from"./chunk-RIJWHGTU.js";import{I as u,v as n}from"./chunk-K4MPEKC5.js";import{L as f,R as d,X as e}from"./chunk-XIGC6FD5.js";import{a as g}from"./chunk-CXUPEGDW.js";import{f as p,m as t,o}from"./chunk-ICCOEXX5.js";t();o();var w=async c=>{let _=(await import("./web3.min-OOB6NOJW.js")).default;return new Promise((a,r)=>{new _(c).eth.getChainId().then(()=>{a(!0)}).catch(()=>{r()})})};t();o();var i=p(g());u();t();o();var h={changeNetButton:"_changeNetButton_hc70c_1",exitRpcModeButton:"_exitRpcModeButton_hc70c_4",text:"_text_hc70c_14","font-logout":"_font-logout_hc70c_19",fontLogout:"_font-logout_hc70c_19"};var k=c=>{let{onRetry:_,onChangeNet:a,visible:r}=c;return r?i.default.createElement(s.Prompt,{visible:r,infoType:s.Prompt.INFO_TYPE.warn,title:n("developer_mode_network_toast_connect_failed"),text:n("developer_mode_network_toast_changenetwork"),hideCloseBtn:!0,alignBottom:!1,renderFooter:()=>i.default.createElement(i.default.Fragment,null,i.default.createElement(e,{block:!0,category:e.CATEGORY.fill,type:e.TYPE.highlight,onClick:_,size:e.SIZE.lg},n("developer_mode_network_btn_retry")),i.default.createElement(e,{block:!0,category:e.CATEGORY.outline,type:e.TYPE.primary,onClick:a,size:e.SIZE.lg,className:h.changeNetButton},n("developer_mode_network_btn_changenetwork")))}):null},z=k;t();o();var l=p(g());u();t();o();var H=c=>{let{onClose:_,visible:a,network:r}=c;return a?l.default.createElement("div",{className:"net-loading"},l.default.createElement(f,{onClick:_,className:"okx-wallet-plugin-close net-loading__close"}),l.default.createElement("div",{className:"net-loading__content"},l.default.createElement(d,{size:d.SIZE.xl}),l.default.createElement("div",{className:"net-loading__content-text"},n("developer_mode_mid_loading_connecting",{network:r})))):null};export{w as a,z as b,H as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-SP3S3L5M.js.map
