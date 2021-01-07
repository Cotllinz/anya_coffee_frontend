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
        :src="'http://localhost:3000/' + images"
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
      <button class="take_picture mt-lg-4 mb-lg-3 mt-4 mb-3">
        Reset
      </button>
    </b-col>
    <div class="ml-lg-3 ml-3 pr-3 pr-lg-0 mt-lg-5 pt-lg-4">
      <div>
        <b-form-group id="timestart" label-for="timestart">
          <b-form-select
            id="timestart"
            v-model="form.discountPromo"
            :options="Option"
            required
          ></b-form-select>
        </b-form-group>
      </div>
      <h2 class="mt-lg-5 title_text mb-lg-4 mb-3 mt-5">
        Expire date :
      </h2>
      <div>
        <b-form-datepicker
          id="start_exp"
          v-model="form.startExp"
          placeholder="Select start date"
          class="mb-lg-3 date_picker  py-lg-1"
        ></b-form-datepicker>
        <b-form-group id="end_exo" label-for="category">
          <b-form-datepicker
            id="end_exp"
            v-model="form.endExp"
            placeholder="Select end date"
            class="mb-2 date_picker py-lg-1"
          ></b-form-datepicker>
        </b-form-group>
      </div>
      <h2 class="mt-lg-4 title_text mb-lg-4 mb-3 mt-5">
        Input coupon code :
      </h2>
      <b-form-input
        id="input-3"
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
import { mapGetters } from 'vuex'
export default {
  name: 'PromoLeft',
  props: ['form'],
  data() {
    return {
      data: []
    }
  },
  computed: {
    ...mapGetters({ Option: 'getOptionDiscount', images: 'getImage' })
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
