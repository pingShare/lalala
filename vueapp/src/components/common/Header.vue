<template>
    <div class="header"  :style="{background:color}">
        <a href="" class="home" >首页</a>
        <h2 class="title">
            <slot name="title"></slot>
        </h2>
    </div>
</template>

<script>
export default {
  props:["color"]
}
</script>

<style>
.header{
    width: 100%;
    height: 1rem;
    background-color: blue;
    position: fixed;
    top: 0;
    color: white;
    line-height: 1rem;
}
.home{
    color:#fff;
    text-decoration: none;
    margin-left: .4rem;
    font-weight: bolder;
}
.title{   
    text-align: center;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
</style>
