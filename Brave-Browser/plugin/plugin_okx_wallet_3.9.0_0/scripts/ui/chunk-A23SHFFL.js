import{f as p}from"./chunk-64STH2HN.js";import{d as m}from"./chunk-LPTRVNVL.js";import{Ka as g,Ma as s,Na as l,eb as r,fb as i}from"./chunk-ZPOCIBPN.js";import{m as c,o as d}from"./chunk-ICCOEXX5.js";c();d();var n={connect:"connect",transaction:"transaction",msg:"msg",addToken:"addToken",addChain:"addChain"};function a(e={}){let t=null,o=0;return Object.keys(e).forEach(f=>{let T=e[f];Array.isArray(T)&&T.forEach(u=>{let h=u.time||0;h>=o&&(t=f,o=h)})}),t}c();d();var U=e=>{let t=m(e)?.isRpcMode,o;return t?o=a({[n.connect]:p(e),[n.transaction]:s(e),[n.msg]:g(e),[n.addToken]:i(e),[n.addChain]:r(e)}):o=a({[n.connect]:p(e),[n.transaction]:l(e),[n.addToken]:i(e),[n.addChain]:r(e)}),o},q=e=>m(e)?.isRpcMode?p(e).length+s(e).length+g(e).length+i(e).length+r(e).length:p(e).length+l(e).length+i(e).length+r(e).length;export{n as a,U as b,q as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-A23SHFFL.js.map
