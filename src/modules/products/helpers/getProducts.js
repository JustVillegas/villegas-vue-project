const getProducts = () => {
  return new Promise((resolve, reject) => {
    const products = fetch('https://fakestoreapi.com/products').then(res => res.json())
    console.log(products)
    resolve(products)
  })
}

export default getProducts
