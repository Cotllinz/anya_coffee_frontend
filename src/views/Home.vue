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
              <div class="card_status px-lg-5 px-3 mb-lg-5">
                <b-row class="pt-lg-5 pt-5">
                  <b-col>
                    <div class="d-flex self-items-center">
                      <section class="rounded_icons">
                        <b-icon
                          scale="1.5"
                          class="p-3"
                          style="color:#6A4029;"
                          icon="person-fill"
                        ></b-icon>
                      </section>
                      <section class="desc_section ml-2 ml-lg-4">
                        <h5 class="mt-lg-1 mt-1">90+</h5>
                        <p>Staff</p>
                      </section>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="d-flex">
                      <section class="rounded_icons">
                        <b-icon
                          scale="1.5"
                          class="p-3"
                          style="color:#6A4029;"
                          icon="geo-alt-fill"
                        ></b-icon>
                      </section>
                      <section class="desc_section ml-2 ml-lg-4">
                        <h5 class="mt-lg-1 mt-1">30+</h5>
                        <p>Stores</p>
                      </section>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="d-flex">
                      <section class="rounded_icons">
                        <b-icon
                          scale="1.5"
                          class="p-3"
                          style="color:#6A4029;"
                          icon="suit-heart"
                        ></b-icon>
                      </section>
                      <section class="desc_section ml-2 ml-lg-4">
                        <h5 class="mt-lg-1 mt-1">980+</h5>
                        <p>Costumers</p>
                      </section>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <div class="d-flex align-items-center">
              <b-col lg="6">
                <div class="logo_image">
                  <img
                    src="../assets/image/mainImage/ImageTeamWork.png"
                    alt="image_logoTeammWork"
                  />
                </div>
              </b-col>
              <b-col lg="6">
                <div class="text_headerTeamwork pl-lg-5 ml-lg-4">
                  <h2>We Provide Good Coffee and Healthy Meals</h2>
                  <p class="mt-2 mt-lg-3 mb-lg-4 mb-3">
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>
                  <section>
                    <div
                      class="icons_desc mb-lg-3 mb-2 d-flex align-items-center"
                    >
                      <img
                        src="../assets/image/icons/bx_bxs-check-circle.jpg"
                        alt="bx_icons"
                      />
                      <p class="ml-2">High quality beans</p>
                    </div>
                    <div
                      class="icons_desc mb-lg-3 mb-2 d-flex align-items-center"
                    >
                      <img
                        src="../assets/image/icons/bx_bxs-check-circle.jpg"
                        alt="bx_icons"
                      />
                      <p class="ml-2">
                        Healthy meals, you can request the ingredients
                      </p>
                    </div>
                    <div
                      class="icons_desc mb-lg-3 mb-2 d-flex align-items-center"
                    >
                      <img
                        src="../assets/image/icons/bx_bxs-check-circle.jpg"
                        alt="bx_icons"
                      />
                      <p class="ml-2">
                        Chat with our staff to get better experience for
                        ordering
                      </p>
                    </div>
                    <div
                      class="icons_desc mb-lg-3 mb-2 d-flex align-items-center"
                    >
                      <img
                        src="../assets/image/icons/bx_bxs-check-circle.jpg"
                        alt="bx_icons"
                      />
                      <p class="ml-2">
                        Free member card with a minimum purchase of IDR 200.000.
                      </p>
                    </div>
                  </section>
                </div>
              </b-col>
            </div>
          </b-row>
        </b-container>
      </main>
      <main class="mt-lg-5">
        <b-container fluid>
          <b-row class="main_card">
            <b-col class="pb-lg" style="padding:0;" lg="12">
              <section class="mt-lg-5 pb-lg-5 pt-lg-5">
                <div class="text-center title__card pb-lg-5">
                  <h1>Here is People’s Favorite</h1>
                  <p>
                    Let’s choose and have a bit taste of poeple’s favorite. It
                    might be yours too!
                  </p>
                </div>
              </section>
            </b-col>
            <b-col lg="12" class="pt-lg-5 mt-lg-5">
              <b-container class="pb-lg-5">
                <b-row cols="1" cols-lg="3">
                  <b-col v-for="(items, index) in display" :key="index">
                    <b-card class="card_food position-relative">
                      <div class="image_favorit">
                        <img
                          class="image_main"
                          :src="
                            require('../assets/image/mainImage/image 30.jpg')
                          "
                          alt="image_example"
                        />
                      </div>
                      <section class="text_titleFood pt-lg-5 text-center">
                        <h4 class="pt-lg-2">Chicken Wings</h4>
                        <div class="items_food mt-lg-4 pl-5 d-flex flex-column">
                          <div
                            class="items_list mb-3 d-flex align-items-center"
                          >
                            <img
                              src="../assets/image/icons/jam_check.jpg"
                              alt="checked"
                            />
                            <span class="ml-3">Wings</span>
                          </div>
                          <div
                            class="items_list mb-3 d-flex align-items-center"
                          >
                            <img
                              src="../assets/image/icons/jam_check.jpg"
                              alt="checked"
                            />
                            <span class="ml-3">Drum Sticks</span>
                          </div>
                          <div
                            class="items_list mb-3 d-flex align-items-center"
                          >
                            <img
                              src="../assets/image/icons/jam_check.jpg"
                              alt="checked"
                            />
                            <span class="ml-3">Mayonaise and Lemon</span>
                          </div>
                          <div
                            class="items_list mb-3 d-flex align-items-center"
                          >
                            <img
                              src="../assets/image/icons/jam_check.jpg"
                              alt="checked"
                            />
                            <span class="ml-3">Hot Fried</span>
                          </div>
                          <div
                            class="items_list mb-3 d-flex align-items-center"
                          >
                            <img
                              src="../assets/image/icons/jam_check.jpg"
                              alt="checked"
                            />
                            <span class="ml-3">Secret Recipe</span>
                          </div>
                          <div
                            class="items_list mb-3 d-flex align-items-center"
                          >
                            <img
                              src="../assets/image/icons/jam_check.jpg"
                              alt="checked"
                            />
                            <span class="ml-3"
                              >Buy 1 Get 1 only for Dine in</span
                            >
                          </div>
                        </div>
                      </section>
                      <section class="text-center title_price">
                        <h5>IDR 45.000</h5>
                        <button class="select_btn py-2 px-5 mt-2">
                          Select
                        </button>
                      </section>
                    </b-card>
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-container>
      </main>
      <main class="map_design pt-lg-5">
        <b-container>
          <b-row>
            <b-col>
              <section class="text-center text_maps mt-lg-5 pt-lg-5">
                <h3>
                  Visit Our Store in the <br />
                  Spot on the Map Below
                </h3>
                <p>
                  See our store in every city on the spot and spen your good day
                  there. See you soon!
                </p>
              </section>
              <section class="map_geo mt-lg-5 pt-lg-5">
                <img
                  class="image_Handle"
                  src="../assets/image/mainImage/Huge Global.jpg"
                  alt="image_maps"
                />
              </section>
            </b-col>
          </b-row>
        </b-container>
      </main>
      <main class="partner_coffee mt-lg-5 pt-lg-5">
        <b-container>
          <b-row>
            <b-col>
              <section class="text_titlePartner text-center">
                <h2>Our Partner</h2>
              </section>
              <section>
                <img
                  class="image_sponsor"
                  src="../assets/image/mainImage/Sponsored.jpg"
                  alt="sponsord"
                />
              </section>
            </b-col>
          </b-row>
        </b-container>
      </main>
      <main class="costumer_slider">
        <b-container>
          <b-row>
            <b-col>
              <section class="text-center costumer_title mb-lg-5">
                <h3>
                  Loved by Thousands of <br />
                  Happy Customer
                </h3>
                <p>
                  These are the stories of our customers who have visited us
                  with great pleasure.
                </p>
              </section>
              <!-- -->
              <section>
                <VueSlickCarousel
                  class="slick_corouselSet"
                  ref="carousel"
                  v-bind="settings"
                >
                  <div v-for="(items, index) in displayComment" :key="index">
                    <b-card class="card__comment">
                      <section class="d-flex align-items-center">
                        <img
                          class="image_cards"
                          src="../assets/image/mainImage/image 30.jpg"
                          alt="imageCard"
                        />
                        <div class="text_coment ml-3">
                          <h4>Rudy Galih</h4>
                          <p>Waston</p>
                        </div>
                        <div
                          class="d-flex rating_card ml-auto align-items-center"
                        >
                          <h5>4.5</h5>
                          <img
                            class="mb-lg-2 ml-2"
                            src="../assets/image/icons/Group 1161.jpg"
                            alt="star"
                          />
                        </div>
                      </section>
                      <b-card-text class="card_desccomment mt-4">
                        <p>
                          “Wow... I am very happy to spend my whole day here.
                          the Wi-fi is good, and the coffee and meals tho. I
                          like it here!! Very recommended!
                        </p>
                      </b-card-text>
                    </b-card>
                  </div>
                </VueSlickCarousel>
              </section>
            </b-col>
          </b-row>
        </b-container>
      </main>
      <section class="mt-lg-4 ml-3 mb-lg-1">
        <b-container>
          <div class="btn_cardComment">
            <button class="btn_arrowPrev py-1 px-2 mr-3" @click="showPrev">
              <b-icon
                scale="1"
                style="color:#6A4029;"
                icon="arrow-left"
              ></b-icon>
            </button>
            <button class="btn_arrowNext py-1 px-2" @click="showNext">
              <b-icon
                scale="1"
                style="color:#ffffff;"
                icon="arrow-right"
              ></b-icon>
            </button>
          </div>
        </b-container>
      </section>
      <section>
        <b-container>
          <div class="card_promo">
            <b-card class="mt-4 card_promosection mt-lg-0">
              <b-card-text
                class="d-flex flex-column flex-lg-row align-items-center py-xl-4 py-4 px-4 px-lg-5"
              >
                <div class="title_member">
                  <h2>Check our promo today!</h2>
                  <p>Let's see the deals and pick yours!</p>
                </div>
                <button class="btn__create ml-lg-auto px-4 px-xl-5">
                  See Promo
                </button>
              </b-card-text>
            </b-card>
          </div>
        </b-container>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    VueSlickCarousel
  },
  data() {
    return {
      display: 3,
      displayComment: 30,
      role: 0,
      search: false,
      MassageValue: 30,
      settings: {
        infinite: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              centerPadding: '0px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    }
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    }
  }
}
</script>
<style scoped>
* {
  background: #fbfbfb;
}
.rating_card h5 {
  font-size: 16px;
}
.image_sponsor {
  width: 100%;
}
.card_promosection {
  width: 100%;
  position: relative;
  display: block;
  margin: 0 auto;
  top: 30px;
  border-radius: 10px;
}
.card_promosection .card-body {
  padding: 0;
}
.btn__create {
  height: 50px;
  border: none;
  background: #ffba33;
  border-radius: 10px;
  color: #6a4029;
  font-weight: 700;
  outline: none;
  box-shadow: 0px 6px 20px rgba(250, 170, 51, 0.67);
}
.btn__create:hover {
  background: #f8b021;
}
footer {
  bottom: 145px;
  border: none !important;
  background: none;
}
.title_member h2 {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 35px;
  padding-right: 10%;
}
.title_member p {
  font-family: 'Rubik', sans-serif;
}
.btn_arrowPrev,
.btn_arrowNext {
  border: 2px solid #6a4029;
  border-radius: 20px;
  outline: none;
}
.btn_arrowPrev {
  background: none;
}
.btn_arrowNext {
  background: #6a4029;
}
.costumer_slider {
  overflow: hidden;
}
.slick_corouselSet {
  width: 150%;
  overflow: hidden;
}
.card__comment {
  width: 400px;
  border: 2px solid #6a4029;
  border-radius: 10px;
  font-family: 'Rubik', sans-serif;
}
.text_coment h4,
.text_coment p {
  margin: 0;
}

