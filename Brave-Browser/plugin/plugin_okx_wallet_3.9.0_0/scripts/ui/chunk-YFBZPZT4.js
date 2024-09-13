import{h as t,m as a,o as u}from"./chunk-ICCOEXX5.js";a();u();var s={uninitialized:0,initialized:1,waiting:2,paused:3,working:4,canceled:5,unknown:6},e=class{constructor(i){t(this,"status",s.uninitialized);t(this,"nextInfo",null);t(this,"cb",null);t(this,"args",[]);t(this,"next",(...i)=>{[s.waiting,s.canceled,s.paused].includes(this.status)||!this.cb||(i.length>0&&(this.args=i),this.nextInfo=this.generator(this.execute,...this.args),this.status=s.waiting,this.nextInfo.execute())});t(this,"execute",()=>{this.status=s.working,this.cb?.(this.next)});t(this,"cancel",()=>{this.status=s.canceled,this.nextInfo.cancel?.(),this.cb=void 0});t(this,"pause",()=>{this.status=s.paused,this.nextInfo.pause?.()});t(this,"start",(i,...n)=>{this.cb=i,n.length>0&&(this.args=n),this.next()});t(this,"continue",()=>{this.status=s.initialized,this.next()});this.generator=i,this.status=s.initialized,this.nextInfo=null,this.cb=null}};export{e as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-YFBZPZT4.js.map
