import{b as R}from"./chunk-64STH2HN.js";import{a as H}from"./chunk-RMA2FZOE.js";import{C as L,Pa as x,Va as v,Xa as M,_a as B,mb as w,z as T}from"./chunk-ZPOCIBPN.js";import{K as h,Tb as y,Vb as k,la as G,o as A,q as g}from"./chunk-M54COW6Q.js";import{m as u,o as p}from"./chunk-ICCOEXX5.js";u();p();u();p();var _=(o,s,r={enableEmptyAccount:!1})=>{let{account:t={}}=s,e=r.enableEmptyAccount?n=>typeof n=="string":Boolean;return o.filter(({localType:n})=>e(t[n]))};G();u();p();var D=(o,s={})=>{let{accounts:r={},lastApproved:t}=s[o]?.eth_accounts||{},e=null;return Object.keys(r).forEach(n=>{r[n]===t&&(e=n)}),e};function ot(o,s={enableEmptyAccount:!1}){let r=w(o),t=M(o);return _(r,t,s)}var ct=T(B,w,(o,s)=>{let{accountMap:r}=o,t={},e={},n=s.reduce((l,i)=>{let{localType:c,chainName:a,image:W,chainId:C,symbol:E,isHotNetwork:S,hotNetworkRank:b}=i;return c===g?(t.chainName=a,t.chainId=C,t.image=W,t.symbol=E,t.isHotNetwork=S,t.hotNetworkRank=b,t.localType=c,l):c===h?(e.chainName=a,e.chainId=C,e.image=W,e.symbol=E,e.isHotNetwork=S,e.hotNetworkRank=b,e.localType=c,l):(r[c]&&l.push({address:r[c],chainName:a,chainId:C,image:W,symbol:E,isHotNetwork:S,hotNetworkRank:b,localType:c}),l)},[]),{accountsMap:I,segwitAddressType:f}=o,[,m]=H(n),d=I[g];if(d){let l=f[g]===y.SEGWIT_NESTED?y.SEGWIT_NESTED_49:y.SEGWIT_NESTED,i=k[g].reduce((c,a)=>(l!==a&&d[a]&&c.unshift({...t,address:d[a].address?d[a].address:t.address,addressType:a}),c),[]);i.reverse(),m.unshift({...i[0],moreAddress:i.slice(1)}),n=[...i,...n]}let N=I[h];return N&&(n=[...k[h].reduce((i,c)=>(N[c]&&i.unshift({...e,address:N[c].address,addressType:c}),i),[]),...n]),{addresses:n,hotAddresses:m}}),rt=(o,s,r)=>{let t=v(o),e=R(o),n=x(o),I=o.metamask.permissionsHistory;if(e[s]?.includes(n)&&t[n].account[A]===r)return t[n]||{};let f=D(s,I);if(e[s]?.includes(f)&&t[f].account[A]===r)return t[f];let m=e[s]?.find(d=>t[d]?.account[A]===r);return m?t[m]:{}};export{D as a,ot as b,ct as c,rt as d};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-KT53NMHD.js.map
