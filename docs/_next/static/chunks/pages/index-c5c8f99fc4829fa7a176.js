;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6931: function (n, e, r) {
      'use strict'
      r.d(e, {
        Z: function () {
          return u
        },
      })
      var t = r(5893),
        i = function (n) {
          var e = n.title
          return (0, t.jsx)('div', { children: e })
        },
        u = function (n) {
          var e = n.children,
            r = n.title
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(i, { title: r }),
              (0, t.jsx)('div', { children: e }),
            ],
          })
        }
    },
    5040: function (n, e, r) {
      'use strict'
      r.r(e),
        r.d(e, {
          default: function () {
            return o
          },
        })
      var t = r(7294),
        i = r(837),
        u = r(9622),
        c = (r(453), r(5893))
      i.Z.registerLanguage('javascript', u.Z)
      var s = function (n) {
          var e = n.value
          return (
            (0, t.useEffect)(function () {
              i.Z.highlightAll()
            }, []),
            (0, c.jsx)('pre', { children: (0, c.jsx)('code', { children: e }) })
          )
        },
        l = r(6931),
        o = function () {
          return (0, c.jsx)(l.Z, {
            title: 'Index',
            children: (0, c.jsx)(s, { value: 'console.log("index")' }),
          })
        }
    },
    5301: function (n, e, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return r(5040)
        },
      ])
    },
  },
  function (n) {
    n.O(0, [594, 774, 888, 179], function () {
      return (e = 5301), n((n.s = e))
      var e
    })
    var e = n.O()
    _N_E = e
  },
])
