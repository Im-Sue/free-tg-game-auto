import{Q as w}from"./chunk-WTP3OIOS.js";import"./chunk-D66ZH3O3.js";import{rb as c,y as A}from"./chunk-ZPOCIBPN.js";import"./chunk-CA5MYYD6.js";import"./chunk-WR62TYUO.js";import{d as s,f as T}from"./chunk-2G2AXMFT.js";import"./chunk-I4WIGQLD.js";import"./chunk-ZNGQ6IUR.js";import{a as p}from"./chunk-LYNLETTP.js";import"./chunk-AKPDCNMH.js";import{Bb as L,Eb as n,Kb as b,rb as r}from"./chunk-M54COW6Q.js";import{I as C,v as a}from"./chunk-K4MPEKC5.js";import"./chunk-X6USBUO5.js";import"./chunk-674MHQJQ.js";import{a as N}from"./chunk-CXUPEGDW.js";import"./chunk-363VDWOO.js";import"./chunk-7B5WANGL.js";import"./chunk-4P4FGPYZ.js";import"./chunk-YGNOWOE7.js";import"./chunk-RYJHESAH.js";import"./chunk-DOQ5NSSP.js";import"./chunk-VULQOB2N.js";import{f as g,m as i,o}from"./chunk-ICCOEXX5.js";i();o();var e=g(N()),v=g(A());C();b();L();T();i();o();var t={walletAggregateContainer:"_walletAggregateContainer_ewvsl_1",img:"_img_ewvsl_10",title:"_title_ewvsl_15",subTitle:"_subTitle_ewvsl_22",walletListContainer:"_walletListContainer_ewvsl_28",walletList:"_walletList_ewvsl_28",wallet:"_wallet_ewvsl_1",logo:"_logo_ewvsl_46",name:"_name_ewvsl_51"};var y=()=>{let m=p(),_=(0,v.useSelector)(c),d=async l=>{w({network:"0x1",wallet:_[l].name}),await s().useProvider(l),n()===r&&globalThis.platform.closeCurrentWindow()},f=async()=>{await s().rejectAggregate()};return(0,e.useEffect)(()=>{n()===r&&window.addEventListener("beforeunload",f)},[]),e.default.createElement("div",{className:t.walletAggregateContainer},e.default.createElement("img",{className:t.img,src:`${m}/cdn/assets/imgs/234/60452D346D4F1A09.png`,alt:"wallet-aggregate"}),e.default.createElement("p",{className:t.title},a("wallet_extension_list_title_select_wallet")),e.default.createElement("p",{className:t.subTitle},a("wallet_extension_list_subtitle_select_wallet_desc")),e.default.createElement("div",{className:t.walletListContainer},e.default.createElement("div",{className:t.walletList},_.map((l,u)=>e.default.createElement("div",{className:t.wallet,onClick:()=>d(u)},e.default.createElement("img",{className:t.logo,src:`${m}${l.logo}`,alt:"wallet-logo"}),e.default.createElement("p",{className:t.name},l.name))))))},V=y;export{V as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=wallet-aggregate-BHT4UEA3.js.map
