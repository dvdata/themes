(function(window) {
    "use strict";
    var transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed("transition")];

    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key]
            }
        }
        return a
    }

    function DrawFillSVG(options) {
        this.options = extend({}, this.options);
        extend(this.options, options);
        this._init()
    }
    DrawFillSVG.prototype.options = {
        elementId: "svg"
    };
    DrawFillSVG.prototype._init = function() {
        this.svg = document.getElementById(this.options.elementId);
        this.paths = this.svg.querySelectorAll("path");
        this._initAnimation()
    };
    DrawFillSVG.prototype._initAnimation = function() {
        for (var i = 0; i < this.paths.length; i++) {
            var path = this.paths[i];
            var length = path.getTotalLength();
            path.style.fillOpacity = 0;
            path.style.strokeOpacity = 1;
            path.style.transition = path.style.WebkitTransition = "none";
            path.style.strokeDasharray = length + " " + length;
            path.style.strokeDashoffset = length;
            path.getBoundingClientRect();
            path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 1s ease-in-out";
            path.style.strokeDashoffset = 0;
            this._fillPath(path)
        }
    };
    DrawFillSVG.prototype._fillPath = function(path) {
        path.addEventListener(transEndEventName, function() {
            path.style.transition = path.style.WebkitTransition = "none";
            path.style.transition = path.style.WebkitTransition = "fill-opacity 1s ease-in-out, stroke-opacity 1s ease-in-out";
            path.style.fillOpacity = 1;
            path.style.strokeOpacity = 1
        })
    };
    DrawFillSVG.prototype.replay = function() {
        this._initAnimation()
    };
    window.DrawFillSVG = DrawFillSVG
})(window);