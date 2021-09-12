;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [387],
  {
    6931: function (n, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return i
        },
      })
      var e = r(5893),
        u = function (n) {
          var t = n.title
          return (0, e.jsx)('div', { children: t })
        },
        i = function (n) {
          var t = n.children,
            r = n.title
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(u, { title: r }),
              (0, e.jsx)('div', { children: t }),
            ],
          })
        }
    },
    6993: function (n, t, r) {
      'use strict'
      r.r(t)
      var e = r(6931),
        u = r(5893)
      t.default = function () {
        return (0, u.jsx)(e.Z, { title: 'About Me', children: 'About Me' })
      }
    },
    5928: function (n, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/about-me',
        function () {
          return r(6993)
        },
      ])
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
