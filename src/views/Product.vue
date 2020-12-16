<template>
  <div class="product">
    <Navbar :roles="role" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
export default {
  name: 'Product',
  components: {
    Navbar
  },
  data() {
    return {
      role: 1
    }
  }
}
</script>
