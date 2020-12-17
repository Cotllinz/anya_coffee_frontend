<template>
  <footer class="section-footer mb-2 border-top">
    <b-container class="mt-4 mt-lg-5">
      <div class="d-flex flex-column flex-lg-row bd-highlight">
        <div class="order-3 order-lg-1 p-2 flex-grow-1 bd-highlight">
          <div class="d-flex align-items-center">
            <img src="../../assets/image/logo/logoNav.svg" alt="Logo Footer" />
            <span class="title_logoFooter">{{ nameLogo }}</span>
          </div>
          <p class="desc__footer mt-4 mt-lg-3">
            {{ massageFooter }}
          </p>
          <div class="logo_media">
            <a :href="FacebookLink"
              ><img
                src="../../assets/image/icons/facebook_icons.svg"
                alt="Logo Facebook"
            /></a>
            <a :href="InstagramLink"
              ><img :src="image.ig" alt="Logo Instagram"
            /></a>
            <a :href="TwitterLink"
              ><img
                src="../../assets/image/icons/twitter_icons.svg"
                alt="Logo Twitter"
            /></a>
            <p class="bywhat mt-3 mt-lg-3">©2020CoffeeStore</p>
          </div>
        </div>
        <div class="order-1 order-lg-2 p-2 bd-highlight pr-lg-5">
          <h5 class="title_productFooter">Product</h5>
          <ul class="list-unstyled mt-lg-3">
            <li><router-link tag="a" to="/">Download </router-link></li>
            <li><router-link tag="a" to="/">Pricing</router-link></li>
            <li><router-link tag="a" to="/">Locations</router-link></li>
            <li><router-link tag="a" to="/">Countries</router-link></li>
            <li><router-link tag="a" to="/">Blog</router-link></li>
          </ul>
        </div>
        <div class="order-2 order-lg-3 p-2 bd-highlight pl-lg-5">
          <h5 class="title_productFooter">Engage</h5>
          <ul class="list-unstyled mt-lg-3">
            <li><router-link tag="a" to="/">Coffe Shop ? </router-link></li>
            <li><router-link tag="a" to="/">FAQ</router-link></li>
            <li><router-link tag="a" to="/">About Us</router-link></li>
            <li><router-link tag="a" to="/">Privacy Policy</router-link></li>
            <li><router-link tag="a" to="/">Terms of Service</router-link></li>
          </ul>
        </div>
      </div>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      logoImage: 'logoNav.svg',
      nameLogo: 'Anya Coffee',
      massageFooter:
        'Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans',
      FacebookLink: 'https://id-id.facebook.com/',
      InstagramLink: 'https://www.instagram.com/anyageraldine/?hl=id',
      TwitterLink: 'https://twitter.com/Anyaselalubenar',
      image: {
        ig: require('../../assets/image/icons/instagram_icons.svg')
      }
      /* require('../../assets/image/icons/instagram_icons.svg') */
    }
  }
}
</script>
<style scoped>
@import '../../assets/css/product/footer.css';
</style>
