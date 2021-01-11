<template>
  <main class="bg__history">
    <hr class="mt-lg-3 d-none d-lg-block" />
    <b-container fluid>
      <div class="pb-xl-5 pb-3">
        <div class="titleHistory mt-xl-5 mt-lg-5 pt-4 pt-xl-0">
          <h1>Let’s see what you have bought!</h1>
          <p>Select item to delete</p>
        </div>
        <div class="d-flex pr-xl-5 mr-xl-3 pr-1">
          <a
            v-b-modal.modal-prevent-closing
            class="select_all ml-xl-auto ml-auto mb-4 mb-lg-0"
            >Select All</a
          >
        </div>
        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          title="Submit Your Name"
        ></b-modal>
      </div>
      <b-row class="px-xl-5 grid__system">
        <b-col v-for="(item, index) in history" :key="index">
          <div
            @click="modal(item.user_id, item.id_history)"
            class="card p-xl-1 position-relative mb-3 mb-lg-4"
          >
            <div class="card-body d-flex align-items-center">
              <div class="image__history">
                <img
                  class="fit__image"
                  :src="'http://localhost:3000/' + item.orders[0].image_product"
                  alt="Image_History"
                />
              </div>
              <div
                class="all__infoHistory  position-relative"
                style="cursor: pointer;"
                @click="$bvModal.show('modal-Details')"
              >
                <h2 class="title__product mt-2">
                  {{ item.orders[0].name_product }}
                </h2>
                <div class="info__history">
                  <div
                    class="d-flex info_dataHistory mt-3 mt-xl-3 align-items-center"
                  >
                    <p>IDR {{ formatPrice(item.sub_total) }}</p>
                    <p class="ml-auto mr-lg-2">
                      {{ formatPrice(item.orders.length) }} Product
                    </p>
                  </div>
                  <p class="mt-2 mt-lg-2">
                    {{
                      item.status_history === 'OFF'
                        ? 'Order Done'
                        : 'Order Pending'
                    }}
                  </p>
                </div>
              </div>
              <!--   <input
                class="ml-xl-auto ml-auto mt-4 mt-xl-auto mr-xl-3 mb-xl-3"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              /> -->
            </div>
          </div>
        </b-col>
        <b-modal
          size="lg"
          hide-header-close
          id="modal-Details"
          centered
          hide-footer
        >
          <template #modal-title>
            <div class="title_payment">
              <h2 style="font-weight: 700;">Pesanan Selesai</h2>
              <p>Terima kasih sudah berbelanja di Anya Coffee</p>
            </div>
          </template>
          <b-card class="card_modal">
            <div class="d-flex flex-column flex-lg-row mb-4 mb-lg-0">
              <div
                class="title_invoice order-2 order-lg-1 mt-2 mt-lg-0 flex-lg-column"
              >
                <p>Payment Method :</p>
                <p style="font-weight: 700;" v-if="historyDetails.length > 0">
                  {{ historyDetails[0].payment_method }}
                </p>
              </div>
              <div
                class="title_invoice order-1 order-lg-2 ml-lg-auto flex-lg-column"
              >
                <p>No. Invoice :</p>
                <p style="font-weight: 700;" v-if="historyDetails.length > 0">
                  {{ historyDetails[0].invoice_payment }}
                </p>
              </div>
            </div>
            <div class="mt-lg-4 card_HistoryDetails">
              <div
                v-for="(item, index) in historyDetails"
                :key="index"
                class="d-flex mb-xl-3 mb-3 align-items-center"
              >
                <div class="">
                  <img
                    v-if="historyDetails.length > 0"
                    class="image_payment"
                    :src="'http://localhost:3000/' + item.image_product"
                    alt="paymentItems"
                  />
                </div>
                <div class="flex-xl-column ml-2 ml-lg-3 ml-xl-4">
                  <p class="name_product">{{ item.name_product }}</p>
                  <p class="name_product">x {{ item.qty }}</p>
                  <p class="name_product">{{ item.size_detail }}</p>
                  <p class="name_product">{{ item.status_delivery }}</p>
                </div>
                <h5 class="priceTagHistory pr-xl-2 pr-2 ml-auto ml-xl-auto">
                  IDR {{ formatPrice(item.total) }}
                </h5>
              </div>
            </div>
            <div
              v-if="historyDetails.length > 0"
              class="mt-lg-3 mt-3 d-flex flex-column flex-lg-row DetailsSubs"
            >
              <h5 class="priceTagHistory pr-xl-2 pr-2">
                SubTotals :<br />
                IDR {{ formatPrice(historyDetails[0].sub_total) }}
              </h5>
              <h5 class="DateTag pr-xl-2 pr-2 ml-lg-auto">
                Purchase Date :<br />
                {{ formatDate(historyDetails[0].create_at) }}
              </h5>
            </div>

            <button
              class="mt-lg-3 py-2 btn_close mt-2 ml-lg-auto mr-lg-auto"
              @click="$bvModal.hide('modal-Details')"
            >
              Close
            </button>
          </b-card>
        </b-modal>
      </b-row>
    </b-container>
  </main>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'HMC',
  computed: {
    ...mapGetters({
      Id: 'getId',
      history: 'getHistory',
      historyDetails: 'getHistoryDetails'
    })
  },
  created() {
    this.getHistorybyId(this.Id)
  },
  methods: {
    ...mapActions(['getHistorybyId', 'getDetailsHistory']),
    strippedInvoice(value) {
      if (value.length > 10) {
        return value.slice(0, 10) + ', ...'
      }
    },
    formatPrice(value) {
      const val = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      return val
    },
    modal(user_id, id_history) {
      const dataHistory = {
        id: user_id,
        historyId: id_history
      }
      this.getDetailsHistory(dataHistory)
    },
    formatDate(value) {
      moment.locale('EN')
      return moment(String(value)).format('LLLL')
    }
  }
}
</script>
<style scoped>
main.bg__history {
  background-image: url('../../../assets/image/mainImage/Bg__History.jpg');
  background-size: cover;
  background-position: 0% 25%;
}

