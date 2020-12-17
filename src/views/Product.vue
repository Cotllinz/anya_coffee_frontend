<template>
  <div class="product">
    <Navbar :roles="role" :msg="MassageValue" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
export default {
  name: 'Product',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      role: 1,
      MassageValue: 30
    }
  }
}
</script>
