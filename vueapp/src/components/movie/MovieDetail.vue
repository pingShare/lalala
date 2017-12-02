<template>
<div class="detail">
    <div class="detail-img"><img :src="detail.img" alt=""></div>
    <div class="detail-info">
      <h4>{{detail.nm}}</h4>
      <p>{{detail.dir}}</p>
    </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
      return{
        detail:{}
      }
    },
    mounted(){
       let url1 =
        API_PROXY +
        "http://m.maoyan.com/movie/" +
        this.$route.params.moveId +'.json';
      let url2 = "/static/data/moviedetail.json";
      Axios.get(url2).then( res =>{
        this.detail = res.data.data.MovieDetailModel;
        //  console.log(this.detail);
      }).catch();
    }
}
</script>

<style>
.detail{
  margin: 1rem 0;
}
</style>
