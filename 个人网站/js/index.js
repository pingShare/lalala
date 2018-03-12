require(["jquery-1.11.2", "carousel"], function($, Carousel){
    var imgs1 = ["img/img1.jpg", "img/img2.jpg","img/img3.jpg"];
    var setting1 = {
        selector : "#hobby-container",
        imgArr : imgs1,
        speed : 2500,
        buttonStyle : "square",//circle
        arrowsPos : "bottom"//center
    };

    var carousel1 = new Carousel(setting1);
    carousel1.init();
})