.card_desccomment p {
  margin: 0;
}
.costumer_title {
  font-family: 'Rubik', sans-serif;
}
.card .image_cards {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 45%;
}
.text_titlePartner {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
}
.text_maps {
  font-family: 'Rubik', sans-serif;
}
.text_maps h3 {
  font-weight: 500;
  font-size: 35px;
}
.image_Handle {
  display: block;
  margin: 0 auto;
  width: 100%;
}
.text_headerTeamwork {
  font-family: 'Rubik', sans-serif;
}
.title_price {
  font-family: 'Rubik', sans-serif;
}
.select_btn {
  border-radius: 50px;
  width: 60%;
  font-weight: 600;
  border: 2px solid #ffba33;
  background: none;
  color: #6a4029;
  outline: none;
}
.select_btn:hover {
  background: #ffba33;
  transition: 0.3s;
}
.title_price h5 {
  font-size: 25px;
}
.card_food {
  border-radius: 10px;
  border: 2px solid #dddddd;
  height: 540px;
}
.text_titleFood {
  font-family: 'Rubik', sans-serif;
  height: 380px;
}
.text_titleFood h4 {
  font-size: 18px;
}
.items_list span {
  font-size: 14px;
}
.image_favorit {
  position: absolute;
  top: -65px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.image_main {
  width: 110px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 45%;
  background-size: cover;
}
.main_card {
  background: #fbfbfb;
  /*   background: #ffba33; */
}
.title__card {
  font-family: 'Rubik', sans-serif;
}
.title__card h1 {
  font-weight: 500;
}
.title__card p {
  margin: 0;
  color: #4f5665;
}
.text_headerTeamwork h2 {
  font-weight: 500;
  font-size: 35px;
}
.text_headerTeamwork p {
  color: #4f5665;
}
.desc_section {
  font-family: 'Rubik', sans-serif;
  margin: 0;
}
.icons_desc p {
  margin: 0;
  font-size: 14px;
  color: #4f5665;
}
.desc_section h5 {
  margin: 0;
  font-weight: 600;
}
.desc_section p {
  color: #4f5665;
}
.rounded_icons {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffba33;
}
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
