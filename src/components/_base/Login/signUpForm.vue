<template>
  <b-container class="p-xl-5 p-lg-4 mt-4 mt-lg-0">
    <b-col>
      <header class="d-flex align-items-center pb-5 pb-xl-5 pb-lg-4">
        <div class="image_logo d-flex align-self-center">
          <img src="../../../assets/image/logo/logoNav.svg" alt="logoCoffee" />
          <span class="pl-lg-2 pl-2">Anya Coffee</span>
        </div>
        <div class="ml-auto">
          <button @click="Login()" class="btn_signUp px-3 py-2 px-lg-5 py-xl-2">
            Login
          </button>
        </div>
      </header>
      <main>
        <h2 class="title__signUp mt-lg-5 text-center mb-4 mb-xl-5">Sign Up</h2>
        <b-form @submit.prevent="onSubmit" class="px-lg-5">
          <b-form-group
            id="username_input"
            label="Username :"
            label-for="input-1"
          >
            <b-form-input
              id="username_input"
              type="text"
              v-model="form.userName"
              placeholder="Enter your username"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="email_input"
            label="Email address :"
            label-for="input-1"
          >
            <b-form-input
              id="email_input"
              type="email"
              v-model="form.userEmail"
              placeholder="Enter your email adress"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="password_input"
            label="Password :"
            label-for="input-1"
          >
            <b-form-input
              id="password_input"
              type="password"
              v-model="form.userPassword"
              placeholder="Enter your password"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="phonenumb_input"
            label="Phone Number :"
            label-for="input-1"
          >
            <b-form-input
              id="phonenumb_input"
              type="number"
              v-model="form.phoneNumber"
              placeholder="Enter your phone number"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="roles_input"
            label="Who are you ?"
            label-for="input-1"
          >
            <b-form-select
              :options="roles"
              v-model="form.roles"
              required
            ></b-form-select>
          </b-form-group>
          <div class="btn_signUp mt-lg-5 mt-5">
            <b-col style="padding: 0 !important">
              <button class="btn_login w-100 py-3 py-xl-3">
                Sign Up
              </button>
            </b-col>
          </div>
        </b-form>
        <button
          class="btn_goggle ml-lg-5 py-3 py-xl-3 mt-3 mb-4 mb-lg-4 mt-lg-3"
        >
          <img
            src="../../../assets/image/icons/goggle_icons.jpg"
            alt="goggleIcons"
            class="pr-2"
          />
          Sign up with Google
        </button>
      </main>
    </b-col>
  </b-container>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'loginForm',
  data() {
    return {
      roles: [
        { value: null, text: 'Please select your status' },
        { value: 1, text: 'Seller' },
        { value: 0, text: 'Costumer' }
      ],
      form: {
        userName: '',
        userEmail: '',
        userPassword: '',
        phoneNumber: '',
        roles: null
      }
    }
  },
  methods: {
    Login() {
      this.$router.push('/Login')
    },
    ...mapActions(['registerUser']),
    onSubmit() {
      this.registerUser(this.form)
        .then(result => {
          alert(result.data.massage)
          this.$router.push('/Login')
        })
        .catch(err => {
          alert(err.data.massage)
        })
    }
  }
}
</script>
<style scoped>
.image_logo span {
  font-weight: 700;
  font-size: 20px;
  font-family: 'Rubik', sans-serif;
}
.btn_signUp {
  border: none;
  border-radius: 20px;
  background-color: #ffba33;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  outline: none;
}
.btn_signUp:hover {
  background-color: #f8b021;
}
select {
  border: 1px solid;
  width: 30%;
  font-family: 'Poppins', sans-serif;
  padding: 0 16px !important;
  height: 60px;
  cursor: pointer;
  border-radius: 15px;
  font-size: 18px;
}
main .title__signUp {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  color: #6a4029;
}
.form-group {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #4f5665;
}
input {
  background: none;
  border: 1px solid;
  padding: 30px 16px !important;
  border-radius: 15px;
  font-size: 18px;
}
.forgot__pass {
  color: #6a4029;
  font-weight: 700;
  font-size: 20px;
}
.forgot__pass:hover {
  text-decoration: none;
  color: #964e27;
}
.btn_login {
  border: none;
  font-weight: 700;
  color: #6a4029;
  outline: none;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  border-radius: 15px;
  background-color: #ffba33;
}
.btn_login:hover {
  color: #8f4c28;
  background-color: #ffb116;
}
.btn_goggle {
  border: none;
  font-weight: 700;
  font-size: 20px;
  width: 90%;
  outline: none;
  font-family: 'Poppins', sans-serif;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67);
}
.btn_goggle:hover {
  background: #fcfcfc;
}
@media (max-width: 1677px) {
  .btn_goggle {
    width: 87.5%;
  }
}
@media (max-width: 1440px) {
  .btn_goggle {
    width: 86.5%;
  }
  select {
    width: 47%;
  }
}
@media (max-width: 1280px) {
  .btn_goggle {
    width: 83.5%;
  }
  select {
    width: 55%;
  }
}
@media (max-width: 1024px) {
  .image_logo span {
    color: #ffffff;
  }
  input {
    background: #ffffff;
  }
  main .title__signUp {
    color: #fc7302;
  }
  select {
    width: 35%;
  }
  .form-group {
    color: #ffffff;
  }
  .btn_goggle {
    width: 89%;
  }
}
@media (max-width: 576px) {
  .btn_signUp {
    border-radius: 10px;
  }

  select {
    width: 100%;
  }

  .btn_goggle {
    width: 100%;
  }
}
</style>
