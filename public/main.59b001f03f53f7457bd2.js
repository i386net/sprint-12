!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 124));
})([
  function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n('object' == typeof globalThis && globalThis) ||
        n('object' == typeof window && window) ||
        n('object' == typeof self && self) ||
        n('object' == typeof e && e) ||
        Function('return this')();
    }.call(this, n(90)));
  },
  function (t, e, n) {
    var r = n(0),
      o = n(35),
      i = n(3),
      a = n(36),
      c = n(42),
      u = n(64),
      s = o('wks'),
      f = r.Symbol,
      l = u ? f : (f && f.withoutSetter) || a;
    t.exports = function (t) {
      return (
        i(s, t) || (c && i(f, t) ? (s[t] = f[t]) : (s[t] = l('Symbol.' + t))),
        s[t]
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e);
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(21).f,
      i = n(9),
      a = n(10),
      c = n(33),
      u = n(57),
      s = n(61);
    t.exports = function (t, e) {
      var n,
        f,
        l,
        p,
        v,
        h = t.target,
        d = t.global,
        y = t.stat;
      if ((n = d ? r : y ? r[h] || c(h, {}) : (r[h] || {}).prototype))
        for (f in e) {
          if (
            ((p = e[f]),
            (l = t.noTargetGet ? (v = o(n, f)) && v.value : n[f]),
            !s(d ? f : h + (y ? '.' : '#') + f, t.forced) && void 0 !== l)
          ) {
            if (typeof p == typeof l) continue;
            u(p, l);
          }
          (t.sham || (l && l.sham)) && i(p, 'sham', !0), a(n, f, p, t);
        }
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    };
  },
  function (t, e, n) {
    var r = n(5);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + ' is not an object');
      return t;
    };
  },
  function (t, e, n) {
    var r = n(2);
    t.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e, n) {
    var r = n(7),
      o = n(55),
      i = n(6),
      a = n(23),
      c = Object.defineProperty;
    e.f = r
      ? c
      : function (t, e, n) {
          if ((i(t), (e = a(e, !0)), i(n), o))
            try {
              return c(t, e, n);
            } catch (t) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported');
          return 'value' in n && (t[e] = n.value), t;
        };
  },
  function (t, e, n) {
    var r = n(7),
      o = n(8),
      i = n(17);
    t.exports = r
      ? function (t, e, n) {
          return o.f(t, e, i(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(9),
      i = n(3),
      a = n(33),
      c = n(34),
      u = n(18),
      s = u.get,
      f = u.enforce,
      l = String(String).split('String');
    (t.exports = function (t, e, n, c) {
      var u = !!c && !!c.unsafe,
        s = !!c && !!c.enumerable,
        p = !!c && !!c.noTargetGet;
      'function' == typeof n &&
        ('string' != typeof e || i(n, 'name') || o(n, 'name', e),
        (f(n).source = l.join('string' == typeof e ? e : ''))),
        t !== r
          ? (u ? !p && t[e] && (s = !0) : delete t[e],
            s ? (t[e] = n) : o(t, e, n))
          : s
          ? (t[e] = n)
          : a(e, n);
    })(Function.prototype, 'toString', function () {
      return ('function' == typeof this && s(this).source) || c(this);
    });
  },
  function (t, e, n) {
    var r = n(31),
      o = n(22);
    t.exports = function (t) {
      return r(o(t));
    };
  },
  function (t, e, n) {
    var r = n(58),
      o = n(0),
      i = function (t) {
        return 'function' == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? i(r[t]) || i(o[t])
        : (r[t] && r[t][e]) || (o[t] && o[t][e]);
    };
  },
  function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, n) {
    var r = n(38),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  function (t, e, n) {
    var r = n(22);
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e, n) {
    var r,
      o,
      i,
      a = n(91),
      c = n(0),
      u = n(5),
      s = n(9),
      f = n(3),
      l = n(24),
      p = n(25),
      v = c.WeakMap;
    if (a) {
      var h = new v(),
        d = h.get,
        y = h.has,
        m = h.set;
      (r = function (t, e) {
        return m.call(h, t, e), e;
      }),
        (o = function (t) {
          return d.call(h, t) || {};
        }),
        (i = function (t) {
          return y.call(h, t);
        });
    } else {
      var g = l('state');
      (p[g] = !0),
        (r = function (t, e) {
          return s(t, g, e), e;
        }),
        (o = function (t) {
          return f(t, g) ? t[g] : {};
        }),
        (i = function (t) {
          return f(t, g);
        });
    }
    t.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function (t) {
        return i(t) ? o(t) : r(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!u(e) || (n = o(e)).type !== t)
            throw TypeError('Incompatible receiver, ' + t + ' required');
          return n;
        };
      },
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(7),
      o = n(8).f,
      i = Function.prototype,
      a = i.toString,
      c = /^\s*function ([^ (]*)/;
    r &&
      !('name' in i) &&
      o(i, 'name', {
        configurable: !0,
        get: function () {
          try {
            return a.call(this).match(c)[1];
          } catch (t) {
            return '';
          }
        },
      });
  },
  function (t, e, n) {
    var r = n(7),
      o = n(30),
      i = n(17),
      a = n(11),
      c = n(23),
      u = n(3),
      s = n(55),
      f = Object.getOwnPropertyDescriptor;
    e.f = r
      ? f
      : function (t, e) {
          if (((t = a(t)), (e = c(e, !0)), s))
            try {
              return f(t, e);
            } catch (t) {}
          if (u(t, e)) return i(!o.f.call(t, e), t[e]);
        };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, n) {
    var r = n(5);
    t.exports = function (t, e) {
      if (!r(t)) return t;
      var n, o;
      if (e && 'function' == typeof (n = t.toString) && !r((o = n.call(t))))
        return o;
      if ('function' == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
      if (!e && 'function' == typeof (n = t.toString) && !r((o = n.call(t))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e, n) {
    var r = n(35),
      o = n(36),
      i = r('keys');
    t.exports = function (t) {
      return i[t] || (i[t] = o(t));
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(27);
    t.exports = function (t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, o) {
            return t.call(e, n, r, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ('function' != typeof t)
        throw TypeError(String(t) + ' is not a function');
      return t;
    };
  },
  function (t, e, n) {
    var r = n(13);
    t.exports =
      Array.isArray ||
      function (t) {
        return 'Array' == r(t);
      };
  },
  function (t, e, n) {
    var r = n(8).f,
      o = n(3),
      i = n(1)('toStringTag');
    t.exports = function (t, e, n) {
      t &&
        !o((t = n ? t : t.prototype), i) &&
        r(t, i, { configurable: !0, value: e });
    };
  },
  function (t, e, n) {
    'use strict';
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({ 1: 2 }, 1);
    e.f = i
      ? function (t) {
          var e = o(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function (t, e, n) {
    var r = n(2),
      o = n(13),
      i = ''.split;
    t.exports = r(function () {
      return !Object('z').propertyIsEnumerable(0);
    })
      ? function (t) {
          return 'String' == o(t) ? i.call(t, '') : Object(t);
        }
      : Object;
  },
  function (t, e, n) {
    var r = n(0),
      o = n(5),
      i = r.document,
      a = o(i) && o(i.createElement);
    t.exports = function (t) {
      return a ? i.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(9);
    t.exports = function (t, e) {
      try {
        o(r, t, e);
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  function (t, e, n) {
    var r = n(56),
      o = Function.toString;
    'function' != typeof r.inspectSource &&
      (r.inspectSource = function (t) {
        return o.call(t);
      }),
      (t.exports = r.inspectSource);
  },
  function (t, e, n) {
    var r = n(14),
      o = n(56);
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })('versions', []).push({
      version: '3.6.5',
      mode: r ? 'pure' : 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
    });
  },
  function (t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function (t) {
      return (
        'Symbol(' +
        String(void 0 === t ? '' : t) +
        ')_' +
        (++n + r).toString(36)
      );
    };
  },
  function (t, e, n) {
    var r = n(59),
      o = n(39).concat('length', 'prototype');
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function (t, e) {
    t.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ];
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var r = n(26),
      o = n(31),
      i = n(16),
      a = n(15),
      c = n(63),
      u = [].push,
      s = function (t) {
        var e = 1 == t,
          n = 2 == t,
          s = 3 == t,
          f = 4 == t,
          l = 6 == t,
          p = 5 == t || l;
        return function (v, h, d, y) {
          for (
            var m,
              g,
              b = i(v),
              S = o(b),
              x = r(h, d, 3),
              _ = a(S.length),
              w = 0,
              k = y || c,
              j = e ? k(v, _) : n ? k(v, 0) : void 0;
            _ > w;
            w++
          )
            if ((p || w in S) && ((g = x((m = S[w]), w, b)), t))
              if (e) j[w] = g;
              else if (g)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return m;
                  case 6:
                    return w;
                  case 2:
                    u.call(j, m);
                }
              else if (f) return !1;
          return l ? -1 : s || f ? f : j;
        };
      };
    t.exports = {
      forEach: s(0),
      map: s(1),
      filter: s(2),
      some: s(3),
      every: s(4),
      find: s(5),
      findIndex: s(6),
    };
  },
  function (t, e, n) {
    var r = n(2);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function () {
        return !String(Symbol());
      });
  },
  function (t, e, n) {
    var r = n(7),
      o = n(2),
      i = n(3),
      a = Object.defineProperty,
      c = {},
      u = function (t) {
        throw t;
      };
    t.exports = function (t, e) {
      if (i(c, t)) return c[t];
      e || (e = {});
      var n = [][t],
        s = !!i(e, 'ACCESSORS') && e.ACCESSORS,
        f = i(e, 0) ? e[0] : u,
        l = i(e, 1) ? e[1] : void 0;
      return (c[t] =
        !!n &&
        !o(function () {
          if (s && !r) return !0;
          var t = { length: -1 };
          s ? a(t, 1, { enumerable: !0, get: u }) : (t[1] = 1), n.call(t, f, l);
        }));
    };
  },
  function (t, e, n) {
    var r = n(4),
      o = n(94);
    r(
      {
        target: 'Array',
        stat: !0,
        forced: !n(70)(function (t) {
          Array.from(t);
        }),
      },
      { from: o }
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(23),
      o = n(8),
      i = n(17);
    t.exports = function (t, e, n) {
      var a = r(e);
      a in t ? o.f(t, a, i(0, n)) : (t[a] = n);
    };
  },
  function (t, e, n) {
    var r = {};
    (r[n(1)('toStringTag')] = 'z'), (t.exports = '[object z]' === String(r));
  },
  function (t, e, n) {
    'use strict';
    var r = n(95).charAt,
      o = n(18),
      i = n(71),
      a = o.set,
      c = o.getterFor('String Iterator');
    i(
      String,
      'String',
      function (t) {
        a(this, { type: 'String Iterator', string: String(t), index: 0 });
      },
      function () {
        var t,
          e = c(this),
          n = e.string,
          o = e.index;
        return o >= n.length
          ? { value: void 0, done: !0 }
          : ((t = r(n, o)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e, n) {
    var r,
      o = n(6),
      i = n(98),
      a = n(39),
      c = n(25),
      u = n(74),
      s = n(32),
      f = n(24),
      l = f('IE_PROTO'),
      p = function () {},
      v = function (t) {
        return '<script>' + t + '</script>';
      },
      h = function () {
        try {
          r = document.domain && new ActiveXObject('htmlfile');
        } catch (t) {}
        var t, e;
        h = r
          ? (function (t) {
              t.write(v('')), t.close();
              var e = t.parentWindow.Object;
              return (t = null), e;
            })(r)
          : (((e = s('iframe')).style.display = 'none'),
            u.appendChild(e),
            (e.src = String('javascript:')),
            (t = e.contentWindow.document).open(),
            t.write(v('document.F=Object')),
            t.close(),
            t.F);
        for (var n = a.length; n--; ) delete h.prototype[a[n]];
        return h();
      };
    (c[l] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var n;
          return (
            null !== t
              ? ((p.prototype = o(t)),
                (n = new p()),
                (p.prototype = null),
                (n[l] = t))
              : (n = h()),
            void 0 === e ? n : i(n, e)
          );
        });
  },
  function (t, e, n) {
    var r = n(59),
      o = n(39);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e, n) {
    'use strict';
    var r = n(4),
      o = n(101);
    r(
      { target: 'String', proto: !0, forced: n(102)('link') },
      {
        link: function (t) {
          return o(this, 'a', 'href', t);
        },
      }
    );
  },
  function (t, e, n) {
    var r,
      o,
      i = n(0),
      a = n(79),
      c = i.process,
      u = c && c.versions,
      s = u && u.v8;
    s
      ? (o = (r = s.split('.'))[0] + r[1])
      : a &&
        (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = a.match(/Chrome\/(\d+)/)) &&
        (o = r[1]),
      (t.exports = o && +o);
  },
  function (t, e, n) {
    var r = n(46),
      o = n(10),
      i = n(103);
    r || o(Object.prototype, 'toString', i, { unsafe: !0 });
  },
  function (t, e, n) {
    'use strict';
    var r,
      o,
      i,
      a,
      c = n(4),
      u = n(14),
      s = n(0),
      f = n(12),
      l = n(80),
      p = n(10),
      v = n(104),
      h = n(29),
      d = n(105),
      y = n(5),
      m = n(27),
      g = n(106),
      b = n(13),
      S = n(34),
      x = n(107),
      _ = n(70),
      w = n(81),
      k = n(82).set,
      j = n(108),
      E = n(84),
      O = n(109),
      C = n(85),
      P = n(110),
      L = n(18),
      T = n(61),
      A = n(1),
      I = n(51),
      D = A('species'),
      q = 'Promise',
      B = L.get,
      M = L.set,
      R = L.getterFor(q),
      U = l,
      F = s.TypeError,
      N = s.document,
      G = s.process,
      H = f('fetch'),
      V = C.f,
      z = V,
      W = 'process' == b(G),
      J = !!(N && N.createEvent && s.dispatchEvent),
      Y = T(q, function () {
        if (!(S(U) !== String(U))) {
          if (66 === I) return !0;
          if (!W && 'function' != typeof PromiseRejectionEvent) return !0;
        }
        if (u && !U.prototype.finally) return !0;
        if (I >= 51 && /native code/.test(U)) return !1;
        var t = U.resolve(1),
          e = function (t) {
            t(
              function () {},
              function () {}
            );
          };
        return (
          ((t.constructor = {})[D] = e), !(t.then(function () {}) instanceof e)
        );
      }),
      $ =
        Y ||
        !_(function (t) {
          U.all(t).catch(function () {});
        }),
      K = function (t) {
        var e;
        return !(!y(t) || 'function' != typeof (e = t.then)) && e;
      },
      Q = function (t, e, n) {
        if (!e.notified) {
          e.notified = !0;
          var r = e.reactions;
          j(function () {
            for (var o = e.value, i = 1 == e.state, a = 0; r.length > a; ) {
              var c,
                u,
                s,
                f = r[a++],
                l = i ? f.ok : f.fail,
                p = f.resolve,
                v = f.reject,
                h = f.domain;
              try {
                l
                  ? (i || (2 === e.rejection && et(t, e), (e.rejection = 1)),
                    !0 === l
                      ? (c = o)
                      : (h && h.enter(), (c = l(o)), h && (h.exit(), (s = !0))),
                    c === f.promise
                      ? v(F('Promise-chain cycle'))
                      : (u = K(c))
                      ? u.call(c, p, v)
                      : p(c))
                  : v(o);
              } catch (t) {
                h && !s && h.exit(), v(t);
              }
            }
            (e.reactions = []), (e.notified = !1), n && !e.rejection && Z(t, e);
          });
        }
      },
      X = function (t, e, n) {
        var r, o;
        J
          ? (((r = N.createEvent('Event')).promise = e),
            (r.reason = n),
            r.initEvent(t, !1, !0),
            s.dispatchEvent(r))
          : (r = { promise: e, reason: n }),
          (o = s['on' + t])
            ? o(r)
            : 'unhandledrejection' === t && O('Unhandled promise rejection', n);
      },
      Z = function (t, e) {
        k.call(s, function () {
          var n,
            r = e.value;
          if (
            tt(e) &&
            ((n = P(function () {
              W
                ? G.emit('unhandledRejection', r, t)
                : X('unhandledrejection', t, r);
            })),
            (e.rejection = W || tt(e) ? 2 : 1),
            n.error)
          )
            throw n.value;
        });
      },
      tt = function (t) {
        return 1 !== t.rejection && !t.parent;
      },
      et = function (t, e) {
        k.call(s, function () {
          W ? G.emit('rejectionHandled', t) : X('rejectionhandled', t, e.value);
        });
      },
      nt = function (t, e, n, r) {
        return function (o) {
          t(e, n, o, r);
        };
      },
      rt = function (t, e, n, r) {
        e.done ||
          ((e.done = !0),
          r && (e = r),
          (e.value = n),
          (e.state = 2),
          Q(t, e, !0));
      },
      ot = function (t, e, n, r) {
        if (!e.done) {
          (e.done = !0), r && (e = r);
          try {
            if (t === n) throw F("Promise can't be resolved itself");
            var o = K(n);
            o
              ? j(function () {
                  var r = { done: !1 };
                  try {
                    o.call(n, nt(ot, t, r, e), nt(rt, t, r, e));
                  } catch (n) {
                    rt(t, r, n, e);
                  }
                })
              : ((e.value = n), (e.state = 1), Q(t, e, !1));
          } catch (n) {
            rt(t, { done: !1 }, n, e);
          }
        }
      };
    Y &&
      ((U = function (t) {
        g(this, U, q), m(t), r.call(this);
        var e = B(this);
        try {
          t(nt(ot, this, e), nt(rt, this, e));
        } catch (t) {
          rt(this, e, t);
        }
      }),
      ((r = function (t) {
        M(this, {
          type: q,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0,
        });
      }).prototype = v(U.prototype, {
        then: function (t, e) {
          var n = R(this),
            r = V(w(this, U));
          return (
            (r.ok = 'function' != typeof t || t),
            (r.fail = 'function' == typeof e && e),
            (r.domain = W ? G.domain : void 0),
            (n.parent = !0),
            n.reactions.push(r),
            0 != n.state && Q(this, n, !1),
            r.promise
          );
        },
        catch: function (t) {
          return this.then(void 0, t);
        },
      })),
      (o = function () {
        var t = new r(),
          e = B(t);
        (this.promise = t),
          (this.resolve = nt(ot, t, e)),
          (this.reject = nt(rt, t, e));
      }),
      (C.f = V = function (t) {
        return t === U || t === i ? new o(t) : z(t);
      }),
      u ||
        'function' != typeof l ||
        ((a = l.prototype.then),
        p(
          l.prototype,
          'then',
          function (t, e) {
            var n = this;
            return new U(function (t, e) {
              a.call(n, t, e);
            }).then(t, e);
          },
          { unsafe: !0 }
        ),
        'function' == typeof H &&
          c(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (t) {
                return E(U, H.apply(s, arguments));
              },
            }
          ))),
      c({ global: !0, wrap: !0, forced: Y }, { Promise: U }),
      h(U, q, !1, !0),
      d(q),
      (i = f(q)),
      c(
        { target: q, stat: !0, forced: Y },
        {
          reject: function (t) {
            var e = V(this);
            return e.reject.call(void 0, t), e.promise;
          },
        }
      ),
      c(
        { target: q, stat: !0, forced: u || Y },
        {
          resolve: function (t) {
            return E(u && this === i ? U : this, t);
          },
        }
      ),
      c(
        { target: q, stat: !0, forced: $ },
        {
          all: function (t) {
            var e = this,
              n = V(e),
              r = n.resolve,
              o = n.reject,
              i = P(function () {
                var n = m(e.resolve),
                  i = [],
                  a = 0,
                  c = 1;
                x(t, function (t) {
                  var u = a++,
                    s = !1;
                  i.push(void 0),
                    c++,
                    n.call(e, t).then(function (t) {
                      s || ((s = !0), (i[u] = t), --c || r(i));
                    }, o);
                }),
                  --c || r(i);
              });
            return i.error && o(i.value), n.promise;
          },
          race: function (t) {
            var e = this,
              n = V(e),
              r = n.reject,
              o = P(function () {
                var o = m(e.resolve);
                x(t, function (t) {
                  o.call(e, t).then(n.resolve, r);
                });
              });
            return o.error && r(o.value), n.promise;
          },
        }
      );
  },
  function (t, e, n) {
    'use strict';
    var r = n(4),
      o = n(62);
    r({ target: 'Array', proto: !0, forced: [].forEach != o }, { forEach: o });
  },
  function (t, e, n) {
    var r = n(7),
      o = n(2),
      i = n(32);
    t.exports =
      !r &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(i('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var r = n(0),
      o = n(33),
      i = r['__core-js_shared__'] || o('__core-js_shared__', {});
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(3),
      o = n(92),
      i = n(21),
      a = n(8);
    t.exports = function (t, e) {
      for (var n = o(e), c = a.f, u = i.f, s = 0; s < n.length; s++) {
        var f = n[s];
        r(t, f) || c(t, f, u(e, f));
      }
    };
  },
  function (t, e, n) {
    var r = n(0);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(3),
      o = n(11),
      i = n(93).indexOf,
      a = n(25);
    t.exports = function (t, e) {
      var n,
        c = o(t),
        u = 0,
        s = [];
      for (n in c) !r(a, n) && r(c, n) && s.push(n);
      for (; e.length > u; ) r(c, (n = e[u++])) && (~i(s, n) || s.push(n));
      return s;
    };
  },
  function (t, e, n) {
    var r = n(38),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? o(n + e, 0) : i(n, e);
    };
  },
  function (t, e, n) {
    var r = n(2),
      o = /#|\.prototype\./,
      i = function (t, e) {
        var n = c[a(t)];
        return n == s || (n != u && ('function' == typeof e ? r(e) : !!e));
      },
      a = (i.normalize = function (t) {
        return String(t).replace(o, '.').toLowerCase();
      }),
      c = (i.data = {}),
      u = (i.NATIVE = 'N'),
      s = (i.POLYFILL = 'P');
    t.exports = i;
  },
  function (t, e, n) {
    'use strict';
    var r = n(41).forEach,
      o = n(65),
      i = n(43),
      a = o('forEach'),
      c = i('forEach');
    t.exports =
      a && c
        ? [].forEach
        : function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
  },
  function (t, e, n) {
    var r = n(5),
      o = n(28),
      i = n(1)('species');
    t.exports = function (t, e) {
      var n;
      return (
        o(t) &&
          ('function' != typeof (n = t.constructor) ||
          (n !== Array && !o(n.prototype))
            ? r(n) && null === (n = n[i]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    };
  },
  function (t, e, n) {
    var r = n(42);
    t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
  },
  function (t, e, n) {
    'use strict';
    var r = n(2);
    t.exports = function (t, e) {
      var n = [][t];
      return (
        !!n &&
        r(function () {
          n.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e, n) {
    var r = n(6);
    t.exports = function (t, e, n, o) {
      try {
        return o ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        var i = t.return;
        throw (void 0 !== i && r(i.call(t)), e);
      }
    };
  },
  function (t, e, n) {
    var r = n(1),
      o = n(19),
      i = r('iterator'),
      a = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (o.Array === t || a[i] === t);
    };
  },
  function (t, e, n) {
    var r = n(69),
      o = n(19),
      i = n(1)('iterator');
    t.exports = function (t) {
      if (null != t) return t[i] || t['@@iterator'] || o[r(t)];
    };
  },
  function (t, e, n) {
    var r = n(46),
      o = n(13),
      i = n(1)('toStringTag'),
      a =
        'Arguments' ==
        o(
          (function () {
            return arguments;
          })()
        );
    t.exports = r
      ? o
      : function (t) {
          var e, n, r;
          return void 0 === t
            ? 'Undefined'
            : null === t
            ? 'Null'
            : 'string' ==
              typeof (n = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), i))
            ? n
            : a
            ? o(e)
            : 'Object' == (r = o(e)) && 'function' == typeof e.callee
            ? 'Arguments'
            : r;
        };
  },
  function (t, e, n) {
    var r = n(1)('iterator'),
      o = !1;
    try {
      var i = 0,
        a = {
          next: function () {
            return { done: !!i++ };
          },
          return: function () {
            o = !0;
          },
        };
      (a[r] = function () {
        return this;
      }),
        Array.from(a, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !o) return !1;
      var n = !1;
      try {
        var i = {};
        (i[r] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          t(i);
      } catch (t) {}
      return n;
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(4),
      o = n(96),
      i = n(73),
      a = n(99),
      c = n(29),
      u = n(9),
      s = n(10),
      f = n(1),
      l = n(14),
      p = n(19),
      v = n(72),
      h = v.IteratorPrototype,
      d = v.BUGGY_SAFARI_ITERATORS,
      y = f('iterator'),
      m = function () {
        return this;
      };
    t.exports = function (t, e, n, f, v, g, b) {
      o(n, e, f);
      var S,
        x,
        _,
        w = function (t) {
          if (t === v && C) return C;
          if (!d && t in E) return E[t];
          switch (t) {
            case 'keys':
            case 'values':
            case 'entries':
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        k = e + ' Iterator',
        j = !1,
        E = t.prototype,
        O = E[y] || E['@@iterator'] || (v && E[v]),
        C = (!d && O) || w(v),
        P = ('Array' == e && E.entries) || O;
      if (
        (P &&
          ((S = i(P.call(new t()))),
          h !== Object.prototype &&
            S.next &&
            (l ||
              i(S) === h ||
              (a ? a(S, h) : 'function' != typeof S[y] && u(S, y, m)),
            c(S, k, !0, !0),
            l && (p[k] = m))),
        'values' == v &&
          O &&
          'values' !== O.name &&
          ((j = !0),
          (C = function () {
            return O.call(this);
          })),
        (l && !b) || E[y] === C || u(E, y, C),
        (p[e] = C),
        v)
      )
        if (
          ((x = {
            values: w('values'),
            keys: g ? C : w('keys'),
            entries: w('entries'),
          }),
          b)
        )
          for (_ in x) (d || j || !(_ in E)) && s(E, _, x[_]);
        else r({ target: e, proto: !0, forced: d || j }, x);
      return x;
    };
  },
  function (t, e, n) {
    'use strict';
    var r,
      o,
      i,
      a = n(73),
      c = n(9),
      u = n(3),
      s = n(1),
      f = n(14),
      l = s('iterator'),
      p = !1;
    [].keys &&
      ('next' in (i = [].keys())
        ? (o = a(a(i))) !== Object.prototype && (r = o)
        : (p = !0)),
      null == r && (r = {}),
      f ||
        u(r, l) ||
        c(r, l, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p });
  },
  function (t, e, n) {
    var r = n(3),
      o = n(16),
      i = n(24),
      a = n(97),
      c = i('IE_PROTO'),
      u = Object.prototype;
    t.exports = a
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = o(t)),
            r(t, c)
              ? t[c]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? u
              : null
          );
        };
  },
  function (t, e, n) {
    var r = n(12);
    t.exports = r('document', 'documentElement');
  },
  function (t, e, n) {
    var r = n(0),
      o = n(76),
      i = n(62),
      a = n(9);
    for (var c in o) {
      var u = r[c],
        s = u && u.prototype;
      if (s && s.forEach !== i)
        try {
          a(s, 'forEach', i);
        } catch (t) {
          s.forEach = i;
        }
    }
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(4),
      o = n(2),
      i = n(28),
      a = n(5),
      c = n(16),
      u = n(15),
      s = n(45),
      f = n(63),
      l = n(78),
      p = n(1),
      v = n(51),
      h = p('isConcatSpreadable'),
      d =
        v >= 51 ||
        !o(function () {
          var t = [];
          return (t[h] = !1), t.concat()[0] !== t;
        }),
      y = l('concat'),
      m = function (t) {
        if (!a(t)) return !1;
        var e = t[h];
        return void 0 !== e ? !!e : i(t);
      };
    r(
      { target: 'Array', proto: !0, forced: !d || !y },
      {
        concat: function (t) {
          var e,
            n,
            r,
            o,
            i,
            a = c(this),
            l = f(a, 0),
            p = 0;
          for (e = -1, r = arguments.length; e < r; e++)
            if (m((i = -1 === e ? a : arguments[e]))) {
              if (p + (o = u(i.length)) > 9007199254740991)
                throw TypeError('Maximum allowed index exceeded');
              for (n = 0; n < o; n++, p++) n in i && s(l, p, i[n]);
            } else {
              if (p >= 9007199254740991)
                throw TypeError('Maximum allowed index exceeded');
              s(l, p++, i);
            }
          return (l.length = p), l;
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(2),
      o = n(1),
      i = n(51),
      a = o('species');
    t.exports = function (t) {
      return (
        i >= 51 ||
        !r(function () {
          var e = [];
          return (
            ((e.constructor = {})[a] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  function (t, e, n) {
    var r = n(12);
    t.exports = r('navigator', 'userAgent') || '';
  },
  function (t, e, n) {
    var r = n(0);
    t.exports = r.Promise;
  },
  function (t, e, n) {
    var r = n(6),
      o = n(27),
      i = n(1)('species');
    t.exports = function (t, e) {
      var n,
        a = r(t).constructor;
      return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
    };
  },
  function (t, e, n) {
    var r,
      o,
      i,
      a = n(0),
      c = n(2),
      u = n(13),
      s = n(26),
      f = n(74),
      l = n(32),
      p = n(83),
      v = a.location,
      h = a.setImmediate,
      d = a.clearImmediate,
      y = a.process,
      m = a.MessageChannel,
      g = a.Dispatch,
      b = 0,
      S = {},
      x = function (t) {
        if (S.hasOwnProperty(t)) {
          var e = S[t];
          delete S[t], e();
        }
      },
      _ = function (t) {
        return function () {
          x(t);
        };
      },
      w = function (t) {
        x(t.data);
      },
      k = function (t) {
        a.postMessage(t + '', v.protocol + '//' + v.host);
      };
    (h && d) ||
      ((h = function (t) {
        for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
        return (
          (S[++b] = function () {
            ('function' == typeof t ? t : Function(t)).apply(void 0, e);
          }),
          r(b),
          b
        );
      }),
      (d = function (t) {
        delete S[t];
      }),
      'process' == u(y)
        ? (r = function (t) {
            y.nextTick(_(t));
          })
        : g && g.now
        ? (r = function (t) {
            g.now(_(t));
          })
        : m && !p
        ? ((i = (o = new m()).port2),
          (o.port1.onmessage = w),
          (r = s(i.postMessage, i, 1)))
        : !a.addEventListener ||
          'function' != typeof postMessage ||
          a.importScripts ||
          c(k) ||
          'file:' === v.protocol
        ? (r =
            'onreadystatechange' in l('script')
              ? function (t) {
                  f.appendChild(l('script')).onreadystatechange = function () {
                    f.removeChild(this), x(t);
                  };
                }
              : function (t) {
                  setTimeout(_(t), 0);
                })
        : ((r = k), a.addEventListener('message', w, !1))),
      (t.exports = { set: h, clear: d });
  },
  function (t, e, n) {
    var r = n(79);
    t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
  },
  function (t, e, n) {
    var r = n(6),
      o = n(5),
      i = n(85);
    t.exports = function (t, e) {
      if ((r(t), o(e) && e.constructor === t)) return e;
      var n = i.f(t);
      return (0, n.resolve)(e), n.promise;
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(27),
      o = function (t) {
        var e, n;
        (this.promise = new t(function (t, r) {
          if (void 0 !== e || void 0 !== n)
            throw TypeError('Bad Promise constructor');
          (e = t), (n = r);
        })),
          (this.resolve = r(e)),
          (this.reject = r(n));
      };
    t.exports.f = function (t) {
      return new o(t);
    };
  },
  function (t, e, n) {
    var r = n(1);
    e.f = r;
  },
  function (t, e, n) {
    var r = n(58),
      o = n(3),
      i = n(86),
      a = n(8).f;
    t.exports = function (t) {
      var e = r.Symbol || (r.Symbol = {});
      o(e, t) || a(e, t, { value: i.f(t) });
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(11),
      o = n(116),
      i = n(19),
      a = n(18),
      c = n(71),
      u = a.set,
      s = a.getterFor('Array Iterator');
    (t.exports = c(
      Array,
      'Array',
      function (t, e) {
        u(this, { type: 'Array Iterator', target: r(t), index: 0, kind: e });
      },
      function () {
        var t = s(this),
          e = t.target,
          n = t.kind,
          r = t.index++;
        return !e || r >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : 'keys' == n
          ? { value: r, done: !1 }
          : 'values' == n
          ? { value: e[r], done: !1 }
          : { value: [r, e[r]], done: !1 };
      },
      'values'
    )),
      (i.Arguments = i.Array),
      o('keys'),
      o('values'),
      o('entries');
  },
  function (t, e, n) {
    'use strict';
    var r = n(4),
      o = n(14),
      i = n(80),
      a = n(2),
      c = n(12),
      u = n(81),
      s = n(84),
      f = n(10);
    r(
      {
        target: 'Promise',
        proto: !0,
        real: !0,
        forced:
          !!i &&
          a(function () {
            i.prototype.finally.call({ then: function () {} }, function () {});
          }),
      },
      {
        finally: function (t) {
          var e = u(this, c('Promise')),
            n = 'function' == typeof t;
          return this.then(
            n
              ? function (n) {
                  return s(e, t()).then(function () {
                    return n;
                  });
                }
              : t,
            n
              ? function (n) {
                  return s(e, t()).then(function () {
                    throw n;
                  });
                }
              : t
          );
        },
      }
    ),
      o ||
        'function' != typeof i ||
        i.prototype.finally ||
        f(i.prototype, 'finally', c('Promise').prototype.finally);
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (t) {
      'object' == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    var r = n(0),
      o = n(34),
      i = r.WeakMap;
    t.exports = 'function' == typeof i && /native code/.test(o(i));
  },
  function (t, e, n) {
    var r = n(12),
      o = n(37),
      i = n(40),
      a = n(6);
    t.exports =
      r('Reflect', 'ownKeys') ||
      function (t) {
        var e = o.f(a(t)),
          n = i.f;
        return n ? e.concat(n(t)) : e;
      };
  },
  function (t, e, n) {
    var r = n(11),
      o = n(15),
      i = n(60),
      a = function (t) {
        return function (e, n, a) {
          var c,
            u = r(e),
            s = o(u.length),
            f = i(a, s);
          if (t && n != n) {
            for (; s > f; ) if ((c = u[f++]) != c) return !0;
          } else
            for (; s > f; f++)
              if ((t || f in u) && u[f] === n) return t || f || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function (t, e, n) {
    'use strict';
    var r = n(26),
      o = n(16),
      i = n(66),
      a = n(67),
      c = n(15),
      u = n(45),
      s = n(68);
    t.exports = function (t) {
      var e,
        n,
        f,
        l,
        p,
        v,
        h = o(t),
        d = 'function' == typeof this ? this : Array,
        y = arguments.length,
        m = y > 1 ? arguments[1] : void 0,
        g = void 0 !== m,
        b = s(h),
        S = 0;
      if (
        (g && (m = r(m, y > 2 ? arguments[2] : void 0, 2)),
        null == b || (d == Array && a(b)))
      )
        for (n = new d((e = c(h.length))); e > S; S++)
          (v = g ? m(h[S], S) : h[S]), u(n, S, v);
      else
        for (p = (l = b.call(h)).next, n = new d(); !(f = p.call(l)).done; S++)
          (v = g ? i(l, m, [f.value, S], !0) : f.value), u(n, S, v);
      return (n.length = S), n;
    };
  },
  function (t, e, n) {
    var r = n(38),
      o = n(22),
      i = function (t) {
        return function (e, n) {
          var i,
            a,
            c = String(o(e)),
            u = r(n),
            s = c.length;
          return u < 0 || u >= s
            ? t
              ? ''
              : void 0
            : (i = c.charCodeAt(u)) < 55296 ||
              i > 56319 ||
              u + 1 === s ||
              (a = c.charCodeAt(u + 1)) < 56320 ||
              a > 57343
            ? t
              ? c.charAt(u)
              : i
            : t
            ? c.slice(u, u + 2)
            : a - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: i(!1), charAt: i(!0) };
  },
  function (t, e, n) {
    'use strict';
    var r = n(72).IteratorPrototype,
      o = n(48),
      i = n(17),
      a = n(29),
      c = n(19),
      u = function () {
        return this;
      };
    t.exports = function (t, e, n) {
      var s = e + ' Iterator';
      return (
        (t.prototype = o(r, { next: i(1, n) })), a(t, s, !1, !0), (c[s] = u), t
      );
    };
  },
  function (t, e, n) {
    var r = n(2);
    t.exports = !r(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, n) {
    var r = n(7),
      o = n(8),
      i = n(6),
      a = n(49);
    t.exports = r
      ? Object.defineProperties
      : function (t, e) {
          i(t);
          for (var n, r = a(e), c = r.length, u = 0; c > u; )
            o.f(t, (n = r[u++]), e[n]);
          return t;
        };
  },
  function (t, e, n) {
    var r = n(6),
      o = n(100);
    t.exports =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__'
              ).set).call(n, []),
                (e = n instanceof Array);
            } catch (t) {}
            return function (n, i) {
              return r(n), o(i), e ? t.call(n, i) : (n.__proto__ = i), n;
            };
          })()
        : void 0);
  },
  function (t, e, n) {
    var r = n(5);
    t.exports = function (t) {
      if (!r(t) && null !== t)
        throw TypeError("Can't set " + String(t) + ' as a prototype');
      return t;
    };
  },
  function (t, e, n) {
    var r = n(22),
      o = /"/g;
    t.exports = function (t, e, n, i) {
      var a = String(r(t)),
        c = '<' + e;
      return (
        '' !== n &&
          (c += ' ' + n + '="' + String(i).replace(o, '&quot;') + '"'),
        c + '>' + a + '</' + e + '>'
      );
    };
  },
  function (t, e, n) {
    var r = n(2);
    t.exports = function (t) {
      return r(function () {
        var e = ''[t]('"');
        return e !== e.toLowerCase() || e.split('"').length > 3;
      });
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(46),
      o = n(69);
    t.exports = r
      ? {}.toString
      : function () {
          return '[object ' + o(this) + ']';
        };
  },
  function (t, e, n) {
    var r = n(10);
    t.exports = function (t, e, n) {
      for (var o in e) r(t, o, e[o], n);
      return t;
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(12),
      o = n(8),
      i = n(1),
      a = n(7),
      c = i('species');
    t.exports = function (t) {
      var e = r(t),
        n = o.f;
      a &&
        e &&
        !e[c] &&
        n(e, c, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      if (!(t instanceof e))
        throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
      return t;
    };
  },
  function (t, e, n) {
    var r = n(6),
      o = n(67),
      i = n(15),
      a = n(26),
      c = n(68),
      u = n(66),
      s = function (t, e) {
        (this.stopped = t), (this.result = e);
      };
    (t.exports = function (t, e, n, f, l) {
      var p,
        v,
        h,
        d,
        y,
        m,
        g,
        b = a(e, n, f ? 2 : 1);
      if (l) p = t;
      else {
        if ('function' != typeof (v = c(t)))
          throw TypeError('Target is not iterable');
        if (o(v)) {
          for (h = 0, d = i(t.length); d > h; h++)
            if ((y = f ? b(r((g = t[h]))[0], g[1]) : b(t[h])) && y instanceof s)
              return y;
          return new s(!1);
        }
        p = v.call(t);
      }
      for (m = p.next; !(g = m.call(p)).done; )
        if ('object' == typeof (y = u(p, b, g.value, f)) && y && y instanceof s)
          return y;
      return new s(!1);
    }).stop = function (t) {
      return new s(!0, t);
    };
  },
  function (t, e, n) {
    var r,
      o,
      i,
      a,
      c,
      u,
      s,
      f,
      l = n(0),
      p = n(21).f,
      v = n(13),
      h = n(82).set,
      d = n(83),
      y = l.MutationObserver || l.WebKitMutationObserver,
      m = l.process,
      g = l.Promise,
      b = 'process' == v(m),
      S = p(l, 'queueMicrotask'),
      x = S && S.value;
    x ||
      ((r = function () {
        var t, e;
        for (b && (t = m.domain) && t.exit(); o; ) {
          (e = o.fn), (o = o.next);
          try {
            e();
          } catch (t) {
            throw (o ? a() : (i = void 0), t);
          }
        }
        (i = void 0), t && t.enter();
      }),
      b
        ? (a = function () {
            m.nextTick(r);
          })
        : y && !d
        ? ((c = !0),
          (u = document.createTextNode('')),
          new y(r).observe(u, { characterData: !0 }),
          (a = function () {
            u.data = c = !c;
          }))
        : g && g.resolve
        ? ((s = g.resolve(void 0)),
          (f = s.then),
          (a = function () {
            f.call(s, r);
          }))
        : (a = function () {
            h.call(l, r);
          })),
      (t.exports =
        x ||
        function (t) {
          var e = { fn: t, next: void 0 };
          i && (i.next = e), o || ((o = e), a()), (i = e);
        });
  },
  function (t, e, n) {
    var r = n(0);
    t.exports = function (t, e) {
      var n = r.console;
      n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (t) {
        return { error: !0, value: t };
      }
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(4),
      o = n(41).some,
      i = n(65),
      a = n(43),
      c = i('some'),
      u = a('some');
    r(
      { target: 'Array', proto: !0, forced: !c || !u },
      {
        some: function (t) {
          return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(4),
      o = n(0),
      i = n(12),
      a = n(14),
      c = n(7),
      u = n(42),
      s = n(64),
      f = n(2),
      l = n(3),
      p = n(28),
      v = n(5),
      h = n(6),
      d = n(16),
      y = n(11),
      m = n(23),
      g = n(17),
      b = n(48),
      S = n(49),
      x = n(37),
      _ = n(113),
      w = n(40),
      k = n(21),
      j = n(8),
      E = n(30),
      O = n(9),
      C = n(10),
      P = n(35),
      L = n(24),
      T = n(25),
      A = n(36),
      I = n(1),
      D = n(86),
      q = n(87),
      B = n(29),
      M = n(18),
      R = n(41).forEach,
      U = L('hidden'),
      F = I('toPrimitive'),
      N = M.set,
      G = M.getterFor('Symbol'),
      H = Object.prototype,
      V = o.Symbol,
      z = i('JSON', 'stringify'),
      W = k.f,
      J = j.f,
      Y = _.f,
      $ = E.f,
      K = P('symbols'),
      Q = P('op-symbols'),
      X = P('string-to-symbol-registry'),
      Z = P('symbol-to-string-registry'),
      tt = P('wks'),
      et = o.QObject,
      nt = !et || !et.prototype || !et.prototype.findChild,
      rt =
        c &&
        f(function () {
          return (
            7 !=
            b(
              J({}, 'a', {
                get: function () {
                  return J(this, 'a', { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (t, e, n) {
              var r = W(H, e);
              r && delete H[e], J(t, e, n), r && t !== H && J(H, e, r);
            }
          : J,
      ot = function (t, e) {
        var n = (K[t] = b(V.prototype));
        return (
          N(n, { type: 'Symbol', tag: t, description: e }),
          c || (n.description = e),
          n
        );
      },
      it = s
        ? function (t) {
            return 'symbol' == typeof t;
          }
        : function (t) {
            return Object(t) instanceof V;
          },
      at = function (t, e, n) {
        t === H && at(Q, e, n), h(t);
        var r = m(e, !0);
        return (
          h(n),
          l(K, r)
            ? (n.enumerable
                ? (l(t, U) && t[U][r] && (t[U][r] = !1),
                  (n = b(n, { enumerable: g(0, !1) })))
                : (l(t, U) || J(t, U, g(1, {})), (t[U][r] = !0)),
              rt(t, r, n))
            : J(t, r, n)
        );
      },
      ct = function (t, e) {
        h(t);
        var n = y(e),
          r = S(n).concat(lt(n));
        return (
          R(r, function (e) {
            (c && !ut.call(n, e)) || at(t, e, n[e]);
          }),
          t
        );
      },
      ut = function (t) {
        var e = m(t, !0),
          n = $.call(this, e);
        return (
          !(this === H && l(K, e) && !l(Q, e)) &&
          (!(n || !l(this, e) || !l(K, e) || (l(this, U) && this[U][e])) || n)
        );
      },
      st = function (t, e) {
        var n = y(t),
          r = m(e, !0);
        if (n !== H || !l(K, r) || l(Q, r)) {
          var o = W(n, r);
          return (
            !o || !l(K, r) || (l(n, U) && n[U][r]) || (o.enumerable = !0), o
          );
        }
      },
      ft = function (t) {
        var e = Y(y(t)),
          n = [];
        return (
          R(e, function (t) {
            l(K, t) || l(T, t) || n.push(t);
          }),
          n
        );
      },
      lt = function (t) {
        var e = t === H,
          n = Y(e ? Q : y(t)),
          r = [];
        return (
          R(n, function (t) {
            !l(K, t) || (e && !l(H, t)) || r.push(K[t]);
          }),
          r
        );
      };
    (u ||
      (C(
        (V = function () {
          if (this instanceof V) throw TypeError('Symbol is not a constructor');
          var t =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            e = A(t),
            n = function (t) {
              this === H && n.call(Q, t),
                l(this, U) && l(this[U], e) && (this[U][e] = !1),
                rt(this, e, g(1, t));
            };
          return c && nt && rt(H, e, { configurable: !0, set: n }), ot(e, t);
        }).prototype,
        'toString',
        function () {
          return G(this).tag;
        }
      ),
      C(V, 'withoutSetter', function (t) {
        return ot(A(t), t);
      }),
      (E.f = ut),
      (j.f = at),
      (k.f = st),
      (x.f = _.f = ft),
      (w.f = lt),
      (D.f = function (t) {
        return ot(I(t), t);
      }),
      c &&
        (J(V.prototype, 'description', {
          configurable: !0,
          get: function () {
            return G(this).description;
          },
        }),
        a || C(H, 'propertyIsEnumerable', ut, { unsafe: !0 }))),
    r({ global: !0, wrap: !0, forced: !u, sham: !u }, { Symbol: V }),
    R(S(tt), function (t) {
      q(t);
    }),
    r(
      { target: 'Symbol', stat: !0, forced: !u },
      {
        for: function (t) {
          var e = String(t);
          if (l(X, e)) return X[e];
          var n = V(e);
          return (X[e] = n), (Z[n] = e), n;
        },
        keyFor: function (t) {
          if (!it(t)) throw TypeError(t + ' is not a symbol');
          if (l(Z, t)) return Z[t];
        },
        useSetter: function () {
          nt = !0;
        },
        useSimple: function () {
          nt = !1;
        },
      }
    ),
    r(
      { target: 'Object', stat: !0, forced: !u, sham: !c },
      {
        create: function (t, e) {
          return void 0 === e ? b(t) : ct(b(t), e);
        },
        defineProperty: at,
        defineProperties: ct,
        getOwnPropertyDescriptor: st,
      }
    ),
    r(
      { target: 'Object', stat: !0, forced: !u },
      { getOwnPropertyNames: ft, getOwnPropertySymbols: lt }
    ),
    r(
      {
        target: 'Object',
        stat: !0,
        forced: f(function () {
          w.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (t) {
          return w.f(d(t));
        },
      }
    ),
    z) &&
      r(
        {
          target: 'JSON',
          stat: !0,
          forced:
            !u ||
            f(function () {
              var t = V();
              return (
                '[null]' != z([t]) ||
                '{}' != z({ a: t }) ||
                '{}' != z(Object(t))
              );
            }),
        },
        {
          stringify: function (t, e, n) {
            for (var r, o = [t], i = 1; arguments.length > i; )
              o.push(arguments[i++]);
            if (((r = e), (v(e) || void 0 !== t) && !it(t)))
              return (
                p(e) ||
                  (e = function (t, e) {
                    if (
                      ('function' == typeof r && (e = r.call(this, t, e)),
                      !it(e))
                    )
                      return e;
                  }),
                (o[1] = e),
                z.apply(null, o)
              );
          },
        }
      );
    V.prototype[F] || O(V.prototype, F, V.prototype.valueOf),
      B(V, 'Symbol'),
      (T[U] = !0);
  },
  function (t, e, n) {
    var r = n(11),
      o = n(37).f,
      i = {}.toString,
      a =
        'object' == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return a && '[object Window]' == i.call(t)
        ? (function (t) {
            try {
              return o(t);
            } catch (t) {
              return a.slice();
            }
          })(t)
        : o(r(t));
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(4),
      o = n(7),
      i = n(0),
      a = n(3),
      c = n(5),
      u = n(8).f,
      s = n(57),
      f = i.Symbol;
    if (
      o &&
      'function' == typeof f &&
      (!('description' in f.prototype) || void 0 !== f().description)
    ) {
      var l = {},
        p = function () {
          var t =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : String(arguments[0]),
            e = this instanceof p ? new f(t) : void 0 === t ? f() : f(t);
          return '' === t && (l[e] = !0), e;
        };
      s(p, f);
      var v = (p.prototype = f.prototype);
      v.constructor = p;
      var h = v.toString,
        d = 'Symbol(test)' == String(f('test')),
        y = /^Symbol\((.*)\)[^)]+$/;
      u(v, 'description', {
        configurable: !0,
        get: function () {
          var t = c(this) ? this.valueOf() : this,
            e = h.call(t);
          if (a(l, t)) return '';
          var n = d ? e.slice(7, -1) : e.replace(y, '$1');
          return '' === n ? void 0 : n;
        },
      }),
        r({ global: !0, forced: !0 }, { Symbol: p });
    }
  },
  function (t, e, n) {
    n(87)('iterator');
  },
  function (t, e, n) {
    var r = n(1),
      o = n(48),
      i = n(8),
      a = r('unscopables'),
      c = Array.prototype;
    null == c[a] && i.f(c, a, { configurable: !0, value: o(null) }),
      (t.exports = function (t) {
        c[a][t] = !0;
      });
  },
  function (t, e, n) {
    'use strict';
    var r = n(4),
      o = n(5),
      i = n(28),
      a = n(60),
      c = n(15),
      u = n(11),
      s = n(45),
      f = n(1),
      l = n(78),
      p = n(43),
      v = l('slice'),
      h = p('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
      d = f('species'),
      y = [].slice,
      m = Math.max;
    r(
      { target: 'Array', proto: !0, forced: !v || !h },
      {
        slice: function (t, e) {
          var n,
            r,
            f,
            l = u(this),
            p = c(l.length),
            v = a(t, p),
            h = a(void 0 === e ? p : e, p);
          if (
            i(l) &&
            ('function' != typeof (n = l.constructor) ||
            (n !== Array && !i(n.prototype))
              ? o(n) && null === (n = n[d]) && (n = void 0)
              : (n = void 0),
            n === Array || void 0 === n)
          )
            return y.call(l, v, h);
          for (
            r = new (void 0 === n ? Array : n)(m(h - v, 0)), f = 0;
            v < h;
            v++, f++
          )
            v in l && s(r, f, l[v]);
          return (r.length = f), r;
        },
      }
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(10),
      o = n(6),
      i = n(2),
      a = n(119),
      c = RegExp.prototype,
      u = c.toString,
      s = i(function () {
        return '/a/b' != u.call({ source: 'a', flags: 'b' });
      }),
      f = 'toString' != u.name;
    (s || f) &&
      r(
        RegExp.prototype,
        'toString',
        function () {
          var t = o(this),
            e = String(t.source),
            n = t.flags;
          return (
            '/' +
            e +
            '/' +
            String(
              void 0 === n && t instanceof RegExp && !('flags' in c)
                ? a.call(t)
                : n
            )
          );
        },
        { unsafe: !0 }
      );
  },
  function (t, e, n) {
    'use strict';
    var r = n(6);
    t.exports = function () {
      var t = r(this),
        e = '';
      return (
        t.global && (e += 'g'),
        t.ignoreCase && (e += 'i'),
        t.multiline && (e += 'm'),
        t.dotAll && (e += 's'),
        t.unicode && (e += 'u'),
        t.sticky && (e += 'y'),
        e
      );
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(76),
      i = n(88),
      a = n(9),
      c = n(1),
      u = c('iterator'),
      s = c('toStringTag'),
      f = i.values;
    for (var l in o) {
      var p = r[l],
        v = p && p.prototype;
      if (v) {
        if (v[u] !== f)
          try {
            a(v, u, f);
          } catch (t) {
            v[u] = f;
          }
        if ((v[s] || a(v, s, l), o[l]))
          for (var h in i)
            if (v[h] !== i[h])
              try {
                a(v, h, i[h]);
              } catch (t) {
                v[h] = i[h];
              }
      }
    }
  },
  function (t, e, n) {
    var r = n(4),
      o = n(122);
    r(
      { target: 'Object', stat: !0, forced: Object.assign !== o },
      { assign: o }
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(7),
      o = n(2),
      i = n(49),
      a = n(40),
      c = n(30),
      u = n(16),
      s = n(31),
      f = Object.assign,
      l = Object.defineProperty;
    t.exports =
      !f ||
      o(function () {
        if (
          r &&
          1 !==
            f(
              { b: 1 },
              f(
                l({}, 'a', {
                  enumerable: !0,
                  get: function () {
                    l(this, 'b', { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          n = Symbol();
        return (
          (t[n] = 7),
          'abcdefghijklmnopqrst'.split('').forEach(function (t) {
            e[t] = t;
          }),
          7 != f({}, t)[n] || 'abcdefghijklmnopqrst' != i(f({}, e)).join('')
        );
      })
        ? function (t, e) {
            for (
              var n = u(t), o = arguments.length, f = 1, l = a.f, p = c.f;
              o > f;

            )
              for (
                var v,
                  h = s(arguments[f++]),
                  d = l ? i(h).concat(l(h)) : i(h),
                  y = d.length,
                  m = 0;
                y > m;

              )
                (v = d[m++]), (r && !p.call(h, v)) || (n[v] = h[v]);
            return n;
          }
        : f;
  },
  function (t, e, n) {},
  function (t, e, n) {
    'use strict';
    n.r(e);
    n(54), n(44), n(20), n(47), n(50), n(75), n(77), n(52), n(53);
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var o = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.options = e);
      }
      var e, n, o;
      return (
        (e = t),
        (n = [
          {
            key: 'resParse',
            value: function (t) {
              return t.ok ? t.json() : Promise.reject(new Error(t.status));
            },
          },
          {
            key: 'getInitialCards',
            value: function () {
              var t = this;
              return fetch(''.concat(this.options.baseURL, '/cards'), {
                method: 'GET',
                headers: this.options.headers,
              }).then(function (e) {
                return t.resParse(e);
              });
            },
          },
          {
            key: 'getUserData',
            value: function () {
              var t = this;
              return fetch(''.concat(this.options.baseURL, '/users/me'), {
                method: 'GET',
                headers: this.options.headers,
              })
                .then(function (e) {
                  return t.resParse(e);
                })
                .catch(function (t) {
                  return Promise.reject(new Error(t));
                });
            },
          },
          {
            key: 'patchUserData',
            value: function (t) {
              var e = this;
              return fetch(''.concat(this.options.baseURL, '/users/me'), {
                method: 'PATCH',
                headers: this.options.headers,
                body: JSON.stringify({ name: t.name, about: t.job }),
              })
                .then(function (t) {
                  return e.resParse(t);
                })
                .catch(function (t) {
                  return Promise.reject(new Error(t));
                });
            },
          },
          {
            key: 'postCardToServer',
            value: function (t) {
              var e = this;
              return fetch(''.concat(this.options.baseURL, '/cards'), {
                method: 'POST',
                headers: this.options.headers,
                body: JSON.stringify({ name: t.name, link: t.link }),
              })
                .then(function (t) {
                  return e.resParse(t);
                })
                .catch(function (t) {
                  return Promise.reject(new Error(t));
                });
            },
          },
          {
            key: 'deleteCard',
            value: function (t) {
              var e = this;
              return fetch(
                ''.concat(this.options.baseURL, '/cards/').concat(t),
                { method: 'DELETE', headers: this.options.headers }
              )
                .then(function (t) {
                  return e.resParse(t);
                })
                .catch(function (t) {
                  return Promise.reject(new Error(t));
                });
            },
          },
          {
            key: 'likeCard',
            value: function (t) {
              var e = this;
              return fetch(
                ''.concat(this.options.baseURL, '/cards/like/').concat(t),
                { method: 'PUT', headers: this.options.headers }
              )
                .then(function (t) {
                  return e.resParse(t);
                })
                .catch(function (t) {
                  return Promise.reject(new Error(t));
                });
            },
          },
          {
            key: 'dislikeCard',
            value: function (t) {
              var e = this;
              return fetch(
                ''.concat(this.options.baseURL, '/cards/like/').concat(t),
                { method: 'DELETE', headers: this.options.headers }
              )
                .then(function (t) {
                  return e.resParse(t);
                })
                .catch(function (t) {
                  return Promise.reject(new Error(t));
                });
            },
          },
          {
            key: 'changeAvatar',
            value: function (t) {
              var e = this;
              return fetch(
                ''.concat(this.options.baseURL, '/users/me/avatar'),
                {
                  method: 'PATCH',
                  headers: this.options.headers,
                  body: JSON.stringify({ avatar: t }),
                }
              )
                .then(function (t) {
                  return e.resParse(t);
                })
                .catch(function (t) {
                  return Promise.reject(new Error(t));
                });
            },
          },
        ]) && r(e.prototype, n),
        o && r(e, o),
        t
      );
    })();
    n(111);
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var a = (function () {
      function t(e) {
        var n = e.cardData,
          r = e.openImagePopup,
          o = e.api,
          i = e.userData;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.api = o),
          (this.cardData = n),
          (this.openImageCallback = r),
          (this.card = document.createElement('div')),
          (this.setListeners = this.setListeners.bind(this)),
          (this.userData = i),
          (this.myID = this.userData.id);
      }
      var e, n, r;
      return (
        (e = t),
        (n = [
          {
            key: 'like',
            value: function () {
              var t = this;
              this.card
                .querySelector('.place-card__like-icon')
                .classList.contains('place-card__like-icon_liked')
                ? (this.card
                    .querySelector('.place-card__like-icon')
                    .classList.remove('place-card__like-icon_liked'),
                  this.api
                    .dislikeCard(this.cardData._id)
                    .then(function (e) {
                      t.card.querySelector(
                        '.place-card__like-amount'
                      ).textContent = e.likes.length;
                    })
                    .catch(function (t) {
                      return console.log('Не могу удалить лайк  => '.concat(t));
                    }))
                : (this.card
                    .querySelector('.place-card__like-icon')
                    .classList.add('place-card__like-icon_liked'),
                  this.api
                    .likeCard(this.cardData._id)
                    .then(function (e) {
                      t.card.querySelector(
                        '.place-card__like-amount'
                      ).textContent = e.likes.length;
                    })
                    .catch(function (t) {
                      return console.log(
                        'Не могу поставить лайк => '.concat(t)
                      );
                    }));
            },
          },
          {
            key: 'delete',
            value: function () {
              var t = this;
              confirm('Вы уверены, что хотите удалить карточку?') &&
                this.api
                  .deleteCard(this.cardData._id)
                  .then(function () {
                    t.card.removeEventListener('click', t.setListeners),
                      t.card.remove();
                  })
                  .catch(function (t) {
                    return console.log(
                      'Не могу удалить карточку  => '.concat(t)
                    );
                  });
            },
          },
          {
            key: 'openImage',
            value: function () {
              this.openImageCallback(this.cardData.link);
            },
          },
          {
            key: 'create',
            value: function () {
              var t = this;
              this.card.classList.add('place-card'),
                this.card.insertAdjacentHTML(
                  'beforeend',
                  '\n            <div class="place-card__image">\n                <button class="place-card__delete-icon"></button>\n            </div>\n            <div class="place-card__description">\n                <h3 class="place-card__name"></h3>\n                <div class="place-card__like-wrapper">\n                  <button class="place-card__like-icon"></button>\n                  <span class="place-card__like-amount"></span>\n                </div>\n            </div>'
                ),
                (this.card.querySelector(
                  '.place-card__name'
                ).textContent = this.cardData.name),
                (this.card.querySelector(
                  '.place-card__image'
                ).style.backgroundImage = 'url('.concat(
                  this.cardData.link,
                  ')'
                )),
                (this.card.querySelector(
                  '.place-card__like-amount'
                ).textContent = this.cardData.likes.length);
              var e = this.cardData.owner._id;
              return (
                this.myID === e &&
                  (this.card.querySelector(
                    '.place-card__delete-icon'
                  ).style.display = 'block'),
                this.cardData.likes.some(function (e) {
                  return e._id === t.myID;
                }) &&
                  this.card
                    .querySelector('.place-card__like-icon')
                    .classList.add('place-card__like-icon_liked'),
                this.card.addEventListener('click', this.setListeners),
                this.card
              );
            },
          },
          {
            key: 'setListeners',
            value: function (t) {
              t.target.classList.contains('place-card__like-icon') &&
                this.like(),
                t.target.classList.contains('place-card__delete-icon') &&
                  this.delete(),
                t.target.classList.contains('place-card__image') &&
                  this.openImage();
            },
          },
        ]) && i(e.prototype, n),
        r && i(e, r),
        t
      );
    })();
    n(112), n(114), n(115), n(88), n(117), n(89), n(118), n(120);
    function c(t) {
      if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
        if (
          Array.isArray(t) ||
          (t = (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return u(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return u(t, e);
          })(t))
        ) {
          var e = 0,
            n = function () {};
          return {
            s: n,
            n: function () {
              return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] };
            },
            e: function (t) {
              throw t;
            },
            f: n,
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      var r,
        o,
        i = !0,
        a = !1;
      return {
        s: function () {
          r = t[Symbol.iterator]();
        },
        n: function () {
          var t = r.next();
          return (i = t.done), t;
        },
        e: function (t) {
          (a = !0), (o = t);
        },
        f: function () {
          try {
            i || null == r.return || r.return();
          } finally {
            if (a) throw o;
          }
        },
      };
    }
    function u(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function s(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var f = (function () {
      function t(e) {
        var n = e.cardsContainer,
          r = e.createCard,
          o = e.api,
          i = e.addCardPopup,
          a = e.submitCardButton,
          c = e.saveButtonState;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.container = n),
          (this.createCard = r),
          (this.api = o),
          (this.addCardPopup = i),
          (this.submitCardButton = a),
          (this.submitCardButtonText = this.submitCardButton.textContent),
          (this.saveButtonState = c);
      }
      var e, n, r;
      return (
        (e = t),
        (n = [
          {
            key: 'addCard',
            value: function (t) {
              var e = this.createCard(t);
              this.container.append(e);
            },
          },
          {
            key: 'render',
            value: function () {
              var t = this;
              this.api
                .getInitialCards()
                .then(function (e) {
                  var n,
                    r = c(e);
                  try {
                    for (r.s(); !(n = r.n()).done; ) {
                      var o = n.value;
                      t.addCard(o);
                    }
                  } catch (t) {
                    r.e(t);
                  } finally {
                    r.f();
                  }
                })
                .catch(function (t) {
                  return console.warn('Не могу загрузить карточки '.concat(t));
                });
            },
          },
          {
            key: 'postCard',
            value: function (t) {
              var e = this;
              this.saveButtonState(
                !0,
                this.submitCardButton,
                this.submitCardButtonText
              ),
                this.api
                  .postCardToServer(t)
                  .then(function (t) {
                    e.addCard(t);
                  })
                  .then(function () {
                    e.addCardPopup.closeHandling();
                  })
                  .catch(function (t) {
                    return console.warn(
                      'Не могу загрузить карточку '.concat(t)
                    );
                  })
                  .finally(function () {
                    return e.saveButtonState(
                      !1,
                      e.submitCardButton,
                      e.submitCardButtonText
                    );
                  });
            },
          },
        ]) && s(e.prototype, n),
        r && s(e, r),
        t
      );
    })();
    function l(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var p = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.formElement = e),
          (this.setEventListeners = this.setEventListeners.bind(this)),
          this.formElement.addEventListener('input', this.setEventListeners);
      }
      var e, n, r;
      return (
        (e = t),
        (n = [
          {
            key: 'checkInputValidity',
            value: function (t) {
              var e = document.querySelector('#error-'.concat(t.id)),
                n = {
                  url: 'Здесь должна быть ссылка',
                  email: 'Здесь должна быть почта',
                  outOfRange: 'Должно быть от '
                    .concat(t.getAttribute('minlength'), ' до ')
                    .concat(t.getAttribute('maxlength'), ' символов: вы ввели ')
                    .concat(t.value.length),
                  required: 'Это обязательное поле',
                };
              return t.validity.typeMismatch
                ? ('url' === t.type && (e.textContent = n.url),
                  'email' === t.type && (e.textContent = n.email),
                  this.activateError(e),
                  !1)
                : t.validity.tooShort || t.validity.tooLong
                ? ((e.textContent = n.outOfRange), this.activateError(e), !1)
                : t.validity.valueMissing
                ? ((e.textContent = n.required), this.activateError(e), !1)
                : (this.resetError(e), !0);
            },
          },
          {
            key: 'activateError',
            value: function (t) {
              t.classList.add('popup__error-message');
            },
          },
          {
            key: 'resetError',
            value: function (t) {
              t.classList.remove('popup__error-message'), (t.textContent = '');
            },
          },
          {
            key: 'reset',
            value: function () {
              this.formElement.reset();
            },
          },
          {
            key: 'setSubmitButtonState',
            value: function (t) {
              var e = this.formElement.querySelector('.popup__button');
              t
                ? (e.classList.add('popup__button_is_active'),
                  e.removeAttribute('disabled'))
                : (e.classList.remove('popup__button_is_active'),
                  e.setAttribute('disabled', ''));
            },
          },
          {
            key: 'setEventListeners',
            value: function () {
              var t = this,
                e = Array.from(this.formElement.elements),
                n = !0;
              e.forEach(function (e) {
                e.classList.contains('button') ||
                  t.checkInputValidity(e) ||
                  (n = !1);
              }),
                this.setSubmitButtonState(n);
            },
          },
        ]) && l(e.prototype, n),
        r && l(e, r),
        t
      );
    })();
    function v(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function h(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var d = (function () {
      function t(e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : function () {};
        v(this, t),
          (this.popup = e),
          (this.closeButton = this.popup.querySelector('.popup__close')),
          (this.resetForm = n),
          (this.open = this.open.bind(this)),
          (this.close = this.close.bind(this));
      }
      var e, n, r;
      return (
        (e = t),
        (n = [
          {
            key: 'open',
            value: function () {
              this.popup.classList.add('popup_is-opened'),
                document.addEventListener('keydown', this.close),
                this.popup.addEventListener('click', this.close);
            },
          },
          {
            key: 'closeHandling',
            value: function () {
              this.reset(),
                this.popup.classList.remove('popup_is-opened'),
                this.popup.classList.contains('popup_type_image') &&
                  this.popup
                    .querySelector('.popup__image')
                    .removeAttribute('src'),
                document.removeEventListener('keydown', this.close),
                this.popup.removeEventListener('click', this.close);
            },
          },
          {
            key: 'close',
            value: function (t) {
              'keydown' === t.type &&
                'Escape' === t.key &&
                this.closeHandling(),
                'click' === t.type &&
                  (t.target.classList.contains('popup_is-opened') ||
                    t.target === this.closeButton) &&
                  this.closeHandling(),
                'submit' === t.type && this.closeHandling();
            },
          },
          {
            key: 'reset',
            value: function () {
              this.resetForm && this.resetForm(this.popup);
            },
          },
        ]) && h(e.prototype, n),
        r && h(e, r),
        t
      );
    })();
    n(121);
    function y(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var m = (function () {
      function t(e) {
        var n = e.userDomElements,
          r = e.api,
          o = e.saveButtonState;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.nameElenement = n.name),
          (this.jobElement = n.job),
          (this.avatarElement = n.avatar),
          (this.api = r),
          (this.userPopup = n.profilePopup),
          (this.saveButtonState = o),
          (this.saveButton = n.submitButton),
          (this.saveButtonText = this.saveButton.textContent);
      }
      var e, n, r;
      return (
        (e = t),
        (n = [
          {
            key: 'setUserInfo',
            value: function () {
              var t = this;
              this.api
                .getUserData()
                .then(function (e) {
                  (t.nameElenement.textContent = e.name),
                    (t.jobElement.textContent = e.about),
                    (t.avatarElement.style.backgroundImage = 'url('.concat(
                      e.avatar,
                      ')'
                    ));
                })
                .catch(function (t) {
                  return console.warn(
                    'Не могу загрузить информацию о пользователе '.concat(t)
                  );
                });
            },
          },
          {
            key: 'updateUserInfo',
            value: function (t) {
              var e = this,
                n = Object.assign({}, t);
              this.saveButtonState(!0, this.saveButton, this.saveButtonText),
                this.api
                  .patchUserData(n)
                  .then(function (t) {
                    (e.nameElenement.textContent = t.name),
                      (e.jobElement.textContent = t.about);
                  })
                  .then(function () {
                    return e.userPopup.closeHandling();
                  })
                  .catch(function (t) {
                    return console.warn(
                      'Не могу обновить данные пользователя '.concat(t)
                    );
                  })
                  .finally(function () {
                    return e.saveButtonState(
                      !1,
                      e.saveButton,
                      e.saveButtonText
                    );
                  });
            },
          },
          {
            key: 'changeAvatar',
            value: function (t) {
              var e = this;
              this.api
                .changeAvatar(t)
                .then(function (t) {
                  e.avatarElement.style.backgroundImage = 'url('.concat(
                    t.avatar,
                    ')'
                  );
                })
                .catch(function (t) {
                  return console.warn('Не могу обновить аватар '.concat(t));
                });
            },
          },
        ]) && y(e.prototype, n),
        r && y(e, r),
        t
      );
    })();
    n(123);
    !(function () {
      var t = new o({
          baseURL: 'https://praktikum.tk/cohort10',
          headers: {
            authorization: 'ed07cd80-4544-47d3-a056-c6d267d55093',
            'Content-Type': 'application/json',
          },
        }),
        e = { id: '2a18ff32c35a20e7bc13004b' },
        n = document.querySelector('.places-list'),
        r = document.querySelector('.popup__form_place'),
        i = document.querySelector('.popup__form_profile'),
        c = document.querySelector('.popup__form_avatar'),
        u = new p(r),
        s = new p(i),
        l = new p(c),
        v = new d(document.querySelector('.popup_type_place'), E),
        h = document.querySelector('.user-info__button'),
        y = document.querySelector('.place-card__submit'),
        g = new d(document.querySelector('.popup_type_profile'), E),
        b = new d(document.querySelector('.popup_type_avatar'), E),
        S = document.querySelector('.user-info__edit-button'),
        x = {
          name: document.querySelector('.user-info__name'),
          job: document.querySelector('.user-info__job'),
          avatar: document.querySelector('.user-info__photo'),
          profilePopup: g,
          submitButton: document.querySelector('.profile__submit'),
        },
        _ = new m({ userDomElements: x, api: t, saveButtonState: O }),
        w = new d(document.querySelector('.popup_type_image'));
      function k(t) {
        document.querySelector('.popup__image').setAttribute('src', t),
          w.open();
      }
      var j = new f({
        cardsContainer: n,
        createCard: function (n) {
          return new a({
            cardData: n,
            openImagePopup: k,
            api: t,
            userData: e,
          }).create();
        },
        api: t,
        addCardPopup: v,
        submitCardButton: y,
        saveButtonState: O,
      });
      function E(t) {
        if (t.querySelector('.popup__form')) {
          var e = t.querySelector('.popup__form');
          Array.from(e.elements).forEach(function (t) {
            if (!t.classList.contains('button')) {
              var n = e.querySelector('#error-'.concat(t.id));
              n.classList.remove('popup__error-message'), (n.textContent = '');
            }
          }),
            e.reset();
        }
      }
      function O(t, e, n) {
        t
          ? ((e.textContent = 'Загрузка...'),
            (e.style.border = '3px solid #60f542'))
          : ((e.textContent = n), (e.style.border = ''));
      }
      _.setUserInfo(),
        j.render(),
        h.addEventListener('click', function () {
          u.setSubmitButtonState(!1), v.open();
        }),
        x.avatar.addEventListener('click', function () {
          l.setSubmitButtonState(!1), b.open();
        }),
        S.addEventListener('click', function () {
          g.open(),
            (i.elements.username.value = x.name.textContent),
            (i.elements.job.value = x.job.textContent),
            s.setSubmitButtonState(!0);
        }),
        r.addEventListener('submit', function (t) {
          t.preventDefault();
          var e = t.currentTarget.elements.name.value,
            n = t.currentTarget.elements.link.value;
          j.postCard({ name: e, link: n });
        }),
        i.addEventListener('submit', function (t) {
          t.preventDefault();
          var e = t.currentTarget.elements.username.value,
            n = t.currentTarget.elements.job.value;
          _.updateUserInfo({ name: e, job: n });
        }),
        c.addEventListener('submit', function (t) {
          t.preventDefault();
          var e = t.currentTarget.elements.avatar.value;
          _.changeAvatar(e), b.close(t), l.setSubmitButtonState(!1);
        });
    })();
  },
]);
