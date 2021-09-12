;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6931: function (n, e, t) {
      'use strict'
      t.d(e, {
        Z: function () {
          return u
        },
      })
      var r = t(5893),
        i = function (n) {
          var e = n.title
          return (0, r.jsx)('div', { children: e })
        },
        u = function (n) {
          var e = n.children,
            t = n.title
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i, { title: t }),
              (0, r.jsx)('div', { children: e }),
            ],
          })
        }
    },
    5040: function (n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, {
          default: function () {
            return l
          },
        })
      var r = t(7294),
        i = t(637),
        u = t(9622),
        c = (t(453), t(5893))
      i.Z.registerLanguage('javascript', u.Z)
      var s = function (n) {
          var e = n.value
          return (
            (0, r.useEffect)(function () {
              i.Z.initHighlighting()
            }),
            (0, c.jsx)('pre', {
              children: (0, c.jsx)('code', { className: 'js', children: e }),
            })
          )
        },
        a = t(6931),
        l = function () {
          return (0, c.jsx)(a.Z, {
            title: 'Index',
            children: (0, c.jsx)(s, { value: 'console.log("index")' }),
          })
        }
    },
    5301: function (n, e, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(5040)
        },
      ])
    },
  },
  function (n) {
    n.O(0, [192, 774, 888, 179], function () {
      return (e = 5301), n((n.s = e))
      var e
    })
    var e = n.O()
    _N_E = e
  },
])
