<template>
  <b-col lg="6">
    <div class="mt-lg-5 pt-5">
      <b-form v-on:submit.prevent="sendData">
        <b-form-group v-if="!id" id="nameProduct" label-for="nameProduct">
          <label for="">Name Product</label>
          <b-form-select
            id="nameProduct"
            v-model="Data.productId"
            :options="DataProduct"
            @change="handleValue"
            required
          ></b-form-select>
        </b-form-group>
        <b-form-group v-if="id" id="nameProductEdit" label-for="nameProduct">
          <label for="">Name Product</label>
          <b-form-input
            class="normal-input"
            id="nameProductEdit"
            v-model="Data.nameProduct"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="normalPrice" label-for="normalPrice">
          <label for="">Normal Price</label>
          <b-form-input
            class="normal-input"
            id="normalPrice"
            placeholder="Product Not Selected"
            v-model="Nprice"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="Qty" label-for="Qty">
          <label for="">Minimun Purchase</label>
          <b-form-select
            id="Qty"
            v-model="Data.minPurchase"
            :options="minpurchase"
            required
          ></b-form-select>
        </b-form-group>
        <h2 class="title_rigth mt-lg-5 mb-lg-3">Input product size :</h2>
        <p class="desc_title mb-lg-4">
          Click size you want to use for this product
        </p>
        <div class="d-xl-flex mb-lg-4 ml-lg-4 size__product">
          <a class="pr-lg-2 pr-2" @click="SizeR('ON')"
            ><img
              :class="Data.sizeR === 'ON' ? 'active' : ''"
              src="../../../assets/image/icons/R_Size.svg"
              alt="R_size"
          /></a>
          <a class="pr-lg-2 pr-2" @click="SizeL('ON')"
            ><img
              :class="Data.sizeL === 'ON' ? 'active' : ''"
              src="../../../assets/image/icons/L_Size.svg"
              alt="L_size"
          /></a>
          <a class="pr-lg-2 pr-2" @click="SizeXL('ON')"
            ><img
              :class="Data.sizeXL === 'ON' ? 'active' : ''"
              src="../../../assets/image/icons/XL_Size.svg"
              alt="XL_size"
          /></a>
          <a class="pr-lg-2 pr-2 " @click="Size250('ON')"
            ><img
              :class="Data.size200 === 'ON' ? 'active' : ''"
              src="../../../assets/image/icons/Size_250.svg"
              alt="250_size"
          /></a>
          <div class="mt-2 mt-xl-0">
            <a class="pr-lg-2 pr-2" @click="Size300('ON')"
              ><img
                style="cursor: pointer;"
                :class="Data.size350 === 'ON' ? 'active' : ''"
                src="../../../assets/image/icons/Size_300.svg"
                alt="300_size"
            /></a>
            <a style="cursor: pointer;" @click="Size500('ON')"
              ><img
                :class="Data.size400 === 'ON' ? 'active' : ''"
                src="../../../assets/image/icons/Size_500.svg"
                alt="500_size"
            /></a>
          </div>
        </div>
        <h2 class="title_rigth">Input delivery methods :</h2>
        <p class="desc_title mb-lg-4">
          Click methods you want to use for this product
        </p>
        <div class="d-xl-flex align-items-center mb-lg-3 ml-lg-4 delivery">
          <a style="cursor: pointer;" class="pr-lg-3" @click="homeDev('ON')"
            ><img
              :class="Data.homeDeliv === 'ON' ? 'active' : ''"
              class="honedeliv"
              src="../../../assets/image/icons/DineIn.svg"
              alt="HomeDelivery"
          /></a>
          <a style="cursor: pointer;" class="pr-lg-3" @click="Dinein('ON')"
            ><img
              :class="Data.dineIn === 'ON' ? 'active' : ''"
              class="dineIn"
              src="../../../assets/image/icons/HomeDelivery.svg"
              alt="Dinein"
          /></a>
          <a style="cursor: pointer;" @click="Takeaway('ON')"
            ><img
              class="takeaway"
              :class="Data.takeaway === 'ON' ? 'active' : ''"
              src="../../../assets/image/icons/TakeAway.svg"
              alt="Takeaway"
          /></a>
        </div>
        <b-col lg="12">
          <button
            type="submit"
            class="save_btn mt-lg-5 mt-3 mb-3 mb-lg-3 w-100 "
          >
            Save Product
          </button>
        </b-col>
        <b-col lg="12">
          <router-link
            tag="button"
            to="/product"
            class="cancel_btn mb-5 mb-lg-4 w-100"
            >Cancel</router-link
          >
        </b-col>
      </b-form>
    </div>
  </b-col>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import AlertMixins from '../../../mixins/Alert'
