<template>
  <b-col lg="12">
    <h2 class="tittle_delivTime pt-lg-3 mb-lg-4">
      Delivery and Time
    </h2>
    <div class="delivey__category mb-lg-4 ml-lg-2">
      <button
        class="option__delivCatagory"
        :class="deliveryType === 'Dine in' ? 'active' : ''"
        @click="DeliveryType('Dine in')"
      >
        Dine in
      </button>
      <button
        class="option__delivCatagory"
        :class="deliveryType === 'Door Delivery' ? 'active' : ''"
        @click="DeliveryType('Door Delivery')"
      >
        Door Delivery
      </button>
      <button
        class="option__delivCatagory"
        :class="deliveryType === 'Pick up' ? 'active' : ''"
        @click="DeliveryType('Pick up')"
      >
        Pick up
      </button>
    </div>
    <div class="ml-lg-2">
      <div>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-lg="4"
          content-cols-lg="6"
          class="mb-lg-4 py-lg-3"
          label="Now"
          label-for="input-horizontal"
        >
          <button
            class="option__deliv"
            :class="deliveryNow === 'Table 2' ? 'active' : ''"
            @click="DeliveryNow('Table 2')"
          >
            Yes
          </button>
          <button
            class="option__deliv"
            :class="deliveryNow === 'No' ? 'active' : ''"
            @click="DeliveryNow('No')"
          >
            No
          </button>
        </b-form-group>
      </div>
      <div>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-lg="4"
          class="pb-lg-2"
          content-cols-lg="8"
          label="Set Time"
          label-for="set-time"
        >
          <b-form-input placeholder="Enter time for reservation"></b-form-input>
        </b-form-group>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'CardOrder',
  data() {
    return {
      deliveryType: '',
      deliveryNow: ''
    }
  },
  methods: {
    DeliveryType(value) {
      this.deliveryType = value
      this.$emit('DeliveryType', this.deliveryType)
    },
    DeliveryNow(value) {
      this.deliveryNow = value
      this.$emit('DeliveryNow', this.deliveryNow)
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/DetailsProduct/D-ProductCard.css';
</style>
