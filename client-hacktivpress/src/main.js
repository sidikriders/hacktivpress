// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.use(Vuex)

Vue.config.productionTip = false

var store = new Vuex.Store({
  state: {
    msg: "test dlu",
    isLogin: false,
    currUser: ""
  },
  mutations: {
    loginGoGo (state, payload) {
      state.isLogin = true
      state.currUser = payload.name
    },
    logoutGoGo (state) {
      state.isLogin = false
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
