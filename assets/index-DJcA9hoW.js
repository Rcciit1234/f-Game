var ru=Object.defineProperty;var ou=(r,t,e)=>t in r?ru(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var T=(r,t,e)=>ou(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ua="170",au=0,uc=1,cu=2,jl=1,$l=2,Vn=3,Kn=0,Fe=1,Be=2,Yn=0,ns=1,Ur=2,dc=3,fc=4,lu=5,Si=100,hu=101,uu=102,du=103,fu=104,pu=200,mu=201,gu=202,xu=203,Go=204,Ho=205,vu=206,yu=207,_u=208,Mu=209,wu=210,bu=211,Su=212,Eu=213,Tu=214,Vo=0,Wo=1,qo=2,os=3,Xo=4,Yo=5,jo=6,$o=7,Kl=0,Au=1,Cu=2,hi=0,Ru=1,Pu=2,Lu=3,Zl=4,Iu=5,Du=6,Nu=7,Jl=300,as=301,cs=302,Ko=303,Zo=304,Vr=306,Bs=1e3,Ai=1001,Jo=1002,xn=1003,Uu=1004,Ws=1005,Tn=1006,Jr=1007,Ci=1008,Zn=1009,Ql=1010,th=1011,Fs=1012,Ba=1013,Ri=1014,Wn=1015,jn=1016,Fa=1017,ka=1018,ls=1020,eh=35902,nh=1021,ih=1022,mn=1023,sh=1024,rh=1025,is=1026,hs=1027,oh=1028,Oa=1029,ah=1030,za=1031,Ga=1033,Sr=33776,Er=33777,Tr=33778,Ar=33779,Qo=35840,ta=35841,ea=35842,na=35843,ia=36196,sa=37492,ra=37496,oa=37808,aa=37809,ca=37810,la=37811,ha=37812,ua=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,xa=37819,va=37820,ya=37821,Cr=36492,_a=36494,Ma=36495,ch=36283,wa=36284,ba=36285,Sa=36286,Bu=3200,Fu=3201,lh=0,ku=1,ci="",nn="srgb",fs="srgb-linear",Wr="linear",ne="srgb",Di=7680,pc=519,Ou=512,zu=513,Gu=514,hh=515,Hu=516,Vu=517,Wu=518,qu=519,Ea=35044,mc="300 es",qn=2e3,Br=2001;class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,Fr=180/Math.PI;function ui(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[r&255]+De[r>>8&255]+De[r>>16&255]+De[r>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function qe(r,t,e){return Math.max(t,Math.min(e,r))}function Xu(r,t){return(r%t+t)%t}function to(r,t,e){return(1-e)*r+e*t}function En(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ie(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,s,o,a,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=i[0],m=i[3],f=i[6],v=i[1],M=i[4],y=i[7],P=i[2],A=i[5],C=i[8];return s[0]=o*x+a*v+c*P,s[3]=o*m+a*M+c*A,s[6]=o*f+a*y+c*C,s[1]=l*x+h*v+d*P,s[4]=l*m+h*M+d*A,s[7]=l*f+h*y+d*C,s[2]=u*x+p*v+g*P,s[5]=u*m+p*M+g*A,s[8]=u*f+p*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*s,p=l*s-o*c,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*c)*x,t[5]=(i*s-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(eo.makeScale(t,e)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new Ft;function uh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function kr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yu(){const r=kr("canvas");return r.style.display="block",r}const gc={};function Ls(r){r in gc||(gc[r]=!0,console.warn(r))}function ju(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function $u(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ku(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(r.r=$n(r.r),r.g=$n(r.g),r.b=$n(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ci?Wr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function $n(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ss(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const xc=[.64,.33,.3,.6,.15,.06],vc=[.2126,.7152,.0722],yc=[.3127,.329],_c=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[fs]:{primaries:xc,whitePoint:yc,transfer:Wr,toXYZ:_c,fromXYZ:Mc,luminanceCoefficients:vc,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:xc,whitePoint:yc,transfer:ne,toXYZ:_c,fromXYZ:Mc,luminanceCoefficients:vc,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}});let Ni;class Zu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=kr("canvas")),Ni.width=t.width,Ni.height=t.height;const n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=kr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=$n(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ju=0;class dh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(no(i[o].image)):s.push(no(i[o]))}else s=no(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function no(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qu=0;class He extends ps{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Ai,i=Ai,s=Tn,o=Ci,a=mn,c=Zn,l=He.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ui(),this.name="",this.source=new dh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bs:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bs:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Jl;He.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,y=(p+1)/2,P=(f+1)/2,A=(h+u)/4,C=(d+x)/4,D=(g+m)/4;return M>y&&M>P?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=C/n):y>P?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=D/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=C/s,i=D/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class td extends ps{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends td{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fh extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ed extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ks=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==u||l!==p||h!==g){let m=1-a;const f=c*u+l*p+h*g+d*x,v=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const P=Math.sqrt(M),A=Math.atan2(P,f*v);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const y=a*v;if(c=c*m+u*y,l=l*m+p*y,h=h*m+g*y,d=d*m+x*y,m===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-a*p,t[e+2]=l*g+h*p+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),p=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=i+c*d+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new z,wc=new ks;class Os{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),Xs.subVectors(this.max,ys),Ui.subVectors(t.a,ys),Bi.subVectors(t.b,ys),Fi.subVectors(t.c,ys),ti.subVectors(Bi,Ui),ei.subVectors(Fi,Bi),pi.subVectors(Ui,Fi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-pi.z,pi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,pi.z,0,-pi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-pi.y,pi.x,0];return!so(e,Ui,Bi,Fi,Xs)||(e=[1,0,0,0,1,0,0,0,1],!so(e,Ui,Bi,Fi,Xs))?!1:(Ys.crossVectors(ti,ei),e=[Ys.x,Ys.y,Ys.z],so(e,Ui,Bi,Fi,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new z,new z,new z,new z,new z,new z,new z,new z],hn=new z,qs=new Os,Ui=new z,Bi=new z,Fi=new z,ti=new z,ei=new z,pi=new z,ys=new z,Xs=new z,Ys=new z,mi=new z;function so(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){mi.fromArray(r,s);const a=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const nd=new Os,_s=new z,ro=new z;let qr=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(_s,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(ro)),this.expandByPoint(_s.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Dn=new z,oo=new z,js=new z,ni=new z,ao=new z,$s=new z,co=new z;let ph=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){oo.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(oo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(js),a=ni.dot(this.direction),c=-ni.dot(js),l=ni.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*c-a,u=o*a-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(oo).addScaledVector(js,u),p}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,s){ao.subVectors(e,t),$s.subVectors(n,t),co.crossVectors(ao,$s);let o=this.direction.dot(co),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);const c=a*this.direction.dot($s.crossVectors(ni,$s));if(c<0)return null;const l=a*this.direction.dot(ao.cross(ni));if(l<0||c+l>o)return null;const h=-a*ni.dot(co);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ue{constructor(t,e,n,i,s,o,a,c,l,h,d,u,p,g,x,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,d,u,p,g,x,m)}set(t,e,n,i,s,o,a,c,l,h,d,u,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ki.setFromMatrixColumn(t,0).length(),s=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,p=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,x=l*d;e[0]=u+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,p=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(id,t,sd)}lookAt(t,e,n){const i=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ii.crossVectors(n,je),ii.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ii.crossVectors(n,je)),ii.normalize(),Ks.crossVectors(je,ii),i[0]=ii.x,i[4]=Ks.x,i[8]=je.x,i[1]=ii.y,i[5]=Ks.y,i[9]=je.y,i[2]=ii.z,i[6]=Ks.z,i[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],v=n[3],M=n[7],y=n[11],P=n[15],A=i[0],C=i[4],D=i[8],S=i[12],w=i[1],L=i[5],H=i[9],I=i[13],U=i[2],F=i[6],N=i[10],j=i[14],V=i[3],Z=i[7],rt=i[11],ut=i[15];return s[0]=o*A+a*w+c*U+l*V,s[4]=o*C+a*L+c*F+l*Z,s[8]=o*D+a*H+c*N+l*rt,s[12]=o*S+a*I+c*j+l*ut,s[1]=h*A+d*w+u*U+p*V,s[5]=h*C+d*L+u*F+p*Z,s[9]=h*D+d*H+u*N+p*rt,s[13]=h*S+d*I+u*j+p*ut,s[2]=g*A+x*w+m*U+f*V,s[6]=g*C+x*L+m*F+f*Z,s[10]=g*D+x*H+m*N+f*rt,s[14]=g*S+x*I+m*j+f*ut,s[3]=v*A+M*w+y*U+P*V,s[7]=v*C+M*L+y*F+P*Z,s[11]=v*D+M*H+y*N+P*rt,s[15]=v*S+M*I+y*j+P*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*p-n*c*p)+x*(+e*c*p-e*l*u+s*o*u-i*o*p+i*l*h-s*c*h)+m*(+e*l*d-e*a*p-s*o*d+n*o*p+s*a*h-n*l*h)+f*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],v=d*m*l-x*u*l+x*c*p-a*m*p-d*c*f+a*u*f,M=g*u*l-h*m*l-g*c*p+o*m*p+h*c*f-o*u*f,y=h*x*l-g*d*l+g*a*p-o*x*p-h*a*f+o*d*f,P=g*d*c-h*x*c-g*a*u+o*x*u+h*a*m-o*d*m,A=e*v+n*M+i*y+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=v*C,t[1]=(x*u*s-d*m*s-x*i*p+n*m*p+d*i*f-n*u*f)*C,t[2]=(a*m*s-x*c*s+x*i*l-n*m*l-a*i*f+n*c*f)*C,t[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*p-n*c*p)*C,t[4]=M*C,t[5]=(h*m*s-g*u*s+g*i*p-e*m*p-h*i*f+e*u*f)*C,t[6]=(g*c*s-o*m*s-g*i*l+e*m*l+o*i*f-e*c*f)*C,t[7]=(o*u*s-h*c*s+h*i*l-e*u*l-o*i*p+e*c*p)*C,t[8]=y*C,t[9]=(g*d*s-h*x*s-g*n*p+e*x*p+h*n*f-e*d*f)*C,t[10]=(o*x*s-g*a*s+g*n*l-e*x*l-o*n*f+e*a*f)*C,t[11]=(h*a*s-o*d*s-h*n*l+e*d*l+o*n*p-e*a*p)*C,t[12]=P*C,t[13]=(h*x*i-g*d*i+g*n*u-e*x*u-h*n*m+e*d*m)*C,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*m-e*a*m)*C,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,u=s*l,p=s*h,g=s*d,x=o*h,m=o*d,f=a*d,v=c*l,M=c*h,y=c*d,P=n.x,A=n.y,C=n.z;return i[0]=(1-(x+f))*P,i[1]=(p+y)*P,i[2]=(g-M)*P,i[3]=0,i[4]=(p-y)*A,i[5]=(1-(u+f))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+M)*C,i[9]=(m-v)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ki.set(i[0],i[1],i[2]).length();const o=ki.set(i[4],i[5],i[6]).length(),a=ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],un.copy(this);const l=1/s,h=1/o,d=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,e.setFromRotationMatrix(un),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=qn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(a===qn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Br)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=qn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*l,p=(n+i)*h;let g,x;if(a===qn)g=(o+s)*d,x=-2*d;else if(a===Br)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new z,un=new ue,id=new z(0,0,0),sd=new z(1,1,1),ii=new z,Ks=new z,je=new z,bc=new ue,Sc=new ks;class Cn{constructor(t=0,e=0,n=0,i=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class mh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rd=0;const Ec=new z,Oi=new ks,Nn=new ue,Zs=new z,Ms=new z,od=new z,ad=new ks,Tc=new z(1,0,0),Ac=new z(0,1,0),Cc=new z(0,0,1),Rc={type:"added"},cd={type:"removed"},zi={type:"childadded",child:null},lo={type:"childremoved",child:null};class ve extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new z,e=new Cn,n=new ks,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ft}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(Cc,t)}translateOnAxis(t,e){return Ec.copy(t).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(Cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ms,Zs,this.up):Nn.lookAt(Zs,Ms,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cd),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ve.DEFAULT_UP=new z(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new z,Un=new z,ho=new z,Bn=new z,Gi=new z,Hi=new z,Pc=new z,uo=new z,fo=new z,po=new z,mo=new ge,go=new ge,xo=new ge;class on{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){dn.subVectors(i,e),Un.subVectors(n,e),ho.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(Un),c=dn.dot(ho),l=Un.dot(Un),h=Un.dot(ho),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return mo.setScalar(0),go.setScalar(0),xo.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,n),xo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(mo,s.x),o.addScaledVector(go,s.y),o.addScaledVector(xo,s.z),o}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),Un.subVectors(t,e),dn.cross(Un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),dn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return on.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Gi.subVectors(i,n),Hi.subVectors(s,n),uo.subVectors(t,n);const c=Gi.dot(uo),l=Hi.dot(uo);if(c<=0&&l<=0)return e.copy(n);fo.subVectors(t,i);const h=Gi.dot(fo),d=Hi.dot(fo);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Gi,o);po.subVectors(t,s);const p=Gi.dot(po),g=Hi.dot(po);if(g>=0&&p<=g)return e.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Hi,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Pc.subVectors(s,i),a=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(Pc,a);const f=1/(m+x+u);return o=x*f,a=u*f,e.copy(n).addScaledVector(Gi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Js={h:0,s:0,l:0};function vo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=Xu(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=vo(o,s,t+1/3),this.g=vo(o,s,t),this.b=vo(o,s,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Kt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(qe(Ne.r*255,0,255))*65536+Math.round(qe(Ne.g*255,0,255))*256+Math.round(qe(Ne.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,i=Ne.g,s=Ne.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=nn){Kt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,i=Ne.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Js);const n=to(si.h,Js.h,e),i=to(si.s,Js.s,e),s=to(si.l,Js.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Nt;Nt.NAMES=gh;let ld=0,Pi=class extends ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=ui(),this.name="",this.blending=ns,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Ho,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class me extends Pi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new z,Qs=new Tt;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ea,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ea&&(t.usage=this.usage),t}}class xh extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vh extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hd=0;const tn=new ue,yo=new ve,Vi=new z,$e=new Os,ws=new Os,Te=new z;class Le extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uh(t)?vh:xh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return yo.lookAt(t),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors($e.min,ws.min),$e.expandByPoint(Te),Te.addVectors($e.max,ws.max),$e.expandByPoint(Te)):($e.expandByPoint(ws.min),$e.expandByPoint(ws.max))}$e.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Te.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Te.fromBufferAttribute(a,l),c&&(Vi.fromBufferAttribute(t,l),Te.add(Vi)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new z,c[D]=new z;const l=new z,h=new z,d=new z,u=new Tt,p=new Tt,g=new Tt,x=new z,m=new z;function f(D,S,w){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,w),u.fromBufferAttribute(s,D),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,w),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[D].add(x),a[S].add(x),a[w].add(x),c[D].add(m),c[S].add(m),c[w].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,S=v.length;D<S;++D){const w=v[D],L=w.start,H=w.count;for(let I=L,U=L+H;I<U;I+=3)f(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const M=new z,y=new z,P=new z,A=new z;function C(D){P.fromBufferAttribute(i,D),A.copy(P);const S=a[D];M.copy(S),M.sub(P.multiplyScalar(P.dot(S))).normalize(),y.crossVectors(A,S);const L=y.dot(c[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,L)}for(let D=0,S=v.length;D<S;++D){const w=v[D],L=w.start,H=w.count;for(let I=L,U=L+H;I<U;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new z,s=new z,o=new z,a=new z,c=new z,l=new z,h=new z,d=new z;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new ke(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new ue,gi=new ph,tr=new qr,Ic=new z,er=new z,nr=new z,ir=new z,_o=new z,sr=new z,Dc=new z,rr=new z;class pt extends ve{constructor(t=new Le,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){sr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(_o.fromBufferAttribute(d,t),o?sr.addScaledVector(_o,h):sr.addScaledVector(_o.sub(e),h))}e.add(sr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),gi.copy(t.ray).recast(t.near),!(tr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(tr,Ic)===null||gi.origin.distanceToSquared(Ic)>(t.far-t.near)**2))&&(Lc.copy(s).invert(),gi.copy(t.ray).applyMatrix4(Lc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,P=M;y<P;y+=3){const A=a.getX(y),C=a.getX(y+1),D=a.getX(y+2);i=or(this,f,t,n,l,h,d,A,C,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);i=or(this,o,t,n,l,h,d,v,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,P=M;y<P;y+=3){const A=y,C=y+1,D=y+2;i=or(this,f,t,n,l,h,d,A,C,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=m,M=m+1,y=m+2;i=or(this,o,t,n,l,h,d,v,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function ud(r,t,e,n,i,s,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===Kn,a),c===null)return null;rr.copy(a),rr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(rr);return l<e.near||l>e.far?null:{distance:l,point:rr.clone(),object:r}}function or(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,er),r.getVertexPosition(c,nr),r.getVertexPosition(l,ir);const h=ud(r,t,e,n,er,nr,ir,Dc);if(h){const d=new z;on.getBarycoord(Dc,er,nr,ir,d),i&&(h.uv=on.getInterpolatedAttribute(i,a,c,l,d,new Tt)),s&&(h.uv1=on.getInterpolatedAttribute(s,a,c,l,d,new Tt)),o&&(h.normal=on.getInterpolatedAttribute(o,a,c,l,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new z,materialIndex:0};on.getNormal(er,nr,ir,u.normal),h.face=u,h.barycoord=d}return h}class Ae extends Le{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(d,2));function g(x,m,f,v,M,y,P,A,C,D,S){const w=y/C,L=P/D,H=y/2,I=P/2,U=A/2,F=C+1,N=D+1;let j=0,V=0;const Z=new z;for(let rt=0;rt<N;rt++){const ut=rt*L-I;for(let st=0;st<F;st++){const Vt=st*w-H;Z[x]=Vt*v,Z[m]=ut*M,Z[f]=U,l.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[f]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(st/C),d.push(1-rt/D),j+=1}}for(let rt=0;rt<D;rt++)for(let ut=0;ut<C;ut++){const st=u+ut+F*rt,Vt=u+ut+F*(rt+1),$=u+(ut+1)+F*(rt+1),et=u+(ut+1)+F*rt;c.push(st,Vt,et),c.push(Vt,$,et),V+=6}a.addGroup(p,V,S),p+=V,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function us(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(r){const t={};for(let e=0;e<r.length;e++){const n=us(r[e]);for(const i in n)t[i]=n[i]}return t}function dd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function yh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Or={clone:us,merge:Ge};var fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends Pi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fd,this.fragmentShader=pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _h extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new z,Nc=new Tt,Uc=new Tt;class Ke extends _h{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Nc,Uc),e.subVectors(Uc,Nc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,qi=1;class md extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ke(Wi,qi,t,e);i.layers=this.layers,this.add(i);const s=new Ke(Wi,qi,t,e);s.layers=this.layers,this.add(s);const o=new Ke(Wi,qi,t,e);o.layers=this.layers,this.add(o);const a=new Ke(Wi,qi,t,e);a.layers=this.layers,this.add(a);const c=new Ke(Wi,qi,t,e);c.layers=this.layers,this.add(c);const l=new Ke(Wi,qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mh extends He{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gd extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Mh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ae(5,5,5),s=new Xe({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Yn});s.uniforms.tEquirect.value=e;const o=new pt(i,s),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=Tn),new md(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Mo=new z,xd=new z,vd=new Ft;let wi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Mo.subVectors(n,e).cross(xd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vd.getNormalMatrix(t),i=this.coplanarPoint(Mo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const xi=new qr,ar=new z;class Ha{constructor(t=new wi,e=new wi,n=new wi,i=new wi,s=new wi,o=new wi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],x=i[10],m=i[11],f=i[12],v=i[13],M=i[14],y=i[15];if(n[0].setComponents(c-s,u-l,m-p,y-f).normalize(),n[1].setComponents(c+s,u+l,m+p,y+f).normalize(),n[2].setComponents(c+o,u+h,m+g,y+v).normalize(),n[3].setComponents(c-o,u-h,m-g,y-v).normalize(),n[4].setComponents(c-a,u-d,m-x,y-M).normalize(),e===qn)n[5].setComponents(c+a,u+d,m+x,y+M).normalize();else if(e===Br)n[5].setComponents(a,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ar.x=i.normal.x>0?t.max.x:t.min.x,ar.y=i.normal.y>0?t.max.y:t.min.y,ar.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function yd(r){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(r.bindBuffer(l,a),d.length===0)r.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];r.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class Pe extends Le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const v=f*u-o;for(let M=0;M<l;M++){const y=M*d-s;g.push(y,-v,0),x.push(0,0,1),m.push(M/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){const M=v+l*f,y=v+l*(f+1),P=v+1+l*(f+1),A=v+1+l*f;p.push(M,y,A),p.push(y,P,A)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.widthSegments,t.heightSegments)}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Md=`#ifdef USE_ALPHAHASH
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
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
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
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
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
#endif`,Nd=`#ifdef USE_BUMPMAP
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vd=`#define PI 3.141592653589793
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
} // validated`,Wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qd=`vec3 transformedNormal = objectNormal;
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
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cf=`#ifdef USE_GRADIENTMAP
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
}`,lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,df=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,ff=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vf=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,yf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,_f=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
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
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pf=`#if defined( USE_POINTS_UV )
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
#endif`,Lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,If=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
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
#endif`,Wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$f=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Ap=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cp=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Rp=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Np=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Up=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Bp=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Fp=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kp=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Op=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,zp=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Gp=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hp=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Vp=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Wp=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,qp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Xp=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Yp=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jp=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,$p=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Kp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Zp=`uniform vec3 color;
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
}`,Jp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Qp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ot={alphahash_fragment:_d,alphahash_pars_fragment:Md,alphamap_fragment:wd,alphamap_pars_fragment:bd,alphatest_fragment:Sd,alphatest_pars_fragment:Ed,aomap_fragment:Td,aomap_pars_fragment:Ad,batching_pars_vertex:Cd,batching_vertex:Rd,begin_vertex:Pd,beginnormal_vertex:Ld,bsdfs:Id,iridescence_fragment:Dd,bumpmap_pars_fragment:Nd,clipping_planes_fragment:Ud,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:kd,color_fragment:Od,color_pars_fragment:zd,color_pars_vertex:Gd,color_vertex:Hd,common:Vd,cube_uv_reflection_fragment:Wd,defaultnormal_vertex:qd,displacementmap_pars_vertex:Xd,displacementmap_vertex:Yd,emissivemap_fragment:jd,emissivemap_pars_fragment:$d,colorspace_fragment:Kd,colorspace_pars_fragment:Zd,envmap_fragment:Jd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:tf,envmap_pars_vertex:ef,envmap_physical_pars_fragment:ff,envmap_vertex:nf,fog_vertex:sf,fog_pars_vertex:rf,fog_fragment:of,fog_pars_fragment:af,gradientmap_pars_fragment:cf,lightmap_pars_fragment:lf,lights_lambert_fragment:hf,lights_lambert_pars_fragment:uf,lights_pars_begin:df,lights_toon_fragment:pf,lights_toon_pars_fragment:mf,lights_phong_fragment:gf,lights_phong_pars_fragment:xf,lights_physical_fragment:vf,lights_physical_pars_fragment:yf,lights_fragment_begin:_f,lights_fragment_maps:Mf,lights_fragment_end:wf,logdepthbuf_fragment:bf,logdepthbuf_pars_fragment:Sf,logdepthbuf_pars_vertex:Ef,logdepthbuf_vertex:Tf,map_fragment:Af,map_pars_fragment:Cf,map_particle_fragment:Rf,map_particle_pars_fragment:Pf,metalnessmap_fragment:Lf,metalnessmap_pars_fragment:If,morphinstance_vertex:Df,morphcolor_vertex:Nf,morphnormal_vertex:Uf,morphtarget_pars_vertex:Bf,morphtarget_vertex:Ff,normal_fragment_begin:kf,normal_fragment_maps:Of,normal_pars_fragment:zf,normal_pars_vertex:Gf,normal_vertex:Hf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:Wf,clearcoat_normal_fragment_maps:qf,clearcoat_pars_fragment:Xf,iridescence_pars_fragment:Yf,opaque_fragment:jf,packing:$f,premultiplied_alpha_fragment:Kf,project_vertex:Zf,dithering_fragment:Jf,dithering_pars_fragment:Qf,roughnessmap_fragment:tp,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:np,shadowmap_pars_vertex:ip,shadowmap_vertex:sp,shadowmask_pars_fragment:rp,skinbase_vertex:op,skinning_pars_vertex:ap,skinning_vertex:cp,skinnormal_vertex:lp,specularmap_fragment:hp,specularmap_pars_fragment:up,tonemapping_fragment:dp,tonemapping_pars_fragment:fp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:gp,uv_pars_vertex:xp,uv_vertex:vp,worldpos_vertex:yp,background_vert:_p,background_frag:Mp,backgroundCube_vert:wp,backgroundCube_frag:bp,cube_vert:Sp,cube_frag:Ep,depth_vert:Tp,depth_frag:Ap,distanceRGBA_vert:Cp,distanceRGBA_frag:Rp,equirect_vert:Pp,equirect_frag:Lp,linedashed_vert:Ip,linedashed_frag:Dp,meshbasic_vert:Np,meshbasic_frag:Up,meshlambert_vert:Bp,meshlambert_frag:Fp,meshmatcap_vert:kp,meshmatcap_frag:Op,meshnormal_vert:zp,meshnormal_frag:Gp,meshphong_vert:Hp,meshphong_frag:Vp,meshphysical_vert:Wp,meshphysical_frag:qp,meshtoon_vert:Xp,meshtoon_frag:Yp,points_vert:jp,points_frag:$p,shadow_vert:Kp,shadow_frag:Zp,sprite_vert:Jp,sprite_frag:Qp},at={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},bn={basic:{uniforms:Ge([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ge([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ge([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ge([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ge([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ge([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ge([at.points,at.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ge([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ge([at.common,at.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ge([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ge([at.sprite,at.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ge([at.common,at.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ge([at.lights,at.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};bn.physical={uniforms:Ge([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const cr={r:0,b:0,g:0},vi=new Cn,tm=new ue;function em(r,t,e,n,i,s,o){const a=new Nt(0);let c=s===!0?0:1,l,h,d=null,u=0,p=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function x(v){let M=!1;const y=g(v);y===null?f(a,c):y&&y.isColor&&(f(y,1),M=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,M){const y=g(M);y&&(y.isCubeTexture||y.mapping===Vr)?(h===void 0&&(h=new pt(new Ae(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:us(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),vi.copy(M.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(vi)),h.material.toneMapped=Kt.getTransfer(y.colorSpace)!==ne,(d!==y||u!==y.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new pt(new Pe(2,2),new Xe({name:"BackgroundMaterial",uniforms:us(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(y.colorSpace)!==ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,p=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function f(v,M){v.getRGB(cr,yh(r)),n.buffers.color.setClear(cr.r,cr.g,cr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,f(a,c)},render:x,addToRenderList:m}}function nm(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(w,L,H,I,U){let F=!1;const N=d(I,H,L);s!==N&&(s=N,l(s.object)),F=p(w,I,H,U),F&&g(w,I,H,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,y(w,L,H,I),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return r.createVertexArray()}function l(w){return r.bindVertexArray(w)}function h(w){return r.deleteVertexArray(w)}function d(w,L,H){const I=H.wireframe===!0;let U=n[w.id];U===void 0&&(U={},n[w.id]=U);let F=U[L.id];F===void 0&&(F={},U[L.id]=F);let N=F[I];return N===void 0&&(N=u(c()),F[I]=N),N}function u(w){const L=[],H=[],I=[];for(let U=0;U<e;U++)L[U]=0,H[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:I,object:w,attributes:{},index:null}}function p(w,L,H,I){const U=s.attributes,F=L.attributes;let N=0;const j=H.getAttributes();for(const V in j)if(j[V].location>=0){const rt=U[V];let ut=F[V];if(ut===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor)),rt===void 0||rt.attribute!==ut||ut&&rt.data!==ut.data)return!0;N++}return s.attributesNum!==N||s.index!==I}function g(w,L,H,I){const U={},F=L.attributes;let N=0;const j=H.getAttributes();for(const V in j)if(j[V].location>=0){let rt=F[V];rt===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(rt=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(rt=w.instanceColor));const ut={};ut.attribute=rt,rt&&rt.data&&(ut.data=rt.data),U[V]=ut,N++}s.attributes=U,s.attributesNum=N,s.index=I}function x(){const w=s.newAttributes;for(let L=0,H=w.length;L<H;L++)w[L]=0}function m(w){f(w,0)}function f(w,L){const H=s.newAttributes,I=s.enabledAttributes,U=s.attributeDivisors;H[w]=1,I[w]===0&&(r.enableVertexAttribArray(w),I[w]=1),U[w]!==L&&(r.vertexAttribDivisor(w,L),U[w]=L)}function v(){const w=s.newAttributes,L=s.enabledAttributes;for(let H=0,I=L.length;H<I;H++)L[H]!==w[H]&&(r.disableVertexAttribArray(H),L[H]=0)}function M(w,L,H,I,U,F,N){N===!0?r.vertexAttribIPointer(w,L,H,U,F):r.vertexAttribPointer(w,L,H,I,U,F)}function y(w,L,H,I){x();const U=I.attributes,F=H.getAttributes(),N=L.defaultAttributeValues;for(const j in F){const V=F[j];if(V.location>=0){let Z=U[j];if(Z===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Z=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Z=w.instanceColor)),Z!==void 0){const rt=Z.normalized,ut=Z.itemSize,st=t.get(Z);if(st===void 0)continue;const Vt=st.buffer,$=st.type,et=st.bytesPerElement,_t=$===r.INT||$===r.UNSIGNED_INT||Z.gpuType===Ba;if(Z.isInterleavedBufferAttribute){const ct=Z.data,Pt=ct.stride,Dt=Z.offset;if(ct.isInstancedInterleavedBuffer){for(let zt=0;zt<V.locationSize;zt++)f(V.location+zt,ct.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let zt=0;zt<V.locationSize;zt++)m(V.location+zt);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let zt=0;zt<V.locationSize;zt++)M(V.location+zt,ut/V.locationSize,$,rt,Pt*et,(Dt+ut/V.locationSize*zt)*et,_t)}else{if(Z.isInstancedBufferAttribute){for(let ct=0;ct<V.locationSize;ct++)f(V.location+ct,Z.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ct=0;ct<V.locationSize;ct++)m(V.location+ct);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let ct=0;ct<V.locationSize;ct++)M(V.location+ct,ut/V.locationSize,$,rt,ut*et,ut/V.locationSize*ct*et,_t)}}else if(N!==void 0){const rt=N[j];if(rt!==void 0)switch(rt.length){case 2:r.vertexAttrib2fv(V.location,rt);break;case 3:r.vertexAttrib3fv(V.location,rt);break;case 4:r.vertexAttrib4fv(V.location,rt);break;default:r.vertexAttrib1fv(V.location,rt)}}}}v()}function P(){D();for(const w in n){const L=n[w];for(const H in L){const I=L[H];for(const U in I)h(I[U].object),delete I[U];delete L[H]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const H in L){const I=L[H];for(const U in I)h(I[U].object),delete I[U];delete L[H]}delete n[w.id]}function C(w){for(const L in n){const H=n[L];if(H[w.id]===void 0)continue;const I=H[w.id];for(const U in I)h(I[U].object),delete I[U];delete H[w.id]}}function D(){S(),o=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function im(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(r.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function sm(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==mn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Zn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Wn&&!D)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:P,maxSamples:A}}function rm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new wi,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const v=s?0:n,M=v*4;let y=f.clippingState||null;c.value=y,y=h(g,u,M,p);for(let P=0;P!==M;++P)y[P]=e[P];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const f=p+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,y=p;M!==x;++M,y+=4)o.copy(d[M]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function om(r){let t=new WeakMap;function e(o,a){return a===Ko?o.mapping=as:a===Zo&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ko||a===Zo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new gd(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Va extends _h{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ts=4,Bc=[.125,.215,.35,.446,.526,.582],Ei=20,wo=new Va,Fc=new Nt;let bo=null,So=0,Eo=0,To=!1;const bi=(1+Math.sqrt(5))/2,Xi=1/bi,kc=[new z(-bi,Xi,0),new z(bi,Xi,0),new z(-Xi,0,bi),new z(Xi,0,bi),new z(0,bi,-Xi),new z(0,bi,Xi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Oc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){bo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bo,So,Eo),this._renderer.xr.enabled=To,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:jn,format:mn,colorSpace:fs,depthBuffer:!1},i=zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=am(s)),this._blurMaterial=cm(s,t,e)}return i}_compileMaterial(t){const e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,wo)}_sceneToCubeUV(t,e,n,i){const a=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Fc),h.toneMapping=hi,h.autoClear=!1;const p=new me({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new pt(new Ae,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Fc),x=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):v===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const M=this._cubeSize;lr(i,v*M,f>2?M:0,M,M),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===as||t.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,wo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=kc[(i-s-1)%kc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new pt(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Ei;m>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const f=[];let v=0;for(let C=0;C<Ei;++C){const D=C/x,S=Math.exp(-D*D/2);f.push(S),C===0?v+=S:C<m&&(v+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const y=this._sizeLods[i],P=3*y*(i>M-ts?i-M+ts:0),A=4*(this._cubeSize-y);lr(e,P,A,3*y,2*y),c.setRenderTarget(e),c.render(d,wo)}}function am(r){const t=[],e=[],n=[];let i=r;const s=r-ts+1+Bc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-ts?c=Bc[o-r+ts-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,f=1,v=new Float32Array(x*g*p),M=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,D=A>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];v.set(S,x*g*A),M.set(u,m*g*A);const w=[A,A,A,A,A,A];y.set(w,f*g*A)}const P=new Le;P.setAttribute("position",new ke(v,x)),P.setAttribute("uv",new ke(M,m)),P.setAttribute("faceIndex",new ke(y,f)),t.push(P),i>ts&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zc(r,t,e){const n=new vn(r,t,e);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function cm(r,t,e){const n=new Float32Array(Ei),i=new z(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Gc(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Hc(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Wa(){return`

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
	`}function lm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ko||c===Zo,h=c===as||c===cs;if(l||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Oc(r)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Oc(r)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hm(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function um(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}u.removeEventListener("dispose",o),delete i[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],r.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let M=0,y=v.length;M<y;M+=3){const P=v[M+0],A=v[M+1],C=v[M+2];u.push(P,A,A,C,C,P)}}else if(g!==void 0){const v=g.array;x=g.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const P=M+0,A=M+1,C=M+2;u.push(P,A,A,C,C,P)}}else return;const m=new(uh(u)?vh:xh)(u,1);m.version=x;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function dm(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,p){r.drawElements(n,p,s,u*o),e.update(p,n,1)}function l(u,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,u*o,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,x,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*x[v];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function fm(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function pm(r,t,e){const n=new WeakMap,i=new ge;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let w=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var p=w;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let P=a.attributes.position.count*y,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const C=new Float32Array(P*A*4*d),D=new fh(C,P,A,d);D.type=Wn,D.needsUpdate=!0;const S=y*4;for(let L=0;L<d;L++){const H=f[L],I=v[L],U=M[L],F=P*A*4*L;for(let N=0;N<H.count;N++){const j=N*S;g===!0&&(i.fromBufferAttribute(H,N),C[F+j+0]=i.x,C[F+j+1]=i.y,C[F+j+2]=i.z,C[F+j+3]=0),x===!0&&(i.fromBufferAttribute(I,N),C[F+j+4]=i.x,C[F+j+5]=i.y,C[F+j+6]=i.z,C[F+j+7]=0),m===!0&&(i.fromBufferAttribute(U,N),C[F+j+8]=i.x,C[F+j+9]=i.y,C[F+j+10]=i.z,C[F+j+11]=U.itemSize===4?i.w:1)}}u={count:d,texture:D,size:new Tt(P,A)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function mm(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class bh extends He{constructor(t,e,n,i,s,o,a,c,l,h=is){if(h!==is&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Ri),n===void 0&&h===hs&&(n=ls),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xn,this.minFilter=c!==void 0?c:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sh=new He,Vc=new bh(1,1),Eh=new fh,Th=new ed,Ah=new Mh,Wc=[],qc=[],Xc=new Float32Array(16),Yc=new Float32Array(9),jc=new Float32Array(4);function ms(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Wc[i];if(s===void 0&&(s=new Float32Array(i),Wc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Se(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ee(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Xr(r,t){let e=qc[t];e===void 0&&(e=new Int32Array(t),qc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function gm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function xm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2fv(this.addr,t),Ee(e,t)}}function vm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;r.uniform3fv(this.addr,t),Ee(e,t)}}function ym(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4fv(this.addr,t),Ee(e,t)}}function _m(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;jc.set(n),r.uniformMatrix2fv(this.addr,!1,jc),Ee(e,n)}}function Mm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Yc.set(n),r.uniformMatrix3fv(this.addr,!1,Yc),Ee(e,n)}}function wm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Xc.set(n),r.uniformMatrix4fv(this.addr,!1,Xc),Ee(e,n)}}function bm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Sm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2iv(this.addr,t),Ee(e,t)}}function Em(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;r.uniform3iv(this.addr,t),Ee(e,t)}}function Tm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4iv(this.addr,t),Ee(e,t)}}function Am(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Cm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2uiv(this.addr,t),Ee(e,t)}}function Rm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;r.uniform3uiv(this.addr,t),Ee(e,t)}}function Pm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4uiv(this.addr,t),Ee(e,t)}}function Lm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Vc.compareFunction=hh,s=Vc):s=Sh,e.setTexture2D(t||s,i)}function Im(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Th,i)}function Dm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ah,i)}function Nm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Eh,i)}function Um(r){switch(r){case 5126:return gm;case 35664:return xm;case 35665:return vm;case 35666:return ym;case 35674:return _m;case 35675:return Mm;case 35676:return wm;case 5124:case 35670:return bm;case 35667:case 35671:return Sm;case 35668:case 35672:return Em;case 35669:case 35673:return Tm;case 5125:return Am;case 36294:return Cm;case 36295:return Rm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Nm}}function Bm(r,t){r.uniform1fv(this.addr,t)}function Fm(r,t){const e=ms(t,this.size,2);r.uniform2fv(this.addr,e)}function km(r,t){const e=ms(t,this.size,3);r.uniform3fv(this.addr,e)}function Om(r,t){const e=ms(t,this.size,4);r.uniform4fv(this.addr,e)}function zm(r,t){const e=ms(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Gm(r,t){const e=ms(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Hm(r,t){const e=ms(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Vm(r,t){r.uniform1iv(this.addr,t)}function Wm(r,t){r.uniform2iv(this.addr,t)}function qm(r,t){r.uniform3iv(this.addr,t)}function Xm(r,t){r.uniform4iv(this.addr,t)}function Ym(r,t){r.uniform1uiv(this.addr,t)}function jm(r,t){r.uniform2uiv(this.addr,t)}function $m(r,t){r.uniform3uiv(this.addr,t)}function Km(r,t){r.uniform4uiv(this.addr,t)}function Zm(r,t,e){const n=this.cache,i=t.length,s=Xr(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Sh,s[o])}function Jm(r,t,e){const n=this.cache,i=t.length,s=Xr(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Th,s[o])}function Qm(r,t,e){const n=this.cache,i=t.length,s=Xr(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ah,s[o])}function tg(r,t,e){const n=this.cache,i=t.length,s=Xr(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Eh,s[o])}function eg(r){switch(r){case 5126:return Bm;case 35664:return Fm;case 35665:return km;case 35666:return Om;case 35674:return zm;case 35675:return Gm;case 35676:return Hm;case 5124:case 35670:return Vm;case 35667:case 35671:return Wm;case 35668:case 35672:return qm;case 35669:case 35673:return Xm;case 5125:return Ym;case 36294:return jm;case 36295:return $m;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return tg}}class ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Um(e.type)}}class ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eg(e.type)}}class sg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function $c(r,t){r.seq.push(t),r.map[t.id]=t}function rg(r,t,e){const n=r.name,i=n.length;for(Ao.lastIndex=0;;){const s=Ao.exec(n),o=Ao.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){$c(e,l===void 0?new ng(a,r,t):new ig(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new sg(a),$c(e,d)),e=d}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);rg(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Kc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const og=37297;let ag=0;function cg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Zc=new Ft;function lg(r){Kt._getMatrix(Zc,Kt.workingColorSpace,r);const t=`mat3( ${Zc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(r)){case Wr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Jc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+cg(r.getShaderSource(t),o)}else return i}function hg(r,t){const e=lg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ug(r,t){let e;switch(t){case Ru:e="Linear";break;case Pu:e="Reinhard";break;case Lu:e="Cineon";break;case Zl:e="ACESFilmic";break;case Du:e="AgX";break;case Nu:e="Neutral";break;case Iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new z;function dg(){Kt.getLuminanceCoefficients(hr);const r=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function pg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Is(r){return r!==""}function Qc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(r){return r.replace(gg,vg)}const xg=new Map;function vg(r,t){let e=Ot[t];if(e===void 0){const n=xg.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ta(e)}const yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(r){return r.replace(yg,_g)}function _g(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nl(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Mg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===jl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===$l?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function wg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case as:case cs:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function Sg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Kl:t="ENVMAP_BLENDING_MULTIPLY";break;case Au:t="ENVMAP_BLENDING_MIX";break;case Cu:t="ENVMAP_BLENDING_ADD";break}return t}function Eg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Tg(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Mg(e),l=wg(e),h=bg(e),d=Sg(e),u=Eg(e),p=fg(e),g=pg(s),x=i.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Is).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Is).join(`
`),f.length>0&&(f+=`
`)):(m=[nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),f=[nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Ot.tonemapping_pars_fragment:"",e.toneMapping!==hi?ug("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,hg("linearToOutputTexel",e.outputColorSpace),dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),o=Ta(o),o=Qc(o,e),o=tl(o,e),a=Ta(a),a=Qc(a,e),a=tl(a,e),o=el(o),a=el(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+m+o,y=v+f+a,P=Kc(i,i.VERTEX_SHADER,M),A=Kc(i,i.FRAGMENT_SHADER,y);i.attachShader(x,P),i.attachShader(x,A),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(L){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(x).trim(),I=i.getShaderInfoLog(P).trim(),U=i.getShaderInfoLog(A).trim();let F=!0,N=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,P,A);else{const j=Jc(i,P,"vertex"),V=Jc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+j+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(I===""||U==="")&&(N=!1);N&&(L.diagnostics={runnable:F,programLog:H,vertexShader:{log:I,prefix:m},fragmentShader:{log:U,prefix:f}})}i.deleteShader(P),i.deleteShader(A),D=new Rr(i,x),S=mg(i,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(x,og)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ag++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}let Ag=0;class Cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Rg(t),e.set(t,n)),n}}class Rg{constructor(t){this.id=Ag++,this.code=t,this.usedTimes=0}}function Pg(r,t,e,n,i,s,o){const a=new mh,c=new Cg,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,w,L,H,I){const U=H.fog,F=I.geometry,N=S.isMeshStandardMaterial?H.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||N),V=j&&j.mapping===Vr?j.image.height:null,Z=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const rt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ut=rt!==void 0?rt.length:0;let st=0;F.morphAttributes.position!==void 0&&(st=1),F.morphAttributes.normal!==void 0&&(st=2),F.morphAttributes.color!==void 0&&(st=3);let Vt,$,et,_t;if(Z){const ee=bn[Z];Vt=ee.vertexShader,$=ee.fragmentShader}else Vt=S.vertexShader,$=S.fragmentShader,c.update(S),et=c.getVertexShaderID(S),_t=c.getFragmentShaderID(S);const ct=r.getRenderTarget(),Pt=r.state.buffers.depth.getReversed(),Dt=I.isInstancedMesh===!0,zt=I.isBatchedMesh===!0,fe=!!S.map,Yt=!!S.matcap,xe=!!j,G=!!S.aoMap,Je=!!S.lightMap,Wt=!!S.bumpMap,qt=!!S.normalMap,Ct=!!S.displacementMap,ae=!!S.emissiveMap,At=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,W=S.clearcoat>0,J=S.dispersion>0,tt=S.iridescence>0,K=S.sheen>0,St=S.transmission>0,ht=b&&!!S.anisotropyMap,xt=W&&!!S.clearcoatMap,jt=W&&!!S.clearcoatNormalMap,nt=W&&!!S.clearcoatRoughnessMap,vt=tt&&!!S.iridescenceMap,Rt=tt&&!!S.iridescenceThicknessMap,Lt=K&&!!S.sheenColorMap,yt=K&&!!S.sheenRoughnessMap,Xt=!!S.specularMap,kt=!!S.specularColorMap,re=!!S.specularIntensityMap,B=St&&!!S.transmissionMap,lt=St&&!!S.thicknessMap,Y=!!S.gradientMap,Q=!!S.alphaMap,mt=S.alphaTest>0,dt=!!S.alphaHash,Ut=!!S.extensions;let pe=hi;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(pe=r.toneMapping);const Ie={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:Vt,fragmentShader:$,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:zt,batchingColor:zt&&I._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&I.instanceColor!==null,instancingMorph:Dt&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ct===null?r.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:fs,alphaToCoverage:!!S.alphaToCoverage,map:fe,matcap:Yt,envMap:xe,envMapMode:xe&&j.mapping,envMapCubeUVHeight:V,aoMap:G,lightMap:Je,bumpMap:Wt,normalMap:qt,displacementMap:u&&Ct,emissiveMap:ae,normalMapObjectSpace:qt&&S.normalMapType===ku,normalMapTangentSpace:qt&&S.normalMapType===lh,metalnessMap:At,roughnessMap:R,anisotropy:b,anisotropyMap:ht,clearcoat:W,clearcoatMap:xt,clearcoatNormalMap:jt,clearcoatRoughnessMap:nt,dispersion:J,iridescence:tt,iridescenceMap:vt,iridescenceThicknessMap:Rt,sheen:K,sheenColorMap:Lt,sheenRoughnessMap:yt,specularMap:Xt,specularColorMap:kt,specularIntensityMap:re,transmission:St,transmissionMap:B,thicknessMap:lt,gradientMap:Y,opaque:S.transparent===!1&&S.blending===ns&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:mt,alphaHash:dt,combine:S.combine,mapUv:fe&&x(S.map.channel),aoMapUv:G&&x(S.aoMap.channel),lightMapUv:Je&&x(S.lightMap.channel),bumpMapUv:Wt&&x(S.bumpMap.channel),normalMapUv:qt&&x(S.normalMap.channel),displacementMapUv:Ct&&x(S.displacementMap.channel),emissiveMapUv:ae&&x(S.emissiveMap.channel),metalnessMapUv:At&&x(S.metalnessMap.channel),roughnessMapUv:R&&x(S.roughnessMap.channel),anisotropyMapUv:ht&&x(S.anisotropyMap.channel),clearcoatMapUv:xt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:yt&&x(S.sheenRoughnessMap.channel),specularMapUv:Xt&&x(S.specularMap.channel),specularColorMapUv:kt&&x(S.specularColorMap.channel),specularIntensityMapUv:re&&x(S.specularIntensityMap.channel),transmissionMapUv:B&&x(S.transmissionMap.channel),thicknessMapUv:lt&&x(S.thicknessMap.channel),alphaMapUv:Q&&x(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(qt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(fe||Q),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pt,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:st,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&Kt.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Be,flipSided:S.side===Fe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function f(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)w.push(L),w.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(v(w,S),M(w,S),w.push(r.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function M(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const w=g[S.type];let L;if(w){const H=bn[w];L=Or.clone(H.uniforms)}else L=S.uniforms;return L}function P(S,w){let L;for(let H=0,I=h.length;H<I;H++){const U=h[H];if(U.cacheKey===w){L=U,++L.usedTimes;break}}return L===void 0&&(L=new Tg(r,w,S,s),h.push(L)),L}function A(S){if(--S.usedTimes===0){const w=h.indexOf(S);h[w]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:P,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:D}}function Lg(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Ig(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function il(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function sl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,p,g,x,m){let f=r[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},r[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),t++,f}function a(d,u,p,g,x,m){const f=o(d,u,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(d,u,p,g,x,m){const f=o(d,u,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||Ig),n.length>1&&n.sort(u||il),i.length>1&&i.sort(u||il)}function h(){for(let d=t,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Dg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new sl,r.set(n,[o])):i>=s.length?(o=new sl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ng(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Nt};break;case"SpotLight":e={position:new z,direction:new z,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function Ug(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Bg=0;function Fg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function kg(r){const t=new Ng,e=Ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const i=new z,s=new ue,o=new ue;function a(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,v=0,M=0,y=0,P=0,A=0,C=0;l.sort(Fg);for(let S=0,w=l.length;S<w;S++){const L=l[S],H=L.color,I=L.intensity,U=L.distance,F=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*I,d+=H.g*I,u+=H.b*I;else if(L.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(L.sh.coefficients[N],I);C++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,V=e.get(L);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=F,n.directionalShadowMatrix[p]=L.shadow.matrix,v++}n.directional[p]=N,p++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(H).multiplyScalar(I),N.distance=U,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,n.spot[x]=N;const j=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,j.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=j.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=F,y++}x++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(H).multiplyScalar(I),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=N,m++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const j=L.shadow,V=e.get(L);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=N,g++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(I),N.groundColor.copy(L.groundColor).multiplyScalar(I),n.hemi[f]=N,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==v||D.numPointShadows!==M||D.numSpotShadows!==y||D.numSpotMaps!==P||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=v,D.numPointShadows=M,D.numSpotShadows=y,D.numSpotMaps=P,D.numLightProbes=C,n.version=Bg++)}function c(l,h){let d=0,u=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){const M=l[f];if(M.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(M.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function rl(r){const t=new kg(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Og(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new rl(r),t.set(i,[a])):s>=o.length?(a=new rl(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class zg extends Pi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gg extends Pi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vg=`uniform sampler2D shadow_pass;
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
}`;function Wg(r,t,e){let n=new Ha;const i=new Tt,s=new Tt,o=new ge,a=new zg({depthPacking:Fu}),c=new Gg,l={},h=e.maxTextureSize,d={[Kn]:Fe,[Fe]:Kn,[Be]:Be},u=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Hg,fragmentShader:Vg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let f=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=r.getRenderTarget(),w=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Yn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const I=f!==Vn&&this.type===Vn,U=f===Vn&&this.type!==Vn;for(let F=0,N=A.length;F<N;F++){const j=A[F],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const Z=V.getFrameExtents();if(i.multiply(Z),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,V.mapSize.y=s.y)),V.map===null||I===!0||U===!0){const ut=this.type!==Vn?{minFilter:xn,magFilter:xn}:{};V.map!==null&&V.map.dispose(),V.map=new vn(i.x,i.y,ut),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const rt=V.getViewportCount();for(let ut=0;ut<rt;ut++){const st=V.getViewport(ut);o.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),H.viewport(o),V.updateMatrices(j,ut),n=V.getFrustum(),y(C,D,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===Vn&&v(V,D),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(S,w,L)};function v(A,C){const D=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vn(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,D,u,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,D,p,x,null)}function M(A,C,D,S){let w=null;const L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)w=L;else if(w=D.isPointLight===!0?c:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=w.uuid,I=C.uuid;let U=l[H];U===void 0&&(U={},l[H]=U);let F=U[I];F===void 0&&(F=w.clone(),U[I]=F,C.addEventListener("dispose",P)),w=F}if(w.visible=C.visible,w.wireframe=C.wireframe,S===Vn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:d[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=r.properties.get(w);H.light=D}return w}function y(A,C,D,S,w){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const I=t.update(A),U=A.material;if(Array.isArray(U)){const F=I.groups;for(let N=0,j=F.length;N<j;N++){const V=F[N],Z=U[V.materialIndex];if(Z&&Z.visible){const rt=M(A,Z,S,w);A.onBeforeShadow(r,A,C,D,I,rt,V),r.renderBufferDirect(D,null,I,rt,A,V),A.onAfterShadow(r,A,C,D,I,rt,V)}}}else if(U.visible){const F=M(A,U,S,w);A.onBeforeShadow(r,A,C,D,I,F,null),r.renderBufferDirect(D,null,I,F,A,null),A.onAfterShadow(r,A,C,D,I,F,null)}}const H=A.children;for(let I=0,U=H.length;I<U;I++)y(H[I],C,D,S,w)}function P(A){A.target.removeEventListener("dispose",P);for(const D in l){const S=l[D],w=A.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const qg={[Vo]:Wo,[qo]:jo,[Xo]:$o,[os]:Yo,[Wo]:Vo,[jo]:qo,[$o]:Xo,[Yo]:os};function Xg(r,t){function e(){let B=!1;const lt=new ge;let Y=null;const Q=new ge(0,0,0,0);return{setMask:function(mt){Y!==mt&&!B&&(r.colorMask(mt,mt,mt,mt),Y=mt)},setLocked:function(mt){B=mt},setClear:function(mt,dt,Ut,pe,Ie){Ie===!0&&(mt*=pe,dt*=pe,Ut*=pe),lt.set(mt,dt,Ut,pe),Q.equals(lt)===!1&&(r.clearColor(mt,dt,Ut,pe),Q.copy(lt))},reset:function(){B=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let B=!1,lt=!1,Y=null,Q=null,mt=null;return{setReversed:function(dt){if(lt!==dt){const Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const pe=mt;mt=null,this.setClear(pe)}lt=dt},getReversed:function(){return lt},setTest:function(dt){dt?ct(r.DEPTH_TEST):Pt(r.DEPTH_TEST)},setMask:function(dt){Y!==dt&&!B&&(r.depthMask(dt),Y=dt)},setFunc:function(dt){if(lt&&(dt=qg[dt]),Q!==dt){switch(dt){case Vo:r.depthFunc(r.NEVER);break;case Wo:r.depthFunc(r.ALWAYS);break;case qo:r.depthFunc(r.LESS);break;case os:r.depthFunc(r.LEQUAL);break;case Xo:r.depthFunc(r.EQUAL);break;case Yo:r.depthFunc(r.GEQUAL);break;case jo:r.depthFunc(r.GREATER);break;case $o:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=dt}},setLocked:function(dt){B=dt},setClear:function(dt){mt!==dt&&(lt&&(dt=1-dt),r.clearDepth(dt),mt=dt)},reset:function(){B=!1,Y=null,Q=null,mt=null,lt=!1}}}function i(){let B=!1,lt=null,Y=null,Q=null,mt=null,dt=null,Ut=null,pe=null,Ie=null;return{setTest:function(ee){B||(ee?ct(r.STENCIL_TEST):Pt(r.STENCIL_TEST))},setMask:function(ee){lt!==ee&&!B&&(r.stencilMask(ee),lt=ee)},setFunc:function(ee,cn,Pn){(Y!==ee||Q!==cn||mt!==Pn)&&(r.stencilFunc(ee,cn,Pn),Y=ee,Q=cn,mt=Pn)},setOp:function(ee,cn,Pn){(dt!==ee||Ut!==cn||pe!==Pn)&&(r.stencilOp(ee,cn,Pn),dt=ee,Ut=cn,pe=Pn)},setLocked:function(ee){B=ee},setClear:function(ee){Ie!==ee&&(r.clearStencil(ee),Ie=ee)},reset:function(){B=!1,lt=null,Y=null,Q=null,mt=null,dt=null,Ut=null,pe=null,Ie=null}}}const s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,v=null,M=null,y=null,P=null,A=null,C=new Nt(0,0,0),D=0,S=!1,w=null,L=null,H=null,I=null,U=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,j=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=j>=2);let Z=null,rt={};const ut=r.getParameter(r.SCISSOR_BOX),st=r.getParameter(r.VIEWPORT),Vt=new ge().fromArray(ut),$=new ge().fromArray(st);function et(B,lt,Y,Q){const mt=new Uint8Array(4),dt=r.createTexture();r.bindTexture(B,dt),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ut=0;Ut<Y;Ut++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(lt,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,mt):r.texImage2D(lt+Ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,mt);return dt}const _t={};_t[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),_t[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_t[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(r.DEPTH_TEST),o.setFunc(os),Wt(!1),qt(uc),ct(r.CULL_FACE),G(Yn);function ct(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function Pt(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function Dt(B,lt){return d[B]!==lt?(r.bindFramebuffer(B,lt),d[B]=lt,B===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=lt),B===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=lt),!0):!1}function zt(B,lt){let Y=p,Q=!1;if(B){Y=u.get(lt),Y===void 0&&(Y=[],u.set(lt,Y));const mt=B.textures;if(Y.length!==mt.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Ut=mt.length;dt<Ut;dt++)Y[dt]=r.COLOR_ATTACHMENT0+dt;Y.length=mt.length,Q=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,Q=!0);Q&&r.drawBuffers(Y)}function fe(B){return g!==B?(r.useProgram(B),g=B,!0):!1}const Yt={[Si]:r.FUNC_ADD,[hu]:r.FUNC_SUBTRACT,[uu]:r.FUNC_REVERSE_SUBTRACT};Yt[du]=r.MIN,Yt[fu]=r.MAX;const xe={[pu]:r.ZERO,[mu]:r.ONE,[gu]:r.SRC_COLOR,[Go]:r.SRC_ALPHA,[wu]:r.SRC_ALPHA_SATURATE,[_u]:r.DST_COLOR,[vu]:r.DST_ALPHA,[xu]:r.ONE_MINUS_SRC_COLOR,[Ho]:r.ONE_MINUS_SRC_ALPHA,[Mu]:r.ONE_MINUS_DST_COLOR,[yu]:r.ONE_MINUS_DST_ALPHA,[bu]:r.CONSTANT_COLOR,[Su]:r.ONE_MINUS_CONSTANT_COLOR,[Eu]:r.CONSTANT_ALPHA,[Tu]:r.ONE_MINUS_CONSTANT_ALPHA};function G(B,lt,Y,Q,mt,dt,Ut,pe,Ie,ee){if(B===Yn){x===!0&&(Pt(r.BLEND),x=!1);return}if(x===!1&&(ct(r.BLEND),x=!0),B!==lu){if(B!==m||ee!==S){if((f!==Si||y!==Si)&&(r.blendEquation(r.FUNC_ADD),f=Si,y=Si),ee)switch(B){case ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ur:r.blendFunc(r.ONE,r.ONE);break;case dc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ur:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case dc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,M=null,P=null,A=null,C.set(0,0,0),D=0,m=B,S=ee}return}mt=mt||lt,dt=dt||Y,Ut=Ut||Q,(lt!==f||mt!==y)&&(r.blendEquationSeparate(Yt[lt],Yt[mt]),f=lt,y=mt),(Y!==v||Q!==M||dt!==P||Ut!==A)&&(r.blendFuncSeparate(xe[Y],xe[Q],xe[dt],xe[Ut]),v=Y,M=Q,P=dt,A=Ut),(pe.equals(C)===!1||Ie!==D)&&(r.blendColor(pe.r,pe.g,pe.b,Ie),C.copy(pe),D=Ie),m=B,S=!1}function Je(B,lt){B.side===Be?Pt(r.CULL_FACE):ct(r.CULL_FACE);let Y=B.side===Fe;lt&&(Y=!Y),Wt(Y),B.blending===ns&&B.transparent===!1?G(Yn):G(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Q=B.stencilWrite;a.setTest(Q),Q&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ct(r.SAMPLE_ALPHA_TO_COVERAGE):Pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(B){w!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),w=B)}function qt(B){B!==au?(ct(r.CULL_FACE),B!==L&&(B===uc?r.cullFace(r.BACK):B===cu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pt(r.CULL_FACE),L=B}function Ct(B){B!==H&&(N&&r.lineWidth(B),H=B)}function ae(B,lt,Y){B?(ct(r.POLYGON_OFFSET_FILL),(I!==lt||U!==Y)&&(r.polygonOffset(lt,Y),I=lt,U=Y)):Pt(r.POLYGON_OFFSET_FILL)}function At(B){B?ct(r.SCISSOR_TEST):Pt(r.SCISSOR_TEST)}function R(B){B===void 0&&(B=r.TEXTURE0+F-1),Z!==B&&(r.activeTexture(B),Z=B)}function b(B,lt,Y){Y===void 0&&(Z===null?Y=r.TEXTURE0+F-1:Y=Z);let Q=rt[Y];Q===void 0&&(Q={type:void 0,texture:void 0},rt[Y]=Q),(Q.type!==B||Q.texture!==lt)&&(Z!==Y&&(r.activeTexture(Y),Z=Y),r.bindTexture(B,lt||_t[B]),Q.type=B,Q.texture=lt)}function W(){const B=rt[Z];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function jt(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(B){Vt.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Vt.copy(B))}function yt(B){$.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),$.copy(B))}function Xt(B,lt){let Y=l.get(lt);Y===void 0&&(Y=new WeakMap,l.set(lt,Y));let Q=Y.get(B);Q===void 0&&(Q=r.getUniformBlockIndex(lt,B.name),Y.set(B,Q))}function kt(B,lt){const Q=l.get(lt).get(B);c.get(lt)!==Q&&(r.uniformBlockBinding(lt,Q,B.__bindingPointIndex),c.set(lt,Q))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Z=null,rt={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,v=null,M=null,y=null,P=null,A=null,C=new Nt(0,0,0),D=0,S=!1,w=null,L=null,H=null,I=null,U=null,Vt.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ct,disable:Pt,bindFramebuffer:Dt,drawBuffers:zt,useProgram:fe,setBlending:G,setMaterial:Je,setFlipSided:Wt,setCullFace:qt,setLineWidth:Ct,setPolygonOffset:ae,setScissorTest:At,activeTexture:R,bindTexture:b,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:vt,texImage3D:Rt,updateUBOMapping:Xt,uniformBlockBinding:kt,texStorage2D:jt,texStorage3D:nt,texSubImage2D:K,texSubImage3D:St,compressedTexSubImage2D:ht,compressedTexSubImage3D:xt,scissor:Lt,viewport:yt,reset:re}}function ol(r,t,e,n){const i=Yg(n);switch(e){case nh:return r*t;case sh:return r*t;case rh:return r*t*2;case oh:return r*t/i.components*i.byteLength;case Oa:return r*t/i.components*i.byteLength;case ah:return r*t*2/i.components*i.byteLength;case za:return r*t*2/i.components*i.byteLength;case ih:return r*t*3/i.components*i.byteLength;case mn:return r*t*4/i.components*i.byteLength;case Ga:return r*t*4/i.components*i.byteLength;case Sr:case Er:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Ar:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ta:case na:return Math.max(r,16)*Math.max(t,8)/4;case Qo:case ea:return Math.max(r,8)*Math.max(t,8)/2;case ia:case sa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ra:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case aa:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ca:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case la:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ha:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ua:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case da:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case fa:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case pa:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ma:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ga:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case xa:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case va:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ya:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Cr:case _a:case Ma:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ch:case wa:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ba:case Sa:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yg(r){switch(r){case Zn:case Ql:return{byteLength:1,components:1};case Fs:case th:case jn:return{byteLength:2,components:1};case Fa:case ka:return{byteLength:2,components:4};case Ri:case Ba:case Wn:return{byteLength:4,components:1};case eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function jg(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Tt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return p?new OffscreenCanvas(R,b):kr("canvas")}function x(R,b,W){let J=1;const tt=At(R);if((tt.width>W||tt.height>W)&&(J=W/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(J*tt.width),St=Math.floor(J*tt.height);d===void 0&&(d=g(K,St));const ht=b?g(K,St):d;return ht.width=K,ht.height=St,ht.getContext("2d").drawImage(R,0,0,K,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+St+")."),ht}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){r.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,b,W,J,tt=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=b;if(b===r.RED&&(W===r.FLOAT&&(K=r.R32F),W===r.HALF_FLOAT&&(K=r.R16F),W===r.UNSIGNED_BYTE&&(K=r.R8)),b===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.R8UI),W===r.UNSIGNED_SHORT&&(K=r.R16UI),W===r.UNSIGNED_INT&&(K=r.R32UI),W===r.BYTE&&(K=r.R8I),W===r.SHORT&&(K=r.R16I),W===r.INT&&(K=r.R32I)),b===r.RG&&(W===r.FLOAT&&(K=r.RG32F),W===r.HALF_FLOAT&&(K=r.RG16F),W===r.UNSIGNED_BYTE&&(K=r.RG8)),b===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.RG8UI),W===r.UNSIGNED_SHORT&&(K=r.RG16UI),W===r.UNSIGNED_INT&&(K=r.RG32UI),W===r.BYTE&&(K=r.RG8I),W===r.SHORT&&(K=r.RG16I),W===r.INT&&(K=r.RG32I)),b===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.RGB8UI),W===r.UNSIGNED_SHORT&&(K=r.RGB16UI),W===r.UNSIGNED_INT&&(K=r.RGB32UI),W===r.BYTE&&(K=r.RGB8I),W===r.SHORT&&(K=r.RGB16I),W===r.INT&&(K=r.RGB32I)),b===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),W===r.UNSIGNED_INT&&(K=r.RGBA32UI),W===r.BYTE&&(K=r.RGBA8I),W===r.SHORT&&(K=r.RGBA16I),W===r.INT&&(K=r.RGBA32I)),b===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),b===r.RGBA){const St=tt?Wr:Kt.getTransfer(J);W===r.FLOAT&&(K=r.RGBA32F),W===r.HALF_FLOAT&&(K=r.RGBA16F),W===r.UNSIGNED_BYTE&&(K=St===ne?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(R,b){let W;return R?b===null||b===Ri||b===ls?W=r.DEPTH24_STENCIL8:b===Wn?W=r.DEPTH32F_STENCIL8:b===Fs&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ri||b===ls?W=r.DEPTH_COMPONENT24:b===Wn?W=r.DEPTH_COMPONENT32F:b===Fs&&(W=r.DEPTH_COMPONENT16),W}function P(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==xn&&R.minFilter!==Tn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){const b=R.target;b.removeEventListener("dispose",A),D(b),b.isVideoTexture&&h.delete(b)}function C(R){const b=R.target;b.removeEventListener("dispose",C),w(b)}function D(R){const b=n.get(R);if(b.__webglInit===void 0)return;const W=R.source,J=u.get(W);if(J){const tt=J[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(R),Object.keys(J).length===0&&u.delete(W)}n.remove(R)}function S(R){const b=n.get(R);r.deleteTexture(b.__webglTexture);const W=R.source,J=u.get(W);delete J[b.__cacheKey],o.memory.textures--}function w(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let tt=0;tt<b.__webglFramebuffer[J].length;tt++)r.deleteFramebuffer(b.__webglFramebuffer[J][tt]);else r.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)r.deleteFramebuffer(b.__webglFramebuffer[J]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=R.textures;for(let J=0,tt=W.length;J<tt;J++){const K=n.get(W[J]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(W[J])}n.remove(R)}let L=0;function H(){L=0}function I(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function U(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function F(R,b){const W=n.get(R);if(R.isVideoTexture&&Ct(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,R,b);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+b)}function N(R,b){const W=n.get(R);if(R.version>0&&W.__version!==R.version){$(W,R,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+b)}function j(R,b){const W=n.get(R);if(R.version>0&&W.__version!==R.version){$(W,R,b);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+b)}function V(R,b){const W=n.get(R);if(R.version>0&&W.__version!==R.version){et(W,R,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+b)}const Z={[Bs]:r.REPEAT,[Ai]:r.CLAMP_TO_EDGE,[Jo]:r.MIRRORED_REPEAT},rt={[xn]:r.NEAREST,[Uu]:r.NEAREST_MIPMAP_NEAREST,[Ws]:r.NEAREST_MIPMAP_LINEAR,[Tn]:r.LINEAR,[Jr]:r.LINEAR_MIPMAP_NEAREST,[Ci]:r.LINEAR_MIPMAP_LINEAR},ut={[Ou]:r.NEVER,[qu]:r.ALWAYS,[zu]:r.LESS,[hh]:r.LEQUAL,[Gu]:r.EQUAL,[Wu]:r.GEQUAL,[Hu]:r.GREATER,[Vu]:r.NOTEQUAL};function st(R,b){if(b.type===Wn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Tn||b.magFilter===Jr||b.magFilter===Ws||b.magFilter===Ci||b.minFilter===Tn||b.minFilter===Jr||b.minFilter===Ws||b.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Z[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Z[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Z[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,rt[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,rt[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ut[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xn||b.minFilter!==Ws&&b.minFilter!==Ci||b.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Vt(R,b){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));const J=b.source;let tt=u.get(J);tt===void 0&&(tt={},u.set(J,tt));const K=U(b);if(K!==R.__cacheKey){tt[K]===void 0&&(tt[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),tt[K].usedTimes++;const St=tt[R.__cacheKey];St!==void 0&&(tt[R.__cacheKey].usedTimes--,St.usedTimes===0&&S(b)),R.__cacheKey=K,R.__webglTexture=tt[K].texture}return W}function $(R,b,W){let J=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=r.TEXTURE_3D);const tt=Vt(R,b),K=b.source;e.bindTexture(J,R.__webglTexture,r.TEXTURE0+W);const St=n.get(K);if(K.version!==St.__version||tt===!0){e.activeTexture(r.TEXTURE0+W);const ht=Kt.getPrimaries(Kt.workingColorSpace),xt=b.colorSpace===ci?null:Kt.getPrimaries(b.colorSpace),jt=b.colorSpace===ci||ht===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let nt=x(b.image,!1,i.maxTextureSize);nt=ae(b,nt);const vt=s.convert(b.format,b.colorSpace),Rt=s.convert(b.type);let Lt=M(b.internalFormat,vt,Rt,b.colorSpace,b.isVideoTexture);st(J,b);let yt;const Xt=b.mipmaps,kt=b.isVideoTexture!==!0,re=St.__version===void 0||tt===!0,B=K.dataReady,lt=P(b,nt);if(b.isDepthTexture)Lt=y(b.format===hs,b.type),re&&(kt?e.texStorage2D(r.TEXTURE_2D,1,Lt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,Lt,nt.width,nt.height,0,vt,Rt,null));else if(b.isDataTexture)if(Xt.length>0){kt&&re&&e.texStorage2D(r.TEXTURE_2D,lt,Lt,Xt[0].width,Xt[0].height);for(let Y=0,Q=Xt.length;Y<Q;Y++)yt=Xt[Y],kt?B&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,yt.width,yt.height,vt,Rt,yt.data):e.texImage2D(r.TEXTURE_2D,Y,Lt,yt.width,yt.height,0,vt,Rt,yt.data);b.generateMipmaps=!1}else kt?(re&&e.texStorage2D(r.TEXTURE_2D,lt,Lt,nt.width,nt.height),B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,Rt,nt.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,nt.width,nt.height,0,vt,Rt,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){kt&&re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,Lt,Xt[0].width,Xt[0].height,nt.depth);for(let Y=0,Q=Xt.length;Y<Q;Y++)if(yt=Xt[Y],b.format!==mn)if(vt!==null)if(kt){if(B)if(b.layerUpdates.size>0){const mt=ol(yt.width,yt.height,b.format,b.type);for(const dt of b.layerUpdates){const Ut=yt.data.subarray(dt*mt/yt.data.BYTES_PER_ELEMENT,(dt+1)*mt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,dt,yt.width,yt.height,1,vt,Ut)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,yt.width,yt.height,nt.depth,vt,yt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Lt,yt.width,yt.height,nt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?B&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,yt.width,yt.height,nt.depth,vt,Rt,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Y,Lt,yt.width,yt.height,nt.depth,0,vt,Rt,yt.data)}else{kt&&re&&e.texStorage2D(r.TEXTURE_2D,lt,Lt,Xt[0].width,Xt[0].height);for(let Y=0,Q=Xt.length;Y<Q;Y++)yt=Xt[Y],b.format!==mn?vt!==null?kt?B&&e.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,yt.width,yt.height,vt,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,Y,Lt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?B&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,yt.width,yt.height,vt,Rt,yt.data):e.texImage2D(r.TEXTURE_2D,Y,Lt,yt.width,yt.height,0,vt,Rt,yt.data)}else if(b.isDataArrayTexture)if(kt){if(re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,Lt,nt.width,nt.height,nt.depth),B)if(b.layerUpdates.size>0){const Y=ol(nt.width,nt.height,b.format,b.type);for(const Q of b.layerUpdates){const mt=nt.data.subarray(Q*Y/nt.data.BYTES_PER_ELEMENT,(Q+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,nt.width,nt.height,1,vt,Rt,mt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,Rt,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,nt.width,nt.height,nt.depth,0,vt,Rt,nt.data);else if(b.isData3DTexture)kt?(re&&e.texStorage3D(r.TEXTURE_3D,lt,Lt,nt.width,nt.height,nt.depth),B&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,Rt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,nt.width,nt.height,nt.depth,0,vt,Rt,nt.data);else if(b.isFramebufferTexture){if(re)if(kt)e.texStorage2D(r.TEXTURE_2D,lt,Lt,nt.width,nt.height);else{let Y=nt.width,Q=nt.height;for(let mt=0;mt<lt;mt++)e.texImage2D(r.TEXTURE_2D,mt,Lt,Y,Q,0,vt,Rt,null),Y>>=1,Q>>=1}}else if(Xt.length>0){if(kt&&re){const Y=At(Xt[0]);e.texStorage2D(r.TEXTURE_2D,lt,Lt,Y.width,Y.height)}for(let Y=0,Q=Xt.length;Y<Q;Y++)yt=Xt[Y],kt?B&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,vt,Rt,yt):e.texImage2D(r.TEXTURE_2D,Y,Lt,vt,Rt,yt);b.generateMipmaps=!1}else if(kt){if(re){const Y=At(nt);e.texStorage2D(r.TEXTURE_2D,lt,Lt,Y.width,Y.height)}B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,Rt,nt)}else e.texImage2D(r.TEXTURE_2D,0,Lt,vt,Rt,nt);m(b)&&f(J),St.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function et(R,b,W){if(b.image.length!==6)return;const J=Vt(R,b),tt=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+W);const K=n.get(tt);if(tt.version!==K.__version||J===!0){e.activeTexture(r.TEXTURE0+W);const St=Kt.getPrimaries(Kt.workingColorSpace),ht=b.colorSpace===ci?null:Kt.getPrimaries(b.colorSpace),xt=b.colorSpace===ci||St===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const jt=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,vt=[];for(let Q=0;Q<6;Q++)!jt&&!nt?vt[Q]=x(b.image[Q],!0,i.maxCubemapSize):vt[Q]=nt?b.image[Q].image:b.image[Q],vt[Q]=ae(b,vt[Q]);const Rt=vt[0],Lt=s.convert(b.format,b.colorSpace),yt=s.convert(b.type),Xt=M(b.internalFormat,Lt,yt,b.colorSpace),kt=b.isVideoTexture!==!0,re=K.__version===void 0||J===!0,B=tt.dataReady;let lt=P(b,Rt);st(r.TEXTURE_CUBE_MAP,b);let Y;if(jt){kt&&re&&e.texStorage2D(r.TEXTURE_CUBE_MAP,lt,Xt,Rt.width,Rt.height);for(let Q=0;Q<6;Q++){Y=vt[Q].mipmaps;for(let mt=0;mt<Y.length;mt++){const dt=Y[mt];b.format!==mn?Lt!==null?kt?B&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,dt.width,dt.height,Lt,dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,Xt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,dt.width,dt.height,Lt,yt,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,Xt,dt.width,dt.height,0,Lt,yt,dt.data)}}}else{if(Y=b.mipmaps,kt&&re){Y.length>0&&lt++;const Q=At(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,lt,Xt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(nt){kt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,vt[Q].width,vt[Q].height,Lt,yt,vt[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xt,vt[Q].width,vt[Q].height,0,Lt,yt,vt[Q].data);for(let mt=0;mt<Y.length;mt++){const Ut=Y[mt].image[Q].image;kt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Ut.width,Ut.height,Lt,yt,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,Xt,Ut.width,Ut.height,0,Lt,yt,Ut.data)}}else{kt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,yt,vt[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xt,Lt,yt,vt[Q]);for(let mt=0;mt<Y.length;mt++){const dt=Y[mt];kt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Lt,yt,dt.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,Xt,Lt,yt,dt.image[Q])}}}m(b)&&f(r.TEXTURE_CUBE_MAP),K.__version=tt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function _t(R,b,W,J,tt,K){const St=s.convert(W.format,W.colorSpace),ht=s.convert(W.type),xt=M(W.internalFormat,St,ht,W.colorSpace),jt=n.get(b),nt=n.get(W);if(nt.__renderTarget=b,!jt.__hasExternalTextures){const vt=Math.max(1,b.width>>K),Rt=Math.max(1,b.height>>K);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,xt,vt,Rt,b.depth,0,St,ht,null):e.texImage2D(tt,K,xt,vt,Rt,0,St,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),qt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,tt,nt.__webglTexture,0,Wt(b)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,tt,nt.__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(R,b,W){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){const J=b.depthTexture,tt=J&&J.isDepthTexture?J.type:null,K=y(b.stencilBuffer,tt),St=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=Wt(b);qt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,K,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,K,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,K,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,R)}else{const J=b.textures;for(let tt=0;tt<J.length;tt++){const K=J[tt],St=s.convert(K.format,K.colorSpace),ht=s.convert(K.type),xt=M(K.internalFormat,St,ht,K.colorSpace),jt=Wt(b);W&&qt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,xt,b.width,b.height):qt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt,xt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,xt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const tt=J.__webglTexture,K=Wt(b);if(b.depthTexture.format===is)qt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0);else if(b.depthTexture.format===hs)qt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Dt(R){const b=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=J}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Pt(b.__webglFramebuffer,R)}else if(W){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=r.createRenderbuffer(),ct(b.__webglDepthbuffer[J],R,!1);else{const tt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ct(b.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,tt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(R,b,W){const J=n.get(R);b!==void 0&&_t(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Dt(R)}function fe(R){const b=R.texture,W=n.get(R),J=n.get(b);R.addEventListener("dispose",C);const tt=R.textures,K=R.isWebGLCubeRenderTarget===!0,St=tt.length>1;if(St||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=b.version,o.memory.textures++),K){W.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[ht]=[];for(let xt=0;xt<b.mipmaps.length;xt++)W.__webglFramebuffer[ht][xt]=r.createFramebuffer()}else W.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)W.__webglFramebuffer[ht]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(St)for(let ht=0,xt=tt.length;ht<xt;ht++){const jt=n.get(tt[ht]);jt.__webglTexture===void 0&&(jt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&qt(R)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){const xt=tt[ht];W.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[ht]);const jt=s.convert(xt.format,xt.colorSpace),nt=s.convert(xt.type),vt=M(xt.internalFormat,jt,nt,xt.colorSpace,R.isXRRenderTarget===!0),Rt=Wt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,vt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,W.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),ct(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),st(r.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)_t(W.__webglFramebuffer[ht][xt],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,xt);else _t(W.__webglFramebuffer[ht],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(b)&&f(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ht=0,xt=tt.length;ht<xt;ht++){const jt=tt[ht],nt=n.get(jt);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),st(r.TEXTURE_2D,jt),_t(W.__webglFramebuffer,R,jt,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),m(jt)&&f(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,J.__webglTexture),st(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)_t(W.__webglFramebuffer[xt],R,b,r.COLOR_ATTACHMENT0,ht,xt);else _t(W.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,ht,0);m(b)&&f(ht),e.unbindTexture()}R.depthBuffer&&Dt(R)}function Yt(R){const b=R.textures;for(let W=0,J=b.length;W<J;W++){const tt=b[W];if(m(tt)){const K=v(R),St=n.get(tt).__webglTexture;e.bindTexture(K,St),f(K),e.unbindTexture()}}}const xe=[],G=[];function Je(R){if(R.samples>0){if(qt(R)===!1){const b=R.textures,W=R.width,J=R.height;let tt=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=n.get(R),ht=b.length>1;if(ht)for(let xt=0;xt<b.length;xt++)e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let xt=0;xt<b.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const jt=n.get(b[xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,jt,0)}r.blitFramebuffer(0,0,W,J,0,0,W,J,tt,r.NEAREST),c===!0&&(xe.length=0,G.length=0,xe.push(r.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(xe.push(K),G.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,G)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let xt=0;xt<b.length;xt++){e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const jt=n.get(b[xt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,jt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Wt(R){return Math.min(i.maxSamples,R.samples)}function qt(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ct(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function ae(R,b){const W=R.colorSpace,J=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==fs&&W!==ci&&(Kt.getTransfer(W)===ne?(J!==mn||tt!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function At(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=H,this.setTexture2D=F,this.setTexture2DArray=N,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=zt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=qt}function $g(r,t){function e(n,i=ci){let s;const o=Kt.getTransfer(i);if(n===Zn)return r.UNSIGNED_BYTE;if(n===Fa)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return r.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return r.BYTE;if(n===th)return r.SHORT;if(n===Fs)return r.UNSIGNED_SHORT;if(n===Ba)return r.INT;if(n===Ri)return r.UNSIGNED_INT;if(n===Wn)return r.FLOAT;if(n===jn)return r.HALF_FLOAT;if(n===nh)return r.ALPHA;if(n===ih)return r.RGB;if(n===mn)return r.RGBA;if(n===sh)return r.LUMINANCE;if(n===rh)return r.LUMINANCE_ALPHA;if(n===is)return r.DEPTH_COMPONENT;if(n===hs)return r.DEPTH_STENCIL;if(n===oh)return r.RED;if(n===Oa)return r.RED_INTEGER;if(n===ah)return r.RG;if(n===za)return r.RG_INTEGER;if(n===Ga)return r.RGBA_INTEGER;if(n===Sr||n===Er||n===Tr||n===Ar)if(o===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===ta||n===ea||n===na)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ta)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===na)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ia||n===sa||n===ra)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ia||n===sa)return o===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ra)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===xa||n===va||n===ya)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===oa)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ca)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ha)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===da)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pa)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ma)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ga)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xa)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===va)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ya)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cr||n===_a||n===Ma)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Cr)return o===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_a)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ch||n===wa||n===ba||n===Sa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Cr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Kg extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class an extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zg={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class t0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new He,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xe({vertexShader:Jg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new Pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e0 extends ps{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const x=new t0,m=e.getContextAttributes();let f=null,v=null;const M=[],y=[],P=new Tt;let A=null;const C=new Ke;C.viewport=new ge;const D=new Ke;D.viewport=new ge;const S=[C,D],w=new Kg;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=M[$];return et===void 0&&(et=new Co,M[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=M[$];return et===void 0&&(et=new Co,M[$]=et),et.getGripSpace()},this.getHand=function($){let et=M[$];return et===void 0&&(et=new Co,M[$]=et),et.getHandSpace()};function I($){const et=y.indexOf($.inputSource);if(et===-1)return;const _t=M[et];_t!==void 0&&(_t.update($.inputSource,$.frame,l||o),_t.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",F);for(let $=0;$<M.length;$++){const et=y[$];et!==null&&(y[$]=null,M[$].disconnect(et))}L=null,H=null,x.reset(),t.setRenderTarget(f),p=null,u=null,d=null,i=null,v=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",U),i.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new vn(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,_t=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?hs:is,_t=m.stencil?ls:Ri);const Pt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Pt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new vn(u.textureWidth,u.textureHeight,{format:mn,type:Zn,depthTexture:new bh(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Vt.setContext(i),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F($){for(let et=0;et<$.removed.length;et++){const _t=$.removed[et],ct=y.indexOf(_t);ct>=0&&(y[ct]=null,M[ct].disconnect(_t))}for(let et=0;et<$.added.length;et++){const _t=$.added[et];let ct=y.indexOf(_t);if(ct===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=y.length){y.push(_t),ct=Dt;break}else if(y[Dt]===null){y[Dt]=_t,ct=Dt;break}if(ct===-1)break}const Pt=M[ct];Pt&&Pt.connect(_t)}}const N=new z,j=new z;function V($,et,_t){N.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const ct=N.distanceTo(j),Pt=et.projectionMatrix.elements,Dt=_t.projectionMatrix.elements,zt=Pt[14]/(Pt[10]-1),fe=Pt[14]/(Pt[10]+1),Yt=(Pt[9]+1)/Pt[5],xe=(Pt[9]-1)/Pt[5],G=(Pt[8]-1)/Pt[0],Je=(Dt[8]+1)/Dt[0],Wt=zt*G,qt=zt*Je,Ct=ct/(-G+Je),ae=Ct*-G;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ae),$.translateZ(Ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const At=zt+Ct,R=fe+Ct,b=Wt-ae,W=qt+(ct-ae),J=Yt*fe/R*At,tt=xe*fe/R*At;$.projectionMatrix.makePerspective(b,W,J,tt,At,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Z($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let et=$.near,_t=$.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),w.near=D.near=C.near=et,w.far=D.far=C.far=_t,(L!==w.near||H!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,H=w.far),C.layers.mask=$.layers.mask|2,D.layers.mask=$.layers.mask|4,w.layers.mask=C.layers.mask|D.layers.mask;const ct=$.parent,Pt=w.cameras;Z(w,ct);for(let Dt=0;Dt<Pt.length;Dt++)Z(Pt[Dt],ct);Pt.length===2?V(w,C,D):w.projectionMatrix.copy(C.projectionMatrix),rt($,w,ct)};function rt($,et,_t){_t===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(_t.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Fr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let ut=null;function st($,et){if(h=et.getViewerPose(l||o),g=et,h!==null){const _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let ct=!1;_t.length!==w.cameras.length&&(w.cameras.length=0,ct=!0);for(let Dt=0;Dt<_t.length;Dt++){const zt=_t[Dt];let fe=null;if(p!==null)fe=p.getViewport(zt);else{const xe=d.getViewSubImage(u,zt);fe=xe.viewport,Dt===0&&(t.setRenderTargetTextures(v,xe.colorTexture,u.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(v))}let Yt=S[Dt];Yt===void 0&&(Yt=new Ke,Yt.layers.enable(Dt),Yt.viewport=new ge,S[Dt]=Yt),Yt.matrix.fromArray(zt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(zt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(fe.x,fe.y,fe.width,fe.height),Dt===0&&(w.matrix.copy(Yt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ct===!0&&w.cameras.push(Yt)}const Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Dt=d.getDepthInformation(_t[0]);Dt&&Dt.isValid&&Dt.texture&&x.init(t,Dt,i.renderState)}}for(let _t=0;_t<M.length;_t++){const ct=y[_t],Pt=M[_t];ct!==null&&Pt!==void 0&&Pt.update(ct,et,l||o)}ut&&ut($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Vt=new wh;Vt.setAnimationLoop(st),this.setAnimationLoop=function($){ut=$},this.dispose=function(){}}}const yi=new Cn,n0=new ue;function i0(r,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,yh(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,M,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,v,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Fe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Fe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,yi.copy(y),yi.x*=-1,yi.y*=-1,yi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(n0.makeRotationFromEuler(yi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function s0(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const y=M.program;n.uniformBlockBinding(v,y)}function l(v,M){let y=i[v.id];y===void 0&&(g(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",m));const P=M.program;n.updateUBOMapping(v,P);const A=t.render.frame;s[v.id]!==A&&(u(v),s[v.id]=A)}function h(v){const M=d();v.__bindingPointIndex=M;const y=r.createBuffer(),P=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,P,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const M=i[v.id],y=v.uniforms,P=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let A=0,C=y.length;A<C;A++){const D=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,w=D.length;S<w;S++){const L=D[S];if(p(L,A,S,P)===!0){const H=L.__offset,I=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let F=0;F<I.length;F++){const N=I[F],j=x(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,H+U,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,U),U+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,M,y,P){const A=v.value,C=M+"_"+y;if(P[C]===void 0)return typeof A=="number"||typeof A=="boolean"?P[C]=A:P[C]=A.clone(),!0;{const D=P[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return P[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(v){const M=v.uniforms;let y=0;const P=16;for(let C=0,D=M.length;C<D;C++){const S=Array.isArray(M[C])?M[C]:[M[C]];for(let w=0,L=S.length;w<L;w++){const H=S[w],I=Array.isArray(H.value)?H.value:[H.value];for(let U=0,F=I.length;U<F;U++){const N=I[U],j=x(N),V=y%P,Z=V%j.boundary,rt=V+Z;y+=Z,rt!==0&&P-rt<j.storage&&(y+=P-rt),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=j.storage}}}const A=y%P;return A>0&&(y+=P-A),v.__size=y,v.__cache={},this}function x(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function f(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:f}}class r0{constructor(t={}){const{canvas:e=Yu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=hi,this.toneMappingExposure=1;const y=this;let P=!1,A=0,C=0,D=null,S=-1,w=null;const L=new ge,H=new ge;let I=null;const U=new Nt(0);let F=0,N=e.width,j=e.height,V=1,Z=null,rt=null;const ut=new ge(0,0,N,j),st=new ge(0,0,N,j);let Vt=!1;const $=new Ha;let et=!1,_t=!1;const ct=new ue,Pt=new ue,Dt=new z,zt=new ge,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function xe(){return D===null?V:1}let G=n;function Je(E,k){return e.getContext(E,k)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ua}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),G===null){const k="webgl2";if(G=Je(k,E),G===null)throw Je(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Wt,qt,Ct,ae,At,R,b,W,J,tt,K,St,ht,xt,jt,nt,vt,Rt,Lt,yt,Xt,kt,re,B;function lt(){Wt=new hm(G),Wt.init(),kt=new $g(G,Wt),qt=new sm(G,Wt,t,kt),Ct=new Xg(G,Wt),qt.reverseDepthBuffer&&u&&Ct.buffers.depth.setReversed(!0),ae=new fm(G),At=new Lg,R=new jg(G,Wt,Ct,At,qt,kt,ae),b=new om(y),W=new lm(y),J=new yd(G),re=new nm(G,J),tt=new um(G,J,ae,re),K=new mm(G,tt,J,ae),Lt=new pm(G,qt,R),nt=new rm(At),St=new Pg(y,b,W,Wt,qt,re,nt),ht=new i0(y,At),xt=new Dg,jt=new Og(Wt),Rt=new em(y,b,W,Ct,K,p,c),vt=new Wg(y,K,qt),B=new s0(G,ae,qt,Ct),yt=new im(G,Wt,ae),Xt=new dm(G,Wt,ae),ae.programs=St.programs,y.capabilities=qt,y.extensions=Wt,y.properties=At,y.renderLists=xt,y.shadowMap=vt,y.state=Ct,y.info=ae}lt();const Y=new e0(y,G);this.xr=Y,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const E=Wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(N,j,!1))},this.getSize=function(E){return E.set(N,j)},this.setSize=function(E,k,q=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,j=k,e.width=Math.floor(E*V),e.height=Math.floor(k*V),q===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(N*V,j*V).floor()},this.setDrawingBufferSize=function(E,k,q){N=E,j=k,V=q,e.width=Math.floor(E*q),e.height=Math.floor(k*q),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(ut)},this.setViewport=function(E,k,q,X){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,k,q,X),Ct.viewport(L.copy(ut).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(st)},this.setScissor=function(E,k,q,X){E.isVector4?st.set(E.x,E.y,E.z,E.w):st.set(E,k,q,X),Ct.scissor(H.copy(st).multiplyScalar(V).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(E){Ct.setScissorTest(Vt=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){rt=E},this.getClearColor=function(E){return E.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(E=!0,k=!0,q=!0){let X=0;if(E){let O=!1;if(D!==null){const it=D.texture.format;O=it===Ga||it===za||it===Oa}if(O){const it=D.texture.type,ft=it===Zn||it===Ri||it===Fs||it===ls||it===Fa||it===ka,Mt=Rt.getClearColor(),wt=Rt.getClearAlpha(),It=Mt.r,Bt=Mt.g,bt=Mt.b;ft?(g[0]=It,g[1]=Bt,g[2]=bt,g[3]=wt,G.clearBufferuiv(G.COLOR,0,g)):(x[0]=It,x[1]=Bt,x[2]=bt,x[3]=wt,G.clearBufferiv(G.COLOR,0,x))}else X|=G.COLOR_BUFFER_BIT}k&&(X|=G.DEPTH_BUFFER_BIT),q&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),xt.dispose(),jt.dispose(),At.dispose(),b.dispose(),W.dispose(),K.dispose(),re.dispose(),B.dispose(),St.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ic),Y.removeEventListener("sessionend",sc),fi.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=ae.autoReset,k=vt.enabled,q=vt.autoUpdate,X=vt.needsUpdate,O=vt.type;lt(),ae.autoReset=E,vt.enabled=k,vt.autoUpdate=q,vt.needsUpdate=X,vt.type=O}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ut(E){const k=E.target;k.removeEventListener("dispose",Ut),pe(k)}function pe(E){Ie(E),At.remove(E)}function Ie(E){const k=At.get(E).programs;k!==void 0&&(k.forEach(function(q){St.releaseProgram(q)}),E.isShaderMaterial&&St.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,q,X,O,it){k===null&&(k=fe);const ft=O.isMesh&&O.matrixWorld.determinant()<0,Mt=nu(E,k,q,X,O);Ct.setMaterial(X,ft);let wt=q.index,It=1;if(X.wireframe===!0){if(wt=tt.getWireframeAttribute(q),wt===void 0)return;It=2}const Bt=q.drawRange,bt=q.attributes.position;let Zt=Bt.start*It,oe=(Bt.start+Bt.count)*It;it!==null&&(Zt=Math.max(Zt,it.start*It),oe=Math.min(oe,(it.start+it.count)*It)),wt!==null?(Zt=Math.max(Zt,0),oe=Math.min(oe,wt.count)):bt!=null&&(Zt=Math.max(Zt,0),oe=Math.min(oe,bt.count));const ce=oe-Zt;if(ce<0||ce===1/0)return;re.setup(O,X,Mt,q,wt);let Ve,Qt=yt;if(wt!==null&&(Ve=J.get(wt),Qt=Xt,Qt.setIndex(Ve)),O.isMesh)X.wireframe===!0?(Ct.setLineWidth(X.wireframeLinewidth*xe()),Qt.setMode(G.LINES)):Qt.setMode(G.TRIANGLES);else if(O.isLine){let Et=X.linewidth;Et===void 0&&(Et=1),Ct.setLineWidth(Et*xe()),O.isLineSegments?Qt.setMode(G.LINES):O.isLineLoop?Qt.setMode(G.LINE_LOOP):Qt.setMode(G.LINE_STRIP)}else O.isPoints?Qt.setMode(G.POINTS):O.isSprite&&Qt.setMode(G.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Et=O._multiDrawStarts,Ln=O._multiDrawCounts,te=O._multiDrawCount,ln=wt?J.get(wt).bytesPerElement:1,Ii=At.get(X).currentProgram.getUniforms();for(let Ye=0;Ye<te;Ye++)Ii.setValue(G,"_gl_DrawID",Ye),Qt.render(Et[Ye]/ln,Ln[Ye])}else if(O.isInstancedMesh)Qt.renderInstances(Zt,ce,O.count);else if(q.isInstancedBufferGeometry){const Et=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ln=Math.min(q.instanceCount,Et);Qt.renderInstances(Zt,ce,Ln)}else Qt.render(Zt,ce)};function ee(E,k,q){E.transparent===!0&&E.side===Be&&E.forceSinglePass===!1?(E.side=Fe,E.needsUpdate=!0,Vs(E,k,q),E.side=Kn,E.needsUpdate=!0,Vs(E,k,q),E.side=Be):Vs(E,k,q)}this.compile=function(E,k,q=null){q===null&&(q=E),f=jt.get(q),f.init(k),M.push(f),q.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),E!==q&&E.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const X=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const it=O.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){const Mt=it[ft];ee(Mt,q,O),X.add(Mt)}else ee(it,q,O),X.add(it)}),M.pop(),f=null,X},this.compileAsync=function(E,k,q=null){const X=this.compile(E,k,q);return new Promise(O=>{function it(){if(X.forEach(function(ft){At.get(ft).currentProgram.isReady()&&X.delete(ft)}),X.size===0){O(E);return}setTimeout(it,10)}Wt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let cn=null;function Pn(E){cn&&cn(E)}function ic(){fi.stop()}function sc(){fi.start()}const fi=new wh;fi.setAnimationLoop(Pn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(E){cn=E,Y.setAnimationLoop(E),E===null?fi.stop():fi.start()},Y.addEventListener("sessionstart",ic),Y.addEventListener("sessionend",sc),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,k,D),f=jt.get(E,M.length),f.init(k),M.push(f),Pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(Pt),_t=this.localClippingEnabled,et=nt.init(this.clippingPlanes,_t),m=xt.get(E,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const it=y.xr.getDepthSensingMesh();it!==null&&Zr(it,k,-1/0,y.sortObjects)}Zr(E,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Z,rt),Yt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Yt&&Rt.addToRenderList(m,E),this.info.render.frame++,et===!0&&nt.beginShadows();const q=f.state.shadowsArray;vt.render(q,E,k),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(f.setupLights(),k.isArrayCamera){const it=k.cameras;if(O.length>0)for(let ft=0,Mt=it.length;ft<Mt;ft++){const wt=it[ft];oc(X,O,E,wt)}Yt&&Rt.render(E);for(let ft=0,Mt=it.length;ft<Mt;ft++){const wt=it[ft];rc(m,E,wt,wt.viewport)}}else O.length>0&&oc(X,O,E,k),Yt&&Rt.render(E),rc(m,E,k);D!==null&&(R.updateMultisampleRenderTarget(D),R.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(y,E,k),re.resetDefaultState(),S=-1,w=null,M.pop(),M.length>0?(f=M[M.length-1],et===!0&&nt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Zr(E,k,q,X){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){X&&zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pt);const ft=K.update(E),Mt=E.material;Mt.visible&&m.push(E,ft,Mt,q,zt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const ft=K.update(E),Mt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),zt.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),zt.copy(ft.boundingSphere.center)),zt.applyMatrix4(E.matrixWorld).applyMatrix4(Pt)),Array.isArray(Mt)){const wt=ft.groups;for(let It=0,Bt=wt.length;It<Bt;It++){const bt=wt[It],Zt=Mt[bt.materialIndex];Zt&&Zt.visible&&m.push(E,ft,Zt,q,zt.z,bt)}}else Mt.visible&&m.push(E,ft,Mt,q,zt.z,null)}}const it=E.children;for(let ft=0,Mt=it.length;ft<Mt;ft++)Zr(it[ft],k,q,X)}function rc(E,k,q,X){const O=E.opaque,it=E.transmissive,ft=E.transparent;f.setupLightsView(q),et===!0&&nt.setGlobalState(y.clippingPlanes,q),X&&Ct.viewport(L.copy(X)),O.length>0&&Hs(O,k,q),it.length>0&&Hs(it,k,q),ft.length>0&&Hs(ft,k,q),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function oc(E,k,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new vn(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?jn:Zn,minFilter:Ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const it=f.state.transmissionRenderTarget[X.id],ft=X.viewport||L;it.setSize(ft.z,ft.w);const Mt=y.getRenderTarget();y.setRenderTarget(it),y.getClearColor(U),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),Yt&&Rt.render(q);const wt=y.toneMapping;y.toneMapping=hi;const It=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),et===!0&&nt.setGlobalState(y.clippingPlanes,X),Hs(E,q,X),R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let bt=0,Zt=k.length;bt<Zt;bt++){const oe=k[bt],ce=oe.object,Ve=oe.geometry,Qt=oe.material,Et=oe.group;if(Qt.side===Be&&ce.layers.test(X.layers)){const Ln=Qt.side;Qt.side=Fe,Qt.needsUpdate=!0,ac(ce,q,X,Ve,Qt,Et),Qt.side=Ln,Qt.needsUpdate=!0,Bt=!0}}Bt===!0&&(R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it))}y.setRenderTarget(Mt),y.setClearColor(U,F),It!==void 0&&(X.viewport=It),y.toneMapping=wt}function Hs(E,k,q){const X=k.isScene===!0?k.overrideMaterial:null;for(let O=0,it=E.length;O<it;O++){const ft=E[O],Mt=ft.object,wt=ft.geometry,It=X===null?ft.material:X,Bt=ft.group;Mt.layers.test(q.layers)&&ac(Mt,k,q,wt,It,Bt)}}function ac(E,k,q,X,O,it){E.onBeforeRender(y,k,q,X,O,it),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(y,k,q,X,E,it),O.transparent===!0&&O.side===Be&&O.forceSinglePass===!1?(O.side=Fe,O.needsUpdate=!0,y.renderBufferDirect(q,k,X,O,E,it),O.side=Kn,O.needsUpdate=!0,y.renderBufferDirect(q,k,X,O,E,it),O.side=Be):y.renderBufferDirect(q,k,X,O,E,it),E.onAfterRender(y,k,q,X,O,it)}function Vs(E,k,q){k.isScene!==!0&&(k=fe);const X=At.get(E),O=f.state.lights,it=f.state.shadowsArray,ft=O.state.version,Mt=St.getParameters(E,O.state,it,k,q),wt=St.getProgramCacheKey(Mt);let It=X.programs;X.environment=E.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(E.isMeshStandardMaterial?W:b).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,It===void 0&&(E.addEventListener("dispose",Ut),It=new Map,X.programs=It);let Bt=It.get(wt);if(Bt!==void 0){if(X.currentProgram===Bt&&X.lightsStateVersion===ft)return lc(E,Mt),Bt}else Mt.uniforms=St.getUniforms(E),E.onBeforeCompile(Mt,y),Bt=St.acquireProgram(Mt,wt),It.set(wt,Bt),X.uniforms=Mt.uniforms;const bt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(bt.clippingPlanes=nt.uniform),lc(E,Mt),X.needsLights=su(E),X.lightsStateVersion=ft,X.needsLights&&(bt.ambientLightColor.value=O.state.ambient,bt.lightProbe.value=O.state.probe,bt.directionalLights.value=O.state.directional,bt.directionalLightShadows.value=O.state.directionalShadow,bt.spotLights.value=O.state.spot,bt.spotLightShadows.value=O.state.spotShadow,bt.rectAreaLights.value=O.state.rectArea,bt.ltc_1.value=O.state.rectAreaLTC1,bt.ltc_2.value=O.state.rectAreaLTC2,bt.pointLights.value=O.state.point,bt.pointLightShadows.value=O.state.pointShadow,bt.hemisphereLights.value=O.state.hemi,bt.directionalShadowMap.value=O.state.directionalShadowMap,bt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,bt.spotShadowMap.value=O.state.spotShadowMap,bt.spotLightMatrix.value=O.state.spotLightMatrix,bt.spotLightMap.value=O.state.spotLightMap,bt.pointShadowMap.value=O.state.pointShadowMap,bt.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Bt,X.uniformsList=null,Bt}function cc(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Rr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function lc(E,k){const q=At.get(E);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function nu(E,k,q,X,O){k.isScene!==!0&&(k=fe),R.resetTextureUnits();const it=k.fog,ft=X.isMeshStandardMaterial?k.environment:null,Mt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:fs,wt=(X.isMeshStandardMaterial?W:b).get(X.envMap||ft),It=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Bt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),bt=!!q.morphAttributes.position,Zt=!!q.morphAttributes.normal,oe=!!q.morphAttributes.color;let ce=hi;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ce=y.toneMapping);const Ve=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Qt=Ve!==void 0?Ve.length:0,Et=At.get(X),Ln=f.state.lights;if(et===!0&&(_t===!0||E!==w)){const Qe=E===w&&X.id===S;nt.setState(X,E,Qe)}let te=!1;X.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Ln.state.version||Et.outputColorSpace!==Mt||O.isBatchedMesh&&Et.batching===!1||!O.isBatchedMesh&&Et.batching===!0||O.isBatchedMesh&&Et.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Et.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Et.instancing===!1||!O.isInstancedMesh&&Et.instancing===!0||O.isSkinnedMesh&&Et.skinning===!1||!O.isSkinnedMesh&&Et.skinning===!0||O.isInstancedMesh&&Et.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Et.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Et.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Et.instancingMorph===!1&&O.morphTexture!==null||Et.envMap!==wt||X.fog===!0&&Et.fog!==it||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==nt.numPlanes||Et.numIntersection!==nt.numIntersection)||Et.vertexAlphas!==It||Et.vertexTangents!==Bt||Et.morphTargets!==bt||Et.morphNormals!==Zt||Et.morphColors!==oe||Et.toneMapping!==ce||Et.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Et.__version=X.version);let ln=Et.currentProgram;te===!0&&(ln=Vs(X,k,O));let Ii=!1,Ye=!1,xs=!1;const le=ln.getUniforms(),yn=Et.uniforms;if(Ct.useProgram(ln.program)&&(Ii=!0,Ye=!0,xs=!0),X.id!==S&&(S=X.id,Ye=!0),Ii||w!==E){Ct.buffers.depth.getReversed()?(ct.copy(E.projectionMatrix),$u(ct),Ku(ct),le.setValue(G,"projectionMatrix",ct)):le.setValue(G,"projectionMatrix",E.projectionMatrix),le.setValue(G,"viewMatrix",E.matrixWorldInverse);const Jn=le.map.cameraPosition;Jn!==void 0&&Jn.setValue(G,Dt.setFromMatrixPosition(E.matrixWorld)),qt.logarithmicDepthBuffer&&le.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&le.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Ye=!0,xs=!0)}if(O.isSkinnedMesh){le.setOptional(G,O,"bindMatrix"),le.setOptional(G,O,"bindMatrixInverse");const Qe=O.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),le.setValue(G,"boneTexture",Qe.boneTexture,R))}O.isBatchedMesh&&(le.setOptional(G,O,"batchingTexture"),le.setValue(G,"batchingTexture",O._matricesTexture,R),le.setOptional(G,O,"batchingIdTexture"),le.setValue(G,"batchingIdTexture",O._indirectTexture,R),le.setOptional(G,O,"batchingColorTexture"),O._colorsTexture!==null&&le.setValue(G,"batchingColorTexture",O._colorsTexture,R));const vs=q.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&Lt.update(O,q,ln),(Ye||Et.receiveShadow!==O.receiveShadow)&&(Et.receiveShadow=O.receiveShadow,le.setValue(G,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(yn.envMap.value=wt,yn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(yn.envMapIntensity.value=k.environmentIntensity),Ye&&(le.setValue(G,"toneMappingExposure",y.toneMappingExposure),Et.needsLights&&iu(yn,xs),it&&X.fog===!0&&ht.refreshFogUniforms(yn,it),ht.refreshMaterialUniforms(yn,X,V,j,f.state.transmissionRenderTarget[E.id]),Rr.upload(G,cc(Et),yn,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Rr.upload(G,cc(Et),yn,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&le.setValue(G,"center",O.center),le.setValue(G,"modelViewMatrix",O.modelViewMatrix),le.setValue(G,"normalMatrix",O.normalMatrix),le.setValue(G,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Qe=X.uniformsGroups;for(let Jn=0,Qn=Qe.length;Jn<Qn;Jn++){const hc=Qe[Jn];B.update(hc,ln),B.bind(hc,ln)}}return ln}function iu(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function su(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,k,q){At.get(E.texture).__webglTexture=k,At.get(E.depthTexture).__webglTexture=q;const X=At.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=q===void 0,X.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const q=At.get(E);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,q=0){D=E,A=k,C=q;let X=!0,O=null,it=!1,ft=!1;if(E){const wt=At.get(E);if(wt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(G.FRAMEBUFFER,null),X=!1;else if(wt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(wt.__hasExternalTextures)R.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const bt=E.depthTexture;if(wt.__boundDepthTexture!==bt){if(bt!==null&&At.has(bt)&&(E.width!==bt.image.width||E.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const It=E.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ft=!0);const Bt=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[k])?O=Bt[k][q]:O=Bt[k],it=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?O=At.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?O=Bt[q]:O=Bt,L.copy(E.viewport),H.copy(E.scissor),I=E.scissorTest}else L.copy(ut).multiplyScalar(V).floor(),H.copy(st).multiplyScalar(V).floor(),I=Vt;if(Ct.bindFramebuffer(G.FRAMEBUFFER,O)&&X&&Ct.drawBuffers(E,O),Ct.viewport(L),Ct.scissor(H),Ct.setScissorTest(I),it){const wt=At.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,wt.__webglTexture,q)}else if(ft){const wt=At.get(E.texture),It=k||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,wt.__webglTexture,q||0,It)}S=-1},this.readRenderTargetPixels=function(E,k,q,X,O,it,ft){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){Ct.bindFramebuffer(G.FRAMEBUFFER,Mt);try{const wt=E.texture,It=wt.format,Bt=wt.type;if(!qt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-X&&q>=0&&q<=E.height-O&&G.readPixels(k,q,X,O,kt.convert(It),kt.convert(Bt),it)}finally{const wt=D!==null?At.get(D).__webglFramebuffer:null;Ct.bindFramebuffer(G.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(E,k,q,X,O,it,ft){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const wt=E.texture,It=wt.format,Bt=wt.type;if(!qt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-X&&q>=0&&q<=E.height-O){Ct.bindFramebuffer(G.FRAMEBUFFER,Mt);const bt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,bt),G.bufferData(G.PIXEL_PACK_BUFFER,it.byteLength,G.STREAM_READ),G.readPixels(k,q,X,O,kt.convert(It),kt.convert(Bt),0);const Zt=D!==null?At.get(D).__webglFramebuffer:null;Ct.bindFramebuffer(G.FRAMEBUFFER,Zt);const oe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ju(G,oe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,bt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,it),G.deleteBuffer(bt),G.deleteSync(oe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,q=0){E.isTexture!==!0&&(Ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-q),O=Math.floor(E.image.width*X),it=Math.floor(E.image.height*X),ft=k!==null?k.x:0,Mt=k!==null?k.y:0;R.setTexture2D(E,0),G.copyTexSubImage2D(G.TEXTURE_2D,q,0,0,ft,Mt,O,it),Ct.unbindTexture()},this.copyTextureToTexture=function(E,k,q=null,X=null,O=0){E.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],k=arguments[2],O=arguments[3]||0,q=null);let it,ft,Mt,wt,It,Bt,bt,Zt,oe;const ce=E.isCompressedTexture?E.mipmaps[O]:E.image;q!==null?(it=q.max.x-q.min.x,ft=q.max.y-q.min.y,Mt=q.isBox3?q.max.z-q.min.z:1,wt=q.min.x,It=q.min.y,Bt=q.isBox3?q.min.z:0):(it=ce.width,ft=ce.height,Mt=ce.depth||1,wt=0,It=0,Bt=0),X!==null?(bt=X.x,Zt=X.y,oe=X.z):(bt=0,Zt=0,oe=0);const Ve=kt.convert(k.format),Qt=kt.convert(k.type);let Et;k.isData3DTexture?(R.setTexture3D(k,0),Et=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(R.setTexture2DArray(k,0),Et=G.TEXTURE_2D_ARRAY):(R.setTexture2D(k,0),Et=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);const Ln=G.getParameter(G.UNPACK_ROW_LENGTH),te=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ln=G.getParameter(G.UNPACK_SKIP_PIXELS),Ii=G.getParameter(G.UNPACK_SKIP_ROWS),Ye=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ce.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ce.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,wt),G.pixelStorei(G.UNPACK_SKIP_ROWS,It),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Bt);const xs=E.isDataArrayTexture||E.isData3DTexture,le=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const yn=At.get(E),vs=At.get(k),Qe=At.get(yn.__renderTarget),Jn=At.get(vs.__renderTarget);Ct.bindFramebuffer(G.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Qn=0;Qn<Mt;Qn++)xs&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,At.get(E).__webglTexture,O,Bt+Qn),E.isDepthTexture?(le&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,At.get(k).__webglTexture,O,oe+Qn),G.blitFramebuffer(wt,It,it,ft,bt,Zt,it,ft,G.DEPTH_BUFFER_BIT,G.NEAREST)):le?G.copyTexSubImage3D(Et,O,bt,Zt,oe+Qn,wt,It,it,ft):G.copyTexSubImage2D(Et,O,bt,Zt,oe+Qn,wt,It,it,ft);Ct.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else le?E.isDataTexture||E.isData3DTexture?G.texSubImage3D(Et,O,bt,Zt,oe,it,ft,Mt,Ve,Qt,ce.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(Et,O,bt,Zt,oe,it,ft,Mt,Ve,ce.data):G.texSubImage3D(Et,O,bt,Zt,oe,it,ft,Mt,Ve,Qt,ce):E.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,O,bt,Zt,it,ft,Ve,Qt,ce.data):E.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,O,bt,Zt,ce.width,ce.height,Ve,ce.data):G.texSubImage2D(G.TEXTURE_2D,O,bt,Zt,it,ft,Ve,Qt,ce);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ln),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,te),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ln),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ii),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ye),O===0&&k.generateMipmaps&&G.generateMipmap(Et),Ct.unbindTexture()},this.copyTextureToTexture3D=function(E,k,q=null,X=null,O=0){return E.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,X=arguments[1]||null,E=arguments[2],k=arguments[3],O=arguments[4]||0),Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,q,X,O)},this.initRenderTarget=function(E){At.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Ct.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,Ct.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class qa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new qa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class o0 extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class a0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ea,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Oe=new z;class zr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new zr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gr extends Pi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const bs=new z,ji=new z,$i=new z,Ki=new Tt,Ss=new Tt,Ch=new ue,ur=new z,Es=new z,dr=new z,al=new Tt,Ro=new Tt,cl=new Tt;class Aa extends ve{constructor(t=new Gr){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new a0(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new zr(n,3,0,!1)),Yi.setAttribute("uv",new zr(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new Tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Ch.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-$i.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;fr(ur.set(-.5,-.5,0),$i,o,ji,i,s),fr(Es.set(.5,-.5,0),$i,o,ji,i,s),fr(dr.set(.5,.5,0),$i,o,ji,i,s),al.set(0,0),Ro.set(1,0),cl.set(1,1);let a=t.ray.intersectTriangle(ur,Es,dr,!1,bs);if(a===null&&(fr(Es.set(-.5,.5,0),$i,o,ji,i,s),Ro.set(0,1),a=t.ray.intersectTriangle(ur,dr,Es,!1,bs),a===null))return;const c=t.ray.origin.distanceTo(bs);c<t.near||c>t.far||e.push({distance:c,point:bs.clone(),uv:on.getInterpolation(bs,ur,Es,dr,al,Ro,cl,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function fr(r,t,e,n,i,s){Ki.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ss.x=s*Ki.x-i*Ki.y,Ss.y=i*Ki.x+s*Ki.y):Ss.copy(Ki),r.copy(t),r.x+=Ss.x,r.y+=Ss.y,r.applyMatrix4(Ch)}class Xa extends Pi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ll=new ue,Ca=new ph,pr=new qr,mr=new z;class Rh extends ve{constructor(t=new Le,e=new Xa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=s,t.ray.intersectsSphere(pr)===!1)return;ll.copy(i).invert(),Ca.copy(t.ray).applyMatrix4(ll);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=u,x=p;g<x;g++){const m=l.getX(g);mr.fromBufferAttribute(d,m),hl(mr,m,c,i,t,e,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,x=p;g<x;g++)mr.fromBufferAttribute(d,g),hl(mr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hl(r,t,e,n,i,s,o){const a=Ca.distanceSqToPoint(r);if(a<e){const c=new z;Ca.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Pr extends He{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ns extends Le{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new z,h=new Tt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ue extends Le{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],p=[];let g=0;const x=[],m=n/2;let f=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(p,2));function v(){const y=new z,P=new z;let A=0;const C=(e-t)/n;for(let D=0;D<=s;D++){const S=[],w=D/s,L=w*(e-t)+t;for(let H=0;H<=i;H++){const I=H/i,U=I*c+a,F=Math.sin(U),N=Math.cos(U);P.x=L*F,P.y=-w*n+m,P.z=L*N,d.push(P.x,P.y,P.z),y.set(F,C,N).normalize(),u.push(y.x,y.y,y.z),p.push(I,1-w),S.push(g++)}x.push(S)}for(let D=0;D<i;D++)for(let S=0;S<s;S++){const w=x[S][D],L=x[S+1][D],H=x[S+1][D+1],I=x[S][D+1];(t>0||S!==0)&&(h.push(w,L,I),A+=3),(e>0||S!==s-1)&&(h.push(L,H,I),A+=3)}l.addGroup(f,A,0),f+=A}function M(y){const P=g,A=new Tt,C=new z;let D=0;const S=y===!0?t:e,w=y===!0?1:-1;for(let H=1;H<=i;H++)d.push(0,m*w,0),u.push(0,w,0),p.push(.5,.5),g++;const L=g;for(let H=0;H<=i;H++){const U=H/i*c+a,F=Math.cos(U),N=Math.sin(U);C.x=S*N,C.y=m*w,C.z=S*F,d.push(C.x,C.y,C.z),u.push(0,w,0),A.x=F*.5+.5,A.y=N*.5*w+.5,p.push(A.x,A.y),g++}for(let H=0;H<i;H++){const I=P+H,U=L+H;y===!0?h.push(U,U+1,I):h.push(U+1,U,I),D+=3}l.addGroup(f,D,y===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ya extends Ue{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ya(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Us extends Le{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let d=t;const u=(e-t)/i,p=new z,g=new Tt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const f=s+m/n*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<i;x++){const m=x*(n+1);for(let f=0;f<n;f++){const v=f+m,M=v,y=v+n+1,P=v+n+2,A=v+1;a.push(M,y,A),a.push(y,P,A)}}this.setIndex(a),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class sn extends Le{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new z,u=new z,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const v=[],M=f/n;let y=0;f===0&&o===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){const A=P/e;d.x=-t*Math.cos(i+A*s)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(i+A*s)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(A+y,1-M),v.push(l++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){const M=h[f][v+1],y=h[f][v],P=h[f+1][v],A=h[f+1][v+1];(f!==0||o>0)&&p.push(M,y,A),(f!==n-1||c<Math.PI)&&p.push(y,P,A)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ja extends Le{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new z,d=new z,u=new z;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const x=g/i*s,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const x=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,v=(i+1)*p+g;o.push(x,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class se extends Pi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yr extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class c0 extends Yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Po=new ue,ul=new z,dl=new z;class Ph{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ul.setFromMatrixPosition(t.matrixWorld),e.position.copy(ul),dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dl),e.updateMatrixWorld(),Po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class l0 extends Ph{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Fr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class h0 extends Yr{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new l0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class u0 extends Ph{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fl extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new u0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class d0 extends Yr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class f0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);const Lh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class zs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const p0=new Va(-1,1,1,-1,0,1);class m0 extends Le{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}}const g0=new m0;class Ih{constructor(t){this._mesh=new pt(g0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,p0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class x0 extends zs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Or.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ih(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ml extends zs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class v0 extends zs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class y0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Tt);this._width=n.width,this._height=n.height,e=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new x0(Lh),this.copyPass.material.blending=Yn,this.clock=new f0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ml!==void 0&&(o instanceof ml?n=!0:o instanceof v0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _0 extends zs{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Nt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const M0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ds extends zs{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Tt(t.x,t.y):new Tt(256,256),this.clearColor=new Nt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new vn(s,o,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new vn(s,o,{type:jn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new vn(s,o,{type:jn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=M0;this.highPassUniforms=Or.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Tt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Lh;this.copyUniforms=Or.clone(h.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ur,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Nt,this.oldClearAlpha=1,this.basic=new me,this.fsQuad=new Ih(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Tt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=ds.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ds.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Tt(.5,.5)},direction:{value:new Tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ds.BlurDirectionX=new Tt(1,0);ds.BlurDirectionY=new Tt(0,1);class w0{constructor(){T(this,"scene");T(this,"camera");T(this,"renderer");T(this,"composer");T(this,"isMobile");var e;this.isMobile="ontouchstart"in window||navigator.maxTouchPoints>0,this.scene=new o0,this.scene.background=new Nt(8900331),this.scene.fog=new qa(8900331,150,250),this.camera=new Ke(70,window.innerWidth/window.innerHeight,.1,500),this.camera.position.set(0,40,50),this.camera.lookAt(0,0,0),this.renderer=new r0({antialias:!this.isMobile,powerPreference:this.isMobile?"default":"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.isMobile?1:2)),this.renderer.shadowMap.enabled=!this.isMobile,this.renderer.shadowMap.type=$l,this.renderer.toneMapping=Zl,this.renderer.toneMappingExposure=1.2,(e=document.getElementById("app"))==null||e.appendChild(this.renderer.domElement),this.composer=new y0(this.renderer);const t=new _0(this.scene,this.camera);if(this.composer.addPass(t),!this.isMobile){const n=new ds(new Tt(window.innerWidth,window.innerHeight),.3,.5,.1);this.composer.addPass(n)}}render(){this.composer.render()}onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e)}dispose(){this.renderer.dispose(),this.composer.dispose()}}class gn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new _);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new _);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new gn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],p=n[7],g=n[8],x=i[0],m=i[1],f=i[2],v=i[3],M=i[4],y=i[5],P=i[6],A=i[7],C=i[8];return s[0]=o*x+a*v+c*P,s[1]=o*m+a*M+c*A,s[2]=o*f+a*y+c*C,s[3]=l*x+h*v+d*P,s[4]=l*m+h*M+d*A,s[5]=l*f+h*y+d*C,s[6]=u*x+p*v+g*P,s[7]=u*m+p*M+g*A,s[8]=u*f+p*y+g*C,e}scale(t,e){e===void 0&&(e=new gn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new _);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3]=t.x,s[7]=t.y,s[11]=t.z;let c=3;const l=c;let h;const d=4;let u;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const p=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*p;while(--h)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new gn);const e=3,n=6,i=b0;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const c=a;let l;const h=n;let d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,p=n*c,g=i*c,x=s*o,m=s*a,f=s*c,v=this.elements;return v[0]=1-(u+g),v[1]=h-f,v[2]=d+m,v[3]=h+f,v[4]=1-(l+g),v[5]=p-x,v[6]=d-m,v[7]=p+x,v[8]=1-(l+u),this}transpose(t){t===void 0&&(t=new gn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const b0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class _{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new _);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new _(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new _(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new gn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new _);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new _);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new _),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new _),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new _),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=S0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=E0;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(gl),gl.almostEquals(t,e)}clone(){return new _(this.x,this.y,this.z)}}_.ZERO=new _(0,0,0);_.UNIT_X=new _(1,0,0);_.UNIT_Y=new _(0,1,0);_.UNIT_Z=new _(0,0,1);const S0=new _,E0=new _,gl=new _;class Ze{constructor(t){t===void 0&&(t={}),this.lowerBound=new _,this.upperBound=new _,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,xl),l=xl),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Ze().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){const n=vl,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=vl,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(g<0||p>g)}}const xl=new _,vl=[new _,new _,new _,new _,new _,new _,new _,new _];class yl{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Dh{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Me{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new _),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=T0,i=A0;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Me);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-s*c,e.y=i*h+o*c+s*a-n*l,e.z=s*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new Me);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Me),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new _);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,d=l*i+c*n-o*s,u=l*s+o*i-a*n,p=-o*n-a*i-c*s;return e.x=h*l+p*-o+d*-c-u*-a,e.y=d*l+p*-a+u*-o-h*-c,e.z=u*l+p*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,p=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*p),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new Me(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Me);const i=this.x,s=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,h=t.z,d=t.w,u,p,g,x,m;return p=i*c+s*l+o*h+a*d,p<0&&(p=-p,c=-c,l=-l,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),x=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(x=1-e,m=e),n.x=x*i+m*c,n.y=x*s+m*l,n.z=x*o+m*h,n.w=x*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new Me);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*l),i.y+=u*(o*d+a*c-s*h),i.z+=u*(a*d+s*l-o*c),i.w+=u*(-s*c-o*l-a*h),i}}const T0=new _,A0=new _,C0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class gt{constructor(t){t===void 0&&(t={}),this.id=gt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}gt.idCounter=0;gt.types=C0;class Jt{constructor(t){t===void 0&&(t={}),this.position=new _,this.quaternion=new Me,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Jt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Jt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new _),n.vsub(t,i),e.conjugate(_l),_l.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new _),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new _),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new _),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const _l=new Me;class rs extends gt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:gt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new _;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new _;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];rs.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new _,o=new _;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){const h=new _;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const x=h.dot(o);x>u&&(u=x,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const x=n.vertices[n.faces[d][g]],m=new _;m.copy(x),s.vmult(m,m),i.vadd(m,m),p.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,p,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){const l=new _,h=new _,d=new _,u=new _,p=new _,g=new _;let x=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){n.vmult(m.uniqueAxes[f],l);const v=m.testSepAxis(l,t,e,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(l))}else{const f=a?a.length:m.faces.length;for(let v=0;v<f;v++){const M=a?a[v]:v;l.copy(m.faceNormals[M]),n.vmult(l,l);const y=m.testSepAxis(l,t,e,n,i,s);if(y===!1)return!1;y<x&&(x=y,o.copy(l))}}if(t.uniqueAxes)for(let f=0;f!==t.uniqueAxes.length;f++){s.vmult(t.uniqueAxes[f],h);const v=m.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(h))}else{const f=c?c.length:t.faces.length;for(let v=0;v<f;v++){const M=c?c[v]:v;h.copy(t.faceNormals[M]),s.vmult(h,h);const y=m.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<x&&(x=y,o.copy(h))}}for(let f=0;f!==m.uniqueEdges.length;f++){n.vmult(m.uniqueEdges[f],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],p),u.cross(p,g),!g.almostZero()){g.normalize();const M=m.testSepAxis(g,t,e,n,i,s);if(M===!1)return!1;M<x&&(x=M,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;rs.project(a,t,n,i,Lo),rs.project(e,t,s,o,Io);const c=Lo[0],l=Lo[1],h=Io[0],d=Io[1];if(c<d||h<l)return!1;const u=c-d,p=h-l;return u<p?u:p}calculateLocalInertia(t,e){const n=new _,i=new _;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const c=new _,l=new _,h=new _,d=new _,u=new _,p=new _,g=new _,x=new _,m=this,f=[],v=i,M=f;let y=-1,P=Number.MAX_VALUE;for(let w=0;w<m.faces.length;w++){c.copy(m.faceNormals[w]),n.vmult(c,c);const L=c.dot(t);L<P&&(P=L,y=w)}if(y<0)return;const A=m.faces[y];A.connectedFaces=[];for(let w=0;w<m.faces.length;w++)for(let L=0;L<m.faces[w].length;L++)A.indexOf(m.faces[w][L])!==-1&&w!==y&&A.connectedFaces.indexOf(w)===-1&&A.connectedFaces.push(w);const C=A.length;for(let w=0;w<C;w++){const L=m.vertices[A[w]],H=m.vertices[A[(w+1)%C]];L.vsub(H,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(L),n.vmult(p,p),e.vadd(p,p);const I=A.connectedFaces[w];g.copy(this.faceNormals[I]);const U=this.getPlaneConstantOfFace(I);x.copy(g),n.vmult(x,x);const F=U-x.dot(e);for(this.clipFaceAgainstPlane(v,M,x,F);v.length;)v.shift();for(;M.length;)v.push(M.shift())}g.copy(this.faceNormals[y]);const D=this.getPlaneConstantOfFace(y);x.copy(g),n.vmult(x,x);const S=D-x.dot(e);for(let w=0;w<v.length;w++){let L=x.dot(v[w])+S;if(L<=s&&(console.log(`clamped: depth=${L} to minDist=${s}`),L=s),L<=o){const H=v[w];if(L<=1e-6){const I={point:H,normal:x,depth:L};a.push(I)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){const d=new _;d.copy(l),e.push(d)}else{const d=new _;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){const d=new _;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new _);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new _);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,c,l,h,d,u=new _;for(let p=0;p<s.length;p++){u.copy(s[p]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new _);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new _;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new _;t.vsub(c,l);const h=a.dot(l),d=new _;s.vsub(c,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=R0;let c=0,l=0;const h=P0,d=t.vertices;h.setZero(),Jt.vectorToLocalFrame(n,i,e,a),Jt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);l=c=d[0].dot(a);for(let p=1;p<o;p++){const g=d[p].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=u,c-=u,l>c){const p=l;l=c,c=p}s[0]=c,s[1]=l}}const Lo=[],Io=[];new _;const R0=new _,P0=new _;class li extends gt{constructor(t){super({type:gt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=_,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new rs({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new _),li.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)oi.set(s[o][0],s[o][1],s[o][2]),e.vmult(oi,oi),t.vadd(oi,oi),n(oi.x,oi.y,oi.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;_n[0].set(s.x,s.y,s.z),_n[1].set(-s.x,s.y,s.z),_n[2].set(-s.x,-s.y,s.z),_n[3].set(-s.x,-s.y,-s.z),_n[4].set(s.x,-s.y,-s.z),_n[5].set(s.x,s.y,-s.z),_n[6].set(-s.x,s.y,-s.z),_n[7].set(s.x,-s.y,s.z);const o=_n[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=_n[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const oi=new _,_n=[new _,new _,new _,new _,new _,new _,new _,new _],$a={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ka={AWAKE:0,SLEEPY:1,SLEEPING:2};class ot extends Dh{constructor(t){t===void 0&&(t={}),super(),this.id=ot.idCounter++,this.index=-1,this.world=null,this.vlambda=new _,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new _,this.previousPosition=new _,this.interpolatedPosition=new _,this.initPosition=new _,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new _,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new _,this.force=new _;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ot.STATIC:ot.DYNAMIC,typeof t.type==typeof ot.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ot.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new _,this.quaternion=new Me,this.initQuaternion=new Me,this.previousQuaternion=new Me,this.interpolatedQuaternion=new Me,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new _,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new _,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new _,this.invInertia=new _,this.invInertiaWorld=new gn,this.invMassSolve=0,this.invInertiaSolve=new _,this.invInertiaWorldSolve=new gn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new _(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new _(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ze,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new _,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ot.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ot.SLEEPING&&this.dispatchEvent(ot.wakeupEvent)}sleep(){this.sleepState=ot.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ot.AWAKE&&n<i?(this.sleepState=ot.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ot.sleepyEvent)):e===ot.SLEEPY&&n>i?this.wakeUp():e===ot.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ot.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ot.SLEEPING||this.type===ot.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new _),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new _),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new _,s=new Me;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=L0,o=I0,a=this.quaternion,c=this.aabb,l=D0;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=N0,i=U0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new _),this.type!==ot.DYNAMIC)return;this.sleepState===ot.SLEEPING&&this.wakeUp();const n=B0;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new _),this.type!==ot.DYNAMIC)return;const n=F0,i=k0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ot.DYNAMIC&&(this.sleepState===ot.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new _),this.type!==ot.DYNAMIC)return;this.sleepState===ot.SLEEPING&&this.wakeUp();const n=e,i=O0;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=z0;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new _),this.type!==ot.DYNAMIC)return;const n=G0,i=H0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=V0;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),li.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new _;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ot.DYNAMIC||this.type===ot.KINEMATIC)||this.sleepState===ot.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*t;i.x+=a.x*p*u.x,i.y+=a.y*p*u.y,i.z+=a.z*p*u.z;const g=d.elements,x=this.angularFactor,m=c.x*x.x,f=c.y*x.y,v=c.z*x.z;s.x+=t*(g[0]*m+g[1]*f+g[2]*v),s.y+=t*(g[3]*m+g[4]*f+g[5]*v),s.z+=t*(g[6]*m+g[7]*f+g[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ot.idCounter=0;ot.COLLIDE_EVENT_NAME="collide";ot.DYNAMIC=$a.DYNAMIC;ot.STATIC=$a.STATIC;ot.KINEMATIC=$a.KINEMATIC;ot.AWAKE=Ka.AWAKE;ot.SLEEPY=Ka.SLEEPY;ot.SLEEPING=Ka.SLEEPING;ot.wakeupEvent={type:"wakeup"};ot.sleepyEvent={type:"sleepy"};ot.sleepEvent={type:"sleep"};const L0=new _,I0=new Me,D0=new Ze,N0=new gn,U0=new gn;new gn;const B0=new _,F0=new _,k0=new _,O0=new _,z0=new _,G0=new _,H0=new _,V0=new _;class Nh{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&ot.STATIC)!==0||t.sleepState===ot.SLEEPING)&&((e.type&ot.STATIC)!==0||e.sleepState===ot.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=W0;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=q0,i=X0,s=Y0,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new _;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const W0=new _;new _;new Me;new _;const q0={keys:[]},X0=[],Y0=[];new _;new _;new _;class j0 extends Nh{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Hr{constructor(){this.rayFromWorld=new _,this.rayToWorld=new _,this.hitNormalWorld=new _,this.hitPointWorld=new _,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Uh,Bh,Fh,kh,Oh,zh,Gh;const Za={CLOSEST:1,ANY:2,ALL:4};Uh=gt.types.SPHERE;Bh=gt.types.PLANE;Fh=gt.types.BOX;kh=gt.types.CYLINDER;Oh=gt.types.CONVEXPOLYHEDRON;zh=gt.types.HEIGHTFIELD;Gh=gt.types.TRIMESH;class _e{get[Uh](){return this._intersectSphere}get[Bh](){return this._intersectPlane}get[Fh](){return this._intersectBox}get[kh](){return this._intersectConvex}get[Oh](){return this._intersectConvex}get[zh](){return this._intersectHeightfield}get[Gh](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new _),e===void 0&&(e=new _),this.from=t.clone(),this.to=e.clone(),this.direction=new _,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=_e.ANY,this.result=new Hr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||_e.ANY,this.result=e.result||new Hr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ml),Do.length=0,t.broadphase.aabbQuery(t,Ml,Do),this.intersectBodies(Do),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=$0,s=K0;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(hx(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new _(0,0,1);e.vmult(l,l);const h=new _;o.vsub(n,h);const d=h.dot(l);a.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;const p=l.dot(c);if(Math.abs(p)<this.precision)return;const g=new _,x=new _,m=new _;o.vsub(n,g);const f=-l.dot(g)/p;c.scale(f,x),o.vadd(x,m),this.reportIntersection(l,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=Z0;o.from.copy(this.from),o.to.copy(this.to),Jt.pointToLocalFrame(n,e,o.from,o.from),Jt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=J0;let c,l,h,d;c=l=0,h=d=t.data.length-1;const u=new Ze;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let p=c;p<h;p++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(p,g,!1),Jt.pointToWorldFrame(n,e,t.pillarOffset,gr),this._intersectConvex(t.pillarConvex,e,gr,i,s,wl),this.result.shouldStop)return;t.getConvexTrianglePillar(p,g,!0),Jt.pointToWorldFrame(n,e,t.pillarOffset,gr),this._intersectConvex(t.pillarConvex,e,gr,i,s,wl)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,p=Q0,g=tx;if(!(u<0))if(u===0)o.lerp(a,u,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const x=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(x>=0&&x<=1&&(o.lerp(a,x,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=ex,c=bl,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,p=this.direction,g=this.from,x=this.to,m=g.distanceTo(x),f=l?l.length:h.length,v=this.result;for(let M=0;!v.shouldStop&&M<f;M++){const y=l?l[M]:M,P=h[y],A=u[y],C=e,D=n;c.copy(d[P[0]]),C.vmult(c,c),c.vadd(D,c),c.vsub(g,c),C.vmult(A,a);const S=p.dot(a);if(Math.abs(S)<this.precision)continue;const w=a.dot(c)/S;if(!(w<0)){p.scale(w,We),We.vadd(g,We),fn.copy(d[P[0]]),C.vmult(fn,fn),D.vadd(fn,fn);for(let L=1;!v.shouldStop&&L<P.length-1;L++){Mn.copy(d[P[L]]),wn.copy(d[P[L+1]]),C.vmult(Mn,Mn),C.vmult(wn,wn),D.vadd(Mn,Mn),D.vadd(wn,wn);const H=We.distanceTo(g);!(_e.pointInTriangle(We,fn,Mn,wn)||_e.pointInTriangle(We,Mn,fn,wn))||H>m||this.reportIntersection(a,We,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=nx,c=cx,l=lx,h=bl,d=ix,u=sx,p=rx,g=ax,x=ox,m=t.indices;t.vertices;const f=this.from,v=this.to,M=this.direction;l.position.copy(n),l.quaternion.copy(e),Jt.vectorToLocalFrame(n,e,M,d),Jt.pointToLocalFrame(n,e,f,u),Jt.pointToLocalFrame(n,e,v,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,p.vsub(u,d),d.normalize();const y=u.distanceSquared(p);t.tree.rayQuery(this,l,c);for(let P=0,A=c.length;!this.result.shouldStop&&P!==A;P++){const C=c[P];t.getNormal(C,a),t.getVertex(m[C*3],fn),fn.vsub(u,h);const D=d.dot(a),S=a.dot(h)/D;if(S<0)continue;d.scale(S,We),We.vadd(u,We),t.getVertex(m[C*3+1],Mn),t.getVertex(m[C*3+2],wn);const w=We.distanceSquared(u);!(_e.pointInTriangle(We,Mn,fn,wn)||_e.pointInTriangle(We,fn,Mn,wn))||w>y||(Jt.vectorToWorldFrame(e,a,x),Jt.pointToWorldFrame(n,e,We,g),this.reportIntersection(x,g,s,i,C))}c.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case _e.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case _e.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case _e.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Ti),n.vsub(e,Ts),t.vsub(e,No);const s=Ti.dot(Ti),o=Ti.dot(Ts),a=Ti.dot(No),c=Ts.dot(Ts),l=Ts.dot(No);let h,d;return(h=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&h+d<s*c-o*o}}_e.CLOSEST=Za.CLOSEST;_e.ANY=Za.ANY;_e.ALL=Za.ALL;const Ml=new Ze,Do=[],Ts=new _,No=new _,$0=new _,K0=new Me,We=new _,fn=new _,Mn=new _,wn=new _;new _;new Hr;const wl={faceList:[0]},gr=new _,Z0=new _e,J0=[],Q0=new _,tx=new _,ex=new _;new _;new _;const bl=new _,nx=new _,ix=new _,sx=new _,rx=new _,ox=new _,ax=new _;new Ze;const cx=[],lx=new Jt,Ti=new _,xr=new _;function hx(r,t,e){e.vsub(r,Ti);const n=Ti.dot(t);return t.scale(n,xr),xr.vadd(r,xr),e.distanceTo(xr)}class es extends Nh{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,c=i+o;return s-a<c}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const l=i[a];for(c=a+1;c<s;c++){const h=i[c];if(this.needBroadphaseCollision(l,h)){if(!es.checkBounds(l,h,o))break;this.intersectionTest(l,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?es.insertionSortX(t):e===1?es.insertionSortY(t):e===2&&es.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const a=this.axisList,c=a.length,l=1/c;for(let p=0;p!==c;p++){const g=a[p],x=g.position.x;t+=x,e+=x*x;const m=g.position.y;n+=m,i+=m*m;const f=g.position.z;s+=f,o+=f*f}const h=e-t*t*l,d=i-n*n*l,u=o-s*s*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<o.length;a++){const c=o[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&n.push(c)}return n}}class ux{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Sl{constructor(){this.spatial=new _,this.rotational=new _}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Gs{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Gs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Sl,this.jacobianElementB=new Sl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,El),a.scale(h,Tl),n.invInertiaWorldSolve.vmult(o,Al),i.invInertiaWorldSolve.vmult(c,Cl),t.multiplyVectors(El,Al)+e.multiplyVectors(Tl,Cl)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(t.rotational,vr),l+=vr.dot(t.rotational),c.vmult(e.rotational,vr),l+=vr.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=dx;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Gs.idCounter=0;const El=new _,Tl=new _,Al=new _,Cl=new _,vr=new _,dx=new _;class fx extends Gs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new _,this.rj=new _,this.ni=new _}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=px,l=mx,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=gx,x=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;o.cross(f,c),a.cross(f,l),f.negate(x.spatial),c.negate(x.rotational),m.spatial.copy(f),m.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=f.dot(g),M=this.restitution+1,y=M*u.dot(f)-M*h.dot(f)+p.dot(l)-d.dot(c),P=this.computeGiMf();return-v*e-y*n-t*P}getImpactVelocityAlongNormal(){const t=xx,e=vx,n=yx,i=_x,s=Mx;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const px=new _,mx=new _,gx=new _,xx=new _,vx=new _,yx=new _,_x=new _,Mx=new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;class Rl extends Gs{constructor(t,e,n){super(t,e,-n,n),this.ri=new _,this.rj=new _,this.t=new _}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=wx,o=bx,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const wx=new _,bx=new _;class jr{constructor(t,e,n){n=ux.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=jr.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}jr.idCounter=0;class Li{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Li.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Li.idCounter=0;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _e;new _;new _;new _;new _(1,0,0),new _(0,1,0),new _(0,0,1);new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;class Sx extends gt{constructor(t){if(super({type:gt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new _);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=t[c]-s,i[c]=t[c]+s}}}new _;new _;new _;new _;new _;new _;new _;new _;new _;class Ex extends rs{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new _(-e*u(0),-n*.5,e*d(0))),l.push(0),o.push(new _(-t*u(0),n*.5,t*d(0))),h.push(1);for(let g=0;g<s;g++){const x=2*Math.PI/s*(g+1),m=2*Math.PI/s*(g+.5);g<s-1?(o.push(new _(-e*u(x),-n*.5,e*d(x))),l.push(2*g+2),o.push(new _(-t*u(x),n*.5,t*d(x))),h.push(2*g+3),c.push([2*g,2*g+1,2*g+3,2*g+2])):c.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&a.push(new _(-u(m),0,d(m)))}c.push(l),a.push(new _(0,1,0));const p=[];for(let g=0;g<h.length;g++)p.push(h[h.length-g-1]);c.push(p),super({vertices:o,faces:c,axes:a}),this.type=gt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}class Tx extends gt{constructor(){super({type:gt.types.PLANE}),this.worldNormal=new _,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new _),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Fn.set(0,0,1),e.vmult(Fn,Fn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Fn.x===1?i.x=t.x:Fn.x===-1&&(n.x=t.x),Fn.y===1?i.y=t.y:Fn.y===-1&&(n.y=t.y),Fn.z===1?i.z=t.z:Fn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Fn=new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new Ze;new _;new Ze;new _;new _;new _;new _;new _;new _;new _;new Ze;new _;new Jt;new Ze;class Ax{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Cx extends Ax{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t;let d,u,p,g,x,m;if(a!==0)for(let y=0;y!==l;y++)c[y].updateSolveMassProperties();const f=Px,v=Lx,M=Rx;f.length=a,v.length=a,M.length=a;for(let y=0;y!==a;y++){const P=o[y];M[y]=0,v[y]=P.computeB(h),f[y]=1/P.computeC()}if(a!==0){for(let A=0;A!==l;A++){const C=c[A],D=C.vlambda,S=C.wlambda;D.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let A=0;A!==a;A++){const C=o[A];d=v[A],u=f[A],m=M[A],x=C.computeGWlambda(),p=u*(d-x-C.eps*m),m+p<C.minForce?p=C.minForce-m:m+p>C.maxForce&&(p=C.maxForce-m),M[A]+=p,g+=p>0?p:-p,C.addToWlambda(p)}if(g*g<s)break}for(let A=0;A!==l;A++){const C=c[A],D=C.velocity,S=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),D.vadd(C.vlambda,D),C.wlambda.vmul(C.angularFactor,C.wlambda),S.vadd(C.wlambda,S)}let y=o.length;const P=1/h;for(;y--;)o[y].multiplier=M[y]*P}return n}}const Rx=[],Px=[],Lx=[];class Ix{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Dx extends Ix{constructor(){super(...arguments),this.type=_}constructObject(){return new _}}const he={sphereSphere:gt.types.SPHERE,spherePlane:gt.types.SPHERE|gt.types.PLANE,boxBox:gt.types.BOX|gt.types.BOX,sphereBox:gt.types.SPHERE|gt.types.BOX,planeBox:gt.types.PLANE|gt.types.BOX,convexConvex:gt.types.CONVEXPOLYHEDRON,sphereConvex:gt.types.SPHERE|gt.types.CONVEXPOLYHEDRON,planeConvex:gt.types.PLANE|gt.types.CONVEXPOLYHEDRON,boxConvex:gt.types.BOX|gt.types.CONVEXPOLYHEDRON,sphereHeightfield:gt.types.SPHERE|gt.types.HEIGHTFIELD,boxHeightfield:gt.types.BOX|gt.types.HEIGHTFIELD,convexHeightfield:gt.types.CONVEXPOLYHEDRON|gt.types.HEIGHTFIELD,sphereParticle:gt.types.PARTICLE|gt.types.SPHERE,planeParticle:gt.types.PLANE|gt.types.PARTICLE,boxParticle:gt.types.BOX|gt.types.PARTICLE,convexParticle:gt.types.PARTICLE|gt.types.CONVEXPOLYHEDRON,cylinderCylinder:gt.types.CYLINDER,sphereCylinder:gt.types.SPHERE|gt.types.CYLINDER,planeCylinder:gt.types.PLANE|gt.types.CYLINDER,boxCylinder:gt.types.BOX|gt.types.CYLINDER,convexCylinder:gt.types.CONVEXPOLYHEDRON|gt.types.CYLINDER,heightfieldCylinder:gt.types.HEIGHTFIELD|gt.types.CYLINDER,particleCylinder:gt.types.PARTICLE|gt.types.CYLINDER,sphereTrimesh:gt.types.SPHERE|gt.types.TRIMESH,planeTrimesh:gt.types.PLANE|gt.types.TRIMESH};class Nx{get[he.sphereSphere](){return this.sphereSphere}get[he.spherePlane](){return this.spherePlane}get[he.boxBox](){return this.boxBox}get[he.sphereBox](){return this.sphereBox}get[he.planeBox](){return this.planeBox}get[he.convexConvex](){return this.convexConvex}get[he.sphereConvex](){return this.sphereConvex}get[he.planeConvex](){return this.planeConvex}get[he.boxConvex](){return this.boxConvex}get[he.sphereHeightfield](){return this.sphereHeightfield}get[he.boxHeightfield](){return this.boxHeightfield}get[he.convexHeightfield](){return this.convexHeightfield}get[he.sphereParticle](){return this.sphereParticle}get[he.planeParticle](){return this.planeParticle}get[he.boxParticle](){return this.boxParticle}get[he.convexParticle](){return this.convexParticle}get[he.cylinderCylinder](){return this.convexConvex}get[he.sphereCylinder](){return this.sphereConvex}get[he.planeCylinder](){return this.planeConvex}get[he.boxCylinder](){return this.boxConvex}get[he.convexCylinder](){return this.convexConvex}get[he.heightfieldCylinder](){return this.heightfieldCylinder}get[he.particleCylinder](){return this.particleCylinder}get[he.sphereTrimesh](){return this.sphereTrimesh}get[he.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Dx,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new fx(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(a.frictionGravity||a.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,x=g.length?g.pop():new Rl(n,i,u*p),m=g.length?g.pop():new Rl(n,i,u*p);return x.bi=m.bi=n,x.bj=m.bj=i,x.minForce=m.minForce=-u*p,x.maxForce=m.maxForce=u*p,x.ri.copy(t.ri),x.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(x.t,m.t),x.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),x.enabled=m.enabled=t.enabled,e.push(x,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];_i.setZero(),Zi.setZero(),Ji.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(_i.vadd(e.ni,_i),Zi.vadd(e.ri,Zi),Ji.vadd(e.rj,Ji)):(_i.vsub(e.ni,_i),Zi.vadd(e.rj,Zi),Ji.vadd(e.ri,Ji));const o=1/t;Zi.scale(o,n.ri),Ji.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),_i.normalize(),_i.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=Fx,l=kx,h=Ux,d=Bx;for(let u=0,p=t.length;u!==p;u++){const g=t[u],x=e[u];let m=null;g.material&&x.material&&(m=n.getContactMaterial(g.material,x.material)||null);const f=g.type&ot.KINEMATIC&&x.type&ot.STATIC||g.type&ot.STATIC&&x.type&ot.KINEMATIC||g.type&ot.KINEMATIC&&x.type&ot.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],c),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const M=g.shapes[v];for(let y=0;y<x.shapes.length;y++){x.quaternion.mult(x.shapeOrientations[y],l),x.quaternion.vmult(x.shapeOffsets[y],d),d.vadd(x.position,d);const P=x.shapes[y];if(!(M.collisionFilterMask&P.collisionFilterGroup&&P.collisionFilterMask&M.collisionFilterGroup)||h.distanceTo(d)>M.boundingSphereRadius+P.boundingSphereRadius)continue;let A=null;M.material&&P.material&&(A=n.getContactMaterial(M.material,P.material)||null),this.currentContactMaterial=A||m||n.defaultContactMaterial;const C=M.type|P.type,D=this[C];if(D){let S=!1;M.type<P.type?S=D.call(this,M,P,h,d,c,l,g,x,M,P,f):S=D.call(this,P,M,d,h,l,c,x,g,M,P,f),S&&f&&(n.shapeOverlapKeeper.set(M.id,P.id),n.bodyOverlapKeeper.set(g.id,x.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,h,d){const u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,yr),u.ni.scale(u.ni.dot(yr),Pl),yr.vsub(Pl,u.rj),-yr.dot(u.ni)<=t.radius){if(d)return!0;const p=u.ri,g=u.rj;p.vadd(n,p),p.vsub(a.position,p),g.vadd(i,g),g.vsub(c.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool,p=hv;n.vsub(i,_r),e.getSideNormals(p,o);const g=t.radius;let x=!1;const m=dv,f=fv,v=pv;let M=null,y=0,P=0,A=0,C=null;for(let N=0,j=p.length;N!==j&&x===!1;N++){const V=av;V.copy(p[N]);const Z=V.length();V.normalize();const rt=_r.dot(V);if(rt<Z+g&&rt>0){const ut=cv,st=lv;ut.copy(p[(N+1)%3]),st.copy(p[(N+2)%3]);const Vt=ut.length(),$=st.length();ut.normalize(),st.normalize();const et=_r.dot(ut),_t=_r.dot(st);if(et<Vt&&et>-Vt&&_t<$&&_t>-$){const ct=Math.abs(rt-Z-g);if((C===null||ct<C)&&(C=ct,P=et,A=_t,M=Z,m.copy(V),f.copy(ut),v.copy(st),y++,d))return!0}}}if(y){x=!0;const N=this.createContactEquation(a,c,t,e,l,h);m.scale(-g,N.ri),N.ni.copy(m),N.ni.negate(N.ni),m.scale(M,m),f.scale(P,f),m.vadd(f,m),v.scale(A,v),m.vadd(v,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let D=u.get();const S=uv;for(let N=0;N!==2&&!x;N++)for(let j=0;j!==2&&!x;j++)for(let V=0;V!==2&&!x;V++)if(D.set(0,0,0),N?D.vadd(p[0],D):D.vsub(p[0],D),j?D.vadd(p[1],D):D.vsub(p[1],D),V?D.vadd(p[2],D):D.vsub(p[2],D),i.vadd(D,S),S.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;x=!0;const Z=this.createContactEquation(a,c,t,e,l,h);Z.ri.copy(S),Z.ri.normalize(),Z.ni.copy(Z.ri),Z.ri.scale(g,Z.ri),Z.rj.copy(D),Z.ri.vadd(n,Z.ri),Z.ri.vsub(a.position,Z.ri),Z.rj.vadd(i,Z.rj),Z.rj.vsub(c.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}u.release(D),D=null;const w=u.get(),L=u.get(),H=u.get(),I=u.get(),U=u.get(),F=p.length;for(let N=0;N!==F&&!x;N++)for(let j=0;j!==F&&!x;j++)if(N%3!==j%3){p[j].cross(p[N],w),w.normalize(),p[N].vadd(p[j],L),H.copy(n),H.vsub(L,H),H.vsub(i,H);const V=H.dot(w);w.scale(V,I);let Z=0;for(;Z===N%3||Z===j%3;)Z++;U.copy(n),U.vsub(I,U),U.vsub(L,U),U.vsub(i,U);const rt=Math.abs(V),ut=U.length();if(rt<p[Z].length()&&ut<g){if(d)return!0;x=!0;const st=this.createContactEquation(a,c,t,e,l,h);L.vadd(I,st.rj),st.rj.copy(st.rj),U.negate(st.ni),st.ni.normalize(),st.ri.copy(st.rj),st.ri.vadd(i,st.ri),st.ri.vsub(n,st.ri),st.ri.normalize(),st.ri.scale(g,st.ri),st.ri.vadd(n,st.ri),st.ri.vsub(a.position,st.ri),st.rj.vadd(i,st.rj),st.rj.vsub(c.position,st.rj),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}u.release(w,L,H,I,U)}planeBox(t,e,n,i,s,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,h,d,u,p){const g=Rv;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,p)){const x=[],m=Pv;t.clipAgainstHull(n,s,e,i,o,g,-100,100,x);let f=0;for(let v=0;v!==x.length;v++){if(d)return!0;const M=this.createContactEquation(a,c,t,e,l,h),y=M.ri,P=M.rj;g.negate(M.ni),x[v].normal.negate(m),m.scale(x[v].depth,m),x[v].point.vadd(m,y),P.copy(x[v].point),y.vsub(n,y),P.vsub(i,P),y.vadd(n,y),y.vsub(a.position,y),P.vadd(i,P),P.vsub(c.position,P),this.result.push(M),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool;n.vsub(i,mv);const p=e.faceNormals,g=e.faces,x=e.vertices,m=t.radius;let f=!1;for(let v=0;v!==x.length;v++){const M=x[v],y=yv;o.vmult(M,y),i.vadd(y,y);const P=vv;if(y.vsub(n,P),P.lengthSquared()<m*m){if(d)return!0;f=!0;const A=this.createContactEquation(a,c,t,e,l,h);A.ri.copy(P),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(m,A.ri),y.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(c.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let v=0,M=g.length;v!==M&&f===!1;v++){const y=p[v],P=g[v],A=_v;o.vmult(y,A);const C=Mv;o.vmult(x[P[0]],C),C.vadd(i,C);const D=wv;A.scale(-m,D),n.vadd(D,D);const S=bv;D.vsub(C,S);const w=S.dot(A),L=Sv;if(n.vsub(C,L),w<0&&L.dot(A)>0){const H=[];for(let I=0,U=P.length;I!==U;I++){const F=u.get();o.vmult(x[P[I]],F),i.vadd(F,F),H.push(F)}if(ov(H,A,n)){if(d)return!0;f=!0;const I=this.createContactEquation(a,c,t,e,l,h);A.scale(-m,I.ri),A.negate(I.ni);const U=u.get();A.scale(-w,U);const F=u.get();A.scale(-m,F),n.vsub(i,I.rj),I.rj.vadd(F,I.rj),I.rj.vadd(U,I.rj),I.rj.vadd(i,I.rj),I.rj.vsub(c.position,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),u.release(U),u.release(F),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);for(let N=0,j=H.length;N!==j;N++)u.release(H[N]);return}else for(let I=0;I!==P.length;I++){const U=u.get(),F=u.get();o.vmult(x[P[(I+1)%P.length]],U),o.vmult(x[P[(I+2)%P.length]],F),i.vadd(U,U),i.vadd(F,F);const N=gv;F.vsub(U,N);const j=xv;N.unit(j);const V=u.get(),Z=u.get();n.vsub(U,Z);const rt=Z.dot(j);j.scale(rt,V),V.vadd(U,V);const ut=u.get();if(V.vsub(n,ut),rt>0&&rt*rt<N.lengthSquared()&&ut.lengthSquared()<m*m){if(d)return!0;const st=this.createContactEquation(a,c,t,e,l,h);V.vsub(i,st.rj),V.vsub(n,st.ni),st.ni.normalize(),st.ni.scale(m,st.ri),st.rj.vadd(i,st.rj),st.rj.vsub(c.position,st.rj),st.ri.vadd(n,st.ri),st.ri.vsub(a.position,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult);for(let Vt=0,$=H.length;Vt!==$;Vt++)u.release(H[Vt]);u.release(U),u.release(F),u.release(V),u.release(ut),u.release(Z);return}u.release(U),u.release(F),u.release(V),u.release(ut),u.release(Z)}for(let I=0,U=H.length;I!==U;I++)u.release(H[I])}}}planeConvex(t,e,n,i,s,o,a,c,l,h,d){const u=Ev,p=Tv;p.set(0,0,1),s.vmult(p,p);let g=0;const x=Av;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,x),p.dot(x)<=0){if(d)return!0;const v=this.createContactEquation(a,c,t,e,l,h),M=Cv;p.scale(p.dot(x),M),u.vsub(M,M),M.vsub(n,v.ri),v.ni.copy(p),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,p=t.radius,g=e.elementSize,x=Hv,m=Gv;Jt.pointToLocalFrame(i,o,n,m);let f=Math.floor((m.x-p)/g)-1,v=Math.ceil((m.x+p)/g)+1,M=Math.floor((m.y-p)/g)-1,y=Math.ceil((m.y+p)/g)+1;if(v<0||y<0||f>u.length||M>u[0].length)return;f<0&&(f=0),v<0&&(v=0),M<0&&(M=0),y<0&&(y=0),f>=u.length&&(f=u.length-1),v>=u.length&&(v=u.length-1),y>=u[0].length&&(y=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const P=[];e.getRectMinMax(f,M,v,y,P);const A=P[0],C=P[1];if(m.z-p>C||m.z+p<A)return;const D=this.result;for(let S=f;S<v;S++)for(let w=M;w<y;w++){const L=D.length;let H=!1;if(e.getConvexTrianglePillar(S,w,!1),Jt.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,x,s,o,a,c,t,e,d)),d&&H||(e.getConvexTrianglePillar(S,w,!0),Jt.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,x,s,o,a,c,t,e,d)),d&&H))return!0;if(D.length-L>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,p=e.elementSize,g=t.boundingSphereRadius,x=Ov,m=zv,f=kv;Jt.pointToLocalFrame(i,o,n,f);let v=Math.floor((f.x-g)/p)-1,M=Math.ceil((f.x+g)/p)+1,y=Math.floor((f.y-g)/p)-1,P=Math.ceil((f.y+g)/p)+1;if(M<0||P<0||v>u.length||y>u[0].length)return;v<0&&(v=0),M<0&&(M=0),y<0&&(y=0),P<0&&(P=0),v>=u.length&&(v=u.length-1),M>=u.length&&(M=u.length-1),P>=u[0].length&&(P=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const A=[];e.getRectMinMax(v,y,M,P,A);const C=A[0],D=A[1];if(!(f.z-g>D||f.z+g<C))for(let S=v;S<M;S++)for(let w=y;w<P;w++){let L=!1;if(e.getConvexTrianglePillar(S,w,!1),Jt.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,x,s,o,a,c,null,null,d,m,null)),d&&L||(e.getConvexTrianglePillar(S,w,!0),Jt.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,x,s,o,a,c,null,null,d,m,null)),d&&L))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,h,d){const u=Nv;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(c,a,e,t,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,h,d){const u=Lv;u.set(0,0,1),a.quaternion.vmult(u,u);const p=Iv;if(i.vsub(a.position,p),u.dot(p)<=0){if(d)return!0;const x=this.createContactEquation(c,a,e,t,l,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);const m=Dv;u.scale(u.dot(i),m),i.vsub(m,m),x.rj.copy(m),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,h,d){let u=-1;const p=Bv,g=Fv;let x=null;const m=Uv;if(m.copy(i),m.vsub(n,m),s.conjugate(Ll),Ll.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let f=0,v=t.faces.length;f!==v;f++){const M=[t.worldVertices[t.faces[f][0]]],y=t.worldFaceNormals[f];i.vsub(M[0],Il);const P=-y.dot(Il);if(x===null||Math.abs(P)<Math.abs(x)){if(d)return!0;x=P,u=f,p.copy(y)}}if(u!==-1){const f=this.createContactEquation(c,a,e,t,l,h);p.scale(x,g),g.vadd(i,g),g.vsub(n,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);const v=f.ri,M=f.rj;v.vadd(i,v),v.vsub(c.position,v),M.vadd(n,M),M.vsub(a.position,M),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,h,d)}particleCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,h,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=Xx,p=Yx,g=jx,x=$x,m=Kx,f=Zx,v=ev,M=qx,y=Vx,P=nv;Jt.pointToLocalFrame(i,o,n,m);const A=t.radius;v.lowerBound.set(m.x-A,m.y-A,m.z-A),v.upperBound.set(m.x+A,m.y+A,m.z+A),e.getTrianglesInAABB(v,P);const C=Wx,D=t.radius*t.radius;for(let I=0;I<P.length;I++)for(let U=0;U<3;U++)if(e.getVertex(e.indices[P[I]*3+U],C),C.vsub(m,y),y.lengthSquared()<=D){if(M.copy(C),Jt.pointToWorldFrame(i,o,M,C),C.vsub(n,y),d)return!0;let F=this.createContactEquation(a,c,t,e,l,h);F.ni.copy(y),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.copy(C),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let I=0;I<P.length;I++)for(let U=0;U<3;U++){e.getVertex(e.indices[P[I]*3+U],u),e.getVertex(e.indices[P[I]*3+(U+1)%3],p),p.vsub(u,g),m.vsub(p,f);const F=f.dot(g);m.vsub(u,f);let N=f.dot(g);if(N>0&&F<0&&(m.vsub(u,f),x.copy(g),x.normalize(),N=f.dot(x),x.scale(N,f),f.vadd(u,f),f.distanceTo(m)<t.radius)){if(d)return!0;const V=this.createContactEquation(a,c,t,e,l,h);f.vsub(m,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),Jt.pointToWorldFrame(i,o,f,f),f.vsub(c.position,V.rj),Jt.vectorToWorldFrame(o,V.ni,V.ni),Jt.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const S=Jx,w=Qx,L=tv,H=Hx;for(let I=0,U=P.length;I!==U;I++){e.getTriangleVertices(P[I],S,w,L),e.getNormal(P[I],H),m.vsub(S,f);let F=f.dot(H);if(H.scale(F,f),m.vsub(f,f),F=f.distanceTo(m),_e.pointInTriangle(f,S,w,L)&&F<t.radius){if(d)return!0;let N=this.createContactEquation(a,c,t,e,l,h);f.vsub(m,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),Jt.pointToWorldFrame(i,o,f,f),f.vsub(c.position,N.rj),Jt.vectorToWorldFrame(o,N.ni,N.ni),Jt.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}P.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=new _,p=Ox;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const x=new _;x.copy(u),Jt.pointToWorldFrame(i,o,x,u);const m=zx;if(u.vsub(n,m),p.dot(m)<=0){if(d)return!0;const v=this.createContactEquation(a,c,t,e,l,h);v.ni.copy(p);const M=Gx;p.scale(m.dot(p),M),u.vsub(M,M),v.ri.copy(M),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const _i=new _,Zi=new _,Ji=new _,Ux=new _,Bx=new _,Fx=new Me,kx=new Me,Ox=new _,zx=new _,Gx=new _,Hx=new _,Vx=new _;new _;const Wx=new _,qx=new _,Xx=new _,Yx=new _,jx=new _,$x=new _,Kx=new _,Zx=new _,Jx=new _,Qx=new _,tv=new _,ev=new Ze,nv=[],yr=new _,Pl=new _,iv=new _,sv=new _,rv=new _;function ov(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=iv;r[(s+1)%i].vsub(o,a);const c=sv;a.cross(t,c);const l=rv;e.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const _r=new _,av=new _,cv=new _,lv=new _,hv=[new _,new _,new _,new _,new _,new _],uv=new _,dv=new _,fv=new _,pv=new _,mv=new _,gv=new _,xv=new _,vv=new _,yv=new _,_v=new _,Mv=new _,wv=new _,bv=new _,Sv=new _;new _;new _;const Ev=new _,Tv=new _,Av=new _,Cv=new _,Rv=new _,Pv=new _,Lv=new _,Iv=new _,Dv=new _,Nv=new _,Ll=new Me,Uv=new _;new _;const Bv=new _,Il=new _,Fv=new _,kv=new _,Ov=new _,zv=[0],Gv=new _,Hv=new _;class Dl{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||Nl(t,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||Nl(e,h)}}}function Nl(r,t){r.push((t&4294901760)>>16,t&65535)}const Uo=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class Vv{constructor(){this.data={keys:[]}}get(t,e){const n=Uo(t,e);return this.data[n]}set(t,e,n){const i=Uo(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Uo(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Wv extends Dh{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new _,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new _,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new j0,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Cx,this.constraints=[],this.narrowphase=new Nx(this),this.collisionMatrix=new yl,this.collisionMatrixPrevious=new yl,this.bodyOverlapKeeper=new Dl,this.shapeOverlapKeeper=new Dl,this.contactmaterials=[],this.contactMaterialTable=new Vv,this.defaultMaterial=new Li("default"),this.defaultContactMaterial=new jr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Hr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=_e.ALL,n.from=t,n.to=e,n.callback=i,Bo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=_e.ANY,n.from=t,n.to=e,n.result=i,Bo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=_e.CLOSEST,n.from=t,n.to=e,n.result=i,Bo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ot&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=be.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=be.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(be.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=$v,i=Kv,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=ot.DYNAMIC;let u=-1/0;const p=this.constraints,g=jv;c.length();const x=c.x,m=c.y,f=c.z;let v=0;for(l&&(u=be.now()),v=0;v!==s;v++){const I=o[v];if(I.type===d){const U=I.force,F=I.mass;U.x+=F*x,U.y+=F*m,U.z+=F*f}}for(let I=0,U=this.subsystems.length;I!==U;I++)this.subsystems[I].update();l&&(u=be.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=be.now()-u);let M=p.length;for(v=0;v!==M;v++){const I=p[v];if(!I.collideConnected)for(let U=n.length-1;U>=0;U-=1)(I.bodyA===n[U]&&I.bodyB===i[U]||I.bodyB===n[U]&&I.bodyA===i[U])&&(n.splice(U,1),i.splice(U,1))}this.collisionMatrixTick(),l&&(u=be.now());const y=Yv,P=e.length;for(v=0;v!==P;v++)y.push(e[v]);e.length=0;const A=this.frictionEquations.length;for(v=0;v!==A;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),l&&(h.narrowphase=be.now()-u),l&&(u=be.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const C=e.length;for(let I=0;I!==C;I++){const U=e[I],F=U.bi,N=U.bj,j=U.si,V=U.sj;let Z;if(F.material&&N.material?Z=this.getContactMaterial(F.material,N.material)||this.defaultContactMaterial:Z=this.defaultContactMaterial,Z.friction,F.material&&N.material&&(F.material.friction>=0&&N.material.friction>=0&&F.material.friction*N.material.friction,F.material.restitution>=0&&N.material.restitution>=0&&(U.restitution=F.material.restitution*N.material.restitution)),a.addEquation(U),F.allowSleep&&F.type===ot.DYNAMIC&&F.sleepState===ot.SLEEPING&&N.sleepState===ot.AWAKE&&N.type!==ot.STATIC){const rt=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),ut=N.sleepSpeedLimit**2;rt>=ut*2&&(F.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===ot.DYNAMIC&&N.sleepState===ot.SLEEPING&&F.sleepState===ot.AWAKE&&F.type!==ot.STATIC){const rt=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),ut=F.sleepSpeedLimit**2;rt>=ut*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,N,!0),this.collisionMatrixPrevious.get(F,N)||(As.body=N,As.contact=U,F.dispatchEvent(As),As.body=F,N.dispatchEvent(As)),this.bodyOverlapKeeper.set(F.id,N.id),this.shapeOverlapKeeper.set(j.id,V.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=be.now()-u,u=be.now()),v=0;v!==s;v++){const I=o[v];I.wakeUpAfterNarrowphase&&(I.wakeUp(),I.wakeUpAfterNarrowphase=!1)}for(M=p.length,v=0;v!==M;v++){const I=p[v];I.update();for(let U=0,F=I.equations.length;U!==F;U++){const N=I.equations[U];a.addEquation(N)}}a.solve(t,this),l&&(h.solve=be.now()-u),a.removeAllEquations();const D=Math.pow;for(v=0;v!==s;v++){const I=o[v];if(I.type&d){const U=D(1-I.linearDamping,t),F=I.velocity;F.scale(U,F);const N=I.angularVelocity;if(N){const j=D(1-I.angularDamping,t);N.scale(j,N)}}}this.dispatchEvent(Xv),l&&(u=be.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(t,w,L);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=be.now()-u),this.stepnumber+=1,this.dispatchEvent(qv);let H=!0;if(this.allowSleep)for(H=!1,v=0;v!==s;v++){const I=o[v];I.sleepTick(this.time),I.sleepState!==ot.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(kn,On),t){for(let s=0,o=kn.length;s<o;s+=2)Cs.bodyA=this.getBodyById(kn[s]),Cs.bodyB=this.getBodyById(kn[s+1]),this.dispatchEvent(Cs);Cs.bodyA=Cs.bodyB=null}if(e){for(let s=0,o=On.length;s<o;s+=2)Rs.bodyA=this.getBodyById(On[s]),Rs.bodyB=this.getBodyById(On[s+1]),this.dispatchEvent(Rs);Rs.bodyA=Rs.bodyB=null}kn.length=On.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(kn,On),n){for(let s=0,o=kn.length;s<o;s+=2){const a=this.getShapeById(kn[s]),c=this.getShapeById(kn[s+1]);zn.shapeA=a,zn.shapeB=c,a&&(zn.bodyA=a.body),c&&(zn.bodyB=c.body),this.dispatchEvent(zn)}zn.bodyA=zn.bodyB=zn.shapeA=zn.shapeB=null}if(i){for(let s=0,o=On.length;s<o;s+=2){const a=this.getShapeById(On[s]),c=this.getShapeById(On[s+1]);Gn.shapeA=a,Gn.shapeB=c,a&&(Gn.bodyA=a.body),c&&(Gn.bodyB=c.body),this.dispatchEvent(Gn)}Gn.bodyA=Gn.bodyB=Gn.shapeA=Gn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ze;const Bo=new _e,be=globalThis.performance||{};if(!be.now){let r=Date.now();be.timing&&be.timing.navigationStart&&(r=be.timing.navigationStart),be.now=()=>Date.now()-r}new _;const qv={type:"postStep"},Xv={type:"preStep"},As={type:ot.COLLIDE_EVENT_NAME,body:null,contact:null},Yv=[],jv=[],$v=[],Kv=[],kn=[],On=[],Cs={type:"beginContact",bodyA:null,bodyB:null},Rs={type:"endContact",bodyA:null,bodyB:null},zn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Gn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Zv{constructor(){T(this,"world");this.world=new Wv,this.world.gravity.set(0,-9.81,0),this.world.broadphase=new es(this.world),this.world.defaultContactMaterial.friction=.4,this.world.defaultContactMaterial.restitution=.3;const t=new ot({mass:0,type:ot.STATIC});t.addShape(new Tx),t.quaternion.setFromAxisAngle(new _(1,0,0),-Math.PI/2),t.position.set(0,0,0),this.world.addBody(t),this.createWalls()}createWalls(){const s=new Li("wall");for(const o of[-34,34]){const a=new ot({mass:0,type:ot.STATIC,material:s});a.addShape(new li(new _(50,5/2,.5))),a.position.set(0,5/2,o),this.world.addBody(a)}for(const o of[-50,50]){const a=new ot({mass:0,type:ot.STATIC,material:s});a.addShape(new li(new _(.5,5/2,34))),a.position.set(o,5/2,0);const c=3.66,l=new ot({mass:0,type:ot.STATIC,material:s});l.addShape(new li(new _(.5,(5-2.44)/2,c))),l.position.set(o,5-(5-2.44)/2,0),this.world.addBody(l);for(const h of[-34,34]){const d=h<0?-1:1,u=34-c,p=new ot({mass:0,type:ot.STATIC,material:s});p.addShape(new li(new _(.5,5/2,u))),p.position.set(o,5/2,d*(c+u)),this.world.addBody(p)}this.world.addBody(a)}}step(t){this.world.step(1/60,t,3)}dispose(){for(;this.world.bodies.length;)this.world.removeBody(this.world.bodies[0])}}class Jv{constructor(){T(this,"keys",new Set);T(this,"mouseX",0);T(this,"mouseY",0);T(this,"_cameraYaw",0);T(this,"_cameraPitch",0);T(this,"_kickPressed",!1);T(this,"kickFlag",!1);T(this,"switchFlag",!1);T(this,"camera",{yaw:0,pitch:0});T(this,"isMobile",!1);T(this,"touchController",null);this.isMobile="ontouchstart"in window||navigator.maxTouchPoints>0,this.setupKeyboard(),this.isMobile||this.setupPointerLock()}setTouchController(t){this.touchController=t}setupKeyboard(){window.addEventListener("keydown",t=>{this.keys.add(t.key.toLowerCase()),(t.key===" "||t.key==="Space")&&t.preventDefault(),(t.key==="e"||t.key==="E")&&(this.kickFlag=!0)}),window.addEventListener("keyup",t=>{this.keys.delete(t.key.toLowerCase())})}setupPointerLock(){window.addEventListener("mousedown",t=>{t.button===0&&(this.kickFlag=!0)}),window.addEventListener("mousemove",t=>{this._cameraYaw-=t.movementX*.002,this._cameraPitch-=t.movementY*.002,this._cameraPitch=Math.max(-1.2,Math.min(1.2,this._cameraPitch))})}requestPointerLock(){this.isMobile||document.body.requestPointerLock()}consumeSwitchRequest(){return this.switchFlag?(this.switchFlag=!1,!0):!1}getRawInput(){const t=(this.keys.has("a")||this.keys.has("arrowleft")?-1:0)+(this.keys.has("d")||this.keys.has("arrowright")?1:0),e=(this.keys.has("w")||this.keys.has("arrowup")?1:0)+(this.keys.has("s")||this.keys.has("arrowdown")?-1:0),n=this.keys.has(" ")||this.keys.has("space"),i=this.keys.has("shift");this.camera={yaw:this._cameraYaw,pitch:this._cameraPitch};const s=this.kickFlag;if(this.kickFlag=!1,this.isMobile&&this.touchController&&this.touchController.visible){const o=this.touchController.getTouchState();return o.switchPlayer&&(this.switchFlag=!0),{steer:o.steer!==0?o.steer:Math.max(-1,Math.min(1,t)),throttle:o.throttle!==0?o.throttle:Math.max(-1,Math.min(1,e)),jump:!1,sprint:o.sprint||i,kick:o.kick||s,kickDirection:o.kick?o.kickDirection:void 0,pass:o.pass,defence:o.defence,camera:{yaw:o.cameraYaw,pitch:o.cameraPitch},sequence:0}}return{steer:Math.max(-1,Math.min(1,t)),throttle:Math.max(-1,Math.min(1,e)),jump:n,sprint:i,kick:s,kickDirection:void 0,pass:void 0,defence:void 0,camera:this.camera,sequence:0}}}const Mr=.15,Qi=50,Qv=800;function ai(r,t="0 0 24 24"){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${r}</svg>`}const Hn={shoot:ai('<path d="M6 2L4 8l3 3 4-4-3-3z"/><path d="M8 10L3 19l2 2 9-5-4-4z"/><path d="M21 18c-2 0-4-2-6-4l-3 3c2 2 4 4 6 4 2 0 3-1 3-3z"/>'),pass:ai('<path d="M5 16c1-6 6-10 12-10"/><path d="M17 6l-4 4 4 4"/>'),defence:ai('<path d="M12 2l8 3.5v7a10 10 0 01-8 9.5 10 10 0 01-8-9.5v-7L12 2z"/>'),switch:ai('<path d="M20 8a9 9 0 01-16 5"/><path d="M4 16a9 9 0 0116-5"/><path d="M4 4v4h4"/><path d="M20 20v-4h-4"/>'),boost:ai('<polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>'),mute:ai('<polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'),unmute:ai('<polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"/><path d="M19.1 4.9a10 10 0 010 14.2M15.5 8.5a5 5 0 010 7"/>'),cameraReset:ai('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>')};class ty{constructor(){T(this,"container");T(this,"joystickBase");T(this,"joystickKnob");T(this,"shootBtn");T(this,"passBtn");T(this,"defenceBtn");T(this,"switchBtn");T(this,"boostBtn");T(this,"muteBtn");T(this,"cameraResetBtn");T(this,"cameraZone");T(this,"chargeRing");T(this,"joystickActive",!1);T(this,"joystickId",-1);T(this,"joystickCenter",{x:0,y:0});T(this,"joystickDelta",{x:0,y:0});T(this,"joystickSmooth",{x:0,y:0});T(this,"cameraActive",!1);T(this,"cameraId",-1);T(this,"cameraLast",{x:0,y:0});T(this,"cameraDelta",{x:0,y:0});T(this,"cameraSmooth",{yaw:0,pitch:0});T(this,"_kick",!1);T(this,"_kickPower",0);T(this,"_kickDir",{x:0,z:1});T(this,"_sprint",!1);T(this,"_pass",!1);T(this,"_defence",!1);T(this,"_switch",!1);T(this,"_mute",!1);T(this,"kickStartTime",0);T(this,"kickChargeInterval",null);T(this,"onMuteToggle",null);T(this,"onHaptic",null);T(this,"onCameraReset",null);T(this,"hudVisible",!1);this.container=document.createElement("div"),this.container.id="touch-controls",this.container.style.cssText=`
      position: fixed; inset: 0; z-index: 200;
      touch-action: none; user-select: none; -webkit-user-select: none;
      pointer-events: none;
    `,this.joystickBase=document.createElement("div"),this.joystickBase.style.cssText=`
      position: absolute;
      bottom: max(40px, env(safe-area-inset-bottom, 0px) + 20px);
      left: max(40px, env(safe-area-inset-left, 0px) + 20px);
      width: 110px; height: 110px; border-radius: 50%;
      background: rgba(255,255,255,0.08);
      border: 2px solid rgba(255,255,255,0.15);
      pointer-events: auto;
      transform: translate(-50%, -50%);
    `,this.joystickKnob=document.createElement("div"),this.joystickKnob.style.cssText=`
      position: absolute; top: 50%; left: 50%;
      width: 50px; height: 50px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,240,255,0.6), rgba(0,240,255,0.2));
      transform: translate(-50%, -50%);
      transition: none;
      will-change: transform;
    `,this.joystickBase.appendChild(this.joystickKnob),this.shootBtn=this.createBtn(Hn.shoot,`
      position: absolute;
      bottom: max(40px, env(safe-area-inset-bottom, 0px) + 20px);
      right: max(25px, env(safe-area-inset-right, 0px) + 10px);
      width: 80px; height: 80px; border-radius: 50%;
      background: rgba(34,197,94,0.2); border: 2px solid rgba(34,197,94,0.5);
      color: #4ade80;
      pointer-events: auto;
    `),this.chargeRing=document.createElement("div"),this.chargeRing.style.cssText=`
      position: absolute; inset: -3px; border-radius: 50%;
      border: 3px solid rgba(255,200,0,0);
      pointer-events: none; transition: border-color 0.1s;
    `,this.shootBtn.appendChild(this.chargeRing),this.passBtn=this.createBtn(Hn.pass,`
      position: absolute;
      bottom: calc(max(140px, env(safe-area-inset-bottom, 0px) + 120px) + 0px);
      right: max(25px, env(safe-area-inset-right, 0px) + 10px);
      width: 56px; height: 56px; border-radius: 50%;
      background: rgba(59,130,246,0.2); border: 2px solid rgba(59,130,246,0.4);
      color: #60a5fa;
      pointer-events: auto;
    `),this.defenceBtn=this.createBtn(Hn.defence,`
      position: absolute;
      bottom: calc(max(140px, env(safe-area-inset-bottom, 0px) + 120px) + 0px);
      right: max(96px, env(safe-area-inset-right, 0px) + 80px);
      width: 56px; height: 56px; border-radius: 50%;
      background: rgba(249,115,22,0.2); border: 2px solid rgba(249,115,22,0.4);
      color: #fb923c;
      pointer-events: auto;
    `),this.boostBtn=this.createBtn(Hn.boost,`
      position: absolute;
      bottom: max(220px, env(safe-area-inset-bottom, 0px) + 200px);
      right: max(25px, env(safe-area-inset-right, 0px) + 10px);
      width: 48px; height: 48px; border-radius: 50%;
      background: rgba(255,200,0,0.15); border: 2px solid rgba(255,200,0,0.3);
      color: #fbbf24;
      pointer-events: auto;
    `),this.switchBtn=this.createBtn(Hn.switch,`
      position: absolute;
      bottom: max(220px, env(safe-area-inset-bottom, 0px) + 200px);
      right: max(88px, env(safe-area-inset-right, 0px) + 70px);
      width: 48px; height: 48px; border-radius: 50%;
      background: rgba(168,85,247,0.15); border: 2px solid rgba(168,85,247,0.3);
      color: #c084fc;
      pointer-events: auto;
    `),this.muteBtn=this.createBtn(Hn.mute,`
      position: absolute;
      top: max(20px, env(safe-area-inset-top, 0px) + 10px);
      right: max(20px, env(safe-area-inset-right, 0px) + 10px);
      width: 36px; height: 36px; border-radius: 50%;
      background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
      color: rgba(255,255,255,0.6);
      pointer-events: auto;
    `),this.cameraResetBtn=this.createBtn(Hn.cameraReset,`
      position: absolute;
      top: max(20px, env(safe-area-inset-top, 0px) + 10px);
      right: max(70px, env(safe-area-inset-right, 0px) + 50px);
      width: 36px; height: 36px; border-radius: 50%;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
      color: rgba(255,255,255,0.5);
      pointer-events: auto;
    `),this.cameraZone=document.createElement("div"),this.cameraZone.style.cssText=`
      position: absolute; top: 0; right: 0; width: 50%; height: 100%;
      pointer-events: auto;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02));
    `,this.container.appendChild(this.cameraZone),this.container.appendChild(this.joystickBase),this.container.appendChild(this.shootBtn),this.container.appendChild(this.passBtn),this.container.appendChild(this.defenceBtn),this.container.appendChild(this.boostBtn),this.container.appendChild(this.switchBtn),this.container.appendChild(this.muteBtn),this.container.appendChild(this.cameraResetBtn),this.setupJoystickEvents(),this.setupCameraEvents(),this.setupButtonEvents(),this.setupCameraReset(),this.applyOffsets(),this.hide(),document.body.appendChild(this.container)}applyOffsets(){try{const t=localStorage.getItem("football_settings");if(!t)return;const n=JSON.parse(t).joystick||{},i=n.joystickX||0,s=n.joystickY||0,o=n.actionX||0,a=n.actionY||0,c="env(safe-area-inset-bottom, 0px)",l="env(safe-area-inset-left, 0px)",h="env(safe-area-inset-right, 0px)",d="env(safe-area-inset-top, 0px)";this.joystickBase.style.bottom=`calc(max(40px, ${c} + 20px) + ${s}px)`,this.joystickBase.style.left=`calc(max(40px, ${l} + 20px) + ${i}px)`,this.shootBtn.style.bottom=`calc(max(40px, ${c} + 20px) + ${a}px)`,this.shootBtn.style.right=`calc(max(25px, ${h} + 10px) + ${o}px)`,this.passBtn.style.bottom=`calc(max(140px, ${c} + 120px) + ${a}px)`,this.passBtn.style.right=`calc(max(25px, ${h} + 10px) + ${o}px)`,this.defenceBtn.style.bottom=`calc(max(140px, ${c} + 120px) + ${a}px)`,this.defenceBtn.style.right=`calc(max(96px, ${h} + 80px) + ${o}px)`,this.boostBtn.style.bottom=`calc(max(220px, ${c} + 200px) + ${a}px)`,this.boostBtn.style.right=`calc(max(25px, ${h} + 10px) + ${o}px)`,this.switchBtn.style.bottom=`calc(max(220px, ${c} + 200px) + ${a}px)`,this.switchBtn.style.right=`calc(max(88px, ${h} + 70px) + ${o}px)`,this.muteBtn.style.top=`calc(max(20px, ${d} + 10px) + ${a*.3}px)`,this.muteBtn.style.right=`calc(max(20px, ${h} + 10px) + ${o}px)`,this.cameraResetBtn.style.top=`calc(max(20px, ${d} + 10px) + ${a*.3}px)`,this.cameraResetBtn.style.right=`calc(max(70px, ${h} + 50px) + ${o}px)`}catch{}}createBtn(t,e){const n=document.createElement("button");return n.innerHTML=t,n.style.cssText=e+`
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; -webkit-tap-highlight-color: transparent;
      outline: none; user-select: none;
      transition: transform 0.1s, filter 0.1s;
      will-change: transform;
      z-index: 10;
    `,n}setBtnActive(t,e){t.style.transform=e?"scale(0.9)":"scale(1)",t.style.filter=e?"brightness(1.4)":"brightness(1)"}haptic(){var t,e;(t=this.onHaptic)==null||t.call(this);try{(e=navigator.vibrate)==null||e.call(navigator,12)}catch{}}setupJoystickEvents(){const t=i=>{const s=i.changedTouches[0],o=this.joystickBase.getBoundingClientRect(),a=o.left+o.width/2,c=o.top+o.height/2,l=s.clientX-a,h=s.clientY-c;Math.sqrt(l*l+h*h)<o.width*.8&&(this.joystickActive=!0,this.joystickId=s.identifier,this.joystickCenter={x:a,y:c},i.preventDefault())},e=i=>{if(this.joystickActive)for(let s=0;s<i.changedTouches.length;s++){const o=i.changedTouches[s];if(o.identifier===this.joystickId){const a=o.clientX-this.joystickCenter.x,c=o.clientY-this.joystickCenter.y,l=Math.sqrt(a*a+c*c),h=Math.min(l,Qi);this.joystickDelta.x=l>0?a/l*h:0,this.joystickDelta.y=l>0?c/l*h:0,i.preventDefault()}}},n=i=>{for(let s=0;s<i.changedTouches.length;s++)i.changedTouches[s].identifier===this.joystickId&&(this.joystickActive=!1,this.joystickId=-1,this.joystickDelta={x:0,y:0},this.joystickSmooth={x:0,y:0},this.joystickKnob.style.transform="translate(-50%, -50%)")};this.joystickBase.addEventListener("touchstart",t,{passive:!1}),window.addEventListener("touchmove",e,{passive:!1}),window.addEventListener("touchend",n,{passive:!1}),window.addEventListener("touchcancel",n,{passive:!1})}setupCameraEvents(){const t=i=>{i.preventDefault();for(let s=0;s<i.changedTouches.length;s++){const o=i.changedTouches[s];o.identifier!==this.joystickId&&(this.cameraActive||(this.cameraActive=!0,this.cameraId=o.identifier,this.cameraLast={x:o.clientX,y:o.clientY}))}},e=i=>{if(this.cameraActive)for(let s=0;s<i.changedTouches.length;s++){const o=i.changedTouches[s];o.identifier===this.cameraId&&(this.cameraDelta.x+=o.clientX-this.cameraLast.x,this.cameraDelta.y+=o.clientY-this.cameraLast.y,this.cameraLast={x:o.clientX,y:o.clientY})}},n=i=>{for(let s=0;s<i.changedTouches.length;s++)i.changedTouches[s].identifier===this.cameraId&&(this.cameraActive=!1,this.cameraId=-1,this.cameraDelta={x:0,y:0})};this.cameraZone.addEventListener("touchstart",t,{passive:!1}),window.addEventListener("touchmove",e,{passive:!1}),window.addEventListener("touchend",n,{passive:!1}),window.addEventListener("touchcancel",n,{passive:!1})}setupCameraReset(){this.cameraResetBtn.addEventListener("touchstart",t=>{var e;this.cameraSmooth={yaw:0,pitch:0},(e=this.onCameraReset)==null||e.call(this),this.haptic(),this.setBtnActive(this.cameraResetBtn,!0),t.preventDefault()}),this.cameraResetBtn.addEventListener("touchend",()=>{this.setBtnActive(this.cameraResetBtn,!1)}),this.cameraResetBtn.addEventListener("touchcancel",()=>{this.setBtnActive(this.cameraResetBtn,!1)})}setupButtonEvents(){const t=(e,n)=>{e.addEventListener("touchstart",s=>{var o;n==="mute"?(this._mute=!this._mute,this.muteBtn.innerHTML=this._mute?Hn.unmute:Hn.mute,(o=this.onMuteToggle)==null||o.call(this)):n==="shoot"?(this.kickStartTime=Date.now(),this._kickPower=0,this.setBtnActive(e,!0),this.haptic(),this.updateKickDir(),this.kickChargeInterval=window.setInterval(()=>{const a=Date.now()-this.kickStartTime;this._kickPower=Math.min(1,a/Qv);const c=this._kickPower*100;this.chargeRing.style.borderColor=`rgba(255,200,0,${.2+this._kickPower*.8})`,this.chargeRing.style.background=`conic-gradient(rgba(255,200,0,${this._kickPower*.3}) ${c}%, transparent ${c}%)`,this.updateKickDir()},50)):n==="boost"?(this._sprint=!0,this.haptic(),this.setBtnActive(e,!0)):n==="pass"?(this._pass=!0,this.haptic(),this.setBtnActive(e,!0)):n==="defence"?(this._defence=!0,this.haptic(),this.setBtnActive(e,!0)):n==="switch"&&(this._switch=!0,this.haptic(),this.setBtnActive(e,!0)),s.preventDefault()},{passive:!1});const i=()=>{n==="shoot"?(this._kick=!0,this.updateKickDir(),this.setBtnActive(e,!1),this.chargeRing.style.borderColor="rgba(255,200,0,0)",this.chargeRing.style.background="none",this.kickChargeInterval!==null&&(clearInterval(this.kickChargeInterval),this.kickChargeInterval=null)):n==="boost"?(this._sprint=!1,this.setBtnActive(e,!1)):(n==="pass"||n==="defence"||n==="switch")&&this.setBtnActive(e,!1)};e.addEventListener("touchend",i),e.addEventListener("touchcancel",i)};t(this.shootBtn,"shoot"),t(this.passBtn,"pass"),t(this.defenceBtn,"defence"),t(this.boostBtn,"boost"),t(this.switchBtn,"switch"),t(this.muteBtn,"mute")}updateKickDir(){const t=this.joystickDelta.x,e=this.joystickDelta.y,n=Math.sqrt(t*t+e*e);n>Mr*Qi&&(this._kickDir={x:t/n,z:-(e/n)})}getTouchState(){const t=this.joystickDelta.x/Qi,e=-(this.joystickDelta.y/Qi),n=Math.sqrt(t*t+e*e);let i=0,s=0;if(n>Mr){const p=(n-Mr)/(1-Mr);i=t/n*p,s=e/n*p}const o=.4;if(this.joystickSmooth.x+=(i-this.joystickSmooth.x)*o,this.joystickSmooth.y+=(s-this.joystickSmooth.y)*o,this.joystickActive){const p=this.joystickSmooth.x*Qi,g=-this.joystickSmooth.y*Qi;this.joystickKnob.style.transform=`translate(calc(-50% + ${p}px), calc(-50% + ${g}px))`}this.cameraSmooth.yaw+=this.cameraDelta.x*.005,this.cameraSmooth.pitch+=this.cameraDelta.y*.005,this.cameraSmooth.pitch=Math.max(-1.2,Math.min(1.2,this.cameraSmooth.pitch)),this.cameraDelta.x=0,this.cameraDelta.y=0;const a=this._kick,c=this._kickPower,l={...this._kickDir},h=this._pass,d=this._defence,u=this._switch;return this._kick=!1,this._kickPower=0,this._pass=!1,this._defence=!1,this._switch=!1,{steer:Math.max(-1,Math.min(1,this.joystickSmooth.x)),throttle:Math.max(-1,Math.min(1,this.joystickSmooth.y)),sprint:this._sprint,kick:a,kickPower:c,kickDirection:l,pass:h,defence:d,switchPlayer:u,cameraYaw:this.cameraSmooth.yaw,cameraPitch:this.cameraSmooth.pitch}}show(){this.container.style.display="block",this.hudVisible=!0}hide(){this.container.style.display="none",this.hudVisible=!1}get visible(){return this.hudVisible}dispose(){this.kickChargeInterval!==null&&clearInterval(this.kickChargeInterval),this.container.remove()}}class ey{constructor(t){T(this,"camera");T(this,"target",null);T(this,"pos",new z);T(this,"lookTarget",new z);T(this,"yaw",0);T(this,"pitch",-.3);T(this,"distance",8);T(this,"isMobile");T(this,"autoYaw",0);T(this,"autoPitch",-.25);T(this,"autoDistance",9);T(this,"switchActive",!1);T(this,"switchTimer",0);T(this,"switchDuration",.3);T(this,"switchStartPos",new z);T(this,"switchEndPos",new z);T(this,"switchStartLook",new z);T(this,"switchEndLook",new z);this.camera=t,this.pos.copy(t.position),this.isMobile="ontouchstart"in window||navigator.maxTouchPoints>0,this.isMobile&&(this.yaw=0,this.pitch=this.autoPitch,this.distance=this.autoDistance)}follow(t){this.target=t}snapBehind(){this.yaw=this.autoYaw,this.pitch=this.autoPitch}switchTarget(t,e=.3){this.switchStartPos.copy(this.camera.position),this.switchStartLook.copy(this.lookTarget),this.switchEndPos.copy(t),this.switchEndPos.y+=this.isMobile?1.8:1.2,this.switchEndLook.copy(t),this.switchEndLook.y+=1.2,this.switchDuration=Math.max(.1,e),this.switchTimer=0,this.switchActive=!0}updateSwitch(t){if(!this.switchActive)return;this.switchTimer+=t;const e=Math.min(1,this.switchTimer/this.switchDuration),n=e*e*(3-2*e);this.camera.position.lerpVectors(this.switchStartPos,this.switchEndPos,n),this.lookTarget.lerpVectors(this.switchStartLook,this.switchEndLook,n),this.camera.lookAt(this.lookTarget),e>=1&&(this.switchActive=!1)}update(t,e){if(!this.target&&!this.switchActive)return;if(this.switchActive){this.updateSwitch(t);return}if(e)this.yaw=e.yaw,this.pitch=Math.max(-1,Math.min(.8,e.pitch));else if(this.isMobile){const o=this.isMobile?4*t:2*t;this.yaw+=(this.autoYaw-this.yaw)*Math.min(1,o),this.pitch+=(this.autoPitch-this.pitch)*Math.min(1,o)}const n=new z;this.target.getWorldPosition(n);const i=new z(n.x+Math.sin(this.yaw)*Math.cos(this.pitch)*this.distance,n.y+(this.isMobile?1.8:1.2)+Math.sin(this.pitch)*this.distance,n.z+Math.cos(this.yaw)*Math.cos(this.pitch)*this.distance),s=Math.min(1,8*t);this.pos.lerp(i,s),this.lookTarget.lerp(n.clone().add(new z(0,1.2,0)),s),this.camera.position.copy(this.pos),this.camera.lookAt(this.lookTarget)}}const Rn=Object.create(null);Rn.open="0";Rn.close="1";Rn.ping="2";Rn.pong="3";Rn.message="4";Rn.upgrade="5";Rn.noop="6";const Lr=Object.create(null);Object.keys(Rn).forEach(r=>{Lr[Rn[r]]=r});const Ra={type:"error",data:"parser error"},Hh=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Vh=typeof ArrayBuffer=="function",Wh=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,Ja=({type:r,data:t},e,n)=>Hh&&t instanceof Blob?e?n(t):Ul(t,n):Vh&&(t instanceof ArrayBuffer||Wh(t))?e?n(t):Ul(new Blob([t]),n):n(Rn[r]+(t||"")),Ul=(r,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+(n||""))},e.readAsDataURL(r)};function Bl(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let Fo;function ny(r,t){if(Hh&&r.data instanceof Blob)return r.data.arrayBuffer().then(Bl).then(t);if(Vh&&(r.data instanceof ArrayBuffer||Wh(r.data)))return t(Bl(r.data));Ja(r,!1,e=>{Fo||(Fo=new TextEncoder),t(Fo.encode(e))})}const Fl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ds=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<Fl.length;r++)Ds[Fl.charCodeAt(r)]=r;const iy=r=>{let t=r.length*.75,e=r.length,n,i=0,s,o,a,c;r[r.length-1]==="="&&(t--,r[r.length-2]==="="&&t--);const l=new ArrayBuffer(t),h=new Uint8Array(l);for(n=0;n<e;n+=4)s=Ds[r.charCodeAt(n)],o=Ds[r.charCodeAt(n+1)],a=Ds[r.charCodeAt(n+2)],c=Ds[r.charCodeAt(n+3)],h[i++]=s<<2|o>>4,h[i++]=(o&15)<<4|a>>2,h[i++]=(a&3)<<6|c&63;return l},sy=typeof ArrayBuffer=="function",Qa=(r,t)=>{if(typeof r!="string")return{type:"message",data:qh(r,t)};const e=r.charAt(0);return e==="b"?{type:"message",data:ry(r.substring(1),t)}:Lr[e]?r.length>1?{type:Lr[e],data:r.substring(1)}:{type:Lr[e]}:Ra},ry=(r,t)=>{if(sy){const e=iy(r);return qh(e,t)}else return{base64:!0,data:r}},qh=(r,t)=>{switch(t){case"blob":return r instanceof Blob?r:new Blob([r]);case"arraybuffer":default:return r instanceof ArrayBuffer?r:r.buffer}},Xh="",oy=(r,t)=>{const e=r.length,n=new Array(e);let i=0;r.forEach((s,o)=>{Ja(s,!1,a=>{n[o]=a,++i===e&&t(n.join(Xh))})})},ay=(r,t)=>{const e=r.split(Xh),n=[];for(let i=0;i<e.length;i++){const s=Qa(e[i],t);if(n.push(s),s.type==="error")break}return n};function cy(){return new TransformStream({transform(r,t){ny(r,e=>{const n=e.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}r.data&&typeof r.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(e)})}})}let ko;function wr(r){return r.reduce((t,e)=>t+e.length,0)}function br(r,t){if(r[0].length===t)return r.shift();const e=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)e[i]=r[0][n++],n===r[0].length&&(r.shift(),n=0);return r.length&&n<r[0].length&&(r[0]=r[0].slice(n)),e}function ly(r,t){ko||(ko=new TextDecoder);const e=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(e.push(o);;){if(n===0){if(wr(e)<1)break;const c=br(e,1);s=(c[0]&128)===128,i=c[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(wr(e)<2)break;const c=br(e,2);i=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(wr(e)<8)break;const c=br(e,8),l=new DataView(c.buffer,c.byteOffset,c.length),h=l.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(Ra);break}i=h*Math.pow(2,32)+l.getUint32(4),n=3}else{if(wr(e)<i)break;const c=br(e,i);a.enqueue(Qa(s?c:ko.decode(c),t)),n=0}if(i===0||i>r){a.enqueue(Ra);break}}}})}const Yh=4;function we(r){if(r)return hy(r)}function hy(r){for(var t in we.prototype)r[t]=we.prototype[t];return r}we.prototype.on=we.prototype.addEventListener=function(r,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(t),this};we.prototype.once=function(r,t){function e(){this.off(r,e),t.apply(this,arguments)}return e.fn=t,this.on(r,e),this};we.prototype.off=we.prototype.removeListener=we.prototype.removeAllListeners=we.prototype.removeEventListener=function(r,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+r];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var n,i=0;i<e.length;i++)if(n=e[i],n===t||n.fn===t){e.splice(i,1);break}return e.length===0&&delete this._callbacks["$"+r],this};we.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+r],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,i=e.length;n<i;++n)e[n].apply(this,t)}return this};we.prototype.emitReserved=we.prototype.emit;we.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};we.prototype.hasListeners=function(r){return!!this.listeners(r).length};const $r=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),rn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),uy="arraybuffer";function jh(r,...t){return t.reduce((e,n)=>(r.hasOwnProperty(n)&&(e[n]=r[n]),e),{})}const dy=rn.setTimeout,fy=rn.clearTimeout;function Kr(r,t){t.useNativeTimers?(r.setTimeoutFn=dy.bind(rn),r.clearTimeoutFn=fy.bind(rn)):(r.setTimeoutFn=rn.setTimeout.bind(rn),r.clearTimeoutFn=rn.clearTimeout.bind(rn))}const py=1.33;function my(r){return typeof r=="string"?gy(r):Math.ceil((r.byteLength||r.size)*py)}function gy(r){let t=0,e=0;for(let n=0,i=r.length;n<i;n++)t=r.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function $h(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function xy(r){let t="";for(let e in r)r.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(r[e]));return t}function vy(r){let t={},e=r.split("&");for(let n=0,i=e.length;n<i;n++){let s=e[n].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}class yy extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class tc extends we{constructor(t){super(),this.writable=!1,Kr(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved("error",new yy(t,e,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=Qa(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=xy(t);return e.length?"?"+e:""}}class _y extends tc{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};ay(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,oy(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=$h()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let Kh=!1;try{Kh=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const My=Kh;function wy(){}class by extends _y{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let n=location.port;n||(n=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class An extends we{constructor(t,e,n){super(),this.createRequest=t,Kr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const e=jh(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=An.requestsCount++,An.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=wy,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete An.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}An.requestsCount=0;An.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",kl);else if(typeof addEventListener=="function"){const r="onpagehide"in rn?"pagehide":"unload";addEventListener(r,kl,!1)}}function kl(){for(let r in An.requests)An.requests.hasOwnProperty(r)&&An.requests[r].abort()}const Sy=(function(){const r=Zh({xdomain:!1});return r&&r.responseType!==null})();class Ey extends by{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=Sy&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new An(Zh,this.uri(),t)}}function Zh(r){const t=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||My))return new XMLHttpRequest}catch{}if(!t)try{return new rn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Jh=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ty extends tc{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,n=Jh?{}:jh(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],i=e===t.length-1;Ja(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&$r(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=$h()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const Oo=rn.WebSocket||rn.MozWebSocket;class Ay extends Ty{createSocket(t,e,n){return Jh?new Oo(t,e,n):e?new Oo(t,e):new Oo(t)}doWrite(t,e){this.ws.send(e)}}class Cy extends tc{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=ly(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),i=cy();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:a,value:c})=>{a||(this.onPacket(c),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],i=e===t.length-1;this._writer.write(n).then(()=>{i&&$r(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const Ry={websocket:Ay,webtransport:Cy,polling:Ey},Py=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ly=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Pa(r){if(r.length>8e3)throw"URI too long";const t=r,e=r.indexOf("["),n=r.indexOf("]");e!=-1&&n!=-1&&(r=r.substring(0,e)+r.substring(e,n).replace(/:/g,";")+r.substring(n,r.length));let i=Py.exec(r||""),s={},o=14;for(;o--;)s[Ly[o]]=i[o]||"";return e!=-1&&n!=-1&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Iy(s,s.path),s.queryKey=Dy(s,s.query),s}function Iy(r,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Dy(r,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(e[i]=s)}),e}const La=typeof addEventListener=="function"&&typeof removeEventListener=="function",Ir=[];La&&addEventListener("offline",()=>{Ir.forEach(r=>r())},!1);class di extends we{constructor(t,e){if(super(),this.binaryType=uy,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const n=Pa(t);e.hostname=n.host,e.secure=n.protocol==="https"||n.protocol==="wss",e.port=n.port,n.query&&(e.query=n.query)}else e.host&&(e.hostname=Pa(e.host).host);Kr(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=vy(this.opts.query)),La&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Ir.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=Yh,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&di.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",di.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(e+=my(i)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,$r(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket("message",t,e,n),this}send(t,e,n){return this._sendPacket("message",t,e,n),this}_sendPacket(t,e,n,i){if(typeof e=="function"&&(i=e,e=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:t,data:e,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(di.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),La&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Ir.indexOf(this._offlineEventListener);n!==-1&&Ir.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}di.protocol=Yh;class Ny extends di{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),n=!1;di.priorWebsocketSuccess=!1;const i=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;di.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const u=new Error("probe error");u.transport=e.name,this.emitReserved("upgradeError",u)}}))};function s(){n||(n=!0,h(),e.close(),e=null)}const o=d=>{const u=new Error("probe error: "+d);u.transport=e.name,s(),this.emitReserved("upgradeError",u)};function a(){o("transport closed")}function c(){o("socket closed")}function l(d){e&&d.name!==e.name&&s()}const h=()=>{e.removeListener("open",i),e.removeListener("error",o),e.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};e.once("open",i),e.once("error",o),e.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}let Uy=class extends Ny{constructor(t,e={}){const n=typeof t=="object"?t:e;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>Ry[i]).filter(i=>!!i)),super(t,n)}};function By(r,t="",e){let n=r;e=e||typeof location<"u"&&location,r==null&&(r=e.protocol+"//"+e.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=e.protocol+r:r=e.host+r),/^(https?|wss?):\/\//.test(r)||(typeof e<"u"?r=e.protocol+"//"+r:r="https://"+r),n=Pa(r)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+t,n.href=n.protocol+"://"+s+(e&&e.port===n.port?"":":"+n.port),n}const Fy=typeof ArrayBuffer=="function",ky=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,Qh=Object.prototype.toString,Oy=typeof Blob=="function"||typeof Blob<"u"&&Qh.call(Blob)==="[object BlobConstructor]",zy=typeof File=="function"||typeof File<"u"&&Qh.call(File)==="[object FileConstructor]";function ec(r){return Fy&&(r instanceof ArrayBuffer||ky(r))||Oy&&r instanceof Blob||zy&&r instanceof File}function Dr(r,t){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let e=0,n=r.length;e<n;e++)if(Dr(r[e]))return!0;return!1}if(ec(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return Dr(r.toJSON(),!0);for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e)&&Dr(r[e]))return!0;return!1}function Gy(r){const t=[],e=r.data,n=r;return n.data=Ia(e,t),n.attachments=t.length,{packet:n,buffers:t}}function Ia(r,t){if(!r)return r;if(ec(r)){const e={_placeholder:!0,num:t.length};return t.push(r),e}else if(Array.isArray(r)){const e=new Array(r.length);for(let n=0;n<r.length;n++)e[n]=Ia(r[n],t);return e}else if(typeof r=="object"&&!(r instanceof Date)){const e={};for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=Ia(r[n],t));return e}return r}function Hy(r,t){return r.data=Da(r.data,t),delete r.attachments,r}function Da(r,t){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<t.length)return t[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let e=0;e<r.length;e++)r[e]=Da(r[e],t);else if(typeof r=="object")for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&(r[e]=Da(r[e],t));return r}const Vy=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Ht;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(Ht||(Ht={}));class Wy{constructor(t){this.replacer=t}encode(t){return(t.type===Ht.EVENT||t.type===Ht.ACK)&&Dr(t)?this.encodeAsBinary({type:t.type===Ht.EVENT?Ht.BINARY_EVENT:Ht.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===Ht.BINARY_EVENT||t.type===Ht.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=Gy(t),n=this.encodeAsString(e.packet),i=e.buffers;return i.unshift(n),i}}class nc extends we{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const n=e.type===Ht.BINARY_EVENT;n||e.type===Ht.BINARY_ACK?(e.type=n?Ht.EVENT:Ht.ACK,this.reconstructor=new qy(e),e.attachments===0&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else if(ec(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if(Ht[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===Ht.BINARY_EVENT||n.type===Ht.BINARY_ACK){const s=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(s,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!Xy(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(t.charAt(e+1)==="/"){const s=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(s,e)}else n.nsp="/";const i=t.charAt(e+1);if(i!==""&&Number(i)==i){const s=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}n.id=Number(t.substring(s,e+1))}if(t.charAt(++e)){const s=this.tryParse(t.substr(e));if(nc.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case Ht.CONNECT:return Ol(e);case Ht.DISCONNECT:return e===void 0;case Ht.CONNECT_ERROR:return typeof e=="string"||Ol(e);case Ht.EVENT:case Ht.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Vy.indexOf(e[0])===-1);case Ht.ACK:case Ht.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class qy{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=Hy(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Xy=Number.isInteger||function(r){return typeof r=="number"&&isFinite(r)&&Math.floor(r)===r};function Ol(r){return Object.prototype.toString.call(r)==="[object Object]"}const Yy=Object.freeze(Object.defineProperty({__proto__:null,Decoder:nc,Encoder:Wy,get PacketType(){return Ht}},Symbol.toStringTag,{value:"Module"}));function pn(r,t,e){return r.on(t,e),function(){r.off(t,e)}}const jy=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class tu extends we{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[pn(t,"open",this.onopen.bind(this)),pn(t,"packet",this.onpacket.bind(this)),pn(t,"error",this.onerror.bind(this)),pn(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var n,i,s;if(jy.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const o={type:Ht.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const h=this.ids++,d=e.pop();this._registerAckCallback(h,d),o.id=h}const a=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,c=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=e;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);e.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),e.apply(this,a)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((n,i)=>{const s=(o,a)=>o?i(o):n(a);s.withError=!0,e.push(s),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(i)):(this._queue.shift(),e&&e(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Ht.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Ht.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ht.EVENT:case Ht.BINARY_EVENT:this.onevent(t);break;case Ht.ACK:case Ht.BINARY_ACK:this.onack(t);break;case Ht.DISCONNECT:this.ondisconnect();break;case Ht.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let n=!1;return function(...i){n||(n=!0,e.packet({type:Ht.ACK,id:t,data:i}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ht.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function gs(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}gs.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*r);r=(Math.floor(t*10)&1)==0?r-e:r+e}return Math.min(r,this.max)|0};gs.prototype.reset=function(){this.attempts=0};gs.prototype.setMin=function(r){this.ms=r};gs.prototype.setMax=function(r){this.max=r};gs.prototype.setJitter=function(r){this.jitter=r};class Na extends we{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,Kr(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new gs({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const i=e.parser||Yy;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Uy(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=pn(e,"open",function(){n.onopen(),t&&t()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=pn(e,"error",s);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),e.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(i),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(pn(t,"ping",this.onping.bind(this)),pn(t,"data",this.ondata.bind(this)),pn(t,"error",this.onerror.bind(this)),pn(t,"close",this.onclose.bind(this)),pn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){$r(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new tu(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Ps={};function Nr(r,t){typeof r=="object"&&(t=r,r=void 0),t=t||{};const e=By(r,t.path||"/socket.io"),n=e.source,i=e.id,s=e.path,o=Ps[i]&&s in Ps[i].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let c;return a?c=new Na(n,t):(Ps[i]||(Ps[i]=new Na(n,t)),c=Ps[i]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(Nr,{Manager:Na,Socket:tu,io:Nr,connect:Nr});var $t=(r=>(r.Blue="blue",r.Red="red",r))($t||{}),Xn=(r=>(r.Green="green",r.Clay="clay",r.Dark="dark",r))(Xn||{}),Re=(r=>(r.Lobby="lobby",r.Kickoff="kickoff",r.Playing="playing",r.GoalScored="goal_scored",r.Halftime="halftime",r.Ended="ended",r))(Re||{}),en=(r=>(r.JoinQueue="join_queue",r.LeaveQueue="leave_queue",r.PlayerInput="player_input",r.Ready="ready",r.RequestMatchInfo="request_match_info",r.ChatMessage="chat_message",r.CreateRoom="create_room",r.JoinRoom="join_room",r.LeaveRoom="leave_room",r.StartRoomGame="start_room_game",r.SwitchPlayer="switch_player",r.StartPractice="start_practice",r.SetTeamMode="set_team_mode",r))(en||{}),Ce=(r=>(r.MatchFound="match_found",r.MatchStateUpdate="match_state_update",r.PlayerJoined="player_joined",r.PlayerLeft="player_left",r.GoalScored="goal_scored",r.MatchEnd="match_end",r.MatchCountdown="match_countdown",r.ChatMessage="chat_message",r.Error="error",r.RoomCreated="room_created",r.RoomJoined="room_joined",r.RoomPlayerJoined="room_player_joined",r.RoomPlayerLeft="room_player_left",r.RoomGameStart="room_game_start",r.RoomError="room_error",r.TeamModeUpdate="team_mode_update",r))(Ce||{});const Gt={LENGTH:100,WIDTH:68,GOAL_WIDTH:7.32,GOAL_HEIGHT:2.44,GOAL_DEPTH:2.5},ze={MAX_SPEED:30,BOOST_SPEED:45,ACCELERATION:30,BOOST_ACCELERATION:45,BRAKE_FORCE:30,STEER_SPEED:4,BOOST_MAX:100,BOOST_DRAIN_RATE:15,BOOST_REGEN_RATE:5},Sn={RADIUS:.5,MASS:2.5,FRICTION:.4};class $y{constructor(){T(this,"socket",null);T(this,"socketId","");T(this,"playerName","");T(this,"onMatchFound",null);T(this,"onStateUpdate",null);T(this,"onGoalScored",null);T(this,"onMatchEnd",null);T(this,"onCountdown",null);T(this,"onPlayerJoined",null);T(this,"onPlayerLeft",null);T(this,"onError",null);T(this,"onChatMessage",null);T(this,"onConnected",null);T(this,"onDisconnected",null);T(this,"onQueueUpdate",null);T(this,"onRoomCreated",null);T(this,"onRoomJoined",null);T(this,"onRoomPlayerJoined",null);T(this,"onRoomPlayerLeft",null);T(this,"onRoomGameStart",null);T(this,"onRoomError",null);T(this,"onSwitchConfirmed",null);T(this,"onTeamModeUpdate",null);T(this,"lastScorerId",null)}connect(t){this.playerName=t;const e=void 0;this.socket=Nr(e,{transports:["websocket","polling"]}),this.socket.on("connect",()=>{var n,i,s;console.log("[Network] Connected:",(n=this.socket)==null?void 0:n.id),this.socketId=((i=this.socket)==null?void 0:i.id)||"",(s=this.onConnected)==null||s.call(this)}),this.socket.on("disconnect",()=>{var n;console.log("[Network] Disconnected"),(n=this.onDisconnected)==null||n.call(this)}),this.socket.on(Ce.MatchFound,n=>{var i;console.log("[Network] Match found:",n.matchId),(i=this.onMatchFound)==null||i.call(this,n)}),this.socket.on(Ce.MatchStateUpdate,n=>{var i;(i=this.onStateUpdate)==null||i.call(this,n)}),this.socket.on(Ce.GoalScored,n=>{var i;console.log("[Network] Goal!",n),this.lastScorerId=n.scorer||null,(i=this.onGoalScored)==null||i.call(this,n)}),this.socket.on(Ce.MatchEnd,n=>{var i;console.log("[Network] Match ended:",n),(i=this.onMatchEnd)==null||i.call(this,n)}),this.socket.on(Ce.MatchCountdown,n=>{var i;(i=this.onCountdown)==null||i.call(this,n)}),this.socket.on(Ce.PlayerJoined,n=>{var i;(i=this.onPlayerJoined)==null||i.call(this,n)}),this.socket.on(Ce.PlayerLeft,n=>{var i;(i=this.onPlayerLeft)==null||i.call(this,n)}),this.socket.on(Ce.ChatMessage,n=>{var i;(i=this.onChatMessage)==null||i.call(this,n)}),this.socket.on(Ce.Error,n=>{var i;console.error("[Network] Error:",n),(i=this.onError)==null||i.call(this,n)}),this.socket.on("queue_size",n=>{var i;(i=this.onQueueUpdate)==null||i.call(this,n)}),this.socket.on(Ce.RoomCreated,n=>{var i;console.log("[Network] Room created:",n.code),(i=this.onRoomCreated)==null||i.call(this,n)}),this.socket.on(Ce.RoomJoined,n=>{var i;console.log("[Network] Room joined:",n.code),(i=this.onRoomJoined)==null||i.call(this,n)}),this.socket.on(Ce.RoomPlayerJoined,n=>{var i;console.log("[Network] Room player joined:",n.name),(i=this.onRoomPlayerJoined)==null||i.call(this,n)}),this.socket.on(Ce.RoomPlayerLeft,n=>{var i;console.log("[Network] Room player left:",n.name),(i=this.onRoomPlayerLeft)==null||i.call(this,n)}),this.socket.on(Ce.RoomGameStart,n=>{var i;console.log("[Network] Room game starting:",n.matchId),(i=this.onRoomGameStart)==null||i.call(this,n)}),this.socket.on(Ce.RoomError,n=>{var i;console.error("[Network] Room error:",n.message),(i=this.onRoomError)==null||i.call(this,n)}),this.socket.on("switch_player_response",n=>{var i;n.success&&(console.log("[Network] Switch confirmed to player:",n.playerId),(i=this.onSwitchConfirmed)==null||i.call(this,n))}),this.socket.on(Ce.TeamModeUpdate,n=>{var i;console.log("[Network] Team mode update:",n.team,n.mode),(i=this.onTeamModeUpdate)==null||i.call(this,n)})}getPing(){var t;return((t=this.socket)==null?void 0:t.ping)??0}sendInput(t){var e;(e=this.socket)==null||e.emit(en.PlayerInput,t)}sendChatMessage(t){var e;(e=this.socket)==null||e.emit(en.ChatMessage,t)}leaveQueue(){var t;(t=this.socket)==null||t.emit(en.LeaveQueue)}requestMatchInfo(){var t;(t=this.socket)==null||t.emit(en.RequestMatchInfo)}createRoom(){var t;(t=this.socket)==null||t.emit(en.CreateRoom,{name:this.playerName})}joinRoom(t){var e;(e=this.socket)==null||e.emit(en.JoinRoom,{code:t.toUpperCase(),name:this.playerName})}leaveRoom(){var t;(t=this.socket)==null||t.emit(en.LeaveRoom)}startRoomGame(){var t;(t=this.socket)==null||t.emit(en.StartRoomGame)}switchPlayer(t){var e;(e=this.socket)==null||e.emit(en.SwitchPlayer,{playerId:t})}startPractice(t){var e;(e=this.socket)==null||e.emit(en.StartPractice,{team:t,name:this.playerName})}sendTeamMode(t){var e;(e=this.socket)==null||e.emit(en.SetTeamMode,{mode:t})}disconnect(){var t;(t=this.socket)==null||t.disconnect(),this.socket=null}}let zl=0;class Ky{constructor(t,e){T(this,"match",null);T(this,"tickInterval",null);T(this,"countdownInterval",null);T(this,"playerName");T(this,"humanPlayerId");T(this,"callbacks");this.playerName=t,this.humanPlayerId=`local_${Date.now()}`,this.callbacks=e}startPractice(t){zl++;const e=`local_practice_${zl}`,n={id:e,state:Re.Kickoff,config:{maxGoals:5,timeLimitSeconds:300,teams:2,playersPerTeam:6},players:new Map,ball:{position:{x:0,y:Sn.RADIUS,z:0},velocity:{x:0,y:0,z:0},lastTouchBy:null},blueScore:0,redScore:0,elapsedSeconds:0,kickoffTimer:3,lastInputs:new Map,lastUpdateTime:Date.now(),goalScoredTimer:0,ended:!1,teamMode:{blue:"normal",red:"normal"}},i=t==="blue"?$t.Blue:$t.Red,s=new Map,o=t==="blue"?0:6;for(let a=0;a<12;a++){let c;if(a===o){const h=s.get(i)||0;s.set(i,h+1);const d=this.getFormationPosition(i,h);c={id:this.humanPlayerId,name:this.playerName,team:i,isAI:!1,bike:{position:d,rotation:{x:0,y:i===$t.Blue?0:Math.PI,z:0},velocity:{x:0,y:0,z:0},angularVelocity:{x:0,y:0,z:0},boost:ze.BOOST_MAX,isGrounded:!0,isBoosting:!1},connected:!0,jerseyNumber:h+1}}else{const h=a<6?$t.Blue:$t.Red,d=a<6?a:a-6,u=`ai_${e}_${a}`,p=`AI_${d+1}`,g=this.getFormationPosition(h,d);c={id:u,name:p,team:h,isAI:!0,bike:{position:g,rotation:{x:0,y:h===$t.Blue?0:Math.PI,z:0},velocity:{x:0,y:0,z:0},angularVelocity:{x:0,y:0,z:0},boost:ze.BOOST_MAX,isGrounded:!0,isBoosting:!1},connected:!1,jerseyNumber:d+1},s.set(h,(s.get(h)||0)+1)}n.players.set(c.id,c)}n.teamMode={blue:i===$t.Blue?"attack":"defence",red:i===$t.Red?"attack":"defence"},this.resetPositions(n),this.match=n,this.callbacks.onMatchFound({matchId:e,config:n.config,teamMode:n.teamMode,playerId:this.humanPlayerId}),this.broadcastState(n),this.startKickoffCountdown(n),this.startTicks()}handleInput(t){this.match&&this.match.lastInputs.set(this.humanPlayerId,t)}sendTeamMode(t){if(!this.match)return;const e=this.match.players.get(this.humanPlayerId);e&&(this.match.teamMode[e.team]=t)}destroy(){this.tickInterval!==null&&(clearInterval(this.tickInterval),this.tickInterval=null),this.countdownInterval!==null&&(clearInterval(this.countdownInterval),this.countdownInterval=null),this.match=null}startTicks(){this.tickInterval=window.setInterval(()=>this.tick(),1e3/30)}startKickoffCountdown(t){t.state=Re.Kickoff,t.kickoffTimer=3,this.broadcastState(t),console.log("[DIAG] Kickoff countdown started, timer=3"),this.countdownInterval=window.setInterval(()=>{if(!this.match){this.clearCountdown();return}t.kickoffTimer--,console.log("[DIAG] Kickoff countdown tick:",t.kickoffTimer),this.callbacks.onCountdown({time:t.kickoffTimer}),t.kickoffTimer<=0&&(this.clearCountdown(),t.state=Re.Playing,console.log("[DIAG] State transitioned to Playing"),this.broadcastState(t))},1e3)}clearCountdown(){this.countdownInterval!==null&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}tick(){const t=this.match;if(!t||t.state!==Re.Playing&&t.state!==Re.Kickoff)return;const e=Date.now(),n=Math.min((e-t.lastUpdateTime)/1e3,.05);if(t.lastUpdateTime=e,t.state===Re.Kickoff&&console.log("[DIAG] tick in Kickoff state (simulatePlayers SKIPPED)"),t.state===Re.Playing){t.elapsedSeconds+=n;const i=t.lastInputs.get(this.humanPlayerId);if(i?console.log("[DIAG] tick humanInput:",JSON.stringify({steer:i.steer,throttle:i.throttle,kick:i.kick,sprint:i.sprint})):console.log("[DIAG] tick NO humanInput stored for",this.humanPlayerId),t.config.timeLimitSeconds&&t.elapsedSeconds>=t.config.timeLimitSeconds){this.endMatch(t);return}this.simulateAI(t,n),this.simulatePlayers(t,n)}this.simulateBall(t,n),this.broadcastState(t)}simulateBall(t,e){const n=t.ball;n.velocity.y-=9.81*e,n.position.x+=n.velocity.x*e,n.position.y+=n.velocity.y*e,n.position.z+=n.velocity.z*e,n.position.y<Sn.RADIUS&&(n.position.y=Sn.RADIUS,n.velocity.y*=-.65,n.velocity.x*=1-Sn.FRICTION*e,n.velocity.z*=1-Sn.FRICTION*e);const i=Gt.LENGTH/2,s=Gt.WIDTH/2,o=Math.abs(n.position.x)>i-Gt.GOAL_DEPTH,a=Math.abs(n.position.z)<Gt.GOAL_WIDTH/2,c=n.position.y<Gt.GOAL_HEIGHT;if(o&&a&&c){const l=n.position.x>0?$t.Red:$t.Blue;this.handleGoal(t,l);return}Math.abs(n.position.x)>i&&(n.position.x=Math.sign(n.position.x)*i,n.velocity.x*=-.65),Math.abs(n.position.z)>s&&(n.position.z=Math.sign(n.position.z)*s,n.velocity.z*=-.65)}handleGoal(t,e){e===$t.Blue?t.blueScore++:t.redScore++,t.state=Re.GoalScored,t.goalScoredTimer=3,this.callbacks.onGoalScored({team:e,blueScore:t.blueScore,redScore:t.redScore,scorer:t.ball.lastTouchBy}),t.config.maxGoals&&(t.blueScore>=t.config.maxGoals||t.redScore>=t.config.maxGoals)?setTimeout(()=>this.endMatch(t),3e3):setTimeout(()=>{this.match&&(this.resetPositions(t),this.startKickoffCountdown(t))},3e3),this.broadcastState(t)}endMatch(t){t.state=Re.Ended,t.ended=!0,this.broadcastState(t),this.callbacks.onMatchEnd({blueScore:t.blueScore,redScore:t.redScore,winner:t.blueScore>t.redScore?$t.Blue:t.redScore>t.blueScore?$t.Red:null})}simulatePlayers(t,e){t.players.forEach(n=>{const i=t.lastInputs.get(n.id);if(!i&&!n.isAI||!i)return;const s=n.bike,a=n.team===$t.Blue?1:-1,c=i.sprint?ze.BOOST_SPEED:ze.MAX_SPEED,l=i.sprint?ze.BOOST_ACCELERATION:ze.ACCELERATION;if(i.throttle!==0){const y=Math.sin(s.rotation.y)*a,P=Math.cos(s.rotation.y)*a;s.velocity.x+=y*l*i.throttle*e,s.velocity.z+=P*l*i.throttle*e}i.throttle<0&&(s.velocity.x*=1-ze.BRAKE_FORCE*e,s.velocity.z*=1-ze.BRAKE_FORCE*e);const h=Math.sqrt(s.velocity.x**2+s.velocity.z**2);if(Math.abs(i.steer)>.1&&h>.5){const y=ze.STEER_SPEED*i.steer*(1+h/ze.MAX_SPEED*.5)*e;s.rotation.y+=y*a,s.angularVelocity.y=y/e}s.isBoosting=i.sprint&&s.boost>0,s.isBoosting?s.boost=Math.max(0,s.boost-ze.BOOST_DRAIN_RATE*e):s.boost=Math.min(ze.BOOST_MAX,s.boost+ze.BOOST_REGEN_RATE*e);const d=2;s.velocity.x*=1-d*e,s.velocity.z*=1-d*e;const u=Math.sqrt(s.velocity.x**2+s.velocity.z**2);if(u>c){const y=c/u;s.velocity.x*=y,s.velocity.z*=y}i.jump&&s.isGrounded&&(s.velocity.y=8,s.isGrounded=!1),s.isGrounded||(s.velocity.y-=15*e),s.position.x+=s.velocity.x*e,s.position.y+=s.velocity.y*e,s.position.z+=s.velocity.z*e,s.position.y<=.5&&(s.position.y=.5,s.velocity.y=0,s.isGrounded=!0,s.angularVelocity.y*=.9);const p=Gt.LENGTH/2-.5,g=Gt.WIDTH/2-.5;if(Math.abs(s.position.x)>p&&(s.position.x=Math.sign(s.position.x)*p,s.velocity.x*=-.3),Math.abs(s.position.z)>g&&(s.position.z=Math.sign(s.position.z)*g,s.velocity.z*=-.3),Math.abs(s.position.x)>Gt.LENGTH/2-Gt.GOAL_DEPTH-.5&&Math.abs(s.position.z)<Gt.GOAL_WIDTH/2+.5&&s.position.y<Gt.GOAL_HEIGHT&&(s.position.x=Math.sign(s.position.x)*(Gt.LENGTH/2-Gt.GOAL_DEPTH-.5),s.velocity.x*=-.3),i.kick){const y=s.position.x-t.ball.position.x,P=s.position.z-t.ball.position.z,A=Math.sqrt(y*y+P*P);if(A<3&&A>0){let C=i.pass?20:35,D,S;if(i.kickDirection){const L=i.kickDirection,H=Math.sqrt(L.x*L.x+L.z*L.z);H>.01?(D=L.x/H,S=L.z/H):(D=0,S=1)}else D=Math.sin(s.rotation.y)*a,S=Math.cos(s.rotation.y)*a;t.ball.velocity.x=D*C,t.ball.velocity.z=S*C,t.ball.velocity.y=3,t.ball.lastTouchBy=n.id;const w=1.2;t.ball.position.x+=D*w,t.ball.position.z+=S*w}}const x=t.ball,m=s.position.x-x.position.x,f=s.position.z-x.position.z,v=Math.sqrt(m*m+f*f),M=1.2;if(v<M&&v>0){const y=M-v,P=m/v*y*.5,A=f/v*y*.5;x.position.x-=P,x.position.z-=A;const C=Math.min(40,u*.8+5);x.velocity.x-=m/v*C,x.velocity.z-=f/v*C,x.velocity.y=Math.abs(s.velocity.y)*.5+2,s.position.x+=P*.3,s.position.z+=A*.3,x.lastTouchBy=n.id}})}simulateAI(t,e){t.players.forEach(n=>{if(!n.isAI)return;const i=this.getAIInput(n,t,t.teamMode[n.team]);t.lastInputs.set(n.id,i)})}getAIInput(t,e,n="normal"){const i=e.ball,s=t.bike.position,o=t.team===$t.Blue,a=this.getAITarget(t,e,n),c=this.distance(s,a),l=this.getPlayerIndex(t,e),h=l===0;let d=0,u=0,p=!1,g=!1,x=!1;if(h){const m=o?-47:Gt.LENGTH/2-3,v=Math.max(-7.32/2+1,Math.min(Gt.GOAL_WIDTH/2-1,i.position.z))-s.z;d=Math.max(-1,Math.min(1,v*.1)),u=Math.abs(s.x-m)>1?Math.sign(m-s.x)*.5:0;const M=this.distance(s,i.position);M<5&&Math.abs(i.position.x-m)<15&&(u=Math.sign(i.position.x-s.x)*.8,p=M>3)}else{const m=Math.atan2(a.z-s.z,a.x-s.x);let f=t.bike.rotation.y;o&&(f=-f);let v=m-f;for(;v>Math.PI;)v-=Math.PI*2;for(;v<-Math.PI;)v+=Math.PI*2;if(d=Math.max(-1,Math.min(1,v*2)),n==="attack")u=1,p=!0;else if(n==="defence"){const M=o?-50:Gt.LENGTH/2,y=this.distance(s,{x:M,y:0,z:0});u=.7,p=y<30&&c<10}else u=.8,p=c>8&&Math.abs(v)<.5;if(c<2.5){const M={x:o?Gt.LENGTH/2-2:-48,z:0},y=Math.atan2(M.z-s.z,M.x-s.x),P=Math.abs(y-f)<.5;n==="defence"?P?(x=!0,u=1):x=!0:P?(u=1,p=!0,x=!0):Math.random()<.3&&(x=!0)}if(n==="attack"){const M=o?-50:Gt.LENGTH/2;this.distance(s,{x:M,y:0,z:0})<15&&c>8&&(u=1,p=!0)}if(n==="defence"&&l>=1&&l<=3){const M=o?-50:Gt.LENGTH/2,y=this.distance(s,{x:M,y:0,z:0});this.distance(i.position,{x:M,y:0,z:0})<40&&y>25&&(u=1,p=!0)}}return Math.random()<.005&&(g=!0),{steer:d,throttle:u,jump:g,sprint:p,kick:x,camera:{yaw:0,pitch:0},sequence:Date.now()}}getAITarget(t,e,n){const i=e.ball;t.bike.position;const s=t.team===$t.Blue,o=this.getPlayerIndex(t,e);if(n==="attack"){const a=s?Gt.LENGTH/2-5:-45;if(o>=4)return{x:Math.max(-100/2+2,Math.min(Gt.LENGTH/2-2,i.position.x*.5+a*.5)),y:0,z:i.position.z};if(o<=3){const c=s?i.position.x+5:i.position.x-5;return{x:Math.max(-100/2+5,Math.min(Gt.LENGTH/2-5,c)),y:0,z:i.position.z*.8}}}if(n==="defence")if(o<=3){const a=s?-42:Gt.LENGTH/2-8,c=(i.position.x+a)/2;return{x:Math.max(-100/2+3,Math.min(Gt.LENGTH/2-3,c)),y:0,z:i.position.z*.6}}else{const a=s?-50:Gt.LENGTH/2,c=i.position.x*.3+a*.7;return{x:Math.max(-100/2+3,Math.min(Gt.LENGTH/2-3,c)),y:0,z:i.position.z*.7}}if(o<=1){const a=s?-45:Gt.LENGTH/2-5,c=(i.position.x+a)/2,l=i.position.z*.5;return{x:Math.max(-100/2+5,Math.min(Gt.LENGTH/2-5,c)),y:0,z:Math.max(-68/2+3,Math.min(Gt.WIDTH/2-3,l))}}else if(o<=3){const a=s?-3:3;return{x:Math.max(-100/2+2,Math.min(Gt.LENGTH/2-2,i.position.x+a)),y:0,z:i.position.z}}else{const a=s?Gt.LENGTH/2-5:-45;return{x:Math.max(-100/2+2,Math.min(Gt.LENGTH/2-2,i.position.x*.7+a*.3)),y:0,z:i.position.z}}}getPlayerIndex(t,e){let n=0;for(const[,i]of e.players)if(i.team===t.team){if(i.id===t.id)return n;n++}return 0}distance(t,e){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2+(t.z-e.z)**2)}getFormationPosition(t,e){const i=t===$t.Blue?1:-1,s=Gt.LENGTH/2-5,o=[[s*i*-.95,0],[s*i*-.6,-12],[s*i*-.6,12],[s*i*-.2,-8],[s*i*-.2,8],[s*i*.3,0]],a=o[e]||o[5];return{x:a[0],y:.5,z:a[1]}}resetPositions(t){let e=0,n=0;t.players.forEach(i=>{if(i.team===$t.Blue){const s=this.getFormationPosition($t.Blue,e);i.bike.position={...s},i.bike.rotation={x:0,y:0,z:0},i.bike.velocity={x:0,y:0,z:0},i.bike.angularVelocity={x:0,y:0,z:0},i.bike.boost=ze.BOOST_MAX,e++}else{const s=this.getFormationPosition($t.Red,n);i.bike.position={...s},i.bike.rotation={x:0,y:Math.PI,z:0},i.bike.velocity={x:0,y:0,z:0},i.bike.angularVelocity={x:0,y:0,z:0},i.bike.boost=ze.BOOST_MAX,n++}}),t.ball={position:{x:0,y:Sn.RADIUS,z:0},velocity:{x:0,y:0,z:0},lastTouchBy:null}}broadcastState(t){const e={};t.players.forEach((n,i)=>{e[i]=n}),this.callbacks.onStateUpdate({id:t.id,state:t.state,players:e,ball:t.ball,blueScore:t.blueScore,redScore:t.redScore,elapsedSeconds:t.elapsedSeconds,kickoffTimer:t.kickoffTimer})}}class Zy{constructor(){T(this,"matchId","");T(this,"state",Re.Lobby);T(this,"players",new Map);T(this,"ball",{position:{x:0,y:.22,z:0},velocity:{x:0,y:0,z:0},lastTouchBy:null});T(this,"blueScore",0);T(this,"redScore",0);T(this,"elapsedSeconds",0);T(this,"kickoffTimer",0);T(this,"currentPlayerId",null);T(this,"myTeam",null);T(this,"myTeamPlayerIds",[])}update(t){this.matchId=t.id||this.matchId,this.state=t.state??this.state,this.blueScore=t.blueScore??this.blueScore,this.redScore=t.redScore??this.redScore,this.elapsedSeconds=t.elapsedSeconds??this.elapsedSeconds,this.kickoffTimer=t.kickoffTimer??this.kickoffTimer,t.players&&(this.players.clear(),Object.entries(t.players).forEach(([e,n])=>{this.players.set(e,n)}),this.refreshMyTeamPlayers()),t.ball&&(this.ball=t.ball)}refreshMyTeamPlayers(){if(!this.myTeam)return;const t=[];this.players.forEach((e,n)=>{e.team===this.myTeam&&t.push({id:n,jersey:e.jerseyNumber})}),t.sort((e,n)=>e.jersey-n.jersey),this.myTeamPlayerIds=t.map(e=>e.id),this.currentPlayerId&&!this.myTeamPlayerIds.includes(this.currentPlayerId)&&(this.currentPlayerId=this.myTeamPlayerIds[0]||null)}setLocalTeam(t){this.myTeam=t,this.refreshMyTeamPlayers(),this.myTeamPlayerIds.length>0&&!this.currentPlayerId&&(this.currentPlayerId=this.myTeamPlayerIds[0])}switchToPlayer(t){return this.myTeamPlayerIds.includes(t)?(this.currentPlayerId=t,!0):!1}getNextPlayerId(){if(!this.currentPlayerId||this.myTeamPlayerIds.length===0)return null;const e=(this.myTeamPlayerIds.indexOf(this.currentPlayerId)+1)%this.myTeamPlayerIds.length;return this.myTeamPlayerIds[e]}getCurrentPlayer(){return this.currentPlayerId?this.players.get(this.currentPlayerId):void 0}getPlayers(){return this.players}getBall(){return this.ball}getLocalPlayer(t){return this.players.get(t)}getTeamPlayers(t){const e=[];return this.players.forEach(n=>{n.team===t&&e.push(n)}),e}}class Gl{constructor(t,e,n,i,s="",o=""){T(this,"mesh");T(this,"body");T(this,"nameLabel");T(this,"scene");T(this,"world");T(this,"team");T(this,"type");T(this,"teamColor");T(this,"shortsColor");T(this,"torso");T(this,"headGroup");T(this,"leftArm");T(this,"rightArm");T(this,"leftLeg");T(this,"rightLeg");T(this,"animPhase",0);T(this,"playerName","");T(this,"playerNumber","");T(this,"isCelebrating",!1);T(this,"celebrateTimer",0);T(this,"celebrateDuration",1.5);T(this,"armRaiseTarget",-1.8);T(this,"speechBubble",null);T(this,"speechBubbleTimer",0);this.scene=t,this.world=e,this.team=n,this.type=i,this.playerName=s||(i==="ai"?"AI":"Player"),this.playerNumber=o||String(Math.floor(Math.random()*99)+1),this.teamColor=n===$t.Blue?58879:15680580,this.shortsColor=n===$t.Blue?21930:9109504,this.mesh=new an,this.torso=this.createBody(),this.headGroup=this.createHead(),this.leftArm=this.createArm(),this.rightArm=this.createArm(),this.leftLeg=this.createLeg(),this.rightLeg=this.createLeg(),this.mesh.add(this.torso),this.mesh.add(this.headGroup),this.mesh.add(this.leftArm),this.mesh.add(this.rightArm),this.mesh.add(this.leftLeg),this.mesh.add(this.rightLeg),this.torso.position.y=.05,this.headGroup.position.set(0,.95,0),this.leftArm.position.set(-.35,.55,0),this.rightArm.position.set(.35,.55,0),this.leftLeg.position.set(-.15,-.2,0),this.rightLeg.position.set(.15,-.2,0),this.nameLabel=this.createNameLabel(),this.scene.add(this.mesh),this.body=new ot({mass:75,shape:new Ex(.3,.3,1.6,8),material:new Li("player")}),this.body.position.set(0,.8,0),this.world.addBody(this.body)}celebrate(){this.isCelebrating=!0,this.celebrateTimer=0,this.body.velocity.y=5,this.createSpeechBubble()}createSpeechBubble(){this.speechBubble&&this.scene.remove(this.speechBubble);const t=document.createElement("canvas");t.width=128,t.height=80;const e=t.getContext("2d");e.fillStyle="rgba(0,0,0,0.85)";const n=40,i=30;e.beginPath(),e.roundRect(64-n,10,n*2,i*2,12),e.fill(),e.fillStyle="#ffffff",e.font="bold 32px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("GOAL!",64,45);const s=new Pr(t),o=new Gr({map:s,transparent:!0,depthTest:!1,sizeAttenuation:!0}),a=new Aa(o);a.scale.set(1.2,.75,1),a.position.set(0,1.1,0),a.renderOrder=1e3,this.mesh.add(a),this.speechBubble=a,this.speechBubbleTimer=0}updateCelebration(t){if(!this.isCelebrating)return;this.celebrateTimer+=t;const e=Math.min(1,this.celebrateTimer/this.celebrateDuration),n=this.armRaiseTarget*Math.min(1,e*3);if(this.leftArm.rotation.x=n,this.rightArm.rotation.x=n,e>=1&&(this.isCelebrating=!1),this.speechBubble){this.speechBubbleTimer+=t;const i=this.speechBubbleTimer*.3;this.speechBubble.position.y=1.1+i;const s=Math.min(1,this.speechBubbleTimer/2);this.speechBubble.material.opacity=1-s,s>=1&&(this.mesh.remove(this.speechBubble),this.speechBubble.material.dispose(),this.speechBubble=null)}}createBody(){const t=new an,e=new se({color:this.teamColor,roughness:.5,metalness:.05}),n=new pt(new Ue(.3,.34,.5,12),e);n.castShadow=!0;const i=document.createElement("canvas");i.width=32,i.height=40;const s=i.getContext("2d");s.fillStyle="rgba(255,255,255,0.9)",s.font="bold 28px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText(this.playerNumber,16,20);const o=new Pr(i),a=new me({map:o,transparent:!0,depthTest:!1,side:Kn}),c=new pt(new Pe(.14,.18),a);c.position.set(0,.08,.32),n.add(c),t.add(n);const l=new se({color:this.shortsColor,roughness:.6,metalness:.05}),h=new pt(new Ue(.34,.28,.24,12),l);return h.position.y=-.34,h.castShadow=!0,t.add(h),t}createHead(){const t=new an,e=new se({color:16764057,roughness:.6}),n=new se({color:5583650,roughness:.9}),i=new se({color:16777215}),s=new se({color:1118481}),o=new pt(new Ue(.08,.09,.08,8),e);o.position.y=-.18,o.castShadow=!0,t.add(o);const a=new pt(new sn(.2,16,12),e);a.castShadow=!0,t.add(a);const c=new pt(new sn(.2,16,12),n);c.position.y=.06,c.scale.set(1.05,.3,1.05),t.add(c);const l=new sn(.035,8,8),h=new sn(.018,8,8),d=new pt(l,i);d.position.set(-.09,.04,.18),t.add(d);const u=new pt(h,s);u.position.set(-.09,.04,.21),t.add(u);const p=new pt(l,i);p.position.set(.09,.04,.18),t.add(p);const g=new pt(h,s);g.position.set(.09,.04,.21),t.add(g);const x=new se({color:15645576,roughness:.6}),m=new pt(new sn(.025,8,8),x);m.position.set(0,-.02,.2),t.add(m);const f=new sn(.03,8,8),v=new pt(f,e);v.position.set(-.2,0,0),v.scale.z=.4,t.add(v);const M=new pt(f,e);return M.position.set(.2,0,0),M.scale.z=.4,t.add(M),t}createArm(){const t=new an,e=new se({color:this.teamColor,roughness:.5,metalness:.05}),n=new pt(new Ue(.07,.08,.16,8),e);n.position.y=-.1,n.castShadow=!0,t.add(n);const i=new se({color:16764057,roughness:.6}),s=new pt(new Ue(.055,.06,.18,8),i);s.position.y=-.28,s.castShadow=!0,t.add(s);const o=new pt(new sn(.045,8,8),i);return o.position.y=-.44,t.add(o),t}createLeg(){const t=new an,e=new se({color:16764057,roughness:.6}),n=new se({color:this.teamColor,roughness:.5,metalness:.05}),i=new se({color:2236962,roughness:.5,metalness:.1}),s=new pt(new Ue(.09,.1,.2,8),e);s.position.y=-.1,s.castShadow=!0,t.add(s);const o=new pt(new Ue(.07,.08,.18,8),n);o.position.y=-.28,o.castShadow=!0,t.add(o);const a=new pt(new Ae(.08,.08,.18),i);return a.position.set(0,-.44,.02),a.castShadow=!0,t.add(a),t}createNameLabel(){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");e.font="bold 24px Arial",e.fillStyle="rgba(0,0,0,0.6)";const n=e.measureText(this.playerName).width+40;e.beginPath(),e.roundRect(128-n/2,8,n,44,22),e.fill(),e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle",e.fillText(this.playerName,128,30);const i=new Pr(t),s=new Gr({map:i,transparent:!0,depthTest:!1,sizeAttenuation:!0}),o=new Aa(s);return o.scale.set(1.5,.4,1),o.position.set(0,1.3,0),o.renderOrder=999,this.mesh.add(o),o}sync(t,e=1/60){this.mesh.position.set(t.position.x,t.position.y,t.position.z),this.mesh.rotation.set(t.rotation.x,t.rotation.y,t.rotation.z),this.body.position.set(t.position.x,t.position.y,t.position.z);const n=Math.sqrt(t.velocity.x**2+t.velocity.z**2),i=Math.min(1,n/35),s=Math.max(i,.1);if(this.isCelebrating?this.updateCelebration(e):i>.05&&(this.animPhase+=i*.15),!this.isCelebrating){const o=Math.sin(this.animPhase);Math.cos(this.animPhase),this.leftArm.rotation.x=o*.6*s,this.rightArm.rotation.x=-o*.6*s,this.leftLeg.rotation.x=o*.55*s,this.rightLeg.rotation.x=-o*.55*s}}remove(){this.scene.remove(this.mesh),this.world.removeBody(this.body)}}class Jy{constructor(t,e){T(this,"mesh");T(this,"body");T(this,"scene");T(this,"world");T(this,"spinSpeed",new z);this.scene=t,this.world=e;const n=this.createSoccerTexture(),i=new sn(Sn.RADIUS,24,24),s=new se({map:n,roughness:.35,metalness:.05});this.mesh=new pt(i,s),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh),this.body=new ot({mass:Sn.MASS,shape:new Sx(Sn.RADIUS),material:new Li("ball")}),this.body.position.set(0,Sn.RADIUS,0),this.body.linearDamping=.1,this.body.angularDamping=.3,this.world.addBody(this.body)}createSoccerTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,512,512);const i=[{x:256,y:256,r:50},{x:100,y:180,r:35},{x:412,y:180,r:35},{x:160,y:380,r:35},{x:352,y:380,r:35},{x:80,y:320,r:30},{x:432,y:320,r:30},{x:200,y:110,r:30},{x:312,y:110,r:30},{x:100,y:460,r:30},{x:412,y:460,r:30},{x:50,y:90,r:25},{x:462,y:90,r:25},{x:256,y:50,r:25},{x:50,y:422,r:25},{x:462,y:422,r:25},{x:256,y:462,r:25}];n.strokeStyle="#cccccc",n.lineWidth=2;for(let o=0;o<i.length;o++)for(let a=o+1;a<i.length;a++){const c=i[o].x-i[a].x,l=i[o].y-i[a].y;Math.sqrt(c*c+l*l)<140&&(n.beginPath(),n.moveTo(i[o].x,i[o].y),n.lineTo(i[a].x,i[a].y),n.stroke())}n.fillStyle="#222222",i.forEach(o=>{this.drawPentagon(n,o.x,o.y,o.r)}),n.fillStyle="#dddddd";for(let o=0;o<40;o++){const a=Math.random()*512,c=Math.random()*512;let l=!1;for(const h of i){const d=a-h.x,u=c-h.y;if(Math.sqrt(d*d+u*u)<h.r+5){l=!0;break}}l||(n.beginPath(),n.arc(a,c,2,0,Math.PI*2),n.fill())}const s=new Pr(e);return s.wrapS=Bs,s.wrapT=Bs,s.repeat.set(1,1),s}drawPentagon(t,e,n,i){t.beginPath();for(let s=0;s<5;s++){const o=s*2*Math.PI/5-Math.PI/2,a=e+i*Math.cos(o),c=n+i*Math.sin(o);s===0?t.moveTo(a,c):t.lineTo(a,c)}t.closePath(),t.fill()}sync(t){Math.sqrt(t.velocity.x**2+t.velocity.z**2),this.spinSpeed.x=t.velocity.z*.5,this.spinSpeed.z=-t.velocity.x*.5,this.mesh.position.set(t.position.x,t.position.y,t.position.z),this.mesh.rotation.x+=this.spinSpeed.x*.02,this.mesh.rotation.z+=this.spinSpeed.z*.02,this.body.position.set(t.position.x,t.position.y,t.position.z),this.body.velocity.set(t.velocity.x,t.velocity.y,t.velocity.z)}remove(){this.scene.remove(this.mesh),this.world.removeBody(this.body)}}class Hl{constructor(t,e,n){T(this,"scene");T(this,"world");T(this,"team");T(this,"group");T(this,"triggerBody");this.scene=t,this.world=e,this.team=n,this.group=new an;const i=n===$t.Blue?-1:1,s=i*(Gt.LENGTH/2+.1),o=Gt.GOAL_WIDTH,a=Gt.GOAL_HEIGHT,c=Gt.GOAL_DEPTH,l=new se({color:16777215,roughness:.2,metalness:.8}),h=.08;for(const f of[-1,1]){const v=new pt(new Ue(h,h,a,8),l);v.position.set(s,a/2,f*o/2),v.castShadow=!0,this.group.add(v)}const d=new pt(new Ue(h,h,o,8),l);d.rotation.z=Math.PI/2,d.position.set(s,a,0),d.castShadow=!0,this.group.add(d);const u=new me({color:16777215,opacity:.12,transparent:!0,side:Be,wireframe:!0}),p=new pt(new Pe(o,a,6,4),u);p.position.set(s-i*c,a/2,0),this.group.add(p);const g=new pt(new Pe(o,c,6,4),u);g.rotation.x=-Math.PI/2,g.position.set(s-i*c/2,a,0),this.group.add(g);for(const f of[-1,1]){const v=new pt(new Pe(c,a,4,4),u);v.rotation.y=Math.PI/2,v.position.set(s-i*c/2,a/2,f*o/2),this.group.add(v)}const x=new me({color:n===$t.Blue?61695:15680580,transparent:!0,opacity:.05,side:Fe}),m=new pt(new Pe(o*.8,a*.8),x);m.position.set(s-i*c*.5,a/2,0),this.group.add(m),this.scene.add(this.group),this.triggerBody=new ot({mass:0,type:ot.STATIC,shape:new li(new _(.1,a/2,o/2))}),this.triggerBody.position.set(s,a/2,0),this.world.addBody(this.triggerBody)}remove(){this.scene.remove(this.group),this.world.removeBody(this.triggerBody)}}class Qy{constructor(t){T(this,"scene");T(this,"fieldGroup");T(this,"stadiumGroup");T(this,"grassMesh",null);T(this,"fieldColor",Xn.Green);this.scene=t,this.fieldGroup=new an,this.stadiumGroup=new an}build(){this.createField(),this.createWalls(),this.createStadiumStructure(),this.createLighting(),this.createCrowd(),this.createEnvironment(),this.scene.add(this.fieldGroup),this.scene.add(this.stadiumGroup)}createField(){const n=new se({color:2984526,roughness:.9,metalness:0}),i=new pt(new Pe(100,68),n);i.rotation.x=-Math.PI/2,i.position.y=.01,i.receiveShadow=!0,this.grassMesh=i,this.fieldGroup.add(i);const s=new me({color:3383381,transparent:!0,opacity:.12,side:Be});for(let p=-5;p<=5;p++){const g=new pt(new Pe(10,68),s);g.rotation.x=-Math.PI/2,g.position.set(p*(100/10),.015,0),Math.abs(p)%2===0&&(g.material=new me({transparent:!0,opacity:0})),this.fieldGroup.add(g)}const o=new me({color:16777215,opacity:.35,transparent:!0}),a=(p,g,x,m,f=0)=>{const v=new Pe(x,m),M=new pt(v,o);M.rotation.x=-Math.PI/2,M.rotation.y=f,M.position.set(p,.02,g),this.fieldGroup.add(M)};a(0,0,100,.08),a(-100/2,0,.08,68,Math.PI/2),a(100/2,0,.08,68,Math.PI/2),a(0,-68/2,100,.08),a(0,68/2,100,.08),a(0,0,.08,68,Math.PI/2);const c=new Us(9.15,9.25,48),l=new me({color:16777215,opacity:.35,transparent:!0,side:Be}),h=new pt(c,l);h.rotation.x=-Math.PI/2,h.position.y=.02,this.fieldGroup.add(h);const d=new pt(new Ns(.3,16),new me({color:16777215,opacity:.5,transparent:!0}));d.rotation.x=-Math.PI/2,d.position.y=.02,this.fieldGroup.add(d);for(const p of[-1,1]){const g=p*41.75;a(g-16.5/2,0,.08,40.3,Math.PI/2),a(g+16.5/2,0,.08,40.3,Math.PI/2),a(g,-40.3/2,16.5,.08),a(g,40.3/2,16.5,.08);const x=p*(100/2-5.5/2);a(x-5.5/2,0,.08,18.3,Math.PI/2),a(x+5.5/2,0,.08,18.3,Math.PI/2),a(x,-18.3/2,5.5,.08),a(x,18.3/2,5.5,.08);const m=new pt(new Ns(.15,12),new me({color:16777215,opacity:.5,transparent:!0}));m.rotation.x=-Math.PI/2,m.position.set(p*(100/2-11),.02,0),this.fieldGroup.add(m)}for(const p of[-1,1])this.createGoal(p);const u=new me({color:16777215,opacity:.3,transparent:!0,side:Be});for(const p of[-1,1])for(const g of[-1,1]){const x=new pt(new Us(1,1.08,24,1,0,Math.PI/2),u);x.rotation.x=-Math.PI/2,x.position.set(p*(100/2),.02,g*(68/2)),x.rotation.z=p*g>0?Math.PI/2:0,this.fieldGroup.add(x)}this.createBoostPads()}createGoal(t){const s=t*51.25,o=new se({color:16777215,roughness:.2,metalness:.8}),a=.08;for(const x of[-1,1]){const m=x*7.32/2,f=new pt(new Ue(a,a,2.44,8),o);f.position.set(s,2.44/2,m),f.castShadow=!0,this.fieldGroup.add(f)}const c=new pt(new Ue(a,a,7.32,8),o);c.rotation.z=Math.PI/2,c.position.set(s,2.44,0),c.castShadow=!0,this.fieldGroup.add(c);const l=new me({color:16777215,opacity:.1,transparent:!0,wireframe:!0,side:Be}),h={w:8,h:6},d=new pt(new Pe(7.32,2.44,h.w,h.h),l);d.position.set(s-t*2.5,2.44/2,0),this.fieldGroup.add(d);const u=new pt(new Pe(7.32,2.5,h.w,4),l);u.rotation.x=-Math.PI/2,u.position.set(s-t*2.5/2,2.44,0),this.fieldGroup.add(u);for(const x of[-1,1]){const m=new pt(new Pe(2.5,2.44,4,h.h),l);m.rotation.y=Math.PI/2,m.position.set(s-t*2.5/2,2.44/2,x*7.32/2),this.fieldGroup.add(m)}const p=new me({color:t<0?2250188:13382434,transparent:!0,opacity:.04,side:Fe}),g=new pt(new Pe(7.32*.7,2.44*.7),p);g.position.set(s-t*2.5*.5,2.44/2,0),this.fieldGroup.add(g)}createBoostPads(){const t=new se({color:16766720,emissive:16746496,emissiveIntensity:.4,roughness:.3,metalness:.1}),e=new me({color:16737792,transparent:!0,opacity:.12}),n=new me({color:16766720,transparent:!0,opacity:.25,side:Be}),i=[{x:0,z:0},{x:0,z:-20},{x:0,z:20},{x:-15,z:-25},{x:-15,z:25},{x:15,z:-25},{x:15,z:25},{x:-30,z:-15},{x:-30,z:15},{x:30,z:-15},{x:30,z:15},{x:-42,z:-10},{x:-42,z:10},{x:42,z:-10},{x:42,z:10},{x:-25,z:-30},{x:-25,z:30},{x:25,z:-30},{x:25,z:30}];for(const s of i){const o=new pt(new Ue(1.1,1.1,.05,16),t);o.position.set(s.x,.03,s.z),o.receiveShadow=!0,this.fieldGroup.add(o);const a=new pt(new Us(1.3,1.7,24),n);a.rotation.x=-Math.PI/2,a.position.set(s.x,.04,s.z),this.fieldGroup.add(a);const c=new pt(new Ns(.7,16),e);c.rotation.x=-Math.PI/2,c.position.set(s.x,.04,s.z),this.fieldGroup.add(c);const l=new me({color:16777215,transparent:!0,opacity:.4});for(const h of["h","v"]){const d=new pt(new Ae(h==="h"?.25:.05,.02,h==="h"?.05:.25),l);d.position.set(s.x,.06,s.z),this.fieldGroup.add(d)}}}createWalls(){const i=new se({color:1714762,roughness:.6,metalness:.3,transparent:!0,opacity:.7});for(const a of[-34,34]){const c=new pt(new Ae(100,5,.15),i);c.position.set(0,5/2,a),c.receiveShadow=!0,this.fieldGroup.add(c)}const s=3.66;for(const a of[-50,50]){for(const l of[-1,1]){const h=34-s,d=new pt(new Ae(.15,5,h),i);d.position.set(a,5/2,l*(s+h/2)),d.receiveShadow=!0,this.fieldGroup.add(d)}const c=new pt(new Ae(.15,5-2.44,s*2),i);c.position.set(a,5-(5-2.44)/2,0),this.fieldGroup.add(c)}new se({color:858922,roughness:.4,metalness:.7});const o=[2250188,13382434,2271812,16755200,8921804,43690];for(let a=0;a<24;a++){const c=a/24*Math.PI*2,l=Math.cos(c)*50*.9,h=Math.sin(c)*34*.9;if(Math.abs(l)<45&&Math.abs(h)<30){const d=new pt(new Ae(2.5,1.2,.08),new se({color:o[a%o.length],roughness:.3,metalness:.6,transparent:!0,opacity:.6}));d.position.set(Math.max(-48,Math.min(48,l)),.7,Math.max(-32,Math.min(32,h))),d.lookAt(0,.7,0),this.fieldGroup.add(d)}}}createStadiumStructure(){const n=new se({color:1710638,roughness:.9,metalness:.1}),i=new se({color:1450302,roughness:.8,metalness:.1}),s=new se({color:996448,roughness:.3,metalness:.6,transparent:!0,opacity:.2}),o=[{y:.5,h:4,offset:2,mat:n},{y:5.5,h:5,offset:5,mat:i},{y:11.5,h:6,offset:8,mat:i}];for(const u of o){for(const p of[-1,1]){const g=new pt(new Ae(104,u.h,u.offset),u.mat);g.position.set(0,u.y+u.h/2,p*(34+u.offset/2+1.5)),g.receiveShadow=!0,this.stadiumGroup.add(g)}for(const p of[-1,1])for(const g of[-1,1]){const x=new pt(new Ae(u.offset+2,u.h,u.offset+2),u.mat);x.position.set(p*(50+(u.offset+2)/2),u.y+u.h/2,g*(34+(u.offset+2)/2+1.5)),x.receiveShadow=!0,this.stadiumGroup.add(x)}for(const p of[-1,1]){const g=new pt(new Ae(108,.2,u.offset+6),s);g.position.set(0,u.y+u.h+.5,p*(34+u.offset/2+4)),this.stadiumGroup.add(g)}}const a=new se({color:657946,roughness:.8,metalness:.3});for(const u of[-1,1]){const p=new pt(new Ae(6,5,4),a);p.position.set(0,2.5,u*38),this.stadiumGroup.add(p);const g=new se({color:3359846,metalness:.7,roughness:.3}),x=new pt(new ja(2,.15,8,12,Math.PI),g);x.position.set(0,4,u*38-u*2),x.rotation.y=Math.PI/2,this.stadiumGroup.add(x)}const c=new se({color:657946,metalness:.6,roughness:.3}),l=new pt(new Ae(10,3,1.5),c);l.position.set(0,20,48),this.stadiumGroup.add(l);const h=new me({color:16746496,transparent:!0,opacity:.3}),d=new pt(new Pe(8,2),h);d.position.set(0,20,48.8),this.stadiumGroup.add(d);for(const u of[-55,55])for(const p of[-39,39])this.createFloodlightTower(u,p)}createFloodlightTower(t,e){const n=new se({color:3355460,roughness:.5,metalness:.7}),i=new pt(new Ue(.25,.4,28,8),n);i.position.set(t,14,e),i.castShadow=!0,this.stadiumGroup.add(i);const s=new pt(new Ae(2.5,.15,.15),n);s.position.set(t,27.5,e),this.stadiumGroup.add(s);const o=new se({color:5592439,roughness:.3,metalness:.8});for(const h of[-1,1]){const d=new pt(new Ae(.4,.3,.6),o);d.position.set(t+h*1,27.5,e),this.stadiumGroup.add(d);const u=new pt(new sn(.3,6,6),new me({color:16777215,transparent:!0,opacity:.2}));u.position.set(t+h*1,27.3,e),this.stadiumGroup.add(u)}const a=new h0(16777215,40,70,Math.PI/5,.6,1.2);a.position.set(t,27,e),a.target.position.set(-t*.2,0,-e*.2),a.castShadow=!0,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,this.stadiumGroup.add(a),this.stadiumGroup.add(a.target);const c=new me({color:4482730,transparent:!0,opacity:.03,side:Be,depthWrite:!1}),l=new pt(new Ya(20,50,8,1,!0),c);l.position.set(t,20,e),l.lookAt(-t*.2,0,-e*.2),this.stadiumGroup.add(l)}createLighting(){const t=new d0(8952251,.6);this.scene.add(t);const e=new fl(16772829,1.2);e.position.set(40,50,30),e.castShadow=!0,e.shadow.mapSize.width=4096,e.shadow.mapSize.height=4096,e.shadow.camera.near=.5,e.shadow.camera.far=150,e.shadow.camera.left=-80,e.shadow.camera.right=80,e.shadow.camera.top=80,e.shadow.camera.bottom=-80,this.scene.add(e);const n=new fl(8947967,.3);n.position.set(-30,20,-20),this.scene.add(n);const i=new c0(8900331,3833156,.4);this.scene.add(i)}setFieldColor(t){if(this.fieldColor=t,!this.grassMesh)return;const e={[Xn.Green]:2984526,[Xn.Clay]:12867642,[Xn.Dark]:1718826};this.grassMesh.material.color.setHex(e[t])}createCrowd(){const i="ontouchstart"in window||navigator.maxTouchPoints>0?150:400;for(let s=0;s<i;s++){const o=Math.floor(Math.random()*4),a=Math.floor(Math.random()*3);let c=0,l=0;const h=92,d=2+a*3;switch(o){case 0:c=(Math.random()-.5)*h,l=36+Math.random()*d;break;case 1:c=(Math.random()-.5)*h,l=-36-Math.random()*d;break;case 2:c=52+Math.random()*d,l=(Math.random()-.5)*60;break;case 3:c=-52-Math.random()*d,l=(Math.random()-.5)*60;break}const u=new Nt,p=o===0||o===2?.05:.6;u.setHSL(p,.3+Math.random()*.4,.15+Math.random()*.25);const g=new Gr({color:u,transparent:!0,opacity:.4+Math.random()*.3}),x=new Aa(g),m=Math.random()*4;x.position.set(c,1+m+a*5+Math.random()*3,l),x.scale.set(.6+Math.random()*.4,.8+Math.random()*.6,1),this.stadiumGroup.add(x)}}createEnvironment(){const e=new Float32Array(9e3),n=new Float32Array(3e3*3);for(let a=0;a<3e3;a++){e[a*3]=(Math.random()-.5)*1200,e[a*3+1]=60+Math.random()*200,e[a*3+2]=(Math.random()-.5)*1200;const c=.3+Math.random()*.7;n[a*3]=c,n[a*3+1]=c,n[a*3+2]=c}const i=new Le;i.setAttribute("position",new ke(e,3)),i.setAttribute("color",new ke(n,3));const s=new Xa({size:.3,vertexColors:!0,transparent:!0,opacity:.7}),o=new Rh(i,s);this.scene.add(o)}}class t_{constructor(){T(this,"container");T(this,"scoreEl");T(this,"timerEl");T(this,"countdownEl");T(this,"goalNotificationEl");T(this,"matchEndEl");T(this,"notificationEl");T(this,"boostFill");T(this,"latencyDot");T(this,"pauseBtn");T(this,"modeBtn");T(this,"notificationTimeout",null);T(this,"isMobile");T(this,"currentMode","attack");T(this,"onPauseQuit",null);T(this,"onModeToggle",null);T(this,"ignoreModeToggle",!1);this.isMobile="ontouchstart"in window||navigator.maxTouchPoints>0,this.container=document.createElement("div"),this.container.id="hud",this.container.style.cssText=`
      position: fixed; inset: 0; pointer-events: none; z-index: 100;
      font-family: 'Segoe UI', system-ui, sans-serif;
    `,this.scoreEl=document.createElement("div"),this.scoreEl.style.cssText=`
      position: absolute; top: ${this.isMobile?"10px":"20px"}; left: 50%; transform: translateX(-50%);
      display: flex; align-items: center; gap: ${this.isMobile?"12px":"20px"};
      background: rgba(0,0,0,0.6); padding: ${this.isMobile?"4px 16px":"8px 28px"}; border-radius: 10px;
      backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.08);
    `,this.scoreEl.innerHTML=`
      <div style="display:flex;align-items:center;gap:6px;">
        <div style="width:8px;height:8px;border-radius:50%;background:#00f0ff;"></div>
        <div style="color:#00f0ff;font-size:${this.isMobile?"1.2rem":"1.8rem"};font-weight:800;">0</div>
      </div>
      <div style="color:rgba(255,255,255,0.25);font-size:${this.isMobile?"0.6rem":"0.75rem"};letter-spacing:1px;">VS</div>
      <div style="display:flex;align-items:center;gap:6px;">
        <div style="color:#ef4444;font-size:${this.isMobile?"1.2rem":"1.8rem"};font-weight:800;">0</div>
        <div style="width:8px;height:8px;border-radius:50%;background:#ef4444;"></div>
      </div>
    `,this.timerEl=document.createElement("div"),this.timerEl.style.cssText=`
      position: absolute; top: ${this.isMobile?"50px":"75px"}; left: 50%; transform: translateX(-50%);
      color: rgba(255,255,255,0.7); font-size: ${this.isMobile?"0.8rem":"1rem"}; font-weight: 600;
      background: rgba(0,0,0,0.4); padding: 2px 14px; border-radius: 6px;
      font-variant-numeric: tabular-nums;
    `,this.timerEl.textContent="5:00";const t=document.createElement("div");t.style.cssText=`
      position: absolute; bottom: ${this.isMobile?"180px":"120px"}; left: ${this.isMobile?"16px":"30px"};
      width: ${this.isMobile?"100px":"140px"}; height: 8px;
      background: rgba(255,255,255,0.08); border-radius: 4px;
      overflow: hidden; border: 1px solid rgba(255,200,0,0.2);
    `,this.boostFill=document.createElement("div"),this.boostFill.style.cssText=`
      width: 100%; height: 100%;
      background: linear-gradient(90deg, #f59e0b, #fbbf24, #10b981);
      border-radius: 4px; transition: width 0.15s;
    `,t.appendChild(this.boostFill);const e=document.createElement("div");e.style.cssText=`
      position: absolute; bottom: ${this.isMobile?"192px":"132px"}; left: ${this.isMobile?"16px":"30px"};
      color: rgba(255,200,0,0.5); font-size: 0.55rem; letter-spacing: 1px;
      text-transform: uppercase;
    `,e.textContent="Boost",this.latencyDot=document.createElement("div"),this.latencyDot.style.cssText=`
      position: absolute; top: ${this.isMobile?"10px":"15px"}; right: ${this.isMobile?"10px":"15px"};
      width: 10px; height: 10px; border-radius: 50%;
      background: #22c55e; box-shadow: 0 0 6px rgba(34,197,94,0.4);
      transition: background 0.3s;
    `,this.pauseBtn=document.createElement("button"),this.pauseBtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="4" x2="6" y2="20"/><line x1="18" y1="4" x2="18" y2="20"/></svg>',this.pauseBtn.style.cssText=`
      position: absolute; top: ${this.isMobile?"8px":"15px"}; left: ${this.isMobile?"8px":"15px"};
      width: 44px; height: 44px; border-radius: 10px;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.6); display: flex; align-items: center; justify-content: center;
      pointer-events: auto; cursor: pointer; z-index: 102;
      -webkit-tap-highlight-color: transparent; outline: none;
    `,this.pauseBtn.addEventListener("click",()=>{var i;(i=this.onPauseQuit)==null||i.call(this)}),this.modeBtn=document.createElement("button"),this.modeBtn.innerHTML="⚔️ ATTACK",this.modeBtn.style.cssText=`
      position: absolute; bottom: ${this.isMobile?"110px":"80px"}; left: 50%; transform: translateX(-50%);
      padding: 8px 20px; border-radius: 20px; border: none;
      background: linear-gradient(135deg, #00f0ff, #0ea5e9);
      color: #fff; font-size: 0.75rem; font-weight: 800; letter-spacing: 1px;
      pointer-events: auto; cursor: pointer; z-index: 102;
      transition: all 0.3s;
      -webkit-tap-highlight-color: transparent; outline: none;
      box-shadow: 0 0 20px rgba(0,240,255,0.3);
    `,this.modeBtn.addEventListener("click",()=>{var i;this.ignoreModeToggle||(this.currentMode=this.currentMode==="attack"?"defence":"attack",this.updateModeButton(),(i=this.onModeToggle)==null||i.call(this,this.currentMode))}),this.countdownEl=document.createElement("div"),this.countdownEl.style.cssText=`
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      font-size: 6rem; font-weight: 900; color: #fff;
      text-shadow: 0 0 40px rgba(255,255,255,0.3);
      opacity: 0; transition: opacity 0.3s;
    `,this.goalNotificationEl=document.createElement("div"),this.goalNotificationEl.style.cssText=`
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      font-size: 4rem; font-weight: 900;
      text-shadow: 0 0 60px rgba(255,255,255,0.5);
      opacity: 0; transition: all 0.5s;
      text-align: center;
    `;const n=document.createElement("div");n.id="goal-flash",n.style.cssText=`
      position: fixed; inset: 0; z-index: 99; pointer-events: none;
      opacity: 0; transition: opacity 0.15s;
    `,document.body.appendChild(n),this.matchEndEl=document.createElement("div"),this.matchEndEl.style.cssText=`
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      opacity: 0; transition: opacity 0.5s;
      text-align: center; pointer-events: none;
    `,this.notificationEl=document.createElement("div"),this.notificationEl.style.cssText=`
      position: absolute; top: 130px; left: 50%; transform: translateX(-50%);
      color: #fff; font-size: 0.85rem; font-weight: 600;
      background: rgba(0,0,0,0.5); padding: 4px 16px; border-radius: 6px;
      opacity: 0; transition: opacity 0.3s;
      pointer-events: none;
    `,this.container.appendChild(this.scoreEl),this.container.appendChild(this.timerEl),this.container.appendChild(t),this.container.appendChild(e),this.container.appendChild(this.latencyDot),this.container.appendChild(this.pauseBtn),this.container.appendChild(this.modeBtn),this.container.appendChild(this.countdownEl),this.container.appendChild(this.goalNotificationEl),this.container.appendChild(this.matchEndEl),this.container.appendChild(this.notificationEl),document.body.appendChild(this.container)}updateScore(t,e){this.scoreEl.innerHTML=`
      <div style="display:flex;align-items:center;gap:6px;">
        <div style="width:8px;height:8px;border-radius:50%;background:#00f0ff;"></div>
        <div style="color:#00f0ff;font-size:1.8rem;font-weight:800;">${t}</div>
      </div>
      <div style="color:rgba(255,255,255,0.25);font-size:0.75rem;letter-spacing:1px;">VS</div>
      <div style="display:flex;align-items:center;gap:6px;">
        <div style="color:#ef4444;font-size:1.8rem;font-weight:800;">${e}</div>
        <div style="width:8px;height:8px;border-radius:50%;background:#ef4444;"></div>
      </div>
    `}updateTimer(t){const e=Math.floor(t/60),n=Math.floor(t%60);this.timerEl.textContent=`${e}:${n.toString().padStart(2,"0")}`}updateBoost(t){const e=Math.max(0,Math.min(100,t));this.boostFill.style.width=`${e}%`}setMode(t){(t==="attack"||t==="defence")&&(this.currentMode=t,this.ignoreModeToggle=!0,this.updateModeButton(),setTimeout(()=>{this.ignoreModeToggle=!1},100))}showModeButton(t){this.modeBtn.style.display=t?"":"none"}updateModeButton(){this.currentMode==="attack"?(this.modeBtn.innerHTML="⚔️ ATTACK",this.modeBtn.style.background="linear-gradient(135deg, #00f0ff, #0ea5e9)",this.modeBtn.style.boxShadow="0 0 20px rgba(0,240,255,0.3)"):(this.modeBtn.innerHTML="🛡️ DEFENCE",this.modeBtn.style.background="linear-gradient(135deg, #f59e0b, #ef4444)",this.modeBtn.style.boxShadow="0 0 20px rgba(239,68,68,0.3)")}updateLatency(t){let e;t<100?e="#22c55e":t<200?e="#eab308":e="#ef4444",this.latencyDot.style.background=e,this.latencyDot.style.boxShadow=`0 0 6px ${e}66`}showCountdown(t){t>0?(this.countdownEl.textContent=t.toString(),this.countdownEl.style.opacity="1",this.countdownEl.style.transform="translate(-50%, -50%) scale(1.2)",setTimeout(()=>{this.countdownEl.style.opacity="0",this.countdownEl.style.transform="translate(-50%, -50%) scale(1)"},800)):(this.countdownEl.textContent="GO!",this.countdownEl.style.color="#00f0ff",this.countdownEl.style.opacity="1",this.countdownEl.style.transform="translate(-50%, -50%) scale(1.5)",setTimeout(()=>{this.countdownEl.style.opacity="0",this.countdownEl.style.transform="translate(-50%, -50%) scale(1)",this.countdownEl.style.color="#fff"},1e3))}showGoalNotification(t,e){const n=t==="blue"?"#00f0ff":"#ef4444",i=t==="blue"?"BLUE":"RED";this.goalNotificationEl.innerHTML=`
      <div style="color:${n}">GOAL!</div>
      <div style="font-size:1.2rem;color:#aaa;margin-top:10px">${i} TEAM</div>
    `,this.goalNotificationEl.style.opacity="1",this.goalNotificationEl.style.transform="translate(-50%, -50%) scale(1.2)";const s=document.getElementById("goal-flash");s&&(s.style.background=n,s.style.opacity="0.15",setTimeout(()=>{s.style.opacity="0"},300)),setTimeout(()=>{this.goalNotificationEl.style.opacity="0",this.goalNotificationEl.style.transform="translate(-50%, -50%) scale(1)"},2500)}showMatchEnd(t){const e=t.winner==="blue"?"BLUE":t.winner==="red"?"RED":null,n=e?`${e} TEAM WINS!`:"DRAW!",i=t.winner==="blue"?"#00f0ff":t.winner==="red"?"#ef4444":"#fff";this.matchEndEl.innerHTML=`
      <div style="background:rgba(0,0,0,0.75);backdrop-filter:blur(12px);border-radius:16px;padding:32px 48px;border:1px solid rgba(255,255,255,0.08);pointer-events:auto;">
        <div style="color:${i};font-size:2.5rem;font-weight:900;margin-bottom:8px;">${n}</div>
        <div style="font-size:2rem;color:rgba(255,255,255,0.6);font-weight:700;font-variant-numeric:tabular-nums;">
          <span style="color:#00f0ff;">${t.blueScore}</span>
          <span style="color:rgba(255,255,255,0.25);margin:0 12px;">-</span>
          <span style="color:#ef4444;">${t.redScore}</span>
        </div>
      </div>
    `,this.matchEndEl.style.opacity="1"}showNotification(t){this.notificationEl.textContent=t,this.notificationEl.style.opacity="1",this.notificationTimeout!==null&&clearTimeout(this.notificationTimeout),this.notificationTimeout=window.setTimeout(()=>{this.notificationEl.style.opacity="0"},1500)}hide(){this.container.style.display="none"}show(){this.container.style.display=""}}const zo="football_auth";function e_(r){return`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="${r}" height="${r}">
    <ellipse cx="100" cy="100" rx="70" ry="80" fill="white"/>
    <polygon points="100,50 128,72 118,106 82,106 72,72" fill="#dc2626" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="100" y1="50" x2="100" y2="12" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="128" y1="72" x2="160" y2="56" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="118" y1="106" x2="148" y2="140" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="82" y1="106" x2="52" y2="140" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="72" y1="72" x2="40" y2="56" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="100" cy="100" rx="68" ry="78" fill="none" stroke="#dc2626" stroke-width="2"/>
  </svg>`}class n_{constructor(){T(this,"container");T(this,"nameInput");T(this,"statusEl");T(this,"guestBtn");T(this,"googleBtnContainer");T(this,"onLogin",null);this.container=document.createElement("div"),this.container.id="login-screen",this.container.style.cssText=`
      position: fixed; inset: 0; z-index: 600;
      display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%);
      font-family: 'Segoe UI', system-ui, sans-serif;
      transition: opacity 0.5s;
    `;const t=document.createElement("div");t.style.cssText="position: absolute; inset: 0; overflow: hidden; pointer-events: none;",t.innerHTML=`
      <div style="position:absolute;top:-200px;left:-200px;width:600px;height:600px;
        background:radial-gradient(circle,rgba(255,255,255,0.06),transparent 70%);border-radius:50%;"></div>
      <div style="position:absolute;bottom:-200px;right:-200px;width:600px;height:600px;
        background:radial-gradient(circle,rgba(255,255,255,0.06),transparent 70%);border-radius:50%;"></div>
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:800px;height:800px;
        background:radial-gradient(circle,rgba(255,255,255,0.03),transparent 60%);border-radius:50%;"></div>
      <div style="position:absolute;top:0;left:0;right:0;bottom:0;
        background-image:
          linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),
          linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px);
        background-size: 60px 60px;"></div>
    `,this.container.appendChild(t);const e=document.createElement("div");e.style.cssText=`
      position: relative; z-index: 1;
      display: flex; flex-direction: column; align-items: center;
      width: min(400px, 92vw);
    `;const n=document.createElement("div");n.style.cssText=`
      margin-bottom: 0.2rem;
      filter: drop-shadow(0 0 50px rgba(255,255,255,0.3));
      animation: pulseGlow 3s ease-in-out infinite;
    `,n.innerHTML=e_("clamp(100px, 25vw, 160px)");const i=document.createElement("h1");i.style.cssText=`
      font-size: clamp(1.8rem, 7vw, 3rem); font-weight: 900; letter-spacing: -1px;
      color: #fff; margin-bottom: 0.1rem; text-align: center;
    `,i.textContent="6x6 FOOTBALL";const s=document.createElement("p");s.style.cssText=`
      font-size: clamp(0.5rem, 2.5vw, 0.75rem); color: rgba(255,255,255,0.5);
      margin-bottom: 2rem; letter-spacing: 5px; text-transform: uppercase;
    `,s.textContent="6v6 Football",this.googleBtnContainer=document.createElement("div"),this.googleBtnContainer.style.cssText="margin-bottom: 12px; width: 100%; display: flex; justify-content: center;";const o=document.createElement("div");o.className="g_id_signin",o.setAttribute("data-type","standard"),o.setAttribute("data-shape","pill"),o.setAttribute("data-theme","filled_black"),o.setAttribute("data-text","signin_with"),o.setAttribute("data-size","large"),o.setAttribute("data-logo_alignment","left"),this.googleBtnContainer.appendChild(o);const a=document.createElement("div");a.style.cssText=`
      display: flex; align-items: center; gap: 12px; width: 100%; margin: 12px 0;
      color: rgba(255,255,255,0.3); font-size: 0.65rem; letter-spacing: 1px;
    `;const c=document.createElement("div");c.style.cssText="flex:1; height:1px; background: rgba(255,255,255,0.1);";const l=document.createElement("span");l.textContent="OR";const h=document.createElement("div");h.style.cssText="flex:1; height:1px; background: rgba(255,255,255,0.1);",a.appendChild(c),a.appendChild(l),a.appendChild(h);const d=document.createElement("div");d.style.cssText="color: rgba(255,255,255,0.4); font-size: 0.7rem; letter-spacing: 1px; margin-bottom: 6px; text-transform: uppercase;",d.textContent="Play as Guest",this.nameInput=document.createElement("input"),this.nameInput.type="text",this.nameInput.placeholder="Enter your name",this.nameInput.maxLength=16,this.nameInput.style.cssText=`
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.2);
      color: #fff; padding: 10px 20px; font-size: 0.9rem; border-radius: 8px;
      outline: none; width: 100%; text-align: center; box-sizing: border-box;
      transition: border-color 0.3s;
    `,this.nameInput.addEventListener("focus",()=>this.nameInput.style.borderColor="#fff"),this.nameInput.addEventListener("blur",()=>this.nameInput.style.borderColor="rgba(255,255,255,0.2)");const u=["Striker","Blaze","Phantom","Nitro","Vortex","Fury","Shadow","Thunder","Ace","Bolt"];this.nameInput.value=u[Math.floor(Math.random()*u.length)]+Math.floor(Math.random()*100),this.guestBtn=document.createElement("button"),this.guestBtn.textContent="PLAY AS GUEST",this.guestBtn.style.cssText=`
      background: rgba(255,255,255,0.12); border: 2px solid rgba(255,255,255,0.3);
      color: #fff; padding: 11px 24px; font-size: 0.85rem;
      font-weight: 700; border-radius: 8px; cursor: pointer;
      transition: all 0.3s; letter-spacing: 1px; width: 100%;
      margin-top: 8px;
      backdrop-filter: blur(4px);
    `,this.guestBtn.addEventListener("mouseenter",()=>{this.guestBtn.style.background="rgba(255,255,255,0.2)"}),this.guestBtn.addEventListener("mouseleave",()=>{this.guestBtn.style.background="rgba(255,255,255,0.12)"}),this.guestBtn.addEventListener("click",()=>{var x;const g=this.nameInput.value.trim()||"Player";(x=this.onLogin)==null||x.call(this,{name:g,photo:"",method:"guest"})}),this.statusEl=document.createElement("div"),this.statusEl.style.cssText="margin-top: 12px; color: rgba(255,255,255,0.5); font-size: 0.75rem; height: 1.2em;",e.appendChild(n),e.appendChild(i),e.appendChild(s),e.appendChild(this.googleBtnContainer),e.appendChild(a),e.appendChild(d),e.appendChild(this.nameInput),e.appendChild(this.guestBtn),e.appendChild(this.statusEl),this.container.appendChild(e);const p=document.createElement("style");p.textContent=`
      @keyframes pulseGlow {
        0%, 100% { filter: drop-shadow(0 0 40px rgba(255,255,255,0.2)); }
        50% { filter: drop-shadow(0 0 60px rgba(255,255,255,0.4)); }
      }
    `,document.head.appendChild(p),document.body.appendChild(this.container)}setStatus(t){this.statusEl.textContent=t}show(){this.container.style.display="flex",this.container.style.opacity="1"}hide(){this.container.style.opacity="0",setTimeout(()=>{this.container.style.display="none"},500)}destroy(){this.container.remove()}}function Vl(r){return`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="${r}" height="${r}">
    <ellipse cx="100" cy="100" rx="70" ry="80" fill="white"/>
    <polygon points="100,50 128,72 118,106 82,106 72,72" fill="#dc2626" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="100" y1="50" x2="100" y2="12" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="128" y1="72" x2="160" y2="56" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="118" y1="106" x2="148" y2="140" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="82" y1="106" x2="52" y2="140" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="72" y1="72" x2="40" y2="56" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="100" cy="100" rx="68" ry="78" fill="none" stroke="#dc2626" stroke-width="2"/>
  </svg>`}class i_{constructor(){T(this,"container");T(this,"userPhotoEl");T(this,"userNameEl");T(this,"colorSwatches");T(this,"colorSection");T(this,"selectedColor",Xn.Green);T(this,"mainCards");T(this,"teamModal");T(this,"onCreateRoom",null);T(this,"onPractice",null);T(this,"onSettings",null);T(this,"onGuide",null);T(this,"onExit",null);T(this,"onColorChange",null);this.container=document.createElement("div"),this.container.id="dashboard-screen",this.container.style.cssText=`
      position: fixed; inset: 0; z-index: 550;
      display: none; flex-direction: column;
      background: linear-gradient(135deg, #05050a 0%, #0d0d2b 100%);
      font-family: 'Segoe UI', system-ui, sans-serif;
      padding: max(20px, env(safe-area-inset-top, 0px) + 10px)
               max(16px, env(safe-area-inset-right, 0px))
               max(20px, env(safe-area-inset-bottom, 0px))
               max(16px, env(safe-area-inset-left, 0px));
      transition: opacity 0.3s;
      overflow-y: auto;
    `;const t=document.createElement("div");t.style.cssText="position: absolute; inset: 0; overflow: hidden; pointer-events: none;",t.innerHTML=`
      <div style="position:absolute;top:-300px;right:-200px;width:500px;height:500px;
        background:radial-gradient(circle,rgba(0,240,255,0.06),transparent 70%);border-radius:50%;"></div>
      <div style="position:absolute;bottom:-200px;left:-200px;width:500px;height:500px;
        background:radial-gradient(circle,rgba(139,92,246,0.06),transparent 70%);border-radius:50%;"></div>
    `,this.container.appendChild(t);const e=document.createElement("div");e.style.cssText=`
      position: relative; z-index: 1;
      display: flex; align-items: center; gap: 12px;
      padding: 16px 0 20px;
    `,this.userPhotoEl=document.createElement("div"),this.userPhotoEl.style.cssText=`
      width: 44px; height: 44px; border-radius: 50%;
      background: linear-gradient(135deg, #dc2626, #991b1b);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; overflow: hidden;
    `,this.userPhotoEl.innerHTML=Vl("30px");const n=document.createElement("div");n.style.cssText="flex: 1; min-width: 0;",this.userNameEl=document.createElement("div"),this.userNameEl.style.cssText=`
      font-size: 1.2rem; font-weight: 700; color: #fff;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    `,this.userNameEl.textContent="Player";const i=document.createElement("div");i.style.cssText="color: rgba(0,240,255,0.4); font-size: 0.65rem; letter-spacing: 1px; text-transform: uppercase;",i.textContent="Ready to play",n.appendChild(this.userNameEl),n.appendChild(i),e.appendChild(this.userPhotoEl),e.appendChild(n),this.container.appendChild(e),this.mainCards=document.createElement("div"),this.mainCards.style.cssText=`
      position: relative; z-index: 1;
      display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
      flex: 1;
    `,[{icon:"🏠",label:"Create Room",accent:"#00f0ff",action:()=>{var m;return(m=this.onCreateRoom)==null?void 0:m.call(this)}},{icon:"🎨",label:"Ground Color",accent:"#8b5cf6",action:()=>this.toggleColorPicker()},{icon:"⚙️",label:"Settings",accent:"#fbbf24",action:()=>{var m;return(m=this.onSettings)==null?void 0:m.call(this)}},{icon:"📖",label:"Guide",accent:"#22c55e",action:()=>{var m;return(m=this.onGuide)==null?void 0:m.call(this)}}].forEach(m=>{const f=document.createElement("div");f.style.cssText=`
        background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
        border-radius: 20px; padding: 24px 16px;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        gap: 12px; cursor: pointer; transition: all 0.3s;
        backdrop-filter: blur(12px); min-height: 140px;
        -webkit-tap-highlight-color: transparent;
      `,f.addEventListener("mouseenter",()=>{f.style.borderColor=m.accent,f.style.background="rgba(255,255,255,0.04)"}),f.addEventListener("mouseleave",()=>{f.style.borderColor="rgba(255,255,255,0.06)",f.style.background="rgba(255,255,255,0.02)"}),f.addEventListener("click",m.action);const v=document.createElement("div");v.style.cssText="font-size: 2rem;",v.textContent=m.icon;const M=document.createElement("div");M.style.cssText=`
        font-size: 0.8rem; font-weight: 700; color: ${m.accent};
        letter-spacing: 1px; text-align: center;
      `,M.textContent=m.label,f.appendChild(v),f.appendChild(M),this.mainCards.appendChild(f)}),this.container.appendChild(this.mainCards);const o=document.createElement("button");o.innerHTML="⚡ Practice vs AI",o.style.cssText=`
      position: relative; z-index: 1;
      background: linear-gradient(135deg, #f59e0b, #ef4444);
      color: #fff; border: none; padding: 16px 24px; margin-top: 12px;
      font-size: 1rem; font-weight: 800; border-radius: 16px;
      letter-spacing: 1px; cursor: pointer; transition: all 0.3s;
      width: 100%; text-align: center;
      -webkit-tap-highlight-color: transparent;
    `,o.addEventListener("mouseenter",()=>{o.style.transform="scale(1.02)",o.style.boxShadow="0 0 30px rgba(239,68,68,0.3)"}),o.addEventListener("mouseleave",()=>{o.style.transform="",o.style.boxShadow=""}),o.addEventListener("click",()=>this.showTeamModal()),this.container.appendChild(o),this.teamModal=document.createElement("div"),this.teamModal.style.cssText=`
      position: fixed; inset: 0; z-index: 700;
      display: none; align-items: center; justify-content: center;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(8px);
      font-family: 'Segoe UI', system-ui, sans-serif;
    `;const a=document.createElement("div");a.style.cssText=`
      background: linear-gradient(135deg, #05050a 0%, #0d0d2b 100%);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px; padding: 32px; width: min(340px, 88vw);
      text-align: center;
    `;const c=document.createElement("div");c.style.cssText=`
      font-size: 1.3rem; font-weight: 900; margin-bottom: 4px;
      background: linear-gradient(135deg, #f59e0b, #ef4444);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    `,c.textContent="Choose Your Team";const l=document.createElement("div");l.style.cssText="color: rgba(255,255,255,0.3); font-size: 0.75rem; margin-bottom: 24px; letter-spacing: 1px;",l.textContent="Practice against 11 AI opponents";const h=document.createElement("div");h.style.cssText="display: flex; gap: 12px;";const d=document.createElement("button");d.innerHTML="🔵 BLUE",d.style.cssText=`
      flex: 1; padding: 18px 0; border-radius: 14px; border: none;
      background: linear-gradient(135deg, #00f0ff, #0ea5e9);
      color: #fff; font-size: 1rem; font-weight: 800; letter-spacing: 2px;
      cursor: pointer; transition: all 0.2s;
      -webkit-tap-highlight-color: transparent;
    `,d.addEventListener("mouseenter",()=>{d.style.transform="scale(1.05)"}),d.addEventListener("mouseleave",()=>{d.style.transform=""}),d.addEventListener("click",()=>{var m;this.hideTeamModal(),(m=this.onPractice)==null||m.call(this,"blue")});const u=document.createElement("button");u.innerHTML="🔴 RED",u.style.cssText=`
      flex: 1; padding: 18px 0; border-radius: 14px; border: none;
      background: linear-gradient(135deg, #ef4444, #dc2626);
      color: #fff; font-size: 1rem; font-weight: 800; letter-spacing: 2px;
      cursor: pointer; transition: all 0.2s;
      -webkit-tap-highlight-color: transparent;
    `,u.addEventListener("mouseenter",()=>{u.style.transform="scale(1.05)"}),u.addEventListener("mouseleave",()=>{u.style.transform=""}),u.addEventListener("click",()=>{var m;this.hideTeamModal(),(m=this.onPractice)==null||m.call(this,"red")}),this.teamModal.addEventListener("click",m=>{m.target===this.teamModal&&this.hideTeamModal()}),h.appendChild(d),h.appendChild(u),a.appendChild(c),a.appendChild(l),a.appendChild(h),this.teamModal.appendChild(a),this.container.appendChild(this.teamModal),this.colorSection=document.createElement("div"),this.colorSection.style.cssText=`
      position: relative; z-index: 1;
      display: none; flex-direction: column; align-items: center;
      margin-top: 12px; padding: 16px;
      background: rgba(255,255,255,0.02); border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.06);
    `;const p=document.createElement("div");p.style.cssText="color: rgba(255,255,255,0.4); font-size: 0.65rem; letter-spacing: 1px; margin-bottom: 10px; text-transform: uppercase;",p.textContent="Select Pitch Color",this.colorSwatches=document.createElement("div"),this.colorSwatches.style.cssText="display: flex; gap: 14px; justify-content: center;";const g=[{key:Xn.Green,bg:"linear-gradient(135deg, #1a8a3a, #2a9a4a)",label:"Green"},{key:Xn.Clay,bg:"linear-gradient(135deg, #c47a3a, #d48a4a)",label:"Clay"},{key:Xn.Dark,bg:"linear-gradient(135deg, #1a1a2e, #2a2a3e)",label:"Dark"}];g.forEach(m=>{const f=document.createElement("button"),v=m.key===this.selectedColor;f.style.cssText=`
        width: 48px; height: 48px; border-radius: 50%;
        background: ${m.bg}; border: 2px solid ${v?"#00f0ff":"rgba(255,255,255,0.1)"};
        cursor: pointer; transition: all 0.2s; outline: none;
        box-shadow: ${v?"0 0 16px rgba(0,240,255,0.3)":"none"};
        -webkit-tap-highlight-color: transparent;
      `,f.title=m.label,f.addEventListener("click",()=>{var M;this.selectedColor=m.key,this.updateSwatches(g),(M=this.onColorChange)==null||M.call(this,m.key)}),this.colorSwatches.appendChild(f)}),this.colorSection.appendChild(p),this.colorSection.appendChild(this.colorSwatches),this.container.appendChild(this.colorSection);const x=document.createElement("button");x.textContent="🚪 EXIT",x.style.cssText=`
      position: fixed;
      bottom: max(20px, env(safe-area-inset-bottom, 0px) + 10px);
      right: max(16px, env(safe-area-inset-right, 0px) + 10px);
      z-index: 2;
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.5); padding: 10px 20px; font-size: 0.8rem;
      font-weight: 600; border-radius: 10px; cursor: pointer;
      transition: all 0.2s; letter-spacing: 1px;
      backdrop-filter: blur(8px);
      -webkit-tap-highlight-color: transparent;
    `,x.addEventListener("mouseenter",()=>{x.style.background="rgba(239,68,68,0.15)",x.style.borderColor="#ef4444",x.style.color="#ef4444"}),x.addEventListener("mouseleave",()=>{x.style.background="rgba(255,255,255,0.05)",x.style.borderColor="rgba(255,255,255,0.1)",x.style.color="rgba(255,255,255,0.5)"}),x.addEventListener("click",()=>{var m;return(m=this.onExit)==null?void 0:m.call(this)}),this.container.appendChild(x),document.body.appendChild(this.container)}updateSwatches(t){this.colorSwatches.querySelectorAll("button").forEach((n,i)=>{const s=n,o=t[i].key===this.selectedColor;s.style.borderColor=o?"#00f0ff":"rgba(255,255,255,0.1)",s.style.boxShadow=o?"0 0 16px rgba(0,240,255,0.3)":"none"})}toggleColorPicker(){const t=this.colorSection.style.display==="none";this.colorSection.style.display=t?"flex":"none"}setColor(t){this.selectedColor=t}showTeamModal(){this.teamModal.style.display="flex"}hideTeamModal(){this.teamModal.style.display="none"}setUser(t,e){this.userNameEl.textContent=t,e?(this.userPhotoEl.style.background="transparent",this.userPhotoEl.innerHTML=`<img src="${e}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" />`):(this.userPhotoEl.style.background="linear-gradient(135deg, #dc2626, #991b1b)",this.userPhotoEl.innerHTML=Vl("30px"))}show(){this.container.style.display="flex",this.container.style.opacity="1"}hide(){this.container.style.opacity="0",setTimeout(()=>{this.container.style.display="none"},300)}}const eu="football_settings";function Wl(){try{const r=localStorage.getItem(eu);if(r)return JSON.parse(r)}catch{}return{sound:80,brightness:0,joystick:{joystickX:0,joystickY:0,actionX:0,actionY:0}}}function s_(r){localStorage.setItem(eu,JSON.stringify(r))}class r_{constructor(){T(this,"container");T(this,"soundSlider");T(this,"brightnessSlider");T(this,"joystickXSlider");T(this,"joystickYSlider");T(this,"actionXSlider");T(this,"actionYSlider");T(this,"soundVal");T(this,"brightnessVal");T(this,"jxVal");T(this,"jyVal");T(this,"axVal");T(this,"ayVal");T(this,"brightnessOverlay");T(this,"data");T(this,"onBack",null);T(this,"onSoundChange",null);T(this,"onBrightnessChange",null);T(this,"onJoystickChange",null);this.data=Wl(),this.brightnessOverlay=document.createElement("div"),this.brightnessOverlay.id="brightness-overlay",this.brightnessOverlay.style.cssText=`
      position: fixed; inset: 0; z-index: 50; pointer-events: none;
      background: rgba(0,0,0,${this.data.brightness/100*.5});
      transition: background 0.2s;
    `,document.getElementById("brightness-overlay")||document.body.appendChild(this.brightnessOverlay),this.container=document.createElement("div"),this.container.id="settings-screen",this.container.style.cssText=`
      position: fixed; inset: 0; z-index: 560;
      display: none; flex-direction: column;
      background: rgba(5,5,10,0.97);
      font-family: 'Segoe UI', system-ui, sans-serif;
      padding: max(20px, env(safe-area-inset-top, 0px) + 10px)
               max(16px, env(safe-area-inset-right, 0px))
               max(20px, env(safe-area-inset-bottom, 0px))
               max(16px, env(safe-area-inset-left, 0px));
      overflow-y: auto;
    `;const t=document.createElement("div");t.style.cssText="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;";const e=document.createElement("button");e.textContent="← BACK",e.style.cssText=`
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.6); padding: 8px 16px; font-size: 0.75rem;
      font-weight: 600; border-radius: 8px; cursor: pointer; transition: all 0.2s;
      letter-spacing: 1px;
    `,e.addEventListener("click",()=>{var h;this.saveCurrent(),(h=this.onBack)==null||h.call(this)});const n=document.createElement("h2");n.style.cssText=`
      font-size: 1.3rem; font-weight: 900;
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    `,n.textContent="Settings",t.appendChild(e),t.appendChild(n),this.container.appendChild(t);const i=(h,d)=>{const u=document.createElement("div");u.style.cssText=`
        background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
        border-radius: 16px; padding: 20px; margin-bottom: 16px;
      `;const p=document.createElement("div");return p.style.cssText=`
        font-size: 0.8rem; font-weight: 700; color: #fbbf24; margin-bottom: 16px;
        letter-spacing: 1px;
      `,p.textContent=`${h} ${d}`,u.appendChild(p),this.container.appendChild(u),u},s=(h,d,u,p,g)=>{const x=document.createElement("div");x.style.cssText="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;";const m=document.createElement("div");m.style.cssText="color: rgba(255,255,255,0.5); font-size: 0.75rem; min-width: 90px;",m.textContent=d;const f=document.createElement("input");return f.type="range",f.min="0",f.max="100",f.value=String(u),f.style.cssText=`
        flex: 1; height: 4px; -webkit-appearance: none; appearance: none;
        background: linear-gradient(90deg, #fbbf24, #f59e0b);
        border-radius: 2px; outline: none;
      `,f.addEventListener("input",()=>{const v=parseInt(f.value);g.textContent=String(v),p(v)}),g||(g=document.createElement("span")),g.style.cssText="color: rgba(255,255,255,0.3); font-size: 0.75rem; min-width: 28px; text-align: right;",g.textContent=String(u),x.appendChild(m),x.appendChild(f),x.appendChild(g),h.appendChild(x),f},o=i("🔊","Sound");this.soundVal=document.createElement("span"),this.soundSlider=s(o,"Volume",this.data.sound,h=>{var d;this.data.sound=h,(d=this.onSoundChange)==null||d.call(this,h)},this.soundVal),this.soundVal.textContent=String(this.data.sound);const a=i("☀️","Brightness");this.brightnessVal=document.createElement("span"),this.brightnessSlider=s(a,"Darken",this.data.brightness,h=>{var d;this.data.brightness=h,this.brightnessOverlay.style.background=`rgba(0,0,0,${h/100*.5})`,(d=this.onBrightnessChange)==null||d.call(this,h)},this.brightnessVal),this.brightnessVal.textContent=String(this.data.brightness);const c=i("🕹️","Joystick Position"),l=document.createElement("div");l.style.cssText="color: rgba(255,255,255,0.2); font-size: 0.65rem; margin-bottom: 12px;",l.textContent="Adjust joystick and button positions on screen",c.appendChild(l),this.jxVal=document.createElement("span"),this.jyVal=document.createElement("span"),this.axVal=document.createElement("span"),this.ayVal=document.createElement("span"),this.joystickXSlider=s(c,"Joy X",this.data.joystick.joystickX,h=>{this.data.joystick.joystickX=h,this.syncJoystick()},this.jxVal),this.jxVal.textContent=String(this.data.joystick.joystickX),this.joystickYSlider=s(c,"Joy Y",this.data.joystick.joystickY,h=>{this.data.joystick.joystickY=h,this.syncJoystick()},this.jyVal),this.jyVal.textContent=String(this.data.joystick.joystickY),this.actionXSlider=s(c,"Btns X",this.data.joystick.actionX,h=>{this.data.joystick.actionX=h,this.syncJoystick()},this.axVal),this.axVal.textContent=String(this.data.joystick.actionX),this.actionYSlider=s(c,"Btns Y",this.data.joystick.actionY,h=>{this.data.joystick.actionY=h,this.syncJoystick()},this.ayVal),this.ayVal.textContent=String(this.data.joystick.actionY),document.body.appendChild(this.container)}syncJoystick(){var t;(t=this.onJoystickChange)==null||t.call(this,this.data.joystick)}saveCurrent(){s_(this.data)}show(){this.data=Wl(),this.soundSlider.value=String(this.data.sound),this.soundVal.textContent=String(this.data.sound),this.brightnessSlider.value=String(this.data.brightness),this.brightnessVal.textContent=String(this.data.brightness),this.joystickXSlider.value=String(this.data.joystick.joystickX),this.jxVal.textContent=String(this.data.joystick.joystickX),this.joystickYSlider.value=String(this.data.joystick.joystickY),this.jyVal.textContent=String(this.data.joystick.joystickY),this.actionXSlider.value=String(this.data.joystick.actionX),this.axVal.textContent=String(this.data.joystick.actionX),this.actionYSlider.value=String(this.data.joystick.actionY),this.ayVal.textContent=String(this.data.joystick.actionY),this.brightnessOverlay.style.display="",this.container.style.display="flex"}hide(){this.saveCurrent(),this.brightnessOverlay.style.display="none",this.container.style.display="none"}}class o_{constructor(){T(this,"container");T(this,"codeEl");T(this,"playersEl");T(this,"startBtn");T(this,"leaveBtn");T(this,"statusEl");T(this,"isHost",!1);T(this,"roomCode","");T(this,"onStart",null);T(this,"onLeave",null);this.container=document.createElement("div"),this.container.id="game-screen",this.container.style.cssText=`
      position: fixed; inset: 0; z-index: 400;
      display: none; flex-direction: column; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #05050a 0%, #0d0d2b 100%);
      font-family: 'Segoe UI', system-ui, sans-serif;
    `;const t=document.createElement("div");t.style.cssText=`
      background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 20px; padding: 40px; width: min(380px, 90vw);
      backdrop-filter: blur(12px); text-align: center;
    `;const e=document.createElement("h2");e.style.cssText="font-size: 1.2rem; color: rgba(255,255,255,0.5); margin-bottom: 4px; letter-spacing: 2px; text-transform: uppercase;",e.textContent="Room Lobby";const n=document.createElement("div");n.style.cssText="color: rgba(255,255,255,0.3); font-size: 0.75rem; margin-top: 16px; margin-bottom: 8px;",n.textContent="Share this code:",this.codeEl=document.createElement("div"),this.codeEl.style.cssText=`
      font-size: 2.5rem; font-weight: 900; letter-spacing: 8px;
      background: linear-gradient(135deg, #00f0ff, #8b5cf6);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      padding: 12px 0; cursor: pointer; user-select: all;
    `;const i=document.createElement("div");i.style.cssText="color: rgba(255,255,255,0.2); font-size: 0.65rem; margin-bottom: 16px;",i.textContent="Tap to copy",this.codeEl.addEventListener("click",()=>{navigator.clipboard.writeText(this.roomCode).catch(()=>{}),i.textContent="Copied!",i.style.color="#00f0ff",setTimeout(()=>{i.textContent="Tap to copy",i.style.color="rgba(255,255,255,0.2)"},1500)});const s=document.createElement("div");s.style.cssText="height: 1px; background: rgba(255,255,255,0.06); margin: 16px 0;";const o=document.createElement("div");o.style.cssText="color: rgba(255,255,255,0.3); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;",o.textContent="Players",this.playersEl=document.createElement("div"),this.playersEl.style.cssText=`
      display: flex; flex-direction: column; gap: 8px; padding: 12px 0;
    `,this.statusEl=document.createElement("div"),this.statusEl.style.cssText=`
      color: rgba(255,255,255,0.2); font-size: 0.8rem; padding: 8px 0;
    `,this.statusEl.textContent="Waiting for players...";const a=document.createElement("div");a.style.cssText="display: flex; gap: 12px; margin-top: 16px; justify-content: center;",this.startBtn=document.createElement("button"),this.startBtn.textContent="START GAME",this.startBtn.style.cssText=`
      background: linear-gradient(135deg, #00f0ff, #8b5cf6);
      color: #fff; border: none; padding: 12px 32px; font-size: 0.95rem;
      font-weight: 700; border-radius: 8px; cursor: pointer;
      transition: all 0.3s; letter-spacing: 1px; flex: 1;
    `,this.startBtn.addEventListener("click",()=>{var c;return(c=this.onStart)==null?void 0:c.call(this)}),this.leaveBtn=document.createElement("button"),this.leaveBtn.textContent="LEAVE",this.leaveBtn.style.cssText=`
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.5); padding: 12px 24px; font-size: 0.85rem;
      font-weight: 600; border-radius: 8px; cursor: pointer; transition: all 0.2s;
    `,this.leaveBtn.addEventListener("click",()=>{var c;return(c=this.onLeave)==null?void 0:c.call(this)}),a.appendChild(this.startBtn),a.appendChild(this.leaveBtn),t.appendChild(e),t.appendChild(n),t.appendChild(this.codeEl),t.appendChild(i),t.appendChild(s),t.appendChild(o),t.appendChild(this.playersEl),t.appendChild(this.statusEl),t.appendChild(a),this.container.appendChild(t),document.body.appendChild(this.container)}show(t,e,n){this.roomCode=t,this.isHost=e,this.codeEl.textContent=t,this.startBtn.style.display=e?"":"none",this.updatePlayers(n),e?(this.startBtn.disabled=n.length<2,this.startBtn.style.opacity=n.length<2?"0.4":"1",this.statusEl.textContent=n.length<2?"Waiting for opponent...":"Ready! Press START"):this.statusEl.textContent="Joined! Waiting for host to start...",this.container.style.display="flex"}updatePlayers(t){this.playersEl.innerHTML="",t.forEach((e,n)=>{const i=document.createElement("div"),s=n===0?"#00f0ff":"#ef4444",o=this.isHost?n===0:n===1;i.style.cssText=`
        display: flex; align-items: center; gap: 10px; padding: 8px 12px;
        background: rgba(255,255,255,0.03); border-radius: 8px;
        border-left: 3px solid ${s};
      `,i.innerHTML=`
        <div style="width:24px;height:24px;border-radius:50%;background:${s};display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;color:#fff;">
          ${n===0?"B":"R"}
        </div>
        <div style="flex:1;text-align:left;color:rgba(255,255,255,0.8);font-size:0.85rem;">
          ${e.name} ${o?'<span style="color:rgba(255,255,255,0.3);font-size:0.7rem;">(You)</span>':""}
        </div>
        <div style="color:${s};font-size:0.6rem;text-transform:uppercase;letter-spacing:1px;">
          ${n===0?"Team Blue":"Team Red"}
        </div>
      `,this.playersEl.appendChild(i)}),this.isHost&&(this.startBtn.disabled=t.length<2,this.startBtn.style.opacity=t.length<2?"0.4":"1",this.statusEl.textContent=t.length<2?"Waiting for opponent...":"Ready! Press START")}hide(){this.container.style.display="none"}showStartError(t){this.statusEl.textContent=t,this.statusEl.style.color="#ef4444",setTimeout(()=>{this.statusEl.style.color="rgba(255,255,255,0.2)"},3e3)}}class a_{constructor(){T(this,"container");T(this,"isMobile");T(this,"onBack",null);this.isMobile="ontouchstart"in window||navigator.maxTouchPoints>0,this.container=document.createElement("div"),this.container.id="guide-screen",this.container.style.cssText=`
      position: fixed; inset: 0; z-index: 450;
      display: none; flex-direction: column; align-items: center; justify-content: center;
      background: rgba(5,5,10,0.97);
      font-family: 'Segoe UI', system-ui, sans-serif;
      overflow-y: auto; padding: 20px;
    `;const t=document.createElement("div");t.style.cssText=`
      background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 20px; padding: 32px; width: min(500px, 95vw);
      max-height: 90vh; overflow-y: auto;
    `;const e=document.createElement("h2");e.style.cssText=`
      font-size: 1.5rem; font-weight: 900; margin-bottom: 20px; text-align: center;
      background: linear-gradient(135deg, #00f0ff, #8b5cf6);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    `,e.textContent="HOW TO PLAY";const n=this.createSectionTitle("Game Rules"),i=this.createTextBlock("⚽ 6v6 Football Match — You control your player on the field. Score more goals than your opponent to win! First to 5 goals wins, or the team with the most goals after 5 minutes wins. You can switch between your 6 teammates to control any player on your team."),s=this.createSectionTitle("Keyboard Controls"),o=this.isMobile?document.createElement("div"):this.createControlsGrid([["W / Arrow Up","Move Forward"],["S / Arrow Down","Move Backward"],["A / Arrow Left","Strafe Left"],["D / Arrow Right","Strafe Right"],["Space","Jump"],["Shift","Sprint / Boost"],["E / Left Click","Kick"],["Tab / Q","Switch Player"],["Mouse","Look Around"],["M","Mute Audio"]]),a=this.createSectionTitle("Mobile Controls"),c=this.createControlsGrid([["Left Joystick","Move your player"],["Right Drag","Look around"],["Jump Button","Jump"],["Kick Button","Kick (hold to charge)"],["Boost Button","Sprint / Boost"],["Tap Teammate","Switch to that player"]]),l=this.createSectionTitle("Tips"),h=this.createTextBlock(`💡 Use boost wisely — it drains fast but regenerates over time.
💡 Switch between teammates to defend and attack effectively.
💡 Hold the kick button to charge up a more powerful shot.
💡 Pass to open teammates by kicking in their direction.`),d=document.createElement("button");d.textContent="← BACK TO DASHBOARD",d.style.cssText=`
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.6); padding: 12px 32px; margin-top: 20px;
      font-size: 0.85rem; font-weight: 600; border-radius: 8px;
      cursor: pointer; width: 100%; transition: all 0.2s;
    `,d.addEventListener("click",()=>{var u;return(u=this.onBack)==null?void 0:u.call(this)}),t.appendChild(e),t.appendChild(n),t.appendChild(i),this.isMobile||(t.appendChild(s),t.appendChild(o)),t.appendChild(a),t.appendChild(c),t.appendChild(l),t.appendChild(h),t.appendChild(d),this.container.appendChild(t),document.body.appendChild(this.container)}createSectionTitle(t){const e=document.createElement("div");return e.style.cssText=`
      font-size: 0.85rem; font-weight: 700; color: #00f0ff; margin-top: 20px; margin-bottom: 8px;
      letter-spacing: 2px; text-transform: uppercase;
    `,e.textContent=t,e}createTextBlock(t){const e=document.createElement("div");return e.style.cssText=`
      color: rgba(255,255,255,0.6); font-size: 0.8rem; line-height: 1.7;
      white-space: pre-wrap;
    `,e.textContent=t,e}createControlsGrid(t){const e=document.createElement("div");return e.style.cssText="display: flex; flex-direction: column; gap: 4px;",t.forEach(([n,i])=>{const s=document.createElement("div");s.style.cssText=`
        display: flex; justify-content: space-between; align-items: center;
        padding: 6px 12px; background: rgba(255,255,255,0.02); border-radius: 6px;
      `;const o=document.createElement("span");o.style.cssText=`
        color: #00f0ff; font-size: 0.75rem; font-weight: 600; font-family: monospace;
        background: rgba(0,240,255,0.08); padding: 2px 8px; border-radius: 4px;
      `,o.textContent=n;const a=document.createElement("span");a.style.cssText="color: rgba(255,255,255,0.5); font-size: 0.75rem;",a.textContent=i,s.appendChild(o),s.appendChild(a),e.appendChild(s)}),e}show(){this.container.style.display="flex"}hide(){this.container.style.display="none"}}class c_{constructor(){T(this,"canvas");T(this,"ctx");T(this,"size");T(this,"isMobile");T(this,"localPlayerId",null);this.isMobile="ontouchstart"in window||navigator.maxTouchPoints>0,this.size=this.isMobile?120:160,this.canvas=document.createElement("canvas"),this.canvas.width=this.size,this.canvas.height=this.size,this.canvas.style.cssText=`
      position: fixed; z-index: 101; border-radius: 50%;
      background: rgba(0,0,0,0.6); backdrop-filter: blur(5px);
      border: 2px solid rgba(255,255,255,0.1);
      ${this.isMobile?"bottom: 220px; right: 10px;":"bottom: 40px; left: 50%; transform: translateX(-50%);"}
    `,this.ctx=this.canvas.getContext("2d"),document.body.appendChild(this.canvas)}setLocalPlayerId(t){this.localPlayerId=t}update(t,e){const n=this.ctx,i=this.size,s=i/2,o=i/2,a=1.2;if(n.clearRect(0,0,i,i),n.strokeStyle="rgba(255,255,255,0.2)",n.lineWidth=1,n.beginPath(),n.ellipse(s,o,s-4,o-4,0,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(s,4),n.lineTo(s,i-4),n.stroke(),n.beginPath(),n.arc(s,o,15,0,Math.PI*2),n.stroke(),n.fillStyle="rgba(255,255,255,0.1)",n.fillRect(s-6,2,12,4),n.fillRect(s-6,i-6,12,4),e){const c=s+e.position.x*a,l=o+e.position.z*a;n.fillStyle="#ffffff",n.beginPath(),n.arc(c,l,3,0,Math.PI*2),n.fill()}t.forEach(c=>{const l=s+c.bike.position.x*a,h=o+c.bike.position.z*a,d=c.team===$t.Blue?"#00f0ff":"#ef4444",u=c.id===this.localPlayerId,p=c.isAI;let g,x,m;if(u?(g="ff",x=4,m="triangle"):p?(g="66",x=2,m="diamond"):(g="cc",x=3,m="circle"),n.fillStyle=d+g,m==="circle")n.beginPath(),n.arc(l,h,x,0,Math.PI*2),n.fill();else if(m==="diamond")n.beginPath(),n.moveTo(l,h-x),n.lineTo(l+x,h),n.lineTo(l,h+x),n.lineTo(l-x,h),n.closePath(),n.fill();else if(m==="triangle"){const f=c.bike.rotation.y;n.beginPath(),n.moveTo(l+Math.sin(f)*x*1.5,h+Math.cos(f)*x*1.5),n.lineTo(l+Math.sin(f+2.4)*x,h+Math.cos(f+2.4)*x),n.lineTo(l+Math.sin(f-2.4)*x,h+Math.cos(f-2.4)*x),n.closePath(),n.fill()}if(!p){const f=Math.sin(c.bike.rotation.y)*(x+2),v=Math.cos(c.bike.rotation.y)*(x+2);n.strokeStyle=d+g,n.lineWidth=1.5,n.beginPath(),n.moveTo(l,h),n.lineTo(l+f,h+v),n.stroke()}})}}class l_{constructor(t){T(this,"scene");T(this,"particles",[]);T(this,"goalLights",[]);this.scene=t}goalExplosion(t){const n=new Le,i=new Float32Array(600),s=new Float32Array(600),o=new Float32Array(200),a=[];for(let h=0;h<200;h++){i[h*3]=t.x,i[h*3+1]=t.y,i[h*3+2]=t.z;const d=new Nt;d.setHSL(.05+Math.random()*.1,1,.5+Math.random()*.5),s[h*3]=d.r,s[h*3+1]=d.g,s[h*3+2]=d.b,o[h]=.2+Math.random()*.5,a.push(new z((Math.random()-.5)*20,Math.random()*15,(Math.random()-.5)*20))}n.setAttribute("position",new ke(i,3)),n.setAttribute("color",new ke(s,3)),n.setAttribute("size",new ke(o,1));const c=new Xa({size:.5,vertexColors:!0,transparent:!0,opacity:1,blending:Ur,depthWrite:!1}),l=new Rh(n,c);this.scene.add(l),l._velocities=a,l._life=2,this.particles.push(l)}goalCelebration(t){const e=t===$t.Blue?61695:15680580;for(let n=0;n<8;n++){const i=new pt(new sn(.5,8,8),new me({color:e,transparent:!0,opacity:.8}));i.position.set((Math.random()-.5)*120,5+Math.random()*10,(Math.random()-.5)*80),this.scene.add(i),i._life=3,i._color=e,this.goalLights.push(i)}}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e],i=n._velocities,s=n._life;n._life=s-t;const o=n.geometry.attributes.position.array;for(let a=0;a<i.length;a++)o[a*3]+=i[a].x*t,o[a*3+1]+=i[a].y*t,o[a*3+2]+=i[a].z*t,i[a].y-=9.81*t;n.geometry.attributes.position.needsUpdate=!0,n.material.opacity=Math.max(0,s/2),s<=0&&(this.scene.remove(n),n.geometry.dispose(),n.material.dispose(),this.particles.splice(e,1))}for(let e=this.goalLights.length-1;e>=0;e--){const n=this.goalLights[e],i=n._life;n._life=i-t,n.position.y+=t*2,n.scale.setScalar(1+(3-i)*.5),n.material.opacity=Math.max(0,i/3),i<=0&&(this.scene.remove(n),n.geometry.dispose(),n.material.dispose(),this.goalLights.splice(e,1))}}}class h_{constructor(){T(this,"ctx",null);T(this,"masterGain",null);T(this,"engineOsc",null);T(this,"engineGain",null);T(this,"boostNoise",null);T(this,"boostGain",null);T(this,"crowdNoise",null);T(this,"crowdGain",null);T(this,"currentSpeed",0);T(this,"isBoosting",!1);T(this,"muted",!1);T(this,"initialized",!1);T(this,"engineRunning",!1);T(this,"boostGainNode",null);T(this,"boostOsc",null)}init(){if(!this.initialized)try{this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.3,this.masterGain.connect(this.ctx.destination),this.initialized=!0}catch{console.warn("[Audio] Web Audio API not available")}}ensureContext(){var t;((t=this.ctx)==null?void 0:t.state)==="suspended"&&this.ctx.resume()}startEngine(){if(!this.ctx||!this.masterGain||this.engineRunning)return;this.ensureContext(),this.engineRunning=!0,this.engineOsc=this.ctx.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=55;const t=this.ctx.createOscillator();t.type="sine",t.frequency.value=30;const e=this.ctx.sampleRate*.5,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let l=0;l<e;l++)i[l]=(Math.random()*2-1)*.3;const s=this.ctx.createBufferSource();s.buffer=n,s.loop=!0;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=200,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=0;const a=this.ctx.createGain();a.gain.value=0;const c=this.ctx.createGain();c.gain.value=0,this.engineOsc.connect(this.engineGain),this.engineGain.connect(this.masterGain),t.connect(a),a.connect(this.masterGain),s.connect(o),o.connect(c),c.connect(this.masterGain),this.engineOsc._subOsc=t,this.engineOsc._subGain=a,this.engineOsc._noiseGain=c,this.engineOsc._noiseFilter=o,this.engineOsc._noiseSource=s,this.engineOsc.start(),t.start(),s.start(),this.engineGain.gain.linearRampToValueAtTime(.08,this.ctx.currentTime+.5),a.gain.linearRampToValueAtTime(.06,this.ctx.currentTime+.5),c.gain.linearRampToValueAtTime(.04,this.ctx.currentTime+.5)}updateEngine(t,e){if(!this.ctx||!this.engineOsc||!this.engineGain)return;this.ensureContext(),this.currentSpeed=t,this.isBoosting=e;const n=Math.min(1,t/35),i=55+n*80+(e?40:0);this.engineOsc.frequency.linearRampToValueAtTime(i,this.ctx.currentTime+.1),this.engineOsc._subOsc&&this.engineOsc._subOsc.frequency.linearRampToValueAtTime(30+n*30+(e?15:0),this.ctx.currentTime+.1),this.engineOsc._noiseFilter&&this.engineOsc._noiseFilter.frequency.linearRampToValueAtTime(200+n*800,this.ctx.currentTime+.1);const s=.04+n*.08+(e?.06:0);this.engineGain.gain.linearRampToValueAtTime(s,this.ctx.currentTime+.1),this.engineOsc._subGain&&this.engineOsc._subGain.gain.linearRampToValueAtTime(.03+n*.05,this.ctx.currentTime+.1),this.engineOsc._noiseGain&&this.engineOsc._noiseGain.gain.linearRampToValueAtTime(.02+n*.04+(e?.05:0),this.ctx.currentTime+.1),this.updateBoost(e)}updateBoost(t){if(!(!this.ctx||!this.masterGain))if(t&&!this.boostOsc){const e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.value=200;const n=this.ctx.createGain();n.gain.value=0;const i=this.ctx.createBiquadFilter();i.type="highpass",i.frequency.value=1e3,e.connect(i),i.connect(n),n.connect(this.masterGain),e.start(),n.gain.linearRampToValueAtTime(.06,this.ctx.currentTime+.1),this.boostOsc=e,this.boostGainNode=n,e.frequency.linearRampToValueAtTime(400,this.ctx.currentTime+.3)}else!t&&this.boostOsc&&(this.boostGainNode&&this.boostGainNode.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.15),setTimeout(()=>{var e;try{(e=this.boostOsc)==null||e.stop()}catch{}this.boostOsc=null,this.boostGainNode=null},200))}stopEngine(){!this.engineOsc||!this.engineRunning||(this.engineGain&&this.engineGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.3),this.engineOsc._subGain&&this.engineOsc._subGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.3),this.engineOsc._noiseGain&&this.engineOsc._noiseGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.3),setTimeout(()=>{var t,e,n,i,s;try{(t=this.engineOsc)==null||t.stop(),(n=(e=this.engineOsc)==null?void 0:e._subOsc)==null||n.stop(),(s=(i=this.engineOsc)==null?void 0:i._noiseSource)==null||s.stop()}catch{}this.engineOsc=null,this.engineGain=null,this.engineRunning=!1},500))}playJump(){if(!this.ctx||!this.masterGain)return;this.ensureContext();const t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(600,this.ctx.currentTime+.15);const e=this.ctx.createGain();e.gain.setValueAtTime(.1,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.2),t.connect(e),e.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.2)}playBallHit(t){if(!this.ctx||!this.masterGain)return;this.ensureContext();const e=Math.min(.15,.04+t*.003),n=this.ctx.createOscillator();n.type="sine",n.frequency.setValueAtTime(150,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(50,this.ctx.currentTime+.1);const i=this.ctx.createGain();i.gain.setValueAtTime(e,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.15),n.connect(i),i.connect(this.masterGain),n.start(),n.stop(this.ctx.currentTime+.15)}playGoalHorn(){if(!this.ctx||!this.masterGain)return;this.ensureContext();const t=1.5,e=this.ctx.createOscillator();e.type="square",e.frequency.setValueAtTime(220,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(330,this.ctx.currentTime+t*.3),e.frequency.linearRampToValueAtTime(440,this.ctx.currentTime+t*.6);const n=this.ctx.createGain();n.gain.setValueAtTime(.08,this.ctx.currentTime),n.gain.linearRampToValueAtTime(.12,this.ctx.currentTime+.2),n.gain.linearRampToValueAtTime(.06,this.ctx.currentTime+t);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=800,e.connect(i),i.connect(n),n.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+t);const s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(330,this.ctx.currentTime),s.frequency.linearRampToValueAtTime(440,this.ctx.currentTime+t*.4),s.frequency.linearRampToValueAtTime(554,this.ctx.currentTime+t*.7);const o=this.ctx.createGain();o.gain.setValueAtTime(.04,this.ctx.currentTime),o.gain.linearRampToValueAtTime(.08,this.ctx.currentTime+.2),o.gain.linearRampToValueAtTime(.02,this.ctx.currentTime+t);const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=600,s.connect(a),a.connect(o),o.connect(this.masterGain),s.start(),s.stop(this.ctx.currentTime+t)}playCrowdRoar(t=.5){if(!this.ctx||!this.masterGain)return;this.ensureContext();const e=1+t,n=Math.floor(this.ctx.sampleRate*e),i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let l=0;l<n;l++){const h=l/this.ctx.sampleRate,d=Math.sin(Math.PI*h/e)*t;s[l]=(Math.random()*2-1)*.5*d,Math.sin(h*2*Math.PI*2)>.7&&(s[l]+=(Math.random()*2-1)*.3*d)}const o=this.ctx.createBufferSource();o.buffer=i;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=1e3+t*1e3;const c=this.ctx.createGain();c.gain.setValueAtTime(0,this.ctx.currentTime),c.gain.linearRampToValueAtTime(.15*t,this.ctx.currentTime+.1),c.gain.linearRampToValueAtTime(0,this.ctx.currentTime+e-.3),o.connect(a),a.connect(c),c.connect(this.masterGain),o.start(),o.stop(this.ctx.currentTime+e)}playWhistle(){if(!this.ctx||!this.masterGain)return;this.ensureContext();const t=.6,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(1e3,this.ctx.currentTime+.1),e.frequency.linearRampToValueAtTime(1200,this.ctx.currentTime+.2),e.frequency.setValueAtTime(1200,this.ctx.currentTime+.3),e.frequency.linearRampToValueAtTime(800,this.ctx.currentTime+.5);const n=this.ctx.createGain();n.gain.setValueAtTime(0,this.ctx.currentTime),n.gain.linearRampToValueAtTime(.08,this.ctx.currentTime+.05),n.gain.setValueAtTime(.08,this.ctx.currentTime+.25),n.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.5);const i=this.ctx.createBiquadFilter();i.type="highpass",i.frequency.value=600,e.connect(i),i.connect(n),n.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+t)}playCountdownBeep(){if(!this.ctx||!this.masterGain)return;this.ensureContext();const t=this.ctx.createOscillator();t.type="sine",t.frequency.value=600;const e=this.ctx.createGain();e.gain.setValueAtTime(.08,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.15),t.connect(e),e.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.15)}playCountdownGo(){if(!this.ctx||!this.masterGain)return;this.ensureContext();const t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(800,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(1200,this.ctx.currentTime+.3);const e=this.ctx.createGain();e.gain.setValueAtTime(.1,this.ctx.currentTime),e.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.4),t.connect(e),e.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.4)}playMenuClick(){if(!this.ctx||!this.masterGain)return;this.ensureContext();const t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(500,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(800,this.ctx.currentTime+.08);const e=this.ctx.createGain();e.gain.setValueAtTime(.05,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.1),t.connect(e),e.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.1)}startCrowdAmbient(){if(!this.ctx||!this.masterGain||this.crowdNoise)return;this.ensureContext();const t=Math.floor(this.ctx.sampleRate*2),e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let s=0;s<t;s++)n[s]=(Math.random()*2-1)*.4;this.crowdNoise=this.ctx.createBufferSource(),this.crowdNoise.buffer=e,this.crowdNoise.loop=!0;const i=this.ctx.createBiquadFilter();if(i.type="bandpass",i.frequency.value=400,i.Q.value=.5,this.crowdGain=this.ctx.createGain(),this.crowdGain.gain.value=0,this.crowdNoise.connect(i),i.connect(this.crowdGain),this.crowdGain.connect(this.masterGain),this.crowdNoise.start(),this.crowdGain.gain.linearRampToValueAtTime(.06,this.ctx.currentTime+2),this.ctx){const s=this.ctx.createOscillator();s.frequency.value=.1;const o=this.ctx.createGain();o.gain.value=.02,s.connect(o),o.connect(this.crowdGain.gain),s.start(),this.crowdNoise._lfo=s}}setCrowdIntensity(t){this.crowdGain&&this.crowdGain.gain.linearRampToValueAtTime(.02+t*.08,this.ctx.currentTime+.5)}stopCrowdAmbient(){this.crowdNoise&&(this.crowdGain&&this.crowdGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+1),setTimeout(()=>{var t,e,n;try{(t=this.crowdNoise)==null||t.stop(),(n=(e=this.crowdNoise)==null?void 0:e._lfo)==null||n.stop()}catch{}this.crowdNoise=null,this.crowdGain=null},1200))}playMatchStart(){this.playWhistle(),this.playCrowdRoar(.7)}playGoalScored(){this.playGoalHorn(),setTimeout(()=>this.playCrowdRoar(1),200)}playMatchEnd(){setTimeout(()=>this.playWhistle(),500),this.playCrowdRoar(.5)}setMasterVolume(t){this.masterGain&&(this.masterGain.gain.value=Math.max(0,Math.min(1,t)))}toggleMute(){return this.muted=!this.muted,this.masterGain&&(this.masterGain.gain.value=this.muted?0:.3),this.muted}setVolume(t){this.masterGain&&(this.masterGain.gain.value=this.muted?0:Math.max(0,Math.min(1,t)))}dispose(){this.stopEngine(),this.stopCrowdAmbient(),this.updateBoost(!1),this.ctx&&(this.ctx.close(),this.ctx=null),this.initialized=!1}}class u_{constructor(){T(this,"container");T(this,"buttons",new Map);T(this,"currentPlayerId",null);T(this,"myTeam",$t.Blue);T(this,"hideTimer",null);T(this,"onSwitch",null);this.container=document.createElement("div"),this.container.id="player-switcher",this.container.style.cssText=`
      position: fixed; bottom: ${window.innerWidth<768?"90px":"60px"};
      left: 50%; transform: translateX(-50%);
      display: none; gap: 6px; z-index: 150;
      padding: 8px 12px; background: rgba(0,0,0,0.7);
      border-radius: 16px; backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.08);
      transition: opacity 0.3s;
    `,document.body.appendChild(this.container)}setTeam(t){this.myTeam=t}updatePlayers(t,e){t.filter(s=>this.myTeam===$t.Blue?s.id.startsWith("ai_")||!s.isAI:!0),this.currentPlayerId=e;const n=t.filter((s,o)=>{const a=o<6;return this.myTeam===$t.Blue&&a||this.myTeam===$t.Red&&!a});this.buttons.clear(),this.container.innerHTML="";const i=document.createElement("div");i.style.cssText=`
      color: rgba(255,255,255,0.2); font-size: 0.5rem; letter-spacing: 1px;
      text-transform: uppercase; writing-mode: vertical-lr;
      display: flex; align-items: center; justify-content: center;
      padding-right: 4px;
    `,i.textContent="TEAM",this.container.appendChild(i),n.forEach(s=>{const o=document.createElement("button"),a=s.id===e,c=this.getPositionLabel(s.jerseyNumber);o.style.cssText=`
        width: 44px; height: 44px; border-radius: 12px;
        border: 2px solid ${a?"#00f0ff":"rgba(255,255,255,0.1)"};
        background: ${a?"rgba(0,240,255,0.15)":"rgba(255,255,255,0.04)"};
        color: ${a?"#00f0ff":"rgba(255,255,255,0.5)"};
        font-size: 0.7rem; font-weight: 700; cursor: pointer;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        transition: all 0.2s; outline: none; gap: 1px;
        box-shadow: ${a?"0 0 12px rgba(0,240,255,0.2)":"none"};
        -webkit-tap-highlight-color: transparent;
      `,o.innerHTML=`
        <span style="font-size:0.8rem;">${s.jerseyNumber}</span>
        <span style="font-size:0.45rem;opacity:0.6;">${c}</span>
      `,o.addEventListener("click",l=>{var h;l.stopPropagation(),(h=this.onSwitch)==null||h.call(this,s.id)}),this.container.appendChild(o),this.buttons.set(s.id,o)}),this.show()}highlightPlayer(t){this.currentPlayerId=t,this.buttons.forEach((e,n)=>{const i=n===t;e.style.borderColor=i?"#00f0ff":"rgba(255,255,255,0.1)",e.style.background=i?"rgba(0,240,255,0.15)":"rgba(255,255,255,0.04)",e.style.color=i?"#00f0ff":"rgba(255,255,255,0.5)",e.style.boxShadow=i?"0 0 12px rgba(0,240,255,0.2)":"none"})}getPositionLabel(t){return["GK","DF","DF","MF","MF","FW"][t-1]||""}show(){this.container.style.display="flex",this.container.style.opacity="1",this.hideTimer!==null&&clearTimeout(this.hideTimer),this.hideTimer=window.setTimeout(()=>{this.container.style.opacity="0.3"},5e3)}hide(){this.container.style.display="none",this.hideTimer!==null&&clearTimeout(this.hideTimer)}}class d_{constructor(){T(this,"sceneManager");T(this,"physics");T(this,"input");T(this,"touchCtrl");T(this,"cameraCtrl");T(this,"network");T(this,"localMatch",null);T(this,"state");T(this,"hud");T(this,"loginScreen");T(this,"dashboardScreen");T(this,"settingsScreen");T(this,"gameScreen");T(this,"guideScreen");T(this,"minimap");T(this,"effects");T(this,"audio");T(this,"stadium");T(this,"playerSwitcher");T(this,"players",new Map);T(this,"ball");T(this,"goals",[]);T(this,"localPlayerId",null);T(this,"inputSequence",0);T(this,"isRunning",!1);T(this,"animFrameId",null);T(this,"lastTime",0);T(this,"matchTime",0);T(this,"pendingCameras",[]);T(this,"_wasKickoff",!1);T(this,"latencyInterval",null);T(this,"roomPlayers",[]);T(this,"currentUser",null)}async init(){this.sceneManager=new w0,this.physics=new Zv,this.input=new Jv,this.touchCtrl=new ty,this.input.setTouchController(this.touchCtrl),this.state=new Zy,this.network=new $y,this.hud=new t_,this.loginScreen=new n_,this.dashboardScreen=new i_,this.settingsScreen=new r_,this.gameScreen=new o_,this.guideScreen=new a_,this.minimap=new c_,this.effects=new l_(this.sceneManager.scene),this.audio=new h_,this.stadium=new Qy(this.sceneManager.scene),this.cameraCtrl=new ey(this.sceneManager.camera),this.input.isMobile&&(this.touchCtrl.onHaptic=()=>{var s;try{(s=navigator.vibrate)==null||s.call(navigator,12)}catch{}}),this.touchCtrl.onCameraReset=()=>{this.cameraCtrl.snapBehind()},this.touchCtrl.onMuteToggle=()=>{const s=this.audio.toggleMute();this.hud.showNotification(s?"Audio OFF":"Audio ON")},this.hud.onPauseQuit=()=>{this.localMatch||this.network.disconnect(),this.cleanupMatch(),this.dashboardScreen.show()},this.stadium.build();const t=new Hl(this.sceneManager.scene,this.physics.world,$t.Blue),e=new Hl(this.sceneManager.scene,this.physics.world,$t.Red);this.goals=[t,e],this.ball=new Jy(this.sceneManager.scene,this.physics.world),this.setupUI(),this.setupEvents(),this.latencyInterval=window.setInterval(()=>{var o,a;const s=((a=(o=this.network).getPing)==null?void 0:a.call(o))??0;this.hud.updateLatency(s)},2e3);const n=document.getElementById("loading-screen");n&&(n.style.opacity="0",setTimeout(()=>n==null?void 0:n.remove(),500));const i=this.getSavedAuth();i?(this.currentUser=i,this.dashboardScreen.setUser(i.name,i.photo),this.dashboardScreen.show()):(this.initGoogleSignIn(),this.loginScreen.show()),this.isRunning=!0,this.lastTime=performance.now(),this.animate(),window.addEventListener("resize",()=>this.sceneManager.onResize()),window.addEventListener("keydown",s=>{if(s.key==="m"||s.key==="M"){const o=this.audio.toggleMute();this.hud.showNotification(o?"Audio OFF":"Audio ON")}})}getSavedAuth(){try{const t=localStorage.getItem(zo);if(t)return JSON.parse(t)}catch{}return null}saveAuth(t){localStorage.setItem(zo,JSON.stringify(t))}clearAuth(){localStorage.removeItem(zo)}initGoogleSignIn(){let t=0;const e=()=>{var n,i;(i=(n=window.google)==null?void 0:n.accounts)!=null&&i.id?(window.google.accounts.id.initialize({client_id:"457479229860-2eg25haho3f30lh24eu9582tp1g3ahtf.apps.googleusercontent.com",callback:s=>{try{const o=JSON.parse(atob(s.credential.split(".")[1])),a={name:o.name||"Player",photo:o.picture||"",method:"google"};this.onLogin(a)}catch{this.loginScreen.setStatus("Google sign-in failed")}}}),window.google.accounts.id.renderButton(this.loginScreen.googleBtnContainer,{type:"standard",shape:"pill",theme:"filled_black",text:"signin_with",size:"large"})):(t++,t<50?setTimeout(e,200):console.log("[Game] Google Sign-In SDK not available after 10s, guest login only"))};e()}onLogin(t){this.currentUser=t,this.saveAuth(t),this.loginScreen.hide(),this.dashboardScreen.setUser(t.name,t.photo),this.dashboardScreen.show(),this.audio.init(),this.audio.playMenuClick()}setupUI(){this.loginScreen.onLogin=t=>{this.onLogin(t)},this.dashboardScreen.onCreateRoom=()=>{var e;const t=((e=this.currentUser)==null?void 0:e.name)||"Player";this.network.socket||this.network.connect(t),this.network.createRoom()},this.dashboardScreen.onSettings=()=>{this.settingsScreen.show()},this.dashboardScreen.onGuide=()=>{this.guideScreen.show()},this.dashboardScreen.onExit=()=>{this.clearAuth(),this.currentUser=null,this.dashboardScreen.hide(),this.loginScreen.show()},this.dashboardScreen.onColorChange=t=>{this.stadium.setFieldColor(t)},this.dashboardScreen.onPractice=t=>{var n;this.audio.init(),this.audio.playMenuClick();const e=((n=this.currentUser)==null?void 0:n.name)||"Player";this.dashboardScreen.hide(),this.localMatch=new Ky(e,{onMatchFound:i=>{this.localPlayerId=i.playerId,this.state.matchId=i.matchId,this.input.isMobile&&this.touchCtrl.show(),this.minimap.setLocalPlayerId(this.localPlayerId),this.audio.startEngine(),this.audio.startCrowdAmbient(),this.hud.show(),i.teamMode?this.hud.showModeButton(!0):this.hud.showModeButton(!1)},onStateUpdate:i=>{var s;this.state.update(i),this.matchTime=i.elapsedSeconds||0,this.syncEntities((i.elapsedSeconds,1/60)),this.updateHUD(),this.updateAudio(),i.state===Re.Playing&&(this._wasKickoff&&(this.audio.playMatchStart(),this.input.requestPointerLock()),this._wasKickoff=!1),i.state===Re.Kickoff&&(this._wasKickoff=!0),i.state===Re.GoalScored&&this.effects.goalExplosion((s=i.ball)==null?void 0:s.position)},onGoalScored:i=>{if(this.effects.goalCelebration(i.team),this.hud.showGoalNotification(i.team,i.scorer),this.audio.playGoalScored(),i.scorer){const s=this.players.get(i.scorer);s&&s.celebrate()}},onMatchEnd:i=>{this.audio.playMatchEnd(),this.hud.showMatchEnd(i),setTimeout(()=>{this.cleanupMatch(),this.dashboardScreen.show()},5e3)},onCountdown:i=>{this.hud.showCountdown(i.time),i.time>0?this.audio.playCountdownBeep():this.audio.playCountdownGo()}}),this.localMatch.startPractice(t)},this.hud.onModeToggle=t=>{this.localMatch?this.localMatch.sendTeamMode(t):this.network.sendTeamMode(t),this.hud.showNotification(t==="attack"?"Attack Mode":"Defence Mode")},this.settingsScreen.onBack=()=>{this.settingsScreen.hide(),this.dashboardScreen.show()},this.settingsScreen.onSoundChange=t=>{var e,n;(n=(e=this.audio).setVolume)==null||n.call(e,t/100)},this.settingsScreen.onJoystickChange=t=>{this.touchCtrl.applyOffsets()},this.guideScreen.onBack=()=>{this.guideScreen.hide(),this.dashboardScreen.show()},this.gameScreen.onStart=()=>{this.network.startRoomGame()},this.gameScreen.onLeave=()=>{this.network.leaveRoom(),this.gameScreen.hide(),this.dashboardScreen.show()}}setupEvents(){this.network.onRoomCreated=t=>{this.roomPlayers=t.players||[{id:this.network.socketId,name:this.network.playerName}],this.gameScreen.show(t.code,!0,this.roomPlayers),this.dashboardScreen.hide()},this.network.onRoomJoined=t=>{this.roomPlayers=t.players||[];const e=t.hostId===this.network.socketId;this.gameScreen.show(t.code,e,this.roomPlayers),this.dashboardScreen.hide()},this.network.onRoomPlayerJoined=t=>{this.roomPlayers.find(e=>e.id===t.id)||this.roomPlayers.push({id:t.id,name:t.name}),this.gameScreen.updatePlayers(this.roomPlayers)},this.network.onRoomPlayerLeft=t=>{this.roomPlayers=this.roomPlayers.filter(e=>e.id!==t.id),this.gameScreen.updatePlayers(this.roomPlayers)},this.network.onRoomError=t=>{var e,n;(n=(e=this.gameScreen).showStartError)==null||n.call(e,t.message)},this.network.onRoomGameStart=t=>{this.localPlayerId=this.network.socketId,this.state.matchId=t.matchId,this.gameScreen.hide(),this.input.isMobile&&this.touchCtrl.show(),this.minimap.setLocalPlayerId(this.localPlayerId),this.audio.startEngine(),this.audio.startCrowdAmbient(),this.hud.show()},this.network.onMatchFound=t=>{this.localPlayerId=this.network.socketId,this.state.matchId=t.matchId,this.loginScreen.hide(),this.dashboardScreen.hide(),this.input.isMobile&&this.touchCtrl.show(),this.minimap.setLocalPlayerId(this.localPlayerId),this.audio.startEngine(),this.audio.startCrowdAmbient(),this.hud.show(),t.teamMode?(this.hud.showModeButton(!0),t.teamMode.blue):this.hud.showModeButton(!1)},this.network.onStateUpdate=t=>{var e;this.state.update(t),this.matchTime=t.elapsedSeconds||0,this.syncEntities((t.elapsedSeconds,1/60)),this.updateHUD(),this.updateAudio(),t.state===Re.Playing&&(this._wasKickoff&&(this.audio.playMatchStart(),this.input.requestPointerLock()),this._wasKickoff=!1),t.state===Re.Kickoff&&(this._wasKickoff=!0),t.state===Re.GoalScored&&this.effects.goalExplosion((e=t.ball)==null?void 0:e.position)},this.network.onGoalScored=t=>{this.effects.goalCelebration(t.team),this.hud.showGoalNotification(t.team,t.scorer),this.audio.playGoalScored();const e=this.network.lastScorerId;if(e){const n=this.players.get(e);n&&n.celebrate()}},this.network.onMatchEnd=t=>{this.audio.playMatchEnd(),this.hud.showMatchEnd(t),setTimeout(()=>{this.cleanupMatch(),this.dashboardScreen.show()},5e3)},this.network.onCountdown=t=>{this.hud.showCountdown(t.time),t.time>0?this.audio.playCountdownBeep():this.audio.playCountdownGo()},this.network.onPlayerJoined=t=>{console.log("Player joined:",t)},this.network.onPlayerLeft=t=>{const e=this.players.get(t.id);e&&e.remove(),this.players.delete(t.id)},this.network.onConnected=()=>{this.loginScreen.setStatus("Connected")},this.network.onDisconnected=()=>{this.loginScreen.setStatus("Disconnected")},this.network.onQueueUpdate=t=>{},this.network.onSwitchConfirmed=t=>{this.state.switchToPlayer(t.playerId)&&this.onPlayerSwitched(t.playerId)},this.network.onTeamModeUpdate=t=>{const e=this.state.myTeam;e&&t.team===e&&this.hud.setMode(t.mode)}}onPlayerSwitched(t){var s;const e=this.state.players.get(t),n=this.players.get(t);if(!e||!n)return;this.cameraCtrl.follow(n.mesh);const i=new z(e.bike.position.x,e.bike.position.y,e.bike.position.z);this.cameraCtrl.switchTarget(i,.3),(s=this.playerSwitcher)==null||s.highlightPlayer(t),this.hud.showNotification(`Switched to #${e.jerseyNumber}`)}handleSwitchPlayer(t){this.localMatch?this.state.switchToPlayer(t)&&this.onPlayerSwitched(t):this.network.switchPlayer(t)}switchToNextPlayer(){const t=this.state.getNextPlayerId();t&&t!==this.state.currentPlayerId&&this.handleSwitchPlayer(t)}cleanupMatch(){var t;this.audio.stopEngine(),this.audio.stopCrowdAmbient(),this.touchCtrl.hide(),this.hud.hide(),(t=this.playerSwitcher)==null||t.hide(),this.players.forEach(e=>e.remove()),this.players.clear(),this.localPlayerId=null,this.state.currentPlayerId=null,this.state.myTeam=null,this.state.myTeamPlayerIds=[],this.localMatch&&(this.localMatch.destroy(),this.localMatch=null)}syncEntities(t=1/60){const e=this.state.getPlayers(),n=this.state.getBall();if(n&&this.ball.sync(n),e.forEach(i=>{let s=this.players.get(i.id);const o=i.id===this.localPlayerId;if(!s){const a=String(i.jerseyNumber||Math.floor(Math.random()*99)+1);o?s=new Gl(this.sceneManager.scene,this.physics.world,i.team,"player","You",a):s=new Gl(this.sceneManager.scene,this.physics.world,i.team,i.isAI?"ai":"remote",i.name||"AI",a),this.players.set(i.id,s)}s.sync(i.bike,t),o&&this.cameraCtrl.follow(s.mesh)}),this.localPlayerId&&!this.state.myTeam){const i=this.state.players.get(this.localPlayerId);i&&(this.state.setLocalTeam(i.team),this.playerSwitcher=new u_,this.playerSwitcher.setTeam(i.team),this.playerSwitcher.onSwitch=s=>{this.handleSwitchPlayer(s)},this.playerSwitcher.show())}if(this.playerSwitcher&&this.state.myTeam){const i=Array.from(this.state.players.values()).map(o=>({id:o.id,name:o.name,isAI:o.isAI,jerseyNumber:o.jerseyNumber})),s=this.state.currentPlayerId||this.localPlayerId||"";this.playerSwitcher.updatePlayers(i,s)}}updateHUD(){const t=this.state;if(this.hud.updateScore(t.blueScore,t.redScore),this.hud.updateTimer(t.elapsedSeconds),this.localPlayerId){const e=t.players.get(this.localPlayerId);e&&this.hud.updateBoost(e.bike.boost)}}updateAudio(){if(!this.localPlayerId)return;const t=this.state.players.get(this.localPlayerId);if(!t)return;const e=Math.sqrt(t.bike.velocity.x**2+t.bike.velocity.y**2+t.bike.velocity.z**2);this.audio.updateEngine(e,t.bike.isBoosting)}handleInput(t){if(!this.localPlayerId){console.log("[DIAG] handleInput: no localPlayerId");return}this.input.consumeSwitchRequest()&&this.switchToNextPlayer();const e=this.input.getRawInput();if(this.inputSequence++,(e.steer!==0||e.throttle!==0)&&console.log("[DIAG] handleInput steer/throttle:",e.steer,e.throttle),e.defence&&this.switchToDefender(),e.pass){const o=this.findNearestTeammate();if(o){const a=this.state.players.get(this.localPlayerId);if(a){const c=o.position.x-a.bike.position.x,l=o.position.z-a.bike.position.z,h=Math.sqrt(c*c+l*l);h>0&&(e.kickDirection={x:c/h,z:l/h},e.kick=!0)}}}const n={steer:e.steer,throttle:e.throttle,jump:e.jump,sprint:e.sprint,kick:e.kick,kickDirection:e.kickDirection,pass:e.pass||void 0,camera:e.camera,sequence:this.inputSequence};this.localMatch?this.localMatch.handleInput(n):this.network.sendInput(n);const i=this.state.getPlayers(),s=this.state.getBall();this.minimap.update(i,s)}switchToDefender(){const t=this.state.players.get(this.localPlayerId);if(!t)return;const e=this.state.getBall();if(!e)return;let n=null,i=1/0;for(const[s,o]of this.state.players){if(s===this.localPlayerId||o.team!==t.team)continue;const a=o.bike.position.x-e.position.x,c=o.bike.position.z-e.position.z,l=a*a+c*c;l<i&&(i=l,n=s)}n&&this.handleSwitchPlayer(n)}findNearestTeammate(){const t=this.state.players.get(this.localPlayerId);if(!t)return null;let e=null,n=1/0;for(const[i,s]of this.state.players){if(i===this.localPlayerId||s.team!==t.team)continue;const o=s.bike.position.x-t.bike.position.x,a=s.bike.position.z-t.bike.position.z,c=o*o+a*a;c<n&&(n=c,e={position:{x:s.bike.position.x,z:s.bike.position.z}})}return e}animate(){if(!this.isRunning)return;this.animFrameId=requestAnimationFrame(()=>this.animate());const t=performance.now(),e=Math.min((t-this.lastTime)/1e3,.05);this.lastTime=t,this.physics.step(e),this.handleInput(e),this.cameraCtrl.update(e,this.input.camera),this.effects.update(e),this.sceneManager.render()}destroy(){this.isRunning=!1,this.animFrameId!==null&&cancelAnimationFrame(this.animFrameId),this.latencyInterval!==null&&clearInterval(this.latencyInterval),this.network.disconnect(),this.audio.dispose(),this.sceneManager.dispose()}}let ql=null;function Xl(r){const t=document.getElementById("loading-screen");t&&(t.innerHTML=`
      <div style="text-align:center;padding:20px;max-width:400px;">
        <div style="font-size:3rem;margin-bottom:1rem;">⚠️</div>
        <h2 style="color:#ef4444;margin-bottom:0.5rem;font-size:1.2rem;">Launch Error</h2>
        <p style="color:rgba(255,255,255,0.5);font-size:0.85rem;margin-bottom:1rem;">${r}</p>
        <button onclick="location.reload()" style="
          background:linear-gradient(135deg,#00f0ff,#8b5cf6);color:#fff;
          border:none;padding:10px 28px;border-radius:8px;font-size:0.9rem;
          font-weight:700;cursor:pointer;
        ">Retry</button>
      </div>
    `),console.error("Boot error:",r)}function f_(){const r=document.getElementById("loading-screen");r&&(r.style.opacity="0",r.style.transition="opacity 0.5s",setTimeout(()=>r.remove(),500))}let Mi=null;async function Yl(){var r,t,e;try{Mi=window.setTimeout(()=>{document.getElementById("loading-screen")&&Xl("Game is taking too long to start. Check your browser supports WebGL.")},15e3),ql=new d_,await ql.init(),Mi!==null&&(clearTimeout(Mi),Mi=null),f_();try{const{Capacitor:n}=window;(r=n==null?void 0:n.isNativePlatform)!=null&&r.call(n)&&((e=(t=n.Plugins)==null?void 0:t.StatusBar)==null||e.hide())}catch{}"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").catch(()=>{})}catch(n){Mi!==null&&(clearTimeout(Mi),Mi=null);const i=n instanceof Error?n.message:String(n);Xl(i)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{Yl()}):Yl();
//# sourceMappingURL=index-DJcA9hoW.js.map
