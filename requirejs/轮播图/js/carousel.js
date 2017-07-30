/**
 * Created by Thinkpad on 2017/7/29.
 */
requirejs.config({
    paths : {
        jquery: "jquery-1.11.2"
    }
});
define(['jquery'],function ($) {
    function Carousel(settings) {
        this.defaultSettings={
            imgAttr:[],
            selector:document.body,
            speed:500,
            buttonStyle:'square',
            arrowPos:"bottom"
        };
        $.extend(this.defaultSettings,settings);
        this.$container = $('<div class="carousel-container"></div>');
        this.$images = $('<div class="carousel-images"></div>');
        this.$num = $('<ul class="carousel-num"></ul>');
        this.$arrow = $('<div class="carousel-arrows"></div>');
        this.$left = $('<div class="carousel-left">&lt;</div>');
        this.$right = $('<div class="carousel-right">&gt;</div>');
    }


    Carousel.prototype.init = function () {
        this.nowindex = 0;
        this.$container.append(this.$images).append(this.$num).append(this.$arrow).appendTo(document.body);
        this.$arrow.append(this.$left).append(this.$right);
        for(i=0; i<this.defaultSettings.imgAttr.length; i++){
            this.$images.append('<img src="'+this.defaultSettings.imgAttr[i]+'">');
             this.$num.append('<li>'+(i+1)+'</li>');
        }
        if(this.defaultSettings.buttonStyle=='circle'){
               $('li',this.$num).css({
                       borderRadius:'50%'}).html('');
        }
        this.$left.addClass(this.defaultSettings.arrowPos);
        this.$right.addClass(this.defaultSettings.arrowPos);
        $("img",this.imgs1).eq(0).addClass("select");
        $("li",this.$num).eq(0).addClass("select");
        $('li',this.$num).on('mouseover',function (e) {
                this.nowindex = $(e.target).index();
                $('li',this.$num).eq(this.nowindex).addClass('select').siblings().removeClass('select');
                $('img',this.$images).eq(this.nowindex).addClass('select').siblings().removeClass('select');
        }.bind(this));
        this.$left.on('click',function () {
            this.nowindex--;
            if (this.nowindex==-1){
                this.nowindex = this.defaultSettings.imgAttr.length-1;
            }
            $('li',this.$num).eq(this.nowindex).addClass('select').siblings().removeClass('select');
            $('img',this.$images).eq(this.nowindex).addClass('select').siblings().removeClass('select');
        }.bind(this));
        this.$right.on('click',function () {
            this.nowindex++;
            if (this.nowindex==this.defaultSettings.imgAttr.length){
                this.nowindex = 0;
            }
            $('li',this.$num).eq(this.nowindex).addClass('select').siblings().removeClass('select');
            $('img',this.$images).eq(this.nowindex).addClass('select').siblings().removeClass('select');
        }.bind(this));

        this.$container.hover(function () {
           clearInterval(this.timer);
        }.bind(this),function () {
           /* setInterval(function () {
                this.timer = this.$right.trigger("click");
            }.bind(this),this.defaultSettings.speed)*/
            play.call(this);
        }.bind(this));

        play.call(this);       //为什么用call
        function play(){
            this.timer =setInterval(function () {
                this.$right.trigger("click");
            }.bind(this),this.defaultSettings.speed)
        }

    };


    return Carousel;
});
