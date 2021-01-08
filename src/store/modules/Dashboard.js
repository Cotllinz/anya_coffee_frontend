import axios from 'axios'
export default {
  state: {
    totalDay: 0,
    totalYear: 0,
    totalOrderMonth: 0,
    VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL
  },
  mutations: {
    setTotalDays(state, payload) {
      state.totalDay = payload.data[0].totalPrice
    },
    setTotalOrder(state, payload) {
      state.totalOrderMonth = payload.data[0].totalOrder
    },
    setTotalYears(state, payload) {
      state.totalYear = payload.data[0].totalPrice
    }
  },
  actions: {
    subTotaldays(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_SERVICE_URL}dashboard/day`)
          .then(res => {
            context.commit('setTotalDays', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    TotalOrdermonth(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_SERVICE_URL}dashboard/month`)
          .then(res => {
            context.commit('setTotalOrder', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    subTotalYears(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_SERVICE_URL}dashboard/year`)
          .then(res => {
            context.commit('setTotalYears', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    getSubtotalDays(state) {
      return state.totalDay
    },
    getTotalOrder(state) {
      return state.totalOrderMonth
    },
    getSubTotalYears(state) {
      return state.totalYear
    }
  }
}
