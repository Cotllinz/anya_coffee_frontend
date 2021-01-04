<template>
  <main>
    <b-container>
      <b-row>
        <DProductOrder
          :R_Details="Details"
          :roles="roles"
          v-on="{
            DeliveryType: DeliveryType,
            DeliveryNow: DeliveryNow
          }"
        />
        <DProductDesc
          v-bind="{ L_Details: Details, qty: qty }"
          v-on="{ newqty: Changeqty, SendCheckout: SendCheckout }"
        />
        <b-col
          style="padding: 0 !important"
          lg="12"
          class="d-flex flex-lg-row mb-4 flex-column align-items-center"
        >
          <DButtonSize :D_Size="Details" @SizeProduct="SizeProduct" />
          <div class="button__Cart d-block d-md-none">
            <DButton
              @SendCheckout="SendCheckout"
              v-bind="{ DButton: Details, Details: qty }"
            />
          </div>
          <DCheckout v-bind="{ D_Checkout: Details, deliveryCheck: cart }" />
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import DProductOrder from './D-ProductOrder'
import DProductDesc from './D-ProductDesc'
import DButtonSize from './D-ButtonSize'
import DCheckout from './D-Checkout'
import DButton from './D-Button'
export default {
  props: ['Details', 'qty', 'roles'],
  name: 'DetailsProductTargetALLComponent',
  components: {
    DProductOrder,
    DProductDesc,
    DButtonSize,
    DCheckout,
    DButton
  },
  data() {
    return {
      id: 0,
      cart: []
    }
  },
  created() {
    let getCart = localStorage.getItem('cart')
    getCart = JSON.parse(getCart)
    if (getCart) {
      this.cart = getCart
    } else {
      this.cart = []
    }
  },
  methods: {
    Changeqty(e) {
      this.$emit('Changeqty', e)
    },
    DeliveryType(e) {
      this.$emit('DeliveryType', e)
    },
    DeliveryNow(e) {
      this.$emit('DeliveryNow', e)
    },
    SizeProduct(size, price) {
      this.$emit('SizeProduct', size, price)
    },
    SendCheckout(e) {
      this.cart = [...this.cart, e]
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }
}
</script>
