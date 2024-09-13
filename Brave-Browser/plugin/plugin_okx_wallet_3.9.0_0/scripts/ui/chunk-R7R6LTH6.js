import{e as D}from"./chunk-CFT6B56M.js";import{o as f,q as y}from"./chunk-5JJQQHKZ.js";import{m as B}from"./chunk-M54COW6Q.js";import{a as x}from"./chunk-CXUPEGDW.js";import{f as G,m as I,o as b}from"./chunk-ICCOEXX5.js";I();b();var s=G(x());var t=G(B());var T=(E,O={wait:200,disabled:!1,fetchOnce:null,onFetchSuccess:()=>{},onFetchError:()=>{}})=>{let[g,l]=(0,s.useState)({}),[d,v]=(0,s.useState)(null),[w,{setTrue:S,setFalse:n}]=f(!0),[k,{setFalse:o}]=f(!0),{address:r,inputData:i,tokenAddress:c,coinId:m,value:F}=E,{wait:q,disabled:h,fetchOnce:e,onFetchSuccess:p,onFetchError:L}=O,A=async()=>{try{let a={coinId:m,value:F,address:r&&(0,t.trim)(r),inputData:i&&(0,t.trim)(i)};c&&(a.tokenAddress=(0,t.trim)(c));let{data:u}=await D(a);l(u),e&&v(e),(0,t.isFunction)(p)&&p()}catch{l(u=>({...u,queryGasLimitErrorUseDefault:!0})),(0,t.isFunction)(L)&&L()}finally{n(),o()}},{run:P}=y(()=>{if(h){n(),o();return}if(e===d&&e!==null){n(),o();return}A()},{wait:q});return(0,s.useEffect)(()=>{S(),P()},[r,i,c,m,F,e,d,h]),[g,w,k]},z=T;export{z as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-R7R6LTH6.js.map
