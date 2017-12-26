<template>
<div class="detail">
    <div class="detail-img"><img :src="detail.img" alt=""></div>
    <div class="detail-info">
      <h4>{{detail.nm}}</h4>
      <p>导演：{{detail.dir}}</p>
       <p>国籍：{{detail.src}}</p>
     <span>上映日期：{{detail.rt}}</span>
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
  /* color:cadetblue */
}
.detail-img,.detail-info{
  display:inline-block;
  vertical-align: top;
}
</style>
