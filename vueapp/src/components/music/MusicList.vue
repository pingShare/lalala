<template>
  <div class="music"  color="yellow">
      <router-link to='MusicDetail'>
         <img :src="'../'+music.bg" alt="" v-for="music in imgList" :key="music.id">
      </router-link>
  </div>
</template>
<script>
import Axios from 'axios'
export default{
    data(){
        return {
            imgList:[]
        }
    },
    mounted(){
        Axios.get("../static/data/musiclist.json").then(res =>{
            // console.log(res);
            this.imgList = res.data.albums;
        }).catch("没有获取到？");
    }
}    
</script>
<style>
.music{
    margin:1rem 0;
}
.music img{
    width: 50%;
}
</style>