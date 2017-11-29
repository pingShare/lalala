import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import TestUrl from '@/components/TestUrl'
//把地址和组件联系起来



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeRouteEnter: (to, from, next) => {
        console.log('准备进入') ; //此时重定向到这里的也会有钩子效果
        next();
      },
      beforeRouteLeave: (to, from, next) => {
        console.log('准备离开');
        next();
      }
    },{
      path:'/test',
      name:'Test',
      alias:'/abc',
      component:Test,
      children:[
        {
          path:'test1',
          name:'test1',
          component:Test1
        },{
          path:'test2',
          name:'test2',
          component:Test2
        }
      ]
    },{
      path:'/testurl/:userId/:userName',
      component:TestUrl
     
    },{
      path:'/home',
      redirect:'/'
    }
  ]
})
