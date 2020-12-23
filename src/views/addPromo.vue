<template>
  <div class="Promo">
    <Navbar :roles="role" :msg="MassageValue" />
    <hr class="mt-lg-3 d-none d-lg-block" />
    <b-container>
      <b-row>
        <leftcomponent :form="form" :Optionset="optionPromo" :product="data" />
        <Rightcomponent :Data="form" @sendvalue="sendvalue" :product="data" />
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
      optionPromo: [],
      priceing: 0,
      value: 0,
      discount: [
        /*   { text: 'Input discount', value: null }, */
        { text: '10 %', value: 10 },
        { text: '20 %', value: 20 },
        { text: '30 %', value: 30 },
        { text: '40 %', value: 40 },
        { text: '50 %', value: 50 },
        { text: '60 %', value: 60 },
        { text: '70 %', value: 70 },
        { text: '80 %', value: 80 },
        { text: '85 %', value: 85 }
      ],
      VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      await axios
        .get(`${this.VUE_APP_SERVICE_URL}product`)
        .then(res => {
          for (let i = 0; i < res.data.data.length; i++) {
            if (!res.data.data[i].code_discount) {
              const data = {
                text: res.data.data[i].name_product,
                value: res.data.data[i].id_product,
                price: res.data.data[i].price_product
              }

              this.data = [...this.data, data]
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
      this.OptionDisc()
    },
    sendvalue(e) {
      this.value = e
      for (let i = 0; i < this.data.length; i++) {
        if (this.value === this.data[i].value) {
          this.priceing = this.data[i].price
        }
      }
      this.disc()
    },
    disc() {
      this.optionPromo = [
        {
          text: 'Input Discount',
          value: null
        }
      ]
      for (let i = 0; i < this.discount.length; i++) {
        let hitung = this.priceing * (this.discount[i].value / 100)

        let hasil = this.priceing - Math.round(hitung)
        const result = {
          text: this.discount[i].text + ' => ' + hasil,
          value: this.discount[i].value
        }

        this.optionPromo = [...this.optionPromo, result]
      }
    }
  }
}
</script>
