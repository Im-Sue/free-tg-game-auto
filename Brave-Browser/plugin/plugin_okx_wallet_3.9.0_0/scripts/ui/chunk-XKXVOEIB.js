import{d as p}from"./chunk-LHNVUV3G.js";import{a as E}from"./chunk-PBOUQOH2.js";import{C as R,Sa as n,y as L,z as d}from"./chunk-ZPOCIBPN.js";import{_b as e,la as b,o as a}from"./chunk-M54COW6Q.js";import{I as _,v as i}from"./chunk-K4MPEKC5.js";import{a as W}from"./chunk-CXUPEGDW.js";import{f as m,m as A,o as f}from"./chunk-ICCOEXX5.js";A();f();var h=m(W()),u=m(L());_();b();var B=(o=!1,t=a)=>{let r=(0,h.useMemo)(()=>d(n,s=>p(s,o,t)),[o,t]);return(0,u.useSelector)(r)},M=o=>{let t=E({network:o});return[{name:i("wallet_extension_addressbook_title_address_book"),options:t}]},Y=(o=a)=>{let t=B(!1,o),r=M(o);return[t,[...t,...r]]},v=()=>{let o=(0,u.useSelector)(n),t=!1,r=!1;return o.forEach(({walletIdentities:c,keyringIdentityType:s})=>{(![e.HARDWARE,e.PRIVATE_KEY].includes(s)||s===e.PRIVATE_KEY&&c[0]?.account[a])&&(r=!0);let k=c?.length;for(let l=0;l<k;l++)if(s===e.MNEMONIC&&!c[l].backupData?.length||[e.HARDWARE,e.PRIVATE_KEY,e.MPC].includes(s)){t=!0;break}}),{hasBackUpWallet:t,batchTransferAvailable:r}};export{B as a,Y as b,v as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-XKXVOEIB.js.map
