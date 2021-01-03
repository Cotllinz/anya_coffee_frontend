<template>
  <b-col lg="8">
    <hr style="border: 1px solid" class="d-md-block d-lg-none" />
    <div class="menu__list">
      <b-container>
        <div class="menus d-flex bd-highlight">
          <div class="menu_items px-xl-4 p-2 flex-lg-fill bd-highlight">
            <a
              class="menu__links"
              @click="selectCatagory(3)"
              :class="category === 3 ? 'active' : ''"
            >
              Favorite Product
            </a>
          </div>
          <div class="menu_items px-xl-4 p-2 flex-lg-fill bd-highlight">
            <a
              class="menu__links"
              @click="selectCatagory(1)"
              :class="category === 1 ? 'active' : ''"
            >
              Coffee
            </a>
          </div>
          <div class="menu_items px-xl-4 p-2 flex-lg-fill bd-highlight">
            <a
              class="menu__links"
              @click="selectCatagory(2)"
              :class="category === 2 ? 'active' : ''"
            >
              Non Coffee
            </a>
          </div>
          <div class="menu_items px-xl-4 p-2 flex-lg-fill bd-highlight">
            <a
              class="menu__links"
              @click="selectCatagory(4)"
              :class="category === 4 ? 'active' : ''"
            >
              Foods
            </a>
          </div>
          <div class="menu_items px-xl-4 p-2 flex-lg-fill bd-highlight">
            <a
              class="menu__links"
              @click="selectCatagory(5)"
              :class="category === 5 ? 'active' : ''"
              >Add-on</a
            >
          </div>
        </div>
        <div class="product__item">
          <b-row cols-lg="3" cols-xl="4" cols="2" class="mt-5 mt-lg-5 ml-xl-2">
            <b-col
              v-for="(item, index) in product.productList"
              :key="index"
              class="product__list mb-4"
            >
              <div class="card__product position-relative">
                <router-link
                  tag="a"
                  :to="{
                    name: 'ProductDetails',
                    params: { id: item.id_product }
                  }"
                >
                  <div class="">
                    <img
                      src="../../../assets/image/mainImage/Product1.svg"
                      class="card__imageProduct position-absolute"
                      alt="ListImage"
                    />
                  </div>
                  <div class="card__bodyProduct">
                    <h2 class="title__Product">{{ item.name_product }}</h2>
                    <p class="price__product text-center">
                      IDR {{ formatPrice(item.price_product) }}
                    </p>
                  </div>
                </router-link>
              </div>
            </b-col>
          </b-row>
          <div class="mt-3 ml-lg-5">
            <b-pagination
              v-model="product.currentPage"
              pills
              :total-rows="rows"
              :per-page="product.limit"
              align="fill"
              @change="handlePageChange"
            ></b-pagination>
          </div>
          <router-link
            tag="button"
            v-if="roles === 1 || roles === 2"
            class="btn__AddProduct  p-lg-4 p-3 mt-lg-3 mb-lg-3 mb-3"
            to="/addProduct"
            >Add new Product</router-link
          >
        </div>
      </b-container>
    </div>
  </b-col>
</template>
<script>
import axios from 'axios'
export default {
  props: ['product', 'roles'],
  name: 'Productlist',
  computed: {
    rows() {
      return this.product.totalRows
    }
  },
  data() {
    return {
      category: '',
      VUE_APP_SERVICE_URL: process.env.VUE_APP_SERVICE_URL
    }
  },
  created() {
    this.getProductby()
  },
  methods: {
    getProduct() {
      this.product.productList
    },
    getProductby() {
      axios
        .get(`${this.VUE_APP_SERVICE_URL}category/${this.category}`)
        .then(res => {
          this.product.productList = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    handlePageChange(numberPage) {
      const newPage = numberPage
      this.$emit('page', newPage)
    },
    formatPrice(value) {
      const val = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      return val
    },
    selectCatagory(value) {
      this.category = value
      this.getProductby()
    }
  }
}
</script>
<style scoped>
@import '../../../assets/css/product/Productlist.css';
</style>
