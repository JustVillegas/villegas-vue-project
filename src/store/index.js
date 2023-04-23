import { createStore } from 'vuex'
import productsStore from './products'
import authStore from './auth'

export default createStore({
  modules: {
    products: productsStore,
    auth: authStore
  }
})
