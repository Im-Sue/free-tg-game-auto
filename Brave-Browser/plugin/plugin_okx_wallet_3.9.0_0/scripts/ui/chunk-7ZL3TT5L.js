import{h as T}from"./chunk-FFQESTX4.js";import{e as C}from"./chunk-JEZIPKDY.js";import{c as y,h as g}from"./chunk-SR2BDP3A.js";import{c as u}from"./chunk-5JJQQHKZ.js";import{u as A}from"./chunk-ZPOCIBPN.js";import{K as s,Wb as I,la as R,m as N}from"./chunk-M54COW6Q.js";import{f as w,m as p,o as f}from"./chunk-ICCOEXX5.js";p();f();var d=w(N());R();var q=(n,h)=>{let B=T(),a=h??B,l=C(a),i=u(()=>l.find(t=>t.coinId===n?.coinId),[l,n?.coinId])?.childrenCoin??[],o=y(s,a),c=g(s,a);return u(()=>{if(!n||!A(n)||!Array.isArray(i)||!Array.isArray(o)||!o.length)return[];let t=i.filter(r=>r.coinId===+n.coinId).map(r=>({...r})),m=[],e=(0,d.cloneDeep)(t[0]||n),E=t.map(r=>c[r.addressType]);return o.forEach(({address:r,addressType:W})=>{E.includes(r)||(e.address=r,e.addressType=I[s][W],e.coinAmount=0,e.coinAmountInt=0,e.currencyAmount=0,e.currencyAmountUSD=0,m.push((0,d.cloneDeep)(e)))}),t.concat(m).filter(r=>Boolean(c[r.addressType]))},[n,i,o,c])};export{q as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-7ZL3TT5L.js.map
