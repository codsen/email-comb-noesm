/**
 * @name email-comb
 * @fileoverview Remove unused CSS from email templates
 * @version 5.3.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/email-comb/}
 */

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/rfdc/index.js
var require_rfdc = __commonJS({
  "../../node_modules/rfdc/index.js"(exports, module2) {
    "use strict";
    module2.exports = rfdc;
    function copyBuffer(cur) {
      if (cur instanceof Buffer) {
        return Buffer.from(cur);
      }
      return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
    }
    function rfdc(opts) {
      opts = opts || {};
      if (opts.circles)
        return rfdcCircles(opts);
      return opts.proto ? cloneProto : clone;
      function cloneArray(a2, fn) {
        var keys = Object.keys(a2);
        var a22 = new Array(keys.length);
        for (var i2 = 0; i2 < keys.length; i2++) {
          var k = keys[i2];
          var cur = a2[k];
          if (typeof cur !== "object" || cur === null) {
            a22[k] = cur;
          } else if (cur instanceof Date) {
            a22[k] = new Date(cur);
          } else if (ArrayBuffer.isView(cur)) {
            a22[k] = copyBuffer(cur);
          } else {
            a22[k] = fn(cur);
          }
        }
        return a22;
      }
      function clone(o) {
        if (typeof o !== "object" || o === null)
          return o;
        if (o instanceof Date)
          return new Date(o);
        if (Array.isArray(o))
          return cloneArray(o, clone);
        if (o instanceof Map)
          return new Map(cloneArray(Array.from(o), clone));
        if (o instanceof Set)
          return new Set(cloneArray(Array.from(o), clone));
        var o2 = {};
        for (var k in o) {
          if (Object.hasOwnProperty.call(o, k) === false)
            continue;
          var cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur instanceof Date) {
            o2[k] = new Date(cur);
          } else if (cur instanceof Map) {
            o2[k] = new Map(cloneArray(Array.from(cur), clone));
          } else if (cur instanceof Set) {
            o2[k] = new Set(cloneArray(Array.from(cur), clone));
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            o2[k] = clone(cur);
          }
        }
        return o2;
      }
      function cloneProto(o) {
        if (typeof o !== "object" || o === null)
          return o;
        if (o instanceof Date)
          return new Date(o);
        if (Array.isArray(o))
          return cloneArray(o, cloneProto);
        if (o instanceof Map)
          return new Map(cloneArray(Array.from(o), cloneProto));
        if (o instanceof Set)
          return new Set(cloneArray(Array.from(o), cloneProto));
        var o2 = {};
        for (var k in o) {
          var cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur instanceof Date) {
            o2[k] = new Date(cur);
          } else if (cur instanceof Map) {
            o2[k] = new Map(cloneArray(Array.from(cur), cloneProto));
          } else if (cur instanceof Set) {
            o2[k] = new Set(cloneArray(Array.from(cur), cloneProto));
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            o2[k] = cloneProto(cur);
          }
        }
        return o2;
      }
    }
    function rfdcCircles(opts) {
      var refs = [];
      var refsNew = [];
      return opts.proto ? cloneProto : clone;
      function cloneArray(a2, fn) {
        var keys = Object.keys(a2);
        var a22 = new Array(keys.length);
        for (var i2 = 0; i2 < keys.length; i2++) {
          var k = keys[i2];
          var cur = a2[k];
          if (typeof cur !== "object" || cur === null) {
            a22[k] = cur;
          } else if (cur instanceof Date) {
            a22[k] = new Date(cur);
          } else if (ArrayBuffer.isView(cur)) {
            a22[k] = copyBuffer(cur);
          } else {
            var index = refs.indexOf(cur);
            if (index !== -1) {
              a22[k] = refsNew[index];
            } else {
              a22[k] = fn(cur);
            }
          }
        }
        return a22;
      }
      function clone(o) {
        if (typeof o !== "object" || o === null)
          return o;
        if (o instanceof Date)
          return new Date(o);
        if (Array.isArray(o))
          return cloneArray(o, clone);
        if (o instanceof Map)
          return new Map(cloneArray(Array.from(o), clone));
        if (o instanceof Set)
          return new Set(cloneArray(Array.from(o), clone));
        var o2 = {};
        refs.push(o);
        refsNew.push(o2);
        for (var k in o) {
          if (Object.hasOwnProperty.call(o, k) === false)
            continue;
          var cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur instanceof Date) {
            o2[k] = new Date(cur);
          } else if (cur instanceof Map) {
            o2[k] = new Map(cloneArray(Array.from(cur), clone));
          } else if (cur instanceof Set) {
            o2[k] = new Set(cloneArray(Array.from(cur), clone));
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            var i2 = refs.indexOf(cur);
            if (i2 !== -1) {
              o2[k] = refsNew[i2];
            } else {
              o2[k] = clone(cur);
            }
          }
        }
        refs.pop();
        refsNew.pop();
        return o2;
      }
      function cloneProto(o) {
        if (typeof o !== "object" || o === null)
          return o;
        if (o instanceof Date)
          return new Date(o);
        if (Array.isArray(o))
          return cloneArray(o, cloneProto);
        if (o instanceof Map)
          return new Map(cloneArray(Array.from(o), cloneProto));
        if (o instanceof Set)
          return new Set(cloneArray(Array.from(o), cloneProto));
        var o2 = {};
        refs.push(o);
        refsNew.push(o2);
        for (var k in o) {
          var cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur instanceof Date) {
            o2[k] = new Date(cur);
          } else if (cur instanceof Map) {
            o2[k] = new Map(cloneArray(Array.from(cur), cloneProto));
          } else if (cur instanceof Set) {
            o2[k] = new Set(cloneArray(Array.from(cur), cloneProto));
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            var i2 = refs.indexOf(cur);
            if (i2 !== -1) {
              o2[k] = refsNew[i2];
            } else {
              o2[k] = cloneProto(cur);
            }
          }
        }
        refs.pop();
        refsNew.pop();
        return o2;
      }
    }
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  comb: () => comb,
  defaults: () => defaults,
  version: () => version2
});
module.exports = __toCommonJS(main_exports);

// ../arrayiffy-if-string/dist/arrayiffy-if-string.esm.js
function r(n) {
  return typeof n != "string" ? n : n.length ? [n] : [];
}

// ../codsen-utils/dist/codsen-utils.esm.js
function i(t) {
  return r2(t) && t.length === 1 && t.toUpperCase() !== t.toLowerCase();
}
function D(t) {
  return !!(t && r2(t) && (t.charCodeAt(0) > 64 && t.charCodeAt(0) < 91 || t.charCodeAt(0) > 96 && t.charCodeAt(0) < 123));
}
function d(t) {
  if (t == null || typeof t != "object")
    return false;
  let e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null ? false : !(Symbol.iterator in t) && !(Symbol.toStringTag in t);
}
function r2(t) {
  return typeof t == "string";
}
function I(t) {
  return Number.isSafeInteger(t) && t >= 0;
}
function Z(t = [], e = []) {
  return !t || !Array.isArray(t) || !t.length ? [] : !e || !Array.isArray(e) || !e.length ? t : t.filter((n) => !e.includes(n));
}
function z(t) {
  return t != null;
}
function G(t) {
  return [...new Set(t)];
}
function x(t) {
  if (!(typeof t != "string" || !t)) {
    if (t.includes(`\r
`))
      return `\r
`;
    if (t.includes(`
`))
      return `
`;
    if (t.includes("\r"))
      return "\r";
  }
}
function X(t, e) {
  return d(t) && r2(e) && e in t;
}
function Y(t, e) {
  return t.localeCompare(e);
}

// ../string-match-left-right/dist/string-match-left-right.esm.js
var w = { cb: void 0, i: false, trimBeforeMatching: false, trimCharsBeforeMatching: [], maxMismatches: 0, firstMustMatch: false, lastMustMatch: false, hungry: false };
var L = (t) => t + 1;
function A(t, s, n, a2, u2 = false, o = L) {
  let l = typeof n == "function" ? n() : n;
  if (+s < 0 && u2 && l === "EOL")
    return l;
  let r4 = { ...w, ...a2 };
  if (s >= t.length && !u2)
    return false;
  let c2 = u2 ? 1 : n.length, E2 = 0, h = false, i2 = false, g2 = false, b2 = r4.maxMismatches, e = s, m = false, f2 = false, $4 = false;
  function p() {
    return E2 === 1 && b2 < r4.maxMismatches - 1;
  }
  for (; t[e]; ) {
    let T = o(e);
    if (r4.trimBeforeMatching && t[e].trim() === "") {
      if (!t[T] && u2 && n === "EOL")
        return true;
      e = o(e);
      continue;
    }
    if (r4 && !r4.i && r4.trimCharsBeforeMatching && r4.trimCharsBeforeMatching.includes(t[e]) || r4?.i && r4.trimCharsBeforeMatching && r4.trimCharsBeforeMatching.map((D4) => D4.toLowerCase()).includes(t[e].toLowerCase())) {
      if (u2 && n === "EOL" && !t[T])
        return true;
      e = o(e);
      continue;
    }
    let y5 = T > e ? n[n.length - c2] : n[c2 - 1];
    if (!r4.i && t[e] === y5 || r4.i && t[e].toLowerCase() === y5.toLowerCase()) {
      if (m || (m = true), g2 || (g2 = true), c2 === n.length) {
        if (f2 = true, b2 !== r4.maxMismatches)
          return false;
      } else
        c2 === 1 && ($4 = true);
      if (c2 -= 1, E2++, p())
        return false;
      if (!c2)
        return E2 !== n.length || b2 === r4.maxMismatches || !h ? e : false;
    } else if (!h && !E2 && (h = true), r4.maxMismatches && b2 && e) {
      b2 -= 1;
      for (let D4 = 0; D4 <= b2; D4++) {
        let C = T > e ? n[n.length - c2 + 1 + D4] : n[c2 - 2 - D4], M = t[o(e)];
        if (C && (!r4.i && t[e] === C || r4.i && t[e].toLowerCase() === C.toLowerCase()) && (!r4.firstMustMatch || c2 !== n.length)) {
          if (E2++, p())
            return false;
          c2 -= 2, m = true;
          break;
        } else if (M && C && (!r4.i && M === C || r4.i && M.toLowerCase() === C.toLowerCase()) && (!r4.firstMustMatch || c2 !== n.length)) {
          if (!E2 && !r4.hungry)
            return false;
          c2 -= 1, m = true;
          break;
        } else if (C === void 0 && b2 >= 0 && m && (!r4.firstMustMatch || f2) && (!r4.lastMustMatch || $4))
          return e;
      }
      m || (i2 = e);
    } else
      return e === 0 && c2 === 1 && !r4.lastMustMatch && g2 ? 0 : false;
    if (i2 !== false && i2 !== e && (i2 = false), c2 < 1)
      return e;
    e = o(e);
  }
  if (c2 > 0)
    return u2 && l === "EOL" ? true : r4 && r4.maxMismatches >= c2 && g2 ? i2 || 0 : false;
}
function V(t, s, n, a2, u2) {
  if (d(u2) && X(u2, "trimBeforeMatching") && u2 && typeof u2.trimBeforeMatching != "boolean")
    throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(u2.trimBeforeMatching) ? " Did you mean to use opts.trimCharsBeforeMatching?" : ""}`);
  let o = { ...w, ...u2 };
  if (typeof o.trimCharsBeforeMatching == "string" && (o.trimCharsBeforeMatching = r(o.trimCharsBeforeMatching)), o.trimCharsBeforeMatching = o.trimCharsBeforeMatching.map((h) => r2(h) ? h : String(h)), !r2(s) || !s.length)
    return false;
  if (!Number.isInteger(n) || n < 0)
    throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof n}, equal to:
${JSON.stringify(n, null, 4)}`);
  let l, r4;
  if (r2(a2))
    l = [a2];
  else if (Array.isArray(a2))
    l = a2;
  else if (!a2)
    l = a2;
  else if (typeof a2 == "function")
    l = [], l.push(a2);
  else
    throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof a2}, equal to:
${JSON.stringify(a2, null, 4)}`);
  if (u2 && !d(u2))
    throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof u2}", and equal to:
${JSON.stringify(u2, null, 4)}`);
  let c2 = 0, E2 = "";
  if (o?.trimCharsBeforeMatching && o.trimCharsBeforeMatching.some((h, i2) => h.length > 1 ? (c2 = i2, E2 = h, true) : false))
    throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${c2} is longer than 1 character, ${E2.length} (equals to ${E2}). Please split it into separate characters and put into array as separate elements.`);
  if (!l || !Array.isArray(l) || Array.isArray(l) && !l.length || Array.isArray(l) && l.length === 1 && r2(l[0]) && !l[0].trim()) {
    if (typeof o.cb == "function") {
      let i2, g2 = n;
      if ((t === "matchLeftIncl" || t === "matchRight") && (g2 += 1), t[5] === "L")
        for (let f2 = g2; f2--; ) {
          let $4 = s[f2];
          if ((!o.trimBeforeMatching || o.trimBeforeMatching && $4 !== void 0 && $4.trim()) && (!o.trimCharsBeforeMatching?.length || $4 !== void 0 && !o.trimCharsBeforeMatching.includes($4))) {
            i2 = f2;
            break;
          }
        }
      else if (t.startsWith("matchRight"))
        for (let f2 = g2; f2 < s.length; f2++) {
          let $4 = s[f2];
          if ((!o.trimBeforeMatching || o.trimBeforeMatching && $4.trim()) && (!o.trimCharsBeforeMatching?.length || !o.trimCharsBeforeMatching.includes($4))) {
            i2 = f2;
            break;
          }
        }
      if (i2 === void 0)
        return false;
      let b2 = s[i2], e = i2 + 1, m = "";
      return e && e > 0 && (m = s.slice(0, e)), t[5] === "L" || i2 && i2 > 0 && (m = s.slice(i2)), o.cb(b2, m, i2);
    }
    let h = "";
    throw u2 || (h = " More so, the whole options object, the fourth input argument, is missing!"), new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${h}`);
  }
  for (let h = 0, i2 = l.length; h < i2; h++) {
    r4 = typeof l[h] == "function";
    let g2 = l[h], b2, e, m = "", f2 = n;
    t === "matchRight" ? f2 += 1 : t === "matchLeft" && (f2 -= 1);
    let $4 = A(s, f2, g2, o, r4, (p) => t[5] === "L" ? p - 1 : p + 1);
    if ($4 && r4 && typeof g2 == "function" && g2() === "EOL")
      return g2() && (!o.cb || o.cb(b2, m, e)) ? g2() : false;
    if (Number.isInteger($4) && (e = t.startsWith("matchLeft") ? $4 - 1 : $4 + 1, t[5] === "L" ? m = s.slice(0, $4) : m = s.slice(e)), e < 0 && (e = void 0), s[e] && (b2 = s[e]), Number.isInteger($4) && (!o.cb || o.cb(b2, m, e)))
      return g2;
  }
  return false;
}
function P(t, s, n, a2) {
  return V("matchLeft", t, s, n, a2);
}
function j(t, s, n, a2) {
  return V("matchRightIncl", t, s, n, a2);
}
function U(t, s, n, a2) {
  return V("matchRight", t, s, n, a2);
}

// ../regex-empty-conditional-comments/dist/regex-empty-conditional-comments.esm.js
function r3() {
  return /<!(--)?\[if[^\]]*]>[<>!-\s]*<!\[endif\]\1>/gi;
}

// ../string-left-right/dist/string-left-right.esm.js
var import_rfdc = __toESM(require_rfdc(), 1);
var $ = (0, import_rfdc.default)();
var c = "\xA0";
function D2({ str: n, idx: e = 0, stopAtNewlines: l = false, stopAtRawNbsp: u2 = false }) {
  if (typeof n != "string" || !n.length || ((!e || typeof e != "number") && (e = 0), !n[e + 1]))
    return null;
  if (n[e + 1] && (n[e + 1].trim() || l && `
\r`.includes(n[e + 1]) || u2 && n[e + 1] === c))
    return e + 1;
  if (n[e + 2] && (n[e + 2].trim() || l && `
\r`.includes(n[e + 2]) || u2 && n[e + 2] === c))
    return e + 2;
  for (let t = e + 1, m = n.length; t < m; t++)
    if (n[t].trim() || l && `
\r`.includes(n[t]) || u2 && n[t] === c)
      return t;
  return null;
}
function E(n, e = 0) {
  return D2({ str: n, idx: e, stopAtNewlines: false, stopAtRawNbsp: false });
}
function V2({ str: n, idx: e, stopAtNewlines: l, stopAtRawNbsp: u2 }) {
  if (typeof n != "string" || !n.length || ((!e || typeof e != "number") && (e = 0), e < 1))
    return null;
  if (n[~-e] && (n[~-e].trim() || l && `
\r`.includes(n[~-e]) || u2 && n[~-e] === c))
    return ~-e;
  if (n[e - 2] && (n[e - 2].trim() || l && `
\r`.includes(n[e - 2]) || u2 && n[e - 2] === c))
    return e - 2;
  for (let t = e; t--; )
    if (n[t] && (n[t].trim() || l && `
\r`.includes(n[t]) || u2 && n[t] === c))
      return t;
  return null;
}
function y(n, e = 0) {
  return V2({ str: n, idx: e, stopAtNewlines: false, stopAtRawNbsp: false });
}

