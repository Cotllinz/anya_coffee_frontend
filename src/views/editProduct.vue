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
import { mapGetters, mapActions } from 'vuex'
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
      id: 0,
      form: {
        imageBase: '',
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
  computed: {
    ...mapGetters(['setEdit'])
  },
  created() {
    this.id = this.$route.params.idedit
    this.getProductId(this.id).then(result => {
      this.form.nameProduct = result.data.data[0].name_product
      this.form.timestart = result.data.data[0].time_start
      this.form.timeend = result.data.data[0].time_end
      this.form.qtyProduct = result.data.data[0].qty_product
      this.form.categoryId = result.data.data[0].category_id
      this.form.priceProduct = result.data.data[0].price_product
      this.form.descProduct = result.data.data[0].desc_product
      this.form.imageBase = result.data.data[0].image_product
      this.form.sizeR = result.data.data[0].size_R
      this.form.sizeL = result.data.data[0].size_L
      this.form.sizeXL = result.data.data[0].size_XL
      this.form.size200 = result.data.data[0].size_200
      this.form.size350 = result.data.data[0].size_350
      this.form.size400 = result.data.data[0].size_400
      this.form.homeDeliv = result.data.data[0].homeDeliv
      this.form.dineIn = result.data.data[0].dineIn
      this.form.takeaway = result.data.data[0].takeaway
    })
    /* this.form.nameProduct = this.setEdit.name_product */
  },
  methods: {
    ...mapActions(['getProductId']),
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
