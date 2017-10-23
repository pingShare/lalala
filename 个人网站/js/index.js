/**
 * Created by Thinkpad on 2017/10/7.
 */

$(function () {   //JQ方法
    $("#top").on("click",function () {
        var target;
        if(document.documentElement.scrollTop)
            target = $("html");
        else
            target = $("body");
        var iScrollTop = target.scrollTop();
        var timer = setInterval(function () {
            //scrollTop()方法返回或设置匹配元素的滚动条的垂直位置
            if (iScrollTop<=0)
                clearInterval(timer);
            target.scrollTop(iScrollTop-=50);
        },50);
//               target.animate({iScrollTop:0},800);
    });

    $(".sub-pro").on("click",function () {
        console.log($(".sub-pro"));
        var aSubPro = document.getElementsByClassName("sub-pro");
        console.log(aSubPro);
        var aPro = document.getElementsByClassName("project-mask");
        console.log(aPro);
        var index = 0;
        console.log("ffff");
        console.log(index);
        for(var i=0; i<aSubPro.length; i++){
            index++;
            console.log(this.index);
            aPro[this.index].style.display = "block";
        }
    })
});

