<template>
  <div class="Home">
    <Navbar :roles="role" :showSearchIcons="search" :msg="MassageValue" />
    <div>
      <header class="bg_imageHome">
        <hr class="mt-lg-3 d-none d-lg-block" />
        <b-container>
          <b-row>
            <b-col lg="7" class="mt-lg-5 pt-lg-5">
              <div class="title_homePage">
                <h1>
                  Start Your Day with Coffee and Good Meals
                </h1>
                <p class="pr-lg-5 mt-lg-4">
                  We provide high quality beans, good taste, and healthy meals
                  made by love just for you. Start your day with us for a bigger
                  smile!
                </p>
                <button class="btn_getStarted mb-lg-5 mt-lg-4 py-lg-3">
                  Get Started
                </button>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </header>
      <main>
        <b-container>
          <b-row>
            <b-col lg="12">
              <div class="card_status mb-lg-5">
                <div class="d-flex">
                  <div class=""></div>
                </div>
              </div>
            </b-col>
            <div class="d-flex">
              <b-col lg="6">
                <div class="">
                  <img
                    src="../assets/image/mainImage/ImageTeamWork.png"
                    alt="image_logoTeammWork"
                  />
                </div>
              </b-col>
              <b-col lg="6">
                <div class="">
                  <h2>We Provide Good Coffee and Healthy Meals</h2>
                </div>
              </b-col>
            </div>
          </b-row>
        </b-container>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      role: 0,
      search: false,
      MassageValue: 30
    }
  }
}
</script>
<style scoped>
.bg_imageHome {
  background-image: url('../assets/image/mainImage/bg_home.jpg');
  background-size: cover;
  height: 700px;
}
.title_homePage {
  font-family: 'Rubik', sans-serif;
}
.title_homePage h1 {
  font-size: 50px;
  font-weight: 700;
  color: #ffffff;
}
.title_homePage p {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
}
button.btn_getStarted {
  width: 40%;
  border: none;
  outline: none;
  border-radius: 10px;
  color: #6a4029;
  font-weight: 700;
  background: #ffba33;
}
.card_status {
  height: 150px;
  position: relative;
  top: -80px;
  border-radius: 10px;
  box-shadow: 0px 70px 50px rgba(57, 57, 57, 0.1);
  background: #ffffff;
}
</style>
