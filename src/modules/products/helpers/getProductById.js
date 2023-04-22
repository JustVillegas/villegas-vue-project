const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    const product = fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
    resolve(product)
  })
}

export default getProductById
