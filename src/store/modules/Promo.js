import axios from 'axios'
export default {
  state: {
    promo: [],
    product: [
      {
        text: 'Search Product Discount',
        value: null
      }
    ],
    discount: [
      { text: '10 %', value: 10 },
      { text: '20 %', value: 20 },
      { text: '30 %', value: 30 },
      { text: '40 %', value: 40 },
      { text: '50 %', value: 50 },
      { text: '60 %', value: 60 },
      { text: '70 %', value: 70 },
      { text: '80 %', value: 80 },
      { text: '85 %', value: 85 }
    ],
    image: '',
    OptionDiscount: [],
    totalRows: null,
    limit: 1,
    page: 1,
    price: 0,
    VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL
  },
  mutations: {
    setPromo(state, payload) {
      state.promo = payload.data
      state.totalRows = payload.pagination.totalProduct
    },
    changepagePromo(state, payload) {
      state.page = payload
    },
    setProductforpromo(state, payload) {
      /*   if (!res.data.data[i].code_discount) */
      state.product = [
        {
          text: 'Search Product Discount',
          value: null
        }
      ]
      for (let i = 0; i < payload.data.length; i++) {
        const data = {
          text: payload.data[i].name_product,
          value: payload.data[i].id_product,
          price_product: payload.data[i].price_product,
          images: payload.data[i].image_product
        }
        state.product = [...state.product, data]
      }
      state.OptionDiscount = [
        {
          text: 'Input Discount',
          value: null
        }
      ]
      state.image = ''
    },
    getPrice(state, payload) {
      for (let i = 0; i < state.product.length; i++) {
        if (payload === state.product[i].value) {
          state.price = state.product[i].price_product
          state.image = state.product[i].images
        }
      }
    },
    getDiscountCP(state) {
      for (let i = 0; i < state.discount.length; i++) {
        let hitung = state.price * (state.discount[i].value / 100)
        let hasil = state.price - Math.round(hitung)
        const result = {
          text: state.discount[i].text + ' => ' + hasil,
          value: state.discount[i].value
        }
        if (state.price === undefined) {
          state.OptionDiscount = [...state.OptionDiscount]
        } else {
          state.OptionDiscount = [...state.OptionDiscount, result]
        }
      }
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
    },
    getProductforPromo(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_SERVICE_URL}product`)
          .then(result => {
            context.commit('setProductforpromo', result.data)
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
    },
    getProductforPromo(state) {
      return state.product
    },
    getOptionDiscount(state) {
      return state.OptionDiscount
    },
    getImage(state) {
      return state.image
    }
  }
}