div.titleHistory {
  text-align: center;
  font-family: 'Rubik', sans-serif;
}

div.titleHistory p {
  font-size: 20px;
  color: #fff;
}

div.titleHistory h1 {
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  font-weight: 700;
}
div.card {
  border-radius: 20px;
  height: 120px;
  outline: none;
}
h5.priceTagHistory {
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  white-space: nowrap;
}
h5.DateTag {
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
}
div.image__history {
  width: 80px;
  height: 80px;
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
}

a.select_all {
  font-family: 'Poppins', sans-serif;
  color: rgb(255, 255, 255);
  font-weight: 700;
  text-decoration: underline;
  font-size: 20px;
}

div.image__history > .fit__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 45%;
}
h2.title__product {
  font-size: 22px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}
div.all__infoHistory {
  left: 95px;
  width: 80%;
  top: 6px;
}
div.info__history {
  font-size: 20px;
  color: #895537;
  font-family: 'Poppins', sans-serif;
}
div.info_dataHistory p {
  line-height: 6px;
  margin: 0;
}
div.grid__system {
  display: grid;
}

input[type='checkbox'] {
  cursor: pointer;
  z-index: 3;
}

/* Modal Style */

div.title_payment h2 {
  font-size: 25px;
  font-family: 'Poppins', sans-serif;
}
div.title_payment p {
  font-size: 15px;
  line-height: 10px;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
div.title_invoice p {
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}
.card_modal {
  border: none;
}
.card_modal .card-body {
  padding: 0 !important;
}
.card_HistoryDetails {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 200px;
}
.card_HistoryDetails::-webkit-scrollbar {
  width: 5px;
}

/deep/ .modal-content {
  border-radius: 20px;
  height: 500px;
}
.image_payment {
  width: 80px;
  height: 80px;
  border-radius: 10%;
  object-fit: cover;
  overflow: hidden;
  object-position: 45%;
}
.card_HistoryDetails::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.card_HistoryDetails::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
div.modal-footer {
  border: none;
}
button.btn_close {
  font-family: 'Poppins', sans-serif;
  padding: 15px 27px;
  border-radius: 10px;
  font-weight: 700;
  width: 50%;
  outline: none !important;
  font-size: 15px;
  display: block;
}
button.btn_cancel {
  border: 3px solid #6a4029;
  background: none;
  color: #6a4029;
}
button.btn_close {
  border: 3px solid #6a4029;
  background: #6a4029;
  color: #ffffff;
}
/* Hover Modal */
button.btn_cancel:hover {
  border-color: #53301d;
  background: #5a311b;
  color: #fff;
}
button.btn_close:hover {
  border: 3px solid #915738;
  background: #915738;
}
/* Hover History */
a.select_all:hover {
  color: rgb(164, 164, 165);
  font-size: 20px;
}

/* Media Query */
@media (max-width: 4000px) {
  div.grid__system {
    grid-template-columns: 16.6% auto auto auto auto auto;
  }
}
@media (max-width: 1920px) {
  div.grid__system {
    grid-template-columns: 25% auto auto auto;
  }
}
@media (max-width: 1440px) {
  div.grid__system {
    grid-template-columns: 34% auto auto;
  }
}

@media (max-width: 1024px) {
  div.all__infoHistory {
    width: 70%;
  }
}

@media (max-width: 576px) {
  p.name_product {
    margin: 0;
  }
  div.titleHistory h1 {
    font-size: 30px;
  }
  /deep/ .modal-content {
    height: 600px;
  }
  div.titleHistory p {
    font-size: 20px;
    margin-top: 20px;
  }
  div.grid__system {
    grid-template-columns: auto;
  }
  div.all__infoHistory {
    left: 90px;
    width: 70%;
    padding-right: 0px;
  }
  main.bg__history {
    background-position: 35% 55%;
  }
}
@media (max-width: 395px) {
  /deep/ .modal-content {
    height: 650px;
  }
  div.title_payment p {
    line-height: normal;
  }
  div.info__history p:nth-child(1),
  p:nth-child(2) {
    font-size: 17px;
  }
}
</style>
