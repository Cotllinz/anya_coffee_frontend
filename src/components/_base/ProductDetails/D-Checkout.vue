<template>
  <b-col lg="7" class="mt-4 ml-lg-4 mt-lg-5">
    <div class="detail_checkoutProduct py-4 py-lg-3 py-xl-4 px-lg-5">
      <div class="d-flex flex-column flex-lg-row align-items-center">
        <div class="">
          <img
            class="detail_imageProd"
            src="../../../assets/image/mainImage/DetailProduct.svg"
            alt="image_checkout"
          />
        </div>
        <div class="flex-column mt-3 mt-xl-0 ml-4 mr-auto ml-lg-3">
          <div class="list__details">
            <h2 class="title_drinkCheck">{{ D_Checkout.name_product }}</h2>
            <ul class="list-unstyled">
              <li v-for="(item, index) in filter(deliveryCheck)" :key="index">
                x{{ item.qty }} ({{ item.size_detail }})
              </li>
            </ul>
          </div>
        </div>
        <h2 class="mt-lg-2 mt-xl-2 checkOut__name ml-lg-auto">
          Checkout
        </h2>
        <router-link tag="a" to="/payment"
          ><img src="../../../assets/image/icons/arrows_checkout.svg" alt=""
        /></router-link>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    D_Checkout: {
      type: Object
    },
    deliveryCheck: {
      type: Array
    }
  },
  name: 'DetailsCheckout',
  data() {
    return {
      id: 0
    }
  },
  created() {
    this.id = this.$route.params.idDtls
  },
  methods: {
    filter(cart) {
      return cart.filter(carts => carts.id_product == this.id)
    }
    /* filtering(cart) {
      const car = this.filter(cart)
      for (let i = 0; i < car.length; i++) {
        let hasil = car[i].qty
        let size = car[i].size_detail
        if (size == 'Reguler') {
          console.log()
        }
        console.log(size == 'Reguler')
        console.log(`${hasil} on ${size}`)
      }
      return car
    } */
  }
}
</script>
<style scoped>
@import '../../../assets/css/DetailsProduct/D-Checkout.css';
</style>
