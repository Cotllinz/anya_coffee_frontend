<template>
  <div class="AddProduct">
    <Navbar :msg="MassageValue" />
    <hr class="mt-lg-3 d-none d-lg-block" />
    <b-container>
      <b-row>
        <addLeftProduct :form="form" @Files="Files" />
        <rightComponent :Data="form" />
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import addLeftProduct from '../components/_base/Add Product/LeftComponent'
import rightComponent from '../components/_base/Add Product/rightComponent'
export default {
  name: 'AddProduct',
  components: {
    Navbar,
    Footer,
    addLeftProduct,
    rightComponent
  },
  data() {
    return {
      MassageValue: 30,
      form: {
        timestart: null,
        timeend: null,
        qtyProduct: null,
        categoryId: null,
        nameProduct: '',
        priceProduct: '',
        descProduct: '',
        imageProduct: '',
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
  },
  methods: {
    Files(e) {
      this.form.imageProduct = e
    }
  }
}
</script>
<style scoped>
.AddProduct {
  background: #ffffff;
}
</style>
