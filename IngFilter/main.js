var Home = function () {
    var _this = this;
    this.Init = function () {
        console.log("插件启动成功！");
        //加载页面时清除一次
        _this.ChearUsers();
        //此后每两秒定时清除一次
        setInterval(_this.ChearUsers, 2000);
        //刷星
        //setTimeout(_this.Refresh, 1000*60*5);
    }
    this.ChearUsers = function () {
        var filterNames = new Array("测试人员01", "测试人员02", "测试人员03");
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
    }
    this.Refresh=function(){
        console.log("刷星~");
        window.confirm = function (msg, callBack) {return true}
        $("#txt_ing").val("_this.GetCurrTime()");
        $("#btn_ing_publish").trigger("click")
        $("#ing_my").trigger("click")
        if (!$("#feed_list").find("ul").children().eq(0).find("[title='调皮星']")[0]||!$("#feed_list").find("ul").children().eq(0).find("[title='可爱星']")[0]) {
            var id = $("#feed_list").find("ul").children().eq(0).find("#max_ing_id").html();
            console.log(id)
            $("#feed_list").find("ul").children().eq(0).find("[class='recycle']").trigger("click")
        }
    }
    this.GetCurrTime=function(){
        var date=new Date();
        var year=date.getFullYear();
        var month=date.getMonth()+1;
        var day=date.getDate();
        var hour=date.getHours();
        var minute=date.getMinutes();
        var second=date.getSeconds();
        //这样写显示时间在1~9会挤占空间；所以要在1~9的数字前补零;
        if (hour<10) {
            hour='0'+hour;
        }
        if (minute<10) {
            minute='0'+minute;
        }
        if (second<10) {
            second='0'+second;
        }
        var x=date.getDay();//获取星期
        return year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second 
    }
}
var home = new Home();
home.Init();

