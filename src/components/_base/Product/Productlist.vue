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
            id="dropdown-offset"
            offset="25"
            text="Offset Dropdown"
            class="m-2"
          >
            <b-dropdown-item @click="selectSort('order by price_product DESC')"
              >Product DESC</b-dropdown-item
            >
            <b-dropdown-item @click="selectSort('order by price_product ASC')"
              >Producy ASC</b-dropdown-item
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
                      :src="'http://localhost:3000/' + item.image_product"
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
      category: ''
    }
  },
  created() {
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
@import '../../../assets/css/product/Productlist.css';
</style>
