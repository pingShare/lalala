<template>
<div class="movieList">  
    <ul>  <!--  -->
        <li @click='goDetail(movie.id)' v-for="movie in movieList" :key="movie.id" class="movie">
            <div class="movie-img">
                <img :src="movie.img" alt="">
            </div>
            <div class="movie-info">
                <p>{{movie.nm}}<p>{{movie.ver}}</p></p>
                <p>导演：{{movie.dir}}</p>
                <p>类型：{{movie.cat}}</p>
                <p>主演：{{movie.star}}</p>
                <p>{{movie.showInfo}}</p>
            </div>
        </li>
       
  </ul>
    <div class="loading">
        <img src="../../assets/img/loading.gif" alt="" v-show="loadingShow">    
    </div>
    <div class="tip" v-show="tip">
        <p>已经到底了</p>
    </div>
</div> 
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      loadingShow: true,
      tip: false
    };
  },
  methods: {
     goDetail(movieId){
         console.log(movieId);
          this.$router.push('/movie/MovieDetail/'+movieId);
      },
    loadData() {
      let url1 =
        API_PROXY +
        "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=" +
        this.movieList.length;
      let url2 = "/static/moviedata.json";
      Axios.get(url2)
        .then(res => {
            this.loadingShow = true;
          let List = res.data.data.movies; //36个
          let newData = List.slice(
            this.movieList.length,
            this.movieList.length + 10
          );
          if (newData.length < 10) this.tip = true;
          this.movieList = this.movieList.concat(newData);
        /*   console.log(newData);
          console.log(newData.length);     
            console.log(this.movieList);
            console.log(this.movieList.length); */
        })
        .catch(() => {
          console.log("获取失败");
        });
    }
  },
  mounted() {
      this.loadData();
    window.onscroll = () => {
      // this.loadingShow=false;
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
    //   console.log(clientHeight, scrollTop, scrollHeight);
      if (clientHeight + scrollTop == scrollHeight) {
        this.loadingShow = true;
        if(!this.tip){  //没有
            this.loadData();
        }else {
            this.loadingShow = false;
        }
    
      }
    };
  }
};
</script>

<style>
.movieList {
  margin: 1rem 0.3rem;
}
.loading {
  text-align: center;
}
.movie {
  display: flex;
  padding: 0.2rem;
  border-bottom: 1px solid #ccc;
}
.movie-img {
  flex-grow: 1;
  width: 0;
}
.movie-img img {
  width: 100%;
}
.movie-info {
  flex-grow: 2;
  width: 0;
  margin-left: 0.2rem;
}
.tip {
  text-align: center;
}
</style>
