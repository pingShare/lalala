/**
 * Created by Thinkpad on 2017/6/18.
 */
(function () {
    var oDiv3 = document.getElementById("div3");
    var aBtn = document.getElementsByTagName("button");  //按钮
    var aNum = oDiv3.getElementsByTagName("input"); //件数
    var aPrice = oDiv3.getElementsByTagName("h3");  //价格
    var oTotalPrice = document.getElementById("total-price");
    var oTotalNum = document.getElementById("total-num");
    // var oDiv = document.getElementById("clear");
    var oClear = document.getElementById("clear");

    for(var i=0;i<aBtn.length;i++){
        aBtn[i].index = i;
        aBtn[i].onclick = function () {
            oTotalPrice.innerHTML = parseFloat(oTotalPrice.innerHTML) +　(aPrice[this.index].innerHTML).substr(1) * aNum[this.index].value;
            oTotalNum.innerHTML = parseInt(oTotalNum.innerHTML)　+　parseInt(aNum[this.index].value);
    }

    oClear.onclick = function () {
        oTotalPrice.innerHTML = "0.0";
        oTotalNum.innerHTML =" 0";
    }



    }


})();


