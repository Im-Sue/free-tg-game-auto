import{a as Mt}from"./chunk-4C2576LU.js";import{a as Nt,b as kt,c as vt}from"./chunk-BIBDTDJA.js";import{a as Z}from"./chunk-TPVT7ZCY.js";import{a as k,b as ht,d as wt}from"./chunk-A6HNAUBV.js";import"./chunk-6GFVKSAR.js";import"./chunk-JVLSBRR5.js";import"./chunk-5IXTSGAM.js";import"./chunk-RC3QMLDN.js";import"./chunk-JINEVGIZ.js";import"./chunk-SRU2IM3A.js";import"./chunk-46NSFYB3.js";import{i as Ot}from"./chunk-FFQESTX4.js";import"./chunk-P6SDUFQ6.js";import"./chunk-5TNZ4MQV.js";import{a as zt}from"./chunk-7B5TIR5Y.js";import"./chunk-R7VTXTCL.js";import"./chunk-LBYCQPAD.js";import"./chunk-6XNG2BCT.js";import"./chunk-OG5AG3VZ.js";import{a as Q}from"./chunk-QXNKNSJH.js";import{k as Pt}from"./chunk-FMNMD7QE.js";import"./chunk-R2QYIBE7.js";import{p as $}from"./chunk-EKQH7XTV.js";import"./chunk-R2QKPEWB.js";import"./chunk-KRHB66KZ.js";import"./chunk-4RHFH7IF.js";import"./chunk-LPTRVNVL.js";import"./chunk-PH2A2GR3.js";import"./chunk-WTP3OIOS.js";import"./chunk-D66ZH3O3.js";import{h as yt}from"./chunk-X764QIVO.js";import"./chunk-HISWVX7W.js";import{a as xt}from"./chunk-PYJPOVV7.js";import"./chunk-AO6MUSOH.js";import{a as W}from"./chunk-I435LZHT.js";import{x as u}from"./chunk-SJIW4WAV.js";import"./chunk-SLDECH2O.js";import"./chunk-5JJQQHKZ.js";import{C as Ct,b as F}from"./chunk-URG4MCPH.js";import{Pa as V,sb as St,tb as z,y as lt}from"./chunk-ZPOCIBPN.js";import"./chunk-CA5MYYD6.js";import"./chunk-RZ7GFYMN.js";import{a as Et}from"./chunk-IOCZ22XI.js";import"./chunk-EJY3MW2I.js";import"./chunk-3VRAVMMN.js";import"./chunk-YJ45QIWT.js";import"./chunk-WR62TYUO.js";import{d as g,f as K}from"./chunk-2G2AXMFT.js";import"./chunk-XGFQCNHX.js";import"./chunk-4JZ3HIS7.js";import"./chunk-JLA5HXVC.js";import"./chunk-I4WIGQLD.js";import"./chunk-ZNGQ6IUR.js";import"./chunk-JERFAOJH.js";import{g as At}from"./chunk-JXZFOFB5.js";import{a as Y}from"./chunk-LYNLETTP.js";import"./chunk-FQ4XEVKF.js";import{c as N}from"./chunk-VMYDP774.js";import"./chunk-A7LNVEYU.js";import"./chunk-2YWUVAR3.js";import"./chunk-VA2HGDZT.js";import"./chunk-AKPDCNMH.js";import{_b as It}from"./chunk-M54COW6Q.js";import"./chunk-PWWHYQAY.js";import{G as ct,J as q,c as gt,o as at}from"./chunk-RIJWHGTU.js";import{I as it,v as n}from"./chunk-K4MPEKC5.js";import"./chunk-X6USBUO5.js";import"./chunk-674MHQJQ.js";import{R as U,X as T}from"./chunk-XIGC6FD5.js";import{a as C}from"./chunk-CXUPEGDW.js";import"./chunk-363VDWOO.js";import"./chunk-7B5WANGL.js";import"./chunk-4P4FGPYZ.js";import"./chunk-YGNOWOE7.js";import"./chunk-OS2SESGM.js";import"./chunk-X4YEESEZ.js";import"./chunk-IR63YTCE.js";import"./chunk-PATHAEX7.js";import"./chunk-664ZTB7N.js";import"./chunk-4WUMETG6.js";import"./chunk-TAJDMRFA.js";import"./chunk-YZ3HFF2L.js";import"./chunk-2BD64J7Y.js";import"./chunk-RYJHESAH.js";import"./chunk-DOQ5NSSP.js";import"./chunk-VULQOB2N.js";import{f as d,m as o,o as r}from"./chunk-ICCOEXX5.js";o();r();var Wt=d(Et()),c=d(C()),nt=d(lt());K();it();o();r();var G={container:"_container_1on3b_1",main:"_main_1on3b_7",title:"_title_1on3b_10",subTitle:"_subTitle_1on3b_17",qrCode:"_qrCode_1on3b_23",scanImg:"_scanImg_1on3b_27",scanTip:"_scanTip_1on3b_31",notHaveWalletImg:"_notHaveWalletImg_1on3b_35",notHaveWalletTitle:"_notHaveWalletTitle_1on3b_40",notHaveWalletSubTitle:"_notHaveWalletSubTitle_1on3b_47",scanStatusTip:"_scanStatusTip_1on3b_50",loadingContainer:"_loadingContainer_1on3b_54"};o();r();var J=d(C());K();var mt=d(lt());o();r();K();var X=d(C()),M=()=>{let[t,i]=(0,X.useState)(null);return(0,X.useEffect)(()=>{(async()=>{let a=await g().getMpcToken();i(a)})()},[]),t};var p={IMPORTED:"IMPORTED",NOT_CREATE:"NOT_CREATE",NOT_IMPORTED:"NOT_IMPORTED",TOKEN_EXPIRED:"TOKEN_EXPIRED",ACCOUNT_MISMATCH:"ACCOUNT_MISMATCH",VERIFY_PASS:"VERIFY_PASS",RECOVER:"RECOVER"},bt=()=>{let t=M(),i=(0,mt.useSelector)(St),a=(0,mt.useSelector)(z),[l,e]=(0,J.useState)(null);return(0,J.useEffect)(()=>{!t||(async()=>{try{let{data:m}=await kt({},{headers:{Authorization:t}}),{mpcId:_}=m;switch(i){case k.VERIFY:{let f=await g().getMpcIdByWalletId(a);e({...m,accountStatus:f!==_?p.ACCOUNT_MISMATCH:p.VERIFY_PASS});break}case k.RECOVER:{if(_)try{await g().checkMpcIdIsImported(_),e({...m,accountStatus:p.RECOVER})}catch{e({...m,accountStatus:p.IMPORTED})}else e({...m,accountStatus:p.NOT_CREATE});break}case k.IMPORT:case k.NO_ACTION:{if(_)try{await g().checkMpcIdIsImported(_),e({...m,accountStatus:p.NOT_IMPORTED})}catch{e({...m,accountStatus:p.IMPORTED})}else e({...m,accountStatus:p.NOT_CREATE});break}default:break}}catch{e({accountStatus:p.TOKEN_EXPIRED})}})()},[t]),{accountInfo:l}};o();r();var P=d(C());o();r();var j={img:"_img_18f4s_1",title:"_title_18f4s_6",text:"_text_18f4s_13"};var tt=({text:t,title:i,footer:a})=>{let l=At({dark:"/cdn/assets/imgs/246/3CD5B03CE6E2FC68.png",light:"/cdn/assets/imgs/246/F1105B2119166F9E.png"});return P.default.createElement(P.default.Fragment,null,P.default.createElement("img",{className:j.img,src:l,alt:"not-have-wallet"}),P.default.createElement(u.Text,{className:j.title,align:u.ALIGN.center},i),P.default.createElement(u.Text,{size:u.SIZE.sm,align:u.ALIGN.center,className:j.text},t),a)};o();r();var b=d(C());it();o();r();var _t={main:"_main_1on04_1",title:"_title_1on04_5"};var Lt=()=>{let t=Y(),i=Q(),a=Z(),l=()=>{globalThis.open(a.download||`https://${i}/download`)};return b.default.createElement(W,{offsetBottom:0},b.default.createElement(N.FlexBox,{className:_t.main,align:N.ALIGN.center},b.default.createElement(gt,{width:32,height:32,alt:"",src:`${t}/cdn/assets/imgs/237/A229988567261685.png`}),b.default.createElement(u.Text,{size:u.SIZE.md,className:_t.title},n("extension_wallet_qr_title_app_download")),b.default.createElement(T,{type:T.TYPE.highlight,size:T.SIZE.xs,onClick:l},n("extension_wallet_qr_btn_download"))))};o();r();var s=d(C()),B=d(lt()),Rt=d(Et());it();var ot=d(zt());K();o();r();var y=d(C());var Yt=3e3,S={SCAN_NOT:-1,SCAN_SUCCESS:0,SCAN_FAIL:1,SHARE2_UPLOADED:2,SHARE2_UPLOAD_FAIL:3,NET_WORK_ERROR:"NET_WORK_ERROR"},Dt=(t,i)=>{let[a,l]=(0,y.useState)({status:S.SCAN_NOT}),e=M(),m=(0,y.useRef)(null),_=()=>{m.current&&clearInterval(m.current),l({status:S.SCAN_NOT})},f=(0,y.useCallback)(async()=>{try{let{data:I}=await Nt({pubKey:t},{headers:{Authorization:e}}),{status:x,cipherText:O,mpcId:h}=I;l({status:x,cipherText:O,mpcId:h})}catch{l({status:S.NET_WORK_ERROR})}},[t,e]);return(0,y.useEffect)(()=>!t||!i?.mpcId?()=>{_()}:(f(),m.current=setInterval(async()=>{await f()},Yt),()=>{_()}),[t,e,i?.mpcId]),{scanInfo:a,clear:_}};o();r();var A=d(C());o();r();var et={scanImg:"_scanImg_r7slg_1",scanStatusTip:"_scanStatusTip_r7slg_5",loadingTip:"_loadingTip_r7slg_9"};var L=({onClick:t=()=>{},imgSrc:i,text:a,loading:l=!1})=>{let e=Y();return A.default.createElement(N.FlexBox,{onClick:t,direction:N.DIRECTION.vertical,align:N.ALIGN.center},l?A.default.createElement(A.default.Fragment,null,A.default.createElement(U.Circle,{size:U.SIZE.lg}),A.default.createElement(u.Text,{className:et.loadingTip,size:u.SIZE.sm},a)):A.default.createElement(A.default.Fragment,null,A.default.createElement("img",{className:et.scanImg,src:`${e}${i}`,alt:"scan-status"}),A.default.createElement(u.Text,{className:et.scanStatusTip,size:u.SIZE.sm},a)))};o();r();var v={container:"_container_1yriw_1",main:"_main_1yriw_7",title:"_title_1yriw_10",subTitle:"_subTitle_1yriw_17",qrCode:"_qrCode_1yriw_23",scanImg:"_scanImg_1yriw_27",scanTip:"_scanTip_1yriw_31",scanStatusTip:"_scanStatusTip_1yriw_35"};var Qt="okx_mpc:",Zt=({accountInfo:t,userInfo:i})=>{let a=(0,Rt.useHistory)(),l=(0,B.useDispatch)(),[e,m]=(0,s.useState)(!1),[_,f]=(0,s.useState)({}),[I,x]=(0,s.useState)(!1),O=(0,B.useSelector)(V),h=(0,B.useSelector)(z),st=Ot(h),{scanInfo:D,clear:pt}=Dt(_.publicKey,t),Bt=i?.email||"",ut=async()=>{m(!0),x(!1);let R=Mt();try{let w=await R.exec("genRsaPair");f(w)}catch{x(!0)}finally{m(!1)}};(0,s.useEffect)(()=>{ut()},[]);let Ht=(0,s.useMemo)(()=>{if(_.publicKey&&i.uuid){let R={publicKey:_.publicKey,time:Date.now(),uId:i.uuid},w=(0,ot.AesEncodeQRCodeInfo)(JSON.stringify(R),i.uuid);return`${Qt}${w}`}return""},[_,i.uuid]),H=async()=>{pt(),ut()},qt=(0,s.useCallback)(()=>{if(I)return s.default.createElement(L,{onClick:H,imgSrc:"/cdn/assets/imgs/237/C31554E48A2A20D8.png",text:n("extension_wallet_qr_text_refresh_qr_code")});if(e)return s.default.createElement(L,{loading:!0,onClick:H,text:n("extension_wallet_qr_text_loading")});switch(D.status){case S.SCAN_SUCCESS:return s.default.createElement(L,{imgSrc:"/cdn/assets/imgs/237/0929F8643613BD4F.png",text:n("extension_wallet_qr_text_confirm_mobile")});case S.SCAN_FAIL:case S.SHARE2_UPLOAD_FAIL:return s.default.createElement(L,{onClick:H,imgSrc:"/cdn/assets/imgs/237/C31554E48A2A20D8.png",text:n("extension_wallet_qr_text_sync_failed")});case S.NET_WORK_ERROR:return s.default.createElement(L,{onClick:H,imgSrc:"/cdn/assets/imgs/237/C31554E48A2A20D8.png",text:n("extension_wallet_qr_text_network_failed")});case S.SHARE2_UPLOADED:default:return null}},[D,I,e]);return(0,s.useEffect)(()=>{(async()=>{let{status:R,cipherText:w,mpcId:ft}=D;if(R===S.SHARE2_UPLOADED){let{phone:Kt="",approvedPetname:dt=""}=i,Tt={approvedPetname:dt,phone:Kt,email:Bt,walletName:dt};if(l($.setKeepOpen({show:!0})),O){let Vt=await(0,ot.RSADecodeQRCodeInfo)(w,_.privateKey);await g().importMpcWallet({share2:Vt,mpcId:ft,userInfo:Tt}),t.accountStatus===p.RECOVER&&st?.status?.mpcStatus===wt.RECOVER&&st?.keyringIdentityType===It.MPC&&(console.log("recover wallet:",h,st),await l(yt(h))),a.push(F)}else await l(Pt({cipherText:w,privateKey:_.privateKey,mpcId:ft,userInfo:Tt})),a.push(Ct);pt()}})()},[D,_]),s.default.createElement(s.default.Fragment,null,s.default.createElement(q,{className:v.qrCode,level:q.LEVEL.Q,text:Ht,type:q.TYPE.svg,size:232,cornersDotOptions:{type:"dot"},cornersSquareOptions:{type:"dot"},dotsOptions:{type:"dots"},mask:D.status!==S.SCAN_NOT||I||e,renderMaskCon:qt}))},$t=({accountInfo:t,userInfo:i={},accountName:a})=>s.default.createElement("div",{className:v.container},s.default.createElement("div",{className:v.main},s.default.createElement("div",{className:v.title},n("extension_wallet_qr_title_sync_wallet")),s.default.createElement("div",{className:v.subTitle},n("extension_wallet_qr_subtitle_scan_confirm",{acctname:a})),s.default.createElement(Zt,{accountInfo:t,userInfo:i}),s.default.createElement(u.Text,{className:v.scanTip,size:u.SIZE.sm,align:u.ALIGN.center},n("extension_wallet_qr_text_operational_tips")))),Ut=$t;o();r();var rt=d(C());var Ft=()=>{let t=M(),[i,a]=(0,rt.useState)({userInfo:null});return(0,rt.useEffect)(()=>{!t||(async()=>{try{let{data:l,code:e}=await vt({},{headers:{Authorization:t}});a({userInfo:l,code:e})}catch{a({userInfo:{}})}})()},[t]),i};var Gt=()=>{let t=(0,Wt.useHistory)(),i=Q(),a=Z(),l=(0,nt.useDispatch)(),{userInfo:e,code:m}=Ft(),_=(0,nt.useSelector)(V),{accountInfo:f}=bt(),I=(0,c.useMemo)(()=>e?.phone||e?.email||"",[e]);(0,c.useEffect)(()=>{f&&e&&(f?.accountStatus===p.VERIFY_PASS?(ct.success({title:n("extension_wallet_error_toast_verification_successful")}),l($.setKeepOpen({show:!0})),g().setMpcAction("",""),t.push(F)):m===0&&ct.success({title:n("extension_wallet_qr_toast_login_successful",{acctname:I})}))},[f,e,I,m]);let x=async()=>{g().setMpcAction("","")};if((0,c.useEffect)(()=>(window.addEventListener("beforeunload",x),()=>{window.removeEventListener("beforeunload",x)}),[]),!f||!e)return c.default.createElement("div",{className:G.loadingContainer},c.default.createElement(U.Circle,null));let O=()=>{g().setMpcAction("",""),t.push(F)},h=()=>{switch(f.accountStatus){case p.IMPORTED:return c.default.createElement(tt,{title:n("extension_wallet_verification_title_account_duplicate",{acctname:I}),text:n("extension_wallet_verification_text_account_duplicate1"),footer:c.default.createElement(W.FooterActions,{placeholder:!1},c.default.createElement(T,{type:T.TYPE.highlight,size:T.SIZE.lg,block:!0,onClick:O},n("extension_wallet_verification_btn_return")))});case p.NOT_CREATE:return c.default.createElement(tt,{title:n("extension_wallet_login_title_not_created",{acctname:I}),text:n("extension_wallet_login_text_not_created1"),footer:c.default.createElement(Lt,null)});case p.ACCOUNT_MISMATCH:return c.default.createElement(tt,{title:n("extension_wallet_verification_title_account_mismatch"),text:n("extension_wallet_verification_text_account_mismatch1"),footer:c.default.createElement(W.FooterActions,{placeholder:!1},c.default.createElement(T,{type:T.TYPE.highlight,size:T.SIZE.lg,block:!0,onClick:O},n("extension_wallet_verification_btn_return")))});case p.NOT_IMPORTED:case p.RECOVER:return c.default.createElement(Ut,{accountInfo:f,userInfo:e,accountName:I});default:return null}};return c.default.createElement("div",{className:G.container},c.default.createElement(xt,{onBack:O,closeable:!1,bordered:!1}),c.default.createElement("div",{className:G.main},h()),c.default.createElement(at,{visible:f.accountStatus===p.TOKEN_EXPIRED||m!==0,title:n("extension_wallet_error_toast_title_verify_again"),text:n("extension_wallet_error_toast_text_verify_again1"),infoType:at.Prompt.INFO_TYPE.warn,hideCloseBtn:!0,alignBottom:!1,footer:c.default.createElement(T,{category:T.CATEGORY.fill,type:T.TYPE.highlight,size:T.SIZE.md,block:!0,onClick:async()=>{await g().setMpcAction(k.VERIFY,_),globalThis.open(a?.mpcLogin||`https://${i}${ht}`),window.close()}},n("extension_wallet_error_toast_btn_verification"))}))},sr=Gt;export{sr as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=Import-YOUX4B43.js.map
