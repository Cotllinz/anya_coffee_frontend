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
import EditProduct from '../views/editProduct.vue'
import store from '../store'
import editPromo from '../views/editPromo.vue'
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
    path: '/productDetails/:idDtls',
    name: 'ProductDetails',
    component: Productdetails
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    meta: { requiresAuth: true }
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: Addproduct,
    meta: { requiresRoles: true }
  },
  {
    path: '/Addpromo',
    name: 'Addpromo',
    component: addPromo,
    meta: { requiresRoles: true }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: signUp,
    meta: { requiresVisitor: true }
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forgot,
    meta: { requiresVisitor: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresRoles: true }
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    meta: { requiresAuth: true }
  },
  {
    path: '/history',
    name: 'history',
    component: History,
    meta: { requiresAuth: true }
  },
  {
    path: '/editProduct/:idedit',
    name: 'editProduct',
    component: EditProduct,
    meta: { requiresRoles: true }
  },
  {
    path: '/editPromo/:idpromo',
    name: 'editPromo',
    component: editPromo,
    meta: { requiresRoles: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/Login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresRoles)) {
    if (store.getters.getRoles === 1) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})
export default router
