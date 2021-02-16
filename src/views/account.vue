<template>
  <div class="Account">
    <Navbar :msg="MassageValue" />
    <main class="bg__account">
      <hr class="mt-lg-3 d-none d-lg-block" />
      <b-container class="mt-lg-4 pt-lg-2 pt-4 pb-5 pb-lg-5">
        <h2 class="title ml-lg-1 mt-lg-4 mb-3 mb-lg-4">User Profile</h2>
        <b-form @submit.prevent="sendData">
          <div class="card__account p-lg-5 pt-4">
            <b-row>
              <LCA :dataForm="form" @ImagesSend="ImagesSend" />
              <RCA :dataForm="form" />
            </b-row>
          </div>
        </b-form>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import LCA from '../components/_base/Account/LeftComponentAcc'
import RCA from '../components/_base/Account/rightComponentAcc'
import { mapActions, mapMutations } from 'vuex'
import AlertMixins from '../mixins/Alert'
export default {
  name: 'Account',
  mixins: [AlertMixins],
  components: {
    Navbar,
    Footer,
    LCA,
    RCA
  },
  data() {
    return {
      email: '',
      MassageValue: 30,
      form: {
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        userImage: '',
        dateBirth: '',
        phoneNumber: '',
        addressUser: '',
        Gender: '',
        images: ''
      }
    }
  },
  created() {
    this.email = this.$route.params.emailAcc
    this.getUserAccount(this.email).then(result => {
      this.form.userName = result.username
      this.form.firstName = result.first_name
      this.form.lastName = result.last_name
      this.form.images = result.image_user
      this.form.dateBirth =
        result.date_birth === '0000-00-00' ? '' : result.date_birth
      this.form.phoneNumber = result.phone_number
      this.form.addressUser = result.address_user
      this.form.Gender = result.gender
      this.form.email = result.email_user
    })
  },
  methods: {
    ...mapActions(['getUserAccount', 'updateUserAccount']),
    ...mapMutations(['setImages']),
    sendData() {
      const {
        userName,
        firstName,
        lastName,
        userImage,
        dateBirth,
        phoneNumber,
        addressUser,
        Gender
      } = this.form
      const dataSendAccount = new FormData()
      dataSendAccount.append('userName', userName)
      dataSendAccount.append('firstName', firstName)
      dataSendAccount.append('lastName', lastName)
      dataSendAccount.append('userImage', userImage)
      dataSendAccount.append('dateBirth', dateBirth)
      dataSendAccount.append('phoneNumber', phoneNumber)
      dataSendAccount.append('addressUser', addressUser)
      dataSendAccount.append('Gender', Gender)
      /*
      For Test Data Log append
      for (var pair of dataSendAccount.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }*/
      const updateAccout = {
        sendData: dataSendAccount,
        email: this.email
      }
      this.updateUserAccount(updateAccout)
        .then(result => {
          this.AlertSuccesUpdateAccount(result.data.data.username).then(res => {
            if (res) {
              this.form.images = ''
              this.setImages()
              this.getUserAccount(this.email).then(result => {
                this.form.images = result.image_user
              })
            }
          })
        })
        .catch(err => {
          alert(err.data.massage)
        })
    },
    ImagesSend(e) {
      this.form.userImage = e
    }
  }
}
</script>
<style scoped>
.Account {
  background: #ffffff;
}
main.bg__account {
  background-image: url('../assets/image/mainImage/Bg__AccountPage.jpg');
  background-size: cover;
  background-position: 0% 35%;
}

/* Media Query Main Background */
@media (max-width: 1024px) {
  main.bg__account {
    background-position: 60% 70%;
  }
}
@media (max-width: 576px) {
  main.bg__account {
    background-position: 0% 40%;
  }
}
div.card__account {
  background: #f8f8f8;
  border-radius: 20px;
}

h2.title {
  text-shadow: 0px 6px 8px rgba(255, 255, 255, 0.26);
  color: #ffffff;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 35px;
}
</style>
