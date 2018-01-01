var date = {};
(function (context) {
    var _elementStyle = document.createElement('div').style;
    var _vendor = (function () {
        var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
            transform,
            i = 0,
            l = vendors.length;
        for ( ; i < l; i++ ) {
            transform = vendors[i] + 'ransform';
            if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
        }
        return false;
    })();
    context.init = function (date) {
        context.show();
        context.height = 30;
        context.yearContainer = 10;
        context.defaultDate = context.dateFormat("1512740175084", "yyyy-MM-dd").split('-');
        context.defaultPosition = {};
        context.default = {
            "warpYear": $("#active-sheet-body-col-year"),
            "warpMonth": $("#active-sheet-body-col-month"),
            "warpDay": $("#active-sheet-body-col-day")
        };
        context.curDate = {};
        context.default["scrollYear"] = context.default.warpYear.find('ul:first');
        context.default["scrollMonth"] = context.default.warpMonth.find('ul:first');
        context.default["scrollDay"] = context.default.warpDay.find('ul:first');
        context.default = $.extend(context.default, date);
        context.generateYear();
        context.getMonth();
        context.getDay();
        $(".mark,.active-sheet-controll-cancle").click(function(){
            context.hide();
            // context.iscrollObjYear.scrollTo(0, -90, 100, IScroll.utils.ease.quadratic);
        });
        $(".active-sheet-controll-confirm").click(function(){
            alert(context.getFullDate());
        });
        document.addEventListener('click', function (e) { e.preventDefault(); }, false);
    };
    context.render = function () {

    };

    context.yearIscrolling = function() {
        var lastY;
        var scrollStartYearFn = function() {
            this['isEnd'] = false;
        };
        var scrollingYearFn = function () {
            var iscrollY = Math.abs(this.y >> 0) - 60;
            if(!lastY || lastY !== Math.round(iscrollY / context.height)){
                context.setTransform(context.default["scrollYear"],Math.round(iscrollY / context.height) + 2);
            }
            lastY = Math.round(iscrollY / context.height);
        };

        var iscrollingYearEndFn = function(){
            var y = (this.y >> 0) ;
            if(y < 0 ){
                if(y % context.height  !== 0){
                    if(Math.abs(y % context.height) > context.height/2){
                        this.scrollTo(0, (((y / context.height) >> 0)  - 1) * context.height, 800, IScroll.utils.ease.elastic);
                        // console.log(y,">15");
                    }else{
                        this.scrollTo(0, ((y / context.height) >> 0) * context.height, 800, IScroll.utils.ease.elastic);
                        // console.log(y,"<15");
                    }
                }
            }
            if(!this['isEnd']){
                this['isEnd'] = true;
                context.curDate["year"] = context.default["scrollYear"].find('li').eq(Math.round((Math.abs(this.y >> 0) - 60) / context.height) + 2).html();
                console.log(context.default["scrollYear"].find('li').eq(Math.round((Math.abs(this.y >> 0) - 60) / context.height) + 2).html());
                context.getDay();
            }
        };

        context.iscrollObjYear.on('scrollStart', scrollStartYearFn);
        context.iscrollObjYear.on('scroll', scrollingYearFn);
        context.iscrollObjYear.on('scrollEnd', iscrollingYearEndFn);
    };

    context.monthIscrolling = function() {
        var lastY;
        var scrollStartMonthFn = function() {
            this['isEnd'] = false;
        };
        var scrollingMonthFn = function () {
            var iscrollY = Math.abs(this.y >> 0) - 60;
            if(!lastY || lastY !== Math.round(iscrollY / context.height)){
                context.setTransform(context.default["scrollMonth"],Math.round(iscrollY / context.height) + 2);
            }
            lastY = Math.round(iscrollY / context.height);
        };
        var iscrollingMonthEndFn = function(){
            var y = (this.y >> 0) ;
            if(y < 0 ){
                if(y % context.height  !== 0){
                    if(Math.abs(y % context.height) > context.height/2){
                        this.scrollTo(0, (((y / context.height) >> 0)  - 1) * context.height, 800, IScroll.utils.ease.elastic);
                        // console.log(y,">15");
                    }else{
                        this.scrollTo(0, ((y / context.height) >> 0) * context.height, 800, IScroll.utils.ease.elastic);
                        // console.log(y,"<15");
                    }
                }
            }
            if(!this['isEnd']){
                this['isEnd'] = true;
                context.curDate["month"] = context.default["scrollMonth"].find('li').eq(Math.round((Math.abs(this.y >> 0) - 60) / context.height) + 2).html();
                console.log(context.default["scrollMonth"].find('li').eq(Math.round((Math.abs(this.y >> 0) - 60) / context.height) + 2).html());
                context.getDay();
            }
        };

        context.iscrollObjMonth.on('scrollStart', scrollStartMonthFn);
        context.iscrollObjMonth.on('scroll', scrollingMonthFn);
        context.iscrollObjMonth.on('scrollEnd', iscrollingMonthEndFn);
    };

    context.dayIscrolling = function() {
        var lastY;
        var scrollStartDayFn = function() {
            this['isEnd'] = false;
        };
        var scrollingDayFn = function () {
            var iscrollY = Math.abs(this.y >> 0) - 60;
            if(!lastY || lastY !== Math.round(iscrollY / context.height)){
                context.setTransform(context.default["scrollDay"],Math.round(iscrollY / context.height) + 2);
            }
            lastY = Math.round(iscrollY / context.height);
        };
        var iscrollingDayEndFn = function(){
            var y = (this.y >> 0) ;
            if(y < 0 ){
                if(y % context.height  !== 0){
                    if(Math.abs(y % context.height) > context.height/2){
                        this.scrollTo(0, (((y / context.height) >> 0)  - 1) * context.height, 800, IScroll.utils.ease.elastic);
                        // console.log(y,">15");
                    }else{
                        this.scrollTo(0, ((y / context.height) >> 0) * context.height, 800, IScroll.utils.ease.elastic);
                        // console.log(y,"<15");
                    }
                }
            }
            if(!this['isEnd']){
                this['isEnd'] = true;
                context.curDate["day"] = context.default["scrollDay"].find('li').eq(Math.round((Math.abs(this.y >> 0) - 60) / context.height) + 2).html();
                console.log(context.default["scrollDay"].find('li').eq(Math.round((Math.abs(this.y >> 0) - 60) / context.height) + 2).html());
            }
        };

        context.iscrollObjDay.on('scrollStart', scrollStartDayFn);
        context.iscrollObjDay.on('scroll', scrollingDayFn);
        context.iscrollObjDay.on('scrollEnd', iscrollingDayEndFn);
    };

    context.generateYear = function () {
        var date = new Number(new Date().getFullYear());
        var html = "";
        for (var i = date - context.yearContainer; i < date + context.yearContainer; i++) {
            html += "<li class='active-sheet-body-col-cell'>" + i + "</li>";
        }
        context.default.scrollYear.html(html);
        context.curDate["year"] = context.defaultDate[0];
        context.iscrollObjYear = new IScroll('#active-sheet-body-col-year',
            {probeType: 3, mouseWheel: true, startY: context.setDate().year});
            context.yearIscrolling();
    };
    context.getMonth = function () {
        var html = "";
        for (var i = 1; i <= 12; i++) {
            html += "<li class='active-sheet-body-col-cell'>" + context.fixNumber(i, 2) + "</li>";
            // context.default.scrollMonth.append("<li class='active-sheet-body-col-cell'>" + context.fixNumber(i, 2) + "</li>");
        }
        context.default.scrollMonth.html(html);
        context.curDate["month"] = context.defaultDate[1];
        context.iscrollObjMonth = new IScroll('#active-sheet-body-col-month',
            {probeType: 3, mouseWheel: true, startY: context.setDate().month});
        context.monthIscrolling();
    };
    context.getDay = function () {
        var endDay = 31;
        var minMonth = ["04","06","09","11"];
        console.log(minMonth.indexOf(context.curDate["month"]));
        if(minMonth.indexOf(context.curDate["month"]) > -1){
            endDay = 30;
        }
        if(context.curDate["month"] === "02"){
            if(context.isLeap(context.curDate["year"])){
                endDay = 28;
            }else{
                endDay = 29;
            }
        }
        console.log(endDay);
        var html = "";
        for (var i = 1; i <= endDay; i++) {
            html += "<li class='active-sheet-body-col-cell'>" + context.fixNumber(i, 2) + "</li>";
        }
        context.default.scrollDay.html(html);
        if(context.iscrollObjDay){
            context.iscrollObjDay.destroy();
            var newPosition = context.curDate["day"] > endDay ? endDay : context.curDate["day"];
            context.iscrollObjDay = new IScroll('#active-sheet-body-col-day',
                {probeType: 3, mouseWheel: true, startY: parseInt((newPosition - 1) * context.height) * (-1)});
            context.dayIscrolling();
        }else{
            context.iscrollObjDay = new IScroll('#active-sheet-body-col-day',
                {probeType: 3, mouseWheel: true, startY: context.setDate().day});
            context.dayIscrolling();
        }
    };
    context._prefixStyle = function(style) {
        if ( _vendor === false ) return false;
        if ( _vendor === '' ) return style;
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    };
    context.setTransform = function(obj, number){
        var json = {};
        for(var i = 0; i < obj.find('li').length; i++){
            (function(i){
                var deg = (number - i) * 30;
                json[context._prefixStyle("transform")] = "rotateX("+deg+"deg)";
                json[context._prefixStyle("transition")] = "all 0 cubic-bezier(0.23, 1, 0.32, 1)";
                obj.find('li').eq(i).css(json);
            }(i))
        }
    };
    /**
     *
     * @param dateObj   可能是string/Date对象/number
     * @param format
     * @returns {*}
     */
    context.dateFormat = function (dateObj, format) {
        switch (context.getType(dateObj)) {
            case 'Number' :
                dateObj = new Date(dateObj);
                break;
            case 'String' :
                dateObj = new Date(new Number(dateObj));
                break;
            case 'Date' :
                break;
            default :
                return;
                break;
        }
        var o = {
            "M+": dateObj.getMonth() + 1, //month
            "d+": dateObj.getDate(), //day
            "h+": dateObj.getHours(), //hour
            "m+": dateObj.getMinutes(), //minute
            "s+": dateObj.getSeconds(), //second
            "q+": Math.floor((dateObj.getMonth() + 3) / 3), //quarter
            "S": dateObj.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (dateObj.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };

    context.getType = function (param) {
        var length = Object.prototype.toString.call(param).length;
        return Object.prototype.toString.call(param).slice(8, length - 1);
    };

    context.fixNumber = function (number, length) {
        return (new Array(length).join("0") + number).slice(-length);
    };

    context.setDate = function() {
        if(context.defaultPosition["year"])
            return context.defaultPosition;
        context.defaultPosition["year"] = (context.yearContainer - 1) * context.height * (-1);
        context.defaultPosition["month"] = parseInt((context.defaultDate[1] - 1) * context.height) * (-1);
        context.defaultPosition["day"] = parseInt((context.defaultDate[2] - 1) * context.height) * (-1);
        return context.defaultPosition;
    };

    context.isLeap = function(year) {
        if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
            return true;
        }else{
            return false;
        }
    };

    context.getFullDate = function() {
        return context.curDate["year"] + "-" + context.curDate["month"] + "-" + context.curDate["day"];
    };

    context.show = function() {
        $mark = $(".mark");
        $mark.show().addClass('active');
        $mark.find('.active-sheet').addClass('active');
    };

    context.hide = function() {
        $mark = $(".mark");
        $mark.removeClass('active');
        $mark.find('.active-sheet').removeClass('active');
        setTimeout(function(){
            $mark.hide();
        },300);
    }
})(date);