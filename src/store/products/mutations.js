export const setProducts = (state, val) => {
  state.products = val
}

export const setProduct = (state, val) => {
  state.selectedProduct = val
}

export const updateProduct = (state, val) => {
  state.updatedProduct = val
  state.products = state.products.map(product => {
    if (product.id === val.id) {
      product = val
    }
    return product
  })
  state.selectedProduct = val
}

export const deleteProduct = (state, val) => {
  state.products = state.products.filter(product => product.id !== val)
  state.selectedProduct = {}
}

export const addProduct = (state, val) => {
  state.products.push(val)
}
