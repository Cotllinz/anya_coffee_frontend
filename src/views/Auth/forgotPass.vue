<template>
  <div class="Forgot">
    <div class="bgForgot">
      <b-container>
        <b-row>
          <b-col>
            <main class="pt-xl-5 pt-lg-5">
              <div
                class="title text-center mt-xl-5 mt-5 pt-lg-5 pt-xl-5 mb-xl-5"
              >
                <h1>Forgot your password?</h1>
                <h3 class="mt-4 mt-xl-0 mt-lg-3">
                  Don’t worry, we got your back!
                </h3>
              </div>
              <b-form inline>
                <b-form-input
                  id="inline-form-input-name"
                  class="mt-xl-5 mt-5 ml-xl-5 ml-lg-4"
                  placeholder="Enter your email adress to get link"
                  type="email"
                  required
                ></b-form-input>
                <button
                  class="mt-xl-5 mt-4 ml-xl-3 px-xl-5 py-xl-4 py-lg-4 mt-lg-5 ml-lg-3 px-5 py-3 btn_send"
                >
                  Send
                </button>
                <!--   <b-col>
                 
                </b-col> -->
              </b-form>
              <div
                class="text-center resend_linkNotice mt-xl-5 mt-5 pt-3 pt-xl-5"
              >
                <h2>
                  Click here if you didn’t receive any link in 2 minutes
                </h2>
              </div>
              <button
                class="btn_resend w-50 py-3 mt-3 py-xl-4 py-lg-4 mt-xl-3 mb-5 mb-xl-0"
              >
                Resend Link
              </button>
            </main>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../../components/_base/Footer'
export default {
  name: 'Forgot',
  components: {
    Footer
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.bgForgot {
  background: url('../../assets/image/mainImage/forgot__passBg.jpg');
  background-size: cover;
  background-position: 0% 27%;
  height: 1000px;
}
.title h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 64px;
  font-weight: 700;
  color: #ffffff;
}
.title h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 27px;
  font-weight: 700;
  color: #ffffff;
}
input.form-control {
  width: 75%;
  padding: 39px 35px;
  border-radius: 15px;
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
}
.btn_send {
  background: #ffba33;
  box-shadow: 0px 6px 20px rgba(255, 186, 51, 0.4);
  border-radius: 15px;
  font-weight: 700;
  color: #6a4029;
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  border: none;
  outline: none;
}
.btn_send:hover {
  background: #fcb321;
}
.resend_linkNotice h2 {
  color: #ffffff;
  padding: 0 23%;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
}
.btn_resend {
  margin: 0 auto;
  display: block;
  border: none;
  border-radius: 15px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  color: #fff;
  outline: none;
  background: #6a4029;
  box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.46);
}
.btn_resend:hover {
  background: #83401d;
}

@media (max-width: 576px) {
  .bgForgot {
    background-position: 45% 40%;
    height: auto;
  }
  .title h1 {
    font-size: 44px;
  }
  input.form-control {
    width: 100%;
    padding: 30px 15px;
    font-size: 15px;
  }
  .btn_send {
    background: #ffba33;
    margin: 0 auto;
    font-size: 22px;
  }
  .title h3 {
    font-size: 20px;
  }
  .resend_linkNotice h2 {
    padding: 0 2%;
    font-size: 25px;
  }
}
</style>
