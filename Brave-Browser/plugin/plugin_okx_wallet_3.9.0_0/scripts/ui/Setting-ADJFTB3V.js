import{a as F,b as K}from"./chunk-6PXE5HEH.js";import{a as R}from"./chunk-74GTIAZN.js";import{a as B}from"./chunk-TPVT7ZCY.js";import"./chunk-245PXJQJ.js";import"./chunk-R2QYIBE7.js";import"./chunk-LPTRVNVL.js";import{d as V}from"./chunk-2LLM6N6U.js";import{m as N}from"./chunk-WTP3OIOS.js";import"./chunk-D66ZH3O3.js";import{a as H}from"./chunk-PYJPOVV7.js";import"./chunk-AO6MUSOH.js";import"./chunk-I435LZHT.js";import"./chunk-SJIW4WAV.js";import"./chunk-SLDECH2O.js";import"./chunk-5JJQQHKZ.js";import{J as O,Ja as D,K as y,L,M as I,O as C,P,Q as W,U as k,a as A,aa as M,pa as G}from"./chunk-URG4MCPH.js";import{n as E}from"./chunk-ZPOCIBPN.js";import"./chunk-CA5MYYD6.js";import"./chunk-RZ7GFYMN.js";import{a as T}from"./chunk-IOCZ22XI.js";import{h as U,l as tt}from"./chunk-3VRAVMMN.js";import"./chunk-YJ45QIWT.js";import"./chunk-WR62TYUO.js";import"./chunk-2G2AXMFT.js";import"./chunk-JLA5HXVC.js";import"./chunk-I4WIGQLD.js";import"./chunk-ZNGQ6IUR.js";import{c as S}from"./chunk-VMYDP774.js";import"./chunk-2YWUVAR3.js";import"./chunk-VA2HGDZT.js";import"./chunk-AKPDCNMH.js";import"./chunk-M54COW6Q.js";import"./chunk-PWWHYQAY.js";import{B as v,o as h}from"./chunk-RIJWHGTU.js";import{I as b,v as t}from"./chunk-K4MPEKC5.js";import"./chunk-X6USBUO5.js";import"./chunk-674MHQJQ.js";import{L as f,c as Z}from"./chunk-XIGC6FD5.js";import{a as Q}from"./chunk-CXUPEGDW.js";import"./chunk-363VDWOO.js";import"./chunk-7B5WANGL.js";import"./chunk-4P4FGPYZ.js";import"./chunk-YGNOWOE7.js";import"./chunk-RYJHESAH.js";import"./chunk-DOQ5NSSP.js";import"./chunk-VULQOB2N.js";import{f as p,l as process,m as s,o as _}from"./chunk-ICCOEXX5.js";s();_();var o=p(Q()),z=p(T()),g=p(Z());b();s();_();var X=p(T());b();tt();s();_();var $=p(T());function et(){let i=(0,$.useHistory)();return()=>{window.location.href.includes("/home.html")||window.location.href.includes("/sidepanel.html")?i.push(k):globalThis.platform.openExtensionInBrowser(k)}}var Y=et;s();_();function ot(){let i=F();return()=>{K(i)}}var j=ot;function e(i){return()=>{N({icon_name:i})}}function it(){let i=B(),d=Y(),w=j(),x=()=>{window.logStateString((c,J)=>{c?U(t("wallet_settings_state_logs_errortip_statelog_error")):E(`${t("wallet_settings_state_logs_maintitle_wallet_state_logs")}.json`,J)})},u=()=>{h.warn({alignBottom:!1,title:t("wallet_extension_clearcache_modaltitle_sure_toclear"),text:t("wallet_extension_clearcache_modaldesc_sure_toclear"),cancelText:t("wallet_extension_btn_general_cancel"),confirmText:t("wallet_extension_btn_general_confirm"),onConfirm:()=>{chrome.runtime.reload()}})},r=(0,X.useHistory)(),{isRpcMode:l}=R(),a=()=>{!l||r.push(D)};return[{title:t("wallet_settings_subtitle_security_settings"),children:[{title:t("wallet_extension_settings_item_backups"),icon:"okx-wallet-plugin-draw-20",route:O,point:e("wallet_backup")},{title:t("wallet_extension_settings_item_password"),icon:"okx-wallet-plugin-verify-20",route:L,point:e("wallet_password")},{title:t("wallet_extension_settings_item_lock_screen"),icon:"okx-wallet-plugin-clock",route:`${P}?pageType=AutoLock`,point:e("autolock_time")},{title:t("settings_intro_title_protection_level"),icon:"okx-wallet-plugin-security-2",route:I,point:e("phishing_dedection")},{title:t("extension_settings_title_security_audit"),icon:"okx-wallet-plugin-perpetual",url:i?.security,point:e("security_audit")}]},{title:t("wallet_extension_settings_title_basic"),children:[{title:t("extension_settings_title_wallet_management"),icon:"okx-wallet-plugin-assets-20",route:M,point:e("wallet_management")},{title:t("wallet_extension_settings_subtitle_address_book"),icon:"okx-wallet-plugin-address",route:G,point:e("addressbook")},{title:t("wallet_extension_settings_item_custom_network"),icon:"okx-wallet-plugin-chart-settings",action:d,point:e("custom_network")},{title:t("wallet_extension_settings_preferences"),icon:"okx-wallet-plugin-settings-2",route:y,point:e("preference")}]},{title:t("wallet_extension_settings_title_advanced"),children:[{title:t("wallet_extension_settings_item_other_services"),icon:"okx-wallet-plugin-flashotc-20",action:w,point:e("switch_server")},{title:t("wallet_extension_settings_not_affected"),icon:"okx-wallet-plugin-reset-20",route:W},{title:t("wallet_extension_nonce_btn_reset_nonce"),icon:"okx-wallet-plugin-nonce",action:a,disable:!l,tooltip:t("wallet_extension_nonce_tooltips_reset_nonce"),point:e("clear_nonce")},{title:t("wallet_extension_settings_item_clear_cache"),icon:"okx-wallet-plugin-brush-20",action:u,point:e("clear_cache")},{title:t("wallet_extension_settings_item_download"),icon:"okx-wallet-plugin-download-20",action:x,point:e("downalod_log")}]},{title:t("commonall_modal_btn_more"),children:[{title:t("extension_settings_title_service_terms"),icon:"okx-wallet-plugin-futures-20",url:i?.termsOfService,point:e("service_agreement")},{title:t("wallet_extension_settings_item_privacy_policy"),icon:"okx-wallet-plugin-white-paper",url:i?.privacyPolicy,point:e("privacy_policy")},{title:t("extension_settings_link_supportcanter"),icon:"okx-wallet-plugin-chatbot-20",url:i?.help,point:e("help_centre")},{title:t("wallet_extension_settings_item_communities"),icon:"okx-wallet-plugin-discover-20",url:i?.community,point:e("community")}]}]}var q=it;s();_();var n={root:"_root_1v6x4_1",group:"_group_1v6x4_6",groupTitle:"_groupTitle_1v6x4_20",groupOptions:"_groupOptions_1v6x4_27",optionOuter:"_optionOuter_1v6x4_33",option:"_option_1v6x4_33",disabled:"_disabled_1v6x4_44",icon:"_icon_1v6x4_48",subTitle:"_subTitle_1v6x4_54",about:"_about_1v6x4_62",aboutTitle:"_aboutTitle_1v6x4_73",aboutValue:"_aboutValue_1v6x4_78",aboutIcon:"_aboutIcon_1v6x4_81"};function nt(){let i=(0,z.useHistory)(),d=q(),w=e("about"),x=u=>{let{route:r,url:l,action:a,point:c}=u;c&&c(),r?i.push(r):l?globalThis.open(l):a&&a()};return o.default.createElement(S.Container,{className:n.root},o.default.createElement(H,{title:t("wallet_settings_maintitle_settings"),onBack:()=>{i.replace(A)},closeable:!1}),o.default.createElement("div",null,d.map(({title:u,children:r})=>o.default.createElement("div",{className:n.group},o.default.createElement("div",{className:n.groupTitle},u),o.default.createElement("div",{className:n.groupOptions},r.map(l=>{let{icon:a,title:c}=l;return o.default.createElement("div",{className:n.optionOuter},o.default.createElement(v,{title:l.tooltip,disabled:!l.disable,placement:v.DIRECTION.bottom},o.default.createElement("div",{className:(0,g.default)(n.option,{[n.disabled]:l.disable}),onClick:()=>{x(l)}},o.default.createElement(f,{className:(0,g.default)(a,n.icon)}),o.default.createElement("div",{className:n.subTitle},c))))}))))),o.default.createElement(V.Cell,{className:n.about,icon:o.default.createElement(f,{className:(0,g.default)("okds-information-circle",n.aboutIcon)}),isLink:!0,hovered:!1,title:o.default.createElement("div",{className:n.aboutTitle},t("extension_settings_title_about_wallet")),value:o.default.createElement("div",{className:n.aboutValue},process.env.APP_VERSION&&`V${process.env.APP_VERSION}`),onClick:()=>{w(),i.push(C)}}))}var Bt=nt;export{Bt as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=Setting-ADJFTB3V.js.map
