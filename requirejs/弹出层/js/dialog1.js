/**
 * Created by Thinkpad on 2017/7/28.
 */
//面向过程
requirejs.config({
    paths:{
        jquery:'jquery-1.11.2'
    }
});

define(['jquery'],function ($) {
    function Dialog(settings){
        this.defaultSettings = {
            width: 500,
            height: 300,
            title: "弹出层",
            content: ""
        };
        $.extend(this.defaultSettings, settings);
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$box = $('<div class="dialog-box"></div>');
        this.$title = $('<div class="dialog-title">');
        this.$item = $('<div class="dialog-title-item"></div>');
        this.$close = $('<div class="dialog-title-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');
    }
        Dialog.prototype.open = function () {
             /*$(document.body).html(this.$container);  //这样不对，container会覆盖原有的html内容
             this.$container.append(this.$mask).append(this.$box);*/
            this.$container.append(this.$mask).append(this.$box).appendTo(document.body);  //这样写也对

            this.$box.append(this.$title).append(this.$content);
            this.$title.append(this.$item).append(this.$close);
            this.$item.html(this.defaultSettings.title);
            this.$box.css({
                width: this.defaultSettings.width,
                height: this.defaultSettings.height
            });

            this.$close.on('click',function () {
                this.$container.remove();
                // this.close();
            }.bind(this));
        };
       /* Dialog.prototype.close = function () {
                this.$container.remove();
        };*/
    return Dialog;
});








