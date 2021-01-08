<template>
  <div class="Promo">
    <Navbar :msg="MassageValue" />
    <hr class="mt-lg-3 d-none d-lg-block" />
    <b-container>
      <b-row>
        <leftcomponent :form="form" />
        <Rightcomponent :Data="form" />
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
import { mapActions, mapMutations } from 'vuex'
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
      MassageValue: 30,
      id: 0,
      form: {
        discountPromo: null,
        startExp: '',
        endExp: '',
        codeCoupon: '',
        productId: null,
        minPurchase: null,
        sizeR: '',
        sizeL: '',
        sizeXL: '',
        size200: '',
        size350: '',
        size400: '',
        homeDeliv: '',
        dineIn: '',
        takeaway: '',
        nameProduct: '',
        images: ''
      }
    }
  },
  created() {
    this.id = this.$route.params.idpromo
    this.getPromobyid(this.id).then(result => {
      this.form.nameProduct = result.data.data[0].name_product
      this.form.productId = result.data.data[0].product_id
      this.form.startExp = result.data.data[0].start_expired
      this.form.endExp = result.data.data[0].end_expired
      this.form.discountPromo = result.data.data[0].discount_coupon
      this.form.codeCoupon = result.data.data[0].code_coupon
      this.form.minPurchase = result.data.data[0].min_purchase
      this.form.sizeR = result.data.data[0].size_R
      this.form.sizeL = result.data.data[0].size_L
      this.form.sizeXL = result.data.data[0].size_XL
      this.form.size200 = result.data.data[0].size_200
      this.form.size350 = result.data.data[0].size_350
      this.form.size400 = result.data.data[0].size_400
      this.form.images = result.data.data[0].image_product
      this.changePrice(result.data.data[0].price_product)
    })
  },
  methods: {
    ...mapActions(['getPromobyid']),
    ...mapMutations(['changePrice', 'getDiscountCP'])
  }
}
</script>