// ../string-extract-class-names/dist/string-extract-class-names.esm.js
function y2(e) {
  if (typeof e != "string")
    throw new TypeError(`string-extract-class-names: [THROW_ID_01] first str should be string, not ${typeof e}, currently equal to ${JSON.stringify(e, null, 4)}`);
  let m = ".# ~\\!@$%^&*()+=,/';:\"?><[]{}|`", o;
  function c2(t) {
    return typeof t == "string" && !!t.length && (t.charCodeAt(0) > 64 && t.charCodeAt(0) < 91 || t.charCodeAt(0) > 96 && t.charCodeAt(0) < 123);
  }
  let n = null, i2 = { res: [], ranges: [] };
  for (let t = 0, p = e.length; t <= p; t++) {
    n !== null && t >= n && (!e[t]?.trim() || m.includes(e[t])) && (t > n + 1 && (i2.ranges.push([n, t]), i2.res.push(`${o || ""}${e.slice(n, t)}`), o && (o = void 0)), n = null), e[t] && n === null && (e[t] === "." || e[t] === "#") && (n = t);
    let l = E(e, t + 4);
    e.startsWith("class", t) && typeof y(e, t) == "number" && e[y(e, t)] === "[" && typeof l == "number" && e[l] === "=" && (E(e, l) && c2(e[E(e, l)]) ? n = E(e, l) : `'"`.includes(e[E(e, l)]) && c2(e[E(e, E(e, l))]) && (n = E(e, E(e, l))), o = ".");
    let r4 = E(e, t + 1);
    e.startsWith("id", t) && e[y(e, t)] === "[" && r4 !== null && e[r4] === "=" && (c2(e[E(e, r4)]) ? n = E(e, r4) : `'"`.includes(e[E(e, r4)]) && c2(e[E(e, E(e, r4))]) && (n = E(e, E(e, r4))), o = "#");
  }
  return i2.ranges.length || (i2.ranges = null), i2;
}

// ../../node_modules/matcher/node_modules/escape-string-regexp/index.js
function escapeStringRegexp(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

// ../../node_modules/matcher/index.js
var regexpCache = /* @__PURE__ */ new Map();
var sanitizeArray = (input, inputName) => {
  if (!Array.isArray(input)) {
    switch (typeof input) {
      case "string":
        input = [input];
        break;
      case "undefined":
        input = [];
        break;
      default:
        throw new TypeError(`Expected '${inputName}' to be a string or an array, but got a type of '${typeof input}'`);
    }
  }
  return input.filter((string) => {
    if (typeof string !== "string") {
      if (typeof string === "undefined") {
        return false;
      }
      throw new TypeError(`Expected '${inputName}' to be an array of strings, but found a type of '${typeof string}' in the array`);
    }
    return true;
  });
};
var makeRegexp = (pattern, options) => {
  options = {
    caseSensitive: false,
    ...options
  };
  const cacheKey = pattern + JSON.stringify(options);
  if (regexpCache.has(cacheKey)) {
    return regexpCache.get(cacheKey);
  }
  const negated = pattern[0] === "!";
  if (negated) {
    pattern = pattern.slice(1);
  }
  pattern = escapeStringRegexp(pattern).replace(/\\\*/g, "[\\s\\S]*");
  const regexp = new RegExp(`^${pattern}$`, options.caseSensitive ? "" : "i");
  regexp.negated = negated;
  regexpCache.set(cacheKey, regexp);
  return regexp;
};
var baseMatcher = (inputs, patterns, options, firstMatchOnly) => {
  inputs = sanitizeArray(inputs, "inputs");
  patterns = sanitizeArray(patterns, "patterns");
  if (patterns.length === 0) {
    return [];
  }
  patterns = patterns.map((pattern) => makeRegexp(pattern, options));
  const { allPatterns } = options || {};
  const result = [];
  for (const input of inputs) {
    let matches;
    const didFit = [...patterns].fill(false);
    for (const [index, pattern] of patterns.entries()) {
      if (pattern.test(input)) {
        didFit[index] = true;
        matches = !pattern.negated;
        if (!matches) {
          break;
        }
      }
    }
    if (!(matches === false || matches === void 0 && patterns.some((pattern) => !pattern.negated) || allPatterns && didFit.some((yes, index) => !yes && !patterns[index].negated))) {
      result.push(input);
      if (firstMatchOnly) {
        break;
      }
    }
  }
  return result;
};
function matcher(inputs, patterns, options) {
  return baseMatcher(inputs, patterns, options, false);
}
function isMatch(inputs, patterns, options) {
  return baseMatcher(inputs, patterns, options, true).length > 0;
}

// ../array-pull-all-with-glob/dist/array-pull-all-with-glob.esm.js
var u = { caseSensitive: true };
function y3(e, t, r4) {
  if (!e.length)
    return [];
  if (!e.length || !t.length)
    return Array.from(e);
  let l = typeof t == "string" ? [t] : Array.from(t), n = { ...u, ...r4 };
  return Array.from(e).filter((i2) => !l.some((p) => isMatch(i2, p, { caseSensitive: n.caseSensitive })));
}

// ../../node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// ../../node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// ../../node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// ../../node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// ../../node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// ../../node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// ../../node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// ../../node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// ../../node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// ../../node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default = identity;

// ../../node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// ../../node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// ../../node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// ../../node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// ../../node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// ../../node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// ../../node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// ../../node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default = apply;

// ../../node_modules/lodash-es/_shortOut.js
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var shortOut_default = shortOut;

// ../../node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default = constant;

// ../../node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// ../../node_modules/lodash-es/_baseSetToString.js
var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
  return defineProperty_default(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant_default(string),
    "writable": true
  });
};
var baseSetToString_default = baseSetToString;

// ../../node_modules/lodash-es/_setToString.js
var setToString = shortOut_default(baseSetToString_default);
var setToString_default = setToString;

// ../../node_modules/lodash-es/_baseFindIndex.js
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var baseFindIndex_default = baseFindIndex;

// ../../node_modules/lodash-es/_baseIsNaN.js
function baseIsNaN(value) {
  return value !== value;
}
var baseIsNaN_default = baseIsNaN;

// ../../node_modules/lodash-es/_strictIndexOf.js
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var strictIndexOf_default = strictIndexOf;

// ../../node_modules/lodash-es/_baseIndexOf.js
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
}
var baseIndexOf_default = baseIndexOf;

// ../../node_modules/lodash-es/_arrayIncludes.js
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf_default(array, value, 0) > -1;
}
var arrayIncludes_default = arrayIncludes;

// ../../node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// ../../node_modules/lodash-es/_overRest.js
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var overRest_default = overRest;

// ../../node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return setToString_default(overRest_default(func, start, identity_default), func + "");
}
var baseRest_default = baseRest;

// ../../node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_default = isLength;

// ../../node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// ../../node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// ../../node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// ../../node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// ../../node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// ../../node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty3.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// ../../node_modules/lodash-es/_hashHas.js
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
}
var hashHas_default = hashHas;

// ../../node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// ../../node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// ../../node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// ../../node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// ../../node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// ../../node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// ../../node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// ../../node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// ../../node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// ../../node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// ../../node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// ../../node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// ../../node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// ../../node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// ../../node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// ../../node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// ../../node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// ../../node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// ../../node_modules/lodash-es/_setCacheAdd.js
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
var setCacheAdd_default = setCacheAdd;

// ../../node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default = setCacheHas;

// ../../node_modules/lodash-es/_SetCache.js
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache_default();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;

// ../../node_modules/lodash-es/_cacheHas.js
function cacheHas(cache, key) {
  return cache.has(key);
}
var cacheHas_default = cacheHas;

// ../../node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;

