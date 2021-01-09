<template>
  <b-col lg="6">
    <div class="Product__detailsTwo">
      <h1 class="titleProduct__details mt-3 mt-xl-5 pt-xl-5 mb-3 mb-lg-4">
        {{ L_Details.name_product }}
      </h1>
      <p class="descProduct__details pr-xl-2 pl-lg-2 ml-lg-4 mb-lg-4">
        {{ L_Details.desc_product }}
      </p>
      <p class="descDelivery__product pl-lg-2 ml-lg-4">
        Delivery only on <strong>Monday to friday</strong> at
        <strong>{{ L_Details.time_start }} - {{ L_Details.time_end }}</strong>
      </p>
      <div
        class="d-flex align-items-center flex-column flex-lg-row pl-lg-2 ml-lg-4 mt-lg-4"
      >
        <div
          class="d-flex align-items-center order-2 order-lg-1 mt-2 mb-4 mt-lg-2 mb-lg-5 inputProduct__range"
        >
          <button type="button" @click="decrement()" class="minbtn">
            <svg
              style="text-align: center"
              width="2em"
              height="1.4em"
              viewBox="0 0 16 16"
              class="bi bi-dash-circle"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>
          <input
            class="inputbtn"
            max="10"
            min="0"
            type="text"
            readonly
            v-model="qty.qty"
          />
          <button type="button" @click="increment()" class="plusbtn">
            <svg
              width="2em"
              style="text-align: center"
              height="1.4em"
              viewBox="0 0 16 16"
              class="bi bi-plus-circle"
              fill="#6A4029"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fill-rule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </button>
        </div>
        <h2
          class="priceTag__Product order-1 order-lg-2 pt-lg-2 ml-lg-auto mb-lg-5"
        >
          IDR {{ formatPrice(L_Details.price_product) }}
        </h2>
      </div>
    </div>
    <section class="d-block d-md-none delivery__content p-4 p-lg-4 mt-lg-5">
      <DCardOrder />
    </section>
    <div class="button__Cart d-none d-lg-block">
      <DButton
        v-bind="{ DButton: L_Details, Details: qty }"
        @SendCheckout="SendCheckout"
      />
    </div>
  </b-col>
</template>

<script>
import DCardOrder from './D-CardOrder'
import DButton from './D-Button'
export default {
  props: ['L_Details', 'qty'],
  name: 'DProductDesc',
  components: {
    DCardOrder,
    DButton
  },
  data() {
    return {
      quantity: 1,
      cart: []
    }
  },
  methods: {
    increment() {
      if (this.quantity > 0 && this.quantity <= 9) {
        this.quantity += 1
      }
      this.$emit('newqty', this.quantity)
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity -= 1
      }
      this.$emit('newqty', this.quantity)
    },
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    SendCheckout(e) {
      this.$emit('SendCheckout', e)
    }
  }
}
</script>
<style scoped>
@import '../../../assets/css/DetailsProduct/D-ProductDesc.css';
</style>
