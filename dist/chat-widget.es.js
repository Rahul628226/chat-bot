import * as oa from "react";
import Mi, { forwardRef as pS, createElement as Kv, useState as Ks, useRef as vh, useEffect as Qv } from "react";
import gS from "react-dom";
function V2(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var y0 = { exports: {} }, hp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F1;
function X2() {
  if (F1) return hp;
  F1 = 1;
  var p = Symbol.for("react.transitional.element"), O = Symbol.for("react.fragment");
  function R(b, J, K) {
    var W = null;
    if (K !== void 0 && (W = "" + K), J.key !== void 0 && (W = "" + J.key), "key" in J) {
      K = {};
      for (var ie in J)
        ie !== "key" && (K[ie] = J[ie]);
    } else K = J;
    return J = K.ref, {
      $$typeof: p,
      type: b,
      key: W,
      ref: J !== void 0 ? J : null,
      props: K
    };
  }
  return hp.Fragment = O, hp.jsx = R, hp.jsxs = R, hp;
}
var mp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I1;
function Q2() {
  return I1 || (I1 = 1, process.env.NODE_ENV !== "production" && (function() {
    function p(_) {
      if (_ == null) return null;
      if (typeof _ == "function")
        return _.$$typeof === Le ? null : _.displayName || _.name || null;
      if (typeof _ == "string") return _;
      switch (_) {
        case lt:
          return "Fragment";
        case je:
          return "Profiler";
        case ze:
          return "StrictMode";
        case ye:
          return "Suspense";
        case Me:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof _ == "object")
        switch (typeof _.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), _.$$typeof) {
          case He:
            return "Portal";
          case rt:
            return (_.displayName || "Context") + ".Provider";
          case Kt:
            return (_._context.displayName || "Context") + ".Consumer";
          case Et:
            var ae = _.render;
            return _ = _.displayName, _ || (_ = ae.displayName || ae.name || "", _ = _ !== "" ? "ForwardRef(" + _ + ")" : "ForwardRef"), _;
          case Te:
            return ae = _.displayName || null, ae !== null ? ae : p(_.type) || "Memo";
          case ue:
            ae = _._payload, _ = _._init;
            try {
              return p(_(ae));
            } catch {
            }
        }
      return null;
    }
    function O(_) {
      return "" + _;
    }
    function R(_) {
      try {
        O(_);
        var ae = !1;
      } catch {
        ae = !0;
      }
      if (ae) {
        ae = console;
        var F = ae.error, te = typeof Symbol == "function" && Symbol.toStringTag && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return F.call(
          ae,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          te
        ), O(_);
      }
    }
    function b(_) {
      if (_ === lt) return "<>";
      if (typeof _ == "object" && _ !== null && _.$$typeof === ue)
        return "<...>";
      try {
        var ae = p(_);
        return ae ? "<" + ae + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function J() {
      var _ = Ie.A;
      return _ === null ? null : _.getOwner();
    }
    function K() {
      return Error("react-stack-top-frame");
    }
    function W(_) {
      if (Re.call(_, "key")) {
        var ae = Object.getOwnPropertyDescriptor(_, "key").get;
        if (ae && ae.isReactWarning) return !1;
      }
      return _.key !== void 0;
    }
    function ie(_, ae) {
      function F() {
        St || (St = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ae
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(_, "key", {
        get: F,
        configurable: !0
      });
    }
    function Y() {
      var _ = p(this.type);
      return z[_] || (z[_] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), _ = this.props.ref, _ !== void 0 ? _ : null;
    }
    function he(_, ae, F, te, Ee, ot, Ze, vt) {
      return F = ot.ref, _ = {
        $$typeof: Qe,
        type: _,
        key: ae,
        props: ot,
        _owner: Ee
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(_, "ref", {
        enumerable: !1,
        get: Y
      }) : Object.defineProperty(_, "ref", { enumerable: !1, value: null }), _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(_, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(_, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ze
      }), Object.defineProperty(_, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: vt
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    }
    function ne(_, ae, F, te, Ee, ot, Ze, vt) {
      var At = ae.children;
      if (At !== void 0)
        if (te)
          if (Qt(At)) {
            for (te = 0; te < At.length; te++)
              Se(At[te]);
            Object.freeze && Object.freeze(At);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Se(At);
      if (Re.call(ae, "key")) {
        At = p(_);
        var Nt = Object.keys(ae).filter(function(Za) {
          return Za !== "key";
        });
        te = 0 < Nt.length ? "{key: someKey, " + Nt.join(": ..., ") + ": ...}" : "{key: someKey}", ge[At + te] || (Nt = 0 < Nt.length ? "{" + Nt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          te,
          At,
          Nt,
          At
        ), ge[At + te] = !0);
      }
      if (At = null, F !== void 0 && (R(F), At = "" + F), W(ae) && (R(ae.key), At = "" + ae.key), "key" in ae) {
        F = {};
        for (var hl in ae)
          hl !== "key" && (F[hl] = ae[hl]);
      } else F = ae;
      return At && ie(
        F,
        typeof _ == "function" ? _.displayName || _.name || "Unknown" : _
      ), he(
        _,
        At,
        ot,
        Ee,
        J(),
        F,
        Ze,
        vt
      );
    }
    function Se(_) {
      typeof _ == "object" && _ !== null && _.$$typeof === Qe && _._store && (_._store.validated = 1);
    }
    var me = Mi, Qe = Symbol.for("react.transitional.element"), He = Symbol.for("react.portal"), lt = Symbol.for("react.fragment"), ze = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), Kt = Symbol.for("react.consumer"), rt = Symbol.for("react.context"), Et = Symbol.for("react.forward_ref"), ye = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), Te = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), Le = Symbol.for("react.client.reference"), Ie = me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Re = Object.prototype.hasOwnProperty, Qt = Array.isArray, $t = console.createTask ? console.createTask : function() {
      return null;
    };
    me = {
      react_stack_bottom_frame: function(_) {
        return _();
      }
    };
    var St, z = {}, Z = me.react_stack_bottom_frame.bind(
      me,
      K
    )(), q = $t(b(K)), ge = {};
    mp.Fragment = lt, mp.jsx = function(_, ae, F, te, Ee) {
      var ot = 1e4 > Ie.recentlyCreatedOwnerStacks++;
      return ne(
        _,
        ae,
        F,
        !1,
        te,
        Ee,
        ot ? Error("react-stack-top-frame") : Z,
        ot ? $t(b(_)) : q
      );
    }, mp.jsxs = function(_, ae, F, te, Ee) {
      var ot = 1e4 > Ie.recentlyCreatedOwnerStacks++;
      return ne(
        _,
        ae,
        F,
        !0,
        te,
        Ee,
        ot ? Error("react-stack-top-frame") : Z,
        ot ? $t(b(_)) : q
      );
    };
  })()), mp;
}
var P1;
function L2() {
  return P1 || (P1 = 1, process.env.NODE_ENV === "production" ? y0.exports = X2() : y0.exports = Q2()), y0.exports;
}
var de = L2(), p0 = { exports: {} }, yp = {}, g0 = { exports: {} }, Lv = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eS;
function Z2() {
  return eS || (eS = 1, (function(p) {
    function O(z, Z) {
      var q = z.length;
      z.push(Z);
      e: for (; 0 < q; ) {
        var ge = q - 1 >>> 1, _ = z[ge];
        if (0 < J(_, Z))
          z[ge] = Z, z[q] = _, q = ge;
        else break e;
      }
    }
    function R(z) {
      return z.length === 0 ? null : z[0];
    }
    function b(z) {
      if (z.length === 0) return null;
      var Z = z[0], q = z.pop();
      if (q !== Z) {
        z[0] = q;
        e: for (var ge = 0, _ = z.length, ae = _ >>> 1; ge < ae; ) {
          var F = 2 * (ge + 1) - 1, te = z[F], Ee = F + 1, ot = z[Ee];
          if (0 > J(te, q))
            Ee < _ && 0 > J(ot, te) ? (z[ge] = ot, z[Ee] = q, ge = Ee) : (z[ge] = te, z[F] = q, ge = F);
          else if (Ee < _ && 0 > J(ot, q))
            z[ge] = ot, z[Ee] = q, ge = Ee;
          else break e;
        }
      }
      return Z;
    }
    function J(z, Z) {
      var q = z.sortIndex - Z.sortIndex;
      return q !== 0 ? q : z.id - Z.id;
    }
    if (p.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var K = performance;
      p.unstable_now = function() {
        return K.now();
      };
    } else {
      var W = Date, ie = W.now();
      p.unstable_now = function() {
        return W.now() - ie;
      };
    }
    var Y = [], he = [], ne = 1, Se = null, me = 3, Qe = !1, He = !1, lt = !1, ze = !1, je = typeof setTimeout == "function" ? setTimeout : null, Kt = typeof clearTimeout == "function" ? clearTimeout : null, rt = typeof setImmediate < "u" ? setImmediate : null;
    function Et(z) {
      for (var Z = R(he); Z !== null; ) {
        if (Z.callback === null) b(he);
        else if (Z.startTime <= z)
          b(he), Z.sortIndex = Z.expirationTime, O(Y, Z);
        else break;
        Z = R(he);
      }
    }
    function ye(z) {
      if (lt = !1, Et(z), !He)
        if (R(Y) !== null)
          He = !0, Me || (Me = !0, Re());
        else {
          var Z = R(he);
          Z !== null && St(ye, Z.startTime - z);
        }
    }
    var Me = !1, Te = -1, ue = 5, P = -1;
    function Le() {
      return ze ? !0 : !(p.unstable_now() - P < ue);
    }
    function Ie() {
      if (ze = !1, Me) {
        var z = p.unstable_now();
        P = z;
        var Z = !0;
        try {
          e: {
            He = !1, lt && (lt = !1, Kt(Te), Te = -1), Qe = !0;
            var q = me;
            try {
              t: {
                for (Et(z), Se = R(Y); Se !== null && !(Se.expirationTime > z && Le()); ) {
                  var ge = Se.callback;
                  if (typeof ge == "function") {
                    Se.callback = null, me = Se.priorityLevel;
                    var _ = ge(
                      Se.expirationTime <= z
                    );
                    if (z = p.unstable_now(), typeof _ == "function") {
                      Se.callback = _, Et(z), Z = !0;
                      break t;
                    }
                    Se === R(Y) && b(Y), Et(z);
                  } else b(Y);
                  Se = R(Y);
                }
                if (Se !== null) Z = !0;
                else {
                  var ae = R(he);
                  ae !== null && St(
                    ye,
                    ae.startTime - z
                  ), Z = !1;
                }
              }
              break e;
            } finally {
              Se = null, me = q, Qe = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? Re() : Me = !1;
        }
      }
    }
    var Re;
    if (typeof rt == "function")
      Re = function() {
        rt(Ie);
      };
    else if (typeof MessageChannel < "u") {
      var Qt = new MessageChannel(), $t = Qt.port2;
      Qt.port1.onmessage = Ie, Re = function() {
        $t.postMessage(null);
      };
    } else
      Re = function() {
        je(Ie, 0);
      };
    function St(z, Z) {
      Te = je(function() {
        z(p.unstable_now());
      }, Z);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, p.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ue = 0 < z ? Math.floor(1e3 / z) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return me;
    }, p.unstable_next = function(z) {
      switch (me) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = me;
      }
      var q = me;
      me = Z;
      try {
        return z();
      } finally {
        me = q;
      }
    }, p.unstable_requestPaint = function() {
      ze = !0;
    }, p.unstable_runWithPriority = function(z, Z) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var q = me;
      me = z;
      try {
        return Z();
      } finally {
        me = q;
      }
    }, p.unstable_scheduleCallback = function(z, Z, q) {
      var ge = p.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? ge + q : ge) : q = ge, z) {
        case 1:
          var _ = -1;
          break;
        case 2:
          _ = 250;
          break;
        case 5:
          _ = 1073741823;
          break;
        case 4:
          _ = 1e4;
          break;
        default:
          _ = 5e3;
      }
      return _ = q + _, z = {
        id: ne++,
        callback: Z,
        priorityLevel: z,
        startTime: q,
        expirationTime: _,
        sortIndex: -1
      }, q > ge ? (z.sortIndex = q, O(he, z), R(Y) === null && z === R(he) && (lt ? (Kt(Te), Te = -1) : lt = !0, St(ye, q - ge))) : (z.sortIndex = _, O(Y, z), He || Qe || (He = !0, Me || (Me = !0, Re()))), z;
    }, p.unstable_shouldYield = Le, p.unstable_wrapCallback = function(z) {
      var Z = me;
      return function() {
        var q = me;
        me = Z;
        try {
          return z.apply(this, arguments);
        } finally {
          me = q;
        }
      };
    };
  })(Lv)), Lv;
}
var Zv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tS;
function k2() {
  return tS || (tS = 1, (function(p) {
    process.env.NODE_ENV !== "production" && (function() {
      function O() {
        if (ye = !1, P) {
          var z = p.unstable_now();
          Re = z;
          var Z = !0;
          try {
            e: {
              rt = !1, Et && (Et = !1, Te(Le), Le = -1), Kt = !0;
              var q = je;
              try {
                t: {
                  for (W(z), ze = b(Qe); ze !== null && !(ze.expirationTime > z && Y()); ) {
                    var ge = ze.callback;
                    if (typeof ge == "function") {
                      ze.callback = null, je = ze.priorityLevel;
                      var _ = ge(
                        ze.expirationTime <= z
                      );
                      if (z = p.unstable_now(), typeof _ == "function") {
                        ze.callback = _, W(z), Z = !0;
                        break t;
                      }
                      ze === b(Qe) && J(Qe), W(z);
                    } else J(Qe);
                    ze = b(Qe);
                  }
                  if (ze !== null) Z = !0;
                  else {
                    var ae = b(He);
                    ae !== null && he(
                      ie,
                      ae.startTime - z
                    ), Z = !1;
                  }
                }
                break e;
              } finally {
                ze = null, je = q, Kt = !1;
              }
              Z = void 0;
            }
          } finally {
            Z ? Qt() : P = !1;
          }
        }
      }
      function R(z, Z) {
        var q = z.length;
        z.push(Z);
        e: for (; 0 < q; ) {
          var ge = q - 1 >>> 1, _ = z[ge];
          if (0 < K(_, Z))
            z[ge] = Z, z[q] = _, q = ge;
          else break e;
        }
      }
      function b(z) {
        return z.length === 0 ? null : z[0];
      }
      function J(z) {
        if (z.length === 0) return null;
        var Z = z[0], q = z.pop();
        if (q !== Z) {
          z[0] = q;
          e: for (var ge = 0, _ = z.length, ae = _ >>> 1; ge < ae; ) {
            var F = 2 * (ge + 1) - 1, te = z[F], Ee = F + 1, ot = z[Ee];
            if (0 > K(te, q))
              Ee < _ && 0 > K(ot, te) ? (z[ge] = ot, z[Ee] = q, ge = Ee) : (z[ge] = te, z[F] = q, ge = F);
            else if (Ee < _ && 0 > K(ot, q))
              z[ge] = ot, z[Ee] = q, ge = Ee;
            else break e;
          }
        }
        return Z;
      }
      function K(z, Z) {
        var q = z.sortIndex - Z.sortIndex;
        return q !== 0 ? q : z.id - Z.id;
      }
      function W(z) {
        for (var Z = b(He); Z !== null; ) {
          if (Z.callback === null) J(He);
          else if (Z.startTime <= z)
            J(He), Z.sortIndex = Z.expirationTime, R(Qe, Z);
          else break;
          Z = b(He);
        }
      }
      function ie(z) {
        if (Et = !1, W(z), !rt)
          if (b(Qe) !== null)
            rt = !0, P || (P = !0, Qt());
          else {
            var Z = b(He);
            Z !== null && he(
              ie,
              Z.startTime - z
            );
          }
      }
      function Y() {
        return ye ? !0 : !(p.unstable_now() - Re < Ie);
      }
      function he(z, Z) {
        Le = Me(function() {
          z(p.unstable_now());
        }, Z);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), p.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var ne = performance;
        p.unstable_now = function() {
          return ne.now();
        };
      } else {
        var Se = Date, me = Se.now();
        p.unstable_now = function() {
          return Se.now() - me;
        };
      }
      var Qe = [], He = [], lt = 1, ze = null, je = 3, Kt = !1, rt = !1, Et = !1, ye = !1, Me = typeof setTimeout == "function" ? setTimeout : null, Te = typeof clearTimeout == "function" ? clearTimeout : null, ue = typeof setImmediate < "u" ? setImmediate : null, P = !1, Le = -1, Ie = 5, Re = -1;
      if (typeof ue == "function")
        var Qt = function() {
          ue(O);
        };
      else if (typeof MessageChannel < "u") {
        var $t = new MessageChannel(), St = $t.port2;
        $t.port1.onmessage = O, Qt = function() {
          St.postMessage(null);
        };
      } else
        Qt = function() {
          Me(O, 0);
        };
      p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(z) {
        z.callback = null;
      }, p.unstable_forceFrameRate = function(z) {
        0 > z || 125 < z ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ie = 0 < z ? Math.floor(1e3 / z) : 5;
      }, p.unstable_getCurrentPriorityLevel = function() {
        return je;
      }, p.unstable_next = function(z) {
        switch (je) {
          case 1:
          case 2:
          case 3:
            var Z = 3;
            break;
          default:
            Z = je;
        }
        var q = je;
        je = Z;
        try {
          return z();
        } finally {
          je = q;
        }
      }, p.unstable_requestPaint = function() {
        ye = !0;
      }, p.unstable_runWithPriority = function(z, Z) {
        switch (z) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            z = 3;
        }
        var q = je;
        je = z;
        try {
          return Z();
        } finally {
          je = q;
        }
      }, p.unstable_scheduleCallback = function(z, Z, q) {
        var ge = p.unstable_now();
        switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? ge + q : ge) : q = ge, z) {
          case 1:
            var _ = -1;
            break;
          case 2:
            _ = 250;
            break;
          case 5:
            _ = 1073741823;
            break;
          case 4:
            _ = 1e4;
            break;
          default:
            _ = 5e3;
        }
        return _ = q + _, z = {
          id: lt++,
          callback: Z,
          priorityLevel: z,
          startTime: q,
          expirationTime: _,
          sortIndex: -1
        }, q > ge ? (z.sortIndex = q, R(He, z), b(Qe) === null && z === b(He) && (Et ? (Te(Le), Le = -1) : Et = !0, he(ie, q - ge))) : (z.sortIndex = _, R(Qe, z), rt || Kt || (rt = !0, P || (P = !0, Qt()))), z;
      }, p.unstable_shouldYield = Y, p.unstable_wrapCallback = function(z) {
        var Z = je;
        return function() {
          var q = je;
          je = Z;
          try {
            return z.apply(this, arguments);
          } finally {
            je = q;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(Zv)), Zv;
}
var lS;
function vS() {
  return lS || (lS = 1, process.env.NODE_ENV === "production" ? g0.exports = Z2() : g0.exports = k2()), g0.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aS;
function J2() {
  if (aS) return yp;
  aS = 1;
  var p = vS(), O = Mi, R = gS;
  function b(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function J(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function K(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function W(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ie(l) {
    if (K(l) !== l)
      throw Error(b(188));
  }
  function Y(l) {
    var n = l.alternate;
    if (!n) {
      if (n = K(l), n === null) throw Error(b(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return ie(s), l;
          if (r === c) return ie(s), n;
          r = r.sibling;
        }
        throw Error(b(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, y = s.child; y; ) {
          if (y === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (y === c) {
            m = !0, c = s, u = r;
            break;
          }
          y = y.sibling;
        }
        if (!m) {
          for (y = r.child; y; ) {
            if (y === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (y === c) {
              m = !0, c = r, u = s;
              break;
            }
            y = y.sibling;
          }
          if (!m) throw Error(b(189));
        }
      }
      if (u.alternate !== c) throw Error(b(190));
    }
    if (u.tag !== 3) throw Error(b(188));
    return u.stateNode.current === u ? l : n;
  }
  function he(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = he(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var ne = Object.assign, Se = Symbol.for("react.element"), me = Symbol.for("react.transitional.element"), Qe = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), lt = Symbol.for("react.strict_mode"), ze = Symbol.for("react.profiler"), je = Symbol.for("react.provider"), Kt = Symbol.for("react.consumer"), rt = Symbol.for("react.context"), Et = Symbol.for("react.forward_ref"), ye = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), Te = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), Le = Symbol.for("react.memo_cache_sentinel"), Ie = Symbol.iterator;
  function Re(l) {
    return l === null || typeof l != "object" ? null : (l = Ie && l[Ie] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Qt = Symbol.for("react.client.reference");
  function $t(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Qt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case He:
        return "Fragment";
      case ze:
        return "Profiler";
      case lt:
        return "StrictMode";
      case ye:
        return "Suspense";
      case Me:
        return "SuspenseList";
      case P:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Qe:
          return "Portal";
        case rt:
          return (l.displayName || "Context") + ".Provider";
        case Kt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Et:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Te:
          return n = l.displayName || null, n !== null ? n : $t(l.type) || "Memo";
        case ue:
          n = l._payload, l = l._init;
          try {
            return $t(l(n));
          } catch {
          }
      }
    return null;
  }
  var St = Array.isArray, z = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ge = [], _ = -1;
  function ae(l) {
    return { current: l };
  }
  function F(l) {
    0 > _ || (l.current = ge[_], ge[_] = null, _--);
  }
  function te(l, n) {
    _++, ge[_] = l.current, l.current = n;
  }
  var Ee = ae(null), ot = ae(null), Ze = ae(null), vt = ae(null);
  function At(l, n) {
    switch (te(Ze, n), te(ot, l), te(Ee, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Ru(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Ru(n), l = No(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    F(Ee), te(Ee, l);
  }
  function Nt() {
    F(Ee), F(ot), F(Ze);
  }
  function hl(l) {
    l.memoizedState !== null && te(vt, l);
    var n = Ee.current, u = No(n, l.type);
    n !== u && (te(ot, l), te(Ee, u));
  }
  function Za(l) {
    ot.current === l && (F(Ee), F(ot)), vt.current === l && (F(vt), ia._currentValue = q);
  }
  var lu = Object.prototype.hasOwnProperty, Ui = p.unstable_scheduleCallback, Th = p.unstable_cancelCallback, E0 = p.unstable_shouldYield, Ci = p.unstable_requestPaint, fa = p.unstable_now, uf = p.unstable_getCurrentPriorityLevel, Sp = p.unstable_ImmediatePriority, Eh = p.unstable_UserBlockingPriority, cf = p.unstable_NormalPriority, Ah = p.unstable_LowPriority, Gc = p.unstable_IdlePriority, A0 = p.log, Tp = p.unstable_setDisableYieldValue, Vc = null, _l = null;
  function au(l) {
    if (typeof A0 == "function" && Tp(l), _l && typeof _l.setStrictMode == "function")
      try {
        _l.setStrictMode(Vc, l);
      } catch {
      }
  }
  var kl = Math.clz32 ? Math.clz32 : x0, xh = Math.log, Ep = Math.LN2;
  function x0(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (xh(l) / Ep | 0) | 0;
  }
  var Xc = 256, nu = 4194304;
  function sa(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function qu(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var y = c & 134217727;
    return y !== 0 ? (c = y & ~r, c !== 0 ? s = sa(c) : (m &= y, m !== 0 ? s = sa(m) : u || (u = y & ~l, u !== 0 && (s = sa(u))))) : (y = c & ~r, y !== 0 ? s = sa(y) : m !== 0 ? s = sa(m) : u || (u = c & ~l, u !== 0 && (s = sa(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function dn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function nl(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ju() {
    var l = Xc;
    return Xc <<= 1, (Xc & 4194048) === 0 && (Xc = 256), l;
  }
  function Hi() {
    var l = nu;
    return nu <<= 1, (nu & 62914560) === 0 && (nu = 4194304), l;
  }
  function Yu(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function wi(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Ap(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var y = l.entanglements, S = l.expirationTimes, U = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var Q = 31 - kl(u), k = 1 << Q;
      y[Q] = 0, S[Q] = -1;
      var H = U[Q];
      if (H !== null)
        for (U[Q] = null, Q = 0; Q < H.length; Q++) {
          var N = H[Q];
          N !== null && (N.lane &= -536870913);
        }
      u &= ~k;
    }
    c !== 0 && of(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function of(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - kl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function ff(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - kl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function ka(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function $s(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function xp() {
    var l = Z.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Dy(l.type));
  }
  function z0(l, n) {
    var u = Z.p;
    try {
      return Z.p = l, n();
    } finally {
      Z.p = u;
    }
  }
  var Wt = Math.random().toString(36).slice(2), ul = "__reactFiber$" + Wt, Bl = "__reactProps$" + Wt, Qc = "__reactContainer$" + Wt, Ws = "__reactEvents$" + Wt, zp = "__reactListeners$" + Wt, Fs = "__reactHandles$" + Wt, Rp = "__reactResources$" + Wt, ce = "__reactMarker$" + Wt;
  function sf(l) {
    delete l[ul], delete l[Bl], delete l[Ws], delete l[zp], delete l[Fs];
  }
  function ml(l) {
    var n = l[ul];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Qc] || u[ul]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Tl(l); l !== null; ) {
            if (u = l[ul]) return u;
            l = Tl(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Ni(l) {
    if (l = l[ul] || l[Qc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function rf(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(b(33));
  }
  function uu(l) {
    var n = l[Rp];
    return n || (n = l[Rp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ft(l) {
    l[ce] = !0;
  }
  var df = /* @__PURE__ */ new Set(), ra = {};
  function Gu(l, n) {
    Vu(l, n), Vu(l + "Capture", n);
  }
  function Vu(l, n) {
    for (ra[l] = n, l = 0; l < n.length; l++)
      df.add(n[l]);
  }
  var Op = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Is = {}, zh = {};
  function Dp(l) {
    return lu.call(zh, l) ? !0 : lu.call(Is, l) ? !1 : Op.test(l) ? zh[l] = !0 : (Is[l] = !0, !1);
  }
  function iu(l, n, u) {
    if (Dp(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function hf(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function hn(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var Ps, Rh;
  function _i(l) {
    if (Ps === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Ps = n && n[1] || "", Rh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ps + l + Rh;
  }
  var ql = !1;
  function Xu(l, n) {
    if (!l || ql) return "";
    ql = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var k = function() {
                throw Error();
              };
              if (Object.defineProperty(k.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(k, []);
                } catch (N) {
                  var H = N;
                }
                Reflect.construct(l, [], k);
              } else {
                try {
                  k.call();
                } catch (N) {
                  H = N;
                }
                l.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                H = N;
              }
              (k = l()) && typeof k.catch == "function" && k.catch(function() {
              });
            }
          } catch (N) {
            if (N && H && typeof N.stack == "string")
              return [N.stack, H.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], y = r[1];
      if (m && y) {
        var S = m.split(`
`), U = y.split(`
`);
        for (s = c = 0; c < S.length && !S[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < U.length && !U[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === S.length || s === U.length)
          for (c = S.length - 1, s = U.length - 1; 1 <= c && 0 <= s && S[c] !== U[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (S[c] !== U[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || S[c] !== U[s]) {
                  var Q = `
` + S[c].replace(" at new ", " at ");
                  return l.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", l.displayName)), Q;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      ql = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? _i(u) : "";
  }
  function Bi(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return _i(l.type);
      case 16:
        return _i("Lazy");
      case 13:
        return _i("Suspense");
      case 19:
        return _i("SuspenseList");
      case 0:
      case 15:
        return Xu(l.type, !1);
      case 11:
        return Xu(l.type.render, !1);
      case 1:
        return Xu(l.type, !0);
      case 31:
        return _i("Activity");
      default:
        return "";
    }
  }
  function Oh(l) {
    try {
      var n = "";
      do
        n += Bi(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function Ol(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function mf(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Dh(l) {
    var n = mf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          c = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(m) {
          c = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function Qu(l) {
    l._valueTracker || (l._valueTracker = Dh(l));
  }
  function qi(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = mf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Lc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var R0 = /[\n"\\]/g;
  function Ra(l) {
    return l.replace(
      R0,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function er(l, n, u, c, s, r, m, y) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Ol(n)) : l.value !== "" + Ol(n) && (l.value = "" + Ol(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? yf(l, m, Ol(n)) : u != null ? yf(l, m, Ol(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.name = "" + Ol(y) : l.removeAttribute("name");
  }
  function tr(l, n, u, c, s, r, m, y) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + Ol(u) : "", n = n != null ? "" + Ol(n) : u, y || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = y ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m);
  }
  function yf(l, n, u) {
    n === "number" && Lc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function ji(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Ol(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Mh(l, n, u) {
    if (n != null && (n = "" + Ol(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Ol(u) : "";
  }
  function Uh(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(b(92));
        if (St(c)) {
          if (1 < c.length) throw Error(b(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Ol(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Zc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Mp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function lr(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Mp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function pf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(b(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && lr(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && lr(l, r, n[r]);
  }
  function Yi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var O0 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Up = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function gf(l) {
    return Up.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Gi = null;
  function ar(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var kc = null, Jc = null;
  function Cp(l) {
    var n = Ni(l);
    if (n && (l = n.stateNode)) {
      var u = l[Bl] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (er(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Ra(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[Bl] || null;
                if (!s) throw Error(b(90));
                er(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && qi(c);
          }
          break e;
        case "textarea":
          Mh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && ji(l, !!u.multiple, n, !1);
      }
    }
  }
  var Ch = !1;
  function Kc(l, n, u) {
    if (Ch) return l(n, u);
    Ch = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Ch = !1, (kc !== null || Jc !== null) && (vc(), kc && (n = kc, l = Jc, Jc = kc = null, Cp(n), l)))
        for (n = 0; n < l.length; n++) Cp(l[n]);
    }
  }
  function Vi(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Bl] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        b(231, n, typeof u)
      );
    return u;
  }
  var mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nr = !1;
  if (mn)
    try {
      var cu = {};
      Object.defineProperty(cu, "passive", {
        get: function() {
          nr = !0;
        }
      }), window.addEventListener("test", cu, cu), window.removeEventListener("test", cu, cu);
    } catch {
      nr = !1;
    }
  var ou = null, $c = null, Xi = null;
  function Hh() {
    if (Xi) return Xi;
    var l, n = $c, u = n.length, c, s = "value" in ou ? ou.value : ou.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return Xi = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function yl(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function ur() {
    return !0;
  }
  function ir() {
    return !1;
  }
  function jl(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var y in l)
        l.hasOwnProperty(y) && (u = l[y], this[y] = u ? u(r) : r[y]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? ur : ir, this.isPropagationStopped = ir, this;
    }
    return ne(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = ur);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = ur);
      },
      persist: function() {
      },
      isPersistent: ur
    }), n;
  }
  var Lu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, cr = jl(Lu), vf = ne({}, Lu, { view: 0, detail: 0 }), Hp = jl(vf), wh, or, bf, Qi = ne({}, vf, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: fu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== bf && (bf && l.type === "mousemove" ? (wh = l.screenX - bf.screenX, or = l.screenY - bf.screenY) : or = wh = 0, bf = l), wh);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : or;
    }
  }), Nh = jl(Qi), wp = ne({}, Qi, { dataTransfer: 0 }), Np = jl(wp), D0 = ne({}, vf, { relatedTarget: 0 }), _h = jl(D0), M0 = ne({}, Lu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), U0 = jl(M0), C0 = ne({}, Lu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Sf = jl(C0), _p = ne({}, Lu, { data: 0 }), Bh = jl(_p), Bp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, qp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, qh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function jp(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = qh[l]) ? !!n[l] : !1;
  }
  function fu() {
    return jp;
  }
  var Li = ne({}, vf, {
    key: function(l) {
      if (l.key) {
        var n = Bp[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = yl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? qp[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fu,
    charCode: function(l) {
      return l.type === "keypress" ? yl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? yl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Ja = jl(Li), da = ne({}, Qi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Tf = jl(da), fr = ne({}, vf, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fu
  }), jh = jl(fr), Jl = ne({}, Lu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Yp = jl(Jl), sr = ne({}, Qi, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zi = jl(sr), Yh = ne({}, Lu, {
    newState: 0,
    oldState: 0
  }), Gp = jl(Yh), Vp = [9, 13, 27, 32], Ef = mn && "CompositionEvent" in window, Af = null;
  mn && "documentMode" in document && (Af = document.documentMode);
  var Gh = mn && "TextEvent" in window && !Af, yn = mn && (!Ef || Af && 8 < Af && 11 >= Af), Vh = " ", rr = !1;
  function xf(l, n) {
    switch (l) {
      case "keyup":
        return Vp.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zu(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ku = !1;
  function Xh(l, n) {
    switch (l) {
      case "compositionend":
        return Zu(n);
      case "keypress":
        return n.which !== 32 ? null : (rr = !0, Vh);
      case "textInput":
        return l = n.data, l === Vh && rr ? null : l;
      default:
        return null;
    }
  }
  function ki(l, n) {
    if (ku)
      return l === "compositionend" || !Ef && xf(l, n) ? (l = Hh(), Xi = $c = ou = null, ku = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return yn && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Xp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function dr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Xp[l.type] : n === "textarea";
  }
  function hr(l, n, u, c) {
    kc ? Jc ? Jc.push(c) : Jc = [c] : kc = c, n = wo(n, "onChange"), 0 < n.length && (u = new cr(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Ka = null, $a = null;
  function Qh(l) {
    Ec(l, 0);
  }
  function pn(l) {
    var n = rf(l);
    if (qi(n)) return l;
  }
  function Lh(l, n) {
    if (l === "change") return n;
  }
  var Zh = !1;
  if (mn) {
    var Ji;
    if (mn) {
      var Ki = "oninput" in document;
      if (!Ki) {
        var kh = document.createElement("div");
        kh.setAttribute("oninput", "return;"), Ki = typeof kh.oninput == "function";
      }
      Ji = Ki;
    } else Ji = !1;
    Zh = Ji && (!document.documentMode || 9 < document.documentMode);
  }
  function Wc() {
    Ka && (Ka.detachEvent("onpropertychange", Jh), $a = Ka = null);
  }
  function Jh(l) {
    if (l.propertyName === "value" && pn($a)) {
      var n = [];
      hr(
        n,
        $a,
        l,
        ar(l)
      ), Kc(Qh, n);
    }
  }
  function mr(l, n, u) {
    l === "focusin" ? (Wc(), Ka = n, $a = u, Ka.attachEvent("onpropertychange", Jh)) : l === "focusout" && Wc();
  }
  function Ju(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return pn($a);
  }
  function su(l, n) {
    if (l === "click") return pn(n);
  }
  function Kh(l, n) {
    if (l === "input" || l === "change")
      return pn(n);
  }
  function $h(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var pl = typeof Object.is == "function" ? Object.is : $h;
  function Ku(l, n) {
    if (pl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!lu.call(n, s) || !pl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function $u(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function xt(l, n) {
    var u = $u(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = $u(u);
    }
  }
  function zf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? zf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Wh(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Lc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Lc(l.document);
    }
    return n;
  }
  function Rf(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var $i = mn && "documentMode" in document && 11 >= document.documentMode, gn = null, Wa = null, Wu = null, Wi = !1;
  function yr(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Wi || gn == null || gn !== Lc(c) || (c = gn, "selectionStart" in c && Rf(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Wu && Ku(Wu, c) || (Wu = c, c = wo(Wa, "onSelect"), 0 < c.length && (n = new cr(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = gn)));
  }
  function ru(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Fi = {
    animationend: ru("Animation", "AnimationEnd"),
    animationiteration: ru("Animation", "AnimationIteration"),
    animationstart: ru("Animation", "AnimationStart"),
    transitionrun: ru("Transition", "TransitionRun"),
    transitionstart: ru("Transition", "TransitionStart"),
    transitioncancel: ru("Transition", "TransitionCancel"),
    transitionend: ru("Transition", "TransitionEnd")
  }, Oa = {}, Fa = {};
  mn && (Fa = document.createElement("div").style, "AnimationEvent" in window || (delete Fi.animationend.animation, delete Fi.animationiteration.animation, delete Fi.animationstart.animation), "TransitionEvent" in window || delete Fi.transitionend.transition);
  function vn(l) {
    if (Oa[l]) return Oa[l];
    if (!Fi[l]) return l;
    var n = Fi[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Fa)
        return Oa[l] = n[u];
    return l;
  }
  var Qp = vn("animationend"), Fh = vn("animationiteration"), Lp = vn("animationstart"), Ih = vn("transitionrun"), pr = vn("transitionstart"), Zp = vn("transitioncancel"), Ph = vn("transitionend"), em = /* @__PURE__ */ new Map(), Fc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Fc.push("scrollEnd");
  function Da(l, n) {
    em.set(l, n), Gu(n, [l]);
  }
  var tm = /* @__PURE__ */ new WeakMap();
  function ha(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = tm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Oh(n)
      }, tm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Oh(n)
    };
  }
  var Kl = [], Fu = 0, bn = 0;
  function Ia() {
    for (var l = Fu, n = bn = Fu = 0; n < l; ) {
      var u = Kl[n];
      Kl[n++] = null;
      var c = Kl[n];
      Kl[n++] = null;
      var s = Kl[n];
      Kl[n++] = null;
      var r = Kl[n];
      if (Kl[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && Pc(u, s, r);
    }
  }
  function Iu(l, n, u, c) {
    Kl[Fu++] = l, Kl[Fu++] = n, Kl[Fu++] = u, Kl[Fu++] = c, bn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Ic(l, n, u, c) {
    return Iu(l, n, u, c), Of(l);
  }
  function Sn(l, n) {
    return Iu(l, null, null, n), Of(l);
  }
  function Pc(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - kl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Of(l) {
    if (50 < Oo)
      throw Oo = 0, ty = null, Error(b(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var eo = {};
  function kp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $l(l, n, u, c) {
    return new kp(l, n, u, c);
  }
  function Df(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Pa(l, n) {
    var u = l.alternate;
    return u === null ? (u = $l(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Ge(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function $(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") Df(l) && (m = 1);
    else if (typeof l == "string")
      m = Rg(
        l,
        u,
        Ee.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case P:
          return l = $l(31, u, n, s), l.elementType = P, l.lanes = r, l;
        case He:
          return Ma(u.children, s, r, n);
        case lt:
          m = 8, s |= 24;
          break;
        case ze:
          return l = $l(12, u, n, s | 2), l.elementType = ze, l.lanes = r, l;
        case ye:
          return l = $l(13, u, n, s), l.elementType = ye, l.lanes = r, l;
        case Me:
          return l = $l(19, u, n, s), l.elementType = Me, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case je:
              case rt:
                m = 10;
                break e;
              case Kt:
                m = 9;
                break e;
              case Et:
                m = 11;
                break e;
              case Te:
                m = 14;
                break e;
              case ue:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            b(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = $l(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function Ma(l, n, u, c) {
    return l = $l(7, l, c, n), l.lanes = u, l;
  }
  function to(l, n, u) {
    return l = $l(6, l, null, n), l.lanes = u, l;
  }
  function Ct(l, n, u) {
    return n = $l(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Pu = [], ei = 0, Mf = null, lo = 0, Ua = [], Wl = 0, du = null, en = 1, _t = "";
  function Pe(l, n) {
    Pu[ei++] = lo, Pu[ei++] = Mf, Mf = l, lo = n;
  }
  function gr(l, n, u) {
    Ua[Wl++] = en, Ua[Wl++] = _t, Ua[Wl++] = du, du = l;
    var c = en;
    l = _t;
    var s = 32 - kl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - kl(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, en = 1 << 32 - kl(n) + s | u << s | c, _t = r + l;
    } else
      en = 1 << r | u << s | c, _t = l;
  }
  function Ii(l) {
    l.return !== null && (Pe(l, 1), gr(l, 1, 0));
  }
  function Tn(l) {
    for (; l === Mf; )
      Mf = Pu[--ei], Pu[ei] = null, lo = Pu[--ei], Pu[ei] = null;
    for (; l === du; )
      du = Ua[--Wl], Ua[Wl] = null, _t = Ua[--Wl], Ua[Wl] = null, en = Ua[--Wl], Ua[Wl] = null;
  }
  var Lt = null, nt = null, at = !1, Ca = null, Ha = !1, Pi = Error(b(519));
  function hu(l) {
    var n = Error(b(418, ""));
    throw uo(ha(n, l)), Pi;
  }
  function Uf(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[ul] = l, n[Bl] = c, u) {
      case "dialog":
        Ne("cancel", n), Ne("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ne("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ys.length; u++)
          Ne(ys[u], n);
        break;
      case "source":
        Ne("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ne("error", n), Ne("load", n);
        break;
      case "details":
        Ne("toggle", n);
        break;
      case "input":
        Ne("invalid", n), tr(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), Qu(n);
        break;
      case "select":
        Ne("invalid", n);
        break;
      case "textarea":
        Ne("invalid", n), Uh(n, c.value, c.defaultValue, c.children), Qu(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || yy(n.textContent, u) ? (c.popover != null && (Ne("beforetoggle", n), Ne("toggle", n)), c.onScroll != null && Ne("scroll", n), c.onScrollEnd != null && Ne("scrollend", n), c.onClick != null && (n.onclick = Od), n = !0) : n = !1, n || hu(l);
  }
  function lm(l) {
    for (Lt = l.return; Lt; )
      switch (Lt.tag) {
        case 5:
        case 13:
          Ha = !1;
          return;
        case 27:
        case 3:
          Ha = !0;
          return;
        default:
          Lt = Lt.return;
      }
  }
  function ao(l) {
    if (l !== Lt) return !1;
    if (!at) return lm(l), at = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Vn(l.type, l.memoizedProps)), u = !u), u && nt && hu(l), lm(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(b(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                nt = cn(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        nt = null;
      }
    } else
      n === 27 ? (n = nt, vi(l.type) ? (l = bi, bi = null, nt = l) : nt = n) : nt = Lt ? cn(l.stateNode.nextSibling) : null;
    return !0;
  }
  function no() {
    nt = Lt = null, at = !1;
  }
  function am() {
    var l = Ca;
    return l !== null && (la === null ? la = l : la.push.apply(
      la,
      l
    ), Ca = null), l;
  }
  function uo(l) {
    Ca === null ? Ca = [l] : Ca.push(l);
  }
  var Cf = ae(null), mu = null, tn = null;
  function yu(l, n, u) {
    te(Cf, n._currentValue), n._currentValue = u;
  }
  function En(l) {
    l._currentValue = Cf.current, F(Cf);
  }
  function vr(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function nm(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var y = r;
          r = s;
          for (var S = 0; S < n.length; S++)
            if (y.context === n[S]) {
              r.lanes |= u, y = r.alternate, y !== null && (y.lanes |= u), vr(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = y.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(b(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), vr(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function io(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(b(387));
        if (m = m.memoizedProps, m !== null) {
          var y = s.type;
          pl(s.pendingProps.value, m.value) || (l !== null ? l.push(y) : l = [y]);
        }
      } else if (s === vt.current) {
        if (m = s.alternate, m === null) throw Error(b(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(ia) : l = [ia]);
      }
      s = s.return;
    }
    l !== null && nm(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Hf(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!pl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function ti(l) {
    mu = l, tn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function il(l) {
    return um(mu, l);
  }
  function wf(l, n) {
    return mu === null && ti(l), um(l, n);
  }
  function um(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, tn === null) {
      if (l === null) throw Error(b(308));
      tn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else tn = tn.next = n;
    return u;
  }
  var co = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, br = p.unstable_scheduleCallback, Jp = p.unstable_NormalPriority, It = {
    $$typeof: rt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function oo() {
    return {
      controller: new co(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function An(l) {
    l.refCount--, l.refCount === 0 && br(Jp, function() {
      l.controller.abort();
    });
  }
  var li = null, Nf = 0, wa = 0, Pt = null;
  function Sr(l, n) {
    if (li === null) {
      var u = li = [];
      Nf = 0, wa = Tc(), Pt = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Nf++, n.then(Tr, Tr), n;
  }
  function Tr() {
    if (--Nf === 0 && li !== null) {
      Pt !== null && (Pt.status = "fulfilled");
      var l = li;
      li = null, wa = 0, Pt = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Kp(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var Er = z.S;
  z.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Sr(l, n), Er !== null && Er(l, n);
  };
  var xn = ae(null);
  function _f() {
    var l = xn.current;
    return l !== null ? l : bt.pooledCache;
  }
  function ec(l, n) {
    n === null ? te(xn, xn.current) : te(xn, n.pool);
  }
  function Ar() {
    var l = _f();
    return l === null ? null : { parent: It._currentValue, pool: l };
  }
  var ai = Error(b(460)), xr = Error(b(474)), Bf = Error(b(542)), zr = { then: function() {
  } };
  function Rr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function qf() {
  }
  function im(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(qf, qf), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, om(l), l;
      default:
        if (typeof n.status == "string") n.then(qf, qf);
        else {
          if (l = bt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(b(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, om(l), l;
        }
        throw tc = n, ai;
    }
  }
  var tc = null;
  function cm() {
    if (tc === null) throw Error(b(459));
    var l = tc;
    return tc = null, l;
  }
  function om(l) {
    if (l === ai || l === Bf)
      throw Error(b(483));
  }
  var zn = !1;
  function Or(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Dr(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Fl(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Rn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (st & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Of(l), Pc(l, null, u), n;
    }
    return Iu(l, c, n, u), Of(l);
  }
  function lc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ff(l, u);
    }
  }
  function fm(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var sm = !1;
  function fo() {
    if (sm) {
      var l = Pt;
      if (l !== null) throw l;
    }
  }
  function pu(l, n, u, c) {
    sm = !1;
    var s = l.updateQueue;
    zn = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var S = y, U = S.next;
      S.next = null, m === null ? r = U : m.next = U, m = S;
      var Q = l.alternate;
      Q !== null && (Q = Q.updateQueue, y = Q.lastBaseUpdate, y !== m && (y === null ? Q.firstBaseUpdate = U : y.next = U, Q.lastBaseUpdate = S));
    }
    if (r !== null) {
      var k = s.baseState;
      m = 0, Q = U = S = null, y = r;
      do {
        var H = y.lane & -536870913, N = H !== y.lane;
        if (N ? (Ke & H) === H : (c & H) === H) {
          H !== 0 && H === wa && (sm = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          e: {
            var ve = l, be = y;
            H = n;
            var it = u;
            switch (be.tag) {
              case 1:
                if (ve = be.payload, typeof ve == "function") {
                  k = ve.call(it, k, H);
                  break e;
                }
                k = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = be.payload, H = typeof ve == "function" ? ve.call(it, k, H) : ve, H == null) break e;
                k = ne({}, k, H);
                break e;
              case 2:
                zn = !0;
            }
          }
          H = y.callback, H !== null && (l.flags |= 64, N && (l.flags |= 8192), N = s.callbacks, N === null ? s.callbacks = [H] : N.push(H));
        } else
          N = {
            lane: H,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, Q === null ? (U = Q = N, S = k) : Q = Q.next = N, m |= H;
        if (y = y.next, y === null) {
          if (y = s.shared.pending, y === null)
            break;
          N = y, y = N.next, N.next = null, s.lastBaseUpdate = N, s.shared.pending = null;
        }
      } while (!0);
      Q === null && (S = k), s.baseState = S, s.firstBaseUpdate = U, s.lastBaseUpdate = Q, r === null && (s.shared.lanes = 0), Au |= m, l.lanes = m, l.memoizedState = k;
    }
  }
  function Mr(l, n) {
    if (typeof l != "function")
      throw Error(b(191, l));
    l.call(n);
  }
  function jf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Mr(u[l], n);
  }
  var ac = ae(null), Yf = ae(0);
  function cl(l, n) {
    l = Eu, te(Yf, l), te(ac, n), Eu = l | n.baseLanes;
  }
  function so() {
    te(Yf, Eu), te(ac, ac.current);
  }
  function ro() {
    Eu = Yf.current, F(ac), F(Yf);
  }
  var Na = 0, we = null, ft = null, Ht = null, Gf = !1, ma = !1, ni = !1, ln = 0, ya = 0, gu = null, rm = 0;
  function wt() {
    throw Error(b(321));
  }
  function Ur(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!pl(l[u], n[u])) return !1;
    return !0;
  }
  function Cr(l, n, u, c, s, r) {
    return Na = r, we = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, z.H = l === null || l.memoizedState === null ? Rm : Om, ni = !1, r = u(c, s), ni = !1, ma && (r = dm(
      n,
      u,
      c,
      s
    )), ui(l), r;
  }
  function ui(l) {
    z.H = Kr;
    var n = ft !== null && ft.next !== null;
    if (Na = 0, Ht = ft = we = null, Gf = !1, ya = 0, gu = null, n) throw Error(b(300));
    l === null || el || (l = l.dependencies, l !== null && Hf(l) && (el = !0));
  }
  function dm(l, n, u, c) {
    we = l;
    var s = 0;
    do {
      if (ma && (gu = null), ya = 0, ma = !1, 25 <= s) throw Error(b(301));
      if (s += 1, Ht = ft = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      z.H = vu, r = n(u, c);
    } while (ma);
    return r;
  }
  function $p() {
    var l = z.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Xf(n) : n, l = l.useState()[0], (ft !== null ? ft.memoizedState : null) !== l && (we.flags |= 1024), n;
  }
  function Hr() {
    var l = ln !== 0;
    return ln = 0, l;
  }
  function ho(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function wr(l) {
    if (Gf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Gf = !1;
    }
    Na = 0, Ht = ft = we = null, ma = !1, ya = ln = 0, gu = null;
  }
  function Dl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ht === null ? we.memoizedState = Ht = l : Ht = Ht.next = l, Ht;
  }
  function Bt() {
    if (ft === null) {
      var l = we.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ft.next;
    var n = Ht === null ? we.memoizedState : Ht.next;
    if (n !== null)
      Ht = n, ft = l;
    else {
      if (l === null)
        throw we.alternate === null ? Error(b(467)) : Error(b(310));
      ft = l, l = {
        memoizedState: ft.memoizedState,
        baseState: ft.baseState,
        baseQueue: ft.baseQueue,
        queue: ft.queue,
        next: null
      }, Ht === null ? we.memoizedState = Ht = l : Ht = Ht.next = l;
    }
    return Ht;
  }
  function Vf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xf(l) {
    var n = ya;
    return ya += 1, gu === null && (gu = []), l = im(gu, l, n), n = we, (Ht === null ? n.memoizedState : Ht.next) === null && (n = n.alternate, z.H = n === null || n.memoizedState === null ? Rm : Om), l;
  }
  function Zt(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Xf(l);
      if (l.$$typeof === rt) return il(l);
    }
    throw Error(b(438, String(l)));
  }
  function Nr(l) {
    var n = null, u = we.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = we.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Vf(), we.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = Le;
    return n.index++, u;
  }
  function On(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Qf(l) {
    var n = Bt();
    return _r(n, ft, l);
  }
  function _r(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(b(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var y = m = null, S = null, U = n, Q = !1;
      do {
        var k = U.lane & -536870913;
        if (k !== U.lane ? (Ke & k) === k : (Na & k) === k) {
          var H = U.revertLane;
          if (H === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }), k === wa && (Q = !0);
          else if ((Na & H) === H) {
            U = U.next, H === wa && (Q = !0);
            continue;
          } else
            k = {
              lane: 0,
              revertLane: U.revertLane,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, S === null ? (y = S = k, m = r) : S = S.next = k, we.lanes |= H, Au |= H;
          k = U.action, ni && u(r, k), r = U.hasEagerState ? U.eagerState : u(r, k);
        } else
          H = {
            lane: k,
            revertLane: U.revertLane,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, S === null ? (y = S = H, m = r) : S = S.next = H, we.lanes |= k, Au |= k;
        U = U.next;
      } while (U !== null && U !== n);
      if (S === null ? m = r : S.next = y, !pl(r, l.memoizedState) && (el = !0, Q && (u = Pt, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = S, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Br(l) {
    var n = Bt(), u = n.queue;
    if (u === null) throw Error(b(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      pl(r, n.memoizedState) || (el = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function Lf(l, n, u) {
    var c = we, s = Bt(), r = at;
    if (r) {
      if (u === void 0) throw Error(b(407));
      u = u();
    } else u = n();
    var m = !pl(
      (ft || s).memoizedState,
      u
    );
    m && (s.memoizedState = u, el = !0), s = s.queue;
    var y = mm.bind(null, c, s, l);
    if (yt(2048, 8, y, [l]), s.getSnapshot !== n || m || Ht !== null && Ht.memoizedState.tag & 1) {
      if (c.flags |= 2048, Il(
        9,
        Jf(),
        hm.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), bt === null) throw Error(b(349));
      r || (Na & 124) !== 0 || qr(c, n, u);
    }
    return u;
  }
  function qr(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = we.updateQueue, n === null ? (n = Vf(), we.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function hm(l, n, u, c) {
    n.value = u, n.getSnapshot = c, ym(n) && jr(l);
  }
  function mm(l, n, u) {
    return u(function() {
      ym(n) && jr(l);
    });
  }
  function ym(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !pl(l, u);
    } catch {
      return !0;
    }
  }
  function jr(l) {
    var n = Sn(l, 2);
    n !== null && va(n, l, 2);
  }
  function Zf(l) {
    var n = Dl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ni) {
        au(!0);
        try {
          u();
        } finally {
          au(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: On,
      lastRenderedState: l
    }, n;
  }
  function Yr(l, n, u, c) {
    return l.baseState = u, _r(
      l,
      ft,
      typeof c == "function" ? c : On
    );
  }
  function Wp(l, n, u, c, s) {
    if (cc(l)) throw Error(b(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      z.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Gr(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Gr(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = z.T, m = {};
      z.T = m;
      try {
        var y = u(s, c), S = z.S;
        S !== null && S(m, y), kf(l, n, y);
      } catch (U) {
        Xr(l, n, U);
      } finally {
        z.T = r;
      }
    } else
      try {
        r = u(s, c), kf(l, n, r);
      } catch (U) {
        Xr(l, n, U);
      }
  }
  function kf(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Vr(l, n, c);
      },
      function(c) {
        return Xr(l, n, c);
      }
    ) : Vr(l, n, u);
  }
  function Vr(l, n, u) {
    n.status = "fulfilled", n.value = u, pm(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Gr(l, u)));
  }
  function Xr(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, pm(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function pm(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Qr(l, n) {
    return n;
  }
  function gm(l, n) {
    if (at) {
      var u = bt.formState;
      if (u !== null) {
        e: {
          var c = we;
          if (at) {
            if (nt) {
              t: {
                for (var s = nt, r = Ha; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = cn(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                nt = cn(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            hu(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = Dl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qr,
      lastRenderedState: n
    }, u.queue = c, u = xm.bind(
      null,
      we,
      c
    ), c.dispatch = u, c = Zf(!1), r = Wf.bind(
      null,
      we,
      !1,
      c.queue
    ), c = Dl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Wp.bind(
      null,
      we,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Dn(l) {
    var n = Bt();
    return Lr(n, ft, l);
  }
  function Lr(l, n, u) {
    if (n = _r(
      l,
      n,
      Qr
    )[0], l = Qf(On)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Xf(n);
      } catch (m) {
        throw m === ai ? Bf : m;
      }
    else c = n;
    n = Bt();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (we.flags |= 2048, Il(
      9,
      Jf(),
      H0.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function H0(l, n) {
    l.action = n;
  }
  function Zr(l) {
    var n = Bt(), u = ft;
    if (u !== null)
      return Lr(n, u, l);
    Bt(), n = n.memoizedState, u = Bt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Il(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = we.updateQueue, n === null && (n = Vf(), we.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Jf() {
    return { destroy: void 0, resource: void 0 };
  }
  function Kf() {
    return Bt().memoizedState;
  }
  function ii(l, n, u, c) {
    var s = Dl();
    c = c === void 0 ? null : c, we.flags |= l, s.memoizedState = Il(
      1 | n,
      Jf(),
      u,
      c
    );
  }
  function yt(l, n, u, c) {
    var s = Bt();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    ft !== null && c !== null && Ur(c, ft.memoizedState.deps) ? s.memoizedState = Il(n, r, u, c) : (we.flags |= l, s.memoizedState = Il(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Fp(l, n) {
    ii(8390656, 8, l, n);
  }
  function Ip(l, n) {
    yt(2048, 8, l, n);
  }
  function vm(l, n) {
    return yt(4, 2, l, n);
  }
  function an(l, n) {
    return yt(4, 4, l, n);
  }
  function bm(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function kr(l, n, u) {
    u = u != null ? u.concat([l]) : null, yt(4, 4, bm.bind(null, n, l), u);
  }
  function nc() {
  }
  function uc(l, n) {
    var u = Bt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Ur(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function Sm(l, n) {
    var u = Bt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Ur(n, c[1]))
      return c[0];
    if (c = l(), ni) {
      au(!0);
      try {
        l();
      } finally {
        au(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function $f(l, n, u) {
    return u === void 0 || (Na & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = ly(), we.lanes |= l, Au |= l, u);
  }
  function Tm(l, n, u, c) {
    return pl(u, n) ? u : ac.current !== null ? (l = $f(l, u, c), pl(l, n) || (el = !0), l) : (Na & 42) === 0 ? (el = !0, l.memoizedState = u) : (l = ly(), we.lanes |= l, Au |= l, n);
  }
  function Pp(l, n, u, c, s) {
    var r = Z.p;
    Z.p = r !== 0 && 8 > r ? r : 8;
    var m = z.T, y = {};
    z.T = y, Wf(l, !1, n, u);
    try {
      var S = s(), U = z.S;
      if (U !== null && U(y, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var Q = Kp(
          S,
          c
        );
        ic(
          l,
          n,
          Q,
          ga(l)
        );
      } else
        ic(
          l,
          n,
          c,
          ga(l)
        );
    } catch (k) {
      ic(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: k },
        ga()
      );
    } finally {
      Z.p = r, z.T = m;
    }
  }
  function w0() {
  }
  function Jr(l, n, u, c) {
    if (l.tag !== 5) throw Error(b(476));
    var s = eg(l).queue;
    Pp(
      l,
      s,
      n,
      q,
      u === null ? w0 : function() {
        return mo(l), u(c);
      }
    );
  }
  function eg(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: On,
        lastRenderedState: q
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: On,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function mo(l) {
    var n = eg(l).next.queue;
    ic(l, n, {}, ga());
  }
  function _a() {
    return il(ia);
  }
  function Em() {
    return Bt().memoizedState;
  }
  function tg() {
    return Bt().memoizedState;
  }
  function lg(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = ga();
          l = Fl(u);
          var c = Rn(n, l, u);
          c !== null && (va(c, n, u), lc(c, n, u)), n = { cache: oo() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Am(l, n, u) {
    var c = ga();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cc(l) ? ag(n, u) : (u = Ic(l, n, u, c), u !== null && (va(u, l, c), zm(u, n, c)));
  }
  function xm(l, n, u) {
    var c = ga();
    ic(l, n, u, c);
  }
  function ic(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (cc(l)) ag(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, y = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = y, pl(y, m))
            return Iu(l, n, s, 0), bt === null && Ia(), !1;
        } catch {
        } finally {
        }
      if (u = Ic(l, n, s, c), u !== null)
        return va(u, l, c), zm(u, n, c), !0;
    }
    return !1;
  }
  function Wf(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Tc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cc(l)) {
      if (n) throw Error(b(479));
    } else
      n = Ic(
        l,
        u,
        c,
        2
      ), n !== null && va(n, l, 2);
  }
  function cc(l) {
    var n = l.alternate;
    return l === we || n !== null && n === we;
  }
  function ag(l, n) {
    ma = Gf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function zm(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ff(l, u);
    }
  }
  var Kr = {
    readContext: il,
    use: Zt,
    useCallback: wt,
    useContext: wt,
    useEffect: wt,
    useImperativeHandle: wt,
    useLayoutEffect: wt,
    useInsertionEffect: wt,
    useMemo: wt,
    useReducer: wt,
    useRef: wt,
    useState: wt,
    useDebugValue: wt,
    useDeferredValue: wt,
    useTransition: wt,
    useSyncExternalStore: wt,
    useId: wt,
    useHostTransitionStatus: wt,
    useFormState: wt,
    useActionState: wt,
    useOptimistic: wt,
    useMemoCache: wt,
    useCacheRefresh: wt
  }, Rm = {
    readContext: il,
    use: Zt,
    useCallback: function(l, n) {
      return Dl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: il,
    useEffect: Fp,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, ii(
        4194308,
        4,
        bm.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return ii(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      ii(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Dl();
      n = n === void 0 ? null : n;
      var c = l();
      if (ni) {
        au(!0);
        try {
          l();
        } finally {
          au(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Dl();
      if (u !== void 0) {
        var s = u(n);
        if (ni) {
          au(!0);
          try {
            u(n);
          } finally {
            au(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = Am.bind(
        null,
        we,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Dl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Zf(l);
      var n = l.queue, u = xm.bind(null, we, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: nc,
    useDeferredValue: function(l, n) {
      var u = Dl();
      return $f(u, l, n);
    },
    useTransition: function() {
      var l = Zf(!1);
      return l = Pp.bind(
        null,
        we,
        l.queue,
        !0,
        !1
      ), Dl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = we, s = Dl();
      if (at) {
        if (u === void 0)
          throw Error(b(407));
        u = u();
      } else {
        if (u = n(), bt === null)
          throw Error(b(349));
        (Ke & 124) !== 0 || qr(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Fp(mm.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Il(
        9,
        Jf(),
        hm.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Dl(), n = bt.identifierPrefix;
      if (at) {
        var u = _t, c = en;
        u = (c & ~(1 << 32 - kl(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = ln++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = rm++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: _a,
    useFormState: gm,
    useActionState: gm,
    useOptimistic: function(l) {
      var n = Dl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Wf.bind(
        null,
        we,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Nr,
    useCacheRefresh: function() {
      return Dl().memoizedState = lg.bind(
        null,
        we
      );
    }
  }, Om = {
    readContext: il,
    use: Zt,
    useCallback: uc,
    useContext: il,
    useEffect: Ip,
    useImperativeHandle: kr,
    useInsertionEffect: vm,
    useLayoutEffect: an,
    useMemo: Sm,
    useReducer: Qf,
    useRef: Kf,
    useState: function() {
      return Qf(On);
    },
    useDebugValue: nc,
    useDeferredValue: function(l, n) {
      var u = Bt();
      return Tm(
        u,
        ft.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Qf(On)[0], n = Bt().memoizedState;
      return [
        typeof l == "boolean" ? l : Xf(l),
        n
      ];
    },
    useSyncExternalStore: Lf,
    useId: Em,
    useHostTransitionStatus: _a,
    useFormState: Dn,
    useActionState: Dn,
    useOptimistic: function(l, n) {
      var u = Bt();
      return Yr(u, ft, l, n);
    },
    useMemoCache: Nr,
    useCacheRefresh: tg
  }, vu = {
    readContext: il,
    use: Zt,
    useCallback: uc,
    useContext: il,
    useEffect: Ip,
    useImperativeHandle: kr,
    useInsertionEffect: vm,
    useLayoutEffect: an,
    useMemo: Sm,
    useReducer: Br,
    useRef: Kf,
    useState: function() {
      return Br(On);
    },
    useDebugValue: nc,
    useDeferredValue: function(l, n) {
      var u = Bt();
      return ft === null ? $f(u, l, n) : Tm(
        u,
        ft.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Br(On)[0], n = Bt().memoizedState;
      return [
        typeof l == "boolean" ? l : Xf(l),
        n
      ];
    },
    useSyncExternalStore: Lf,
    useId: Em,
    useHostTransitionStatus: _a,
    useFormState: Zr,
    useActionState: Zr,
    useOptimistic: function(l, n) {
      var u = Bt();
      return ft !== null ? Yr(u, ft, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Nr,
    useCacheRefresh: tg
  }, oc = null, yo = 0;
  function $r(l) {
    var n = yo;
    return yo += 1, oc === null && (oc = []), im(oc, l, n);
  }
  function fc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Ml(l, n) {
    throw n.$$typeof === Se ? Error(b(525)) : (l = Object.prototype.toString.call(n), Error(
      b(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Dm(l) {
    var n = l._init;
    return n(l._payload);
  }
  function Pl(l) {
    function n(D, x) {
      if (l) {
        var M = D.deletions;
        M === null ? (D.deletions = [x], D.flags |= 16) : M.push(x);
      }
    }
    function u(D, x) {
      if (!l) return null;
      for (; x !== null; )
        n(D, x), x = x.sibling;
      return null;
    }
    function c(D) {
      for (var x = /* @__PURE__ */ new Map(); D !== null; )
        D.key !== null ? x.set(D.key, D) : x.set(D.index, D), D = D.sibling;
      return x;
    }
    function s(D, x) {
      return D = Pa(D, x), D.index = 0, D.sibling = null, D;
    }
    function r(D, x, M) {
      return D.index = M, l ? (M = D.alternate, M !== null ? (M = M.index, M < x ? (D.flags |= 67108866, x) : M) : (D.flags |= 67108866, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return l && D.alternate === null && (D.flags |= 67108866), D;
    }
    function y(D, x, M, L) {
      return x === null || x.tag !== 6 ? (x = to(M, D.mode, L), x.return = D, x) : (x = s(x, M), x.return = D, x);
    }
    function S(D, x, M, L) {
      var le = M.type;
      return le === He ? Q(
        D,
        x,
        M.props.children,
        L,
        M.key
      ) : x !== null && (x.elementType === le || typeof le == "object" && le !== null && le.$$typeof === ue && Dm(le) === x.type) ? (x = s(x, M.props), fc(x, M), x.return = D, x) : (x = $(
        M.type,
        M.key,
        M.props,
        null,
        D.mode,
        L
      ), fc(x, M), x.return = D, x);
    }
    function U(D, x, M, L) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== M.containerInfo || x.stateNode.implementation !== M.implementation ? (x = Ct(M, D.mode, L), x.return = D, x) : (x = s(x, M.children || []), x.return = D, x);
    }
    function Q(D, x, M, L, le) {
      return x === null || x.tag !== 7 ? (x = Ma(
        M,
        D.mode,
        L,
        le
      ), x.return = D, x) : (x = s(x, M), x.return = D, x);
    }
    function k(D, x, M) {
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return x = to(
          "" + x,
          D.mode,
          M
        ), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case me:
            return M = $(
              x.type,
              x.key,
              x.props,
              null,
              D.mode,
              M
            ), fc(M, x), M.return = D, M;
          case Qe:
            return x = Ct(
              x,
              D.mode,
              M
            ), x.return = D, x;
          case ue:
            var L = x._init;
            return x = L(x._payload), k(D, x, M);
        }
        if (St(x) || Re(x))
          return x = Ma(
            x,
            D.mode,
            M,
            null
          ), x.return = D, x;
        if (typeof x.then == "function")
          return k(D, $r(x), M);
        if (x.$$typeof === rt)
          return k(
            D,
            wf(D, x),
            M
          );
        Ml(D, x);
      }
      return null;
    }
    function H(D, x, M, L) {
      var le = x !== null ? x.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return le !== null ? null : y(D, x, "" + M, L);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case me:
            return M.key === le ? S(D, x, M, L) : null;
          case Qe:
            return M.key === le ? U(D, x, M, L) : null;
          case ue:
            return le = M._init, M = le(M._payload), H(D, x, M, L);
        }
        if (St(M) || Re(M))
          return le !== null ? null : Q(D, x, M, L, null);
        if (typeof M.then == "function")
          return H(
            D,
            x,
            $r(M),
            L
          );
        if (M.$$typeof === rt)
          return H(
            D,
            x,
            wf(D, M),
            L
          );
        Ml(D, M);
      }
      return null;
    }
    function N(D, x, M, L, le) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return D = D.get(M) || null, y(x, D, "" + L, le);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case me:
            return D = D.get(
              L.key === null ? M : L.key
            ) || null, S(x, D, L, le);
          case Qe:
            return D = D.get(
              L.key === null ? M : L.key
            ) || null, U(x, D, L, le);
          case ue:
            var Ve = L._init;
            return L = Ve(L._payload), N(
              D,
              x,
              M,
              L,
              le
            );
        }
        if (St(L) || Re(L))
          return D = D.get(M) || null, Q(x, D, L, le, null);
        if (typeof L.then == "function")
          return N(
            D,
            x,
            M,
            $r(L),
            le
          );
        if (L.$$typeof === rt)
          return N(
            D,
            x,
            M,
            wf(x, L),
            le
          );
        Ml(x, L);
      }
      return null;
    }
    function ve(D, x, M, L) {
      for (var le = null, Ve = null, pe = x, xe = x = 0, sl = null; pe !== null && xe < M.length; xe++) {
        pe.index > xe ? (sl = pe, pe = null) : sl = pe.sibling;
        var tt = H(
          D,
          pe,
          M[xe],
          L
        );
        if (tt === null) {
          pe === null && (pe = sl);
          break;
        }
        l && pe && tt.alternate === null && n(D, pe), x = r(tt, x, xe), Ve === null ? le = tt : Ve.sibling = tt, Ve = tt, pe = sl;
      }
      if (xe === M.length)
        return u(D, pe), at && Pe(D, xe), le;
      if (pe === null) {
        for (; xe < M.length; xe++)
          pe = k(D, M[xe], L), pe !== null && (x = r(
            pe,
            x,
            xe
          ), Ve === null ? le = pe : Ve.sibling = pe, Ve = pe);
        return at && Pe(D, xe), le;
      }
      for (pe = c(pe); xe < M.length; xe++)
        sl = N(
          pe,
          D,
          xe,
          M[xe],
          L
        ), sl !== null && (l && sl.alternate !== null && pe.delete(
          sl.key === null ? xe : sl.key
        ), x = r(
          sl,
          x,
          xe
        ), Ve === null ? le = sl : Ve.sibling = sl, Ve = sl);
      return l && pe.forEach(function(xi) {
        return n(D, xi);
      }), at && Pe(D, xe), le;
    }
    function be(D, x, M, L) {
      if (M == null) throw Error(b(151));
      for (var le = null, Ve = null, pe = x, xe = x = 0, sl = null, tt = M.next(); pe !== null && !tt.done; xe++, tt = M.next()) {
        pe.index > xe ? (sl = pe, pe = null) : sl = pe.sibling;
        var xi = H(D, pe, tt.value, L);
        if (xi === null) {
          pe === null && (pe = sl);
          break;
        }
        l && pe && xi.alternate === null && n(D, pe), x = r(xi, x, xe), Ve === null ? le = xi : Ve.sibling = xi, Ve = xi, pe = sl;
      }
      if (tt.done)
        return u(D, pe), at && Pe(D, xe), le;
      if (pe === null) {
        for (; !tt.done; xe++, tt = M.next())
          tt = k(D, tt.value, L), tt !== null && (x = r(tt, x, xe), Ve === null ? le = tt : Ve.sibling = tt, Ve = tt);
        return at && Pe(D, xe), le;
      }
      for (pe = c(pe); !tt.done; xe++, tt = M.next())
        tt = N(pe, D, xe, tt.value, L), tt !== null && (l && tt.alternate !== null && pe.delete(tt.key === null ? xe : tt.key), x = r(tt, x, xe), Ve === null ? le = tt : Ve.sibling = tt, Ve = tt);
      return l && pe.forEach(function(Z0) {
        return n(D, Z0);
      }), at && Pe(D, xe), le;
    }
    function it(D, x, M, L) {
      if (typeof M == "object" && M !== null && M.type === He && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case me:
            e: {
              for (var le = M.key; x !== null; ) {
                if (x.key === le) {
                  if (le = M.type, le === He) {
                    if (x.tag === 7) {
                      u(
                        D,
                        x.sibling
                      ), L = s(
                        x,
                        M.props.children
                      ), L.return = D, D = L;
                      break e;
                    }
                  } else if (x.elementType === le || typeof le == "object" && le !== null && le.$$typeof === ue && Dm(le) === x.type) {
                    u(
                      D,
                      x.sibling
                    ), L = s(x, M.props), fc(L, M), L.return = D, D = L;
                    break e;
                  }
                  u(D, x);
                  break;
                } else n(D, x);
                x = x.sibling;
              }
              M.type === He ? (L = Ma(
                M.props.children,
                D.mode,
                L,
                M.key
              ), L.return = D, D = L) : (L = $(
                M.type,
                M.key,
                M.props,
                null,
                D.mode,
                L
              ), fc(L, M), L.return = D, D = L);
            }
            return m(D);
          case Qe:
            e: {
              for (le = M.key; x !== null; ) {
                if (x.key === le)
                  if (x.tag === 4 && x.stateNode.containerInfo === M.containerInfo && x.stateNode.implementation === M.implementation) {
                    u(
                      D,
                      x.sibling
                    ), L = s(x, M.children || []), L.return = D, D = L;
                    break e;
                  } else {
                    u(D, x);
                    break;
                  }
                else n(D, x);
                x = x.sibling;
              }
              L = Ct(M, D.mode, L), L.return = D, D = L;
            }
            return m(D);
          case ue:
            return le = M._init, M = le(M._payload), it(
              D,
              x,
              M,
              L
            );
        }
        if (St(M))
          return ve(
            D,
            x,
            M,
            L
          );
        if (Re(M)) {
          if (le = Re(M), typeof le != "function") throw Error(b(150));
          return M = le.call(M), be(
            D,
            x,
            M,
            L
          );
        }
        if (typeof M.then == "function")
          return it(
            D,
            x,
            $r(M),
            L
          );
        if (M.$$typeof === rt)
          return it(
            D,
            x,
            wf(D, M),
            L
          );
        Ml(D, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, x !== null && x.tag === 6 ? (u(D, x.sibling), L = s(x, M), L.return = D, D = L) : (u(D, x), L = to(M, D.mode, L), L.return = D, D = L), m(D)) : u(D, x);
    }
    return function(D, x, M, L) {
      try {
        yo = 0;
        var le = it(
          D,
          x,
          M,
          L
        );
        return oc = null, le;
      } catch (pe) {
        if (pe === ai || pe === Bf) throw pe;
        var Ve = $l(29, pe, null, D.mode);
        return Ve.lanes = L, Ve.return = D, Ve;
      } finally {
      }
    };
  }
  var sc = Pl(!0), Mn = Pl(!1), pa = ae(null), Ul = null;
  function bu(l) {
    var n = l.alternate;
    te(pt, pt.current & 1), te(pa, l), Ul === null && (n === null || ac.current !== null || n.memoizedState !== null) && (Ul = l);
  }
  function Un(l) {
    if (l.tag === 22) {
      if (te(pt, pt.current), te(pa, l), Ul === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Ul = l);
      }
    } else Cn();
  }
  function Cn() {
    te(pt, pt.current), te(pa, pa.current);
  }
  function nn(l) {
    F(pa), Ul === l && (Ul = null), F(pt);
  }
  var pt = ae(0);
  function Ff(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Ss(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function ci(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : ne({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Wr = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = ga(), s = Fl(c);
      s.payload = n, u != null && (s.callback = u), n = Rn(l, s, c), n !== null && (va(n, l, c), lc(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = ga(), s = Fl(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Rn(l, s, c), n !== null && (va(n, l, c), lc(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = ga(), c = Fl(u);
      c.tag = 2, n != null && (c.callback = n), n = Rn(l, c, u), n !== null && (va(n, l, u), lc(n, l, u));
    }
  };
  function po(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Ku(u, c) || !Ku(s, r) : !0;
  }
  function rc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Wr.enqueueReplaceState(n, n.state, null);
  }
  function oi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = ne({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var If = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function go(l) {
    If(l);
  }
  function Mm(l) {
    console.error(l);
  }
  function Pf(l) {
    If(l);
  }
  function es(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Um(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Cm(l, n, u) {
    return u = Fl(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      es(l, n);
    }, u;
  }
  function Hm(l) {
    return l = Fl(l), l.tag = 3, l;
  }
  function ea(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        Um(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Um(n, u, c), typeof s != "function" && (di === null ? di = /* @__PURE__ */ new Set([this]) : di.add(this));
      var y = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function ng(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && io(
        n,
        u,
        s,
        !0
      ), u = pa.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Ul === null ? Sc() : u.alternate === null && Gt === 0 && (Gt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === zr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Ed(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === zr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Ed(l, c, s)), !1;
        }
        throw Error(b(435, u.tag));
      }
      return Ed(l, c, s), Sc(), !1;
    }
    if (at)
      return n = pa.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== Pi && (l = Error(b(422), { cause: c }), uo(ha(l, u)))) : (c !== Pi && (n = Error(b(423), {
        cause: c
      }), uo(
        ha(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = ha(c, u), s = Cm(
        l.stateNode,
        c,
        s
      ), fm(l, s), Gt !== 4 && (Gt = 2)), !1;
    var r = Error(b(520), { cause: c });
    if (r = ha(r, u), xo === null ? xo = [r] : xo.push(r), Gt !== 4 && (Gt = 2), n === null) return !0;
    c = ha(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = Cm(u.stateNode, c, l), fm(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (di === null || !di.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = Hm(s), ea(
              s,
              l,
              u,
              c
            ), fm(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var qt = Error(b(461)), el = !1;
  function ol(l, n, u, c) {
    n.child = l === null ? Mn(n, null, u, c) : sc(
      n,
      l.child,
      u,
      c
    );
  }
  function ug(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var y in c)
        y !== "ref" && (m[y] = c[y]);
    } else m = c;
    return ti(n), c = Cr(
      l,
      n,
      u,
      m,
      r,
      s
    ), y = Hr(), l !== null && !el ? (ho(l, n, s), Hn(l, n, s)) : (at && y && Ii(n), n.flags |= 1, ol(l, n, c, s), n.child);
  }
  function Su(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Df(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, dc(
        l,
        n,
        r,
        c,
        s
      )) : (l = $(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !id(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ku, u(m, c) && l.ref === n.ref)
        return Hn(l, n, s);
    }
    return n.flags |= 1, l = Pa(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function dc(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Ku(r, c) && l.ref === n.ref)
        if (el = !1, n.pendingProps = c = r, id(l, s))
          (l.flags & 131072) !== 0 && (el = !0);
        else
          return n.lanes = l.lanes, Hn(l, n, s);
    }
    return Ir(
      l,
      n,
      u,
      c,
      s
    );
  }
  function Fr(l, n, u) {
    var c = n.pendingProps, s = c.children, r = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = r !== null ? r.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return hc(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ec(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? cl(n, r) : so(), Un(n);
      else
        return n.lanes = n.childLanes = 536870912, hc(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (ec(n, r.cachePool), cl(n, r), Cn(), n.memoizedState = null) : (l !== null && ec(n, null), so(), Cn());
    return ol(l, n, s, u), n.child;
  }
  function hc(l, n, u, c) {
    var s = _f();
    return s = s === null ? null : { parent: It._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && ec(n, null), so(), Un(n), l !== null && io(l, n, c, !0), null;
  }
  function ts(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(b(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Ir(l, n, u, c, s) {
    return ti(n), u = Cr(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = Hr(), l !== null && !el ? (ho(l, n, s), Hn(l, n, s)) : (at && c && Ii(n), n.flags |= 1, ol(l, n, u, s), n.child);
  }
  function wm(l, n, u, c, s, r) {
    return ti(n), n.updateQueue = null, u = dm(
      n,
      c,
      u,
      s
    ), ui(l), c = Hr(), l !== null && !el ? (ho(l, n, r), Hn(l, n, r)) : (at && c && Ii(n), n.flags |= 1, ol(l, n, u, r), n.child);
  }
  function Pr(l, n, u, c, s) {
    if (ti(n), n.stateNode === null) {
      var r = eo, m = u.contextType;
      typeof m == "object" && m !== null && (r = il(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Wr, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Or(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? il(m) : eo, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (ci(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && Wr.enqueueReplaceState(r, r.state, null), pu(n, c, r, s), fo(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var y = n.memoizedProps, S = oi(u, y);
      r.props = S;
      var U = r.context, Q = u.contextType;
      m = eo, typeof Q == "object" && Q !== null && (m = il(Q));
      var k = u.getDerivedStateFromProps;
      Q = typeof k == "function" || typeof r.getSnapshotBeforeUpdate == "function", y = n.pendingProps !== y, Q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y || U !== m) && rc(
        n,
        r,
        c,
        m
      ), zn = !1;
      var H = n.memoizedState;
      r.state = H, pu(n, c, r, s), fo(), U = n.memoizedState, y || H !== U || zn ? (typeof k == "function" && (ci(
        n,
        u,
        k,
        c
      ), U = n.memoizedState), (S = zn || po(
        n,
        u,
        S,
        c,
        H,
        U,
        m
      )) ? (Q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = U), r.props = c, r.state = U, r.context = m, c = S) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Dr(l, n), m = n.memoizedProps, Q = oi(u, m), r.props = Q, k = n.pendingProps, H = r.context, U = u.contextType, S = eo, typeof U == "object" && U !== null && (S = il(U)), y = u.getDerivedStateFromProps, (U = typeof y == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== k || H !== S) && rc(
        n,
        r,
        c,
        S
      ), zn = !1, H = n.memoizedState, r.state = H, pu(n, c, r, s), fo();
      var N = n.memoizedState;
      m !== k || H !== N || zn || l !== null && l.dependencies !== null && Hf(l.dependencies) ? (typeof y == "function" && (ci(
        n,
        u,
        y,
        c
      ), N = n.memoizedState), (Q = zn || po(
        n,
        u,
        Q,
        c,
        H,
        N,
        S
      ) || l !== null && l.dependencies !== null && Hf(l.dependencies)) ? (U || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, N, S), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        N,
        S
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && H === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && H === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = N), r.props = c, r.state = N, r.context = S, c = Q) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && H === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && H === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, ts(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = sc(
      n,
      l.child,
      null,
      s
    ), n.child = sc(
      n,
      null,
      u,
      s
    )) : ol(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Hn(
      l,
      n,
      s
    ), l;
  }
  function ed(l, n, u, c) {
    return no(), n.flags |= 256, ol(l, n, u, c), n.child;
  }
  var td = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Nm(l) {
    return { baseLanes: l, cachePool: Ar() };
  }
  function _m(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= ja), l;
  }
  function Bm(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (pt.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (at) {
        if (s ? bu(n) : Cn(), at) {
          var y = nt, S;
          if (S = y) {
            e: {
              for (S = y, y = Ha; S.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break e;
                }
                if (S = cn(
                  S.nextSibling
                ), S === null) {
                  y = null;
                  break e;
                }
              }
              y = S;
            }
            y !== null ? (n.memoizedState = {
              dehydrated: y,
              treeContext: du !== null ? { id: en, overflow: _t } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, S = $l(
              18,
              null,
              null,
              0
            ), S.stateNode = y, S.return = n, n.child = S, Lt = n, nt = null, S = !0) : S = !1;
          }
          S || hu(n);
        }
        if (y = n.memoizedState, y !== null && (y = y.dehydrated, y !== null))
          return Ss(y) ? n.lanes = 32 : n.lanes = 536870912, null;
        nn(n);
      }
      return y = c.children, c = c.fallback, s ? (Cn(), s = n.mode, y = ad(
        { mode: "hidden", children: y },
        s
      ), c = Ma(
        c,
        s,
        u,
        null
      ), y.return = n, c.return = n, y.sibling = c, n.child = y, s = n.child, s.memoizedState = Nm(u), s.childLanes = _m(
        l,
        m,
        u
      ), n.memoizedState = td, c) : (bu(n), ld(n, y));
    }
    if (S = l.memoizedState, S !== null && (y = S.dehydrated, y !== null)) {
      if (r)
        n.flags & 256 ? (bu(n), n.flags &= -257, n = fi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Cn(), n.child = l.child, n.flags |= 128, n = null) : (Cn(), s = c.fallback, y = n.mode, c = ad(
          { mode: "visible", children: c.children },
          y
        ), s = Ma(
          s,
          y,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, sc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Nm(u), c.childLanes = _m(
          l,
          m,
          u
        ), n.memoizedState = td, n = s);
      else if (bu(n), Ss(y)) {
        if (m = y.nextSibling && y.nextSibling.dataset, m) var U = m.dgst;
        m = U, c = Error(b(419)), c.stack = "", c.digest = m, uo({ value: c, source: null, stack: null }), n = fi(
          l,
          n,
          u
        );
      } else if (el || io(l, n, u, !1), m = (u & l.childLanes) !== 0, el || m) {
        if (m = bt, m !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : ka(c), c = (c & (m.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== S.retryLane))
          throw S.retryLane = c, Sn(l, c), va(m, l, c), qt;
        y.data === "$?" || Sc(), n = fi(
          l,
          n,
          u
        );
      } else
        y.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = S.treeContext, nt = cn(
          y.nextSibling
        ), Lt = n, at = !0, Ca = null, Ha = !1, l !== null && (Ua[Wl++] = en, Ua[Wl++] = _t, Ua[Wl++] = du, en = l.id, _t = l.overflow, du = n), n = ld(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Cn(), s = c.fallback, y = n.mode, S = l.child, U = S.sibling, c = Pa(S, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = S.subtreeFlags & 65011712, U !== null ? s = Pa(U, s) : (s = Ma(
      s,
      y,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, y = l.child.memoizedState, y === null ? y = Nm(u) : (S = y.cachePool, S !== null ? (U = It._currentValue, S = S.parent !== U ? { parent: U, pool: U } : S) : S = Ar(), y = {
      baseLanes: y.baseLanes | u,
      cachePool: S
    }), s.memoizedState = y, s.childLanes = _m(
      l,
      m,
      u
    ), n.memoizedState = td, c) : (bu(n), u = l.child, l = u.sibling, u = Pa(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function ld(l, n) {
    return n = ad(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function ad(l, n) {
    return l = $l(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function fi(l, n, u) {
    return sc(n, l.child, null, u), l = ld(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function ls(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), vr(l.return, n, u);
  }
  function nd(l, n, u, c, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = s);
  }
  function ud(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (ol(l, n, c.children, u), c = pt.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && ls(l, u, n);
          else if (l.tag === 19)
            ls(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (te(pt, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && Ff(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), nd(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Ff(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        nd(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        nd(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Hn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Au |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (io(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(b(153));
    if (n.child !== null) {
      for (l = n.child, u = Pa(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Pa(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function id(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Hf(l)));
  }
  function ig(l, n, u) {
    switch (n.tag) {
      case 3:
        At(n, n.stateNode.containerInfo), yu(n, It, l.memoizedState.cache), no();
        break;
      case 27:
      case 5:
        hl(n);
        break;
      case 4:
        At(n, n.stateNode.containerInfo);
        break;
      case 10:
        yu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (bu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Bm(l, n, u) : (bu(n), l = Hn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        bu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (io(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return ud(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), te(pt, pt.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Fr(l, n, u);
      case 24:
        yu(n, It, l.memoizedState.cache);
    }
    return Hn(l, n, u);
  }
  function cg(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        el = !0;
      else {
        if (!id(l, u) && (n.flags & 128) === 0)
          return el = !1, ig(
            l,
            n,
            u
          );
        el = (l.flags & 131072) !== 0;
      }
    else
      el = !1, at && (n.flags & 1048576) !== 0 && gr(n, lo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            Df(c) ? (l = oi(c, l), n.tag = 1, n = Pr(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = Ir(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === Et) {
                n.tag = 11, n = ug(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === Te) {
                n.tag = 14, n = Su(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = $t(c) || c, Error(b(306, n, ""));
          }
        }
        return n;
      case 0:
        return Ir(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = oi(
          c,
          n.pendingProps
        ), Pr(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (At(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(b(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Dr(l, n), pu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, yu(n, It, c), c !== r.cache && nm(
            n,
            [It],
            u,
            !0
          ), fo(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = ed(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = ha(
                Error(b(424)),
                n
              ), uo(s), n = ed(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (nt = cn(l.firstChild), Lt = n, at = !0, Ca = null, Ha = !0, u = Mn(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (no(), c === s) {
              n = Hn(
                l,
                n,
                u
              );
              break e;
            }
            ol(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return ts(l, n), l === null ? (u = Ag(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : at || (u = n.type, l = n.pendingProps, c = Ga(
          Ze.current
        ).createElement(u), c[ul] = n, c[Bl] = l, Oe(c, u, l), Ft(c), n.stateNode = c) : n.memoizedState = Ag(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return hl(n), l === null && at && (c = n.stateNode = ee(
          n.type,
          n.pendingProps,
          Ze.current
        ), Lt = n, Ha = !0, s = nt, vi(n.type) ? (bi = s, nt = cn(
          c.firstChild
        )) : nt = s), ol(
          l,
          n,
          n.pendingProps.children,
          u
        ), ts(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && at && ((s = c = nt) && (c = Bo(
          c,
          n.type,
          n.pendingProps,
          Ha
        ), c !== null ? (n.stateNode = c, Lt = n, nt = cn(
          c.firstChild
        ), Ha = !1, s = !0) : s = !1), s || hu(n)), hl(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Vn(s, r) ? c = null : m !== null && Vn(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Cr(
          l,
          n,
          $p,
          null,
          null,
          u
        ), ia._currentValue = s), ts(l, n), ol(l, n, c, u), n.child;
      case 6:
        return l === null && at && ((l = u = nt) && (u = X0(
          u,
          n.pendingProps,
          Ha
        ), u !== null ? (n.stateNode = u, Lt = n, nt = null, l = !0) : l = !1), l || hu(n)), null;
      case 13:
        return Bm(l, n, u);
      case 4:
        return At(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = sc(
          n,
          null,
          c,
          u
        ) : ol(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return ug(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return ol(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return ol(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return ol(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, yu(n, n.type, c.value), ol(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, ti(n), s = il(s), c = c(s), n.flags |= 1, ol(l, n, c, u), n.child;
      case 14:
        return Su(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return dc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return ud(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = ad(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = Pa(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return Fr(l, n, u);
      case 24:
        return ti(n), c = il(It), l === null ? (s = _f(), s === null && (s = bt, r = oo(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, Or(n), yu(n, It, s)) : ((l.lanes & u) !== 0 && (Dr(l, n), pu(n, null, null, u), fo()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), yu(n, It, c)) : (c = r.cache, yu(n, It, c), c !== s.cache && nm(
          n,
          [It],
          u,
          !0
        ))), ol(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(b(156, n.tag));
  }
  function wn(l) {
    l.flags |= 4;
  }
  function vo(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !by(n)) {
      if (n = pa.current, n !== null && ((Ke & 4194048) === Ke ? Ul !== null : (Ke & 62914560) !== Ke && (Ke & 536870912) === 0 || n !== Ul))
        throw tc = zr, xr;
      l.flags |= 8192;
    }
  }
  function as(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Hi() : 536870912, l.lanes |= n, Ao |= n);
  }
  function bo(l, n) {
    if (!at)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Ae(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function qm(l, n, u) {
    var c = n.pendingProps;
    switch (Tn(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ae(n), null;
      case 1:
        return Ae(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), En(It), Nt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ao(n) ? wn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, am())), Ae(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (wn(n), u !== null ? (Ae(n), vo(n, u)) : (Ae(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (wn(n), Ae(n), vo(n, u)) : (Ae(n), n.flags &= -16777217) : (l.memoizedProps !== c && wn(n), Ae(n), n.flags &= -16777217), null;
      case 27:
        Za(n), u = Ze.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && wn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(b(166));
            return Ae(n), null;
          }
          l = Ee.current, ao(n) ? Uf(n) : (l = ee(s, c, u), n.stateNode = l, wn(n));
        }
        return Ae(n), null;
      case 5:
        if (Za(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && wn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(b(166));
            return Ae(n), null;
          }
          if (l = Ee.current, ao(n))
            Uf(n);
          else {
            switch (s = Ga(
              Ze.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? s.createElement("select", { is: c.is }) : s.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? s.createElement(u, { is: c.is }) : s.createElement(u);
                }
            }
            l[ul] = n, l[Bl] = c;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (Oe(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && wn(n);
          }
        }
        return Ae(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && wn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(b(166));
          if (l = Ze.current, ao(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Lt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[ul] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || yy(l.nodeValue, u)), l || hu(n);
          } else
            l = Ga(l).createTextNode(
              c
            ), l[ul] = n, n.stateNode = l;
        }
        return Ae(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = ao(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(b(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(b(317));
              s[ul] = n;
            } else
              no(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ae(n), s = !1;
          } else
            s = am(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (nn(n), n) : (nn(n), null);
        }
        if (nn(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), as(n, n.updateQueue), Ae(n), null;
      case 4:
        return Nt(), l === null && hy(n.stateNode.containerInfo), Ae(n), null;
      case 10:
        return En(n.type), Ae(n), null;
      case 19:
        if (F(pt), s = n.memoizedState, s === null) return Ae(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) bo(s, !1);
          else {
            if (Gt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = Ff(l), r !== null) {
                  for (n.flags |= 128, bo(s, !1), l = r.updateQueue, n.updateQueue = l, as(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Ge(u, l), u = u.sibling;
                  return te(
                    pt,
                    pt.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && fa() > yd && (n.flags |= 128, c = !0, bo(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = Ff(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, as(n, l), bo(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !at)
                return Ae(n), null;
            } else
              2 * fa() - s.renderingStartTime > yd && u !== 536870912 && (n.flags |= 128, c = !0, bo(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = fa(), n.sibling = null, l = pt.current, te(pt, c ? l & 1 | 2 : l & 1), n) : (Ae(n), null);
      case 22:
      case 23:
        return nn(n), ro(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Ae(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ae(n), u = n.updateQueue, u !== null && as(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && F(xn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), En(It), Ae(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(b(156, n.tag));
  }
  function N0(l, n) {
    switch (Tn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return En(It), Nt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Za(n), null;
      case 13:
        if (nn(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(b(340));
          no();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return F(pt), null;
      case 4:
        return Nt(), null;
      case 10:
        return En(n.type), null;
      case 22:
      case 23:
        return nn(n), ro(), l !== null && F(xn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return En(It), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jm(l, n) {
    switch (Tn(n), n.tag) {
      case 3:
        En(It), Nt();
        break;
      case 26:
      case 27:
      case 5:
        Za(n);
        break;
      case 4:
        Nt();
        break;
      case 13:
        nn(n);
        break;
      case 19:
        F(pt);
        break;
      case 10:
        En(n.type);
        break;
      case 22:
      case 23:
        nn(n), ro(), l !== null && F(xn);
        break;
      case 24:
        En(It);
    }
  }
  function ns(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (y) {
      ht(n, n.return, y);
    }
  }
  function si(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, y = m.destroy;
            if (y !== void 0) {
              m.destroy = void 0, s = n;
              var S = u, U = y;
              try {
                U();
              } catch (Q) {
                ht(
                  s,
                  S,
                  Q
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (Q) {
      ht(n, n.return, Q);
    }
  }
  function cd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        jf(n, u);
      } catch (c) {
        ht(l, l.return, c);
      }
    }
  }
  function Ym(l, n, u) {
    u.props = oi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      ht(l, n, c);
    }
  }
  function So(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      ht(l, n, s);
    }
  }
  function un(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          ht(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          ht(l, n, s);
        }
      else u.current = null;
  }
  function To(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      ht(l, l.return, s);
    }
  }
  function Gm(l, n, u) {
    try {
      var c = l.stateNode;
      Y0(c, l.type, u, n), c[Bl] = n;
    } catch (s) {
      ht(l, l.return, s);
    }
  }
  function og(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && vi(l.type) || l.tag === 4;
  }
  function Ba(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || og(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && vi(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function mc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Od));
    else if (c !== 4 && (c === 27 && vi(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (mc(l, n, u), l = l.sibling; l !== null; )
        mc(l, n, u), l = l.sibling;
  }
  function od(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && vi(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (od(l, n, u), l = l.sibling; l !== null; )
        od(l, n, u), l = l.sibling;
  }
  function fd(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      Oe(n, c, u), n[ul] = l, n[Bl] = u;
    } catch (r) {
      ht(l, l.return, r);
    }
  }
  var Nn = !1, jt = !1, sd = !1, rd = typeof WeakSet == "function" ? WeakSet : Set, tl = null;
  function Vm(l, n) {
    if (l = l.containerInfo, gs = As, l = Wh(l), Rf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, y = -1, S = -1, U = 0, Q = 0, k = l, H = null;
            t: for (; ; ) {
              for (var N; k !== u || s !== 0 && k.nodeType !== 3 || (y = m + s), k !== r || c !== 0 && k.nodeType !== 3 || (S = m + c), k.nodeType === 3 && (m += k.nodeValue.length), (N = k.firstChild) !== null; )
                H = k, k = N;
              for (; ; ) {
                if (k === l) break t;
                if (H === u && ++U === s && (y = m), H === r && ++Q === c && (S = m), (N = k.nextSibling) !== null) break;
                k = H, H = k.parentNode;
              }
              k = N;
            }
            u = y === -1 || S === -1 ? null : { start: y, end: S };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (vs = { focusedElem: l, selectionRange: u }, As = !1, tl = n; tl !== null; )
      if (n = tl, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, tl = l;
      else
        for (; tl !== null; ) {
          switch (n = tl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var ve = oi(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ve,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (be) {
                  ht(
                    u,
                    u.return,
                    be
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  bs(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bs(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(b(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, tl = l;
            break;
          }
          tl = n.return;
        }
  }
  function Xm(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Bn(l, u), c & 4 && ns(5, u);
        break;
      case 1:
        if (Bn(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              ht(u, u.return, m);
            }
          else {
            var s = oi(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              ht(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && cd(u), c & 512 && So(u, u.return);
        break;
      case 3:
        if (Bn(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            jf(l, n);
          } catch (m) {
            ht(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && fd(u);
      case 26:
      case 5:
        Bn(l, u), n === null && c & 4 && To(u), c & 512 && So(u, u.return);
        break;
      case 12:
        Bn(l, u);
        break;
      case 13:
        Bn(l, u), c & 4 && dd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = _0.bind(
          null,
          u
        ), Q0(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Nn, !c) {
          n = n !== null && n.memoizedState !== null || jt, s = Nn;
          var r = jt;
          Nn = c, (jt = n) && !r ? ri(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Bn(l, u), Nn = s, jt = r;
        }
        break;
      case 30:
        break;
      default:
        Bn(l, u);
    }
  }
  function Qm(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Qm(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && sf(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Ot = null, gl = !1;
  function _n(l, n, u) {
    for (u = u.child; u !== null; )
      ke(l, n, u), u = u.sibling;
  }
  function ke(l, n, u) {
    if (_l && typeof _l.onCommitFiberUnmount == "function")
      try {
        _l.onCommitFiberUnmount(Vc, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        jt || un(u, n), _n(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        jt || un(u, n);
        var c = Ot, s = gl;
        vi(u.type) && (Ot = u.stateNode, gl = !1), _n(
          l,
          n,
          u
        ), na(u.stateNode), Ot = c, gl = s;
        break;
      case 5:
        jt || un(u, n);
      case 6:
        if (c = Ot, s = gl, Ot = null, _n(
          l,
          n,
          u
        ), Ot = c, gl = s, Ot !== null)
          if (gl)
            try {
              (Ot.nodeType === 9 ? Ot.body : Ot.nodeName === "HTML" ? Ot.ownerDocument.body : Ot).removeChild(u.stateNode);
            } catch (r) {
              ht(
                u,
                n,
                r
              );
            }
          else
            try {
              Ot.removeChild(u.stateNode);
            } catch (r) {
              ht(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        Ot !== null && (gl ? (l = Ot, Md(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Ln(l)) : Md(Ot, u.stateNode));
        break;
      case 4:
        c = Ot, s = gl, Ot = u.stateNode.containerInfo, gl = !0, _n(
          l,
          n,
          u
        ), Ot = c, gl = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        jt || si(2, u, n), jt || si(4, u, n), _n(
          l,
          n,
          u
        );
        break;
      case 1:
        jt || (un(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && Ym(
          u,
          n,
          c
        )), _n(
          l,
          n,
          u
        );
        break;
      case 21:
        _n(
          l,
          n,
          u
        );
        break;
      case 22:
        jt = (c = jt) || u.memoizedState !== null, _n(
          l,
          n,
          u
        ), jt = c;
        break;
      default:
        _n(
          l,
          n,
          u
        );
    }
  }
  function dd(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ln(l);
      } catch (u) {
        ht(n, n.return, u);
      }
  }
  function Lm(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new rd()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new rd()), n;
      default:
        throw Error(b(435, l.tag));
    }
  }
  function hd(l, n) {
    var u = Lm(l);
    n.forEach(function(c) {
      var s = B0.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function Yl(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, y = m;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (vi(y.type)) {
                Ot = y.stateNode, gl = !1;
                break e;
              }
              break;
            case 5:
              Ot = y.stateNode, gl = !1;
              break e;
            case 3:
            case 4:
              Ot = y.stateNode.containerInfo, gl = !0;
              break e;
          }
          y = y.return;
        }
        if (Ot === null) throw Error(b(160));
        ke(r, m, s), Ot = null, gl = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        us(n, l), n = n.sibling;
  }
  var Gl = null;
  function us(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Yl(n, l), fl(l), c & 4 && (si(3, l, l.return), ns(3, l), si(5, l, l.return));
        break;
      case 1:
        Yl(n, l), fl(l), c & 512 && (jt || u === null || un(u, u.return)), c & 64 && Nn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Gl;
        if (Yl(n, l), fl(l), c & 512 && (jt || u === null || un(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[ce] || r[ul] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), Oe(r, c, u), r[ul] = l, Ft(r), c = r;
                      break e;
                    case "link":
                      var m = gy(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var y = 0; y < m.length; y++)
                          if (r = m[y], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(y, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), Oe(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = gy(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (y = 0; y < m.length; y++)
                          if (r = m[y], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(y, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), Oe(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(b(468, c));
                  }
                  r[ul] = l, Ft(r), c = r;
                }
                l.stateNode = c;
              } else
                vy(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = zg(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? vy(
              s,
              l.type,
              l.stateNode
            ) : zg(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Gm(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Yl(n, l), fl(l), c & 512 && (jt || u === null || un(u, u.return)), u !== null && c & 4 && Gm(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Yl(n, l), fl(l), c & 512 && (jt || u === null || un(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Zc(s, "");
          } catch (N) {
            ht(l, l.return, N);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, Gm(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (sd = !0);
        break;
      case 6:
        if (Yl(n, l), fl(l), c & 4) {
          if (l.stateNode === null)
            throw Error(b(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (N) {
            ht(l, l.return, N);
          }
        }
        break;
      case 3:
        if (Ei = null, s = Gl, Gl = Ud(n.containerInfo), Yl(n, l), Gl = s, fl(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Ln(n.containerInfo);
          } catch (N) {
            ht(l, l.return, N);
          }
        sd && (sd = !1, Zm(l));
        break;
      case 4:
        c = Gl, Gl = Ud(
          l.stateNode.containerInfo
        ), Yl(n, l), fl(l), Gl = c;
        break;
      case 12:
        Yl(n, l), fl(l);
        break;
      case 13:
        Yl(n, l), fl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Pm = fa()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, hd(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var S = u !== null && u.memoizedState !== null, U = Nn, Q = jt;
        if (Nn = U || s, jt = Q || S, Yl(n, l), jt = Q, Nn = U, fl(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || S || Nn || jt || Dt(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                S = u = n;
                try {
                  if (r = S.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    y = S.stateNode;
                    var k = S.memoizedProps.style, H = k != null && k.hasOwnProperty("display") ? k.display : null;
                    y.style.display = H == null || typeof H == "boolean" ? "" : ("" + H).trim();
                  }
                } catch (N) {
                  ht(S, S.return, N);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                S = n;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (N) {
                  ht(S, S.return, N);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, hd(l, u))));
        break;
      case 19:
        Yl(n, l), fl(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, hd(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Yl(n, l), fl(l);
    }
  }
  function fl(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (og(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(b(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Ba(l);
            od(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Zc(m, ""), u.flags &= -33);
            var y = Ba(l);
            od(l, y, m);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, U = Ba(l);
            mc(
              l,
              U,
              S
            );
            break;
          default:
            throw Error(b(161));
        }
      } catch (Q) {
        ht(l, l.return, Q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Zm(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Zm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Bn(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Xm(l, n.alternate, n), n = n.sibling;
  }
  function Dt(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          si(4, n, n.return), Dt(n);
          break;
        case 1:
          un(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Ym(
            n,
            n.return,
            u
          ), Dt(n);
          break;
        case 27:
          na(n.stateNode);
        case 26:
        case 5:
          un(n, n.return), Dt(n);
          break;
        case 22:
          n.memoizedState === null && Dt(n);
          break;
        case 30:
          Dt(n);
          break;
        default:
          Dt(n);
      }
      l = l.sibling;
    }
  }
  function ri(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ri(
            s,
            r,
            u
          ), ns(4, r);
          break;
        case 1:
          if (ri(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (U) {
              ht(c, c.return, U);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var y = c.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  Mr(S[s], y);
            } catch (U) {
              ht(c, c.return, U);
            }
          }
          u && m & 64 && cd(r), So(r, r.return);
          break;
        case 27:
          fd(r);
        case 26:
        case 5:
          ri(
            s,
            r,
            u
          ), u && c === null && m & 4 && To(r), So(r, r.return);
          break;
        case 12:
          ri(
            s,
            r,
            u
          );
          break;
        case 13:
          ri(
            s,
            r,
            u
          ), u && m & 4 && dd(s, r);
          break;
        case 22:
          r.memoizedState === null && ri(
            s,
            r,
            u
          ), So(r, r.return);
          break;
        case 30:
          break;
        default:
          ri(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function qa(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && An(u));
  }
  function md(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && An(l));
  }
  function vl(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        km(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function km(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        vl(
          l,
          n,
          u,
          c
        ), s & 2048 && ns(9, n);
        break;
      case 1:
        vl(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        vl(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && An(l)));
        break;
      case 12:
        if (s & 2048) {
          vl(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, y = r.onPostCommit;
            typeof y == "function" && y(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (S) {
            ht(n, n.return, S);
          }
        } else
          vl(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        vl(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? vl(
          l,
          n,
          u,
          c
        ) : ut(l, n) : r._visibility & 2 ? vl(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, Tu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && qa(m, n);
        break;
      case 24:
        vl(
          l,
          n,
          u,
          c
        ), s & 2048 && md(n.alternate, n);
        break;
      default:
        vl(
          l,
          n,
          u,
          c
        );
    }
  }
  function Tu(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, m = n, y = u, S = c, U = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Tu(
            r,
            m,
            y,
            S,
            s
          ), ns(8, m);
          break;
        case 23:
          break;
        case 22:
          var Q = m.stateNode;
          m.memoizedState !== null ? Q._visibility & 2 ? Tu(
            r,
            m,
            y,
            S,
            s
          ) : ut(
            r,
            m
          ) : (Q._visibility |= 2, Tu(
            r,
            m,
            y,
            S,
            s
          )), s && U & 2048 && qa(
            m.alternate,
            m
          );
          break;
        case 24:
          Tu(
            r,
            m,
            y,
            S,
            s
          ), s && U & 2048 && md(m.alternate, m);
          break;
        default:
          Tu(
            r,
            m,
            y,
            S,
            s
          );
      }
      n = n.sibling;
    }
  }
  function ut(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            ut(u, c), s & 2048 && qa(
              c.alternate,
              c
            );
            break;
          case 24:
            ut(u, c), s & 2048 && md(c.alternate, c);
            break;
          default:
            ut(u, c);
        }
        n = n.sibling;
      }
  }
  var yc = 8192;
  function Yt(l) {
    if (l.subtreeFlags & yc)
      for (l = l.child; l !== null; )
        fg(l), l = l.sibling;
  }
  function fg(l) {
    switch (l.tag) {
      case 26:
        Yt(l), l.flags & yc && l.memoizedState !== null && Dg(
          Gl,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Yt(l);
        break;
      case 3:
      case 4:
        var n = Gl;
        Gl = Ud(l.stateNode.containerInfo), Yt(l), Gl = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = yc, yc = 16777216, Yt(l), yc = n) : Yt(l));
        break;
      default:
        Yt(l);
    }
  }
  function Jm(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function pc(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          tl = c, $m(
            c,
            l
          );
        }
      Jm(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Km(l), l = l.sibling;
  }
  function Km(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        pc(l), l.flags & 2048 && si(9, l, l.return);
        break;
      case 3:
        pc(l);
        break;
      case 12:
        pc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Vl(l)) : pc(l);
        break;
      default:
        pc(l);
    }
  }
  function Vl(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          tl = c, $m(
            c,
            l
          );
        }
      Jm(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          si(8, n, n.return), Vl(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Vl(n));
          break;
        default:
          Vl(n);
      }
      l = l.sibling;
    }
  }
  function $m(l, n) {
    for (; tl !== null; ) {
      var u = tl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          si(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          An(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, tl = c;
      else
        e: for (u = l; tl !== null; ) {
          c = tl;
          var s = c.sibling, r = c.return;
          if (Qm(c), c === u) {
            tl = null;
            break e;
          }
          if (s !== null) {
            s.return = r, tl = s;
            break e;
          }
          tl = r;
        }
    }
  }
  var Wm = {
    getCacheForType: function(l) {
      var n = il(It), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, sg = typeof WeakMap == "function" ? WeakMap : Map, st = 0, bt = null, Je = null, Ke = 0, dt = 0, ta = null, qn = !1, Eo = !1, Fm = !1, Eu = 0, Gt = 0, Au = 0, gc = 0, jn = 0, ja = 0, Ao = 0, xo = null, la = null, Im = !1, Pm = 0, yd = 1 / 0, zo = null, di = null, bl = 0, Yn = null, Ro = null, Sl = 0, pd = 0, gd = null, ey = null, Oo = 0, ty = null;
  function ga() {
    if ((st & 2) !== 0 && Ke !== 0)
      return Ke & -Ke;
    if (z.T !== null) {
      var l = wa;
      return l !== 0 ? l : Tc();
    }
    return xp();
  }
  function ly() {
    ja === 0 && (ja = (Ke & 536870912) === 0 || at ? ju() : 536870912);
    var l = pa.current;
    return l !== null && (l.flags |= 32), ja;
  }
  function va(l, n, u) {
    (l === bt && (dt === 2 || dt === 9) || l.cancelPendingCommit !== null) && (Gn(l, 0), xu(
      l,
      Ke,
      ja,
      !1
    )), wi(l, u), ((st & 2) === 0 || l !== bt) && (l === bt && ((st & 2) === 0 && (gc |= u), Gt === 4 && xu(
      l,
      Ke,
      ja,
      !1
    )), aa(l));
  }
  function Do(l, n, u) {
    if ((st & 6) !== 0) throw Error(b(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || dn(l, n), s = c ? ny(l, n) : vd(l, n, !0), r = c;
    do {
      if (s === 0) {
        Eo && !c && xu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !rg(u)) {
          s = vd(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var y = l;
              s = xo;
              var S = y.current.memoizedState.isDehydrated;
              if (S && (Gn(y, m).flags |= 256), m = vd(
                y,
                m,
                !1
              ), m !== 2) {
                if (Fm && !S) {
                  y.errorRecoveryDisabledLanes |= r, gc |= r, s = 4;
                  break e;
                }
                r = la, la = s, r !== null && (la === null ? la = r : la.push.apply(
                  la,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Gn(l, 0), xu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(b(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              xu(
                c,
                n,
                ja,
                !qn
              );
              break e;
            case 2:
              la = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(b(329));
          }
          if ((n & 62914560) === n && (s = Pm + 300 - fa(), 10 < s)) {
            if (xu(
              c,
              n,
              ja,
              !qn
            ), qu(c, 0, !0) !== 0) break e;
            c.timeoutHandle = Dd(
              is.bind(
                null,
                c,
                u,
                la,
                zo,
                Im,
                n,
                ja,
                gc,
                Ao,
                qn,
                r,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          is(
            c,
            u,
            la,
            zo,
            Im,
            n,
            ja,
            gc,
            Ao,
            qn,
            r,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    aa(l);
  }
  function is(l, n, u, c, s, r, m, y, S, U, Q, k, H, N) {
    if (l.timeoutHandle = -1, k = n.subtreeFlags, (k & 8192 || (k & 16785408) === 16785408) && (Go = { stylesheets: null, count: 0, unsuspend: Og }, fg(n), k = Sy(), k !== null)) {
      l.cancelPendingCommit = k(
        mg.bind(
          null,
          l,
          n,
          r,
          u,
          c,
          s,
          m,
          y,
          S,
          Q,
          1,
          H,
          N
        )
      ), xu(l, r, m, !U);
      return;
    }
    mg(
      l,
      n,
      r,
      u,
      c,
      s,
      m,
      y,
      S
    );
  }
  function rg(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!pl(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function xu(l, n, u, c) {
    n &= ~jn, n &= ~gc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - kl(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && of(l, u, n);
  }
  function vc() {
    return (st & 6) === 0 ? (ss(0), !1) : !0;
  }
  function hi() {
    if (Je !== null) {
      if (dt === 0)
        var l = Je.return;
      else
        l = Je, tn = mu = null, wr(l), oc = null, yo = 0, l = Je;
      for (; l !== null; )
        jm(l.alternate, l), l = l.return;
      Je = null;
    }
  }
  function Gn(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, G0(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), hi(), bt = l, Je = u = Pa(l.current, null), Ke = n, dt = 0, ta = null, qn = !1, Eo = dn(l, n), Fm = !1, Ao = ja = jn = gc = Au = Gt = 0, la = xo = null, Im = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - kl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Eu = n, Ia(), u;
  }
  function ay(l, n) {
    we = null, z.H = Kr, n === ai || n === Bf ? (n = cm(), dt = 3) : n === xr ? (n = cm(), dt = 4) : dt = n === qt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, ta = n, Je === null && (Gt = 1, es(
      l,
      ha(n, l.current)
    ));
  }
  function dg() {
    var l = z.H;
    return z.H = Kr, l === null ? Kr : l;
  }
  function bc() {
    var l = z.A;
    return z.A = Wm, l;
  }
  function Sc() {
    Gt = 4, qn || (Ke & 4194048) !== Ke && pa.current !== null || (Eo = !0), (Au & 134217727) === 0 && (gc & 134217727) === 0 || bt === null || xu(
      bt,
      Ke,
      ja,
      !1
    );
  }
  function vd(l, n, u) {
    var c = st;
    st |= 2;
    var s = dg(), r = bc();
    (bt !== l || Ke !== n) && (zo = null, Gn(l, n)), n = !1;
    var m = Gt;
    e: do
      try {
        if (dt !== 0 && Je !== null) {
          var y = Je, S = ta;
          switch (dt) {
            case 8:
              hi(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pa.current === null && (n = !0);
              var U = dt;
              if (dt = 0, ta = null, Mo(l, y, S, U), u && Eo) {
                m = 0;
                break e;
              }
              break;
            default:
              U = dt, dt = 0, ta = null, Mo(l, y, S, U);
          }
        }
        bd(), m = Gt;
        break;
      } catch (Q) {
        ay(l, Q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, tn = mu = null, st = c, z.H = s, z.A = r, Je === null && (bt = null, Ke = 0, Ia()), m;
  }
  function bd() {
    for (; Je !== null; ) iy(Je);
  }
  function ny(l, n) {
    var u = st;
    st |= 2;
    var c = dg(), s = bc();
    bt !== l || Ke !== n ? (zo = null, yd = fa() + 500, Gn(l, n)) : Eo = dn(
      l,
      n
    );
    e: do
      try {
        if (dt !== 0 && Je !== null) {
          n = Je;
          var r = ta;
          t: switch (dt) {
            case 1:
              dt = 0, ta = null, Mo(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (Rr(r)) {
                dt = 0, ta = null, cy(n);
                break;
              }
              n = function() {
                dt !== 2 && dt !== 9 || bt !== l || (dt = 7), aa(l);
              }, r.then(n, n);
              break e;
            case 3:
              dt = 7;
              break e;
            case 4:
              dt = 5;
              break e;
            case 7:
              Rr(r) ? (dt = 0, ta = null, cy(n)) : (dt = 0, ta = null, Mo(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (Je.tag) {
                case 26:
                  m = Je.memoizedState;
                case 5:
                case 27:
                  var y = Je;
                  if (!m || by(m)) {
                    dt = 0, ta = null;
                    var S = y.sibling;
                    if (S !== null) Je = S;
                    else {
                      var U = y.return;
                      U !== null ? (Je = U, cs(U)) : Je = null;
                    }
                    break t;
                  }
              }
              dt = 0, ta = null, Mo(l, n, r, 5);
              break;
            case 6:
              dt = 0, ta = null, Mo(l, n, r, 6);
              break;
            case 8:
              hi(), Gt = 6;
              break e;
            default:
              throw Error(b(462));
          }
        }
        uy();
        break;
      } catch (Q) {
        ay(l, Q);
      }
    while (!0);
    return tn = mu = null, z.H = c, z.A = s, st = u, Je !== null ? 0 : (bt = null, Ke = 0, Ia(), Gt);
  }
  function uy() {
    for (; Je !== null && !E0(); )
      iy(Je);
  }
  function iy(l) {
    var n = cg(l.alternate, l, Eu);
    l.memoizedProps = l.pendingProps, n === null ? cs(l) : Je = n;
  }
  function cy(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = wm(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ke
        );
        break;
      case 11:
        n = wm(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ke
        );
        break;
      case 5:
        wr(n);
      default:
        jm(u, n), n = Je = Ge(n, Eu), n = cg(u, n, Eu);
    }
    l.memoizedProps = l.pendingProps, n === null ? cs(l) : Je = n;
  }
  function Mo(l, n, u, c) {
    tn = mu = null, wr(n), oc = null, yo = 0;
    var s = n.return;
    try {
      if (ng(
        l,
        s,
        n,
        u,
        Ke
      )) {
        Gt = 1, es(
          l,
          ha(u, l.current)
        ), Je = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Je = s, r;
      Gt = 1, es(
        l,
        ha(u, l.current)
      ), Je = null;
      return;
    }
    n.flags & 32768 ? (at || c === 1 ? l = !0 : Eo || (Ke & 536870912) !== 0 ? l = !1 : (qn = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = pa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), hg(n, l)) : cs(n);
  }
  function cs(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        hg(
          n,
          qn
        );
        return;
      }
      l = n.return;
      var u = qm(
        n.alternate,
        n,
        Eu
      );
      if (u !== null) {
        Je = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Je = n;
        return;
      }
      Je = n = l;
    } while (n !== null);
    Gt === 0 && (Gt = 5);
  }
  function hg(l, n) {
    do {
      var u = N0(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Je = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Je = l;
        return;
      }
      Je = l = u;
    } while (l !== null);
    Gt = 6, Je = null;
  }
  function mg(l, n, u, c, s, r, m, y, S) {
    l.cancelPendingCommit = null;
    do
      Td();
    while (bl !== 0);
    if ((st & 6) !== 0) throw Error(b(327));
    if (n !== null) {
      if (n === l.current) throw Error(b(177));
      if (r = n.lanes | n.childLanes, r |= bn, Ap(
        l,
        u,
        r,
        m,
        y,
        S
      ), l === bt && (Je = bt = null, Ke = 0), Ro = n, Yn = l, Sl = u, pd = r, gd = s, ey = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, q0(cf, function() {
        return oy(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = z.T, z.T = null, s = Z.p, Z.p = 2, m = st, st |= 4;
        try {
          Vm(l, n, u);
        } finally {
          st = m, Z.p = s, z.T = c;
        }
      }
      bl = 1, yg(), os(), Sd();
    }
  }
  function yg() {
    if (bl === 1) {
      bl = 0;
      var l = Yn, n = Ro, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = z.T, z.T = null;
        var c = Z.p;
        Z.p = 2;
        var s = st;
        st |= 4;
        try {
          us(n, l);
          var r = vs, m = Wh(l.containerInfo), y = r.focusedElem, S = r.selectionRange;
          if (m !== y && y && y.ownerDocument && zf(
            y.ownerDocument.documentElement,
            y
          )) {
            if (S !== null && Rf(y)) {
              var U = S.start, Q = S.end;
              if (Q === void 0 && (Q = U), "selectionStart" in y)
                y.selectionStart = U, y.selectionEnd = Math.min(
                  Q,
                  y.value.length
                );
              else {
                var k = y.ownerDocument || document, H = k && k.defaultView || window;
                if (H.getSelection) {
                  var N = H.getSelection(), ve = y.textContent.length, be = Math.min(S.start, ve), it = S.end === void 0 ? be : Math.min(S.end, ve);
                  !N.extend && be > it && (m = it, it = be, be = m);
                  var D = xt(
                    y,
                    be
                  ), x = xt(
                    y,
                    it
                  );
                  if (D && x && (N.rangeCount !== 1 || N.anchorNode !== D.node || N.anchorOffset !== D.offset || N.focusNode !== x.node || N.focusOffset !== x.offset)) {
                    var M = k.createRange();
                    M.setStart(D.node, D.offset), N.removeAllRanges(), be > it ? (N.addRange(M), N.extend(x.node, x.offset)) : (M.setEnd(x.node, x.offset), N.addRange(M));
                  }
                }
              }
            }
            for (k = [], N = y; N = N.parentNode; )
              N.nodeType === 1 && k.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < k.length; y++) {
              var L = k[y];
              L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
            }
          }
          As = !!gs, vs = gs = null;
        } finally {
          st = s, Z.p = c, z.T = u;
        }
      }
      l.current = n, bl = 2;
    }
  }
  function os() {
    if (bl === 2) {
      bl = 0;
      var l = Yn, n = Ro, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = z.T, z.T = null;
        var c = Z.p;
        Z.p = 2;
        var s = st;
        st |= 4;
        try {
          Xm(l, n.alternate, n);
        } finally {
          st = s, Z.p = c, z.T = u;
        }
      }
      bl = 3;
    }
  }
  function Sd() {
    if (bl === 4 || bl === 3) {
      bl = 0, Ci();
      var l = Yn, n = Ro, u = Sl, c = ey;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? bl = 5 : (bl = 0, Ro = Yn = null, pg(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (di = null), $s(u), n = n.stateNode, _l && typeof _l.onCommitFiberRoot == "function")
        try {
          _l.onCommitFiberRoot(
            Vc,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = z.T, s = Z.p, Z.p = 2, z.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var y = c[m];
            r(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          z.T = n, Z.p = s;
        }
      }
      (Sl & 3) !== 0 && Td(), aa(l), s = l.pendingLanes, (u & 4194090) !== 0 && (s & 42) !== 0 ? l === ty ? Oo++ : (Oo = 0, ty = l) : Oo = 0, ss(0);
    }
  }
  function pg(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, An(n)));
  }
  function Td(l) {
    return yg(), os(), Sd(), oy();
  }
  function oy() {
    if (bl !== 5) return !1;
    var l = Yn, n = pd;
    pd = 0;
    var u = $s(Sl), c = z.T, s = Z.p;
    try {
      Z.p = 32 > u ? 32 : u, z.T = null, u = gd, gd = null;
      var r = Yn, m = Sl;
      if (bl = 0, Ro = Yn = null, Sl = 0, (st & 6) !== 0) throw Error(b(331));
      var y = st;
      if (st |= 4, Km(r.current), km(
        r,
        r.current,
        m,
        u
      ), st = y, ss(0, !1), _l && typeof _l.onPostCommitFiberRoot == "function")
        try {
          _l.onPostCommitFiberRoot(Vc, r);
        } catch {
        }
      return !0;
    } finally {
      Z.p = s, z.T = c, pg(l, n);
    }
  }
  function fy(l, n, u) {
    n = ha(u, n), n = Cm(l.stateNode, n, 2), l = Rn(l, n, 2), l !== null && (wi(l, 2), aa(l));
  }
  function ht(l, n, u) {
    if (l.tag === 3)
      fy(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          fy(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (di === null || !di.has(c))) {
            l = ha(u, l), u = Hm(2), c = Rn(n, u, 2), c !== null && (ea(
              u,
              c,
              n,
              l
            ), wi(c, 2), aa(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ed(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new sg();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (Fm = !0, s.add(u), l = sy.bind(null, l, n, u), n.then(l, l));
  }
  function sy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, bt === l && (Ke & u) === u && (Gt === 4 || Gt === 3 && (Ke & 62914560) === Ke && 300 > fa() - Pm ? (st & 2) === 0 && Gn(l, 0) : jn |= u, Ao === Ke && (Ao = 0)), aa(l);
  }
  function ry(l, n) {
    n === 0 && (n = Hi()), l = Sn(l, n), l !== null && (wi(l, n), aa(l));
  }
  function _0(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), ry(l, u);
  }
  function B0(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(b(314));
    }
    c !== null && c.delete(n), ry(l, u);
  }
  function q0(l, n) {
    return Ui(l, n);
  }
  var Ad = null, mi = null, fs = !1, Uo = !1, xd = !1, yi = 0;
  function aa(l) {
    l !== mi && l.next === null && (mi === null ? Ad = mi = l : mi = mi.next = l), Uo = !0, fs || (fs = !0, bg());
  }
  function ss(l, n) {
    if (!xd && Uo) {
      xd = !0;
      do
        for (var u = !1, c = Ad; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, y = c.pingedLanes;
              r = (1 << 31 - kl(42 | l) + 1) - 1, r &= s & ~(m & ~y), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, ds(c, r));
          } else
            r = Ke, r = qu(
              c,
              c === bt ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || dn(c, r) || (u = !0, ds(c, r));
          c = c.next;
        }
      while (u);
      xd = !1;
    }
  }
  function gg() {
    rs();
  }
  function rs() {
    Uo = fs = !1;
    var l = 0;
    yi !== 0 && (Ou() && (l = yi), yi = 0);
    for (var n = fa(), u = null, c = Ad; c !== null; ) {
      var s = c.next, r = dy(c, n);
      r === 0 ? (c.next = null, u === null ? Ad = s : u.next = s, s === null && (mi = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Uo = !0)), c = s;
    }
    ss(l);
  }
  function dy(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - kl(r), y = 1 << m, S = s[m];
      S === -1 ? ((y & u) === 0 || (y & c) !== 0) && (s[m] = nl(y, n)) : S <= n && (l.expiredLanes |= y), r &= ~y;
    }
    if (n = bt, u = Ke, u = qu(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (dt === 2 || dt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Th(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || dn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Th(c), $s(u)) {
        case 2:
        case 8:
          u = Eh;
          break;
        case 32:
          u = cf;
          break;
        case 268435456:
          u = Gc;
          break;
        default:
          u = cf;
      }
      return c = vg.bind(null, l), u = Ui(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Th(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function vg(l, n) {
    if (bl !== 0 && bl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Td() && l.callbackNode !== u)
      return null;
    var c = Ke;
    return c = qu(
      l,
      l === bt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (Do(l, c, n), dy(l, fa()), l.callbackNode != null && l.callbackNode === u ? vg.bind(null, l) : null);
  }
  function ds(l, n) {
    if (Td()) return null;
    Do(l, n, !0);
  }
  function bg() {
    V0(function() {
      (st & 6) !== 0 ? Ui(
        Sp,
        gg
      ) : rs();
    });
  }
  function Tc() {
    return yi === 0 && (yi = ju()), yi;
  }
  function zd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : gf("" + l);
  }
  function hs(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Sg(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = zd(
        (s[Bl] || null).action
      ), m = c.submitter;
      m && (n = (n = m[Bl] || null) ? zd(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var y = new cr(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (yi !== 0) {
                  var S = m ? hs(s, m) : new FormData(s);
                  Jr(
                    u,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: r
                    },
                    null,
                    S
                  );
                }
              } else
                typeof r == "function" && (y.preventDefault(), S = m ? hs(s, m) : new FormData(s), Jr(
                  u,
                  {
                    pending: !0,
                    data: S,
                    method: s.method,
                    action: r
                  },
                  r,
                  S
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Vt = 0; Vt < Fc.length; Vt++) {
    var ms = Fc[Vt], j0 = ms.toLowerCase(), Ye = ms[0].toUpperCase() + ms.slice(1);
    Da(
      j0,
      "on" + Ye
    );
  }
  Da(Qp, "onAnimationEnd"), Da(Fh, "onAnimationIteration"), Da(Lp, "onAnimationStart"), Da("dblclick", "onDoubleClick"), Da("focusin", "onFocus"), Da("focusout", "onBlur"), Da(Ih, "onTransitionRun"), Da(pr, "onTransitionStart"), Da(Zp, "onTransitionCancel"), Da(Ph, "onTransitionEnd"), Vu("onMouseEnter", ["mouseout", "mouseover"]), Vu("onMouseLeave", ["mouseout", "mouseover"]), Vu("onPointerEnter", ["pointerout", "pointerover"]), Vu("onPointerLeave", ["pointerout", "pointerover"]), Gu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Gu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Gu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Gu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Gu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Gu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ys = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), pi = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ys)
  );
  function Ec(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var y = c[m], S = y.instance, U = y.currentTarget;
            if (y = y.listener, S !== r && s.isPropagationStopped())
              break e;
            r = y, s.currentTarget = U;
            try {
              r(s);
            } catch (Q) {
              If(Q);
            }
            s.currentTarget = null, r = S;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (y = c[m], S = y.instance, U = y.currentTarget, y = y.listener, S !== r && s.isPropagationStopped())
              break e;
            r = y, s.currentTarget = U;
            try {
              r(s);
            } catch (Q) {
              If(Q);
            }
            s.currentTarget = null, r = S;
          }
      }
    }
  }
  function Ne(l, n) {
    var u = n[Ws];
    u === void 0 && (u = n[Ws] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Rd(n, l, 2, !1), u.add(c));
  }
  function Co(l, n, u) {
    var c = 0;
    n && (c |= 4), Rd(
      u,
      l,
      c,
      n
    );
  }
  var Ho = "_reactListening" + Math.random().toString(36).slice(2);
  function hy(l) {
    if (!l[Ho]) {
      l[Ho] = !0, df.forEach(function(u) {
        u !== "selectionchange" && (pi.has(u) || Co(u, !1, l), Co(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Ho] || (n[Ho] = !0, Co("selectionchange", !1, n));
    }
  }
  function Rd(l, n, u, c) {
    switch (Dy(n)) {
      case 2:
        var s = Mg;
        break;
      case 8:
        s = Ug;
        break;
      default:
        s = Ry;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !nr || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Ya(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var y = c.stateNode.containerInfo;
          if (y === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var S = m.tag;
              if ((S === 3 || S === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; y !== null; ) {
            if (m = ml(y), m === null) return;
            if (S = m.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              c = r = m;
              continue e;
            }
            y = y.parentNode;
          }
        }
        c = c.return;
      }
    Kc(function() {
      var U = r, Q = ar(u), k = [];
      e: {
        var H = em.get(l);
        if (H !== void 0) {
          var N = cr, ve = l;
          switch (l) {
            case "keypress":
              if (yl(u) === 0) break e;
            case "keydown":
            case "keyup":
              N = Ja;
              break;
            case "focusin":
              ve = "focus", N = _h;
              break;
            case "focusout":
              ve = "blur", N = _h;
              break;
            case "beforeblur":
            case "afterblur":
              N = _h;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = Nh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Np;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = jh;
              break;
            case Qp:
            case Fh:
            case Lp:
              N = U0;
              break;
            case Ph:
              N = Yp;
              break;
            case "scroll":
            case "scrollend":
              N = Hp;
              break;
            case "wheel":
              N = Zi;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Sf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Tf;
              break;
            case "toggle":
            case "beforetoggle":
              N = Gp;
          }
          var be = (n & 4) !== 0, it = !be && (l === "scroll" || l === "scrollend"), D = be ? H !== null ? H + "Capture" : null : H;
          be = [];
          for (var x = U, M; x !== null; ) {
            var L = x;
            if (M = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || M === null || D === null || (L = Vi(x, D), L != null && be.push(
              zu(x, L, M)
            )), it) break;
            x = x.return;
          }
          0 < be.length && (H = new N(
            H,
            ve,
            null,
            u,
            Q
          ), k.push({ event: H, listeners: be }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (H = l === "mouseover" || l === "pointerover", N = l === "mouseout" || l === "pointerout", H && u !== Gi && (ve = u.relatedTarget || u.fromElement) && (ml(ve) || ve[Qc]))
            break e;
          if ((N || H) && (H = Q.window === Q ? Q : (H = Q.ownerDocument) ? H.defaultView || H.parentWindow : window, N ? (ve = u.relatedTarget || u.toElement, N = U, ve = ve ? ml(ve) : null, ve !== null && (it = K(ve), be = ve.tag, ve !== it || be !== 5 && be !== 27 && be !== 6) && (ve = null)) : (N = null, ve = U), N !== ve)) {
            if (be = Nh, L = "onMouseLeave", D = "onMouseEnter", x = "mouse", (l === "pointerout" || l === "pointerover") && (be = Tf, L = "onPointerLeave", D = "onPointerEnter", x = "pointer"), it = N == null ? H : rf(N), M = ve == null ? H : rf(ve), H = new be(
              L,
              x + "leave",
              N,
              u,
              Q
            ), H.target = it, H.relatedTarget = M, L = null, ml(Q) === U && (be = new be(
              D,
              x + "enter",
              ve,
              u,
              Q
            ), be.target = M, be.relatedTarget = it, L = be), it = L, N && ve)
              t: {
                for (be = N, D = ve, x = 0, M = be; M; M = gi(M))
                  x++;
                for (M = 0, L = D; L; L = gi(L))
                  M++;
                for (; 0 < x - M; )
                  be = gi(be), x--;
                for (; 0 < M - x; )
                  D = gi(D), M--;
                for (; x--; ) {
                  if (be === D || D !== null && be === D.alternate)
                    break t;
                  be = gi(be), D = gi(D);
                }
                be = null;
              }
            else be = null;
            N !== null && ps(
              k,
              H,
              N,
              be,
              !1
            ), ve !== null && it !== null && ps(
              k,
              it,
              ve,
              be,
              !0
            );
          }
        }
        e: {
          if (H = U ? rf(U) : window, N = H.nodeName && H.nodeName.toLowerCase(), N === "select" || N === "input" && H.type === "file")
            var le = Lh;
          else if (dr(H))
            if (Zh)
              le = Kh;
            else {
              le = Ju;
              var Ve = mr;
            }
          else
            N = H.nodeName, !N || N.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? U && Yi(U.elementType) && (le = Lh) : le = su;
          if (le && (le = le(l, U))) {
            hr(
              k,
              le,
              u,
              Q
            );
            break e;
          }
          Ve && Ve(l, H, U), l === "focusout" && U && H.type === "number" && U.memoizedProps.value != null && yf(H, "number", H.value);
        }
        switch (Ve = U ? rf(U) : window, l) {
          case "focusin":
            (dr(Ve) || Ve.contentEditable === "true") && (gn = Ve, Wa = U, Wu = null);
            break;
          case "focusout":
            Wu = Wa = gn = null;
            break;
          case "mousedown":
            Wi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wi = !1, yr(k, u, Q);
            break;
          case "selectionchange":
            if ($i) break;
          case "keydown":
          case "keyup":
            yr(k, u, Q);
        }
        var pe;
        if (Ef)
          e: {
            switch (l) {
              case "compositionstart":
                var xe = "onCompositionStart";
                break e;
              case "compositionend":
                xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                xe = "onCompositionUpdate";
                break e;
            }
            xe = void 0;
          }
        else
          ku ? xf(l, u) && (xe = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (xe = "onCompositionStart");
        xe && (yn && u.locale !== "ko" && (ku || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && ku && (pe = Hh()) : (ou = Q, $c = "value" in ou ? ou.value : ou.textContent, ku = !0)), Ve = wo(U, xe), 0 < Ve.length && (xe = new Bh(
          xe,
          l,
          null,
          u,
          Q
        ), k.push({ event: xe, listeners: Ve }), pe ? xe.data = pe : (pe = Zu(u), pe !== null && (xe.data = pe)))), (pe = Gh ? Xh(l, u) : ki(l, u)) && (xe = wo(U, "onBeforeInput"), 0 < xe.length && (Ve = new Bh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Q
        ), k.push({
          event: Ve,
          listeners: xe
        }), Ve.data = pe)), Sg(
          k,
          l,
          U,
          u,
          Q
        );
      }
      Ec(k, n);
    });
  }
  function zu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function wo(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Vi(l, u), s != null && c.unshift(
        zu(l, s, r)
      ), s = Vi(l, n), s != null && c.push(
        zu(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function gi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function ps(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var y = u, S = y.alternate, U = y.stateNode;
      if (y = y.tag, S !== null && S === c) break;
      y !== 5 && y !== 26 && y !== 27 || U === null || (S = U, s ? (U = Vi(u, r), U != null && m.unshift(
        zu(u, U, S)
      )) : s || (U = Vi(u, r), U != null && m.push(
        zu(u, U, S)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var ba = /\r\n?/g, my = /\u0000|\uFFFD/g;
  function Tg(l) {
    return (typeof l == "string" ? l : "" + l).replace(ba, `
`).replace(my, "");
  }
  function yy(l, n) {
    return n = Tg(n), Tg(l) === n;
  }
  function Od() {
  }
  function Ue(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Zc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Zc(l, "" + c);
        break;
      case "className":
        hf(l, "class", c);
        break;
      case "tabIndex":
        hf(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        hf(l, u, c);
        break;
      case "style":
        pf(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          hf(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = gf("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Ue(l, n, "name", s.name, s, null), Ue(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ue(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ue(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ue(l, n, "encType", s.encType, s, null), Ue(l, n, "method", s.method, s, null), Ue(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = gf("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Od);
        break;
      case "onScroll":
        c != null && Ne("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ne("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(b(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(b(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = gf("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        Ne("beforetoggle", l), Ne("toggle", l), iu(l, "popover", c);
        break;
      case "xlinkActuate":
        hn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        hn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        hn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        hn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        hn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        hn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        hn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        hn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        hn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        iu(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = O0.get(u) || u, iu(l, u, c));
    }
  }
  function B(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        pf(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(b(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(b(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Zc(l, c) : (typeof c == "number" || typeof c == "bigint") && Zc(l, "" + c);
        break;
      case "onScroll":
        c != null && Ne("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ne("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Od);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ra.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Bl] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : iu(l, u, c);
          }
    }
  }
  function Oe(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ne("error", l), Ne("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(b(137, n));
                default:
                  Ue(l, n, r, m, u, null);
              }
          }
        s && Ue(l, n, "srcSet", u.srcSet, u, null), c && Ue(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ne("invalid", l);
        var y = r = m = s = null, S = null, U = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var Q = u[c];
            if (Q != null)
              switch (c) {
                case "name":
                  s = Q;
                  break;
                case "type":
                  m = Q;
                  break;
                case "checked":
                  S = Q;
                  break;
                case "defaultChecked":
                  U = Q;
                  break;
                case "value":
                  r = Q;
                  break;
                case "defaultValue":
                  y = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(b(137, n));
                  break;
                default:
                  Ue(l, n, c, Q, u, null);
              }
          }
        tr(
          l,
          r,
          y,
          S,
          U,
          m,
          s,
          !1
        ), Qu(l);
        return;
      case "select":
        Ne("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (y = u[s], y != null))
            switch (s) {
              case "value":
                r = y;
                break;
              case "defaultValue":
                m = y;
                break;
              case "multiple":
                c = y;
              default:
                Ue(l, n, s, y, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? ji(l, !!c, n, !1) : u != null && ji(l, !!c, u, !0);
        return;
      case "textarea":
        Ne("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (y = u[m], y != null))
            switch (m) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                r = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(b(91));
                break;
              default:
                Ue(l, n, m, y, u, null);
            }
        Uh(l, c, s, r), Qu(l);
        return;
      case "option":
        for (S in u)
          if (u.hasOwnProperty(S) && (c = u[S], c != null))
            switch (S) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Ue(l, n, S, c, u, null);
            }
        return;
      case "dialog":
        Ne("beforetoggle", l), Ne("toggle", l), Ne("cancel", l), Ne("close", l);
        break;
      case "iframe":
      case "object":
        Ne("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < ys.length; c++)
          Ne(ys[c], l);
        break;
      case "image":
        Ne("error", l), Ne("load", l);
        break;
      case "details":
        Ne("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ne("error", l), Ne("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (U in u)
          if (u.hasOwnProperty(U) && (c = u[U], c != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(137, n));
              default:
                Ue(l, n, U, c, u, null);
            }
        return;
      default:
        if (Yi(n)) {
          for (Q in u)
            u.hasOwnProperty(Q) && (c = u[Q], c !== void 0 && B(
              l,
              n,
              Q,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (y in u)
      u.hasOwnProperty(y) && (c = u[y], c != null && Ue(l, n, y, c, u, null));
  }
  function Y0(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, m = null, y = null, S = null, U = null, Q = null;
        for (N in u) {
          var k = u[N];
          if (u.hasOwnProperty(N) && k != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = k;
              default:
                c.hasOwnProperty(N) || Ue(l, n, N, null, c, k);
            }
        }
        for (var H in c) {
          var N = c[H];
          if (k = u[H], c.hasOwnProperty(H) && (N != null || k != null))
            switch (H) {
              case "type":
                r = N;
                break;
              case "name":
                s = N;
                break;
              case "checked":
                U = N;
                break;
              case "defaultChecked":
                Q = N;
                break;
              case "value":
                m = N;
                break;
              case "defaultValue":
                y = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(b(137, n));
                break;
              default:
                N !== k && Ue(
                  l,
                  n,
                  H,
                  N,
                  c,
                  k
                );
            }
        }
        er(
          l,
          m,
          y,
          S,
          U,
          Q,
          r,
          s
        );
        return;
      case "select":
        N = m = y = H = null;
        for (r in u)
          if (S = u[r], u.hasOwnProperty(r) && S != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                N = S;
              default:
                c.hasOwnProperty(r) || Ue(
                  l,
                  n,
                  r,
                  null,
                  c,
                  S
                );
            }
        for (s in c)
          if (r = c[s], S = u[s], c.hasOwnProperty(s) && (r != null || S != null))
            switch (s) {
              case "value":
                H = r;
                break;
              case "defaultValue":
                y = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== S && Ue(
                  l,
                  n,
                  s,
                  r,
                  c,
                  S
                );
            }
        n = y, u = m, c = N, H != null ? ji(l, !!u, H, !1) : !!c != !!u && (n != null ? ji(l, !!u, n, !0) : ji(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        N = H = null;
        for (y in u)
          if (s = u[y], u.hasOwnProperty(y) && s != null && !c.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ue(l, n, y, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                H = s;
                break;
              case "defaultValue":
                N = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(b(91));
                break;
              default:
                s !== r && Ue(l, n, m, s, c, r);
            }
        Mh(l, H, N);
        return;
      case "option":
        for (var ve in u)
          if (H = u[ve], u.hasOwnProperty(ve) && H != null && !c.hasOwnProperty(ve))
            switch (ve) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Ue(
                  l,
                  n,
                  ve,
                  null,
                  c,
                  H
                );
            }
        for (S in c)
          if (H = c[S], N = u[S], c.hasOwnProperty(S) && H !== N && (H != null || N != null))
            switch (S) {
              case "selected":
                l.selected = H && typeof H != "function" && typeof H != "symbol";
                break;
              default:
                Ue(
                  l,
                  n,
                  S,
                  H,
                  c,
                  N
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var be in u)
          H = u[be], u.hasOwnProperty(be) && H != null && !c.hasOwnProperty(be) && Ue(l, n, be, null, c, H);
        for (U in c)
          if (H = c[U], N = u[U], c.hasOwnProperty(U) && H !== N && (H != null || N != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(b(137, n));
                break;
              default:
                Ue(
                  l,
                  n,
                  U,
                  H,
                  c,
                  N
                );
            }
        return;
      default:
        if (Yi(n)) {
          for (var it in u)
            H = u[it], u.hasOwnProperty(it) && H !== void 0 && !c.hasOwnProperty(it) && B(
              l,
              n,
              it,
              void 0,
              c,
              H
            );
          for (Q in c)
            H = c[Q], N = u[Q], !c.hasOwnProperty(Q) || H === N || H === void 0 && N === void 0 || B(
              l,
              n,
              Q,
              H,
              c,
              N
            );
          return;
        }
    }
    for (var D in u)
      H = u[D], u.hasOwnProperty(D) && H != null && !c.hasOwnProperty(D) && Ue(l, n, D, null, c, H);
    for (k in c)
      H = c[k], N = u[k], !c.hasOwnProperty(k) || H === N || H == null && N == null || Ue(l, n, k, H, c, N);
  }
  var gs = null, vs = null;
  function Ga(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ru(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function No(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Vn(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var _o = null;
  function Ou() {
    var l = window.event;
    return l && l.type === "popstate" ? l === _o ? !1 : (_o = l, !0) : (_o = null, !1);
  }
  var Dd = typeof setTimeout == "function" ? setTimeout : void 0, G0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Eg = typeof Promise == "function" ? Promise : void 0, V0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Eg < "u" ? function(l) {
    return Eg.resolve(null).then(l).catch(Xn);
  } : Dd;
  function Xn(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function vi(l) {
    return l === "head";
  }
  function Md(l, n) {
    var u = n, c = 0, s = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var m = l.ownerDocument;
            if (u & 1 && na(m.documentElement), u & 2 && na(m.body), u & 4)
              for (u = m.head, na(u), m = u.firstChild; m; ) {
                var y = m.nextSibling, S = m.nodeName;
                m[ce] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && m.rel.toLowerCase() === "stylesheet" || u.removeChild(m), m = y;
              }
          }
          if (s === 0) {
            l.removeChild(r), Ln(n);
            return;
          }
          s--;
        } else
          u === "$" || u === "$?" || u === "$!" ? s++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = r;
    } while (u);
    Ln(n);
  }
  function bs(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          bs(u), sf(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Bo(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[ce])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = cn(l.nextSibling), l === null) break;
    }
    return null;
  }
  function X0(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = cn(l.nextSibling), l === null)) return null;
    return l;
  }
  function Ss(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Q0(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function cn(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var bi = null;
  function Tl(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ee(l, n, u) {
    switch (n = Ga(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(b(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(b(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(b(454));
        return l;
      default:
        throw Error(b(451));
    }
  }
  function na(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    sf(l);
  }
  var Xt = /* @__PURE__ */ new Map(), Cl = /* @__PURE__ */ new Set();
  function Ud(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Du = Z.d;
  Z.d = {
    f: Cd,
    r: Hd,
    D: Mu,
    C: wd,
    L: Si,
    m: Hl,
    X: Ti,
    S: ua,
    M: py
  };
  function Cd() {
    var l = Du.f(), n = vc();
    return l || n;
  }
  function Hd(l) {
    var n = Ni(l);
    n !== null && n.tag === 5 && n.type === "form" ? mo(n) : Du.r(l);
  }
  var El = typeof document > "u" ? null : document;
  function on(l, n, u) {
    var c = El;
    if (c && typeof n == "string" && n) {
      var s = Ra(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Cl.has(s) || (Cl.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), Oe(n, "link", l), Ft(n), c.head.appendChild(n)));
    }
  }
  function Mu(l) {
    Du.D(l), on("dns-prefetch", l, null);
  }
  function wd(l, n) {
    Du.C(l, n), on("preconnect", l, n);
  }
  function Si(l, n, u) {
    Du.L(l, n, u);
    var c = El;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Ra(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Ra(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Ra(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Ra(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = qo(l);
          break;
        case "script":
          r = Va(l);
      }
      Xt.has(r) || (l = ne(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Xt.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(jo(r)) || n === "script" && c.querySelector(Ac(r)) || (n = c.createElement("link"), Oe(n, "link", l), Ft(n), c.head.appendChild(n)));
    }
  }
  function Hl(l, n) {
    Du.m(l, n);
    var u = El;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Ra(c) + '"][href="' + Ra(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Va(l);
      }
      if (!Xt.has(r) && (l = ne({ rel: "modulepreload", href: l }, n), Xt.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Ac(r)))
              return;
        }
        c = u.createElement("link"), Oe(c, "link", l), Ft(c), u.head.appendChild(c);
      }
    }
  }
  function ua(l, n, u) {
    Du.S(l, n, u);
    var c = El;
    if (c && l) {
      var s = uu(c).hoistableStyles, r = qo(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var y = { loading: 0, preload: null };
        if (m = c.querySelector(
          jo(r)
        ))
          y.loading = 5;
        else {
          l = ne(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Xt.get(r)) && _d(l, u);
          var S = m = c.createElement("link");
          Ft(S), Oe(S, "link", l), S._p = new Promise(function(U, Q) {
            S.onload = U, S.onerror = Q;
          }), S.addEventListener("load", function() {
            y.loading |= 1;
          }), S.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, Nd(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: y
        }, s.set(r, m);
      }
    }
  }
  function Ti(l, n) {
    Du.X(l, n);
    var u = El;
    if (u && l) {
      var c = uu(u).hoistableScripts, s = Va(l), r = c.get(s);
      r || (r = u.querySelector(Ac(s)), r || (l = ne({ src: l, async: !0 }, n), (n = Xt.get(s)) && Bd(l, n), r = u.createElement("script"), Ft(r), Oe(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function py(l, n) {
    Du.M(l, n);
    var u = El;
    if (u && l) {
      var c = uu(u).hoistableScripts, s = Va(l), r = c.get(s);
      r || (r = u.querySelector(Ac(s)), r || (l = ne({ src: l, async: !0, type: "module" }, n), (n = Xt.get(s)) && Bd(l, n), r = u.createElement("script"), Ft(r), Oe(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Ag(l, n, u, c) {
    var s = (s = Ze.current) ? Ud(s) : null;
    if (!s) throw Error(b(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = qo(u.href), u = uu(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = qo(u.href);
          var r = uu(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            jo(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Xt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Xt.set(l, u), r || xg(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(b(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(b(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Va(u), u = uu(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(b(444, l));
    }
  }
  function qo(l) {
    return 'href="' + Ra(l) + '"';
  }
  function jo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Yo(l) {
    return ne({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function xg(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), Oe(n, "link", u), Ft(n), l.head.appendChild(n));
  }
  function Va(l) {
    return '[src="' + Ra(l) + '"]';
  }
  function Ac(l) {
    return "script[async]" + l;
  }
  function zg(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Ra(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Ft(c), c;
          var s = ne({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Ft(c), Oe(c, "style", s), Nd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = qo(u.href);
          var r = l.querySelector(
            jo(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Ft(r), r;
          c = Yo(u), (s = Xt.get(s)) && _d(c, s), r = (l.ownerDocument || l).createElement("link"), Ft(r);
          var m = r;
          return m._p = new Promise(function(y, S) {
            m.onload = y, m.onerror = S;
          }), Oe(r, "link", c), n.state.loading |= 4, Nd(r, u.precedence, l), n.instance = r;
        case "script":
          return r = Va(u.src), (s = l.querySelector(
            Ac(r)
          )) ? (n.instance = s, Ft(s), s) : (c = u, (s = Xt.get(r)) && (c = ne({}, u), Bd(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Ft(s), Oe(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(b(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Nd(c, u.precedence, l));
    return n.instance;
  }
  function Nd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var y = c[m];
      if (y.dataset.precedence === n) r = y;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function _d(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Bd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Ei = null;
  function gy(l, n, u) {
    if (Ei === null) {
      var c = /* @__PURE__ */ new Map(), s = Ei = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Ei, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[ce] || r[ul] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var y = c.get(m);
        y ? y.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function vy(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function Rg(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function by(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Go = null;
  function Og() {
  }
  function Dg(l, n, u) {
    if (Go === null) throw Error(b(475));
    var c = Go;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = qo(u.href), r = l.querySelector(
          jo(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Ts.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, Ft(r);
          return;
        }
        r = l.ownerDocument || l, u = Yo(u), (s = Xt.get(s)) && _d(u, s), r = r.createElement("link"), Ft(r);
        var m = r;
        m._p = new Promise(function(y, S) {
          m.onload = y, m.onerror = S;
        }), Oe(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = Ts.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function Sy() {
    if (Go === null) throw Error(b(475));
    var l = Go;
    return l.stylesheets && l.count === 0 && Es(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && Es(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Ts() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Es(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Vo = null;
  function Es(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Vo = /* @__PURE__ */ new Map(), n.forEach(Sa, l), Vo = null, Ts.call(l));
  }
  function Sa(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Vo.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Vo.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = Ts.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var ia = {
    $$typeof: rt,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function L0(l, n, u, c, s, r, m, y) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yu(0), this.hiddenUpdates = Yu(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ty(l, n, u, c, s, r, m, y, S, U, Q, k) {
    return l = new L0(
      l,
      n,
      u,
      m,
      y,
      S,
      U,
      k
    ), n = 1, r === !0 && (n |= 24), r = $l(3, null, null, n), l.current = r, r.stateNode = l, n = oo(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Or(r), l;
  }
  function Ey(l) {
    return l ? (l = eo, l) : eo;
  }
  function Ay(l, n, u, c, s, r) {
    s = Ey(s), c.context === null ? c.context = s : c.pendingContext = s, c = Fl(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = Rn(l, c, n), u !== null && (va(u, l, n), lc(u, l, n));
  }
  function xy(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function qd(l, n) {
    xy(l, n), (l = l.alternate) && xy(l, n);
  }
  function zy(l) {
    if (l.tag === 13) {
      var n = Sn(l, 67108864);
      n !== null && va(n, l, 67108864), qd(l, 67108864);
    }
  }
  var As = !0;
  function Mg(l, n, u, c) {
    var s = z.T;
    z.T = null;
    var r = Z.p;
    try {
      Z.p = 2, Ry(l, n, u, c);
    } finally {
      Z.p = r, z.T = s;
    }
  }
  function Ug(l, n, u, c) {
    var s = z.T;
    z.T = null;
    var r = Z.p;
    try {
      Z.p = 8, Ry(l, n, u, c);
    } finally {
      Z.p = r, z.T = s;
    }
  }
  function Ry(l, n, u, c) {
    if (As) {
      var s = jd(c);
      if (s === null)
        Ya(
          l,
          n,
          c,
          Yd,
          u
        ), xc(l, c);
      else if (Hg(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (xc(l, c), n & 4 && -1 < Cg.indexOf(l)) {
        for (; s !== null; ) {
          var r = Ni(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = sa(r.pendingLanes);
                  if (m !== 0) {
                    var y = r;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; m; ) {
                      var S = 1 << 31 - kl(m);
                      y.entanglements[1] |= S, m &= ~S;
                    }
                    aa(r), (st & 6) === 0 && (yd = fa() + 500, ss(0));
                  }
                }
                break;
              case 13:
                y = Sn(r, 2), y !== null && va(y, r, 2), vc(), qd(r, 2);
            }
          if (r = jd(c), r === null && Ya(
            l,
            n,
            c,
            Yd,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        Ya(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function jd(l) {
    return l = ar(l), Oy(l);
  }
  var Yd = null;
  function Oy(l) {
    if (Yd = null, l = ml(l), l !== null) {
      var n = K(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = W(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Yd = l, null;
  }
  function Dy(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (uf()) {
          case Sp:
            return 2;
          case Eh:
            return 8;
          case cf:
          case Ah:
            return 32;
          case Gc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xo = !1, Qn = null, Uu = null, Cu = null, xs = /* @__PURE__ */ new Map(), zs = /* @__PURE__ */ new Map(), Ai = [], Cg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function xc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Qn = null;
        break;
      case "dragenter":
      case "dragleave":
        Uu = null;
        break;
      case "mouseover":
      case "mouseout":
        Cu = null;
        break;
      case "pointerover":
      case "pointerout":
        xs.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zs.delete(n.pointerId);
    }
  }
  function zc(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Ni(n), n !== null && zy(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function Hg(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Qn = zc(
          Qn,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Uu = zc(
          Uu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Cu = zc(
          Cu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return xs.set(
          r,
          zc(
            xs.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, zs.set(
          r,
          zc(
            zs.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function My(l) {
    var n = ml(l.target);
    if (n !== null) {
      var u = K(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = W(u), n !== null) {
            l.blockedOn = n, z0(l.priority, function() {
              if (u.tag === 13) {
                var c = ga();
                c = ka(c);
                var s = Sn(u, c);
                s !== null && va(s, u, c), qd(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Rs(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = jd(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Gi = c, u.target.dispatchEvent(c), Gi = null;
      } else
        return n = Ni(u), n !== null && zy(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Os(l, n, u) {
    Rs(l) && u.delete(n);
  }
  function Qo() {
    Xo = !1, Qn !== null && Rs(Qn) && (Qn = null), Uu !== null && Rs(Uu) && (Uu = null), Cu !== null && Rs(Cu) && (Cu = null), xs.forEach(Os), zs.forEach(Os);
  }
  function Gd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Xo || (Xo = !0, p.unstable_scheduleCallback(
      p.unstable_NormalPriority,
      Qo
    )));
  }
  var Rc = null;
  function Uy(l) {
    Rc !== l && (Rc = l, p.unstable_scheduleCallback(
      p.unstable_NormalPriority,
      function() {
        Rc === l && (Rc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (Oy(c || u) === null)
              continue;
            break;
          }
          var r = Ni(u);
          r !== null && (l.splice(n, 3), n -= 3, Jr(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Ln(l) {
    function n(S) {
      return Gd(S, l);
    }
    Qn !== null && Gd(Qn, l), Uu !== null && Gd(Uu, l), Cu !== null && Gd(Cu, l), xs.forEach(n), zs.forEach(n);
    for (var u = 0; u < Ai.length; u++) {
      var c = Ai[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ai.length && (u = Ai[0], u.blockedOn === null); )
      My(u), u.blockedOn === null && Ai.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[Bl] || null;
        if (typeof r == "function")
          m || Uy(u);
        else if (m) {
          var y = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[Bl] || null)
              y = m.formAction;
            else if (Oy(s) !== null) continue;
          } else y = m.action;
          typeof y == "function" ? u[c + 1] = y : (u.splice(c, 3), c -= 3), Uy(u);
        }
      }
  }
  function Cy(l) {
    this._internalRoot = l;
  }
  Vd.prototype.render = Cy.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(b(409));
    var u = n.current, c = ga();
    Ay(u, c, l, n, null, null);
  }, Vd.prototype.unmount = Cy.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Ay(l.current, 2, null, l, null, null), vc(), n[Qc] = null;
    }
  };
  function Vd(l) {
    this._internalRoot = l;
  }
  Vd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = xp();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ai.length && n !== 0 && n < Ai[u].priority; u++) ;
      Ai.splice(u, 0, l), u === 0 && My(l);
    }
  };
  var Hy = O.version;
  if (Hy !== "19.1.1")
    throw Error(
      b(
        527,
        Hy,
        "19.1.1"
      )
    );
  Z.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(b(188)) : (l = Object.keys(l).join(","), Error(b(268, l)));
    return l = Y(n), l = l !== null ? he(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Xl = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ds.isDisabled && Ds.supportsFiber)
      try {
        Vc = Ds.inject(
          Xl
        ), _l = Ds;
      } catch {
      }
  }
  return yp.createRoot = function(l, n) {
    if (!J(l)) throw Error(b(299));
    var u = !1, c = "", s = go, r = Mm, m = Pf, y = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (y = n.unstable_transitionCallbacks)), n = Ty(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      s,
      r,
      m,
      y,
      null
    ), l[Qc] = n.current, hy(l), new Cy(n);
  }, yp.hydrateRoot = function(l, n, u) {
    if (!J(l)) throw Error(b(299));
    var c = !1, s = "", r = go, m = Mm, y = Pf, S = null, U = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (y = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (S = u.unstable_transitionCallbacks), u.formState !== void 0 && (U = u.formState)), n = Ty(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      m,
      y,
      S,
      U
    ), n.context = Ey(null), u = n.current, c = ga(), c = ka(c), s = Fl(c), s.callback = null, Rn(u, s, c), u = c, n.current.lanes = u, wi(n, u), aa(n), l[Qc] = n.current, hy(l), new Vd(n);
  }, yp.version = "19.1.1", yp;
}
var pp = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nS;
function K2() {
  return nS || (nS = 1, process.env.NODE_ENV !== "production" && (function() {
    function p(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function O(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = Ue(e) ? e.slice() : Ye({}, e);
      return f[o] = O(e[o], t, a + 1, i), f;
    }
    function R(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return b(e, t, a, 0);
      }
    }
    function b(e, t, a, i) {
      var o = t[i], f = Ue(e) ? e.slice() : Ye({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Ue(f) ? f.splice(o, 1) : delete f[o]) : f[o] = b(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function J(e, t, a) {
      var i = t[a], o = Ue(e) ? e.slice() : Ye({}, e);
      return a + 1 === t.length ? (Ue(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = J(e[i], t, a + 1), o);
    }
    function K() {
      return !1;
    }
    function W() {
      return null;
    }
    function ie() {
    }
    function Y() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function he() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function ne() {
    }
    function Se(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function me(e, t, a, i) {
      return new Af(e, t, a, i);
    }
    function Qe(e, t) {
      e.context === Lo && (ht(e.current, 2, t, e, null, null), dc());
    }
    function He(e, t) {
      if (kn !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, vo(), Ef(
          e.current,
          t,
          a
        ), dc();
      }
    }
    function lt(e) {
      kn = e;
    }
    function ze(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function je(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Kt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function rt(e) {
      if (je(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Et(e) {
      var t = e.alternate;
      if (!t) {
        if (t = je(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return rt(o), e;
            if (f === i) return rt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function ye(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = ye(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Me(e) {
      return e === null || typeof e != "object" ? null : (e = yy && e[yy] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Te(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Od ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ne:
          return "Fragment";
        case Ho:
          return "Profiler";
        case Co:
          return "StrictMode";
        case wo:
          return "Suspense";
        case gi:
          return "SuspenseList";
        case my:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Ec:
            return "Portal";
          case Ya:
            return (e.displayName || "Context") + ".Provider";
          case Rd:
            return (e._context.displayName || "Context") + ".Consumer";
          case zu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ps:
            return t = e.displayName || null, t !== null ? t : Te(e.type) || "Memo";
          case ba:
            t = e._payload, e = e._init;
            try {
              return Te(e(t));
            } catch {
            }
        }
      return null;
    }
    function ue(e) {
      return typeof e.tag == "number" ? P(e) : typeof e.name == "string" ? e.name : null;
    }
    function P(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Te(t);
        case 8:
          return t === Co ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return P(e.return);
      }
      return null;
    }
    function Le(e) {
      return { current: e };
    }
    function Ie(e, t) {
      0 > Ga ? console.error("Unexpected pop.") : (t !== vs[Ga] && console.error("Unexpected Fiber popped."), e.current = gs[Ga], gs[Ga] = null, vs[Ga] = null, Ga--);
    }
    function Re(e, t, a) {
      Ga++, gs[Ga] = e.current, vs[Ga] = a, e.current = t;
    }
    function Qt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function $t(e, t) {
      Re(Vn, t, e), Re(No, e, e), Re(Ru, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? dt(t) : Bc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = dt(t), t = ta(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = yh;
                break;
              case "math":
                t = o0;
                break;
              default:
                t = Bc;
            }
      }
      a = a.toLowerCase(), a = Mh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Ie(Ru, e), Re(Ru, a, e);
    }
    function St(e) {
      Ie(Ru, e), Ie(No, e), Ie(Vn, e);
    }
    function z() {
      return Qt(Ru.current);
    }
    function Z(e) {
      e.memoizedState !== null && Re(_o, e, e);
      var t = Qt(Ru.current), a = e.type, i = ta(t.context, a);
      a = Mh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Re(No, e, e), Re(Ru, i, e));
    }
    function q(e) {
      No.current === e && (Ie(Ru, e), Ie(No, e)), _o.current === e && (Ie(_o, e), sp._currentValue = ks);
    }
    function ge(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function _(e) {
      try {
        return ae(e), !1;
      } catch {
        return !0;
      }
    }
    function ae(e) {
      return "" + e;
    }
    function F(e, t) {
      if (_(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ge(e)
        ), ae(e);
    }
    function te(e, t) {
      if (_(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ge(e)
        ), ae(e);
    }
    function Ee(e) {
      if (_(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          ge(e)
        ), ae(e);
    }
    function ot(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        bi = t.inject(e), Tl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ze(e) {
      if (typeof Q0 == "function" && cn(e), Tl && typeof Tl.setStrictMode == "function")
        try {
          Tl.setStrictMode(bi, e);
        } catch (t) {
          na || (na = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function vt(e) {
      ee = e;
    }
    function At() {
      ee !== null && typeof ee.markCommitStopped == "function" && ee.markCommitStopped();
    }
    function Nt(e) {
      ee !== null && typeof ee.markComponentRenderStarted == "function" && ee.markComponentRenderStarted(e);
    }
    function hl() {
      ee !== null && typeof ee.markComponentRenderStopped == "function" && ee.markComponentRenderStopped();
    }
    function Za(e) {
      ee !== null && typeof ee.markRenderStarted == "function" && ee.markRenderStarted(e);
    }
    function lu() {
      ee !== null && typeof ee.markRenderStopped == "function" && ee.markRenderStopped();
    }
    function Ui(e, t) {
      ee !== null && typeof ee.markStateUpdateScheduled == "function" && ee.markStateUpdateScheduled(e, t);
    }
    function Th(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Ud(e) / Du | 0) | 0;
    }
    function E0(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Ci(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function fa(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Ci(i) : (d &= h, d !== 0 ? o = Ci(d) : a || (a = h & ~e, a !== 0 && (o = Ci(a))))) : (h = i & ~f, h !== 0 ? o = Ci(h) : d !== 0 ? o = Ci(d) : a || (a = i & ~e, a !== 0 && (o = Ci(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function uf(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Sp(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Eh() {
      var e = Cd;
      return Cd <<= 1, (Cd & 4194048) === 0 && (Cd = 256), e;
    }
    function cf() {
      var e = Hd;
      return Hd <<= 1, (Hd & 62914560) === 0 && (Hd = 4194304), e;
    }
    function Ah(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Gc(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function A0(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, g = e.expirationTimes, v = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var w = 31 - Cl(a), G = 1 << w;
        h[w] = 0, g[w] = -1;
        var C = v[w];
        if (C !== null)
          for (v[w] = null, w = 0; w < C.length; w++) {
            var V = C[w];
            V !== null && (V.lane &= -536870913);
          }
        a &= ~G;
      }
      i !== 0 && Tp(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function Tp(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Cl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function Vc(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Cl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function _l(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function au(e, t, a) {
      if (Xt)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Cl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function kl(e, t) {
      if (Xt)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Cl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function xh(e) {
      return e &= -e, El < e ? on < e ? (e & 134217727) !== 0 ? Mu : wd : on : El;
    }
    function Ep() {
      var e = Oe.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Mu : xd(e.type));
    }
    function x0(e, t) {
      var a = Oe.p;
      try {
        return Oe.p = e, t();
      } finally {
        Oe.p = a;
      }
    }
    function Xc(e) {
      delete e[Hl], delete e[ua], delete e[py], delete e[Ag], delete e[qo];
    }
    function nu(e) {
      var t = e[Hl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ti] || a[Hl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Oo(e); e !== null; ) {
              if (a = e[Hl])
                return a;
              e = Oo(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function sa(e) {
      if (e = e[Hl] || e[Ti]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function qu(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function dn(e) {
      var t = e[jo];
      return t || (t = e[jo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function nl(e) {
      e[Yo] = !0;
    }
    function ju(e, t) {
      Hi(e, t), Hi(e + "Capture", t);
    }
    function Hi(e, t) {
      Va[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Va[e] = t;
      var a = e.toLowerCase();
      for (Ac[a] = e, e === "onDoubleClick" && (Ac.ondblclick = e), e = 0; e < t.length; e++)
        xg.add(t[e]);
    }
    function Yu(e, t) {
      zg[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function wi(e) {
      return Ou.call(Bd, e) ? !0 : Ou.call(_d, e) ? !1 : Nd.test(e) ? Bd[e] = !0 : (_d[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Ap(e, t, a) {
      if (wi(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (F(a, t), e === "" + a ? a : e);
      }
    }
    function of(e, t, a) {
      if (wi(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          F(a, t), e.setAttribute(t, "" + a);
        }
    }
    function ff(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        F(a, t), e.setAttribute(t, "" + a);
      }
    }
    function ka(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        F(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function $s() {
    }
    function xp() {
      if (Ei === 0) {
        gy = console.log, vy = console.info, Rg = console.warn, by = console.error, Go = console.group, Og = console.groupCollapsed, Dg = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: $s,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Ei++;
    }
    function z0() {
      if (Ei--, Ei === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ye({}, e, { value: gy }),
          info: Ye({}, e, { value: vy }),
          warn: Ye({}, e, { value: Rg }),
          error: Ye({}, e, { value: by }),
          group: Ye({}, e, { value: Go }),
          groupCollapsed: Ye({}, e, { value: Og }),
          groupEnd: Ye({}, e, { value: Dg })
        });
      }
      0 > Ei && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Wt(e) {
      if (Sy === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Sy = t && t[1] || "", Ts = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Sy + e + Ts;
    }
    function ul(e, t) {
      if (!e || Vo) return "";
      var a = Es.get(e);
      if (a !== void 0) return a;
      Vo = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = B.H, B.H = null, xp();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var C = function() {
                  throw Error();
                };
                if (Object.defineProperty(C.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(C, []);
                  } catch (oe) {
                    var V = oe;
                  }
                  Reflect.construct(e, [], C);
                } else {
                  try {
                    C.call();
                  } catch (oe) {
                    V = oe;
                  }
                  e.call(C.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (oe) {
                  V = oe;
                }
                (C = e()) && typeof C.catch == "function" && C.catch(function() {
                });
              }
            } catch (oe) {
              if (oe && V && typeof oe.stack == "string")
                return [oe.stack, V.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], g = d[1];
        if (h && g) {
          var v = h.split(`
`), w = g.split(`
`);
          for (d = f = 0; f < v.length && !v[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < w.length && !w[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === v.length || d === w.length)
            for (f = v.length - 1, d = w.length - 1; 1 <= f && 0 <= d && v[f] !== w[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (v[f] !== w[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || v[f] !== w[d]) {
                    var G = `
` + v[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), typeof e == "function" && Es.set(e, G), G;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Vo = !1, B.H = i, z0(), Error.prepareStackTrace = a;
      }
      return v = (v = e ? e.displayName || e.name : "") ? Wt(v) : "", typeof e == "function" && Es.set(e, v), v;
    }
    function Bl(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function Qc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Wt(e.type);
        case 16:
          return Wt("Lazy");
        case 13:
          return Wt("Suspense");
        case 19:
          return Wt("SuspenseList");
        case 0:
        case 15:
          return ul(e.type, !1);
        case 11:
          return ul(e.type.render, !1);
        case 1:
          return ul(e.type, !0);
        case 31:
          return Wt("Activity");
        default:
          return "";
      }
    }
    function Ws(e) {
      try {
        var t = "";
        do {
          t += Qc(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = Wt(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (g) {
        return `
Error generating stack: ` + g.message + `
` + g.stack;
      }
    }
    function zp(e) {
      return (e = e ? e.displayName || e.name : "") ? Wt(e) : "";
    }
    function Fs() {
      if (Sa === null) return null;
      var e = Sa._debugOwner;
      return e != null ? ue(e) : null;
    }
    function Rp() {
      if (Sa === null) return "";
      var e = Sa;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += Wt(e.type);
            break;
          case 13:
            t += Wt("Suspense");
            break;
          case 19:
            t += Wt("SuspenseList");
            break;
          case 31:
            t += Wt("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += zp(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += zp(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = Bl(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Bl(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function ce(e, t, a, i, o, f, d) {
      var h = Sa;
      sf(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        sf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function sf(e) {
      B.getCurrentStack = e === null ? null : Rp, ia = !1, Sa = e;
    }
    function ml(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Ee(e), e;
        default:
          return "";
      }
    }
    function Ni(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function rf(e) {
      var t = Ni(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      Ee(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Ee(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            Ee(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function uu(e) {
      e._valueTracker || (e._valueTracker = rf(e));
    }
    function Ft(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Ni(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function df(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function ra(e) {
      return e.replace(
        L0,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Gu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Ey || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Fs() || "A component",
        t.type
      ), Ey = !0), t.value === void 0 || t.defaultValue === void 0 || Ty || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Fs() || "A component",
        t.type
      ), Ty = !0);
    }
    function Vu(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (F(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ml(t)) : e.value !== "" + ml(t) && (e.value = "" + ml(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Is(e, d, ml(t)) : a != null ? Is(e, d, ml(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (F(h, "name"), e.name = "" + ml(h)) : e.removeAttribute("name");
    }
    function Op(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (F(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + ml(a) : "", t = t != null ? "" + ml(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (F(d, "name"), e.name = d);
    }
    function Is(e, t, a) {
      t === "number" && df(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function zh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ms.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || xy || (xy = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || qd || (qd = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Ay || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Ay = !0);
    }
    function Dp() {
      var e = Fs();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function iu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + ml(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function hf(e, t) {
      for (e = 0; e < As.length; e++) {
        var a = As[e];
        if (t[a] != null) {
          var i = Ue(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Dp()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Dp()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || zy || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), zy = !0);
    }
    function hn(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || Mg || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Fs() || "A component"
      ), Mg = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Ps(e, t, a) {
      if (t != null && (t = "" + ml(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + ml(a) : "";
    }
    function Rh(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Ue(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = ml(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function _i(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? _i(e.children[0], t) : e;
    }
    function ql(e) {
      return "  " + "  ".repeat(e);
    }
    function Xu(e) {
      return "+ " + "  ".repeat(e);
    }
    function Bi(e) {
      return "- " + "  ".repeat(e);
    }
    function Oh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Ol(e, t) {
      return Ug.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function mf(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Xu(a) + Ol(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Xu(a) + Ol(e, i) + `
` + Bi(a) + Ol(t, i) + `
`;
      }
      return ql(a) + Ol(e, i) + `
`;
    }
    function Dh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Qu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Ue(e)) return "[...]";
          if (e.$$typeof === pi)
            return (t = Te(e.type)) ? "<" + t + ">" : "<...>";
          var a = Dh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Qu(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function qi(e, t) {
      return typeof e != "string" || Ug.test(e) ? "{" + Qu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Lc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = qi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function R0(e, t, a) {
      var i = "", o = Ye({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Qu(e[f], d);
          t.hasOwnProperty(f) ? (d = Qu(t[f], d), i += Xu(a) + f + ": " + h + `
`, i += Bi(a) + f + ": " + d + `
`) : i += Xu(a) + f + ": " + h + `
`;
        }
      for (var g in o)
        o.hasOwnProperty(g) && (e = Qu(
          o[g],
          120 - 2 * a - g.length - 2
        ), i += Bi(a) + g + ": " + e + `
`);
      return i;
    }
    function Ra(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (v in a)
        a.hasOwnProperty(v) && f.set(
          v.toLowerCase(),
          v
        );
      if (f.size === 1 && f.has("children"))
        o += Lc(
          e,
          t,
          ql(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, g = f.get(d.toLowerCase());
            if (g !== void 0) {
              f.delete(d.toLowerCase());
              var v = t[d];
              g = a[g];
              var w = qi(
                v,
                h
              );
              h = qi(
                g,
                h
              ), typeof v == "object" && v !== null && typeof g == "object" && g !== null && Dh(v) === "Object" && Dh(g) === "Object" && (2 < Object.keys(v).length || 2 < Object.keys(g).length || -1 < w.indexOf("...") || -1 < h.indexOf("...")) ? o += ql(i + 1) + d + `={{
` + R0(
                v,
                g,
                i + 2
              ) + ql(i + 1) + `}}
` : (o += Xu(i + 1) + d + "=" + w + `
`, o += Bi(i + 1) + d + "=" + h + `
`);
            } else
              o += ql(i + 1) + d + "=" + qi(t[d], h) + `
`;
          }
        f.forEach(function(G) {
          if (G !== "children") {
            var C = 120 - 2 * (i + 1) - G.length - 1;
            o += Bi(i + 1) + G + "=" + qi(a[G], C) + `
`;
          }
        }), o = o === "" ? ql(i) + "<" + e + `>
` : ql(i) + "<" + e + `
` + o + ql(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += mf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + mf("" + t, null, i + 1) : o + mf("" + t, void 0, i + 1)), o;
    }
    function er(e, t) {
      var a = Oh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += er(e, t), e = e.sibling;
        return a;
      }
      return ql(t) + "<" + a + `>
`;
    }
    function tr(e, t) {
      var a = _i(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return ql(t) + `...
` + tr(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += ql(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = mf(o, e.serverProps, t), t++;
      else if (f = Oh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (v in o)
            if (o.hasOwnProperty(v) && v !== "children") {
              var g = qi(o[v], 15);
              if (d -= v.length + g.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + v + "=" + g;
            }
          i = ql(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Lc(
            f,
            o,
            Xu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Ra(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var v = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (v += tr(d, t), f++) : v += er(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (v += ql(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], v = typeof f == "string" ? v + (Bi(t) + Ol(f, 120 - 2 * t) + `
`) : v + Lc(
          f.type,
          f.props,
          Bi(t)
        );
      return a + i + v;
    }
    function yf(e) {
      try {
        return `

` + tr(e, 0);
      } catch {
        return "";
      }
    }
    function ji(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? yf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Mh(e, t) {
      var a = Ye({}, e || Dy), i = { tag: t };
      return jd.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Yd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Ry.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Uh(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return Oy.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Zc(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Mp(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function lr(e, t) {
      t = t || Dy;
      var a = t.current;
      if (t = (a = Uh(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Zc(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, Xo[t]) return !1;
      Xo[t] = !0;
      var o = (t = Sa) ? Mp(t.return, i) : null, f = t !== null && o !== null ? ji(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || ce(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function pf(e, t, a) {
      if (a || Uh("#text", t, !1))
        return !0;
      if (a = "#text|" + t, Xo[a]) return !1;
      Xo[a] = !0;
      var i = (a = Sa) ? Mp(a, t) : null;
      return a = a !== null && i !== null ? ji(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Yi(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function O0(e) {
      return e.replace(Ai, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Up(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? xc.hasOwnProperty(t) && xc[t] || (xc[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        O0(t.replace(zs, "ms-"))
      )) : xs.test(t) ? xc.hasOwnProperty(t) && xc[t] || (xc[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !Cg.test(a) || zc.hasOwnProperty(a) && zc[a] || (zc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(Cg, "")
      )), typeof a == "number" && (isNaN(a) ? Hg || (Hg = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || My || (My = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Rs.has(t) ? t === "float" ? e.cssFloat = a : (te(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function gf(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = Qn[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = Qn[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var g in t)
            for (o = Qn[g] || [g], f = 0; f < o.length; f++)
              h[o[f]] = g;
          g = {};
          for (var v in i)
            if (o = i[v], (f = h[v]) && o !== f && (d = o + "," + f, !g[d])) {
              g[d] = !0, d = console;
              var w = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                w == null || typeof w == "boolean" || w === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var G in a)
          !a.hasOwnProperty(G) || t != null && t.hasOwnProperty(G) || (G.indexOf("--") === 0 ? e.setProperty(G, "") : G === "float" ? e.cssFloat = "" : e[G] = "");
        for (var C in t)
          v = t[C], t.hasOwnProperty(C) && a[C] !== v && Up(e, C, v);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Up(e, i, t[i]);
    }
    function Gi(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function ar(e) {
      return Gd.get(e) || e;
    }
    function kc(e, t) {
      if (Ou.call(Ln, t) && Ln[t])
        return !0;
      if (Vd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Uy.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Ln[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Ln[t] = !0;
      }
      if (Cy.test(t)) {
        if (e = t.toLowerCase(), e = Uy.hasOwnProperty(e) ? e : null, e == null) return Ln[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Ln[t] = !0);
      }
      return !0;
    }
    function Jc(e, t) {
      var a = [], i;
      for (i in t)
        kc(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Cp(e, t, a, i) {
      if (Ou.call(Xl, t) && Xl[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Xl[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Xl[t] = !0;
        if (Ds.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Xl[t] = !0;
      } else if (Ds.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Xl[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Xl[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Xl[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Xl[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Xl[t] = !0;
      if (Rc.hasOwnProperty(o)) {
        if (o = Rc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Xl[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Xl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Xl[t] = !0);
          }
        case "function":
        case "symbol":
          return Xl[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Xl[t] = !0;
          }
      }
      return !0;
    }
    function Ch(e, t, a) {
      var i = [], o;
      for (o in t)
        Cp(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Kc(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Vi(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function mn(e) {
      var t = sa(e);
      if (t && (e = t.stateNode)) {
        var a = e[ua] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Vu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (F(t, "name"), a = a.querySelectorAll(
                'input[name="' + ra(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[ua] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Vu(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && Ft(i);
            }
            break e;
          case "textarea":
            Ps(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && iu(e, !!a.multiple, t, !1);
        }
      }
    }
    function nr(e, t, a) {
      if (y) return e(t, a);
      y = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (y = !1, (r !== null || m !== null) && (dc(), r && (t = r, e = m, m = r = null, mn(t), e)))
          for (t = 0; t < e.length; t++) mn(e[t]);
      }
    }
    function cu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[ua] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function ou() {
      if (N) return N;
      var e, t = H, a = t.length, i, o = "value" in k ? k.value : k.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return N = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function $c(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Xi() {
      return !0;
    }
    function Hh() {
      return !1;
    }
    function yl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Xi : Hh, this.isPropagationStopped = Hh, this;
      }
      return Ye(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Xi);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Xi);
        },
        persist: function() {
        },
        isPersistent: Xi
      }), t;
    }
    function ur(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = XS[e]) ? !!t[e] : !1;
    }
    function ir() {
      return ur;
    }
    function jl(e, t) {
      switch (e) {
        case "keyup":
          return e2.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== tb;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Lu(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function cr(e, t) {
      switch (e) {
        case "compositionend":
          return Lu(t);
        case "keypress":
          return t.which !== ab ? null : (ub = !0, nb);
        case "textInput":
          return e = t.data, e === nb && ub ? null : e;
        default:
          return null;
      }
    }
    function vf(e, t) {
      if (Xd)
        return e === "compositionend" || !k0 && jl(e, t) ? (e = ou(), N = H = k = null, Xd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return lb && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Hp(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!l2[e.type] : t === "textarea";
    }
    function wh(e) {
      if (!S) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function or(e, t, a, i) {
      r ? m ? m.push(i) : m = [i] : r = i, t = us(t, "onChange"), 0 < t.length && (a = new be(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function bf(e) {
      _n(e, 0);
    }
    function Qi(e) {
      var t = qu(e);
      if (Ft(t)) return e;
    }
    function Nh(e, t) {
      if (e === "change") return t;
    }
    function wp() {
      Ny && (Ny.detachEvent("onpropertychange", Np), _y = Ny = null);
    }
    function Np(e) {
      if (e.propertyName === "value" && Qi(_y)) {
        var t = [];
        or(
          t,
          _y,
          e,
          Vi(e)
        ), nr(bf, t);
      }
    }
    function D0(e, t, a) {
      e === "focusin" ? (wp(), Ny = t, _y = a, Ny.attachEvent("onpropertychange", Np)) : e === "focusout" && wp();
    }
    function _h(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Qi(_y);
    }
    function M0(e, t) {
      if (e === "click") return Qi(t);
    }
    function U0(e, t) {
      if (e === "input" || e === "change")
        return Qi(t);
    }
    function C0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Sf(e, t) {
      if (Ta(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!Ou.call(t, o) || !Ta(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function _p(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Bh(e, t) {
      var a = _p(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = _p(a);
      }
    }
    function Bp(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function qp(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = df(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = df(e.document);
      }
      return t;
    }
    function qh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function jp(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      K0 || Qd == null || Qd !== df(i) || (i = Qd, "selectionStart" in i && qh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), By && Sf(By, i) || (By = i, i = us(J0, "onSelect"), 0 < i.length && (t = new be(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Qd)));
    }
    function fu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Li(e) {
      if ($0[e]) return $0[e];
      if (!Ld[e]) return e;
      var t = Ld[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in cb)
          return $0[e] = t[a];
      return e;
    }
    function Ja(e, t) {
      db.set(e, t), ju(t, [e]);
    }
    function da(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = F0.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Ws(t)
        }, F0.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Ws(t)
      };
    }
    function Tf() {
      for (var e = Zd, t = I0 = Zd = 0; t < e; ) {
        var a = Zn[t];
        Zn[t++] = null;
        var i = Zn[t];
        Zn[t++] = null;
        var o = Zn[t];
        Zn[t++] = null;
        var f = Zn[t];
        if (Zn[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Yp(a, o, f);
      }
    }
    function fr(e, t, a, i) {
      Zn[Zd++] = e, Zn[Zd++] = t, Zn[Zd++] = a, Zn[Zd++] = i, I0 |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function jh(e, t, a, i) {
      return fr(e, t, a, i), sr(e);
    }
    function Jl(e, t) {
      return fr(e, null, null, t), sr(e);
    }
    function Yp(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & wg || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Cl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function sr(e) {
      if (np > z2)
        throw Vs = np = 0, up = Dv = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Vs > R2 && (Vs = 0, up = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && un(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && un(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Zi(e) {
      if (kn === null) return e;
      var t = kn(e);
      return t === void 0 ? e : t.current;
    }
    function Yh(e) {
      if (kn === null) return e;
      var t = kn(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Zi(e.render), e.render !== t) ? (t = { $$typeof: zu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Gp(e, t) {
      if (kn === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === ba) && (i = !0);
          break;
        case 11:
          (o === zu || o === ba) && (i = !0);
          break;
        case 14:
        case 15:
          (o === ps || o === ba) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = kn(a), e !== void 0 && e === kn(t)));
    }
    function Vp(e) {
      kn !== null && typeof WeakSet == "function" && (kd === null && (kd = /* @__PURE__ */ new WeakSet()), kd.add(e));
    }
    function Ef(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, g = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          g = h;
          break;
        case 11:
          g = h.render;
      }
      if (kn === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var v = !1;
      h = !1, g !== null && (g = kn(g), g !== void 0 && (a.has(g) ? h = !0 : t.has(g) && (d === 1 ? h = !0 : v = !0))), kd !== null && (kd.has(e) || i !== null && kd.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || v) && (i = Jl(e, 2), i !== null && qt(i, e, 2)), o === null || h || Ef(
        o,
        t,
        a
      ), f !== null && Ef(
        f,
        t,
        a
      );
    }
    function Af(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, mb || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Gh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function yn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = me(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Zi(e.type);
          break;
        case 1:
          a.type = Zi(e.type);
          break;
        case 11:
          a.type = Yh(e.type);
      }
      return a;
    }
    function Vh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function rr(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Gh(e) && (d = 1), h = Zi(h);
      else if (typeof e == "string")
        d = z(), d = Mo(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case my:
            return t = me(31, a, t, o), t.elementType = my, t.lanes = f, t;
          case Ne:
            return Zu(
              a.children,
              o,
              f,
              t
            );
          case Co:
            d = 8, o |= ca, o |= Hu;
            break;
          case Ho:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = me(12, e, t, i | Ql), t.elementType = Ho, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case wo:
            return t = me(13, a, t, o), t.elementType = wo, t.lanes = f, t;
          case gi:
            return t = me(19, a, t, o), t.elementType = gi, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case hy:
                case Ya:
                  d = 10;
                  break e;
                case Rd:
                  d = 9;
                  break e;
                case zu:
                  d = 11, h = Yh(h);
                  break e;
                case ps:
                  d = 14;
                  break e;
                case ba:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Ue(e) ? a = "array" : e !== void 0 && e.$$typeof === pi ? (a = "<" + (Te(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? ue(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = me(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function xf(e, t, a) {
      return t = rr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Zu(e, t, a, i) {
      return e = me(7, e, i, t), e.lanes = a, e;
    }
    function ku(e, t, a) {
      return e = me(6, e, null, t), e.lanes = a, e;
    }
    function Xh(e, t, a) {
      return t = me(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function ki(e, t) {
      Ka(), Jd[Kd++] = _g, Jd[Kd++] = Ng, Ng = e, _g = t;
    }
    function Xp(e, t, a) {
      Ka(), Jn[Kn++] = Dc, Jn[Kn++] = Mc, Jn[Kn++] = Ms, Ms = e;
      var i = Dc;
      e = Mc;
      var o = 32 - Cl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Cl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Dc = 1 << 32 - Cl(t) + o | a << o | i, Mc = f + e;
      } else
        Dc = 1 << f | a << o | i, Mc = e;
    }
    function dr(e) {
      Ka(), e.return !== null && (ki(e, 1), Xp(e, 1, 0));
    }
    function hr(e) {
      for (; e === Ng; )
        Ng = Jd[--Kd], Jd[Kd] = null, _g = Jd[--Kd], Jd[Kd] = null;
      for (; e === Ms; )
        Ms = Jn[--Kn], Jn[Kn] = null, Mc = Jn[--Kn], Jn[Kn] = null, Dc = Jn[--Kn], Jn[Kn] = null;
    }
    function Ka() {
      ct || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function $a(e, t) {
      if (e.return === null) {
        if ($n === null)
          $n = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if ($n.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          $n.distanceFromLeaf > t && ($n.distanceFromLeaf = t);
        }
        return $n;
      }
      var a = $a(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Qh(e, t) {
      Uc || (e = $a(e, 0), e.serverProps = null, t !== null && (t = pd(t), e.serverTail.push(t)));
    }
    function pn(e) {
      var t = "", a = $n;
      throw a !== null && ($n = null, t = yf(a)), Wc(
        da(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), P0;
    }
    function Lh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Hl] = e, t[ua] = i, Bn(a, i), a) {
        case "dialog":
          ke("cancel", t), ke("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          ke("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < ip.length; a++)
            ke(ip[a], t);
          break;
        case "source":
          ke("error", t);
          break;
        case "img":
        case "image":
        case "link":
          ke("error", t), ke("load", t);
          break;
        case "details":
          ke("toggle", t);
          break;
        case "input":
          Yu("input", i), ke("invalid", t), Gu(t, i), Op(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), uu(t);
          break;
        case "option":
          zh(t, i);
          break;
        case "select":
          Yu("select", i), ke("invalid", t), hf(t, i);
          break;
        case "textarea":
          Yu("textarea", i), ke("invalid", t), hn(t, i), Rh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), uu(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || km(t.textContent, a) ? (i.popover != null && (ke("beforetoggle", t), ke("toggle", t)), i.onScroll != null && ke("scroll", t), i.onScrollEnd != null && ke("scrollend", t), i.onClick != null && (t.onclick = Tu), t = !0) : t = !1, t || pn(e);
    }
    function Zh(e) {
      for (Ea = e.return; Ea; )
        switch (Ea.tag) {
          case 5:
          case 13:
            zi = !1;
            return;
          case 27:
          case 3:
            zi = !0;
            return;
          default:
            Ea = Ea.return;
        }
    }
    function Ji(e) {
      if (e !== Ea) return !1;
      if (!ct)
        return Zh(e), ct = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || qn(e.type, e.memoizedProps)), a = !a), a && kt) {
        for (a = kt; a; ) {
          var i = $a(e, 0), o = pd(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? ey(a) : Sl(a.nextSibling);
        }
        pn(e);
      }
      if (Zh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        kt = ey(e);
      } else
        t === 27 ? (t = kt, jn(e.type) ? (e = Gv, Gv = null, kt = e) : kt = t) : kt = Ea ? Sl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Ki() {
      kt = Ea = null, Uc = ct = !1;
    }
    function kh() {
      var e = Us;
      return e !== null && (za === null ? za = e : za.push.apply(
        za,
        e
      ), Us = null), e;
    }
    function Wc(e) {
      Us === null ? Us = [e] : Us.push(e);
    }
    function Jh() {
      var e = $n;
      if (e !== null) {
        $n = null;
        for (var t = yf(e); 0 < e.children.length; )
          e = e.children[0];
        ce(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function mr() {
      $d = Bg = null, Wd = !1;
    }
    function Ju(e, t, a) {
      Re(ev, t._currentValue, e), t._currentValue = a, Re(tv, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== vb && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = vb;
    }
    function su(e, t) {
      e._currentValue = ev.current;
      var a = tv.current;
      Ie(tv, t), e._currentRenderer = a, Ie(ev, t);
    }
    function Kh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function $h(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var g = 0; g < t.length; g++)
              if (h.context === t[g]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Kh(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Kh(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function pl(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            Ta(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === _o.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(sp) : e = [sp]);
        }
        o = o.return;
      }
      e !== null && $h(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Ku(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Ta(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function $u(e) {
      Bg = e, $d = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function xt(e) {
      return Wd && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Wh(Bg, e);
    }
    function zf(e, t) {
      return Bg === null && $u(e), Wh(e, t);
    }
    function Wh(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, $d === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        $d = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else $d = $d.next = t;
      return a;
    }
    function Rf() {
      return {
        controller: new s2(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function $i(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function gn(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && r2(d2, function() {
        e.controller.abort();
      });
    }
    function Wa() {
      var e = Cs;
      return Cs = 0, e;
    }
    function Wu(e) {
      var t = Cs;
      return Cs = e, t;
    }
    function Wi(e) {
      var t = Cs;
      return Cs += e, t;
    }
    function yr(e) {
      Xa = Fd(), 0 > e.actualStartTime && (e.actualStartTime = Xa);
    }
    function ru(e) {
      if (0 <= Xa) {
        var t = Fd() - Xa;
        e.actualDuration += t, e.selfBaseDuration = t, Xa = -1;
      }
    }
    function Fi(e) {
      if (0 <= Xa) {
        var t = Fd() - Xa;
        e.actualDuration += t, Xa = -1;
      }
    }
    function Oa() {
      if (0 <= Xa) {
        var e = Fd() - Xa;
        Xa = -1, Cs += e;
      }
    }
    function Fa() {
      Xa = Fd();
    }
    function vn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Qp(e, t) {
      if (qy === null) {
        var a = qy = [];
        lv = 0, Hs = Vm(), Id = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return lv++, t.then(Fh, Fh), t;
    }
    function Fh() {
      if (--lv === 0 && qy !== null) {
        Id !== null && (Id.status = "fulfilled");
        var e = qy;
        qy = null, Hs = 0, Id = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Lp(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Ih() {
      var e = ws.current;
      return e !== null ? e : zt.pooledCache;
    }
    function pr(e, t) {
      t === null ? Re(ws, ws.current, e) : Re(ws, t.pool, e);
    }
    function Zp() {
      var e = Ih();
      return e === null ? null : { parent: Al._currentValue, pool: e };
    }
    function Ph() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function em(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Fc() {
    }
    function Da(e, t, a) {
      B.actQueue !== null && (B.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Fc, Fc), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, ha(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Fc, Fc);
          else {
            if (e = zt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, ha(e), e;
          }
          throw Zy = t, Xg = !0, Ly;
      }
    }
    function tm() {
      if (Zy === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Zy;
      return Zy = null, Xg = !1, e;
    }
    function ha(e) {
      if (e === Ly || e === Vg)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Kl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Fu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function bn(e) {
      return {
        lane: e,
        tag: Ab,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Ia(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, uv === i && !Rb) {
        var o = P(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), Rb = !0;
      }
      return (mt & xa) !== fn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = sr(e), Yp(e, null, a), t) : (fr(e, i, t, a), sr(e));
    }
    function Iu(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Vc(e, a);
      }
    }
    function Ic(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Sn() {
      if (iv) {
        var e = Id;
        if (e !== null) throw e;
      }
    }
    function Pc(e, t, a, i) {
      iv = !1;
      var o = e.updateQueue;
      Zo = !1, uv = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var g = h, v = g.next;
        g.next = null, d === null ? f = v : d.next = v, d = g;
        var w = e.alternate;
        w !== null && (w = w.updateQueue, h = w.lastBaseUpdate, h !== d && (h === null ? w.firstBaseUpdate = v : h.next = v, w.lastBaseUpdate = g));
      }
      if (f !== null) {
        var G = o.baseState;
        d = 0, w = v = g = null, h = f;
        do {
          var C = h.lane & -536870913, V = C !== h.lane;
          if (V ? (Fe & C) === C : (i & C) === C) {
            C !== 0 && C === Hs && (iv = !0), w !== null && (w = w.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              C = e;
              var oe = h, De = t, Rt = a;
              switch (oe.tag) {
                case xb:
                  if (oe = oe.payload, typeof oe == "function") {
                    Wd = !0;
                    var et = oe.call(
                      Rt,
                      G,
                      De
                    );
                    if (C.mode & ca) {
                      Ze(!0);
                      try {
                        oe.call(Rt, G, De);
                      } finally {
                        Ze(!1);
                      }
                    }
                    Wd = !1, G = et;
                    break e;
                  }
                  G = oe;
                  break e;
                case nv:
                  C.flags = C.flags & -65537 | 128;
                case Ab:
                  if (et = oe.payload, typeof et == "function") {
                    if (Wd = !0, oe = et.call(
                      Rt,
                      G,
                      De
                    ), C.mode & ca) {
                      Ze(!0);
                      try {
                        et.call(Rt, G, De);
                      } finally {
                        Ze(!1);
                      }
                    }
                    Wd = !1;
                  } else oe = et;
                  if (oe == null) break e;
                  G = Ye({}, G, oe);
                  break e;
                case zb:
                  Zo = !0;
              }
            }
            C = h.callback, C !== null && (e.flags |= 64, V && (e.flags |= 8192), V = o.callbacks, V === null ? o.callbacks = [C] : V.push(C));
          } else
            V = {
              lane: C,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, w === null ? (v = w = V, g = G) : w = w.next = V, d |= C;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            V = h, h = V.next, V.next = null, o.lastBaseUpdate = V, o.shared.pending = null;
          }
        } while (!0);
        w === null && (g = G), o.baseState = g, o.firstBaseUpdate = v, o.lastBaseUpdate = w, f === null && (o.shared.lanes = 0), $o |= d, e.lanes = d, e.memoizedState = G;
      }
      uv = null;
    }
    function Of(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function eo(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Of(a[e], t);
    }
    function kp(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Of(a[e], t);
    }
    function $l(e, t) {
      var a = Di;
      Re(Qg, a, e), Re(Pd, t, e), Di = a | t.baseLanes;
    }
    function Df(e) {
      Re(Qg, Di, e), Re(
        Pd,
        Pd.current,
        e
      );
    }
    function Pa(e) {
      Di = Qg.current, Ie(Pd, e), Ie(Qg, e);
    }
    function Ge() {
      var e = j;
      In === null ? In = [e] : In.push(e);
    }
    function $() {
      var e = j;
      if (In !== null && (Hc++, In[Hc] !== e)) {
        var t = P(Ce);
        if (!Ob.has(t) && (Ob.add(t), In !== null)) {
          for (var a = "", i = 0; i <= Hc; i++) {
            var o = In[i], f = i === Hc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Ma(e) {
      e == null || Ue(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        j,
        typeof e
      );
    }
    function to() {
      var e = P(Ce);
      Mb.has(e) || (Mb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function Ct() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Pu(e, t) {
      if (Jy) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          j
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        j,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ta(e[a], t[a])) return !1;
      return !0;
    }
    function ei(e, t, a, i, o, f) {
      ko = f, Ce = t, In = e !== null ? e._debugHookTypes : null, Hc = -1, Jy = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = P(Ce), cv.has(f) || (cv.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, B.H = e !== null && e.memoizedState !== null ? fv : In !== null ? Ub : ov, _s = f = (t.mode & ca) !== Mt;
      var d = sv(a, i, o);
      if (_s = !1, th && (d = lo(
        t,
        a,
        i,
        o
      )), f) {
        Ze(!0);
        try {
          d = lo(
            t,
            a,
            i,
            o
          );
        } finally {
          Ze(!1);
        }
      }
      return Mf(e, t), d;
    }
    function Mf(e, t) {
      t._debugHookTypes = In, t.dependencies === null ? Cc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Cc
      }) : t.dependencies._debugThenableState = Cc, B.H = kg;
      var a = Tt !== null && Tt.next !== null;
      if (ko = 0, In = j = rl = Tt = Ce = null, Hc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Lg = !1, ky = 0, Cc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || wl || (e = e.dependencies, e !== null && Ku(e) && (wl = !0)), Xg ? (Xg = !1, e = !0) : e = !1, e && (t = P(t) || "Unknown", Db.has(t) || cv.has(t) || (Db.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function lo(e, t, a, i) {
      Ce = e;
      var o = 0;
      do {
        if (th && (Cc = null), ky = 0, th = !1, o >= m2)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Jy = !1, rl = Tt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Hc = -1, B.H = Cb, f = sv(t, a, i);
      } while (th);
      return f;
    }
    function Ua() {
      var e = B.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Ii(t) : t, e = e.useState()[0], (Tt !== null ? Tt.memoizedState : null) !== e && (Ce.flags |= 1024), t;
    }
    function Wl() {
      var e = Zg !== 0;
      return Zg = 0, e;
    }
    function du(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Hu) !== Mt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function en(e) {
      if (Lg) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Lg = !1;
      }
      ko = 0, In = rl = Tt = Ce = null, Hc = -1, j = null, th = !1, ky = Zg = 0, Cc = null;
    }
    function _t() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return rl === null ? Ce.memoizedState = rl = e : rl = rl.next = e, rl;
    }
    function Pe() {
      if (Tt === null) {
        var e = Ce.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Tt.next;
      var t = rl === null ? Ce.memoizedState : rl.next;
      if (t !== null)
        rl = t, Tt = e;
      else {
        if (e === null)
          throw Ce.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Tt = e, e = {
          memoizedState: Tt.memoizedState,
          baseState: Tt.baseState,
          baseQueue: Tt.baseQueue,
          queue: Tt.queue,
          next: null
        }, rl === null ? Ce.memoizedState = rl = e : rl = rl.next = e;
      }
      return rl;
    }
    function gr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Ii(e) {
      var t = ky;
      return ky += 1, Cc === null && (Cc = Ph()), e = Da(Cc, e, t), t = Ce, (rl === null ? t.memoizedState : rl.next) === null && (t = t.alternate, B.H = t !== null && t.memoizedState !== null ? fv : ov), e;
    }
    function Tn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Ii(e);
        if (e.$$typeof === Ya) return xt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Lt(e) {
      var t = null, a = Ce.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Ce.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = gr(), Ce.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Jy)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = Tg;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function nt(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function at(e, t, a) {
      var i = _t();
      if (a !== void 0) {
        var o = a(t);
        if (_s) {
          Ze(!0);
          try {
            a(t);
          } finally {
            Ze(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = sm.bind(
        null,
        Ce,
        e
      ), [i.memoizedState, e];
    }
    function Ca(e) {
      var t = Pe();
      return Ha(t, Tt, e);
    }
    function Ha(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, g = null, v = t, w = !1;
        do {
          var G = v.lane & -536870913;
          if (G !== v.lane ? (Fe & G) === G : (ko & G) === G) {
            var C = v.revertLane;
            if (C === 0)
              g !== null && (g = g.next = {
                lane: 0,
                revertLane: 0,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }), G === Hs && (w = !0);
            else if ((ko & C) === C) {
              v = v.next, C === Hs && (w = !0);
              continue;
            } else
              G = {
                lane: 0,
                revertLane: v.revertLane,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }, g === null ? (h = g = G, d = f) : g = g.next = G, Ce.lanes |= C, $o |= C;
            G = v.action, _s && a(f, G), f = v.hasEagerState ? v.eagerState : a(f, G);
          } else
            C = {
              lane: G,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, g === null ? (h = g = C, d = f) : g = g.next = C, Ce.lanes |= G, $o |= G;
          v = v.next;
        } while (v !== null && v !== t);
        if (g === null ? d = f : g.next = h, !Ta(f, e.memoizedState) && (wl = !0, w && (a = Id, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = g, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Pi(e) {
      var t = Pe(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        Ta(f, t.memoizedState) || (wl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function hu(e, t, a) {
      var i = Ce, o = _t();
      if (ct) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        eh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), eh = !0);
      } else {
        if (f = t(), eh || (a = t(), Ta(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), eh = !0)), zt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Fe & 124) !== 0 || lm(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Sr(
        no.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, An(
        Fn | xl,
        li(),
        ao.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Uf(e, t, a) {
      var i = Ce, o = Pe(), f = ct;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !eh) {
        var d = t();
        Ta(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), eh = !0);
      }
      (d = !Ta(
        (Tt || o).memoizedState,
        a
      )) && (o.memoizedState = a, wl = !0), o = o.queue;
      var h = no.bind(null, i, o, e);
      if (Pt(2048, xl, h, [e]), o.getSnapshot !== t || d || rl !== null && rl.memoizedState.tag & Fn) {
        if (i.flags |= 2048, An(
          Fn | xl,
          li(),
          ao.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), zt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (ko & 124) !== 0 || lm(i, t, a);
      }
      return a;
    }
    function lm(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ce.updateQueue, t === null ? (t = gr(), Ce.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ao(e, t, a, i) {
      t.value = a, t.getSnapshot = i, am(t) && uo(e);
    }
    function no(e, t, a) {
      return a(function() {
        am(t) && uo(e);
      });
    }
    function am(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !Ta(e, a);
      } catch {
        return !0;
      }
    }
    function uo(e) {
      var t = Jl(e, 2);
      t !== null && qt(t, e, 2);
    }
    function Cf(e) {
      var t = _t();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), _s) {
          Ze(!0);
          try {
            a();
          } finally {
            Ze(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nt,
        lastRenderedState: e
      }, t;
    }
    function mu(e) {
      e = Cf(e);
      var t = e.queue, a = fo.bind(null, Ce, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function tn(e) {
      var t = _t();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Mr.bind(
        null,
        Ce,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function yu(e, t) {
      var a = Pe();
      return En(a, Tt, e, t);
    }
    function En(e, t, a, i) {
      return e.baseState = a, Ha(
        e,
        Tt,
        typeof i == "function" ? i : nt
      );
    }
    function vr(e, t) {
      var a = Pe();
      return Tt !== null ? En(a, Tt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function nm(e, t, a, i, o) {
      if (jf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        B.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, io(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function io(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = B.T, d = {};
        B.T = d, B.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), g = B.S;
          g !== null && g(d, h), Hf(e, t, h);
        } catch (v) {
          il(e, t, v);
        } finally {
          B.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Hf(e, t, d);
        } catch (v) {
          il(e, t, v);
        }
    }
    function Hf(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          ti(e, t, i);
        },
        function(i) {
          return il(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : ti(e, t, a);
    }
    function ti(e, t, a) {
      t.status = "fulfilled", t.value = a, wf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, io(e, a)));
    }
    function il(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, wf(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function wf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function um(e, t) {
      return t;
    }
    function co(e, t) {
      if (ct) {
        var a = zt.formState;
        if (a !== null) {
          e: {
            var i = Ce;
            if (ct) {
              if (kt) {
                t: {
                  for (var o = kt, f = zi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = Sl(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === Bv || f === M1 ? o : null;
                }
                if (o) {
                  kt = Sl(
                    o.nextSibling
                  ), i = o.data === Bv;
                  break e;
                }
              }
              pn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = _t(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: um,
        lastRenderedState: t
      }, a.queue = i, a = fo.bind(
        null,
        Ce,
        i
      ), i.dispatch = a, i = Cf(!1), f = Mr.bind(
        null,
        Ce,
        !1,
        i.queue
      ), i = _t(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = nm.bind(
        null,
        Ce,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function br(e) {
      var t = Pe();
      return Jp(t, Tt, e);
    }
    function Jp(e, t, a) {
      if (t = Ha(
        e,
        t,
        um
      )[0], e = Ca(nt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Ii(t);
        } catch (d) {
          throw d === Ly ? Vg : d;
        }
      else i = t;
      t = Pe();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Ce.flags |= 2048, An(
        Fn | xl,
        li(),
        It.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function It(e, t) {
      e.action = t;
    }
    function oo(e) {
      var t = Pe(), a = Tt;
      if (a !== null)
        return Jp(t, a, e);
      Pe(), t = t.memoizedState, a = Pe();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function An(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = Ce.updateQueue, t === null && (t = gr(), Ce.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function li() {
      return { destroy: void 0, resource: void 0 };
    }
    function Nf(e) {
      var t = _t();
      return e = { current: e }, t.memoizedState = e;
    }
    function wa(e, t, a, i) {
      var o = _t();
      i = i === void 0 ? null : i, Ce.flags |= e, o.memoizedState = An(
        Fn | t,
        li(),
        a,
        i
      );
    }
    function Pt(e, t, a, i) {
      var o = Pe();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Tt !== null && i !== null && Pu(i, Tt.memoizedState.deps) ? o.memoizedState = An(t, f, a, i) : (Ce.flags |= e, o.memoizedState = An(
        Fn | t,
        f,
        a,
        i
      ));
    }
    function Sr(e, t) {
      (Ce.mode & Hu) !== Mt && (Ce.mode & hb) === Mt ? wa(276826112, xl, e, t) : wa(8390656, xl, e, t);
    }
    function Tr(e, t) {
      var a = 4194308;
      return (Ce.mode & Hu) !== Mt && (a |= 134217728), wa(a, Ll, e, t);
    }
    function Kp(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Er(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Ce.mode & Hu) !== Mt && (i |= 134217728), wa(
        i,
        Ll,
        Kp.bind(null, t, e),
        a
      );
    }
    function xn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Pt(
        4,
        Ll,
        Kp.bind(null, t, e),
        a
      );
    }
    function _f(e, t) {
      return _t().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ec(e, t) {
      var a = Pe();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && Pu(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function Ar(e, t) {
      var a = _t();
      t = t === void 0 ? null : t;
      var i = e();
      if (_s) {
        Ze(!0);
        try {
          e();
        } finally {
          Ze(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function ai(e, t) {
      var a = Pe();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && Pu(t, i[1]))
        return i[0];
      if (i = e(), _s) {
        Ze(!0);
        try {
          e();
        } finally {
          Ze(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function xr(e, t) {
      var a = _t();
      return Rr(a, e, t);
    }
    function Bf(e, t) {
      var a = Pe();
      return qf(
        a,
        Tt.memoizedState,
        e,
        t
      );
    }
    function zr(e, t) {
      var a = Pe();
      return Tt === null ? Rr(a, e, t) : qf(
        a,
        Tt.memoizedState,
        e,
        t
      );
    }
    function Rr(e, t, a) {
      return a === void 0 || (ko & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = ng(), Ce.lanes |= e, $o |= e, a);
    }
    function qf(e, t, a, i) {
      return Ta(a, t) ? a : Pd.current !== null ? (e = Rr(e, a, i), Ta(e, t) || (wl = !0), e) : (ko & 42) === 0 ? (wl = !0, e.memoizedState = a) : (e = ng(), Ce.lanes |= e, $o |= e, t);
    }
    function im(e, t, a, i, o) {
      var f = Oe.p;
      Oe.p = f !== 0 && f < on ? f : on;
      var d = B.T, h = {};
      B.T = h, Mr(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var g = o(), v = B.S;
        if (v !== null && v(h, g), g !== null && typeof g == "object" && typeof g.then == "function") {
          var w = Lp(
            g,
            i
          );
          pu(
            e,
            t,
            w,
            ea(e)
          );
        } else
          pu(
            e,
            t,
            i,
            ea(e)
          );
      } catch (G) {
        pu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: G },
          ea(e)
        );
      } finally {
        Oe.p = f, B.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function tc(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = cm(e).queue;
      im(
        e,
        o,
        t,
        ks,
        a === null ? ne : function() {
          return om(e), a(i);
        }
      );
    }
    function cm(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: ks,
        baseState: ks,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: nt,
          lastRenderedState: ks
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: nt,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function om(e) {
      B.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = cm(e).next.queue;
      pu(
        e,
        t,
        {},
        ea(e)
      );
    }
    function zn() {
      var e = Cf(!1);
      return e = im.bind(
        null,
        Ce,
        e.queue,
        !0,
        !1
      ), _t().memoizedState = e, [!1, e];
    }
    function Or() {
      var e = Ca(nt)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ii(e),
        t
      ];
    }
    function Dr() {
      var e = Pi(nt)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ii(e),
        t
      ];
    }
    function Fl() {
      return xt(sp);
    }
    function Rn() {
      var e = _t(), t = zt.identifierPrefix;
      if (ct) {
        var a = Mc, i = Dc;
        a = (i & ~(1 << 32 - Cl(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Zg++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = h2++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function lc() {
      return _t().memoizedState = fm.bind(
        null,
        Ce
      );
    }
    function fm(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ea(a);
            e = bn(i);
            var o = Ia(a, e, i);
            o !== null && (qt(o, a, i), Iu(o, a, i)), a = Rf(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function sm(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ea(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      jf(e) ? ac(t, o) : (o = jh(e, t, o, i), o !== null && (qt(o, e, i), Yf(o, t, i))), Ui(e, i);
    }
    function fo(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ea(e), pu(e, t, a, i), Ui(e, i);
    }
    function pu(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (jf(e)) ac(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = B.H;
          B.H = Nu;
          try {
            var h = t.lastRenderedState, g = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = g, Ta(g, h))
              return fr(e, t, o, 0), zt === null && Tf(), !1;
          } catch {
          } finally {
            B.H = d;
          }
        }
        if (a = jh(e, t, o, i), a !== null)
          return qt(a, e, i), Yf(a, t, i), !0;
      }
      return !1;
    }
    function Mr(e, t, a, i) {
      if (B.T === null && Hs === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Vm(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, jf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = jh(
          e,
          a,
          i,
          2
        ), t !== null && qt(t, e, 2);
      Ui(e, 2);
    }
    function jf(e) {
      var t = e.alternate;
      return e === Ce || t !== null && t === Ce;
    }
    function ac(e, t) {
      th = Lg = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Yf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Vc(e, a);
      }
    }
    function cl(e) {
      var t = Xe;
      return e != null && (Xe = t === null ? e : t.concat(e)), t;
    }
    function so(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = xf(e, a.mode, 0), t._debugInfo = Xe, t.return = a), ce(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function ro(e) {
      var t = Ky;
      return Ky += 1, lh === null && (lh = Ph()), Da(lh, e, t);
    }
    function Na(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function we(e, t) {
      throw t.$$typeof === ys ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function ft(e, t) {
      var a = P(e) || "Component";
      kb[a] || (kb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Ht(e, t) {
      var a = P(e) || "Component";
      Jb[a] || (Jb[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Gf(e) {
      function t(T, E) {
        if (e) {
          var A = T.deletions;
          A === null ? (T.deletions = [E], T.flags |= 16) : A.push(E);
        }
      }
      function a(T, E) {
        if (!e) return null;
        for (; E !== null; )
          t(T, E), E = E.sibling;
        return null;
      }
      function i(T) {
        for (var E = /* @__PURE__ */ new Map(); T !== null; )
          T.key !== null ? E.set(T.key, T) : E.set(T.index, T), T = T.sibling;
        return E;
      }
      function o(T, E) {
        return T = yn(T, E), T.index = 0, T.sibling = null, T;
      }
      function f(T, E, A) {
        return T.index = A, e ? (A = T.alternate, A !== null ? (A = A.index, A < E ? (T.flags |= 67108866, E) : A) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
      }
      function d(T) {
        return e && T.alternate === null && (T.flags |= 67108866), T;
      }
      function h(T, E, A, X) {
        return E === null || E.tag !== 6 ? (E = ku(
          A,
          T.mode,
          X
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = Xe, E) : (E = o(E, A), E.return = T, E._debugInfo = Xe, E);
      }
      function g(T, E, A, X) {
        var I = A.type;
        return I === Ne ? (E = w(
          T,
          E,
          A.props.children,
          X,
          A.key
        ), so(A, E, T), E) : E !== null && (E.elementType === I || Gp(E, A) || typeof I == "object" && I !== null && I.$$typeof === ba && Jo(I) === E.type) ? (E = o(E, A.props), Na(E, A), E.return = T, E._debugOwner = A._owner, E._debugInfo = Xe, E) : (E = xf(A, T.mode, X), Na(E, A), E.return = T, E._debugInfo = Xe, E);
      }
      function v(T, E, A, X) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== A.containerInfo || E.stateNode.implementation !== A.implementation ? (E = Xh(A, T.mode, X), E.return = T, E._debugInfo = Xe, E) : (E = o(E, A.children || []), E.return = T, E._debugInfo = Xe, E);
      }
      function w(T, E, A, X, I) {
        return E === null || E.tag !== 7 ? (E = Zu(
          A,
          T.mode,
          X,
          I
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = Xe, E) : (E = o(E, A), E.return = T, E._debugInfo = Xe, E);
      }
      function G(T, E, A) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = ku(
            "" + E,
            T.mode,
            A
          ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = Xe, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case pi:
              return A = xf(
                E,
                T.mode,
                A
              ), Na(A, E), A.return = T, T = cl(E._debugInfo), A._debugInfo = Xe, Xe = T, A;
            case Ec:
              return E = Xh(
                E,
                T.mode,
                A
              ), E.return = T, E._debugInfo = Xe, E;
            case ba:
              var X = cl(E._debugInfo);
              return E = Jo(E), T = G(T, E, A), Xe = X, T;
          }
          if (Ue(E) || Me(E))
            return A = Zu(
              E,
              T.mode,
              A,
              null
            ), A.return = T, A._debugOwner = T, A._debugTask = T._debugTask, T = cl(E._debugInfo), A._debugInfo = Xe, Xe = T, A;
          if (typeof E.then == "function")
            return X = cl(E._debugInfo), T = G(
              T,
              ro(E),
              A
            ), Xe = X, T;
          if (E.$$typeof === Ya)
            return G(
              T,
              zf(T, E),
              A
            );
          we(T, E);
        }
        return typeof E == "function" && ft(T, E), typeof E == "symbol" && Ht(T, E), null;
      }
      function C(T, E, A, X) {
        var I = E !== null ? E.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
          return I !== null ? null : h(T, E, "" + A, X);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case pi:
              return A.key === I ? (I = cl(A._debugInfo), T = g(
                T,
                E,
                A,
                X
              ), Xe = I, T) : null;
            case Ec:
              return A.key === I ? v(T, E, A, X) : null;
            case ba:
              return I = cl(A._debugInfo), A = Jo(A), T = C(
                T,
                E,
                A,
                X
              ), Xe = I, T;
          }
          if (Ue(A) || Me(A))
            return I !== null ? null : (I = cl(A._debugInfo), T = w(
              T,
              E,
              A,
              X,
              null
            ), Xe = I, T);
          if (typeof A.then == "function")
            return I = cl(A._debugInfo), T = C(
              T,
              E,
              ro(A),
              X
            ), Xe = I, T;
          if (A.$$typeof === Ya)
            return C(
              T,
              E,
              zf(T, A),
              X
            );
          we(T, A);
        }
        return typeof A == "function" && ft(T, A), typeof A == "symbol" && Ht(T, A), null;
      }
      function V(T, E, A, X, I) {
        if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
          return T = T.get(A) || null, h(E, T, "" + X, I);
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case pi:
              return A = T.get(
                X.key === null ? A : X.key
              ) || null, T = cl(X._debugInfo), E = g(
                E,
                A,
                X,
                I
              ), Xe = T, E;
            case Ec:
              return T = T.get(
                X.key === null ? A : X.key
              ) || null, v(E, T, X, I);
            case ba:
              var _e = cl(X._debugInfo);
              return X = Jo(X), E = V(
                T,
                E,
                A,
                X,
                I
              ), Xe = _e, E;
          }
          if (Ue(X) || Me(X))
            return A = T.get(A) || null, T = cl(X._debugInfo), E = w(
              E,
              A,
              X,
              I,
              null
            ), Xe = T, E;
          if (typeof X.then == "function")
            return _e = cl(X._debugInfo), E = V(
              T,
              E,
              A,
              ro(X),
              I
            ), Xe = _e, E;
          if (X.$$typeof === Ya)
            return V(
              T,
              E,
              A,
              zf(E, X),
              I
            );
          we(E, X);
        }
        return typeof X == "function" && ft(E, X), typeof X == "symbol" && Ht(E, X), null;
      }
      function oe(T, E, A, X) {
        if (typeof A != "object" || A === null) return X;
        switch (A.$$typeof) {
          case pi:
          case Ec:
            ie(T, E, A);
            var I = A.key;
            if (typeof I != "string") break;
            if (X === null) {
              X = /* @__PURE__ */ new Set(), X.add(I);
              break;
            }
            if (!X.has(I)) {
              X.add(I);
              break;
            }
            ce(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                I
              );
            });
            break;
          case ba:
            A = Jo(A), oe(T, E, A, X);
        }
        return X;
      }
      function De(T, E, A, X) {
        for (var I = null, _e = null, fe = null, Be = E, qe = E = 0, Ut = null; Be !== null && qe < A.length; qe++) {
          Be.index > qe ? (Ut = Be, Be = null) : Ut = Be.sibling;
          var al = C(
            T,
            Be,
            A[qe],
            X
          );
          if (al === null) {
            Be === null && (Be = Ut);
            break;
          }
          I = oe(
            T,
            al,
            A[qe],
            I
          ), e && Be && al.alternate === null && t(T, Be), E = f(al, E, qe), fe === null ? _e = al : fe.sibling = al, fe = al, Be = Ut;
        }
        if (qe === A.length)
          return a(T, Be), ct && ki(T, qe), _e;
        if (Be === null) {
          for (; qe < A.length; qe++)
            Be = G(T, A[qe], X), Be !== null && (I = oe(
              T,
              Be,
              A[qe],
              I
            ), E = f(
              Be,
              E,
              qe
            ), fe === null ? _e = Be : fe.sibling = Be, fe = Be);
          return ct && ki(T, qe), _e;
        }
        for (Be = i(Be); qe < A.length; qe++)
          Ut = V(
            Be,
            T,
            qe,
            A[qe],
            X
          ), Ut !== null && (I = oe(
            T,
            Ut,
            A[qe],
            I
          ), e && Ut.alternate !== null && Be.delete(
            Ut.key === null ? qe : Ut.key
          ), E = f(
            Ut,
            E,
            qe
          ), fe === null ? _e = Ut : fe.sibling = Ut, fe = Ut);
        return e && Be.forEach(function(jc) {
          return t(T, jc);
        }), ct && ki(T, qe), _e;
      }
      function Rt(T, E, A, X) {
        if (A == null)
          throw Error("An iterable object provided no iterator.");
        for (var I = null, _e = null, fe = E, Be = E = 0, qe = null, Ut = null, al = A.next(); fe !== null && !al.done; Be++, al = A.next()) {
          fe.index > Be ? (qe = fe, fe = null) : qe = fe.sibling;
          var jc = C(T, fe, al.value, X);
          if (jc === null) {
            fe === null && (fe = qe);
            break;
          }
          Ut = oe(
            T,
            jc,
            al.value,
            Ut
          ), e && fe && jc.alternate === null && t(T, fe), E = f(jc, E, Be), _e === null ? I = jc : _e.sibling = jc, _e = jc, fe = qe;
        }
        if (al.done)
          return a(T, fe), ct && ki(T, Be), I;
        if (fe === null) {
          for (; !al.done; Be++, al = A.next())
            fe = G(T, al.value, X), fe !== null && (Ut = oe(
              T,
              fe,
              al.value,
              Ut
            ), E = f(
              fe,
              E,
              Be
            ), _e === null ? I = fe : _e.sibling = fe, _e = fe);
          return ct && ki(T, Be), I;
        }
        for (fe = i(fe); !al.done; Be++, al = A.next())
          qe = V(
            fe,
            T,
            Be,
            al.value,
            X
          ), qe !== null && (Ut = oe(
            T,
            qe,
            al.value,
            Ut
          ), e && qe.alternate !== null && fe.delete(
            qe.key === null ? Be : qe.key
          ), E = f(
            qe,
            E,
            Be
          ), _e === null ? I = qe : _e.sibling = qe, _e = qe);
        return e && fe.forEach(function(G2) {
          return t(T, G2);
        }), ct && ki(T, Be), I;
      }
      function et(T, E, A, X) {
        if (typeof A == "object" && A !== null && A.type === Ne && A.key === null && (so(A, null, T), A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case pi:
              var I = cl(A._debugInfo);
              e: {
                for (var _e = A.key; E !== null; ) {
                  if (E.key === _e) {
                    if (_e = A.type, _e === Ne) {
                      if (E.tag === 7) {
                        a(
                          T,
                          E.sibling
                        ), X = o(
                          E,
                          A.props.children
                        ), X.return = T, X._debugOwner = A._owner, X._debugInfo = Xe, so(A, X, T), T = X;
                        break e;
                      }
                    } else if (E.elementType === _e || Gp(
                      E,
                      A
                    ) || typeof _e == "object" && _e !== null && _e.$$typeof === ba && Jo(_e) === E.type) {
                      a(
                        T,
                        E.sibling
                      ), X = o(E, A.props), Na(X, A), X.return = T, X._debugOwner = A._owner, X._debugInfo = Xe, T = X;
                      break e;
                    }
                    a(T, E);
                    break;
                  } else t(T, E);
                  E = E.sibling;
                }
                A.type === Ne ? (X = Zu(
                  A.props.children,
                  T.mode,
                  X,
                  A.key
                ), X.return = T, X._debugOwner = T, X._debugTask = T._debugTask, X._debugInfo = Xe, so(A, X, T), T = X) : (X = xf(
                  A,
                  T.mode,
                  X
                ), Na(X, A), X.return = T, X._debugInfo = Xe, T = X);
              }
              return T = d(T), Xe = I, T;
            case Ec:
              e: {
                for (I = A, A = I.key; E !== null; ) {
                  if (E.key === A)
                    if (E.tag === 4 && E.stateNode.containerInfo === I.containerInfo && E.stateNode.implementation === I.implementation) {
                      a(
                        T,
                        E.sibling
                      ), X = o(
                        E,
                        I.children || []
                      ), X.return = T, T = X;
                      break e;
                    } else {
                      a(T, E);
                      break;
                    }
                  else t(T, E);
                  E = E.sibling;
                }
                X = Xh(
                  I,
                  T.mode,
                  X
                ), X.return = T, T = X;
              }
              return d(T);
            case ba:
              return I = cl(A._debugInfo), A = Jo(A), T = et(
                T,
                E,
                A,
                X
              ), Xe = I, T;
          }
          if (Ue(A))
            return I = cl(A._debugInfo), T = De(
              T,
              E,
              A,
              X
            ), Xe = I, T;
          if (Me(A)) {
            if (I = cl(A._debugInfo), _e = Me(A), typeof _e != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var fe = _e.call(A);
            return fe === A ? (T.tag !== 0 || Object.prototype.toString.call(T.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(fe) !== "[object Generator]") && (Lb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), Lb = !0) : A.entries !== _e || dv || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), dv = !0), T = Rt(
              T,
              E,
              fe,
              X
            ), Xe = I, T;
          }
          if (typeof A.then == "function")
            return I = cl(A._debugInfo), T = et(
              T,
              E,
              ro(A),
              X
            ), Xe = I, T;
          if (A.$$typeof === Ya)
            return et(
              T,
              E,
              zf(T, A),
              X
            );
          we(T, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (I = "" + A, E !== null && E.tag === 6 ? (a(
          T,
          E.sibling
        ), X = o(E, I), X.return = T, T = X) : (a(T, E), X = ku(
          I,
          T.mode,
          X
        ), X.return = T, X._debugOwner = T, X._debugTask = T._debugTask, X._debugInfo = Xe, T = X), d(T)) : (typeof A == "function" && ft(T, A), typeof A == "symbol" && Ht(T, A), a(T, E));
      }
      return function(T, E, A, X) {
        var I = Xe;
        Xe = null;
        try {
          Ky = 0;
          var _e = et(
            T,
            E,
            A,
            X
          );
          return lh = null, _e;
        } catch (Ut) {
          if (Ut === Ly || Ut === Vg) throw Ut;
          var fe = me(29, Ut, null, T.mode);
          fe.lanes = X, fe.return = T;
          var Be = fe._debugInfo = Xe;
          if (fe._debugOwner = T._debugOwner, fe._debugTask = T._debugTask, Be != null) {
            for (var qe = Be.length - 1; 0 <= qe; qe--)
              if (typeof Be[qe].stack == "string") {
                fe._debugOwner = Be[qe], fe._debugTask = Be[qe].debugTask;
                break;
              }
          }
          return fe;
        } finally {
          Xe = I;
        }
      };
    }
    function ma(e) {
      var t = e.alternate;
      Re(
        zl,
        zl.current & nh,
        e
      ), Re(Pn, e, e), Oi === null && (t === null || Pd.current !== null || t.memoizedState !== null) && (Oi = e);
    }
    function ni(e) {
      if (e.tag === 22) {
        if (Re(zl, zl.current, e), Re(Pn, e, e), Oi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Oi = e);
        }
      } else ln(e);
    }
    function ln(e) {
      Re(zl, zl.current, e), Re(
        Pn,
        Pn.current,
        e
      );
    }
    function ya(e) {
      Ie(Pn, e), Oi === e && (Oi = null), Ie(zl, e);
    }
    function gu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === _c || Yn(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function rm(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        u1.has(t) || (u1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function wt(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & ca) {
        Ze(!0);
        try {
          f = a(i, o);
        } finally {
          Ze(!1);
        }
      }
      f === void 0 && (t = Te(t) || "Component", t1.has(t) || (t1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ye({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Ur(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & ca) {
          Ze(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            Ze(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Te(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Sf(a, i) || !Sf(o, f) : !0;
    }
    function Cr(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = P(e) || "Component", Wb.has(e) || (Wb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), hv.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function ui(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Ye({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function dm(e) {
      mv(e), console.warn(
        `%s

%s
`,
        uh ? "An error occurred in the <" + uh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function $p(e) {
      var t = uh ? "The above error occurred in the <" + uh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((yv || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          q1 + e[0],
          j1,
          r0 + i + r0,
          Y1
        ) : e.splice(
          0,
          0,
          q1,
          j1,
          r0 + i + r0,
          Y1
        ), e.unshift(console), i = j2.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function Hr(e) {
      mv(e);
    }
    function ho(e, t) {
      try {
        uh = t.source ? P(t.source) : null, yv = null;
        var a = t.value;
        if (B.actQueue !== null)
          B.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function wr(e, t, a) {
      try {
        uh = a.source ? P(a.source) : null, yv = P(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Dl(e, t, a) {
      return a = bn(a), a.tag = nv, a.payload = { element: null }, a.callback = function() {
        ce(t.source, ho, e, t);
      }, a;
    }
    function Bt(e) {
      return e = bn(e), e.tag = nv, e;
    }
    function Vf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Vp(a), ce(
            i.source,
            wr,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Vp(a), ce(
          i.source,
          wr,
          t,
          a,
          i
        ), typeof o != "function" && (Fo === null ? Fo = /* @__PURE__ */ new Set([this]) : Fo.add(this)), y2(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          P(a) || "Unknown"
        );
      });
    }
    function Xf(e, t, a, i, o) {
      if (a.flags |= 32768, Xt && To(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && pl(
          t,
          a,
          o,
          !0
        ), ct && (Uc = !0), a = Pn.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Oi === null ? Pr() : a.alternate === null && Jt === Nc && (Jt = bv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === av ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), qm(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === av ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), qm(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return qm(e, i, o), Pr(), !1;
      }
      if (ct)
        return Uc = !0, t = Pn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== P0 && Wc(
          da(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== P0 && Wc(
          da(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = da(i, a), o = Dl(
          e.stateNode,
          i,
          o
        ), Ic(e, o), Jt !== Bs && (Jt = fh)), !1;
      var f = da(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (lp === null ? lp = [f] : lp.push(f), Jt !== Bs && (Jt = fh), t === null) return !0;
      i = da(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Dl(
              a.stateNode,
              i,
              e
            ), Ic(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Fo === null || !Fo.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Bt(o), Vf(
                o,
                e,
                a,
                i
              ), Ic(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Zt(e, t, a, i) {
      t.child = e === null ? Kb(t, null, a, i) : ah(
        t,
        e.child,
        a,
        i
      );
    }
    function Nr(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return $u(t), Nt(t), i = ei(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Wl(), hl(), e !== null && !wl ? (du(e, t, o), Dn(e, t, o)) : (ct && h && dr(t), t.flags |= 1, Zt(e, t, i, o), t.child);
    }
    function On(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Gh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Zi(f), t.tag = 15, t.type = a, jr(t, f), Qf(
          e,
          t,
          a,
          i,
          o
        )) : (e = rr(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Lr(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Sf, a(d, i) && e.ref === t.ref)
          return Dn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = yn(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Qf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Sf(f, i) && e.ref === t.ref && t.type === e.type)
          if (wl = !1, t.pendingProps = i = f, Lr(e, o))
            (e.flags & 131072) !== 0 && (wl = !0);
          else
            return t.lanes = e.lanes, Dn(e, t, o);
      }
      return qr(
        e,
        t,
        a,
        i,
        o
      );
    }
    function _r(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Br(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && pr(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? $l(t, f) : Df(t), ni(t);
        else
          return t.lanes = t.childLanes = 536870912, Br(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (pr(t, f.cachePool), $l(t, f), ln(t), t.memoizedState = null) : (e !== null && pr(t, null), Df(t), ln(t));
      return Zt(e, t, o, a), t.child;
    }
    function Br(e, t, a, i) {
      var o = Ih();
      return o = o === null ? null : {
        parent: Al._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && pr(t, null), Df(t), ni(t), e !== null && pl(e, t, i, !0), null;
    }
    function Lf(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function qr(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Te(a) || "Unknown";
        c1[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), c1[f] = !0);
      }
      return t.mode & ca && wu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (jr(t, t.type), a.contextTypes && (f = Te(a) || "Unknown", f1[f] || (f1[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), $u(t), Nt(t), a = ei(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Wl(), hl(), e !== null && !wl ? (du(e, t, o), Dn(e, t, o)) : (ct && i && dr(t), t.flags |= 1, Zt(e, t, a, o), t.child);
    }
    function hm(e, t, a, i, o, f) {
      return $u(t), Nt(t), Hc = -1, Jy = e !== null && e.type !== t.type, t.updateQueue = null, a = lo(
        t,
        i,
        a,
        o
      ), Mf(e, t), i = Wl(), hl(), e !== null && !wl ? (du(e, t, f), Dn(e, t, f)) : (ct && i && dr(t), t.flags |= 1, Zt(e, t, a, f), t.child);
    }
    function mm(e, t, a, i, o) {
      switch (W(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = zt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Bt(h), Vf(
            h,
            d,
            t,
            da(f, t)
          ), Ic(t, h);
      }
      if ($u(t), t.stateNode === null) {
        if (d = Lo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Ya) && !n1.has(a) && (n1.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Rd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Te(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = xt(f)), f = new a(i, d), t.mode & ca) {
          Ze(!0);
          try {
            f = new a(i, d);
          } finally {
            Ze(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = hv, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = $b, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Te(a) || "Component", Fb.has(d) || (Fb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var g = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? g = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (g = "UNSAFE_componentWillUpdate"), d !== null || h !== null || g !== null) {
            f = Te(a) || "Component";
            var v = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Pb.has(f) || (Pb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              v,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              g !== null ? `
  ` + g : ""
            ));
          }
        }
        f = t.stateNode, d = Te(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !a1.has(a) && (a1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !l1.has(a) && (l1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Te(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Ib.has(a) || (Ib.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Te(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Ue(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Kl(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? xt(d) : Lo, f.state === i && (d = Te(a) || "Component", e1.has(d) || (e1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & ca && wu.recordLegacyContextWarning(
          t,
          f
        ), wu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (wt(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          P(t) || "Component"
        ), hv.enqueueReplaceState(
          f,
          f.state,
          null
        )), Pc(t, i, f, o), Sn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hu) !== Mt && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var w = t.memoizedProps;
        h = ui(a, w), f.props = h;
        var G = f.context;
        g = a.contextType, d = Lo, typeof g == "object" && g !== null && (d = xt(g)), v = a.getDerivedStateFromProps, g = typeof v == "function" || typeof f.getSnapshotBeforeUpdate == "function", w = t.pendingProps !== w, g || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (w || G !== d) && Cr(
          t,
          f,
          i,
          d
        ), Zo = !1;
        var C = t.memoizedState;
        f.state = C, Pc(t, i, f, o), Sn(), G = t.memoizedState, w || C !== G || Zo ? (typeof v == "function" && (wt(
          t,
          a,
          v,
          i
        ), G = t.memoizedState), (h = Zo || Ur(
          t,
          a,
          h,
          i,
          C,
          G,
          d
        )) ? (g || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hu) !== Mt && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hu) !== Mt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = G), f.props = i, f.state = G, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hu) !== Mt && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Fu(e, t), d = t.memoizedProps, g = ui(a, d), f.props = g, v = t.pendingProps, C = f.context, G = a.contextType, h = Lo, typeof G == "object" && G !== null && (h = xt(G)), w = a.getDerivedStateFromProps, (G = typeof w == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== v || C !== h) && Cr(
          t,
          f,
          i,
          h
        ), Zo = !1, C = t.memoizedState, f.state = C, Pc(t, i, f, o), Sn();
        var V = t.memoizedState;
        d !== v || C !== V || Zo || e !== null && e.dependencies !== null && Ku(e.dependencies) ? (typeof w == "function" && (wt(
          t,
          a,
          w,
          i
        ), V = t.memoizedState), (g = Zo || Ur(
          t,
          a,
          g,
          i,
          C,
          V,
          h
        ) || e !== null && e.dependencies !== null && Ku(e.dependencies)) ? (G || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, V, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          V,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = V), f.props = i, f.state = V, f.context = h, f = g) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Lf(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, sf(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Xa = -1;
        else {
          if (Nt(t), a = Nb(h), t.mode & ca) {
            Ze(!0);
            try {
              Nb(h);
            } finally {
              Ze(!1);
            }
          }
          hl();
        }
        t.flags |= 1, e !== null && d ? (t.child = ah(
          t,
          e.child,
          null,
          o
        ), t.child = ah(
          t,
          null,
          a,
          o
        )) : Zt(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Dn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (ih || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        P(t) || "a component"
      ), ih = !0), e;
    }
    function ym(e, t, a, i) {
      return Ki(), t.flags |= 256, Zt(e, t, a, i), t.child;
    }
    function jr(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Te(t) || "Unknown", s1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), s1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Te(t) || "Unknown", o1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), o1[t] = !0));
    }
    function Zf(e) {
      return { baseLanes: e, cachePool: Zp() };
    }
    function Yr(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= rn), e;
    }
    function Wp(e, t, a) {
      var i, o = t.pendingProps;
      K(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (zl.current & $y) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ct) {
          if (f ? ma(t) : ln(t), ct) {
            var h = kt, g;
            if (!(g = !h)) {
              e: {
                var v = h;
                for (g = zi; v.nodeType !== 8; ) {
                  if (!g) {
                    g = null;
                    break e;
                  }
                  if (v = Sl(v.nextSibling), v === null) {
                    g = null;
                    break e;
                  }
                }
                g = v;
              }
              g !== null ? (Ka(), t.memoizedState = {
                dehydrated: g,
                treeContext: Ms !== null ? { id: Dc, overflow: Mc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, v = me(18, null, null, Mt), v.stateNode = g, v.return = t, t.child = v, Ea = t, kt = null, g = !0) : g = !1, g = !g;
            }
            g && (Qh(
              t,
              h
            ), pn(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return Yn(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          ya(t);
        }
        return h = o.children, o = o.fallback, f ? (ln(t), f = t.mode, h = kf(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = Zu(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = Zf(a), f.childLanes = Yr(
          e,
          i,
          a
        ), t.memoizedState = gv, o) : (ma(t), Gr(
          t,
          h
        ));
      }
      var w = e.memoizedState;
      if (w !== null && (h = w.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (ma(t), t.flags &= -257, t = Vr(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (ln(t), t.child = e.child, t.flags |= 128, t = null) : (ln(t), f = o.fallback, h = t.mode, o = kf(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = Zu(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, ah(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = Zf(a), o.childLanes = Yr(
            e,
            i,
            a
          ), t.memoizedState = gv, t = f);
        else if (ma(t), ct && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Yn(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            g = i.dgst;
            var G = i.msg;
            v = i.stck;
            var C = i.cstck;
          }
          h = G, i = g, o = v, g = f = C, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = g === void 0 ? null : g, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && F0.set(
            f,
            o
          ), Wc(o), t = Vr(
            e,
            t,
            a
          );
        } else if (wl || pl(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, wl || i) {
          if (i = zt, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : _l(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== w.retryLane))
            throw w.retryLane = o, Jl(
              e,
              o
            ), qt(
              i,
              e,
              o
            ), i1;
          h.data === _c || Pr(), t = Vr(
            e,
            t,
            a
          );
        } else
          h.data === _c ? (t.flags |= 192, t.child = e.child, t = null) : (e = w.treeContext, kt = Sl(
            h.nextSibling
          ), Ea = t, ct = !0, Us = null, Uc = !1, $n = null, zi = !1, e !== null && (Ka(), Jn[Kn++] = Dc, Jn[Kn++] = Mc, Jn[Kn++] = Ms, Dc = e.id, Mc = e.overflow, Ms = t), t = Gr(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (ln(t), f = o.fallback, h = t.mode, g = e.child, v = g.sibling, o = yn(
        g,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = g.subtreeFlags & 65011712, v !== null ? f = yn(
        v,
        f
      ) : (f = Zu(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = Zf(a) : (g = h.cachePool, g !== null ? (v = Al._currentValue, g = g.parent !== v ? { parent: v, pool: v } : g) : g = Zp(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: g
      }), f.memoizedState = h, f.childLanes = Yr(
        e,
        i,
        a
      ), t.memoizedState = gv, o) : (ma(t), a = e.child, e = a.sibling, a = yn(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Gr(e, t) {
      return t = kf(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function kf(e, t) {
      return e = me(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: wg,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Vr(e, t, a) {
      return ah(t, e.child, null, a), e = Gr(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Xr(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Kh(
        e.return,
        t,
        a
      );
    }
    function pm(e, t) {
      var a = Ue(e);
      return e = !a && typeof Me(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Qr(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function gm(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !r1[o])
        if (r1[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || pv[f] || (f !== "collapsed" && f !== "hidden" ? (pv[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (pv[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (Ue(i)) {
          for (var d = 0; d < i.length; d++)
            if (!pm(i[d], d)) break e;
        } else if (d = Me(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), g = 0; !h.done; h = d.next()) {
              if (!pm(h.value, g)) break e;
              g++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Zt(e, t, i, a), i = zl.current, (i & $y) !== 0)
        i = i & nh | $y, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Xr(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Xr(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= nh;
      }
      switch (Re(zl, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && gu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Qr(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && gu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Qr(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Qr(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Dn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Xa = -1, $o |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (pl(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = yn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = yn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Lr(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ku(e)));
    }
    function H0(e, t, a) {
      switch (t.tag) {
        case 3:
          $t(
            t,
            t.stateNode.containerInfo
          ), Ju(
            t,
            Al,
            e.memoizedState.cache
          ), Ki();
          break;
        case 27:
        case 5:
          Z(t);
          break;
        case 4:
          $t(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Ju(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ma(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Wp(
              e,
              t,
              a
            ) : (ma(t), e = Dn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ma(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (pl(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return gm(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Re(
            zl,
            zl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, _r(e, t, a);
        case 24:
          Ju(
            t,
            Al,
            e.memoizedState.cache
          );
      }
      return Dn(e, t, a);
    }
    function Zr(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = rr(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          wl = !0;
        else {
          if (!Lr(e, a) && (t.flags & 128) === 0)
            return wl = !1, H0(
              e,
              t,
              a
            );
          wl = (e.flags & 131072) !== 0;
        }
      else
        wl = !1, (i = ct) && (Ka(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Ka(), Xp(t, _g, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Jo(t.elementType), t.type = e, typeof e == "function")
            Gh(e) ? (i = ui(
              e,
              i
            ), t.tag = 1, t.type = e = Zi(e), t = mm(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, jr(t, e), t.type = e = Zi(e), t = qr(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === zu) {
                t.tag = 11, t.type = e = Yh(e), t = Nr(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === ps) {
                t.tag = 14, t = On(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ba && (t = " Did you wrap a component in React.lazy() more than once?"), e = Te(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return qr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = ui(
            i,
            t.pendingProps
          ), mm(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if ($t(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, Fu(e, t), Pc(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Ju(t, Al, i), i !== f.cache && $h(
              t,
              [Al],
              a,
              !0
            ), Sn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = ym(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = da(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Wc(o), t = ym(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (kt = Sl(e.firstChild), Ea = t, ct = !0, Us = null, Uc = !1, $n = null, zi = !0, e = Kb(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (Ki(), i === o) {
                t = Dn(
                  e,
                  t,
                  a
                );
                break e;
              }
              Zt(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Lf(e, t), e === null ? (e = xu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : ct || (e = t.type, a = t.pendingProps, i = Qt(
            Vn.current
          ), i = Ke(
            i
          ).createElement(e), i[Hl] = t, i[ua] = a, Yt(i, e, a), nl(i), t.stateNode = i) : t.memoizedState = xu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return Z(t), e === null && ct && (i = Qt(Vn.current), o = z(), i = t.stateNode = ly(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Uc || (o = bt(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && ($a(t, 0).serverProps = o)), Ea = t, zi = !0, o = kt, jn(t.type) ? (Gv = o, kt = Sl(
            i.firstChild
          )) : kt = o), Zt(
            e,
            t,
            t.pendingProps.children,
            a
          ), Lf(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ct && (f = z(), i = lr(
            t.type,
            f.ancestorInfo
          ), o = kt, (d = !o) || (d = di(
            o,
            t.type,
            t.pendingProps,
            zi
          ), d !== null ? (t.stateNode = d, Uc || (f = bt(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && ($a(t, 0).serverProps = f)), Ea = t, kt = Sl(
            d.firstChild
          ), zi = !1, f = !0) : f = !1, d = !f), d && (i && Qh(t, o), pn(t))), Z(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, qn(o, f) ? i = null : d !== null && qn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ei(
            e,
            t,
            Ua,
            null,
            null,
            a
          ), sp._currentValue = o), Lf(e, t), Zt(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && ct && (e = t.pendingProps, a = z(), i = a.ancestorInfo.current, e = i != null ? pf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = kt, (i = !a) || (i = bl(
            a,
            t.pendingProps,
            zi
          ), i !== null ? (t.stateNode = i, Ea = t, kt = null, i = !0) : i = !1, i = !i), i && (e && Qh(t, a), pn(t))), null;
        case 13:
          return Wp(e, t, a);
        case 4:
          return $t(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = ah(
            t,
            null,
            i,
            a
          ) : Zt(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Nr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return Zt(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return Zt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Zt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || d1 || (d1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Ju(t, i, f), Zt(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), $u(t), o = xt(o), Nt(t), i = sv(
            i,
            o,
            void 0
          ), hl(), t.flags |= 1, Zt(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return On(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Qf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return gm(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = kf(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = yn(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return _r(e, t, a);
        case 24:
          return $u(t), i = xt(Al), e === null ? (o = Ih(), o === null && (o = zt, f = Rf(), o.pooledCache = f, $i(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Kl(t), Ju(t, Al, o)) : ((e.lanes & a) !== 0 && (Fu(e, t), Pc(t, null, null, a), Sn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Ju(t, Al, i)) : (i = f.cache, Ju(t, Al, i), i !== o.cache && $h(
            t,
            [Al],
            a,
            !0
          ))), Zt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Il(e) {
      e.flags |= 4;
    }
    function Jf(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & eu) !== Zs)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !cs(t)) {
        if (t = Pn.current, t !== null && ((Fe & 4194048) === Fe ? Oi !== null : (Fe & 62914560) !== Fe && (Fe & 536870912) === 0 || t !== Oi))
          throw Zy = av, Eb;
        e.flags |= 8192;
      }
    }
    function Kf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? cf() : 536870912, e.lanes |= t, Ys |= t);
    }
    function ii(e, t) {
      if (!ct)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function yt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Ql) !== Mt) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Ql) !== Mt) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Fp(e, t, a) {
      var i = t.pendingProps;
      switch (hr(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return yt(t), null;
        case 1:
          return yt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), su(Al, t), St(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ji(t) ? (Jh(), Il(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, kh())), yt(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Il(t), a !== null ? (yt(t), Jf(
            t,
            a
          )) : (yt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Il(t), yt(t), Jf(
            t,
            a
          )) : (yt(t), t.flags &= -16777217) : (e.memoizedProps !== i && Il(t), yt(t), t.flags &= -16777217), null;
        case 27:
          q(t), a = Qt(Vn.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && Il(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return yt(t), null;
            }
            e = z(), Ji(t) ? Lh(t) : (e = ly(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Il(t));
          }
          return yt(t), null;
        case 5:
          if (q(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Il(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return yt(t), null;
            }
            if (o = z(), Ji(t))
              Lh(t);
            else {
              switch (e = Qt(Vn.current), lr(a, o.ancestorInfo), o = o.context, e = Ke(e), o) {
                case yh:
                  e = e.createElementNS(Qo, a);
                  break;
                case o0:
                  e = e.createElementNS(
                    Os,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        Qo,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Os,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || Ou.call(
                        C1,
                        a
                      ) || (C1[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Hl] = t, e[ua] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Yt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && Il(t);
            }
          }
          return yt(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Il(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Qt(Vn.current), a = z(), Ji(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Uc, i = null;
              var f = Ea;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = gd(
                      e,
                      a,
                      i
                    ), o !== null && ($a(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = gd(
                      e,
                      a,
                      i
                    ), o !== null && ($a(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Hl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || km(e.nodeValue, a)), e || pn(t);
            } else
              o = a.ancestorInfo.current, o != null && pf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Ke(e).createTextNode(
                i
              ), e[Hl] = t, t.stateNode = e;
          }
          return yt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = Ji(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Hl] = t, yt(t), (t.mode & Ql) !== Mt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Jh(), Ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, yt(t), (t.mode & Ql) !== Mt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = kh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (ya(t), t) : (ya(t), null);
          }
          return ya(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Ql) !== Mt && vn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Kf(t, t.updateQueue), yt(t), (t.mode & Ql) !== Mt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return St(t), e === null && Lm(
            t.stateNode.containerInfo
          ), yt(t), null;
        case 10:
          return su(t.type, t), yt(t), null;
        case 19:
          if (Ie(zl, t), o = t.memoizedState, o === null) return yt(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) ii(o, !1);
            else {
              if (Jt !== Nc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = gu(e), f !== null) {
                    for (t.flags |= 128, ii(o, !1), e = f.updateQueue, t.updateQueue = e, Kf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Vh(a, e), a = a.sibling;
                    return Re(
                      zl,
                      zl.current & nh | $y,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && Xn() > Wg && (t.flags |= 128, i = !0, ii(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = gu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Kf(t, e), ii(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !ct)
                  return yt(t), null;
              } else
                2 * Xn() - o.renderingStartTime > Wg && a !== 536870912 && (t.flags |= 128, i = !0, ii(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Xn(), e.sibling = null, a = zl.current, a = i ? a & nh | $y : a & nh, Re(zl, a, t), e) : (yt(t), null);
        case 22:
        case 23:
          return ya(t), Pa(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), a = t.updateQueue, a !== null && Kf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Ie(ws, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), su(Al, t), yt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Ip(e, t) {
      switch (hr(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ql) !== Mt && vn(t), t) : null;
        case 3:
          return su(Al, t), St(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return q(t), null;
        case 13:
          if (ya(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Ki();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ql) !== Mt && vn(t), t) : null;
        case 19:
          return Ie(zl, t), null;
        case 4:
          return St(t), null;
        case 10:
          return su(t.type, t), null;
        case 22:
        case 23:
          return ya(t), Pa(t), e !== null && Ie(ws, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ql) !== Mt && vn(t), t) : null;
        case 24:
          return su(Al, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function vm(e, t) {
      switch (hr(t), t.tag) {
        case 3:
          su(Al, t), St(t);
          break;
        case 26:
        case 27:
        case 5:
          q(t);
          break;
        case 4:
          St(t);
          break;
        case 13:
          ya(t);
          break;
        case 19:
          Ie(zl, t);
          break;
        case 10:
          su(t.type, t);
          break;
        case 22:
        case 23:
          ya(t), Pa(t), e !== null && Ie(ws, t);
          break;
        case 24:
          su(Al, t);
      }
    }
    function an(e) {
      return (e.mode & Ql) !== Mt;
    }
    function bm(e, t) {
      an(e) ? (Fa(), nc(t, e), Oa()) : nc(t, e);
    }
    function kr(e, t, a) {
      an(e) ? (Fa(), uc(
        a,
        e,
        t
      ), Oa()) : uc(
        a,
        e,
        t
      );
    }
    function nc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & xl) !== Wn ? ee !== null && typeof ee.markComponentPassiveEffectMountStarted == "function" && ee.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Ll) !== Wn && ee !== null && typeof ee.markComponentLayoutEffectMountStarted == "function" && ee.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Aa) !== Wn && (hh = !0), i = ce(
              t,
              p2,
              a
            ), (e & Aa) !== Wn && (hh = !1), (e & xl) !== Wn ? ee !== null && typeof ee.markComponentPassiveEffectMountStopped == "function" && ee.markComponentPassiveEffectMountStopped() : (e & Ll) !== Wn && ee !== null && typeof ee.markComponentLayoutEffectMountStopped == "function" && ee.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & Ll) !== 0 ? "useLayoutEffect" : (a.tag & Aa) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ce(
                t,
                function(h, g) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    g
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Ae(t, t.return, h);
      }
    }
    function uc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & xl) !== Wn ? ee !== null && typeof ee.markComponentPassiveEffectUnmountStarted == "function" && ee.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Ll) !== Wn && ee !== null && typeof ee.markComponentLayoutEffectUnmountStarted == "function" && ee.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Aa) !== Wn && (hh = !0), o = t, ce(
                o,
                g2,
                o,
                a,
                h
              ), (e & Aa) !== Wn && (hh = !1), (e & xl) !== Wn ? ee !== null && typeof ee.markComponentPassiveEffectUnmountStopped == "function" && ee.markComponentPassiveEffectUnmountStopped() : (e & Ll) !== Wn && ee !== null && typeof ee.markComponentLayoutEffectUnmountStopped == "function" && ee.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (g) {
        Ae(t, t.return, g);
      }
    }
    function Sm(e, t) {
      an(e) ? (Fa(), nc(t, e), Oa()) : nc(t, e);
    }
    function $f(e, t, a) {
      an(e) ? (Fa(), uc(
        a,
        e,
        t
      ), Oa()) : uc(
        a,
        e,
        t
      );
    }
    function Tm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || ih || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          P(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          P(e) || "instance"
        ));
        try {
          ce(
            e,
            kp,
            t,
            a
          );
        } catch (i) {
          Ae(e, e.return, i);
        }
      }
    }
    function Pp(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function w0(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || ih || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        P(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        P(e) || "instance"
      ));
      try {
        var o = ui(
          e.type,
          a,
          e.elementType === e.type
        ), f = ce(
          e,
          Pp,
          t,
          o,
          i
        );
        a = h1, f !== void 0 || a.has(e.type) || (a.add(e.type), ce(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            P(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Ae(e, e.return, d);
      }
    }
    function Jr(e, t, a) {
      a.props = ui(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, an(e) ? (Fa(), ce(
        e,
        Gb,
        e,
        t,
        a
      ), Oa()) : ce(
        e,
        Gb,
        e,
        t,
        a
      );
    }
    function eg(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (an(e))
            try {
              Fa(), e.refCleanup = t(a);
            } finally {
              Oa();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            P(e)
          ), t.current = a;
      }
    }
    function mo(e, t) {
      try {
        ce(e, eg, e);
      } catch (a) {
        Ae(e, t, a);
      }
    }
    function _a(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (an(e))
              try {
                Fa(), ce(e, i);
              } finally {
                Oa(e);
              }
            else ce(e, i);
          } catch (o) {
            Ae(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (an(e))
              try {
                Fa(), ce(e, a, null);
              } finally {
                Oa(e);
              }
            else ce(e, a, null);
          } catch (o) {
            Ae(e, t, o);
          }
        else a.current = null;
    }
    function Em(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", jg && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function tg(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", jg && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function lg(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        ce(
          e,
          Eu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Ae(e, e.return, o);
      }
    }
    function Am(e, t, a) {
      try {
        ce(
          e,
          Gt,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ae(e, e.return, i);
      }
    }
    function xm(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && jn(e.type) || e.tag === 4;
    }
    function ic(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || xm(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && jn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Wf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Tu));
      else if (i !== 4 && (i === 27 && jn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (Wf(e, t, a), e = e.sibling; e !== null; )
          Wf(e, t, a), e = e.sibling;
    }
    function cc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && jn(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (cc(e, t, a), e = e.sibling; e !== null; )
          cc(e, t, a), e = e.sibling;
    }
    function ag(e) {
      for (var t, a = e.return; a !== null; ) {
        if (xm(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = ic(e), cc(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Au(a), t.flags &= -33), t = ic(e), cc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = ic(e), Wf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function zm(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        ce(
          e,
          va,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ae(e, e.return, i);
      }
    }
    function Kr(e, t) {
      if (e = e.containerInfo, qv = d0, e = qp(e), qh(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, g = -1, v = 0, w = 0, G = e, C = null;
              t: for (; ; ) {
                for (var V; G !== a || o !== 0 && G.nodeType !== 3 || (h = d + o), G !== f || i !== 0 && G.nodeType !== 3 || (g = d + i), G.nodeType === 3 && (d += G.nodeValue.length), (V = G.firstChild) !== null; )
                  C = G, G = V;
                for (; ; ) {
                  if (G === e) break t;
                  if (C === a && ++v === o && (h = d), C === f && ++w === i && (g = d), (V = G.nextSibling) !== null) break;
                  G = C, C = G.parentNode;
                }
                G = V;
              }
              a = h === -1 || g === -1 ? null : { start: h, end: g };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (jv = {
        focusedElem: e,
        selectionRange: a
      }, d0 = !1, Nl = t; Nl !== null; )
        if (t = Nl, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Nl = e;
        else
          for (; Nl !== null; ) {
            switch (e = t = Nl, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && w0(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    zo(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        zo(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Nl = e;
              break;
            }
            Nl = t.return;
          }
    }
    function Rm(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Mn(e, a), i & 4 && bm(a, Ll | Fn);
          break;
        case 1:
          if (Mn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || ih || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                P(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                P(a) || "instance"
              )), an(a) ? (Fa(), ce(
                a,
                rv,
                a,
                e
              ), Oa()) : ce(
                a,
                rv,
                a,
                e
              );
            else {
              var o = ui(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || ih || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                P(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                P(a) || "instance"
              )), an(a) ? (Fa(), ce(
                a,
                qb,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Oa()) : ce(
                a,
                qb,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && Tm(a), i & 512 && mo(a, a.return);
          break;
        case 3:
          if (t = Wa(), Mn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              ce(
                a,
                kp,
                i,
                o
              );
            } catch (d) {
              Ae(a, a.return, d);
            }
          }
          e.effectDuration += Wu(t);
          break;
        case 27:
          t === null && i & 4 && zm(a);
        case 26:
        case 5:
          Mn(e, a), t === null && i & 4 && lg(a), i & 512 && mo(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = Wa(), Mn(e, a), e = a.stateNode, e.effectDuration += Wi(i);
            try {
              ce(
                a,
                Em,
                a,
                t,
                qg,
                e.effectDuration
              );
            } catch (d) {
              Ae(a, a.return, d);
            }
          } else Mn(e, a);
          break;
        case 13:
          Mn(e, a), i & 4 && yo(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = ns.bind(
            null,
            a
          ), Ro(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || wc, !i) {
            t = t !== null && t.memoizedState !== null || ll, o = wc;
            var f = ll;
            wc = i, (ll = t) && !f ? Un(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Mn(e, a), wc = o, ll = f;
          }
          break;
        case 30:
          break;
        default:
          Mn(e, a);
      }
    }
    function Om(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Om(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Xc(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function vu(e, t, a) {
      for (a = a.child; a !== null; )
        oc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function oc(e, t, a) {
      if (Tl && typeof Tl.onCommitFiberUnmount == "function")
        try {
          Tl.onCommitFiberUnmount(bi, a);
        } catch (f) {
          na || (na = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          ll || _a(a, t), vu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          ll || _a(a, t);
          var i = dl, o = Qa;
          jn(a.type) && (dl = a.stateNode, Qa = !1), vu(
            e,
            t,
            a
          ), ce(
            a,
            Do,
            a.stateNode
          ), dl = i, Qa = o;
          break;
        case 5:
          ll || _a(a, t);
        case 6:
          if (i = dl, o = Qa, dl = null, vu(
            e,
            t,
            a
          ), dl = i, Qa = o, dl !== null)
            if (Qa)
              try {
                ce(
                  a,
                  Ao,
                  dl,
                  a.stateNode
                );
              } catch (f) {
                Ae(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                ce(
                  a,
                  ja,
                  dl,
                  a.stateNode
                );
              } catch (f) {
                Ae(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          dl !== null && (Qa ? (e = dl, xo(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Tc(e)) : xo(dl, a.stateNode));
          break;
        case 4:
          i = dl, o = Qa, dl = a.stateNode.containerInfo, Qa = !0, vu(
            e,
            t,
            a
          ), dl = i, Qa = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ll || uc(
            Aa,
            a,
            t
          ), ll || kr(
            a,
            t,
            Ll
          ), vu(
            e,
            t,
            a
          );
          break;
        case 1:
          ll || (_a(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && Jr(
            a,
            t,
            i
          )), vu(
            e,
            t,
            a
          );
          break;
        case 21:
          vu(
            e,
            t,
            a
          );
          break;
        case 22:
          ll = (i = ll) || a.memoizedState !== null, vu(
            e,
            t,
            a
          ), ll = i;
          break;
        default:
          vu(
            e,
            t,
            a
          );
      }
    }
    function yo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ce(
            t,
            ga,
            e
          );
        } catch (a) {
          Ae(t, t.return, a);
        }
    }
    function $r(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new m1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new m1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function fc(e, t) {
      var a = $r(e);
      t.forEach(function(i) {
        var o = si.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Xt)
            if (ch !== null && oh !== null)
              To(oh, ch);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function Ml(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (jn(h.type)) {
                  dl = h.stateNode, Qa = !1;
                  break e;
                }
                break;
              case 5:
                dl = h.stateNode, Qa = !1;
                break e;
              case 3:
              case 4:
                dl = h.stateNode.containerInfo, Qa = !0;
                break e;
            }
            h = h.return;
          }
          if (dl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          oc(o, f, d), dl = null, Qa = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          Dm(t, e), t = t.sibling;
    }
    function Dm(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ml(t, e), Pl(e), i & 4 && (uc(
            Aa | Fn,
            e,
            e.return
          ), nc(Aa | Fn, e), kr(
            e,
            e.return,
            Ll | Fn
          ));
          break;
        case 1:
          Ml(t, e), Pl(e), i & 512 && (ll || a === null || _a(a, a.return)), i & 64 && wc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = _u;
          if (Ml(t, e), Pl(e), i & 512 && (ll || a === null || _a(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Yo] || o[Hl] || o.namespaceURI === Qo || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Yt(o, i, a), o[Hl] = e, nl(o), i = o;
                        break e;
                      case "link":
                        var f = iy(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Yt(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = iy(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], F(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Yt(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Hl] = e, nl(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  cy(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = vd(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? cy(
                o,
                e.type,
                e.stateNode
              ) : vd(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Am(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          Ml(t, e), Pl(e), i & 512 && (ll || a === null || _a(a, a.return)), a !== null && i & 4 && Am(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (Ml(t, e), Pl(e), i & 512 && (ll || a === null || _a(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              ce(e, Au, t);
            } catch (w) {
              Ae(e, e.return, w);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Am(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (vv = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Ml(t, e), Pl(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              ce(
                e,
                gc,
                t,
                a,
                i
              );
            } catch (w) {
              Ae(e, e.return, w);
            }
          }
          break;
        case 3:
          if (o = Wa(), f0 = null, f = _u, _u = is(t.containerInfo), Ml(t, e), _u = f, Pl(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              ce(
                e,
                ty,
                t.containerInfo
              );
            } catch (w) {
              Ae(e, e.return, w);
            }
          vv && (vv = !1, sc(e)), t.effectDuration += Wu(o);
          break;
        case 4:
          i = _u, _u = is(
            e.stateNode.containerInfo
          ), Ml(t, e), Pl(e), _u = i;
          break;
        case 12:
          i = Wa(), Ml(t, e), Pl(e), e.stateNode.effectDuration += Wi(i);
          break;
        case 13:
          Ml(t, e), Pl(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (xv = Xn()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, fc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, g = wc, v = ll;
          if (wc = g || o, ll = v || h, Ml(t, e), ll = v, wc = g, Pl(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~wg : t._visibility | wg, o && (a === null || h || wc || ll || Ul(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? ce(h, la, f) : ce(
                      h,
                      Pm,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (w) {
                    Ae(h, h.return, w);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? ce(h, Im, d) : ce(
                      h,
                      yd,
                      d,
                      h.memoizedProps
                    );
                  } catch (w) {
                    Ae(h, h.return, w);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, fc(e, a))));
          break;
        case 19:
          Ml(t, e), Pl(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, fc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Ml(t, e), Pl(e);
      }
    }
    function Pl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ce(e, ag, e);
        } catch (a) {
          Ae(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function sc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          sc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Mn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Rm(e, t.alternate, t), t = t.sibling;
    }
    function pa(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          kr(
            e,
            e.return,
            Ll
          ), Ul(e);
          break;
        case 1:
          _a(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Jr(
            e,
            e.return,
            t
          ), Ul(e);
          break;
        case 27:
          ce(
            e,
            Do,
            e.stateNode
          );
        case 26:
        case 5:
          _a(e, e.return), Ul(e);
          break;
        case 22:
          e.memoizedState === null && Ul(e);
          break;
        case 30:
          Ul(e);
          break;
        default:
          Ul(e);
      }
    }
    function Ul(e) {
      for (e = e.child; e !== null; )
        pa(e), e = e.sibling;
    }
    function bu(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Un(
            e,
            a,
            i
          ), bm(a, Ll);
          break;
        case 1:
          if (Un(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ce(
            a,
            rv,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              ce(
                a,
                eo,
                t,
                e
              );
            } catch (f) {
              Ae(a, a.return, f);
            }
          }
          i && o & 64 && Tm(a), mo(a, a.return);
          break;
        case 27:
          zm(a);
        case 26:
        case 5:
          Un(
            e,
            a,
            i
          ), i && t === null && o & 4 && lg(a), mo(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = Wa(), Un(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Wi(o);
            try {
              ce(
                a,
                Em,
                a,
                t,
                qg,
                i.effectDuration
              );
            } catch (f) {
              Ae(a, a.return, f);
            }
          } else
            Un(
              e,
              a,
              i
            );
          break;
        case 13:
          Un(
            e,
            a,
            i
          ), i && o & 4 && yo(e, a);
          break;
        case 22:
          a.memoizedState === null && Un(
            e,
            a,
            i
          ), mo(a, a.return);
          break;
        case 30:
          break;
        default:
          Un(
            e,
            a,
            i
          );
      }
    }
    function Un(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        bu(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Cn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && $i(e), a != null && gn(a));
    }
    function nn(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && ($i(t), e != null && gn(e));
    }
    function pt(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Ff(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function Ff(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          pt(
            e,
            t,
            a,
            i
          ), o & 2048 && Sm(t, xl | Fn);
          break;
        case 1:
          pt(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = Wa();
          pt(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && ($i(t), a != null && gn(a))), e.passiveEffectDuration += Wu(f);
          break;
        case 12:
          if (o & 2048) {
            o = Wa(), pt(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += Wi(o);
            try {
              ce(
                t,
                tg,
                t,
                t.alternate,
                qg,
                e.passiveEffectDuration
              );
            } catch (h) {
              Ae(t, t.return, h);
            }
          } else
            pt(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          pt(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & Oc ? pt(
            e,
            t,
            a,
            i
          ) : po(
            e,
            t
          ) : f._visibility & Oc ? pt(
            e,
            t,
            a,
            i
          ) : (f._visibility |= Oc, ci(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Cn(d, t);
          break;
        case 24:
          pt(
            e,
            t,
            a,
            i
          ), o & 2048 && nn(t.alternate, t);
          break;
        default:
          pt(
            e,
            t,
            a,
            i
          );
      }
    }
    function ci(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        Wr(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function Wr(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ci(
            e,
            t,
            a,
            i,
            o
          ), Sm(t, xl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & Oc ? ci(
            e,
            t,
            a,
            i,
            o
          ) : po(
            e,
            t
          ) : (d._visibility |= Oc, ci(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && Cn(
            t.alternate,
            t
          );
          break;
        case 24:
          ci(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && nn(t.alternate, t);
          break;
        default:
          ci(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function po(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              po(
                a,
                i
              ), o & 2048 && Cn(
                i.alternate,
                i
              );
              break;
            case 24:
              po(
                a,
                i
              ), o & 2048 && nn(
                i.alternate,
                i
              );
              break;
            default:
              po(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function rc(e) {
      if (e.subtreeFlags & Wy)
        for (e = e.child; e !== null; )
          oi(e), e = e.sibling;
    }
    function oi(e) {
      switch (e.tag) {
        case 26:
          rc(e), e.flags & Wy && e.memoizedState !== null && mg(
            _u,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          rc(e);
          break;
        case 3:
        case 4:
          var t = _u;
          _u = is(
            e.stateNode.containerInfo
          ), rc(e), _u = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Wy, Wy = 16777216, rc(e), Wy = t) : rc(e));
          break;
        default:
          rc(e);
      }
    }
    function If(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function go(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Nl = i, Um(
              i,
              e
            );
          }
        If(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Mm(e), e = e.sibling;
    }
    function Mm(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          go(e), e.flags & 2048 && $f(
            e,
            e.return,
            xl | Fn
          );
          break;
        case 3:
          var t = Wa();
          go(e), e.stateNode.passiveEffectDuration += Wu(t);
          break;
        case 12:
          t = Wa(), go(e), e.stateNode.passiveEffectDuration += Wi(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & Oc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~Oc, Pf(e)) : go(e);
          break;
        default:
          go(e);
      }
    }
    function Pf(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Nl = i, Um(
              i,
              e
            );
          }
        If(e);
      }
      for (e = e.child; e !== null; )
        es(e), e = e.sibling;
    }
    function es(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          $f(
            e,
            e.return,
            xl
          ), Pf(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & Oc && (t._visibility &= ~Oc, Pf(e));
          break;
        default:
          Pf(e);
      }
    }
    function Um(e, t) {
      for (; Nl !== null; ) {
        var a = Nl, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            $f(
              i,
              t,
              xl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && $i(i));
            break;
          case 24:
            gn(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Nl = i;
        else
          e: for (a = e; Nl !== null; ) {
            i = Nl;
            var o = i.sibling, f = i.return;
            if (Om(i), i === a) {
              Nl = null;
              break e;
            }
            if (o !== null) {
              o.return = f, Nl = o;
              break e;
            }
            Nl = f;
          }
      }
    }
    function Cm() {
      b2.forEach(function(e) {
        return e();
      });
    }
    function Hm() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || B.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ea(e) {
      if ((mt & xa) !== fn && Fe !== 0)
        return Fe & -Fe;
      var t = B.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Hs, e !== 0 ? e : Vm()) : Ep();
    }
    function ng() {
      rn === 0 && (rn = (Fe & 536870912) === 0 || ct ? Eh() : 536870912);
      var e = Pn.current;
      return e !== null && (e.flags |= 32), rn;
    }
    function qt(e, t, a) {
      if (hh && console.error("useInsertionEffect must not schedule updates."), Mv && (Fg = !0), (e === zt && (gt === qs || gt === js) || e.cancelPendingCommit !== null) && (hc(e, 0), Su(
        e,
        Fe,
        rn,
        !1
      )), Gc(e, a), (mt & xa) !== 0 && e === zt) {
        if (ia)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = $e && P($e) || "Unknown", x1.has(e) || (x1.add(e), t = P(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              A1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), A1 = !0);
          }
      } else
        Xt && au(e, t, a), og(t), e === zt && ((mt & xa) === fn && (Wo |= a), Jt === Bs && Su(
          e,
          Fe,
          rn,
          !1
        )), Ba(e);
    }
    function el(e, t, a) {
      if ((mt & (xa | Bu)) !== fn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || uf(e, t), o = i ? Nm(e, t) : ed(e, t, !0), f = i;
      do {
        if (o === Nc) {
          rh && !i && Su(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !ug(a)) {
            o = ed(e, t, !1), f = !1;
            continue;
          }
          if (o === fh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = lp;
                var g = o.current.memoizedState.isDehydrated;
                if (g && (hc(
                  o,
                  h
                ).flags |= 256), h = ed(
                  o,
                  h,
                  !1
                ), h !== fh) {
                  if (Ev && !g) {
                    o.errorRecoveryDisabledLanes |= f, Wo |= f, o = Bs;
                    break e;
                  }
                  o = za, za = d, o !== null && (za === null ? za = o : za.push.apply(
                    za,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== fh) continue;
            }
          }
          if (o === Iy) {
            hc(e, 0), Su(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Nc:
              case Iy:
                throw Error("Root did not complete. This is a bug in React.");
              case Bs:
                if ((t & 4194048) !== t) break;
              case Kg:
                Su(
                  i,
                  t,
                  rn,
                  !Ko
                );
                break e;
              case fh:
                za = null;
                break;
              case bv:
              case y1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (B.actQueue !== null)
              ud(
                i,
                a,
                t,
                za,
                ap,
                $g,
                rn,
                Wo,
                Ys
              );
            else {
              if ((t & 62914560) === t && (f = xv + g1 - Xn(), 10 < f)) {
                if (Su(
                  i,
                  t,
                  rn,
                  !Ko
                ), fa(i, 0, !0) !== 0) break e;
                i.timeoutHandle = H1(
                  ol.bind(
                    null,
                    i,
                    a,
                    za,
                    ap,
                    $g,
                    t,
                    rn,
                    Wo,
                    Ys,
                    Ko,
                    o,
                    A2,
                    bb,
                    0
                  ),
                  f
                );
                break e;
              }
              ol(
                i,
                a,
                za,
                ap,
                $g,
                t,
                rn,
                Wo,
                Ys,
                Ko,
                o,
                T2,
                bb,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Ba(e);
    }
    function ol(e, t, a, i, o, f, d, h, g, v, w, G, C, V) {
      if (e.timeoutHandle = Ls, G = t.subtreeFlags, (G & 8192 || (G & 16785408) === 16785408) && (fp = { stylesheets: null, count: 0, unsuspend: hg }, oi(t), G = yg(), G !== null)) {
        e.cancelPendingCommit = G(
          ud.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            g,
            w,
            E2,
            C,
            V
          )
        ), Su(
          e,
          f,
          d,
          !v
        );
        return;
      }
      ud(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        g
      );
    }
    function ug(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!Ta(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function Su(e, t, a, i) {
      t &= ~Av, t &= ~Wo, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Cl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && Tp(e, a, t);
    }
    function dc() {
      return (mt & (xa | Bu)) === fn ? (mc(0), !1) : !0;
    }
    function Fr() {
      if ($e !== null) {
        if (gt === La)
          var e = $e.return;
        else
          e = $e, mr(), en(e), lh = null, Ky = 0, e = $e;
        for (; e !== null; )
          vm(e.alternate, e), e = e.return;
        $e = null;
      }
    }
    function hc(e, t) {
      var a = e.timeoutHandle;
      a !== Ls && (e.timeoutHandle = Ls, B2(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Fr(), zt = e, $e = a = yn(e.current, null), Fe = t, gt = La, sn = null, Ko = !1, rh = uf(e, t), Ev = !1, Jt = Nc, Ys = rn = Av = Wo = $o = 0, za = lp = null, $g = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Cl(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return Di = t, Tf(), t = gb(), 1e3 < t - pb && (B.recentlyCreatedOwnerStacks = 0, pb = t), wu.discardPendingWarnings(), a;
    }
    function ts(e, t) {
      Ce = null, B.H = kg, B.getCurrentStack = null, ia = !1, Sa = null, t === Ly || t === Vg ? (t = tm(), gt = ep) : t === Eb ? (t = tm(), gt = p1) : gt = t === i1 ? Tv : t !== null && typeof t == "object" && typeof t.then == "function" ? sh : Py, sn = t;
      var a = $e;
      if (a === null)
        Jt = Iy, ho(
          e,
          da(t, e.current)
        );
      else
        switch (a.mode & Ql && ru(a), hl(), gt) {
          case Py:
            ee !== null && typeof ee.markComponentErrored == "function" && ee.markComponentErrored(
              a,
              t,
              Fe
            );
            break;
          case qs:
          case js:
          case ep:
          case sh:
          case tp:
            ee !== null && typeof ee.markComponentSuspended == "function" && ee.markComponentSuspended(
              a,
              t,
              Fe
            );
        }
    }
    function Ir() {
      var e = B.H;
      return B.H = kg, e === null ? kg : e;
    }
    function wm() {
      var e = B.A;
      return B.A = v2, e;
    }
    function Pr() {
      Jt = Bs, Ko || (Fe & 4194048) !== Fe && Pn.current !== null || (rh = !0), ($o & 134217727) === 0 && (Wo & 134217727) === 0 || zt === null || Su(
        zt,
        Fe,
        rn,
        !1
      );
    }
    function ed(e, t, a) {
      var i = mt;
      mt |= xa;
      var o = Ir(), f = wm();
      if (zt !== e || Fe !== t) {
        if (Xt) {
          var d = e.memoizedUpdaters;
          0 < d.size && (To(e, Fe), d.clear()), kl(e, t);
        }
        ap = null, hc(e, t);
      }
      Za(t), t = !1, d = Jt;
      e: do
        try {
          if (gt !== La && $e !== null) {
            var h = $e, g = sn;
            switch (gt) {
              case Tv:
                Fr(), d = Kg;
                break e;
              case ep:
              case qs:
              case js:
              case sh:
                Pn.current === null && (t = !0);
                var v = gt;
                if (gt = La, sn = null, fi(e, h, g, v), a && rh) {
                  d = Nc;
                  break e;
                }
                break;
              default:
                v = gt, gt = La, sn = null, fi(e, h, g, v);
            }
          }
          td(), d = Jt;
          break;
        } catch (w) {
          ts(e, w);
        }
      while (!0);
      return t && e.shellSuspendCounter++, mr(), mt = i, B.H = o, B.A = f, lu(), $e === null && (zt = null, Fe = 0, Tf()), d;
    }
    function td() {
      for (; $e !== null; ) Bm($e);
    }
    function Nm(e, t) {
      var a = mt;
      mt |= xa;
      var i = Ir(), o = wm();
      if (zt !== e || Fe !== t) {
        if (Xt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (To(e, Fe), f.clear()), kl(e, t);
        }
        ap = null, Wg = Xn() + v1, hc(e, t);
      } else
        rh = uf(
          e,
          t
        );
      Za(t);
      e: do
        try {
          if (gt !== La && $e !== null)
            t: switch (t = $e, f = sn, gt) {
              case Py:
                gt = La, sn = null, fi(
                  e,
                  t,
                  f,
                  Py
                );
                break;
              case qs:
              case js:
                if (em(f)) {
                  gt = La, sn = null, ld(t);
                  break;
                }
                t = function() {
                  gt !== qs && gt !== js || zt !== e || (gt = tp), Ba(e);
                }, f.then(t, t);
                break e;
              case ep:
                gt = tp;
                break e;
              case p1:
                gt = Sv;
                break e;
              case tp:
                em(f) ? (gt = La, sn = null, ld(t)) : (gt = La, sn = null, fi(
                  e,
                  t,
                  f,
                  tp
                ));
                break;
              case Sv:
                var d = null;
                switch ($e.tag) {
                  case 26:
                    d = $e.memoizedState;
                  case 5:
                  case 27:
                    var h = $e;
                    if (!d || cs(d)) {
                      gt = La, sn = null;
                      var g = h.sibling;
                      if (g !== null) $e = g;
                      else {
                        var v = h.return;
                        v !== null ? ($e = v, ls(v)) : $e = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                gt = La, sn = null, fi(
                  e,
                  t,
                  f,
                  Sv
                );
                break;
              case sh:
                gt = La, sn = null, fi(
                  e,
                  t,
                  f,
                  sh
                );
                break;
              case Tv:
                Fr(), Jt = Kg;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          B.actQueue !== null ? td() : _m();
          break;
        } catch (w) {
          ts(e, w);
        }
      while (!0);
      return mr(), B.H = i, B.A = o, mt = a, $e !== null ? (ee !== null && typeof ee.markRenderYielded == "function" && ee.markRenderYielded(), Nc) : (lu(), zt = null, Fe = 0, Tf(), Jt);
    }
    function _m() {
      for (; $e !== null && !Eg(); )
        Bm($e);
    }
    function Bm(e) {
      var t = e.alternate;
      (e.mode & Ql) !== Mt ? (yr(e), t = ce(
        e,
        Zr,
        t,
        e,
        Di
      ), ru(e)) : t = ce(
        e,
        Zr,
        t,
        e,
        Di
      ), e.memoizedProps = e.pendingProps, t === null ? ls(e) : $e = t;
    }
    function ld(e) {
      var t = ce(e, ad, e);
      e.memoizedProps = e.pendingProps, t === null ? ls(e) : $e = t;
    }
    function ad(e) {
      var t = e.alternate, a = (e.mode & Ql) !== Mt;
      switch (a && yr(e), e.tag) {
        case 15:
        case 0:
          t = hm(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Fe
          );
          break;
        case 11:
          t = hm(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Fe
          );
          break;
        case 5:
          en(e);
        default:
          vm(t, e), e = $e = Vh(e, Di), t = Zr(t, e, Di);
      }
      return a && ru(e), t;
    }
    function fi(e, t, a, i) {
      mr(), en(t), lh = null, Ky = 0;
      var o = t.return;
      try {
        if (Xf(
          e,
          o,
          t,
          a,
          Fe
        )) {
          Jt = Iy, ho(
            e,
            da(a, e.current)
          ), $e = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw $e = o, f;
        Jt = Iy, ho(
          e,
          da(a, e.current)
        ), $e = null;
        return;
      }
      t.flags & 32768 ? (ct || i === Py ? e = !0 : rh || (Fe & 536870912) !== 0 ? e = !1 : (Ko = e = !0, (i === qs || i === js || i === ep || i === sh) && (i = Pn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), nd(t, e)) : ls(t);
    }
    function ls(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          nd(
            t,
            Ko
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, yr(t), a = ce(
          t,
          Fp,
          a,
          t,
          Di
        ), (t.mode & Ql) !== Mt && Fi(t), a !== null) {
          $e = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          $e = t;
          return;
        }
        $e = t = e;
      } while (t !== null);
      Jt === Nc && (Jt = y1);
    }
    function nd(e, t) {
      do {
        var a = Ip(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, $e = a;
          return;
        }
        if ((e.mode & Ql) !== Mt) {
          Fi(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          $e = e;
          return;
        }
        $e = e = a;
      } while (e !== null);
      Jt = Kg, $e = null;
    }
    function ud(e, t, a, i, o, f, d, h, g) {
      e.cancelPendingCommit = null;
      do
        vo();
      while (Zl !== Gs);
      if (wu.flushLegacyContextWarning(), wu.flushPendingUnsafeLifecycleWarnings(), (mt & (xa | Bu)) !== fn)
        throw Error("Should not already be working.");
      if (ee !== null && typeof ee.markCommitStarted == "function" && ee.markCommitStarted(a), t === null) At();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= I0, A0(
          e,
          a,
          f,
          d,
          h,
          g
        ), e === zt && ($e = zt = null, Fe = 0), dh = t, Io = e, Po = a, Rv = f, Ov = o, E1 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Gm(Bo, function() {
          return as(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), qg = Fd(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = B.T, B.T = null, o = Oe.p, Oe.p = El, d = mt, mt |= Bu;
          try {
            Kr(e, t, a);
          } finally {
            mt = d, Oe.p = o, B.T = i;
          }
        }
        Zl = b1, Hn(), id(), ig();
      }
    }
    function Hn() {
      if (Zl === b1) {
        Zl = Gs;
        var e = Io, t = dh, a = Po, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = B.T, B.T = null;
          var o = Oe.p;
          Oe.p = El;
          var f = mt;
          mt |= Bu;
          try {
            ch = a, oh = e, Dm(t, e), oh = ch = null, a = jv;
            var d = qp(e.containerInfo), h = a.focusedElem, g = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Bp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (g !== null && qh(h)) {
                var v = g.start, w = g.end;
                if (w === void 0 && (w = v), "selectionStart" in h)
                  h.selectionStart = v, h.selectionEnd = Math.min(
                    w,
                    h.value.length
                  );
                else {
                  var G = h.ownerDocument || document, C = G && G.defaultView || window;
                  if (C.getSelection) {
                    var V = C.getSelection(), oe = h.textContent.length, De = Math.min(
                      g.start,
                      oe
                    ), Rt = g.end === void 0 ? De : Math.min(g.end, oe);
                    !V.extend && De > Rt && (d = Rt, Rt = De, De = d);
                    var et = Bh(
                      h,
                      De
                    ), T = Bh(
                      h,
                      Rt
                    );
                    if (et && T && (V.rangeCount !== 1 || V.anchorNode !== et.node || V.anchorOffset !== et.offset || V.focusNode !== T.node || V.focusOffset !== T.offset)) {
                      var E = G.createRange();
                      E.setStart(et.node, et.offset), V.removeAllRanges(), De > Rt ? (V.addRange(E), V.extend(T.node, T.offset)) : (E.setEnd(T.node, T.offset), V.addRange(E));
                    }
                  }
                }
              }
              for (G = [], V = h; V = V.parentNode; )
                V.nodeType === 1 && G.push({
                  element: V,
                  left: V.scrollLeft,
                  top: V.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < G.length; h++) {
                var A = G[h];
                A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
              }
            }
            d0 = !!qv, jv = qv = null;
          } finally {
            mt = f, Oe.p = o, B.T = i;
          }
        }
        e.current = t, Zl = S1;
      }
    }
    function id() {
      if (Zl === S1) {
        Zl = Gs;
        var e = Io, t = dh, a = Po, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = B.T, B.T = null;
          var o = Oe.p;
          Oe.p = El;
          var f = mt;
          mt |= Bu;
          try {
            ee !== null && typeof ee.markLayoutEffectsStarted == "function" && ee.markLayoutEffectsStarted(a), ch = a, oh = e, Rm(
              e,
              t.alternate,
              t
            ), oh = ch = null, ee !== null && typeof ee.markLayoutEffectsStopped == "function" && ee.markLayoutEffectsStopped();
          } finally {
            mt = f, Oe.p = o, B.T = i;
          }
        }
        Zl = T1;
      }
    }
    function ig() {
      if (Zl === x2 || Zl === T1) {
        Zl = Gs, V0();
        var e = Io, t = dh, a = Po, i = E1, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? Zl = zv : (Zl = Gs, dh = Io = null, wn(e, e.pendingLanes), Vs = 0, up = null);
        var f = e.pendingLanes;
        if (f === 0 && (Fo = null), o || So(e), o = xh(a), t = t.stateNode, Tl && typeof Tl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case El:
                var h = Md;
                break;
              case on:
                h = bs;
                break;
              case Mu:
                h = Bo;
                break;
              case wd:
                h = Ss;
                break;
              default:
                h = Bo;
            }
            Tl.onCommitFiberRoot(
              bi,
              t,
              h,
              d
            );
          } catch (G) {
            na || (na = !0, console.error(
              "React instrumentation encountered an error: %s",
              G
            ));
          }
        if (Xt && e.memoizedUpdaters.clear(), Cm(), i !== null) {
          d = B.T, h = Oe.p, Oe.p = El, B.T = null;
          try {
            var g = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var v = i[t], w = cg(v.stack);
              ce(
                v.source,
                g,
                v.value,
                w
              );
            }
          } finally {
            B.T = d, Oe.p = h;
          }
        }
        (Po & 3) !== 0 && vo(), Ba(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (Yg = !0, e === Dv ? np++ : (np = 0, Dv = e)) : np = 0, mc(0), At();
      }
    }
    function cg(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function wn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, gn(t)));
    }
    function vo(e) {
      return Hn(), id(), ig(), as();
    }
    function as() {
      if (Zl !== zv) return !1;
      var e = Io, t = Rv;
      Rv = 0;
      var a = xh(Po), i = Mu > a ? Mu : a;
      a = B.T;
      var o = Oe.p;
      try {
        Oe.p = i, B.T = null, i = Ov, Ov = null;
        var f = Io, d = Po;
        if (Zl = Gs, dh = Io = null, Po = 0, (mt & (xa | Bu)) !== fn)
          throw Error("Cannot flush passive effects while already rendering.");
        Mv = !0, Fg = !1, ee !== null && typeof ee.markPassiveEffectsStarted == "function" && ee.markPassiveEffectsStarted(d);
        var h = mt;
        if (mt |= Bu, Mm(f.current), Ff(
          f,
          f.current,
          d,
          i
        ), ee !== null && typeof ee.markPassiveEffectsStopped == "function" && ee.markPassiveEffectsStopped(), So(f), mt = h, mc(0, !1), Fg ? f === up ? Vs++ : (Vs = 0, up = f) : Vs = 0, Fg = Mv = !1, Tl && typeof Tl.onPostCommitFiberRoot == "function")
          try {
            Tl.onPostCommitFiberRoot(bi, f);
          } catch (v) {
            na || (na = !0, console.error(
              "React instrumentation encountered an error: %s",
              v
            ));
          }
        var g = f.current.stateNode;
        return g.effectDuration = 0, g.passiveEffectDuration = 0, !0;
      } finally {
        Oe.p = o, B.T = a, wn(e, t);
      }
    }
    function bo(e, t, a) {
      t = da(a, t), t = Dl(e.stateNode, t, 2), e = Ia(e, t, 2), e !== null && (Gc(e, 2), Ba(e));
    }
    function Ae(e, t, a) {
      if (hh = !1, e.tag === 3)
        bo(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            bo(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Fo === null || !Fo.has(i))) {
              e = da(a, e), a = Bt(2), i = Ia(t, a, 2), i !== null && (Vf(
                a,
                i,
                t,
                e
              ), Gc(i, 2), Ba(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function qm(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new S2();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (Ev = !0, o.add(a), i = N0.bind(null, e, t, a), Xt && To(e, a), t.then(i, i));
    }
    function N0(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Hm() && B.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), zt === e && (Fe & a) === a && (Jt === Bs || Jt === bv && (Fe & 62914560) === Fe && Xn() - xv < g1 ? (mt & xa) === fn && hc(e, 0) : Av |= a, Ys === Fe && (Ys = 0)), Ba(e);
    }
    function jm(e, t) {
      t === 0 && (t = cf()), e = Jl(e, t), e !== null && (Gc(e, t), Ba(e));
    }
    function ns(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), jm(e, a);
    }
    function si(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), jm(e, a);
    }
    function cd(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Co;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ce(
            o,
            Ym,
            i,
            o,
            (o.mode & hb) === Mt
          ) : cd(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? ce(
            o,
            Ym,
            i,
            o
          ) : o.subtreeFlags & 67108864 && ce(
            o,
            cd,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function Ym(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      Ze(!0);
      try {
        pa(t), a && es(t), bu(e, t.alternate, t, !1), a && Wr(e, t, 0, null, !1, 0);
      } finally {
        Ze(!1);
      }
    }
    function So(e) {
      var t = !0;
      e.current.mode & (ca | Hu) || (t = !1), cd(
        e,
        e.current,
        t
      );
    }
    function un(e) {
      if ((mt & xa) === fn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = P(e) || "ReactComponent", Ig !== null) {
            if (Ig.has(t)) return;
            Ig.add(t);
          } else Ig = /* @__PURE__ */ new Set([t]);
          ce(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function To(e, t) {
      Xt && e.memoizedUpdaters.forEach(function(a) {
        au(e, a, t);
      });
    }
    function Gm(e, t) {
      var a = B.actQueue;
      return a !== null ? (a.push(t), O2) : Dd(e, t);
    }
    function og(e) {
      Hm() && B.actQueue === null && ce(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          P(e)
        );
      });
    }
    function Ba(e) {
      e !== mh && e.next === null && (mh === null ? Pg = mh = e : mh = mh.next = e), e0 = !0, B.actQueue !== null ? Cv || (Cv = !0, tl()) : Uv || (Uv = !0, tl());
    }
    function mc(e, t) {
      if (!Hv && e0) {
        Hv = !0;
        do
          for (var a = !1, i = Pg; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Cl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, sd(i, f));
            } else
              f = Fe, f = fa(
                i,
                i === zt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Ls
              ), (f & 3) === 0 || uf(i, f) || (a = !0, sd(i, f));
            i = i.next;
          }
        while (a);
        Hv = !1;
      }
    }
    function od() {
      fd();
    }
    function fd() {
      e0 = Cv = Uv = !1;
      var e = 0;
      Xs !== 0 && (Eo() && (e = Xs), Xs = 0);
      for (var t = Xn(), a = null, i = Pg; i !== null; ) {
        var o = i.next, f = Nn(i, t);
        f === 0 ? (i.next = null, a === null ? Pg = o : a.next = o, o === null && (mh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (e0 = !0)), i = o;
      }
      mc(e);
    }
    function Nn(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Cl(f), h = 1 << d, g = o[d];
        g === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Sp(h, t)) : g <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = zt, a = Fe, a = fa(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ls
      ), i = e.callbackNode, a === 0 || e === t && (gt === qs || gt === js) || e.cancelPendingCommit !== null)
        return i !== null && rd(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || uf(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || B.actQueue !== null && i !== wv)
          rd(i);
        else return t;
        switch (xh(a)) {
          case El:
          case on:
            a = bs;
            break;
          case Mu:
            a = Bo;
            break;
          case wd:
            a = Ss;
            break;
          default:
            a = Bo;
        }
        return i = jt.bind(null, e), B.actQueue !== null ? (B.actQueue.push(i), a = wv) : a = Dd(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && rd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function jt(e, t) {
      if (Yg = jg = !1, Zl !== Gs && Zl !== zv)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (vo() && e.callbackNode !== a)
        return null;
      var i = Fe;
      return i = fa(
        e,
        e === zt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ls
      ), i === 0 ? null : (el(
        e,
        i,
        t
      ), Nn(e, Xn()), e.callbackNode != null && e.callbackNode === a ? jt.bind(null, e) : null);
    }
    function sd(e, t) {
      if (vo()) return null;
      jg = Yg, Yg = !1, el(e, t, !0);
    }
    function rd(e) {
      e !== wv && e !== null && G0(e);
    }
    function tl() {
      B.actQueue !== null && B.actQueue.push(function() {
        return fd(), null;
      }), q2(function() {
        (mt & (xa | Bu)) !== fn ? Dd(
          Md,
          od
        ) : fd();
      });
    }
    function Vm() {
      return Xs === 0 && (Xs = Eh()), Xs;
    }
    function Xm(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (F(e, "action"), Kc("" + e));
    }
    function Qm(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Ot(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Xm(
          (o[ua] || null).action
        ), d = i.submitter;
        d && (t = (t = d[ua] || null) ? Xm(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new be(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Xs !== 0) {
                    var g = d ? Qm(
                      o,
                      d
                    ) : new FormData(o), v = {
                      pending: !0,
                      data: g,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(v), tc(
                      a,
                      v,
                      null,
                      g
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), g = d ? Qm(
                    o,
                    d
                  ) : new FormData(o), v = {
                    pending: !0,
                    data: g,
                    method: o.method,
                    action: f
                  }, Object.freeze(v), tc(
                    a,
                    v,
                    f,
                    g
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function gl(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        mv(i);
      }
      e.currentTarget = null;
    }
    function _n(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], g = h.instance, v = h.currentTarget;
              if (h = h.listener, g !== o && f.isPropagationStopped())
                break e;
              g !== null ? ce(
                g,
                gl,
                f,
                h,
                v
              ) : gl(f, h, v), o = g;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], g = h.instance, v = h.currentTarget, h = h.listener, g !== o && f.isPropagationStopped())
                break e;
              g !== null ? ce(
                g,
                gl,
                f,
                h,
                v
              ) : gl(f, h, v), o = g;
            }
        }
      }
    }
    function ke(e, t) {
      Nv.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[py];
      a === void 0 && (a = t[py] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (hd(t, e, 2, !1), a.add(i));
    }
    function dd(e, t, a) {
      Nv.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), hd(
        a,
        e,
        i,
        t
      );
    }
    function Lm(e) {
      if (!e[t0]) {
        e[t0] = !0, xg.forEach(function(a) {
          a !== "selectionchange" && (Nv.has(a) || dd(a, !1, e), dd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[t0] || (t[t0] = !0, dd("selectionchange", !1, t));
      }
    }
    function hd(e, t, a, i) {
      switch (xd(t)) {
        case El:
          var o = q0;
          break;
        case on:
          o = Ad;
          break;
        default:
          o = mi;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !U || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Yl(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var g = d.tag;
                if ((g === 3 || g === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = nu(h), d === null) return;
              if (g = d.tag, g === 5 || g === 6 || g === 26 || g === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      nr(function() {
        var v = f, w = Vi(a), G = [];
        e: {
          var C = db.get(e);
          if (C !== void 0) {
            var V = be, oe = e;
            switch (e) {
              case "keypress":
                if ($c(a) === 0) break e;
              case "keydown":
              case "keyup":
                V = LS;
                break;
              case "focusin":
                oe = "focus", V = tt;
                break;
              case "focusout":
                oe = "blur", V = tt;
                break;
              case "beforeblur":
              case "afterblur":
                V = tt;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                V = Ve;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                V = xe;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                V = JS;
                break;
              case ob:
              case fb:
              case sb:
                V = Z0;
                break;
              case rb:
                V = $S;
                break;
              case "scroll":
              case "scrollend":
                V = D;
                break;
              case "wheel":
                V = FS;
                break;
              case "copy":
              case "cut":
              case "paste":
                V = qS;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                V = eb;
                break;
              case "toggle":
              case "beforetoggle":
                V = PS;
            }
            var De = (t & 4) !== 0, Rt = !De && (e === "scroll" || e === "scrollend"), et = De ? C !== null ? C + "Capture" : null : C;
            De = [];
            for (var T = v, E; T !== null; ) {
              var A = T;
              if (E = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || E === null || et === null || (A = cu(T, et), A != null && De.push(
                Gl(
                  T,
                  A,
                  E
                )
              )), Rt) break;
              T = T.return;
            }
            0 < De.length && (C = new V(
              C,
              oe,
              null,
              a,
              w
            ), G.push({
              event: C,
              listeners: De
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (C = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", C && a !== s && (oe = a.relatedTarget || a.fromElement) && (nu(oe) || oe[Ti]))
              break e;
            if ((V || C) && (C = w.window === w ? w : (C = w.ownerDocument) ? C.defaultView || C.parentWindow : window, V ? (oe = a.relatedTarget || a.toElement, V = v, oe = oe ? nu(oe) : null, oe !== null && (Rt = je(oe), De = oe.tag, oe !== Rt || De !== 5 && De !== 27 && De !== 6) && (oe = null)) : (V = null, oe = v), V !== oe)) {
              if (De = Ve, A = "onMouseLeave", et = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (De = eb, A = "onPointerLeave", et = "onPointerEnter", T = "pointer"), Rt = V == null ? C : qu(V), E = oe == null ? C : qu(oe), C = new De(
                A,
                T + "leave",
                V,
                a,
                w
              ), C.target = Rt, C.relatedTarget = E, A = null, nu(w) === v && (De = new De(
                et,
                T + "enter",
                oe,
                a,
                w
              ), De.target = E, De.relatedTarget = Rt, A = De), Rt = A, V && oe)
                t: {
                  for (De = V, et = oe, T = 0, E = De; E; E = fl(E))
                    T++;
                  for (E = 0, A = et; A; A = fl(A))
                    E++;
                  for (; 0 < T - E; )
                    De = fl(De), T--;
                  for (; 0 < E - T; )
                    et = fl(et), E--;
                  for (; T--; ) {
                    if (De === et || et !== null && De === et.alternate)
                      break t;
                    De = fl(De), et = fl(et);
                  }
                  De = null;
                }
              else De = null;
              V !== null && Zm(
                G,
                C,
                V,
                De,
                !1
              ), oe !== null && Rt !== null && Zm(
                G,
                Rt,
                oe,
                De,
                !0
              );
            }
          }
          e: {
            if (C = v ? qu(v) : window, V = C.nodeName && C.nodeName.toLowerCase(), V === "select" || V === "input" && C.type === "file")
              var X = Nh;
            else if (Hp(C))
              if (ib)
                X = U0;
              else {
                X = _h;
                var I = D0;
              }
            else
              V = C.nodeName, !V || V.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? v && Gi(v.elementType) && (X = Nh) : X = M0;
            if (X && (X = X(e, v))) {
              or(
                G,
                X,
                a,
                w
              );
              break e;
            }
            I && I(e, C, v), e === "focusout" && v && C.type === "number" && v.memoizedProps.value != null && Is(C, "number", C.value);
          }
          switch (I = v ? qu(v) : window, e) {
            case "focusin":
              (Hp(I) || I.contentEditable === "true") && (Qd = I, J0 = v, By = null);
              break;
            case "focusout":
              By = J0 = Qd = null;
              break;
            case "mousedown":
              K0 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              K0 = !1, jp(
                G,
                a,
                w
              );
              break;
            case "selectionchange":
              if (a2) break;
            case "keydown":
            case "keyup":
              jp(
                G,
                a,
                w
              );
          }
          var _e;
          if (k0)
            e: {
              switch (e) {
                case "compositionstart":
                  var fe = "onCompositionStart";
                  break e;
                case "compositionend":
                  fe = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  fe = "onCompositionUpdate";
                  break e;
              }
              fe = void 0;
            }
          else
            Xd ? jl(e, a) && (fe = "onCompositionEnd") : e === "keydown" && a.keyCode === tb && (fe = "onCompositionStart");
          fe && (lb && a.locale !== "ko" && (Xd || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && Xd && (_e = ou()) : (k = w, H = "value" in k ? k.value : k.textContent, Xd = !0)), I = us(
            v,
            fe
          ), 0 < I.length && (fe = new Pv(
            fe,
            e,
            null,
            a,
            w
          ), G.push({
            event: fe,
            listeners: I
          }), _e ? fe.data = _e : (_e = Lu(a), _e !== null && (fe.data = _e)))), (_e = t2 ? cr(e, a) : vf(e, a)) && (fe = us(
            v,
            "onBeforeInput"
          ), 0 < fe.length && (I = new YS(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            w
          ), G.push({
            event: I,
            listeners: fe
          }), I.data = _e)), Ot(
            G,
            e,
            v,
            a,
            w
          );
        }
        _n(G, t);
      });
    }
    function Gl(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function us(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = cu(e, a), o != null && i.unshift(
          Gl(e, o, f)
        ), o = cu(e, t), o != null && i.push(
          Gl(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function fl(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Zm(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, g = h.alternate, v = h.stateNode;
        if (h = h.tag, g !== null && g === i) break;
        h !== 5 && h !== 26 && h !== 27 || v === null || (g = v, o ? (v = cu(a, f), v != null && d.unshift(
          Gl(a, v, g)
        )) : o || (v = cu(a, f), v != null && d.push(
          Gl(a, v, g)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Bn(e, t) {
      Jc(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Hy || (Hy = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Va,
        possibleRegistrationNames: Ac
      };
      Gi(e) || typeof t.is == "string" || Ch(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Dt(e, t, a, i) {
      t !== a && (a = vl(a), vl(t) !== a && (i[e] = t));
    }
    function ri(e, t, a) {
      t.forEach(function(i) {
        a[Jm(i)] = i === "style" ? pc(e) : e.getAttribute(i);
      });
    }
    function qa(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function md(e, t) {
      return e = e.namespaceURI === Os || e.namespaceURI === Qo ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function vl(e) {
      return _(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        ge(e)
      ), ae(e)), (typeof e == "string" ? e : "" + e).replace(D2, `
`).replace(M2, "");
    }
    function km(e, t) {
      return t = vl(t), vl(e) === t;
    }
    function Tu() {
    }
    function ut(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (pf(i, t, !1), t === "body" || t === "textarea" && i === "" || Yi(e, i)) : (typeof i == "number" || typeof i == "bigint") && (pf("" + i, t, !1), t !== "body" && Yi(e, "" + i));
          break;
        case "className":
          ff(e, "class", i);
          break;
        case "tabIndex":
          ff(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ff(e, a, i);
          break;
        case "style":
          gf(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            ff(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          F(i, a), i = Kc("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || n0 || (n0 = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || a0 || (a0 = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || l0 ? t !== "button" || o.type == null || o.type === "submit" || l0 ? typeof i == "function" && (o.name == null || O1 || (O1 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || n0 || (n0 = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || a0 || (a0 = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (l0 = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (l0 = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && ut(e, t, "name", o.name, o, null), ut(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), ut(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), ut(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (ut(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), ut(e, t, "method", o.method, o, null), ut(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          F(i, a), i = Kc("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && qa(a, i), e.onclick = Tu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && qa(a, i), ke("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && qa(a, i), ke("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          F(i, a), a = Kc("" + i), e.setAttributeNS(Qs, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (F(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || u0[a] || (u0[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (F(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (F(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (F(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          ke("beforetoggle", e), ke("toggle", e), of(e, "popover", i);
          break;
        case "xlinkActuate":
          ka(
            e,
            Qs,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          ka(
            e,
            Qs,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          ka(
            e,
            Qs,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          ka(
            e,
            Qs,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          ka(
            e,
            Qs,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          ka(
            e,
            Qs,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          ka(
            e,
            _v,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          ka(
            e,
            _v,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          ka(
            e,
            _v,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), of(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          D1 || i == null || typeof i != "object" || (D1 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = ar(a), of(e, a, i)) : Va.hasOwnProperty(a) && i != null && typeof i != "function" && qa(a, i);
      }
    }
    function yc(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          gf(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Yi(e, i) : (typeof i == "number" || typeof i == "bigint") && Yi(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && qa(a, i), ke("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && qa(a, i), ke("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && qa(a, i), e.onclick = Tu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Va.hasOwnProperty(a))
            i != null && typeof i != "function" && qa(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[ua] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : of(e, a, i);
            }
      }
    }
    function Yt(e, t, a) {
      switch (Bn(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          ke("error", e), ke("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    ut(e, t, f, d, a, null);
                }
            }
          o && ut(e, t, "srcSet", a.srcSet, a, null), i && ut(e, t, "src", a.src, a, null);
          return;
        case "input":
          Yu("input", a), ke("invalid", e);
          var h = f = d = o = null, g = null, v = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var w = a[i];
              if (w != null)
                switch (i) {
                  case "name":
                    o = w;
                    break;
                  case "type":
                    d = w;
                    break;
                  case "checked":
                    g = w;
                    break;
                  case "defaultChecked":
                    v = w;
                    break;
                  case "value":
                    f = w;
                    break;
                  case "defaultValue":
                    h = w;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (w != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    ut(e, t, i, w, a, null);
                }
            }
          Gu(e, a), Op(
            e,
            f,
            h,
            g,
            v,
            d,
            o,
            !1
          ), uu(e);
          return;
        case "select":
          Yu("select", a), ke("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  ut(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          hf(e, a), t = f, a = d, e.multiple = !!i, t != null ? iu(e, !!i, t, !1) : a != null && iu(e, !!i, a, !0);
          return;
        case "textarea":
          Yu("textarea", a), ke("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  ut(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          hn(e, a), Rh(e, i, o, f), uu(e);
          return;
        case "option":
          zh(e, a);
          for (g in a)
            if (a.hasOwnProperty(g) && (i = a[g], i != null))
              switch (g) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  ut(e, t, g, i, a, null);
              }
          return;
        case "dialog":
          ke("beforetoggle", e), ke("toggle", e), ke("cancel", e), ke("close", e);
          break;
        case "iframe":
        case "object":
          ke("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < ip.length; i++)
            ke(ip[i], e);
          break;
        case "image":
          ke("error", e), ke("load", e);
          break;
        case "details":
          ke("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          ke("error", e), ke("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (v in a)
            if (a.hasOwnProperty(v) && (i = a[v], i != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  ut(e, t, v, i, a, null);
              }
          return;
        default:
          if (Gi(t)) {
            for (w in a)
              a.hasOwnProperty(w) && (i = a[w], i !== void 0 && yc(
                e,
                t,
                w,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && ut(e, t, h, i, a, null));
    }
    function fg(e, t, a, i) {
      switch (Bn(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, g = null, v = null, w = null;
          for (V in a) {
            var G = a[V];
            if (a.hasOwnProperty(V) && G != null)
              switch (V) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  g = G;
                default:
                  i.hasOwnProperty(V) || ut(
                    e,
                    t,
                    V,
                    null,
                    i,
                    G
                  );
              }
          }
          for (var C in i) {
            var V = i[C];
            if (G = a[C], i.hasOwnProperty(C) && (V != null || G != null))
              switch (C) {
                case "type":
                  f = V;
                  break;
                case "name":
                  o = V;
                  break;
                case "checked":
                  v = V;
                  break;
                case "defaultChecked":
                  w = V;
                  break;
                case "value":
                  d = V;
                  break;
                case "defaultValue":
                  h = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  V !== G && ut(
                    e,
                    t,
                    C,
                    V,
                    i,
                    G
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || R1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), R1 = !0), !t || i || z1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), z1 = !0), Vu(
            e,
            d,
            h,
            g,
            v,
            w,
            f,
            o
          );
          return;
        case "select":
          V = d = h = C = null;
          for (f in a)
            if (g = a[f], a.hasOwnProperty(f) && g != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  V = g;
                default:
                  i.hasOwnProperty(f) || ut(
                    e,
                    t,
                    f,
                    null,
                    i,
                    g
                  );
              }
          for (o in i)
            if (f = i[o], g = a[o], i.hasOwnProperty(o) && (f != null || g != null))
              switch (o) {
                case "value":
                  C = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== g && ut(
                    e,
                    t,
                    o,
                    f,
                    i,
                    g
                  );
              }
          i = h, t = d, a = V, C != null ? iu(e, !!t, C, !1) : !!a != !!t && (i != null ? iu(e, !!t, i, !0) : iu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          V = C = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  ut(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  C = o;
                  break;
                case "defaultValue":
                  V = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && ut(e, t, d, o, i, f);
              }
          Ps(e, C, V);
          return;
        case "option":
          for (var oe in a)
            if (C = a[oe], a.hasOwnProperty(oe) && C != null && !i.hasOwnProperty(oe))
              switch (oe) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  ut(
                    e,
                    t,
                    oe,
                    null,
                    i,
                    C
                  );
              }
          for (g in i)
            if (C = i[g], V = a[g], i.hasOwnProperty(g) && C !== V && (C != null || V != null))
              switch (g) {
                case "selected":
                  e.selected = C && typeof C != "function" && typeof C != "symbol";
                  break;
                default:
                  ut(
                    e,
                    t,
                    g,
                    C,
                    i,
                    V
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var De in a)
            C = a[De], a.hasOwnProperty(De) && C != null && !i.hasOwnProperty(De) && ut(
              e,
              t,
              De,
              null,
              i,
              C
            );
          for (v in i)
            if (C = i[v], V = a[v], i.hasOwnProperty(v) && C !== V && (C != null || V != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  ut(
                    e,
                    t,
                    v,
                    C,
                    i,
                    V
                  );
              }
          return;
        default:
          if (Gi(t)) {
            for (var Rt in a)
              C = a[Rt], a.hasOwnProperty(Rt) && C !== void 0 && !i.hasOwnProperty(Rt) && yc(
                e,
                t,
                Rt,
                void 0,
                i,
                C
              );
            for (w in i)
              C = i[w], V = a[w], !i.hasOwnProperty(w) || C === V || C === void 0 && V === void 0 || yc(
                e,
                t,
                w,
                C,
                i,
                V
              );
            return;
          }
      }
      for (var et in a)
        C = a[et], a.hasOwnProperty(et) && C != null && !i.hasOwnProperty(et) && ut(e, t, et, null, i, C);
      for (G in i)
        C = i[G], V = a[G], !i.hasOwnProperty(G) || C === V || C == null && V == null || ut(e, t, G, C, i, V);
    }
    function Jm(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function pc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Km(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (te(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Rs.has(f) ? (te(d, f), i += o + f.replace(Uu, "-$1").toLowerCase().replace(Cu, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Uu, "-$1").toLowerCase().replace(Cu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = vl(i), vl(t) !== i && (a.style = pc(e)));
      }
    }
    function Vl(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (F(i, t), e === "" + i)
              return;
        }
      Dt(t, e, i, f);
    }
    function $m(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Dt(t, e, i, f);
    }
    function Wm(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (F(i, a), e === "" + i)
              return;
        }
      Dt(t, e, i, f);
    }
    function sg(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (F(i, t), e === "" + i))
              return;
        }
      Dt(t, e, i, f);
    }
    function st(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (F(i, t), a = Kc("" + i), e === a)
              return;
        }
      Dt(t, e, i, f);
    }
    function bt(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Gi(t)) {
        for (var g in a)
          if (a.hasOwnProperty(g)) {
            var v = a[g];
            if (v != null) {
              if (Va.hasOwnProperty(g))
                typeof v != "function" && qa(g, v);
              else if (a.suppressHydrationWarning !== !0)
                switch (g) {
                  case "children":
                    typeof v != "string" && typeof v != "number" || Dt(
                      "children",
                      e.textContent,
                      v,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = md(e, v), Dt(
                      g,
                      d,
                      v,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(g), Km(e, v, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(g.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      g
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Ap(
                      e,
                      "class",
                      v
                    ), Dt(
                      "className",
                      d,
                      v,
                      o
                    );
                    continue;
                  default:
                    i.context === Bc && t !== "svg" && t !== "math" ? f.delete(g.toLowerCase()) : f.delete(g), d = Ap(
                      e,
                      g,
                      v
                    ), Dt(
                      g,
                      d,
                      v,
                      o
                    );
                }
            }
          }
      } else
        for (v in a)
          if (a.hasOwnProperty(v) && (g = a[v], g != null)) {
            if (Va.hasOwnProperty(v))
              typeof g != "function" && qa(v, g);
            else if (a.suppressHydrationWarning !== !0)
              switch (v) {
                case "children":
                  typeof g != "string" && typeof g != "number" || Dt(
                    "children",
                    e.textContent,
                    g,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, g = g ? g.__html : void 0, g != null && (g = md(e, g), d !== g && (o[v] = { __html: d }));
                  continue;
                case "className":
                  Vl(
                    e,
                    v,
                    "class",
                    g,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Vl(
                    e,
                    v,
                    "tabindex",
                    g,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(v), Km(e, g, o);
                  continue;
                case "multiple":
                  f.delete(v), Dt(
                    v,
                    e.multiple,
                    g,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(v), Dt(
                    v,
                    e.muted,
                    g,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Dt(
                    v,
                    e.autofocus,
                    g,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(v), d = e.getAttribute("data"), Dt(
                      v,
                      d,
                      g,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(g !== "" || t === "a" && v === "href" || t === "object" && v === "data")) {
                    console.error(
                      v === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      v,
                      v
                    );
                    continue;
                  }
                  st(
                    e,
                    v,
                    v,
                    g,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(v), typeof g == "function") {
                    f.delete(v.toLowerCase()), v === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === U2) {
                    f.delete(v.toLowerCase()), Dt(
                      v,
                      "function",
                      g,
                      o
                    );
                    continue;
                  }
                  st(
                    e,
                    v,
                    v.toLowerCase(),
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  st(
                    e,
                    v,
                    "xlink:href",
                    g,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Wm(
                    e,
                    v,
                    "contenteditable",
                    g,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Wm(
                    e,
                    v,
                    "spellcheck",
                    g,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Wm(
                    e,
                    v,
                    v,
                    g,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  $m(
                    e,
                    v,
                    v.toLowerCase(),
                    g,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var w = d = v, G = o;
                    if (f.delete(w), h = h.getAttribute(w), h === null)
                      switch (typeof g) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (g === !1) break e;
                      }
                    else if (g != null)
                      switch (typeof g) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (g === !0 && h === "") break e;
                          break;
                        default:
                          if (F(g, d), h === "" + g)
                            break e;
                      }
                    Dt(
                      d,
                      h,
                      g,
                      G
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, w = d = v, G = o, f.delete(w), h = h.getAttribute(w), h === null)
                      switch (typeof g) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(g) || 1 > g) break e;
                      }
                    else if (g != null)
                      switch (typeof g) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(g) || 1 > g) && (F(g, d), h === "" + g))
                            break e;
                      }
                    Dt(
                      d,
                      h,
                      g,
                      G
                    );
                  }
                  continue;
                case "rowSpan":
                  sg(
                    e,
                    v,
                    "rowspan",
                    g,
                    f,
                    o
                  );
                  continue;
                case "start":
                  sg(
                    e,
                    v,
                    v,
                    g,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Vl(
                    e,
                    v,
                    "x-height",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Vl(
                    e,
                    v,
                    "xlink:actuate",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Vl(
                    e,
                    v,
                    "xlink:arcrole",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Vl(
                    e,
                    v,
                    "xlink:role",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Vl(
                    e,
                    v,
                    "xlink:show",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Vl(
                    e,
                    v,
                    "xlink:title",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Vl(
                    e,
                    v,
                    "xlink:type",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Vl(
                    e,
                    v,
                    "xml:base",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Vl(
                    e,
                    v,
                    "xml:lang",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Vl(
                    e,
                    v,
                    "xml:space",
                    g,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  g !== "" || u0[v] || (u0[v] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    v
                  )), $m(
                    e,
                    v,
                    v,
                    g,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
                    h = ar(v), d = !1, i.context === Bc && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (w = v.toLowerCase(), w = Rc.hasOwnProperty(
                      w
                    ) && Rc[w] || null, w !== null && w !== v && (d = !0, f.delete(w)), f.delete(h));
                    e: if (w = e, G = h, h = g, wi(G))
                      if (w.hasAttribute(G))
                        w = w.getAttribute(
                          G
                        ), F(
                          h,
                          G
                        ), h = w === "" + h ? h : w;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (w = G.toLowerCase().slice(0, 5), w !== "data-" && w !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Dt(
                      v,
                      h,
                      g,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && ri(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Je(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Ke(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function dt(e) {
      switch (e) {
        case Qo:
          return yh;
        case Os:
          return o0;
        default:
          return Bc;
      }
    }
    function ta(e, t) {
      if (e === Bc)
        switch (t) {
          case "svg":
            return yh;
          case "math":
            return o0;
          default:
            return Bc;
        }
      return e === yh && t === "foreignObject" ? Bc : e;
    }
    function qn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Eo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === Yv ? !1 : (Yv = e, !0) : (Yv = null, !1);
    }
    function Fm(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Eu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function Gt(e, t, a, i) {
      fg(e, t, a, i), e[ua] = i;
    }
    function Au(e) {
      Yi(e, "");
    }
    function gc(e, t, a) {
      e.nodeValue = a;
    }
    function jn(e) {
      return e === "head";
    }
    function ja(e, t) {
      e.removeChild(t);
    }
    function Ao(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function xo(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === c0) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & H2 && Do(d.documentElement), a & w2 && Do(d.body), a & N2)
                for (a = d.head, Do(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, g = d.nodeName;
                  d[Yo] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), Tc(t);
              return;
            }
            o--;
          } else
            a === i0 || a === _c || a === cp ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      Tc(t);
    }
    function la(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Im(e) {
      e.nodeValue = "";
    }
    function Pm(e, t) {
      t = t[_2], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function yd(e, t) {
      e.nodeValue = t;
    }
    function zo(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            zo(a), Xc(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function di(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Yo])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          F(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = Sl(e.nextSibling), e === null) break;
      }
      return null;
    }
    function bl(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Sl(e.nextSibling), e === null)) return null;
      return e;
    }
    function Yn(e) {
      return e.data === cp || e.data === _c && e.ownerDocument.readyState === U1;
    }
    function Ro(e, t) {
      var a = e.ownerDocument;
      if (e.data !== _c || a.readyState === U1)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function Sl(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === i0 || t === cp || t === _c || t === Bv || t === M1)
            break;
          if (t === c0) return null;
        }
      }
      return e;
    }
    function pd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Jm(f.name)] = f.name.toLowerCase() === "style" ? pc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function gd(e, t, a) {
      return a === null || a[C2] !== !0 ? (e.nodeValue === t ? e = null : (t = vl(t), e = vl(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function ey(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === c0) {
            if (t === 0)
              return Sl(e.nextSibling);
            t--;
          } else
            a !== i0 && a !== cp && a !== _c || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Oo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === i0 || a === cp || a === _c) {
            if (t === 0) return e;
            t--;
          } else a === c0 && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ty(e) {
      Tc(e);
    }
    function ga(e) {
      Tc(e);
    }
    function ly(e, t, a, i, o) {
      switch (o && lr(e, i.ancestorInfo), t = Ke(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function va(e, t, a, i) {
      if (!a[Ti] && sa(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Yt(a, e, t), a[Hl] = i, a[ua] = t;
    }
    function Do(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Xc(e);
    }
    function is(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function rg(e, t, a) {
      var i = ph;
      if (i && typeof t == "string" && t) {
        var o = ra(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), B1.has(o) || (B1.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Yt(t, "link", e), nl(t), i.head.appendChild(t)));
      }
    }
    function xu(e, t, a, i) {
      var o = (o = Vn.current) ? is(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = hi(a.href), t = dn(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = hi(a.href);
            var f = dn(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Zs, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Gn(e)
            )) && !f._p && (d.instance = f, d.state.loading = op | eu), !tu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              tu.set(e, h), f || dg(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + vc(t) + `
  + ` + vc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + vc(t) + `
  + ` + vc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = bc(a), t = dn(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function vc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : Ou.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : Ou.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : Ou.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function hi(e) {
      return 'href="' + ra(e) + '"';
    }
    function Gn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function ay(e) {
      return Ye({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function dg(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = op : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= op;
      }), t.addEventListener("error", function() {
        return i.loading |= N1;
      }), Yt(t, "link", a), nl(t), e.head.appendChild(t));
    }
    function bc(e) {
      return '[src="' + ra(e) + '"]';
    }
    function Sc(e) {
      return "script[async]" + e;
    }
    function vd(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + ra(a.href) + '"]'
            );
            if (i)
              return t.instance = i, nl(i), i;
            var o = Ye({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), nl(i), Yt(i, "style", o), bd(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = hi(a.href);
            var f = e.querySelector(
              Gn(o)
            );
            if (f)
              return t.state.loading |= eu, t.instance = f, nl(f), f;
            i = ay(a), (o = tu.get(o)) && ny(i, o), f = (e.ownerDocument || e).createElement("link"), nl(f);
            var d = f;
            return d._p = new Promise(function(h, g) {
              d.onload = h, d.onerror = g;
            }), Yt(f, "link", i), t.state.loading |= eu, bd(f, a.precedence, e), t.instance = f;
          case "script":
            return f = bc(a.src), (o = e.querySelector(
              Sc(f)
            )) ? (t.instance = o, nl(o), o) : (i = a, (o = tu.get(f)) && (i = Ye({}, a), uy(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), nl(o), Yt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & eu) === Zs && (i = t.instance, t.state.loading |= eu, bd(i, a.precedence, e));
      return t.instance;
    }
    function bd(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function ny(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function uy(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function iy(e, t, a) {
      if (f0 === null) {
        var i = /* @__PURE__ */ new Map(), o = f0 = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = f0, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Yo] || f[Hl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Qo) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function cy(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Mo(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === yh || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Je(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function cs(e) {
      return !(e.type === "stylesheet" && (e.state.loading & _1) === Zs);
    }
    function hg() {
    }
    function mg(e, t, a) {
      if (fp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = fp;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & eu) === Zs) {
        if (t.instance === null) {
          var o = hi(a.href), f = e.querySelector(
            Gn(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = os.bind(i), e.then(i, i)), t.state.loading |= eu, t.instance = f, nl(f);
            return;
          }
          f = e.ownerDocument || e, a = ay(a), (o = tu.get(o)) && ny(a, o), f = f.createElement("link"), nl(f);
          var d = f;
          d._p = new Promise(function(h, g) {
            d.onload = h, d.onerror = g;
          }), Yt(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & _1) === Zs && (i.count++, t = os.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function yg() {
      if (fp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = fp;
      return e.stylesheets && e.count === 0 && Sd(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && Sd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function os() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Sd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Sd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, s0 = /* @__PURE__ */ new Map(), t.forEach(pg, e), s0 = null, os.call(e));
    }
    function pg(e, t) {
      if (!(t.state.loading & eu)) {
        var a = s0.get(e);
        if (a) var i = a.get(Vv);
        else {
          a = /* @__PURE__ */ new Map(), s0.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(Vv, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(Vv, o), a.set(d, o), this.count++, i = os.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= eu;
      }
    }
    function Td(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Ls, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ah(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ah(0), this.hiddenUpdates = Ah(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function oy(e, t, a, i, o, f, d, h, g, v, w, G) {
      return e = new Td(
        e,
        t,
        a,
        d,
        h,
        g,
        v,
        G
      ), t = c2, f === !0 && (t |= ca | Hu), Xt && (t |= Ql), f = me(3, null, null, t), e.current = f, f.stateNode = e, t = Rf(), $i(t), e.pooledCache = t, $i(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Kl(f), e;
    }
    function fy(e) {
      return e ? (e = Lo, e) : Lo;
    }
    function ht(e, t, a, i, o, f) {
      if (Tl && typeof Tl.onScheduleFiberRoot == "function")
        try {
          Tl.onScheduleFiberRoot(bi, i, a);
        } catch (d) {
          na || (na = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      ee !== null && typeof ee.markRenderScheduled == "function" && ee.markRenderScheduled(t), o = fy(o), i.context === null ? i.context = o : i.pendingContext = o, ia && Sa !== null && !G1 && (G1 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        P(Sa) || "Unknown"
      )), i = bn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Ia(e, i, t), a !== null && (qt(a, e, t), Iu(a, e, t));
    }
    function Ed(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function sy(e, t) {
      Ed(e, t), (e = e.alternate) && Ed(e, t);
    }
    function ry(e) {
      if (e.tag === 13) {
        var t = Jl(e, 67108864);
        t !== null && qt(t, e, 67108864), sy(e, 67108864);
      }
    }
    function _0() {
      return Sa;
    }
    function B0() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = E0(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function q0(e, t, a, i) {
      var o = B.T;
      B.T = null;
      var f = Oe.p;
      try {
        Oe.p = El, mi(e, t, a, i);
      } finally {
        Oe.p = f, B.T = o;
      }
    }
    function Ad(e, t, a, i) {
      var o = B.T;
      B.T = null;
      var f = Oe.p;
      try {
        Oe.p = on, mi(e, t, a, i);
      } finally {
        Oe.p = f, B.T = o;
      }
    }
    function mi(e, t, a, i) {
      if (d0) {
        var o = fs(i);
        if (o === null)
          Yl(
            e,
            t,
            i,
            h0,
            a
          ), yi(e, i);
        else if (ss(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (yi(e, i), t & 4 && -1 < Y2.indexOf(e)) {
          for (; o !== null; ) {
            var f = sa(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Ci(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var g = 1 << 31 - Cl(d);
                        h.entanglements[1] |= g, d &= ~g;
                      }
                      Ba(f), (mt & (xa | Bu)) === fn && (Wg = Xn() + v1, mc(0));
                    }
                  }
                  break;
                case 13:
                  h = Jl(f, 2), h !== null && qt(h, f, 2), dc(), sy(f, 2);
              }
            if (f = fs(i), f === null && Yl(
              e,
              t,
              i,
              h0,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Yl(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function fs(e) {
      return e = Vi(e), Uo(e);
    }
    function Uo(e) {
      if (h0 = null, e = nu(e), e !== null) {
        var t = je(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Kt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return h0 = e, null;
    }
    function xd(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return El;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return on;
        case "message":
          switch (vi()) {
            case Md:
              return El;
            case bs:
              return on;
            case Bo:
            case X0:
              return Mu;
            case Ss:
              return wd;
            default:
              return Mu;
          }
        default:
          return Mu;
      }
    }
    function yi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ef = null;
          break;
        case "dragenter":
        case "dragleave":
          tf = null;
          break;
        case "mouseover":
        case "mouseout":
          lf = null;
          break;
        case "pointerover":
        case "pointerout":
          rp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          dp.delete(t.pointerId);
      }
    }
    function aa(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = sa(t), t !== null && ry(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function ss(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return ef = aa(
            ef,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return tf = aa(
            tf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return lf = aa(
            lf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return rp.set(
            f,
            aa(
              rp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, dp.set(
            f,
            aa(
              dp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function gg(e) {
      var t = nu(e.target);
      if (t !== null) {
        var a = je(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Kt(a), t !== null) {
              e.blockedOn = t, x0(e.priority, function() {
                if (a.tag === 13) {
                  var i = ea(a);
                  i = _l(i);
                  var o = Jl(
                    a,
                    i
                  );
                  o !== null && qt(o, a, i), sy(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function rs(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = fs(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          s !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = o, a.target.dispatchEvent(i), s === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = null;
        } else
          return t = sa(a), t !== null && ry(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function dy(e, t, a) {
      rs(e) && a.delete(t);
    }
    function vg() {
      Xv = !1, ef !== null && rs(ef) && (ef = null), tf !== null && rs(tf) && (tf = null), lf !== null && rs(lf) && (lf = null), rp.forEach(dy), dp.forEach(dy);
    }
    function ds(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Xv || (Xv = !0, Vt.unstable_scheduleCallback(
        Vt.unstable_NormalPriority,
        vg
      )));
    }
    function bg(e) {
      m0 !== e && (m0 = e, Vt.unstable_scheduleCallback(
        Vt.unstable_NormalPriority,
        function() {
          m0 === e && (m0 = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Uo(i || a) === null)
                continue;
              break;
            }
            var f = sa(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), tc(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Tc(e) {
      function t(g) {
        return ds(g, e);
      }
      ef !== null && ds(ef, e), tf !== null && ds(tf, e), lf !== null && ds(lf, e), rp.forEach(t), dp.forEach(t);
      for (var a = 0; a < af.length; a++) {
        var i = af[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < af.length && (a = af[0], a.blockedOn === null); )
        gg(a), a.blockedOn === null && af.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[ua] || null;
          if (typeof f == "function")
            d || bg(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[ua] || null)
                h = d.formAction;
              else if (Uo(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), bg(a);
          }
        }
    }
    function zd(e) {
      this._internalRoot = e;
    }
    function hs(e) {
      this._internalRoot = e;
    }
    function Sg(e) {
      e[Ti] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Vt = vS(), ms = Mi, j0 = gS, Ye = Object.assign, ys = Symbol.for("react.element"), pi = Symbol.for("react.transitional.element"), Ec = Symbol.for("react.portal"), Ne = Symbol.for("react.fragment"), Co = Symbol.for("react.strict_mode"), Ho = Symbol.for("react.profiler"), hy = Symbol.for("react.provider"), Rd = Symbol.for("react.consumer"), Ya = Symbol.for("react.context"), zu = Symbol.for("react.forward_ref"), wo = Symbol.for("react.suspense"), gi = Symbol.for("react.suspense_list"), ps = Symbol.for("react.memo"), ba = Symbol.for("react.lazy"), my = Symbol.for("react.activity"), Tg = Symbol.for("react.memo_cache_sentinel"), yy = Symbol.iterator, Od = Symbol.for("react.client.reference"), Ue = Array.isArray, B = ms.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Oe = j0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y0 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), gs = [], vs = [], Ga = -1, Ru = Le(null), No = Le(null), Vn = Le(null), _o = Le(null), Ou = Object.prototype.hasOwnProperty, Dd = Vt.unstable_scheduleCallback, G0 = Vt.unstable_cancelCallback, Eg = Vt.unstable_shouldYield, V0 = Vt.unstable_requestPaint, Xn = Vt.unstable_now, vi = Vt.unstable_getCurrentPriorityLevel, Md = Vt.unstable_ImmediatePriority, bs = Vt.unstable_UserBlockingPriority, Bo = Vt.unstable_NormalPriority, X0 = Vt.unstable_LowPriority, Ss = Vt.unstable_IdlePriority, Q0 = Vt.log, cn = Vt.unstable_setDisableYieldValue, bi = null, Tl = null, ee = null, na = !1, Xt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Cl = Math.clz32 ? Math.clz32 : Th, Ud = Math.log, Du = Math.LN2, Cd = 256, Hd = 4194304, El = 2, on = 8, Mu = 32, wd = 268435456, Si = Math.random().toString(36).slice(2), Hl = "__reactFiber$" + Si, ua = "__reactProps$" + Si, Ti = "__reactContainer$" + Si, py = "__reactEvents$" + Si, Ag = "__reactListeners$" + Si, qo = "__reactHandles$" + Si, jo = "__reactResources$" + Si, Yo = "__reactMarker$" + Si, xg = /* @__PURE__ */ new Set(), Va = {}, Ac = {}, zg = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Nd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), _d = {}, Bd = {}, Ei = 0, gy, vy, Rg, by, Go, Og, Dg;
    $s.__reactDisabledLog = !0;
    var Sy, Ts, Vo = !1, Es = new (typeof WeakMap == "function" ? WeakMap : Map)(), Sa = null, ia = !1, L0 = /[\n"\\]/g, Ty = !1, Ey = !1, Ay = !1, xy = !1, qd = !1, zy = !1, As = ["value", "defaultValue"], Mg = !1, Ug = /["'&<>\n\t]|^\s|\s$/, Ry = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), jd = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Yd = jd.concat(["button"]), Oy = "dd dt li option optgroup p rp rt".split(" "), Dy = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, Xo = {}, Qn = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Uu = /([A-Z])/g, Cu = /^ms-/, xs = /^(?:webkit|moz|o)[A-Z]/, zs = /^-ms-/, Ai = /-(.)/g, Cg = /;\s*$/, xc = {}, zc = {}, Hg = !1, My = !1, Rs = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Os = "http://www.w3.org/1998/Math/MathML", Qo = "http://www.w3.org/2000/svg", Gd = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Rc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Uy = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ln = {}, Cy = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Vd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Hy = !1, Xl = {}, Ds = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, s = null, r = null, m = null, y = !1, S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), U = !1;
    if (S)
      try {
        var Q = {};
        Object.defineProperty(Q, "passive", {
          get: function() {
            U = !0;
          }
        }), window.addEventListener("test", Q, Q), window.removeEventListener("test", Q, Q);
      } catch {
        U = !1;
      }
    var k = null, H = null, N = null, ve = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, be = yl(ve), it = Ye({}, ve, { view: 0, detail: 0 }), D = yl(it), x, M, L, le = Ye({}, it, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ir,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== L && (L && e.type === "mousemove" ? (x = e.screenX - L.screenX, M = e.screenY - L.screenY) : M = x = 0, L = e), x);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : M;
      }
    }), Ve = yl(le), pe = Ye({}, le, { dataTransfer: 0 }), xe = yl(pe), sl = Ye({}, it, { relatedTarget: 0 }), tt = yl(sl), xi = Ye({}, ve, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Z0 = yl(xi), BS = Ye({}, ve, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), qS = yl(BS), jS = Ye({}, ve, { data: 0 }), Pv = yl(
      jS
    ), YS = Pv, GS = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, VS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, XS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, QS = Ye({}, it, {
      key: function(e) {
        if (e.key) {
          var t = GS[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = $c(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? VS[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ir,
      charCode: function(e) {
        return e.type === "keypress" ? $c(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? $c(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), LS = yl(QS), ZS = Ye({}, le, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), eb = yl(ZS), kS = Ye({}, it, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ir
    }), JS = yl(kS), KS = Ye({}, ve, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $S = yl(KS), WS = Ye({}, le, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), FS = yl(WS), IS = Ye({}, ve, {
      newState: 0,
      oldState: 0
    }), PS = yl(IS), e2 = [9, 13, 27, 32], tb = 229, k0 = S && "CompositionEvent" in window, wy = null;
    S && "documentMode" in document && (wy = document.documentMode);
    var t2 = S && "TextEvent" in window && !wy, lb = S && (!k0 || wy && 8 < wy && 11 >= wy), ab = 32, nb = String.fromCharCode(ab), ub = !1, Xd = !1, l2 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, Ny = null, _y = null, ib = !1;
    S && (ib = wh("input") && (!document.documentMode || 9 < document.documentMode));
    var Ta = typeof Object.is == "function" ? Object.is : C0, a2 = S && "documentMode" in document && 11 >= document.documentMode, Qd = null, J0 = null, By = null, K0 = !1, Ld = {
      animationend: fu("Animation", "AnimationEnd"),
      animationiteration: fu("Animation", "AnimationIteration"),
      animationstart: fu("Animation", "AnimationStart"),
      transitionrun: fu("Transition", "TransitionRun"),
      transitionstart: fu("Transition", "TransitionStart"),
      transitioncancel: fu("Transition", "TransitionCancel"),
      transitionend: fu("Transition", "TransitionEnd")
    }, $0 = {}, cb = {};
    S && (cb = document.createElement("div").style, "AnimationEvent" in window || (delete Ld.animationend.animation, delete Ld.animationiteration.animation, delete Ld.animationstart.animation), "TransitionEvent" in window || delete Ld.transitionend.transition);
    var ob = Li("animationend"), fb = Li("animationiteration"), sb = Li("animationstart"), n2 = Li("transitionrun"), u2 = Li("transitionstart"), i2 = Li("transitioncancel"), rb = Li("transitionend"), db = /* @__PURE__ */ new Map(), W0 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    W0.push("scrollEnd");
    var F0 = /* @__PURE__ */ new WeakMap(), wg = 1, Oc = 2, Zn = [], Zd = 0, I0 = 0, Lo = {};
    Object.freeze(Lo);
    var kn = null, kd = null, Mt = 0, c2 = 1, Ql = 2, ca = 8, Hu = 16, hb = 64, mb = !1;
    try {
      var yb = Object.preventExtensions({});
    } catch {
      mb = !0;
    }
    var Jd = [], Kd = 0, Ng = null, _g = 0, Jn = [], Kn = 0, Ms = null, Dc = 1, Mc = "", Ea = null, kt = null, ct = !1, Uc = !1, $n = null, Us = null, zi = !1, P0 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), pb = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var o2 = performance, gb = function() {
        return o2.now();
      };
    else {
      var f2 = Date;
      gb = function() {
        return f2.now();
      };
    }
    var ev = Le(null), tv = Le(null), vb = {}, Bg = null, $d = null, Wd = !1, s2 = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, r2 = Vt.unstable_scheduleCallback, d2 = Vt.unstable_NormalPriority, Al = {
      $$typeof: Ya,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Fd = Vt.unstable_now, bb = -0, qg = -0, Xa = -1.1, Cs = -0, jg = !1, Yg = !1, qy = null, lv = 0, Hs = 0, Id = null, Sb = B.S;
    B.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Qp(e, t), Sb !== null && Sb(e, t);
    };
    var ws = Le(null), wu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, jy = [], Yy = [], Gy = [], Vy = [], Xy = [], Qy = [], Ns = /* @__PURE__ */ new Set();
    wu.recordUnsafeLifecycleWarnings = function(e, t) {
      Ns.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && jy.push(e), e.mode & ca && typeof t.UNSAFE_componentWillMount == "function" && Yy.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Gy.push(e), e.mode & ca && typeof t.UNSAFE_componentWillReceiveProps == "function" && Vy.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Xy.push(e), e.mode & ca && typeof t.UNSAFE_componentWillUpdate == "function" && Qy.push(e));
    }, wu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < jy.length && (jy.forEach(function(h) {
        e.add(
          P(h) || "Component"
        ), Ns.add(h.type);
      }), jy = []);
      var t = /* @__PURE__ */ new Set();
      0 < Yy.length && (Yy.forEach(function(h) {
        t.add(
          P(h) || "Component"
        ), Ns.add(h.type);
      }), Yy = []);
      var a = /* @__PURE__ */ new Set();
      0 < Gy.length && (Gy.forEach(function(h) {
        a.add(
          P(h) || "Component"
        ), Ns.add(h.type);
      }), Gy = []);
      var i = /* @__PURE__ */ new Set();
      0 < Vy.length && (Vy.forEach(
        function(h) {
          i.add(
            P(h) || "Component"
          ), Ns.add(h.type);
        }
      ), Vy = []);
      var o = /* @__PURE__ */ new Set();
      0 < Xy.length && (Xy.forEach(function(h) {
        o.add(
          P(h) || "Component"
        ), Ns.add(h.type);
      }), Xy = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Qy.length && (Qy.forEach(function(h) {
        f.add(
          P(h) || "Component"
        ), Ns.add(h.type);
      }), Qy = []), 0 < t.size) {
        var d = Se(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = Se(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = Se(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = Se(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = Se(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = Se(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Gg = /* @__PURE__ */ new Map(), Tb = /* @__PURE__ */ new Set();
    wu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & ca && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !Tb.has(e.type) && (i = Gg.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Gg.set(a, i)), i.push(e));
    }, wu.flushLegacyContextWarning = function() {
      Gg.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(P(o) || "Component"), Tb.add(o.type);
          });
          var i = Se(a);
          ce(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, wu.discardPendingWarnings = function() {
      jy = [], Yy = [], Gy = [], Vy = [], Xy = [], Qy = [], Gg = /* @__PURE__ */ new Map();
    };
    var Ly = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), Eb = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Vg = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), av = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Zy = null, Xg = !1, Wn = 0, Fn = 1, Aa = 2, Ll = 4, xl = 8, Ab = 0, xb = 1, zb = 2, nv = 3, Zo = !1, Rb = !1, uv = null, iv = !1, Pd = Le(null), Qg = Le(0), eh, Ob = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), cv = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), ko = 0, Ce = null, Tt = null, rl = null, Lg = !1, th = !1, _s = !1, Zg = 0, ky = 0, Cc = null, h2 = 0, m2 = 25, j = null, In = null, Hc = -1, Jy = !1, kg = {
      readContext: xt,
      use: Tn,
      useCallback: Ct,
      useContext: Ct,
      useEffect: Ct,
      useImperativeHandle: Ct,
      useLayoutEffect: Ct,
      useInsertionEffect: Ct,
      useMemo: Ct,
      useReducer: Ct,
      useRef: Ct,
      useState: Ct,
      useDebugValue: Ct,
      useDeferredValue: Ct,
      useTransition: Ct,
      useSyncExternalStore: Ct,
      useId: Ct,
      useHostTransitionStatus: Ct,
      useFormState: Ct,
      useActionState: Ct,
      useOptimistic: Ct,
      useMemoCache: Ct,
      useCacheRefresh: Ct
    }, ov = null, Ub = null, fv = null, Cb = null, Ri = null, Nu = null, Jg = null;
    ov = {
      readContext: function(e) {
        return xt(e);
      },
      use: Tn,
      useCallback: function(e, t) {
        return j = "useCallback", Ge(), Ma(t), _f(e, t);
      },
      useContext: function(e) {
        return j = "useContext", Ge(), xt(e);
      },
      useEffect: function(e, t) {
        return j = "useEffect", Ge(), Ma(t), Sr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", Ge(), Ma(a), Er(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        j = "useInsertionEffect", Ge(), Ma(t), wa(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", Ge(), Ma(t), Tr(e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", Ge(), Ma(t);
        var a = B.H;
        B.H = Ri;
        try {
          return Ar(e, t);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", Ge();
        var i = B.H;
        B.H = Ri;
        try {
          return at(e, t, a);
        } finally {
          B.H = i;
        }
      },
      useRef: function(e) {
        return j = "useRef", Ge(), Nf(e);
      },
      useState: function(e) {
        j = "useState", Ge();
        var t = B.H;
        B.H = Ri;
        try {
          return mu(e);
        } finally {
          B.H = t;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", Ge();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", Ge(), xr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", Ge(), zn();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", Ge(), hu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", Ge(), Rn();
      },
      useFormState: function(e, t) {
        return j = "useFormState", Ge(), to(), co(e, t);
      },
      useActionState: function(e, t) {
        return j = "useActionState", Ge(), co(e, t);
      },
      useOptimistic: function(e) {
        return j = "useOptimistic", Ge(), tn(e);
      },
      useHostTransitionStatus: Fl,
      useMemoCache: Lt,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", Ge(), lc();
      }
    }, Ub = {
      readContext: function(e) {
        return xt(e);
      },
      use: Tn,
      useCallback: function(e, t) {
        return j = "useCallback", $(), _f(e, t);
      },
      useContext: function(e) {
        return j = "useContext", $(), xt(e);
      },
      useEffect: function(e, t) {
        return j = "useEffect", $(), Sr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", $(), Er(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        j = "useInsertionEffect", $(), wa(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", $(), Tr(e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", $();
        var a = B.H;
        B.H = Ri;
        try {
          return Ar(e, t);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", $();
        var i = B.H;
        B.H = Ri;
        try {
          return at(e, t, a);
        } finally {
          B.H = i;
        }
      },
      useRef: function(e) {
        return j = "useRef", $(), Nf(e);
      },
      useState: function(e) {
        j = "useState", $();
        var t = B.H;
        B.H = Ri;
        try {
          return mu(e);
        } finally {
          B.H = t;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", $(), xr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", $(), zn();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", $(), hu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", $(), Rn();
      },
      useActionState: function(e, t) {
        return j = "useActionState", $(), co(e, t);
      },
      useFormState: function(e, t) {
        return j = "useFormState", $(), to(), co(e, t);
      },
      useOptimistic: function(e) {
        return j = "useOptimistic", $(), tn(e);
      },
      useHostTransitionStatus: Fl,
      useMemoCache: Lt,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), lc();
      }
    }, fv = {
      readContext: function(e) {
        return xt(e);
      },
      use: Tn,
      useCallback: function(e, t) {
        return j = "useCallback", $(), ec(e, t);
      },
      useContext: function(e) {
        return j = "useContext", $(), xt(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", $(), Pt(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", $(), xn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", $(), Pt(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", $(), Pt(4, Ll, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", $();
        var a = B.H;
        B.H = Nu;
        try {
          return ai(e, t);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", $();
        var i = B.H;
        B.H = Nu;
        try {
          return Ca(e, t, a);
        } finally {
          B.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", $(), Pe().memoizedState;
      },
      useState: function() {
        j = "useState", $();
        var e = B.H;
        B.H = Nu;
        try {
          return Ca(nt);
        } finally {
          B.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", $(), Bf(e, t);
      },
      useTransition: function() {
        return j = "useTransition", $(), Or();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", $(), Uf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", $(), Pe().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", $(), to(), br(e);
      },
      useActionState: function(e) {
        return j = "useActionState", $(), br(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", $(), yu(e, t);
      },
      useHostTransitionStatus: Fl,
      useMemoCache: Lt,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), Pe().memoizedState;
      }
    }, Cb = {
      readContext: function(e) {
        return xt(e);
      },
      use: Tn,
      useCallback: function(e, t) {
        return j = "useCallback", $(), ec(e, t);
      },
      useContext: function(e) {
        return j = "useContext", $(), xt(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", $(), Pt(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", $(), xn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", $(), Pt(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", $(), Pt(4, Ll, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", $();
        var a = B.H;
        B.H = Jg;
        try {
          return ai(e, t);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", $();
        var i = B.H;
        B.H = Jg;
        try {
          return Pi(e, t, a);
        } finally {
          B.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", $(), Pe().memoizedState;
      },
      useState: function() {
        j = "useState", $();
        var e = B.H;
        B.H = Jg;
        try {
          return Pi(nt);
        } finally {
          B.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", $(), zr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", $(), Dr();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", $(), Uf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", $(), Pe().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", $(), to(), oo(e);
      },
      useActionState: function(e) {
        return j = "useActionState", $(), oo(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", $(), vr(e, t);
      },
      useHostTransitionStatus: Fl,
      useMemoCache: Lt,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), Pe().memoizedState;
      }
    }, Ri = {
      readContext: function(e) {
        return he(), xt(e);
      },
      use: function(e) {
        return Y(), Tn(e);
      },
      useCallback: function(e, t) {
        return j = "useCallback", Y(), Ge(), _f(e, t);
      },
      useContext: function(e) {
        return j = "useContext", Y(), Ge(), xt(e);
      },
      useEffect: function(e, t) {
        return j = "useEffect", Y(), Ge(), Sr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", Y(), Ge(), Er(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        j = "useInsertionEffect", Y(), Ge(), wa(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", Y(), Ge(), Tr(e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", Y(), Ge();
        var a = B.H;
        B.H = Ri;
        try {
          return Ar(e, t);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", Y(), Ge();
        var i = B.H;
        B.H = Ri;
        try {
          return at(e, t, a);
        } finally {
          B.H = i;
        }
      },
      useRef: function(e) {
        return j = "useRef", Y(), Ge(), Nf(e);
      },
      useState: function(e) {
        j = "useState", Y(), Ge();
        var t = B.H;
        B.H = Ri;
        try {
          return mu(e);
        } finally {
          B.H = t;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", Y(), Ge();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", Y(), Ge(), xr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", Y(), Ge(), zn();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", Y(), Ge(), hu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", Y(), Ge(), Rn();
      },
      useFormState: function(e, t) {
        return j = "useFormState", Y(), Ge(), co(e, t);
      },
      useActionState: function(e, t) {
        return j = "useActionState", Y(), Ge(), co(e, t);
      },
      useOptimistic: function(e) {
        return j = "useOptimistic", Y(), Ge(), tn(e);
      },
      useMemoCache: function(e) {
        return Y(), Lt(e);
      },
      useHostTransitionStatus: Fl,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", Ge(), lc();
      }
    }, Nu = {
      readContext: function(e) {
        return he(), xt(e);
      },
      use: function(e) {
        return Y(), Tn(e);
      },
      useCallback: function(e, t) {
        return j = "useCallback", Y(), $(), ec(e, t);
      },
      useContext: function(e) {
        return j = "useContext", Y(), $(), xt(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", Y(), $(), Pt(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", Y(), $(), xn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", Y(), $(), Pt(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", Y(), $(), Pt(4, Ll, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", Y(), $();
        var a = B.H;
        B.H = Nu;
        try {
          return ai(e, t);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", Y(), $();
        var i = B.H;
        B.H = Nu;
        try {
          return Ca(e, t, a);
        } finally {
          B.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", Y(), $(), Pe().memoizedState;
      },
      useState: function() {
        j = "useState", Y(), $();
        var e = B.H;
        B.H = Nu;
        try {
          return Ca(nt);
        } finally {
          B.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", Y(), $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", Y(), $(), Bf(e, t);
      },
      useTransition: function() {
        return j = "useTransition", Y(), $(), Or();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", Y(), $(), Uf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", Y(), $(), Pe().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", Y(), $(), br(e);
      },
      useActionState: function(e) {
        return j = "useActionState", Y(), $(), br(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", Y(), $(), yu(e, t);
      },
      useMemoCache: function(e) {
        return Y(), Lt(e);
      },
      useHostTransitionStatus: Fl,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), Pe().memoizedState;
      }
    }, Jg = {
      readContext: function(e) {
        return he(), xt(e);
      },
      use: function(e) {
        return Y(), Tn(e);
      },
      useCallback: function(e, t) {
        return j = "useCallback", Y(), $(), ec(e, t);
      },
      useContext: function(e) {
        return j = "useContext", Y(), $(), xt(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", Y(), $(), Pt(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", Y(), $(), xn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", Y(), $(), Pt(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", Y(), $(), Pt(4, Ll, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", Y(), $();
        var a = B.H;
        B.H = Nu;
        try {
          return ai(e, t);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", Y(), $();
        var i = B.H;
        B.H = Nu;
        try {
          return Pi(e, t, a);
        } finally {
          B.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", Y(), $(), Pe().memoizedState;
      },
      useState: function() {
        j = "useState", Y(), $();
        var e = B.H;
        B.H = Nu;
        try {
          return Pi(nt);
        } finally {
          B.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", Y(), $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", Y(), $(), zr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", Y(), $(), Dr();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", Y(), $(), Uf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", Y(), $(), Pe().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", Y(), $(), oo(e);
      },
      useActionState: function(e) {
        return j = "useActionState", Y(), $(), oo(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", Y(), $(), vr(e, t);
      },
      useMemoCache: function(e) {
        return Y(), Lt(e);
      },
      useHostTransitionStatus: Fl,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), Pe().memoizedState;
      }
    };
    var Hb = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = ia;
        ia = !0;
        try {
          return e(t, a);
        } finally {
          ia = i;
        }
      }
    }, sv = Hb.react_stack_bottom_frame.bind(Hb), wb = {
      react_stack_bottom_frame: function(e) {
        var t = ia;
        ia = !0;
        try {
          return e.render();
        } finally {
          ia = t;
        }
      }
    }, Nb = wb.react_stack_bottom_frame.bind(wb), _b = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Ae(e, e.return, a);
        }
      }
    }, rv = _b.react_stack_bottom_frame.bind(
      _b
    ), Bb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Ae(e, e.return, f);
        }
      }
    }, qb = Bb.react_stack_bottom_frame.bind(
      Bb
    ), jb = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, y2 = jb.react_stack_bottom_frame.bind(
      jb
    ), Yb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Ae(e, t, i);
        }
      }
    }, Gb = Yb.react_stack_bottom_frame.bind(
      Yb
    ), Vb = {
      react_stack_bottom_frame: function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, p2 = Vb.react_stack_bottom_frame.bind(Vb), Xb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          Ae(e, t, i);
        }
      }
    }, g2 = Xb.react_stack_bottom_frame.bind(Xb), Qb = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Jo = Qb.react_stack_bottom_frame.bind(Qb), lh = null, Ky = 0, Xe = null, dv, Lb = dv = !1, Zb = {}, kb = {}, Jb = {};
    ie = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = P(e), o = i || "null";
        if (!Zb[o]) {
          Zb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = P(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = P(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ce(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var ah = Gf(!0), Kb = Gf(!1), Pn = Le(null), Oi = null, nh = 1, $y = 2, zl = Le(0), $b = {}, Wb = /* @__PURE__ */ new Set(), Fb = /* @__PURE__ */ new Set(), Ib = /* @__PURE__ */ new Set(), Pb = /* @__PURE__ */ new Set(), e1 = /* @__PURE__ */ new Set(), t1 = /* @__PURE__ */ new Set(), l1 = /* @__PURE__ */ new Set(), a1 = /* @__PURE__ */ new Set(), n1 = /* @__PURE__ */ new Set(), u1 = /* @__PURE__ */ new Set();
    Object.freeze($b);
    var hv = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ea(e), o = bn(i);
        o.payload = t, a != null && (rm(a), o.callback = a), t = Ia(e, o, i), t !== null && (qt(t, e, i), Iu(t, e, i)), Ui(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ea(e), o = bn(i);
        o.tag = xb, o.payload = t, a != null && (rm(a), o.callback = a), t = Ia(e, o, i), t !== null && (qt(t, e, i), Iu(t, e, i)), Ui(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ea(e), i = bn(a);
        i.tag = zb, t != null && (rm(t), i.callback = t), t = Ia(e, i, a), t !== null && (qt(t, e, a), Iu(t, e, a)), ee !== null && typeof ee.markForceUpdateScheduled == "function" && ee.markForceUpdateScheduled(e, a);
      }
    }, mv = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, uh = null, yv = null, i1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), wl = !1, c1 = {}, o1 = {}, f1 = {}, s1 = {}, ih = !1, r1 = {}, pv = {}, gv = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, d1 = !1, h1 = null;
    h1 = /* @__PURE__ */ new Set();
    var wc = !1, ll = !1, vv = !1, m1 = typeof WeakSet == "function" ? WeakSet : Set, Nl = null, ch = null, oh = null, dl = null, Qa = !1, _u = null, Wy = 8192, v2 = {
      getCacheForType: function(e) {
        var t = xt(Al), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return Sa;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Fy = Symbol.for;
      Fy("selector.component"), Fy("selector.has_pseudo_class"), Fy("selector.role"), Fy("selector.test_id"), Fy("selector.text");
    }
    var b2 = [], S2 = typeof WeakMap == "function" ? WeakMap : Map, fn = 0, xa = 2, Bu = 4, Nc = 0, Iy = 1, fh = 2, bv = 3, Bs = 4, Kg = 6, y1 = 5, mt = fn, zt = null, $e = null, Fe = 0, La = 0, Py = 1, qs = 2, ep = 3, p1 = 4, Sv = 5, sh = 6, tp = 7, Tv = 8, js = 9, gt = La, sn = null, Ko = !1, rh = !1, Ev = !1, Di = 0, Jt = Nc, $o = 0, Wo = 0, Av = 0, rn = 0, Ys = 0, lp = null, za = null, $g = !1, xv = 0, g1 = 300, Wg = 1 / 0, v1 = 500, ap = null, Fo = null, T2 = 0, E2 = 1, A2 = 2, Gs = 0, b1 = 1, S1 = 2, T1 = 3, x2 = 4, zv = 5, Zl = 0, Io = null, dh = null, Po = 0, Rv = 0, Ov = null, E1 = null, z2 = 50, np = 0, Dv = null, Mv = !1, Fg = !1, R2 = 50, Vs = 0, up = null, hh = !1, Ig = null, A1 = !1, x1 = /* @__PURE__ */ new Set(), O2 = {}, Pg = null, mh = null, Uv = !1, Cv = !1, e0 = !1, Hv = !1, Xs = 0, wv = {};
    (function() {
      for (var e = 0; e < W0.length; e++) {
        var t = W0[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Ja(a, "on" + t);
      }
      Ja(ob, "onAnimationEnd"), Ja(fb, "onAnimationIteration"), Ja(sb, "onAnimationStart"), Ja("dblclick", "onDoubleClick"), Ja("focusin", "onFocus"), Ja("focusout", "onBlur"), Ja(n2, "onTransitionRun"), Ja(u2, "onTransitionStart"), Ja(i2, "onTransitionCancel"), Ja(rb, "onTransitionEnd");
    })(), Hi("onMouseEnter", ["mouseout", "mouseover"]), Hi("onMouseLeave", ["mouseout", "mouseover"]), Hi("onPointerEnter", ["pointerout", "pointerover"]), Hi("onPointerLeave", ["pointerout", "pointerover"]), ju(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), ju(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), ju("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ju(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), ju(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), ju(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var ip = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), Nv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ip)
    ), t0 = "_reactListening" + Math.random().toString(36).slice(2), z1 = !1, R1 = !1, l0 = !1, O1 = !1, a0 = !1, n0 = !1, D1 = !1, u0 = {}, D2 = /\r\n?/g, M2 = /\u0000|\uFFFD/g, Qs = "http://www.w3.org/1999/xlink", _v = "http://www.w3.org/XML/1998/namespace", U2 = "javascript:throw new Error('React form unexpectedly submitted.')", C2 = "suppressHydrationWarning", i0 = "$", c0 = "/$", _c = "$?", cp = "$!", H2 = 1, w2 = 2, N2 = 4, Bv = "F!", M1 = "F", U1 = "complete", _2 = "style", Bc = 0, yh = 1, o0 = 2, qv = null, jv = null, C1 = { dialog: !0, webview: !0 }, Yv = null, H1 = typeof setTimeout == "function" ? setTimeout : void 0, B2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ls = -1, w1 = typeof Promise == "function" ? Promise : void 0, q2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof w1 < "u" ? function(e) {
      return w1.resolve(null).then(e).catch(Fm);
    } : H1, Gv = null, Zs = 0, op = 1, N1 = 2, _1 = 3, eu = 4, tu = /* @__PURE__ */ new Map(), B1 = /* @__PURE__ */ new Set(), qc = Oe.d;
    Oe.d = {
      f: function() {
        var e = qc.f(), t = dc();
        return e || t;
      },
      r: function(e) {
        var t = sa(e);
        t !== null && t.tag === 5 && t.type === "form" ? om(t) : qc.r(e);
      },
      D: function(e) {
        qc.D(e), rg("dns-prefetch", e, null);
      },
      C: function(e, t) {
        qc.C(e, t), rg("preconnect", e, t);
      },
      L: function(e, t, a) {
        qc.L(e, t, a);
        var i = ph;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + ra(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + ra(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + ra(
            a.imageSizes
          ) + '"]')) : o += '[href="' + ra(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = hi(e);
              break;
            case "script":
              f = bc(e);
          }
          tu.has(f) || (e = Ye(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), tu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Gn(f)
          ) || t === "script" && i.querySelector(Sc(f)) || (t = i.createElement("link"), Yt(t, "link", e), nl(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        qc.m(e, t);
        var a = ph;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + ra(i) + '"][href="' + ra(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = bc(e);
          }
          if (!tu.has(f) && (e = Ye({ rel: "modulepreload", href: e }, t), tu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Sc(f)))
                  return;
            }
            i = a.createElement("link"), Yt(i, "link", e), nl(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        qc.X(e, t);
        var a = ph;
        if (a && e) {
          var i = dn(a).hoistableScripts, o = bc(e), f = i.get(o);
          f || (f = a.querySelector(
            Sc(o)
          ), f || (e = Ye({ src: e, async: !0 }, t), (t = tu.get(o)) && uy(e, t), f = a.createElement("script"), nl(f), Yt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        qc.S(e, t, a);
        var i = ph;
        if (i && e) {
          var o = dn(i).hoistableStyles, f = hi(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Zs, preload: null };
            if (d = i.querySelector(
              Gn(f)
            ))
              h.loading = op | eu;
            else {
              e = Ye(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = tu.get(f)) && ny(e, a);
              var g = d = i.createElement("link");
              nl(g), Yt(g, "link", e), g._p = new Promise(function(v, w) {
                g.onload = v, g.onerror = w;
              }), g.addEventListener("load", function() {
                h.loading |= op;
              }), g.addEventListener("error", function() {
                h.loading |= N1;
              }), h.loading |= eu, bd(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        qc.M(e, t);
        var a = ph;
        if (a && e) {
          var i = dn(a).hoistableScripts, o = bc(e), f = i.get(o);
          f || (f = a.querySelector(
            Sc(o)
          ), f || (e = Ye({ src: e, async: !0, type: "module" }, t), (t = tu.get(o)) && uy(e, t), f = a.createElement("script"), nl(f), Yt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var ph = typeof document > "u" ? null : document, f0 = null, fp = null, Vv = null, s0 = null, ks = Y0, sp = {
      $$typeof: Ya,
      Provider: null,
      Consumer: null,
      _currentValue: ks,
      _currentValue2: ks,
      _threadCount: 0
    }, q1 = "%c%s%c ", j1 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", Y1 = "", r0 = " ", j2 = Function.prototype.bind, G1 = !1, V1 = null, X1 = null, Q1 = null, L1 = null, Z1 = null, k1 = null, J1 = null, K1 = null, $1 = null;
    V1 = function(e, t, a, i) {
      t = p(e, t), t !== null && (a = O(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ye({}, e.memoizedProps), a = Jl(e, 2), a !== null && qt(a, e, 2));
    }, X1 = function(e, t, a) {
      t = p(e, t), t !== null && (a = J(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ye({}, e.memoizedProps), a = Jl(e, 2), a !== null && qt(a, e, 2));
    }, Q1 = function(e, t, a, i) {
      t = p(e, t), t !== null && (a = R(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ye({}, e.memoizedProps), a = Jl(e, 2), a !== null && qt(a, e, 2));
    }, L1 = function(e, t, a) {
      e.pendingProps = O(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Jl(e, 2), t !== null && qt(t, e, 2);
    }, Z1 = function(e, t) {
      e.pendingProps = J(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Jl(e, 2), t !== null && qt(t, e, 2);
    }, k1 = function(e, t, a) {
      e.pendingProps = R(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Jl(e, 2), t !== null && qt(t, e, 2);
    }, J1 = function(e) {
      var t = Jl(e, 2);
      t !== null && qt(t, e, 2);
    }, K1 = function(e) {
      W = e;
    }, $1 = function(e) {
      K = e;
    };
    var d0 = !0, h0 = null, Xv = !1, ef = null, tf = null, lf = null, rp = /* @__PURE__ */ new Map(), dp = /* @__PURE__ */ new Map(), af = [], Y2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), m0 = null;
    if (hs.prototype.render = zd.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ze(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = ea(i);
      ht(i, o, a, t, null, null);
    }, hs.prototype.unmount = zd.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (mt & (xa | Bu)) !== fn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), ht(e.current, 2, null, e, null, null), dc(), t[Ti] = null;
      }
    }, hs.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Ep();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < af.length && t !== 0 && t < af[a].priority; a++) ;
        af.splice(a, 0, e), a === 0 && gg(e);
      }
    }, (function() {
      var e = ms.version;
      if (e !== "19.1.1")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.1
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Oe.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Et(t), e = e !== null ? ye(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: B,
        reconcilerVersion: "19.1.1"
      };
      return e.overrideHookState = V1, e.overrideHookStateDeletePath = X1, e.overrideHookStateRenamePath = Q1, e.overrideProps = L1, e.overridePropsDeletePath = Z1, e.overridePropsRenamePath = k1, e.scheduleUpdate = J1, e.setErrorHandler = K1, e.setSuspenseHandler = $1, e.scheduleRefresh = He, e.scheduleRoot = Qe, e.setRefreshHandler = lt, e.getCurrentFiber = _0, e.getLaneLabelMap = B0, e.injectProfilingHooks = vt, ot(e);
    })() && S && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var W1 = window.location.protocol;
      /^(https?|file):$/.test(W1) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (W1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    pp.createRoot = function(e, t) {
      if (!ze(e))
        throw Error("Target container is not a DOM element.");
      Sg(e);
      var a = !1, i = "", o = dm, f = $p, d = Hr, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === pi && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = oy(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[Ti] = t.current, Lm(e), new zd(t);
    }, pp.hydrateRoot = function(e, t, a) {
      if (!ze(e))
        throw Error("Target container is not a DOM element.");
      Sg(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = dm, d = $p, h = Hr, g = null, v = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (g = a.unstable_transitionCallbacks), a.formState !== void 0 && (v = a.formState)), t = oy(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        g,
        v
      ), t.context = fy(null), a = t.current, i = ea(a), i = _l(i), o = bn(i), o.callback = null, Ia(a, o, i), a = i, t.current.lanes = a, Gc(t, a), Ba(t), e[Ti] = t.current, Lm(e), new hs(t);
    }, pp.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), pp;
}
var uS;
function $2() {
  if (uS) return p0.exports;
  uS = 1;
  function p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (O) {
        console.error(O);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (p(), p0.exports = J2()) : p0.exports = K2(), p0.exports;
}
var W2 = $2();
const F2 = /* @__PURE__ */ V2(W2);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I2 = (p) => p.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), P2 = (p) => p.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (O, R, b) => b ? b.toUpperCase() : R.toLowerCase()
), iS = (p) => {
  const O = P2(p);
  return O.charAt(0).toUpperCase() + O.slice(1);
}, bS = (...p) => p.filter((O, R, b) => !!O && O.trim() !== "" && b.indexOf(O) === R).join(" ").trim(), eT = (p) => {
  for (const O in p)
    if (O.startsWith("aria-") || O === "role" || O === "title")
      return !0;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lT = pS(
  ({
    color: p = "currentColor",
    size: O = 24,
    strokeWidth: R = 2,
    absoluteStrokeWidth: b,
    className: J = "",
    children: K,
    iconNode: W,
    ...ie
  }, Y) => Kv(
    "svg",
    {
      ref: Y,
      ...tT,
      width: O,
      height: O,
      stroke: p,
      strokeWidth: b ? Number(R) * 24 / Number(O) : R,
      className: bS("lucide", J),
      ...!K && !eT(ie) && { "aria-hidden": "true" },
      ...ie
    },
    [
      ...W.map(([he, ne]) => Kv(he, ne)),
      ...Array.isArray(K) ? K : [K]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bp = (p, O) => {
  const R = pS(
    ({ className: b, ...J }, K) => Kv(lT, {
      ref: K,
      iconNode: O,
      className: bS(
        `lucide-${I2(iS(p))}`,
        `lucide-${p}`,
        b
      ),
      ...J
    })
  );
  return R.displayName = iS(p), R;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aT = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], nT = bp("clock", aT);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uT = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], iT = bp("ellipsis-vertical", uT);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cT = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], oT = bp("send", cT);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fT = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], sT = bp("user", fT);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rT = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], dT = bp("x", rT), hT = { answer: "Wall Street Jr Investments is a leading financial services company dedicated to helping individuals and businesses achieve their investment goals. With over 15 years of experience, we provide personalized investment strategies, comprehensive financial planning, and expert guidance to build long-term wealth." }, mT = { answer: `📍 Address: 123 Financial District, New York, NY 10005
📞 Phone: (555) 123-4567
📧 Email: info@wallstreetjr.com
🕒 Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST

Our customer service team is ready to assist you with any questions about our investment services.` }, yT = { portfolioManagement: { question: "Portfolio Management", answer: "Our professional portfolio management service provides customized investment strategies tailored to your risk tolerance and financial goals. We continuously monitor and rebalance your portfolio to optimize performance while managing risk." }, financialPlanning: { question: "Financial Planning", answer: "Comprehensive financial planning services including retirement planning, tax optimization, estate planning, and insurance analysis. Our certified financial planners work with you to create a roadmap for your financial future." }, investmentConsulting: { question: "Investment Consulting", answer: "Expert investment consulting for high-net-worth individuals and institutions. We provide market analysis, investment research, and strategic advice to help you make informed investment decisions." }, retirementPlanning: { question: "Retirement Planning", answer: "Specialized retirement planning services including 401(k) optimization, IRA management, pension planning, and retirement income strategies. We help you build a secure financial foundation for your golden years." }, wealthManagement: { question: "Wealth Management", answer: "Holistic wealth management for affluent clients including asset allocation, trust services, family office solutions, and multi-generational wealth transfer strategies. Our team provides white-glove service for complex financial needs." } }, gp = {
  aboutUs: hT,
  contactUs: mT,
  services: yT
};
function cS(p, O) {
  if (typeof p == "function")
    return p(O);
  p != null && (p.current = O);
}
function pT(...p) {
  return (O) => {
    let R = !1;
    const b = p.map((J) => {
      const K = cS(J, O);
      return !R && typeof K == "function" && (R = !0), K;
    });
    if (R)
      return () => {
        for (let J = 0; J < b.length; J++) {
          const K = b[J];
          typeof K == "function" ? K() : cS(p[J], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function gT(p) {
  const O = /* @__PURE__ */ bT(p), R = oa.forwardRef((b, J) => {
    const { children: K, ...W } = b, ie = oa.Children.toArray(K), Y = ie.find(TT);
    if (Y) {
      const he = Y.props.children, ne = ie.map((Se) => Se === Y ? oa.Children.count(he) > 1 ? oa.Children.only(null) : oa.isValidElement(he) ? he.props.children : null : Se);
      return /* @__PURE__ */ de.jsx(O, { ...W, ref: J, children: oa.isValidElement(he) ? oa.cloneElement(he, void 0, ne) : null });
    }
    return /* @__PURE__ */ de.jsx(O, { ...W, ref: J, children: K });
  });
  return R.displayName = `${p}.Slot`, R;
}
var vT = /* @__PURE__ */ gT("Slot");
// @__NO_SIDE_EFFECTS__
function bT(p) {
  const O = oa.forwardRef((R, b) => {
    const { children: J, ...K } = R;
    if (oa.isValidElement(J)) {
      const W = AT(J), ie = ET(K, J.props);
      return J.type !== oa.Fragment && (ie.ref = b ? pT(b, W) : W), oa.cloneElement(J, ie);
    }
    return oa.Children.count(J) > 1 ? oa.Children.only(null) : null;
  });
  return O.displayName = `${p}.SlotClone`, O;
}
var ST = Symbol("radix.slottable");
function TT(p) {
  return oa.isValidElement(p) && typeof p.type == "function" && "__radixId" in p.type && p.type.__radixId === ST;
}
function ET(p, O) {
  const R = { ...O };
  for (const b in O) {
    const J = p[b], K = O[b];
    /^on[A-Z]/.test(b) ? J && K ? R[b] = (...ie) => {
      const Y = K(...ie);
      return J(...ie), Y;
    } : J && (R[b] = J) : b === "style" ? R[b] = { ...J, ...K } : b === "className" && (R[b] = [J, K].filter(Boolean).join(" "));
  }
  return { ...p, ...R };
}
function AT(p) {
  let O = Object.getOwnPropertyDescriptor(p.props, "ref")?.get, R = O && "isReactWarning" in O && O.isReactWarning;
  return R ? p.ref : (O = Object.getOwnPropertyDescriptor(p, "ref")?.get, R = O && "isReactWarning" in O && O.isReactWarning, R ? p.props.ref : p.props.ref || p.ref);
}
function SS(p) {
  var O, R, b = "";
  if (typeof p == "string" || typeof p == "number") b += p;
  else if (typeof p == "object") if (Array.isArray(p)) {
    var J = p.length;
    for (O = 0; O < J; O++) p[O] && (R = SS(p[O])) && (b && (b += " "), b += R);
  } else for (R in p) p[R] && (b && (b += " "), b += R);
  return b;
}
function TS() {
  for (var p, O, R = 0, b = "", J = arguments.length; R < J; R++) (p = arguments[R]) && (O = SS(p)) && (b && (b += " "), b += O);
  return b;
}
const oS = (p) => typeof p == "boolean" ? `${p}` : p === 0 ? "0" : p, fS = TS, xT = (p, O) => (R) => {
  var b;
  if (O?.variants == null) return fS(p, R?.class, R?.className);
  const { variants: J, defaultVariants: K } = O, W = Object.keys(J).map((he) => {
    const ne = R?.[he], Se = K?.[he];
    if (ne === null) return null;
    const me = oS(ne) || oS(Se);
    return J[he][me];
  }), ie = R && Object.entries(R).reduce((he, ne) => {
    let [Se, me] = ne;
    return me === void 0 || (he[Se] = me), he;
  }, {}), Y = O == null || (b = O.compoundVariants) === null || b === void 0 ? void 0 : b.reduce((he, ne) => {
    let { class: Se, className: me, ...Qe } = ne;
    return Object.entries(Qe).every((He) => {
      let [lt, ze] = He;
      return Array.isArray(ze) ? ze.includes({
        ...K,
        ...ie
      }[lt]) : {
        ...K,
        ...ie
      }[lt] === ze;
    }) ? [
      ...he,
      Se,
      me
    ] : he;
  }, []);
  return fS(p, W, Y, R?.class, R?.className);
}, Iv = "-", zT = (p) => {
  const O = OT(p), {
    conflictingClassGroups: R,
    conflictingClassGroupModifiers: b
  } = p;
  return {
    getClassGroupId: (W) => {
      const ie = W.split(Iv);
      return ie[0] === "" && ie.length !== 1 && ie.shift(), ES(ie, O) || RT(W);
    },
    getConflictingClassGroupIds: (W, ie) => {
      const Y = R[W] || [];
      return ie && b[W] ? [...Y, ...b[W]] : Y;
    }
  };
}, ES = (p, O) => {
  if (p.length === 0)
    return O.classGroupId;
  const R = p[0], b = O.nextPart.get(R), J = b ? ES(p.slice(1), b) : void 0;
  if (J)
    return J;
  if (O.validators.length === 0)
    return;
  const K = p.join(Iv);
  return O.validators.find(({
    validator: W
  }) => W(K))?.classGroupId;
}, sS = /^\[(.+)\]$/, RT = (p) => {
  if (sS.test(p)) {
    const O = sS.exec(p)[1], R = O?.substring(0, O.indexOf(":"));
    if (R)
      return "arbitrary.." + R;
  }
}, OT = (p) => {
  const {
    theme: O,
    classGroups: R
  } = p, b = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const J in R)
    $v(R[J], b, J, O);
  return b;
}, $v = (p, O, R, b) => {
  p.forEach((J) => {
    if (typeof J == "string") {
      const K = J === "" ? O : rS(O, J);
      K.classGroupId = R;
      return;
    }
    if (typeof J == "function") {
      if (DT(J)) {
        $v(J(b), O, R, b);
        return;
      }
      O.validators.push({
        validator: J,
        classGroupId: R
      });
      return;
    }
    Object.entries(J).forEach(([K, W]) => {
      $v(W, rS(O, K), R, b);
    });
  });
}, rS = (p, O) => {
  let R = p;
  return O.split(Iv).forEach((b) => {
    R.nextPart.has(b) || R.nextPart.set(b, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), R = R.nextPart.get(b);
  }), R;
}, DT = (p) => p.isThemeGetter, MT = (p) => {
  if (p < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let O = 0, R = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
  const J = (K, W) => {
    R.set(K, W), O++, O > p && (O = 0, b = R, R = /* @__PURE__ */ new Map());
  };
  return {
    get(K) {
      let W = R.get(K);
      if (W !== void 0)
        return W;
      if ((W = b.get(K)) !== void 0)
        return J(K, W), W;
    },
    set(K, W) {
      R.has(K) ? R.set(K, W) : J(K, W);
    }
  };
}, Wv = "!", Fv = ":", UT = Fv.length, CT = (p) => {
  const {
    prefix: O,
    experimentalParseClassName: R
  } = p;
  let b = (J) => {
    const K = [];
    let W = 0, ie = 0, Y = 0, he;
    for (let He = 0; He < J.length; He++) {
      let lt = J[He];
      if (W === 0 && ie === 0) {
        if (lt === Fv) {
          K.push(J.slice(Y, He)), Y = He + UT;
          continue;
        }
        if (lt === "/") {
          he = He;
          continue;
        }
      }
      lt === "[" ? W++ : lt === "]" ? W-- : lt === "(" ? ie++ : lt === ")" && ie--;
    }
    const ne = K.length === 0 ? J : J.substring(Y), Se = HT(ne), me = Se !== ne, Qe = he && he > Y ? he - Y : void 0;
    return {
      modifiers: K,
      hasImportantModifier: me,
      baseClassName: Se,
      maybePostfixModifierPosition: Qe
    };
  };
  if (O) {
    const J = O + Fv, K = b;
    b = (W) => W.startsWith(J) ? K(W.substring(J.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: W,
      maybePostfixModifierPosition: void 0
    };
  }
  if (R) {
    const J = b;
    b = (K) => R({
      className: K,
      parseClassName: J
    });
  }
  return b;
}, HT = (p) => p.endsWith(Wv) ? p.substring(0, p.length - 1) : p.startsWith(Wv) ? p.substring(1) : p, wT = (p) => {
  const O = Object.fromEntries(p.orderSensitiveModifiers.map((b) => [b, !0]));
  return (b) => {
    if (b.length <= 1)
      return b;
    const J = [];
    let K = [];
    return b.forEach((W) => {
      W[0] === "[" || O[W] ? (J.push(...K.sort(), W), K = []) : K.push(W);
    }), J.push(...K.sort()), J;
  };
}, NT = (p) => ({
  cache: MT(p.cacheSize),
  parseClassName: CT(p),
  sortModifiers: wT(p),
  ...zT(p)
}), _T = /\s+/, BT = (p, O) => {
  const {
    parseClassName: R,
    getClassGroupId: b,
    getConflictingClassGroupIds: J,
    sortModifiers: K
  } = O, W = [], ie = p.trim().split(_T);
  let Y = "";
  for (let he = ie.length - 1; he >= 0; he -= 1) {
    const ne = ie[he], {
      isExternal: Se,
      modifiers: me,
      hasImportantModifier: Qe,
      baseClassName: He,
      maybePostfixModifierPosition: lt
    } = R(ne);
    if (Se) {
      Y = ne + (Y.length > 0 ? " " + Y : Y);
      continue;
    }
    let ze = !!lt, je = b(ze ? He.substring(0, lt) : He);
    if (!je) {
      if (!ze) {
        Y = ne + (Y.length > 0 ? " " + Y : Y);
        continue;
      }
      if (je = b(He), !je) {
        Y = ne + (Y.length > 0 ? " " + Y : Y);
        continue;
      }
      ze = !1;
    }
    const Kt = K(me).join(":"), rt = Qe ? Kt + Wv : Kt, Et = rt + je;
    if (W.includes(Et))
      continue;
    W.push(Et);
    const ye = J(je, ze);
    for (let Me = 0; Me < ye.length; ++Me) {
      const Te = ye[Me];
      W.push(rt + Te);
    }
    Y = ne + (Y.length > 0 ? " " + Y : Y);
  }
  return Y;
};
function qT() {
  let p = 0, O, R, b = "";
  for (; p < arguments.length; )
    (O = arguments[p++]) && (R = AS(O)) && (b && (b += " "), b += R);
  return b;
}
const AS = (p) => {
  if (typeof p == "string")
    return p;
  let O, R = "";
  for (let b = 0; b < p.length; b++)
    p[b] && (O = AS(p[b])) && (R && (R += " "), R += O);
  return R;
};
function jT(p, ...O) {
  let R, b, J, K = W;
  function W(Y) {
    const he = O.reduce((ne, Se) => Se(ne), p());
    return R = NT(he), b = R.cache.get, J = R.cache.set, K = ie, ie(Y);
  }
  function ie(Y) {
    const he = b(Y);
    if (he)
      return he;
    const ne = BT(Y, R);
    return J(Y, ne), ne;
  }
  return function() {
    return K(qT.apply(null, arguments));
  };
}
const Rl = (p) => {
  const O = (R) => R[p] || [];
  return O.isThemeGetter = !0, O;
}, xS = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, zS = /^\((?:(\w[\w-]*):)?(.+)\)$/i, YT = /^\d+\/\d+$/, GT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, VT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, XT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, QT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, LT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, gh = (p) => YT.test(p), We = (p) => !!p && !Number.isNaN(Number(p)), nf = (p) => !!p && Number.isInteger(Number(p)), kv = (p) => p.endsWith("%") && We(p.slice(0, -1)), Yc = (p) => GT.test(p), ZT = () => !0, kT = (p) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  VT.test(p) && !XT.test(p)
), RS = () => !1, JT = (p) => QT.test(p), KT = (p) => LT.test(p), $T = (p) => !se(p) && !re(p), WT = (p) => bh(p, MS, RS), se = (p) => xS.test(p), Js = (p) => bh(p, US, kT), Jv = (p) => bh(p, tE, We), dS = (p) => bh(p, OS, RS), FT = (p) => bh(p, DS, KT), v0 = (p) => bh(p, CS, JT), re = (p) => zS.test(p), vp = (p) => Sh(p, US), IT = (p) => Sh(p, lE), hS = (p) => Sh(p, OS), PT = (p) => Sh(p, MS), eE = (p) => Sh(p, DS), b0 = (p) => Sh(p, CS, !0), bh = (p, O, R) => {
  const b = xS.exec(p);
  return b ? b[1] ? O(b[1]) : R(b[2]) : !1;
}, Sh = (p, O, R = !1) => {
  const b = zS.exec(p);
  return b ? b[1] ? O(b[1]) : R : !1;
}, OS = (p) => p === "position" || p === "percentage", DS = (p) => p === "image" || p === "url", MS = (p) => p === "length" || p === "size" || p === "bg-size", US = (p) => p === "length", tE = (p) => p === "number", lE = (p) => p === "family-name", CS = (p) => p === "shadow", aE = () => {
  const p = Rl("color"), O = Rl("font"), R = Rl("text"), b = Rl("font-weight"), J = Rl("tracking"), K = Rl("leading"), W = Rl("breakpoint"), ie = Rl("container"), Y = Rl("spacing"), he = Rl("radius"), ne = Rl("shadow"), Se = Rl("inset-shadow"), me = Rl("text-shadow"), Qe = Rl("drop-shadow"), He = Rl("blur"), lt = Rl("perspective"), ze = Rl("aspect"), je = Rl("ease"), Kt = Rl("animate"), rt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Et = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], ye = () => [...Et(), re, se], Me = () => ["auto", "hidden", "clip", "visible", "scroll"], Te = () => ["auto", "contain", "none"], ue = () => [re, se, Y], P = () => [gh, "full", "auto", ...ue()], Le = () => [nf, "none", "subgrid", re, se], Ie = () => ["auto", {
    span: ["full", nf, re, se]
  }, nf, re, se], Re = () => [nf, "auto", re, se], Qt = () => ["auto", "min", "max", "fr", re, se], $t = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], St = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], z = () => ["auto", ...ue()], Z = () => [gh, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...ue()], q = () => [p, re, se], ge = () => [...Et(), hS, dS, {
    position: [re, se]
  }], _ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ae = () => ["auto", "cover", "contain", PT, WT, {
    size: [re, se]
  }], F = () => [kv, vp, Js], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    he,
    re,
    se
  ], Ee = () => ["", We, vp, Js], ot = () => ["solid", "dashed", "dotted", "double"], Ze = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], vt = () => [We, kv, hS, dS], At = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    He,
    re,
    se
  ], Nt = () => ["none", We, re, se], hl = () => ["none", We, re, se], Za = () => [We, re, se], lu = () => [gh, "full", ...ue()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Yc],
      breakpoint: [Yc],
      color: [ZT],
      container: [Yc],
      "drop-shadow": [Yc],
      ease: ["in", "out", "in-out"],
      font: [$T],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Yc],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Yc],
      shadow: [Yc],
      spacing: ["px", We],
      text: [Yc],
      "text-shadow": [Yc],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", gh, se, re, ze]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [We, se, re, ie]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": rt()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": rt()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: ye()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Me()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Me()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Me()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Te()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Te()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Te()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: P()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": P()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": P()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: P()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: P()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: P()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: P()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: P()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: P()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [nf, "auto", re, se]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [gh, "full", "auto", ie, ...ue()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [We, gh, "auto", "initial", "none", se]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", We, re, se]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", We, re, se]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [nf, "first", "last", "none", re, se]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Le()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Ie()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Re()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Re()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Le()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Ie()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Re()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Re()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Qt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Qt()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: ue()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": ue()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": ue()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...$t(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...St(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...St()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...$t()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...St(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...St(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": $t()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...St(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...St()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: ue()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: ue()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: ue()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: ue()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: ue()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: ue()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: ue()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: ue()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: ue()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: z()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: z()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: z()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: z()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: z()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: z()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: z()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: z()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: z()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": ue()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": ue()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Z()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [ie, "screen", ...Z()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          ie,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Z()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          ie,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [W]
          },
          ...Z()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Z()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Z()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Z()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", R, vp, Js]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [b, re, Jv]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", kv, se]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [IT, se, O]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [J, re, se]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [We, "none", re, Jv]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          K,
          ...ue()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", re, se]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", re, se]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: q()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: q()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ot(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [We, "from-font", "auto", re, Js]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: q()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [We, "auto", re, se]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: ue()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", re, se]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", re, se]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: ge()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: _()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ae()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, nf, re, se],
          radial: ["", re, se],
          conic: [nf, re, se]
        }, eE, FT]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: q()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: F()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: F()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: F()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: q()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: q()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: q()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: te()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": te()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": te()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": te()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": te()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": te()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": te()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": te()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": te()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": te()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": te()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": te()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": te()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": te()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": te()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Ee()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Ee()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Ee()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Ee()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Ee()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Ee()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Ee()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Ee()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Ee()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Ee()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": Ee()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ot(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ot(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: q()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": q()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": q()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": q()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": q()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": q()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": q()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": q()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": q()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: q()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ot(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [We, re, se]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", We, vp, Js]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: q()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          ne,
          b0,
          v0
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: q()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", Se, b0, v0]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": q()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Ee()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: q()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [We, Js]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": q()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Ee()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": q()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", me, b0, v0]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": q()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [We, re, se]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ze(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ze()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [We]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": vt()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": vt()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": q()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": q()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": vt()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": vt()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": q()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": q()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": vt()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": vt()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": q()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": q()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": vt()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": vt()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": q()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": q()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": vt()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": vt()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": q()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": q()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": vt()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": vt()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": q()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": q()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": vt()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": vt()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": q()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": q()
      }],
      "mask-image-radial": [{
        "mask-radial": [re, se]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": vt()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": vt()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": q()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": q()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": Et()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [We]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": vt()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": vt()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": q()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": q()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: ge()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: _()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ae()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", re, se]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          re,
          se
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: At()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [We, re, se]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [We, re, se]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          Qe,
          b0,
          v0
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": q()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", We, re, se]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [We, re, se]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", We, re, se]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [We, re, se]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", We, re, se]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          re,
          se
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": At()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [We, re, se]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [We, re, se]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", We, re, se]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [We, re, se]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", We, re, se]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [We, re, se]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [We, re, se]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", We, re, se]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": ue()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": ue()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": ue()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", re, se]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [We, "initial", re, se]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", je, re, se]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [We, re, se]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", Kt, re, se]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [lt, re, se]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": ye()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Nt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Nt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Nt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Nt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: hl()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": hl()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": hl()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": hl()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Za()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Za()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Za()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [re, se, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ye()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: lu()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": lu()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": lu()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": lu()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: q()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: q()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", re, se]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": ue()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": ue()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": ue()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": ue()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": ue()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": ue()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": ue()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": ue()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": ue()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": ue()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": ue()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": ue()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": ue()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": ue()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": ue()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": ue()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": ue()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": ue()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", re, se]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...q()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [We, vp, Js, Jv]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...q()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, nE = /* @__PURE__ */ jT(aE);
function HS(...p) {
  return nE(TS(p));
}
const uE = xT(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-900",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        link: "text-blue-600 underline-offset-4 hover:underline",
        round: "bg-gray-200 text-gray-900 hover:bg-gray-300 rounded-full"
        // new variant
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), iE = oa.forwardRef(
  ({ className: p, variant: O, size: R, asChild: b = !1, ...J }, K) => {
    const W = b ? vT : "button";
    return /* @__PURE__ */ de.jsx(
      W,
      {
        className: HS(uE({ variant: O, size: R, className: p })),
        ref: K,
        ...J
      }
    );
  }
);
iE.displayName = "Button";
const wS = oa.forwardRef(({ className: p, type: O, ...R }, b) => /* @__PURE__ */ de.jsx(
  "input",
  {
    type: O,
    className: HS(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:outline-none focus:ring-0",
      p
    ),
    ref: b,
    ...R
  }
));
wS.displayName = "Input";
var NS = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, mS = Mi.createContext && /* @__PURE__ */ Mi.createContext(NS), cE = ["attr", "size", "title"];
function oE(p, O) {
  if (p == null) return {};
  var R = fE(p, O), b, J;
  if (Object.getOwnPropertySymbols) {
    var K = Object.getOwnPropertySymbols(p);
    for (J = 0; J < K.length; J++)
      b = K[J], !(O.indexOf(b) >= 0) && Object.prototype.propertyIsEnumerable.call(p, b) && (R[b] = p[b]);
  }
  return R;
}
function fE(p, O) {
  if (p == null) return {};
  var R = {};
  for (var b in p)
    if (Object.prototype.hasOwnProperty.call(p, b)) {
      if (O.indexOf(b) >= 0) continue;
      R[b] = p[b];
    }
  return R;
}
function S0() {
  return S0 = Object.assign ? Object.assign.bind() : function(p) {
    for (var O = 1; O < arguments.length; O++) {
      var R = arguments[O];
      for (var b in R)
        Object.prototype.hasOwnProperty.call(R, b) && (p[b] = R[b]);
    }
    return p;
  }, S0.apply(this, arguments);
}
function yS(p, O) {
  var R = Object.keys(p);
  if (Object.getOwnPropertySymbols) {
    var b = Object.getOwnPropertySymbols(p);
    O && (b = b.filter(function(J) {
      return Object.getOwnPropertyDescriptor(p, J).enumerable;
    })), R.push.apply(R, b);
  }
  return R;
}
function T0(p) {
  for (var O = 1; O < arguments.length; O++) {
    var R = arguments[O] != null ? arguments[O] : {};
    O % 2 ? yS(Object(R), !0).forEach(function(b) {
      sE(p, b, R[b]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(R)) : yS(Object(R)).forEach(function(b) {
      Object.defineProperty(p, b, Object.getOwnPropertyDescriptor(R, b));
    });
  }
  return p;
}
function sE(p, O, R) {
  return O = rE(O), O in p ? Object.defineProperty(p, O, { value: R, enumerable: !0, configurable: !0, writable: !0 }) : p[O] = R, p;
}
function rE(p) {
  var O = dE(p, "string");
  return typeof O == "symbol" ? O : O + "";
}
function dE(p, O) {
  if (typeof p != "object" || !p) return p;
  var R = p[Symbol.toPrimitive];
  if (R !== void 0) {
    var b = R.call(p, O);
    if (typeof b != "object") return b;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (O === "string" ? String : Number)(p);
}
function _S(p) {
  return p && p.map((O, R) => /* @__PURE__ */ Mi.createElement(O.tag, T0({
    key: R
  }, O.attr), _S(O.child)));
}
function hE(p) {
  return (O) => /* @__PURE__ */ Mi.createElement(mE, S0({
    attr: T0({}, p.attr)
  }, O), _S(p.child));
}
function mE(p) {
  var O = (R) => {
    var {
      attr: b,
      size: J,
      title: K
    } = p, W = oE(p, cE), ie = J || R.size || "1em", Y;
    return R.className && (Y = R.className), p.className && (Y = (Y ? Y + " " : "") + p.className), /* @__PURE__ */ Mi.createElement("svg", S0({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, R.attr, b, W, {
      className: Y,
      style: T0(T0({
        color: p.color || R.color
      }, R.style), p.style),
      height: ie,
      width: ie,
      xmlns: "http://www.w3.org/2000/svg"
    }), K && /* @__PURE__ */ Mi.createElement("title", null, K), p.children);
  };
  return mS !== void 0 ? /* @__PURE__ */ Mi.createElement(mS.Consumer, null, (R) => O(R)) : O(NS);
}
function yE(p) {
  return hE({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" }, child: [] }] })(p);
}
const pE = ({ onClose: p }) => {
  const [O, R] = Ks([]), [b, J] = Ks(""), [K, W] = Ks(!1), [ie, Y] = Ks(!1), he = vh(null), ne = vh(null), Se = vh(!1), me = (ye) => {
    if (!ye) return null;
    const Me = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi, Te = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, ue = /(\+?\d[\d\s-]{7,}\d)/g;
    let P = ye;
    return P = P.replace(Me, (Le) => `<a href="${Le.startsWith("http") ? Le : `https://${Le}`}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline block">${Le}</a>`), P = P.replace(Te, (Le) => `<a href="mailto:${Le}" class="text-blue-600 underline block">${Le}</a>`), P = P.replace(ue, (Le) => `<a href="tel:${Le.replace(/\s|-/g, "")}" class="text-blue-600 underline block">${Le}</a>`), P;
  };
  Qv(() => {
    const ye = (Me) => {
      ne.current && !ne.current.contains(Me.target) && Y(!1);
    };
    return document.addEventListener("mousedown", ye), () => document.removeEventListener("mousedown", ye);
  }, []);
  const Qe = () => {
    he.current?.scrollIntoView({ behavior: "smooth" });
  };
  Qv(() => {
    Qe();
  }, [O]), Qv(() => {
    Se.current || (He(), Se.current = !0);
  }, []);
  const He = () => {
    R([]), setTimeout(() => {
      ze("Welcome to Wall Street Jr Investments! 👋"), setTimeout(() => {
        ze("How can I assist you today?"), setTimeout(() => {
          ze("", !0, ["About Us", "Our Services", "Contact Us"], "Please choose an option:");
        }, 1e3);
      }, 1e3);
    }, 500);
  }, lt = () => {
    Se.current = !1, R([]), J(""), W(!1), Y(!1), setTimeout(() => {
      He(), Se.current = !0;
    }, 100);
  }, ze = (ye, Me = !1, Te, ue = null) => {
    W(!0), setTimeout(() => {
      const P = {
        id: Date.now().toString(),
        type: "bot",
        content: ye,
        isOption: Me,
        options: Te,
        optionHeader: ue
      };
      R((Le) => [...Le, P]), W(!1);
    }, 800);
  }, je = (ye) => {
    const Me = {
      id: Date.now().toString(),
      type: "user",
      content: ye
    };
    R((Te) => [...Te, Me]);
  }, Kt = (ye) => {
    if (je(ye), ye === "About Us")
      setTimeout(() => ze(gp.aboutUs.answer), 500);
    else if (ye === "Contact Us")
      setTimeout(() => ze(gp.contactUs.answer), 500);
    else if (ye === "Our Services")
      setTimeout(() => {
        ze("Here are our investment services:"), setTimeout(() => {
          ze("", !0, [
            "Portfolio Management",
            "Financial Planning",
            "Investment Consulting",
            "Retirement Planning",
            "Wealth Management"
          ], "Choose a service to learn more:");
        }, 800);
      }, 500);
    else {
      const Me = Object.keys(gp.services).find(
        (Te) => gp.services[Te].question === ye
      );
      Me && setTimeout(() => {
        ze(gp.services[Me].answer);
      }, 500);
    }
  }, rt = async () => {
    if (!b.trim()) return;
    je(b);
    const ye = b;
    try {
      const Te = await (await fetch("http://localhost:5000/api/faqs/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: ye })
      })).json();
      setTimeout(() => {
        Te.success && Te.response ? ze(Te.response) : ze(
          "I'm sorry, I couldn't find information about that. Please try rephrasing your question or select from the available options. You can also contact our team directly for personalized assistance."
        );
      }, 500);
    } catch (Me) {
      console.error("Error fetching FAQ:", Me), ze("Oops! Something went wrong. Please try again later.");
    }
    J("");
  }, Et = (ye) => {
    ye.key === "Enter" && rt();
  };
  return /* @__PURE__ */ de.jsxs("div", { className: "flex flex-col h-full bg-gray-50 py-2 px-2", children: [
    /* @__PURE__ */ de.jsxs("div", { className: "bg-[#344b73] text-white px-4 py-3 flex items-center justify-between shadow-md rounded-lg relative", children: [
      /* @__PURE__ */ de.jsxs("div", { className: "flex items-left gap-3", children: [
        /* @__PURE__ */ de.jsx("div", { className: "w-10 h-10 bg-white rounded-full flex items-center justify-center", children: /* @__PURE__ */ de.jsx(
          "img",
          {
            src: "/bot.png",
            alt: "Bot",
            className: "w-8 h-8 object-contain rounded-full"
          }
        ) }),
        /* @__PURE__ */ de.jsxs("div", { children: [
          /* @__PURE__ */ de.jsx("h2", { className: "font-semibold text-base text-left", children: "JUNIOR" }),
          /* @__PURE__ */ de.jsxs("p", { className: "text-xs text-white/80 flex items-center gap-1", children: [
            /* @__PURE__ */ de.jsx(nT, { className: "w-3 h-3" }),
            "Usual reply time: 2 to 3 Minutes"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ de.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ de.jsxs("div", { className: "relative", ref: ne, children: [
          /* @__PURE__ */ de.jsx(
            "button",
            {
              onClick: () => Y(!ie),
              className: "p-1 cursor-pointer hover:border border-white rounded-full",
              children: /* @__PURE__ */ de.jsx(iT, { className: "w-5 h-5 cursor-pointer" })
            }
          ),
          ie && /* @__PURE__ */ de.jsxs("div", { className: "absolute right-0 mt-2 w-56 text-sm  bg-white rounded-lg shadow-lg text-gray-800 z-50", children: [
            /* @__PURE__ */ de.jsxs("button", { className: "disabled flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 w-full text-left rounded-lg", children: [
              /* @__PURE__ */ de.jsx("span", { className: "flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full", children: "💬" }),
              "Start Live Chat"
            ] }),
            /* @__PURE__ */ de.jsxs(
              "button",
              {
                onClick: lt,
                className: "flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 w-full text-left rounded-lg",
                children: [
                  /* @__PURE__ */ de.jsx("span", { className: "flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full", children: "🔄" }),
                  "Refresh Chat"
                ]
              }
            ),
            /* @__PURE__ */ de.jsxs("button", { className: "disabled flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 w-full text-left rounded-lg", children: [
              /* @__PURE__ */ de.jsx("span", { className: "flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full", children: /* @__PURE__ */ de.jsx(yE, { className: "text-green-500 w-5 h-5" }) }),
              "Transfer to WhatsApp"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ de.jsx("button", { onClick: p, className: "p-1 cursor-pointer hover:border border-white rounded-full", children: /* @__PURE__ */ de.jsx(dT, { className: "w-5 h-5 cursor-pointer" }) })
      ] })
    ] }),
    /* @__PURE__ */ de.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [
      O.map((ye) => /* @__PURE__ */ de.jsxs(
        "div",
        {
          className: `flex gap-3 items-end ${ye.type === "user" ? "flex-row-reverse" : ""}`,
          children: [
            /* @__PURE__ */ de.jsx(
              "div",
              {
                className: `w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${ye.type === "bot" ? "bg-white text-white" : "bg-gray-400 text-white"}`,
                children: ye.type === "bot" ? /* @__PURE__ */ de.jsx(
                  "img",
                  {
                    src: "/bot.png",
                    alt: "Bot",
                    className: "w-6 h-6 rounded-full object-contain"
                  }
                ) : /* @__PURE__ */ de.jsx(sT, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ de.jsxs("div", { className: "max-w-md lg:max-w-lg text-left", children: [
              ye.content && /* @__PURE__ */ de.jsx(
                "div",
                {
                  style: {
                    borderRadius: ye.type === "bot" ? "20px 20px 20px 3px" : "20px 20px 3px 20px",
                    // Bot vs User
                    maxWidth: "230px",
                    display: "block"
                  },
                  className: `rounded-2xl px-4 py-3 ${ye.type === "bot" ? "bg-white text-gray-800 shadow-sm" : "bg-[#344b73] text-white"}`,
                  children: /* @__PURE__ */ de.jsx(
                    "p",
                    {
                      className: "text-sm leading-relaxed whitespace-pre-line",
                      dangerouslySetInnerHTML: { __html: me(ye.content) }
                    }
                  )
                }
              ),
              ye.isOption && ye.options && /* @__PURE__ */ de.jsxs("div", { className: "mt-2 rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden", style: {
                borderRadius: "20px 20px 20px 3px",
                // Bot vs User
                maxWidth: "230px",
                display: "block"
              }, children: [
                ye.optionHeader && /* @__PURE__ */ de.jsx("div", { className: "px-4 py-3 bg-gray-50", children: /* @__PURE__ */ de.jsx("p", { className: "text-sm font-semibold text-gray-700", children: ye.optionHeader }) }),
                ye.options.map((Me, Te) => /* @__PURE__ */ de.jsx(
                  "button",
                  {
                    onClick: () => Kt(Me),
                    className: "block w-full cursor-pointer text-center text-sm text-blue-800 px-4 py-3 hover:bg-blue-50 border-b last:border-b-0 border-gray-200",
                    children: Me
                  },
                  Te
                ))
              ] })
            ] })
          ]
        },
        ye.id
      )),
      K && /* @__PURE__ */ de.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ de.jsx("div", { className: "w-10 h-10 rounded-full bg-white text-white flex items-center justify-center", children: /* @__PURE__ */ de.jsx(
          "img",
          {
            src: "/bot.png",
            alt: "Bot",
            className: "w-6 h-6 rounded-full object-contain"
          }
        ) }),
        /* @__PURE__ */ de.jsx("div", { className: "bg-white rounded-2xl px-4 py-4 shadow-sm", children: /* @__PURE__ */ de.jsxs("div", { className: "flex space-x-1", children: [
          /* @__PURE__ */ de.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" }),
          /* @__PURE__ */ de.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.1s" } }),
          /* @__PURE__ */ de.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.2s" } })
        ] }) })
      ] }),
      /* @__PURE__ */ de.jsx("div", { ref: he })
    ] }),
    /* @__PURE__ */ de.jsx("div", { className: "p-4 bg-white ", children: /* @__PURE__ */ de.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ de.jsx(
        wS,
        {
          type: "text",
          placeholder: "Type your message...",
          value: b,
          onChange: (ye) => J(ye.target.value),
          onKeyPress: Et,
          className: "flex-1 border-gray-300"
        }
      ),
      /* @__PURE__ */ de.jsx(
        "button",
        {
          onClick: rt,
          className: "inline-flex items-center justify-center px-3 py-3 bg-[#dfe1e4] font-bold text-[white] text-sm  rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          children: /* @__PURE__ */ de.jsx(oT, { className: "w-4 h-4" })
        }
      )
    ] }) })
  ] });
}, gE = () => {
  const [p, O] = Ks(!1), [R, b] = Ks({ width: 420, height: 600 }), [J, K] = Ks({ bottom: 24, right: 24 }), W = vh(null), ie = vh(!1), Y = vh({ x: 0, y: 0, width: 0, height: 0 }), he = () => {
    O(!p);
  }, ne = (Qe) => {
    ie.current = !0, Y.current = {
      x: Qe.clientX,
      y: Qe.clientY,
      width: R.width,
      height: R.height
    }, document.addEventListener("mousemove", Se), document.addEventListener("mouseup", me);
  }, Se = (Qe) => {
    if (!ie.current) return;
    const He = Y.current.x - Qe.clientX, lt = Y.current.y - Qe.clientY, ze = Math.max(350, Y.current.width + He), je = Math.max(400, Y.current.height + lt);
    b({ width: ze, height: je });
  }, me = () => {
    ie.current = !1, document.removeEventListener("mousemove", Se), document.removeEventListener("mouseup", me);
  };
  return /* @__PURE__ */ de.jsxs(de.Fragment, { children: [
    !p && /* @__PURE__ */ de.jsxs("div", { className: "fixed bottom-6 right-6 flex items-center z-50", children: [
      /* @__PURE__ */ de.jsx(
        "div",
        {
          className: "relative inline-block max-w-[230px] bg-white text-black font-semibold text-[16px] p-3 mb-2 mr-2 shadow-[0_0_3px_1px_rgba(145,145,145,0.3)] cursor-pointer",
          style: {
            borderRadius: "20px 20px 3px 20px"
          },
          children: "May I help you?"
        }
      ),
      /* @__PURE__ */ de.jsx(
        "button",
        {
          onClick: he,
          className: "h-14 w-14 sm:h-16 sm:w-16 rounded-full shadow-lg bg-[#344b73] cursor-pointer overflow-hidden flex items-center justify-center p-0",
          children: /* @__PURE__ */ de.jsx(
            "img",
            {
              src: "/bot.png",
              alt: "Bot",
              className: "w-3/4 h-3/4 sm:w-4/5 sm:h-4/5 object-contain rounded-full"
            }
          )
        }
      )
    ] }),
    p && /* @__PURE__ */ de.jsxs(
      "div",
      {
        ref: W,
        className: "fixed bottom-6 right-6 z-50 shadow-2xl rounded-lg overflow-hidden bg-white",
        style: {
          width: R.width,
          height: R.height,
          minWidth: 350,
          minHeight: 400,
          maxWidth: 800,
          maxHeight: "90vh"
        },
        children: [
          /* @__PURE__ */ de.jsx(
            "div",
            {
              onMouseDown: ne,
              className: "absolute top-0 left-0 w-4 h-4 cursor-nwse-resize"
            }
          ),
          /* @__PURE__ */ de.jsx(pE, { onClose: he })
        ]
      }
    )
  ] });
};
function vE({ containerId: p = "chat-widget-container" } = {}) {
  let O = document.getElementById(p);
  O || (O = document.createElement("div"), O.id = p, document.body.appendChild(O)), F2.createRoot(O).render(/* @__PURE__ */ de.jsx(gE, {}));
}
window.initChatWidget = vE;
