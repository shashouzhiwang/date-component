var utils = (function () {
    var me = {};

    me.prefix = (function () {
        var _elementStyle = document.createElement('div').style;
        var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
            $vendors = ['t', '-webkit-t', '-moz-t', '-ms-t', '-o-t'],
            transform,
            i = 0,
            l = vendors.length;
        for (; i < l; i++) {
            transform = vendors[i] + 'ransform';
            if (transform in _elementStyle) {
                console.log(vendors[i].substr(0, vendors[i].length - 1));
                return vendors[i].substr(0, vendors[i].length - 1);
                // return $vendors[i].substr(0, $vendors[i].length - 1);
            }
        }
        return false;
    })();

    var _transform = _prefixStyle('transform');

    function _prefixStyle (style) {
        if (me.prefix === false ) return false;
        if ( me.prefix === '' ) return style;
        return me.prefix + style.charAt(0).toUpperCase() + style.substr(1);
    }

    me.extend = function (target, obj) {
        for (var i in obj) {
            target[i] = obj[i];
        }
    };

    me.addEvent = function (el, type, fn, capture) {
        el.addEventListener(type, fn, !!capture);
    };

    me.hasClass = function (e, c) {
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
        return re.test(e.className);
    };

    me.addClass = function (e, c) {
        if (me.hasClass(e, c)) {
            return;
        }

        var newclass = e.className.split(' ');
        newclass.push(c);
        e.className = newclass.join(' ');
    };

    me.removeClass = function (e, c) {
        if (!me.hasClass(e, c)) {
            return;
        }

        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
        e.className = e.className.replace(re, ' ');
    };

    me.offset = function (el) {
        var left = -el.offsetLeft,
            top = -el.offsetTop;

        // jshint -W084
        while (el = el.offsetParent) {
            left -= el.offsetLeft;
            top -= el.offsetTop;
        }
        // jshint +W084

        return {
            left: left,
            top: top
        };
    };

    me.getTime = Date.now || function getTime() {
        return new Date().getTime();
    };

    me.extend(me.style = {}, {
        transform: _transform,
        transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
        transitionDuration: _prefixStyle('transitionDuration'),
        transitionDelay: _prefixStyle('transitionDelay'),
        transformOrigin: _prefixStyle('transformOrigin'),
        touchAction: _prefixStyle('touchAction')
    });

    me.translateZ = ' translateZ(0)';

    me.translate = function (obj, x, y) {
        obj[me.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + me.translateZ;
    };

    me.rotate3d = function (obj, deg) {
        obj[me.style.transform] = 'rotate3d(0 , 0, 1, ' + deg + 'deg)';
    };

    return me;
})();