var scroll = {};
(function (context) {
    context.init = function() {
        new IScroll('#wrapper',
            {probeType: 3, mouseWheel: true, startY: 0});

        document.addEventListener('click', function (e) { e.preventDefault(); }, false);
    }
})(scroll);