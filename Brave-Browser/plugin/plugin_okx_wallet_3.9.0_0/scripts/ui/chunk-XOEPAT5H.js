import{e as S}from"./chunk-2TEY7VNJ.js";import{q as h}from"./chunk-RIJWHGTU.js";import{a as f}from"./chunk-CXUPEGDW.js";import{f as I,m as y,o as L}from"./chunk-ICCOEXX5.js";y();L();var p=I(f());var C=({elementName:u,children:e})=>{let m={lastTimestamp:null,charCount:0,paste:!1,result:[]},[{lastTimestamp:a,charCount:o,paste:l,result:n},g]=(0,p.useState)(m),s=t=>{let T=Date.now(),i=null;if(a){let d=T-a,x=t.length-o;d>0&&(i={count:x,duration:d},n.push(i))}g({lastTimestamp:T,charCount:t.length,paste:l,result:t?[...n]:[]})},r=()=>{if(n.length>0&&o!==0&&l){let t=n.reduce((i,d)=>i+d.duration,0);S({e:u,l:o,d:t}),g({lastTimestamp:a,charCount:o,paste:!1,result:n})}},c=()=>{g({lastTimestamp:Date.now(),charCount:o,paste:l,result:n})},P=()=>{g({lastTimestamp:a,charCount:o,paste:!0,result:n})};return p.default.cloneElement(e,{onChange(...t){e.props.onChange&&e.props.onChange(...t),s(typeof t[0]=="string"?t[0]:t[0].target.value)},onBlur(...t){e.props.onBlur&&e.props.onBlur(...t),r()},onFocus(...t){e.props.onFocus&&e.props.onFocus(...t),c()},onPaste(...t){e.props.onPaste&&e.props.onPaste(...t),P()}})};var M=u=>{let{elementName:e,...m}=u;return p.default.createElement(C,{elementName:e},p.default.createElement(h.Password,{...m}))};var j=({elementName:u,children:e})=>{let m={lastTimestamp:null},[{lastTimestamp:a},o]=(0,p.useState)(m),l=()=>{o({lastTimestamp:Date.now()})},n=s=>{let r=Date.now();if(a){let c=r-a;if(c>0&&s){let P={e:u,l:s.length,d:c};S(P)}}o({lastTimestamp:r})};return p.default.cloneElement(e,{onFocus(...s){e.props.onFocus&&e.props.onFocus(...s),l()},onPaste(...s){let r=s[0]?.clipboardData?.getData("text");e.props.onPaste&&e.props.onPaste(...s),n(r)}})},k=C;export{M as a,j as b,k as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-XOEPAT5H.js.map
