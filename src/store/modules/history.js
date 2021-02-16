import axios from 'axios'
export default {
  state: {
    history: [],
    historyDetails: [],
    VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL
  },
  mutations: {
    setHistory(state, payload) {
      state.history = payload.data
    },
    setHistoryDetails(state, payload) {
      state.historyDetails = payload.data
    }
  },
  actions: {
    getHistorybyId(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_SERVICE_URL}history/history/${payload}`)
          .then(res => {
            context.commit('setHistory', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getDetailsHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${context.state.VUE_APP_SERVICE_URL}history/historydetails?id=${payload.id}&idHistory=${payload.historyId}`
          )
          .then(res => {
            context.commit('setHistoryDetails', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    deleteHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${context.state.VUE_APP_SERVICE_URL}history/${payload}}`)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    getHistory(state) {
      return state.history
    },
    getHistoryDetails(state) {
      return state.historyDetails
    }
  }
}
