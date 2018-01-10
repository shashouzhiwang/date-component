var scroll = {};
(function (context) {
    context.init = function() {
        // context.preY  = 0;
        context.default = {
            "state": false,
            "loadingcallback":function() {
                console.log('loadingcallback');
            },
        };
        context.load = new IScroll('#wrapper',
            {probeType: 1, mouseWheel: true, bounce: true,
                bounceTime: 200, preventDefault: false, startY: -50  });
        // context.addRefreshDom();
        document.addEventListener('click', function (e) { e.preventDefault(); }, false);

        context.load.on("scrollStart",function(){
            // if(this.y === this.options.startY){
                context.is_scrolling=true;
                console.log("scrollStart");
            // }
        });

        context.load.on("scroll", function(){
            if(this.y >> 0 > 20){
                context.default.state = true;
                $("#refresh-dom-tip").html("释放刷新");
                utils.rotate3d(document.querySelector("#refresh-dom .icon").style, 180);
            }else{
                $("#refresh-dom-tip").html("下拉加载");
                context.default.state = false;
                utils.rotate3d(document.querySelector("#refresh-dom .icon").style, 0);
            }
            console.log("scroll", this.y >> 0, context.default.state);
        });


        context.load.on("scrollEnd", function(){
            console.log("scrollEnd", this.y >> 0);
            $("#refresh-dom").find(".pull-down").show();
            $("#refresh-dom").find(".loading").hide();
            if(context.is_scrolling){
                context.is_scrolling = false;
                if(this.y >> 0 === 0){
                    $("#refresh-dom").find(".pull-down").hide();
                    $("#refresh-dom").find(".loading").show();
                    setTimeout(function() {
                        context.load.scrollTo(0, -50, 500);
                    }, 2000);
                    context.default.loadingcallback();
                }else{
                    context.load.scrollTo(0, -50, 500);
                }
            }

            // var position = document.getElementById('wrapper');
            // utils.addClass(position,'eee');
            // var transitionType = true && {"test": "eee"};

        });

        context.load.on('refresh', function(){
            // if(context.is_scrolling){
            console.log("------");
                if(this.y >> 0 === -50){
                    console.log("scrollEnd------");
                    context.default.loadcallback();
                }else{
                    context.load.scrollTo(0, -50, 500);
                }
            // }
        })
    };

    context.addRefreshDom = function(){
        $("body").prepend("<div id=\"refresh-dom\" ><svg class=\"icon\" aria-hidden=\"true\" style=\"height: 20px;\">\n" +
            "                <use xlink:href=\"#icon-xialashuaxin\"></use>\n" +
            "            </svg>\n" +
            "            <span id='refresh-dom-tip'>asfdaf</span></div>");
        utils.translate(document.querySelector("#refresh-dom").style,0,-40);
        context.load.refresh();
    };

    context.removeDom = function(){
        $("#wrapper").find("#refresh-dom").remove();
        context.load.refresh();
    }


})(scroll);