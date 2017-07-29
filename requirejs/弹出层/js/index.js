/**
 * Created by Thinkpad on 2017/7/28.
 */
requirejs.config({
   paths:{
       jquery:'jquery-1.11.2'
   }
});
/**
 * 1.引入全名，function()内的返回值可写可不写
 * 2.requirejs.config把jquery配置
 */
require(['jquery','dialog1'],function ($, Dialog) {
    $('#btn').on('click',function () {
        var settings = {
            width:400,
            height:300,
            title:"弹出层",
            content:"login.html"
        };
        //dialog.open(settings);

        //面向对象的思想
        var dialog = new Dialog(settings);
        dialog.open();
    });
});












