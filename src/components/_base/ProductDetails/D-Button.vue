<template>
  <b-col sm="12" lg="12">
    <button
      type="button"
      @click="addToCart(DButton, Details)"
      class="btn__toCartnStaf mb-lg-4 mb-3"
    >
      Add to Cart
    </button>
    <button type="button" v-if="roles === 0" class="btn__toCartnStaf">
      Ask to Staff
    </button>
    <button
      type="button"
      @click="editBtn(DButton)"
      v-else
      class="btn__toCartnStaf"
    >
      Edit Product
    </button>
  </b-col>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['DButton', 'Details'],
  name: 'DButton',
  computed: {
    ...mapGetters({ roles: 'getRoles' })
  },
  methods: {
    addToCart(data1, data2) {
      if (data2.Size) {
        const SetCart = {
          id_product: data1.id_product,
          name_product: data1.name_product,
          id_historydetails: 1,
          qty: data2.qty,
          total: data2.qty * data1.price_product + data2.SizePrice * data2.qty,
          size_detail: data2.Size,
          status_delivery: data2.DeliverySet,
          status_table: data2.Deliverynow
        }
        this.$emit('SendCheckout', SetCart)
      } else {
        console.log('Input sIZE DULU')
      }
    },
    editBtn(dataEdit) {
      this.$router.push({
        name: 'editProduct',
        params: { idedit: dataEdit.id_product }
      })
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/DetailsProduct/D-Button.css';
</style>
