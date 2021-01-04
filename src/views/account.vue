<template>
  <div class="Account">
    <Navbar :roles="role" :msg="MassageValue" />
    <main class="bg__account">
      <hr class="mt-lg-3 d-none d-lg-block" />
      <b-container class="mt-lg-4 pt-lg-2 pt-4 pb-5 pb-lg-5">
        <h2 class="title ml-lg-1 mt-lg-4 mb-3 mb-lg-4">User Profile</h2>
        <b-form>
          <div class="card__account p-lg-5 pt-4">
            <b-row>
              <LCA />
              <RCA />
            </b-row>
          </div>
        </b-form>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import LCA from '../components/_base/Account/LeftComponentAcc'
import RCA from '../components/_base/Account/rightComponentAcc'
export default {
  name: 'Account',
  components: {
    Navbar,
    Footer,
    LCA,
    RCA
  },
  data() {
    return {
      role: 0,
      MassageValue: 30
    }
  }
}
</script>
<style scoped>
main.bg__account {
  background-image: url('../assets/image/mainImage/Bg__AccountPage.jpg');
  background-size: cover;
  background-position: 0% 35%;
}

/* Media Query Main Background */
@media (max-width: 1024px) {
  main.bg__account {
    background-position: 60% 70%;
  }
}
@media (max-width: 576px) {
  main.bg__account {
    background-position: 0% 40%;
  }
}
div.card__account {
  background: #f8f8f8;
  border-radius: 20px;
}

h2.title {
  text-shadow: 0px 6px 8px rgba(255, 255, 255, 0.26);
  color: #ffffff;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 35px;
}
</style>
