<template>
<div>
   <h1>testurl</h1>
  <h1>用户ID：{{$route.params.userId}}
    用户姓名：{{$route.params.userName}}
  </h1>
</div>
 
</template>

<script>
export default{
 /* beforeEnter:(to,from,next)=>{
        console.log(to);
        console.log(from);
        console.log(next);
        next();
      } */
}
</script>

<style scoped>

</style>
