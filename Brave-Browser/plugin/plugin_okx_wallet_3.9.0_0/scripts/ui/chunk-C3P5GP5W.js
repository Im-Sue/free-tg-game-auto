import{h as B}from"./chunk-FFQESTX4.js";import{e as y}from"./chunk-JEZIPKDY.js";import{c as C,g as T}from"./chunk-SR2BDP3A.js";import{c as d}from"./chunk-5JJQQHKZ.js";import{t as I}from"./chunk-ZPOCIBPN.js";import{Wb as A,la as O,m as k,q as s}from"./chunk-M54COW6Q.js";import{f as b,m as p,o as f}from"./chunk-ICCOEXX5.js";p();f();var l=b(k());O();var z=(n,g)=>{let h=B(),a=g??h,u=y(a),i=d(()=>u.find(t=>t.coinId===n?.coinId),[u,n?.coinId])?.childrenCoin??[],o=C(s,a),c=T(s,a);return d(()=>{if(!n||!I(n)||!Array.isArray(i)||!Array.isArray(o)||!o.length)return[];let t=i.filter(r=>r.coinId===+n.coinId).map(r=>({...r})),m=[],e=(0,l.cloneDeep)(t[0]||n),W=t.map(r=>c[r.addressType]);return o.forEach(({address:r,addressType:w})=>{W.includes(r)||(e.address=r,e.addressType=A[s][w],e.coinAmount=0,e.coinAmountInt=0,e.currencyAmount=0,m.push((0,l.cloneDeep)(e)))}),t.concat(m).filter(r=>Boolean(c[r.addressType]))},[n,i,o,c])};export{z as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-C3P5GP5W.js.map
