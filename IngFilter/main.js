﻿var Home = function () {
    var _this = this;
    this.Init = function () {
        console.log("插件启动成功！");
        //加载页面时清除一次
        _this.ChearUsers();
        //此后每两秒定时清除一次
        setInterval(_this.ChearUsers, 2000);
    }
    this.ChearUsers = function () {
        var filterNames = new Array("Iamcoming", "沃泽法克", "流年煮雪");
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
}
var home = new Home();
home.Init();