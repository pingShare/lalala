/**
 * Created by Thinkpad on 2017/7/29.
 */

requirejs.config({
    paths:{
        jquery:'jquery-1.11.2'
    }
});

require(["jquery","carousel"],function ($,Carousel) {

    var imgs1 = ['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg'];
  var settings1 = {
      imgAttr:imgs1,
      selector:'#container',
      speed:1000,
      buttonStyle:'square',
      arrowPos:"bottom"
  };
  var carousel1 = new Carousel(settings1);
  carousel1.init();

    var imgs2 = ['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg'];
    var settings2 = {
        imgAttr:imgs2,
        selector:'#container',
        speed:1000,
        buttonStyle:'circle',
        arrowPos:"center"
    };
    var carousel2 = new Carousel(settings2);
    carousel2.init();


});

