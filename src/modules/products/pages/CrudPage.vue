<template>
  <div>
    <h2 class="title">Product management</h2>
    <div class="menu-options">
      <input type="text" placeholder="Search product" class="search-bar" v-model="querySearch">
      <button class="create-btn">New</button>
    </div>
    <Product class="product-card" v-for="pro in products" :key="pro.id" :product="{
        title: pro.title,
        image: pro.image,
        description: pro.description,
        price: pro.price,
        id: pro.id
      }"
      :crudBtn=true />
  </div>
</template>

<script>
import Product from '../components/Product'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      querySearch: ''
    }
  },
  components: {
    Product
  },
  computed: {
    ...mapState('products', ['products'])
  },
  methods: {
    ...mapActions('products', {
      filterBySearch: 'searchProduct'
    }),
    searchProduct () {
      this.filterBySearch(this.querySearch)
    }
  },
  watch: {
    querySearch () {
      this.searchProduct()
    }
  }

}
</script>

<style scoped>
.title {
  text-align: center;
  margin: 20px 0;
}

.menu-options {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #1f1f1f;
  padding-bottom: 10px;
}

.search-bar {
  width: 80%;
  padding: 10px;
  border: 1px solid #1f1f1f;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px;
}

.create-btn {
  width: 15%;
  padding: 5px;
  border: 1px solid #1f1f1f;
  border-radius: 5px;
  font-size: 16px;
  background: #1f1f1f;
  color: #ffffff;
  margin-right: 10px;
}

.create-btn:hover {
  cursor: pointer;
}
</style>
