var s = { exports: {} }, e = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o;
function d() {
  if (o) return e;
  o = 1;
  var a = Symbol.for("react.transitional.element"), R = Symbol.for("react.fragment");
  function i(p, r, t) {
    var u = null;
    if (t !== void 0 && (u = "" + t), r.key !== void 0 && (u = "" + r.key), "key" in r) {
      t = {};
      for (var n in r)
        n !== "key" && (t[n] = r[n]);
    } else t = r;
    return r = t.ref, {
      $$typeof: a,
      type: p,
      key: u,
      ref: r !== void 0 ? r : null,
      props: t
    };
  }
  return e.Fragment = R, e.jsx = i, e.jsxs = i, e;
}
var x;
function v() {
  return x || (x = 1, s.exports = d()), s.exports;
}
var l = v();
const E = () => /* @__PURE__ */ l.jsx("div", { children: "app" });
export {
  E as default
};
