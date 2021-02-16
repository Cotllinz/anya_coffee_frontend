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
        takeaway: ''
      }
    }
  }
}
</script>
<style scoped>
.Promo {
  background: #ffffff;
}
</style>
