import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import setAxios from '@/router/interceptor/setAxios.js'
setAxios()
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// router.beforeEach((to, from, next) => {
//   console.log(1)
//   if (to.limit) {
//     if (store.state) {
//       next()
//     }
//     console.log('请登录后访问')
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }
//     })
//   }
//   next()
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
