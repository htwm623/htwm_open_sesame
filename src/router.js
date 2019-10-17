import Vue from 'vue'
import Router from 'vue-router'
import carParkMap from '@/page/carParkMap.vue'
import parkingHome from '@/parking/home.vue'
import choose from '@/page/choose.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'choose'

    },
    {
      path:'/choose',
      component:choose
    },
    {
      path:'/map',
      name:'map',
      component:carParkMap
    },
    {
      path:'/parking',
      name:'parking',
      component:parkingHome,
      children:[
        {
          path:'main',
          component:() => import('@/parking/parkingMain.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
