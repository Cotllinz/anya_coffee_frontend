<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js"></script>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  created() {
    this.interceptorRequest()
    this.interceptorResponse()
  },
  methods: {
    ...mapActions(['interceptorRequest', 'interceptorResponse'])
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap');
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.swal2-title,
.swal2-html-container,
.swal2-confirm,
.swal2-deny {
  font-family: 'Poppins', sans-serif;
}
</style>
