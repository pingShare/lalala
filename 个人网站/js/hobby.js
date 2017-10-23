/*requirejs.config({
    paths:{
        jquery:'jquery-1.11.2'
    }
});

require(["jquery","carousel"],function ($,Carousel) {
    var imgs1 = ['img/hobby-cat.jpg','img/hobby-cat.jpg'];
    var settings1 = {
      imgAttr:imgs1,
      selector:'#hobby',
      speed:1000,
      buttonStyle:'square',
      arrowPos:"bottom"
  };
  var carousel1 = new Carousel(settings1);
  carousel1.init();

});*/
/*

require(["jquery-1.11.2", "carousel"], function($, Carousel) {
    var imgs1 = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
    var setting1 = {
        selector: "#hobby",
        imgArr: imgs1,
        speed: 500,
        buttonStyle: "square",//circle
        arrowsPos: "bottom"//center
    };
    var carousel1 = new Carousel(setting1);
    carousel1.init();

}*/
require(["jquery-1.11.2", "carousel"], function($, Carousel){
    var imgs1 = ["img/hobby-cat.jpg", "img/hobby-cat.jpg","img/hobby-cat.jpg","img/img/hobby-cat.jpg"];
    var setting1 = {
        selector : "#hobby",
        imgArr : imgs1,
        speed : 500,
        buttonStyle : "square",//circle
        arrowsPos : "bottom"//center
    };

    var carousel1 = new Carousel(setting1);
    carousel1.init();

});