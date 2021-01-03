<template>
  <div class="Home">
    <Navbar :roles="role" :msg="MassageValue" />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      role: 0,
      MassageValue: 30
    }
  }
}
</script>
