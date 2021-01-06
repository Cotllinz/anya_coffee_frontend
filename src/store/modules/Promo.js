import axios from 'axios'
export default {
  state: {
    promo: [],
    totalRows: null,
    limit: 1,
    page: 1,
    VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL
  },
  mutations: {
    setPromo(state, payload) {
      state.promo = payload.data
      state.totalRows = payload.pagination.totalProduct
    },
    changepagePromo(state, payload) {
      state.page = payload
    }
  },
  actions: {
    getPromo(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${context.state.VUE_APP_SERVICE_URL}promo/limit?page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(result => {
            context.commit('setPromo', result.data)
            resolve(result)
          })
          .catch(err => {
            console.clear()
            reject(err.response)
          })
      })
    }
  },
  getters: {
    getPagePromo(state) {
      return state.page
    },
    getLimitPromo(state) {
      return state.limit
    },
    getDataPromo(state) {
      return state.promo
    },
    getTotalRowsPromo(state) {
      return state.totalRows
    }
  }
}
