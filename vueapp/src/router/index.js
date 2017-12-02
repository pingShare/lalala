import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import CommonHeader from '@/components/common/Header'
// import commonFooter from '@/components/common/Footer'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'
import Music from '@/components/music/Music'
import MusicList from '@/components/music/MusicList'
import MusicDetail from '@/components/music/MusicDetail'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/movie/MovieList'
    },{
      path:'/movie',
      component:Movie,
      children:[
        {
          path:'MovieList',
          component:MovieList
        },{
          path:'MovieDetail/:movieId',
          component:MovieDetail
        }
      ]
    },{
      path:'/music',
      component:Music,
      children:[{
        path:'MusicList',
        component:MusicList
      },{
        path:'MusicDetail',
        component:MusicDetail
      }]
    },{
      path:'/book',
      component:Book
    },{
      path:'/photo',
      component:Photo
    }

  ]
})
