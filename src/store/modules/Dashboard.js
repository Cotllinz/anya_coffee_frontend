import axios from 'axios'
export default {
  state: {
    totalDay: 0,
    totalYear: 0,
    showChart: false,
    totalOrderMonth: 0,
    chartData: {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0
    },
    VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL
  },
  mutations: {
    setTotalDays(state, payload) {
      if (payload.data.length > 0) {
        state.totalDay = payload.data[0].totalPrice
      } else {
        state.totalDay = 0
      }
    },
    setTotalOrder(state, payload) {
      if (payload.data.length > 0) {
        state.totalOrderMonth = payload.data[0].totalOrder
      } else {
        state.totalOrderMonth = 0
      }
    },
    setTotalYears(state, payload) {
      if (payload.data.length > 0) {
        state.totalYear = payload.data[0].totalPrice
      } else {
        state.totalYear = 0
      }
    },
    setChart(state, payload) {
      /* Tanyakkan Mas Bagus */
      state.showChart = true
      for (let i = 0; i < payload.data.length; i++) {
        if (payload.data[i].Month == 1) {
          state.chartData.January = payload.data[i].Price
        }
        if (payload.data[i].Month == 2) {
          state.chartData.February = payload.data[i].Price
        }
        if (payload.data[i].Month == 3) {
          state.chartData.March = payload.data[i].Price
        }
        if (payload.data[i].Month == 4) {
          state.chartData.April = payload.data[i].Price
        }
        if (payload.data[i].Month == 5) {
          state.chartData.May = payload.data[i].Price
        }
        if (payload.data[i].Month == 6) {
          state.chartData.June = payload.data[i].Price
        }
        if (payload.data[i].Month == 7) {
          state.chartData.July = payload.data[i].Price
        }
        if (payload.data[i].Month == 8) {
          state.chartData.August = payload.data[i].Price
        }
        if (payload.data[i].Month == 9) {
          state.chartData.September = payload.data[i].Price
        }
        if (payload.data[i].Month == 10) {
          state.chartData.October = payload.data[i].Price
        }
        if (payload.data[i].Month == 11) {
          state.chartData.November = payload.data[i].Price
        }
        if (payload.data[i].Month == 12) {
          state.chartData.December = payload.data[i].Price
        }
      }
      console.log(state.chartData)
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
    },
    getChart(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_SERVICE_URL}dashboard/chartMount`)
          .then(res => {
            context.commit('setChart', res.data)
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
    },
    sendChart(state) {
      return state.chartData
    },
    turnOnchart(state) {
      return state.showChart
    }
  }
}
