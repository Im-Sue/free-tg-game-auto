import{a as _}from"./chunk-IR63YTCE.js";import{a as R}from"./chunk-RYJHESAH.js";import{c as y,m as c,n as p,o as d}from"./chunk-ICCOEXX5.js";var N=y(w=>{"use strict";c();d();Object.defineProperty(w,"__esModule",{value:!0})});var j=y(e=>{"use strict";c();d();Object.defineProperty(e,"__esModule",{value:!0});e.EstimateFeeError=e.validSignedTransactionError=e.GetPayLoadError=e.HardwareDerivePubKeyError=e.CalcTxHashError=e.SignMsgStep3Error=e.SignMsgSetupError=e.Ed25519Step3Error=e.Ed25519Step2Error=e.Ed25519Step1Error=e.Ed25519SetupError=e.EcdsaStep3Error=e.EcdsaStep2Error=e.EcdsaStep1Error=e.EcdsaSetupError=e.MPCShakeHandsError=e.MPCStepError=e.MPCAesKeyMissError=e.GetHardWareMessageHashError=e.GetHardwareSignedTransactionError=e.GetHardwareRawTransactionError=e.GetMpcTransactionError=e.GetMpcRawTransactionError=e.DerivePathError=e.GenMnemonicError=e.GenPrivateKeyError=e.UnsupportedCoinError=e.SignMsgError=e.SignTxError=e.ValidAddressError=e.NewAddressError=e.NotImplementedError=void 0;e.NotImplementedError="no implementation method";e.NewAddressError="generate address error";e.ValidAddressError="valid address error";e.SignTxError="sign tx error";e.SignMsgError="sign message error";e.UnsupportedCoinError="unsupported currency";e.GenPrivateKeyError="generate private key error";e.GenMnemonicError="generate mnemonic error";e.DerivePathError="derive hdPath error";e.GetMpcRawTransactionError="get mpc raw transaction error";e.GetMpcTransactionError="get mpc transaction error";e.GetHardwareRawTransactionError="get hardware raw transaction error";e.GetHardwareSignedTransactionError="get hardware signed transaction error";e.GetHardWareMessageHashError="get hardware message hash error";e.MPCAesKeyMissError="mpc get aes key error";e.MPCStepError="mpc step error";e.MPCShakeHandsError="mpc shake hands error";e.EcdsaSetupError="ecdsa setup error";e.EcdsaStep1Error="ecdsa step1 error";e.EcdsaStep2Error="ecdsa step2 error";e.EcdsaStep3Error="ecdsa step3 error";e.Ed25519SetupError="ed25519 setup error";e.Ed25519Step1Error="ed25519 step1 error";e.Ed25519Step2Error="ed25519 step2 error";e.Ed25519Step3Error="ed25519 step3 error";e.SignMsgSetupError="sign message setup error";e.SignMsgStep3Error="sign message step3 error";e.CalcTxHashError="calculate tx hash error";e.HardwareDerivePubKeyError="derive sub pub key error";e.GetPayLoadError="get payload error";e.validSignedTransactionError="valid signed transaction error";e.EstimateFeeError="estimate fee error"});var H=y(P=>{"use strict";c();d();Object.defineProperty(P,"__esModule",{value:!0});P.BaseWallet=P.secp256k1SignTest=void 0;var s=j(),l=_();function K(t){let r=l.base.sha256("secp256k1-test"),n=l.signUtil.secp256k1.publicKeyCreate(t,!1),{signature:i,recovery:o}=l.signUtil.secp256k1.sign(p.Buffer.from(r),t);return l.signUtil.secp256k1.verify(r,i,o,n)}P.secp256k1SignTest=K;var M=class{getRandomPrivateKey(){try{for(;;){let r=l.base.randomBytes(32);if(K(r))return Promise.resolve(l.base.toHex(r,!0))}}catch{}return Promise.reject(s.GenPrivateKeyError)}getDerivedPrivateKey(r){return l.bip39.mnemonicToSeed(r.mnemonic).then(n=>{let i=l.bip32.fromSeed(n).derivePath(r.hdPath);if(i.privateKey){let o=l.base.toHex(i.privateKey);return Promise.resolve("0x"+o)}else return Promise.reject(s.GenPrivateKeyError)}).catch(n=>Promise.reject(s.GenPrivateKeyError))}getDerivedPath(r){return Promise.reject(s.NotImplementedError)}validPrivateKey(r){return Promise.reject(s.NotImplementedError)}signMessage(r){return Promise.reject(s.NotImplementedError)}verifyMessage(r){return Promise.reject(s.NotImplementedError)}ecRecover(r,n){return Promise.reject(s.NotImplementedError)}getAddressByPublicKey(r){return Promise.reject(s.NotImplementedError)}getMPCRawTransaction(r){return Promise.reject(s.NotImplementedError)}getMPCTransaction(r){return Promise.reject(s.NotImplementedError)}getMPCRawMessage(r){return Promise.reject(s.NotImplementedError)}getMPCSignedMessage(r){return Promise.reject(s.NotImplementedError)}getHardWareRawTransaction(r){return Promise.reject(s.NotImplementedError)}getHardWareSignedTransaction(r){return Promise.reject(s.NotImplementedError)}getHardWareMessageHash(r){return Promise.reject(s.NotImplementedError)}calcTxHash(r){return Promise.reject(s.NotImplementedError)}getRawTransaction(r){return Promise.reject(s.NotImplementedError)}validSignedTransaction(r){return Promise.reject(s.NotImplementedError)}estimateFee(r){return Promise.reject(s.NotImplementedError)}};P.BaseWallet=M});var O=y(m=>{"use strict";c();d();Object.defineProperty(m,"__esModule",{value:!0});m.ed25519_getDerivedPrivateKey=m.isValidPath=m.ed25519_getRandomPrivateKey=m.ed25519SignTest=void 0;var a=_();function T(t){let r=a.base.sha256("ed25519-test"),n=a.signUtil.ed25519.publicKeyCreate(t),i=a.signUtil.ed25519.sign(r,t);return a.signUtil.ed25519.verify(r,i,n)}m.ed25519SignTest=T;function U(t,r){for(;;){let n=a.base.randomBytes(32);if(a.signUtil.ed25519.privateKeyVerify(n)&&T(n)){let i=a.signUtil.ed25519.publicKeyCreate(n),o=t?a.base.concatBytes(n,i):n;return r==="base58"?a.base.toBase58(o):a.base.toHex(o)}}}m.ed25519_getRandomPrivateKey=U;var D=new RegExp("^m(\\/[0-9]+')+$"),I=t=>t.replace("'",""),x=2147483648;function q(t){let r=a.base.hmacSHA512("ed25519 seed",t),n=r.slice(0,32),i=r.slice(32);return{key:n,chainCode:i}}function A({key:t,chainCode:r},n){let i=p.Buffer.allocUnsafe(4);i.writeUInt32BE(n,0);let o=p.Buffer.concat([p.Buffer.alloc(1,0),t,i]),b=a.base.hmacSHA512(r,o),E=b.slice(0,32),S=b.slice(32);return{key:E,chainCode:S}}var L=t=>D.test(t)?!t.split("/").slice(1).map(I).some(isNaN):!1;m.isValidPath=L;function V(t,r,n=x){if(!(0,m.isValidPath)(t))throw new Error("Invalid derivation path");let{key:i,chainCode:o}=q(r);return t.split("/").slice(1).map(I).map(E=>parseInt(E,10)).reduce((E,S)=>A(E,S+n),{key:i,chainCode:o})}async function F(t,r,n){let i=await a.bip39.mnemonicToSeed(t.mnemonic),o=V(t.hdPath,i).key,b=a.signUtil.ed25519.publicKeyCreate(o),E=r?a.base.concatBytes(o,b):o;return n==="base58"?Promise.resolve(a.base.toBase58(E)):Promise.resolve(a.base.toHex(E))}m.ed25519_getDerivedPrivateKey=F});var B=y(u=>{"use strict";c();d();Object.defineProperty(u,"__esModule",{value:!0});u.jsonStringifyUniform=u.cloneObject=u.assertBufferLength=u.convert2BigNumber=u.convert2Number=void 0;var h=_();function W(t){if(t!=null)return typeof t=="string"?parseInt(t):t}u.convert2Number=W;function k(t){if(t!=null)return h.BigNumber.isBigNumber(t)?t:new h.BigNumber(t)}u.convert2BigNumber=k;function J(t,r){if(t.length!=r)throw Error("buffer length is illegal")}u.assertBufferLength=J;function $(t){return JSON.parse(JSON.stringify(t))}u.cloneObject=$;function z(t){return JSON.stringify(t,(r,n)=>n&&(n.type==="Buffer"||n instanceof Uint8Array?h.base.toHex(n):typeof n=="bigint"?n.toString():n))}u.jsonStringifyUniform=z});var G=y(f=>{"use strict";c();d();var Q=f&&f.__createBinding||(Object.create?function(t,r,n,i){i===void 0&&(i=n);var o=Object.getOwnPropertyDescriptor(r,n);(!o||("get"in o?!r.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return r[n]}}),Object.defineProperty(t,i,o)}:function(t,r,n,i){i===void 0&&(i=n),t[i]=r[n]}),C=f&&f.__exportStar||function(t,r){for(var n in t)n!=="default"&&!Object.prototype.hasOwnProperty.call(r,n)&&Q(r,t,n)};Object.defineProperty(f,"__esModule",{value:!0});C(O(),f);C(B(),f)});var Y=y(g=>{"use strict";c();d();var X=g&&g.__createBinding||(Object.create?function(t,r,n,i){i===void 0&&(i=n);var o=Object.getOwnPropertyDescriptor(r,n);(!o||("get"in o?!r.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return r[n]}}),Object.defineProperty(t,i,o)}:function(t,r,n,i){i===void 0&&(i=n),t[i]=r[n]}),v=g&&g.__exportStar||function(t,r){for(var n in t)n!=="default"&&!Object.prototype.hasOwnProperty.call(r,n)&&X(r,t,n)};Object.defineProperty(g,"__esModule",{value:!0});v(N(),g);v(R(),g);v(j(),g);v(H(),g);v(G(),g)});export{Y as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-X4YEESEZ.js.map
