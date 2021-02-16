<template>
  <b-col lg="6">
    <div class="product__detailsOne">
      <div class="breadcrumb__details mt-4 mt-lg-3">
        <router-link tag="a" class="breadcrumb__listItem" to="/product"
          >Favorite & Promo</router-link
        >
        <router-link tag="a" class="breadcrumb__listItem active" to="/product">
          > {{ R_Details.name_product }}</router-link
        >
      </div>
      <div class="images_rounded position-relative">
        <img
          class="product__pictureDetail mt-4 mb-xl-3 mt-lg-5"
          :src="'http://localhost:3000/' + images"
          alt="ImagePicture"
        />
        <div
          v-if="roles === 1"
          @click="deleteProductclick"
          class="icons_admin position-absolute"
        >
          <b-icon class="icons_trash" variant="white" icon="trash"></b-icon>
        </div>
      </div>
    </div>
    <section class="d-none d-lg-block delivery__content p-lg-4 mt-lg-4">
      <DCardOrder
        :CardOrder="R_Details"
        v-on="{ DeliveryType: DeliveryType, DeliveryNow: DeliveryNow }"
      />
    </section>
  </b-col>
</template>

<script>
import DCardOrder from './D-CardOrder'
import { mapActions, mapGetters } from 'vuex'
import MixinsAlert from '../../../mixins/Alert'
export default {
  props: ['R_Details'],
  name: 'DProductOrder',
  mixins: [MixinsAlert],
  components: {
    DCardOrder
  },
  data() {
    return {
      id: 0,
      images: ''
    }
  },
  created() {
    this.id = this.$route.params.idDtls
    this.getProductId(this.id).then(result => {
      this.images = result.data.data[0].image_product
    })
  },
  computed: {
    ...mapGetters({ roles: 'getRoles' })
  },
  methods: {
    ...mapActions(['deleteProduct', 'getProductId']),
    deleteProductclick() {
      this.alertDelete().then(res => {
        if (res.value) {
          this.deleteProduct(this.id).then(() => {
            this.$swal({
              title: 'Success Deleted Product',
              icon: 'success',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            }).then(() => {
              this.$router.push('/product')
            })
          })
        } else {
          this.$swal({
            title: 'Canceled Delete',
            icon: 'info',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
      })
    },
    DeliveryType(e) {
      this.$emit('DeliveryType', e)
    },
    DeliveryNow(e) {
      this.$emit('DeliveryNow', e)
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/DetailsProduct/D-ProductOrder.css';
</style>
