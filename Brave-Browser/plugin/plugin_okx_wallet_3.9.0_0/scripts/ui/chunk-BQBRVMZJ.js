import{a as f,b as C}from"./chunk-A7LNVEYU.js";import{c as p,h as l}from"./chunk-2YWUVAR3.js";import{m as G}from"./chunk-M54COW6Q.js";import{a as g}from"./chunk-CXUPEGDW.js";import{f as m,m as r,o as i}from"./chunk-ICCOEXX5.js";r();i();C();l();var y=m(G()),e=m(g()),x=(t,n=!1)=>{let[a,s]=(0,e.useState)(!1),[o,I]=(0,e.useState)({baseFee:"",feeUnit:"",priorityFee:""}),u=(0,e.useCallback)(async()=>{let{data:S={}}=await p(f.getGasInfo,{chainId:t});I(S)},[t]),h=(0,e.useCallback)(async()=>{s(!0),await u(),s(!1)},[u]);return(0,e.useEffect)(()=>{n&&!(0,y.isUndefined)(t)&&h()},[h,n,t]),{gasData:o,loading:a,gasDataFn:u}};r();i();C();l();var c=m(g()),U=()=>{let[t,n]=(0,c.useState)([]);return(0,c.useEffect)(()=>{(async()=>{let{data:a=[]}=await p(f.getGasTrackerChains);n(a)})()},[]),{supportChain:t}};r();i();var b={chainId:1,chainName:"",chainIcon:""},v=(t,n)=>{if(!n.length)return{chainId:void 0};let a=b,s;return n.forEach(o=>{o.chainId===1&&(a=o),o.chainId===t&&(s=o)}),s||a};export{x as a,U as b,v as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-BQBRVMZJ.js.map
