

jQuery(function(t) {
    var e = t(".ticker");
    t(document).ready(function() {
        e.each(function() {
            var e = t(this).index() + 1,
                i = t(this).find("ul"),
                n = t(this).outerWidth() + i.outerWidth(),
                r = (10 * n).toFixed();
            t("<style type='text/css'>@keyframes ticker" + e + "{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-" + n + "px,0,0)}}</style>").appendTo(t("head")), i.css({
                animation: "ticker" + e + " " + r + "ms infinite linear"
            })
        })
    })
});