// ../../node_modules/lodash-es/_arrayIncludesWith.js
function arrayIncludesWith(array, value, comparator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
var arrayIncludesWith_default = arrayIncludesWith;

// ../../node_modules/lodash-es/_baseIntersection.js
var nativeMin = Math.min;
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith_default : arrayIncludes_default, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = Infinity, result = [];
  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap_default(array, baseUnary_default(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache_default(othIndex && array) : void 0;
  }
  array = arrays[0];
  var index = -1, seen = caches[0];
  outer:
    while (++index < length && result.length < maxLength) {
      var value = array[index], computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (!(seen ? cacheHas_default(seen, computed) : includes(result, computed, comparator))) {
        othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if (!(cache ? cacheHas_default(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
  return result;
}
var baseIntersection_default = baseIntersection;

// ../../node_modules/lodash-es/_castArrayLikeObject.js
function castArrayLikeObject(value) {
  return isArrayLikeObject_default(value) ? value : [];
}
var castArrayLikeObject_default = castArrayLikeObject;

// ../../node_modules/lodash-es/intersection.js
var intersection = baseRest_default(function(arrays) {
  var mapped = arrayMap_default(arrays, castArrayLikeObject_default);
  return mapped.length && mapped[0] === arrays[0] ? baseIntersection_default(mapped) : [];
});
var intersection_default = intersection;

// ../string-range-expander/dist/string-range-expander.esm.js
var a = { str: "", from: 0, to: 0, ifLeftSideIncludesThisThenCropTightly: "", ifLeftSideIncludesThisCropItToo: "", ifRightSideIncludesThisThenCropTightly: "", ifRightSideIncludesThisCropItToo: "", extendToOneSide: false, wipeAllWhitespaceOnLeft: false, wipeAllWhitespaceOnRight: false, addSingleSpaceToPreventAccidentalConcatenation: false };
function S(e) {
  let d5 = /^[0-9a-zA-Z]+$/;
  function l(t) {
    return r2(t) && !t.trim();
  }
  if (d(e)) {
    if (!Object.keys(e).length)
      throw new Error(`string-range-expander: [THROW_ID_02] Input must be a plain object but it's been given as a plain object without any keys. However, "from" and "to" settings are obligatory!`);
  } else {
    let t;
    throw e === void 0 ? t = "but it is missing completely." : e === null ? t = "but it was given as null." : t = `but it was given as ${typeof e}, equal to:
${JSON.stringify(e, null, 4)}.`, new Error(`string-range-expander: [THROW_ID_01] Input must be a plain object ${t}`);
  }
  if (!I(e.from))
    throw new Error(`string-range-expander: [THROW_ID_03] The input's "from" value resolvedOpts.from, is not a number! It's been given as ${typeof e.from}, equal to ${JSON.stringify(e.from, null, 0)}`);
  if (!I(e.to))
    throw new Error(`string-range-expander: [THROW_ID_04] The input's "to" value resolvedOpts.to, is not a number! It's been given as ${typeof e.to}, equal to ${JSON.stringify(e.to, null, 0)}`);
  if (e?.str && !e.str[e.from] && e.from !== e.to)
    throw new Error(`string-range-expander: [THROW_ID_05] The given input string resolvedOpts.str ("${e.str}") must contain the character at index "from" ("${e.from}")`);
  if (e?.str && !e.str[e.to - 1])
    throw new Error(`string-range-expander: [THROW_ID_06] The given input string, resolvedOpts.str ("${e.str}") must contain the character at index before "to" ("${e.to - 1}")`);
  if (e.from > e.to)
    throw new Error(`string-range-expander: [THROW_ID_07] The given "from" index, "${e.from}" is greater than "to" index, "${e.to}". That's wrong!`);
  if (e.extendToOneSide === null || r2(e.extendToOneSide) && e.extendToOneSide !== "left" && e.extendToOneSide !== "right" || !r2(e.extendToOneSide) && e.extendToOneSide !== void 0 && e.extendToOneSide)
    throw new Error(`string-range-expander: [THROW_ID_08] The options value "extendToOneSide" is not recognisable! It's set to: "${e.extendToOneSide}" (${typeof e.extendToOneSide}). It has to be either Boolean "false" or one of strings: "left" or "right"`);
  if (e?.ifLeftSideIncludesThisThenCropTightly && !r2(e.ifLeftSideIncludesThisThenCropTightly))
    throw new Error(`string-range-expander: [THROW_ID_09] The option "ifLeftSideIncludesThisThenCropTightly", is not a string! It's been given as ${typeof e.ifLeftSideIncludesThisThenCropTightly}, equal to ${JSON.stringify(e.ifLeftSideIncludesThisThenCropTightly, null, 0)}`);
  if (e?.ifLeftSideIncludesThisCropItToo && !r2(e.ifLeftSideIncludesThisCropItToo))
    throw new Error(`string-range-expander: [THROW_ID_10] The option "ifLeftSideIncludesThisCropItToo", is not a string! It's been given as ${typeof e.ifLeftSideIncludesThisCropItToo}, equal to ${JSON.stringify(e.ifLeftSideIncludesThisCropItToo, null, 0)}`);
  if (e?.ifRightSideIncludesThisThenCropTightly && !r2(e.ifRightSideIncludesThisThenCropTightly))
    throw new Error(`string-range-expander: [THROW_ID_11] The option "ifRightSideIncludesThisThenCropTightly", is not a string! It's been given as ${typeof e.ifRightSideIncludesThisThenCropTightly}, equal to ${JSON.stringify(e.ifRightSideIncludesThisThenCropTightly, null, 0)}`);
  if (e?.ifRightSideIncludesThisCropItToo && !r2(e.ifRightSideIncludesThisCropItToo))
    throw new Error(`string-range-expander: [THROW_ID_12] The option "ifRightSideIncludesThisCropItToo", is not a string! It's been given as ${typeof e.ifRightSideIncludesThisCropItToo}, equal to ${JSON.stringify(e.ifRightSideIncludesThisCropItToo, null, 0)}`);
  let i2 = { ...a, ...e }, n = i2.str, r4 = i2.from, o = i2.to;
  if (i2.extendToOneSide !== "right" && (l(n[r4 - 1]) && (l(n[r4 - 2]) || i2.ifLeftSideIncludesThisCropItToo.includes(n[r4 - 2])) || n[r4 - 1] && i2.ifLeftSideIncludesThisCropItToo.includes(n[r4 - 1]) || i2.wipeAllWhitespaceOnLeft && l(n[r4 - 1]))) {
    for (let t = r4; t--; )
      if (!i2.ifLeftSideIncludesThisCropItToo.includes(n[t])) {
        if (n[t].trim()) {
          i2.wipeAllWhitespaceOnLeft || i2.ifLeftSideIncludesThisCropItToo.includes(n[t + 1]) ? r4 = t + 1 : r4 = t + 2;
          break;
        } else if (t === 0) {
          i2.wipeAllWhitespaceOnLeft ? r4 = 0 : r4 = 1;
          break;
        }
      }
  }
  if (i2.extendToOneSide !== "left" && (l(n[o]) && (i2.wipeAllWhitespaceOnRight || l(n[o + 1])) || i2.ifRightSideIncludesThisCropItToo.includes(n[o]))) {
    for (let t = o, g2 = n.length; t < g2; t++)
      if (!i2.ifRightSideIncludesThisCropItToo.includes(n[t])) {
        if (n[t].trim()) {
          i2.wipeAllWhitespaceOnRight || i2.ifRightSideIncludesThisCropItToo.includes(n[t - 1]) ? o = t : o = t - 1;
          break;
        } else if (t === n.length - 1) {
          i2.wipeAllWhitespaceOnRight ? o = n.length : o = n.length - 1;
          break;
        }
      }
  }
  return (i2.extendToOneSide !== "right" && r2(i2.ifLeftSideIncludesThisThenCropTightly) && i2.ifLeftSideIncludesThisThenCropTightly && (n[r4 - 2] && i2.ifLeftSideIncludesThisThenCropTightly.includes(n[r4 - 2]) || n[r4 - 1] && i2.ifLeftSideIncludesThisThenCropTightly.includes(n[r4 - 1])) || i2.extendToOneSide !== "left" && r2(i2.ifRightSideIncludesThisThenCropTightly) && i2.ifRightSideIncludesThisThenCropTightly && (n[o + 1] && i2.ifRightSideIncludesThisThenCropTightly.includes(n[o + 1]) || n[o] && i2.ifRightSideIncludesThisThenCropTightly.includes(n[o]))) && (i2.extendToOneSide !== "right" && l(n[r4 - 1]) && !i2.wipeAllWhitespaceOnLeft && (r4 -= 1), i2.extendToOneSide !== "left" && l(n[o]) && !i2.wipeAllWhitespaceOnRight && (o += 1)), i2.addSingleSpaceToPreventAccidentalConcatenation && n[r4 - 1]?.trim() && n[o]?.trim() && (!i2.ifLeftSideIncludesThisThenCropTightly && !i2.ifRightSideIncludesThisThenCropTightly || !((!i2.ifLeftSideIncludesThisThenCropTightly || i2.ifLeftSideIncludesThisThenCropTightly.includes(n[r4 - 1])) && (!i2.ifRightSideIncludesThisThenCropTightly || n[o] && i2.ifRightSideIncludesThisThenCropTightly.includes(n[o])))) && (d5.test(n[r4 - 1]) || d5.test(n[o])) ? [r4, o, " "] : [r4, o];
}

// ../string-uglify/dist/string-uglify.esm.js
function d2(l, o = 0) {
  return l.codePointAt(o) || 0;
}
function w2(l) {
  let o = "abcdefghijklmnopqrstuvwxyz", u2 = "abcdefghijklmnopqrstuvwxyz0123456789", n = { a: false, b: false, c: false, d: false, e: false, f: false, g: false, h: false, i: false, j: false, k: false, l: false, m: false, n: false, o: false, p: false, q: false, r: false, s: false, t: false, u: false, v: false, w: false, x: false, y: false, z: false }, r4 = { a: false, b: false, c: false, d: false, e: false, f: false, g: false, h: false, i: false, j: false, k: false, l: false, m: false, n: false, o: false, p: false, q: false, r: false, s: false, t: false, u: false, v: false, w: false, x: false, y: false, z: false }, f2 = { a: false, b: false, c: false, d: false, e: false, f: false, g: false, h: false, i: false, j: false, k: false, l: false, m: false, n: false, o: false, p: false, q: false, r: false, s: false, t: false, u: false, v: false, w: false, x: false, y: false, z: false }, s = [];
  if (!Array.isArray(l) || !l.length)
    return l;
  for (let e = 0, p = l.length; e < p; e++) {
    if (l.indexOf(l[e]) < e) {
      s.push(s[l.indexOf(l[e])]);
      continue;
    }
    let b2 = ".#".includes(l[e][0]) ? l[e][0] : "", h = Array.from(l[e]).reduce((t, c2) => t + d2(c2), 0);
    if (".#".includes(l[e][0]) && l[e].length < 4 || !".#".includes(l[e][0]) && l[e].length < 3) {
      let t = l[e];
      if (!s.includes(t)) {
        s.push(t), t.startsWith(".") && t.length === 2 && n[t.slice(1)] === false ? n[t.slice(1)] = true : t.startsWith("#") && t.length === 2 && r4[t.slice(1)] === false ? r4[t.slice(1)] = true : !t.startsWith(".") && !t.startsWith("#") && t.length === 1 && f2[t] === false && (f2[t] = true);
        continue;
      }
    }
    let i2 = `${b2}${o[h % o.length]}${u2[h % u2.length]}`;
    if (s.includes(i2)) {
      let t = i2, c2 = 0, y5 = Array.from(l[e]).reduce((a2, g2) => a2 < 200 ? a2 + d2(g2) : (a2 + d2(g2)) % u2.length, 0), x2 = Array.from(l[e]).map((a2) => d2(a2)).reduce((a2, g2) => {
        let m = a2 + g2;
        do
          m = String(m).split("").reduce((v, j2) => v + Number.parseInt(j2, 10), 0);
        while (m >= 10);
        return m;
      }, 0);
      for (; s.includes(t); )
        c2 += 1, t += u2[y5 * x2 * c2 % u2.length];
      i2 = t;
    }
    s.push(i2), i2.startsWith(".") && i2.length === 2 && n[i2.slice(1)] === false ? n[i2.slice(1)] = true : i2.startsWith("#") && i2.length === 2 && r4[i2.slice(1)] === false ? r4[i2.slice(1)] = true : !i2.startsWith(".") && !i2.startsWith("#") && i2.length === 1 && f2[i2] === false && (f2[i2] = true);
  }
  for (let e = 0, p = s.length; e < p; e++)
    s[e].startsWith(".") ? n[s[e].slice(1, 2)] === false ? (n[s[e].slice(1, 2)] = s[e], s[e] = s[e].slice(0, 2)) : n[s[e].slice(1, 2)] === s[e] && (s[e] = s[e].slice(0, 2)) : s[e].startsWith("#") ? r4[s[e].slice(1, 2)] === false ? (r4[s[e].slice(1, 2)] = s[e], s[e] = s[e].slice(0, 2)) : r4[s[e].slice(1, 2)] === s[e] && (s[e] = s[e].slice(0, 2)) : !s[e].startsWith(".") && !s[e].startsWith("#") && (f2[s[e].slice(0, 1)] ? f2[s[e].slice(0, 1)] === s[e] && (s[e] = s[e].slice(0, 1)) : (f2[s[e].slice(0, 1)] = s[e], s[e] = s[e].slice(0, 1)));
  return s;
}

// ../ranges-sort/dist/ranges-sort.esm.js
var d3 = { strictlyTwoElementsInRangeArrays: false, progressFn: null };
function g(t, u2) {
  if (!Array.isArray(t) || !t.length)
    return t;
  let n = { ...d3, ...u2 }, s, o;
  if (n.strictlyTwoElementsInRangeArrays && !t.every((e, r4) => !Array.isArray(e) || e.length !== 2 ? (s = r4, o = e.length, false) : true))
    throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(t[s], null, 4)}) has not two but ${o} elements!`);
  if (!t.every((e, r4) => !Array.isArray(e) || !Number.isInteger(e[0]) || e[0] < 0 || !Number.isInteger(e[1]) || e[1] < 0 ? (s = r4, false) : true))
    throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(t[s], null, 4)}) does not consist of only natural numbers!`);
  let p = t.length ** 2, i2 = 0;
  return Array.from(t).sort((e, r4) => (n.progressFn && (i2 += 1, n.progressFn(Math.floor(i2 * 100 / p))), e[0] === r4[0] ? e[1] < r4[1] ? -1 : e[1] > r4[1] ? 1 : 0 : e[0] < r4[0] ? -1 : 1));
}

// ../ranges-merge/dist/ranges-merge.esm.js
var d4 = { mergeType: 1, progressFn: null, joinRangesThatTouchEdges: true };
function b(i2, r4) {
  function l(e) {
    return !!e && typeof e == "object" && !Array.isArray(e);
  }
  if (!Array.isArray(i2) || !i2.length)
    return null;
  let n;
  if (r4)
    if (l(r4)) {
      if (n = { ...d4, ...r4 }, n.progressFn && l(n.progressFn) && !Object.keys(n.progressFn).length)
        n.progressFn = null;
      else if (n.progressFn && typeof n.progressFn != "function")
        throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn, null, 4)}`);
      if (![1, 2, "1", "2"].includes(n.mergeType))
        throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType, null, 4)}`);
      if (typeof n.joinRangesThatTouchEdges != "boolean")
        throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges, null, 4)}`);
    } else
      throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:
${JSON.stringify(r4, null, 4)} (type ${typeof r4})`);
  else
    n = { ...d4 };
  let g2 = i2.filter((e) => Array.isArray(e)).map((e) => [...e]).filter((e) => e[2] !== void 0 || e[0] !== e[1]), s, o, t;
  n.progressFn ? s = g(g2, { progressFn: (e) => {
    t = Math.floor(e / 5), t !== o && (o = t, n.progressFn(t));
  } }) : s = g(g2);
  let a2 = s.length - 1;
  for (let e = a2; e > 0; e--)
    n.progressFn && (t = Math.floor((1 - e / a2) * 78) + 21, t !== o && t > o && (o = t, n.progressFn(t))), (s[e][0] <= s[e - 1][0] || !n.joinRangesThatTouchEdges && s[e][0] < s[e - 1][1] || n.joinRangesThatTouchEdges && s[e][0] <= s[e - 1][1]) && (s[e - 1][0] = Math.min(s[e][0], s[e - 1][0]), s[e - 1][1] = Math.max(s[e][1], s[e - 1][1]), s[e][2] !== void 0 && (s[e - 1][0] >= s[e][0] || s[e - 1][1] <= s[e][1]) && s[e - 1][2] !== null && (s[e][2] === null && s[e - 1][2] !== null ? s[e - 1][2] = null : s[e - 1][2] != null ? +n.mergeType == 2 && s[e - 1][0] === s[e][0] ? s[e - 1][2] = s[e][2] : s[e - 1][2] += s[e][2] : s[e - 1][2] = s[e][2]), s.splice(e, 1), e = s.length);
  return s.length ? s : null;
}

// ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = process.env.NODE_ENV === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// ../ranges-apply/dist/ranges-apply.esm.js
function _(s, n, r4) {
  let t = 0, p = 0;
  if (arguments.length === 0)
    throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");
  if (typeof s != "string")
    throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof s}, equal to: ${JSON.stringify(s, null, 4)}`);
  if (n && !Array.isArray(n))
    throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n, null, 4)}`);
  if (r4 && typeof r4 != "function")
    throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r4}, equal to: ${JSON.stringify(r4, null, 4)}`);
  if (!n?.filter((e) => e).length)
    return s;
  let i2;
  Array.isArray(n) && Number.isInteger(n[0]) && Number.isInteger(n[1]) ? i2 = [Array.from(n)] : i2 = Array.from(n);
  let f2 = i2.length, c2 = 0;
  i2.filter((e) => e).forEach((e, a2) => {
    if (r4 && (t = Math.floor(c2 / f2 * 10), t !== p && (p = t, r4(t))), !Array.isArray(e))
      throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${a2}th element not an array: ${JSON.stringify(e, null, 4)}, which is ${typeof e}`);
    if (!Number.isInteger(e[0])) {
      if (!Number.isInteger(+e[0]) || +e[0] < 0)
        throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${a2}th element, array ${JSON.stringify(e, null, 0)}. Its first element is not an integer, string index, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0], null, 4)}.`);
      i2[a2][0] = +i2[a2][0];
    }
    if (!Number.isInteger(e[1])) {
      if (!Number.isInteger(+e[1]) || +e[1] < 0)
        throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${a2}th element, array ${JSON.stringify(e, null, 0)}. Its second element is not an integer, string index, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1], null, 4)}.`);
      i2[a2][1] = +i2[a2][1];
    }
    c2 += 1;
  });
  let o = b(i2, { progressFn: (e) => {
    r4 && (t = 10 + Math.floor(e / 10), t !== p && (p = t, r4(t)));
  } });
  invariant(o);
  let u2 = o.length;
  if (u2 > 0) {
    let e = s.slice(o[u2 - 1][1]);
    s = o.reduce((a2, $4, l, y5) => {
      r4 && (t = 20 + Math.floor(l / u2 * 80), t !== p && (p = t, r4(t)));
      let g2 = l === 0 ? 0 : y5[l - 1][1], d5 = y5[l][0];
      return `${a2}${s.slice(g2, d5)}${y5[l][2] || ""}`;
    }, ""), s += e;
  }
  return s;
}

// ../string-collapse-leading-whitespace/dist/string-collapse-leading-whitespace.esm.js
function D3(n, u2 = 1) {
  let $4 = "\xA0";
  function g2(e) {
    return Array.from(e).reverse().join("");
  }
  function p(e, s, r4) {
    let t = r4 ? `
` : "\r", i2 = r4 ? "\r" : `
`;
    if (!e)
      return e;
    let m = 0, c2 = 0, o = "";
    for (let l = 0, f2 = e.length; l < f2; l++)
      (e[l] === t || e[l] === i2 && e[l - 1] !== t) && c2++, `\r
`.includes(e[l]) || e[l] === $4 ? (m = 0, e[l] === $4 ? o += e[l] : e[l] === t ? c2 <= s && (o += e[l], e[l + 1] === i2 && (o += e[l + 1], l++)) : e[l] === i2 && e?.[l - 1] !== t && c2 <= s && (o += e[l])) : (m++, !e[l + 1] && !c2 && (o += " "));
    return o;
  }
  if (typeof n == "string" && n.length) {
    let e = 1;
    typeof +u2 == "number" && Number.isInteger(+u2) && +u2 >= 0 && (e = +u2);
    let s = "", r4 = "";
    if (!n.trim())
      s = n;
    else if (!n[0].trim()) {
      for (let t = 0, i2 = n.length; t < i2; t++)
        if (n[t].trim()) {
          s = n.slice(0, t);
          break;
        }
    }
    if (n.trim() && (n.slice(-1).trim() === "" || n.slice(-1) === $4)) {
      for (let t = n.length; t--; )
        if (n[t].trim()) {
          r4 = n.slice(t + 1);
          break;
        }
    }
    return `${p(s, e, false)}${n.trim()}${g2(p(g2(r4), e, true))}`;
  }
  return n;
}

// ../ranges-push/dist/ranges-push.esm.js
var f = { mergeType: 1, progressFn: null, joinRangesThatTouchEdges: true };
function $2(p, t) {
  function r4(e) {
    return !!e && typeof e == "object" && !Array.isArray(e);
  }
  if (!Array.isArray(p) || !p.length)
    return null;
  let s;
  if (t)
    if (r4(t)) {
      if (s = { ...f, ...t }, s.progressFn && r4(s.progressFn) && !Object.keys(s.progressFn).length)
        s.progressFn = null;
      else if (s.progressFn && typeof s.progressFn != "function")
        throw new Error(`ranges-merge: [THROW_ID_01] resolvedOpts.progressFn must be a function! It was given of a type: "${typeof s.progressFn}", equal to ${JSON.stringify(s.progressFn, null, 4)}`);
      if (![1, 2, "1", "2"].includes(s.mergeType))
        throw new Error(`ranges-merge: [THROW_ID_02] resolvedOpts.mergeType was customised to a wrong thing! It was given of a type: "${typeof s.mergeType}", equal to ${JSON.stringify(s.mergeType, null, 4)}`);
      if (typeof s.joinRangesThatTouchEdges != "boolean")
        throw new Error(`ranges-merge: [THROW_ID_04] resolvedOpts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof s.joinRangesThatTouchEdges}", equal to ${JSON.stringify(s.joinRangesThatTouchEdges, null, 4)}`);
    } else
      throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:
${JSON.stringify(t, null, 4)} (type ${typeof t})`);
  else
    s = { ...f };
  let i2 = p.filter((e) => Array.isArray(e)).map((e) => [...e]).filter((e) => e[2] !== void 0 || e[0] !== e[1]), n, o, l;
  s.progressFn ? n = g(i2, { progressFn: (e) => {
    l = Math.floor(e / 5), l !== o && (o = l, s.progressFn(l));
  } }) : n = g(i2);
  let h = n.length - 1;
  for (let e = h; e > 0; e--)
    s.progressFn && (l = Math.floor((1 - e / h) * 78) + 21, l !== o && l > o && (o = l, s.progressFn(l))), (n[e][0] <= n[e - 1][0] || !s.joinRangesThatTouchEdges && n[e][0] < n[e - 1][1] || s.joinRangesThatTouchEdges && n[e][0] <= n[e - 1][1]) && (n[e - 1][0] = Math.min(n[e][0], n[e - 1][0]), n[e - 1][1] = Math.max(n[e][1], n[e - 1][1]), n[e][2] !== void 0 && (n[e - 1][0] >= n[e][0] || n[e - 1][1] <= n[e][1]) && n[e - 1][2] !== null && (n[e][2] === null && n[e - 1][2] !== null ? n[e - 1][2] = null : n[e - 1][2] != null ? +s.mergeType == 2 && n[e - 1][0] === n[e][0] ? n[e - 1][2] = n[e][2] : n[e - 1][2] += n[e][2] : n[e - 1][2] = n[e][2]), n.splice(e, 1), e = n.length);
  return n.length ? n : null;
}
var R = { limitToBeAddedWhitespace: false, limitLinebreaksCount: 1, mergeType: 1 };
var y4 = class {
  constructor(t) {
    let r4 = { ...R, ...t };
    if (r4.mergeType && r4.mergeType !== 1 && r4.mergeType !== 2)
      if (r2(r4.mergeType) && r4.mergeType.trim() === "1")
        r4.mergeType = 1;
      else if (r2(r4.mergeType) && r4.mergeType.trim() === "2")
        r4.mergeType = 2;
      else
        throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof r4.mergeType}", equal to ${JSON.stringify(r4.mergeType, null, 4)}`);
    this.opts = r4, this.ranges = [];
  }
  ranges;
  opts;
  add(t, r4, s) {
    if (t == null && r4 == null)
      return;
    if (z(t) && !z(r4)) {
      if (Array.isArray(t)) {
        if (t.length) {
          if (t.some((o) => Array.isArray(o))) {
            t.forEach((o) => {
              Array.isArray(o) && this.add(...o);
            });
            return;
          }
          t.length && I(+t[0]) && I(+t[1]) && this.add(...t);
        }
        return;
      }
      throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(t, null, 0)}) but second-one, "to" is not (${JSON.stringify(r4, null, 0)})`);
    } else if (!z(t) && z(r4))
      throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(r4, null, 0)}) but first-one, "from" is not (${JSON.stringify(t, null, 0)})`);
    let i2 = +t, n = +r4;
    if (I(s) && (s = String(s)), I(i2) && I(n)) {
      if (z(s) && !r2(s) && !I(s))
        throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof s}, equal to:
