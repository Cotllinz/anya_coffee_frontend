import axios from 'axios'
export default {
  state: {
    userAccount: [],
    VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL,
    images: ''
  },
  mutations: {
    setImages(state) {
      state.images = ''
    },
    updateImages(state, payload) {
      if (payload.data[0].image_user === '') {
        state.images = ''
      } else {
        state.images = payload.data[0].image_user
      }
    },
    Users(state, payload) {
      state.userAccount = payload.data[0]
    }
  },
  actions: {
    getUserAccount(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_SERVICE_URL}user/email/${payload}`)
          .then(res => {
            context.commit('updateImages', res.data)
            context.commit('Users', res.data)
            resolve(res.data.data[0])
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    updateUserAccount(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${context.state.VUE_APP_SERVICE_URL}user/update/${payload.email}`,
            payload.sendData
          )
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
    UserAccount(state) {
      return state.userAccount
    },
    getImages(state) {
      return state.images
    }
  }
}
