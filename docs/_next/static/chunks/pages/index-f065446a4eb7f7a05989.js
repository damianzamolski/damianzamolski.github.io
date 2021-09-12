;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6931: function (n, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return u
        },
      })
      var e = r(5893),
        i = function (n) {
          var t = n.title
          return (0, e.jsx)('div', { children: t })
        },
        u = function (n) {
          var t = n.children,
            r = n.title
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(i, { title: r }),
              (0, e.jsx)('div', { children: t }),
            ],
          })
        }
    },
    6839: function (n, t, r) {
      'use strict'
      r.r(t)
      var e = r(6931),
        i = r(5893)
      t.default = function () {
        return (0, i.jsx)(e.Z, { title: 'Index', children: 'Index' })
      }
    },
    5301: function (n, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return r(6839)
        },
      ])
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
