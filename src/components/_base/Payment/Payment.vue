<template>
  <b-col xl="6" lg="6">
    <div class="order__listProduct mt-4 mt-lg-5 mt-xl-5">
      <h1 class="title__orderList">Checkout your item now!</h1>
      <b-card class="px-xl-2 px-lg-2 pb-lg-4 pb-xl-4 mt-3 mt-xl-5">
        <h2
          class="title_card pt-4 pb-3 p-lg-4 mt-lg-4 p-xl-5 mt-xl-4 text-center"
        >
          Order Summary
        </h2>
        <b-card-text class="px-lg-2 px-xl-4">
          <div class="card__all">
            <div
              v-for="(items, index) in PaymentList"
              :key="index"
              style="cursor: pointer"
              @click="removeCart(index)"
              class="d-flex mb-xl-3 mb-3 align-items-center"
            >
              <div class="">
                <img
                  class="image_setting"
                  :src="'http://localhost:3000/' + items.image_product"
                  alt="paymentItems"
                />
              </div>
              <div class="flex-xl-column ml-2 ml-lg-3 ml-xl-4">
                <p class="name_product">{{ items.name_product }}</p>
                <p class="name_product">x {{ items.qty }}</p>
                <p class="name_product">{{ items.size_detail }}</p>
              </div>
              <h5 class="priceTag pr-xl-2 pr-2 ml-auto ml-xl-auto">
                IDR {{ formatPrice(items.total) }}
              </h5>
            </div>
          </div>
          <hr class="mt-xl-4 mt-4" />
          <div class="d-flex mt-xl-4 mt-4 sub_price">
            <h5>SUBTOTAL</h5>
            <p class="ml-auto ml-xl-auto">
              IDR {{ formatPrice(Totals.subTotal) }}
            </p>
          </div>
          <div class="d-flex sub_price">
            <h5>TAX & FEES</h5>
            <p class="ml-auto ml-xl-auto">IDR {{ formatPrice(Totals.tax) }}</p>
          </div>
          <div class="d-flex sub_price mb-xl-5">
            <h5>SHIPPING</h5>
            <p class="ml-auto ml-xl-auto">
              IDR {{ formatPrice(Totals.Shipping) }}
            </p>
          </div>
          <div
            class="d-flex mt-xl-4 mt-lg-4 mt-3 pb-3 pb-lg-5 pb-xl-5 total_productPrice"
          >
            <h2>Total</h2>
            <h2 class="ml-auto ml-xl-auto">
              IDR {{ formatPrice(Totals.TotalOrder) }}
            </h2>
          </div>
        </b-card-text>
      </b-card>
    </div>
  </b-col>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    PaymentList: {
      type: Array
    },
    Totals: {
      type: Object
    }
  },
  computed: {
    ...mapGetters({ Cart: 'getCartDisplay' })
  },
  data() {
    return {}
  },
  methods: {
    removeCart(x) {
      this.$emit('Remove', x)
    },
    formatPrice(value) {
      const val = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      return val
    }
  }
}
</script>
<style scoped>
@import '../../../assets/css/Payment/ListCheckout.css';
.image_setting {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  object-fit: cover;
  object-position: 45%;
}
</style>
