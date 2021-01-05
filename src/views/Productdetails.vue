<template>
  <div class="Home">
    <Navbar :roles="role" :msg="MassageValue" />
    <hr class="mt-lg-3 d-none d-lg-block" />
    <DProduct
      v-bind="{ Details: DetailsData, qty: details, roles: role }"
      v-on="{
        Changeqty: changeqty,
        DeliveryType: DeliveryType,
        DeliveryNow: DeliveryNow,
        SizeProduct: SizeProduct
      }"
    />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import DProduct from '../components/_base/ProductDetails/D-Product'
import axios from 'axios'

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
      id: 0,
      details: {
        qty: 1,
        DeliverySet: '',
        Deliverynow: '',
        Size: '',
        SizePrice: 0
      },
      DetailsData: [],
      VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL
    }
  },
  created() {
    this.id = this.$route.params.idDtls
    this.GetDetailsProduct()
  },
  methods: {
    GetDetailsProduct() {
      axios
        .get(`${this.VUE_APP_SERVICE_URL}product/${this.id}`)
        .then(res => {
          this.DetailsData = res.data.data[0]
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeqty(e) {
      this.details.qty = e
    },
    DeliveryType(e) {
      this.details.DeliverySet = e
    },
    DeliveryNow(e) {
      this.details.Deliverynow = e
    },
    SizeProduct(size, price) {
      this.details.Size = size
      this.details.SizePrice = price
    }
  }
}
</script>
