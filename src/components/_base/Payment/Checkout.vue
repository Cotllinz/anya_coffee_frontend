<template>
  <b-col xl="6" lg="6">
    <div class="address__section p-lg-2 p-xl-5">
      <div class="d-flex align-items-lg-center align-items-center">
        <h2 class="nameTag__details mb-xl-2 mb-2 ml-2 ml-xl-2">
          Address details
        </h2>
        <a class="edit__btn ml-xl-auto ml-auto mb-2 mb-xl-2 mr-2 mr-xl-3"
          >edit</a
        >
      </div>
      <b-card class="address_card px-2 px-xl-3 pt-2 pt-xl-3">
        <b-card-text>
          <h5 class="pr-xl-3">
            <strong>Delivery</strong> to {{ userAccount.address_user }}
          </h5>

          <hr />
          <h5>{{ userAccount.phone_number }}</h5>
        </b-card-text>
      </b-card>
      <h2
        class="nameTag__details mt-4 mt-xl-5 mt-lg-2 mb-lg-2 mb-4 mb-xl-4 ml-2 ml-xl-2"
      >
        Payment method
      </h2>
      <b-card class="paymentOption__card px-3 px-xl-3 py-2 py-xl-2">
        <b-card-text>
          <div class="d-flex align-items-center card__atm">
            <input
              type="radio"
              name="Payment_Method"
              v-model="form.paymentMethod"
              id="Payment_Method1"
              value="Cash"
            />
            <img
              class="ml-xl-3 ml-3"
              src="../../../assets/image/icons/Icons_cardCredit.svg"
              alt="card__credit"
            />
            <a class="ml-xl-3 ml-3">Cash</a>
          </div>
          <hr class="ml-xl-4 ml-4" />
          <div class="d-flex align-items-center card__atm">
            <input
              type="radio"
              name="Payment_Method"
              id="Payment_Method2"
              v-model="form.paymentMethod"
              value="ATM"
            />
            <img
              class="ml-xl-3 ml-3"
              src="../../../assets/image/icons/Icon_BankAcc.svg"
              alt="card__Bank"
            />
            <a class="ml-xl-3 ml-3">Bank account</a>
          </div>
          <hr class="ml-xl-4 ml-4" />
          <div class="d-flex align-items-center card__atm">
            <input
              type="radio"
              name="Payment_Method"
              id="Payment_Method3"
              v-model="form.paymentMethod"
              value="COD"
            />
            <img
              class="ml-xl-3 ml-3"
              src="../../../assets/image/icons/icons_COD.svg"
              alt="card__COD"
            />
            <a class="ml-xl-3 ml-3">Cash on delivery</a>
          </div>
        </b-card-text>
      </b-card>
      <button
        @click="PostHistory()"
        class="mt-xl-5 mt-4 mb-5 mb-xl-0 w-100 btn_confirm"
      >
        Confirm and Pay
      </button>
    </div>
  </b-col>
</template>

<script>
import random from 'randomstring'
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
import Alert from '../../../mixins/Alert'
export default {
  name: 'Checkout',
  mixins: [Alert],
  props: {
    PaymentList: {
      type: Array
    },
    Totals: {
      type: Object
    }
  },
  computed: {
    ...mapGetters({
      Ids: 'getId',
      userEmail: 'getEmail',
      userAccount: 'UserAccount'
    })
  },
  data() {
    return {
      form: {
        userId: '',
        paymentMethod: '',
        invoicePayment: '',
        subTotal: this.Totals.TotalOrder
      },
      data: [],
      VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL
    }
  },
  created() {
    this.getRandomInvoice()
    this.UserAccount(this.userEmail)
    /*    console.log(this.data) */
    /*    console.log(this.PaymentList.length) */
  },
  methods: {
    ...mapActions(['UserAccount']),
    GetDetailsOrder() {
      for (let i = 0; i < this.PaymentList.length; i++) {
        const setData = {
          idProduct: this.PaymentList[i].id_product,
          qty: this.PaymentList[i].qty,
          total: this.PaymentList[i].total,
          statusDelivery: this.PaymentList[i].status_delivery,
          sizeDetail: this.PaymentList[i].size_detail,
          table: this.PaymentList[i].status_table
        }
        /*  this.data.push(setData) */
        this.data = [...this.data, setData]
      }
    },
    getRandomInvoice() {
      this.form.invoicePayment = random.generate()
    },
    async PostHistory() {
      await this.GetDetailsOrder()
      this.form.userId = this.Ids
      await axios
        .post(`${this.VUE_APP_SERVICE_URL}history`, this.form)
        .then(response => {
          for (let i = 0; i < this.data.length; i++) {
            this.data[i].idHistory = response.data.data.id_history
          }
        })
        .catch(error => {
          console.log(error.response)
        })
      await axios
        .post(`${this.VUE_APP_SERVICE_URL}history/details`, this.data)
        .then(() => {
          this.AlertSucceBuy()
        })
        .catch(error => {
          console.log(error.response)
        })
      this.$emit('RemoveALL', 'cart')
    }
  }
}
</script>
<style scoped>
@import '../../../assets/css/Payment/Checkout.css';
</style>
