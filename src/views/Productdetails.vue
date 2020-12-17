<template>
  <div class="Home">
    <Navbar :roles="role" :msg="MassageValue" />
    <hr class="mt-lg-3 d-none d-lg-block" />
    <DProduct />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import DProduct from '../components/_base/ProductDetails/D-Product'
export default {
  name: 'ProductDetails',
  components: {
    Navbar,
    Footer,
    DProduct
  },
  data() {
    return {
      role: 1,
      MassageValue: 30,
      id: 0
    }
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>
