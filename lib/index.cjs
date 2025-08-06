"use strict";var n={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o;function v(){if(o)return e;o=1;var R=Symbol.for("react.transitional.element"),p=Symbol.for("react.fragment");function i(a,r,t){var s=null;if(t!==void 0&&(s=""+t),r.key!==void 0&&(s=""+r.key),"key"in r){t={};for(var u in r)u!=="key"&&(t[u]=r[u])}else t=r;return r=t.ref,{$$typeof:R,type:a,key:s,ref:r!==void 0?r:null,props:t}}return e.Fragment=p,e.jsx=i,e.jsxs=i,e}var x;function d(){return x||(x=1,n.exports=v()),n.exports}var l=d();const E=()=>l.jsx("div",{children:"app"});module.exports=E;
