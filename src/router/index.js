import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index/home'
  },
  {
    path: '/index',
    component: () => import('@/views/index'),
    children: [
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
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/demo',
    name: 'demo',
    meta: {
      limit: true
    },
    aaa: 123,
    component: () => import('@/views/mine')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // console.log(1)
  if (to.meta.limit) {
    if (store.state.token) {
      next()
    } else {
      const tem = window.confirm('该功能需要登录后操作')
      console.log(tem)
      if (!tem) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    }
  }
  next()
})
export default router
