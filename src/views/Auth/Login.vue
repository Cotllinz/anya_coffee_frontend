<template>
  <div class="Log-in">
    <div class="imageBgMobile">
      <b-container fluid>
        <b-row>
          <b-col xl="5" style="padding:0 !important">
            <div class="BgLogin"></div>
          </b-col>
          <b-col xl="7" style="padding:0 !important">
            <LoginForm />
          </b-col>
          <b-col>
            <b-card class="mt-4 mt-lg-0">
              <b-card-text
                class="d-flex flex-column flex-lg-row align-items-center py-xl-4 py-4 px-4 px-lg-5"
              >
                <div class="title_member">
                  <h2>Get your member card now!</h2>
                  <p>Let's join with our member and enjoy the deals.</p>
                </div>
                <button class="btn__create ml-lg-auto px-4 px-xl-5">
                  Create Now
                </button>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer class="position-relative border-none" />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../../components/_base/Footer'
import LoginForm from '../../components/_base/Login/loginForm'
export default {
  name: 'Login',
  components: {
    Footer,
    LoginForm
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.BgLogin {
  background-image: url('../../assets/image/mainImage/LoginBg.jpg');
  background-size: cover;
  height: 1000px;
}
@media (max-width: 1024px) {
  .BgLogin {
    background-image: none;
    height: 0;
  }
  .imageBgMobile {
    background-image: url('../../assets/image/mainImage/LoginBg.jpg');
    background-size: cover;
    height: 810px;
    background-position: 0% 27%;
  }
}
@media (max-width: 576px) {
  .imageBgMobile {
    height: 900px;
    background-position: 0% 27%;
  }
}
@media (max-width: 375px) {
  .imageBgMobile {
    height: 930px;
  }
}
.card {
  width: 80%;
  position: relative;
  display: block;
  margin: 0 auto;
  bottom: 90px;
  box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67);
  border-radius: 10px;
}
.card-body {
  padding: 0 !important;
}
.btn__create {
  height: 50px;
  border: none;
  background: #ffba33;
  border-radius: 10px;
  color: #6a4029;
  font-weight: 700;
  outline: none;
}
.btn__create:hover {
  background: #f8b021;
}
footer {
  bottom: 75px;
  border: none !important;
  background: none;
}
.title_member h2 {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 35px;
  padding-right: 30%;
}
.title_member p {
  font-family: 'Rubik', sans-serif;
}
@media (max-width: 1024px) {
  .card {
    width: 70%;
    bottom: 10px;
  }
  footer {
    top: 70px;
    bottom: 0;
    border: none !important;
    background: none;
  }
}
@media (max-width: 576px) {
  .card {
    width: 100%;
    position: static;
    margin: 0;
  }
  footer {
    position: static !important;
  }
  .title_member h2 {
    font-size: 25px;
    text-align: center;
    padding-right: 0;
  }
  .title_member p {
    text-align: center;
  }
}
</style>
