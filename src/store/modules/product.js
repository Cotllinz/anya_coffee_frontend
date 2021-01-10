import axios from 'axios'
export default {
  state: {
    limit: 12,
    page: 1,
    productList: [],
    totalRows: null,
    VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL,
    width: 0,
    search: '',
    sort: ''
  },
  mutations: {
    setProduct(state, payload) {
      state.productList = payload.data
      state.totalRows = payload.pagination.totalProduct
    },
    changeSort(state, payload) {
      state.sort = payload
    },
    changePage(state, payload) {
      state.page = payload
    },
    search(state, payload) {
      state.search = payload
    },
    delSearch(state, payload) {
      state.search = payload
    },
    setCategory(state, payload) {
      state.productList = payload.data
      state.totalRows = payload.pagination.totalCategory
    }
  },
  actions: {
    handleResize(context) {
      if ((context.state.width = window.innerWidth) < 578) {
        context.state.limit = 6
      }
    },
    getCategory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${context.state.VUE_APP_SERVICE_URL}category/limit?category=${payload}&limit=${context.state.limit}&page=${context.state.page}&sort=${context.state.sort}`
          )
          .then(res => {
            context.commit('setCategory', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getProducts(context, payload) {
      context.dispatch('handleResize')
      let pal
      if (payload) {
        pal = payload
      } else {
        pal = ''
      }
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${context.state.VUE_APP_SERVICE_URL}product/limit?page=${context.state.page}&limit=${context.state.limit}&search=${pal}&sort=${context.state.sort}`
          )
          .then(res => {
            /*    console.log(res) */
            context.commit('search', payload)
            context.commit('setProduct', res.data)
            resolve(res)
          })
          .catch(err => {
            /*       console.log(err) */
            reject(err)
          })
      })
    },
    deleteProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${context.state.VUE_APP_SERVICE_URL}product/delete/${payload}`
          )
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    addProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.VUE_APP_SERVICE_URL}product`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    getProductId(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_SERVICE_URL}product/${payload}`)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    updateProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${context.state.VUE_APP_SERVICE_URL}product/${payload.id}`,
            payload.DataSend
          )
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    }
  },
  getters: {
    getPageProduct(state) {
      return state.page
    },
    getLimitProduct(state) {
      return state.limit
    },
    getDataProduct(state) {
      return state.productList
    },
    getTotalRowsProduct(state) {
      return state.totalRows
    },
    getSearch(state) {
      return state.search
    },
    currentPage(state) {
      return state.currentPage
    }
  }
}
