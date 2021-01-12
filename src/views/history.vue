<template>
  <div class="history">
    <Navbar :showSearchIcons="search" :msg="MassageValue" />
    <HMC />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import HMC from '../components/_base/History/HistoryMainComponent'
export default {
  name: 'history',
  components: {
    Navbar,
    Footer,
    HMC
  },
  data() {
    return {
      search: false,
      MassageValue: 30
    }
  }
}
</script>