${JSON.stringify(s, null, 4)}`);
      if (z(this.ranges) && Array.isArray(this.last()) && i2 === this.last()[1]) {
        if (this.last()[1] = n, this.last()[2], this.last()[2] !== null && z(s)) {
          let o = this.last()[2] && this.last()[2].length && (!this.opts?.mergeType || this.opts.mergeType === 1) ? `${this.last()[2]}${s}` : s;
          this.opts.limitToBeAddedWhitespace && (o = D3(o, this.opts.limitLinebreaksCount)), r2(o) && !o.length || (this.last()[2] = o);
        }
      } else {
        this.ranges || (this.ranges = []);
        let o = s !== void 0 && !(r2(s) && !s.length) ? [i2, n, s && this.opts.limitToBeAddedWhitespace ? D3(s, this.opts.limitLinebreaksCount) : s] : [i2, n];
        this.ranges.push(o);
      }
    } else
      throw I(i2) && i2 >= 0 ? new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof n}" equal to: ${JSON.stringify(n, null, 4)}`) : new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof i2}" equal to: ${JSON.stringify(i2, null, 4)}`);
  }
  push(t, r4, s) {
    this.add(t, r4, s);
  }
  current() {
    return Array.isArray(this.ranges) && this.ranges.length ? (this.ranges = $2(this.ranges, { mergeType: this.opts.mergeType }), this.ranges && this.opts.limitToBeAddedWhitespace ? this.ranges.map((t) => z(t[2]) ? [t[0], t[1], D3(t[2], this.opts.limitLinebreaksCount)] : t) : this.ranges) : null;
  }
  wipe() {
    this.ranges = [];
  }
  replace(t) {
    if (Array.isArray(t) && t.length)
      if (Array.isArray(t[0]) && I(t[0][0]))
        this.ranges = Array.from(t);
      else
        throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(t[0], null, 4)} should be an array and its first element should be an integer, a string index.`);
    else
      this.ranges = [];
  }
  last() {
    return Array.isArray(this.ranges) && this.ranges.length ? this.ranges[this.ranges.length - 1] : null;
  }
};

// ../html-crush/dist/html-crush.esm.js
var $3 = new y4({ limitToBeAddedWhitespace: true });
var ie = { lineLengthLimit: 500, removeIndentations: true, removeLineBreaks: false, removeHTMLComments: false, removeCSSComments: true, reportProgressFunc: null, reportProgressFuncFrom: 0, reportProgressFuncTo: 100, breakToTheLeftOf: ["</td", "<html", "</html", "<head", "</head", "<meta", "<link", "<table", "<script", "</script", "<!DOCTYPE", "<style", "</style", "<title", "<body", "@media", "</body", "<!--[if", "<!--<![endif", "<![endif]"], mindTheInlineTags: ["a", "abbr", "acronym", "audio", "b", "bdi", "bdo", "big", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "label", "map", "mark", "meter", "noscript", "object", "output", "picture", "progress", "q", "ruby", "s", "samp", "script", "select", "slot", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "tt", "var", "video", "wbr"] };
function he(n, E2) {
  let x2 = Date.now();
  if (!r2(n))
    throw n === void 0 ? new Error("html-crush: [THROW_ID_01] the first input argument is completely missing! It should be given as string.") : new Error(`html-crush: [THROW_ID_02] the first input argument must be string! It was given as "${typeof n}", equal to:
${JSON.stringify(n, null, 4)}`);
  if (E2 && !d(E2))
    throw new Error(`html-crush: [THROW_ID_03] the second input argument, options object, should be a plain object but it was given as type ${typeof E2}, equal to ${JSON.stringify(E2, null, 4)}`);
  if (E2 && Array.isArray(E2.breakToTheLeftOf) && E2.breakToTheLeftOf.length) {
    for (let e = 0, w3 = E2.breakToTheLeftOf.length; e < w3; e++)
      if (!r2(E2.breakToTheLeftOf[e]))
        throw new TypeError(`html-crush: [THROW_ID_05] the resolvedOpts.breakToTheLeftOf array contains non-string elements! For example, element at index ${e} is of a type "${typeof E2.breakToTheLeftOf[e]}" and is equal to:
${JSON.stringify(E2.breakToTheLeftOf[e], null, 4)}`);
  }
  let l = { ...ie, ...E2 };
  typeof l.removeHTMLComments == "boolean" && (l.removeHTMLComments = l.removeHTMLComments ? 1 : 0);
  let v = "";
  Array.isArray(l.breakToTheLeftOf) && l.breakToTheLeftOf.length && (v = [...new Set(l.breakToTheLeftOf.map((e) => e[0]))].join(""));
  let L2 = { removeHTMLComments: false, removeCSSComments: false }, p = null, i2 = null, S2 = false, m = 0, H = 0, g2 = false, O = false, c2 = null, f2 = null, V3 = null, U2 = null, u2, t = null, s = null, r4 = null, T = null, D4 = null, M = null, P2 = ">};", I3 = "<", K = "!", q = ">", z2 = "<", W = "{},:;<>~+", k = W, J = W, C = true, h = n.length, Q = Math.floor(h / 2), B = 0.01, j2;
  l.reportProgressFunc && (j2 = Math.floor(l.reportProgressFuncTo - (l.reportProgressFuncTo - l.reportProgressFuncFrom) * B - l.reportProgressFuncFrom));
  let d5, R2 = 0, b2 = `
`;
  if (n.includes(`\r
`) ? b2 = `\r
` : n.includes("\r") && (b2 = "\r"), h) {
    for (let e = 0; e < h; e++) {
      if (l.reportProgressFunc && (h > 1e3 && h < 2e3 ? e === Q && l.reportProgressFunc(Math.floor((l.reportProgressFuncTo - l.reportProgressFuncFrom) / 2)) : h >= 2e3 && (d5 = l.reportProgressFuncFrom + Math.floor(e / h * (j2 || 1)), d5 !== R2 && (R2 = d5, l.reportProgressFunc(d5)))), H++, !u2 && g2 && n[e] === "}" && n[e - 1] === "}" && (m + 1 >= l.lineLengthLimit ? ($3.push(e, e, b2), m = 0) : (t = e, s = e, r4 = " ")), u2 && typeof u2 == "number" && e >= u2 && (u2 = void 0), U2 !== null && n.startsWith("</script", e) && !i(n[e + 8])) {
        if ((l.removeIndentations || l.removeLineBreaks) && e > 0 && n[~-e] && !n[~-e].trim()) {
          for (let o = e; o--; )
            if (n[o] === `
` || n[o] === "\r" || n[o].trim()) {
              o + 1 < e && $3.push(o + 1, e);
              break;
            }
        }
        U2 = null, u2 = false, e += 8;
        continue;
      }
      if (!u2 && !g2 && n.startsWith("<script", e) && !i(n[e + 7])) {
        U2 = e, u2 = true;
        let o = "";
        (l.removeLineBreaks || l.removeIndentations) && i2 !== null && (i2 > 0 && (o = b2), $3.push(i2, e, o)), i2 = null, p = null;
      }
      if (D4 !== null && T === null && !/\w/.test(n[e])) {
        T = n.slice(D4, e);
        let o = E(n, ~-e);
        typeof o == "number" && n[o] === ">" && !n[e].trim() && E(n, e) ? $3.push(e, E(n, e)) : o && n[o] === "/" && n[E(n, o)] === ">" && (!n[e].trim() && E(n, e) && $3.push(e, E(n, e)), n[o + 1] !== ">" && E(n, o + 1) && $3.push(o + 1, E(n, o + 1)));
      }
      if (!u2 && !g2 && !c2 && n[~-e] === "<" && D4 === null && (/\w/.test(n[e]) ? D4 = e : n[E(n, ~-e)] === "/" && /\w/.test(n[E(n, E(n, ~-e))] || "") && (D4 = E(n, E(n, ~-e)))), !u2 && (g2 || c2) && f2 !== null && n[e] === "*" && n[e + 1] === "/" && ([t, s] = S({ str: n, from: f2, to: e + 2, ifLeftSideIncludesThisThenCropTightly: k || "", ifRightSideIncludesThisThenCropTightly: J || "" }), f2 = null, t != null ? $3.push(t, s) : (m += 1, e += 1), u2 = e + 2), !u2 && (g2 || c2) && f2 === null && n[e] === "/" && n[e + 1] === "*" && (L2.removeCSSComments || (L2.removeCSSComments = true), l.removeCSSComments && (f2 = e)), O && n.startsWith("![endif", e + 1) && (O = false), !u2 && !g2 && !c2 && V3 !== null) {
        let o;
        n.startsWith("-->", e) ? o = 3 : n[e] === ">" && n[e - 1] === "]" && (o = 1), o && ([t, s] = S({ str: n, from: V3, to: e + o }), V3 = null, t != null ? l.lineLengthLimit && H - (s - t) >= l.lineLengthLimit ? ($3.push(t, s, b2), H = -o) : ($3.push(t, s), H -= s - t) : (m += o - 1, e += o - 1), u2 = e + o);
      }
      if (!u2 && !g2 && !c2 && (n.startsWith("<!--", e) || l.removeHTMLComments === 2 && n.startsWith("<![endif", e)) && V3 === null && (n.startsWith("[if", e + 4) ? (O || (O = true), l.removeHTMLComments === 2 && (V3 = e)) : l.removeHTMLComments && (!O || l.removeHTMLComments === 2) && (V3 = e), L2.removeHTMLComments || (L2.removeHTMLComments = true)), !u2 && g2 && f2 === null && n.startsWith("</style", e) && !i(n[e + 7]) ? g2 = false : !u2 && !g2 && f2 === null && n.startsWith("<style", e) && !i(n[e + 6]) && (g2 = true, (l.removeLineBreaks || l.removeIndentations) && l.breakToTheLeftOf.includes("<style") && n.startsWith(' type="text/css">', e + 6) && n[e + 24] && $3.push(e + 23, e + 23, b2)), !u2 && !c2 && `"'`.includes(n[e]) && n.endsWith("style=", e) && (c2 = e), !u2 && !n[e].trim())
        i2 === null && (i2 = e);
      else if (!u2 && !((g2 || c2) && f2 !== null)) {
        if (i2 !== null) {
          if (l.removeLineBreaks && (m += 1), C)
            C = false, (l.removeIndentations || l.removeLineBreaks) && $3.push(0, e);
          else if (l.removeIndentations && !l.removeLineBreaks && (!S2 && p !== null && e > p ? $3.push(p + 1, e) : i2 + 1 < e && (n.endsWith("]>", i2) || n.endsWith("-->", i2) || n.startsWith("<![", e) || n.startsWith("<!--<![", e) ? $3.push(i2, e) : n[i2] === " " ? $3.push(i2 + 1, e) : n[~-e] === " " ? $3.push(i2, ~-e) : $3.push(i2, e, " "))), l.removeLineBreaks || c2) {
            if (v.includes(n[e]) && j(n, e, l.breakToTheLeftOf)) {
              !(`\r
`.includes(n[~-e]) && i2 === ~-e) && !(n[~-e] === `
` && n[e - 2] === "\r" && i2 === e - 2) && $3.push(i2, e, b2), t = null, s = null, r4 = null, i2 = null, m = 1;
              continue;
            }
            let o = " ";
            n[e] === "<" && U(n, e, l.mindTheInlineTags, { cb: (N) => !N || !/\w/.test(N) }) || (n[~-i2] && q.includes(n[~-i2]) && z2.includes(n[e]) || (g2 || c2) && f2 === null && (k.includes(n[~-i2]) || J.includes(n[e])) || n.startsWith("!important", e) && !O || c2 && (n[~-i2] === "'" || n[~-i2] === '"') || n[~-i2] === "}" && n.startsWith("</style", e) || n[e] === ">" && (`'"`.includes(n[y(n, e)]) || n[E(n, e)] === "<") || n[e] === "/" && n[E(n, e)] === ">") && (o = "", n[e] === "/" && n[e + 1] === ">" && E(n, e) && E(n, e) > e + 1 && ($3.push(e + 1, E(n, e)), m -= E(n, e) - e + 1)), g2 && n[e] === "}" && i2 && n[i2 - 1] === "}" && (o = " "), o?.length && (m += 1), l.lineLengthLimit ? m >= l.lineLengthLimit || !n[e + 1] || n[e] === ">" || n[e] === "/" && n[e + 1] === ">" ? ((m > l.lineLengthLimit || m === l.lineLengthLimit && n[e + 1] && n[e + 1].trim() && !P2.includes(n[e]) && !I3.includes(n[e + 1])) && (o = b2, m = 1), (m > l.lineLengthLimit || !(o === " " && e === i2 + 1)) && ($3.push(i2, e, o), p = null), t = null, s = null, r4 = null) : (t === null || i2 < t) && (t = i2, s = e, r4 = o) : e === i2 + 1 && o === " " || $3.push(i2, e, o);
          }
          i2 = null, S2 || (S2 = true);
        } else
          C && (C = false), l.removeLineBreaks && (m += 1);
        S2 || (S2 = true);
      }
      if (!u2 && !C && e !== 0 && l.removeLineBreaks && (l.lineLengthLimit || v) && !n.startsWith("</a", e)) {
        if (v && j(n, e, l.breakToTheLeftOf) && n.slice(0, e).trim() && (!n.startsWith("<![endif]", e) || !P(n, e, "<!--"))) {
          $3.push(e, e, b2), t = null, s = null, r4 = null, m = 1;
          continue;
        } else if (l.lineLengthLimit && m <= l.lineLengthLimit) {
          if (!n[e + 1] || I3.includes(n[e]) && !K.includes(n[e]) || P2.includes(n[e]) || !n[e].trim()) {
            if (t !== null && s !== null && (t !== s || r4?.length)) {
              let o = r4;
              n[e].trim() && n[e + 1] && n[e + 1].trim() && m + (r4 ? r4.length : 0) > l.lineLengthLimit && (o = b2), (m + (o ? o.length : 0) > l.lineLengthLimit || !(o === " " && s === t + 1 && n[t] === " ")) && (n[~-t] === "}" && n[s] === "{" || ($3.push(t, s, o), p = null));
            }
            n[e].trim() && (I3.includes(n[e]) || n[~-e] && P2.includes(n[~-e])) && r2(M) && (!T || !l.mindTheInlineTags.includes(T)) && !(n[e] === "<" && U(n, e, l.mindTheInlineTags, { cb: (o) => !o || !/\w/.test(o) })) && !(n[e] === "<" && U(n, e, l.mindTheInlineTags, { trimCharsBeforeMatching: "/", cb: (o) => !o || !/\w/.test(o) })) ? (t = e, s = e, r4 = null) : f2 === null && t !== null && (c2 || !l.mindTheInlineTags || !Array.isArray(l.mindTheInlineTags) || Array.isArray(l.mindTheInlineTags.length) && !l.mindTheInlineTags.length || !r2(T) || Array.isArray(l.mindTheInlineTags) && l.mindTheInlineTags.length && r2(T) && !l.mindTheInlineTags.includes(T)) && !(n[e] === "<" && U(n, e, l.mindTheInlineTags, { trimCharsBeforeMatching: "/", cb: (o) => !o || !/\w/.test(o) })) && (t = null, s = null, r4 = null);
          }
        } else if (l.lineLengthLimit)
          if (I3.includes(n[e]) && !(n[e] === "<" && U(n, e, l.mindTheInlineTags, { trimCharsBeforeMatching: "/", cb: (o) => !o || !/\w/.test(o) })))
            if (t !== null && s !== null && (t !== s || r4?.length)) {
              let o = r4?.length ? r4.length : 0;
              m - (s - t - o) - 1 > l.lineLengthLimit || ($3.push(t, s, r4), m - (s - t - o) - 1 === l.lineLengthLimit && ($3.push(e, e, b2), m = 0), t = null, s = null, r4 = null);
            } else
              $3.push(e, e, b2), m = 0;
          else
            n[e + 1] && P2.includes(n[e]) && r2(T) && Array.isArray(l.mindTheInlineTags) && l.mindTheInlineTags.length && !l.mindTheInlineTags.includes(T) ? t !== null && s !== null && (t !== s || r4?.length) || ($3.push(e + 1, e + 1, b2), m = 0) : n[e].trim() && (n[e + 1] || t !== null && s !== null && (t !== s || r4?.length) && $3.push(t, s, b2));
      }
      if (!u2 && !C && l.removeLineBreaks && l.lineLengthLimit && m >= l.lineLengthLimit && t !== null && s !== null && !P2.includes(n[e]) && !I3.includes(n[e]) && !"/".includes(n[e]) && !(m === l.lineLengthLimit && n[e + 1] && !n[e + 1].trim())) {
        let o = b2;
        n[e + 1] && !n[e + 1].trim() && m === l.lineLengthLimit && (o = r4), o === b2 && !n[~-t].trim() && y(n, t) && (t = y(n, t) + 1), $3.push(t, s, o), m = e - s, n[e].length && (m += 1), t = null, s = null, r4 = null;
      }
      if ((!u2 && n[e] === `
` || n[e] === "\r" && (!n[e + 1] || n[e + 1] && n[e + 1] !== `
`)) && (p = e, S2 && (S2 = false), !l.removeLineBreaks && i2 !== null && i2 < e && n[e + 1] && n[e + 1] !== "\r" && n[e + 1] !== `
` && $3.push(i2, e)), n[e + 1] || (g2 && f2 !== null ? $3.push([...S({ str: n, from: f2, to: e, ifLeftSideIncludesThisThenCropTightly: k || "", ifRightSideIncludesThisThenCropTightly: J || "" })]) : i2 && n[e] !== `
` && n[e] !== "\r" ? $3.push(i2, e + 1) : i2 && (n[e] === "\r" && n[e + 1] === `
` || n[e] === `
` && n[e - 1] !== "\r") && $3.push(i2, e)), !u2 && c2 && c2 < e && n[c2] === n[e] && (c2 = null), !u2 && !g2 && n.startsWith("<pre", e) && !i(n[e + 4])) {
        let o = n.indexOf("</pre", e + 5);
        o > 0 && (u2 = o);
      }
      if (!u2 && !g2 && n.startsWith("<code", e) && !i(n[e + 5])) {
        let o = n.indexOf("</code", e + 5);
        o > 0 && (u2 = o);
      }
      if (!u2 && n.startsWith("<![CDATA[", e)) {
        let o = n.indexOf("]]>", e + 9);
        o > 0 && (u2 = o);
      }
      !u2 && !g2 && !c2 && D4 !== null && n[e] === ">" && (n[E(n, e)] === "<" && (M = T), D4 = null, T = null), n[e] === "<" && M !== null && (M = null), g2 && n[e] === "{" && n[e + 1] === "{" && n.indexOf("}}") !== -1 && (u2 = n.indexOf("}}") + 2);
      let w3 = true;
    }
    if ($3.current()) {
      let e = $3.current();
      $3.wipe();
      let w3 = l.reportProgressFuncTo - (l.reportProgressFuncTo - l.reportProgressFuncFrom) * B, o = _(n, e, (Z2) => {
        l.reportProgressFunc && h >= 2e3 && (d5 = Math.floor(w3 + (l.reportProgressFuncTo - w3) * (Z2 / 100)), d5 !== R2 && (R2 = d5, l.reportProgressFunc(d5)));
      }), N = o.length;
      return { log: { timeTakenInMilliseconds: Date.now() - x2, originalLength: h, cleanedLength: N, bytesSaved: Math.max(h - N, 0), percentageReducedOfOriginal: h ? Math.round(Math.max(h - N, 0) * 100 / h) : 0 }, ranges: e, applicableOpts: L2, result: o };
    }
  }
  return { log: { timeTakenInMilliseconds: Date.now() - x2, originalLength: h, cleanedLength: h, bytesSaved: 0, percentageReducedOfOriginal: 0 }, applicableOpts: L2, ranges: null, result: n };
}

