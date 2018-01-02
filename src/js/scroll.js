var scroll = {};
(function (context) {
    context.init = function() {
        // context.preY  = 0;
        context.load = new IScroll('#wrapper',
            {probeType: 3, mouseWheel: true, startY: 0});

        document.addEventListener('click', function (e) { e.preventDefault(); }, false);

        context.load.on("scrollStart",function(){
            context.addRefreshDom();
        });

        context.load.on("scroll",function(){
            console.log(this.y);
            var y = this.y;
            if(this.preY > this.y){
                console.log('mmmmmm');
            }
            this.preY = this.y;

            // context.addRefreshDom();

        });

        context.load.on("scrollEnd",function(){
            console.log(this.y);
            context.removeDom();
            // context.addRefreshDom();
        })
    };

    context.addRefreshDom = function(){
        $("body").prepend("<div id=\"refresh-dom\" ><svg class=\"icon\" aria-hidden=\"true\" style=\"height: 20px;\">\n" +
            "                <use xlink:href=\"#icon-xialashuaxin\"></use>\n" +
            "            </svg>\n" +
            "            <span>asfdaf</span></div>");
        context.load.refresh();
    };

    context.removeDom = function(){
        $("#wrapper").find("#refresh-dom").remove();
        context.load.refresh();
    }


})(scroll);