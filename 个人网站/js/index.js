/* requirejs.config({
    paths : {
        jquery: "jquery-1.11.2"
    }
}); */
require(["jquery-1.11.2", "carousel"], function($, Carousel){
    var imgs1 = ["img/hobby-cat.jpg", "img/hobby-cat.jpg","img/hobby-cat.jpg","img/hobby-cat.jpg"];
    var setting1 = {
        selector : ".container",
        imgArr : imgs1,
        speed : 500,
        buttonStyle : "square",//circle
        arrowsPos : "bottom"//center
    };
})
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

    /* $(".sub-pro").on("click",function () {
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
    }) */
    $('.canvas').radialIndicator({
        barColor: {
           70: '#FF0000',
            80: '#FFFF00',
            90: '#0066FF',
            100: '#33CC33'
        },
        percentage: true,
        radius: 70,
        minValue:0,
        maxValue: 100
    });

    $('div.canvas:eq(0)').data('radialIndicator').animate(70);
    $('div.canvas:eq(1)').data('radialIndicator').animate(80);
    $('div.canvas:eq(2)').data('radialIndicator').animate(75);
    $('div.canvas:eq(3)').data('radialIndicator').animate(70);
});

