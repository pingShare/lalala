/**
 * Created by Thinkpad on 2017/6/22.
 */

(function () {
    var oBigPic = document.getElementById("bigpic");   //上面的大图片
    var oSmallPic = document.getElementById("smallpic");  //div
    var aSmpic = oSmallPic.getElementsByTagName("img");  //下面的四个小图片
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var nowindex = 0;

    for(var i=0;i<aSmpic.length;i++){
        aSmpic[i].index = i;
        aSmpic[i].onclick = function () {
            nowindex = this.index;
            ChangeImg();
        }
    }

    oLeft.onclick = oRight.onclick = function () {
        if(this === oLeft){
            nowindex--;
            if(nowindex == -1){
                nowindex = aSmpic.length-1;
            }
        }
        else{
            nowindex++;
            if(nowindex == aSmpic.length){
                nowindex = 0;
            }
        }
       ChangeImg();
    }

    function ChangeImg() {
        for(var i=0;i<aSmpic.length;i++){
            aSmpic[i].className = "";
        }
        aSmpic[nowindex].className = "select";
        oBigPic.src = aSmpic[nowindex].src;

        var left = 0;
        /*if(nowindex == 0){
            left = 0;
        }
        else{
            left = 1;
        }
        animate(oSmallPic, {
            left: -(aSmpic[0].offsetWidth) * left
        });*/
        console.log(aSmpic[0].offsetWidth);

        if(nowindex == 0){
            oSmallPic.style.left = 0;
        }
        else{
            oSmallPic.style.left = -(aSmpic[0].offsetWidth) + "px";
        }
    }


})();