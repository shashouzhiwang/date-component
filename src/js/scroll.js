var scroll = {};
(function (context) {
    context.init = function() {
        // context.preY  = 0;
        context.is_loadding = false;
        context.is_refresh_loading = false;
        context.default = {
            "state": "",
            "loadingcallback":function() {
                console.log('loadingcallback');
                context.load.refresh();
            }
        };
        context.refreshDomHeight = $("#refresh-dom").height();
        context.load = new IScroll('#wrapper',
            {probeType: 1, mouseWheel: true, bounce: true,
                bounceTime: 200, preventDefault: false, startY: -context.refreshDomHeight  });
        // context.addRefreshDom();
        document.addEventListener('click', function (e) { e.preventDefault(); }, false);

        context.load.on("scrollStart",function(){
            //开始触发下拉刷新
            if(this.y === -context.refreshDomHeight){
                context.is_refresh_loading = true;
                console.log("scrollStart", this.y >> 0);
            }

            //开始触发分页加载
            if(this.y >> 0 === this.maxScrollY){
                this.maxScrollY -= 50;
                context.is_paging_loading = true;
                // $("#wrapper").css("bottom", "0");
            }
        });

        context.load.on("scroll", function(){
            var y = this.y >> 0;
            if(y >= 30 && context.default.state !== "flip"){
                context.default.state = "flip";
                $("#refresh-dom-tip").html("释放刷新");
                utils.rotate3d(document.querySelector("#refresh-dom .icon").style, 180);
            }else if(y < 30 && context.default.state === "flip"){
                context.default.state = "";
                $("#refresh-dom-tip").html("下拉加载");
                utils.rotate3d(document.querySelector("#refresh-dom .icon").style, 0);
            }
            console.log("scroll", this.y >> 0, context.default.state, this);
        });


        context.load.on("scrollEnd", function(){
            console.log("scrollEnd", this.y >> 0);
            var y = this.y >> 0;
            $("#refresh-dom").find(".pull-down").show();
            $("#refresh-dom").find(".loading").hide();
            if(context.default.state !== "flip" && y > this.options.startY){
                this.scrollTo(0, this.options.startY, 300);
            } else if(context.default.state === "flip"){
                context.default.state = "load";
                if(context.is_refresh_loading && !is_loadding){
                    is_loadding=true;
                    options.scrollTopLoad && options.scrollTopLoad();
                }
            }

            if(context.is_refresh_loading){
                    context.is_refresh_loading = false;
                if(y === 0){
                    $("#refresh-dom").find(".pull-down").hide();
                    $("#refresh-dom").find(".loading").show();
                    setTimeout(function() {
                        context.load.scrollTo(0, -context.refreshDomHeight, 500);
                    }, 2000);
                    context.default.loadingcallback();
                }else{
                    if(y <= 0 && y >= -context.refreshDomHeight){
                        context.load.scrollTo(0, -context.refreshDomHeight, 500);
                    }else{
                        //上拉加载
                        if(context.is_paging_loading){
                            context.is_paging_loading = false;
                            context.load.scrollTo(0, this.maxScrollY + 50, 500);
                            this.maxScrollY += 50;
                            console.log("----------000");
                        }
                    }
                }
            }else{
                if(y === 0){
                    context.load.scrollTo(0, -context.refreshDomHeight, 500);
                }
            }

            // var position = document.getElementById('wrapper');
            // utils.addClass(position,'eee');
            // var transitionType = true && {"test": "eee"};

        });

        context.load.on('refresh', function(){
            // if(context.is_scrolling){
            console.log("------");
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