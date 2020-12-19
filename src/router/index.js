import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Productdetails from '../views/Productdetails.vue'
import Payment from '../views/Payment.vue'
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
    path: '/productDetails_:id',
    name: 'ProductDetails',
    component: Productdetails
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
