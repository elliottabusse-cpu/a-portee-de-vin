(()=>{var Ra="160";var ic=0,Wa=1,sc=2;var _l=1,rc=2,xn=3,Nn=0,yt=1,Ut=2;var Pn=0,Si=1,Ns=2,Xa=3,qa=4,ac=5,Wn=100,oc=101,lc=102,Ya=103,Za=104,cc=200,hc=201,uc=202,dc=203,qr=204,Yr=205,fc=206,pc=207,mc=208,gc=209,_c=210,xc=211,vc=212,yc=213,Mc=214,Sc=0,bc=1,Ec=2,Us=3,Tc=4,Ac=5,wc=6,Rc=7,xl=0,Cc=1,Pc=2,Ln=0,Lc=1,Ic=2,Nc=3,ss=4,Uc=5,Dc=6;var vl=300,Ti=301,Ai=302,Zr=303,Jr=304,sr=306,wi=1e3,tn=1001,$r=1002,It=1003,Ja=1004;var gr=1005;var Wt=1006,Oc=1007;var Ji=1008;var In=1009,Fc=1010,Bc=1011,Ca=1012,yl=1013,Rn=1014,Cn=1015,$i=1016,Ml=1017,Sl=1018,qn=1020,zc=1021,nn=1023,Hc=1024,Vc=1025,Yn=1026,Ri=1027,kc=1028,bl=1029,Gc=1030,El=1031,Tl=1033,_r=33776,xr=33777,vr=33778,yr=33779,$a=35840,Ka=35841,Qa=35842,ja=35843,Al=36196,eo=37492,to=37496,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,co=37815,ho=37816,uo=37817,fo=37818,po=37819,mo=37820,go=37821,Mr=36492,_o=36494,xo=36495,Wc=36283,vo=36284,yo=36285,Mo=36286;var Ds=2300,Os=2301,Sr=2302,So=2400,bo=2401,Eo=2402;var wl=3e3,Zn=3001,Xc=3200,qc=3201,Rl=0,Yc=1,Xt="",et="srgb",yn="srgb-linear",Pa="display-p3",rr="display-p3-linear",Fs="linear",Qe="srgb",Bs="rec709",zs="p3";var ni=7680;var To=519,Zc=512,Jc=513,$c=514,Cl=515,Kc=516,Qc=517,jc=518,eh=519,Ao=35044;var wo="300 es",Kr=1035,vn=2e3,Hs=2001,Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ro=1234567,Xi=Math.PI/180,Ki=180/Math.PI;function Di(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function La(i,e){return(i%e+e)%e}function th(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function nh(i,e,t){return i!==e?(t-i)/(e-i):0}function qi(i,e,t){return(1-t)*i+t*e}function ih(i,e,t,n){return qi(i,e,1-Math.exp(-t*n))}function sh(i,e=1){return e-Math.abs(La(i,e*2)-e)}function rh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ah(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function oh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function lh(i,e){return i+Math.random()*(e-i)}function ch(i){return i*(.5-Math.random())}function hh(i){i!==void 0&&(Ro=i);let e=Ro+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uh(i){return i*Xi}function dh(i){return i*Ki}function Qr(i){return(i&i-1)===0&&i!==0}function fh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ph(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Oi={DEG2RAD:Xi,RAD2DEG:Ki,generateUUID:Di,clamp:lt,euclideanModulo:La,mapLinear:th,inverseLerp:nh,lerp:qi,damp:ih,pingpong:sh,smoothstep:rh,smootherstep:ah,randInt:oh,randFloat:lh,randFloatSpread:ch,seededRandom:hh,degToRad:uh,radToDeg:dh,isPowerOfTwo:Qr,ceilPowerOfTwo:fh,floorPowerOfTwo:Vs,setQuaternionFromProperEuler:ph,normalize:Pt,denormalize:xi},ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],u=s[6],E=s[1],x=s[4],w=s[7],L=s[2],R=s[5],C=s[8];return r[0]=o*_+a*E+l*L,r[3]=o*m+a*x+l*R,r[6]=o*u+a*w+l*C,r[1]=c*_+h*E+d*L,r[4]=c*m+h*x+d*R,r[7]=c*u+h*w+d*C,r[2]=f*_+p*E+g*L,r[5]=f*m+p*x+g*R,r[8]=f*u+p*w+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(br.makeScale(e,t)),this}rotate(e){return this.premultiply(br.makeRotation(-e)),this}translate(e,t){return this.premultiply(br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},br=new He;function Pl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mh(){let i=Qi("canvas");return i.style.display="block",i}var Co={};function Yi(i){i in Co||(Co[i]=!0,console.warn(i))}var Po=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lo=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hs={[yn]:{transfer:Fs,primaries:Bs,toReference:i=>i,fromReference:i=>i},[et]:{transfer:Qe,primaries:Bs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[rr]:{transfer:Fs,primaries:zs,toReference:i=>i.applyMatrix3(Lo),fromReference:i=>i.applyMatrix3(Po)},[Pa]:{transfer:Qe,primaries:zs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Lo),fromReference:i=>i.applyMatrix3(Po).convertLinearToSRGB()}},gh=new Set([yn,rr]),Ze={enabled:!0,_workingColorSpace:yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!gh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=hs[e].toReference,s=hs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return hs[i].primaries},getTransfer:function(i){return i===Xt?Fs:hs[i].transfer}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ii,ks=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=Qi("canvas")),ii.width=e.width,ii.height=e.height;let n=ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_h=0,Gs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tr(s[o].image)):r.push(Tr(s[o]))}else r=Tr(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ks.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xh=0,Ht=class i extends Un{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=tn,s=tn,r=Wt,o=Ji,a=nn,l=In,c=i.DEFAULT_ANISOTROPY,h=Xt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Di(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Zn?et:Xt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===et?Zn:wl}set encoding(e){Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zn?et:Xt}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=vl;Ht.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,w=(p+1)/2,L=(u+1)/2,R=(h+f)/4,C=(d+_)/4,W=(g+m)/4;return x>w&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=C/n):w>L?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=R/s,r=W/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=C/r,s=W/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jr=class extends Un{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Yi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zn?et:Xt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ht(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Gs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends jr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ws=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ea=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==p||h!==g){let m=1-a,u=l*f+c*p+h*g+d*_,E=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let L=Math.sqrt(x),R=Math.atan2(L,u*E);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}let w=a*E;if(l=l*m+f*w,c=c*m+p*w,h=h*m+g*w,d=d*m+_*w,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-a*p,e[t+2]=c*g+h*p+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Io.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ar.copy(this).projectOnVector(e),this.sub(Ar)}reflect(e){return this.sub(Ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ar=new U,Io=new Dn,Jn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(r,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),ds.subVectors(this.max,Vi),si.subVectors(e.a,Vi),ri.subVectors(e.b,Vi),ai.subVectors(e.c,Vi),bn.subVectors(ri,si),En.subVectors(ai,ri),zn.subVectors(si,ai);let t=[0,-bn.z,bn.y,0,-En.z,En.y,0,-zn.z,zn.y,bn.z,0,-bn.x,En.z,0,-En.x,zn.z,0,-zn.x,-bn.y,bn.x,0,-En.y,En.x,0,-zn.y,zn.x,0];return!wr(t,si,ri,ai,ds)||(t=[1,0,0,0,1,0,0,0,1],!wr(t,si,ri,ai,ds))?!1:(fs.crossVectors(bn,En),t=[fs.x,fs.y,fs.z],wr(t,si,ri,ai,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fn=[new U,new U,new U,new U,new U,new U,new U,new U],Kt=new U,us=new Jn,si=new U,ri=new U,ai=new U,bn=new U,En=new U,zn=new U,Vi=new U,ds=new U,fs=new U,Hn=new U;function wr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hn.fromArray(i,r);let a=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var vh=new Jn,ki=new U,Rr=new U,ji=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);let t=ki.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(Rr)),this.expandByPoint(ki.copy(e.center).sub(Rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pn=new U,Cr=new U,ps=new U,Tn=new U,Pr=new U,ms=new U,Lr=new U,Xs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Cr.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(Cr);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ps),a=Tn.dot(this.direction),l=-Tn.dot(ps),c=Tn.lengthSq(),h=Math.abs(1-o*o),d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Cr).addScaledVector(ps,f),p}intersectSphere(e,t){pn.subVectors(e.center,this.origin);let n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,s,r){Pr.subVectors(t,e),ms.subVectors(n,e),Lr.crossVectors(Pr,ms);let o=this.direction.dot(Lr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,e);let l=a*this.direction.dot(ms.crossVectors(Tn,ms));if(l<0)return null;let c=a*this.direction.dot(Pr.cross(Tn));if(c<0||l+c>o)return null;let h=-a*Tn.dot(Lr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class i{constructor(e,t,n,s,r,o,a,l,c,h,d,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,f,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,d,f,p,g,_,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/oi.setFromMatrixColumn(e,0).length(),r=1/oi.setFromMatrixColumn(e,1).length(),o=1/oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,g=c*h,_=c*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,g=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yh,e,Mh)}lookAt(e,t,n){let s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),An.crossVectors(n,Ft),An.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),An.crossVectors(n,Ft)),An.normalize(),gs.crossVectors(Ft,An),s[0]=An.x,s[4]=gs.x,s[8]=Ft.x,s[1]=An.y,s[5]=gs.y,s[9]=Ft.y,s[2]=An.z,s[6]=gs.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],u=n[14],E=n[3],x=n[7],w=n[11],L=n[15],R=s[0],C=s[4],W=s[8],y=s[12],T=s[1],F=s[5],q=s[9],j=s[13],M=s[2],A=s[6],I=s[10],N=s[14],k=s[3],X=s[7],Y=s[11],Z=s[15];return r[0]=o*R+a*T+l*M+c*k,r[4]=o*C+a*F+l*A+c*X,r[8]=o*W+a*q+l*I+c*Y,r[12]=o*y+a*j+l*N+c*Z,r[1]=h*R+d*T+f*M+p*k,r[5]=h*C+d*F+f*A+p*X,r[9]=h*W+d*q+f*I+p*Y,r[13]=h*y+d*j+f*N+p*Z,r[2]=g*R+_*T+m*M+u*k,r[6]=g*C+_*F+m*A+u*X,r[10]=g*W+_*q+m*I+u*Y,r[14]=g*y+_*j+m*N+u*Z,r[3]=E*R+x*T+w*M+L*k,r[7]=E*C+x*F+w*A+L*X,r[11]=E*W+x*q+w*I+L*Y,r[15]=E*y+x*j+w*N+L*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*p-n*l*p)+_*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+t*c*d-t*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+u*(-s*a*h-t*l*d+t*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],E=d*m*c-_*f*c+_*l*p-a*m*p-d*l*u+a*f*u,x=g*f*c-h*m*c-g*l*p+o*m*p+h*l*u-o*f*u,w=h*_*c-g*d*c+g*a*p-o*_*p-h*a*u+o*d*u,L=g*d*l-h*_*l-g*a*f+o*_*f+h*a*m-o*d*m,R=t*E+n*x+s*w+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=E*C,e[1]=(_*f*r-d*m*r-_*s*p+n*m*p+d*s*u-n*f*u)*C,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*u+n*l*u)*C,e[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*p-n*l*p)*C,e[4]=x*C,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*u+t*f*u)*C,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*u-t*l*u)*C,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*C,e[8]=w*C,e[9]=(g*d*r-h*_*r-g*n*p+t*_*p+h*n*u-t*d*u)*C,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*u+t*a*u)*C,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*p-t*a*p)*C,e[12]=L*C,e[13]=(h*_*s-g*d*s+g*n*f-t*_*f-h*n*m+t*d*m)*C,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*C,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,g=r*d,_=o*h,m=o*d,u=a*d,E=l*c,x=l*h,w=l*d,L=n.x,R=n.y,C=n.z;return s[0]=(1-(_+u))*L,s[1]=(p+w)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(p-w)*R,s[5]=(1-(f+u))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+x)*C,s[9]=(m-E)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=oi.set(s[0],s[1],s[2]).length(),o=oi.set(s[4],s[5],s[6]).length(),a=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qt.copy(this);let c=1/r,h=1/o,d=1/a;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=h,Qt.elements[5]*=h,Qt.elements[6]*=h,Qt.elements[8]*=d,Qt.elements[9]*=d,Qt.elements[10]*=d,t.setFromRotationMatrix(Qt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=vn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(a===vn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Hs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=vn){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(o-r),f=(t+e)*c,p=(n+s)*h,g,_;if(a===vn)g=(o+r)*d,_=-2*d;else if(a===Hs)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},oi=new U,Qt=new ct,yh=new U(0,0,0),Mh=new U(1,1,1),An=new U,gs=new U,Ft=new U,No=new ct,Uo=new Dn,qs=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return No.makeRotationFromQuaternion(e),this.setFromRotationMatrix(No,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qs.DEFAULT_ORDER="XYZ";var es=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sh=0,Do=new U,li=new Dn,mn=new ct,_s=new U,Gi=new U,bh=new U,Eh=new Dn,Oo=new U(1,0,0),Fo=new U(0,1,0),Bo=new U(0,0,1),Th={type:"added"},Ah={type:"removed"},Nt=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new qs,n=new Dn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new He}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(Oo,e)}rotateY(e){return this.rotateOnAxis(Fo,e)}rotateZ(e){return this.rotateOnAxis(Bo,e)}translateOnAxis(e,t){return Do.copy(e).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oo,e)}translateY(e){return this.translateOnAxis(Fo,e)}translateZ(e){return this.translateOnAxis(Bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_s.copy(e):_s.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Gi,_s,this.up):mn.lookAt(_s,Gi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),li.setFromRotationMatrix(mn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Th)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ah)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Eh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new U(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=new U,gn=new U,Ir=new U,_n=new U,ci=new U,hi=new U,zo=new U,Nr=new U,Ur=new U,Dr=new U,xs=!1,vi=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jt.subVectors(e,t),s.cross(jt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jt.subVectors(s,t),gn.subVectors(n,t),Ir.subVectors(e,t);let o=jt.dot(jt),a=jt.dot(gn),l=jt.dot(Ir),c=gn.dot(gn),h=gn.dot(Ir),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,n,s,r,o,a,l){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l)}static isFrontFacing(e,t,n,s){return jt.subVectors(n,t),gn.subVectors(e,t),jt.cross(gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),jt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ci.subVectors(s,n),hi.subVectors(r,n),Nr.subVectors(e,n);let l=ci.dot(Nr),c=hi.dot(Nr);if(l<=0&&c<=0)return t.copy(n);Ur.subVectors(e,s);let h=ci.dot(Ur),d=hi.dot(Ur);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ci,o);Dr.subVectors(e,r);let p=ci.dot(Dr),g=hi.dot(Dr);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(hi,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return zo.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(zo,a);let u=1/(m+_+f);return o=_*u,a=f*u,t.copy(n).addScaledVector(ci,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Or(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=La(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Or(o,r,e+1/3),this.g=Or(o,r,e),this.b=Or(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){let n=Ll[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return Ze.fromWorkingColorSpace(Tt.copy(this),e),Math.round(lt(Tt.r*255,0,255))*65536+Math.round(lt(Tt.g*255,0,255))*256+Math.round(lt(Tt.b*255,0,255))}getHexString(e=et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Tt.copy(this),t);let n=Tt.r,s=Tt.g,r=Tt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=et){Ze.fromWorkingColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,s=Tt.b;return e!==et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(vs);let n=qi(wn.h,vs.h,t),s=qi(wn.s,vs.s,t),r=qi(wn.l,vs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new Te;Te.NAMES=Ll;var wh=0,$n=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Si,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Yr,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=To,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==To&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ot=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var at=new U,ys=new ge,qt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ao&&(e.usage=this.usage),e}};var Ys=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zs=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Rh=0,Gt=new ct,Fr=new Nt,ui=new U,Bt=new Jn,Wi=new Jn,mt=new U,hn=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pl(e)?Zs:Ys)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Wi.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Bt.min,Wi.min),Bt.expandByPoint(mt),mt.addVectors(Bt.max,Wi.max),Bt.expandByPoint(mt)):(Bt.expandByPoint(Wi.min),Bt.expandByPoint(Wi.max))}Bt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)mt.fromBufferAttribute(a,c),l&&(ui.fromBufferAttribute(e,c),mt.add(ui)),s=Math.max(s,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new U,h[T]=new U;let d=new U,f=new U,p=new U,g=new ge,_=new ge,m=new ge,u=new U,E=new U;function x(T,F,q){d.fromArray(s,T*3),f.fromArray(s,F*3),p.fromArray(s,q*3),g.fromArray(o,T*2),_.fromArray(o,F*2),m.fromArray(o,q*2),f.sub(d),p.sub(d),_.sub(g),m.sub(g);let j=1/(_.x*m.y-m.x*_.y);isFinite(j)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(j),E.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(j),c[T].add(u),c[F].add(u),c[q].add(u),h[T].add(E),h[F].add(E),h[q].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let T=0,F=w.length;T<F;++T){let q=w[T],j=q.start,M=q.count;for(let A=j,I=j+M;A<I;A+=3)x(n[A+0],n[A+1],n[A+2])}let L=new U,R=new U,C=new U,W=new U;function y(T){C.fromArray(r,T*3),W.copy(C);let F=c[T];L.copy(F),L.sub(C.multiplyScalar(C.dot(F))).normalize(),R.crossVectors(W,F);let j=R.dot(h[T])<0?-1:1;l[T*4]=L.x,l[T*4+1]=L.y,l[T*4+2]=L.z,l[T*4+3]=j}for(let T=0,F=w.length;T<F;++T){let q=w[T],j=q.start,M=q.count;for(let A=j,I=j+M;A<I;A+=3)y(n[A+0]),y(n[A+1]),y(n[A+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new qt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ho=new ct,Vn=new Xs,Ms=new ji,Vo=new U,di=new U,fi=new U,pi=new U,Br=new U,Ss=new U,bs=new ge,Es=new ge,Ts=new ge,ko=new U,Go=new U,Wo=new U,As=new U,ws=new U,Ne=class extends Nt{constructor(e=new hn,t=new ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Br.fromBufferAttribute(d,e),o?Ss.addScaledVector(Br,h):Ss.addScaledVector(Br.sub(t),h))}t.add(Ss)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),!(Ms.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Ms,Vo)===null||Vn.origin.distanceToSquared(Vo)>(e.far-e.near)**2))&&(Ho.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(Ho),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],u=o[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=E,L=x;w<L;w+=3){let R=a.getX(w),C=a.getX(w+1),W=a.getX(w+2);s=Rs(this,u,e,n,c,h,d,R,C,W),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){let E=a.getX(m),x=a.getX(m+1),w=a.getX(m+2);s=Rs(this,o,e,n,c,h,d,E,x,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],u=o[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=E,L=x;w<L;w+=3){let R=w,C=w+1,W=w+2;s=Rs(this,u,e,n,c,h,d,R,C,W),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){let E=m,x=m+1,w=m+2;s=Rs(this,o,e,n,c,h,d,E,x,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ch(i,e,t,n,s,r,o,a){let l;if(e.side===yt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Nn,a),l===null)return null;ws.copy(a),ws.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ws);return c<t.near||c>t.far?null:{distance:c,point:ws.clone(),object:i}}function Rs(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,di),i.getVertexPosition(l,fi),i.getVertexPosition(c,pi);let h=Ch(i,e,t,n,di,fi,pi,As);if(h){s&&(bs.fromBufferAttribute(s,a),Es.fromBufferAttribute(s,l),Ts.fromBufferAttribute(s,c),h.uv=vi.getInterpolation(As,di,fi,pi,bs,Es,Ts,new ge)),r&&(bs.fromBufferAttribute(r,a),Es.fromBufferAttribute(r,l),Ts.fromBufferAttribute(r,c),h.uv1=vi.getInterpolation(As,di,fi,pi,bs,Es,Ts,new ge),h.uv2=h.uv1),o&&(ko.fromBufferAttribute(o,a),Go.fromBufferAttribute(o,l),Wo.fromBufferAttribute(o,c),h.normal=vi.getInterpolation(As,di,fi,pi,ko,Go,Wo,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};vi.getNormal(di,fi,pi,d.normal),h.face=d}return h}var At=class i extends hn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2));function g(_,m,u,E,x,w,L,R,C,W,y){let T=w/C,F=L/W,q=w/2,j=L/2,M=R/2,A=C+1,I=W+1,N=0,k=0,X=new U;for(let Y=0;Y<I;Y++){let Z=Y*F-j;for(let re=0;re<A;re++){let G=re*T-q;X[_]=G*E,X[m]=Z*x,X[u]=M,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[u]=R>0?1:-1,h.push(X.x,X.y,X.z),d.push(re/C),d.push(1-Y/W),N+=1}}for(let Y=0;Y<W;Y++)for(let Z=0;Z<C;Z++){let re=f+Z+A*Y,G=f+Z+A*(Y+1),J=f+(Z+1)+A*(Y+1),oe=f+(Z+1)+A*Y;l.push(re,G,oe),l.push(G,J,oe),k+=6}a.addGroup(p,k,y),p+=k,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ci(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){let e={};for(let t=0;t<i.length;t++){let n=Ci(i[t]);for(let s in n)e[s]=n[s]}return e}function Ph(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Il(i){return i.getRenderTarget()===null?i.outputColorSpace:Ze.workingColorSpace}var Lh={clone:Ci,merge:Lt},Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ih,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=Ph(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Js=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vt=class extends Js{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mi=-90,gi=1,ta=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vt(mi,gi,e,t);s.layers=this.layers,this.add(s);let r=new vt(mi,gi,e,t);r.layers=this.layers,this.add(r);let o=new vt(mi,gi,e,t);o.layers=this.layers,this.add(o);let a=new vt(mi,gi,e,t);a.layers=this.layers,this.add(a);let l=new vt(mi,gi,e,t);l.layers=this.layers,this.add(l);let c=new vt(mi,gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$s=class extends Ht{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},na=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Yi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zn?et:Xt),this.texture=new $s(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new At(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:Pn});r.uniforms.tEquirect.value=t;let o=new Ne(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Wt),new ta(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},zr=new U,Uh=new U,Dh=new He,en=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zr.subVectors(n,t).cross(Uh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(zr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dh.getNormalMatrix(e),s=this.coplanarPoint(zr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},kn=new ji,Cs=new U,ts=class{constructor(e=new en,t=new en,n=new en,s=new en,r=new en,o=new en){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],u=s[12],E=s[13],x=s[14],w=s[15];if(n[0].setComponents(l-r,f-c,m-p,w-u).normalize(),n[1].setComponents(l+r,f+c,m+p,w+u).normalize(),n[2].setComponents(l+o,f+h,m+g,w+E).normalize(),n[3].setComponents(l-o,f-h,m-g,w-E).normalize(),n[4].setComponents(l-a,f-d,m-_,w-x).normalize(),t===vn)n[5].setComponents(l+a,f+d,m+_,w+x).normalize();else if(t===Hs)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Cs.x=s.normal.x>0?e.max.x:e.min.x,Cs.y=s.normal.y>0?e.max.y:e.min.y,Cs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Oh(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,f=c.usage,p=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,d){let f=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),p.count===-1&&g.length===0&&i.bufferSubData(d,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let u=g[_];t?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var Mt=class i extends hn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){let E=u*f-o;for(let x=0;x<c;x++){let w=x*d-r;g.push(w,-E,0),_.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){let x=E+c*u,w=E+c*(u+1),L=E+1+c*(u+1),R=E+1+c*u;p.push(x,w,R),p.push(w,L,R)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$h=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,au=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ou=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",pu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_u=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Du=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ou=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ud=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Md=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Td=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$d=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ff=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Fh,alphahash_pars_fragment:Bh,alphamap_fragment:zh,alphamap_pars_fragment:Hh,alphatest_fragment:Vh,alphatest_pars_fragment:kh,aomap_fragment:Gh,aomap_pars_fragment:Wh,batching_pars_vertex:Xh,batching_vertex:qh,begin_vertex:Yh,beginnormal_vertex:Zh,bsdfs:Jh,iridescence_fragment:$h,bumpmap_pars_fragment:Kh,clipping_planes_fragment:Qh,clipping_planes_pars_fragment:jh,clipping_planes_pars_vertex:eu,clipping_planes_vertex:tu,color_fragment:nu,color_pars_fragment:iu,color_pars_vertex:su,color_vertex:ru,common:au,cube_uv_reflection_fragment:ou,defaultnormal_vertex:lu,displacementmap_pars_vertex:cu,displacementmap_vertex:hu,emissivemap_fragment:uu,emissivemap_pars_fragment:du,colorspace_fragment:fu,colorspace_pars_fragment:pu,envmap_fragment:mu,envmap_common_pars_fragment:gu,envmap_pars_fragment:_u,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Pu,envmap_vertex:vu,fog_vertex:yu,fog_pars_vertex:Mu,fog_fragment:Su,fog_pars_fragment:bu,gradientmap_pars_fragment:Eu,lightmap_fragment:Tu,lightmap_pars_fragment:Au,lights_lambert_fragment:wu,lights_lambert_pars_fragment:Ru,lights_pars_begin:Cu,lights_toon_fragment:Lu,lights_toon_pars_fragment:Iu,lights_phong_fragment:Nu,lights_phong_pars_fragment:Uu,lights_physical_fragment:Du,lights_physical_pars_fragment:Ou,lights_fragment_begin:Fu,lights_fragment_maps:Bu,lights_fragment_end:zu,logdepthbuf_fragment:Hu,logdepthbuf_pars_fragment:Vu,logdepthbuf_pars_vertex:ku,logdepthbuf_vertex:Gu,map_fragment:Wu,map_pars_fragment:Xu,map_particle_fragment:qu,map_particle_pars_fragment:Yu,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:Ju,morphcolor_vertex:$u,morphnormal_vertex:Ku,morphtarget_pars_vertex:Qu,morphtarget_vertex:ju,normal_fragment_begin:ed,normal_fragment_maps:td,normal_pars_fragment:nd,normal_pars_vertex:id,normal_vertex:sd,normalmap_pars_fragment:rd,clearcoat_normal_fragment_begin:ad,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ld,iridescence_pars_fragment:cd,opaque_fragment:hd,packing:ud,premultiplied_alpha_fragment:dd,project_vertex:fd,dithering_fragment:pd,dithering_pars_fragment:md,roughnessmap_fragment:gd,roughnessmap_pars_fragment:_d,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:vd,shadowmap_vertex:yd,shadowmask_pars_fragment:Md,skinbase_vertex:Sd,skinning_pars_vertex:bd,skinning_vertex:Ed,skinnormal_vertex:Td,specularmap_fragment:Ad,specularmap_pars_fragment:wd,tonemapping_fragment:Rd,tonemapping_pars_fragment:Cd,transmission_fragment:Pd,transmission_pars_fragment:Ld,uv_pars_fragment:Id,uv_pars_vertex:Nd,uv_vertex:Ud,worldpos_vertex:Dd,background_vert:Od,background_frag:Fd,backgroundCube_vert:Bd,backgroundCube_frag:zd,cube_vert:Hd,cube_frag:Vd,depth_vert:kd,depth_frag:Gd,distanceRGBA_vert:Wd,distanceRGBA_frag:Xd,equirect_vert:qd,equirect_frag:Yd,linedashed_vert:Zd,linedashed_frag:Jd,meshbasic_vert:$d,meshbasic_frag:Kd,meshlambert_vert:Qd,meshlambert_frag:jd,meshmatcap_vert:ef,meshmatcap_frag:tf,meshnormal_vert:nf,meshnormal_frag:sf,meshphong_vert:rf,meshphong_frag:af,meshphysical_vert:of,meshphysical_frag:lf,meshtoon_vert:cf,meshtoon_frag:hf,points_vert:uf,points_frag:df,shadow_vert:ff,shadow_frag:pf,sprite_vert:mf,sprite_frag:gf},ne={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},cn={basic:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Te(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Lt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Lt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Te(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Lt([ne.points,ne.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Lt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Lt([ne.common,ne.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Lt([ne.sprite,ne.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Lt([ne.common,ne.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Lt([ne.lights,ne.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};cn.physical={uniforms:Lt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var Ps={r:0,b:0,g:0};function _f(i,e,t,n,s,r,o){let a=new Te(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(m,u){let E=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===sr)?(h===void 0&&(h=new Ne(new At(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Ci(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(x.colorSpace)!==Qe,(d!==x||f!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ne(new Mt(2,2),new sn({name:"BackgroundMaterial",uniforms:Ci(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,u){m.getRGB(Ps,Il(i)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function xf(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function d(M,A,I,N,k){let X=!1;if(o){let Y=_(N,I,A);c!==Y&&(c=Y,p(c.object)),X=u(M,N,I,k),X&&E(M,N,I,k)}else{let Y=A.wireframe===!0;(c.geometry!==N.id||c.program!==I.id||c.wireframe!==Y)&&(c.geometry=N.id,c.program=I.id,c.wireframe=Y,X=!0)}k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,W(M,A,I,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(M){return n.isWebGL2?i.bindVertexArray(M):r.bindVertexArrayOES(M)}function g(M){return n.isWebGL2?i.deleteVertexArray(M):r.deleteVertexArrayOES(M)}function _(M,A,I){let N=I.wireframe===!0,k=a[M.id];k===void 0&&(k={},a[M.id]=k);let X=k[A.id];X===void 0&&(X={},k[A.id]=X);let Y=X[N];return Y===void 0&&(Y=m(f()),X[N]=Y),Y}function m(M){let A=[],I=[],N=[];for(let k=0;k<s;k++)A[k]=0,I[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:N,object:M,attributes:{},index:null}}function u(M,A,I,N){let k=c.attributes,X=A.attributes,Y=0,Z=I.getAttributes();for(let re in Z)if(Z[re].location>=0){let J=k[re],oe=X[re];if(oe===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),J===void 0||J.attribute!==oe||oe&&J.data!==oe.data)return!0;Y++}return c.attributesNum!==Y||c.index!==N}function E(M,A,I,N){let k={},X=A.attributes,Y=0,Z=I.getAttributes();for(let re in Z)if(Z[re].location>=0){let J=X[re];J===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));let oe={};oe.attribute=J,J&&J.data&&(oe.data=J.data),k[re]=oe,Y++}c.attributes=k,c.attributesNum=Y,c.index=N}function x(){let M=c.newAttributes;for(let A=0,I=M.length;A<I;A++)M[A]=0}function w(M){L(M,0)}function L(M,A){let I=c.newAttributes,N=c.enabledAttributes,k=c.attributeDivisors;I[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),k[M]!==A&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](M,A),k[M]=A)}function R(){let M=c.newAttributes,A=c.enabledAttributes;for(let I=0,N=A.length;I<N;I++)A[I]!==M[I]&&(i.disableVertexAttribArray(I),A[I]=0)}function C(M,A,I,N,k,X,Y){Y===!0?i.vertexAttribIPointer(M,A,I,k,X):i.vertexAttribPointer(M,A,I,N,k,X)}function W(M,A,I,N){if(n.isWebGL2===!1&&(M.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let k=N.attributes,X=I.getAttributes(),Y=A.defaultAttributeValues;for(let Z in X){let re=X[Z];if(re.location>=0){let G=k[Z];if(G===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(G=M.instanceColor)),G!==void 0){let J=G.normalized,oe=G.itemSize,fe=t.get(G);if(fe===void 0)continue;let de=fe.buffer,Ae=fe.type,Re=fe.bytesPerElement,ye=n.isWebGL2===!0&&(Ae===i.INT||Ae===i.UNSIGNED_INT||G.gpuType===yl);if(G.isInterleavedBufferAttribute){let ke=G.data,O=ke.stride,xt=G.offset;if(ke.isInstancedInterleavedBuffer){for(let _e=0;_e<re.locationSize;_e++)L(re.location+_e,ke.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let _e=0;_e<re.locationSize;_e++)w(re.location+_e);i.bindBuffer(i.ARRAY_BUFFER,de);for(let _e=0;_e<re.locationSize;_e++)C(re.location+_e,oe/re.locationSize,Ae,J,O*Re,(xt+oe/re.locationSize*_e)*Re,ye)}else{if(G.isInstancedBufferAttribute){for(let ke=0;ke<re.locationSize;ke++)L(re.location+ke,G.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ke=0;ke<re.locationSize;ke++)w(re.location+ke);i.bindBuffer(i.ARRAY_BUFFER,de);for(let ke=0;ke<re.locationSize;ke++)C(re.location+ke,oe/re.locationSize,Ae,J,oe*Re,oe/re.locationSize*ke*Re,ye)}}else if(Y!==void 0){let J=Y[Z];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(re.location,J);break;case 3:i.vertexAttrib3fv(re.location,J);break;case 4:i.vertexAttrib4fv(re.location,J);break;default:i.vertexAttrib1fv(re.location,J)}}}}R()}function y(){q();for(let M in a){let A=a[M];for(let I in A){let N=A[I];for(let k in N)g(N[k].object),delete N[k];delete A[I]}delete a[M]}}function T(M){if(a[M.id]===void 0)return;let A=a[M.id];for(let I in A){let N=A[I];for(let k in N)g(N[k].object),delete N[k];delete A[I]}delete a[M.id]}function F(M){for(let A in a){let I=a[A];if(I[M.id]===void 0)continue;let N=I[M.id];for(let k in N)g(N[k].object),delete N[k];delete I[M.id]}}function q(){j(),h=!0,c!==l&&(c=l,p(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:j,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:w,disableUnusedAttributes:R}}function vf(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,d,f),t.update(d,r,f)}function c(h,d,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function yf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,w=o||e.has("OES_texture_float"),L=x&&w,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:L,maxSamples:R}}function Mf(i){let e=this,t=null,n=0,s=!1,r=!1,o=new en,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,x=E*4,w=u.clippingState||null;l.value=w,w=h(g,f,x,p);for(let L=0;L!==x;++L)w[L]=t[L];u.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let u=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,w=p;x!==_;++x,w+=4)o.copy(d[x]).applyMatrix4(E,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Sf(i){let e=new WeakMap;function t(o,a){return a===Zr?o.mapping=Ti:a===Jr&&(o.mapping=Ai),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Zr||a===Jr)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new na(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ks=class extends Js{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yi=4,Xo=[.125,.215,.35,.446,.526,.582],Xn=20,Hr=new Ks,qo=new Te,Vr=null,kr=0,Gr=0,Gn=(1+Math.sqrt(5))/2,_i=1/Gn,Yo=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Gn,_i),new U(0,Gn,-_i),new U(_i,0,Gn),new U(-_i,0,Gn),new U(Gn,_i,0),new U(-Gn,_i,0)],Kn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Vr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vr,kr,Gr),e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:$i,format:nn,colorSpace:yn,depthBuffer:!1},s=Zo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bf(r)),this._blurMaterial=Ef(r,e,t)}return s}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,n,s){let a=new vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(qo),h.toneMapping=Ln,h.autoClear=!1;let p=new ot({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),g=new Ne(new At,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(qo),_=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):E===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let x=this._cubeSize;Ls(s,E*x,u>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ti||e.mapping===Ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Hr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Yo[(s-1)%Yo.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ne(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Xn;m>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);let u=[],E=0;for(let C=0;C<Xn;++C){let W=C/_,y=Math.exp(-W*W/2);u.push(y),C===0?E+=y:C<m&&(E+=2*y)}for(let C=0;C<u.length;C++)u[C]=u[C]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let w=this._sizeLods[s],L=3*w*(s>x-yi?s-x+yi:0),R=4*(this._cubeSize-w);Ls(t,L,R,3*w,2*w),l.setRenderTarget(t),l.render(d,Hr)}};function bf(i){let e=[],t=[],n=[],s=i,r=i-yi+1+Xo.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-yi?l=Xo[o-i+yi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,E=new Float32Array(_*g*p),x=new Float32Array(m*g*p),w=new Float32Array(u*g*p);for(let R=0;R<p;R++){let C=R%3*2/3-1,W=R>2?0:-1,y=[C,W,0,C+2/3,W,0,C+2/3,W+1,0,C,W,0,C+2/3,W+1,0,C,W+1,0];E.set(y,_*g*R),x.set(f,m*g*R);let T=[R,R,R,R,R,R];w.set(T,u*g*R)}let L=new hn;L.setAttribute("position",new qt(E,_)),L.setAttribute("uv",new qt(x,m)),L.setAttribute("faceIndex",new qt(w,u)),e.push(L),s>yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zo(i,e,t){let n=new Mn(i,e,t);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ef(i,e,t){let n=new Float32Array(Xn),s=new U(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Jo(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function $o(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Zr||l===Jr,h=l===Ti||l===Ai;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Kn(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Kn(i));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Af(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wf(i,e,t,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let _=p[g];for(let m=0,u=_.length;m<u;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let x=0,w=E.length;x<w;x+=3){let L=E[x+0],R=E[x+1],C=E[x+2];f.push(L,R,R,C,C,L)}}else if(g!==void 0){let E=g.array;_=g.version;for(let x=0,w=E.length/3-1;x<w;x+=3){let L=x+0,R=x+1,C=x+2;f.push(L,R,R,C,C,L)}}else return;let m=new(Pl(f)?Zs:Ys)(f,1);m.version=_;let u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Rf(i,e,t,n){let s=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*l),t.update(g,r,1)}function d(p,g,_){if(_===0)return;let m,u;if(s)m=i,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](r,g,a,p*l,_),t.update(g,r,_)}function f(p,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<_;u++)this.render(p[u]/l,g[u]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let u=0;for(let E=0;E<_;E++)u+=g[E];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Cf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pf(i,e){return i[0]-e[0]}function Lf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function If(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let M=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",M)};_!==void 0&&_.texture.dispose();let E=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],W=0;E===!0&&(W=1),x===!0&&(W=2),w===!0&&(W=3);let y=h.attributes.position.count*W,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let F=new Float32Array(y*T*4*g),q=new Ws(F,y,T,g);q.type=Cn,q.needsUpdate=!0;let j=W*4;for(let A=0;A<g;A++){let I=L[A],N=R[A],k=C[A],X=y*T*4*A;for(let Y=0;Y<I.count;Y++){let Z=Y*j;E===!0&&(o.fromBufferAttribute(I,Y),F[X+Z+0]=o.x,F[X+Z+1]=o.y,F[X+Z+2]=o.z,F[X+Z+3]=0),x===!0&&(o.fromBufferAttribute(N,Y),F[X+Z+4]=o.x,F[X+Z+5]=o.y,F[X+Z+6]=o.z,F[X+Z+7]=0),w===!0&&(o.fromBufferAttribute(k,Y),F[X+Z+8]=o.x,F[X+Z+9]=o.y,F[X+Z+10]=o.z,F[X+Z+11]=k.itemSize===4?o.w:1)}}_={count:g,texture:q,size:new ge(y,T)},r.set(h,_),h.addEventListener("dispose",M)}let m=0;for(let E=0;E<f.length;E++)m+=f[E];let u=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let p=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<p;x++){let w=g[x];w[0]=x,w[1]=f[x]}g.sort(Lf);for(let x=0;x<8;x++)x<p&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Pf);let _=h.morphAttributes.position,m=h.morphAttributes.normal,u=0;for(let x=0;x<8;x++){let w=a[x],L=w[0],R=w[1];L!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+x)!==_[L]&&h.setAttribute("morphTarget"+x,_[L]),m&&h.getAttribute("morphNormal"+x)!==m[L]&&h.setAttribute("morphNormal"+x,m[L]),s[x]=R,u+=R):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let E=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Nf(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Qs=class extends Ht{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Yn,h!==Yn&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yn&&(n=Rn),n===void 0&&h===Ri&&(n=qn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ul=new Ht,Dl=new Qs(1,1);Dl.compareFunction=Cl;var Ol=new Ws,Fl=new ea,Bl=new $s,Ko=[],Qo=[],jo=new Float32Array(16),el=new Float32Array(9),tl=new Float32Array(4);function Fi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ko[s];if(r===void 0&&(r=new Float32Array(s),Ko[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ar(i,e){let t=Qo[e];t===void 0&&(t=new Int32Array(e),Qo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Uf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Df(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),ut(t,e)}}function Of(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),ut(t,e)}}function Ff(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),ut(t,e)}}function Bf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;tl.set(n),i.uniformMatrix2fv(this.addr,!1,tl),ut(t,n)}}function zf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;el.set(n),i.uniformMatrix3fv(this.addr,!1,el),ut(t,n)}}function Hf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;jo.set(n),i.uniformMatrix4fv(this.addr,!1,jo),ut(t,n)}}function Vf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),ut(t,e)}}function Gf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),ut(t,e)}}function Wf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),ut(t,e)}}function Xf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),ut(t,e)}}function Yf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),ut(t,e)}}function Zf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),ut(t,e)}}function Jf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Dl:Ul;t.setTexture2D(e||r,s)}function $f(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fl,s)}function Kf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bl,s)}function Qf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ol,s)}function jf(i){switch(i){case 5126:return Uf;case 35664:return Df;case 35665:return Of;case 35666:return Ff;case 35674:return Bf;case 35675:return zf;case 35676:return Hf;case 5124:case 35670:return Vf;case 35667:case 35671:return kf;case 35668:case 35672:return Gf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return Qf}}function ep(i,e){i.uniform1fv(this.addr,e)}function tp(i,e){let t=Fi(e,this.size,2);i.uniform2fv(this.addr,t)}function np(i,e){let t=Fi(e,this.size,3);i.uniform3fv(this.addr,t)}function ip(i,e){let t=Fi(e,this.size,4);i.uniform4fv(this.addr,t)}function sp(i,e){let t=Fi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rp(i,e){let t=Fi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ap(i,e){let t=Fi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function op(i,e){i.uniform1iv(this.addr,e)}function lp(i,e){i.uniform2iv(this.addr,e)}function cp(i,e){i.uniform3iv(this.addr,e)}function hp(i,e){i.uniform4iv(this.addr,e)}function up(i,e){i.uniform1uiv(this.addr,e)}function dp(i,e){i.uniform2uiv(this.addr,e)}function fp(i,e){i.uniform3uiv(this.addr,e)}function pp(i,e){i.uniform4uiv(this.addr,e)}function mp(i,e,t){let n=this.cache,s=e.length,r=ar(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),ut(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ul,r[o])}function gp(i,e,t){let n=this.cache,s=e.length,r=ar(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),ut(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fl,r[o])}function _p(i,e,t){let n=this.cache,s=e.length,r=ar(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),ut(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Bl,r[o])}function xp(i,e,t){let n=this.cache,s=e.length,r=ar(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),ut(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ol,r[o])}function vp(i){switch(i){case 5126:return ep;case 35664:return tp;case 35665:return np;case 35666:return ip;case 35674:return sp;case 35675:return rp;case 35676:return ap;case 5124:case 35670:return op;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return hp;case 5125:return up;case 36294:return dp;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return xp}}var ia=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jf(t.type)}},sa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vp(t.type)}},ra=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Wr=/(\w+)(\])?(\[|\.)?/g;function nl(i,e){i.seq.push(e),i.map[e.id]=e}function yp(i,e,t){let n=i.name,s=n.length;for(Wr.lastIndex=0;;){let r=Wr.exec(n),o=Wr.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nl(t,c===void 0?new ia(a,i,e):new sa(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new ra(a),nl(t,d)),t=d}}}var Ei=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);yp(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function il(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Mp=37297,Sp=0;function bp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ep(i){let e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i),n;switch(e===t?n="":e===zs&&t===Bs?n="LinearDisplayP3ToLinearSRGB":e===Bs&&t===zs&&(n="LinearSRGBToLinearDisplayP3"),i){case yn:case rr:return[n,"LinearTransferOETF"];case et:case Pa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+bp(i.getShaderSource(e),o)}else return s}function Tp(i,e){let t=Ep(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ap(i,e){let t;switch(e){case Lc:t="Linear";break;case Ic:t="Reinhard";break;case Nc:t="OptimizedCineon";break;case ss:t="ACESFilmic";break;case Dc:t="AgX";break;case Uc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function Rp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Mi).join(`
`)}function Cp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Mi(i){return i!==""}function rl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function al(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(i){return i.replace(Lp,Np)}var Ip=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Np(i,e){let t=De[e];if(t===void 0){let n=Ip.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return aa(t)}var Up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(Up,Dp)}function Dp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ll(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Op(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_l?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Fp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case Ai:e="ENVMAP_TYPE_CUBE";break;case sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function zp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xl:e="ENVMAP_BLENDING_MULTIPLY";break;case Cc:e="ENVMAP_BLENDING_MIX";break;case Pc:e="ENVMAP_BLENDING_ADD";break}return e}function Hp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vp(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Op(t),c=Fp(t),h=Bp(t),d=zp(t),f=Hp(t),p=t.isWebGL2?"":wp(t),g=Rp(t),_=Cp(r),m=s.createProgram(),u,E,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mi).join(`
`),u.length>0&&(u+=`
`),E=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mi).join(`
`),E.length>0&&(E+=`
`)):(u=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),E=[p,ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?De.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Ap("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Tp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),o=aa(o),o=rl(o,t),o=al(o,t),a=aa(a),a=rl(a,t),a=al(a,t),o=ol(o),a=ol(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let w=x+u+o,L=x+E+a,R=il(s,s.VERTEX_SHADER,w),C=il(s,s.FRAGMENT_SHADER,L);s.attachShader(m,R),s.attachShader(m,C),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function W(q){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(m).trim(),M=s.getShaderInfoLog(R).trim(),A=s.getShaderInfoLog(C).trim(),I=!0,N=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,R,C);else{let k=sl(s,R,"vertex"),X=sl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+k+`
`+X)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(M===""||A==="")&&(N=!1);N&&(q.diagnostics={runnable:I,programLog:j,vertexShader:{log:M,prefix:u},fragmentShader:{log:A,prefix:E}})}s.deleteShader(R),s.deleteShader(C),y=new Ei(s,m),T=Pp(s,m)}let y;this.getUniforms=function(){return y===void 0&&W(this),y};let T;this.getAttributes=function(){return T===void 0&&W(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,Mp)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=C,this}var kp=0,oa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new la(e),t.set(e,n)),n}},la=class{constructor(e){this.id=kp++,this.code=e,this.usedTimes=0}};function Gp(i,e,t,n,s,r,o){let a=new es,l=new oa,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,T,F,q,j){let M=q.fog,A=j.geometry,I=y.isMeshStandardMaterial?q.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||I),k=N&&N.mapping===sr?N.image.height:null,X=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let Y=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,Z=Y!==void 0?Y.length:0,re=0;A.morphAttributes.position!==void 0&&(re=1),A.morphAttributes.normal!==void 0&&(re=2),A.morphAttributes.color!==void 0&&(re=3);let G,J,oe,fe;if(X){let Rt=cn[X];G=Rt.vertexShader,J=Rt.fragmentShader}else G=y.vertexShader,J=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),fe=l.getFragmentShaderID(y);let de=i.getRenderTarget(),Ae=j.isInstancedMesh===!0,Re=j.isBatchedMesh===!0,ye=!!y.map,ke=!!y.matcap,O=!!N,xt=!!y.aoMap,_e=!!y.lightMap,we=!!y.bumpMap,ce=!!y.normalMap,Xe=!!y.displacementMap,Ce=!!y.emissiveMap,b=!!y.metalnessMap,v=!!y.roughnessMap,B=y.anisotropy>0,Q=y.clearcoat>0,K=y.iridescence>0,ee=y.sheen>0,pe=y.transmission>0,ae=B&&!!y.anisotropyMap,he=Q&&!!y.clearcoatMap,Se=Q&&!!y.clearcoatNormalMap,Oe=Q&&!!y.clearcoatRoughnessMap,$=K&&!!y.iridescenceMap,Ye=K&&!!y.iridescenceThicknessMap,Ve=ee&&!!y.sheenColorMap,Pe=ee&&!!y.sheenRoughnessMap,xe=!!y.specularMap,ue=!!y.specularColorMap,Ue=!!y.specularIntensityMap,qe=pe&&!!y.transmissionMap,nt=pe&&!!y.thicknessMap,Be=!!y.gradientMap,te=!!y.alphaMap,P=y.alphaTest>0,ie=!!y.alphaHash,se=!!y.extensions,be=!!A.attributes.uv1,ve=!!A.attributes.uv2,Je=!!A.attributes.uv3,$e=Ln;return y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&($e=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:J,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Re,instancing:Ae,instancingColor:Ae&&j.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:yn,map:ye,matcap:ke,envMap:O,envMapMode:O&&N.mapping,envMapCubeUVHeight:k,aoMap:xt,lightMap:_e,bumpMap:we,normalMap:ce,displacementMap:f&&Xe,emissiveMap:Ce,normalMapObjectSpace:ce&&y.normalMapType===Yc,normalMapTangentSpace:ce&&y.normalMapType===Rl,metalnessMap:b,roughnessMap:v,anisotropy:B,anisotropyMap:ae,clearcoat:Q,clearcoatMap:he,clearcoatNormalMap:Se,clearcoatRoughnessMap:Oe,iridescence:K,iridescenceMap:$,iridescenceThicknessMap:Ye,sheen:ee,sheenColorMap:Ve,sheenRoughnessMap:Pe,specularMap:xe,specularColorMap:ue,specularIntensityMap:Ue,transmission:pe,transmissionMap:qe,thicknessMap:nt,gradientMap:Be,opaque:y.transparent===!1&&y.blending===Si,alphaMap:te,alphaTest:P,alphaHash:ie,combine:y.combine,mapUv:ye&&_(y.map.channel),aoMapUv:xt&&_(y.aoMap.channel),lightMapUv:_e&&_(y.lightMap.channel),bumpMapUv:we&&_(y.bumpMap.channel),normalMapUv:ce&&_(y.normalMap.channel),displacementMapUv:Xe&&_(y.displacementMap.channel),emissiveMapUv:Ce&&_(y.emissiveMap.channel),metalnessMapUv:b&&_(y.metalnessMap.channel),roughnessMapUv:v&&_(y.roughnessMap.channel),anisotropyMapUv:ae&&_(y.anisotropyMap.channel),clearcoatMapUv:he&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(y.sheenRoughnessMap.channel),specularMapUv:xe&&_(y.specularMap.channel),specularColorMapUv:ue&&_(y.specularColorMap.channel),specularIntensityMapUv:Ue&&_(y.specularIntensityMap.channel),transmissionMapUv:qe&&_(y.transmissionMap.channel),thicknessMapUv:nt&&_(y.thicknessMap.channel),alphaMapUv:te&&_(y.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(ce||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:ve,vertexUv3s:Je,pointsUvs:j.isPoints===!0&&!!A.attributes.uv&&(ye||te),fog:!!M,useFog:y.fog===!0,fogExp2:M&&M.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ye&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ut,flipSided:y.side===yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:se&&y.extensions.derivatives===!0,extensionFragDepth:se&&y.extensions.fragDepth===!0,extensionDrawBuffers:se&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let F in y.defines)T.push(F),T.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(E(T,y),x(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function E(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function x(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function w(y){let T=g[y.type],F;if(T){let q=cn[T];F=Lh.clone(q.uniforms)}else F=y.uniforms;return F}function L(y,T){let F;for(let q=0,j=c.length;q<j;q++){let M=c[q];if(M.cacheKey===T){F=M,++F.usedTimes;break}}return F===void 0&&(F=new Vp(i,T,y,r),c.push(F)),F}function R(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:w,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:W}}function Wp(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hl(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,p,g,_,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),e++,u}function a(d,f,p,g,_,m){let u=o(d,f,p,g,_,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(d,f,p,g,_,m){let u=o(d,f,p,g,_,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Xp),n.length>1&&n.sort(f||cl),s.length>1&&s.sort(f||cl)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function qp(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new hl,i.set(n,[o])):s>=r.length?(o=new hl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Te};break;case"SpotLight":t={position:new U,direction:new U,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Zp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jp=0;function $p(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kp(i,e){let t=new Yp,n=Zp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new ct,a=new ct;function l(h,d){let f=0,p=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,m=0,u=0,E=0,x=0,w=0,L=0,R=0,C=0,W=0,y=0;h.sort($p);let T=d===!0?Math.PI:1;for(let q=0,j=h.length;q<j;q++){let M=h[q],A=M.color,I=M.intensity,N=M.distance,k=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)f+=A.r*I*T,p+=A.g*I*T,g+=A.b*I*T;else if(M.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(M.sh.coefficients[X],I);y++}else if(M.isDirectionalLight){let X=t.get(M);if(X.color.copy(M.color).multiplyScalar(M.intensity*T),M.castShadow){let Y=M.shadow,Z=n.get(M);Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,s.directionalShadow[_]=Z,s.directionalShadowMap[_]=k,s.directionalShadowMatrix[_]=M.shadow.matrix,w++}s.directional[_]=X,_++}else if(M.isSpotLight){let X=t.get(M);X.position.setFromMatrixPosition(M.matrixWorld),X.color.copy(A).multiplyScalar(I*T),X.distance=N,X.coneCos=Math.cos(M.angle),X.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),X.decay=M.decay,s.spot[u]=X;let Y=M.shadow;if(M.map&&(s.spotLightMap[C]=M.map,C++,Y.updateMatrices(M),M.castShadow&&W++),s.spotLightMatrix[u]=Y.matrix,M.castShadow){let Z=n.get(M);Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,s.spotShadow[u]=Z,s.spotShadowMap[u]=k,R++}u++}else if(M.isRectAreaLight){let X=t.get(M);X.color.copy(A).multiplyScalar(I),X.halfWidth.set(M.width*.5,0,0),X.halfHeight.set(0,M.height*.5,0),s.rectArea[E]=X,E++}else if(M.isPointLight){let X=t.get(M);if(X.color.copy(M.color).multiplyScalar(M.intensity*T),X.distance=M.distance,X.decay=M.decay,M.castShadow){let Y=M.shadow,Z=n.get(M);Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,Z.shadowCameraNear=Y.camera.near,Z.shadowCameraFar=Y.camera.far,s.pointShadow[m]=Z,s.pointShadowMap[m]=k,s.pointShadowMatrix[m]=M.shadow.matrix,L++}s.point[m]=X,m++}else if(M.isHemisphereLight){let X=t.get(M);X.skyColor.copy(M.color).multiplyScalar(I*T),X.groundColor.copy(M.groundColor).multiplyScalar(I*T),s.hemi[x]=X,x++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ne.LTC_FLOAT_1,s.rectAreaLTC2=ne.LTC_FLOAT_2):(s.rectAreaLTC1=ne.LTC_HALF_1,s.rectAreaLTC2=ne.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ne.LTC_FLOAT_1,s.rectAreaLTC2=ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ne.LTC_HALF_1,s.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==u||F.rectAreaLength!==E||F.hemiLength!==x||F.numDirectionalShadows!==w||F.numPointShadows!==L||F.numSpotShadows!==R||F.numSpotMaps!==C||F.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=u,s.rectArea.length=E,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=R+C-W,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=y,F.directionalLength=_,F.pointLength=m,F.spotLength=u,F.rectAreaLength=E,F.hemiLength=x,F.numDirectionalShadows=w,F.numPointShadows=L,F.numSpotShadows=R,F.numSpotMaps=C,F.numLightProbes=y,s.version=Jp++)}function c(h,d){let f=0,p=0,g=0,_=0,m=0,u=d.matrixWorldInverse;for(let E=0,x=h.length;E<x;E++){let w=h[E];if(w.isDirectionalLight){let L=s.directional[f];L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(u),f++}else if(w.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(u),g++}else if(w.isRectAreaLight){let L=s.rectArea[_];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(u),a.identity(),o.copy(w.matrixWorld),o.premultiply(u),a.extractRotation(o),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let L=s.point[p];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(u),p++}else if(w.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:s}}function ul(i,e){let t=new Kp(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Qp(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new ul(i,e),t.set(r,[l])):o>=a.length?(l=new ul(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var ca=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ha=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},jp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tm(i,e,t){let n=new ts,s=new ge,r=new ge,o=new gt,a=new ca({depthPacking:qc}),l=new ha,c={},h=t.maxTextureSize,d={[Nn]:yt,[yt]:Nn,[Ut]:Ut},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:jp,fragmentShader:em}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new hn;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ne(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let u=this.type;this.render=function(R,C,W){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let y=i.getRenderTarget(),T=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Pn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let j=u!==xn&&this.type===xn,M=u===xn&&this.type!==xn;for(let A=0,I=R.length;A<I;A++){let N=R[A],k=N.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let X=k.getFrameExtents();if(s.multiply(X),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,k.mapSize.y=r.y)),k.map===null||j===!0||M===!0){let Z=this.type!==xn?{minFilter:It,magFilter:It}:{};k.map!==null&&k.map.dispose(),k.map=new Mn(s.x,s.y,Z),k.map.texture.name=N.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let Y=k.getViewportCount();for(let Z=0;Z<Y;Z++){let re=k.getViewport(Z);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),q.viewport(o),k.updateMatrices(N,Z),n=k.getFrustum(),w(C,W,k.camera,N,this.type)}k.isPointLightShadow!==!0&&this.type===xn&&E(k,W),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(y,T,F)};function E(R,C){let W=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Mn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,W,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,W,p,_,null)}function x(R,C,W,y){let T=null,F=W.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)T=F;else if(T=W.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let q=T.uuid,j=C.uuid,M=c[q];M===void 0&&(M={},c[q]=M);let A=M[j];A===void 0&&(A=T.clone(),M[j]=A,C.addEventListener("dispose",L)),T=A}if(T.visible=C.visible,T.wireframe=C.wireframe,y===xn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:d[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,W.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let q=i.properties.get(T);q.light=W}return T}function w(R,C,W,y,T){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===xn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld);let j=e.update(R),M=R.material;if(Array.isArray(M)){let A=j.groups;for(let I=0,N=A.length;I<N;I++){let k=A[I],X=M[k.materialIndex];if(X&&X.visible){let Y=x(R,X,y,T);R.onBeforeShadow(i,R,C,W,j,Y,k),i.renderBufferDirect(W,null,j,Y,R,k),R.onAfterShadow(i,R,C,W,j,Y,k)}}}else if(M.visible){let A=x(R,M,y,T);R.onBeforeShadow(i,R,C,W,j,A,null),i.renderBufferDirect(W,null,j,A,R,null),R.onAfterShadow(i,R,C,W,j,A,null)}}let q=R.children;for(let j=0,M=q.length;j<M;j++)w(q[j],C,W,y,T)}function L(R){R.target.removeEventListener("dispose",L);for(let W in c){let y=c[W],T=R.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function nm(i,e,t){let n=t.isWebGL2;function s(){let P=!1,ie=new gt,se=null,be=new gt(0,0,0,0);return{setMask:function(ve){se!==ve&&!P&&(i.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){P=ve},setClear:function(ve,Je,$e,ft,Rt){Rt===!0&&(ve*=ft,Je*=ft,$e*=ft),ie.set(ve,Je,$e,ft),be.equals(ie)===!1&&(i.clearColor(ve,Je,$e,ft),be.copy(ie))},reset:function(){P=!1,se=null,be.set(-1,0,0,0)}}}function r(){let P=!1,ie=null,se=null,be=null;return{setTest:function(ve){ve?Re(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ve){ie!==ve&&!P&&(i.depthMask(ve),ie=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case Sc:i.depthFunc(i.NEVER);break;case bc:i.depthFunc(i.ALWAYS);break;case Ec:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case Tc:i.depthFunc(i.EQUAL);break;case Ac:i.depthFunc(i.GEQUAL);break;case wc:i.depthFunc(i.GREATER);break;case Rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){P=ve},setClear:function(ve){be!==ve&&(i.clearDepth(ve),be=ve)},reset:function(){P=!1,ie=null,se=null,be=null}}}function o(){let P=!1,ie=null,se=null,be=null,ve=null,Je=null,$e=null,ft=null,Rt=null;return{setTest:function(Ke){P||(Ke?Re(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ke){ie!==Ke&&!P&&(i.stencilMask(Ke),ie=Ke)},setFunc:function(Ke,Ct,ln){(se!==Ke||be!==Ct||ve!==ln)&&(i.stencilFunc(Ke,Ct,ln),se=Ke,be=Ct,ve=ln)},setOp:function(Ke,Ct,ln){(Je!==Ke||$e!==Ct||ft!==ln)&&(i.stencilOp(Ke,Ct,ln),Je=Ke,$e=Ct,ft=ln)},setLocked:function(Ke){P=Ke},setClear:function(Ke){Rt!==Ke&&(i.clearStencil(Ke),Rt=Ke)},reset:function(){P=!1,ie=null,se=null,be=null,ve=null,Je=null,$e=null,ft=null,Rt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,f={},p={},g=new WeakMap,_=[],m=null,u=!1,E=null,x=null,w=null,L=null,R=null,C=null,W=null,y=new Te(0,0,0),T=0,F=!1,q=null,j=null,M=null,A=null,I=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,X=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=X>=2);let Z=null,re={},G=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),oe=new gt().fromArray(G),fe=new gt().fromArray(J);function de(P,ie,se,be){let ve=new Uint8Array(4),Je=i.createTexture();i.bindTexture(P,Je),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<se;$e++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ie,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ie+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Je}let Ae={};Ae[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(i.DEPTH_TEST),l.setFunc(Us),Ce(!1),b(Wa),Re(i.CULL_FACE),ce(Pn);function Re(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function ye(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function ke(P,ie){return p[P]!==ie?(i.bindFramebuffer(P,ie),p[P]=ie,n&&(P===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ie),P===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ie)),!0):!1}function O(P,ie){let se=_,be=!1;if(P)if(se=g.get(ie),se===void 0&&(se=[],g.set(ie,se)),P.isWebGLMultipleRenderTargets){let ve=P.texture;if(se.length!==ve.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Je=0,$e=ve.length;Je<$e;Je++)se[Je]=i.COLOR_ATTACHMENT0+Je;se.length=ve.length,be=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,be=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,be=!0);be&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function xt(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let _e={[Wn]:i.FUNC_ADD,[oc]:i.FUNC_SUBTRACT,[lc]:i.FUNC_REVERSE_SUBTRACT};if(n)_e[Ya]=i.MIN,_e[Za]=i.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(_e[Ya]=P.MIN_EXT,_e[Za]=P.MAX_EXT)}let we={[cc]:i.ZERO,[hc]:i.ONE,[uc]:i.SRC_COLOR,[qr]:i.SRC_ALPHA,[_c]:i.SRC_ALPHA_SATURATE,[mc]:i.DST_COLOR,[fc]:i.DST_ALPHA,[dc]:i.ONE_MINUS_SRC_COLOR,[Yr]:i.ONE_MINUS_SRC_ALPHA,[gc]:i.ONE_MINUS_DST_COLOR,[pc]:i.ONE_MINUS_DST_ALPHA,[xc]:i.CONSTANT_COLOR,[vc]:i.ONE_MINUS_CONSTANT_COLOR,[yc]:i.CONSTANT_ALPHA,[Mc]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(P,ie,se,be,ve,Je,$e,ft,Rt,Ke){if(P===Pn){u===!0&&(ye(i.BLEND),u=!1);return}if(u===!1&&(Re(i.BLEND),u=!0),P!==ac){if(P!==E||Ke!==F){if((x!==Wn||R!==Wn)&&(i.blendEquation(i.FUNC_ADD),x=Wn,R=Wn),Ke)switch(P){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ns:i.blendFunc(i.ONE,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ns:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,L=null,C=null,W=null,y.set(0,0,0),T=0,E=P,F=Ke}return}ve=ve||ie,Je=Je||se,$e=$e||be,(ie!==x||ve!==R)&&(i.blendEquationSeparate(_e[ie],_e[ve]),x=ie,R=ve),(se!==w||be!==L||Je!==C||$e!==W)&&(i.blendFuncSeparate(we[se],we[be],we[Je],we[$e]),w=se,L=be,C=Je,W=$e),(ft.equals(y)===!1||Rt!==T)&&(i.blendColor(ft.r,ft.g,ft.b,Rt),y.copy(ft),T=Rt),E=P,F=!1}function Xe(P,ie){P.side===Ut?ye(i.CULL_FACE):Re(i.CULL_FACE);let se=P.side===yt;ie&&(se=!se),Ce(se),P.blending===Si&&P.transparent===!1?ce(Pn):ce(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let be=P.stencilWrite;c.setTest(be),be&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(P){q!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),q=P)}function b(P){P!==ic?(Re(i.CULL_FACE),P!==j&&(P===Wa?i.cullFace(i.BACK):P===sc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),j=P}function v(P){P!==M&&(k&&i.lineWidth(P),M=P)}function B(P,ie,se){P?(Re(i.POLYGON_OFFSET_FILL),(A!==ie||I!==se)&&(i.polygonOffset(ie,se),A=ie,I=se)):ye(i.POLYGON_OFFSET_FILL)}function Q(P){P?Re(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function K(P){P===void 0&&(P=i.TEXTURE0+N-1),Z!==P&&(i.activeTexture(P),Z=P)}function ee(P,ie,se){se===void 0&&(Z===null?se=i.TEXTURE0+N-1:se=Z);let be=re[se];be===void 0&&(be={type:void 0,texture:void 0},re[se]=be),(be.type!==P||be.texture!==ie)&&(Z!==se&&(i.activeTexture(se),Z=se),i.bindTexture(P,ie||Ae[P]),be.type=P,be.texture=ie)}function pe(){let P=re[Z];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(P){oe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),oe.copy(P))}function qe(P){fe.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),fe.copy(P))}function nt(P,ie){let se=d.get(ie);se===void 0&&(se=new WeakMap,d.set(ie,se));let be=se.get(P);be===void 0&&(be=i.getUniformBlockIndex(ie,P.name),se.set(P,be))}function Be(P,ie){let be=d.get(ie).get(P);h.get(ie)!==be&&(i.uniformBlockBinding(ie,be,P.__bindingPointIndex),h.set(ie,be))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Z=null,re={},p={},g=new WeakMap,_=[],m=null,u=!1,E=null,x=null,w=null,L=null,R=null,C=null,W=null,y=new Te(0,0,0),T=0,F=!1,q=null,j=null,M=null,A=null,I=null,oe.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:ye,bindFramebuffer:ke,drawBuffers:O,useProgram:xt,setBlending:ce,setMaterial:Xe,setFlipSided:Ce,setCullFace:b,setLineWidth:v,setPolygonOffset:B,setScissorTest:Q,activeTexture:K,bindTexture:ee,unbindTexture:pe,compressedTexImage2D:ae,compressedTexImage3D:he,texImage2D:xe,texImage3D:ue,updateUBOMapping:nt,uniformBlockBinding:Be,texStorage2D:Ve,texStorage3D:Pe,texSubImage2D:Se,texSubImage3D:Oe,compressedTexSubImage2D:$,compressedTexSubImage3D:Ye,scissor:Ue,viewport:qe,reset:te}}function im(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return p?new OffscreenCanvas(b,v):Qi("canvas")}function _(b,v,B,Q){let K=1;if((b.width>Q||b.height>Q)&&(K=Q/Math.max(b.width,b.height)),K<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let ee=v?Vs:Math.floor,pe=ee(K*b.width),ae=ee(K*b.height);d===void 0&&(d=g(pe,ae));let he=B?g(pe,ae):d;return he.width=pe,he.height=ae,he.getContext("2d").drawImage(b,0,0,pe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+pe+"x"+ae+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Qr(b.width)&&Qr(b.height)}function u(b){return a?!1:b.wrapS!==tn||b.wrapT!==tn||b.minFilter!==It&&b.minFilter!==Wt}function E(b,v){return b.generateMipmaps&&v&&b.minFilter!==It&&b.minFilter!==Wt}function x(b){i.generateMipmap(b)}function w(b,v,B,Q,K=!1){if(a===!1)return v;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ee=v;if(v===i.RED&&(B===i.FLOAT&&(ee=i.R32F),B===i.HALF_FLOAT&&(ee=i.R16F),B===i.UNSIGNED_BYTE&&(ee=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(ee=i.R8UI),B===i.UNSIGNED_SHORT&&(ee=i.R16UI),B===i.UNSIGNED_INT&&(ee=i.R32UI),B===i.BYTE&&(ee=i.R8I),B===i.SHORT&&(ee=i.R16I),B===i.INT&&(ee=i.R32I)),v===i.RG&&(B===i.FLOAT&&(ee=i.RG32F),B===i.HALF_FLOAT&&(ee=i.RG16F),B===i.UNSIGNED_BYTE&&(ee=i.RG8)),v===i.RGBA){let pe=K?Fs:Ze.getTransfer(Q);B===i.FLOAT&&(ee=i.RGBA32F),B===i.HALF_FLOAT&&(ee=i.RGBA16F),B===i.UNSIGNED_BYTE&&(ee=pe===Qe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function L(b,v,B){return E(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==It&&b.minFilter!==Wt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function R(b){return b===It||b===Ja||b===gr?i.NEAREST:i.LINEAR}function C(b){let v=b.target;v.removeEventListener("dispose",C),y(v),v.isVideoTexture&&h.delete(v)}function W(b){let v=b.target;v.removeEventListener("dispose",W),F(v)}function y(b){let v=n.get(b);if(v.__webglInit===void 0)return;let B=b.source,Q=f.get(B);if(Q){let K=Q[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(b),Object.keys(Q).length===0&&f.delete(B)}n.remove(b)}function T(b){let v=n.get(b);i.deleteTexture(v.__webglTexture);let B=b.source,Q=f.get(B);delete Q[v.__cacheKey],o.memory.textures--}function F(b){let v=b.texture,B=n.get(b),Q=n.get(v);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(B.__webglFramebuffer[K]))for(let ee=0;ee<B.__webglFramebuffer[K].length;ee++)i.deleteFramebuffer(B.__webglFramebuffer[K][ee]);else i.deleteFramebuffer(B.__webglFramebuffer[K]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[K])}else{if(Array.isArray(B.__webglFramebuffer))for(let K=0;K<B.__webglFramebuffer.length;K++)i.deleteFramebuffer(B.__webglFramebuffer[K]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let K=0;K<B.__webglColorRenderbuffer.length;K++)B.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[K]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let K=0,ee=v.length;K<ee;K++){let pe=n.get(v[K]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(v[K])}n.remove(v),n.remove(b)}let q=0;function j(){q=0}function M(){let b=q;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),q+=1,b}function A(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function I(b,v){let B=n.get(b);if(b.isVideoTexture&&Xe(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){let Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(B,b,v);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function N(b,v){let B=n.get(b);if(b.version>0&&B.__version!==b.version){oe(B,b,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function k(b,v){let B=n.get(b);if(b.version>0&&B.__version!==b.version){oe(B,b,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function X(b,v){let B=n.get(b);if(b.version>0&&B.__version!==b.version){fe(B,b,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let Y={[wi]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},Z={[It]:i.NEAREST,[Ja]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Oc]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},re={[Zc]:i.NEVER,[eh]:i.ALWAYS,[Jc]:i.LESS,[Cl]:i.LEQUAL,[$c]:i.EQUAL,[jc]:i.GEQUAL,[Kc]:i.GREATER,[Qc]:i.NOTEQUAL};function G(b,v,B){if(B?(i.texParameteri(b,i.TEXTURE_WRAP_S,Y[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Y[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Y[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Z[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Z[v.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==tn||v.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,R(v.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,R(v.minFilter)),v.minFilter!==It&&v.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Q=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===It||v.minFilter!==gr&&v.minFilter!==Ji||v.type===Cn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===$i&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function J(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",C));let Q=v.source,K=f.get(Q);K===void 0&&(K={},f.set(Q,K));let ee=A(v);if(ee!==b.__cacheKey){K[ee]===void 0&&(K[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[ee].usedTimes++;let pe=K[b.__cacheKey];pe!==void 0&&(K[b.__cacheKey].usedTimes--,pe.usedTimes===0&&T(v)),b.__cacheKey=ee,b.__webglTexture=K[ee].texture}return B}function oe(b,v,B){let Q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=i.TEXTURE_3D);let K=J(b,v),ee=v.source;t.bindTexture(Q,b.__webglTexture,i.TEXTURE0+B);let pe=n.get(ee);if(ee.version!==pe.__version||K===!0){t.activeTexture(i.TEXTURE0+B);let ae=Ze.getPrimaries(Ze.workingColorSpace),he=v.colorSpace===Xt?null:Ze.getPrimaries(v.colorSpace),Se=v.colorSpace===Xt||ae===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Oe=u(v)&&m(v.image)===!1,$=_(v.image,Oe,!1,s.maxTextureSize);$=Ce(v,$);let Ye=m($)||a,Ve=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type),xe=w(v.internalFormat,Ve,Pe,v.colorSpace,v.isVideoTexture);G(Q,v,Ye);let ue,Ue=v.mipmaps,qe=a&&v.isVideoTexture!==!0&&xe!==Al,nt=pe.__version===void 0||K===!0,Be=L(v,$,Ye);if(v.isDepthTexture)xe=i.DEPTH_COMPONENT,a?v.type===Cn?xe=i.DEPTH_COMPONENT32F:v.type===Rn?xe=i.DEPTH_COMPONENT24:v.type===qn?xe=i.DEPTH24_STENCIL8:xe=i.DEPTH_COMPONENT16:v.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Yn&&xe===i.DEPTH_COMPONENT&&v.type!==Ca&&v.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Rn,Pe=r.convert(v.type)),v.format===Ri&&xe===i.DEPTH_COMPONENT&&(xe=i.DEPTH_STENCIL,v.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=qn,Pe=r.convert(v.type))),nt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,xe,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,xe,$.width,$.height,0,Ve,Pe,null));else if(v.isDataTexture)if(Ue.length>0&&Ye){qe&&nt&&t.texStorage2D(i.TEXTURE_2D,Be,xe,Ue[0].width,Ue[0].height);for(let te=0,P=Ue.length;te<P;te++)ue=Ue[te],qe?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,Ve,Pe,ue.data):t.texImage2D(i.TEXTURE_2D,te,xe,ue.width,ue.height,0,Ve,Pe,ue.data);v.generateMipmaps=!1}else qe?(nt&&t.texStorage2D(i.TEXTURE_2D,Be,xe,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,Ve,Pe,$.data)):t.texImage2D(i.TEXTURE_2D,0,xe,$.width,$.height,0,Ve,Pe,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,xe,Ue[0].width,Ue[0].height,$.depth);for(let te=0,P=Ue.length;te<P;te++)ue=Ue[te],v.format!==nn?Ve!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,$.depth,Ve,ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,xe,ue.width,ue.height,$.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,$.depth,Ve,Pe,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,xe,ue.width,ue.height,$.depth,0,Ve,Pe,ue.data)}else{qe&&nt&&t.texStorage2D(i.TEXTURE_2D,Be,xe,Ue[0].width,Ue[0].height);for(let te=0,P=Ue.length;te<P;te++)ue=Ue[te],v.format!==nn?Ve!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,Ve,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,te,xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,Ve,Pe,ue.data):t.texImage2D(i.TEXTURE_2D,te,xe,ue.width,ue.height,0,Ve,Pe,ue.data)}else if(v.isDataArrayTexture)qe?(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,xe,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ve,Pe,$.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,$.width,$.height,$.depth,0,Ve,Pe,$.data);else if(v.isData3DTexture)qe?(nt&&t.texStorage3D(i.TEXTURE_3D,Be,xe,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ve,Pe,$.data)):t.texImage3D(i.TEXTURE_3D,0,xe,$.width,$.height,$.depth,0,Ve,Pe,$.data);else if(v.isFramebufferTexture){if(nt)if(qe)t.texStorage2D(i.TEXTURE_2D,Be,xe,$.width,$.height);else{let te=$.width,P=$.height;for(let ie=0;ie<Be;ie++)t.texImage2D(i.TEXTURE_2D,ie,xe,te,P,0,Ve,Pe,null),te>>=1,P>>=1}}else if(Ue.length>0&&Ye){qe&&nt&&t.texStorage2D(i.TEXTURE_2D,Be,xe,Ue[0].width,Ue[0].height);for(let te=0,P=Ue.length;te<P;te++)ue=Ue[te],qe?t.texSubImage2D(i.TEXTURE_2D,te,0,0,Ve,Pe,ue):t.texImage2D(i.TEXTURE_2D,te,xe,Ve,Pe,ue);v.generateMipmaps=!1}else qe?(nt&&t.texStorage2D(i.TEXTURE_2D,Be,xe,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,Pe,$)):t.texImage2D(i.TEXTURE_2D,0,xe,Ve,Pe,$);E(v,Ye)&&x(Q),pe.__version=ee.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function fe(b,v,B){if(v.image.length!==6)return;let Q=J(b,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);let ee=n.get(K);if(K.version!==ee.__version||Q===!0){t.activeTexture(i.TEXTURE0+B);let pe=Ze.getPrimaries(Ze.workingColorSpace),ae=v.colorSpace===Xt?null:Ze.getPrimaries(v.colorSpace),he=v.colorSpace===Xt||pe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Se=v.isCompressedTexture||v.image[0].isCompressedTexture,Oe=v.image[0]&&v.image[0].isDataTexture,$=[];for(let te=0;te<6;te++)!Se&&!Oe?$[te]=_(v.image[te],!1,!0,s.maxCubemapSize):$[te]=Oe?v.image[te].image:v.image[te],$[te]=Ce(v,$[te]);let Ye=$[0],Ve=m(Ye)||a,Pe=r.convert(v.format,v.colorSpace),xe=r.convert(v.type),ue=w(v.internalFormat,Pe,xe,v.colorSpace),Ue=a&&v.isVideoTexture!==!0,qe=ee.__version===void 0||Q===!0,nt=L(v,Ye,Ve);G(i.TEXTURE_CUBE_MAP,v,Ve);let Be;if(Se){Ue&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,ue,Ye.width,Ye.height);for(let te=0;te<6;te++){Be=$[te].mipmaps;for(let P=0;P<Be.length;P++){let ie=Be[P];v.format!==nn?Pe!==null?Ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,P,0,0,ie.width,ie.height,Pe,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,P,ue,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,P,0,0,ie.width,ie.height,Pe,xe,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,P,ue,ie.width,ie.height,0,Pe,xe,ie.data)}}}else{Be=v.mipmaps,Ue&&qe&&(Be.length>0&&nt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,ue,$[0].width,$[0].height));for(let te=0;te<6;te++)if(Oe){Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,$[te].width,$[te].height,Pe,xe,$[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,$[te].width,$[te].height,0,Pe,xe,$[te].data);for(let P=0;P<Be.length;P++){let se=Be[P].image[te].image;Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,P+1,0,0,se.width,se.height,Pe,xe,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,P+1,ue,se.width,se.height,0,Pe,xe,se.data)}}else{Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,xe,$[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Pe,xe,$[te]);for(let P=0;P<Be.length;P++){let ie=Be[P];Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,P+1,0,0,Pe,xe,ie.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,P+1,ue,Pe,xe,ie.image[te])}}}E(v,Ve)&&x(i.TEXTURE_CUBE_MAP),ee.__version=K.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function de(b,v,B,Q,K,ee){let pe=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),he=w(B.internalFormat,pe,ae,B.colorSpace);if(!n.get(v).__hasExternalTextures){let Oe=Math.max(1,v.width>>ee),$=Math.max(1,v.height>>ee);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ee,he,Oe,$,v.depth,0,pe,ae,null):t.texImage2D(K,ee,he,Oe,$,0,pe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ce(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,n.get(B).__webglTexture,0,we(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,n.get(B).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(b,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let Q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||ce(v)){let K=v.depthTexture;K&&K.isDepthTexture&&(K.type===Cn?Q=i.DEPTH_COMPONENT32F:K.type===Rn&&(Q=i.DEPTH_COMPONENT24));let ee=we(v);ce(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Q,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Q,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){let Q=we(v);B&&ce(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,v.width,v.height):ce(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{let Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let K=0;K<Q.length;K++){let ee=Q[K],pe=r.convert(ee.format,ee.colorSpace),ae=r.convert(ee.type),he=w(ee.internalFormat,pe,ae,ee.colorSpace),Se=we(v);B&&ce(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,he,v.width,v.height):ce(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,he,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,he,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),I(v.depthTexture,0);let Q=n.get(v.depthTexture).__webglTexture,K=we(v);if(v.depthTexture.format===Yn)ce(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Ri)ce(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ye(b){let v=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Re(v.__webglFramebuffer,b)}else if(B){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=i.createRenderbuffer(),Ae(v.__webglDepthbuffer[Q],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Ae(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(b,v,B){let Q=n.get(b);v!==void 0&&de(Q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ye(b)}function O(b){let v=b.texture,B=n.get(b),Q=n.get(v);b.addEventListener("dispose",W),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=v.version,o.memory.textures++);let K=b.isWebGLCubeRenderTarget===!0,ee=b.isWebGLMultipleRenderTargets===!0,pe=m(b)||a;if(K){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let he=0;he<v.mipmaps.length;he++)B.__webglFramebuffer[ae][he]=i.createFramebuffer()}else B.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)B.__webglFramebuffer[ae]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ee)if(s.drawBuffers){let ae=b.texture;for(let he=0,Se=ae.length;he<Se;he++){let Oe=n.get(ae[he]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ce(b)===!1){let ae=ee?v:[v];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){let Se=ae[he];B.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[he]);let Oe=r.convert(Se.format,Se.colorSpace),$=r.convert(Se.type),Ye=w(Se.internalFormat,Oe,$,Se.colorSpace,b.isXRRenderTarget===!0),Ve=we(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Ye,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,B.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),G(i.TEXTURE_CUBE_MAP,v,pe);for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)de(B.__webglFramebuffer[ae][he],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else de(B.__webglFramebuffer[ae],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);E(v,pe)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let ae=b.texture;for(let he=0,Se=ae.length;he<Se;he++){let Oe=ae[he],$=n.get(Oe);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),G(i.TEXTURE_2D,Oe,pe),de(B.__webglFramebuffer,b,Oe,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),E(Oe,pe)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ae=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Q.__webglTexture),G(ae,v,pe),a&&v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)de(B.__webglFramebuffer[he],b,v,i.COLOR_ATTACHMENT0,ae,he);else de(B.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,ae,0);E(v,pe)&&x(ae),t.unbindTexture()}b.depthBuffer&&ye(b)}function xt(b){let v=m(b)||a,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,K=B.length;Q<K;Q++){let ee=B[Q];if(E(ee,v)){let pe=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(ee).__webglTexture;t.bindTexture(pe,ae),x(pe),t.unbindTexture()}}}function _e(b){if(a&&b.samples>0&&ce(b)===!1){let v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,Q=b.height,K=i.COLOR_BUFFER_BIT,ee=[],pe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(b),he=b.isWebGLMultipleRenderTargets===!0;if(he)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){ee.push(i.COLOR_ATTACHMENT0+Se),b.depthBuffer&&ee.push(pe);let Oe=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Oe===!1&&(b.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),he&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]),Oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),he){let $=n.get(v[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,K,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]);let Oe=n.get(v[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function we(b){return Math.min(s.maxSamples,b.samples)}function ce(b){let v=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Xe(b){let v=o.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function Ce(b,v){let B=b.colorSpace,Q=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Kr||B!==yn&&B!==Xt&&(Ze.getTransfer(B)===Qe?a===!1?e.has("EXT_sRGB")===!0&&Q===nn?(b.format=Kr,b.minFilter=Wt,b.generateMipmaps=!1):v=ks.sRGBToLinear(v):(Q!==nn||K!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}this.allocateTextureUnit=M,this.resetTextureUnits=j,this.setTexture2D=I,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=ke,this.setupRenderTarget=O,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ce}function sm(i,e,t){let n=t.isWebGL2;function s(r,o=Xt){let a,l=Ze.getTransfer(o);if(r===In)return i.UNSIGNED_BYTE;if(r===Ml)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Fc)return i.BYTE;if(r===Bc)return i.SHORT;if(r===Ca)return i.UNSIGNED_SHORT;if(r===yl)return i.INT;if(r===Rn)return i.UNSIGNED_INT;if(r===Cn)return i.FLOAT;if(r===$i)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===zc)return i.ALPHA;if(r===nn)return i.RGBA;if(r===Hc)return i.LUMINANCE;if(r===Vc)return i.LUMINANCE_ALPHA;if(r===Yn)return i.DEPTH_COMPONENT;if(r===Ri)return i.DEPTH_STENCIL;if(r===Kr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===kc)return i.RED;if(r===bl)return i.RED_INTEGER;if(r===Gc)return i.RG;if(r===El)return i.RG_INTEGER;if(r===Tl)return i.RGBA_INTEGER;if(r===_r||r===xr||r===vr||r===yr)if(l===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===_r)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===_r)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$a||r===Ka||r===Qa||r===ja)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===$a)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ka)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ja)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Al)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===eo||r===to)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===eo)return l===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===to)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===no||r===io||r===so||r===ro||r===ao||r===oo||r===lo||r===co||r===ho||r===uo||r===fo||r===po||r===mo||r===go)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===no)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===io)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===so)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ro)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ao)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===oo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===co)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ho)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===po)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===go)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mr||r===_o||r===xo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Mr)return l===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_o)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wc||r===vo||r===yo||r===Mo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Mr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===vo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var ua=class extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},zt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rm={type:"move"},Zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},da=class extends Un{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null,_=t.getContextAttributes(),m=null,u=null,E=[],x=[],w=new ge,L=null,R=new vt;R.layers.enable(1),R.viewport=new gt;let C=new vt;C.layers.enable(2),C.viewport=new gt;let W=[R,C],y=new ua;y.layers.enable(1),y.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=E[G];return J===void 0&&(J=new Zi,E[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=E[G];return J===void 0&&(J=new Zi,E[G]=J),J.getGripSpace()},this.getHand=function(G){let J=E[G];return J===void 0&&(J=new Zi,E[G]=J),J.getHandSpace()};function q(G){let J=x.indexOf(G.inputSource);if(J===-1)return;let oe=E[J];oe!==void 0&&(oe.update(G.inputSource,G.frame,c||o),oe.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",M);for(let G=0;G<E.length;G++){let J=x[G];J!==null&&(x[G]=null,E[G].disconnect(J))}T=null,F=null,e.setRenderTarget(m),p=null,f=null,d=null,s=null,u=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",j),s.addEventListener("inputsourceschange",M),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new Mn(p.framebufferWidth,p.framebufferHeight,{format:nn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,oe=null,fe=null;_.depth&&(fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?Ri:Yn,oe=_.stencil?qn:Rn);let de={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(de),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Mn(f.textureWidth,f.textureHeight,{format:nn,type:In,depthTexture:new Qs(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ae=e.properties.get(u);Ae.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function M(G){for(let J=0;J<G.removed.length;J++){let oe=G.removed[J],fe=x.indexOf(oe);fe>=0&&(x[fe]=null,E[fe].disconnect(oe))}for(let J=0;J<G.added.length;J++){let oe=G.added[J],fe=x.indexOf(oe);if(fe===-1){for(let Ae=0;Ae<E.length;Ae++)if(Ae>=x.length){x.push(oe),fe=Ae;break}else if(x[Ae]===null){x[Ae]=oe,fe=Ae;break}if(fe===-1)break}let de=E[fe];de&&de.connect(oe)}}let A=new U,I=new U;function N(G,J,oe){A.setFromMatrixPosition(J.matrixWorld),I.setFromMatrixPosition(oe.matrixWorld);let fe=A.distanceTo(I),de=J.projectionMatrix.elements,Ae=oe.projectionMatrix.elements,Re=de[14]/(de[10]-1),ye=de[14]/(de[10]+1),ke=(de[9]+1)/de[5],O=(de[9]-1)/de[5],xt=(de[8]-1)/de[0],_e=(Ae[8]+1)/Ae[0],we=Re*xt,ce=Re*_e,Xe=fe/(-xt+_e),Ce=Xe*-xt;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ce),G.translateZ(Xe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let b=Re+Xe,v=ye+Xe,B=we-Ce,Q=ce+(fe-Ce),K=ke*ye/v*b,ee=O*ye/v*b;G.projectionMatrix.makePerspective(B,Q,K,ee,b,v),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function k(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;y.near=C.near=R.near=G.near,y.far=C.far=R.far=G.far,(T!==y.near||F!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,F=y.far);let J=G.parent,oe=y.cameras;k(y,J);for(let fe=0;fe<oe.length;fe++)k(oe[fe],J);oe.length===2?N(y,R,C):y.projectionMatrix.copy(R.projectionMatrix),X(G,y,J)};function X(G,J,oe){oe===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(oe.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ki*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let Y=null;function Z(G,J){if(h=J.getViewerPose(c||o),g=J,h!==null){let oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let fe=!1;oe.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let de=0;de<oe.length;de++){let Ae=oe[de],Re=null;if(p!==null)Re=p.getViewport(Ae);else{let ke=d.getViewSubImage(f,Ae);Re=ke.viewport,de===0&&(e.setRenderTargetTextures(u,ke.colorTexture,f.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(u))}let ye=W[de];ye===void 0&&(ye=new vt,ye.layers.enable(de),ye.viewport=new gt,W[de]=ye),ye.matrix.fromArray(Ae.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ae.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Re.x,Re.y,Re.width,Re.height),de===0&&(y.matrix.copy(ye.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(ye)}}for(let oe=0;oe<E.length;oe++){let fe=x[oe],de=E[oe];fe!==null&&de!==void 0&&de.update(fe,J,c||o)}Y&&Y(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let re=new Nl;re.setAnimationLoop(Z),this.setAnimationLoop=function(G){Y=G},this.dispose=function(){}}};function am(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Il(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,E,x,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,w)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,E,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===yt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===yt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let E=e.get(u).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,E,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=x*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){let E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function om(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){let w=x.program;n.uniformBlockBinding(E,w)}function c(E,x){let w=s[E.id];w===void 0&&(g(E),w=h(E),s[E.id]=w,E.addEventListener("dispose",m));let L=x.program;n.updateUBOMapping(E,L);let R=e.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function h(E){let x=d();E.__bindingPointIndex=x;let w=i.createBuffer(),L=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,w),w}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let x=s[E.id],w=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,C=w.length;R<C;R++){let W=Array.isArray(w[R])?w[R]:[w[R]];for(let y=0,T=W.length;y<T;y++){let F=W[y];if(p(F,R,y,L)===!0){let q=F.__offset,j=Array.isArray(F.value)?F.value:[F.value],M=0;for(let A=0;A<j.length;A++){let I=j[A],N=_(I);typeof I=="number"||typeof I=="boolean"?(F.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,q+M,F.__data)):I.isMatrix3?(F.__data[0]=I.elements[0],F.__data[1]=I.elements[1],F.__data[2]=I.elements[2],F.__data[3]=0,F.__data[4]=I.elements[3],F.__data[5]=I.elements[4],F.__data[6]=I.elements[5],F.__data[7]=0,F.__data[8]=I.elements[6],F.__data[9]=I.elements[7],F.__data[10]=I.elements[8],F.__data[11]=0):(I.toArray(F.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,x,w,L){let R=E.value,C=x+"_"+w;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{let W=L[C];if(typeof R=="number"||typeof R=="boolean"){if(W!==R)return L[C]=R,!0}else if(W.equals(R)===!1)return W.copy(R),!0}return!1}function g(E){let x=E.uniforms,w=0,L=16;for(let C=0,W=x.length;C<W;C++){let y=Array.isArray(x[C])?x[C]:[x[C]];for(let T=0,F=y.length;T<F;T++){let q=y[T],j=Array.isArray(q.value)?q.value:[q.value];for(let M=0,A=j.length;M<A;M++){let I=j[M],N=_(I),k=w%L;k!==0&&L-k<N.boundary&&(w+=L-k),q.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=N.storage}}}let R=w%L;return R>0&&(w+=L-R),E.__size=w,E.__cache={},this}function _(E){let x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){let x=E.target;x.removeEventListener("dispose",m);let w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Qn=class{constructor(e={}){let{canvas:t=mh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,u=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=et,this._useLegacyLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1;let x=this,w=!1,L=0,R=0,C=null,W=-1,y=null,T=new gt,F=new gt,q=null,j=new Te(0),M=0,A=t.width,I=t.height,N=1,k=null,X=null,Y=new gt(0,0,A,I),Z=new gt(0,0,A,I),re=!1,G=new ts,J=!1,oe=!1,fe=null,de=new ct,Ae=new ge,Re=new U,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return C===null?N:1}let O=n;function xt(S,D){for(let H=0;H<S.length;H++){let V=S[H],z=t.getContext(V,D);if(z!==null)return z}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ra}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ie,!1),O===null){let D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),O=xt(D,S),O===null)throw xt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _e,we,ce,Xe,Ce,b,v,B,Q,K,ee,pe,ae,he,Se,Oe,$,Ye,Ve,Pe,xe,ue,Ue,qe;function nt(){_e=new Af(O),we=new yf(O,_e,e),_e.init(we),ue=new sm(O,_e,we),ce=new nm(O,_e,we),Xe=new Cf(O),Ce=new Wp,b=new im(O,_e,ce,Ce,we,ue,Xe),v=new Sf(x),B=new Tf(x),Q=new Oh(O,we),Ue=new xf(O,_e,Q,we),K=new wf(O,Q,Xe,Ue),ee=new Nf(O,K,Q,Xe),Ve=new If(O,we,b),Oe=new Mf(Ce),pe=new Gp(x,v,B,_e,we,Ue,Oe),ae=new am(x,Ce),he=new qp,Se=new Qp(_e,we),Ye=new _f(x,v,B,ce,ee,f,l),$=new tm(x,ee,we),qe=new om(O,Xe,we,ce),Pe=new vf(O,_e,Xe,we),xe=new Rf(O,_e,Xe,we),Xe.programs=pe.programs,x.capabilities=we,x.extensions=_e,x.properties=Ce,x.renderLists=he,x.shadowMap=$,x.state=ce,x.info=Xe}nt();let Be=new da(x,O);this.xr=Be,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=_e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=_e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(S){S!==void 0&&(N=S,this.setSize(A,I,!1))},this.getSize=function(S){return S.set(A,I)},this.setSize=function(S,D,H=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=S,I=D,t.width=Math.floor(S*N),t.height=Math.floor(D*N),H===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(A*N,I*N).floor()},this.setDrawingBufferSize=function(S,D,H){A=S,I=D,N=H,t.width=Math.floor(S*H),t.height=Math.floor(D*H),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,D,H,V){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,D,H,V),ce.viewport(T.copy(Y).multiplyScalar(N).floor())},this.getScissor=function(S){return S.copy(Z)},this.setScissor=function(S,D,H,V){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,D,H,V),ce.scissor(F.copy(Z).multiplyScalar(N).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(S){ce.setScissorTest(re=S)},this.setOpaqueSort=function(S){k=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(S=!0,D=!0,H=!0){let V=0;if(S){let z=!1;if(C!==null){let le=C.texture.format;z=le===Tl||le===El||le===bl}if(z){let le=C.texture.type,me=le===In||le===Rn||le===Ca||le===qn||le===Ml||le===Sl,Me=Ye.getClearColor(),Ee=Ye.getClearAlpha(),Fe=Me.r,Le=Me.g,Ie=Me.b;me?(p[0]=Fe,p[1]=Le,p[2]=Ie,p[3]=Ee,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=Fe,g[1]=Le,g[2]=Ie,g[3]=Ee,O.clearBufferiv(O.COLOR,0,g))}else V|=O.COLOR_BUFFER_BIT}D&&(V|=O.DEPTH_BUFFER_BIT),H&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),he.dispose(),Se.dispose(),Ce.dispose(),v.dispose(),B.dispose(),ee.dispose(),Ue.dispose(),qe.dispose(),pe.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Rt),Be.removeEventListener("sessionend",Ke),fe&&(fe.dispose(),fe=null),Ct.stop()};function te(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let S=Xe.autoReset,D=$.enabled,H=$.autoUpdate,V=$.needsUpdate,z=$.type;nt(),Xe.autoReset=S,$.enabled=D,$.autoUpdate=H,$.needsUpdate=V,$.type=z}function ie(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function se(S){let D=S.target;D.removeEventListener("dispose",se),be(D)}function be(S){ve(S),Ce.remove(S)}function ve(S){let D=Ce.get(S).programs;D!==void 0&&(D.forEach(function(H){pe.releaseProgram(H)}),S.isShaderMaterial&&pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,H,V,z,le){D===null&&(D=ye);let me=z.isMesh&&z.matrixWorld.determinant()<0,Me=jl(S,D,H,V,z);ce.setMaterial(V,me);let Ee=H.index,Fe=1;if(V.wireframe===!0){if(Ee=K.getWireframeAttribute(H),Ee===void 0)return;Fe=2}let Le=H.drawRange,Ie=H.attributes.position,rt=Le.start*Fe,Ot=(Le.start+Le.count)*Fe;le!==null&&(rt=Math.max(rt,le.start*Fe),Ot=Math.min(Ot,(le.start+le.count)*Fe)),Ee!==null?(rt=Math.max(rt,0),Ot=Math.min(Ot,Ee.count)):Ie!=null&&(rt=Math.max(rt,0),Ot=Math.min(Ot,Ie.count));let pt=Ot-rt;if(pt<0||pt===1/0)return;Ue.setup(z,V,Me,H,Ee);let dn,tt=Pe;if(Ee!==null&&(dn=Q.get(Ee),tt=xe,tt.setIndex(dn)),z.isMesh)V.wireframe===!0?(ce.setLineWidth(V.wireframeLinewidth*ke()),tt.setMode(O.LINES)):tt.setMode(O.TRIANGLES);else if(z.isLine){let ze=V.linewidth;ze===void 0&&(ze=1),ce.setLineWidth(ze*ke()),z.isLineSegments?tt.setMode(O.LINES):z.isLineLoop?tt.setMode(O.LINE_LOOP):tt.setMode(O.LINE_STRIP)}else z.isPoints?tt.setMode(O.POINTS):z.isSprite&&tt.setMode(O.TRIANGLES);if(z.isBatchedMesh)tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)tt.renderInstances(rt,pt,z.count);else if(H.isInstancedBufferGeometry){let ze=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,dr=Math.min(H.instanceCount,ze);tt.renderInstances(rt,pt,dr)}else tt.render(rt,pt)};function Je(S,D,H){S.transparent===!0&&S.side===Ut&&S.forceSinglePass===!1?(S.side=yt,S.needsUpdate=!0,cs(S,D,H),S.side=Nn,S.needsUpdate=!0,cs(S,D,H),S.side=Ut):cs(S,D,H)}this.compile=function(S,D,H=null){H===null&&(H=S),m=Se.get(H),m.init(),E.push(m),H.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),S!==H&&S.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(x._useLegacyLights);let V=new Set;return S.traverse(function(z){let le=z.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){let Me=le[me];Je(Me,H,z),V.add(Me)}else Je(le,H,z),V.add(le)}),E.pop(),m=null,V},this.compileAsync=function(S,D,H=null){let V=this.compile(S,D,H);return new Promise(z=>{function le(){if(V.forEach(function(me){Ce.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){z(S);return}setTimeout(le,10)}_e.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let $e=null;function ft(S){$e&&$e(S)}function Rt(){Ct.stop()}function Ke(){Ct.start()}let Ct=new Nl;Ct.setAnimationLoop(ft),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(S){$e=S,Be.setAnimationLoop(S),S===null?Ct.stop():Ct.start()},Be.addEventListener("sessionstart",Rt),Be.addEventListener("sessionend",Ke),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(D),D=Be.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,C),m=Se.get(S,E.length),m.init(),E.push(m),de.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),G.setFromProjectionMatrix(de),oe=this.localClippingEnabled,J=Oe.init(this.clippingPlanes,oe),_=he.get(S,u.length),_.init(),u.push(_),ln(S,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(k,X),this.info.render.frame++,J===!0&&Oe.beginShadows();let H=m.state.shadowsArray;if($.render(H,S,D),J===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(_,S),m.setupLights(x._useLegacyLights),D.isArrayCamera){let V=D.cameras;for(let z=0,le=V.length;z<le;z++){let me=V[z];Ba(_,S,me,me.viewport)}}else Ba(_,S,D);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(x,S,D),Ue.resetDefaultState(),W=-1,y=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function ln(S,D,H,V){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){V&&Re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(de);let me=ee.update(S),Me=S.material;Me.visible&&_.push(S,me,Me,H,Re.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||G.intersectsObject(S))){let me=ee.update(S),Me=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Re.copy(S.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Re.copy(me.boundingSphere.center)),Re.applyMatrix4(S.matrixWorld).applyMatrix4(de)),Array.isArray(Me)){let Ee=me.groups;for(let Fe=0,Le=Ee.length;Fe<Le;Fe++){let Ie=Ee[Fe],rt=Me[Ie.materialIndex];rt&&rt.visible&&_.push(S,me,rt,H,Re.z,Ie)}}else Me.visible&&_.push(S,me,Me,H,Re.z,null)}}let le=S.children;for(let me=0,Me=le.length;me<Me;me++)ln(le[me],D,H,V)}function Ba(S,D,H,V){let z=S.opaque,le=S.transmissive,me=S.transparent;m.setupLightsView(H),J===!0&&Oe.setGlobalState(x.clippingPlanes,H),le.length>0&&Ql(z,le,D,H),V&&ce.viewport(T.copy(V)),z.length>0&&ls(z,D,H),le.length>0&&ls(le,D,H),me.length>0&&ls(me,D,H),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Ql(S,D,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let le=we.isWebGL2;fe===null&&(fe=new Mn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?$i:In,minFilter:Ji,samples:le?4:0})),x.getDrawingBufferSize(Ae),le?fe.setSize(Ae.x,Ae.y):fe.setSize(Vs(Ae.x),Vs(Ae.y));let me=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(j),M=x.getClearAlpha(),M<1&&x.setClearColor(16777215,.5),x.clear();let Me=x.toneMapping;x.toneMapping=Ln,ls(S,H,V),b.updateMultisampleRenderTarget(fe),b.updateRenderTargetMipmap(fe);let Ee=!1;for(let Fe=0,Le=D.length;Fe<Le;Fe++){let Ie=D[Fe],rt=Ie.object,Ot=Ie.geometry,pt=Ie.material,dn=Ie.group;if(pt.side===Ut&&rt.layers.test(V.layers)){let tt=pt.side;pt.side=yt,pt.needsUpdate=!0,za(rt,H,V,Ot,pt,dn),pt.side=tt,pt.needsUpdate=!0,Ee=!0}}Ee===!0&&(b.updateMultisampleRenderTarget(fe),b.updateRenderTargetMipmap(fe)),x.setRenderTarget(me),x.setClearColor(j,M),x.toneMapping=Me}function ls(S,D,H){let V=D.isScene===!0?D.overrideMaterial:null;for(let z=0,le=S.length;z<le;z++){let me=S[z],Me=me.object,Ee=me.geometry,Fe=V===null?me.material:V,Le=me.group;Me.layers.test(H.layers)&&za(Me,D,H,Ee,Fe,Le)}}function za(S,D,H,V,z,le){S.onBeforeRender(x,D,H,V,z,le),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(x,D,H,V,S,le),z.transparent===!0&&z.side===Ut&&z.forceSinglePass===!1?(z.side=yt,z.needsUpdate=!0,x.renderBufferDirect(H,D,V,z,S,le),z.side=Nn,z.needsUpdate=!0,x.renderBufferDirect(H,D,V,z,S,le),z.side=Ut):x.renderBufferDirect(H,D,V,z,S,le),S.onAfterRender(x,D,H,V,z,le)}function cs(S,D,H){D.isScene!==!0&&(D=ye);let V=Ce.get(S),z=m.state.lights,le=m.state.shadowsArray,me=z.state.version,Me=pe.getParameters(S,z.state,le,D,H),Ee=pe.getProgramCacheKey(Me),Fe=V.programs;V.environment=S.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(S.isMeshStandardMaterial?B:v).get(S.envMap||V.environment),Fe===void 0&&(S.addEventListener("dispose",se),Fe=new Map,V.programs=Fe);let Le=Fe.get(Ee);if(Le!==void 0){if(V.currentProgram===Le&&V.lightsStateVersion===me)return Va(S,Me),Le}else Me.uniforms=pe.getUniforms(S),S.onBuild(H,Me,x),S.onBeforeCompile(Me,x),Le=pe.acquireProgram(Me,Ee),Fe.set(Ee,Le),V.uniforms=Me.uniforms;let Ie=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=Oe.uniform),Va(S,Me),V.needsLights=tc(S),V.lightsStateVersion=me,V.needsLights&&(Ie.ambientLightColor.value=z.state.ambient,Ie.lightProbe.value=z.state.probe,Ie.directionalLights.value=z.state.directional,Ie.directionalLightShadows.value=z.state.directionalShadow,Ie.spotLights.value=z.state.spot,Ie.spotLightShadows.value=z.state.spotShadow,Ie.rectAreaLights.value=z.state.rectArea,Ie.ltc_1.value=z.state.rectAreaLTC1,Ie.ltc_2.value=z.state.rectAreaLTC2,Ie.pointLights.value=z.state.point,Ie.pointLightShadows.value=z.state.pointShadow,Ie.hemisphereLights.value=z.state.hemi,Ie.directionalShadowMap.value=z.state.directionalShadowMap,Ie.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ie.spotShadowMap.value=z.state.spotShadowMap,Ie.spotLightMatrix.value=z.state.spotLightMatrix,Ie.spotLightMap.value=z.state.spotLightMap,Ie.pointShadowMap.value=z.state.pointShadowMap,Ie.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Le,V.uniformsList=null,Le}function Ha(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=Ei.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Va(S,D){let H=Ce.get(S);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function jl(S,D,H,V,z){D.isScene!==!0&&(D=ye),b.resetTextureUnits();let le=D.fog,me=V.isMeshStandardMaterial?D.environment:null,Me=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:yn,Ee=(V.isMeshStandardMaterial?B:v).get(V.envMap||me),Fe=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Le=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!H.morphAttributes.position,rt=!!H.morphAttributes.normal,Ot=!!H.morphAttributes.color,pt=Ln;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=x.toneMapping);let dn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,tt=dn!==void 0?dn.length:0,ze=Ce.get(V),dr=m.state.lights;if(J===!0&&(oe===!0||S!==y)){let kt=S===y&&V.id===W;Oe.setState(V,S,kt)}let it=!1;V.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==dr.state.version||ze.outputColorSpace!==Me||z.isBatchedMesh&&ze.batching===!1||!z.isBatchedMesh&&ze.batching===!0||z.isInstancedMesh&&ze.instancing===!1||!z.isInstancedMesh&&ze.instancing===!0||z.isSkinnedMesh&&ze.skinning===!1||!z.isSkinnedMesh&&ze.skinning===!0||z.isInstancedMesh&&ze.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ze.instancingColor===!1&&z.instanceColor!==null||ze.envMap!==Ee||V.fog===!0&&ze.fog!==le||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Oe.numPlanes||ze.numIntersection!==Oe.numIntersection)||ze.vertexAlphas!==Fe||ze.vertexTangents!==Le||ze.morphTargets!==Ie||ze.morphNormals!==rt||ze.morphColors!==Ot||ze.toneMapping!==pt||we.isWebGL2===!0&&ze.morphTargetsCount!==tt)&&(it=!0):(it=!0,ze.__version=V.version);let Fn=ze.currentProgram;it===!0&&(Fn=cs(V,D,z));let ka=!1,Hi=!1,fr=!1,bt=Fn.getUniforms(),Bn=ze.uniforms;if(ce.useProgram(Fn.program)&&(ka=!0,Hi=!0,fr=!0),V.id!==W&&(W=V.id,Hi=!0),ka||y!==S){bt.setValue(O,"projectionMatrix",S.projectionMatrix),bt.setValue(O,"viewMatrix",S.matrixWorldInverse);let kt=bt.map.cameraPosition;kt!==void 0&&kt.setValue(O,Re.setFromMatrixPosition(S.matrixWorld)),we.logarithmicDepthBuffer&&bt.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&bt.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Hi=!0,fr=!0)}if(z.isSkinnedMesh){bt.setOptional(O,z,"bindMatrix"),bt.setOptional(O,z,"bindMatrixInverse");let kt=z.skeleton;kt&&(we.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),bt.setValue(O,"boneTexture",kt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(bt.setOptional(O,z,"batchingTexture"),bt.setValue(O,"batchingTexture",z._matricesTexture,b));let pr=H.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0&&we.isWebGL2===!0)&&Ve.update(z,H,Fn),(Hi||ze.receiveShadow!==z.receiveShadow)&&(ze.receiveShadow=z.receiveShadow,bt.setValue(O,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Bn.envMap.value=Ee,Bn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Hi&&(bt.setValue(O,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&ec(Bn,fr),le&&V.fog===!0&&ae.refreshFogUniforms(Bn,le),ae.refreshMaterialUniforms(Bn,V,N,I,fe),Ei.upload(O,Ha(ze),Bn,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ei.upload(O,Ha(ze),Bn,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&bt.setValue(O,"center",z.center),bt.setValue(O,"modelViewMatrix",z.modelViewMatrix),bt.setValue(O,"normalMatrix",z.normalMatrix),bt.setValue(O,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let kt=V.uniformsGroups;for(let mr=0,nc=kt.length;mr<nc;mr++)if(we.isWebGL2){let Ga=kt[mr];qe.update(Ga,Fn),qe.bind(Ga,Fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fn}function ec(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function tc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,D,H){Ce.get(S.texture).__webglTexture=D,Ce.get(S.depthTexture).__webglTexture=H;let V=Ce.get(S);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){let H=Ce.get(S);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,H=0){C=S,L=D,R=H;let V=!0,z=null,le=!1,me=!1;if(S){let Ee=Ce.get(S);Ee.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(O.FRAMEBUFFER,null),V=!1):Ee.__webglFramebuffer===void 0?b.setupRenderTarget(S):Ee.__hasExternalTextures&&b.rebindTextures(S,Ce.get(S.texture).__webglTexture,Ce.get(S.depthTexture).__webglTexture);let Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(me=!0);let Le=Ce.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?z=Le[D][H]:z=Le[D],le=!0):we.isWebGL2&&S.samples>0&&b.useMultisampledRTT(S)===!1?z=Ce.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?z=Le[H]:z=Le,T.copy(S.viewport),F.copy(S.scissor),q=S.scissorTest}else T.copy(Y).multiplyScalar(N).floor(),F.copy(Z).multiplyScalar(N).floor(),q=re;if(ce.bindFramebuffer(O.FRAMEBUFFER,z)&&we.drawBuffers&&V&&ce.drawBuffers(S,z),ce.viewport(T),ce.scissor(F),ce.setScissorTest(q),le){let Ee=Ce.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ee.__webglTexture,H)}else if(me){let Ee=Ce.get(S.texture),Fe=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ee.__webglTexture,H||0,Fe)}W=-1},this.readRenderTargetPixels=function(S,D,H,V,z,le,me){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){ce.bindFramebuffer(O.FRAMEBUFFER,Me);try{let Ee=S.texture,Fe=Ee.format,Le=Ee.type;if(Fe!==nn&&ue.convert(Fe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ie=Le===$i&&(_e.has("EXT_color_buffer_half_float")||we.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Le!==In&&ue.convert(Le)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Cn&&(we.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-V&&H>=0&&H<=S.height-z&&O.readPixels(D,H,V,z,ue.convert(Fe),ue.convert(Le),le)}finally{let Ee=C!==null?Ce.get(C).__webglFramebuffer:null;ce.bindFramebuffer(O.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(S,D,H=0){let V=Math.pow(2,-H),z=Math.floor(D.image.width*V),le=Math.floor(D.image.height*V);b.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,S.x,S.y,z,le),ce.unbindTexture()},this.copyTextureToTexture=function(S,D,H,V=0){let z=D.image.width,le=D.image.height,me=ue.convert(H.format),Me=ue.convert(H.type);b.setTexture2D(H,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment),D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,S.x,S.y,z,le,me,Me,D.image.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,me,D.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,V,S.x,S.y,me,Me,D.image),V===0&&H.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(S,D,H,V,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let le=S.max.x-S.min.x+1,me=S.max.y-S.min.y+1,Me=S.max.z-S.min.z+1,Ee=ue.convert(V.format),Fe=ue.convert(V.type),Le;if(V.isData3DTexture)b.setTexture3D(V,0),Le=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)b.setTexture2DArray(V,0),Le=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);let Ie=O.getParameter(O.UNPACK_ROW_LENGTH),rt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ot=O.getParameter(O.UNPACK_SKIP_PIXELS),pt=O.getParameter(O.UNPACK_SKIP_ROWS),dn=O.getParameter(O.UNPACK_SKIP_IMAGES),tt=H.isCompressedTexture?H.mipmaps[z]:H.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,tt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,S.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,S.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture?O.texSubImage3D(Le,z,D.x,D.y,D.z,le,me,Me,Ee,Fe,tt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Le,z,D.x,D.y,D.z,le,me,Me,Ee,tt.data)):O.texSubImage3D(Le,z,D.x,D.y,D.z,le,me,Me,Ee,Fe,tt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ie),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ot),O.pixelStorei(O.UNPACK_SKIP_ROWS,pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,dn),z===0&&V.generateMipmaps&&O.generateMipmap(Le),ce.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),ce.unbindTexture()},this.resetState=function(){L=0,R=0,C=null,ce.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Pa?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===rr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===et?Zn:wl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zn?et:yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},fa=class extends Qn{};fa.prototype.isWebGL1Renderer=!0;var Sn=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var js=class extends Ht{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},pa=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ge:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new U,s=[],r=[],o=[],a=new U,l=new ct;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(lt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(lt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function dl(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}var Pi=class extends pa{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(dl(a,l.x,c.x,h.x,d.x),dl(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}};var un=class i extends hn{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=lt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new U,f=new ge,p=new U,g=new U,_=new U,m=0,u=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,u=e[E+1].y-e[E].y,p.x=u*1,p.y=-m,p.z=u*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[E+1].x-e[E].x,u=e[E+1].y-e[E].y,p.x=u*1,p.y=-m,p.z=u*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let E=0;E<=t;E++){let x=n+E*h*s,w=Math.sin(x),L=Math.cos(x);for(let R=0;R<=e.length-1;R++){d.x=e[R].x*w,d.y=e[R].y,d.z=e[R].x*L,o.push(d.x,d.y,d.z),f.x=E/t,f.y=R/(e.length-1),a.push(f.x,f.y);let C=l[3*R+0]*w,W=l[3*R+1],y=l[3*R+0]*L;c.push(C,W,y)}}for(let E=0;E<t;E++)for(let x=0;x<e.length-1;x++){let w=x+E*e.length,L=w,R=w+e.length,C=w+e.length+1,W=w+1;r.push(L,R,W),r.push(C,W,R)}this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("uv",new _t(a,2)),this.setAttribute("normal",new _t(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var er=class i extends hn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,h=new ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=n+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Li=class i extends hn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],g=0,_=[],m=n/2,u=0;E(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(p,2));function E(){let w=new U,L=new U,R=0,C=(t-e)/n;for(let W=0;W<=r;W++){let y=[],T=W/r,F=T*(t-e)+e;for(let q=0;q<=s;q++){let j=q/s,M=j*l+a,A=Math.sin(M),I=Math.cos(M);L.x=F*A,L.y=-T*n+m,L.z=F*I,d.push(L.x,L.y,L.z),w.set(A,C,I).normalize(),f.push(w.x,w.y,w.z),p.push(j,1-T),y.push(g++)}_.push(y)}for(let W=0;W<s;W++)for(let y=0;y<r;y++){let T=_[y][W],F=_[y+1][W],q=_[y+1][W+1],j=_[y][W+1];h.push(T,F,j),h.push(F,q,j),R+=6}c.addGroup(u,R,0),u+=R}function x(w){let L=g,R=new ge,C=new U,W=0,y=w===!0?e:t,T=w===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,m*T,0),f.push(0,T,0),p.push(.5,.5),g++;let F=g;for(let q=0;q<=s;q++){let M=q/s*l+a,A=Math.cos(M),I=Math.sin(M);C.x=y*I,C.y=m*T,C.z=y*A,d.push(C.x,C.y,C.z),f.push(0,T,0),R.x=A*.5+.5,R.y=I*.5*T+.5,p.push(R.x,R.y),g++}for(let q=0;q<s;q++){let j=L+q,M=F+q;w===!0?h.push(M,M+1,j):h.push(M+1,M,j),W+=3}c.addGroup(u,W,w===!0?1:2),u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wt=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yt=class extends wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Is(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ii=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ma=class extends Ii{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:So,endingEnd:So}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bo:r=e,a=2*t-n;break;case Eo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bo:o=e,l=2*n-t;break;case Eo:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,u=-f*m+2*f*_-f*g,E=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,w=p*m-p*_;for(let L=0;L!==a;++L)r[L]=u*o[h+L]+E*o[c+L]+x*o[l+L]+w*o[d+L];return r}},ga=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},_a=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},rn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Is(t,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Is(e.times,Array),values:Is(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ma(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case Sr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return Sr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&lm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sr,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[f+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Os;var jn=class extends rn{};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Ds;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends rn{};xa.prototype.ValueTypeName="color";var va=class extends rn{};va.prototype.ValueTypeName="number";var ya=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ns=class extends rn{InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}};ns.prototype.ValueTypeName="quaternion";ns.prototype.DefaultInterpolation=Os;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends rn{};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Ds;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends rn{};Ma.prototype.ValueTypeName="vector";var fl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Sa=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},cm=new Sa,is=class{constructor(e){this.manager=e!==void 0?e:cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};is.DEFAULT_MATERIAL_NAME="__DEFAULT";var ba=class extends is{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=fl.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Qi("img");function l(){h(),fl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var tr=class extends is{constructor(e){super(e)}load(e,t,n,s){let r=new Ht,o=new ba(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},nr=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ni=class extends nr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Xr=new ct,pl=new U,ml=new U,Ea=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(pl),ml.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ml),t.updateMatrixWorld(),Xr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ta=class extends Ea{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ui=class extends nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Ta}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Na="\\[\\]\\.:\\/",hm=new RegExp("["+Na+"]","g"),Ua="[^"+Na+"]",um="[^"+Na.replace("\\.","")+"]",dm=/((?:WC+[\/:])*)/.source.replace("WC",Ua),fm=/(WCOD+)?/.source.replace("WCOD",um),pm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ua),mm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ua),gm=new RegExp("^"+dm+fm+pm+mm+"$"),_m=["material","materials","bones","map"],Aa=class{constructor(e,t,n){let s=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},je=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hm,"")}static parseTrackName(e){let t=gm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_m.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=Aa;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qm=new Float32Array(1);var ir=class{constructor(e,t,n=0,s=1/0){this.ray=new Xs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return wa(e,this,n,t),n.sort(gl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)wa(e[s],this,n,t);return n.sort(gl),n}};function gl(i,e){return i.distance-e.distance}function wa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)wa(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);var rs=new U;function Zt(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;rs.copy(e),rs[n]=0,rs.normalize();let c=.5*o/(o+a),h=1-rs.angleTo(i)/l;return Math.sign(rs[t])===1?h*c:a/(o+a)+c+c*(1-h)}var as=class extends At{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new U,l=new U,c=new U(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new U,_=.5/s;for(let m=0,u=0;m<h.length;m+=3,u+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),f[u+0]=Zt(g,l,"z","y",r,n),f[u+1]=1-Zt(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[u+0]=1-Zt(g,l,"z","y",r,n),f[u+1]=1-Zt(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[u+0]=1-Zt(g,l,"x","z",r,e),f[u+1]=Zt(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),f[u+0]=1-Zt(g,l,"x","z",r,e),f[u+1]=1-Zt(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),f[u+0]=1-Zt(g,l,"x","y",r,e),f[u+1]=1-Zt(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[u+0]=Zt(g,l,"x","y",r,e),f[u+1]=1-Zt(g,l,"y","x",r,t);break}}};function Dt(i,e,t,n=!0){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new js(s);return n&&(r.colorSpace=et),r.anisotropy=8,r}function Bi(i){let e=i;return()=>(e=e*16807%2147483647)/2147483647}function lr(i,e=.55,t=1){let n=new Sn,s=c=>new ot({color:new Te().setScalar(c),side:Ut}),r=new Ne(new At(14,8,14),new ot({color:new Te(e,e*.96,e*.92),side:yt}));r.position.y=2.5,n.add(r);let o=(c,h,d,f,p,g,_,m,u=!1)=>{let E=new Ne(new Mt(c,h),s(m));E.position.set(d,f,p),u?E.lookAt(0,f,0):E.rotation.set(g,_,0),n.add(E)};o(6,3.5,0,6.4,.5,Math.PI/2,0,5*t),o(1.6,5.5,-3.6,2.2,4.2,0,0,6*t,!0),o(.9,5.5,3.8,2.2,3.9,0,0,3*t,!0),o(4,7,-6.9,2.5,-1,0,Math.PI/2,.02),o(4,7,6.9,2.5,-1,0,-Math.PI/2,.02),o(14,14,0,-1.4,0,-Math.PI/2,0,e*.7);let a=new Kn(i),l=a.fromScene(n,.03).texture;return a.dispose(),l}function zl(i){let e=new Sn,t=o=>new ot({color:new Te().setScalar(o),side:Ut});e.add(new Ne(new At(14,8,14),new ot({color:new Te(.05,.048,.046),side:yt})));let n=(o,a,l,c,h,d,f,p,g=!1)=>{let _=new Ne(new Mt(o,a),t(p));_.position.set(l,c,h),g?_.lookAt(0,c,0):_.rotation.set(d,f,0),e.add(_)};n(1.5,6.5,-3,.6,3.8,0,0,15,!0),n(.5,6.5,3.3,.6,3.6,0,0,11,!0),n(5,1.6,0,4.6,1.2,Math.PI/2,0,6),n(12,3,0,-1,-6.8,0,0,.35);let s=new Kn(i),r=s.fromScene(e,.01).texture;return s.dispose(),r}var Vt=(i,e)=>new ge(i,e),On=(i,e)=>new Pi(i.map(([t,n])=>Vt(t,n))).getPoints(e),ti=i=>i.map(([e,t])=>Vt(e,t)),Oa={bordelaise:{profil:[].concat([Vt(0,.022)],On([[.008,.02],[.016,.012],[.024,.0045],[.03,6e-4],[.035,.0016],[.0372,.006],[.0378,.014]],20),ti([[.0378,.12]]),On([[.0378,.205],[.0375,.2135],[.0358,.2235],[.0316,.2335],[.0252,.2425],[.0196,.2495],[.0167,.2565],[.0158,.264]],40),ti([[.0151,.291],[.0158,.2925],[.016,.3015],[.0151,.304],[0,.304]])),capsule:[[.0168,.2575],[.0166,.2595],[.0163,.2665],[.0161,.2895],[.0165,.2925],[.0166,.3025],[.0158,.3055],[0,.3055]],etiquette:[.06,.163,2.15],niveau:.258},bourguignonne:{profil:[].concat([Vt(0,.025)],On([[.009,.022],[.018,.013],[.026,.005],[.032,6e-4],[.0378,.0016],[.0404,.006],[.0411,.015]],20),ti([[.0411,.1]]),On([[.0411,.148],[.0406,.165],[.0388,.183],[.035,.202],[.0296,.219],[.024,.233],[.0196,.245],[.0168,.255],[.0159,.264]],44),ti([[.0152,.284],[.0159,.2855],[.0161,.2935],[.0152,.296],[0,.296]])),capsule:[[.0172,.2545],[.0169,.257],[.0164,.2655],[.0162,.2825],[.0166,.2855],[.0167,.2945],[.0159,.2975],[0,.2975]],etiquette:[.042,.13,2],niveau:.256},flute:{profil:[].concat([Vt(0,.02)],On([[.008,.018],[.016,.011],[.024,.004],[.029,6e-4],[.0348,.0016],[.0378,.006],[.0385,.014]],20),ti([[.0385,.09]]),On([[.0385,.138],[.0382,.156],[.0366,.178],[.0333,.203],[.0285,.228],[.023,.252],[.0186,.272],[.016,.289],[.0151,.3]],46),ti([[.0145,.317],[.0152,.3185],[.0154,.3265],[.0146,.329],[0,.329]])),capsule:[[.0164,.2865],[.016,.2895],[.0156,.2985],[.0154,.3155],[.0159,.3185],[.016,.3275],[.0153,.3302],[0,.3302]],etiquette:[.036,.122,1.75],niveau:.287},provence:{profil:[].concat([Vt(0,.02)],On([[.008,.018],[.016,.01],[.024,.0035],[.029,6e-4],[.0334,.0016],[.0356,.006]],18),On([[.0364,.014],[.0366,.04],[.0352,.078],[.0334,.108],[.033,.126],[.0338,.152],[.0356,.177],[.0362,.193],[.0349,.209],[.0308,.225],[.0244,.24],[.0192,.252],[.0164,.262],[.0157,.27]],70),ti([[.0151,.289],[.0158,.2905],[.016,.2985],[.0151,.301],[0,.301]])),capsule:[[.0168,.2615],[.0164,.264],[.0161,.2715],[.0159,.2875],[.0163,.2905],[.0164,.2995],[.0157,.3025],[0,.3025]],etiquette:[.082,.146,1.7],niveau:.262}};Oa.demi=(()=>{let i=Oa.bordelaise,e=.82,t=.785,n=s=>Vt(s.y>.25?s.x*.95:s.x*e,s.y*t);return{profil:i.profil.map(n),capsule:i.capsule.map(([s,r])=>[r*t>.25*t?s*.95:s*e,r*t]),etiquette:[.05,.128,2.15],niveau:i.niveau*t}})();var Da={};function xm(i){if(Da[i])return Da[i];let e=Oa[i],t=new un(e.profil,72),n=[];e.profil.forEach(g=>{g.y>.001&&g.y<=e.niveau&&g.x>.004&&n.push(Vt(Math.max(0,g.x-.003),g.y+(g.y<.03?.003:0)))});let s=n[n.length-1],r=new un([Vt(0,e.profil[0].y+.003)].concat(n,[Vt(s.x,e.niveau),Vt(0,e.niveau)]),56),o=new un(e.capsule.map(([g,_])=>Vt(g,_)),56),[a,l,c]=e.etiquette,h=g=>{for(let _=0;_<e.profil.length-1;_++){let m=e.profil[_],u=e.profil[_+1];if(g>=m.y&&g<=u.y)return m.x+(u.x-m.x)*(g-m.y)/Math.max(1e-6,u.y-m.y)}return .03},d=[];for(let g=0;g<=24;g++){let _=a+(l-a)*g/24;d.push(Vt(h(_)+5e-4,_))}let f=new un(d,56,-c/2,c),p=h((a+l)/2);return Da[i]={verre:t,vin:r,capsule:o,etiquette:f,haut:e.profil[e.profil.length-1].y,ratio:c*p/(l-a),rMax:Math.max(...e.profil.map(g=>g.x))}}function vm(i,e,t){return new sn({uniforms:{teinte:{value:new Te(i)},o0:{value:e},o1:{value:t}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform vec3 teinte; uniform float o0; uniform float o1; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.2); gl_FragColor = vec4(teinte * (1.0 - 0.35 * f), mix(o0, o1, f));
#include <colorspace_fragment>
}`,transparent:!0,depthWrite:!1})}var ym={vert:[1121555,.34,.99],feuilleMorte:[2301710,.36,.99],vertAlsace:[4020525,.26,.92],extraBlanc:[6255720,.04,.72],olive:[5920041,.2,.9]},Mm={rouge:[2752774,.004],rougeZero:[3671056,.006],blanc:[15126396,.085],blancVert:[14337642,.085],rose:[15634322,.06],rosePale:[15967888,.062]},on={teinte:{},vin:{},capsule:{},etiq:{}},Vl=null,os=null,Hl=null;function kl(i){Vl=i,os&&(os.envMap=i,os.needsUpdate=!0)}function Sm(){return os||(os=new Yt({color:0,metalness:0,roughness:.05,envMap:Vl,envMapIntensity:1,specularIntensity:1,transparent:!0,depthWrite:!1,blending:Ns}))}function bm(i){let[e,t,n]=ym[i];return on.teinte[i]||(on.teinte[i]=vm(e,t,n))}function Em(i){let[e,t]=Mm[i];return on.vin[i]||(on.vin[i]=new Yt({color:16777215,metalness:0,roughness:.1,transmission:1,thickness:.07,ior:1.36,attenuationColor:e,attenuationDistance:t,envMapIntensity:0,specularIntensity:0}))}function Tm(i){return Dt(256,256,(e,t,n)=>{let s=Bi(i.length*13);e.fillStyle=i,e.fillRect(0,0,t,n);for(let r=0;r<t;r+=2)e.fillStyle=`rgba(${s()>.5?"255,255,255":"0,0,0"},${s()*.08})`,e.fillRect(r,0,1.5,n*.84);e.fillStyle="rgba(0,0,0,.25)",e.fillRect(0,0,t,n*.035),e.fillStyle="rgba(0,0,0,.3)",e.fillRect(0,n*.655,t,2),e.fillRect(0,n*.7,t,1.5),e.fillStyle="rgba(255,255,255,.14)",e.fillRect(0,n*.662,t,1),e.fillStyle="rgba(0,0,0,.12)",e.fillRect(0,n*.86,t,n*.14)})}function Am([i,e]){let t=i+"-"+e;if(on.capsule[t])return on.capsule[t];let n=Tm("#"+new Te(i).getHexString());return n.flipY=!1,on.capsule[t]=new wt({map:n,roughness:.38,metalness:e,envMapIntensity:.8})}function wm(){return Hl||(Hl=new ot({transparent:!0,depthWrite:!1,map:Dt(128,128,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,2,e/2,t/2,e/2);n.addColorStop(0,"rgba(25,16,14,.55)"),n.addColorStop(.42,"rgba(25,16,14,.22)"),n.addColorStop(1,"rgba(25,16,14,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)})}))}var an="'Cormorant Garamond', 'Times New Roman', serif",dt="'Azeret Mono', ui-monospace, monospace",cr="'Instrument Sans', system-ui, sans-serif";function Rm(i,e,t,n,s){i.fillStyle=n,i.fillRect(0,0,e,t);let r=Bi(s);for(let a=0;a<e*t/90;a++)i.fillStyle=`rgba(80,60,35,${r()*.05})`,i.fillRect(r()*e,r()*t,1.3,1.3);let o=i.createLinearGradient(0,0,e,0);o.addColorStop(0,"rgba(60,40,20,.10)"),o.addColorStop(.18,"rgba(60,40,20,0)"),o.addColorStop(.82,"rgba(60,40,20,0)"),o.addColorStop(1,"rgba(60,40,20,.10)"),i.fillStyle=o,i.fillRect(0,0,e,t)}function Ge(i,e,t,n,s,r,o=0){if(i.fillStyle=r,i.font=s,!o){i.fillText(e,t,n);return}let a=e.split(""),l=a.map(f=>i.measureText(f).width),c=l.reduce((f,p)=>f+p,0)+o*(a.length-1),h=t-c/2,d=i.textAlign;i.textAlign="left",a.forEach((f,p)=>{i.fillText(f,h,n),h+=l[p]+o}),i.textAlign=d}function zi(i,e,t,n,s,r){let o=n;for(i.font=`${t} ${o}px ${s}`;i.measureText(e).width>r&&o>10;)o-=2,i.font=`${t} ${o}px ${s}`;return`${t} ${o}px ${s}`}function Cm(i,e,t,n,s){i.strokeStyle=s,i.lineWidth=2,i.globalAlpha=.75;let r=n/200;i.beginPath(),i.moveTo(e-90*r,t),i.lineTo(e+90*r,t),i.moveTo(e-60*r,t),i.lineTo(e-60*r,t-40*r),i.lineTo(e+60*r,t-40*r),i.lineTo(e+60*r,t),i.moveTo(e-70*r,t-40*r),i.lineTo(e,t-62*r),i.lineTo(e+70*r,t-40*r),[-1,1].forEach(o=>{let a=e+o*60*r;i.moveTo(a-12*r,t),i.lineTo(a-12*r,t-58*r),i.lineTo(a,t-78*r),i.lineTo(a+12*r,t-58*r),i.lineTo(a+12*r,t)});for(let o=-2;o<=2;o++)i.moveTo(e+o*18*r-5*r,t-12*r),i.lineTo(e+o*18*r-5*r,t-26*r),i.lineTo(e+o*18*r+5*r,t-26*r),i.lineTo(e+o*18*r+5*r,t-12*r);i.stroke();for(let o=0;o<6;o++)i.beginPath(),i.moveTo(e-92*r+o*3*r,t-4*r*o),i.lineTo(e+92*r-o*3*r,t-4*r*o),i.globalAlpha=.1,i.stroke();i.globalAlpha=1}var Gl={bordeaux:{fond:"#f1eadc",encre:"#3b1a1f",style:"chateau",haut:"S\xC9LECTION \xC0 PORT\xC9E DE VIN",nom:"BORDEAUX",sous:"Appellation Bordeaux Contr\xF4l\xE9e",an:"2022",bas:"13,5 % vol. \xB7 75 cl"},bourgogne:{fond:"#efe6d2",encre:"#2a2224",style:"bourgogne",haut:"S\xC9LECTION \xC0 PORT\xC9E DE VIN",nom:"Bourgogne",sous:"PINOT NOIR",an:"2022",bas:"13 % vol. \xB7 75 cl"},rhone:{fond:"#f3ede3",encre:"#5c1424",style:"bande",haut:"S\xC9LECTION \xC0 PORT\xC9E DE VIN",nom:"C\xF4tes du Rh\xF4ne",sous:"GRENACHE \xB7 SYRAH",an:"2023",bas:"14 % vol. \xB7 75 cl",bande:"#6a1325"},alsace:{fond:"#f8f5ec",encre:"#22362a",style:"alsace",haut:"VIN D'ALSACE",nom:"Riesling",sous:"APPELLATION ALSACE CONTR\xD4L\xC9E",an:"2023",bas:"12,5 % vol. \xB7 75 cl",bande:"#3e5c45"},e2m:{fond:"#fbf9f4",encre:"#23201f",style:"moderne",haut:"\xC0 PORT\xC9E DE VIN",nom:"Entre-deux-Mers",sous:"SAUVIGNON \xB7 S\xC9MILLON",an:"2024",bas:"12 % vol. \xB7 75 cl"},chablis:{fond:"#f4efe3",encre:"#3a3330",style:"bourgogne",haut:"S\xC9LECTION \xC0 PORT\xC9E DE VIN",nom:"Chablis",sous:"CHARDONNAY",an:"2023",bas:"12,5 % vol. \xB7 75 cl",filet:"#b49455"},provence:{fond:"#fbf3ee",encre:"#7d2234",style:"provence",haut:"ROS\xC9",nom:"C\xF4tes de Provence",sous:"",an:"2024",bas:"13 % vol. \xB7 75 cl"},bxRose:{fond:"#fbeee9",encre:"#7d2234",style:"moderne",haut:"\xC0 PORT\xC9E DE VIN",nom:"Bordeaux ros\xE9",sous:"MERLOT \xB7 CABERNET",an:"2024",bas:"12,5 % vol. \xB7 75 cl"},bxRoseDemi:{fond:"#fbeee9",encre:"#7d2234",style:"moderne",haut:"\xC0 PORT\xC9E DE VIN",nom:"Bordeaux ros\xE9",sous:"MERLOT \xB7 CABERNET",an:"2024",bas:"12,5 % vol. \xB7 37,5 cl"},bordeauxDemi:{fond:"#f1eadc",encre:"#3b1a1f",style:"chateau",haut:"S\xC9LECTION \xC0 PORT\xC9E DE VIN",nom:"BORDEAUX",sous:"Appellation Bordeaux Contr\xF4l\xE9e",an:"2022",bas:"13,5 % vol. \xB7 37,5 cl"},zeroRouge:{fond:"#ffffff",encre:"#2f5c41",style:"zero",nom:"ROUGE",bas:"0,0 % vol. \xB7 75 cl"},zeroBlanc:{fond:"#ffffff",encre:"#2f5c41",style:"zero",nom:"BLANC",bas:"0,0 % vol. \xB7 75 cl"},zeroRose:{fond:"#ffffff",encre:"#2f5c41",style:"zero",nom:"ROS\xC9",bas:"0,0 % vol. \xB7 75 cl"}};function Wl(i,e){let n=Math.round(600/e);return Dt(600,n,(s,r,o)=>{Rm(s,r,o,i.fond,i.nom.length*17+o),s.textAlign="center",s.textBaseline="alphabetic";let a=r/2,l=r*.1;i.style==="chateau"?(s.strokeStyle=i.encre,s.lineWidth=2,s.globalAlpha=.7,s.strokeRect(22,22,r-44,o-44),s.lineWidth=1,s.strokeRect(32,32,r-64,o-64),s.globalAlpha=1,Ge(s,i.haut,a,o*.13,`500 ${r*.028}px ${dt}`,i.encre,2),Cm(s,a,o*.42,r*.62,i.encre),s.font=zi(s,i.nom,600,r*.13,an,r-2*l),Ge(s,i.nom,a,o*.6,s.font,i.encre,r*.012),Ge(s,i.sous,a,o*.68,`italic 400 ${r*.052}px ${an}`,i.encre),Ge(s,i.an,a,o*.8,`500 ${r*.075}px ${an}`,"#8a6a2f"),Ge(s,i.bas,a,o*.9,`400 ${r*.03}px ${dt}`,i.encre)):i.style==="bourgogne"?(Ge(s,i.haut,a,o*.14,`500 ${r*.028}px ${dt}`,i.encre,2),s.fillStyle=i.filet||i.encre,s.fillRect(l,o*.2,r-2*l,2),s.font=zi(s,i.nom,"italic 500",r*.18,an,r-2*l),Ge(s,i.nom,a,o*.47,s.font,i.encre),Ge(s,i.sous,a,o*.6,`500 ${r*.036}px ${dt}`,i.encre,4),s.fillStyle=i.filet||i.encre,s.fillRect(a-r*.08,o*.67,r*.16,2),Ge(s,i.an,a,o*.8,`500 ${r*.07}px ${an}`,i.encre),Ge(s,i.bas,a,o*.91,`400 ${r*.03}px ${dt}`,i.encre)):i.style==="bande"?(s.fillStyle=i.bande,s.fillRect(0,o*.72,r,o*.28),Ge(s,i.haut,a,o*.14,`500 ${r*.028}px ${dt}`,i.encre,2),s.font=zi(s,i.nom,500,r*.14,an,r-2*l),Ge(s,i.nom,a,o*.4,s.font,i.encre),Ge(s,i.sous,a,o*.52,`500 ${r*.034}px ${dt}`,i.encre,3),Ge(s,i.an,a,o*.64,`500 ${r*.06}px ${an}`,"#8a6a2f"),Ge(s,i.bas,a,o*.88,`400 ${r*.032}px ${dt}`,"#f1e6dc")):i.style==="alsace"?(s.fillStyle=i.bande,s.fillRect(0,0,r,o*.2),Ge(s,i.haut,a,o*.13,`500 ${r*.035}px ${dt}`,"#eef2ea",4),s.font=zi(s,i.nom,"italic 500",r*.2,an,r-2*l),Ge(s,i.nom,a,o*.5,s.font,i.encre),Ge(s,i.sous,a,o*.62,`500 ${r*.026}px ${dt}`,i.encre,2),Ge(s,i.an,a,o*.76,`500 ${r*.07}px ${an}`,i.encre),Ge(s,i.bas,a,o*.9,`400 ${r*.03}px ${dt}`,i.encre)):i.style==="provence"?(s.strokeStyle=i.encre,s.globalAlpha=.5,s.lineWidth=2,s.beginPath(),s.ellipse(a,o/2,r*.44,o*.42,0,0,Math.PI*2),s.stroke(),s.globalAlpha=1,Ge(s,i.haut,a,o*.26,`500 ${r*.045}px ${dt}`,i.encre,6),s.font=zi(s,i.nom,"italic 500",r*.12,an,r*.78),Ge(s,i.nom,a,o*.52,s.font,i.encre),Ge(s,i.an,a,o*.68,`500 ${r*.07}px ${an}`,i.encre),Ge(s,i.bas,a,o*.8,`400 ${r*.035}px ${dt}`,i.encre)):i.style==="moderne"?(Ge(s,i.haut,a,o*.14,`500 ${r*.03}px ${dt}`,i.encre,3),s.font=zi(s,i.nom,400,r*.13,cr,r-2*l),Ge(s,i.nom,a,o*.42,s.font,i.encre),Ge(s,i.sous,a,o*.53,`500 ${r*.032}px ${dt}`,i.encre,3),s.fillStyle=i.encre,s.globalAlpha=.6,s.fillRect(a-r*.06,o*.6,r*.12,2),s.globalAlpha=1,Ge(s,i.an,a,o*.74,`400 ${r*.07}px ${cr}`,i.encre),Ge(s,i.bas,a,o*.89,`400 ${r*.03}px ${dt}`,i.encre)):i.style==="zero"&&(Ge(s,"SANS ALCOOL",a,o*.15,`600 ${r*.04}px ${dt}`,i.encre,4),Ge(s,"0,0",a,o*.5,`400 ${r*.32}px ${cr}`,i.encre),Ge(s,"VIN D\xC9SALCOOLIS\xC9",a,o*.64,`500 ${r*.036}px ${dt}`,i.encre,3),Ge(s,i.nom,a,o*.76,`500 ${r*.07}px ${cr}`,"#23201f"),Ge(s,i.bas,a,o*.9,`400 ${r*.03}px ${dt}`,"#23201f"))})}var Pm=[];function Xl(){Object.entries(on.etiq).forEach(([i,e])=>{let[t,n]=i.split("|"),s=Wl(Gl[t],+n);e.map.dispose(),e.map=s,e.needsUpdate=!0})}function Lm(i,e){let t=i+"|"+e.toFixed(3);if(on.etiq[t])return on.etiq[t];let n=Wl(Gl[i],e);return Pm.push(n),on.etiq[t]=new wt({map:n,roughness:.88,metalness:0,envMapIntensity:.4})}var Im={bordeaux:{forme:"bordelaise",verre:"vert",vin:"rouge",capsule:[5115677,.45]},bourgogne:{forme:"bourguignonne",verre:"feuilleMorte",vin:"rouge",capsule:[1906970,.4]},rhone:{forme:"bourguignonne",verre:"vert",vin:"rouge",capsule:[6951717,.45]},alsace:{forme:"flute",verre:"vertAlsace",vin:"blancVert",capsule:[12890239,.75]},e2m:{forme:"bordelaise",verre:"extraBlanc",vin:"blanc",capsule:[12096846,.85]},chablis:{forme:"bourguignonne",verre:"olive",vin:"blanc",capsule:[14275525,.5]},provence:{forme:"provence",verre:"extraBlanc",vin:"rosePale",capsule:[15656667,.25]},bxRose:{forme:"bordelaise",verre:"extraBlanc",vin:"rose",capsule:[14262939,.45]},zeroRouge:{forme:"bordelaise",verre:"vert",vin:"rougeZero",capsule:[3893836,.4]},zeroBlanc:{forme:"bordelaise",verre:"extraBlanc",vin:"blanc",capsule:[3893836,.4]},zeroRose:{forme:"bordelaise",verre:"extraBlanc",vin:"rose",capsule:[3893836,.4]},bordeauxDemi:{forme:"demi",verre:"vert",vin:"rouge",capsule:[5115677,.45]},bxRoseDemi:{forme:"demi",verre:"extraBlanc",vin:"rose",capsule:[14262939,.45]}};function Fa(i,e=!0,t=!1){let n=Im[i],s=xm(n.forme),r=new zt;r.add(new Ne(s.vin,Em(n.vin)));let o=new Ne(s.verre,bm(n.verre));o.renderOrder=1,r.add(o);let a=new Ne(s.verre,Sm());if(a.renderOrder=2,r.add(a),r.add(new Ne(s.capsule,Am(n.capsule))),e&&r.add(new Ne(s.etiquette,Lm(i,s.ratio))),t){let l=new Ne(new Mt(s.rMax*3.4,s.rMax*2.6),wm());l.rotation.x=-Math.PI/2,l.position.set(.004,6e-4,-.004),l.renderOrder=0,r.add(l)}return r.userData.haut=s.haut,r}var ql=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Nm=()=>Dt(512,512,(i,e,t)=>{let n=Bi(7);i.fillStyle="#8f8f8f",i.fillRect(0,0,e,t);for(let s=0;s<t;s++){let r=110+Math.floor(n()*90);i.fillStyle=`rgba(${r},${r},${r},${.3+n()*.5})`,i.fillRect(0,s,e,1)}},!1),Um=()=>Dt(512,128,(i,e,t)=>{let n=Bi(11),s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"#e6c9a0"),s.addColorStop(1,"#d3ad7f"),i.fillStyle=s,i.fillRect(0,0,e,t);for(let r=0;r<80;r++){let o=n()*t,a=.05+n()*.13;i.strokeStyle=`rgba(118,74,38,${a})`,i.lineWidth=.5+n()*1.5,i.beginPath(),i.moveTo(0,o);for(let l=0;l<=e;l+=24)i.lineTo(l,o+Math.sin(l/70+r)*(1+n()*2.2));i.stroke()}});function Dm(i){return Dt(128,128,(e,t,n)=>{let s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#efd8a6"),s.addColorStop(.5,"#c9a362"),s.addColorStop(1,"#a6823f"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(58,38,10,.88)",e.font="500 76px 'Instrument Sans', system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(String(i),t/2,n/2+4)})}var Yl=[{couche:["bordeaux","bordeaux","bordeaux","bordeaux","bordeaux","bordeaux"],milieu:["rhone","rhone","rhone","bordeaux","bordeaux"],haut:["bordeaux","bordeaux","bourgogne","bourgogne"]},{couche:["e2m","e2m","e2m","e2m","e2m","e2m"],milieu:["alsace","alsace","alsace","alsace","alsace"],haut:["chablis","chablis","e2m","e2m"]},{couche:["bxRose","bxRose","bxRose","bxRose","bxRose","bxRose"],milieu:["provence","provence","provence","bxRose","bxRose"],haut:["provence","provence","bxRose","bxRose"]},{couche:["zeroRouge","zeroRouge","zeroBlanc","zeroBlanc","zeroRose","zeroRose"],milieu:["zeroRouge","zeroRouge","zeroBlanc","zeroBlanc","zeroBlanc"],haut:["zeroRose","zeroRose","zeroRouge","zeroRouge"]}];function Om(){return Dt(512,64,(i,e,t)=>{i.fillStyle="#0b0c0d",i.fillRect(0,0,e,t),i.textBaseline="middle",i.textAlign="right",i.fillStyle="#dff1f5",i.font="500 28px 'Azeret Mono', ui-monospace, monospace",i.fillText("12 \xB0C",e-26,t/2+1),i.fillStyle="#3a3d40",i.beginPath(),i.arc(30,t/2,7,0,Math.PI*2),i.fill()})}var We=.6,st=.98,St=.54,Jt=.024,hr=St/2+.034;function Fm(i,e){let t=Yl[i%Yl.length],n=new zt,s=(E,x,w,L,R,C,W,y=0)=>{let T=new Ne(y?new as(E,x,w,3,y):new At(E,x,w),L);return T.position.set(R,C,W),n.add(T),T};s(Jt,st,St,e.inox,-We/2+Jt/2,st/2,0,.006),s(Jt,st,St,e.inox,We/2-Jt/2,st/2,0,.006),s(We,Jt,St,e.inox,0,st-Jt/2,0,.006),s(We,.07,St,e.noir,0,.035,0);for(let E=0;E<9;E++)s(.032,.026,.004,e.grille,-.2+E*.05,.036,St/2+.002);let r=new Ne(new Mt(We-2*Jt,st-.08),e.fondLumineux);r.position.set(0,st/2+.035,-St/2+.014),n.add(r),s(We-2*Jt,st,.01,e.fond,0,st/2,-St/2+.005),s(We-2*Jt,.008,St,e.fond,0,.074,0),[-1,1].forEach(E=>{let x=new Ne(new Mt(St-.02,st-.1),e.paroi);x.rotation.y=-E*Math.PI/2,x.position.set(E*(We/2-Jt-.001),st/2+.03,0),n.add(x)}),s(We,.055,.012,e.verreNoir,0,st-.03,St/2+.002);let o=new Ne(new Mt(.5,.0625),new ot({map:Om(),toneMapped:!1}));o.position.set(0,st-.03,St/2+.0085),n.add(o);let a=new Ne(new At(We-.1,.006,.01),new ot({color:16774108,toneMapped:!1}));a.position.set(0,st-.07,St/2-.05),n.add(a);let l=E=>{s(We-2*Jt-.006,.03,.022,e.bois,0,E,St/2-.05,.004),s(We-2*Jt-.01,.008,St-.1,e.alu,0,E-.012,-.02)};l(.088),t.couche.forEach((E,x)=>{let w=Fa(E,!1);w.rotation.x=Math.PI/2,w.rotation.y=x*1.7,w.position.set(-.2+x*.08,.088+.053,-.205),n.add(w)}),[[.2,t.milieu,.098],[.57,t.haut,.115]].forEach(([E,x,w],L)=>{l(E),x.forEach((R,C)=>{let W=Fa(R,!0,!0);W.position.set((C-(x.length-1)/2)*w,E-.008,-.04-C%2*.03),W.rotation.y=Math.sin(C*2.3+i+L)*.14,n.add(W)})});let c=new zt;c.position.set(-We/2,.075,St/2+.02);let h=.03,d=st-.075-.06,f=(E,x,w,L)=>{let R=new Ne(new as(E,x,.028,3,.006),e.inox);R.position.set(w,L,0),c.add(R)};f(h,d,h/2,d/2),f(h,d,We-h/2,d/2),f(We,h,We/2,h/2),f(We,h,We/2,d-h/2);let p=new Ne(new At(We-2*h,d-2*h,.006),e.vitre);p.position.set(We/2,d/2,0),c.add(p);let g=new Ne(new Mt(We-2*h,d-2*h),e.reflet);g.position.set(We/2,d/2,.0036),c.add(g);let _=new Ne(new Li(.008,.008,.4,24),e.inoxPoli);_.position.set(We-.058,d/2,.045),c.add(_),[-.16,.16].forEach(E=>{let x=new Ne(new Li(.0055,.0055,.04,16),e.inoxPoli);x.rotation.x=Math.PI/2,x.position.set(We-.058,d/2+E,.024),c.add(x)});let m=new Ne(new At(.056,.056,.004),new wt({map:Dm(i+1),metalness:.6,roughness:.35}));m.position.set(.07,d-.07,.016),c.add(m),n.add(c);let u=new Ne(new Mt(We*1.5,St*1.6),e.contact);return u.rotation.x=-Math.PI/2,u.position.set(0,.0015,.02),n.add(u),n.userData={porte:c,angle:0,cible:0,n:i},n}function Zl(i,e,t={}){let n;try{n=new Qn({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0})}catch{i.classList.add("sans-3d");return}n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.outputColorSpace=et,n.toneMapping=ss,n.toneMappingExposure=1,i.appendChild(n.domElement),n.domElement.setAttribute("aria-hidden","true");let s=new Sn;s.environment=lr(n,.55,.55),kl(zl(n));let r=new vt(10,1,.05,80);s.add(new Ni(16777215,14274756,.55));let o=new Ui(16774374,1.1);o.position.set(-2,3,5),s.add(o);let a=Nm();a.wrapS=a.wrapT=wi;let l=Um();l.wrapS=l.wrapT=wi;let c={inox:new wt({color:14146268,metalness:.9,roughness:.28,roughnessMap:a,envMapIntensity:1.35}),inoxPoli:new wt({color:15922164,metalness:1,roughness:.1,envMapIntensity:1.6}),noir:new wt({color:2368036,roughness:.65}),grille:new wt({color:986639,roughness:.9}),verreNoir:new Yt({color:987154,roughness:.06,clearcoat:1}),fond:new wt({color:13817045,metalness:.55,roughness:.45,roughnessMap:a}),paroi:new wt({color:13224908,metalness:.5,roughness:.5}),alu:new wt({color:12896201,metalness:.8,roughness:.35}),fondLumineux:new ot({map:Dt(64,256,(M,A,I)=>{let N=M.createLinearGradient(0,0,0,I);N.addColorStop(0,"#fff6e8"),N.addColorStop(.4,"#efe8dd"),N.addColorStop(1,"#d6d0c7"),M.fillStyle=N,M.fillRect(0,0,A,I)})}),bois:new wt({map:l,roughness:.55}),vitre:new Yt({color:13819361,metalness:0,roughness:0,transparent:!0,opacity:.1,envMapIntensity:1.2,depthWrite:!1}),reflet:new ot({transparent:!0,depthWrite:!1,map:Dt(256,256,(M,A,I)=>{M.clearRect(0,0,A,I);let N=(k,X,Y)=>{let Z=M.createLinearGradient(k,0,k+X,0);Z.addColorStop(0,"rgba(255,255,255,0)"),Z.addColorStop(.5,`rgba(255,255,255,${Y})`),Z.addColorStop(1,"rgba(255,255,255,0)"),M.save(),M.translate(A/2,I/2),M.rotate(-.42),M.translate(-A/2,-I/2),M.fillStyle=Z,M.fillRect(k,-I,X,I*3),M.restore()};N(70,46,.16),N(132,14,.1)})}),contact:new ot({transparent:!0,depthWrite:!1,map:Dt(128,128,(M,A,I)=>{let N=M.createRadialGradient(A/2,I/2,4,A/2,I/2,A/2);N.addColorStop(0,"rgba(34,27,29,.42)"),N.addColorStop(.55,"rgba(34,27,29,.16)"),N.addColorStop(1,"rgba(34,27,29,0)"),M.fillStyle=N,M.fillRect(0,0,A,I)})})},h=e.map(M=>{let A=Fm(M.n,c);return s.add(A),A}),d=new U,f=0;function p(){let M=i.clientWidth,A=i.clientHeight;if(!M||!A)return;n.setSize(M,A,!1),r.aspect=M/A;let I=h.length,N=I===4&&M/A<1.1?2:I,k=Math.ceil(I/N),X=t.etiquettes?N===2?118:128:0,Y=t.marge??(N===2?10:18),Z=t.etiquettes?0:t.marge??18,re=N===2?14:30,G=N===2?18:0,J=t.etiquettes?2:t.marge??18,oe=(M-2*J-(N-1)*re)/(N*We),fe=(A-Y-Z-k*X-(k-1)*G)/(k*st),de=Math.max(40,Math.min(oe,fe)),Ae=re/de,Re=st+(X+G)/de,ye=N*We+(N-1)*Ae;h.forEach((ce,Xe)=>{let Ce=Xe%N,b=Math.floor(Xe/N);ce.position.set(-ye/2+We/2+Ce*(We+Ae),(k-1-b)*Re,0)});let ke=k*st*de+k*X+(k-1)*G,O=Y+Math.max(0,(A-Y-Z-ke)/2),xt=(k-1)*Re+st,_e=Math.tan(Oi.degToRad(r.fov)/2),we=A/(2*de*_e);if(f=xt-(A/2-O)/de,d.set(0,f,hr+we),u||(r.position.copy(d),r.lookAt(0,f,0)),r.updateProjectionMatrix(),r.updateMatrixWorld(),t.etiquettes){let ce=new U;h.forEach((Xe,Ce)=>{let b=e[Ce].lien;if(!b)return;ce.set(Xe.position.x-We/2,Xe.position.y,hr).project(r);let v=(ce.x+1)/2*M,B=(1-ce.y)/2*A;ce.set(Xe.position.x+We/2,Xe.position.y,hr).project(r);let Q=(ce.x+1)/2*M;b.style.left=v+"px",b.style.width=Q-v+"px",b.style.top=B+20+"px"})}y()}let g=new ir,_=new ge,m=-1,u=null;function E(M){let A=n.domElement.getBoundingClientRect();_.set((M.clientX-A.left)/A.width*2-1,-((M.clientY-A.top)/A.height)*2+1),g.setFromCamera(_,r);let I=g.intersectObjects(h,!0);if(!I.length)return-1;let N=I[0].object;for(;N&&!h.includes(N);)N=N.parent;return N?h.indexOf(N):-1}function x(M){u||(m=M,h.forEach((A,I)=>A.userData.cible=I===M?.42:0),n.domElement.style.cursor=M>=0?"pointer":"",e.forEach((A,I)=>A.lien&&A.lien.classList.toggle("actif",I===M)),t.declencheur&&t.declencheur.classList.toggle("actif",M>=0),y())}let w=M=>window.allerVers?window.allerVers(M):window.location.href=M;function L(M){if(u||M<0)return;let A=e[M].href;if(ql){w(A);return}let I=h[M];I.userData.cible=1.95;let N=Math.tan(Oi.degToRad(r.fov)/2),k=Math.min(st*.7/(2*N),We*.8/(2*N*r.aspect));u={t0:performance.now(),depart:r.position.clone(),vers:new U(I.position.x+.02,I.position.y+st*.5,hr+Math.max(k,.35)),y0:f,y1:I.position.y+st*.5},y(),setTimeout(()=>w(A),650)}let R=t.declencheur||n.domElement;n.domElement.addEventListener("pointermove",M=>{if(t.declencheur)return;let A=E(M);A!==m&&x(A)}),n.domElement.addEventListener("pointerleave",()=>{t.declencheur||x(-1)}),n.domElement.addEventListener("click",M=>{if(t.declencheur)return;let A=E(M);A>=0&&(M.preventDefault(),L(A))}),t.declencheur&&(R.addEventListener("mouseenter",()=>x(0)),R.addEventListener("mouseleave",()=>x(-1)),R.addEventListener("focus",()=>x(0)),R.addEventListener("blur",()=>x(-1)),R.addEventListener("click",M=>{M.metaKey||M.ctrlKey||M.shiftKey||(M.preventDefault(),M.stopPropagation(),L(0))})),e.forEach((M,A)=>{let I=M.lien;!I||I===t.declencheur||(I.addEventListener("mouseenter",()=>x(A)),I.addEventListener("mouseleave",()=>x(-1)),I.addEventListener("focus",()=>x(A)),I.addEventListener("blur",()=>x(-1)),I.addEventListener("click",N=>{N.metaKey||N.ctrlKey||N.shiftKey||(N.preventDefault(),N.stopPropagation(),L(A))}))}),window.addEventListener("pageshow",M=>{M.persisted&&(u=null,h.forEach(A=>{A.userData.cible=0,A.userData.angle=0}),e.forEach(A=>A.lien&&A.lien.classList.remove("actif")),p())});let C=!1,W=!0;function y(){!C&&W&&(C=!0,requestAnimationFrame(q))}let T=M=>M<.5?4*M*M*M:1-Math.pow(-2*M+2,3)/2,F=new U;function q(){C=!1;let M=!1;if(h.forEach(I=>{let N=I.userData,k=ql?N.cible:N.angle+(N.cible-N.angle)*(u?.09:.12);Math.abs(k-N.cible)>.001&&(M=!0),N.angle=Math.abs(k-N.cible)>.001?k:N.cible,N.porte.rotation.y=-N.angle}),u){let I=Math.min(1,Math.max(0,(performance.now()-u.t0-120)/1050)),N=T(I);r.position.lerpVectors(u.depart,u.vers,N),F.set(r.position.x,u.y0+(u.y1-u.y0)*N,0),r.lookAt(F),I<1&&(M=!0)}let A=performance.now();n.render(s,r),performance.now()-A>45&&++j>2&&n.getPixelRatio()>1&&(n.setPixelRatio(1),j=0,p()),M&&y()}let j=0;new ResizeObserver(p).observe(i),"IntersectionObserver"in window&&new IntersectionObserver(M=>{W=M[0].isIntersecting,y()}).observe(i),p(),document.fonts&&document.fonts.ready.then(()=>{Xl(),y()}),i.classList.add("pret")}var Jl="data:image/jpeg;base64,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";var zm=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Hm=[[0,0],[.0365,0],[.0378,.0012],[.0362,.0028],[.024,.0042],[.011,.0058],[.0056,.0098],[.0039,.016]],Vm=[[.0035,.022],[.0033,.06],[.004,.0735],[.0078,.0815],[.0168,.0885],[.0278,.0975],[.0362,.11],[.0404,.126],[.0412,.142],[.0401,.16],[.038,.178],[.0358,.194],[.0349,.203],[.0348,.206]],$t=.084,km=.206,Gm=.0011,$l=Hm.map(([i,e])=>new ge(i,e)).concat(new Pi(Vm.map(([i,e])=>new ge(i,e))).getPoints(110)),Wm=$l.filter(i=>i.y>=$t+.001),ur=Wm.slice().reverse().map(i=>new ge(Math.max(0,i.x-Gm),i.y));ur.push(new ge(.004,$t+5e-4),new ge(0,$t));function Xm(i){let e=ur.slice().reverse();for(let t=0;t<e.length-1;t++){let n=e[t],s=e[t+1];if(i>=n.y&&i<=s.y)return n.x+(s.x-n.x)*(i-n.y)/Math.max(1e-6,s.y-n.y)}return e[e.length-1].x}function Kl(i,e){let t;try{t=new Qn({antialias:!0,alpha:!1,preserveDrawingBuffer:!0})}catch{i.classList.add("sans-3d");return}t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.outputColorSpace=et,t.toneMapping=ss,t.toneMappingExposure=1,t.localClippingEnabled=!0,i.appendChild(t.domElement),t.domElement.setAttribute("aria-hidden","true");let n=new Sn;n.environment=lr(t,.26,.45),t.setClearColor(14273464,1);let s=new vt(19,1,.01,10);n.add(s),n.add(new Ni(16774116,11901566,.8));let r=new Ui(16771276,1);r.position.set(-1.2,2,1.4),n.add(r);let o=new tr().load(Jl,()=>{c(),F()});o.colorSpace=et;let a=3,l=new Ne(new Mt(1,1),new ot({map:o,toneMapped:!1,depthWrite:!1}));l.position.z=-a,l.renderOrder=-1,s.add(l);function c(){let M=2*a*Math.tan(Oi.degToRad(s.fov)/2),A=M*s.aspect;l.scale.set(A,M,1);let I=o.image;if(!I)return;let N=I.width/I.height,k=s.aspect;k>N?(o.repeat.set(1,N/k),o.offset.set(0,0)):(o.repeat.set(k/N,1),o.offset.set((1-k/N)/2,0))}let h=Dt(128,128,(M,A,I)=>{let N=M.createRadialGradient(A/2,I/2,2,A/2,I/2,A/2);N.addColorStop(0,"rgba(45,28,18,.5)"),N.addColorStop(.45,"rgba(45,28,18,.18)"),N.addColorStop(1,"rgba(45,28,18,0)"),M.fillStyle=N,M.fillRect(0,0,A,I)}),d=new un($l.concat(ur),128),f=new Yt({color:16777215,metalness:0,roughness:.03,transmission:1,ior:1.5,thickness:.0025,envMapIntensity:.6,specularIntensity:.9}),p=[new ge(0,$t+6e-4)].concat(ur.slice().reverse().filter(M=>M.y>$t+6e-4).map(M=>new ge(Math.max(0,M.x-6e-4),M.y))),g=new un(p,128),_=.13,m=e.map((M,A)=>{let I=new zt;I.position.set((A-(e.length-1)/2)*_,0,A%2?-.02:.015);let N=new en(new U(0,-1,0),$t),k=new Ne(g,new Yt({color:4983064,roughness:.16,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:.5,side:Ut,clippingPlanes:[N]})),X=new Ne(new er(1,128),new Yt({color:3671312,roughness:.04,clearcoat:1,envMapIntensity:1}));X.rotation.x=-Math.PI/2;let Y=new Ne(d,f),Z=new Ne(new Mt(.15,.12),new ot({map:h,transparent:!0,depthWrite:!1}));Z.rotation.x=-Math.PI/2,Z.position.set(.02,8e-4,-.012),I.add(Z,k,X,Y),n.add(I);let re=$t+(km-$t-.012)*M.remplissage;return{plan:N,surface:X,cibleH:re,groupe:I}});function u(M,A){M.plan.constant=A,M.surface.visible=A>$t+.0015,M.surface.position.y=A,M.surface.scale.setScalar(Math.max(Xm(A)-6e-4,1e-4))}m.forEach(M=>u(M,$t));let E=new U(0,.095,0),x=0,w=0,L=0,R=0,C=1;function W(){let M=i.clientWidth,A=i.clientHeight;if(!M||!A)return;t.setSize(M,A,!1),s.aspect=M/A;let I=Math.tan(Oi.degToRad(s.fov)/2),N=e.length*_+.07;C=Math.max(.33/(2*I),N/(2*I*s.aspect)),s.updateProjectionMatrix(),c(),F()}i.addEventListener("pointermove",M=>{let A=i.getBoundingClientRect();L=(M.clientX-A.left)/A.width-.5,R=(M.clientY-A.top)/A.height-.5,F()}),i.addEventListener("pointerleave",()=>{L=R=0,F()});let y=null,T=!1;function F(){T||(T=!0,requestAnimationFrame(q))}function q(){T=!1;let M=!1;if(x+=(L-x)*.08,w+=(R-w)*.08,(Math.abs(L-x)>.001||Math.abs(R-w)>.001)&&(M=!0),s.position.set(Math.sin(x*.3)*C,.2+w*-.03,Math.cos(x*.3)*C),s.lookAt(E),y){let A=Math.min(1,(performance.now()-y)/2400),I=1-Math.pow(1-A,3);m.forEach(N=>u(N,$t+(N.cibleH-$t)*I)),A<1&&(M=!0)}t.render(n,s),M&&F()}function j(){if(!y){if(zm){m.forEach(M=>u(M,M.cibleH)),y=-1e9,F();return}y=performance.now(),F()}}new ResizeObserver(W).observe(i),"IntersectionObserver"in window?new IntersectionObserver((M,A)=>{M[0].isIntersecting&&(j(),A.disconnect())},{threshold:.45}).observe(i):j(),W(),i.classList.add("pret")}window.initCave=Zl;window.initVerres=Kl;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
