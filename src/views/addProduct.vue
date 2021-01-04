<template>
  <div class="AddProduct">
    <Navbar :roles="role" :msg="MassageValue" />
    <hr class="mt-lg-3 d-none d-lg-block" />
    <b-container>
      <b-row>
        <addLeftProduct :form="form" />
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
      role: 1,
      id: 0,
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
  created() {
    this.id = this.$route.params.Id
  }
}
</script>
