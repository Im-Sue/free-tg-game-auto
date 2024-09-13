import{Gb as w,Kb as d}from"./chunk-M54COW6Q.js";import{a as u}from"./chunk-X6USBUO5.js";import{f as g,m as k,o as p}from"./chunk-ICCOEXX5.js";k();p();var l=g(u());d();var c={},h=class{constructor(r){this.worker=null,this.processing={},this.url=r,this.setUpWorker()}onMessage(r){let{id:s,payload:o,error:t}=r.data,i=this.processing[s];delete this.processing[s];let{resolve:n,reject:a}=i;t?a(t):n(o)}onError(r){console.log(r)}setUpWorker(){this.worker||(this.worker=new Worker(this.url),this.worker.onmessage=this.onMessage.bind(this),this.worker.onerror=this.onError.bind(this))}exec(r,s){let o=s?.id||w(),t=new Promise((i,n)=>{this.processing[o]={resolve:i,reject:n}});return this.worker.postMessage({id:o,method:r,args:s}),t}},M=()=>{let e=l.default.runtime.getURL("worker.js");if(c[e])return c[e];let r=new h(e);return c[e]=r,r};export{M as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-4C2576LU.js.map
