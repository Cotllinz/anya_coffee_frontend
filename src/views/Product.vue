<template>
  <div class="product">
    <Navbar :roles="role" msg="40" />
    <hr class="mt-lg-3 d-none d-lg-block" />
    <CouponProduct />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import CouponProduct from '../components/_base/Product/CouponProduct'
export default {
  name: 'Product',
  computed: {
    rows() {
      return this.totalRows
    }
  },
  components: {
    Navbar,
    Footer,
    CouponProduct
  },
  data() {
    return {
      role: 1,
      MassageValue: 30
    }
  }
}
</script>
