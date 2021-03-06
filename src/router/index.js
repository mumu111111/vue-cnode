import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      component: ()=>
        import('@/components/home.vue')
      
    },
    {
      path: '/about',
      component: ()=>
        import('@/components/about.vue')
    },
    {
      path: '/topic/:topicId',
      component: ()=>
        import('@/components/topic.vue')
    }
  ]
})
export default router