// package.json
var version = "7.0.13";

// src/util.ts
var regexEmptyStyleTag = /[\n]?\s*<style[^>]*>\s*<\/style\s*>/g;
var regexEmptyMediaQuery = /[\n]?\s*@(media|supports|document)[^{]*{\s*}/g;
var regexEmptyUnclosedMediaQuery = /@media[^{@}]+{(?=\s*<\/style>)/g;

// src/main.ts
var version2 = version;
var defaults = {
  whitelist: [],
  backend: [],
  // pass the ESP head & tail sets as separate objects inside this array
  uglify: false,
  removeHTMLComments: true,
  removeCSSComments: true,
  doNotRemoveHTMLCommentsWhoseOpeningTagContains: ["[if", "[endif"],
  htmlCrushOpts: {
    removeLineBreaks: false,
    removeIndentations: false,
    removeHTMLComments: false,
    removeCSSComments: false,
    lineLengthLimit: 500
  },
  reportProgressFunc: null,
  reportProgressFuncFrom: 0,
  reportProgressFuncTo: 100
};
function comb(str, opts) {
  let start = Date.now();
  let finalIndexesToDelete = new y4({ limitToBeAddedWhitespace: true });
  let currentChunksMinifiedSelectors = new y4();
  let lineBreaksToDelete = new y4();
  function characterSuitableForNames(char) {
    return /[-_A-Za-z0-9]/.test(char);
  }
  function resetBodyClassOrId(initObj = {}) {
    return {
      valuesStart: null,
      valueStart: null,
      nameStart: null,
      quoteless: false,
      ...initObj
    };
  }
  let styleStartedAt;
  let styleEndedAt;
  let styleAttributeStartedAt;
  let headSelectorsArr = [];
  let bodyClassesArr = [];
  let bodyIdsArr = [];
  let commentStartedAt;
  let commentNearlyStartedAt;
  let bodyStartedAt;
  let bodyClass;
  let bodyId;
  let headSelectorsCount = {};
  let totalCounter = 0;
  let selectorSinceLinebreakDetected;
  let checkingInsideCurlyBraces;
  let insideCurlyBraces;
  let uglified = null;
  let allClassesAndIdsWithinHeadFinalUglified = [];
  let countAfterCleaning = 0;
  let countBeforeCleaning = 0;
  let curliesDepth = 0;
  let bodyItsTheFirstClassOrId;
  let bogusHTMLComment;
  let ruleChunkStartedAt;
  let selectorChunkStartedAt;
  let selectorChunkCanBeDeleted = false;
  let singleSelectorStartedAt;
  let singleSelectorType;
  let headWholeLineCanBeDeleted;
  let lastKeptChunksCommaAt = null;
  let onlyDeletedChunksFollow = false;
  let bodyClassOrIdCanBeDeleted;
  let round1RangesClone = null;
  let nonIndentationsWhitespaceLength = 0;
  let commentsLength = 0;
  let badChars = `.# ~\\!@$%^&*()+=,/';:"?><[]{}|\`
`;
  let atRulesWhichMightWrapStyles = ["media", "supports", "document"];
  let atRulesWhichNeedToBeIgnored = [
    "font-feature-values",
    "counter-style",
    "namespace",
    "font-face",
    "keyframes",
    "viewport",
    "charset",
    "import",
    "page"
  ];
  let atRuleBreakCharacters = ["{", "(", "<", '"', "'", "@", ";"];
  if (typeof str !== "string") {
    throw new TypeError(
      `email-comb: [THROW_ID_01] Input must be string! Currently it's ${typeof str}`
    );
  }
  let originalLength = str.length;
  if (opts && !d(opts)) {
    throw new TypeError(
      `email-comb: [THROW_ID_02] Options, second input argument, must be a plain object! Currently it's ${typeof opts}, equal to: ${JSON.stringify(
        opts,
        null,
        4
      )}`
    );
  }
  let resolvedOpts = { ...defaults, ...opts };
  if (typeof resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains === "string") {
    resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains = [
      resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains
    ].filter((val) => val.trim());
  }
  if (typeof resolvedOpts.whitelist === "string") {
    resolvedOpts.whitelist = [resolvedOpts.whitelist];
  } else if (!Array.isArray(resolvedOpts.whitelist)) {
    throw new TypeError(
      `email-comb: [THROW_ID_03] resolvedOpts.whitelist should be an array, but it was customised to a wrong thing, ${JSON.stringify(
        resolvedOpts.whitelist,
        null,
        4
      )}`
    );
  }
  if (resolvedOpts.whitelist.length && !resolvedOpts.whitelist.every((el) => typeof el === "string")) {
    throw new TypeError(
      `email-comb: [THROW_ID_04] resolvedOpts.whitelist array should contain only string-type elements. Currently we\ve got:
${JSON.stringify(
        resolvedOpts.whitelist,
        null,
        4
      )}`
    );
  }
  if (!Array.isArray(resolvedOpts.backend)) {
    throw new TypeError(
      `email-comb: [THROW_ID_05] resolvedOpts.backend should be an array, but it was customised to a wrong thing, ${JSON.stringify(
        resolvedOpts.backend,
        null,
        4
      )}`
    );
  }
  if (resolvedOpts.backend.length && resolvedOpts.backend.some((val) => !d(val))) {
    throw new TypeError(
      `email-comb: [THROW_ID_06] resolvedOpts.backend array should contain only plain objects but it contains something else:
${JSON.stringify(
        resolvedOpts.backend,
        null,
        4
      )}`
    );
  }
  if (resolvedOpts.backend.length && !resolvedOpts.backend.every(
    (obj) => X(obj, "heads") && X(obj, "tails")
  )) {
    throw new TypeError(
      `email-comb: [THROW_ID_07] every object within resolvedOpts.backend should contain keys "heads" and "tails" but currently it's not the case. Whole "resolvedOpts.backend" value array is currently equal to:
${JSON.stringify(
        resolvedOpts.backend,
        null,
        4
      )}`
    );
  }
  if (typeof resolvedOpts.uglify !== "boolean") {
    if (resolvedOpts.uglify === 1 || resolvedOpts.uglify === 0) {
      resolvedOpts.uglify = !!resolvedOpts.uglify;
    } else {
      throw new TypeError(
        `email-comb: [THROW_ID_08] resolvedOpts.uglify should be a Boolean. Currently it's set to: ${JSON.stringify(
          resolvedOpts.uglify,
          null,
          4
        )}}`
      );
    }
  }
  if (resolvedOpts.reportProgressFunc && typeof resolvedOpts.reportProgressFunc !== "function") {
    throw new TypeError(
      `email-comb: [THROW_ID_09] resolvedOpts.reportProgressFunc should be a function but it was given as :
${JSON.stringify(
        resolvedOpts.reportProgressFunc,
        null,
        4
      )} (${typeof resolvedOpts.reportProgressFunc})`
    );
  }
  let allHeads = null;
  let allTails = null;
  if (Array.isArray(resolvedOpts.backend) && resolvedOpts.backend.length) {
    allHeads = resolvedOpts.backend.map(
      (headsAndTailsObj) => headsAndTailsObj.heads
    );
    allTails = resolvedOpts.backend.map(
      (headsAndTailsObj) => headsAndTailsObj.tails
    );
  }
  let strArrToMatchAgainstChunks = resolvedOpts.whitelist.filter(
    (c2) => !c2.startsWith("#") && !c2.startsWith(".")
  );
  let trailingNewline = "";
  if (str.length && ["\n", "\r"].includes(str[~-str.length])) {
    trailingNewline = x(str) || "";
  }
  str = str.trim().replace(/\r?\n\s+\r?\n/g, "");
  if (trailingNewline) {
    str += trailingNewline;
  }
  let len = str.length;
  let leavePercForLastStage = 0.06;
  let ceil = 1;
  if (resolvedOpts.reportProgressFunc) {
    ceil = Math.floor(
      (resolvedOpts.reportProgressFuncTo - (resolvedOpts.reportProgressFuncTo - resolvedOpts.reportProgressFuncFrom) * leavePercForLastStage - resolvedOpts.reportProgressFuncFrom) / 2
    );
  }
  let trailingLinebreakLengthCorrection = 0;
  if (!str.length || !"\r\n".includes(str[str.length - 1])) {
    trailingLinebreakLengthCorrection = 1;
  }
  let doNothing;
  let doNothingUntil;
  let allClassesAndIdsThatWereCompletelyDeletedFromHead = [];
  let allClassesAndIdsWithinHeadFinal = [];
  let allClassesAndIdsWithinHead = [];
  let allClassesAndIdsWithinBody = [];
  let headSelectorsCountClone = {};
  let currentPercentageDone;
  let stateWithinStyleTag;
  let currentlyWithinQuotes;
  let whitespaceStartedAt;
  let bodyClassesToDelete = [];
  let lastPercentage = 0;
  let stateWithinBody;
  let bodyIdsToDelete = [];
  let bodyCssToDelete = [];
  let headCssToDelete = [];
  let currentChunk;
  let canDelete;
  let usedOnce;
  for (let round = 1; round <= 2; round++) {
    if (round === 1) {
    } else {
    }
    selectorSinceLinebreakDetected = false;
    checkingInsideCurlyBraces = false;
    selectorChunkStartedAt = null;
    selectorChunkCanBeDeleted = false;
    bodyClassOrIdCanBeDeleted = true;
    headWholeLineCanBeDeleted = true;
    bodyClass = resetBodyClassOrId();
    bodyItsTheFirstClassOrId = true;
    onlyDeletedChunksFollow = false;
    singleSelectorStartedAt = null;
    bodyId = resetBodyClassOrId();
    commentNearlyStartedAt = null;
    lastKeptChunksCommaAt = null;
    currentlyWithinQuotes = null;
    stateWithinStyleTag = false;
    whitespaceStartedAt = null;
    insideCurlyBraces = false;
    ruleChunkStartedAt = null;
    stateWithinBody = false;
    commentStartedAt = null;
    doNothingUntil = null;
    styleStartedAt = null;
    bodyStartedAt = null;
    currentChunk = null;
    styleEndedAt = null;
    doNothing = false;
    totalCounter += len;
    stepOuter:
      for (let i2 = 0; i2 < len; i2++) {
        if (round !== 9) {
        }
        if (resolvedOpts.reportProgressFunc) {
          if (len > 1e3 && len < 2e3) {
            if (round === 1 && i2 === 0) {
              resolvedOpts.reportProgressFunc(
                Math.floor(
                  (resolvedOpts.reportProgressFuncTo - resolvedOpts.reportProgressFuncFrom) / 2
                )
                // if range is [0, 100], this would be 50
              );
            }
          } else if (len >= 2e3) {
            currentPercentageDone = resolvedOpts.reportProgressFuncFrom + Math.floor(i2 / len * ceil) + (round === 1 ? 0 : ceil);
            if (currentPercentageDone !== lastPercentage) {
              lastPercentage = currentPercentageDone;
              resolvedOpts.reportProgressFunc(currentPercentageDone);
            }
          }
        }
        let chr = str[i2];
        if (!stateWithinStyleTag && // a) either it's the first style tag and currently we haven't traversed
        // it's closing yet:
        (styleEndedAt === null && styleStartedAt !== null && i2 >= styleStartedAt || // b) or, style tag was closed, later another-one was opened and we
        // haven't traversed through its closing tag yet:
        styleStartedAt !== null && styleEndedAt !== null && styleStartedAt > styleEndedAt && styleStartedAt < i2)) {
          stateWithinStyleTag = true;
          stateWithinBody = false;
        } else if (!stateWithinBody && bodyStartedAt !== null && (styleStartedAt === null || styleStartedAt < i2) && (styleEndedAt === null || styleEndedAt < i2)) {
          stateWithinBody = true;
          stateWithinStyleTag = false;
        }
        if (!doNothing && (str[i2] === '"' || str[i2] === "'")) {
          if (!currentlyWithinQuotes) {
            let leftSideIdx = y(str, i2);
            if (typeof leftSideIdx === "number" && (stateWithinStyleTag && ["(", ","].includes(str[leftSideIdx]) || stateWithinBody && !stateWithinStyleTag && ["(", ",", ":", "="].includes(str[leftSideIdx]))) {
              currentlyWithinQuotes = str[i2];
            }
          } else if (str[i2] === `"` && str[E(str, i2)] === `'` && str[E(str, E(str, i2))] === `"` || str[i2] === `'` && str[E(str, i2)] === `"` && str[E(str, E(str, i2))] === `'`) {
            i2 = E(str, E(str, i2));
            continue;
          } else if (currentlyWithinQuotes === str[i2]) {
            currentlyWithinQuotes = null;
          }
          if (stateWithinBody) {
            if (typeof styleAttributeStartedAt === "number" && styleAttributeStartedAt < i2) {
              styleAttributeStartedAt = null;
            }
          }
        }
        if (doNothing) {
          if (doNothingUntil === null || typeof doNothingUntil !== "string" || typeof doNothingUntil === "string" && !doNothingUntil) {
            doNothing = false;
          } else if (doNothingUntil && j(str, i2, doNothingUntil)) {
            if (commentStartedAt !== null) {
              if (round === 1 && resolvedOpts.removeCSSComments) {
                let lineBreakPresentOnTheLeft = P(str, commentStartedAt, [
                  "\r\n",
                  "\n",
                  "\r"
                ]);
                let startingIndex = commentStartedAt;
                if (typeof lineBreakPresentOnTheLeft === "string" && lineBreakPresentOnTheLeft.length) {
                  startingIndex -= lineBreakPresentOnTheLeft.length;
                }
                if (str[startingIndex - 1] && characterSuitableForNames(str[startingIndex - 1]) && // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                str[i2 + doNothingUntil.length] && characterSuitableForNames(str[i2 + doNothingUntil.length])) {
                  finalIndexesToDelete.push(
                    startingIndex,
                    i2 + doNothingUntil.length,
                    ";"
                  );
                  commentsLength += i2 + doNothingUntil.length - startingIndex;
                } else {
                  finalIndexesToDelete.push(
                    startingIndex,
                    i2 + doNothingUntil.length
                  );
                  commentsLength += i2 + doNothingUntil.length - startingIndex;
                }
              }
              commentStartedAt = null;
            }
            i2 = i2 + doNothingUntil.length - 1;
            doNothingUntil = null;
            doNothing = false;
            continue;
          }
        }
        if (!doNothing && str[i2] === "<" && str[i2 + 1] === "s" && str[i2 + 2] === "t" && str[i2 + 3] === "y" && str[i2 + 4] === "l" && str[i2 + 5] === "e") {
          checkingInsideCurlyBraces = true;
          if (!stateWithinStyleTag) {
            stateWithinStyleTag = true;
          }
          for (let y5 = i2; y5 < len; y5++) {
            totalCounter += 1;
            if (str[y5] === ">") {
              styleStartedAt = y5 + 1;
              ruleChunkStartedAt = y5 + 1;
              break;
            }
          }
        }
        if (!doNothing && stateWithinStyleTag && str[i2] === "<" && str[i2 + 1] === "/" && str[i2 + 2] === "s" && str[i2 + 3] === "t" && str[i2 + 4] === "y" && str[i2 + 5] === "l" && str[i2 + 6] === "e") {
          styleEndedAt = i2 - 1;
          ruleChunkStartedAt = null;
          checkingInsideCurlyBraces = false;
          if (stateWithinStyleTag) {
            stateWithinStyleTag = false;
          }
        }
        if (round === 1 && (stateWithinStyleTag || stateWithinBody) && str[i2] === "/" && str[i2 + 1] === "*" && commentStartedAt === null) {
          commentStartedAt = i2;
          doNothing = true;
          doNothingUntil = "*/";
          i2 += 1;
          continue;
        }
        if (!doNothing && stateWithinStyleTag && str[i2] === "@") {
          if (whitespaceStartedAt) {
            whitespaceStartedAt = null;
          }
          let matchedAtTagsName = U(str, i2, atRulesWhichMightWrapStyles) || U(str, i2, atRulesWhichNeedToBeIgnored);
          if (typeof matchedAtTagsName === "string") {
            let temp;
            if (str[i2 + matchedAtTagsName.length + 1] === ";" || str[i2 + matchedAtTagsName.length + 1] && !str[i2 + matchedAtTagsName.length + 1].trim() && U(str, i2 + matchedAtTagsName.length + 1, ";", {
              trimBeforeMatching: true,
              cb: (_char, _theRemainderOfTheString, index) => {
                temp = index;
                return true;
              }
            })) {
              finalIndexesToDelete.push(
                i2,
                temp || i2 + matchedAtTagsName.length + 2
              );
            }
            let secondaryStopper;
            for (let z2 = i2 + 1; z2 < len; z2++) {
              totalCounter += 1;
              let espTails = "";
              if (str[z2] === "{" && str[z2 + 1] === "{") {
                espTails = "}}";
              }
              if (str[z2] === "{" && str[z2 + 1] === "%") {
                espTails = "%}";
              }
              if (espTails && str.includes(espTails, z2 + 1)) {
                z2 = str.indexOf(espTails, z2 + 1) + espTails.length - 1;
                continue;
              } else if (espTails) {
                espTails = "";
              }
              if (secondaryStopper && str[z2] === secondaryStopper) {
                if (str[z2] === "}" && atRulesWhichNeedToBeIgnored.includes(matchedAtTagsName) || str[z2] === "{" && atRulesWhichMightWrapStyles.includes(matchedAtTagsName)) {
                  i2 = z2;
                  ruleChunkStartedAt = z2 + 1;
                  continue stepOuter;
                } else {
                  secondaryStopper = void 0;
                  continue;
                }
              }
              if (str[z2] === '"' && !secondaryStopper) {
                secondaryStopper = '"';
              } else if (str[z2] === "'" && !secondaryStopper) {
                secondaryStopper = "'";
              } else if (str[z2] === "(" && !secondaryStopper) {
                secondaryStopper = ")";
              } else if (atRulesWhichNeedToBeIgnored.includes(matchedAtTagsName) && str[z2] === "{" && !secondaryStopper) {
                secondaryStopper = "}";
              }
              if (!secondaryStopper && atRuleBreakCharacters.includes(str[z2])) {
                let pushRangeFrom;
                let pushRangeTo;
                if (str[z2] === "{" || str[z2] === ";") {
                  insideCurlyBraces = false;
                  ruleChunkStartedAt = z2 + 1;
                  i2 = z2;
                  continue stepOuter;
                } else if (str[z2] === "@" || str[z2] === "<") {
                  if (round === 1 && !str.slice(i2, z2).includes("{") && !str.slice(i2, z2).includes("(") && !str.slice(i2, z2).includes('"') && !str.slice(i2, z2).includes("'")) {
                    pushRangeFrom = i2;
                    pushRangeTo = z2 + (str[z2] === ";" ? 1 : 0);
                    finalIndexesToDelete.push(pushRangeFrom, pushRangeTo);
                  }
                }
                let iOffset = pushRangeTo ? pushRangeTo - 1 : z2 - 1 + (str[z2] === "{" ? 1 : 0);
                i2 = iOffset;
                ruleChunkStartedAt = iOffset + 1;
                continue stepOuter;
              }
            }
          }
        }
        if (!doNothing && stateWithinStyleTag && insideCurlyBraces && checkingInsideCurlyBraces && chr === "}" && !currentlyWithinQuotes && !curliesDepth) {
          if (round === 2 && headWholeLineCanBeDeleted && ruleChunkStartedAt) {
            finalIndexesToDelete.push(ruleChunkStartedAt, i2 + 1);
          }
          insideCurlyBraces = false;
          if (ruleChunkStartedAt) {
            ruleChunkStartedAt = i2 + 1;
          }
          selectorChunkStartedAt = null;
          selectorChunkCanBeDeleted = false;
          headWholeLineCanBeDeleted = true;
          singleSelectorStartedAt = null;
          lastKeptChunksCommaAt = null;
          onlyDeletedChunksFollow = false;
        }
        if (!doNothing && !commentStartedAt && styleStartedAt && i2 >= styleStartedAt && // a) either it's the first style tag and currently we haven't traversed
        // its closing yet:
        (styleEndedAt === null && i2 >= styleStartedAt || // b) or, style tag was closed, later another-one was opened and we
        // haven't traversed through its closing tag yet:
        styleEndedAt && styleStartedAt > styleEndedAt && styleStartedAt <= i2) && !insideCurlyBraces) {
          if (singleSelectorStartedAt === null) {
            if (chr === "." || chr === "#") {
              singleSelectorStartedAt = i2;
            } else if (P(str, i2, "[class=")) {
              if (D(chr)) {
                singleSelectorStartedAt = i2;
                singleSelectorType = ".";
              } else if (`"'`.includes(chr) && D(str[E(str, i2)])) {
                singleSelectorStartedAt = E(str, i2);
                singleSelectorType = ".";
              }
            } else if (P(str, i2, "[id=")) {
              if (D(chr)) {
                singleSelectorStartedAt = i2;
                singleSelectorType = "#";
              } else if (`"'`.includes(chr) && D(str[E(str, i2)])) {
                singleSelectorStartedAt = E(str, i2);
                singleSelectorType = "#";
              }
            } else if (chr.trim()) {
              if (chr === "}") {
                ruleChunkStartedAt = i2 + 1;
                currentChunk = null;
              } else if (chr === "<" && str[i2 + 1] === "!") {
                for (let y5 = i2; y5 < len; y5++) {
                  totalCounter += 1;
                  if (str[y5] === ">") {
                    ruleChunkStartedAt = y5 + 1;
                    selectorChunkStartedAt = y5 + 1;
                    i2 = y5;
                    continue stepOuter;
                  }
                }
              } else if (str[i2] === ",") {
                lastKeptChunksCommaAt = i2;
              }
            }
          } else if (singleSelectorStartedAt !== null && !characterSuitableForNames(chr)) {
            let singleSelector = str.slice(singleSelectorStartedAt, i2);
            if (singleSelectorType) {
              singleSelector = `${singleSelectorType}${singleSelector}`;
              singleSelectorType = void 0;
            }
            if (round === 2 && !selectorChunkCanBeDeleted && headCssToDelete.includes(singleSelector)) {
              selectorChunkCanBeDeleted = true;
              onlyDeletedChunksFollow = true;
            } else if (round === 2 && !selectorChunkCanBeDeleted) {
              if (resolvedOpts.uglify && (!Array.isArray(resolvedOpts.whitelist) || !resolvedOpts.whitelist.length || !matcher([singleSelector], resolvedOpts.whitelist).length)) {
                currentChunksMinifiedSelectors.push(
                  singleSelectorStartedAt,
                  i2,
                  allClassesAndIdsWithinHeadFinalUglified[allClassesAndIdsWithinHeadFinal.indexOf(singleSelector)]
                );
              }
              if (chr === ",") {
                lastKeptChunksCommaAt = i2;
                onlyDeletedChunksFollow = false;
              } else {
              }
            }
            if (chr === "." || chr === "#") {
              singleSelectorStartedAt = i2;
            } else {
              singleSelectorStartedAt = null;
            }
          }
          if (selectorChunkStartedAt === null) {
            if (chr.trim() && chr !== "}" && chr !== ";" && !(str[i2] === "/" && str[i2 + 1] === "*")) {
              selectorChunkCanBeDeleted = false;
              selectorChunkStartedAt = i2;
            }
          } else if (",{".includes(chr)) {
            let sliceTo = whitespaceStartedAt || i2;
            currentChunk = str.slice(selectorChunkStartedAt, sliceTo);
            if (round === 2 && selectorChunkCanBeDeleted && strArrToMatchAgainstChunks.length && matcher([currentChunk], strArrToMatchAgainstChunks).length) {
              selectorChunkCanBeDeleted = false;
            }
            if (round === 1) {
              if (whitespaceStartedAt) {
                if (chr === "," && whitespaceStartedAt < i2) {
                  finalIndexesToDelete.push(whitespaceStartedAt, i2);
                  nonIndentationsWhitespaceLength += i2 - whitespaceStartedAt;
                } else if (chr === "{" && whitespaceStartedAt < i2 - 1) {
                  finalIndexesToDelete.push(whitespaceStartedAt, i2 - 1);
                  nonIndentationsWhitespaceLength += i2 - 1 - whitespaceStartedAt;
                }
              }
              headSelectorsArr.push(currentChunk);
            } else if (selectorChunkCanBeDeleted) {
              let fromIndex = selectorChunkStartedAt;
              let toIndex = i2;
              let tempFindingIndex = 0;
              if (chr === "{" && str[fromIndex - 1] !== ">" && str[fromIndex - 1] !== "}") {
                for (let y5 = selectorChunkStartedAt; y5--; ) {
                  totalCounter += 1;
                  if (str[y5].trim() && str[y5] !== ",") {
                    fromIndex = y5 + 1;
                    break;
                  }
                }
                if (!str[i2 - 1].trim()) {
                  toIndex = i2 - 1;
                }
              } else if (chr === "," && !str[i2 + 1].trim()) {
                for (let y5 = i2 + 1; y5 < len; y5++) {
                  totalCounter += 1;
                  if (str[y5].trim()) {
                    toIndex = y5;
                    break;
                  }
                }
              } else if (P(str, fromIndex, "{", {
                trimBeforeMatching: true,
                cb: (_char, _theRemainderOfTheString, index) => {
                  tempFindingIndex = index;
                  return true;
                }
              })) {
                fromIndex = tempFindingIndex + 2;
              }
              let resToPush = S({
                str,
                from: fromIndex,
                to: toIndex,
                ifRightSideIncludesThisThenCropTightly: ".#",
                ifRightSideIncludesThisCropItToo: ",",
                extendToOneSide: "right"
              });
              finalIndexesToDelete.push(...resToPush);
              if (resolvedOpts.uglify) {
                currentChunksMinifiedSelectors.wipe();
              }
            } else {
              if (headWholeLineCanBeDeleted) {
                headWholeLineCanBeDeleted = false;
              }
              if (onlyDeletedChunksFollow) {
                onlyDeletedChunksFollow = false;
              }
              if (resolvedOpts.uglify) {
                finalIndexesToDelete.push(
                  currentChunksMinifiedSelectors.current()
                );
                currentChunksMinifiedSelectors.wipe();
              }
            }
            if (chr !== "{") {
              selectorChunkStartedAt = null;
            } else if (round === 2) {
              if (!headWholeLineCanBeDeleted && lastKeptChunksCommaAt !== null && onlyDeletedChunksFollow) {
                let deleteUpTo = lastKeptChunksCommaAt + 1;
                if ("\n\r".includes(str[lastKeptChunksCommaAt + 1])) {
                  for (let y5 = lastKeptChunksCommaAt + 1; y5 < len; y5++) {
                    if (str[y5].trim()) {
                      deleteUpTo = y5;
                      break;
                    }
                  }
                }
                finalIndexesToDelete.push(lastKeptChunksCommaAt, deleteUpTo);
                lastKeptChunksCommaAt = null;
                onlyDeletedChunksFollow = false;
              }
            }
          }
        } else if (selectorSinceLinebreakDetected) {
          selectorSinceLinebreakDetected = false;
        }
        if (!doNothing && !stateWithinStyleTag && stateWithinBody && str[i2] === "/" && U(str, i2, "body", { trimBeforeMatching: true, i: true }) && P(str, i2, "<", { trimBeforeMatching: true })) {
          stateWithinBody = false;
          bodyStartedAt = null;
        }
        if (!doNothing && str[i2] === "<" && U(str, i2, "body", {
          i: true,
          trimBeforeMatching: true,
          cb: (char, _theRemainderOfTheString, index) => {
            if (round === 1) {
              if (char !== void 0 && (char.trim() === "" || char === ">") && typeof index === "number") {
                if (index - i2 > 5) {
                  finalIndexesToDelete.push(i2, index, "<body");
                  nonIndentationsWhitespaceLength += index - i2 - 5;
                } else {
                  return true;
                }
              }
              return true;
            }
            return true;
          }
        })) {
          for (let y5 = i2; y5 < len; y5++) {
            totalCounter += 1;
            if (str[y5] === ">") {
              bodyStartedAt = y5 + 1;
              break;
            }
          }
        }
        if (!doNothing && stateWithinBody && !stateWithinStyleTag && str[i2] === "s" && str[i2 + 1] === "t" && str[i2 + 2] === "y" && str[i2 + 3] === "l" && str[i2 + 4] === "e" && str[i2 + 5] === "=" && badChars.includes(str[i2 - 1])) {
          if (`"'`.includes(str[i2 + 6])) {
            styleAttributeStartedAt = i2 + 7;
          }
        }
        if (!doNothing && stateWithinBody && !stateWithinStyleTag && !currentlyWithinQuotes && str[i2] === "c" && str[i2 + 1] === "l" && str[i2 + 2] === "a" && str[i2 + 3] === "s" && str[i2 + 4] === "s" && // a character in front exists
        str[i2 - 1] && // it's a whitespace character
        !str[i2 - 1].trim()) {
          let valuesStart;
          let quoteless = false;
          if (str[i2 + 5] === "=") {
            if (str[i2 + 6] === '"' || str[i2 + 6] === "'") {
              valuesStart = i2 + 7;
            } else if (characterSuitableForNames(str[i2 + 6])) {
              valuesStart = i2 + 6;
              quoteless = true;
            } else if (str[i2 + 6] && (!str[i2 + 6].trim() || "/>".includes(str[i2 + 6]))) {
              let calculatedRange = S({
                str,
                from: i2,
                to: i2 + 6,
                ifRightSideIncludesThisThenCropTightly: "/>",
                wipeAllWhitespaceOnLeft: true
              });
              finalIndexesToDelete.push(...calculatedRange);
            }
          } else if (!str[i2 + 5].trim()) {
            for (let y5 = i2 + 5; y5 < len; y5++) {
              totalCounter += 1;
              if (str[y5].trim()) {
                if (str[y5] === "=") {
                  if (y5 > i2 + 5 && round === 1) {
                    finalIndexesToDelete.push(i2 + 5, y5);
                  }
                  if ((str[y5 + 1] === '"' || str[y5 + 1] === "'") && str[y5 + 2]) {
                    valuesStart = y5 + 2;
                  } else if (str[y5 + 1] && !str[y5 + 1].trim()) {
                    for (let z2 = y5 + 1; z2 < len; z2++) {
                      totalCounter += 1;
                      if (str[z2].trim()) {
                        if (z2 > y5 + 1 && round === 1) {
                          finalIndexesToDelete.push(y5 + 1, z2);
                        }
                        if ((str[z2] === '"' || str[z2] === "'") && str[z2 + 1]) {
                          valuesStart = z2 + 1;
                        }
                        break;
                      }
                    }
                  }
                }
                break;
              }
            }
          }
          if (valuesStart) {
            bodyClass = resetBodyClassOrId({
              valuesStart,
              quoteless,
              nameStart: i2
            });
            if (round === 1) {
              bodyItsTheFirstClassOrId = true;
            } else if (round === 2) {
              bodyClassOrIdCanBeDeleted = true;
            }
          }
        }
        if (!doNothing && stateWithinBody && !stateWithinStyleTag && !currentlyWithinQuotes && str[i2] === "i" && str[i2 + 1] === "d" && // a character in front exists
        str[i2 - 1] && // it's a whitespace character
        !str[i2 - 1].trim()) {
          let valuesStart;
          let quoteless = false;
          if (str[i2 + 2] === "=") {
            if (str[i2 + 3] === '"' || str[i2 + 3] === "'") {
              valuesStart = i2 + 4;
            } else if (characterSuitableForNames(str[i2 + 3])) {
              valuesStart = i2 + 3;
              quoteless = true;
            } else if (str[i2 + 3] && (!str[i2 + 3].trim() || "/>".includes(str[i2 + 3]))) {
              let calculatedRange = S({
                str,
                from: i2,
                to: i2 + 3,
                ifRightSideIncludesThisThenCropTightly: "/>",
                wipeAllWhitespaceOnLeft: true
              });
              finalIndexesToDelete.push(...calculatedRange);
            }
          } else if (!str[i2 + 2].trim()) {
            for (let y5 = i2 + 2; y5 < len; y5++) {
              totalCounter += 1;
              if (str[y5].trim()) {
                if (str[y5] === "=") {
                  if (y5 > i2 + 2 && round === 1) {
                    finalIndexesToDelete.push(i2 + 2, y5);
                  }
                  if ((str[y5 + 1] === '"' || str[y5 + 1] === "'") && str[y5 + 2]) {
                    valuesStart = y5 + 2;
                  } else if (str[y5 + 1] && !str[y5 + 1].trim()) {
                    for (let z2 = y5 + 1; z2 < len; z2++) {
                      totalCounter += 1;
                      if (str[z2].trim()) {
                        if (z2 > y5 + 1 && round === 1) {
                          finalIndexesToDelete.push(y5 + 1, z2);
                        }
                        if ((str[z2] === '"' || str[z2] === "'") && str[z2 + 1]) {
                          valuesStart = z2 + 1;
                        }
                        break;
                      }
                    }
                  }
                }
                break;
              }
            }
          }
          if (valuesStart) {
            bodyId = resetBodyClassOrId({
              valuesStart,
              quoteless,
              nameStart: i2
            });
            if (round === 1) {
              bodyItsTheFirstClassOrId = true;
            } else if (round === 2) {
              bodyClassOrIdCanBeDeleted = true;
            }
          }
        }
        if (!doNothing && bodyClass.valuesStart !== null && i2 >= bodyClass.valuesStart && bodyClass.valueStart === null) {
          if (allHeads && j(str, i2, allHeads)) {
            doNothing = true;
            bodyClassOrIdCanBeDeleted = false;
            if (whitespaceStartedAt && i2 > whitespaceStartedAt + 1) {
              let calculatedRange = S({
                str,
                from: whitespaceStartedAt,
                to: i2,
                ifLeftSideIncludesThisThenCropTightly: `"'`,
                ifRightSideIncludesThisThenCropTightly: `"'`
              });
              finalIndexesToDelete.push(...calculatedRange);
              whitespaceStartedAt = null;
            } else if (whitespaceStartedAt) {
              whitespaceStartedAt = null;
            }
            let matchedHeads = j(str, i2, allHeads);
            let findings = resolvedOpts.backend.find(
              (headsTailsObj) => headsTailsObj.heads === matchedHeads
            );
            if (findings?.tails) {
              doNothingUntil = findings.tails;
            }
          } else if (characterSuitableForNames(chr)) {
            bodyClass.valueStart = i2;
            if (round === 1) {
              if (bodyItsTheFirstClassOrId && bodyClass.valuesStart !== null && !str.slice(bodyClass.valuesStart, i2).trim() && bodyClass.valuesStart < i2) {
                finalIndexesToDelete.push(bodyClass.valuesStart, i2);
                nonIndentationsWhitespaceLength += i2 - bodyClass.valuesStart;
                bodyItsTheFirstClassOrId = false;
              } else if (whitespaceStartedAt !== null && whitespaceStartedAt < i2 - 1) {
                finalIndexesToDelete.push(whitespaceStartedAt + 1, i2);
                nonIndentationsWhitespaceLength += i2 - whitespaceStartedAt + 1;
              }
            }
          }
        }
        if (!doNothing && bodyClass.valueStart !== null && i2 > bodyClass.valueStart && (!characterSuitableForNames(chr) || allTails && j(str, i2, allTails))) {
          if (allHeads && j(str, i2, allHeads)) {
            bodyClass.valueStart = null;
            bodyClass = resetBodyClassOrId();
            let matchedHeads = j(str, i2, allHeads);
            let findings = resolvedOpts.backend.find(
              (headsTailsObj) => headsTailsObj.heads === matchedHeads
            );
            if (findings?.tails) {
              doNothingUntil = findings.tails;
            }
          } else {
            let carvedClass = `${str.slice(bodyClass.valueStart, i2)}`;
            if (round === 1) {
              bodyClassesArr.push(`.${carvedClass}`);
            } else if (bodyClass.valueStart != null && bodyClassesToDelete.includes(carvedClass)) {
              let expandedRange = S({
                str,
                from: bodyClass.valueStart,
                to: i2,
                ifLeftSideIncludesThisThenCropTightly: `"'`,
                ifRightSideIncludesThisThenCropTightly: `"'`,
                wipeAllWhitespaceOnLeft: true
              });
              let whatToInsert = "";
              if (str[expandedRange[0] - 1] && str[expandedRange[0] - 1].trim() && str[expandedRange[1]] && str[expandedRange[1]].trim() && (allHeads || allTails) && (allHeads && P(str, expandedRange[0], allTails) || allTails && j(str, expandedRange[1], allHeads))) {
                whatToInsert = " ";
              }
              finalIndexesToDelete.push(...expandedRange, whatToInsert);
            } else {
              bodyClassOrIdCanBeDeleted = false;
              if (resolvedOpts.uglify && !(Array.isArray(resolvedOpts.whitelist) && resolvedOpts.whitelist.length && matcher([`.${carvedClass}`], resolvedOpts.whitelist).length)) {
                finalIndexesToDelete.push(
                  bodyClass.valueStart,
                  i2,
                  allClassesAndIdsWithinHeadFinalUglified[allClassesAndIdsWithinHeadFinal.indexOf(`.${carvedClass}`)].slice(1)
                );
              }
            }
            bodyClass.valueStart = null;
          }
        }
        if (!doNothing && bodyId && bodyId.valueStart !== null && i2 > bodyId.valueStart && (!characterSuitableForNames(chr) || allTails && j(str, i2, allTails))) {
          let carvedId = str.slice(bodyId.valueStart, i2);
          if (round === 1) {
            bodyIdsArr.push(`#${carvedId}`);
          } else if (bodyId.valueStart != null && bodyIdsToDelete.includes(carvedId)) {
            let expandedRange = S({
              str,
              from: bodyId.valueStart,
              to: i2,
              ifRightSideIncludesThisThenCropTightly: `"'`,
              wipeAllWhitespaceOnLeft: true
            });
            if (str[expandedRange[0] - 1] && str[expandedRange[0] - 1].trim() && str[expandedRange[1]] && str[expandedRange[1]].trim() && (allHeads || allTails) && (allHeads && P(str, expandedRange[0], allTails || []) || allTails && j(str, expandedRange[1], allHeads || []))) {
              expandedRange[0] += 1;
            }
            finalIndexesToDelete.push(...expandedRange);
          } else {
            bodyClassOrIdCanBeDeleted = false;
            if (resolvedOpts.uglify && !(Array.isArray(resolvedOpts.whitelist) && resolvedOpts.whitelist.length && matcher([`#${carvedId}`], resolvedOpts.whitelist).length)) {
              finalIndexesToDelete.push(
                bodyId.valueStart,
                i2,
                allClassesAndIdsWithinHeadFinalUglified[allClassesAndIdsWithinHeadFinal.indexOf(`#${carvedId}`)].slice(1)
              );
            }
          }
          bodyId.valueStart = null;
        }
        if (!doNothing && bodyClass.valuesStart != null && (!bodyClass.quoteless && (chr === "'" || chr === '"') || bodyClass.quoteless && !characterSuitableForNames(str[i2])) && i2 >= bodyClass.valuesStart) {
          if (i2 === bodyClass.valuesStart) {
            if (round === 1) {
              finalIndexesToDelete.push(
                ...S({
                  str,
                  from: bodyClass.nameStart,
                  to: i2 + 1,
                  ifRightSideIncludesThisThenCropTightly: "/>",
                  wipeAllWhitespaceOnLeft: true
                })
              );
            }
          } else {
            if (round === 2 && bodyClassOrIdCanBeDeleted) {
              let expandedRange = S({
                str,
                from: bodyClass.valuesStart - 7,
                to: `'"`.includes(str[i2]) ? i2 + 1 : i2,
                ifRightSideIncludesThisThenCropTightly: "/>",
                wipeAllWhitespaceOnLeft: true
              });
              let whatToInsert = "";
              if (str[expandedRange[0] - 1] && str[expandedRange[0] - 1].trim() && str[expandedRange[1]] && str[expandedRange[1]].trim() && !"/>".includes(str[expandedRange[1]])) {
                whatToInsert = " ";
              }
              finalIndexesToDelete.push(...expandedRange, whatToInsert);
            }
            if (whitespaceStartedAt !== null) {
              finalIndexesToDelete.push(whitespaceStartedAt, i2);
            }
          }
          bodyClass = resetBodyClassOrId();
        }
        if (!doNothing && bodyId.valuesStart !== null && (!bodyId.quoteless && (chr === "'" || chr === '"') || bodyId.quoteless && !characterSuitableForNames(str[i2])) && i2 >= bodyId.valuesStart) {
          if (i2 === bodyId.valuesStart) {
            if (round === 1) {
              finalIndexesToDelete.push(
                ...S({
                  str,
                  from: bodyId.nameStart,
                  to: i2 + 1,
                  ifRightSideIncludesThisThenCropTightly: "/>",
                  wipeAllWhitespaceOnLeft: true
                })
              );
            }
          } else {
            if (round === 2 && bodyClassOrIdCanBeDeleted) {
              let expandedRange = S({
                str,
                from: bodyId.valuesStart - 4,
                to: i2 + 1,
                ifRightSideIncludesThisThenCropTightly: "/>",
                wipeAllWhitespaceOnLeft: true
              });
              let whatToInsert = "";
              if (str[expandedRange[0] - 1] && str[expandedRange[0] - 1].trim() && str[expandedRange[1]] && str[expandedRange[1]].trim() && !"/>".includes(str[expandedRange[1]])) {
                whatToInsert = " ";
              }
              finalIndexesToDelete.push(...expandedRange, whatToInsert);
            }
            if (whitespaceStartedAt !== null) {
              finalIndexesToDelete.push(whitespaceStartedAt, i2);
            }
          }
          bodyId = resetBodyClassOrId();
        }
        if (!doNothing && bodyId.valuesStart && i2 >= bodyId.valuesStart && bodyId.valueStart === null) {
          if (allHeads && j(str, i2, allHeads)) {
            doNothing = true;
            bodyClassOrIdCanBeDeleted = false;
            if (whitespaceStartedAt && i2 > whitespaceStartedAt + 1) {
              let calculatedRange = S({
                str,
                from: whitespaceStartedAt,
                to: i2,
                ifLeftSideIncludesThisThenCropTightly: `"'`,
                ifRightSideIncludesThisThenCropTightly: `"'`
              });
              finalIndexesToDelete.push(...calculatedRange);
              whitespaceStartedAt = null;
            } else if (whitespaceStartedAt) {
              whitespaceStartedAt = null;
            }
            let matchedHeads = j(str, i2, allHeads);
            let findings = resolvedOpts.backend.find(
              (headsTailsObj) => headsTailsObj.heads === matchedHeads
            );
            if (findings?.tails) {
              doNothingUntil = findings.tails;
            }
          } else if (characterSuitableForNames(chr)) {
            bodyId.valueStart = i2;
            if (round === 1) {
              if (bodyItsTheFirstClassOrId && bodyId.valuesStart !== null && !str.slice(bodyId.valuesStart, i2).trim() && bodyId.valuesStart < i2) {
                finalIndexesToDelete.push(bodyId.valuesStart, i2);
                nonIndentationsWhitespaceLength += i2 - bodyId.valuesStart;
                bodyItsTheFirstClassOrId = false;
              } else if (whitespaceStartedAt !== null && whitespaceStartedAt < i2 - 1) {
                finalIndexesToDelete.push(whitespaceStartedAt + 1, i2);
                nonIndentationsWhitespaceLength += i2 - whitespaceStartedAt + 1;
              }
            }
          }
        }
        if (!doNothing && round === 1) {
          if (commentStartedAt !== null && commentStartedAt < i2 && str[i2] === ">" && !usedOnce) {
            if (resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains && Array.isArray(
              resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains
            ) && resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains.length && resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some(
              (val) => val.trim() && str.slice(commentStartedAt, i2).toLowerCase().includes(val)
            )) {
              canDelete = false;
            }
            usedOnce = true;
          }
          if (commentStartedAt !== null && str[i2] === ">") {
            if (!bogusHTMLComment && str[i2 - 1] === "-" && str[i2 - 2] === "-") {
              let calculatedRange = S({
                str,
                from: commentStartedAt,
                to: i2 + 1,
                wipeAllWhitespaceOnLeft: true,
                addSingleSpaceToPreventAccidentalConcatenation: true
              });
              if (resolvedOpts.removeHTMLComments && canDelete) {
                finalIndexesToDelete.push(...calculatedRange);
              }
              commentsLength += calculatedRange[1] - calculatedRange[0];
              commentStartedAt = null;
              bogusHTMLComment = void 0;
            } else if (bogusHTMLComment) {
              let calculatedRange = S({
                str,
                from: commentStartedAt,
                to: i2 + 1,
                wipeAllWhitespaceOnLeft: true,
                addSingleSpaceToPreventAccidentalConcatenation: true
              });
              if (resolvedOpts.removeHTMLComments && canDelete) {
                finalIndexesToDelete.push(...calculatedRange);
              }
              commentsLength += calculatedRange[1] - calculatedRange[0];
              commentStartedAt = null;
              bogusHTMLComment = void 0;
            }
          }
          if (resolvedOpts.removeHTMLComments && commentStartedAt === null && str[i2] === "<" && str[i2 + 1] === "!") {
            if ((!allHeads || Array.isArray(allHeads) && allHeads.length && !allHeads.includes("<!")) && (!allTails || Array.isArray(allTails) && allTails.length && !allTails.includes("<!"))) {
              if (!U(str, i2 + 1, "doctype", {
                i: true,
                trimBeforeMatching: true
              }) && !(str[i2 + 2] === "-" && str[i2 + 3] === "-" && Array.isArray(
                resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains
              ) && resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains.length && U(
                str,
                i2 + 3,
                resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains,
                {
                  trimBeforeMatching: true
                }
              ))) {
                commentStartedAt = i2;
                usedOnce = false;
                canDelete = true;
              }
              bogusHTMLComment = !(str[i2 + 2] === "-" && str[i2 + 3] === "-");
            }
            if (commentStartedAt !== i2) {
              commentNearlyStartedAt = i2;
            }
          }
        }
        if (chr === "}" && curliesDepth) {
          curliesDepth -= 1;
        }
        if (!doNothing && chr === "{" && checkingInsideCurlyBraces) {
          if (!insideCurlyBraces) {
            insideCurlyBraces = true;
            if (whitespaceStartedAt !== null && (str.slice(whitespaceStartedAt, i2).includes("\n") || str.slice(whitespaceStartedAt, i2).includes("\r"))) {
              finalIndexesToDelete.push(whitespaceStartedAt, i2);
            }
          } else {
            curliesDepth += 1;
          }
        }
        if (!doNothing) {
          if (!str[i2].trim()) {
            if (whitespaceStartedAt === null) {
              whitespaceStartedAt = i2;
            }
          } else if (whitespaceStartedAt !== null) {
            whitespaceStartedAt = null;
          }
        }
        if (!doNothing && round === 2 && Array.isArray(round1RangesClone) && round1RangesClone.length && i2 === round1RangesClone[0][0]) {
          let temp = round1RangesClone.shift();
          if (temp && temp[1] - 1 > i2) {
            i2 = temp[1] - 1;
          }
          continue;
        }
        if (commentNearlyStartedAt !== null && str[i2] === ">") {
          commentNearlyStartedAt = null;
          let temp = 0;
          if (resolvedOpts.removeHTMLComments && Array.isArray(
            resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains
          ) && resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains.length && (resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some(
            (val) => val.includes("if")
          ) || resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some(
            (val) => val.includes("mso")
          ) || resolvedOpts.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some(
            (val) => val.includes("ie")
          )) && U(str, i2, "<!--", {
            trimBeforeMatching: true,
            cb: (_char, _theRemainderOfTheString, index) => {
              temp = index;
              return true;
            }
          })) {
            if (U(str, temp - 1, "-->", {
              trimBeforeMatching: true,
              cb: (_char, _theRemainderOfTheString, index) => {
                temp = index;
                return true;
              }
            })) {
            }
            if (typeof temp === "number") {
              i2 = temp - 1;
            }
            continue;
          }
        }
      }
    if (round === 1) {
      allClassesAndIdsWithinBody = G(bodyClassesArr.concat(bodyIdsArr));
      headSelectorsArr.forEach((el) => {
        y2(el).res.forEach((selector) => {
          if (X(headSelectorsCount, selector)) {
            headSelectorsCount[selector] += 1;
          } else {
            headSelectorsCount[selector] = 1;
          }
        });
      });
      headSelectorsCountClone = { ...headSelectorsCount };
      allClassesAndIdsWithinHead = G(
        headSelectorsArr.reduce(
          (arr, el) => arr.concat(y2(el).res),
          []
        )
      );
      countBeforeCleaning = allClassesAndIdsWithinHead.length;
      let preppedHeadSelectorsArr = Array.from(headSelectorsArr);
      let deletedFromHeadArr = [];
      for (let y5 = 0, len2 = preppedHeadSelectorsArr.length; y5 < len2; y5++) {
        totalCounter += 1;
        let temp;
        if (preppedHeadSelectorsArr[y5] != null) {
          temp = y2(preppedHeadSelectorsArr[y5]).res;
        }
        if (temp && !temp.every((el) => allClassesAndIdsWithinBody.includes(el))) {
          deletedFromHeadArr.push(...y2(preppedHeadSelectorsArr[y5]).res);
          preppedHeadSelectorsArr.splice(y5, 1);
          y5 -= 1;
          len2 -= 1;
        }
      }
      deletedFromHeadArr = G(
        y3(deletedFromHeadArr, resolvedOpts.whitelist)
      );
      let preppedAllClassesAndIdsWithinHead;
      if (preppedHeadSelectorsArr?.length) {
        preppedAllClassesAndIdsWithinHead = preppedHeadSelectorsArr.reduce(
          (acc, curr) => acc.concat(y2(curr).res),
          []
        );
      } else {
        preppedAllClassesAndIdsWithinHead = [];
      }
      headCssToDelete = y3(
        Z(
          G(Array.from(allClassesAndIdsWithinHead)),
          bodyClassesArr.concat(bodyIdsArr)
        ),
        resolvedOpts.whitelist
      );
      bodyCssToDelete = G(
        y3(
          Z(
            bodyClassesArr.concat(bodyIdsArr),
            preppedAllClassesAndIdsWithinHead
          ),
          resolvedOpts.whitelist
        )
      );
      headCssToDelete = G(
        headCssToDelete.concat(
          intersection_default(deletedFromHeadArr, bodyCssToDelete)
        )
      );
      bodyClassesToDelete = bodyCssToDelete.filter((s) => s.startsWith(".")).map((s) => s.slice(1));
      bodyIdsToDelete = bodyCssToDelete.filter((s) => s.startsWith("#")).map((s) => s.slice(1));
      allClassesAndIdsThatWereCompletelyDeletedFromHead = Object.keys(
        headSelectorsCountClone
      ).filter((singleSelector) => headSelectorsCountClone[singleSelector] < 1);
      bodyClassesToDelete = G(
        bodyClassesToDelete.concat(
          intersection_default(
            y3(allClassesAndIdsWithinBody, resolvedOpts.whitelist),
            allClassesAndIdsThatWereCompletelyDeletedFromHead
          ).filter((val) => val[0] === ".").map((val) => val.slice(1))
        )
      );
      let allClassesAndIdsWithinBodyThatWereWhitelisted = matcher(
        allClassesAndIdsWithinBody,
        resolvedOpts.whitelist
      );
      bodyCssToDelete = G(
        bodyCssToDelete.concat(
          bodyClassesToDelete.map((val) => `.${val}`),
          bodyIdsToDelete.map((val) => `#${val}`)
        )
      );
      allClassesAndIdsWithinHeadFinal = Z(
        Z(Array.from(allClassesAndIdsWithinHead), bodyCssToDelete),
        headCssToDelete
      );
      if (Array.isArray(allClassesAndIdsWithinBodyThatWereWhitelisted) && allClassesAndIdsWithinBodyThatWereWhitelisted.length) {
        allClassesAndIdsWithinBodyThatWereWhitelisted.forEach((classOrId) => {
          if (!allClassesAndIdsWithinHeadFinal.includes(classOrId)) {
            allClassesAndIdsWithinHeadFinal.push(classOrId);
          }
        });
      }
      if (resolvedOpts.uglify) {
        allClassesAndIdsWithinHeadFinalUglified = w2(
          allClassesAndIdsWithinHeadFinal
        );
      }
      countAfterCleaning = allClassesAndIdsWithinHeadFinal.length;
      uglified = resolvedOpts.uglify ? allClassesAndIdsWithinHeadFinal.map((name, id) => [
        name,
        allClassesAndIdsWithinHeadFinalUglified[id]
      ]).filter(
        (arr) => !resolvedOpts.whitelist.some(
          (whitelistVal) => isMatch(arr[0], whitelistVal)
        )
      ) : null;
      if (finalIndexesToDelete.current()) {
        round1RangesClone = Array.from(finalIndexesToDelete.current() || []);
      } else {
        round1RangesClone = null;
      }
    } else if (round === 2) {
    }
  }
  finalIndexesToDelete.push(lineBreaksToDelete.current());
  if (str.length && finalIndexesToDelete.current()) {
    str = _(str, finalIndexesToDelete.current());
    finalIndexesToDelete.wipe();
  }
  let startingPercentageDone = resolvedOpts.reportProgressFuncTo - (resolvedOpts.reportProgressFuncTo - resolvedOpts.reportProgressFuncFrom) * leavePercForLastStage;
  if (resolvedOpts.reportProgressFunc && len >= 2e3) {
    currentPercentageDone = Math.floor(
      startingPercentageDone + (resolvedOpts.reportProgressFuncTo - startingPercentageDone) / 5
      // * 1
    );
    if (currentPercentageDone !== lastPercentage) {
      lastPercentage = currentPercentageDone;
      resolvedOpts.reportProgressFunc(currentPercentageDone);
    }
  }
  while (regexEmptyMediaQuery.test(str) || regexEmptyUnclosedMediaQuery.test(str)) {
    str = str.replace(regexEmptyMediaQuery, "");
    str = str.replace(regexEmptyUnclosedMediaQuery, "");
    totalCounter += str.length;
  }
  if (resolvedOpts.reportProgressFunc && len >= 2e3) {
    currentPercentageDone = Math.floor(
      startingPercentageDone + (resolvedOpts.reportProgressFuncTo - startingPercentageDone) / 5 * 2
    );
    if (currentPercentageDone !== lastPercentage) {
      lastPercentage = currentPercentageDone;
      resolvedOpts.reportProgressFunc(currentPercentageDone);
    }
  }
  str = str.replace(regexEmptyStyleTag, trailingNewline || "\n");
  totalCounter += str.length;
  if (resolvedOpts.reportProgressFunc && len >= 2e3) {
    currentPercentageDone = Math.floor(
      startingPercentageDone + (resolvedOpts.reportProgressFuncTo - startingPercentageDone) / 5 * 3
    );
    if (currentPercentageDone !== lastPercentage) {
      lastPercentage = currentPercentageDone;
      resolvedOpts.reportProgressFunc(currentPercentageDone);
    }
  }
  let tempLen = str.length;
  str = str.replace(r3(), "");
  totalCounter += str.length;
  if (tempLen !== str.length) {
    commentsLength += str.length - tempLen;
  }
  if (resolvedOpts.reportProgressFunc && len >= 2e3) {
    currentPercentageDone = Math.floor(
      startingPercentageDone + (resolvedOpts.reportProgressFuncTo - startingPercentageDone) / 5 * 4
    );
    if (currentPercentageDone !== lastPercentage) {
      lastPercentage = currentPercentageDone;
      resolvedOpts.reportProgressFunc(currentPercentageDone);
    }
  }
  str = he(str, resolvedOpts.htmlCrushOpts).result;
  if (tempLen !== str.length) {
    nonIndentationsWhitespaceLength += str.length - tempLen;
  }
  totalCounter += str.length;
  if (resolvedOpts.reportProgressFunc && len >= 2e3) {
    currentPercentageDone = Math.floor(
      startingPercentageDone + (resolvedOpts.reportProgressFuncTo - startingPercentageDone)
    );
    if (currentPercentageDone !== lastPercentage) {
      lastPercentage = currentPercentageDone;
      resolvedOpts.reportProgressFunc(currentPercentageDone);
    }
  }
  if (str.length) {
    if ((!str[0].trim() || !str[str.length - 1].trim()) && str.length !== str.trim().length) {
      nonIndentationsWhitespaceLength += str.length - str.trim().length;
    }
    str = str.trimStart();
  }
  str = str.replace(/ ((class|id)=["']) /g, " $1");
  return {
    log: {
      timeTakenInMilliseconds: Date.now() - start,
      traversedTotalCharacters: totalCounter,
      traversedTimesInputLength: len ? Math.round(totalCounter / originalLength * 100) / 100 : 0,
      originalLength,
      cleanedLength: str.length,
      bytesSaved: Math.max(originalLength - str.length, 0),
      percentageReducedOfOriginal: len ? Math.round(
        Math.max(originalLength - str.length, 0) * 100 / originalLength
      ) : 0,
      nonIndentationsWhitespaceLength: Math.max(
        nonIndentationsWhitespaceLength - trailingLinebreakLengthCorrection,
        0
      ),
      nonIndentationsTakeUpPercentageOfOriginal: len && Math.max(
        nonIndentationsWhitespaceLength - trailingLinebreakLengthCorrection,
        0
      ) ? Math.round(
        Math.max(nonIndentationsWhitespaceLength, 0) * 100 / originalLength
      ) : 0,
      commentsLength,
      commentsTakeUpPercentageOfOriginal: len && commentsLength ? Math.round(commentsLength * 100 / originalLength) : 0,
      uglified
    },
    result: str,
    countAfterCleaning,
    countBeforeCleaning,
    allInHead: allClassesAndIdsWithinHead.sort(Y),
    allInBody: allClassesAndIdsWithinBody.sort(Y),
    deletedFromHead: headCssToDelete.sort(Y),
    deletedFromBody: bodyCssToDelete.sort(Y)
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  comb,
  defaults,
  version
});
/**
 * @name arrayiffy-if-string
 * @fileoverview Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
 * @version 5.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/arrayiffy-if-string/}
 */
/**
 * @name codsen-utils
 * @fileoverview Various utility functions
 * @version 1.5.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/codsen-utils/}
 */
/**
 * @name string-match-left-right
 * @fileoverview Match substrings on the left or right of a given index, ignoring whitespace
 * @version 9.0.12
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-match-left-right/}
 */
/**
 * @name regex-empty-conditional-comments
 * @fileoverview Regular expression for matching HTML empty conditional comments
 * @version 3.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/regex-empty-conditional-comments/}
 */
/**
 * @name string-left-right
 * @fileoverview Looks up the first non-whitespace character to the left/right of a given index
 * @version 6.0.12
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-left-right/}
 */
/**
 * @name string-extract-class-names
 * @fileoverview Extracts CSS class/id names from a string
 * @version 8.0.12
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-extract-class-names/}
 */
/**
 * @name array-pull-all-with-glob
 * @fileoverview Like _.pullAll but with globs (wildcards)
 * @version 7.0.7
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/array-pull-all-with-glob/}
 */
/**
 * @name string-range-expander
 * @fileoverview Expands string index ranges within whitespace boundaries until letters are met
 * @version 4.0.9
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-range-expander/}
 */
/**
 * @name string-uglify
 * @fileoverview Shorten sets of strings deterministically, to be git-friendly
 * @version 3.0.7
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-uglify/}
 */
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 6.0.8
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 9.0.9
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */
/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 7.0.9
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */
/**
 * @name string-collapse-leading-whitespace
 * @fileoverview Collapse the leading and trailing whitespace of a string
 * @version 7.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-leading-whitespace/}
 */
/**
 * @name ranges-push
 * @fileoverview Gather string index ranges
 * @version 7.0.9
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-push/}
 */
/**
 * @name html-crush
 * @fileoverview Minify email templates
 * @version 6.0.12
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/html-crush/}
 */
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
