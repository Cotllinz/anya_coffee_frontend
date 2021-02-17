<template>
  <div class="Dashboard">
    <Navbar :msg="MassageValue" />
    <hr class="mt-lg-3 d-none d-lg-block" />
    <b-container>
      <card />
      <div class="mt-xl-4 mt-3 mb-xl-4 mb-4">
        <b-card class="chart_card">
          <Bar v-if="onChart" />
        </b-card>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import card from '../components/_base/Dashboard/card_dashboard'
import Bar from '../components/_base/Dashboard/chartjs'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Footer,
    card,
    Bar
  },
  data() {
    return {
      MassageValue: 30
    }
  },
  computed: {
    ...mapGetters({ onChart: 'turnOnchart' })
  },
  mounted() {
    this.getChart()
  },
  methods: {
    ...mapActions(['getChart'])
  }
}
</script>
<style scoped>
.chart_card {
  border-radius: 10px;
  box-shadow: 6px 6px 20px rgba(196, 196, 196, 0.67);
}
.Dashboard {
  background: #ffffff;
}
</style>
