<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-container>
        <b-navbar-brand>
          <router-link tag="span" class="d-flex align-items-center" to="/"
            ><img src="../../assets/image/logo/logoNav.svg" alt="logo" />
            <span class="navbar__title pl-2 pl-lg-2">Anya Coffee</span>
          </router-link></b-navbar-brand
        >
        <b-navbar-toggle style="outline: none" target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <b-icon
              v-if="expanded"
              icon="chevron-bar-up"
              variant="dark"
            ></b-icon>
            <b-icon v-else icon="chevron-bar-down" variant="dark"></b-icon>
          </template>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="mr-auto ml-lg-auto pt-lg-2">
            <router-link tag="a" class="pr-lg-4 nav-link" to="/"
              >Home</router-link
            >
            <router-link tag="a" class="pr-lg-4 nav-link" to="/product"
              >Product</router-link
            >
            <router-link
              tag="a"
              v-if="role === 0 || role === undefined"
              class="pr-lg-4 nav-link"
              to="/payment"
              >Your Cart</router-link
            >
            <router-link
              v-if="role === 0 || role === undefined"
              tag="a"
              class="nav-link"
              to="/history"
              >History</router-link
            >
            <router-link
              v-if="role === 1"
              tag="a"
              class="pr-lg-4 nav-link"
              to="/payment"
              >Orders</router-link
            >
            <router-link
              v-if="role === 1"
              tag="a"
              class="nav-link"
              to="/dashboard"
              >Dashboard</router-link
            >
          </b-navbar-nav>
          <div
            class="d-flex justify-content-around mt-2 align-self-lg-center pt-lg-1"
          >
            <input
              v-if="showSearch === true"
              type="text"
              class="mr-lg-4 mr-3"
              v-model="searchData"
              v-on:keyup.enter="search()"
            />
            <button
              variant="none"
              @click="handleShowSearch"
              v-if="showSearch === false && showSearchIcons === true"
              class="button__logoSearching mr-lg-4"
            >
              <img
                class="searching_logo"
                src="../../assets/image/icons/searchingIcons.svg"
                alt="searchLogo"
              />
            </button>

            <router-link
              v-if="role === 0 || role === 1"
              tag="a"
              class="position-relative mr-lg-4"
              to="/chat"
              ><span class="supply__Product">{{ msg }}</span
              ><img src="../../assets/image/icons/chatIcons.svg" alt="chatLogo"
            /></router-link>
            <router-link
              v-if="role === 0 || role === 1"
              tag="a"
              class="position-relative"
              :to="{
                name: 'account',
                params: { emailAcc: email }
              }"
            >
              <img
                v-if="!images"
                class="costumer__Logo"
                src="../../assets/image/mainImage/defaultImageAddProduct.svg"
                alt="costumerLogo"/>
              <img
                v-if="images"
                class="costumer__Logo"
                :src="`${this.VUE_APP_SERVICE_URL_IMAGE}` + images"
                alt="costumerLogo"
            /></router-link>
            <div class="mb-3 mb-lg-0" v-else>
              <button @click="loginClick()" class="mr-lg-4 mr-3 btn_login">
                Login
              </button>
              <button
                @click="signUpClick()"
                class="mr-lg-2 px-lg-5 px-4 py-2 py-lg-2 btn_signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
export default {
  props: ['msg', 'showSearchIcons'],
  data() {
    return {
      mssg: 30,
      searchData: '',
      showSearch: false,
      VUE_APP_SERVICE_URL_IMAGE: process.env.VUE_APP_SERVICE_URL_IMAGE
    }
  },
  computed: {
    ...mapGetters({
      role: 'getRoles',
      currpage: 'currentPage',
      email: 'getEmail',
      image: 'getImages'
    }),
    images: {
      get() {
        return this.image
      },
      set(newImage) {
        return newImage
      }
    },
    ...mapState({ Token: state => state.Auth.token })
  },
  created() {
    if (this.email) {
      this.getUserAccount(this.email).then(result => {
        this.images = result.image_user
      })
    }
  },
  methods: {
    handleShowSearch() {
      this.showSearch = true
    },
    loginClick() {
      this.$router.push('/Login')
    },
    signUpClick() {
      this.$router.push('/signup')
    },
    ...mapActions(['logout', 'getProducts', 'getUserAccount']),
    ...mapMutations(['changePage', 'triggerurage']),
    handleLogout() {
      this.logout()
    },
    search() {
      this.changePage(1)
      this.getProducts(this.searchData)
    }
  }
}
</script>
<style scoped>
@import '../../assets/css/product/navbar.css';
a.router-link-exact-active {
  color: #6a4029 !important;
  font-weight: 700;
}
</style>
