<template>
  <ul class="photo clearfix">
    <li  v-for="(photo,index) in photolist" :key="index">
       <router-link :to="'PhotoDetail/'+index">
            <img :src="photo.src" alt="">
        </router-link> 
    </li>
  </ul>
</template>
<script>
import Axios from "axios";
export default {
    data(){
        return{
            photolist:[]
        };
    },
  mounted() {
    Axios.get("../static/data/photodata.json")
      .then(res=>{
        //    console.log(res);
        this.photolist = res.data.photoData;
        // console.log(this.photolist);
        //存到vuex
        this.$store.dispatch('setPhotoList',res.data.photoData)
      })
      .catch(err=>{});
  }
};
</script>
<style scope>
 @import url('../../assets/css/common.css'); /*如何引入css文件 */
.photo {
  margin: 1rem 0;
}
img{
    width: 50%;
    float: left;  
}
img::after{
    content:'';
    display: inline;
    clear: both;
}

</style>