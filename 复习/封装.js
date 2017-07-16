/**
 * Created by Thinkpad on 2017/7/10.
 */
/**
 * 绑定事件
 * @param elem
 * @param type
 * @param fn
 */
function addEvent(elem, type, fn) {
    if(elem.addEventListener){//标准
        elem.addEventListener(type, fn, false);
    }else if(elem.attachEvent){
        elem[type+fn] = function () {
            fn.call(elem);
        };
        elem.attachEvent('on'+type, elem[type+fn]);
    }else{
        elem['on' + type] = fn;
    }
}

/**
 * 解除事件
 * @param elem
 * @param type
 * @param fn
 */
function removeEvent(elem, type, fn){
    if (elem.removeEventListener) //标准
        elem.removeEventListener(type,fn);
    else if(elem.detachEvent)
        elem.detachEvent('on'+type,elem[type+fn]);
    else elem['on'+type] = fn;
}

/**
 * 获取元素
 * @param selector
 * @param context
 * @returns {*}
 */
function $(selector,context) {
    context = context||document;
    switch (selector.charAt(0)){
        case '#':
            return document.getElementById(selector.substr(1));
            break;
        case '.':
            return getByClass(selector.substr(1),context);
            break;
        default:
            return document.getElementsByTagName(selector,context);
    }
}

/**
 * 获取当前元素样式
 * @param elem
 * @param attr
 * @returns {*}
 */
function getStyle(elem,attr) {  //能力检测，不测试属于哪种浏览器，只需判断是否支持该语法
    if(elem.currentStyle){   //IE
        return elem.currentStyle[attr];
    }
    else if (window.getComputedStyle){  //标准
        return getComputedStyle(elem,false)[attr];
    }
    else return elem.style[attr];
}


/**
 * css(elem,'width',"200px")  设置
 * css(elem,"width")  获取
 * @param elem
 * @param attr
 * @param value
 * @returns {*}
 */
function css(elem,attr,value) {
    function css(elem,attr,value) {   //%,px,40,颜色NaN...
        if (value) {   //传了值，三个参数   设置值
            if (isNaN(value)){  //颜色。。。
                elem.style[attr] = value;
                // console.log('isnan');
                // console.log(elem.style[attr]);
            }
            else{
                // console.log('是数字');
                elem.style[attr] = parseInt(value) +'px';
                // console.log(elem.style[attr]);
            }
        }
        else{  //两个参数，取值
            if(typeof attr ==="string")
                console.log(getStyle(elem,attr));
//                    return  getStyle(elem,attr);
            else{
                console.log('notstring');
                for(var p in attr){
                    switch (p){
                        case 'width':
                        case 'height':
                        case 'padding':
                        case 'paddingLeft':
                        case 'paddingRight':
                        case 'paddingTop':
                        case 'paddingBottom':
                            value = /\%/.test(attr[p])?attr[p]:Math.max(parseInt(attr[p]),0) + 'px';
                            break;
                        case 'left':
                        case 'top':
                        case 'bottom':
                        case 'right':
                        case 'margin':
                        case 'marginLeft':
                        case 'marginRight':
                        case 'marginTop':
                        case 'marginBottom':
                            value = /\%/.test(attr[p])?attr[p]:parseInt(attr[p]) + 'px';
                            break;
                        default:value = attr[p];
                    }
                    elem.style[p]=value;
                }
            }
        }
    }
}

/**根据className获取元素
 * @param className
 * @param context
 * @returns {Array}
 * var oUl = document.getElementById("ul1");
   var aLi = getByClass("aa",oUl);
 */
function  getByClass(className,context) {
    context = context || document;
    var result = [];
    var arr = context.getElementsByTagName("*");
    var re = new RegExp("\\b"+className+"\\b");   //创建 RegExp 对象不用加//
    for (i = 0;i<arr.length;i++){
        if (re.test(arr[i].className))
        {
            result.push(arr[i]);
        }
    }
    return  result;
}

/**
 * 元素操纵
 *标准浏览器：remove(删除（并返回）当前节点的指定子节点)  insertbefore(要插入的，已存在的)  append  replaceChild
 */
function remove(elem) {
    var oParent = elem.parentNode.removeChild(elem);
}

/**
 * 兄弟节点
 * @param elem
 */
function sibilings(elem) {
    var bro = [];
    var oParent = elem.parentNode;
    var aChildren = oParent.childNodes;
    for (var i = 0;i<aChildren.length;i++){
        if (aChildren[i] != elem){
            bro.push(aChildren[i]);
        }
    }
    return bro;
}
/*c=sibilings(aLi[0]);
console.log(sibilings(aLi[0]));*/

/**
 * 在给定的当前元素的前面插一个新元素   //用父元素进行操作 父元素.inserbefore(old,new)
 */
function before(elem,newelem) {
    elem.parentNode.insertBefore(elem,newelem);
}

/**
 * 在给定的当前元素的后面插一个新元素
 */
function after(elem,newNode) {
    var oParent = elem.parentNode;
    if(elem.nextSibling === null) oParent.appendChild(newNode);
    else {
        oParent.insertBefore(newNode,elem.nextSibling);
    }
}

/**
* 返回指定的元素的前一个元素兄弟
* @param elem
* @return 指定的元素的前一个元素兄弟
    */
function prev(elem) {
    do{
        var elem = elem&&elem.previousSibling;
    }while (elem&&elem.nodeType != 1)  //满足条件执行循环
    return elem;
}

/**
 * 查找指定元素的第一个孩子节点
 * @param elem
 */
function first(elem){
    elem = elem.firstChild;
    return elem.nodeType == 1 ? elem:next(elem);
}

/**
 * 返回指定的元素的下一个元素兄弟
 * @param elem
 * @returns {*}
 */
function next(elem){
    do {
        elem = elem&&elem.nextSibling;   //
    }while  (elem&&elem.nodeType!=1)
    return elem;
}

/**
 *查找指定元素的最后一个孩子节点
 * @param elem
 */
function last(elem) {
    elem = elem.lastChild;
    return elem.nodeType == 1? elem:prev(elem);
}

function insertbefore(newNode,oldNode) {

}
/**
 *深克隆
 * @param obj
 * @returns {{}}
 */
function clone(obj) {
    var newobj = {};  //输出object{name:...}    =[]则输出[name:....]
    for (var p in obj){
        if (obj[p]==="object"){
            newobj[p] = clone(obj[p]);
        }
        else newobj[p] = obj[p];
    }
    return newobj;
}

/**
 * newobj往obj里合并
 * @param obj
 * @param newobj
 * @returns {*}
 */
function extend(obj,newobj) {
    for(var p in newobj){
        if(newobj[p] === 'object'){
            obj[p] = newobj.clone(newobj[p]);
        }
        else{
            obj[p] = newobj[p];
        }
    }
    return obj;
}

/**
 * 去掉首尾空格
 * @param str
 */
function trim(str) {
    return str.replace(/^\s+|\s+$/,'');
}