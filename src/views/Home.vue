<template>
  <div class="Home">
    <Navbar :roles="role" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
export default {
  name: 'Home',
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
