;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6931: function (n, t, e) {
      'use strict'
      e.d(t, {
        Z: function () {
          return c
        },
      })
      var r = e(9008),
        i = e(5893),
        u = function (n) {
          var t = n.title
          return (0, i.jsx)(r.default, {
            children: (0, i.jsx)('title', { children: t }),
          })
        },
        c = function (n) {
          var t = n.children,
            e = n.title
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(u, { title: e }),
              (0, i.jsx)('div', { children: t }),
            ],
          })
        }
    },
    5040: function (n, t, e) {
      'use strict'
      e.r(t),
        e.d(t, {
          default: function () {
            return c
          },
        })
      var r = e(5893),
        i = function (n) {
          var t = n.value
          return (0, r.jsx)('pre', {
            children: (0, r.jsx)('code', { children: t }),
          })
        },
        u = e(6931),
        c = function () {
          return (0, r.jsx)(u.Z, {
            title: 'Index',
            children: (0, r.jsx)(i, { value: 'console.log("index")' }),
          })
        }
    },
    5301: function (n, t, e) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return e(5040)
        },
      ])
    },
    9008: function (n, t, e) {
      n.exports = e(639)
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return (t = 5301), n((n.s = t))
      var t
    })
    var t = n.O()
    _N_E = t
  },
])
