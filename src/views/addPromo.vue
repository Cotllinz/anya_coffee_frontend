<template>
  <div class="Promo">
    <Navbar :roles="role" :msg="MassageValue" />
    <hr class="mt-lg-3 d-none d-lg-block" />
    <b-container>
      <b-row>
        <leftcomponent :form="form" :product="data" />
        <Rightcomponent :Data="form" :product="data" />
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import leftcomponent from '../components/_base/Promo/LeftPromo'
import Rightcomponent from '../components/_base/Promo/RightPromo'
import axios from 'axios'
export default {
  name: 'Promo',
  components: {
    Navbar,
    Footer,
    leftcomponent,
    Rightcomponent
  },
  data() {
    return {
      role: 1,
      MassageValue: 30,
      form: {
        discountPromo: null,
        startExp: '',
        endExp: '',
        codeCoupon: '',
        productId: '',
        minPurchase: null,
        sizeR: '',
        sizeL: '',
        sizeXL: '',
        size200: '',
        size350: '',
        size400: '',
        homeDeliv: '',
        dineIn: '',
        takeaway: ''
      },
      data: [],
      VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct() {
      axios
        .get(`${this.VUE_APP_SERVICE_URL}product`)
        .then(res => {
          for (let i = 0; i < res.data.data.length; i++) {
            const dat = {
              text: res.data.data[i].name_product,
              value: res.data.data[i].id_product,
              price: res.data.data[i].price_product
            }
            this.data = [...this.data, dat]
            console.log(this.data)
          }

          /*   console.log(this.product) */
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
