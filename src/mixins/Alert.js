export default {
  methods: {
    AlertSuccesLogin(username) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Signed in successfully',
          text: `Hi! ${username} Welcome at Anya Coffee `,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertErrorLogin() {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Your Password Wrong',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          text: 'Something went wrong!'
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertSuccesRegister(userEmail) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Register successfully',
          text: `Please Check Email ${userEmail} For Activation Account`,
          icon: 'success',
          showConfirmButton: false,
          timer: 3500,
          timerProgressBar: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertErrorRegister(text) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Something went wrong!',
          text: `${text}`,
          icon: 'error',
          showConfirmButton: false,
          timer: 3500,
          timerProgressBar: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertSuccesLogout(username) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: `Bye" ${username} see you tomorrow`,
          icon: 'success',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          timerProgressBar: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertSuccesUpdateAccount(username) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: `Update ${username} successfully`,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          timerProgressBar: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertSuccesAddProduct(product) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: `Add Product ${product} successfully`,
          icon: 'success',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          timerProgressBar: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertSuccesAddPromo(text) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: `${text}`,
          icon: 'success',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          timerProgressBar: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertUpdateProduct(product) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: `Update Product ${product} successfully`,
          icon: 'success',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          timerProgressBar: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertUpdatePromo(product) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: `Update Promo for product ${product} successfully`,
          icon: 'success',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          timerProgressBar: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    alertDelete() {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Do You Want Delete this Items?',
          text: "You can't revert your action",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Delete it!',
          cancelButtonText: 'No, Keep it!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
