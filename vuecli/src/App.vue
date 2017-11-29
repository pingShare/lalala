<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   <h1>HEAD</h1>
   <div>
     <router-link to="/">首页</router-link>
     <router-link to="/test">测试</router-link> 
    <router-link :to="{name:'test1',params:{name:'cc',age:'23'}}">子路由1</router-link>
    <router-link to="/test/test2">子路由2</router-link>
    <router-link to="/testurl/5/lili">测试Url</router-link>
    <router-link to="/home">redirect</router-link>
    <router-link to="/abc">alias</router-link>
   </div>
   <transition name="fade">
      <router-view/>
   </transition>
   
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity 0.5s;
}
.fade-leave-active{
  transition: opacity 0.5s;
  opacity: 0;
}
</style>
