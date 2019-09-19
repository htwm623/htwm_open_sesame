import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import carParkMap from './page/carParkMap.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'map'

    },
    {
      path:'/map',
      name:'map',
      component:carParkMap
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
