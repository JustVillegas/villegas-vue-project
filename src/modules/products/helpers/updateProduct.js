const updateProduct = (newProduct) => {
  return new Promise((resolve) => {
    const product = fetch(`https://fakestoreapi.com/products/${newProduct.id}`, {
      method: 'PATCH',
      body: JSON.stringify(
        {
          title: newProduct.title,
          price: newProduct.price,
          description: newProduct.description,
          image: newProduct.image
        }
      )
    })
      .then(res => res.json())
      .then(json => console.log(json))

    resolve(product)
  })
}

export default updateProduct
