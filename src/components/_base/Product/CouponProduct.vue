<template>
  <b-container>
    <main class="mt-3">
      <b-row>
        <b-col lg="4" class="promo__display">
          <h2 class="title__promo mt-4 mt-lg-4">Promo for you</h2>
          <p class="desc__promo mt-lg-3">
            Coupons will be updated every weeks. Check them out!
          </p>
          <div class="cardpromo__background position-relative">
            <div
              v-for="(items, index) in promo"
              :key="index"
              class="card-promo"
            >
              <div
                class="edit_promobtn"
                @click="editPromo(items.id_coupon)"
                v-if="roles === 1"
              >
                <img
                  class="imgPromo_styledicon mr-lg-2 pt-lg-2"
                  src="../../../assets/image/icons/edit_accountIcons.svg"
                  alt="icon_edit"
                />
              </div>
              <div
                :class="roles === 1 ? 'image_promofit_roles' : 'image_promofit'"
              >
                <img
                  :src="'http://localhost:3000/' + items.image_product"
                  class="card__promoStyled"
                  alt="Coupon"
                />
              </div>
              <div class="title__card">
                <h2 class="title__promoone">{{ items.name_product }}</h2>
                <h2 class="title__promotwo">
                  {{ items.discount_coupon }}% OFF
                </h2>
                <p class="promo__details">
                  Buy {{ items.min_purchase }} {{ items.name_product }} and get
                  {{ items.discount_coupon }}% Discount off for You :)
                </p>
                <hr class="type__border mt-lg-3" />
                <h5 class="title__coupon mt-lg-4">COUPON CODE</h5>
                <h2 class="coupon__code mt-lg-3">{{ items.code_coupon }}</h2>
                <p class="expired__codeCoupon">
                  Valid untill October 10th 2020
                </p>
              </div>
            </div>
            <div class="d-none d-lg-block card__promoBGone"></div>
            <div class="d-none d-lg-block card__promoBGtwo"></div>
          </div>
          <div class="mt-2">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              pills
              :per-page="limit"
              @change="handlePageChange"
              class="justify-content-center justify-content-lg-start"
              size="md"
            ></b-pagination>
          </div>
          <button class="mt-lg-1 p-lg-4 p-3 mt-2 btn__apply__coupon">
            Apply Coupon
          </button>
          <div class="terms__conditions mt-3 ml-2 ml-lg-1 mt-lg-5 mb-lg-5">
            <ol>
              <ul>
                Terms and Condition
              </ul>
              <li>
                You can only apply 1 coupon per day
              </li>
              <li>It only for dine in</li>
              <li>Buy 1 get 1 only for new user</li>
              <li>Should make member card to apply coupon</li>
            </ol>
          </div>
          <router-link
            tag="button"
            class="btn__AddPromo  p-lg-4 p-3 mt-lg-3"
            v-if="roles === 1"
            to="/Addpromo"
            >Add new Promo</router-link
          >
        </b-col>
        <Productlist />
      </b-row>
    </main>
  </b-container>
</template>

<script>
import Productlist from './Productlist'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      roles: 'getRoles',
      page: 'getPagePromo',
      limit: 'getLimitPromo',
      promo: 'getDataPromo',
      totalRows: 'getTotalRowsPromo'
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
  components: {
    Productlist
  },
  name: 'CouponProduct',
  created() {
    this.changepagePromo(1)
    this.getPromo()
  },
  methods: {
    ...mapActions(['getPromo']),
    ...mapMutations(['changepagePromo']),
    handlePageChange(numberPage) {
      this.changepagePromo(numberPage)
      this.getPromo()
    },
    editPromo(idPromo) {
      this.$router.push({
        name: 'editPromo',
        params: { idpromo: idPromo }
      })
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/product/couponCode.css';
</style>
