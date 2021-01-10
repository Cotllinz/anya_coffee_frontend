import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/Auth'
import RegisUser from './modules/RegisUser'
import createPersistedState from 'vuex-persistedstate'
import product from './modules/product'
import promo from './modules/Promo'
import Dashboard from './modules/Dashboard'
import accountUser from './modules/accountUser'
import history from './modules/history'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, RegisUser, product, promo, Dashboard, accountUser, history },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user.role', 'Auth.user.userEmail', 'Auth.user.userId']
    })
  ]
})
