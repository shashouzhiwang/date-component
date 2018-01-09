var scroll = {};
(function (context) {
    context.init = function() {
        // context.preY  = 0;
        context.load = new IScroll('#wrapper',
            {probeType: 3, mouseWheel: true, startY: 0, refresh: function(){
                console.log('0000000000000000000000000000000000');
            }});
        context.addRefreshDom();
        document.addEventListener('click', function (e) { e.preventDefault(); }, false);

        context.load.on("scrollStart",function(){
            console.log("scrollStart");
        });

        context.load.on("scroll",function(){
            console.log(this);
            // console.log(this.preY, this.y);
            if(this.preY > this.y){
                // console.log('mmmmmm');
                // console.log(this.preY, "rrrrrrrr");
                this.preY = 0;
            }else{
                // console.log(this.preY, "ttttttttt");
                this.preY = this.y;
            }
            utils.translate(document.querySelector("#refresh-dom").style, 0, -40 + this.y);
            // context.addRefreshDom();

        });

        context.load.on("scrollEnd",function(){
            console.log("scrollEnd");
            console.log(this.y);
            // document.querySelector("#wrapper").style["color"] = "red";
            // var position = document.getElementById('wrapper');
            // utils.addClass(position,'eee');
            // var transitionType = true && {"test": "eee"};
            // console.log(transitionType);
            // console.log(utils.getTime());

            // utils.translate(document.querySelector("#refresh-dom").style[);

            context.removeDom();
            // context.addRefreshDom();
        })
    };

    context.addRefreshDom = function(){
        $("body").prepend("<div id=\"refresh-dom\" ><svg class=\"icon\" aria-hidden=\"true\" style=\"height: 20px;\">\n" +
            "                <use xlink:href=\"#icon-xialashuaxin\"></use>\n" +
            "            </svg>\n" +
            "            <span>asfdaf</span></div>");
        utils.translate(document.querySelector("#refresh-dom").style,0,-40);
        context.load.refresh();
    };

    context.removeDom = function(){
        $("#wrapper").find("#refresh-dom").remove();
        context.load.refresh();
    }


})(scroll);