export default {
  name: 'PromoRight',
  props: ['Data'],
  mixins: [AlertMixins],
  data() {
    return {
      storeR: '',
      storeL: '',
      storeXL: '',
      store200: '',
      store350: '',
      store400: '',
      storeHomedev: '',
      storeDine: '',
      storeTake: '',
      minpurchase: [
        { text: 'Input Minimum Purchase', value: null },
        { text: 'One Order', value: 1 },
        { text: 'Two Order', value: 2 },
        { text: 'Three Order', value: 3 },
        { text: 'Four Order', value: 4 },
        { text: 'Five Order', value: 5 },
        { text: 'Six Order', value: 6 },
        { text: 'Seven Order', value: 7 },
        { text: 'Eight Order', value: 8 },
        { text: 'Nine Order', value: 9 },
        { text: 'Ten Order', value: 10 }
      ],
      id: 0
    }
  },
  computed: {
    ...mapGetters({ DataProduct: 'getProductforPromo', Nprice: 'getPrice' })
  },
  created() {
    this.id = this.$route.params.idpromo
    if (!this.id) {
      this.getProductforPromo()
    }
  },
  methods: {
    ...mapActions(['getProductforPromo', 'addPromo', 'updatePromo']),
    ...mapMutations(['getPrice', 'getDiscountCP']),
    sendData() {
      let SetData = {
        DataSend: this.Data,
        id: this.id
      }
      if (this.id) {
        SetData.DataSend.startExp = SetData.DataSend.startExp.slice(0, 10)
        SetData.DataSend.endExp = SetData.DataSend.endExp.slice(0, 10)
        this.updatePromo(SetData)
          .then(() => {
            this.AlertUpdatePromo(this.Data.nameProduct).then(res => {
              if (res) {
                this.$router.push('/product')
              }
            })
          })
          .catch(err => {
            this.AlertErrorRegister(err.data.massage)
          })
      } else {
        this.addPromo(this.Data)
          .then(result => {
            this.AlertSuccesAddPromo(result.data.massage).then(res => {
              if (res) {
                this.$router.push('/product')
              }
            })
          })
          .catch(err => {
            this.AlertErrorRegister(err.data.massage)
          })
      }
    },
    handleValue(value) {
      this.getPrice(value)
      this.getDiscountCP(this.id)
    },
    SizeR(value) {
      if (!this.storeR) {
        this.Data.sizeR = value
        this.storeR = value
      } else {
        if (this.storeR === value) {
          this.Data.sizeR = ''
          this.storeR = ''
        } else {
          this.Data.sizeR = value
          this.storeR = value
        }
      }
    },
    SizeL(value) {
      if (!this.storeL) {
        this.Data.sizeL = value
        this.storeL = value
      } else {
        if (this.storeL === value) {
          this.Data.sizeL = ''
          this.storeL = ''
        } else {
          this.Data.sizeL = value
          this.storeL = value
        }
      }
    },
    SizeXL(value) {
      if (!this.storeXL) {
        this.Data.sizeXL = value
        this.storeXL = value
      } else {
        if (this.storeXL === value) {
          this.Data.sizeXL = ''
          this.storeXL = ''
        } else {
          this.Data.sizeXL = value
          this.storeXL = value
        }
      }
    },
    Size250(value) {
      if (!this.store200) {
        this.Data.size200 = value
        this.store200 = value
      } else {
        if (this.store200 === value) {
          this.Data.size200 = ''
          this.store200 = ''
        } else {
          this.Data.size200 = value
          this.store200 = value
        }
      }
    },
    Size300(value) {
      if (!this.store350) {
        this.Data.size350 = value
        this.store350 = value
      } else {
        if (this.store350 === value) {
          this.Data.size350 = ''
          this.store350 = ''
        } else {
          this.Data.size350 = value
          this.store350 = value
        }
      }
    },
    Size500(value) {
      if (!this.store400) {
        this.Data.size400 = value
        this.store400 = value
      } else {
        if (this.store400 === value) {
          this.Data.size400 = ''
          this.store400 = ''
        } else {
          this.Data.size400 = value
          this.store400 = value
        }
      }
    },
    homeDev(value) {
      if (!this.storeHomedev) {
        this.Data.homeDeliv = value
        this.storeHomedev = value
      } else {
        if (this.storeHomedev === value) {
          this.Data.homeDeliv = ''
          this.storeHomedev = ''
        } else {
          this.Data.homeDeliv = value
          this.storeHomedev = value
        }
      }
    },
    Dinein(value) {
      if (!this.storeDine) {
        this.Data.dineIn = value
        this.storeDine = value
      } else {
        if (this.storeDine === value) {
          this.Data.dineIn = ''
          this.storeDine = ''
        } else {
          this.Data.dineIn = value
          this.storeDine = value
        }
      }
    },
    Takeaway(value) {
      if (!this.storeTake) {
        this.Data.takeaway = value
        this.storeTake = value
      } else {
        if (this.storeTake === value) {
          this.Data.takeaway = ''
          this.storeTake = ''
        } else {
          this.Data.takeaway = value
          this.storeTake = value
        }
      }
    }
  }
}
</script>

<style scoped>
input.normal-input {
  border: 1px solid #ced4da !important;
  border-radius: 10px !important;
  font-size: 15px;
}
.form-control {
  border: none !important;
  background: none !important;
  border-bottom: 2px solid !important;
  border-radius: 0 !important;
}
label {
  font-family: 'Rubik', sans-serif !important;
  font-weight: 700;
  color: #6a4029;
}
select.custom-select {
  height: 50px !important;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  font-family: 'Poppins';
}
.title_rigth {
  font-family: 'Rubik', sans-serif;
  font-size: 25px;
  color: #6a4029;
  font-weight: 700;
}
.desc_title {
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  color: #9f9f9f;
}

button.save_btn {
  padding: 15px 0;
  border-radius: 10px;
  border: none;
  outline: none !important;
  font-family: 'Poppins';
  background: #6a4029;
  font-weight: 700;
  color: white;
}
button.cancel_btn {
  padding: 15px 0;
  border-radius: 10px;
  border: none;
  background: rgba(186, 186, 186, 0.35);
  font-family: 'Poppins';
  font-weight: 700;
  color: #4f5665;
  outline: none !important;
}
button.save_btn:hover {
  background: #c05e29;
}
button.cancel_btn:hover {
  background: rgba(128, 125, 125, 0.35);
}
.size__product .active {
  border: 2px solid #8d3d12;
  border-radius: 50%;
}
.size__product > a {
  cursor: pointer;
}
.delivery .active {
  border: 2px solid #8d3d12;
  border-radius: 20px;
}

.honedeliv {
  width: 150px;
}
.dineIn {
  width: 150px;
}
.takeaway {
  width: 150px;
}
</style>
