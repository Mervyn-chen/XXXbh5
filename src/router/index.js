import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import total from '@/components/total'

import load from '@/components/load'
import suggest from '@/components/suggest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'load',
      component: load
    },
    {
      path:'/page',
      name:'total',
      component:total
    },
    {
      path:'/suggest',
      name:'suggest',
      component:suggest
    }
  ]
})
