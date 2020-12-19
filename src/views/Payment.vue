<template>
  <div class="Payment">
    <Navbar :roles="role" :msg="MassageValue" />
    <main class="bg__payment">
      <hr class="mt-lg-3 d-none d-lg-block" />
      <b-container>
        <b-row>
          <ListPayment :PaymentList="cart" @Total="Total" />
          <Checkout v-bind="{ PaymentList: cart, Totals: Totals }" />
        </b-row>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import ListPayment from '../components/_base/Payment/Payment'
import Checkout from '../components/_base/Payment/Checkout'
export default {
  name: 'Payment',
  components: {
    Navbar,
    Footer,
    ListPayment,
    Checkout
  },
  data() {
    return {
      role: 1,
      MassageValue: 30,
      Totals: {
        TotalOrder: 0
      },
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
    Total(e) {
      this.Totals.TotalOrder = e
    }
  }
}
</script>

<style scoped>
main.bg__payment {
  background-image: url('../assets/image/mainImage/DetailProduct1.jpg');
  background-size: cover;
  background-position: 0% 90%;
  height: 1060px;
}

/* Media Query Main */

@media (max-width: 1024px) {
  main.bg__payment {
    height: auto;
  }
}

@media (max-width: 576px) {
  main.bg__payment {
    height: auto;
    background-position: 66% 0%;
  }
}
</style>
