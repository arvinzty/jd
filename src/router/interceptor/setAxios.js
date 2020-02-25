import axios from 'axios'
import store from '@/store'
// import router from '@/router'
// 设置路由拦截，当请求服务器的时候调用
export default function () {
  axios.interceptors.request.use((config) => {
    // console.log(2)
    if (store.state.token) {
      config.headers.token = store.state.token
      return config
    }
    return config
  })
  axios.interceptors.response.use((config) => {
    // console.log(3)
    if (config.status === 200) {
      return config
    }
    return config
  })
}
