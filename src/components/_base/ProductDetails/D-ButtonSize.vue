<template>
  <b-col lg="5" class="mt-4 mb-4 mb-lg-0 mt-lg-5">
    <div class="catagory__sizeProduct py-3 py-xl-4">
      <h2 class="title__chooseSize">Choose a size</h2>
      <div class="choose_sizeDrink pt-lg-2 ml-lg-5 pb-lg-2">
        <a @click="Addsize('Reguler', 5000)" v-if="D_Size.size_R === 'ON'">
          <img
            src="../../../assets/image/icons/R_Size.svg"
            :class="size === 'Reguler' ? 'active' : ''"
            alt="R_Size"
          />
        </a>
        <a @click="Addsize('Large', 7000)" v-if="D_Size.size_L === 'ON'"
          ><img
            :class="size === 'Large' ? 'active' : ''"
            src="../../../assets/image/icons/L_Size.svg"
            alt="L_Size"
        /></a>
        <a @click="Addsize('Extra Large', 10000)" v-if="D_Size.size_XL === 'ON'"
          ><img
            :class="size === 'Extra Large' ? 'active' : ''"
            src="../../../assets/image/icons/XL_Size.svg"
            alt="XL_Size"
        /></a>
        <a @click="Addsize('250 Gram', 5000)" v-if="D_Size.size_200 === 'ON'"
          ><img
            :class="size === '250 Gram' ? 'active' : ''"
            src="../../../assets/image/icons/Size_250.svg"
            alt="250"
        /></a>
        <a @click="Addsize('300 Gram', 7000)" v-if="D_Size.size_350 === 'ON'"
          ><img
            :class="size === '300 Gram' ? 'active' : ''"
            src="../../../assets/image/icons/Size_300.svg"
            alt="300"
        /></a>
        <a @click="Addsize('500 Gram', 10000)" v-if="D_Size.size_400 === 'ON'"
          ><img
            :class="size === '500 Gram' ? 'active' : ''"
            src="../../../assets/image/icons/Size_500.svg"
            alt="500"
        /></a>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ['D_Size'],
  name: 'Size_Product',
  data() {
    return {
      size: '',
      priceSize: 0,
      store: ''
    }
  },
  methods: {
    Addsize(value, price) {
      /* this.size = value */
      if (!this.store) {
        this.size = value
        this.priceSize = price
        this.store = value
      } else {
        if (this.store === value) {
          this.size = ''
          this.priceSize = 0
          this.store = ''
        } else {
          this.size = value
          this.priceSize = price
          this.store = value
        }
      }
      console.log(this.store)
      console.log('Data Size' + this.size)
      this.$emit('SizeProduct', this.size, this.priceSize)
    }
  }
}
</script>
<style scoped>
@import '../../../assets/css/DetailsProduct/D-ButtonSize.css';
</style>
