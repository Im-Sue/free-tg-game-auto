import{e as a}from"./chunk-6GFVKSAR.js";import{n as u}from"./chunk-4RHFH7IF.js";import{y as R}from"./chunk-ZPOCIBPN.js";import{a as N}from"./chunk-2G2AXMFT.js";import{m as B}from"./chunk-M54COW6Q.js";import{a as h}from"./chunk-CXUPEGDW.js";import{f as r,m as s,o as m}from"./chunk-ICCOEXX5.js";s();m();var e=r(h()),f=r(R()),i=r(B()),p=r(N());var d=20*1e3,y=()=>{let b=(0,f.useDispatch)(),c=a(),o=(0,e.useRef)(null);(0,e.useEffect)(()=>{let l=()=>{clearInterval(o.current),o.current=null},n=async()=>{try{let t=await c();if((0,i.isEmpty)(t)){l();return}let k=await(0,p.default)(t.eth.getBlockNumber)();b(u(k))}catch(t){console.log(`fetch block failed 
${t}`)}};return n(),o.current=setInterval(()=>{n()},d),()=>{l()}},[c])},w=y;export{w as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-R77Z6U7Q.js.map
