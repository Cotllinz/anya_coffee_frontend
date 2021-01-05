import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/Auth'
import RegisUser from './modules/RegisUser'
import createPersistedState from 'vuex-persistedstate'
import product from './modules/product'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, RegisUser, product },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user.role']
    })
  ]
})
