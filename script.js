        ! function(t) {
            "use strict";

            function e(t, e, n, o, r) {
                var i = Array.prototype.forEach,
                    f = t instanceof Node ? t : document.querySelector(t);
                if (!f) return !1;
                var s = f.querySelectorAll(e);
                if (0 === s.length) return !1;
                n = "number" == typeof n && isFinite(n) && Math.floor(n) === n ? n : 6, f.style.width = "";
                var u = f.getBoundingClientRect().width,
                    l = s[0].getBoundingClientRect().width + n,
                    a = Math.max(Math.floor((u - n) / l), 1),
                    c = 0;
                u = l * a + n + "px", f.style.width = u, f.style.position = "relative";
                for (var d = [], p = [], h = 0; a > h; h++) p.push(h * l + n), d.push(n);
                i.call(s, function(t) {
                    var e = d.slice(0).sort(function(t, e) {
                        return t - e
                    }).shift();
                    e = d.indexOf(e);
                    var r = p[e],
                        f = d[e],
                        s = ["webkitTransform", "MozTransform", "msTransform", "OTransform", "transform"];
                    return t.style.position = "absolute", o || i.call(s, function(e) {
                        t.style[e] = "translate3D(" + r + "px," + f + "px,0)"
                    }), d[e] += t.getBoundingClientRect().height + n, c += 1, o ? o(t, r, f, c) : void 0
                });
                var m = d.slice(0).sort(function(t, e) {
                    return t - e
                }).pop();
                f.style.height = m + "px", "function" == typeof r && r(s)
            }
            "function" == typeof define && define.amd ? define(function() {
                return e
            }) : "undefined" != typeof module && module.exports ? module.exports = e : t.minigrid = e
        }(this);
        (function() {
            minigrid('.grid', '.grid-item');
            window.addEventListener('resize', function() {
                minigrid('.grid', '.grid-item');
            });
        })();
