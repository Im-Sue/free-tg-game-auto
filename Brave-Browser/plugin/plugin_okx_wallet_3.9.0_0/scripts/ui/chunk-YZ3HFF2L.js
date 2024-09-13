import{c as _e,m as Oe,o as de}from"./chunk-ICCOEXX5.js";var xe=_e((me,fe)=>{Oe();de();(function(le){"use strict";var Q,Ae=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,se=Math.ceil,X=Math.floor,C="[BigNumber Error] ",we=C+"Number primitive has more than 15 significant digits: ",$=1e14,E=14,oe=9007199254740991,ue=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],Y=1e7,P=1e9;function Ee(O){var N,v,R,p=h.prototype={constructor:h,toString:null,valueOf:null},M=new h(1),_=20,B=4,U=-7,k=21,Z=-1e7,z=1e7,K=!1,ee=1,J=0,ce={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},j="0123456789abcdefghijklmnopqrstuvwxyz";function h(e,r){var i,o,t,l,c,n,f,u,s=this;if(!(s instanceof h))return new h(e,r);if(r==null){if(e&&e._isBigNumber===!0){s.s=e.s,!e.c||e.e>z?s.c=s.e=null:e.e<Z?s.c=[s.e=0]:(s.e=e.e,s.c=e.c.slice());return}if((n=typeof e=="number")&&e*0==0){if(s.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,c=e;c>=10;c/=10,l++);l>z?s.c=s.e=null:(s.e=l,s.c=[e]);return}u=String(e)}else{if(!Ae.test(u=String(e)))return R(s,u,n);s.s=u.charCodeAt(0)==45?(u=u.slice(1),-1):1}(l=u.indexOf("."))>-1&&(u=u.replace(".","")),(c=u.search(/e/i))>0?(l<0&&(l=c),l+=+u.slice(c+1),u=u.substring(0,c)):l<0&&(l=u.length)}else{if(x(r,2,j.length,"Base"),r==10)return s=new h(e),q(s,_+s.e+1,B);if(u=String(e),n=typeof e=="number"){if(e*0!=0)return R(s,u,n,r);if(s.s=1/e<0?(u=u.slice(1),-1):1,h.DEBUG&&u.replace(/^0\.0*|\./,"").length>15)throw Error(we+e)}else s.s=u.charCodeAt(0)===45?(u=u.slice(1),-1):1;for(i=j.slice(0,r),l=c=0,f=u.length;c<f;c++)if(i.indexOf(o=u.charAt(c))<0){if(o=="."){if(c>l){l=f;continue}}else if(!t&&(u==u.toUpperCase()&&(u=u.toLowerCase())||u==u.toLowerCase()&&(u=u.toUpperCase()))){t=!0,c=-1,l=0;continue}return R(s,String(e),n,r)}n=!1,u=v(u,r,10,s.s),(l=u.indexOf("."))>-1?u=u.replace(".",""):l=u.length}for(c=0;u.charCodeAt(c)===48;c++);for(f=u.length;u.charCodeAt(--f)===48;);if(u=u.slice(c,++f)){if(f-=c,n&&h.DEBUG&&f>15&&(e>oe||e!==X(e)))throw Error(we+s.s*e);if((l=l-c-1)>z)s.c=s.e=null;else if(l<Z)s.c=[s.e=0];else{if(s.e=l,s.c=[],c=(l+1)%E,l<0&&(c+=E),c<f){for(c&&s.c.push(+u.slice(0,c)),f-=E;c<f;)s.c.push(+u.slice(c,c+=E));c=E-(u=u.slice(c)).length}else c-=f;for(;c--;u+="0");s.c.push(+u)}}else s.c=[s.e=0]}h.clone=Ee,h.ROUND_UP=0,h.ROUND_DOWN=1,h.ROUND_CEIL=2,h.ROUND_FLOOR=3,h.ROUND_HALF_UP=4,h.ROUND_HALF_DOWN=5,h.ROUND_HALF_EVEN=6,h.ROUND_HALF_CEIL=7,h.ROUND_HALF_FLOOR=8,h.EUCLID=9,h.config=h.set=function(e){var r,i;if(e!=null)if(typeof e=="object"){if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(i=e[r],x(i,0,P,r),_=i),e.hasOwnProperty(r="ROUNDING_MODE")&&(i=e[r],x(i,0,8,r),B=i),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(i=e[r],i&&i.pop?(x(i[0],-P,0,r),x(i[1],0,P,r),U=i[0],k=i[1]):(x(i,-P,P,r),U=-(k=i<0?-i:i))),e.hasOwnProperty(r="RANGE"))if(i=e[r],i&&i.pop)x(i[0],-P,-1,r),x(i[1],1,P,r),Z=i[0],z=i[1];else if(x(i,-P,P,r),i)Z=-(z=i<0?-i:i);else throw Error(C+r+" cannot be zero: "+i);if(e.hasOwnProperty(r="CRYPTO"))if(i=e[r],i===!!i)if(i)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))K=i;else throw K=!i,Error(C+"crypto unavailable");else K=i;else throw Error(C+r+" not true or false: "+i);if(e.hasOwnProperty(r="MODULO_MODE")&&(i=e[r],x(i,0,9,r),ee=i),e.hasOwnProperty(r="POW_PRECISION")&&(i=e[r],x(i,0,P,r),J=i),e.hasOwnProperty(r="FORMAT"))if(i=e[r],typeof i=="object")ce=i;else throw Error(C+r+" not an object: "+i);if(e.hasOwnProperty(r="ALPHABET"))if(i=e[r],typeof i=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(i))j=i;else throw Error(C+r+" invalid: "+i)}else throw Error(C+"Object expected: "+e);return{DECIMAL_PLACES:_,ROUNDING_MODE:B,EXPONENTIAL_AT:[U,k],RANGE:[Z,z],CRYPTO:K,MODULO_MODE:ee,POW_PRECISION:J,FORMAT:ce,ALPHABET:j}},h.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!h.DEBUG)return!0;var r,i,o=e.c,t=e.e,l=e.s;e:if({}.toString.call(o)=="[object Array]"){if((l===1||l===-1)&&t>=-P&&t<=P&&t===X(t)){if(o[0]===0){if(t===0&&o.length===1)return!0;break e}if(r=(t+1)%E,r<1&&(r+=E),String(o[0]).length==r){for(r=0;r<o.length;r++)if(i=o[r],i<0||i>=$||i!==X(i))break e;if(i!==0)return!0}}}else if(o===null&&t===null&&(l===null||l===1||l===-1))return!0;throw Error(C+"Invalid BigNumber: "+e)},h.maximum=h.max=function(){return Ne(arguments,p.lt)},h.minimum=h.min=function(){return Ne(arguments,p.gt)},h.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return X(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(i){var o,t,l,c,n,f=0,u=[],s=new h(M);if(i==null?i=_:x(i,0,P),c=se(i/E),K)if(crypto.getRandomValues){for(o=crypto.getRandomValues(new Uint32Array(c*=2));f<c;)n=o[f]*131072+(o[f+1]>>>11),n>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),o[f]=t[0],o[f+1]=t[1]):(u.push(n%1e14),f+=2);f=c/2}else if(crypto.randomBytes){for(o=crypto.randomBytes(c*=7);f<c;)n=(o[f]&31)*281474976710656+o[f+1]*1099511627776+o[f+2]*4294967296+o[f+3]*16777216+(o[f+4]<<16)+(o[f+5]<<8)+o[f+6],n>=9e15?crypto.randomBytes(7).copy(o,f):(u.push(n%1e14),f+=7);f=c/7}else throw K=!1,Error(C+"crypto unavailable");if(!K)for(;f<c;)n=r(),n<9e15&&(u[f++]=n%1e14);for(c=u[--f],i%=E,c&&i&&(n=ue[E-i],u[f]=X(c/n)*n);u[f]===0;u.pop(),f--);if(f<0)u=[l=0];else{for(l=-1;u[0]===0;u.splice(0,1),l-=E);for(f=1,n=u[0];n>=10;n/=10,f++);f<E&&(l-=E-f)}return s.e=l,s.c=u,s}}(),h.sum=function(){for(var e=1,r=arguments,i=new h(r[0]);e<r.length;)i=i.plus(r[e++]);return i},v=function(){var e="0123456789";function r(i,o,t,l){for(var c,n=[0],f,u=0,s=i.length;u<s;){for(f=n.length;f--;n[f]*=o);for(n[0]+=l.indexOf(i.charAt(u++)),c=0;c<n.length;c++)n[c]>t-1&&(n[c+1]==null&&(n[c+1]=0),n[c+1]+=n[c]/t|0,n[c]%=t)}return n.reverse()}return function(i,o,t,l,c){var n,f,u,s,a,g,w,m,S=i.indexOf("."),T=_,d=B;for(S>=0&&(s=J,J=0,i=i.replace(".",""),m=new h(o),g=m.pow(i.length-S),J=s,m.c=r(V(F(g.c),g.e,"0"),10,t,e),m.e=m.c.length),w=r(i,o,t,c?(n=j,e):(n=e,j)),u=s=w.length;w[--s]==0;w.pop());if(!w[0])return n.charAt(0);if(S<0?--u:(g.c=w,g.e=u,g.s=l,g=N(g,m,T,d,t),w=g.c,a=g.r,u=g.e),f=u+T+1,S=w[f],s=t/2,a=a||f<0||w[f+1]!=null,a=d<4?(S!=null||a)&&(d==0||d==(g.s<0?3:2)):S>s||S==s&&(d==4||a||d==6&&w[f-1]&1||d==(g.s<0?8:7)),f<1||!w[0])i=a?V(n.charAt(1),-T,n.charAt(0)):n.charAt(0);else{if(w.length=f,a)for(--t;++w[--f]>t;)w[f]=0,f||(++u,w=[1].concat(w));for(s=w.length;!w[--s];);for(S=0,i="";S<=s;i+=n.charAt(w[S++]));i=V(i,u,n.charAt(0))}return i}}(),N=function(){function e(o,t,l){var c,n,f,u,s=0,a=o.length,g=t%Y,w=t/Y|0;for(o=o.slice();a--;)f=o[a]%Y,u=o[a]/Y|0,c=w*f+u*g,n=g*f+c%Y*Y+s,s=(n/l|0)+(c/Y|0)+w*u,o[a]=n%l;return s&&(o=[s].concat(o)),o}function r(o,t,l,c){var n,f;if(l!=c)f=l>c?1:-1;else for(n=f=0;n<l;n++)if(o[n]!=t[n]){f=o[n]>t[n]?1:-1;break}return f}function i(o,t,l,c){for(var n=0;l--;)o[l]-=n,n=o[l]<t[l]?1:0,o[l]=n*c+o[l]-t[l];for(;!o[0]&&o.length>1;o.splice(0,1));}return function(o,t,l,c,n){var f,u,s,a,g,w,m,S,T,d,A,D,te,pe,ge,H,re,y=o.s==t.s?1:-1,L=o.c,I=t.c;if(!L||!L[0]||!I||!I[0])return new h(!o.s||!t.s||(L?I&&L[0]==I[0]:!I)?NaN:L&&L[0]==0||!I?y*0:y/0);for(S=new h(y),T=S.c=[],u=o.e-t.e,y=l+u+1,n||(n=$,u=G(o.e/E)-G(t.e/E),y=y/E|0),s=0;I[s]==(L[s]||0);s++);if(I[s]>(L[s]||0)&&u--,y<0)T.push(1),a=!0;else{for(pe=L.length,H=I.length,s=0,y+=2,g=X(n/(I[0]+1)),g>1&&(I=e(I,g,n),L=e(L,g,n),H=I.length,pe=L.length),te=H,d=L.slice(0,H),A=d.length;A<H;d[A++]=0);re=I.slice(),re=[0].concat(re),ge=I[0],I[1]>=n/2&&ge++;do{if(g=0,f=r(I,d,H,A),f<0){if(D=d[0],H!=A&&(D=D*n+(d[1]||0)),g=X(D/ge),g>1)for(g>=n&&(g=n-1),w=e(I,g,n),m=w.length,A=d.length;r(w,d,m,A)==1;)g--,i(w,H<m?re:I,m,n),m=w.length,f=1;else g==0&&(f=g=1),w=I.slice(),m=w.length;if(m<A&&(w=[0].concat(w)),i(d,w,A,n),A=d.length,f==-1)for(;r(I,d,H,A)<1;)g++,i(d,H<A?re:I,A,n),A=d.length}else f===0&&(g++,d=[0]);T[s++]=g,d[0]?d[A++]=L[te]||0:(d=[L[te]],A=1)}while((te++<pe||d[0]!=null)&&y--);a=d[0]!=null,T[0]||T.splice(0,1)}if(n==$){for(s=1,y=T[0];y>=10;y/=10,s++);q(S,l+(S.e=s+u*E-1)+1,c,a)}else S.e=u,S.r=+a;return S}}();function ae(e,r,i,o){var t,l,c,n,f;if(i==null?i=B:x(i,0,8),!e.c)return e.toString();if(t=e.c[0],c=e.e,r==null)f=F(e.c),f=o==1||o==2&&(c<=U||c>=k)?ne(f,c):V(f,c,"0");else if(e=q(new h(e),r,i),l=e.e,f=F(e.c),n=f.length,o==1||o==2&&(r<=l||l<=U)){for(;n<r;f+="0",n++);f=ne(f,l)}else if(r-=c,f=V(f,l,"0"),l+1>n){if(--r>0)for(f+=".";r--;f+="0");}else if(r+=l-n,r>0)for(l+1==n&&(f+=".");r--;f+="0");return e.s<0&&t?"-"+f:f}function Ne(e,r){for(var i,o=1,t=new h(e[0]);o<e.length;o++)if(i=new h(e[o]),i.s)r.call(t,i)&&(t=i);else{t=i;break}return t}function he(e,r,i){for(var o=1,t=r.length;!r[--t];r.pop());for(t=r[0];t>=10;t/=10,o++);return(i=o+i*E-1)>z?e.c=e.e=null:i<Z?e.c=[e.e=0]:(e.e=i,e.c=r),e}R=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,i=/^\.([^.]+)$/,o=/^-?(Infinity|NaN)$/,t=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(l,c,n,f){var u,s=n?c:c.replace(t,"");if(o.test(s))l.s=isNaN(s)?null:s<0?-1:1;else{if(!n&&(s=s.replace(e,function(a,g,w){return u=(w=w.toLowerCase())=="x"?16:w=="b"?2:8,!f||f==u?g:a}),f&&(u=f,s=s.replace(r,"$1").replace(i,"0.$1")),c!=s))return new h(s,u);if(h.DEBUG)throw Error(C+"Not a"+(f?" base "+f:"")+" number: "+c);l.s=null}l.c=l.e=null}}();function q(e,r,i,o){var t,l,c,n,f,u,s,a=e.c,g=ue;if(a){e:{for(t=1,n=a[0];n>=10;n/=10,t++);if(l=r-t,l<0)l+=E,c=r,f=a[u=0],s=f/g[t-c-1]%10|0;else if(u=se((l+1)/E),u>=a.length)if(o){for(;a.length<=u;a.push(0));f=s=0,t=1,l%=E,c=l-E+1}else break e;else{for(f=n=a[u],t=1;n>=10;n/=10,t++);l%=E,c=l-E+t,s=c<0?0:f/g[t-c-1]%10|0}if(o=o||r<0||a[u+1]!=null||(c<0?f:f%g[t-c-1]),o=i<4?(s||o)&&(i==0||i==(e.s<0?3:2)):s>5||s==5&&(i==4||o||i==6&&(l>0?c>0?f/g[t-c]:0:a[u-1])%10&1||i==(e.s<0?8:7)),r<1||!a[0])return a.length=0,o?(r-=e.e+1,a[0]=g[(E-r%E)%E],e.e=-r||0):a[0]=e.e=0,e;if(l==0?(a.length=u,n=1,u--):(a.length=u+1,n=g[E-l],a[u]=c>0?X(f/g[t-c]%g[c])*n:0),o)for(;;)if(u==0){for(l=1,c=a[0];c>=10;c/=10,l++);for(c=a[0]+=n,n=1;c>=10;c/=10,n++);l!=n&&(e.e++,a[0]==$&&(a[0]=1));break}else{if(a[u]+=n,a[u]!=$)break;a[u--]=0,n=1}for(l=a.length;a[--l]===0;a.pop());}e.e>z?e.c=e.e=null:e.e<Z&&(e.c=[e.e=0])}return e}function W(e){var r,i=e.e;return i===null?e.toString():(r=F(e.c),r=i<=U||i>=k?ne(r,i):V(r,i,"0"),e.s<0?"-"+r:r)}return p.absoluteValue=p.abs=function(){var e=new h(this);return e.s<0&&(e.s=1),e},p.comparedTo=function(e,r){return b(this,new h(e,r))},p.decimalPlaces=p.dp=function(e,r){var i,o,t,l=this;if(e!=null)return x(e,0,P),r==null?r=B:x(r,0,8),q(new h(l),e+l.e+1,r);if(!(i=l.c))return null;if(o=((t=i.length-1)-G(this.e/E))*E,t=i[t])for(;t%10==0;t/=10,o--);return o<0&&(o=0),o},p.dividedBy=p.div=function(e,r){return N(this,new h(e,r),_,B)},p.dividedToIntegerBy=p.idiv=function(e,r){return N(this,new h(e,r),0,1)},p.exponentiatedBy=p.pow=function(e,r){var i,o,t,l,c,n,f,u,s,a=this;if(e=new h(e),e.c&&!e.isInteger())throw Error(C+"Exponent not an integer: "+W(e));if(r!=null&&(r=new h(r)),n=e.e>14,!a.c||!a.c[0]||a.c[0]==1&&!a.e&&a.c.length==1||!e.c||!e.c[0])return s=new h(Math.pow(+W(a),n?2-ie(e):+W(e))),r?s.mod(r):s;if(f=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new h(NaN);o=!f&&a.isInteger()&&r.isInteger(),o&&(a=a.mod(r))}else{if(e.e>9&&(a.e>0||a.e<-1||(a.e==0?a.c[0]>1||n&&a.c[1]>=24e7:a.c[0]<8e13||n&&a.c[0]<=9999975e7)))return l=a.s<0&&ie(e)?-0:0,a.e>-1&&(l=1/l),new h(f?1/l:l);J&&(l=se(J/E+2))}for(n?(i=new h(.5),f&&(e.s=1),u=ie(e)):(t=Math.abs(+W(e)),u=t%2),s=new h(M);;){if(u){if(s=s.times(a),!s.c)break;l?s.c.length>l&&(s.c.length=l):o&&(s=s.mod(r))}if(t){if(t=X(t/2),t===0)break;u=t%2}else if(e=e.times(i),q(e,e.e+1,1),e.e>14)u=ie(e);else{if(t=+W(e),t===0)break;u=t%2}a=a.times(a),l?a.c&&a.c.length>l&&(a.c.length=l):o&&(a=a.mod(r))}return o?s:(f&&(s=M.div(s)),r?s.mod(r):l?q(s,J,B,c):s)},p.integerValue=function(e){var r=new h(this);return e==null?e=B:x(e,0,8),q(r,r.e+1,e)},p.isEqualTo=p.eq=function(e,r){return b(this,new h(e,r))===0},p.isFinite=function(){return!!this.c},p.isGreaterThan=p.gt=function(e,r){return b(this,new h(e,r))>0},p.isGreaterThanOrEqualTo=p.gte=function(e,r){return(r=b(this,new h(e,r)))===1||r===0},p.isInteger=function(){return!!this.c&&G(this.e/E)>this.c.length-2},p.isLessThan=p.lt=function(e,r){return b(this,new h(e,r))<0},p.isLessThanOrEqualTo=p.lte=function(e,r){return(r=b(this,new h(e,r)))===-1||r===0},p.isNaN=function(){return!this.s},p.isNegative=function(){return this.s<0},p.isPositive=function(){return this.s>0},p.isZero=function(){return!!this.c&&this.c[0]==0},p.minus=function(e,r){var i,o,t,l,c=this,n=c.s;if(e=new h(e,r),r=e.s,!n||!r)return new h(NaN);if(n!=r)return e.s=-r,c.plus(e);var f=c.e/E,u=e.e/E,s=c.c,a=e.c;if(!f||!u){if(!s||!a)return s?(e.s=-r,e):new h(a?c:NaN);if(!s[0]||!a[0])return a[0]?(e.s=-r,e):new h(s[0]?c:B==3?-0:0)}if(f=G(f),u=G(u),s=s.slice(),n=f-u){for((l=n<0)?(n=-n,t=s):(u=f,t=a),t.reverse(),r=n;r--;t.push(0));t.reverse()}else for(o=(l=(n=s.length)<(r=a.length))?n:r,n=r=0;r<o;r++)if(s[r]!=a[r]){l=s[r]<a[r];break}if(l&&(t=s,s=a,a=t,e.s=-e.s),r=(o=a.length)-(i=s.length),r>0)for(;r--;s[i++]=0);for(r=$-1;o>n;){if(s[--o]<a[o]){for(i=o;i&&!s[--i];s[i]=r);--s[i],s[o]+=$}s[o]-=a[o]}for(;s[0]==0;s.splice(0,1),--u);return s[0]?he(e,s,u):(e.s=B==3?-1:1,e.c=[e.e=0],e)},p.modulo=p.mod=function(e,r){var i,o,t=this;return e=new h(e,r),!t.c||!e.s||e.c&&!e.c[0]?new h(NaN):!e.c||t.c&&!t.c[0]?new h(t):(ee==9?(o=e.s,e.s=1,i=N(t,e,0,3),e.s=o,i.s*=o):i=N(t,e,0,ee),e=t.minus(i.times(e)),!e.c[0]&&ee==1&&(e.s=t.s),e)},p.multipliedBy=p.times=function(e,r){var i,o,t,l,c,n,f,u,s,a,g,w,m,S,T,d=this,A=d.c,D=(e=new h(e,r)).c;if(!A||!D||!A[0]||!D[0])return!d.s||!e.s||A&&!A[0]&&!D||D&&!D[0]&&!A?e.c=e.e=e.s=null:(e.s*=d.s,!A||!D?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(o=G(d.e/E)+G(e.e/E),e.s*=d.s,f=A.length,a=D.length,f<a&&(m=A,A=D,D=m,t=f,f=a,a=t),t=f+a,m=[];t--;m.push(0));for(S=$,T=Y,t=a;--t>=0;){for(i=0,g=D[t]%T,w=D[t]/T|0,c=f,l=t+c;l>t;)u=A[--c]%T,s=A[c]/T|0,n=w*u+s*g,u=g*u+n%T*T+m[l]+i,i=(u/S|0)+(n/T|0)+w*s,m[l--]=u%S;m[l]=i}return i?++o:m.splice(0,1),he(e,m,o)},p.negated=function(){var e=new h(this);return e.s=-e.s||null,e},p.plus=function(e,r){var i,o=this,t=o.s;if(e=new h(e,r),r=e.s,!t||!r)return new h(NaN);if(t!=r)return e.s=-r,o.minus(e);var l=o.e/E,c=e.e/E,n=o.c,f=e.c;if(!l||!c){if(!n||!f)return new h(t/0);if(!n[0]||!f[0])return f[0]?e:new h(n[0]?o:t*0)}if(l=G(l),c=G(c),n=n.slice(),t=l-c){for(t>0?(c=l,i=f):(t=-t,i=n),i.reverse();t--;i.push(0));i.reverse()}for(t=n.length,r=f.length,t-r<0&&(i=f,f=n,n=i,r=t),t=0;r;)t=(n[--r]=n[r]+f[r]+t)/$|0,n[r]=$===n[r]?0:n[r]%$;return t&&(n=[t].concat(n),++c),he(e,n,c)},p.precision=p.sd=function(e,r){var i,o,t,l=this;if(e!=null&&e!==!!e)return x(e,1,P),r==null?r=B:x(r,0,8),q(new h(l),e,r);if(!(i=l.c))return null;if(t=i.length-1,o=t*E+1,t=i[t]){for(;t%10==0;t/=10,o--);for(t=i[0];t>=10;t/=10,o++);}return e&&l.e+1>o&&(o=l.e+1),o},p.shiftedBy=function(e){return x(e,-oe,oe),this.times("1e"+e)},p.squareRoot=p.sqrt=function(){var e,r,i,o,t,l=this,c=l.c,n=l.s,f=l.e,u=_+4,s=new h("0.5");if(n!==1||!c||!c[0])return new h(!n||n<0&&(!c||c[0])?NaN:c?l:1/0);if(n=Math.sqrt(+W(l)),n==0||n==1/0?(r=F(c),(r.length+f)%2==0&&(r+="0"),n=Math.sqrt(+r),f=G((f+1)/2)-(f<0||f%2),n==1/0?r="5e"+f:(r=n.toExponential(),r=r.slice(0,r.indexOf("e")+1)+f),i=new h(r)):i=new h(n+""),i.c[0]){for(f=i.e,n=f+u,n<3&&(n=0);;)if(t=i,i=s.times(t.plus(N(l,t,u,1))),F(t.c).slice(0,n)===(r=F(i.c)).slice(0,n))if(i.e<f&&--n,r=r.slice(n-3,n+1),r=="9999"||!o&&r=="4999"){if(!o&&(q(t,t.e+_+2,0),t.times(t).eq(l))){i=t;break}u+=4,n+=4,o=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&(q(i,i.e+_+2,1),e=!i.times(i).eq(l));break}}return q(i,i.e+_+1,B,e)},p.toExponential=function(e,r){return e!=null&&(x(e,0,P),e++),ae(this,e,r,1)},p.toFixed=function(e,r){return e!=null&&(x(e,0,P),e=e+this.e+1),ae(this,e,r)},p.toFormat=function(e,r,i){var o,t=this;if(i==null)e!=null&&r&&typeof r=="object"?(i=r,r=null):e&&typeof e=="object"?(i=e,e=r=null):i=ce;else if(typeof i!="object")throw Error(C+"Argument not an object: "+i);if(o=t.toFixed(e,r),t.c){var l,c=o.split("."),n=+i.groupSize,f=+i.secondaryGroupSize,u=i.groupSeparator||"",s=c[0],a=c[1],g=t.s<0,w=g?s.slice(1):s,m=w.length;if(f&&(l=n,n=f,f=l,m-=l),n>0&&m>0){for(l=m%n||n,s=w.substr(0,l);l<m;l+=n)s+=u+w.substr(l,n);f>0&&(s+=u+w.slice(l)),g&&(s="-"+s)}o=a?s+(i.decimalSeparator||"")+((f=+i.fractionGroupSize)?a.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(i.fractionGroupSeparator||"")):a):s}return(i.prefix||"")+o+(i.suffix||"")},p.toFraction=function(e){var r,i,o,t,l,c,n,f,u,s,a,g,w=this,m=w.c;if(e!=null&&(n=new h(e),!n.isInteger()&&(n.c||n.s!==1)||n.lt(M)))throw Error(C+"Argument "+(n.isInteger()?"out of range: ":"not an integer: ")+W(n));if(!m)return new h(w);for(r=new h(M),u=i=new h(M),o=f=new h(M),g=F(m),l=r.e=g.length-w.e-1,r.c[0]=ue[(c=l%E)<0?E+c:c],e=!e||n.comparedTo(r)>0?l>0?r:u:n,c=z,z=1/0,n=new h(g),f.c[0]=0;s=N(n,r,0,1),t=i.plus(s.times(o)),t.comparedTo(e)!=1;)i=o,o=t,u=f.plus(s.times(t=u)),f=t,r=n.minus(s.times(t=r)),n=t;return t=N(e.minus(i),o,0,1),f=f.plus(t.times(u)),i=i.plus(t.times(o)),f.s=u.s=w.s,l=l*2,a=N(u,o,l,B).minus(w).abs().comparedTo(N(f,i,l,B).minus(w).abs())<1?[u,o]:[f,i],z=c,a},p.toNumber=function(){return+W(this)},p.toPrecision=function(e,r){return e!=null&&x(e,1,P),ae(this,e,r,2)},p.toString=function(e){var r,i=this,o=i.s,t=i.e;return t===null?o?(r="Infinity",o<0&&(r="-"+r)):r="NaN":(e==null?r=t<=U||t>=k?ne(F(i.c),t):V(F(i.c),t,"0"):e===10?(i=q(new h(i),_+t+1,B),r=V(F(i.c),i.e,"0")):(x(e,2,j.length,"Base"),r=v(V(F(i.c),t,"0"),10,e,o,!0)),o<0&&i.c[0]&&(r="-"+r)),r},p.valueOf=p.toJSON=function(){return W(this)},p._isBigNumber=!0,O!=null&&h.set(O),h}function G(O){var N=O|0;return O>0||O===N?N:N-1}function F(O){for(var N,v,R=1,p=O.length,M=O[0]+"";R<p;){for(N=O[R++]+"",v=E-N.length;v--;N="0"+N);M+=N}for(p=M.length;M.charCodeAt(--p)===48;);return M.slice(0,p+1||1)}function b(O,N){var v,R,p=O.c,M=N.c,_=O.s,B=N.s,U=O.e,k=N.e;if(!_||!B)return null;if(v=p&&!p[0],R=M&&!M[0],v||R)return v?R?0:-B:_;if(_!=B)return _;if(v=_<0,R=U==k,!p||!M)return R?0:!p^v?1:-1;if(!R)return U>k^v?1:-1;for(B=(U=p.length)<(k=M.length)?U:k,_=0;_<B;_++)if(p[_]!=M[_])return p[_]>M[_]^v?1:-1;return U==k?0:U>k^v?1:-1}function x(O,N,v,R){if(O<N||O>v||O!==X(O))throw Error(C+(R||"Argument")+(typeof O=="number"?O<N||O>v?" out of range: ":" not an integer: ":" not a primitive number: ")+String(O))}function ie(O){var N=O.c.length-1;return G(O.e/E)==N&&O.c[N]%2!=0}function ne(O,N){return(O.length>1?O.charAt(0)+"."+O.slice(1):O)+(N<0?"e":"e+")+N}function V(O,N,v){var R,p;if(N<0){for(p=v+".";++N;p+=v);O=p+O}else if(R=O.length,++N>R){for(p=v,N-=R;--N;p+=v);O+=p}else N<R&&(O=O.slice(0,N)+"."+O.slice(N));return O}Q=Ee(),Q.default=Q.BigNumber=Q,typeof define=="function"&&define.amd?define(function(){return Q}):typeof fe<"u"&&fe.exports?fe.exports=Q:(le||(le=typeof self<"u"&&self?self:window),le.BigNumber=Q)})(me)});export{xe as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-YZ3HFF2L.js.map
