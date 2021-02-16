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
              :class="category === 3 && !search ? 'active' : ''"
            >
              Favorite Product
            </a>
          </div>
          <div class="menu_items px-xl-4 p-2 flex-lg-fill bd-highlight">
            <a
              class="menu__links"
              @click="selectCatagory(1)"
              :class="category === 1 && !search ? 'active' : ''"
            >
              Coffee
            </a>
          </div>
          <div class="menu_items px-xl-4 p-2 flex-lg-fill bd-highlight">
            <a
              class="menu__links"
              @click="selectCatagory(2)"
              :class="category === 2 && !search ? 'active' : ''"
            >
              Non Coffee
            </a>
          </div>
          <div class="menu_items px-xl-4 p-2 flex-lg-fill bd-highlight">
            <a
              class="menu__links"
              @click="selectCatagory(4)"
              :class="category === 4 && !search ? 'active' : ''"
            >
              Foods
            </a>
          </div>
          <div class="menu_items px-xl-4 p-2 flex-lg-fill bd-highlight">
            <a
              class="menu__links"
              @click="selectCatagory(5)"
              :class="category === 5 && !search ? 'active' : ''"
              >Add-on</a
            >
          </div>
          <b-dropdown
            class="dropdown"
            size="md"
            style="outline: none !important;"
            variant="outline-white"
            toggle-class="text-decoration-none"
          >
            <template #button-content>
              <span class="sort__by">Sort by </span>
            </template>
            <b-dropdown-item @click="selectSort('order by name_product ASC')"
              >Sort Name Product A - Z</b-dropdown-item
            >
            <b-dropdown-item @click="selectSort('order by name_product DESC')"
              >Sort Name Product Z - A</b-dropdown-item
            >
            <b-dropdown-item @click="selectSort('order by price_product DESC')"
              >Highest Price Product</b-dropdown-item
            >

            <b-dropdown-item @click="selectSort('order by price_product ASC')">
              cheapest price Product</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <div class="product__item">
          <b-row cols-lg="3" cols-xl="4" cols="2" class="mt-5 mt-lg-5 ml-xl-2">
            <b-col
              v-for="(item, index) in products"
              :key="index"
              class="product__list mb-4"
            >
              <div class="card__product position-relative">
                <router-link
                  tag="a"
                  :to="{
                    name: 'ProductDetails',
                    params: { idDtls: item.id_product }
                  }"
                >
                  <div class="image_fitProduct">
                    <img
                      :src="
                        `${this.VUE_APP_SERVICE_URL_IMAGE}` + item.image_product
                      "
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
              v-model="currentPage"
              pills
              :total-rows="totalRows"
              :per-page="limit"
              align="fill"
              @change="handlePageChange"
            ></b-pagination>
          </div>
          <router-link
            tag="button"
            v-if="roles === 1"
            class="btn__AddProduct ml-lg-4 p-lg-4 p-3 mt-lg-3 mb-lg-3 mb-3"
            to="/addProduct"
            >Add new Product</router-link
          >
        </div>
      </b-container>
    </div>
  </b-col>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Productlist',
  computed: {
    ...mapGetters({
      products: 'getDataProduct',
      page: 'getPageProduct',
      limit: 'getLimitProduct',
      totalRows: 'getTotalRowsProduct',
      roles: 'getRoles',
      search: 'getSearch'
    }),
    currentPage: {
      get() {
        return this.page
      },
      set(newPage) {
        return newPage
      }
    }
  },
  data() {
    return {
      category: '',
      VUE_APP_SERVICE_URL_IMAGE: process.env.VUE_APP_SERVICE_URL_IMAGE
    }
  },
  created() {
    this.changePage(1)
    this.getProducts()
    window.addEventListener('resize', this.handleResize())
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize())
  },
  methods: {
    ...mapActions(['getProducts', 'handleResize', 'getCategory']),
    ...mapMutations([
      'changePage',
      'changePageCategory',
      'delSearch',
      'changeSort'
    ]),
    handlePageChange(numberPage) {
      if (this.search) {
        this.category = ''
        this.changePage(numberPage)
        this.getProducts(this.search)
      } else if (this.category) {
        this.changePage(numberPage)
        this.getCategory(this.category)
      } else {
        this.category = ''
        this.changePage(numberPage)
        this.getProducts()
      }
    },
    formatPrice(value) {
      const val = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      return val
    },
    selectCatagory(value) {
      this.delSearch('')
      this.changePage(1)
      this.category = value
      this.getCategory(this.category)
    },
    selectSort(value) {
      if (this.search) {
        this.category = ''
        this.changeSort(value)
        this.getProducts(this.search)
      } else if (this.category) {
        this.changeSort(value)
        this.getCategory(this.category)
      } else {
        this.changeSort(value)
        this.getProducts()
      }
    }
  }
}
</script>
<style scoped>
.dropdown {
  position: absolute;
  left: 720px;
  top: 2px;
  background-color: #fa8749;
  border-radius: 10px;
}
.sort__by {
  color: #fff;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
}
@media (max-width: 576px) {
  .dropdown {
    position: static;
  }
}
@import '../../../assets/css/product/Productlist.css';
</style>
