<template>
  <b-col lg="6">
    <div class="mt-lg-5 pt-5">
      <b-form-group
        id="fieldset-1"
        label="Name :"
        class="mb-lg-3"
        label-for="input-1"
        valid-feedback="Good Job !"
        :invalid-feedback="invalidFeedback"
        :state="names"
      >
        <b-form-input
          id="input-1"
          v-model="Data.nameProduct"
          placeholder="Type product name"
          :state="names"
          required
          trim
        ></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-2" label="Price :" label-for="input-1">
        <b-form-input
          id="input-2"
          v-model="Data.priceProduct"
          placeholder="Type the price"
          required
          type="number"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-3" label="Description :" label-for="input-1">
        <b-form-input
          id="input-3"
          v-model="Data.descProduct"
          placeholder="Describe your product min. 150 characters"
          required
          trim
        ></b-form-input>
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

        <!-- <div class="round-button">
          <p class="rotation">500 gr</p>
        </div> -->
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
          @click="sendData()"
          class="save_btn mt-lg-5 mt-3 mb-3 mb-lg-3 w-100 "
        >
          Save Product
        </button>
      </b-col>
      <b-col lg="12">
        <router-link
          tag="button"
          to="/product"
          class="cancel_btn mb-5 mb-lg-0 w-100"
          >Cancel</router-link
        >
      </b-col>
    </div>
  </b-col>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ProductRight',
  props: ['Data'],
  computed: {
    names() {
      return this.Data.nameProduct.length >= 10
    },
    invalidFeedback() {
      if (this.Data.nameProduct.length > 0) {
        return 'Enter at least 7 characters.'
      }
      return 'Please enter name your product.'
    }
  },
  data() {
    return {
      /* sizeR: '', */
      storeR: '',
      /*  sizeL: '', */
      storeL: '',
      /*  sizeXL: '', */
      storeXL: '',
      /*  size250: '', */
      store200: '',
      /*  size300: '', */
      store350: '',
      /*   size500: '', */
      store400: '',
      storeHomedev: '',
      storeDine: '',
      storeTake: ''
    }
  },
  methods: {
    sendData() {
      axios
        .post('http://localhost:3000/product', this.Data)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        })
      console.log(this.Data)
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
/* .round-button {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: #000000;
  cursor: pointer;
  position: relative;
  text-align: center;
  text-decoration: none;
  background: #ffba33;
  font-size: 20px;
  font-weight: bold;
}
p.rotation {
  position: absolute;
  top: 20px;
  left: 5px;
} */

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
