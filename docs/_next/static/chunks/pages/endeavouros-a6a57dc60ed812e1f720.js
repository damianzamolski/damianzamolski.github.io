;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [234],
  {
    6931: function (n, r, t) {
      'use strict'
      t.d(r, {
        Z: function () {
          return i
        },
      })
      var e = t(5893),
        u = function (n) {
          var r = n.title
          return (0, e.jsx)('div', { children: r })
        },
        i = function (n) {
          var r = n.children,
            t = n.title
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(u, { title: t }),
              (0, e.jsx)('div', { children: r }),
            ],
          })
        }
    },
    2375: function (n, r, t) {
      'use strict'
      t.r(r)
      var e = t(6931),
        u = t(5893)
      r.default = function () {
        return (0, u.jsx)(e.Z, {
          title: 'EndeavourOS',
          children: 'EndeavourOS',
        })
      }
    },
    9104: function (n, r, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/endeavouros',
        function () {
          return t(2375)
        },
      ])
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return (r = 9104), n((n.s = r))
      var r
    })
    var r = n.O()
    _N_E = r
  },
])
