import{a as W}from"./chunk-X4YEESEZ.js";import{a as E}from"./chunk-IR63YTCE.js";import{F as L}from"./chunk-DOQ5NSSP.js";import{c as P,m as l,o as y}from"./chunk-ICCOEXX5.js";var q=P(c=>{"use strict";l();y();Object.defineProperty(c,"__esModule",{value:!0});c.decrypt=c.encrypt=c.decodeBytes=c.nsecFromPrvKey=c.npubEncode=c.nsec=c.nostrHdp=void 0;var o=E();typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);c.nostrHdp="npub";c.nsec="nsec";function J(e){return U("npub",e)}c.npubEncode=J;function X(e){return U("nsec",e)}c.nsecFromPrvKey=X;function U(e,t){return o.base.toBech32(e,o.base.fromHex(t))}function O(e,t){try{let[r,n]=o.base.fromBech32(t);if(e!==r)throw"invalid data";return o.base.toHex(n,!1)}catch(r){throw console.log(r),r}}c.decodeBytes=O;async function Q(e,t,r){if(crypto==null)throw new Error("crypto is null");let n=o.secp256k1.getSharedSecret(O("nsec",e),"02"+o.base.stripHexPrefix(t)),s=z(n),u=Uint8Array.from(o.base.randomBytes(16)),h=o.base.toUtf8(r),j=await crypto.subtle.importKey("raw",s,{name:"AES-CBC"},!1,["encrypt"]),C=await crypto.subtle.encrypt({name:"AES-CBC",iv:u},j,h),A=o.base.toBase64(new Uint8Array(C)),M=o.base.toBase64(new Uint8Array(u.buffer));return`${A}?iv=${M}`}c.encrypt=Q;async function Y(e,t,r){let[n,s]=r.split("?iv="),u=o.secp256k1.getSharedSecret(O("nsec",e),"02"+o.base.stripHexPrefix(t)),h=z(u),j=await crypto.subtle.importKey("raw",h,{name:"AES-CBC"},!1,["decrypt"]),C=o.base.fromBase64(n),A=o.base.fromBase64(s),M=await crypto.subtle.decrypt({name:"AES-CBC",iv:A},j,C);return o.base.fromUtf8(M)}c.decrypt=Y;function z(e){return e.slice(1,33)}});var B=P(v=>{"use strict";l();y();Object.defineProperty(v,"__esModule",{value:!0});v.getPublicKey=v.generatePrivateKey=void 0;var _=E();function K(){return _.base.toHex(_.secp256k1.utils.randomPrivateKey(),!1)}v.generatePrivateKey=K;function ee(e){return _.base.toHex(_.secp256k1.schnorr.getPublicKey(_.base.stripHexPrefix(e)),!1)}v.getPublicKey=ee});var D=P(a=>{"use strict";l();y();Object.defineProperty(a,"__esModule",{value:!0});a.getSignature=a.signEvent=a.verifySignature=a.validateEvent=a.getEventHash=a.serializeEvent=a.finishEvent=a.getBlankEvent=a.Kind=a.verifiedSymbol=void 0;var te=B(),b=E(),F=b.signUtil.schnorr.secp256k1.schnorr;a.verifiedSymbol=Symbol("verified");var I;(function(e){e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.NwcRequest=23194]="NwcRequest",e[e.HttpAuth=27235]="HttpAuth",e[e.ProfileBadge=30008]="ProfileBadge",e[e.BadgeDefinition=30009]="BadgeDefinition",e[e.Article=30023]="Article",e[e.FileMetadata=1063]="FileMetadata"})(I=a.Kind||(a.Kind={}));function re(e=I.Blank){return{kind:e,content:"",tags:[],created_at:0}}a.getBlankEvent=re;function ne(e,t){let r=e;return r.pubkey=(0,te.getPublicKey)(t),r.id=S(r),r.sig=R(r,t),r[a.verifiedSymbol]=!0,r}a.finishEvent=ne;function T(e){if(!V(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}a.serializeEvent=T;function S(e){let t=b.base.sha256(b.base.toUtf8(T(e)));return b.base.toHex(t,!1)}a.getEventHash=S;var ae=e=>e instanceof Object;function V(e){if(!ae(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let r=e.tags[t];if(!Array.isArray(r))return!1;for(let n=0;n<r.length;n++)if(typeof r[n]=="object")return!1}return!0}a.validateEvent=V;function se(e){if(typeof e[a.verifiedSymbol]=="boolean")return e[a.verifiedSymbol];let t=S(e);if(t!==e.id)return e[a.verifiedSymbol]=!1;try{return e[a.verifiedSymbol]=F.verify(e.sig,t,e.pubkey)}catch{return e[a.verifiedSymbol]=!1}}a.verifySignature=se;function ie(e,t){return console.warn("nostr-tools: `signEvent` is deprecated and will be removed or changed in the future. Please use `getSignature` instead."),R(e,b.base.stripHexPrefix(t))}a.signEvent=ie;function R(e,t){return b.base.toHex(F.sign(S(e),b.base.stripHexPrefix(t)),!1)}a.getSignature=R});var G=P(i=>{"use strict";l();y();var ce=i&&i.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var s=Object.getOwnPropertyDescriptor(t,r);(!s||("get"in s?!t.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,s)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),oe=i&&i.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ue=i&&i.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&ce(t,e,r);return oe(t,e),t};Object.defineProperty(i,"__esModule",{value:!0});i.NostrAssetsWallet=i.NewAddressError=i.CryptTextParams=i.nipOpType=void 0;var g=W(),d=E(),f=q(),m=ue(L()),Z=D(),$=B(),N;(function(e){e[e.NIP04_Encrypt=1]="NIP04_Encrypt",e[e.NIP04_Decrypt=2]="NIP04_Decrypt"})(N=i.nipOpType||(i.nipOpType={}));var x=class{constructor(t,r,n){this.type=t,this.pubkey=r,this.text=n}};i.CryptTextParams=x;typeof m<"u"&&!m.subtle&&m.webcrypto&&(m.subtle=m.webcrypto.subtle);i.NewAddressError="generate address error";var k=class extends g.BaseWallet{async getDerivedPath(t){return`m/44'/1237'/${t.index}'/0/0`}getDerivedPrivateKey(t){return d.bip39.mnemonicToSeed(t.mnemonic).then(r=>{let n=d.bip32.fromSeed(r).derivePath(t.hdPath);return n.privateKey?Promise.resolve((0,f.nsecFromPrvKey)(d.base.toHex(n.privateKey,!1))):Promise.reject(g.GenPrivateKeyError)}).catch(r=>Promise.reject(g.GenPrivateKeyError))}getRandomPrivateKey(){try{for(;;){let t=d.base.randomBytes(32);if((0,g.secp256k1SignTest)(t))return Promise.resolve((0,f.nsecFromPrvKey)(d.base.toHex(t,!1)))}}catch{}return Promise.reject(g.GenPrivateKeyError)}async getNewAddress(t){try{let[r,n]=d.base.fromBech32(t.privateKey);if(!(f.nsec==r))return Promise.reject("invalid privateKey");let u=(0,$.getPublicKey)(d.base.toHex(n,!1)),h={address:(0,f.npubEncode)(u),publicKey:u};return Promise.resolve(h)}catch(r){return Promise.reject(r)}}async validPrivateKey(t){let[r,n]=d.base.fromBech32(t.privateKey),u={isValid:f.nsec==r,privateKey:t.privateKey};return Promise.resolve(u)}async validAddress(t){var r=!1;try{let[s,u]=d.base.fromBech32(t.address);r=f.nostrHdp==s}catch(s){console.log(s)}let n={isValid:r,address:t.address};return Promise.resolve(n)}async signTransaction(t){if(t.data instanceof x){let r=t.data;switch(r.type){case N.NIP04_Decrypt:return(0,f.decrypt)(t.privateKey,r.pubkey,r.text);case N.NIP04_Encrypt:return(0,f.encrypt)(t.privateKey,r.pubkey,r.text);default:return Promise.reject(g.NotImplementedError)}}else try{let r=(0,f.decodeBytes)(f.nsec,t.privateKey),n=t.data;return n.pubkey||(n.pubkey=(0,$.getPublicKey)(r)),n.id||(n.id=(0,Z.getEventHash)(n)),n.sig=(0,Z.getSignature)(n,r),Promise.resolve(n)}catch(r){return Promise.reject(r)}}};i.NostrAssetsWallet=k});var ye=P(p=>{l();y();var le=p&&p.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var s=Object.getOwnPropertyDescriptor(t,r);(!s||("get"in s?!t.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,s)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),H=p&&p.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&le(t,e,r)};Object.defineProperty(p,"__esModule",{value:!0});H(G(),p);H(q(),p);H(B(),p);H(D(),p)});export{ye as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-77SMMVZV.js.map
