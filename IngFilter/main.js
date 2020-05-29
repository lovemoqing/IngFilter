var Home = function () {
    var _this = this;
    this.Init = function () {
        console.log("插件启动成功！");
        //加载页面时清除一次
        _this.ChearUsers();
        //此后每两秒定时清除一次
        setInterval(_this.ChearUsers, 2000);
    }
    this.ChearUsers = function () {
        var filterNames = new Array("测试人员01", "测试人员02", "测试人员03","测试人员04");
        //清除指定用户发的
        $(".entry_a,.entry_b").each(function (i, e) {
            var currDomInfo = $(e).find(".ing-author").attr("title");
            $.each(filterNames, function (ii, ee) {
                if (ee.length > 0)//空字符串不做处理
                {
                    if (currDomInfo.indexOf(ee) > -1) {
                        $(e).remove();
                        console.log("已清除用户=>" + ee);
                    }
                }
            });
        });
        
        //清除指定用户对别人闪存的评论 
        $(".feed_ing_comment_block a").each(function(i,e){ 
            var currText=$(e).text();
            if(filterNames.indexOf(currText)>-1)
            {
                $(e).parent().remove();
                console.log("已清除用户的评论=>" + $(e).parent().find("bdo span").text());
            }
        });

        //清除最新回应里的相关信息
        $(".ing_comment_body a").each(function(i,e){ 
            var currText=$(e).text();
            if(filterNames.indexOf(currText)>-1)
            {
                $(e).parent().remove();
                console.log("已清除最新回应里的记录=>" + $(e).parent().find(".ing_comment_gray").text());
            }
        });

        //今日星星排行榜和闪存明星也顺带清一下叭
        $(".right_content_wrapper2 a").each(function(i,e){ 
            var currText=$(e).text();
            if(filterNames.indexOf(currText)>-1)
            {
                $(e).parent().parent().parent().remove();
                console.log("已清除今日星星排行榜里的记录=>" + currText);
            }
        });

        //最热和最新幸运闪也不要显示啦
        $(".ing_top_block a").each(function(i,e){ 
            var currText=$(e).text();
            if(filterNames.indexOf(currText)>-1)
            {
                $(e).parent().remove();
                console.log("已清除今日最热里的记录=>" + currText);
            }
        });
                
    }
}
var home = new Home();
home.Init();

