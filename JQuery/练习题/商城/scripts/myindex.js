/**
 * Created by Thinkpad on 2017/7/19.
 */

$(function () {
    $("#inputSearch").on("focus",function () {
        // console.log($input.value);
        // console.log(this.value);
        if(this.value == this.defaultValue){
            this.value = "";
        }
    }).on("blur",function () {
        if (this.value == '')
            this.value = this.defaultValue;
    })






});