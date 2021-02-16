<template>
  <div class="Payment">
    <Navbar :showSearchIcons="search" :msg="MassageValue" />
    <main class="bg__payment">
      <hr class="mt-lg-3 d-none d-lg-block" />
      <b-container>
        <b-row>
          <ListPayment :PaymentList="cart" :Totals="Totals" @Remove="Remove" />
          <Checkout
            v-bind="{ PaymentList: cart, Totals: Totals }"
            @RemoveALL="RemoveALL"
          />
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
      search: false,
      MassageValue: 30,
      Totals: {
        TotalOrder: 0,
        subTotal: 0,
        tax: 0,
        Shipping: 10000
      },
      cart: []
    }
  },

  created() {
    this.getcart()
    this.GetSubTotal()
  },
  methods: {
    getcart() {
      let getCart = localStorage.getItem('cart')
      getCart = JSON.parse(getCart)
      if (getCart) {
        this.cart = getCart
      } else {
        this.cart = []
      }
    },
    Remove(e) {
      this.cart.splice(e, 1)
      localStorage.setItem('cart', JSON.stringify(this.cart))
      this.GetSubTotal()
    },
    RemoveALL(e) {
      this.cart = localStorage.removeItem(e)
      this.GetSubTotal()
    },
    GetSubTotal() {
      this.Totals = {
        TotalOrder: 0,
        subTotal: 0,
        tax: 0,
        Shipping: 10000
      }
      for (let i = 0; i < this.cart.length; i++) {
        this.Totals.subTotal += this.cart[i].total
        this.Totals.tax += this.cart[i].total * 0.15
      }
      this.Totals.TotalOrder =
        this.Totals.subTotal + this.Totals.tax + this.Totals.Shipping
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
