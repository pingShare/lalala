<template>
  <div class="detail" :style="styleObj">
      <!-- <h2>{{$route.params.index}}</h2> -->
    
  </div>
</template>
<script>
export default{
    data(){
        return{
            styleObj:{
                background: `#000 url(${this.$store.state.photoList[this.$route.params.index]}.src) no-repeat center/contain`
            }
        }
    },
mounted(){
    console.log(this.$store.state.photoList[this.$route.params.index].src);
}
}    
</script>
<style scope>
.detail{
    margin:1rem 0;
    position:absolute;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
}

</style>