import getProductById from '@/modules/products/helpers/getProductById'
import getProducts from '@/modules/products/helpers/getProducts'
// import updateProduct from '@/modules/products/helpers/updateProduct'

export const fetchProducts = async ({ commit }) => {
  const productsList = await getProducts()
  commit('setProducts', productsList)
}

export const fetchProductById = async ({ commit }, id) => {
  const product = await getProductById(id)
  commit('setProduct', product)
}

export const fetchUpdateProduct = async ({ commit }, newProduct) => {
  // const product = await updateProduct(newProduct)
  commit('setProduct', newProduct)
  commit('updateProduct', newProduct)
}

export const fetchDeleteProduct = async ({ commit }, id) => {
  commit('deleteProduct', id)
}

export const fetchAddProduct = async ({ commit }, product) => {
  commit('addProduct', product)
}

export const searchProduct = async ({ commit }, search) => {
  const productsList = await getProducts()
  const filteredProducts = productsList.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
  commit('setProducts', filteredProducts)
}
