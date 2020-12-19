<template>
  <b-col lg="6">
    <div class="product__detailsOne">
      <div class="breadcrumb__details mt-4 mt-lg-3">
        <router-link tag="a" class="breadcrumb__listItem" to="/product"
          >Favorite & Promo</router-link
        >
        <router-link tag="a" class="breadcrumb__listItem active" to="/product">
          > {{ R_Details.name_product }}</router-link
        >
      </div>
      <div class="">
        <img
          class="product__pictureDetail mt-4 mb-xl-3 mt-lg-5"
          src="../../../assets/image/mainImage/DetailProduct.svg"
          alt="ImagePicture"
        />
      </div>
    </div>
    <section class="d-none d-lg-block delivery__content p-lg-4 mt-lg-4">
      <DCardOrder
        v-on="{ DeliveryType: DeliveryType, DeliveryNow: DeliveryNow }"
      />
    </section>
  </b-col>
</template>

<script>
import DCardOrder from './D-CardOrder'
export default {
  props: ['R_Details'],
  name: 'DProductOrder',
  components: {
    DCardOrder
  },
  methods: {
    DeliveryType(e) {
      this.$emit('DeliveryType', e)
    },
    DeliveryNow(e) {
      this.$emit('DeliveryNow', e)
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/DetailsProduct/D-ProductOrder.css';
</style>
