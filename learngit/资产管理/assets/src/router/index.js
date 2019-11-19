import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Right from '@/components/right'
import Right2 from '@/components/right2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:'/right',//默认展示路由重定向
      children:[
        {
          path:'/right',
          name:'right',
          component:Right
        },
        {
          path:'/right2',
          name:'right2',
          component:Right2
        }
      ]
    },
  ]
})
