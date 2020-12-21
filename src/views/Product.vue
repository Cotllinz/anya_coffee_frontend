<template>
  <div class="product">
    <Navbar :roles="role" msg="40" />
    <hr class="mt-lg-3 d-none d-lg-block" />
    <CouponProduct v-bind="{ prod: product, roles: role }" @Newpage="Page" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import CouponProduct from '../components/_base/Product/CouponProduct'
import axios from 'axios'
export default {
  name: 'Product',
  components: {
    Navbar,
    Footer,
    CouponProduct
  },
  data() {
    return {
      role: 2,
      MassageValue: 30,
      width: 0,
      product: {
        productList: [],
        currentPage: 1,
        totalRows: null,
        limit: 12,
        page: 1
      },
      VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL
    }
  },
  created() {
    this.getProduct()
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    getProduct() {
      axios
        .get(
          `${this.VUE_APP_SERVICE_URL}product/limit?page=${this.product.page}&limit=${this.product.limit}`
        )
        .then(res => {
          this.product.productList = res.data.data
          this.product.totalRows = res.data.pagination.totalProduct
        })
        .catch(err => {
          console.log(err)
        })
    },
    Page(e) {
      this.product.page = e
      this.getProduct()
    },
    handleResize() {
      if ((this.width = window.innerWidth) < 578) {
        this.product.limit = 6
      }
    }
  }
}
</script>
