<template>
  <b-col lg="6">
    <div class="breadcrumb__addProduct mt-4 mt-lg-3">
      <router-link tag="a" class="breadcrumb__listItem" to="/product"
        >Seller Setup</router-link
      >
      <router-link tag="a" class="breadcrumb__listItem active" to="/addProduct">
        > Add new promo</router-link
      >
    </div>
    <div class="image__fit mt-lg-5 mt-4">
      <img
        v-if="images"
        class="style__image"
        :src="`${VUE_APP_SERVICE_URL_IMAGE}` + images"
        alt="image"
      />
      <img
        v-if="form.images"
        class="style__image"
        :src="`${VUE_APP_SERVICE_URL_IMAGE}` + form.images"
        alt="image"
      />
      <img
        v-if="form.productId === null"
        class="style__image"
        src="../../../assets/image/mainImage/defaultImageAddProduct.svg"
        alt="image"
      />
    </div>
    <b-col lg="12">
      <button
        @click="reset"
        v-if="!this.id"
        class="take_picture mt-lg-4 mb-lg-3 mt-4 mb-3"
      >
        Reset
      </button>
    </b-col>
    <div class="ml-lg-3 ml-3 pr-3 pr-lg-0 mt-lg-5 pt-lg-4">
      <div>
        <b-form>
          <b-form-group id="timestart" label-for="timestart">
            <b-form-select
              id="timestart"
              v-model="form.discountPromo"
              :options="Option"
              required
            ></b-form-select>
          </b-form-group>
        </b-form>
      </div>
      <h2 class="mt-lg-5 title_text mb-lg-4 mb-3 mt-5">
        Expire date :
      </h2>
      <div>
        <b-form>
          <b-form-datepicker
            id="start_exp"
            v-model="form.startExp"
            placeholder="Select start date"
            class="mb-lg-3 date_picker py-2 mb-3  py-lg-1"
          ></b-form-datepicker>
          <b-form-group id="end_exo" label-for="category">
            <b-form-datepicker
              id="end_exp"
              v-model="form.endExp"
              placeholder="Select end date"
              class="mb-2 date_picker py-2 py-lg-1"
            ></b-form-datepicker>
          </b-form-group>
        </b-form>
      </div>
      <h2 class="mt-lg-4 title_text mb-lg-4 mb-3 mt-5">
        Input coupon code :
      </h2>
      <b-form-input
        id="input-3"
        maxlength="10"
        v-model="form.codeCoupon"
        class="Cuopon mb-lg-5"
        placeholder="Input Coupon"
        required
        trim
      ></b-form-input>
    </div>
  </b-col>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'PromoLeft',
  props: ['form'],
  data() {
    return {
      id: 0,
      VUE_APP_SERVICE_URL_IMAGE: process.env.VUE_APP_SERVICE_URL_IMAGE
    }
  },
  created() {
    this.id = this.$route.params.idpromo
  },
  computed: {
    ...mapGetters({ Option: 'getOptionDiscount', images: 'getImage' })
  },
  methods: {
    ...mapMutations(['removeImage']),
    reset() {
      ;(this.form.discountPromo = null),
        (this.form.startExp = ''),
        (this.form.endExp = ''),
        (this.form.codeCoupon = ''),
        (this.form.productId = null),
        (this.form.minPurchase = null),
        (this.form.sizeR = ''),
        (this.form.sizeL = ''),
        (this.form.sizeXL = ''),
        (this.form.size200 = ''),
        (this.form.size350 = ''),
        (this.form.size400 = ''),
        (this.form.homeDeliv = ''),
        (this.form.dineIn = ''),
        (this.form.takeaway = ''),
        this.removeImage()
    }
  }
}
</script>
<style scoped>
a.breadcrumb__addProduct {
  color: #4f5665;
  font-family: 'Rubik', sans-serif;
}

a.breadcrumb__addProduct.active {
  color: #6a4029;
  font-weight: 700;
  font-family: 'Rubik', sans-serif;
}
a.breadcrumb__addProduct:hover {
  text-decoration: none;
  color: #4f5665;
}
div.image__fit {
  width: 250px;
  margin-left: 45px;
  height: 250px;
  overflow: hidden;
  border-radius: 50%;
}
.date_picker {
  width: 58%;
  font-size: 15px;
  cursor: pointer;
  font-family: 'Poppins';
  border-radius: 10px;
}
img.style__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 45%;
}
.Cuopon {
  width: 58%;
  background: none;
}
button.take_picture {
  padding: 15px 0;
  width: 60%;
  font-weight: 700;
  outline: none;
  font-size: 17px;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  background-color: #0b132a;
  font-family: 'Rubik', sans-serif;
}

h2.title_text {
  font-size: 20px;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  color: #6a4029;
}
select.custom-select {
  width: 58% !important;
  height: 50px !important;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  font-family: 'Poppins';
}

@media (max-width: 576px) {
  .date_picker {
    width: 100%;
  }
  .Cuopon {
    width: 100%;
  }
  select.custom-select {
    width: 100% !important;
  }
  button.take_picture {
    width: 100%;
  }

  div.image__fit {
    margin: 0 auto;
  }
}
</style>
