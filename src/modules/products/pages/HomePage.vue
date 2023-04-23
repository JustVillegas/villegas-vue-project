
<template>
  <section>
    <h1>Products</h1>
    <div class="filter-content">
      <button @click="toggleFilter" class="btn-filter"><span class="filter-icon"></span></button>
    </div>
    <div v-if="isActiveFilter" class="options">
      <button>Futuro filtro 1</button>
      <button>Futuro filtro 2</button>
      <button>Futuro filtro 3</button>
    </div>
    <ul class="products">
      <Product class="product-card" v-for="pro in products" :key="pro.id" :product="{
        title: pro.title,
        image: pro.image,
        description: pro.description,
        price: pro.price,
        id: pro.id
      }" />
    </ul>
  </section>
</template>
<script>
import Product from '../components/Product'
import { mapState } from 'vuex'

export default {
  components: {
    Product
  },
  data () {
    return {
      isActiveFilter: false
    }
  },
  methods: {
    toggleFilter () {
      if (this.isActiveFilter === true) {
        this.isActiveFilter = false
      } else {
        this.isActiveFilter = true
      }
    }
  },
  computed: {
    ...mapState('products', ['products'])
  }
}

</script>

<style scoped>

section {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
}

.filter-content {
  display: flex;
  width: 100vw;
  border-bottom: 1px solid #616161;
  padding-bottom: 20px;
}
.btn-filter{
  padding: 10px;
  border: 0;
  margin: 0 50px;
}

.btn-filter:hover {
  cursor: pointer;
}

.filter-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url('@/assets/filter.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

}

.options {
  background: #252525;
  width: 100%;
  padding: 50px 0;
}

.options button {
  padding: 10px 20px;
  border: 0;
  margin: 0 15px;
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  .filter-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }
  .btn-filter {
    margin: 0 20px;
  }
  .products {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
}

</style>
