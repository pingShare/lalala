<template>
<div>
    <h1>这是子路由1</h1>
  <h1>姓名：{{$route.params.name}}   年龄：{{$route.params.age}}  </h1> 
 </div>
 
</template>

<script>
export default{
   /* beforeRouteEnter: (to, from, next) => {
        console.log('准备进入') ; //此时重定向到这里的也会有钩子效果
        next();
      },
      beforeRouteLeave: (to, from, next) => {
        console.log('准备离开');
        next();
      } */
}
</script>

<style scoped>

</style>
