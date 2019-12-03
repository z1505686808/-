import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ()=>import('../views/index/index.vue'),
    redirect:'/sy',
    children:[
      {
        path:'sy',
        component:()=>import('../views/index/sy/sy.vue')
      },
      {
        path:'cd',
        component:()=>import('../views/index/cd/cd.vue')
      },
      {
        path:'dd',
        component:()=>import('../views/index/dd/dd.vue')
      },
      {
        path:'shop',
        component:()=>import('../views/index/shop/shop.vue')
      },
      {
        path:'my',
        component:()=>import('../views/index/my/my.vue')
      }
    ]
  },{
    path: '/xq',
    component: ()=>import('../views/xq/xq.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
