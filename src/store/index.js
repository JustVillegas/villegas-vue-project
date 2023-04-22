import { createStore } from 'vuex'
import productsStore from './products'

export default createStore({
  modules: {
    products: productsStore
  }
})
