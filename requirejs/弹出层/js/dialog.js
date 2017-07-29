/**
 * Created by Thinkpad on 2017/7/28.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.11.2'
    }
});

define(['jquery'],function ($) {
    return{
        open:function (settings) {
            var defaultSettings = {
                width:500,
                height:300,
                title:"弹出层",
                content:""
            };
            $.extend(defaultSettings,settings);
            var html = '<div class="dialog-container">'
                +'<div class="dialog-mask"></div>'
                + '<div class="dialog-box">'
                + '<div class="dialog-title">'
                +'<div class="dialog-title-item">'+defaultSettings.title+'</div>'
                +'<div class="dialog-title-close">[X]</div>'
                +' </div>'
                +'<div class="dialog-content">'+defaultSettings.content+'</div>'
                +' </div>'
                +'</div>';
            $(document.body).append(html);

            if (defaultSettings.content.indexOf(".html") != '-1')   //要检索的没有出现返回-1
                $(".dialog-content").load(defaultSettings.content);
            else {
                $(".dialog-content").html(defaultSettings.content);
            }
            $(".dialog-box").css({
                width:defaultSettings.width,
                height:defaultSettings.height,
            });
            $(".dialog-title-close").on("click",function () {
               $(this).parents(".dialog-container").remove();
                // $(".dialog-container")
            });
        }
    }

});







