function Ly(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function My(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dp={exports:{}},yl={},bp={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),Uy=Symbol.for("react.portal"),jy=Symbol.for("react.fragment"),Fy=Symbol.for("react.strict_mode"),By=Symbol.for("react.profiler"),Wy=Symbol.for("react.provider"),zy=Symbol.for("react.context"),Hy=Symbol.for("react.forward_ref"),Vy=Symbol.for("react.suspense"),Gy=Symbol.for("react.memo"),Ky=Symbol.for("react.lazy"),eh=Symbol.iterator;function Qy(t){return t===null||typeof t!="object"?null:(t=eh&&t[eh]||t["@@iterator"],typeof t=="function"?t:null)}var Lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mp=Object.assign,Up={};function ti(t,e,n){this.props=t,this.context=e,this.refs=Up,this.updater=n||Lp}ti.prototype.isReactComponent={};ti.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ti.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jp(){}jp.prototype=ti.prototype;function cc(t,e,n){this.props=t,this.context=e,this.refs=Up,this.updater=n||Lp}var dc=cc.prototype=new jp;dc.constructor=cc;Mp(dc,ti.prototype);dc.isPureReactComponent=!0;var th=Array.isArray,Fp=Object.prototype.hasOwnProperty,hc={current:null},Bp={key:!0,ref:!0,__self:!0,__source:!0};function Wp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fp.call(e,r)&&!Bp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_s,type:t,key:s,ref:o,props:i,_owner:hc.current}}function $y(t,e){return{$$typeof:_s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fc(t){return typeof t=="object"&&t!==null&&t.$$typeof===_s}function qy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nh=/\/+/g;function Zl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qy(""+t.key):e.toString(36)}function co(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _s:case Uy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zl(o,0):r,th(i)?(n="",t!=null&&(n=t.replace(nh,"$&/")+"/"),co(i,e,n,"",function(u){return u})):i!=null&&(fc(i)&&(i=$y(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",th(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Zl(s,l);o+=co(s,e,n,a,i)}else if(a=Qy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Zl(s,l++),o+=co(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Us(t,e,n){if(t==null)return t;var r=[],i=0;return co(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Yy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Le={current:null},ho={transition:null},Xy={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:ho,ReactCurrentOwner:hc};M.Children={map:Us,forEach:function(t,e,n){Us(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Us(t,function(){e++}),e},toArray:function(t){return Us(t,function(e){return e})||[]},only:function(t){if(!fc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};M.Component=ti;M.Fragment=jy;M.Profiler=By;M.PureComponent=cc;M.StrictMode=Fy;M.Suspense=Vy;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xy;M.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Fp.call(e,a)&&!Bp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:_s,type:t.type,key:i,ref:s,props:r,_owner:o}};M.createContext=function(t){return t={$$typeof:zy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wy,_context:t},t.Consumer=t};M.createElement=Wp;M.createFactory=function(t){var e=Wp.bind(null,t);return e.type=t,e};M.createRef=function(){return{current:null}};M.forwardRef=function(t){return{$$typeof:Hy,render:t}};M.isValidElement=fc;M.lazy=function(t){return{$$typeof:Ky,_payload:{_status:-1,_result:t},_init:Yy}};M.memo=function(t,e){return{$$typeof:Gy,type:t,compare:e===void 0?null:e}};M.startTransition=function(t){var e=ho.transition;ho.transition={};try{t()}finally{ho.transition=e}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(t,e){return Le.current.useCallback(t,e)};M.useContext=function(t){return Le.current.useContext(t)};M.useDebugValue=function(){};M.useDeferredValue=function(t){return Le.current.useDeferredValue(t)};M.useEffect=function(t,e){return Le.current.useEffect(t,e)};M.useId=function(){return Le.current.useId()};M.useImperativeHandle=function(t,e,n){return Le.current.useImperativeHandle(t,e,n)};M.useInsertionEffect=function(t,e){return Le.current.useInsertionEffect(t,e)};M.useLayoutEffect=function(t,e){return Le.current.useLayoutEffect(t,e)};M.useMemo=function(t,e){return Le.current.useMemo(t,e)};M.useReducer=function(t,e,n){return Le.current.useReducer(t,e,n)};M.useRef=function(t){return Le.current.useRef(t)};M.useState=function(t){return Le.current.useState(t)};M.useSyncExternalStore=function(t,e,n){return Le.current.useSyncExternalStore(t,e,n)};M.useTransition=function(){return Le.current.useTransition()};M.version="18.2.0";bp.exports=M;var E=bp.exports;const pc=My(E),Jy=Ly({__proto__:null,default:pc},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy=E,e0=Symbol.for("react.element"),t0=Symbol.for("react.fragment"),n0=Object.prototype.hasOwnProperty,r0=Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i0={key:!0,ref:!0,__self:!0,__source:!0};function zp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)n0.call(e,r)&&!i0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:e0,type:t,key:s,ref:o,props:i,_owner:r0.current}}yl.Fragment=t0;yl.jsx=zp;yl.jsxs=zp;Dp.exports=yl;var c=Dp.exports,Ga={},Hp={exports:{}},$e={},Vp={exports:{}},Gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,D){var b=R.length;R.push(D);e:for(;0<b;){var J=b-1>>>1,ne=R[J];if(0<i(ne,D))R[J]=D,R[b]=ne,b=J;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var D=R[0],b=R.pop();if(b!==D){R[0]=b;e:for(var J=0,ne=R.length,Mn=ne>>>1;J<Mn;){var xt=2*(J+1)-1,fi=R[xt],Zt=xt+1,Ms=R[Zt];if(0>i(fi,b))Zt<ne&&0>i(Ms,fi)?(R[J]=Ms,R[Zt]=b,J=Zt):(R[J]=fi,R[xt]=b,J=xt);else if(Zt<ne&&0>i(Ms,b))R[J]=Ms,R[Zt]=b,J=Zt;else break e}}return D}function i(R,D){var b=R.sortIndex-D.sortIndex;return b!==0?b:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,d=null,f=3,_=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=R)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function w(R){if(y=!1,g(R),!v)if(n(a)!==null)v=!0,hi(I);else{var D=n(u);D!==null&&Ls(w,D.startTime-R)}}function I(R,D){v=!1,y&&(y=!1,m(x),x=-1),_=!0;var b=f;try{for(g(D),d=n(a);d!==null&&(!(d.expirationTime>D)||R&&!fe());){var J=d.callback;if(typeof J=="function"){d.callback=null,f=d.priorityLevel;var ne=J(d.expirationTime<=D);D=t.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(a)&&r(a),g(D)}else r(a);d=n(a)}if(d!==null)var Mn=!0;else{var xt=n(u);xt!==null&&Ls(w,xt.startTime-D),Mn=!1}return Mn}finally{d=null,f=b,_=!1}}var k=!1,N=null,x=-1,F=5,P=-1;function fe(){return!(t.unstable_now()-P<F)}function ot(){if(N!==null){var R=t.unstable_now();P=R;var D=!0;try{D=N(!0,R)}finally{D?Rt():(k=!1,N=null)}}else k=!1}var Rt;if(typeof p=="function")Rt=function(){p(ot)};else if(typeof MessageChannel<"u"){var bs=new MessageChannel,Jl=bs.port2;bs.port1.onmessage=ot,Rt=function(){Jl.postMessage(null)}}else Rt=function(){S(ot,0)};function hi(R){N=R,k||(k=!0,Rt())}function Ls(R,D){x=S(function(){R(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,hi(I))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var b=f;f=D;try{return R()}finally{f=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var b=f;f=R;try{return D()}finally{f=b}},t.unstable_scheduleCallback=function(R,D,b){var J=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?J+b:J):b=J,R){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=b+ne,R={id:h++,callback:D,priorityLevel:R,startTime:b,expirationTime:ne,sortIndex:-1},b>J?(R.sortIndex=b,e(u,R),n(a)===null&&R===n(u)&&(y?(m(x),x=-1):y=!0,Ls(w,b-J))):(R.sortIndex=ne,e(a,R),v||_||(v=!0,hi(I))),R},t.unstable_shouldYield=fe,t.unstable_wrapCallback=function(R){var D=f;return function(){var b=f;f=D;try{return R.apply(this,arguments)}finally{f=b}}}})(Gp);Vp.exports=Gp;var s0=Vp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp=E,Qe=s0;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qp=new Set,Qi={};function fr(t,e){Gr(t,e),Gr(t+"Capture",e)}function Gr(t,e){for(Qi[t]=e,t=0;t<e.length;t++)Qp.add(e[t])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ka=Object.prototype.hasOwnProperty,o0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rh={},ih={};function l0(t){return Ka.call(ih,t)?!0:Ka.call(rh,t)?!1:o0.test(t)?ih[t]=!0:(rh[t]=!0,!1)}function a0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function u0(t,e,n,r){if(e===null||typeof e>"u"||a0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new Me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new Me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new Me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new Me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new Me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new Me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new Me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new Me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new Me(t,5,!1,t.toLowerCase(),null,!1,!1)});var mc=/[\-:]([a-z])/g;function gc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mc,gc);Ie[e]=new Me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mc,gc);Ie[e]=new Me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mc,gc);Ie[e]=new Me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new Me(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new Me(t,1,!1,t.toLowerCase(),null,!0,!0)});function _c(t,e,n,r){var i=Ie.hasOwnProperty(e)?Ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(u0(e,n,i,r)&&(n=null),r||i===null?l0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yt=Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),Er=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),Qa=Symbol.for("react.profiler"),$p=Symbol.for("react.provider"),qp=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),$a=Symbol.for("react.suspense"),qa=Symbol.for("react.suspense_list"),wc=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),Yp=Symbol.for("react.offscreen"),sh=Symbol.iterator;function pi(t){return t===null||typeof t!="object"?null:(t=sh&&t[sh]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,ea;function Ni(t){if(ea===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ea=e&&e[1]||""}return`
`+ea+t}var ta=!1;function na(t,e){if(!t||ta)return"";ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ta=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ni(t):""}function c0(t){switch(t.tag){case 5:return Ni(t.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 2:case 15:return t=na(t.type,!1),t;case 11:return t=na(t.type.render,!1),t;case 1:return t=na(t.type,!0),t;default:return""}}function Ya(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sr:return"Fragment";case Er:return"Portal";case Qa:return"Profiler";case vc:return"StrictMode";case $a:return"Suspense";case qa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qp:return(t.displayName||"Context")+".Consumer";case $p:return(t._context.displayName||"Context")+".Provider";case yc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wc:return e=t.displayName||null,e!==null?e:Ya(t.type)||"Memo";case nn:e=t._payload,t=t._init;try{return Ya(t(e))}catch{}}return null}function d0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ya(e);case 8:return e===vc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h0(t){var e=Xp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fs(t){t._valueTracker||(t._valueTracker=h0(t))}function Jp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ao(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xa(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function oh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zp(t,e){e=e.checked,e!=null&&_c(t,"checked",e,!1)}function Ja(t,e){Zp(t,e);var n=Tn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Za(t,e.type,n):e.hasOwnProperty("defaultValue")&&Za(t,e.type,Tn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Za(t,e,n){(e!=="number"||Ao(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ai=Array.isArray;function br(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function eu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Ai(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tn(n)}}function em(t,e){var n=Tn(e.value),r=Tn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function uh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bs,nm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $i(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f0=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(t){f0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Di[e]=Di[t]})});function rm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Di.hasOwnProperty(t)&&Di[t]?(""+e).trim():e+"px"}function im(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var p0=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nu(t,e){if(e){if(p0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function ru(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iu=null;function Ec(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var su=null,Lr=null,Mr=null;function ch(t){if(t=ws(t)){if(typeof su!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Il(e),su(t.stateNode,t.type,e))}}function sm(t){Lr?Mr?Mr.push(t):Mr=[t]:Lr=t}function om(){if(Lr){var t=Lr,e=Mr;if(Mr=Lr=null,ch(t),e)for(t=0;t<e.length;t++)ch(e[t])}}function lm(t,e){return t(e)}function am(){}var ra=!1;function um(t,e,n){if(ra)return t(e,n);ra=!0;try{return lm(t,e,n)}finally{ra=!1,(Lr!==null||Mr!==null)&&(am(),om())}}function qi(t,e){var n=t.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var ou=!1;if(zt)try{var mi={};Object.defineProperty(mi,"passive",{get:function(){ou=!0}}),window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{ou=!1}function m0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var bi=!1,Ro=null,xo=!1,lu=null,g0={onError:function(t){bi=!0,Ro=t}};function _0(t,e,n,r,i,s,o,l,a){bi=!1,Ro=null,m0.apply(g0,arguments)}function v0(t,e,n,r,i,s,o,l,a){if(_0.apply(this,arguments),bi){if(bi){var u=Ro;bi=!1,Ro=null}else throw Error(C(198));xo||(xo=!0,lu=u)}}function pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dh(t){if(pr(t)!==t)throw Error(C(188))}function y0(t){var e=t.alternate;if(!e){if(e=pr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dh(i),t;if(s===r)return dh(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function dm(t){return t=y0(t),t!==null?hm(t):null}function hm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hm(t);if(e!==null)return e;t=t.sibling}return null}var fm=Qe.unstable_scheduleCallback,hh=Qe.unstable_cancelCallback,w0=Qe.unstable_shouldYield,E0=Qe.unstable_requestPaint,oe=Qe.unstable_now,S0=Qe.unstable_getCurrentPriorityLevel,Sc=Qe.unstable_ImmediatePriority,pm=Qe.unstable_UserBlockingPriority,Po=Qe.unstable_NormalPriority,C0=Qe.unstable_LowPriority,mm=Qe.unstable_IdlePriority,wl=null,Ct=null;function I0(t){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:N0,k0=Math.log,T0=Math.LN2;function N0(t){return t>>>=0,t===0?32:31-(k0(t)/T0|0)|0}var Ws=64,zs=4194304;function Ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ri(l):(s&=o,s!==0&&(r=Ri(s)))}else o=n&~i,o!==0?r=Ri(o):s!==0&&(r=Ri(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ft(e),i=1<<n,r|=t[n],e&=~i;return r}function A0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ft(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=A0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gm(){var t=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),t}function ia(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ft(e),t[e]=n}function x0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var z=0;function _m(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vm,Ic,ym,wm,Em,uu=!1,Hs=[],pn=null,mn=null,gn=null,Yi=new Map,Xi=new Map,sn=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(t,e){switch(t){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":Yi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xi.delete(e.pointerId)}}function gi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ws(e),e!==null&&Ic(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function O0(t,e,n,r,i){switch(e){case"focusin":return pn=gi(pn,t,e,n,r,i),!0;case"dragenter":return mn=gi(mn,t,e,n,r,i),!0;case"mouseover":return gn=gi(gn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Yi.set(s,gi(Yi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xi.set(s,gi(Xi.get(s)||null,t,e,n,r,i)),!0}return!1}function Sm(t){var e=zn(t.target);if(e!==null){var n=pr(e);if(n!==null){if(e=n.tag,e===13){if(e=cm(n),e!==null){t.blockedOn=e,Em(t.priority,function(){ym(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);iu=r,n.target.dispatchEvent(r),iu=null}else return e=ws(n),e!==null&&Ic(e),t.blockedOn=n,!1;e.shift()}return!0}function ph(t,e,n){fo(t)&&n.delete(e)}function D0(){uu=!1,pn!==null&&fo(pn)&&(pn=null),mn!==null&&fo(mn)&&(mn=null),gn!==null&&fo(gn)&&(gn=null),Yi.forEach(ph),Xi.forEach(ph)}function _i(t,e){t.blockedOn===e&&(t.blockedOn=null,uu||(uu=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,D0)))}function Ji(t){function e(i){return _i(i,t)}if(0<Hs.length){_i(Hs[0],t);for(var n=1;n<Hs.length;n++){var r=Hs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pn!==null&&_i(pn,t),mn!==null&&_i(mn,t),gn!==null&&_i(gn,t),Yi.forEach(e),Xi.forEach(e),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)Sm(n),n.blockedOn===null&&sn.shift()}var Ur=Yt.ReactCurrentBatchConfig,Do=!0;function b0(t,e,n,r){var i=z,s=Ur.transition;Ur.transition=null;try{z=1,kc(t,e,n,r)}finally{z=i,Ur.transition=s}}function L0(t,e,n,r){var i=z,s=Ur.transition;Ur.transition=null;try{z=4,kc(t,e,n,r)}finally{z=i,Ur.transition=s}}function kc(t,e,n,r){if(Do){var i=cu(t,e,n,r);if(i===null)pa(t,e,r,bo,n),fh(t,r);else if(O0(i,t,e,n,r))r.stopPropagation();else if(fh(t,r),e&4&&-1<P0.indexOf(t)){for(;i!==null;){var s=ws(i);if(s!==null&&vm(s),s=cu(t,e,n,r),s===null&&pa(t,e,r,bo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pa(t,e,r,null,n)}}var bo=null;function cu(t,e,n,r){if(bo=null,t=Ec(r),t=zn(t),t!==null)if(e=pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bo=t,null}function Cm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S0()){case Sc:return 1;case pm:return 4;case Po:case C0:return 16;case mm:return 536870912;default:return 16}default:return 16}}var dn=null,Tc=null,po=null;function Im(){if(po)return po;var t,e=Tc,n=e.length,r,i="value"in dn?dn.value:dn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return po=i.slice(t,1<r?1-r:void 0)}function mo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vs(){return!0}function mh(){return!1}function qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vs:mh,this.isPropagationStopped=mh,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),e}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=qe(ni),ys=te({},ni,{view:0,detail:0}),M0=qe(ys),sa,oa,vi,El=te({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vi&&(vi&&t.type==="mousemove"?(sa=t.screenX-vi.screenX,oa=t.screenY-vi.screenY):oa=sa=0,vi=t),sa)},movementY:function(t){return"movementY"in t?t.movementY:oa}}),gh=qe(El),U0=te({},El,{dataTransfer:0}),j0=qe(U0),F0=te({},ys,{relatedTarget:0}),la=qe(F0),B0=te({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=qe(B0),z0=te({},ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H0=qe(z0),V0=te({},ni,{data:0}),_h=qe(V0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Q0[t])?!!e[t]:!1}function Ac(){return $0}var q0=te({},ys,{key:function(t){if(t.key){var e=G0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(t){return t.type==="keypress"?mo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y0=qe(q0),X0=te({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=qe(X0),J0=te({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),Z0=qe(J0),ew=te({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),tw=qe(ew),nw=te({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rw=qe(nw),iw=[9,13,27,32],Rc=zt&&"CompositionEvent"in window,Li=null;zt&&"documentMode"in document&&(Li=document.documentMode);var sw=zt&&"TextEvent"in window&&!Li,km=zt&&(!Rc||Li&&8<Li&&11>=Li),yh=String.fromCharCode(32),wh=!1;function Tm(t,e){switch(t){case"keyup":return iw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cr=!1;function ow(t,e){switch(t){case"compositionend":return Nm(e);case"keypress":return e.which!==32?null:(wh=!0,yh);case"textInput":return t=e.data,t===yh&&wh?null:t;default:return null}}function lw(t,e){if(Cr)return t==="compositionend"||!Rc&&Tm(t,e)?(t=Im(),po=Tc=dn=null,Cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return km&&e.locale!=="ko"?null:e.data;default:return null}}var aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aw[t.type]:e==="textarea"}function Am(t,e,n,r){sm(r),e=Lo(e,"onChange"),0<e.length&&(n=new Nc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Mi=null,Zi=null;function uw(t){Fm(t,0)}function Sl(t){var e=Tr(t);if(Jp(e))return t}function cw(t,e){if(t==="change")return e}var Rm=!1;if(zt){var aa;if(zt){var ua="oninput"in document;if(!ua){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),ua=typeof Sh.oninput=="function"}aa=ua}else aa=!1;Rm=aa&&(!document.documentMode||9<document.documentMode)}function Ch(){Mi&&(Mi.detachEvent("onpropertychange",xm),Zi=Mi=null)}function xm(t){if(t.propertyName==="value"&&Sl(Zi)){var e=[];Am(e,Zi,t,Ec(t)),um(uw,e)}}function dw(t,e,n){t==="focusin"?(Ch(),Mi=e,Zi=n,Mi.attachEvent("onpropertychange",xm)):t==="focusout"&&Ch()}function hw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(Zi)}function fw(t,e){if(t==="click")return Sl(e)}function pw(t,e){if(t==="input"||t==="change")return Sl(e)}function mw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gt=typeof Object.is=="function"?Object.is:mw;function es(t,e){if(gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ka.call(e,i)||!gt(t[i],e[i]))return!1}return!0}function Ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kh(t,e){var n=Ih(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function Pm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Om(){for(var t=window,e=Ao();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ao(t.document)}return e}function xc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gw(t){var e=Om(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pm(n.ownerDocument.documentElement,n)){if(r!==null&&xc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kh(n,s);var o=kh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _w=zt&&"documentMode"in document&&11>=document.documentMode,Ir=null,du=null,Ui=null,hu=!1;function Th(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||Ir==null||Ir!==Ao(r)||(r=Ir,"selectionStart"in r&&xc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ui&&es(Ui,r)||(Ui=r,r=Lo(du,"onSelect"),0<r.length&&(e=new Nc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ir)))}function Gs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var kr={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionend:Gs("Transition","TransitionEnd")},ca={},Dm={};zt&&(Dm=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function Cl(t){if(ca[t])return ca[t];if(!kr[t])return t;var e=kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dm)return ca[t]=e[n];return t}var bm=Cl("animationend"),Lm=Cl("animationiteration"),Mm=Cl("animationstart"),Um=Cl("transitionend"),jm=new Map,Nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(t,e){jm.set(t,e),fr(e,[t])}for(var da=0;da<Nh.length;da++){var ha=Nh[da],vw=ha.toLowerCase(),yw=ha[0].toUpperCase()+ha.slice(1);xn(vw,"on"+yw)}xn(bm,"onAnimationEnd");xn(Lm,"onAnimationIteration");xn(Mm,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Um,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ww=new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));function Ah(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,v0(r,e,void 0,t),t.currentTarget=null}function Fm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Ah(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Ah(i,l,u),s=a}}}if(xo)throw t=lu,xo=!1,lu=null,t}function K(t,e){var n=e[_u];n===void 0&&(n=e[_u]=new Set);var r=t+"__bubble";n.has(r)||(Bm(e,t,2,!1),n.add(r))}function fa(t,e,n){var r=0;e&&(r|=4),Bm(n,t,r,e)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function ts(t){if(!t[Ks]){t[Ks]=!0,Qp.forEach(function(n){n!=="selectionchange"&&(ww.has(n)||fa(n,!1,t),fa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ks]||(e[Ks]=!0,fa("selectionchange",!1,e))}}function Bm(t,e,n,r){switch(Cm(e)){case 1:var i=b0;break;case 4:i=L0;break;default:i=kc}n=i.bind(null,e,n,t),i=void 0,!ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=zn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}um(function(){var u=s,h=Ec(n),d=[];e:{var f=jm.get(t);if(f!==void 0){var _=Nc,v=t;switch(t){case"keypress":if(mo(n)===0)break e;case"keydown":case"keyup":_=Y0;break;case"focusin":v="focus",_=la;break;case"focusout":v="blur",_=la;break;case"beforeblur":case"afterblur":_=la;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Z0;break;case bm:case Lm:case Mm:_=W0;break;case Um:_=tw;break;case"scroll":_=M0;break;case"wheel":_=rw;break;case"copy":case"cut":case"paste":_=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=vh}var y=(e&4)!==0,S=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=qi(p,m),w!=null&&y.push(ns(p,w,g)))),S)break;p=p.return}0<y.length&&(f=new _(f,v,null,n,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==iu&&(v=n.relatedTarget||n.fromElement)&&(zn(v)||v[Ht]))break e;if((_||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?zn(v):null,v!==null&&(S=pr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=gh,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=vh,w="onPointerLeave",m="onPointerEnter",p="pointer"),S=_==null?f:Tr(_),g=v==null?f:Tr(v),f=new y(w,p+"leave",_,n,h),f.target=S,f.relatedTarget=g,w=null,zn(h)===u&&(y=new y(m,p+"enter",v,n,h),y.target=g,y.relatedTarget=S,w=y),S=w,_&&v)t:{for(y=_,m=v,p=0,g=y;g;g=yr(g))p++;for(g=0,w=m;w;w=yr(w))g++;for(;0<p-g;)y=yr(y),p--;for(;0<g-p;)m=yr(m),g--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=yr(y),m=yr(m)}y=null}else y=null;_!==null&&Rh(d,f,_,y,!1),v!==null&&S!==null&&Rh(d,S,v,y,!0)}}e:{if(f=u?Tr(u):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var I=cw;else if(Eh(f))if(Rm)I=pw;else{I=hw;var k=dw}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=fw);if(I&&(I=I(t,u))){Am(d,I,n,h);break e}k&&k(t,f,u),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&Za(f,"number",f.value)}switch(k=u?Tr(u):window,t){case"focusin":(Eh(k)||k.contentEditable==="true")&&(Ir=k,du=u,Ui=null);break;case"focusout":Ui=du=Ir=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Th(d,n,h);break;case"selectionchange":if(_w)break;case"keydown":case"keyup":Th(d,n,h)}var N;if(Rc)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Cr?Tm(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(km&&n.locale!=="ko"&&(Cr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Cr&&(N=Im()):(dn=h,Tc="value"in dn?dn.value:dn.textContent,Cr=!0)),k=Lo(u,x),0<k.length&&(x=new _h(x,t,null,n,h),d.push({event:x,listeners:k}),N?x.data=N:(N=Nm(n),N!==null&&(x.data=N)))),(N=sw?ow(t,n):lw(t,n))&&(u=Lo(u,"onBeforeInput"),0<u.length&&(h=new _h("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=N))}Fm(d,e)})}function ns(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qi(t,n),s!=null&&r.unshift(ns(t,s,i)),s=qi(t,e),s!=null&&r.push(ns(t,s,i))),t=t.return}return r}function yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=qi(n,s),a!=null&&o.unshift(ns(n,a,l))):i||(a=qi(n,s),a!=null&&o.push(ns(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ew=/\r\n?/g,Sw=/\u0000|\uFFFD/g;function xh(t){return(typeof t=="string"?t:""+t).replace(Ew,`
`).replace(Sw,"")}function Qs(t,e,n){if(e=xh(e),xh(t)!==e&&n)throw Error(C(425))}function Mo(){}var fu=null,pu=null;function mu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,Cw=typeof clearTimeout=="function"?clearTimeout:void 0,Ph=typeof Promise=="function"?Promise:void 0,Iw=typeof queueMicrotask=="function"?queueMicrotask:typeof Ph<"u"?function(t){return Ph.resolve(null).then(t).catch(kw)}:gu;function kw(t){setTimeout(function(){throw t})}function ma(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ji(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ji(e)}function _n(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Oh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ri=Math.random().toString(36).slice(2),wt="__reactFiber$"+ri,rs="__reactProps$"+ri,Ht="__reactContainer$"+ri,_u="__reactEvents$"+ri,Tw="__reactListeners$"+ri,Nw="__reactHandles$"+ri;function zn(t){var e=t[wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ht]||n[wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Oh(t);t!==null;){if(n=t[wt])return n;t=Oh(t)}return e}t=n,n=t.parentNode}return null}function ws(t){return t=t[wt]||t[Ht],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Il(t){return t[rs]||null}var vu=[],Nr=-1;function Pn(t){return{current:t}}function q(t){0>Nr||(t.current=vu[Nr],vu[Nr]=null,Nr--)}function G(t,e){Nr++,vu[Nr]=t.current,t.current=e}var Nn={},xe=Pn(Nn),Be=Pn(!1),Zn=Nn;function Kr(t,e){var n=t.type.contextTypes;if(!n)return Nn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function We(t){return t=t.childContextTypes,t!=null}function Uo(){q(Be),q(xe)}function Dh(t,e,n){if(xe.current!==Nn)throw Error(C(168));G(xe,e),G(Be,n)}function Wm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,d0(t)||"Unknown",i));return te({},n,r)}function jo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nn,Zn=xe.current,G(xe,t),G(Be,Be.current),!0}function bh(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Wm(t,e,Zn),r.__reactInternalMemoizedMergedChildContext=t,q(Be),q(xe),G(xe,t)):q(Be),G(Be,n)}var Ot=null,kl=!1,ga=!1;function zm(t){Ot===null?Ot=[t]:Ot.push(t)}function Aw(t){kl=!0,zm(t)}function On(){if(!ga&&Ot!==null){ga=!0;var t=0,e=z;try{var n=Ot;for(z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ot=null,kl=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(t+1)),fm(Sc,On),i}finally{z=e,ga=!1}}return null}var Ar=[],Rr=0,Fo=null,Bo=0,Xe=[],Je=0,er=null,bt=1,Lt="";function jn(t,e){Ar[Rr++]=Bo,Ar[Rr++]=Fo,Fo=t,Bo=e}function Hm(t,e,n){Xe[Je++]=bt,Xe[Je++]=Lt,Xe[Je++]=er,er=t;var r=bt;t=Lt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var s=32-ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bt=1<<32-ft(e)+i|n<<i|r,Lt=s+t}else bt=1<<s|n<<i|r,Lt=t}function Pc(t){t.return!==null&&(jn(t,1),Hm(t,1,0))}function Oc(t){for(;t===Fo;)Fo=Ar[--Rr],Ar[Rr]=null,Bo=Ar[--Rr],Ar[Rr]=null;for(;t===er;)er=Xe[--Je],Xe[Je]=null,Lt=Xe[--Je],Xe[Je]=null,bt=Xe[--Je],Xe[Je]=null}var Ke=null,Ge=null,X=!1,ct=null;function Vm(t,e){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=_n(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=er!==null?{id:bt,overflow:Lt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ke=t,Ge=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wu(t){if(X){var e=Ge;if(e){var n=e;if(!Lh(t,e)){if(yu(t))throw Error(C(418));e=_n(n.nextSibling);var r=Ke;e&&Lh(t,e)?Vm(r,n):(t.flags=t.flags&-4097|2,X=!1,Ke=t)}}else{if(yu(t))throw Error(C(418));t.flags=t.flags&-4097|2,X=!1,Ke=t}}}function Mh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ke=t}function $s(t){if(t!==Ke)return!1;if(!X)return Mh(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mu(t.type,t.memoizedProps)),e&&(e=Ge)){if(yu(t))throw Gm(),Error(C(418));for(;e;)Vm(t,e),e=_n(e.nextSibling)}if(Mh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ge=_n(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Ke?_n(t.stateNode.nextSibling):null;return!0}function Gm(){for(var t=Ge;t;)t=_n(t.nextSibling)}function Qr(){Ge=Ke=null,X=!1}function Dc(t){ct===null?ct=[t]:ct.push(t)}var Rw=Yt.ReactCurrentBatchConfig;function at(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Wo=Pn(null),zo=null,xr=null,bc=null;function Lc(){bc=xr=zo=null}function Mc(t){var e=Wo.current;q(Wo),t._currentValue=e}function Eu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function jr(t,e){zo=t,bc=xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(je=!0),t.firstContext=null)}function nt(t){var e=t._currentValue;if(bc!==t)if(t={context:t,memoizedValue:e,next:null},xr===null){if(zo===null)throw Error(C(308));xr=t,zo.dependencies={lanes:0,firstContext:t}}else xr=xr.next=t;return e}var Hn=null;function Uc(t){Hn===null?Hn=[t]:Hn.push(t)}function Km(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Uc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vt(t,r)}function Vt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rn=!1;function jc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vt(t,n)}return i=r.interleaved,i===null?(e.next=e,Uc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vt(t,n)}function go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cc(t,n)}}function Uh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ho(t,e,n,r){var i=t.updateQueue;rn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,h=u=a=null,l=s;do{var f=l.lane,_=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(f=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(_,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(_,d,f):v,f==null)break e;d=te({},d,f);break e;case 2:rn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else _={eventTime:_,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=_,a=d):h=h.next=_,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(h===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);nr|=o,t.lanes=o,t.memoizedState=d}}function jh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var $m=new Kp.Component().refs;function Su(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tl={isMounted:function(t){return(t=t._reactInternals)?pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=be(),i=wn(t),s=Bt(r,i);s.payload=e,n!=null&&(s.callback=n),e=vn(t,s,i),e!==null&&(pt(e,t,i,r),go(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=be(),i=wn(t),s=Bt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vn(t,s,i),e!==null&&(pt(e,t,i,r),go(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=be(),r=wn(t),i=Bt(n,r);i.tag=2,e!=null&&(i.callback=e),e=vn(t,i,r),e!==null&&(pt(e,t,r,n),go(e,t,r))}};function Fh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!es(n,r)||!es(i,s):!0}function qm(t,e,n){var r=!1,i=Nn,s=e.contextType;return typeof s=="object"&&s!==null?s=nt(s):(i=We(e)?Zn:xe.current,r=e.contextTypes,s=(r=r!=null)?Kr(t,i):Nn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tl.enqueueReplaceState(e,e.state,null)}function Cu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=$m,jc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nt(s):(s=We(e)?Zn:xe.current,i.context=Kr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Su(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tl.enqueueReplaceState(i,i.state,null),Ho(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function yi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===$m&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function qs(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wh(t){var e=t._init;return e(t._payload)}function Ym(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=En(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,w){return p===null||p.tag!==6?(p=Ca(g,m.mode,w),p.return=m,p):(p=i(p,g),p.return=m,p)}function a(m,p,g,w){var I=g.type;return I===Sr?h(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===nn&&Wh(I)===p.type)?(w=i(p,g.props),w.ref=yi(m,p,g),w.return=m,w):(w=So(g.type,g.key,g.props,null,m.mode,w),w.ref=yi(m,p,g),w.return=m,w)}function u(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ia(g,m.mode,w),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function h(m,p,g,w,I){return p===null||p.tag!==7?(p=qn(g,m.mode,w,I),p.return=m,p):(p=i(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ca(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case js:return g=So(p.type,p.key,p.props,null,m.mode,g),g.ref=yi(m,null,p),g.return=m,g;case Er:return p=Ia(p,m.mode,g),p.return=m,p;case nn:var w=p._init;return d(m,w(p._payload),g)}if(Ai(p)||pi(p))return p=qn(p,m.mode,g,null),p.return=m,p;qs(m,p)}return null}function f(m,p,g,w){var I=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:l(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case js:return g.key===I?a(m,p,g,w):null;case Er:return g.key===I?u(m,p,g,w):null;case nn:return I=g._init,f(m,p,I(g._payload),w)}if(Ai(g)||pi(g))return I!==null?null:h(m,p,g,w,null);qs(m,g)}return null}function _(m,p,g,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(p,m,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case js:return m=m.get(w.key===null?g:w.key)||null,a(p,m,w,I);case Er:return m=m.get(w.key===null?g:w.key)||null,u(p,m,w,I);case nn:var k=w._init;return _(m,p,g,k(w._payload),I)}if(Ai(w)||pi(w))return m=m.get(g)||null,h(p,m,w,I,null);qs(p,w)}return null}function v(m,p,g,w){for(var I=null,k=null,N=p,x=p=0,F=null;N!==null&&x<g.length;x++){N.index>x?(F=N,N=null):F=N.sibling;var P=f(m,N,g[x],w);if(P===null){N===null&&(N=F);break}t&&N&&P.alternate===null&&e(m,N),p=s(P,p,x),k===null?I=P:k.sibling=P,k=P,N=F}if(x===g.length)return n(m,N),X&&jn(m,x),I;if(N===null){for(;x<g.length;x++)N=d(m,g[x],w),N!==null&&(p=s(N,p,x),k===null?I=N:k.sibling=N,k=N);return X&&jn(m,x),I}for(N=r(m,N);x<g.length;x++)F=_(N,m,x,g[x],w),F!==null&&(t&&F.alternate!==null&&N.delete(F.key===null?x:F.key),p=s(F,p,x),k===null?I=F:k.sibling=F,k=F);return t&&N.forEach(function(fe){return e(m,fe)}),X&&jn(m,x),I}function y(m,p,g,w){var I=pi(g);if(typeof I!="function")throw Error(C(150));if(g=I.call(g),g==null)throw Error(C(151));for(var k=I=null,N=p,x=p=0,F=null,P=g.next();N!==null&&!P.done;x++,P=g.next()){N.index>x?(F=N,N=null):F=N.sibling;var fe=f(m,N,P.value,w);if(fe===null){N===null&&(N=F);break}t&&N&&fe.alternate===null&&e(m,N),p=s(fe,p,x),k===null?I=fe:k.sibling=fe,k=fe,N=F}if(P.done)return n(m,N),X&&jn(m,x),I;if(N===null){for(;!P.done;x++,P=g.next())P=d(m,P.value,w),P!==null&&(p=s(P,p,x),k===null?I=P:k.sibling=P,k=P);return X&&jn(m,x),I}for(N=r(m,N);!P.done;x++,P=g.next())P=_(N,m,x,P.value,w),P!==null&&(t&&P.alternate!==null&&N.delete(P.key===null?x:P.key),p=s(P,p,x),k===null?I=P:k.sibling=P,k=P);return t&&N.forEach(function(ot){return e(m,ot)}),X&&jn(m,x),I}function S(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===Sr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case js:e:{for(var I=g.key,k=p;k!==null;){if(k.key===I){if(I=g.type,I===Sr){if(k.tag===7){n(m,k.sibling),p=i(k,g.props.children),p.return=m,m=p;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===nn&&Wh(I)===k.type){n(m,k.sibling),p=i(k,g.props),p.ref=yi(m,k,g),p.return=m,m=p;break e}n(m,k);break}else e(m,k);k=k.sibling}g.type===Sr?(p=qn(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=So(g.type,g.key,g.props,null,m.mode,w),w.ref=yi(m,p,g),w.return=m,m=w)}return o(m);case Er:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Ia(g,m.mode,w),p.return=m,m=p}return o(m);case nn:return k=g._init,S(m,p,k(g._payload),w)}if(Ai(g))return v(m,p,g,w);if(pi(g))return y(m,p,g,w);qs(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Ca(g,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return S}var $r=Ym(!0),Xm=Ym(!1),Es={},It=Pn(Es),is=Pn(Es),ss=Pn(Es);function Vn(t){if(t===Es)throw Error(C(174));return t}function Fc(t,e){switch(G(ss,e),G(is,t),G(It,Es),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tu(e,t)}q(It),G(It,e)}function qr(){q(It),q(is),q(ss)}function Jm(t){Vn(ss.current);var e=Vn(It.current),n=tu(e,t.type);e!==n&&(G(is,t),G(It,n))}function Bc(t){is.current===t&&(q(It),q(is))}var Z=Pn(0);function Vo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _a=[];function Wc(){for(var t=0;t<_a.length;t++)_a[t]._workInProgressVersionPrimary=null;_a.length=0}var _o=Yt.ReactCurrentDispatcher,va=Yt.ReactCurrentBatchConfig,tr=0,ee=null,ce=null,me=null,Go=!1,ji=!1,os=0,xw=0;function ke(){throw Error(C(321))}function zc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gt(t[n],e[n]))return!1;return!0}function Hc(t,e,n,r,i,s){if(tr=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_o.current=t===null||t.memoizedState===null?bw:Lw,t=n(r,i),ji){s=0;do{if(ji=!1,os=0,25<=s)throw Error(C(301));s+=1,me=ce=null,e.updateQueue=null,_o.current=Mw,t=n(r,i)}while(ji)}if(_o.current=Ko,e=ce!==null&&ce.next!==null,tr=0,me=ce=ee=null,Go=!1,e)throw Error(C(300));return t}function Vc(){var t=os!==0;return os=0,t}function yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ee.memoizedState=me=t:me=me.next=t,me}function rt(){if(ce===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=ce.next;var e=me===null?ee.memoizedState:me.next;if(e!==null)me=e,ce=t;else{if(t===null)throw Error(C(310));ce=t,t={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},me===null?ee.memoizedState=me=t:me=me.next=t}return me}function ls(t,e){return typeof e=="function"?e(t):e}function ya(t){var e=rt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((tr&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,ee.lanes|=h,nr|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,gt(r,e.memoizedState)||(je=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,nr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wa(t){var e=rt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gt(s,e.memoizedState)||(je=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Zm(){}function eg(t,e){var n=ee,r=rt(),i=e(),s=!gt(r.memoizedState,i);if(s&&(r.memoizedState=i,je=!0),r=r.queue,Gc(rg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,as(9,ng.bind(null,n,r,i,e),void 0,null),ve===null)throw Error(C(349));tr&30||tg(n,e,i)}return i}function tg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ng(t,e,n,r){e.value=n,e.getSnapshot=r,ig(e)&&sg(t)}function rg(t,e,n){return n(function(){ig(e)&&sg(t)})}function ig(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gt(t,n)}catch{return!0}}function sg(t){var e=Vt(t,1);e!==null&&pt(e,t,1,-1)}function zh(t){var e=yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:t},e.queue=t,t=t.dispatch=Dw.bind(null,ee,t),[e.memoizedState,t]}function as(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function og(){return rt().memoizedState}function vo(t,e,n,r){var i=yt();ee.flags|=t,i.memoizedState=as(1|e,n,void 0,r===void 0?null:r)}function Nl(t,e,n,r){var i=rt();r=r===void 0?null:r;var s=void 0;if(ce!==null){var o=ce.memoizedState;if(s=o.destroy,r!==null&&zc(r,o.deps)){i.memoizedState=as(e,n,s,r);return}}ee.flags|=t,i.memoizedState=as(1|e,n,s,r)}function Hh(t,e){return vo(8390656,8,t,e)}function Gc(t,e){return Nl(2048,8,t,e)}function lg(t,e){return Nl(4,2,t,e)}function ag(t,e){return Nl(4,4,t,e)}function ug(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cg(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,ug.bind(null,e,t),n)}function Kc(){}function dg(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hg(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fg(t,e,n){return tr&21?(gt(n,e)||(n=gm(),ee.lanes|=n,nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,je=!0),t.memoizedState=n)}function Pw(t,e){var n=z;z=n!==0&&4>n?n:4,t(!0);var r=va.transition;va.transition={};try{t(!1),e()}finally{z=n,va.transition=r}}function pg(){return rt().memoizedState}function Ow(t,e,n){var r=wn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mg(t))gg(e,n);else if(n=Km(t,e,n,r),n!==null){var i=be();pt(n,t,r,i),_g(n,e,r)}}function Dw(t,e,n){var r=wn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mg(t))gg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,gt(l,o)){var a=e.interleaved;a===null?(i.next=i,Uc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Km(t,e,i,r),n!==null&&(i=be(),pt(n,t,r,i),_g(n,e,r))}}function mg(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function gg(t,e){ji=Go=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _g(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cc(t,n)}}var Ko={readContext:nt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},bw={readContext:nt,useCallback:function(t,e){return yt().memoizedState=[t,e===void 0?null:e],t},useContext:nt,useEffect:Hh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vo(4194308,4,ug.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vo(4194308,4,t,e)},useInsertionEffect:function(t,e){return vo(4,2,t,e)},useMemo:function(t,e){var n=yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ow.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=yt();return t={current:t},e.memoizedState=t},useState:zh,useDebugValue:Kc,useDeferredValue:function(t){return yt().memoizedState=t},useTransition:function(){var t=zh(!1),e=t[0];return t=Pw.bind(null,t[1]),yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=yt();if(X){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),ve===null)throw Error(C(349));tr&30||tg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Hh(rg.bind(null,r,s,t),[t]),r.flags|=2048,as(9,ng.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yt(),e=ve.identifierPrefix;if(X){var n=Lt,r=bt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=os++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lw={readContext:nt,useCallback:dg,useContext:nt,useEffect:Gc,useImperativeHandle:cg,useInsertionEffect:lg,useLayoutEffect:ag,useMemo:hg,useReducer:ya,useRef:og,useState:function(){return ya(ls)},useDebugValue:Kc,useDeferredValue:function(t){var e=rt();return fg(e,ce.memoizedState,t)},useTransition:function(){var t=ya(ls)[0],e=rt().memoizedState;return[t,e]},useMutableSource:Zm,useSyncExternalStore:eg,useId:pg,unstable_isNewReconciler:!1},Mw={readContext:nt,useCallback:dg,useContext:nt,useEffect:Gc,useImperativeHandle:cg,useInsertionEffect:lg,useLayoutEffect:ag,useMemo:hg,useReducer:wa,useRef:og,useState:function(){return wa(ls)},useDebugValue:Kc,useDeferredValue:function(t){var e=rt();return ce===null?e.memoizedState=t:fg(e,ce.memoizedState,t)},useTransition:function(){var t=wa(ls)[0],e=rt().memoizedState;return[t,e]},useMutableSource:Zm,useSyncExternalStore:eg,useId:pg,unstable_isNewReconciler:!1};function Yr(t,e){try{var n="",r=e;do n+=c0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ea(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Iu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Uw=typeof WeakMap=="function"?WeakMap:Map;function vg(t,e,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$o||($o=!0,bu=r),Iu(t,e)},n}function yg(t,e,n){n=Bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Iu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Iu(t,e),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Uw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Xw.bind(null,t,e,n),e.then(t,t))}function Gh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bt(-1,1),e.tag=2,vn(n,e,1))),n.lanes|=1),t)}var jw=Yt.ReactCurrentOwner,je=!1;function De(t,e,n,r){e.child=t===null?Xm(e,null,n,r):$r(e,t.child,n,r)}function Qh(t,e,n,r,i){n=n.render;var s=e.ref;return jr(e,i),r=Hc(t,e,n,r,s,i),n=Vc(),t!==null&&!je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(X&&n&&Pc(e),e.flags|=1,De(t,e,r,i),e.child)}function $h(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ed(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wg(t,e,s,r,i)):(t=So(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:es,n(o,r)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=En(s,r),t.ref=e.ref,t.return=e,e.child=t}function wg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(es(s,r)&&t.ref===e.ref)if(je=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(je=!0);else return e.lanes=t.lanes,Gt(t,e,i)}return ku(t,e,n,r,i)}function Eg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Or,Ve),Ve|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(Or,Ve),Ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(Or,Ve),Ve|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(Or,Ve),Ve|=r;return De(t,e,i,n),e.child}function Sg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ku(t,e,n,r,i){var s=We(n)?Zn:xe.current;return s=Kr(e,s),jr(e,i),n=Hc(t,e,n,r,s,i),r=Vc(),t!==null&&!je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(X&&r&&Pc(e),e.flags|=1,De(t,e,n,i),e.child)}function qh(t,e,n,r,i){if(We(n)){var s=!0;jo(e)}else s=!1;if(jr(e,i),e.stateNode===null)yo(t,e),qm(e,n,r),Cu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=We(n)?Zn:xe.current,u=Kr(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Bh(e,o,r,u),rn=!1;var f=e.memoizedState;o.state=f,Ho(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Be.current||rn?(typeof h=="function"&&(Su(e,n,h,r),a=e.memoizedState),(l=rn||Fh(e,n,l,r,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:at(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=We(n)?Zn:xe.current,a=Kr(e,a));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&Bh(e,o,r,a),rn=!1,f=e.memoizedState,o.state=f,Ho(e,r,o,i);var v=e.memoizedState;l!==d||f!==v||Be.current||rn?(typeof _=="function"&&(Su(e,n,_,r),v=e.memoizedState),(u=rn||Fh(e,n,u,r,f,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Tu(t,e,n,r,s,i)}function Tu(t,e,n,r,i,s){Sg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&bh(e,n,!1),Gt(t,e,s);r=e.stateNode,jw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$r(e,t.child,null,s),e.child=$r(e,null,l,s)):De(t,e,l,s),e.memoizedState=r.state,i&&bh(e,n,!0),e.child}function Cg(t){var e=t.stateNode;e.pendingContext?Dh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dh(t,e.context,!1),Fc(t,e.containerInfo)}function Yh(t,e,n,r,i){return Qr(),Dc(i),e.flags|=256,De(t,e,n,r),e.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Au(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ig(t,e,n){var r=e.pendingProps,i=Z.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(Z,i&1),t===null)return wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xl(o,r,0,null),t=qn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Au(n),e.memoizedState=Nu,t):Qc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Fw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=En(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=En(l,s):(s=qn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Au(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nu,r}return s=t.child,t=s.sibling,r=En(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qc(t,e){return e=xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ys(t,e,n,r){return r!==null&&Dc(r),$r(e,t.child,null,n),t=Qc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ea(Error(C(422))),Ys(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xl({mode:"visible",children:r.children},i,0,null),s=qn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$r(e,t.child,null,o),e.child.memoizedState=Au(o),e.memoizedState=Nu,s);if(!(e.mode&1))return Ys(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Ea(s,r,void 0),Ys(t,e,o,r)}if(l=(o&t.childLanes)!==0,je||l){if(r=ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vt(t,i),pt(r,t,i,-1))}return Zc(),r=Ea(Error(C(421))),Ys(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Jw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ge=_n(i.nextSibling),Ke=e,X=!0,ct=null,t!==null&&(Xe[Je++]=bt,Xe[Je++]=Lt,Xe[Je++]=er,bt=t.id,Lt=t.overflow,er=e),e=Qc(e,r.children),e.flags|=4096,e)}function Xh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Eu(t.return,e,n)}function Sa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(De(t,e,r.children,n),r=Z.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xh(t,n,e);else if(t.tag===19)Xh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(Z,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sa(e,!0,n,null,s);break;case"together":Sa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=En(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=En(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bw(t,e,n){switch(e.tag){case 3:Cg(e),Qr();break;case 5:Jm(e);break;case 1:We(e.type)&&jo(e);break;case 4:Fc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(Wo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(Z,Z.current&1),e.flags|=128,null):n&e.child.childLanes?Ig(t,e,n):(G(Z,Z.current&1),t=Gt(t,e,n),t!==null?t.sibling:null);G(Z,Z.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Z,Z.current),r)break;return null;case 22:case 23:return e.lanes=0,Eg(t,e,n)}return Gt(t,e,n)}var Tg,Ru,Ng,Ag;Tg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ru=function(){};Ng=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vn(It.current);var s=null;switch(n){case"input":i=Xa(t,i),r=Xa(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=eu(t,i),r=eu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Mo)}nu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&K("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ag=function(t,e,n,r){n!==r&&(e.flags|=4)};function wi(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Te(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ww(t,e,n){var r=e.pendingProps;switch(Oc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(e),null;case 1:return We(e.type)&&Uo(),Te(e),null;case 3:return r=e.stateNode,qr(),q(Be),q(xe),Wc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($s(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ct!==null&&(Uu(ct),ct=null))),Ru(t,e),Te(e),null;case 5:Bc(e);var i=Vn(ss.current);if(n=e.type,t!==null&&e.stateNode!=null)Ng(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Te(e),null}if(t=Vn(It.current),$s(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wt]=e,r[rs]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<xi.length;i++)K(xi[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":oh(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":ah(r,s),K("invalid",r)}nu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,l,t),i=["children",""+l]):Qi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":Fs(r),lh(r,s,!0);break;case"textarea":Fs(r),uh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Mo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wt]=e,t[rs]=r,Tg(t,e,!1,!1),e.stateNode=t;e:{switch(o=ru(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<xi.length;i++)K(xi[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":oh(t,r),i=Xa(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),K("invalid",t);break;case"textarea":ah(t,r),i=eu(t,r),K("invalid",t);break;default:i=r}nu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?im(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&nm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&$i(t,a):typeof a=="number"&&$i(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&K("scroll",t):a!=null&&_c(t,s,a,o))}switch(n){case"input":Fs(t),lh(t,r,!1);break;case"textarea":Fs(t),uh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?br(t,!!r.multiple,s,!1):r.defaultValue!=null&&br(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Te(e),null;case 6:if(t&&e.stateNode!=null)Ag(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Vn(ss.current),Vn(It.current),$s(e)){if(r=e.stateNode,n=e.memoizedProps,r[wt]=e,(s=r.nodeValue!==n)&&(t=Ke,t!==null))switch(t.tag){case 3:Qs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=e,e.stateNode=r}return Te(e),null;case 13:if(q(Z),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&Ge!==null&&e.mode&1&&!(e.flags&128))Gm(),Qr(),e.flags|=98560,s=!1;else if(s=$s(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[wt]=e}else Qr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Te(e),s=!1}else ct!==null&&(Uu(ct),ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Z.current&1?he===0&&(he=3):Zc())),e.updateQueue!==null&&(e.flags|=4),Te(e),null);case 4:return qr(),Ru(t,e),t===null&&ts(e.stateNode.containerInfo),Te(e),null;case 10:return Mc(e.type._context),Te(e),null;case 17:return We(e.type)&&Uo(),Te(e),null;case 19:if(q(Z),s=e.memoizedState,s===null)return Te(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)wi(s,!1);else{if(he!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vo(t),o!==null){for(e.flags|=128,wi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(Z,Z.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>Xr&&(e.flags|=128,r=!0,wi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return Te(e),null}else 2*oe()-s.renderingStartTime>Xr&&n!==1073741824&&(e.flags|=128,r=!0,wi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=Z.current,G(Z,r?n&1|2:n&1),e):(Te(e),null);case 22:case 23:return Jc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ve&1073741824&&(Te(e),e.subtreeFlags&6&&(e.flags|=8192)):Te(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function zw(t,e){switch(Oc(e),e.tag){case 1:return We(e.type)&&Uo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qr(),q(Be),q(xe),Wc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bc(e),null;case 13:if(q(Z),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Qr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return q(Z),null;case 4:return qr(),null;case 10:return Mc(e.type._context),null;case 22:case 23:return Jc(),null;case 24:return null;default:return null}}var Xs=!1,Ne=!1,Hw=typeof WeakSet=="function"?WeakSet:Set,A=null;function Pr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(t,e,r)}else n.current=null}function xu(t,e,n){try{n()}catch(r){re(t,e,r)}}var Jh=!1;function Vw(t,e){if(fu=Do,t=Om(),xc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)f=d,d=_;for(;;){if(d===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++h===r&&(a=o),(_=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:t,selectionRange:n},Do=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:at(e.type,y),S);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){re(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=Jh,Jh=!1,v}function Fi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xu(e,n,s)}i=i.next}while(i!==r)}}function Al(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rg(t){var e=t.alternate;e!==null&&(t.alternate=null,Rg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wt],delete e[rs],delete e[_u],delete e[Tw],delete e[Nw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xg(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mo));else if(r!==4&&(t=t.child,t!==null))for(Ou(t,e,n),t=t.sibling;t!==null;)Ou(t,e,n),t=t.sibling}function Du(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Du(t,e,n),t=t.sibling;t!==null;)Du(t,e,n),t=t.sibling}var we=null,ut=!1;function en(t,e,n){for(n=n.child;n!==null;)Pg(t,e,n),n=n.sibling}function Pg(t,e,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:Ne||Pr(n,e);case 6:var r=we,i=ut;we=null,en(t,e,n),we=r,ut=i,we!==null&&(ut?(t=we,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(ut?(t=we,n=n.stateNode,t.nodeType===8?ma(t.parentNode,n):t.nodeType===1&&ma(t,n),Ji(t)):ma(we,n.stateNode));break;case 4:r=we,i=ut,we=n.stateNode.containerInfo,ut=!0,en(t,e,n),we=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xu(n,e,o),i=i.next}while(i!==r)}en(t,e,n);break;case 1:if(!Ne&&(Pr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,e,l)}en(t,e,n);break;case 21:en(t,e,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,en(t,e,n),Ne=r):en(t,e,n);break;default:en(t,e,n)}}function ef(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hw),e.forEach(function(r){var i=Zw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:we=l.stateNode,ut=!1;break e;case 3:we=l.stateNode.containerInfo,ut=!0;break e;case 4:we=l.stateNode.containerInfo,ut=!0;break e}l=l.return}if(we===null)throw Error(C(160));Pg(s,o,i),we=null,ut=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Og(e,t),e=e.sibling}function Og(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),_t(t),r&4){try{Fi(3,t,t.return),Al(3,t)}catch(y){re(t,t.return,y)}try{Fi(5,t,t.return)}catch(y){re(t,t.return,y)}}break;case 1:lt(e,t),_t(t),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(lt(e,t),_t(t),r&512&&n!==null&&Pr(n,n.return),t.flags&32){var i=t.stateNode;try{$i(i,"")}catch(y){re(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Zp(i,s),ru(l,o);var u=ru(l,s);for(o=0;o<a.length;o+=2){var h=a[o],d=a[o+1];h==="style"?im(i,d):h==="dangerouslySetInnerHTML"?nm(i,d):h==="children"?$i(i,d):_c(i,h,d,u)}switch(l){case"input":Ja(i,s);break;case"textarea":em(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?br(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?br(i,!!s.multiple,s.defaultValue,!0):br(i,!!s.multiple,s.multiple?[]:"",!1))}i[rs]=s}catch(y){re(t,t.return,y)}}break;case 6:if(lt(e,t),_t(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){re(t,t.return,y)}}break;case 3:if(lt(e,t),_t(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ji(e.containerInfo)}catch(y){re(t,t.return,y)}break;case 4:lt(e,t),_t(t);break;case 13:lt(e,t),_t(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Yc=oe())),r&4&&ef(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ne=(u=Ne)||h,lt(e,t),Ne=u):lt(e,t),_t(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(A=t,h=t.child;h!==null;){for(d=A=h;A!==null;){switch(f=A,_=f.child,f.tag){case 0:case 11:case 14:case 15:Fi(4,f,f.return);break;case 1:Pr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:Pr(f,f.return);break;case 22:if(f.memoizedState!==null){nf(d);continue}}_!==null?(_.return=f,A=_):nf(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=rm("display",o))}catch(y){re(t,t.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){re(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(e,t),_t(t),r&4&&ef(t);break;case 21:break;default:lt(e,t),_t(t)}}function _t(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xg(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($i(i,""),r.flags&=-33);var s=Zh(t);Du(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Zh(t);Ou(t,l,o);break;default:throw Error(C(161))}}catch(a){re(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Gw(t,e,n){A=t,Dg(t)}function Dg(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ne;l=Xs;var u=Ne;if(Xs=o,(Ne=a)&&!u)for(A=i;A!==null;)o=A,a=o.child,o.tag===22&&o.memoizedState!==null?rf(i):a!==null?(a.return=o,A=a):rf(i);for(;s!==null;)A=s,Dg(s),s=s.sibling;A=i,Xs=l,Ne=u}tf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):tf(t)}}function tf(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ne||Al(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:at(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ji(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ne||e.flags&512&&Pu(e)}catch(f){re(e,e.return,f)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function nf(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function rf(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Al(4,e)}catch(a){re(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){re(e,i,a)}}var s=e.return;try{Pu(e)}catch(a){re(e,s,a)}break;case 5:var o=e.return;try{Pu(e)}catch(a){re(e,o,a)}}}catch(a){re(e,e.return,a)}if(e===t){A=null;break}var l=e.sibling;if(l!==null){l.return=e.return,A=l;break}A=e.return}}var Kw=Math.ceil,Qo=Yt.ReactCurrentDispatcher,$c=Yt.ReactCurrentOwner,tt=Yt.ReactCurrentBatchConfig,B=0,ve=null,ae=null,Ce=0,Ve=0,Or=Pn(0),he=0,us=null,nr=0,Rl=0,qc=0,Bi=null,Ue=null,Yc=0,Xr=1/0,Pt=null,$o=!1,bu=null,yn=null,Js=!1,hn=null,qo=0,Wi=0,Lu=null,wo=-1,Eo=0;function be(){return B&6?oe():wo!==-1?wo:wo=oe()}function wn(t){return t.mode&1?B&2&&Ce!==0?Ce&-Ce:Rw.transition!==null?(Eo===0&&(Eo=gm()),Eo):(t=z,t!==0||(t=window.event,t=t===void 0?16:Cm(t.type)),t):1}function pt(t,e,n,r){if(50<Wi)throw Wi=0,Lu=null,Error(C(185));vs(t,n,r),(!(B&2)||t!==ve)&&(t===ve&&(!(B&2)&&(Rl|=n),he===4&&on(t,Ce)),ze(t,r),n===1&&B===0&&!(e.mode&1)&&(Xr=oe()+500,kl&&On()))}function ze(t,e){var n=t.callbackNode;R0(t,e);var r=Oo(t,t===ve?Ce:0);if(r===0)n!==null&&hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hh(n),e===1)t.tag===0?Aw(sf.bind(null,t)):zm(sf.bind(null,t)),Iw(function(){!(B&6)&&On()}),n=null;else{switch(_m(r)){case 1:n=Sc;break;case 4:n=pm;break;case 16:n=Po;break;case 536870912:n=mm;break;default:n=Po}n=Wg(n,bg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bg(t,e){if(wo=-1,Eo=0,B&6)throw Error(C(327));var n=t.callbackNode;if(Fr()&&t.callbackNode!==n)return null;var r=Oo(t,t===ve?Ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yo(t,r);else{e=r;var i=B;B|=2;var s=Mg();(ve!==t||Ce!==e)&&(Pt=null,Xr=oe()+500,$n(t,e));do try{qw();break}catch(l){Lg(t,l)}while(1);Lc(),Qo.current=s,B=i,ae!==null?e=0:(ve=null,Ce=0,e=he)}if(e!==0){if(e===2&&(i=au(t),i!==0&&(r=i,e=Mu(t,i))),e===1)throw n=us,$n(t,0),on(t,r),ze(t,oe()),n;if(e===6)on(t,r);else{if(i=t.current.alternate,!(r&30)&&!Qw(i)&&(e=Yo(t,r),e===2&&(s=au(t),s!==0&&(r=s,e=Mu(t,s))),e===1))throw n=us,$n(t,0),on(t,r),ze(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Fn(t,Ue,Pt);break;case 3:if(on(t,r),(r&130023424)===r&&(e=Yc+500-oe(),10<e)){if(Oo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gu(Fn.bind(null,t,Ue,Pt),e);break}Fn(t,Ue,Pt);break;case 4:if(on(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kw(r/1960))-r,10<r){t.timeoutHandle=gu(Fn.bind(null,t,Ue,Pt),r);break}Fn(t,Ue,Pt);break;case 5:Fn(t,Ue,Pt);break;default:throw Error(C(329))}}}return ze(t,oe()),t.callbackNode===n?bg.bind(null,t):null}function Mu(t,e){var n=Bi;return t.current.memoizedState.isDehydrated&&($n(t,e).flags|=256),t=Yo(t,e),t!==2&&(e=Ue,Ue=n,e!==null&&Uu(e)),t}function Uu(t){Ue===null?Ue=t:Ue.push.apply(Ue,t)}function Qw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function on(t,e){for(e&=~qc,e&=~Rl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ft(e),r=1<<n;t[n]=-1,e&=~r}}function sf(t){if(B&6)throw Error(C(327));Fr();var e=Oo(t,0);if(!(e&1))return ze(t,oe()),null;var n=Yo(t,e);if(t.tag!==0&&n===2){var r=au(t);r!==0&&(e=r,n=Mu(t,r))}if(n===1)throw n=us,$n(t,0),on(t,e),ze(t,oe()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fn(t,Ue,Pt),ze(t,oe()),null}function Xc(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(Xr=oe()+500,kl&&On())}}function rr(t){hn!==null&&hn.tag===0&&!(B&6)&&Fr();var e=B;B|=1;var n=tt.transition,r=z;try{if(tt.transition=null,z=1,t)return t()}finally{z=r,tt.transition=n,B=e,!(B&6)&&On()}}function Jc(){Ve=Or.current,q(Or)}function $n(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cw(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Oc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uo();break;case 3:qr(),q(Be),q(xe),Wc();break;case 5:Bc(r);break;case 4:qr();break;case 13:q(Z);break;case 19:q(Z);break;case 10:Mc(r.type._context);break;case 22:case 23:Jc()}n=n.return}if(ve=t,ae=t=En(t.current,null),Ce=Ve=e,he=0,us=null,qc=Rl=nr=0,Ue=Bi=null,Hn!==null){for(e=0;e<Hn.length;e++)if(n=Hn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hn=null}return t}function Lg(t,e){do{var n=ae;try{if(Lc(),_o.current=Ko,Go){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Go=!1}if(tr=0,me=ce=ee=null,ji=!1,os=0,$c.current=null,n===null||n.return===null){he=1,us=e,ae=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ce,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Gh(o);if(_!==null){_.flags&=-257,Kh(_,o,l,s,e),_.mode&1&&Vh(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){Vh(s,u,e),Zc();break e}a=Error(C(426))}}else if(X&&l.mode&1){var S=Gh(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Kh(S,o,l,s,e),Dc(Yr(a,l));break e}}s=a=Yr(a,l),he!==4&&(he=2),Bi===null?Bi=[s]:Bi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=vg(s,a,e);Uh(s,m);break e;case 1:l=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(yn===null||!yn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=yg(s,l,e);Uh(s,w);break e}}s=s.return}while(s!==null)}jg(n)}catch(I){e=I,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(1)}function Mg(){var t=Qo.current;return Qo.current=Ko,t===null?Ko:t}function Zc(){(he===0||he===3||he===2)&&(he=4),ve===null||!(nr&268435455)&&!(Rl&268435455)||on(ve,Ce)}function Yo(t,e){var n=B;B|=2;var r=Mg();(ve!==t||Ce!==e)&&(Pt=null,$n(t,e));do try{$w();break}catch(i){Lg(t,i)}while(1);if(Lc(),B=n,Qo.current=r,ae!==null)throw Error(C(261));return ve=null,Ce=0,he}function $w(){for(;ae!==null;)Ug(ae)}function qw(){for(;ae!==null&&!w0();)Ug(ae)}function Ug(t){var e=Bg(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?jg(t):ae=e,$c.current=null}function jg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zw(n,e),n!==null){n.flags&=32767,ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,ae=null;return}}else if(n=Ww(n,e,Ve),n!==null){ae=n;return}if(e=e.sibling,e!==null){ae=e;return}ae=e=t}while(e!==null);he===0&&(he=5)}function Fn(t,e,n){var r=z,i=tt.transition;try{tt.transition=null,z=1,Yw(t,e,n,r)}finally{tt.transition=i,z=r}return null}function Yw(t,e,n,r){do Fr();while(hn!==null);if(B&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(x0(t,s),t===ve&&(ae=ve=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Js||(Js=!0,Wg(Po,function(){return Fr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tt.transition,tt.transition=null;var o=z;z=1;var l=B;B|=4,$c.current=null,Vw(t,n),Og(n,t),gw(pu),Do=!!fu,pu=fu=null,t.current=n,Gw(n),E0(),B=l,z=o,tt.transition=s}else t.current=n;if(Js&&(Js=!1,hn=t,qo=i),s=t.pendingLanes,s===0&&(yn=null),I0(n.stateNode),ze(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($o)throw $o=!1,t=bu,bu=null,t;return qo&1&&t.tag!==0&&Fr(),s=t.pendingLanes,s&1?t===Lu?Wi++:(Wi=0,Lu=t):Wi=0,On(),null}function Fr(){if(hn!==null){var t=_m(qo),e=tt.transition,n=z;try{if(tt.transition=null,z=16>t?16:t,hn===null)var r=!1;else{if(t=hn,hn=null,qo=0,B&6)throw Error(C(331));var i=B;for(B|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(A=u;A!==null;){var h=A;switch(h.tag){case 0:case 11:case 15:Fi(8,h,s)}var d=h.child;if(d!==null)d.return=h,A=d;else for(;A!==null;){h=A;var f=h.sibling,_=h.return;if(Rg(h),h===u){A=null;break}if(f!==null){f.return=_,A=f;break}A=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var p=t.current;for(A=p;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=p;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Al(9,l)}}catch(I){re(l,l.return,I)}if(l===o){A=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,A=w;break e}A=l.return}}if(B=i,On(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(wl,t)}catch{}r=!0}return r}finally{z=n,tt.transition=e}}return!1}function of(t,e,n){e=Yr(n,e),e=vg(t,e,1),t=vn(t,e,1),e=be(),t!==null&&(vs(t,1,e),ze(t,e))}function re(t,e,n){if(t.tag===3)of(t,t,n);else for(;e!==null;){if(e.tag===3){of(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){t=Yr(n,t),t=yg(e,t,1),e=vn(e,t,1),t=be(),e!==null&&(vs(e,1,t),ze(e,t));break}}e=e.return}}function Xw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=be(),t.pingedLanes|=t.suspendedLanes&n,ve===t&&(Ce&n)===n&&(he===4||he===3&&(Ce&130023424)===Ce&&500>oe()-Yc?$n(t,0):qc|=n),ze(t,e)}function Fg(t,e){e===0&&(t.mode&1?(e=zs,zs<<=1,!(zs&130023424)&&(zs=4194304)):e=1);var n=be();t=Vt(t,e),t!==null&&(vs(t,e,n),ze(t,n))}function Jw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fg(t,n)}function Zw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),Fg(t,n)}var Bg;Bg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)je=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return je=!1,Bw(t,e,n);je=!!(t.flags&131072)}else je=!1,X&&e.flags&1048576&&Hm(e,Bo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yo(t,e),t=e.pendingProps;var i=Kr(e,xe.current);jr(e,n),i=Hc(null,e,r,t,i,n);var s=Vc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,We(r)?(s=!0,jo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jc(e),i.updater=Tl,e.stateNode=i,i._reactInternals=e,Cu(e,r,t,n),e=Tu(null,e,r,!0,s,n)):(e.tag=0,X&&s&&Pc(e),De(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=tE(r),t=at(r,t),i){case 0:e=ku(null,e,r,t,n);break e;case 1:e=qh(null,e,r,t,n);break e;case 11:e=Qh(null,e,r,t,n);break e;case 14:e=$h(null,e,r,at(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),ku(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),qh(t,e,r,i,n);case 3:e:{if(Cg(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Qm(t,e),Ho(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yr(Error(C(423)),e),e=Yh(t,e,r,n,i);break e}else if(r!==i){i=Yr(Error(C(424)),e),e=Yh(t,e,r,n,i);break e}else for(Ge=_n(e.stateNode.containerInfo.firstChild),Ke=e,X=!0,ct=null,n=Xm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===i){e=Gt(t,e,n);break e}De(t,e,r,n)}e=e.child}return e;case 5:return Jm(e),t===null&&wu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,mu(r,i)?o=null:s!==null&&mu(r,s)&&(e.flags|=32),Sg(t,e),De(t,e,o,n),e.child;case 6:return t===null&&wu(e),null;case 13:return Ig(t,e,n);case 4:return Fc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$r(e,null,r,n):De(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Qh(t,e,r,i,n);case 7:return De(t,e,e.pendingProps,n),e.child;case 8:return De(t,e,e.pendingProps.children,n),e.child;case 12:return De(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(Wo,r._currentValue),r._currentValue=o,s!==null)if(gt(s.value,o)){if(s.children===i.children&&!Be.current){e=Gt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Bt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Eu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Eu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}De(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,jr(e,n),i=nt(i),r=r(i),e.flags|=1,De(t,e,r,n),e.child;case 14:return r=e.type,i=at(r,e.pendingProps),i=at(r.type,i),$h(t,e,r,i,n);case 15:return wg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),yo(t,e),e.tag=1,We(r)?(t=!0,jo(e)):t=!1,jr(e,n),qm(e,r,i),Cu(e,r,i,n),Tu(null,e,r,!0,t,n);case 19:return kg(t,e,n);case 22:return Eg(t,e,n)}throw Error(C(156,e.tag))};function Wg(t,e){return fm(t,e)}function eE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(t,e,n,r){return new eE(t,e,n,r)}function ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tE(t){if(typeof t=="function")return ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yc)return 11;if(t===wc)return 14}return 2}function En(t,e){var n=t.alternate;return n===null?(n=Ze(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function So(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ed(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Sr:return qn(n.children,i,s,e);case vc:o=8,i|=8;break;case Qa:return t=Ze(12,n,e,i|2),t.elementType=Qa,t.lanes=s,t;case $a:return t=Ze(13,n,e,i),t.elementType=$a,t.lanes=s,t;case qa:return t=Ze(19,n,e,i),t.elementType=qa,t.lanes=s,t;case Yp:return xl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $p:o=10;break e;case qp:o=9;break e;case yc:o=11;break e;case wc:o=14;break e;case nn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Ze(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qn(t,e,n,r){return t=Ze(7,t,r,e),t.lanes=n,t}function xl(t,e,n,r){return t=Ze(22,t,r,e),t.elementType=Yp,t.lanes=n,t.stateNode={isHidden:!1},t}function Ca(t,e,n){return t=Ze(6,t,null,e),t.lanes=n,t}function Ia(t,e,n){return e=Ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function td(t,e,n,r,i,s,o,l,a){return t=new nE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ze(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(s),t}function rE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zg(t){if(!t)return Nn;t=t._reactInternals;e:{if(pr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(We(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(We(n))return Wm(t,n,e)}return e}function Hg(t,e,n,r,i,s,o,l,a){return t=td(n,r,!0,t,i,s,o,l,a),t.context=zg(null),n=t.current,r=be(),i=wn(n),s=Bt(r,i),s.callback=e??null,vn(n,s,i),t.current.lanes=i,vs(t,i,r),ze(t,r),t}function Pl(t,e,n,r){var i=e.current,s=be(),o=wn(i);return n=zg(n),e.context===null?e.context=n:e.pendingContext=n,e=Bt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vn(i,e,o),t!==null&&(pt(t,i,o,s),go(t,i,o)),o}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nd(t,e){lf(t,e),(t=t.alternate)&&lf(t,e)}function iE(){return null}var Vg=typeof reportError=="function"?reportError:function(t){console.error(t)};function rd(t){this._internalRoot=t}Ol.prototype.render=rd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Pl(t,e,null,null)};Ol.prototype.unmount=rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rr(function(){Pl(null,t,null,null)}),e[Ht]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=wm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sn.length&&e!==0&&e<sn[n].priority;n++);sn.splice(n,0,t),n===0&&Sm(t)}};function id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function af(){}function sE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Xo(o);s.call(u)}}var o=Hg(e,r,t,0,null,!1,!1,"",af);return t._reactRootContainer=o,t[Ht]=o.current,ts(t.nodeType===8?t.parentNode:t),rr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Xo(a);l.call(u)}}var a=td(t,0,!1,null,null,!1,!1,"",af);return t._reactRootContainer=a,t[Ht]=a.current,ts(t.nodeType===8?t.parentNode:t),rr(function(){Pl(e,a,n,r)}),a}function bl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Xo(o);l.call(a)}}Pl(e,o,t,i)}else o=sE(n,e,t,i,r);return Xo(o)}vm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ri(e.pendingLanes);n!==0&&(Cc(e,n|1),ze(e,oe()),!(B&6)&&(Xr=oe()+500,On()))}break;case 13:rr(function(){var r=Vt(t,1);if(r!==null){var i=be();pt(r,t,1,i)}}),nd(t,1)}};Ic=function(t){if(t.tag===13){var e=Vt(t,134217728);if(e!==null){var n=be();pt(e,t,134217728,n)}nd(t,134217728)}};ym=function(t){if(t.tag===13){var e=wn(t),n=Vt(t,e);if(n!==null){var r=be();pt(n,t,e,r)}nd(t,e)}};wm=function(){return z};Em=function(t,e){var n=z;try{return z=t,e()}finally{z=n}};su=function(t,e,n){switch(e){case"input":if(Ja(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Il(r);if(!i)throw Error(C(90));Jp(r),Ja(r,i)}}}break;case"textarea":em(t,n);break;case"select":e=n.value,e!=null&&br(t,!!n.multiple,e,!1)}};lm=Xc;am=rr;var oE={usingClientEntryPoint:!1,Events:[ws,Tr,Il,sm,om,Xc]},Ei={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lE={bundleType:Ei.bundleType,version:Ei.version,rendererPackageName:Ei.rendererPackageName,rendererConfig:Ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ei.findFiberByHostInstance||iE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{wl=Zs.inject(lE),Ct=Zs}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oE;$e.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(e))throw Error(C(200));return rE(t,e,null,n)};$e.createRoot=function(t,e){if(!id(t))throw Error(C(299));var n=!1,r="",i=Vg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=td(t,1,!1,null,null,n,!1,r,i),t[Ht]=e.current,ts(t.nodeType===8?t.parentNode:t),new rd(e)};$e.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=dm(e),t=t===null?null:t.stateNode,t};$e.flushSync=function(t){return rr(t)};$e.hydrate=function(t,e,n){if(!Dl(e))throw Error(C(200));return bl(null,t,e,!0,n)};$e.hydrateRoot=function(t,e,n){if(!id(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hg(e,null,t,1,n??null,i,!1,s,o),t[Ht]=e.current,ts(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ol(e)};$e.render=function(t,e,n){if(!Dl(e))throw Error(C(200));return bl(null,t,e,!1,n)};$e.unmountComponentAtNode=function(t){if(!Dl(t))throw Error(C(40));return t._reactRootContainer?(rr(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ht]=null})}),!0):!1};$e.unstable_batchedUpdates=Xc;$e.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dl(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return bl(t,e,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";function Gg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gg)}catch(t){console.error(t)}}Gg(),Hp.exports=$e;var aE=Hp.exports,uf=aE;Ga.createRoot=uf.createRoot,Ga.hydrateRoot=uf.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw ii(e)},ii=function(t){return new Error("Firebase Database ("+Kg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,h=s>>2,d=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(f=64)),r.push(n[h],n[d],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new cE;const f=s<<2|l>>4;if(r.push(f),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $g=function(t){const e=Qg(t);return sd.encodeByteArray(e,!0)},Jo=function(t){return $g(t).replace(/\./g,"")},Zo=function(t){try{return sd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){return qg(void 0,t)}function qg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hE(n)||(t[n]=qg(t[n],e[n]));return t}function hE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=()=>fE().__FIREBASE_DEFAULTS__,mE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zo(t[1]);return e&&JSON.parse(e)},Ll=()=>{try{return pE()||mE()||gE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yg=t=>{var e,n;return(n=(e=Ll())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xg=t=>{const e=Yg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jg=()=>{var t;return(t=Ll())===null||t===void 0?void 0:t.config},Zg=t=>{var e;return(e=Ll())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Jo(JSON.stringify(n)),Jo(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function _E(){var t;const e=(t=Ll())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function t_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yE(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function n_(){return Kg.NODE_ADMIN===!0}function wE(){try{return typeof indexedDB=="object"}catch{return!1}}function EE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SE,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ss.prototype.create)}}class Ss{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?CE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,l,r)}}function CE(t,e){return t.replace(IE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){return JSON.parse(t)}function Se(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=cs(Zo(s[0])||""),n=cs(Zo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},kE=function(t){const e=r_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},TE=function(t){const e=r_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Jr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function el(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function tl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cf(s)&&cf(o)){if(!tl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Oi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),h=1518500249):(u=s^o^l,h=1859775393):d<60?(u=s&o|l&(s|o),h=2400959708):(u=s^o^l,h=3395469782);const f=(i<<5|i>>>27)+u+a+h+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function AE(t,e){const n=new RE(t,e);return n.subscribe.bind(n)}class RE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ka),i.error===void 0&&(i.error=ka),i.complete===void 0&&(i.complete=ka);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ka(){}function ld(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ul=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ml;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bE(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DE(t){return t===Bn?void 0:t}function bE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const ME={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},UE=H.INFO,jE={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},FE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ad{constructor(e){this.name=e,this._logLevel=UE,this._logHandler=FE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ME[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const BE=(t,e)=>e.some(n=>t instanceof n);let df,hf;function WE(){return df||(df=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zE(){return hf||(hf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const i_=new WeakMap,Fu=new WeakMap,s_=new WeakMap,Ta=new WeakMap,ud=new WeakMap;function HE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&i_.set(n,t)}).catch(()=>{}),ud.set(e,t),e}function VE(t){if(Fu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Fu.set(t,e)}let Bu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||s_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GE(t){Bu=t(Bu)}function KE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Na(this),e,...n);return s_.set(r,e.sort?e.sort():[e]),Sn(r)}:zE().includes(t)?function(...e){return t.apply(Na(this),e),Sn(i_.get(this))}:function(...e){return Sn(t.apply(Na(this),e))}}function QE(t){return typeof t=="function"?KE(t):(t instanceof IDBTransaction&&VE(t),BE(t,WE())?new Proxy(t,Bu):t)}function Sn(t){if(t instanceof IDBRequest)return HE(t);if(Ta.has(t))return Ta.get(t);const e=QE(t);return e!==t&&(Ta.set(t,e),ud.set(e,t)),e}const Na=t=>ud.get(t);function $E(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Sn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Sn(o.result),a.oldVersion,a.newVersion,Sn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const qE=["get","getKey","getAll","getAllKeys","count"],YE=["put","add","delete","clear"],Aa=new Map;function ff(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Aa.get(e))return Aa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Aa.set(e,s),s}GE(t=>({...t,get:(e,n,r)=>ff(e,n)||t.get(e,n,r),has:(e,n)=>!!ff(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wu="@firebase/app",pf="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new ad("@firebase/app"),ZE="@firebase/app-compat",eS="@firebase/analytics-compat",tS="@firebase/analytics",nS="@firebase/app-check-compat",rS="@firebase/app-check",iS="@firebase/auth",sS="@firebase/auth-compat",oS="@firebase/database",lS="@firebase/database-compat",aS="@firebase/functions",uS="@firebase/functions-compat",cS="@firebase/installations",dS="@firebase/installations-compat",hS="@firebase/messaging",fS="@firebase/messaging-compat",pS="@firebase/performance",mS="@firebase/performance-compat",gS="@firebase/remote-config",_S="@firebase/remote-config-compat",vS="@firebase/storage",yS="@firebase/storage-compat",wS="@firebase/firestore",ES="@firebase/firestore-compat",SS="firebase",CS="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="[DEFAULT]",IS={[Wu]:"fire-core",[ZE]:"fire-core-compat",[tS]:"fire-analytics",[eS]:"fire-analytics-compat",[rS]:"fire-app-check",[nS]:"fire-app-check-compat",[iS]:"fire-auth",[sS]:"fire-auth-compat",[oS]:"fire-rtdb",[lS]:"fire-rtdb-compat",[aS]:"fire-fn",[uS]:"fire-fn-compat",[cS]:"fire-iid",[dS]:"fire-iid-compat",[hS]:"fire-fcm",[fS]:"fire-fcm-compat",[pS]:"fire-perf",[mS]:"fire-perf-compat",[gS]:"fire-rc",[_S]:"fire-rc-compat",[vS]:"fire-gcs",[yS]:"fire-gcs-compat",[wS]:"fire-fst",[ES]:"fire-fst-compat","fire-js":"fire-js",[SS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Map,Hu=new Map;function kS(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sr(t){const e=t.name;if(Hu.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Hu.set(e,t);for(const n of nl.values())kS(n,t);return!0}function jl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cn=new Ss("app","Firebase",TS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=CS;function o_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cn.create("bad-app-name",{appName:String(i)});if(n||(n=Jg()),!n)throw Cn.create("no-options");const s=nl.get(i);if(s){if(tl(n,s.options)&&tl(r,s.config))return s;throw Cn.create("duplicate-app",{appName:i})}const o=new LE(i);for(const a of Hu.values())o.addComponent(a);const l=new NS(n,r,o);return nl.set(i,l),l}function cd(t=zu){const e=nl.get(t);if(!e&&t===zu&&Jg())return o_();if(!e)throw Cn.create("no-app",{appName:t});return e}function kt(t,e,n){var r;let i=(r=IS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(l.join(" "));return}sr(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="firebase-heartbeat-database",RS=1,ds="firebase-heartbeat-store";let Ra=null;function l_(){return Ra||(Ra=$E(AS,RS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ds)}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),Ra}async function xS(t){try{return await(await l_()).transaction(ds).objectStore(ds).get(a_(t))}catch(e){if(e instanceof Xt)ir.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function mf(t,e){try{const r=(await l_()).transaction(ds,"readwrite");await r.objectStore(ds).put(e,a_(t)),await r.done}catch(n){if(n instanceof Xt)ir.warn(n.message);else{const r=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function a_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=1024,OS=30*24*60*60*1e3;class DS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=gf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=OS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gf(),{heartbeatsToSend:r,unsentEntries:i}=bS(this._heartbeatsCache.heartbeats),s=Jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function gf(){return new Date().toISOString().substring(0,10)}function bS(t,e=PS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_f(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_f(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wE()?EE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _f(t){return Jo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t){sr(new An("platform-logger",e=>new XE(e),"PRIVATE")),sr(new An("heartbeat",e=>new DS(e),"PRIVATE")),kt(Wu,pf,t),kt(Wu,pf,"esm2017"),kt("fire-js","")}MS("");function dd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function u_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const US=u_,c_=new Ss("auth","Firebase",u_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new ad("@firebase/auth");function jS(t,...e){rl.logLevel<=H.WARN&&rl.warn(`Auth (${mr}): ${t}`,...e)}function Co(t,...e){rl.logLevel<=H.ERROR&&rl.error(`Auth (${mr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,...e){throw hd(t,...e)}function Tt(t,...e){return hd(t,...e)}function d_(t,e,n){const r=Object.assign(Object.assign({},US()),{[e]:n});return new Ss("auth","Firebase",r).create(e,{appName:t.name})}function FS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&it(t,"argument-error"),d_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return c_.create(t,...e)}function O(t,e,...n){if(!t)throw hd(e,...n)}function Mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Co(e),new Error(e)}function Kt(t,e){t||Mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function BS(){return vf()==="http:"||vf()==="https:"}function vf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BS()||vE()||"connection"in navigator)?navigator.onLine:!0}function zS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=od()||t_()}get(){return WS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=new Cs(3e4,6e4);function Dn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function At(t,e,n,r,i={}){return f_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=si(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),h_.fetch()(p_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function f_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},HS),e);try{const i=new KS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw eo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw eo(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw d_(t,h,u);it(t,h)}}catch(i){if(i instanceof Xt)throw i;it(t,"network-request-failed",{message:String(i)})}}async function Is(t,e,n,r,i={}){const s=await At(t,e,n,r,i);return"mfaPendingCredential"in s&&it(t,"multi-factor-auth-required",{_serverResponse:s}),s}function p_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?fd(t.config,i):`${t.config.apiScheme}://${i}`}function GS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),VS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(t,e,r);return i.customData._tokenResponse=n,i}function yf(t){return t!==void 0&&t.enterprise!==void 0}class QS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return GS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $S(t,e){return At(t,"GET","/v2/recaptchaConfig",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(t,e){return At(t,"POST","/v1/accounts:delete",e)}async function YS(t,e){return At(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XS(t,e=!1){const n=le(t),r=await n.getIdToken(e),i=pd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zi(xa(i.auth_time)),issuedAtTime:zi(xa(i.iat)),expirationTime:zi(xa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xa(t){return Number(t)*1e3}function pd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Co("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zo(n);return i?JSON.parse(i):(Co("Failed to decode base64 JWT payload"),null)}catch(i){return Co("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function JS(t){const e=pd(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&ZS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){var e;const n=t.auth,r=await t.getIdToken(),i=await or(t,YS(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?rC(s.providerUserInfo):[],l=nC(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new m_(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function tC(t){const e=le(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rC(t){return t.map(e=>{var{providerId:n}=e,r=dd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(t,e){const n=await f_(t,{},async()=>{const r=si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=p_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",h_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sC(t,e){return At(t,"POST","/v2/accounts:revokeToken",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):JS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await iC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hs;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=dd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new m_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await or(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XS(this,e)}reload(){return tC(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await or(this,qS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:g,emailVerified:w,isAnonymous:I,providerData:k,stsTokenManager:N}=n;O(g&&N,e,"internal-error");const x=hs.fromJSON(this.name,N);O(typeof g=="string",e,"internal-error"),tn(d,e.name),tn(f,e.name),O(typeof w=="boolean",e,"internal-error"),O(typeof I=="boolean",e,"internal-error"),tn(_,e.name),tn(v,e.name),tn(y,e.name),tn(S,e.name),tn(m,e.name),tn(p,e.name);const F=new Yn({uid:g,auth:e,email:f,emailVerified:w,displayName:d,isAnonymous:I,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:x,createdAt:m,lastLoginAt:p});return k&&Array.isArray(k)&&(F.providerData=k.map(P=>Object.assign({},P))),S&&(F._redirectEventId=S),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const s=new Yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await il(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new Map;function Ut(t){Kt(t instanceof Function,"Expected a class definition");let e=wf.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}g_.type="NONE";const Ef=g_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t,e,n){return`firebase:${t}:${e}:${n}`}class Br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Io(this.userKey,i.apiKey,s),this.fullPersistenceKey=Io("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Br(Ut(Ef),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ut(Ef);const o=Io(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Yn._fromJSON(e,h);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Br(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Br(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(__(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E_(e))return"Blackberry";if(S_(e))return"Webos";if(md(e))return"Safari";if((e.includes("chrome/")||v_(e))&&!e.includes("edge/"))return"Chrome";if(w_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function __(t=Pe()){return/firefox\//i.test(t)}function md(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v_(t=Pe()){return/crios\//i.test(t)}function y_(t=Pe()){return/iemobile/i.test(t)}function w_(t=Pe()){return/android/i.test(t)}function E_(t=Pe()){return/blackberry/i.test(t)}function S_(t=Pe()){return/webos/i.test(t)}function Fl(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oC(t=Pe()){var e;return Fl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lC(){return yE()&&document.documentMode===10}function C_(t=Pe()){return Fl(t)||w_(t)||S_(t)||E_(t)||/windows phone/i.test(t)||y_(t)}function aC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t,e=[]){let n;switch(t){case"Browser":n=Sf(Pe());break;case"Worker":n=`${Sf(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e={}){return At(t,"GET","/v2/passwordPolicy",Dn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=6;class hC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cf(this),this.idTokenSubscription=new Cf(this),this.beforeStateQueue=new uC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?le(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cC(this),n=new hC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ss("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Br.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bn(t){return le(t)}class Cf{constructor(e){this.auth=e,this.observer=null,this.addObserver=AE(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function k_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pC().appendChild(r)})}function mC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const gC="https://www.google.com/recaptcha/enterprise.js?render=",_C="recaptcha-enterprise",vC="NO_RECAPTCHA";class yC{constructor(e){this.type=_C,this.auth=bn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{$S(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new QS(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;yf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(vC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&yf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}k_(gC+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function If(t,e,n,r=!1){const i=new yC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Gu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await If(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await If(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t,e){const n=jl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(tl(s,e??{}))return i;it(i,"already-initialized")}return n.initialize({options:e})}function EC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function SC(t,e,n){const r=bn(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=T_(e),{host:o,port:l}=CC(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||IC()}function T_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CC(t){const e=T_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kf(o)}}}function kf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,n){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}async function kC(t,e){return At(t,"POST","/v1/accounts:update",e)}async function TC(t,e){return At(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e){return Is(t,"POST","/v1/accounts:signInWithPassword",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t,e){return Is(t,"POST","/v1/accounts:signInWithEmailLink",Dn(t,e))}async function RC(t,e){return Is(t,"POST","/v1/accounts:signInWithEmailLink",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends gd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new fs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gu(e,n,"signInWithPassword",NC);case"emailLink":return AC(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gu(e,r,"signUpPassword",TC);case"emailLink":return RC(e,{idToken:n,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t,e){return Is(t,"POST","/v1/accounts:signInWithIdp",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="http://localhost";class lr extends gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):it("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=dd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wr(e,n)}buildRequest(){const e={requestUri:xC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=si(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OC(t){const e=Pi(Oi(t)).link,n=e?Pi(Oi(e)).deep_link_id:null,r=Pi(Oi(t)).deep_link_id;return(r?Pi(Oi(r)).link:null)||r||n||e||t}class _d{constructor(e){var n,r,i,s,o,l;const a=Pi(Oi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,h=(r=a.oobCode)!==null&&r!==void 0?r:null,d=PC((i=a.mode)!==null&&i!==void 0?i:null);O(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=OC(e);try{return new _d(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.providerId=oi.PROVIDER_ID}static credential(e,n){return fs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_d.parseLink(n);return O(r,"argument-error"),fs._fromEmailAndCode(e,r.code,r.tenantId)}}oi.PROVIDER_ID="password";oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends vd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends ks{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dt.credential(n,r)}catch{return null}}}Dt.GOOGLE_SIGN_IN_METHOD="google.com";Dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends ks{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends ks{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return un.credential(n,r)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(t,e){return Is(t,"POST","/v1/accounts:signUp",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yn._fromIdTokenResponse(e,r,i),o=Tf(r);return new ar({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Tf(r);return new ar({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Tf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends Xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,sl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new sl(e,n,r,i)}}function N_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?sl._fromErrorAndOperation(t,s,e,r):s})}async function A_(t,e,n=!1){const r=await or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ar._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await or(t,N_(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=pd(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),ar._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&it(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t,e,n=!1){const r="signIn",i=await N_(t,r,e),s=await ar._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function LC(t,e){return R_(bn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(t){const e=bn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function MC(t,e,n){const r=bn(t),o=await Gu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",DC).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&x_(t),a}),l=await ar._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function UC(t,e,n){return LC(le(t),oi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&x_(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e){return At(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=le(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await or(r,jC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function FC(t,e){return BC(le(t),e,null)}async function BC(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await or(t,kC(r,s));await t._updateTokensIfNecessary(o,!0)}function WC(t,e,n,r){return le(t).onIdTokenChanged(e,n,r)}function zC(t,e,n){return le(t).beforeAuthStateChanged(e,n)}function HC(t,e,n,r){return le(t).onAuthStateChanged(e,n,r)}function VC(t){return le(t).signOut()}const ol="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ol,"1"),this.storage.removeItem(ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(){const t=Pe();return md(t)||Fl(t)}const KC=1e3,QC=10;class D_ extends O_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GC()&&aC(),this.fallbackToPolling=C_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}D_.type="LOCAL";const $C=D_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_ extends O_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}b_.type="SESSION";const L_=b_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await qC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=yd("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function XC(t){Nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function JC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eI(){return M_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="firebaseLocalStorageDb",tI=1,ll="firebaseLocalStorage",j_="fbase_key";class Ts{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wl(t,e){return t.transaction([ll],e?"readwrite":"readonly").objectStore(ll)}function nI(){const t=indexedDB.deleteDatabase(U_);return new Ts(t).toPromise()}function Ku(){const t=indexedDB.open(U_,tI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ll,{keyPath:j_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ll)?e(r):(r.close(),await nI(),e(await Ku()))})})}async function Nf(t,e,n){const r=Wl(t,!0).put({[j_]:e,value:n});return new Ts(r).toPromise()}async function rI(t,e){const n=Wl(t,!1).get(e),r=await new Ts(n).toPromise();return r===void 0?null:r.value}function Af(t,e){const n=Wl(t,!0).delete(e);return new Ts(n).toPromise()}const iI=800,sI=3;class F_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ku(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return M_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bl._getInstance(eI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JC(),!this.activeServiceWorker)return;this.sender=new YC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ku();return await Nf(e,ol,"1"),await Af(e,ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Af(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wl(i,!1).getAll();return new Ts(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}F_.type="LOCAL";const oI=F_;new Cs(3e4,6e4);async function lI(t,e){await A_(le(t),e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t,e){return e?Ut(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends gd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aI(t){return R_(t.auth,new wd(t),t.bypassAuthState)}function uI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),bC(n,new wd(t),t.bypassAuthState)}async function cI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),A_(n,new wd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aI;case"linkViaPopup":case"linkViaRedirect":return cI;case"reauthViaPopup":case"reauthViaRedirect":return uI;default:it(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=new Cs(2e3,1e4);async function hI(t,e,n){const r=bn(t);FS(t,e,vd);const i=B_(r,n);return new Gn(r,"signInViaPopup",e,i).executeNotNull()}class Gn extends W_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gn.currentPopupAction&&Gn.currentPopupAction.cancel(),Gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dI.get())};e()}}Gn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="pendingRedirect",ko=new Map;class pI extends W_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const r=await mI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mI(t,e){const n=vI(e),r=_I(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gI(t,e){ko.set(t._key(),e)}function _I(t){return Ut(t._redirectPersistence)}function vI(t){return Io(fI,t.config.apiKey,t.name)}async function yI(t,e,n=!1){const r=bn(t),i=B_(r,e),o=await new pI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=10*60*1e3;class EI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!z_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rf(e))}saveEventToCache(e){this.cachedEventUids.add(Rf(e)),this.lastProcessedEventTime=Date.now()}}function Rf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function z_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e={}){return At(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kI=/^https?/;async function TI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CI(t);for(const n of e)try{if(NI(n))return}catch{}it(t,"unauthorized-domain")}function NI(t){const e=Vu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kI.test(n))return!1;if(II.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=new Cs(3e4,6e4);function xf(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RI(t){return new Promise((e,n)=>{var r,i,s;function o(){xf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xf(),n(Tt(t,"network-request-failed"))},timeout:AI.get()})}if(!((i=(r=Nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nt().gapi)===null||s===void 0)&&s.load)o();else{const l=mC("iframefcb");return Nt()[l]=()=>{gapi.load?o():n(Tt(t,"network-request-failed"))},k_(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw To=null,e})}let To=null;function xI(t){return To=To||RI(t),To}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new Cs(5e3,15e3),OI="__/auth/iframe",DI="emulator/auth/iframe",bI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MI(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fd(e,DI):`https://${t.config.authDomain}/${OI}`,r={apiKey:e.apiKey,appName:t.name,v:mr},i=LI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${si(r).slice(1)}`}async function UI(t){const e=await xI(t),n=Nt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:MI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tt(t,"network-request-failed"),l=Nt().setTimeout(()=>{s(o)},PI.get());function a(){Nt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FI=500,BI=600,WI="_blank",zI="http://localhost";class Pf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HI(t,e,n,r=FI,i=BI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},jI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Pe().toLowerCase();n&&(l=v_(u)?WI:n),__(u)&&(e=e||zI,a.scrollbars="yes");const h=Object.entries(a).reduce((f,[_,v])=>`${f}${_}=${v},`,"");if(oC(u)&&l!=="_self")return VI(e||"",l),new Pf(null);const d=window.open(e||"",l,h);O(d,t,"popup-blocked");try{d.focus()}catch{}return new Pf(d)}function VI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="__/auth/handler",KI="emulator/auth/handler",QI=encodeURIComponent("fac");async function Of(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mr,eventId:i};if(e instanceof vd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ju(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(s||{}))o[h]=d}if(e instanceof ks){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${QI}=${encodeURIComponent(a)}`:"";return`${$I(t)}?${si(l).slice(1)}${u}`}function $I({config:t}){return t.emulator?fd(t,KI):`https://${t.authDomain}/${GI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="webStorageSupport";class qI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L_,this._completeRedirectFn=yI,this._overrideRedirectResult=gI}async _openPopup(e,n,r,i){var s;Kt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Of(e,n,r,Vu(),i);return HI(e,o,yd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Of(e,n,r,Vu(),i);return XC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UI(e),r=new EI(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pa,{type:Pa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pa];o!==void 0&&n(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return C_()||md()||Fl()}}const YI=qI;var Df="@firebase/auth",bf="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ZI(t){sr(new An("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I_(t)},u=new fC(r,i,s,a);return EC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),sr(new An("auth-internal",e=>{const n=bn(e.getProvider("auth").getImmediate());return(r=>new XI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(Df,bf,JI(t)),kt(Df,bf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=5*60,tk=Zg("authIdTokenMaxAge")||ek;let Lf=null;const nk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tk)return;const i=n==null?void 0:n.token;Lf!==i&&(Lf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zl(t=cd()){const e=jl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wC(t,{popupRedirectResolver:YI,persistence:[oI,$C,L_]}),r=Zg("authTokenSyncURL");if(r){const s=nk(r);zC(n,s,()=>s(n.currentUser)),WC(n,o=>s(o))}const i=Yg("auth");return i&&SC(n,`http://${i}`),n}ZI("Browser");/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ps(){return ps=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ps.apply(this,arguments)}var fn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(fn||(fn={}));const Mf="popstate";function rk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Qu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:al(i)}return sk(e,n,null,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ed(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ik(){return Math.random().toString(36).substr(2,8)}function Uf(t,e){return{usr:t.state,key:t.key,idx:e}}function Qu(t,e,n,r){return n===void 0&&(n=null),ps({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?li(e):e,{state:n,key:e&&e.key||r||ik()})}function al(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function li(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function sk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=fn.Pop,a=null,u=h();u==null&&(u=0,o.replaceState(ps({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){l=fn.Pop;let S=h(),m=S==null?null:S-u;u=S,a&&a({action:l,location:y.location,delta:m})}function f(S,m){l=fn.Push;let p=Qu(y.location,S,m);n&&n(p,S),u=h()+1;let g=Uf(p,u),w=y.createHref(p);try{o.pushState(g,"",w)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function _(S,m){l=fn.Replace;let p=Qu(y.location,S,m);n&&n(p,S),u=h();let g=Uf(p,u),w=y.createHref(p);o.replaceState(g,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function v(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:al(S);return ue(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return l},get location(){return t(i,o)},listen(S){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Mf,d),a=S,()=>{i.removeEventListener(Mf,d),a=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let m=v(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:_,go(S){return o.go(S)}};return y}var jf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(jf||(jf={}));function ok(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?li(e):e,i=Sd(r.pathname||"/",n);if(i==null)return null;let s=H_(t);lk(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=gk(s[l],yk(i));return o}function H_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(ue(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=In([r,a.relativePath]),h=n.concat(a);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),H_(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:pk(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of V_(s.path))i(s,o,a)}),e}function V_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=V_(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function lk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ak=/^:\w+$/,uk=3,ck=2,dk=1,hk=10,fk=-2,Ff=t=>t==="*";function pk(t,e){let n=t.split("/"),r=n.length;return n.some(Ff)&&(r+=fk),e&&(r+=ck),n.filter(i=>!Ff(i)).reduce((i,s)=>i+(ak.test(s)?uk:s===""?dk:hk),r)}function mk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function gk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=_k({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!h)return null;Object.assign(r,h.params);let d=l.route;s.push({params:r,pathname:In([i,h.pathname]),pathnameBase:Ck(In([i,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(i=In([i,h.pathnameBase]))}return s}function _k(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=vk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:f,isOptional:_}=h;if(f==="*"){let y=l[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=l[d];return _&&!v?u[f]=void 0:u[f]=wk(v||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function vk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ed(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function yk(t){try{return decodeURI(t)}catch(e){return Ed(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wk(t,e){try{return decodeURIComponent(t)}catch(n){return Ed(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Sd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ek(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?li(t):t;return{pathname:n?n.startsWith("/")?n:Sk(n,e):e,search:Ik(r),hash:kk(i)}}function Sk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Oa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function G_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function K_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=li(t):(i=ps({},t),ue(!i.pathname||!i.pathname.includes("?"),Oa("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),Oa("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),Oa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}l=d>=0?e[d]:"/"}let a=Ek(i,l),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const In=t=>t.join("/").replace(/\/\/+/g,"/"),Ck=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ik=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Tk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Q_=["post","put","patch","delete"];new Set(Q_);const Nk=["get",...Q_];new Set(Nk);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ul(){return ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ul.apply(this,arguments)}const Cd=E.createContext(null),Ak=E.createContext(null),ai=E.createContext(null),Hl=E.createContext(null),Ln=E.createContext({outlet:null,matches:[],isDataRoute:!1}),$_=E.createContext(null);function Rk(t,e){let{relative:n}=e===void 0?{}:e;Ns()||ue(!1);let{basename:r,navigator:i}=E.useContext(ai),{hash:s,pathname:o,search:l}=Y_(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:In([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Ns(){return E.useContext(Hl)!=null}function Vl(){return Ns()||ue(!1),E.useContext(Hl).location}function q_(t){E.useContext(ai).static||E.useLayoutEffect(t)}function Gl(){let{isDataRoute:t}=E.useContext(Ln);return t?zk():xk()}function xk(){Ns()||ue(!1);let t=E.useContext(Cd),{basename:e,navigator:n}=E.useContext(ai),{matches:r}=E.useContext(Ln),{pathname:i}=Vl(),s=JSON.stringify(G_(r).map(a=>a.pathnameBase)),o=E.useRef(!1);return q_(()=>{o.current=!0}),E.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let h=K_(a,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:In([e,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[e,n,s,i,t])}function Id(){let{matches:t}=E.useContext(Ln),e=t[t.length-1];return e?e.params:{}}function Y_(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(Ln),{pathname:i}=Vl(),s=JSON.stringify(G_(r).map(o=>o.pathnameBase));return E.useMemo(()=>K_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Pk(t,e){return Ok(t,e)}function Ok(t,e,n){Ns()||ue(!1);let{navigator:r}=E.useContext(ai),{matches:i}=E.useContext(Ln),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=Vl(),u;if(e){var h;let y=typeof e=="string"?li(e):e;l==="/"||(h=y.pathname)!=null&&h.startsWith(l)||ue(!1),u=y}else u=a;let d=u.pathname||"/",f=l==="/"?d:d.slice(l.length)||"/",_=ok(t,{pathname:f}),v=Uk(_&&_.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:In([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:In([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&v?E.createElement(Hl.Provider,{value:{location:ul({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:fn.Pop}},v):v}function Dk(){let t=Wk(),e=Tk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}const bk=E.createElement(Dk,null);class Lk extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(Ln.Provider,{value:this.props.routeContext},E.createElement($_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mk(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Cd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Ln.Provider,{value:e},r)}function Uk(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||ue(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let h=a.route.id?o==null?void 0:o[a.route.id]:null,d=null;n&&(d=a.route.errorElement||bk);let f=e.concat(s.slice(0,u+1)),_=()=>{let v;return h?v=d:a.route.Component?v=E.createElement(a.route.Component,null):a.route.element?v=a.route.element:v=l,E.createElement(Mk,{match:a,routeContext:{outlet:l,matches:f,isDataRoute:n!=null},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?E.createElement(Lk,{location:n.location,revalidation:n.revalidation,component:d,error:h,children:_(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):_()},null)}var X_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(X_||{}),cl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(cl||{});function jk(t){let e=E.useContext(Cd);return e||ue(!1),e}function Fk(t){let e=E.useContext(Ak);return e||ue(!1),e}function Bk(t){let e=E.useContext(Ln);return e||ue(!1),e}function J_(t){let e=Bk(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function Wk(){var t;let e=E.useContext($_),n=Fk(cl.UseRouteError),r=J_(cl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function zk(){let{router:t}=jk(X_.UseNavigateStable),e=J_(cl.UseNavigateStable),n=E.useRef(!1);return q_(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ul({fromRouteId:e},s)))},[t,e])}function Ye(t){ue(!1)}function Hk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=fn.Pop,navigator:s,static:o=!1}=t;Ns()&&ue(!1);let l=e.replace(/^\/*/,"/"),a=E.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=li(r));let{pathname:u="/",search:h="",hash:d="",state:f=null,key:_="default"}=r,v=E.useMemo(()=>{let y=Sd(u,l);return y==null?null:{location:{pathname:y,search:h,hash:d,state:f,key:_},navigationType:i}},[l,u,h,d,f,_,i]);return v==null?null:E.createElement(ai.Provider,{value:a},E.createElement(Hl.Provider,{children:n,value:v}))}function Vk(t){let{children:e,location:n}=t;return Pk($u(e),n)}new Promise(()=>{});function $u(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,$u(r.props.children,s));return}r.type!==Ye&&ue(!1),!r.props.index||!r.props.children||ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$u(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qu(){return qu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qu.apply(this,arguments)}function Gk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Kk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Qk(t,e){return t.button===0&&(!e||e==="_self")&&!Kk(t)}const $k=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],qk="startTransition",Bf=Jy[qk];function Yk(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=rk({window:i,v5Compat:!0}));let o=s.current,[l,a]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=E.useCallback(d=>{u&&Bf?Bf(()=>a(d)):a(d)},[a,u]);return E.useLayoutEffect(()=>o.listen(h),[o,h]),E.createElement(Hk,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o})}const Xk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_e=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:h,unstable_viewTransition:d}=e,f=Gk(e,$k),{basename:_}=E.useContext(ai),v,y=!1;if(typeof u=="string"&&Jk.test(u)&&(v=u,Xk))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),I=Sd(w.pathname,_);w.origin===g.origin&&I!=null?u=I+w.search+w.hash:y=!0}catch{}let S=Rk(u,{relative:i}),m=Zk(u,{replace:o,state:l,target:a,preventScrollReset:h,relative:i,unstable_viewTransition:d});function p(g){r&&r(g),g.defaultPrevented||m(g)}return E.createElement("a",qu({},f,{href:v||S,onClick:y||s?r:p,ref:n,target:a}))});var Wf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Wf||(Wf={}));var zf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(zf||(zf={}));function Zk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=Gl(),u=Vl(),h=Y_(t,{relative:o});return E.useCallback(d=>{if(Qk(d,n)){d.preventDefault();let f=r!==void 0?r:al(u)===al(h);a(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,h,r,i,n,t,s,o,l])}const eT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE1klEQVR4nO2d2U9UZxTA+Tuuc1nEDakVl6QucYOq1VYLLiWolOIaXxT0SX0wVitDm2JBoagwRrv4oEQTZ1hUXkAexFfCoJKgER5gIPAwZC7rac4XfblJE0dn7jl3vvNLvoRMZu7MOb/7MXO/5dwkw/SANA+bHCRRfwBpHhFiMD4RpIeY9BJEiEmfeBFi0ic74YR4UpJh+47v4HJZGfgDAQgGgzA2NgaTk5Oq4d/4mD/gV8/B5+JrqD93wgnJWrEcKquqYGBgAKKlv79fvRaPQR2H64VkfJEJdb56sCwLPhc8Bh5rUeZi8rhcKeTw0SMQCoUg1gyFQurY1PG5RoiZmqLO5Hhzs75OvRd1vKyFpM1Lh8amJnAKfC98T+q4WQrBs9Uf8IPTtDx+DMlpqeTxsxPixL+p/+NG3U3y+FkJwS9ZSmZnZ+HQkcPkeWAhZOHiDBgcHARqhkIh9TPb0F1Ivc8HXKjz1estJGv5MohEIsAFy7Jg2coV+grBIQ1uVFZV6SkEB/1wnIkb7/rfkQ5IkgnBkViubPt2u35Cyrxe4Mqly7/oJwTnM7jyyP9IPyHBnh7gSjAY1E/I6OgocGVkZEQ/ITjlypWJiQn9hHDHECG8ECHMMKSH8EKEMMOQHsILEcIMQ3oIL0QIMwzpIbwQIcwwpIfwQjshOIDHlUgkop+QeKxsjxWDQ0P6CcFJIK50d3frJ+TBw4fAlfsNDfoJwYUEXPn50kX9hGz+ZitwZVNOtn5C5iSbLBfKvXn7lkwGqRBsv1dUADfKvF59heBWZU6LHSzLgiVZS/UVwm07wtXqa6S5YCEk88slqgIDh4vBBRmLRAhKOXb8OPmWtp8OFpPLYNFDPrR/794lE1J7/Tp5/OyEpMxNg9bWVsdlNDU3syogwEYItvQF86H9Wbuje9TxRKCOm60Qw/SoTfxO7Fn/65+/WRUMYCvEeN/iDXV8IsQGdeJFiA3qxIsQG9SJFyE2qBMvQmxQJ16E2KBOvAixQZ14EWKDOvGuEnLgx0KIN9/n5ZHHyV5IavpcNa3rxKpGnIM5UVJCHjNLITimVHr6FPT19YHTtLW3wc7cXPIcsBCCJVrPnDurSiJR09HRAYVFReS14kmEYLlvXIzGodaiHeyl5y9cICtJ7qiQdRs3qKH1cDgM3LEsC+413IecLZsTT0jurjx48vSJmrt2I50vOqGouNj9QvILClQwicLzzk7Ym5/vPiFr169TRcASlbb2NtiYvYm/EPzV9GdtLavViPECY6yuqVHXTiyF4Bd2V1cX6EbPy5eQ/XUOLyElp0phfHwcdCUcDsPJ0lJ6IbilgOMKdiqu1VSrnJAJ8d26RRY8V/DOPSRCyn/7lTp2tnjLy50Vsr/wAMzMzFDHzRbMTcH+fc4Iwe0Dw8PD1DGz51PvRxK1kNt37lDH6hpwM1Jchaxeuwamp6ep43QNU1NT8NXqVfETgr8ghPjuPUmKZlaPc3lwzmXLo9l/8tFC9uT/QB2ba9m1Z3fshfxRWUkdl2upuHIl9kKaW1qo43ItgcbG2Avp7e2ljsu1vHr9KvZC5GLw08FibTEXwrkkH3eiuR/JRwsRPg8RkuhCpHkcyYEIMXmdbCLEpJcgQkz6xIsQkz7ZIsSkT7AIMemTKkJM+kTGSsh/iZhQaCNuJ0YAAAAASUVORK5CYII=",Z_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHXElEQVR4nO1dS4wbNRh2RXm/xUst7dp5NPuIb9y4FMRDlbqNnW3T7m7bICGEOFAhDojj1M5uu7vpPrIXqCgSZ07QlqoCxIGHihAXDhWUCg5wKYVWAiSgou2gf5JsPJPN0t1kYmfGn/RLUZTMjP9v/P/279+/EbKwsLCwCAPJqcK9ROZyWLAZItlJItm3RPDLWLIrIPDZ+06yk/CbhGA74D+WjQ5iyCncgmV+lEh2igh2lUjurkq8/7BTcA24liVnjUhXtt1KSuwAFvynVZPQQrxrldgBuLYlZhVIlHJPY8nOLafU5ORONzOz2x04MuYOze91s5X9Ll0segKf4bvB2THvN/DbFsR8B/ewpPwPHjv64s1Y8Cki+HVVgYlS3s2UR93swr4l5d+owH/gv3CNJmIkP2rNWCsTNVl4CEv+ZZCI/vKoSyurI2FZqRS9azURI9iZjDP8oO0tCpLOcB+YEaIoKn14l5tdaJijTgmYNbh20ISlSmyzJaXeMxQyEpJXe0WHiQiK11sCpMS+p8Box2emStwdmB0LnYy6wL3gnqr5irVPwZJV1J4x2EUy6gL39JsvtoDiCBh2qqOpbpgpuoL5avQSfr1PsKdQnABmoRriaDhwXWTQmqQPF9Re8n2sJo8wW1aHturkjmoSeAZ1SJwQ/GUUm9iUEg7pP6LPVNEVTBc8YywcfDVQWHsLJ/Ju1gAiaF0qRTcxMaLM5POjKOrAkp+uNxhCGtpJWPRLxu/gP0BRBnbYfWoIfS2xKRqyQHRAiXX9m3a23YOiClhcUqO2upVPW4gaJYZFLhRVVFf6auZqeo92xdMWsmVmt9pLplFUUV12rTYU1jN0K562kIEj4+qc5ASKKmDCVW/o0Lx5/oPWBBa5Gj2EnUNRBRHstyWHbsBkkLaSis+x/4qiCi8zpNZQ7UpfXEkUQgT/B0UValRVv9KLK4r6rCiqsIQYBkuIYbCEGAZLiGGwhBgGS4hhsIQYBkuIYbCEGAZLiGGwhBgGCNQ1YlnmRnuzvlgW+xtFFVjwC431dIMJWfBFey+gqELNVoRFIN2KpzewQAXPjKIKLPj7vbGEO6auGL6HogosWaneUEgk0K142kK2TO9RCREoqujJNCDJh1FU8Uj5mTth1GJyotzQwj51A89fG5zhO1CU4RUAqOdmzZiXm5XxmSt+HEUdCZEvqFsRdBNAg8nWvl26uRyKPJyt67FkP5u4HSEzoyRaS/YDerdwE4oDsMy9atyGnQWYDDZ6Bxb8JRSvgjKN0hmwnUw3ISllSxuR/Cz0ZBQnQFa5GmzsL+ubKPr2hEh2DZfYEyiOwIK/qZIyMDfedTIGZseDBQSmUFyxabZwO5b8G9WfDHSRlOAedSL4F1AAB8UZmya2P0oE/9FvvkZDJwNGdz4yJD+78RB/QLc+jMDmEk+pQ2HShdxf9V5Y8vPwYujWg1Hom8hv0EVI7IvOtALRREhX37xeArGEmAViCTELxBJiFoglxCC4aJ0lxBD0ldjjRLLP9c1D2DubndxGFHdA5TYi+SeBGbPbjYJmqUP+IsvVJD72BkxSUazgonWQOAAFJ4NEEJmvLeuGvz7ilYudapTQ8EV7BTtBSvxZeFYUVUBVnVotd1993qW0oOndblZDdYfBuXE3tUJJcq9WfJQqAqWd/CYi+TyW7M+mRpdqRBiQVjo4N95UYFkh5g8i+By0BfUqknJkC5H8mFq9QQ2zQzKaCUu3NGjK5vd5z7Z8rXh2BQv+VsrZkUa9gr7D2++HRZ7liEhOjHSulvtiyFKpppQud8ICFDaDQv5QlRuZCljYIZK/QiS71ETE5E53cLb7q4G0Y+Zsr5ta1pyxS+BjjFt/r5mnr4MPnDq0y2uMboXSDmbFB4fLNVP2lTHD5b6D+b2e01N9xMSIVwRMtwJpaD1m3E1OjgTN2O/4IB/TeySRYG8HR039ZfPSQ2lI0j8DaadNzv9Y1+v99k/n7iaSfxx02CZvwqEhCbS5qbcI/tGQU7irK2RANjhkZ/gmdVMFN2vwnkEatlSKbnrKl2gHtRo/g6yacNlwtq5XC1mamsFONUmmvCfoV46Hmh9MJJ9Ub6jziAlqqPiOvghzB5Z33odk15bMlO0Zbsue4jl7NViZe7LzRxMpJV5hfqH7TaSGC+hIDVJ2dORFJHtdjUOZGIOihknwPBIi+Wsd7B2NDf8mbbChhouarooFu4id525rm5CEZC+ocw2jzvtYNFtAV6AzZdT1fNuEqHMOO6oqtrX3BEv+aVtkJJ38w77zPqzvcFfdU8CXLG13YFfbyiMmB9l+O7Iqtm26UpONERcEY9dOiGSzS+bKzjvcTuzuxZKX10wIluzD+oVg65duJ0l7VEB3CiGn2yCEn69fCEpO6G4Y7VFRy3XABHvthAh20Tr0YocPGmO/RL4kHzVeOnQeiRq11N+oYk+LqktLyGJkCGlO6bHC29QBu9ROD5m3BPBOv4Tz7Z17LvgcEfyyJYa3RwToUPC5WJxAbWFhYWFhgSzQf2pWSRvK7fy/AAAAAElFTkSuQmCC",gr=pc.createContext({isLogin:!1,user:{},logOut:()=>{}});const tT=()=>{const t=E.useContext(gr);return c.jsx("header",{children:c.jsxs("nav",{children:[c.jsx("div",{className:"nav-logo",children:c.jsx(_e,{to:"/",className:"head-link",children:c.jsx("h1",{children:"Trip to"})})}),c.jsxs("ul",{className:"nav-list",children:[c.jsx("li",{className:"nav-items",children:c.jsx(_e,{to:"/",children:"Home"})}),c.jsx("li",{className:"nav-items",children:c.jsx(_e,{to:"/about",children:"About"})}),c.jsx("li",{className:"nav-items",children:c.jsx(_e,{to:"/service",children:"Services"})}),c.jsx("li",{className:"nav-items",children:c.jsx(_e,{to:"/contact",children:"Contact"})})]}),c.jsx("div",{className:"nav-user-profile",children:t.user.displayName?c.jsxs(_e,{to:`/user/${t.user.uid}`,className:"nav-user-profile",children:[c.jsx("img",{className:"user-profile-img",src:t.user.photoURL?t.user.photoURL:Z_,alt:"img"}),c.jsx("span",{className:"user-displayname",children:t.user.displayName})]}):c.jsxs(_e,{to:"/login",className:"nav-user-profile",children:[c.jsx("img",{className:"user-profile-img",src:eT,alt:"img"}),c.jsx("span",{className:"user-displayname",children:"login"})]})})]})})};const nT=()=>{const t=Id(),[e,n]=E.useState({});return E.useEffect(()=>{let r="";t.type==="bus"?r=`https://on-the-move-55b84-default-rtdb.firebaseio.com/vehicle/${t.type}/${t.id.includes("non")?"non-ac":"ac"}/${t.id}.json`:r=`https://on-the-move-55b84-default-rtdb.firebaseio.com/vehicle/car/${t.id.includes("sedan")?"sedan":"suv"}/${t.id}.json`,(async()=>{const o=await(await fetch(r)).json();n({...o})})()},[]),c.jsxs("div",{className:"single-vehicle-container",children:[c.jsxs("h1",{className:"vehicle-heading",children:[e.type+"'s  Detail"," "]}),c.jsxs("div",{className:"vehicle-info-container",children:[c.jsxs("div",{className:"vehicle-img-info-div",children:[c.jsx("img",{src:e.imageURL,alt:e.type,className:"vehicle-img"}),c.jsxs("div",{className:"vehicle-info-div",children:[c.jsxs("h2",{className:"vehicle-name",children:[c.jsx("span",{style:{color:"black"},children:"name:"})," ",e.name]}),c.jsxs("h4",{className:"vehicle-info",children:[c.jsx("span",{style:{color:"black"},children:"top Speed:"})," ",e.topSpeed," KMph"]}),c.jsxs("h4",{className:"vehicle-info",children:[c.jsx("span",{style:{color:"black"},children:"capacity: "}),e.capacity," Seats"]}),c.jsxs("h4",{className:"vehicle-info",children:[c.jsx("span",{style:{color:"black"},children:"vehicle type: "}),e.type," "]})]})]}),c.jsxs("h1",{className:"vehicle-heading",children:[e.type+"'s "," Description"]}),c.jsx("div",{className:"vehicle-desc",children:e.description})]})]})};var rT="firebase",iT="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(rT,iT,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="firebasestorage.googleapis.com",tv="storageBucket",sT=2*60*1e3,oT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Xt{constructor(e,n,r=0){super(Da(e),`Firebase Storage: ${n} (${Da(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Da(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ie||(ie={}));function Da(t){return"storage/"+t}function kd(){const t="An unknown error occurred, please check the error payload for server response.";return new se(ie.UNKNOWN,t)}function lT(t){return new se(ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function aT(t){return new se(ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function uT(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new se(ie.UNAUTHENTICATED,t)}function cT(){return new se(ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function dT(t){return new se(ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function hT(){return new se(ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fT(){return new se(ie.CANCELED,"User canceled the upload/download.")}function pT(t){return new se(ie.INVALID_URL,"Invalid URL '"+t+"'.")}function mT(t){return new se(ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function gT(){return new se(ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+tv+"' property when initializing the app?")}function _T(){return new se(ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vT(){return new se(ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function yT(t){return new se(ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Yu(t){return new se(ie.INVALID_ARGUMENT,t)}function nv(){return new se(ie.APP_DELETED,"The Firebase app was deleted.")}function wT(t){return new se(ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Hi(t,e){return new se(ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Si(t){throw new se(ie.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt=class No{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=No.makeFromUrl(e,n)}catch{return new No(e,"")}if(r.path==="")return r;throw mT(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${h}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},y=n===ev?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${S}`,"i"),g=[{regex:l,indices:a,postModify:s},{regex:_,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<g.length;w++){const I=g[w],k=I.regex.exec(e);if(k){const N=k[I.indices.bucket];let x=k[I.indices.path];x||(x=""),r=new No(N,x),I.postModify(r);break}}if(r==null)throw pT(e);return r}};class ET{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let u=!1;function h(...S){u||(u=!0,e.apply(null,S))}function d(S){i=setTimeout(()=>{i=null,t(_,a())},S)}function f(){s&&clearTimeout(s)}function _(S,...m){if(u){f();return}if(S){f(),h.call(null,S,...m);return}if(a()||o){f(),h.call(null,S,...m);return}r<64&&(r*=2);let g;l===1?(l=2,g=0):g=(r+Math.random())*1e3,d(g)}let v=!1;function y(S){v||(v=!0,f(),!u&&(i!==null?(S||(l=2),clearTimeout(i),d(0)):S||(l=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function CT(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t){return t!==void 0}function kT(t){return typeof t=="object"&&!Array.isArray(t)}function Td(t){return typeof t=="string"||t instanceof String}function Hf(t){return Nd()&&t instanceof Blob}function Nd(){return typeof Blob<"u"&&!_E()}function Vf(t,e,n,r){if(r<e)throw Yu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Yu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function rv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xn||(Xn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n,r,i,s,o,l,a,u,h,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new to(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Xn.NO_ERROR,a=s.getStatus();if(!l||TT(a,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Xn.ABORT;r(!1,new to(!1,null,h));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new to(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());IT(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=kd();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?nv():fT();o(a)}else{const a=hT();o(a)}};this.canceled_?n(!1,new to(!1,null,!0)):this.backoffId_=ST(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&CT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class to{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function AT(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function RT(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xT(t,e){e&&(t["X-Firebase-GMPID"]=e)}function PT(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function OT(t,e,n,r,i,s,o=!0){const l=rv(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return xT(u,e),AT(u,n),RT(u,s),PT(u,r),new NT(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bT(...t){const e=DT();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Nd())return new Blob(t);throw new se(ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function LT(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){if(typeof atob>"u")throw yT("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ba{constructor(e,n){this.data=e,this.contentType=n||null}}function UT(t,e){switch(t){case Et.RAW:return new ba(iv(e));case Et.BASE64:case Et.BASE64URL:return new ba(sv(t,e));case Et.DATA_URL:return new ba(FT(e),BT(e))}throw kd()}function iv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function jT(t){let e;try{e=decodeURIComponent(t)}catch{throw Hi(Et.DATA_URL,"Malformed data URL.")}return iv(e)}function sv(t,e){switch(t){case Et.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Hi(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Et.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Hi(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=MT(e)}catch(i){throw i.message.includes("polyfill")?i:Hi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ov{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Hi(Et.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=WT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function FT(t){const e=new ov(t);return e.base64?sv(Et.BASE64,e.rest):jT(e.rest)}function BT(t){return new ov(t).contentType}function WT(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){let r=0,i="";Hf(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Hf(this.data_)){const r=this.data_,i=LT(r,e,n);return i===null?null:new cn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new cn(r,!0)}}static getBlob(...e){if(Nd()){const n=e.map(r=>r instanceof cn?r.data_:r);return new cn(bT.apply(null,n))}else{const n=e.map(o=>Td(o)?UT(Et.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new cn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t){let e;try{e=JSON.parse(t)}catch{return null}return kT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function HT(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function av(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t,e){return e}class Oe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||VT}}let no=null;function GT(t){return!Td(t)||t.length<2?t:av(t)}function uv(){if(no)return no;const t=[];t.push(new Oe("bucket")),t.push(new Oe("generation")),t.push(new Oe("metageneration")),t.push(new Oe("name","fullPath",!0));function e(s,o){return GT(o)}const n=new Oe("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Oe("size");return i.xform=r,t.push(i),t.push(new Oe("timeCreated")),t.push(new Oe("updated")),t.push(new Oe("md5Hash",null,!0)),t.push(new Oe("cacheControl",null,!0)),t.push(new Oe("contentDisposition",null,!0)),t.push(new Oe("contentEncoding",null,!0)),t.push(new Oe("contentLanguage",null,!0)),t.push(new Oe("contentType",null,!0)),t.push(new Oe("metadata","customMetadata",!0)),no=t,no}function KT(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new jt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function QT(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return KT(r,t),r}function cv(t,e,n){const r=lv(e);return r===null?null:QT(t,r,n)}function $T(t,e,n,r){const i=lv(e);if(i===null||!Td(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const h=t.bucket,d=t.fullPath,f="/b/"+o(h)+"/o/"+o(d),_=Ad(f,n,r),v=rv({alt:"media",token:u});return _+v})[0]}function qT(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class dv{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t){if(!t)throw kd()}function YT(t,e){function n(r,i){const s=cv(t,i,e);return hv(s!==null),s}return n}function XT(t,e){function n(r,i){const s=cv(t,i,e);return hv(s!==null),$T(s,i,t.host,t._protocol)}return n}function fv(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=cT():i=uT():n.getStatus()===402?i=aT(t.bucket):n.getStatus()===403?i=dT(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function JT(t){const e=fv(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=lT(t.path)),s.serverResponse=i.serverResponse,s}return n}function ZT(t,e,n){const r=e.fullServerUrl(),i=Ad(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new dv(i,s,XT(t,n),o);return l.errorHandler=JT(e),l}function e1(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function t1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=e1(null,e)),r}function n1(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let g="";for(let w=0;w<2;w++)g=g+Math.random().toString().slice(2);return g}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=t1(e,r,i),h=qT(u,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+a+"--",_=cn.getBlob(d,r,f);if(_===null)throw _T();const v={name:u.fullPath},y=Ad(s,t.host,t._protocol),S="POST",m=t.maxUploadRetryTime,p=new dv(y,S,YT(t,n),m);return p.urlParams=v,p.headers=o,p.body=_.uploadData(),p.errorHandler=fv(e),p}class r1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Xn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Xn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Xn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Si("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Si("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Si("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Si("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Si("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class i1 extends r1{initXhr(){this.xhr_.responseType="text"}}function pv(){return new i1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ur(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return av(this._location.path)}get storage(){return this._service}get parent(){const e=zT(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new ur(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw wT(e)}}function s1(t,e,n){t._throwIfRoot("uploadBytes");const r=n1(t.storage,t._location,uv(),new cn(e,!0),n);return t.storage.makeRequestWithTokens(r,pv).then(i=>({metadata:i,ref:t}))}function o1(t){t._throwIfRoot("getDownloadURL");const e=ZT(t.storage,t._location,uv());return t.storage.makeRequestWithTokens(e,pv).then(n=>{if(n===null)throw vT();return n})}function l1(t,e){const n=HT(t._location.path,e),r=new jt(t._location.bucket,n);return new ur(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t){return/^[A-Za-z]+:\/\//.test(t)}function u1(t,e){return new ur(t,e)}function mv(t,e){if(t instanceof Rd){const n=t;if(n._bucket==null)throw gT();const r=new ur(n,n._bucket);return e!=null?mv(r,e):r}else return e!==void 0?l1(t,e):t}function c1(t,e){if(e&&a1(e)){if(t instanceof Rd)return u1(t,e);throw Yu("To use ref(service, url), the first argument must be a Storage instance.")}else return mv(t,e)}function Gf(t,e){const n=e==null?void 0:e[tv];return n==null?null:jt.makeFromBucketSpec(n,t)}function d1(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:e_(i,t.app.options.projectId))}class Rd{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ev,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sT,this._maxUploadRetryTime=oT,this._requests=new Set,i!=null?this._bucket=jt.makeFromBucketSpec(i,this._host):this._bucket=Gf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=Gf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ur(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new ET(nv());{const o=OT(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Kf="@firebase/storage",Qf="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="storage";function h1(t,e,n){return t=le(t),s1(t,e,n)}function f1(t){return t=le(t),o1(t)}function p1(t,e){return t=le(t),c1(t,e)}function m1(t=cd(),e){t=le(t);const r=jl(t,gv).getImmediate({identifier:e}),i=Xg("storage");return i&&g1(r,...i),r}function g1(t,e,n,r={}){d1(t,e,n,r)}function _1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Rd(n,r,i,e,mr)}function v1(){sr(new An(gv,_1,"PUBLIC").setMultipleInstances(!0)),kt(Kf,Qf,""),kt(Kf,Qf,"esm2017")}v1();const $f="@firebase/database",qf="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _v="";function y1(t){_v=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Se(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:cs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Jt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new w1(e)}}catch{}return new E1},Kn=vv("localStorage"),Xu=vv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new ad("@firebase/database"),S1=function(){let t=1;return function(){return t++}}(),yv=function(t){const e=PE(t),n=new NE;n.update(e);const r=n.digest();return sd.encodeByteArray(r)},As=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=As.apply(null,r):typeof r=="object"?e+=Se(r):e+=r,e+=" "}return e};let Jn=null,Yf=!0;const C1=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(zr.logLevel=H.VERBOSE,Jn=zr.log.bind(zr),e&&Xu.set("logging_enabled",!0)):typeof t=="function"?Jn=t:(Jn=null,Xu.remove("logging_enabled"))},Ae=function(...t){if(Yf===!0&&(Yf=!1,Jn===null&&Xu.get("logging_enabled")===!0&&C1(!0)),Jn){const e=As.apply(null,t);Jn(e)}},Rs=function(t){return function(...e){Ae(t,...e)}},Ju=function(...t){const e="FIREBASE INTERNAL ERROR: "+As(...t);zr.error(e)},Qt=function(...t){const e=`FIREBASE FATAL ERROR: ${As(...t)}`;throw zr.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+As(...t);zr.warn(e)},I1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},k1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Zr="[MIN_NAME]",cr="[MAX_NAME]",ui=function(t,e){if(t===e)return 0;if(t===Zr||e===cr)return-1;if(e===Zr||t===cr)return 1;{const n=Xf(t),r=Xf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},T1=function(t,e){return t===e?0:t<e?-1:1},Ci=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Se(e))},xd=function(t){if(typeof t!="object"||t===null)return Se(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Se(e[r]),n+=":",n+=xd(t[e[r]]);return n+="}",n},Ev=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function st(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sv=function(t){T(!wv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},N1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},A1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},R1=new RegExp("^-?(0*)\\d{1,10}$"),x1=-2147483648,P1=2147483647,Xf=function(t){if(R1.test(t)){const e=Number(t);if(e>=x1&&e<=P1)return e}return null},ci=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},O1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class Hr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="5",Cv="v",Iv="s",kv="r",Tv="f",Nv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Av="ls",Rv="p",Zu="ac",xv="websocket",Pv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function L1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Dv(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===xv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Pv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);L1(t)&&(n.ns=t.namespace);const i=[];return st(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(){this.counters_={}}incrementCounter(e,n=1){Jt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La={},Ma={};function Od(t){const e=t.toString();return La[e]||(La[e]=new M1),La[e]}function U1(t,e){const n=t.toString();return Ma[n]||(Ma[n]=e()),Ma[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ci(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="start",F1="close",B1="pLPCommand",W1="pRTLPCB",bv="id",Lv="pw",Mv="ser",z1="cb",H1="seg",V1="ts",G1="d",K1="dframe",Uv=1870,jv=30,Q1=Uv-jv,$1=25e3,q1=3e4;class Dr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rs(e),this.stats_=Od(n),this.urlFn=a=>(this.appCheckToken&&(a[Zu]=this.appCheckToken),Dv(n,Pv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new j1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(q1)),k1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dd((...s)=>{const[o,l,a,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jf)this.id=l,this.password=a;else if(o===F1)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Jf]="t",r[Mv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[z1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Cv]=Pd,this.transportSessionId&&(r[Iv]=this.transportSessionId),this.lastSessionId&&(r[Av]=this.lastSessionId),this.applicationId&&(r[Rv]=this.applicationId),this.appCheckToken&&(r[Zu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Nv.test(location.hostname)&&(r[kv]=Tv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Dr.forceAllow_=!0}static forceDisallow(){Dr.forceDisallow_=!0}static isAvailable(){return Dr.forceAllow_?!0:!Dr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!N1()&&!A1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$g(n),i=Ev(r,Q1);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[K1]="t",r[bv]=e,r[Lv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Se(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Dd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=S1(),window[B1+this.uniqueCallbackIdentifier]=e,window[W1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Dd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bv]=this.myID,e[Lv]=this.myPW,e[Mv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jv+r.length<=Uv;){const o=this.pendingSegs.shift();r=r+"&"+H1+i+"="+o.seg+"&"+V1+i+"="+o.ts+"&"+G1+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor($1)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=16384,X1=45e3;let dl=null;typeof MozWebSocket<"u"?dl=MozWebSocket:typeof WebSocket<"u"&&(dl=WebSocket);class dt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rs(this.connId),this.stats_=Od(n),this.connURL=dt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Cv]=Pd,typeof location<"u"&&location.hostname&&Nv.test(location.hostname)&&(o[kv]=Tv),n&&(o[Iv]=n),r&&(o[Av]=r),i&&(o[Zu]=i),s&&(o[Rv]=s),Dv(e,xv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kn.set("previous_websocket_failure",!0);try{let r;n_(),this.mySock=new dl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&dl!==null&&!dt.forceDisallow_}static previouslyFailed(){return Kn.isInMemoryStorage||Kn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=cs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ev(n,Y1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(X1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Dr,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let r=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dt];else{const i=this.transports_=[];for(const s of ms.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ms.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=6e4,Z1=5e3,eN=10*1024,tN=100*1024,Ua="t",Zf="d",nN="s",ep="r",rN="e",tp="o",np="a",rp="n",ip="p",iN="h";class sN{constructor(e,n,r,i,s,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rs("c:"+this.id+":"),this.transportManager_=new ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Vi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>eN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ua in e){const n=e[Ua];n===np?this.upgradeIfSecondaryHealthy_():n===ep?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===tp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ci("t",e),r=Ci("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ip,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:np,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ci("t",e),r=Ci("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ci(Ua,e);if(Zf in e){const r=e[Zf];if(n===iN){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===rp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===nN?this.onConnectionShutdown_(r):n===ep?this.onReset_(r):n===rN?Ju("Server Error: "+r):n===tp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ju("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Pd!==r&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Vi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(J1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Z1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ip,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Bv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!od()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hl}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=32,op=768;class Y{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new Y("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rn(t){return t.pieces_.length-t.pieceNum_}function $(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Y(t.pieces_,e)}function Wv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function oN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Y(e,0)}function de(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Y)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Y(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function et(t,e){const n=L(t),r=L(e);if(n===null)return e;if(n===r)return et($(t),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Vv(t,e){if(Rn(t)!==Rn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ht(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Rn(t)>Rn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class lN{constructor(e,n){this.errorPrefix_=n,this.parts_=zv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ul(this.parts_[r]);Gv(this)}}function aN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ul(e),Gv(t)}function uN(t){const e=t.parts_.pop();t.byteLength_-=Ul(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gv(t){if(t.byteLength_>op)throw new Error(t.errorPrefix_+"has a key path longer than "+op+" bytes ("+t.byteLength_+").");if(t.parts_.length>sp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sp+") or object contains a cycle "+Wn(t))}function Wn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd extends Bv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new bd}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=1e3,cN=60*5*1e3,lp=30*1e3,dN=1.3,hN=3e4,fN="server_kill",ap=3;class Wt extends Fv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Wt.nextPersistentConnectionId_++,this.log_=Rs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ii,this.maxReconnectDelay_=cN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!n_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Se(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ml,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Wt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Jt(e,"w")){const r=Jr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||TE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=kE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Se(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ju("Unrecognized action received from server: "+Se(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ii,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ii,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hN&&(this.reconnectDelay_=Ii),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new sN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{He(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(fN)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&He(d),a())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ju(this.interruptReasons_)&&(this.reconnectDelay_=Ii,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>xd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Y(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ap&&(this.reconnectDelay_=lp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ap&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_v.replace(/\./g,"-")]=1,od()?e["framework.cordova"]=1:t_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hl.getInstance().currentlyOnline();return ju(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(Zr,e),i=new j(Zr,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro;class Kv extends Kl{static get __EMPTY_NODE(){return ro}static set __EMPTY_NODE(e){ro=e}compare(e,n){return ui(e.name,n.name)}isDefinedOn(e){throw ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(cr,ro)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,ro)}toString(){return".key"}}const Vr=new Kv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ge.RED,this.left=i??Fe.EMPTY_NODE,this.right=s??Fe.EMPTY_NODE}copy(e,n,r,i,s){return new ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class pN{copy(e,n,r,i,s){return this}insert(e,n,r){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new io(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new io(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new io(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new io(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new pN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t,e){return ui(t.name,e.name)}function Ld(t,e){return ui(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec;function gN(t){ec=t}const Qv=function(t){return typeof t=="number"?"number:"+Sv(t):"string:"+t},$v=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Jt(e,".sv"),"Priority must be a string or number.")}else T(t===ec||t.isEmpty(),"priority of unexpected type.");T(t===ec||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let up;class pe{constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$v(this.priorityNode_)}static set __childrenNodeConstructor(e){up=e}static get __childrenNodeConstructor(){return up}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:L(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=L(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||Rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sv(this.value_):e+=this.value_,this.lazyHash_=yv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),s=pe.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qv,Yv;function _N(t){qv=t}function vN(t){Yv=t}class yN extends Kl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ui(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(cr,new pe("[PRIORITY-POST]",Yv))}makePost(e,n){const r=qv(e);return new j(n,new pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Re=new yN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=Math.log(2);class EN{constructor(e){const n=s=>parseInt(Math.log(s)/wN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fl=function(t,e,n,r){t.sort(e);const i=function(a,u){const h=u-a;let d,f;if(h===0)return null;if(h===1)return d=t[a],f=n?n(d):d,new ge(f,d.node,ge.BLACK,null,null);{const _=parseInt(h/2,10)+a,v=i(a,_),y=i(_+1,u);return d=t[_],f=n?n(d):d,new ge(f,d.node,ge.BLACK,v,y)}},s=function(a){let u=null,h=null,d=t.length;const f=function(v,y){const S=d-v,m=d;d-=v;const p=i(S+1,m),g=t[S],w=n?n(g):g;_(new ge(w,g.node,y,null,p))},_=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),S=Math.pow(2,a.count-(v+1));y?f(S,ge.BLACK):(f(S,ge.BLACK),f(S,ge.RED))}return h},o=new EN(t.length),l=s(o);return new Fe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja;const wr={};class Ft{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(wr&&Re,"ChildrenNode.ts has not been loaded"),ja=ja||new Ft({".priority":wr},{".priority":Re}),ja}get(e){const n=Jr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return Jt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Vr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=fl(r,e.getCompare()):l=wr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Ft(h,u)}addToIndexes(e,n){const r=el(this.indexes_,(i,s)=>{const o=Jr(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===wr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),fl(l,o.getCompare())}else return wr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new Ft(r,this.indexSet_)}removeFromIndexes(e,n){const r=el(this.indexes_,i=>{if(i===wr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new Ft(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;class W{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&$v(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ki||(ki=new W(new Fe(Ld),null,Ft.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ki}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ki:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ki:this.priorityNode_;return new W(i,o,s)}}updateChild(e,n){const r=L(e);if(r===null)return n;{T(L(e)!==".priority"||Rn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild($(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Re,(o,l)=>{n[o]=l.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qv(this.getPriority().val())+":"),this.forEachChild(Re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":yv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xs?-1:0}withIndex(e){if(e===Vr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Re),i=n.getIterator(Re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vr?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class SN extends W{constructor(){super(new Fe(Ld),W.EMPTY_NODE,Ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const xs=new SN;Object.defineProperties(j,{MIN:{value:new j(Zr,W.EMPTY_NODE)},MAX:{value:new j(cr,xs)}});Kv.__EMPTY_NODE=W.EMPTY_NODE;pe.__childrenNodeConstructor=W;gN(xs);vN(xs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=!0;function Ee(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,Ee(e))}if(!(t instanceof Array)&&CN){const n=[];let r=!1;if(st(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ee(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return W.EMPTY_NODE;const s=fl(n,mN,o=>o.name,Ld);if(r){const o=fl(n,Re.getCompare());return new W(s,Ee(e),new Ft({".priority":o},{".priority":Re}))}else return new W(s,Ee(e),Ft.Default)}else{let n=W.EMPTY_NODE;return st(t,(r,i)=>{if(Jt(t,r)&&r.substring(0,1)!=="."){const s=Ee(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ee(e))}}_N(Ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN extends Kl{constructor(e){super(),this.indexPath_=e,T(!U(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ui(e.name,n.name):s}makePost(e,n){const r=Ee(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,xs);return new j(cr,e)}toString(){return zv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN extends Kl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ui(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=Ee(e);return new j(n,r)}toString(){return".value"}}const TN=new kN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t){return{type:"value",snapshotNode:t}}function AN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function RN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function cp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zr}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Re}copy(){const e=new Md;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Re?n="$priority":t.index_===TN?n="$value":t.index_===Vr?n="$key":(T(t.index_ instanceof IN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Se(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Se(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Se(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Se(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Se(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function hp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Re&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends Fv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Rs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=pl.getListenId_(e,r),l={};this.listens_[o]=l;const a=dp(e._queryParams);this.restRequest_(s+".json",a,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Jr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=pl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=dp(e._queryParams),r=e._path.toString(),i=new Ml;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+si(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=cs(l.responseText)}catch{He("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){return{value:null,children:new Map}}function Xv(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=L(e);t.children.has(r)||t.children.set(r,ml());const i=t.children.get(r);e=$(e),Xv(i,e,n)}}function tc(t,e,n){t.value!==null?n(e,t.value):ON(t,(r,i)=>{const s=new Y(e.toString()+"/"+r);tc(i,s,n)})}function ON(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&st(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=10*1e3,bN=30*1e3,LN=5*60*1e3;class MN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new DN(e);const r=fp+(bN-fp)*Math.random();Vi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;st(e,(i,s)=>{s>0&&Jt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Vi(this.reportStats_.bind(this),Math.floor(Math.random()*2*LN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function Jv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ey(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=St.ACK_USER_WRITE,this.source=Jv()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(e));return new gl(V(),n,this.revert)}}else return T(L(this.path)===e,"operationForChild called for unrelated child."),new gl($(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=St.OVERWRITE}operationForChild(e){return U(this.path)?new dr(this.source,V(),this.snap.getImmediateChild(e)):new dr(this.source,$(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=St.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new Y(e));return n.isEmpty()?null:n.value?new dr(this.source,V(),n.value):new gs(this.source,V(),n)}else return T(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gs(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function UN(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(xN(o.childName,o.snapshotNode))}),Ti(t,i,"child_removed",e,r,n),Ti(t,i,"child_added",e,r,n),Ti(t,i,"child_moved",s,r,n),Ti(t,i,"child_changed",e,r,n),Ti(t,i,"value",e,r,n),i}function Ti(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>FN(t,l,a)),o.forEach(l=>{const a=jN(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function jN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FN(t,e,n){if(e.childName==null||n.childName==null)throw ii("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t,e){return{eventCache:t,serverCache:e}}function Gi(t,e,n,r){return ty(new Ud(e,n,r),t.serverCache)}function ny(t,e,n,r){return ty(t.eventCache,new Ud(e,n,r))}function nc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa;const BN=()=>(Fa||(Fa=new Fe(T1)),Fa);class Q{constructor(e,n=BN()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return st(e,(r,i)=>{n=n.set(new Y(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(U(e))return null;{const r=L(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue($(e),n);return s!=null?{path:de(new Y(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=L(e),r=this.children.get(n);return r!==null?r.subtree($(e)):new Q(null)}}set(e,n){if(U(e))return new Q(n,this.children);{const r=L(e),s=(this.children.get(r)||new Q(null)).set($(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=L(e),r=this.children.get(n);if(r){const i=r.remove($(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=L(e),r=this.children.get(n);return r?r.get($(e)):null}}setTree(e,n){if(U(e))return n;{const r=L(e),s=(this.children.get(r)||new Q(null)).setTree($(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(de(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=L(e),o=this.children.get(s);return o?o.findOnPath_($(e),de(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=L(e),s=this.children.get(i);return s?s.foreachOnPath_($(e),de(n,i),r):new Q(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(de(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.writeTree_=e}static empty(){return new mt(new Q(null))}}function Ki(t,e,n){if(U(e))return new mt(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=et(i,e);return s=s.updateChild(o,n),new mt(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new mt(s)}}}function pp(t,e,n){let r=t;return st(n,(i,s)=>{r=Ki(r,de(e,i),s)}),r}function mp(t,e){if(U(e))return mt.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new mt(n)}}function rc(t,e){return _r(t,e)!=null}function _r(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(et(n.path,e)):null}function gp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Re,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function kn(t,e){if(U(e))return t;{const n=_r(t,e);return n!=null?new mt(new Q(n)):new mt(t.writeTree_.subtree(e))}}function ic(t){return t.writeTree_.isEmpty()}function ei(t,e){return ry(V(),t.writeTree_,e)}function ry(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ry(de(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(de(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t,e){return uy(e,t)}function WN(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ki(t.visibleWrites,e,n)),t.lastWriteId=r}function zN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function HN(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&VN(l,r.path)?i=!1:ht(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return GN(t),!0;if(r.snap)t.visibleWrites=mp(t.visibleWrites,r.path);else{const l=r.children;st(l,a=>{t.visibleWrites=mp(t.visibleWrites,de(r.path,a))})}return!0}else return!1}function VN(t,e){if(t.snap)return ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ht(de(t.path,n),e))return!0;return!1}function GN(t){t.visibleWrites=sy(t.allWrites,KN,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function KN(t){return t.visible}function sy(t,e,n){let r=mt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ht(n,o)?(l=et(n,o),r=Ki(r,l,s.snap)):ht(o,n)&&(l=et(o,n),r=Ki(r,V(),s.snap.getChild(l)));else if(s.children){if(ht(n,o))l=et(n,o),r=pp(r,l,s.children);else if(ht(o,n))if(l=et(o,n),U(l))r=pp(r,V(),s.children);else{const a=Jr(s.children,L(l));if(a){const u=a.getChild($(l));r=Ki(r,V(),u)}}}else throw ii("WriteRecord should have .snap or .children")}}return r}function oy(t,e,n,r,i){if(!r&&!i){const s=_r(t.visibleWrites,e);if(s!=null)return s;{const o=kn(t.visibleWrites,e);if(ic(o))return n;if(n==null&&!rc(o,V()))return null;{const l=n||W.EMPTY_NODE;return ei(o,l)}}}else{const s=kn(t.visibleWrites,e);if(!i&&ic(s))return n;if(!i&&n==null&&!rc(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ht(u.path,e)||ht(e,u.path))},l=sy(t.allWrites,o,e),a=n||W.EMPTY_NODE;return ei(l,a)}}}function QN(t,e,n){let r=W.EMPTY_NODE;const i=_r(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=kn(t.visibleWrites,e);return n.forEachChild(Re,(o,l)=>{const a=ei(kn(s,new Y(o)),l);r=r.updateImmediateChild(o,a)}),gp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=kn(t.visibleWrites,e);return gp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $N(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=de(e,n);if(rc(t.visibleWrites,s))return null;{const o=kn(t.visibleWrites,s);return ic(o)?i.getChild(n):ei(o,i.getChild(n))}}function qN(t,e,n,r){const i=de(e,n),s=_r(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=kn(t.visibleWrites,i);return ei(o,r.getNode().getImmediateChild(n))}else return null}function YN(t,e){return _r(t.visibleWrites,e)}function XN(t,e,n,r,i,s,o){let l;const a=kn(t.visibleWrites,e),u=_r(a,V());if(u!=null)l=u;else if(n!=null)l=ei(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=f.getNext();for(;_&&h.length<i;)d(_,r)!==0&&h.push(_),_=f.getNext();return h}else return[]}function JN(){return{visibleWrites:mt.empty(),allWrites:[],lastWriteId:-1}}function sc(t,e,n,r){return oy(t.writeTree,t.treePath,e,n,r)}function ly(t,e){return QN(t.writeTree,t.treePath,e)}function _p(t,e,n,r){return $N(t.writeTree,t.treePath,e,n,r)}function _l(t,e){return YN(t.writeTree,de(t.treePath,e))}function ZN(t,e,n,r,i,s){return XN(t.writeTree,t.treePath,e,n,r,i,s)}function jd(t,e,n){return qN(t.writeTree,t.treePath,e,n)}function ay(t,e){return uy(de(t.treePath,e),t.writeTree)}function uy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,cp(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,RN(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,AN(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,cp(r,e.snapshotNode,i.oldSnap));else throw ii("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const cy=new tA;class Fd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ud(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hr(this.viewCache_),s=ZN(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function nA(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rA(t,e,n,r,i){const s=new eA;let o,l;if(n.type===St.OVERWRITE){const u=n;u.source.fromUser?o=oc(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=vl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===St.MERGE){const u=n;u.source.fromUser?o=sA(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=lc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===St.ACK_USER_WRITE){const u=n;u.revert?o=aA(t,e,u.path,r,i,s):o=oA(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===St.LISTEN_COMPLETE)o=lA(t,e,n.path,r,s);else throw ii("Unknown operation type: "+n.type);const a=s.getChanges();return iA(e,o,a),{viewCache:o,changes:a}}function iA(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=nc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(NN(nc(e)))}}function dy(t,e,n,r,i,s){const o=e.eventCache;if(_l(r,n)!=null)return e;{let l,a;if(U(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=hr(e),h=u instanceof W?u:W.EMPTY_NODE,d=ly(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=sc(r,hr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=L(n);if(u===".priority"){T(Rn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const d=_p(r,n,h,a);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=$(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=_p(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=jd(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,i,s):l=o.getNode()}}return Gi(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function vl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),_,null)}else{const _=L(n);if(!a.isCompleteForPath(n)&&Rn(n)>1)return e;const v=$(n),S=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=h.updatePriority(a.getNode(),S):u=h.updateChild(a.getNode(),_,S,v,cy,null)}const d=ny(e,u,a.isFullyInitialized()||U(n),h.filtersNodes()),f=new Fd(i,d,s);return dy(t,d,n,i,f,l)}function oc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const h=new Fd(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Gi(e,u,!0,t.filter.filtersNodes());else{const d=L(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Gi(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=$(n),_=l.getNode().getImmediateChild(d);let v;if(U(f))v=r;else{const y=h.getCompleteChild(d);y!=null?Wv(f)===".priority"&&y.getChild(Hv(f)).isEmpty()?v=y:v=y.updateChild(f,r):v=W.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),d,v,f,h,o);a=Gi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function vp(t,e){return t.eventCache.isCompleteForChild(e)}function sA(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const h=de(n,a);vp(e,L(h))&&(l=oc(t,l,h,u,i,s,o))}),r.foreach((a,u)=>{const h=de(n,a);vp(e,L(h))||(l=oc(t,l,h,u,i,s,o))}),l}function yp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function lc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new Q(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=yp(t,_,f);a=vl(t,a,new Y(d),v,i,s,o,l)}}),u.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),y=yp(t,v,f);a=vl(t,a,new Y(d),y,i,s,o,l)}}),a}function oA(t,e,n,r,i,s,o){if(_l(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return vl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new Q(null);return a.getNode().forEachChild(Vr,(h,d)=>{u=u.set(new Y(h),d)}),lc(t,e,n,u,i,s,l,o)}else return e}else{let u=new Q(null);return r.foreach((h,d)=>{const f=de(n,h);a.isCompleteForPath(f)&&(u=u.set(h,a.getNode().getChild(f)))}),lc(t,e,n,u,i,s,l,o)}}function lA(t,e,n,r,i){const s=e.serverCache,o=ny(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return dy(t,o,n,r,cy,i)}function aA(t,e,n,r,i,s){let o;if(_l(r,n)!=null)return e;{const l=new Fd(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||L(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=sc(r,hr(e));else{const d=e.serverCache.getNode();T(d instanceof W,"serverChildren would be complete if leaf node"),h=ly(r,d)}h=h,u=t.filter.updateFullNode(a,h,s)}else{const h=L(n);let d=jd(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=a.getImmediateChild(h)),d!=null?u=t.filter.updateChild(a,h,d,$(n),l,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,W.EMPTY_NODE,$(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=sc(r,hr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||_l(r,V())!=null,Gi(e,u,o,t.filter.filtersNodes())}}function uA(t,e){const n=hr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function wp(t,e,n,r){e.type===St.MERGE&&e.source.queryId!==null&&(T(hr(t.viewCache_),"We should always have a full cache before handling merges"),T(nc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=rA(t.processor_,i,e,n,r);return nA(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,cA(t,s.changes,s.viewCache.eventCache.getNode(),null)}function cA(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return UN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ep;function dA(t){T(!Ep,"__referenceConstructor has already been defined"),Ep=t}function Bd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),wp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(wp(o,e,n,r));return s}}function Wd(t,e){let n=null;for(const r of t.views.values())n=n||uA(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sp;function hA(t){T(!Sp,"__referenceConstructor has already been defined"),Sp=t}class Cp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=JN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hy(t,e,n,r,i){return WN(t.pendingWriteTree_,e,n,r,i),i?$l(t,new dr(Jv(),e,n)):[]}function Qn(t,e,n=!1){const r=zN(t.pendingWriteTree_,e);if(HN(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(V(),!0):st(r.children,o=>{s=s.set(new Y(o),!0)}),$l(t,new gl(r.path,s,n))}else return[]}function Ql(t,e,n){return $l(t,new dr(Zv(),e,n))}function fA(t,e,n){const r=Q.fromObject(n);return $l(t,new gs(Zv(),e,r))}function pA(t,e,n,r){const i=my(t,r);if(i!=null){const s=gy(i),o=s.path,l=s.queryId,a=et(o,e),u=new dr(ey(l),a,n);return _y(t,o,u)}else return[]}function mA(t,e,n,r){const i=my(t,r);if(i){const s=gy(i),o=s.path,l=s.queryId,a=et(o,e),u=Q.fromObject(n),h=new gs(ey(l),a,u);return _y(t,o,h)}else return[]}function zd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=et(o,e),u=Wd(l,a);if(u)return u});return oy(i,e,s,n,!0)}function $l(t,e){return fy(e,t.syncPointTree_,null,iy(t.pendingWriteTree_,V()))}function fy(t,e,n,r){if(U(t.path))return py(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=Wd(i,V()));let s=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=ay(r,o);s=s.concat(fy(l,a,u,h))}return i&&(s=s.concat(Bd(i,t,r,n))),s}}function py(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=Wd(i,V()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=ay(r,o),h=t.operationForChild(o);h&&(s=s.concat(py(h,l,a,u)))}),i&&(s=s.concat(Bd(i,t,r,n))),s}function my(t,e){return t.tagToQueryMap.get(e)}function gy(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Y(t.substr(0,e))}}function _y(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=iy(t.pendingWriteTree_,e);return Bd(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Hd(n)}node(){return this.node_}}class Vd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Vd(this.syncTree_,n)}node(){return zd(this.syncTree_,this.path_)}}const gA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ip=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _A(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vA(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_A=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},vA=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},yA=function(t,e,n,r){return Gd(e,new Vd(n,t),r)},vy=function(t,e,n){return Gd(t,new Hd(e),n)};function Gd(t,e,n){const r=t.getPriority().val(),i=Ip(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Ip(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,Ee(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new pe(i))),o.forEachChild(Re,(l,a)=>{const u=Gd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Qd(t,e){let n=e instanceof Y?e:new Y(e),r=t,i=L(n);for(;i!==null;){const s=Jr(r.node.children,i)||{children:{},childCount:0};r=new Kd(i,r,s),n=$(n),i=L(n)}return r}function di(t){return t.node.value}function yy(t,e){t.node.value=e,ac(t)}function wy(t){return t.node.childCount>0}function wA(t){return di(t)===void 0&&!wy(t)}function ql(t,e){st(t.node.children,(n,r)=>{e(new Kd(n,t,r))})}function Ey(t,e,n,r){n&&!r&&e(t),ql(t,i=>{Ey(i,e,!0,r)}),n&&r&&e(t)}function EA(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ps(t){return new Y(t.parent===null?t.name:Ps(t.parent)+"/"+t.name)}function ac(t){t.parent!==null&&SA(t.parent,t.name,t)}function SA(t,e,n){const r=wA(n),i=Jt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ac(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ac(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=/[\[\].#$\/\u0000-\u001F\u007F]/,IA=/[\[\].#$\u0000-\u001F\u007F]/,Ba=10*1024*1024,Sy=function(t){return typeof t=="string"&&t.length!==0&&!CA.test(t)},Cy=function(t){return typeof t=="string"&&t.length!==0&&!IA.test(t)},kA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Cy(t)},TA=function(t,e,n,r){r&&e===void 0||$d(ld(t,"value"),e,n)},$d=function(t,e,n){const r=n instanceof Y?new lN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wn(r)+" with contents = "+e.toString());if(wv(e))throw new Error(t+"contains "+e.toString()+" "+Wn(r));if(typeof e=="string"&&e.length>Ba/3&&Ul(e)>Ba)throw new Error(t+"contains a string greater than "+Ba+" utf8 bytes "+Wn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(st(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Sy(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aN(r,o),$d(t,l,r),uN(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wn(r)+" in addition to actual children.")}},Iy=function(t,e,n,r){if(!(r&&n===void 0)&&!Cy(n))throw new Error(ld(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},NA=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Iy(t,e,n,r)},AA=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},RA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kA(n))throw new Error(ld(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ky(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Vv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function $t(t,e,n){ky(t,n),PA(t,r=>ht(r,e)||ht(e,r))}function PA(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(OA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function OA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Jn&&Ae("event: "+n.toString()),ci(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="repo_interrupt",bA=25;class LA{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ml(),this.transactionQueueTree_=new Kd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function MA(t,e,n){if(t.stats_=Od(t.repoInfo_),t.forceRestClient_||O1())t.server_=new pl(t.repoInfo_,(r,i,s,o)=>{kp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Tp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(r,i,s,o)=>{kp(t,r,i,s,o)},r=>{Tp(t,r)},r=>{jA(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=U1(t.repoInfo_,()=>new MN(t.stats_,t.server_)),t.infoData_=new PN,t.infoSyncTree_=new Cp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ql(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Yd(t,"connected",!1),t.serverSyncTree_=new Cp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);$t(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function UA(t){const n=t.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function qd(t){return gA({timestamp:UA(t)})}function kp(t,e,n,r,i){t.dataUpdateCount++;const s=new Y(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=el(n,u=>Ee(u));o=mA(t.serverSyncTree_,s,a,i)}else{const a=Ee(n);o=pA(t.serverSyncTree_,s,a,i)}else if(r){const a=el(n,u=>Ee(u));o=fA(t.serverSyncTree_,s,a)}else{const a=Ee(n);o=Ql(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Yl(t,s)),$t(t.eventQueue_,l,o)}function Tp(t,e){Yd(t,"connected",e),e===!1&&BA(t)}function jA(t,e){st(e,(n,r)=>{Yd(t,n,r)})}function Yd(t,e,n){const r=new Y("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(r,i);const s=Ql(t.infoSyncTree_,r,i);$t(t.eventQueue_,r,s)}function Ty(t){return t.nextWriteId_++}function FA(t,e,n,r,i){Xd(t,"set",{path:e.toString(),value:n,priority:r});const s=qd(t),o=Ee(n,r),l=zd(t.serverSyncTree_,e),a=vy(o,l,s),u=Ty(t),h=hy(t.serverSyncTree_,e,a,u,!0);ky(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||He("set at "+e+" failed: "+f);const y=Qn(t.serverSyncTree_,u,!v);$t(t.eventQueue_,e,y),zA(t,i,f,_)});const d=Py(t,e);Yl(t,d),$t(t.eventQueue_,d,[])}function BA(t){Xd(t,"onDisconnectEvents");const e=qd(t),n=ml();tc(t.onDisconnect_,V(),(i,s)=>{const o=yA(i,s,t.serverSyncTree_,e);Xv(n,i,o)});let r=[];tc(n,V(),(i,s)=>{r=r.concat(Ql(t.serverSyncTree_,i,s));const o=Py(t,i);Yl(t,o)}),t.onDisconnect_=ml(),$t(t.eventQueue_,V(),r)}function WA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(DA)}function Xd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function zA(t,e,n,r){e&&ci(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Ny(t,e,n){return zd(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function Jd(t,e=t.transactionQueueTree_){if(e||Xl(t,e),di(e)){const n=Ry(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&HA(t,Ps(e),n)}else wy(e)&&ql(e,n=>{Jd(t,n)})}function HA(t,e,n){const r=n.map(u=>u.currentWriteId),i=Ny(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];T(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=et(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Xd(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(Qn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Xl(t,Qd(t.transactionQueueTree_,e)),Jd(t,t.transactionQueueTree_),$t(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)ci(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{He("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Yl(t,e)}},o)}function Yl(t,e){const n=Ay(t,e),r=Ps(n),i=Ry(t,n);return VA(t,i,r),r}function VA(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=et(n,a.path);let h=!1,d;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,d=a.abortReason,i=i.concat(Qn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=bA)h=!0,d="maxretry",i=i.concat(Qn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Ny(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){$d("transaction failed: Data returned ",_,a.path);let v=Ee(_);typeof _=="object"&&_!=null&&Jt(_,".priority")||(v=v.updatePriority(f.getPriority()));const S=a.currentWriteId,m=qd(t),p=vy(v,f,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=Ty(t),o.splice(o.indexOf(S),1),i=i.concat(hy(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Qn(t.serverSyncTree_,S,!0))}else h=!0,d="nodata",i=i.concat(Qn(t.serverSyncTree_,a.currentWriteId,!0))}$t(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Xl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ci(r[l]);Jd(t,t.transactionQueueTree_)}function Ay(t,e){let n,r=t.transactionQueueTree_;for(n=L(e);n!==null&&di(r)===void 0;)r=Qd(r,n),e=$(e),n=L(e);return r}function Ry(t,e){const n=[];return xy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function xy(t,e,n){const r=di(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ql(e,i=>{xy(t,i,n)})}function Xl(t,e){const n=di(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,yy(e,n.length>0?n:void 0)}ql(e,r=>{Xl(t,r)})}function Py(t,e){const n=Ps(Ay(t,e)),r=Qd(t.transactionQueueTree_,e);return EA(r,i=>{Wa(t,i)}),Wa(t,r),Ey(r,i=>{Wa(t,i)}),n}function Wa(t,e){const n=di(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yy(e,void 0):n.length=s+1,$t(t.eventQueue_,Ps(e),i);for(let o=0;o<r.length;o++)ci(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function KA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const Np=function(t,e){const n=QA(t),r=n.namespace;n.domain==="firebase.com"&&Qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||I1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ov(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Y(n.pathString)}},QA=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=GA(t.substring(h,d)));const f=KA(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Wv(this._path)}get ref(){return new vr(this._repo,this._path)}get _queryIdentifier(){const e=hp(this._queryParams),n=xd(e);return n==="{}"?"default":n}get _queryObject(){return hp(this._queryParams)}isEqual(e){if(e=le(e),!(e instanceof Zd))return!1;const n=this._repo===e._repo,r=Vv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+oN(this._path)}}class vr extends Zd{constructor(e,n){super(e,n,new Md,!1)}get parent(){const e=Hv(this._path);return e===null?null:new vr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function Oy(t,e){return t=le(t),t._checkNotDeleted("ref"),e!==void 0?$A(t._root,e):t._root}function $A(t,e){return t=le(t),L(t._path)===null?NA("child","path",e,!1):Iy("child","path",e,!1),new vr(t._repo,de(t._path,e))}function Dy(t,e){t=le(t),AA("set",t._path),TA("set",e,t._path,!1);const n=new Ml;return FA(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}dA(vr);hA(vr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="FIREBASE_DATABASE_EMULATOR_HOST",uc={};let YA=!1;function XA(t,e,n,r){t.repoInfo_=new Ov(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function JA(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Np(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[qA]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Np(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new Hr(Hr.OWNER):new b1(t.name,t.options,e);RA("Invalid Firebase Database URL",o),U(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=eR(l,t,h,new D1(t.name,n));return new tR(d,t)}function ZA(t,e){const n=uc[e];(!n||n[t.key]!==t)&&Qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),WA(t),delete n[t.key]}function eR(t,e,n,r){let i=uc[e.name];i||(i={},uc[e.name]=i);let s=i[t.toURLString()];return s&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new LA(t,YA,n,r),i[t.toURLString()]=s,s}class tR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(MA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vr(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}}function nR(t=cd(),e){const n=jl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Xg("database");r&&rR(n,...r)}return n}function rR(t,e,n,r={}){t=le(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Qt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Hr(Hr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:e_(r.mockUserToken,t.app.options.projectId);s=new Hr(o)}XA(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t){y1(mr),sr(new An("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return JA(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),kt($f,qf,t),kt($f,qf,"esm2017")}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};iR();const sR={apiKey:"AIzaSyA0c41_2bfbzetvrPZ6etmWYuIiUv9Zh_c",authDomain:"on-the-move-55b84.firebaseapp.com",databaseURL:"https://on-the-move-55b84-default-rtdb.firebaseio.com/",projectId:"on-the-move-55b84",storageBucket:"on-the-move-55b84.appspot.com",messagingSenderId:"530384300317",appId:"1:530384300317:web:1104cdc0a6e3a162cf99f4"},Os=o_(sR),oR=m1(Os),by=nR();const lR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEc0lEQVR4nO2bTWhVRxTHx4+q1I/SiFgKYqGR2DvnVSGuddNu/SA8au2bc2Mi2aW7dtWabYOEvJkbS7OQLJUuFATFhe4UXOhORNwI6kKhpRW12lbzZLIzmjsvuR9nZnJ+cHa5uWf+/zvn3pv7jxAMwzAMwzAMwzCe0KtH10qt/gaDHc/ryfaZdJ2IDTCtgx6I22W1DorYAIOn6YXtuk6LmOifHvkQND71QNiuSmr1/MsTrfUiFmS7dZha1EWbYNQ3IhakxnMBGnBWxECv/m6TNPgPtaCLL/Wyf3rkIxE6SVul9GIudRcgitCRWl10bPXLVL2BxisOAy6IkGn8euRjMPhv7iI1HqPqz57bYcD/u/XRLSJUGjodyRdf/bczU5tpLxD1Mq9HuwYRKuDY4mDwPHmPBs/n9qjxigiRZCr9RGp8lbe4xOC31H02MnXE8TT0ui8b+lSEBmg16hg/z5Op5gbqPu0brzT4LH8XqFERGqDVVcfWPiM8wfbiMOCqCAl5cnAbaJzNv7mpA8ITbC+Oi2V212T6GXWf0ZKMNdeAUX863ld+oO4zaqTBUw4DblD3GDWQtb52PDJ3vmgP7qDuM1qavzdXSYOPHG/GP1H36TWNTDVdV3HBuk29Rq/ZPpOuq/rDP/UavUdqnGEDCGkY9VWQBkST2xkbWymNehicAdDGQx6I2ykjtwMGJ8MzwPX3kIByO5CpPUEZEGNuRxq8E4wBNgNDLSqUnNsBrY4veLxW92WWDvSND220Zcdvt4ZVZcDZ2HI7yVSrdyHxk4nhnnd+fmK4Rxp8ULsBNvsCWr2gFhQWW1q9cOV2wOD1d4zL0oEib9KlG2CzL+RimmpyO2DS7+cfY0dOXoisfgMcuR3Kj9Lgyu1odTH3+PbhrTZa0q0Bc9OgTgNsJMRGQ4LN7Wh3rAU0XnrruDYeWvB8WTpQqwGu3I4NVb3vhlUXycRwjyvY5crtzB+x9mlnoZswGHW3VgOWQ26nb3xoo31vmGfCA3vDtTN/Ljw8d+W7xS/VgOWU24ES3/JLW9j7nhBize0kGe730AC8Fsr/SUHB3E7/9MgHoPEPbwzoJrdjrxoRUW5HavWbPwaY1o+548eov+z3ARFRbqcxiXv9MUDjzfzF4CkRW26nI1ZIo+6RGyA1fu46if2sJyLM7UijfiE3AIz6OfdK0vh439i+1SLC3E4jG2zQG6DVrTJmoad127l+cgPoRepUWWyAYQN4B+TAI8jQjqCihiz295d+Bfhegg1ANoB3QOgjqEBuBsqoGnM7/hlQMDcDJYhfZ27HOwOK5magYNWd2/HOgKK5GShYded2gjKgm9wMVGhA7bmdKnCKUDA3A0XLp9xOFbgWUDQ3AwXLq9xOFXQpwpJzM1COCfS5naqoS0QgKuE71AIBG0AvEvAOoBcKeATFWcJ3qAUCNoBeJOAdQC8U8AiKs4TvUAsEbAC9SMA7gF4o4BEUxkyF5X4P4H5Lhg0ghg0ghg0ghg0ghg0ghg1gGIZhGIZhGIYRpfIGEKEUBtzRG9gAAAAASUVORK5CYII=",aR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0klEQVR4nO2dz48URRTHK8H1gnpU0KvJuv1qBnCMP0570v9gEpOZepOQuFcP7Ap4IZETu/LjVW9MdoUIV/4HOaL/gHhQ4OKZXyKBRKJ5o649I9NWD9VTPz9JJ5vZ3q7q97pffaeqvlkhMplMJpPJZDKZTCYxZKneAcI7UuMf1YM/69Co57p/0dMhPD4d/L0k6OFnrvsXPUD45awESK22XPcveiSpKzMTQOqK6/5FS3Gq/yIQfiQ13pj9BuANPqe3s7bkur/RUGyPDoDGs6DV3ZrAT40F6i6XKv5b1/0PltVTqy+Axs9B4yPTwP83EfhIEp7sX+3vc30/XtLbWVsCrTY6pepXg3ToLL4hNX4/b+Cf8UZ8t1weff2f63Nb3CYQrntXrhaps4Fw/d8BFH8qtPqke2EoQavbtoJf6f+tlW0EboPbqiinYyJFnd39avgqkLpnO9DND/XgrXODgyI1nS0JL7oP/t59fS1S0tkrpI5IrZ56lICnXHpFKjpbatx2H/TJA0iRSEVnd3mgJbzl0Rvwc0GDQqSks5fPHH0ZNF6aI1iP+WldOT98r7s13M8H/wwaNf+u8fUId4vt/kvJ6mzQaqNBO7+AHh6ada3i/Ogwn2NednDdYrjD1NmS1GnjJ78m+NUkGL8JpE5bDfjEjV34+DWp8b7tQMvGiVH3WPPP7KdW12wPkkCqNEzqNWsBD1Vng1Y3Ta5RaHzX9N47NHrfKKla3RRtEJLOBlK/GSWgwUDJ55olAB+KNghJZ4PGh7YTwArLaQJC0tkQYwkKSWdL00FYo7Y+CBN+ay3goeps2UCGcvtmMhSfGPbvC9E2vutsqH5XMXhA6pLQ+AHRakO0ja86u2ClQrjbuKRpfMLtc53na4yvU6oP/u6T0ZM/Vdoucbm2FvAQBrmCBgUPzHMEv5WDBQsLF9EGPso8GA/o7gM/mQRVWg18mwl4kwavGN0Y4a8zazXh766DvpAFGR9LEMPTE+4Dv/egXBRt4avO7nqzKI/3eeJStIXPOltqdWx6upyntNv4Fj9runyxawKe6exVXpUjXJ9eMOLFHV7ksRj869WtJ9UFI+6DxXDHo7P7V/v7eLnzuZZMxzOt6sTCtybGpLPleGFJbT1rt15Ne3ck4Wartb2OGHV2b2dtSZbDD/9v2wyf43y/Z8w6W2q8XNPWZeELnunsXYv3tVXTzqbwBX90tnpg0yjBG4Sdzm42IUad3aFRLxibaq3OJrzug86Wqfp+xzpbqxOmuxLa0tlQW1IS8P2OdTbhpiudLesG1ZR8vxWd/cMidbbMvt9JgPCbRRihi+z7nflEnmmzJBTZ9zv/7Ck8x6Do2o8QDJ1y8Pa8srAXgB8haiAAP0K0dD2a+vDK97soZCB+hChZCciPECUyID9ClHQD8iNEy3IgfoToAc/9CNEjPfcjRI/01I+QDODpZuBkgBh9vyEBHvoRkgJyCXKL9NSPkAzSYz9CEoDHfoSoKQL3IwRNEZEfIUggQj9CUBQR+xGCQUbqRwiGrkeL8sn+4waoSFAeCKHET8cD9MS2EUs1Xqvbf215QQRSP1baTXdNYDVm32/o9EP2/caEDNH3GyO9kHy/MSND8f3GigzF9xsrEJLvN0Y6Ifl+M5lMJpPJZDKZjEiRPwFLSJID5uysEQAAAABJRU5ErkJggg==",uR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFY0lEQVR4nO2da2hcRRTHp/UtIq2giGjrI1py59ykGMT6KFFRfCGCkg9m7zk3bSUfFAUREXywCgp+qbvnbBrIl9b6QqooKIJFfFBQ8UUVESG+0i+iWBXywVZLEjm3S2IfabJNunPv3PnBH5awyc7857GTmTPnGlMQOusDF1umu62QgOB2K/gFCP6gar7ebhnZSrIhGko6XJfXCzqH+ldaxif2G01TLYnpexCqRnVc4boehcMyXQSMWy3jvy0bf5D0b1imLV2SXOC6XrmnZ2TwBO21wLhnocYf0hBCf4Pg4/oZruuZS6I6rgChjxbb+EOFn8XPrrvQdX1zRcxpj2X67dibP/39sDvmdI3reucCy8mVIDjeNvNnRsI4NPAKU2Y6h8iC4B/tN39mJNgadpoyEg31nWYZv3Nm/sxIGO3gyummbFjGF9ybP63nTJkAxl5gmsyB8dOKJLnOlIJqdakV+sa14XCQrODXZsosMb5jBe9wbTbMopjxduM7VuhD10bDrML3je+ba3mb++H/YprsrqXnG1+JhB5wbrLMpfR+4ysg9KZ7g+mIskxvGF+xQr+6Nhjm1i/GR7pr6bIcmDs1H2lZjW9EtXS1a2NhvqpTl/GNWCprnRsr85OV9CrjG9BIbnBtLMxTseD1xje0VxWmAdjDw5r9e/8FmYJqHp4R9IwMngqCE67NhTmFE2s29p1ifMQK/pz73i/4o/EVy/SSa4NhLjFuNb4CjOudGyxHVlTH1PhKtHHDGSC4N8e9f0883L/c+AwwvubcaDm8LNM24zudteTy3DZAfeAyUwaA6Z3cmS/0tikLGuufs++Cf+JaZZUpExqpDPnp/Y+YstG3re84YHrPtfl6s0ZDZUwZ6a6lyzQex2EDfKtLY1Nm7KaB85rXidrd80djrpzruv65oGs4Ocsyfd428xk/Xc3rznRd71zRwfedpLcc29AAz3u727kYxEI3H9WtyHlMObaBN7quXyFYuSU9OeLkXhDatfDphsas4D06wlzXq3D0VnuPB0lvBcaX9TZLC6bvzra+63iL/g3X9fAorD3ptowIjE9bwRFgekWVvRZ6CoQSfU9p1/WBQCAQCAQCgUAgEAgEAoFAIBAIFJkps0QP0fXqkN621Et0cQP7DpD+TCpr9T3ZgXsZUs8sdqBWVwMvsY30Tiv0mGaxyjKrZEeKtK/Vo0j9nexGDuMHmrjVMj6qqXL0M/SzTKmpVpdGXIliSQZAcLiZ+7mNsaK4NwuDYdqkFzKyS3m+n6JpstSY00GNwW/pfFfa1ijjlundmOlhzWNa+ClMh3lUx6ut4DMaEuLeYGpVu/Ss2XJyW1TtO9EU5uCc6dpszhX8KwcmTi2GLNOflnGzbaTX5HKq0ixTzaiEhcfxSM7FNKZ1zUVmLZ0rNdTvaFYpxRdOANNbTvJKaMCTZfrSvQmUC+mKKuL0pmNuvCax0HW16wpDTmWZPtaktItv/HD/8mb0mfNKQgGkS+1FC38HTisg9LvrSkHBpM9DiITuWmi8/mbXFYGCywq+2PJ9hFWN9edYwU9cFx48kS5Y9CpWK89y8X89L22WbirO1QjZlm8uHqpAngpHo6H07FnnfBDc6b6Q5P//DIfbW9JLD64LByWRFXryAPObN08W/NS6IJpvA+yLG5VLZ3q/4PZgHrnJzpJlLslzTn/xVEyT2RP9rOBDzgsjZRU+qA3wuvuCUEmFr2r2qq/cF4RKKtypuTx/cl8QKqWyJLHNIzbnhYEyimksNICEBphy3hPDCCD3ZoQpiMqn8B1AoQHAtQlhBJB7I8IUROVU+A6g0ADg2oQwAqjcU5Bl2qGbQkHYfg+YdvwHRD1P0G1qfhEAAAAASUVORK5CYII=",cR=()=>c.jsxs("div",{className:"about-section",children:[c.jsx("h3",{className:"about-main-heading",children:"About Us"}),c.jsxs("div",{className:"first-about-partion",children:[c.jsxs("div",{className:"frist-about-partion-text-field",children:[c.jsx("h3",{className:"about-text-field-heading",children:"Welcome To Trip to"}),c.jsx("h3",{className:"about-text-field-sub-heading",children:"TRIP TO"}),c.jsx("p",{className:"about-text-field-para",children:"Welcome to our travel haven, where wanderlust meets convenience! Embark on a journey of discovery with our curated travel experiences. From breathtaking landscapes to cultural gems, our website is your gateway to seamless exploration of India. Let the adventure begin as you navigate through a world of possibilities. Happy travels!"}),c.jsx("button",{className:"about-btn",disabled:!0,children:"READ MORE"})]}),c.jsx("div",{className:"first-about-portion-img",children:c.jsx("img",{src:"https://p.w3layouts.com/demos_new/template_demo/12-12-2017/tourist-demo_Free/1002040083/web/images/package1.jpg",alt:"img",className:"about-portion-img"})}),c.jsxs("div",{className:"frist-about-partion-text-field",children:[c.jsxs("h3",{className:"about-text-field-heading",style:{textAlign:"center",marginBottom:"15px"},children:["Watch Our Recent Video Trip By"," ",c.jsx("span",{className:"traveling-nerd",children:"Traveling Nerd"})]}),c.jsx("p",{className:"about-text-field-para",children:"Roaming the globe for a year, I chased sunsets, explored cultures, and uncovered hidden treasures. From vibrant city lights to tranquil landscapes, each step brought new stories. This journey wasn't just about places; it was a profound exploration of self. Here's to a year of wanderlust, growth, and unforgettable moments."}),c.jsx("button",{className:"about-btn",disabled:!0,children:"WATCH NOW"})]})]}),c.jsxs("div",{className:"second-about-partion",children:[c.jsxs(_e,{to:"/service",className:"about-service",children:[c.jsx("img",{src:lR,alt:"Car",className:"about-sevice-img"}),c.jsx("h3",{className:"about-service-heading",children:"SERVICE 1"}),c.jsx("p",{className:"about-service-para",children:"Effortless travel begins with our premier car service. Experience comfort, reliability, and style as our professional drivers take you on seamless journeys, ensuring your adventures start stress-free."})]}),c.jsxs(_e,{to:"/service",className:"about-service",children:[c.jsx("img",{src:uR,alt:"Profile",className:"about-sevice-img"}),c.jsx("h3",{className:"about-service-heading",children:"SERVICE 2"}),c.jsx("p",{className:"about-service-para",children:"Our unwavering commitment to exceptional customer support sets us apart. With 24/7 assistance, friendly experts, and prompt solutions, we ensure a seamless and satisfying experience for every customer."})]}),c.jsxs(_e,{to:"/service",className:"about-service",children:[c.jsx("img",{src:aR,alt:"Setting",className:"about-sevice-img"}),c.jsx("h3",{className:"about-service-heading",children:"SERVICE 3"}),c.jsx("p",{className:"about-service-para",children:"Powerful and efficient bus motors drive a smooth journey. Our cutting-edge technology ensures reliability, sustainability, and optimal performance on the road."})]})]})]}),dR=()=>c.jsx("section",{className:"about-page-section",children:c.jsx(cR,{})});const qt=t=>c.jsx("button",{onClick:t.onclick,className:t.className,children:t.title}),hR="/trip/assets/loading-e65ffbfc.gif",Ds=t=>c.jsx("div",{className:"backdrop",onClick:t.loading?()=>{}:t.onClick,children:c.jsxs("div",{className:"modal",children:[c.jsx("div",{className:"modal-container",children:t.children}),t.loading?c.jsx("img",{src:hR,className:"loading-img",alt:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsx("h2",{className:t.errorClassName,children:t.title}),c.jsx("p",{className:"modal-message",children:t.message})]}),!t.loading&&c.jsx(qt,{onclick:t.loading?()=>{}:t.onClick,className:"modal-close",title:"Close"})]})}),fR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFqElEQVR4nO2dX4ibRRDAx/+irSJWBLXif0tBRXOZzR2VA0E48S6ZSYlQLAgKgo/SWkUUkasiig/+AS36UEqL/WOtPqigL0VQUFDEBymltJ5yvWYnPe1ZsFetkf2uVinX9nKZZHe/7A8WQvJ9yezszuy3s7MbgEQikUgkEolEIpEIjObg4LkNUzZiqqsE6R0x/IUY3muRJ62ho9bQtHvt3ss+y66prnL3uHt9yx8lzaW18xtFZmvoA4s8JYab8ynW8CGLvF2wQu47fdcrePYvq10hyGut4cZ8lX6axmgI8uh4YXiR73oGR32wtsAivSSGD2srfpZy2Bp+ceL2ey/2Xe8gEKyQNfxzFxR/kkXQmCBVoFfZN/jQhYL0WrcVP0tDbBgvDF8EvUQD+Rox9L1v5Z8oSN/JQPkq6AXqA3SjIO/xrnRzkiUg/SR95Vshz0h/dYkgWd/KllNbQt0W6RbII41S7WpB3uddyeYMlmDol4N9lcWQuwE3JJ9vzmgJ3+4eGroA8oIYXuddqaZlS3gT8oALKfhWpsy3lCojEDPu+ToGvy+ntoKxqGfMx8MLzagL8lqIkUNFulyQfveuQNN2ORxlAE8MvRCA8ppK5XmICRd770RIWfwViWo9oWGo2glFWEPTgrTZIq1wYQM3QLriXmfvIW/JrulEI8QUOXUrWfoK4PcP9FVvmEusKVsF02+ErRADbh3WLQWq9Xqkv9wab6tyCPJqa+iYnvXxr81a7RwInQZySbfnVVtW/r8IVtaoylJc3gehk2UvKLodaBNreIeeNfLjEDpi+F0dk6dp58/blWcCR65XHJjXQegcz9tR6P20WVGmrUoWuRNCRyv2Y5FWqMlU4geVLGAvhI5FOqjjgqo3a8nk5glKDSAQOlr+tj5YW6Alk/suJRd0BELH5WuG1gANHLpExyppGkLHTVhUKlvUWxzXckEuCRhCR5B2BzcIG1qpYwG8C0LHIn2u5G+3aMkkhrYpdYrPIHQE+VUlf3u0Xhq5qV15XABP68HAGnoFQseW6AEVCzCZz93etjyGP1SUpwahM1moXatVYZlxRavnK4sYflJTFpfTCjEghvar9TpDxwTpiZZlwMoazXC0qxPEgjW8XtUKTPYEsmMuY4K7RtPt/O/310MsuIQmbQXI8YE5C6y52E5/dYmbrGWzXJf0m8V7aJvWRDDqJC2XV6m5Kiaei9so6PJbISYE6T3fihM9y9sEsdEpNyQ+GqBIwxAbTXju7JjzQuW/3j8WxWL8bFjkp30rUNou9BREvvH6SMS9f/qAGbkSYsYibYy2AZA2Quw0sLxUd0bKXer9/PeBUuU2yAOauTnStd7ffiAwGGz/8jtdj/KtVMlbFlwrCPIn3pVq5liQPoa8UUe+I4axwGYyUgHySAxPRNbQBsgrE6ZynSD9EbDyp+eyByFq3LpquA3AL0Pe+W3Z/ZcFeWAHknWyQS9gsfJIcL0f6WHoFZoAZ1nDX4XjeugbF72FXsKW+K6Z/V/elX9M+rgIvYg1/IbvBhCk16FXmXB7fGdOvPXV+8dkoLwQehlr6D6PFlD2Xf8gsIY2db335yHWr8V4YXiROzCvi36/HuUJKJ2kXuKhroWsY0qy6ibW0Nsddz2G3/Jdz6CPOLOGd3XO9fAezb1nuUQMFTqR32mR/3R/6uC7flFgDT+r73roGd/1ii2rbqei6/ky2uw2X9RnDl6aUnA9UxqHfvQkVmW/Ga30XY/eDdhhDwfatGgWHj3P+fB5uJ6vc3UAt08O9lUWu5NKWlD+pDuoybfcuYua2jnkFWXhjJiOmIwJQR6dwyPnqG85cz0/sEgfnWbQ/TQ973cYGSgvFOQfZvH7P04Wapd2+vcTcCLD7kRukTsmTeNgj0QLWKzcnf2TqgvcId/Tyr0JJcTQY64khSYSiUQikUgkEgmIiH8AsbS/NJSzeigAAAAASUVORK5CYII=",pR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2klEQVR4nO2awWoUQRCGG70Jelcwr6CwbnfIE+SQZLvBfQWvHj3m6it49QU87EvoaV8hCjlsVRQU5qTSMgEXyUqyM9U91T3zf1Cwl53p/v+q/peZNQYAAAAAAAAAAAAAAAAAAJOHXYio0FsDcQNB/CBqQBjgdCcYBjgYMOkMMciAAAO0u5CrnoDDxSlZf6G9Ea6syIZLsmFpUnA5O3lA1r8l639pb4wLL3L+N7vwjo/OHprUbOaL52TDJ+1Ncrm1vjr01uQkmvN77PwrcuF7ARuOhVTDLryJy+V9MxR8dPaEnH9fwOajcq2+zZYHgwm/Y8REQ5pShqyUKYU05QxZKRMI6XX2kL1J1zNupCHddA1ZmoXHbUYaKX0XMKKQXkkasLfwWyGFI1hrSFOPkN3Y8Ixs+PjvdToLviNgghCqKaRJtL/w8+b1jJTbOmRjw8uRhfS664TT3J/cNuFGyh6LHkNIN31D9q5rGym5NlBQSK9yNlBv4bdCZR5hVgrpVCFbmgHFhzQNvD4jRdJhBYb0OnXIFmtAYSHd5ArZGgzQDumVZgP0Fn4rRLouHDSkqX/IJj0COwue2YDsIUiF/QgwUlIvSNSh8ztDurifwZ0F31lgpoUlPqMbrZAdgwGRbPhBzr/uIuDXF4un5MKHttrP+36vvUd7r/aeQ+zNSBlikTzQGyeNh4G1GRD/huiVPX6URHXlx+HixQ+9YE78r4PrkHX+s9Y+qjWAhf+7KeVp6xgMiF1+5ZT2vmEsBsR9QrrEN25jMyD+L6RLfuc8OgN4a0T4wtYv2rr+XMCaJmUAV1IwwMEA9S5kTIC+EIwjSF8MVihkgIMB6l3ImAB9IRhHkL4YrFDIAAcD1LuQMQH6QjCOIH0xWKGQAQ4GqHchYwL0hWAcQfpisEIhAxwMUO9CxgToC8E4gvTFYIVCBjgYoN6FjAnQF4JrPYIAAAAAAAAAAAAAAAAAAGBq5w/PxXwODooZRQAAAABJRU5ErkJggg==",mR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEmUlEQVR4nO2cTYhcRRDHn/EDBBVRT34geFHjR9SdVz2ziosHQTDuq3rjIAY8iQnqIYQQ1FPAk3gKCn7cREQMiiKaRPGgBBFB0BVZPKkgmux0z2wS4wcS3Sc9yWpc3e2e3e3tfT3/H7zj7tSr/6vq7urqzjIAAAAAAAAAAAAAABbBKKlCPL1m5zI4PaIA3VYxDgEiCqCJ74cAEQUwih+HAB5o4j+CRICS5yGATwQQ/xokAkj2QwCfCFB8NFAETEMAnwhQfDjQOPAzBPCKAJkONRD/OLb5EojgjAA5GHAmNAYB3GPAm6EE6KqiDQFcEUD8TCgBNMkOCOBMQeXOYCmIZA8EcGDTRLAIUPIWBHDQb8j14QZh+QICOKjGtp6tFf8eaAyYhQAeGOIvQ0VBj+66ACI40IpfDiXATLO4AQK4IkDxw8EGYpK7IYCDLsmmgAPxIxDAQdXpnBmwKvo0BPDAztkDpJ9Z1IM8MSTb4PyIzLbKK1cx7fTsuBLzfWqJIf58FZx/xOTtRux3qSU94ifg/IjMNMqr8OVHRpN8uqy005A8tu1JoBU/BOdHpDvROU+T/IQvPyJa8QtYZEXEtMprtJK5pVe5/HZMG5PHEO9zRUFPyZ2x7UwW3eQJ9zjAU7aQF9vWZNEkHzpFINkW285k0Xl5u1sA1sdyvji2rcliiA94iPBabDuTpaf4Wk1ywr0aLu+LbWuyaJLnfMoRPZLLY9uaJDbH21zvkYoOVNnuDbHtTRJD5QNeNSLiJ2PbmixayfseqWiup7iMbWuS2NPvmrjvEQXHbc9pbHuTxOTlFs9y9be4riCUCEpe9SxXT+OcWKg9A+/DfTx1ZFNxYQg7slFfoNlc75mODqJLOoQIuYhW/KdfOuLPQqajGdW+0bZBGpJHdc6bBwdPxifPz1LHEO/yjIJKE38dYrV8qrnYLDIj+80o/kYTf2CUvGiUPKZJOl3Ft9kukCrLzsjqzqkXq/wWavLdak5Rl3S+3/PLYDwj2W8vGBn0RuXllm6zvLU2szi7KWMrosZbBD7eJbl3pb/bzYubVuh855PV6ayZUfyudzpSMqeJn1pu7cg63/aghnR+rQSwfN/snGtDebiX5PfM+OSlw/yObrVv9lqRj5oAlmpj5xxDsnfozjrFW7N19OXXVoDTTtw4e4v+85DsXWp7UzfllrX68mstwDxa8XbfdcLf0UDct3+3sNtikHbW8MtPQgCLoYJ9Wx3//fCUofKOwf/I242Tx53W1vlJCHBap92yLoayHXixnJ+MAP80/fIrsRw58gLMY8sAaz2QQoAF9BvFFYP5/zpw8MikoP/DNIt7NPEPsZ08sgJYjjY7F2klz/o0f0GA8Bs8+2I7fOQiYCH9nFtGyTuxHT+yAsxjN0ysEMOupCHAKmMak1fbjZIh9p8RASGw+7uaige1kk8gwDq4WEQr3m6IP3YdJsQYEBi7yW8jwyh+PUTNKLT9SVFluzf08/Z1dnNHK3nJ3v6y0is5Y79T7akmJs7q0eRGQ1ycTFuyx5C8YUg+0oq/MooP2chZrGQe234AAAAAAAAAAAAAkK1b/gKoTE1CEteyGgAAAABJRU5ErkJggg==",gR=()=>{const t=E.useContext(gr),[e,n]=E.useState(!1),[r,i]=E.useState(!1),[s,o]=E.useState(!1),[l,a]=E.useState(""),u=E.useRef(),h=E.useRef(),d=E.useRef(),f=async v=>{v.preventDefault(),i(!0),o(!0);const y=u.current.value,S=h.current.value,m=d.current.value;if(!t.user.uid){a("Please login first for contact us"),o(!1),n(!0);return}try{await Dy(Oy(by,`query/${t.user.uid}`),{name:y,email:S,message:m}),o(!1)}catch{a("Something went wrong!"),o(!1),n(!0)}u.current.value="",h.current.value="",d.current.value=""},_=()=>i(!1);return c.jsxs(c.Fragment,{children:[r&&c.jsx(Ds,{loading:s,onClick:_,errorClassName:e?"error":"success",message:e?l:"We will notify you soon",title:e?"Error":"Success"}),c.jsxs("div",{className:"contact-container",children:[c.jsx("span",{className:"contact-heading",children:"Get in touch"}),c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127450.10996442482!2d-76.60806467307009!3d3.3950608971812466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1sen!2sin!4v1700733476729!5m2!1sen!2sin",width:"100%",height:"300",style:{border:"none"},loading:"lazy"}),c.jsxs("div",{className:"second-contact-portion",children:[c.jsx("div",{className:"form-contact-container",children:c.jsxs("form",{onSubmit:f,className:"contact-form",children:[c.jsx("h3",{className:"contact-form-heading",children:"Contact Form"}),c.jsx("input",{placeholder:"Name",type:"text",required:!0,ref:u,className:"form-contact-input"}),c.jsx("input",{placeholder:"Email",type:"email",required:!0,ref:h,className:"form-contact-input"}),c.jsx("textarea",{placeholder:"Message...",className:"form-message",required:!0,ref:d,cols:"30",rows:"10"}),c.jsx(qt,{className:"btn form-submit-btn",title:"Submit"})]})}),c.jsxs("div",{className:"contact-info-container",children:[c.jsx("h3",{className:"contact-info-heading",children:"Contact Info"}),c.jsx("p",{className:"contact-para",children:"Experience unparalleled customer support 24/7. Our dedicated team ensures swift problem-solving, putting your needs first. Reliability is not just a promise; it's our commitment to your satisfaction."}),c.jsxs("div",{className:"contact-medium",children:[c.jsx("img",{src:fR,alt:"Location",className:"contact-icon"}),c.jsx("span",{className:"contact-detail",children:"1234k Avenue, 4th block-3, Cali, Valle del Cauca, Colombia"})]}),c.jsxs("div",{className:"contact-medium",children:[c.jsx("img",{src:pR,alt:"Message",className:"contact-icon"}),c.jsx("span",{className:"contact-detail",children:"tripto@pro.col.trav"})]}),c.jsxs("div",{className:"contact-medium",children:[c.jsx("img",{src:mR,alt:"Phone",className:"contact-icon"}),c.jsx("span",{className:"contact-detail",children:"+57 123-875-800"})]})]})]})]})]})},_R=()=>c.jsx("section",{className:"contact-page-section",children:c.jsx(gR,{})});const so=zl(Os);let Un="",za="",vt=null;const vR=()=>{const t=E.useContext(gr),[e,n]=E.useState(!1),[r,i]=E.useState(!1),[s,o]=E.useState(!1),[l,a]=E.useState(""),[u,h]=E.useState(""),[d,f]=E.useState(""),[_,v]=E.useState(""),y=Gl(),S=w=>{if(vt=w.target.files[0],o(!1),!vt.type.includes("image")){o(!0),za="File must be an image";return}if(vt.size>124e4){o(!0),za="File can not be larger than 1mb";return}},m=async w=>{if(w.preventDefault(),i(!0),!vt&&!l&&!u&&!d){o(!0),Un="Atleast update one field of your profile!";return}if(so.currentUser===null)o(!0),Un="You are not logged in",v("/login");else{n(!0);let I=null;try{if(vt){if(vt&&vt.size>124e4){n(!1),o(!0),Un="File is too large!";return}if(!vt.type.includes("image")){n(!1),o(!0),Un="File must be an image";return}const k=p1(oR,`userProfile/${t.user.uid}/${vt.name}`),N=await h1(k,vt);I=await f1(N.ref)}d&&await lI(d),u&&await FC(so.currentUser,u),P_(so.currentUser,{displayName:l||t.user.displayName,photoURL:I}).then(()=>{n(!1),Un="Profile updated successfully!",v(`/user/${t.user.uid}`)})}catch{o(!0),n(!1),Un="somthing went wrong"}}},p=()=>{i(!1),y(_),location.reload()},g=()=>{y(so.currentUser===null?"/login":`/user/${t.user.uid}`)};return c.jsxs(c.Fragment,{children:[r&&c.jsx(Ds,{onClick:p,loading:e,errorClassName:s?"error":"success",message:Un,title:s?"Error":"Success"}),c.jsxs("div",{className:"edit-profile-container",children:[c.jsx("h1",{children:"Edit Profile"}),c.jsxs("form",{onSubmit:m,className:"edit-profile-form",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"name",children:"Enter new name"}),c.jsx("p",{className:"user-warning-update-profile",children:"*if dont wanna edit your name leave than this field blank"}),c.jsx("input",{type:"text",id:"name",value:l,onChange:w=>a(w.target.value),className:"edit-profile-input"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"image",style:{margin:"5px 0"},children:"Change Profile Image"}),c.jsx("p",{className:"user-warning-update-profile",children:"*if dont wanna update your photo than leave this field blank"}),c.jsx("input",{type:"file",id:"image",className:"edit-profile-input",onChange:S}),s&&c.jsx("p",{style:{color:"red",transform:"translateY(-50%)"},children:za})]}),c.jsx("div",{className:"edit-btn-container",children:c.jsx(qt,{className:"btn save-edit-btn",title:"Save"})})]}),c.jsx(qt,{className:"cancel-btn btn",title:"Cancel",onclick:g})]})]})};const yR=()=>c.jsx("section",{className:"edit-profile-page-section",children:c.jsx(vR,{})});const wR="/trip/assets/img-1-6d63266a.jpg",ER="/trip/assets/img-2-9f02f8ab.jpg",SR="/trip/assets/img-3-4e0ad262.jpg",CR="/trip/assets/img-4-734aeb54.jpg";const IR=()=>{const t=E.useContext(gr);return c.jsxs("div",{className:"greet-container",children:[c.jsx("h1",{className:"greet-message",children:t.user.displayName?`Wellcome ${t.user.displayName}`:"trip to"}),c.jsx("p",{children:t.user.displayName?"Welcome to our Traveler's Haven! 🌍✈️ Explore the India with us and embark on unforgettable journeys.":c.jsx("span",{children:c.jsx(_e,{to:"login",children:"Login for better user experience"})})})]})},oo=[wR,ER,SR,CR],kR=()=>{const[t,e]=E.useState(0),n=()=>{t===oo.length-1?e(0):e(i=>i+1)},r=()=>{e(t===0?oo.length-1:i=>i-1)};return c.jsxs("section",{className:"carousal",children:[c.jsx(IR,{}),c.jsx("div",{className:"carousal-container",children:c.jsx("div",{className:"carousal-slide",children:oo.map(i=>c.jsx("img",{src:i,alt:"image",className:"carousal-img",style:{translate:`${-100*t}%`}},i))})}),c.jsx("button",{onClick:r,className:"carousal-btn arrow-prev",children:"⇐"}),c.jsx("button",{onClick:n,className:"carousal-btn arrow-next",children:"⇒"}),c.jsx("div",{className:"carousal-indication",children:oo.map((i,s)=>c.jsx("button",{onClick:()=>e(s),className:s===t?"indication-ball active-ball":"indication-ball",children:s+1},i))})]})};let lo;const TR=new Uint8Array(16);function NR(){if(!lo&&(lo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!lo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return lo(TR)}const ye=[];for(let t=0;t<256;++t)ye.push((t+256).toString(16).slice(1));function AR(t,e=0){return ye[t[e+0]]+ye[t[e+1]]+ye[t[e+2]]+ye[t[e+3]]+"-"+ye[t[e+4]]+ye[t[e+5]]+"-"+ye[t[e+6]]+ye[t[e+7]]+"-"+ye[t[e+8]]+ye[t[e+9]]+"-"+ye[t[e+10]]+ye[t[e+11]]+ye[t[e+12]]+ye[t[e+13]]+ye[t[e+14]]+ye[t[e+15]]}const RR=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ap={randomUUID:RR};function xR(t,e,n){if(Ap.randomUUID&&!e&&!t)return Ap.randomUUID();t=t||{};const r=t.random||(t.rng||NR)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return AR(r)}const PR=()=>{const t=E.useContext(gr),[e,n]=E.useState(""),[r,i]=E.useState(""),[s,o]=E.useState(!1),[l,a]=E.useState(!1),[u,h]=E.useState(!1),[d,f]=E.useState(""),_=E.useRef(),v=E.useRef(),y=E.useRef(),S=E.useRef(),m=E.useRef(),p=(k,N)=>{let x=g(28.652946),F=g(77.302284);k=g(k),N=g(N);let P=k-x,fe=N-F,ot=Math.sin(P/2)**2+Math.cos(x)*Math.cos(k)*Math.sin(fe/2)**2;return 6371*(2*Math.atan2(Math.sqrt(ot),Math.sqrt(1-ot)))};function g(k){return k*(Math.PI/180)}const w=async k=>{if(k.preventDefault(),!t.user.uid){a(!0),o(!0),f("Please login for booking");return}const N=xR();let x=_.current.value,F=v.current.value,P=y.current.value;P=Number(P);let fe=S.current.value,ot=m.current.value,Rt=`${t.user.uid}${fe}${N}`;if(new Date(ot)<=new Date){h(!1),a(!0),o(!0),f("Date cannot be the previous date or todays date");return}if(F.length!=10){h(!1),a(!0),o(!0),f("Phone number must be 10 characters long");return}if(F.includes("-")||F.includes("+")){h(!1),a(!0),o(!0),f("Phone number not allowed any symbol ");return}if(F.startsWith("00")){h(!1),a(!0),o(!0),f("Cannot be starts with 00");return}if(P<1){h(!1),a(!0),o(!0),f("Book atleast 1 ticket");return}if(P>10){h(!1),a(!0),o(!0),f("You can book 10 tickets at once");return}a(!0),h(!0);const hi=`https://api.api-ninjas.com/v1/geocoding?city=${fe}&country=india`,D=await(await fetch(hi,{method:"GET",headers:{"X-Api-Key":"WYn6NG2ukvmb2UXIIs0HKQ==w0VVp7evJNRScl1r","Content-Type":"application/json"}})).json();if(D.length===0){o(!0),h(!1),f(`Our services are expanding to ${fe}. OR Please check City name`);return}const b=D[0].latitude,J=D[0].longitude,ne=p(b,J),Mn=(r=="non-ac"?ne*2:ne*5).toFixed(2),xt=(Mn*P).toFixed(2),fi={name:x,phone:F,ticket:P,destination:fe,date:ot,time:e,vehicleType:r||"ac",ticketId:Rt,price:Mn,totalPrice:xt,distance:`${ne.toFixed(2)} km`};try{await Dy(Oy(by,`ticket/${t.user.uid}/${Rt}`),fi)}catch{o(!0),h(!1),f("Apologies, currently unable to book your tickets");return}_.current.value="",v.current.value="",S.current.value="",y.current.value="",m.current.value="",i(""),n(""),h(!1)},I=()=>{a(!1),o(!1),f(""),h(!1)};return c.jsxs(c.Fragment,{children:[l&&c.jsx(Ds,{loading:u,onClick:I,errorClassName:s?"error":"success",message:s?d:"Ticket booked successfully. Thank you for choosing our service.",title:s?"Error":"Success"}),c.jsxs("form",{action:"",className:"ticket-form",onSubmit:w,children:[c.jsx("h1",{className:"ticket-heading",children:"Book Your Tour Now"}),c.jsxs("div",{className:"ticket-input-div",children:[c.jsx("label",{htmlFor:"ticket-name",children:"Name*"}),c.jsx("input",{type:"text",id:"ticket-name",className:"ticket-input",ref:_,required:!0,disabled:!t.user.uid})]}),c.jsxs("div",{className:"ticket-input-div",children:[c.jsx("label",{htmlFor:"ticket-phone",children:"Phone no.*"}),c.jsx("input",{type:"number",id:"ticket-phone",className:"ticket-input",ref:v,min:0,max:9999999999,disabled:!t.user.uid,required:!0})]}),c.jsxs("div",{className:"ticket-input-div",children:[c.jsx("label",{htmlFor:"ticket-number",children:"No. of Ticket*"}),c.jsx("input",{type:"number",id:"ticket-number",className:"ticket-input",ref:y,disabled:!t.user.uid,required:!0})]}),c.jsxs("div",{className:"ticket-input-div",children:[c.jsx("label",{htmlFor:"ticket-origin",children:"Origin"}),c.jsx("input",{type:"text",id:"ticket-origin",value:"Delhi Anand Vihar",disabled:!0,className:"ticket-input",required:!0})]}),c.jsxs("div",{className:"ticket-input-div",children:[c.jsx("label",{htmlFor:"ticket-destination",children:"Destination*"}),c.jsx("input",{type:"text",id:"ticket-destination",className:"ticket-input",ref:S,disabled:!t.user.uid,required:!0})]}),c.jsxs("div",{className:"ticket-input-div",children:[c.jsx("label",{htmlFor:"ticket-date",children:"Date*"}),c.jsx("input",{type:"date",id:"ticket-date",className:"ticket-input",ref:m,disabled:!t.user.uid,required:!0})]}),c.jsxs("div",{className:"ticket-input-div",children:[c.jsx("label",{htmlFor:"ticket-time",children:"Time*"}),c.jsxs("select",{name:"",id:"ticket-time",className:"ticket-input",disabled:!t.user.uid,required:!0,onChange:k=>n(k.target.value),children:[c.jsx("option",{value:"ac",disabled:!0,children:"Select Time"}),c.jsx("option",{value:"5:15 AM",children:"5:15 AM"}),c.jsx("option",{value:"6:45 AM",children:"6:45 AM"}),c.jsx("option",{value:"8:15 AM",children:"8:15 AM"}),c.jsx("option",{value:"10:00 AM",children:"10:00 AM"}),c.jsx("option",{value:"11:15 AM",children:"11:15 AM"}),c.jsx("option",{value:"12:15 PM",children:"12:15 PM"}),c.jsx("option",{value:"1:45 PM",children:"1:45 PM"}),c.jsx("option",{value:"3:45 PM",children:"3:45 PM"}),c.jsx("option",{value:"4:45 PM",children:"4:45 PM"}),c.jsx("option",{value:"5:15 PM",children:"5:15 PM"}),c.jsx("option",{value:"6:45 PM",children:"6:45 PM"}),c.jsx("option",{value:"7:15 PM",children:"7:15 PM"}),c.jsx("option",{value:"8:30 PM",children:"8:30 PM"}),c.jsx("option",{value:"9:00 PM",children:"9:00 PM"}),c.jsx("option",{value:"10:15 PM",children:"10:15 PM"}),c.jsx("option",{value:"11:00 PM",children:"11:00 PM"}),c.jsx("option",{value:"11:30 PM",children:"11:30 PM"}),c.jsx("option",{value:"12:15 AM",children:"12:15 AM"}),c.jsx("option",{value:"01:00 AM",children:"01:00 AM"})]})]}),c.jsxs("div",{className:"ticket-input-div",children:[c.jsx("label",{htmlFor:"ticket-vehicle-type",children:"Select Bus type*"}),c.jsxs("select",{name:"",id:"ticket-vehicle-type",className:"ticket-input",required:!0,disabled:!t.user.uid,onChange:k=>i(k.target.value),children:[c.jsx("option",{value:"ac",disabled:!0,children:"Select Bus Type"}),c.jsx("option",{value:"ac",children:"AC-Bus"}),c.jsx("option",{value:"non-ac",children:"Non-AC-Bus"})]}),c.jsx("button",{className:"btn ticket-btn",children:"Book Now"})]})]})]})},OR=()=>c.jsxs("main",{children:[c.jsx(kR,{}),c.jsx(PR,{})]});const DR=zl(Os);let Ha="",ao="";const bR=()=>{const[t,e]=E.useState(!1),[n,r]=E.useState(!1),[i,s]=E.useState(!1),[o,l]=E.useState(!1),a=E.useRef(),u=E.useRef(),h=Gl(),d=async _=>{_.preventDefault(),s(!0),l(!0),e(!1),r(!1);let v=a.current.value,y=u.current.value;if(!v.includes("@")||!v.includes(".")||v.endsWith(".")||v.endsWith("@")){e(!0);return}if(y.length<6){r(!0);return}try{const S=await UC(DR,v,y);(await Object.create(S))._tokenResponse.registered===!0&&(ao="Success",Ha="Login successfully"),s(!1),h("/")}catch(S){const m=Object.create(S);console.log(m),m.name==="FirebaseError"&&(ao=m.name,Ha=m.code),s(!1)}},f=()=>l(!1);return c.jsxs(c.Fragment,{children:[o&&c.jsx(Ds,{onClick:f,loading:i,errorClassName:ao==="Success"?"success":"error",title:ao,message:Ha}),c.jsx("div",{className:"card-lg",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{children:"Login"}),c.jsx("p",{children:"Please login to use services"}),c.jsxs("form",{onSubmit:d,className:"signup_form",children:[c.jsxs("div",{className:"input_control",children:[c.jsx("input",{type:"email",required:!0,ref:a,placeholder:"Email",className:"signup_input"}),t&&c.jsx("p",{style:{color:"red"},children:"Please enter valid email"}),c.jsx("input",{type:"password",required:!0,ref:u,placeholder:"Password",className:"signup_input"}),n&&c.jsx("p",{style:{color:"red"},children:"Password must be 6 character long"})]}),c.jsx("div",{children:c.jsxs("p",{className:"login_link_line",children:["Not have an account?",c.jsx("span",{children:c.jsxs(_e,{to:"/signup",className:"link",children:[" ","signup"]})})]})}),c.jsx(qt,{className:"btn",title:"Login"})]})]})})]})},LR=()=>c.jsx("section",{className:"signup-page-section",children:c.jsx(bR,{})});const Rp=t=>c.jsx(_e,{href:`/vehicle/${t.type}/${t.id}`,className:"service-card",children:c.jsxs("div",{className:"sevice-vehicle-info",children:[c.jsx("img",{src:t.image,alt:"Setting",className:"service-vehicle-img"}),c.jsx("h3",{className:"service-vehicle-heading",children:t.name}),c.jsxs("div",{children:[c.jsxs("h4",{children:["Capacity: ",t.capacity]}),c.jsxs("h4",{children:["Top Speed: ",t.topSpeed]})]})]})}),MR=()=>{const[t,e]=E.useState([]),[n,r]=E.useState([]);return E.useEffect(()=>{const i=[],s=[],o=[],l=[];(async()=>{const d=await(await fetch("https://on-the-move-55b84-default-rtdb.firebaseio.com/vehicle/bus.json")).json();for(let f in d)i.push(d[f]);i.map(f=>{for(let _ in f)s.push({id:f[_].id,name:f[_].name,type:f[_].type,image:f[_].imageURL,topSpeed:f[_].topSpeed,capacity:f[_].capacity})}),e(s)})(),(async()=>{const d=await(await fetch("https://on-the-move-55b84-default-rtdb.firebaseio.com/vehicle/car.json")).json();for(let f in d)o.push(d[f]);o.map(f=>{for(let _ in f)l.push({id:f[_].id,name:f[_].name,type:f[_].type,image:f[_].imageURL,topSpeed:f[_].topSpeed,capacity:f[_].capacity})}),r(l)})()},[]),c.jsxs("div",{className:"service-card-container",children:[c.jsx("h1",{className:"service-main-heading",children:"AC BUS"}),c.jsx("div",{className:"service-card-section",children:t.map(i=>i.id.includes("non")||c.jsx(Rp,{desc:i.description,type:i.type,id:i.id,name:i.name,image:i.image,capacity:i.capacity,topSpeed:i.topSpeed+" KMph"},i.id))}),c.jsx("h1",{className:"service-main-heading",children:"NON-AC BUS"}),c.jsx("div",{className:"service-card-section",children:t.map(i=>i.id.includes("non")&&c.jsx(Rp,{desc:i.description,id:i.id,type:i.type,name:i.name,image:i.image,capacity:i.capacity,topSpeed:i.topSpeed+" KMph"},i.id))})]})},UR=()=>c.jsx("section",{className:"service-page-section",children:c.jsx(MR,{})}),xp=zl(Os),jR=new Dt;let Va="",uo="";const FR=()=>{const t=E.useRef(),e=E.useRef(),n=E.useRef(),[r,i]=E.useState(!1),[s,o]=E.useState(!1),[l,a]=E.useState(!1),[u,h]=E.useState(!1),d=Gl(),f=async y=>{y.preventDefault(),i(!1),o(!1);const S=t.current.value,m=e.current.value,p=n.current.value;if(!S.includes("@")||!S.includes(".")||S.endsWith(".")||S.endsWith("@")){i(!0);return}if(m.length<6){o(!0);return}try{h(!0),a(!0);const g=await MC(xp,S,m);await P_(g.user,{displayName:p}),a(!1),Object.create(g).user.email===S.trim()&&(uo="Success",Va=`Signup successfully with ${S}`)}catch(g){a(!1);const w=Object.create(g);Va=w.code,uo=w.name}t.current.value="",e.current.value=""},_=()=>{hI(xp,jR).then(()=>d("/"))},v=()=>{h(!1),d("/"),location.reload()};return c.jsxs(c.Fragment,{children:[u&&c.jsx(Ds,{onClick:v,loading:l,errorClassName:uo==="Success"?"success":"error",title:uo,message:Va}),c.jsx("div",{className:"card-lg",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{children:"Sign up"}),c.jsx("p",{children:"Please signup to access all services"}),c.jsxs("form",{onSubmit:f,className:"signup_form",children:[c.jsxs("div",{className:"input_control",children:[c.jsx("input",{type:"text",required:!0,ref:n,placeholder:"Name",className:"signup_input"}),c.jsx("input",{type:"email",required:!0,ref:t,placeholder:"Email",className:"signup_input"}),r&&c.jsx("p",{style:{color:"red"},children:"Please enter valid email"}),c.jsx("input",{type:"password",required:!0,ref:e,placeholder:"Password",className:"signup_input"}),s&&c.jsx("p",{style:{color:"red"},children:"Password must be 6 character long"})]}),c.jsx("div",{children:c.jsxs("p",{className:"login_link_line",children:["Already a member?",c.jsx("span",{children:c.jsxs(_e,{to:"/login",className:"link",children:[" ","login"]})})]})}),c.jsx(qt,{className:"btn",title:"Submit"})]}),c.jsxs("div",{className:"hr",children:[c.jsx("div",{className:"line"}),c.jsx("div",{className:"or",children:"OR"}),c.jsx("div",{className:"line"})]}),c.jsx(qt,{onclick:_,className:"btn google_btn",title:"Google"})]})})]})},BR=()=>c.jsx("section",{className:"signup-page-section",children:c.jsx(FR,{})});const WR=()=>{const t=E.useContext(gr);return c.jsxs("div",{className:"user-info-card",children:[c.jsx("div",{className:"profile-page-img",children:c.jsx("img",{src:t.user.photoURL?t.user.photoURL:Z_,alt:"img",className:"profile-img-url"})}),c.jsxs("div",{className:"user-info",children:[c.jsxs("p",{className:"display-user-cred",children:[c.jsx("span",{className:"user-cred-indi",children:"Name: "})," ",t.user.displayName]}),c.jsxs("p",{className:"display-user-cred",children:[c.jsx("span",{className:"user-cred-indi",children:"Email: "})," ",t.user.email]})]}),t.user.email?c.jsxs(c.Fragment,{children:[c.jsx(_e,{className:"edit-btn",href:`/edit-user-profile/${t.user.uid}`,children:"Edit"}),c.jsx(_e,{className:"edit-btn",href:`/tickets/${t.user.uid}`,children:"Tickets"}),c.jsx(qt,{className:"btn logout-btn",title:"Logout",onclick:t.logOut})]}):c.jsx(_e,{className:"edit-btn",href:"/login",children:"Login"})]})},zR=()=>c.jsx("section",{className:"user-page-section",children:c.jsx(WR,{})});const Pp=t=>c.jsxs("div",{className:"link-container",children:[" ",c.jsx(_e,{to:t.href,className:t.className,children:c.jsxs("h2",{children:["Ticket To ",t.destination]})})]}),HR=()=>{const[t,e]=E.useState([]),[n,r]=E.useState([]),i=Id();return E.useEffect(()=>{(async o=>{const l=[],a=[],u=[],d=await(await fetch(`https://on-the-move-55b84-default-rtdb.firebaseio.com/ticket/${o}.json`)).json();for(let f in d)a.push(d[f]);for(let f in a)new Date>new Date(a[f].date)?u.push(a[f]):l.push(a[f]);e(l),r(u)})(i.uid)},[]),c.jsxs("section",{className:"ticket-page-section",children:[c.jsx("h1",{className:"ticket-section-heading",children:"Your Tickets"}),c.jsxs("div",{className:"ticket-section-container",children:[c.jsxs("div",{className:"ticket-section-div-container",children:[c.jsx("h1",{className:"ticket-section-secondary-heading",children:"Active Tickets"}),t.length<1?c.jsx("h2",{style:{color:"salmon"},children:"Book Tickets at minimum price"}):"",t.map((s,o)=>c.jsx(Pp,{href:`/ticket/${i.uid}/${s.ticketId}`,className:"ticket active",destination:s.destination},o))]}),c.jsxs("div",{className:"ticket-section-div-container",children:[c.jsx("h1",{className:"ticket-section-secondary-heading",style:{color:"gray"},children:"Expired Tickets"}),n.length<1?c.jsx("h2",{style:{color:"salmon"},children:"No Expired Ticket"}):"",n.map((s,o)=>c.jsx(Pp,{href:`/ticket/${i.uid}/${s.ticketId}`,className:"ticket expired",destination:s.destination},o))]})]})]})},VR=()=>{const t=Id(),[e,n]=E.useState({});return E.useEffect(()=>{(async(i,s)=>{const l=await(await fetch(`https://on-the-move-55b84-default-rtdb.firebaseio.com/ticket/${i}/${s}.json`)).json();n({...l})})(t.uid,t.ticketId)},[]),c.jsx("section",{className:"showticket-section",children:c.jsxs("div",{className:"showticket-container",children:[c.jsx("h1",{className:"showticket-heading",children:"Trip To"}),c.jsx("div",{className:"showticket-info",children:c.jsxs("h3",{children:["Name:"," ",c.jsx("span",{style:{color:"#2c925e",textTransform:"capitalize"},children:e.name})]})}),c.jsx("div",{className:"showticket-info",children:c.jsxs("h3",{children:["Origin:"," ",c.jsxs("span",{style:{color:"#2c925e",textTransform:"capitalize"},children:[" ","Delhi Anand Vihar"]})]})}),c.jsx("div",{className:"showticket-info",children:c.jsxs("h3",{children:["Destination:"," ",c.jsx("span",{style:{color:"#2c925e",textTransform:"capitalize"},children:e.destination})]})}),c.jsx("div",{className:"showticket-info",children:c.jsxs("h3",{children:["Distance:"," ",c.jsx("span",{style:{color:"#2c925e",textTransform:"capitalize"},children:e.distance})]})}),c.jsx("div",{className:"showticket-info",children:c.jsxs("h3",{children:["Phone No:"," ",c.jsx("span",{style:{color:"#2c925e",textTransform:"capitalize"},children:e.phone})]})}),c.jsx("div",{className:"showticket-info",children:c.jsxs("h3",{children:["Ticket:"," ",c.jsx("span",{style:{color:"#2c925e",textTransform:"capitalize"},children:e.ticket})]})}),c.jsx("div",{className:"showticket-info",children:c.jsxs("h3",{children:["Price:"," ",c.jsx("span",{style:{color:"#2c925e",textTransform:"capitalize"},children:e.price})]})}),c.jsx("div",{className:"showticket-info",children:c.jsxs("h3",{children:["Total Price:"," ",c.jsx("span",{style:{color:"#2c925e",textTransform:"capitalize"},children:e.totalPrice})]})}),c.jsx("div",{className:"showticket-info",children:c.jsxs("h3",{children:["Date:"," ",c.jsx("span",{style:{color:"#2c925e",textTransform:"capitalize"},children:e.date})]})}),c.jsx("div",{className:"showticket-info",children:c.jsxs("h3",{children:["Time:"," ",c.jsx("span",{style:{color:"#2c925e",textTransform:"capitalize"},children:e.time})]})}),c.jsx("p",{children:"Thanks for using our service! HAPPY JOURNEY"}),c.jsx(qt,{className:"btn print-btn",onclick:window.print,title:"Print"})]})})},Op=zl(Os);function GR(){const[t,e]=E.useState({});E.useEffect(()=>{HC(Op,r=>{r&&e(r)})},[]);const n=async()=>{await VC(Op),location.reload()};return c.jsx(c.Fragment,{children:c.jsxs(gr.Provider,{value:{isLogin:null,user:t,logOut:n},children:[c.jsx(tT,{}),c.jsxs(Vk,{children:[c.jsx(Ye,{path:"/",element:c.jsx(OR,{})}),c.jsx(Ye,{path:"signup",element:c.jsx(BR,{})}),c.jsx(Ye,{path:"login",element:c.jsx(LR,{})}),c.jsx(Ye,{path:"user/:uid",element:c.jsx(zR,{})}),c.jsx(Ye,{path:"edit-user-profile/:uid",element:c.jsx(yR,{})}),c.jsx(Ye,{path:"contact",element:c.jsx(_R,{})}),c.jsx(Ye,{path:"about",element:c.jsx(dR,{})}),c.jsx(Ye,{path:"service",element:c.jsx(UR,{})}),c.jsx(Ye,{path:"vehicle/:type/:id",element:c.jsx(nT,{})}),c.jsx(Ye,{path:"tickets/:uid",element:c.jsx(HR,{})}),c.jsx(Ye,{path:"ticket/:uid/:ticketId",element:c.jsx(VR,{})})]})]})})}Ga.createRoot(document.getElementById("root")).render(c.jsx(pc.StrictMode,{children:c.jsx(Yk,{children:c.jsx(GR,{})})}));
