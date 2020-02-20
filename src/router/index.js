import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index/home'
  },
  {
    path: '/index',
    childs: [
      {
        path: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'ious',
        component: () => import('@/views/ious')
      },
      {
        path: 'money',
        component: () => import('@/views/money')
      },
      {
        path: 'raise',
        component: () => import('@/views/raise')
      },
      {
        path: 'mine',
        component: () => import('@/views/mine')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
