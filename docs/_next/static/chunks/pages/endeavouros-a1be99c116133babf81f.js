;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [234],
  {
    6931: function (n, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return c
        },
      })
      var e = r(9008),
        u = r(5893),
        i = function (n) {
          var t = n.title
          return (0, u.jsx)(e.default, {
            children: (0, u.jsx)('title', { children: t }),
          })
        },
        c = function (n) {
          var t = n.children,
            r = n.title
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)(i, { title: r }),
              (0, u.jsx)('div', { children: t }),
            ],
          })
        }
    },
    2375: function (n, t, r) {
      'use strict'
      r.r(t)
      var e = r(6931),
        u = r(5893)
      t.default = function () {
        return (0, u.jsx)(e.Z, {
          title: 'EndeavourOS',
          children: 'EndeavourOS',
        })
      }
    },
    9104: function (n, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/endeavouros',
        function () {
          return r(2375)
        },
      ])
    },
    9008: function (n, t, r) {
      n.exports = r(639)
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return (t = 9104), n((n.s = t))
      var t
    })
    var t = n.O()
    _N_E = t
  },
])
