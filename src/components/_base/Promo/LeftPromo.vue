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
        class="style__image"
        src="https://images.unsplash.com/photo-1608327070138-f325a945c8cb?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="image"
      />
    </div>
    <b-col lg="12">
      <button class="take_picture mt-lg-4 mb-lg-3 mt-4 mb-3">
        Take a picture
      </button>
    </b-col>
    <b-col lg="12">
      <button class="choose_from_gallery mb-lg-5">Choose from gallery</button>
    </b-col>
    <div class="ml-lg-3 ml-3 pr-3 pr-lg-0 mt-lg-5 pt-lg-4">
      <div>
        <b-form>
          <b-form-group id="timestart" label-for="timestart">
            <b-form-select
              id="timestart"
              v-model="form.discountPromo"
              :options="discount"
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
        </b-form>
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
export default {
  name: 'PromoLeft',
  props: ['form', 'product'],
  data() {
    return {
      discount: [
        { text: 'Input discount', value: null },
        { text: '10 %', value: 10 },
        { text: '20 %', value: 20 },
        { text: '30 %', value: 30 },
        { text: '40 %', value: 40 },
        { text: '50 %', value: 50 },
        { text: '60 %', value: 60 },
        { text: '70 %', value: 70 },
        { text: '80 %', value: 80 },
        { text: '85 %', value: 85 }
      ],
      data: []
    }
  },
  created() {
    this.disc()
    console.log(this.form.productId)
    console.log(this.form.productId === this.product.value)
  },
  methods: {
    disc() {
      for (let i = 0; i < this.discount.length; i++) {
        if (this.form.productId === this.product.value) {
          let hitung = this.product.price * (this.discount[i].value / 100)
          let hasil = this.product.price - hitung
          this.discount[i].text = this.discount[i].text + ' => ' + hasil
          if (this.discount[0]) {
            this.discount[0].text = 'Input Discount'
          }
          const hasilz = {
            text: this.discount[i].text,
            value: this.discount[i].value
          }
          this.data = [...this.data, hasilz]
        }
      }
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
  font-size: 17px;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  background-color: #0b132a;
  font-family: 'Rubik', sans-serif;
}
button.choose_from_gallery {
  padding: 15px 0;
  width: 60%;
  font-weight: 700;
  font-size: 17px;
  color: #6a4029;
  border-radius: 10px;
  border: none;
  background-color: #ffba33;
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
  button.choose_from_gallery {
    width: 100%;
  }
  div.image__fit {
    margin: 0 auto;
  }
}
</style>
