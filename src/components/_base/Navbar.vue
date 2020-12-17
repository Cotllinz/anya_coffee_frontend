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
            <router-link tag="a" class="pr-lg-4 nav-link" to="/payment"
              >Your Cart</router-link
            >
            <router-link tag="a" class="nav-link" to="/history"
              >History</router-link
            >
          </b-navbar-nav>
          <div
            class="d-flex justify-content-around mt-2 align-self-lg-center pt-lg-1"
          >
            <button variant="none" class="button__logoSearching mr-lg-4">
              <img
                class="searching_logo"
                src="../../assets/image/icons/searchingIcons.svg"
                alt="searchLogo"
              />
            </button>
            <router-link
              v-if="roles === 1 || roles === 2"
              tag="a"
              class="position-relative mr-lg-4"
              to="/chat"
              ><span class="supply__Product">{{ msg }}</span
              ><img src="../../assets/image/icons/chatIcons.svg" alt="chatLogo"
            /></router-link>
            <router-link
              v-if="roles === 1 || roles === 2"
              tag="a"
              class="position-relative"
              to="/account"
            >
              <img
                class="costumer__Logo"
                src="../../assets/image/icons/logoCostumerIcons.svg"
                alt="costumerLogo"
            /></router-link>
            <div v-else>
              <b-button variant="primary" class="mr-lg-2" size="md"
                >Login</b-button
              >
              <b-button variant="danger" size="md">Sign Up</b-button>
            </div>
          </div>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  props: ['roles', 'msg'],
  data() {
    return {
      mssg: 30
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
