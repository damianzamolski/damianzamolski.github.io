;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [387],
  {
    6931: function (n, t, e) {
      'use strict'
      e.d(t, {
        Z: function () {
          return c
        },
      })
      var r = e(9008),
        u = e(5893),
        i = function (n) {
          var t = n.title
          return (0, u.jsx)(r.default, {
            children: (0, u.jsx)('title', { children: t }),
          })
        },
        c = function (n) {
          var t = n.children,
            e = n.title
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)(i, { title: e }),
              (0, u.jsx)('div', { children: t }),
            ],
          })
        }
    },
    6993: function (n, t, e) {
      'use strict'
      e.r(t)
      var r = e(6931),
        u = e(5893)
      t.default = function () {
        return (0, u.jsx)(r.Z, { title: 'About Me', children: 'About Me' })
      }
    },
    5928: function (n, t, e) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/about-me',
        function () {
          return e(6993)
        },
      ])
    },
    9008: function (n, t, e) {
      n.exports = e(639)
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return (t = 5928), n((n.s = t))
      var t
    })
    var t = n.O()
    _N_E = t
  },
])
