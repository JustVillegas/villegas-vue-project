export const priceSort = (state) => {
  return state.products.filter(product => product.price)
}
