import{b as ae}from"./chunk-LJK5U7KV.js";import{b as ce,d as me,f as ue,g as pe,h as de}from"./chunk-FQMXNMEF.js";import"./chunk-XVNT5VUK.js";import"./chunk-MRPWIG2O.js";import"./chunk-H43TVLNI.js";import{c as $,d as E}from"./chunk-A6HNAUBV.js";import{q as ie,s as ne}from"./chunk-6GFVKSAR.js";import"./chunk-JVLSBRR5.js";import"./chunk-5IXTSGAM.js";import"./chunk-BFVA6OLJ.js";import"./chunk-RC3QMLDN.js";import"./chunk-JINEVGIZ.js";import"./chunk-SRU2IM3A.js";import{d as re}from"./chunk-46NSFYB3.js";import"./chunk-FFQESTX4.js";import"./chunk-P6SDUFQ6.js";import"./chunk-5TNZ4MQV.js";import"./chunk-R7VTXTCL.js";import"./chunk-LBYCQPAD.js";import"./chunk-NMSQZNJG.js";import{l as le,p as se}from"./chunk-EKQH7XTV.js";import"./chunk-R2QKPEWB.js";import"./chunk-KRHB66KZ.js";import"./chunk-4RHFH7IF.js";import{d as X}from"./chunk-LPTRVNVL.js";import"./chunk-PH2A2GR3.js";import{d as B}from"./chunk-2LLM6N6U.js";import"./chunk-7GZ2ZCGI.js";import"./chunk-WTP3OIOS.js";import"./chunk-D66ZH3O3.js";import{b as ee}from"./chunk-X764QIVO.js";import"./chunk-HISWVX7W.js";import{a as oe}from"./chunk-PYJPOVV7.js";import"./chunk-AO6MUSOH.js";import{a as te}from"./chunk-I435LZHT.js";import{t as U}from"./chunk-SJIW4WAV.js";import"./chunk-SLDECH2O.js";import"./chunk-5JJQQHKZ.js";import"./chunk-URG4MCPH.js";import{y as Fe}from"./chunk-ZPOCIBPN.js";import"./chunk-CA5MYYD6.js";import"./chunk-RZ7GFYMN.js";import{a as Re}from"./chunk-IOCZ22XI.js";import"./chunk-EJY3MW2I.js";import"./chunk-3VRAVMMN.js";import"./chunk-YJ45QIWT.js";import"./chunk-WR62TYUO.js";import"./chunk-2G2AXMFT.js";import"./chunk-XGFQCNHX.js";import"./chunk-4JZ3HIS7.js";import"./chunk-JLA5HXVC.js";import"./chunk-I4WIGQLD.js";import"./chunk-ZNGQ6IUR.js";import"./chunk-JERFAOJH.js";import"./chunk-JXZFOFB5.js";import"./chunk-LYNLETTP.js";import"./chunk-FQ4XEVKF.js";import{c as s}from"./chunk-VMYDP774.js";import"./chunk-A7LNVEYU.js";import"./chunk-2YWUVAR3.js";import"./chunk-VA2HGDZT.js";import"./chunk-AKPDCNMH.js";import{Zb as Q,_b as Y,m as Ke}from"./chunk-M54COW6Q.js";import"./chunk-PWWHYQAY.js";import{a as J,b as O,r as v}from"./chunk-RIJWHGTU.js";import{I as Pe,v as M}from"./chunk-K4MPEKC5.js";import"./chunk-X6USBUO5.js";import"./chunk-674MHQJQ.js";import{X as W,c as G}from"./chunk-XIGC6FD5.js";import{a as T,g as Z}from"./chunk-CXUPEGDW.js";import"./chunk-363VDWOO.js";import"./chunk-7B5WANGL.js";import"./chunk-4P4FGPYZ.js";import"./chunk-YGNOWOE7.js";import"./chunk-RYJHESAH.js";import"./chunk-DOQ5NSSP.js";import"./chunk-VULQOB2N.js";import{f as a,m as t,o}from"./chunk-ICCOEXX5.js";t();o();var e=a(T()),q=a(Fe()),Ie=a(Re());Pe();t();o();var fe=a(T());var _e=(f={})=>{let m=ie(f);return(0,fe.useMemo)(()=>m.map(i=>{let{walletIdentities:r,marketValueSymbol:u,marketValue:h}=i;return{...i,walletAsset:`${U(h)} ${u||""}`,walletIdentities:r.map(p=>{let{balance:l="--",symbol:n}=p;return{...p,walletAsset:`${U(l)} ${n||""}`}})}}),[m])};t();o();var be=a(G()),k=a(Z());var c=a(T());t();o();var ye=a(G()),S=a(Z());var C=a(T());t();o();var w=a(T());var he=a(G()),ge=a(Ke());t();o();var j={root:"_root_9zx9g_1",disabled:"_disabled_9zx9g_8"};var Ce=({selected:f,disabled:m,onClick:i})=>w.default.createElement(s.FlexBox,{onClick:i,className:(0,he.default)(j.root,{[j.disabled]:m}),align:s.ALIGN.center,justify:s.ALIGN.center},m?w.default.createElement(v.Circle,{disabled:!0,checked:!1}):w.default.createElement(v.Circle,{checked:f}));Ce.defaultProps={onClick:ge.noop,selected:!1,disabled:!1};var P=Ce;t();o();var K={root:"_root_1aq24_1",disabled:"_disabled_1aq24_5",highlight:"_highlight_1aq24_11"};var Ae=({selected:f,createdId:m,isRpcMode:i,hiddenAssets:r,walletIdentity:u,handleClickWallet:h,requestChain:p,disabled:l=!1})=>{let{walletId:n=""}=u,g=(0,C.useMemo)(()=>f.includes(n),[f,n]),I=(0,C.useMemo)(()=>!!(!p||u?.account?.[p]),[p,u]);l=l||!I;let y=(0,C.useCallback)(()=>{l||h(n)},[h,n,l]);return C.default.createElement(s.FlexBox,{className:(0,ye.default)(K.root,{[K.highlight]:n===m,[K.disabled]:l}),align:s.ALIGN.center,onClick:y},C.default.createElement(me,{disabled:l,isRpcMode:i,hiddenAssets:r,walletIdentity:u}),C.default.createElement(P,{selected:g,disabled:l}))};Ae.propTypes={selected:S.default.array.isRequired,createdId:S.default.string.isRequired,isRpcMode:S.default.bool.isRequired,walletIdentity:S.default.object.isRequired,hiddenAssets:S.default.bool.isRequired,handleClickWallet:S.default.func.isRequired};var xe=Ae;t();o();var b={root:"_root_7lquh_1",keyring:"_keyring_7lquh_15",header:"_header_7lquh_18",title:"_title_7lquh_21",content:"_content_7lquh_25",icon:"_icon_7lquh_28",mpcStatusAlertWrapper:"_mpcStatusAlertWrapper_7lquh_31"};var Se=({selected:f,isRpcMode:m,hiddenAssets:i,keyringIdentity:r,handleClickWallet:u,requestChain:h})=>{let[p,l]=de(),[n,g]=(0,c.useState)(!0),I=()=>{g(d=>!d)},y=(0,c.useMemo)(()=>r?.keyringIdentityType===Y.MPC,[r]),_=(0,c.useMemo)(()=>{let{mpcStatus:d,accountStatus:L}=r?.status||{};return y&&(d===E.ESCAPE||d===E.RECOVER||L===$.DELETE||L===$.FROZEN)},[y,r?.status]);return c.default.createElement(s.Box,{className:b.root},c.default.createElement(J,{onToggle:I,expanded:n,titleClass:b.title,className:b.keyring,headerClassName:b.header,contentClassName:b.content,iconClassName:(0,be.default)(b.icon),title:c.default.createElement(ce,{isRpcMode:m,hiddenAssets:i,keyringIdentity:r})},y&&c.default.createElement(pe,{keyringIdentity:r,className:b.mpcStatusAlertWrapper}),c.default.createElement(B,{dataSource:r?.walletIdentities||[],renderItem:d=>c.default.createElement(xe,{selected:f,isRpcMode:m,createdId:p,hiddenAssets:i,walletIdentity:d,handleClickWallet:u,requestChain:h,disabled:_})}),r.keyringIdentityType===Y.MNEMONIC?c.default.createElement(ue,{createdCb:l,keyringIdentity:r}):null))};Se.propTypes={selected:k.default.array.isRequired,isRpcMode:k.default.bool.isRequired,hiddenAssets:k.default.bool.isRequired,keyringIdentity:k.default.object.isRequired,handleClickWallet:k.default.func.isRequired};var ke=Se;t();o();var F={root:"_root_qo7v8_1",selectAll:"_selectAll_qo7v8_1",text:"_text_qo7v8_15"};var Ve=({request:f})=>{let{origin:m}=f?.metadata||{},{baseChain:i,chainName:r,allChain:u}=ae(m);(0,e.useEffect)(()=>{ee()},[]);let[,h]=ne({hasBackup:!0}),p=_e({hasBackup:!0}),{isRpcMode:l}=(0,q.useSelector)(X),n=(0,e.useMemo)(()=>l?p:h,[l,h,p]),{backupedWallets:g,showTip:I}=(0,e.useMemo)(()=>{let A=!1;return{backupedWallets:n.reduce((V,H)=>{let qe=H?.walletIdentities?.map(Le=>{let{initialType:Ne,walletId:Be,account:we}=Le;return Ne===Q.MPC_KEYRING&&H?.status?.mpcStatus===E.ESCAPE?"":!u&&!we?.[i]?(A=!0,""):Be})?.filter(Boolean);return V.concat(qe)},[]),showTip:A}},[n,u,i]),y=(0,q.useSelector)(le),[_,d]=(0,e.useState)(y?.length>0?y:[]),L=g.length>1,R=(0,e.useMemo)(()=>g.length===_.length,[g,_]),Te=(0,e.useCallback)(()=>{d(R?[]:g)},[R,g]),Me=(0,e.useCallback)(A=>{_.includes(A)?d(N=>N.filter(V=>V!==A)):d(N=>[...N,A])},[_]),z=(0,q.useDispatch)(),D=(0,Ie.useHistory)(),We=(0,e.useCallback)(()=>{z(se.setSelectAccounts(_)),D.goBack()},[_,D,z]),[Ee]=re();return e.default.createElement(s.Container,{className:F.root},e.default.createElement(oe,{closeable:!1,bordered:!1,title:M("wallet_dapp_conncetion_subtitle_select_accounts")}),I&&e.default.createElement(O,{desc:M("wallet_extension_connect_notification_text_dont_select_wallets",{network:r}),type:O.TYPE.warn,closable:!1}),L?e.default.createElement(s.FlexBox,{align:s.ALIGN.center,className:F.selectAll},e.default.createElement(s.Box,{className:F.text},M("wallet_dapp_conncetion_subtitle_select_all")),e.default.createElement(P,{selected:R,onClick:Te})):null,e.default.createElement(B,{dataSource:n,renderItem:A=>e.default.createElement(ke,{selected:_,isRpcMode:l,hiddenAssets:Ee,keyringIdentity:A,handleClickWallet:Me,requestChain:u?"":i})}),e.default.createElement(te.FooterActions,null,e.default.createElement(W,{block:!0,disabled:!_.length,category:W.CATEGORY.fill,type:W.TYPE.highlight,size:W.SIZE.lg,onClick:We},M("wallet_set_password_btn_confirm"))))},io=Ve;export{io as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=Comp-GFBPACWW.js.map
