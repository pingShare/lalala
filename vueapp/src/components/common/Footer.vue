<template>
  <ul class="footer">
      <li><router-link to="/movie/MovieList">电影</router-link></li>
      <li><router-link to="/music/MusicList">歌曲</router-link></li>
      <li><router-link to="/book">书籍</router-link></li>
      <li><router-link to="/photo">图片</router-link></li>
  </ul>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.footer{
    width: 100%;
    height: 1rem;
    background-color: blue;
    position: fixed;
    bottom: 0;
    color: white;
    line-height: 1rem;
    display:flex;
}
li{
    flex-grow: 1;
    text-align: center;
    line-height: 1rem;
    color:white;
}
a{
    color:white;
    list-style:none;
}
</style>
