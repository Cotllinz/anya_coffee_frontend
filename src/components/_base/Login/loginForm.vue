<template>
  <b-container class="p-lg-5 mt-4">
    <b-col>
      <header class="d-flex align-items-center pb-lg-5">
        <div class="image_logo d-flex align-self-center">
          <img src="../../../assets/image/logo/logoNav.svg" alt="logoCoffee" />
          <span class="pl-lg-2 pl-2">Anya Coffee</span>
        </div>
        <div class="ml-auto">
          <button
            @click="signUp()"
            class="btn_signUp px-3 py-2 px-lg-5 py-xl-2"
          >
            Sign Up
          </button>
        </div>
      </header>
      <main>
        <h2 class="title__login mt-xl-5 mt-4 mt-lg-2 text-center mb-xl-5 mb-3">
          Login
        </h2>
        <b-form @submit.prevent="onSubmit" class="px-lg-5">
          <b-form-group
            id="email_input"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="email_input"
              type="email"
              v-model="form.userEmail"
              placeholder="Enter your email adress"
              required
            ></b-form-input>
            <small>We'll never share your email with anyone else.</small>
          </b-form-group>
          <b-form-group
            id="password_input"
            label="Password:"
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
          <router-link tag="a" class="forgot__pass" to="/forget"
            >Forgot password?</router-link
          >
          <div class="btn_logIn mt-lg-4 mt-4">
            <b-col style="padding: 0 !important">
              <button type="submit" class="btn_login w-100 py-xl-3 py-3">
                Login
              </button>
            </b-col>
          </div>
        </b-form>
        <button class="btn_goggle ml-lg-5 py-xl-3 py-3 mt-lg-3 mt-3">
          <img
            src="../../../assets/image/icons/goggle_icons.jpg"
            alt="goggleIcons"
            class="pr-2"
          />
          Login with Google
        </button>
      </main>
    </b-col>
  </b-container>
</template>
<script>
import { mapActions } from 'vuex'
import AlertMixins from '../../../mixins/Alert'
export default {
  name: 'loginForm',
  mixins: [AlertMixins],
  data() {
    return {
      form: {
        userEmail: '',
        userPassword: ''
      }
    }
  },
  methods: {
    signUp() {
      this.$router.push('/signup')
    },
    ...mapActions(['login']),
    onSubmit() {
      this.login(this.form)
        .then(result => {
          this.AlertSuccesLogin(result.data.data.userName).then(res => {
            if (res) {
              this.$router.push('/')
            }
          })
        })
        .catch(() => {
          this.AlertErrorLogin()
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
main .title__login {
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
}

@media (max-width: 1366px) {
  .btn_goggle {
    width: 85.5%;
  }
}
@media (max-width: 1280px) {
  .btn_goggle {
    width: 83.5%;
  }
}
@media (max-width: 1024px) {
  .image_logo span {
    color: #ffffff;
  }
  main .title__login {
    color: #fcfcfc;
  }
  input {
    background: #ffffff;
  }
  .form-group {
    color: #ffffff;
  }
  small {
    font-size: 20px;
  }
  .forgot__pass {
    color: #ffffff;
  }
  .forgot__pass:hover {
    color: #f5f5f5;
  }
  .btn_goggle {
    width: 88.4%;
  }
}
@media (max-width: 576px) {
  .btn_signUp {
    border-radius: 10px;
  }
  small {
    font-size: 13px;
    font-weight: 700;
  }
  .btn_goggle {
    width: 100%;
  }
}
</style>
