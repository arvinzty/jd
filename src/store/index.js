import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    setToken (state, token) {
      // window.localStorage.setItem('token', token)
      state.token = token
      console.log(state.token)
    }
  },
  actions: {
  },
  modules: {
  }
})
