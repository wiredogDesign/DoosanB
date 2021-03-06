!(function(e, n) {
    function o(e) {
        return "object" === n.type(e);
    }
    function i(e) {
        return "string" === n.type(e) && n.trim(e).length > 0;
    }
    function t(e, n, o, i) {
        i(e[o]) || (e[o] = n[o]);
    }
    n.fn.extend({
        scrollspy: function(l, s) {
            if (i(l)) {
                var a = s;
                (s = l), (l = a);
            }
            (l = n.extend({}, r, l)), t(l, r, "container", o);
            var c = n(l.container);
            if (0 === c.length) return this;
            if (
                (t(l, r, "namespace", i), i(s) && "DESTROY" === s.toUpperCase())
            )
                return c.off("scroll." + l.namespace), this;
            t(l, r, "buffer", n.isNumeric),
                t(l, r, "max", n.isNumeric),
                t(l, r, "min", n.isNumeric),
                t(l, r, "onEnter", n.isFunction),
                t(l, r, "onLeave", n.isFunction),
                t(l, r, "onLeaveTop", n.isFunction),
                t(l, r, "onLeaveBottom", n.isFunction),
                t(l, r, "onTick", n.isFunction),
                n.isFunction(l.max) && (l.max = l.max()),
                n.isFunction(l.min) && (l.min = l.min());
            var u = "VERTICAL" === e.String(l.mode).toUpperCase();
            return this.each(function() {
                var e = this,
                    o = n(e),
                    i = 0,
                    t = !1,
                    r = 0;
                c.on("scroll." + l.namespace, function() {
                    var s = n(this),
                        a = { top: s.scrollTop(), left: s.scrollLeft() },
                        f = c.height(),
                        p = l.max,
                        m = l.min,
                        v = u ? a.top + l.buffer : a.left + l.buffer;
                    if (
                        (0 === p &&
                            (p = u ? f : c.outerWidth() + o.outerWidth()),
                        v >= m && p >= v)
                    )
                        t ||
                            ((t = !0),
                            i++,
                            o.trigger("scrollEnter", { position: a }),
                            null !== l.onEnter && l.onEnter(e, a)),
                            o.trigger("scrollTick", {
                                position: a,
                                inside: t,
                                enters: i,
                                leaves: r
                            }),
                            null !== l.onTick && l.onTick(e, a, t, i, r);
                    else if (t)
                        (t = !1),
                            r++,
                            o.trigger("scrollLeave", {
                                position: a,
                                leaves: r
                            }),
                            null !== l.onLeave && l.onLeave(e, a),
                            m >= v
                                ? (o.trigger("scrollLeaveTop", {
                                      position: a,
                                      leaves: r
                                  }),
                                  null !== l.onLeaveTop && l.onLeaveTop(e, a))
                                : v >= p &&
                                  (o.trigger("scrollLeaveBottom", {
                                      position: a,
                                      leaves: r
                                  }),
                                  null !== l.onLeaveBottom &&
                                      l.onLeaveBottom(e, a));
                    else {
                        var g = c.scrollTop(),
                            L = o.height(),
                            h = o.offset().top;
                        f + g > h &&
                            h > g - L &&
                            (o.trigger("scrollView", { position: a }),
                            null !== l.onView && l.onView(e, a));
                    }
                });
            });
        }
    });
    var r = {
        buffer: 0,
        container: e,
        max: 0,
        min: 0,
        mode: "vertical",
        namespace: "scrollspy",
        onEnter: null,
        onLeave: null,
        onLeaveTop: null,
        onLeaveBottom: null,
        onTick: null,
        onView: null
    };
})(window, window.jQuery);
