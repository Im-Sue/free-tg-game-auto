import{a as p}from"./chunk-7GZ2ZCGI.js";import{c as I,f as c}from"./chunk-XGFQCNHX.js";import{S as y,aa as m,gc as u,hc as g,la as P}from"./chunk-M54COW6Q.js";import{m as C,o as f}from"./chunk-ICCOEXX5.js";C();f();P();function B({coin:e,walletId:n,walletIdentityMap:o,options:l={}}){let{needFilterBaseCoin:t=!1,isKeystone:r,isMPC:s,isHardWallet:a}=l,i=o[n],W=r??I(i?.initialType),F=a??c(i?.keyringIdentityType),d=s??p(i?.keyringIdentityType);return!d&&!F?!0:t&&e.coinId===y?!!d:W&&e.baseCoinId===y&&e.coinId===m?!1:d?!Object.values(g).includes(e.protocolId):!Object.values(u).includes(e.protocolId)}function k({coins:e=[],walletId:n,walletIdentityMap:o,options:l={}}){let t=o[n],r=I(t?.initialType),s=c(t?.keyringIdentityType),a=p(t?.keyringIdentityType);return e.filter(i=>B({coin:i,walletId:n,walletIdentityMap:o,options:{...l,isMPC:a,isHardWallet:s,isKeystone:r}}))}export{B as a,k as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-RBTIRMSE.js.map
