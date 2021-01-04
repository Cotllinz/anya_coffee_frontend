import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Productdetails from '../views/Productdetails.vue'
import Payment from '../views/Payment.vue'
import Addproduct from '../views/addProduct.vue'
import addPromo from '../views/addPromo.vue'
import Login from '../views/Auth/Login.vue'
import signUp from '../views/Auth/signUp.vue'
import Forgot from '../views/Auth/forgotPass.vue'
import Dashboard from '../views/dashboard.vue'
import Account from '../views/account.vue'
import History from '../views/history.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/productDetails_:idDtls',
    name: 'ProductDetails',
    component: Productdetails
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: Addproduct
  },
  {
    path: '/Addpromo',
    name: 'Addpromo',
    component: addPromo
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signUp
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forgot
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/history',
    name: 'history',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
