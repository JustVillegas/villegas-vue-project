<template>
  <div class="product">
    <img class="image" :src="product.image" :alt="product.title">
    <div class="info">
      <h2 class="title">{{ product.title }}</h2>
      <p class="desc">{{ product.description }}</p>
      <p class="price">${{ product.price }}</p>
    </div>
    <div class="buttons">
      <router-link class="view" :to="{name: 'productById', params: {id:product.id}}">View</router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}

</script>

<style scoped>
.product {
  display: flex;
  margin: 50px 20px;
  justify-content: center;
}

.image {
  width: 100px;
  object-fit: contain;
  margin: 0 50px;
}

.info {
  width: 600px;
}

.title {
  color: #222222;
}

.desc {
  color: #222222;
  text-align: justify;
}

.price {
  font-weight: 700;
  text-align: right;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}
.view {
  background: #0517be;
  border: 0;
  padding: 12px 28px;
  margin: 5px 0;
  color: #ffffff;
}

.view:hover {
  cursor: pointer;
}
</style>
