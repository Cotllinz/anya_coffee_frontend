<template>
  <b-col lg="6">
    <div class="breadcrumb__addProduct mt-4 mt-lg-3">
      <router-link tag="a" class="breadcrumb__listItem" to="/product"
        >Seller Setup</router-link
      >
      <router-link tag="a" class="breadcrumb__listItem active" to="/addProduct">
        > Add new product</router-link
      >
    </div>
    <div class="image__fit mt-lg-5 mt-4">
      <img
        class="style__image"
        v-if="form.imageBase && url === null"
        :src="`${VUE_APP_SERVICE_URL_IMAGE}` + form.imageBase"
        alt="image_edit"
      />
      <img class="style__image" v-if="url" :src="url" alt="image" />
      <img
        v-if="url === null"
        class="style__image"
        src="../../../assets/image/mainImage/defaultImageAddProduct.svg"
        alt="imageDefault"
      />
    </div>
    <b-col lg="12">
      <button
        @click="removePhoto"
        class="take_picture mt-lg-4 mb-lg-3 mt-4 mb-3"
      >
        {{ form.imageBase && url ? 'Recovery Previous Photo' : 'Remove Photo' }}
      </button>
    </b-col>
    <b-col lg="12">
      <input id="fileUpload" type="file" @change="onFileChange" hidden />
      <button @click="chooseFiles" class="choose_from_gallery mb-lg-5">
        Choose from gallery
      </button>
    </b-col>
    <div class="ml-lg-3 ml-3 pr-3 pr-lg-0">
      <h2 class="mt-lg-5 title_text mb-lg-4 mb-3 mt-5">Delivery Hour :</h2>
      <div>
        <b-form>
          <b-form-group id="timestart" label-for="timestart">
            <b-form-select
              id="timestart"
              v-model="form.timestart"
              :options="timestart"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group id="timeEND" label-for="timestart">
            <b-form-select
              id="timeEND"
              class="mb-lg-4"
              v-model="form.timeend"
              :options="timeend"
              required
            ></b-form-select>
          </b-form-group>
        </b-form>
      </div>
      <h2 class="mt-lg-5 title_text mb-lg-4 mb-3 mt-5">
        Input stock & Category :
      </h2>
      <div>
        <b-form>
          <b-form-group id="qty" label-for="qty">
            <b-form-select
              id="qty"
              v-model="form.qtyProduct"
              :options="qtyProduct"
              class="mb-lg-2"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group id="categort" label-for="category">
            <b-form-select
              id="category"
              v-model="form.categoryId"
              :options="categoryId"
              class="mb-lg-5"
              required
            ></b-form-select>
          </b-form-group>
        </b-form>
      </div>
    </div>
  </b-col>
</template>
<script>
export default {
  name: 'ProductLeft',
  props: ['form'],
  data() {
    return {
      url: null,
      VUE_APP_SERVICE_URL_IMAGE: process.env.VUE_APP_SERVICE_URL_IMAGE,
      timestart: [
        { text: 'Select start hour', value: null },
        '1 am',
        '2 am',
        '3 am',
        '4 am',
        '5 am',
        '6 am',
        '7 am',
        '8 am',
        '9 am',
        '10 am',
        '11 am',
        '12 am'
      ],
      timeend: [
        { text: 'Select end hour', value: null },
        '1 pm',
        '2 pm',
        '3 pm',
        '4 pm',
        '5 pm',
        '6 pm',
        '7 pm',
        '8 pm',
        '9 pm',
        '10 pm',
        '11 pm',
        '12 pm'
      ],
      qtyProduct: [
        { text: 'Input stock', value: null },
        { text: '25 Stock', value: 25 },
        { text: '50 Stock', value: 50 },
        { text: '100 Stock', value: 100 }
      ],
      categoryId: [
        { text: 'Select category', value: null },
        { text: 'Coffee', value: 1 },
        { text: 'Non Coffee', value: 2 },
        { text: 'Favorite Product', value: 3 },
        { text: 'Foods', value: 4 },
        { text: 'Add-on', value: 5 }
      ]
    }
  },
  methods: {
    chooseFiles() {
      document.getElementById('fileUpload').click()
    },
    onFileChange(e) {
      const file = e.target.files[0]
      this.$emit('Files', file)
      this.url = URL.createObjectURL(file)
      /*   console.log(this.url) */
    },
    removePhoto() {
      this.url = null
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

img.style__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 45%;
}

button.take_picture {
  padding: 15px 0;
  width: 60%;
  font-weight: 700;
  font-size: 17px;
  color: #ffffff;
  outline: none;
  border-radius: 10px;
  border: none;
  background-color: #0b132a;
  font-family: 'Rubik', sans-serif;
}
button.choose_from_gallery {
  padding: 15px 0;
  width: 60%;
  outline: none;
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
