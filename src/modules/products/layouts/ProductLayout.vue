<template>
  <header>
    <h1>Products App</h1>
    <nav>
      <router-link class="nav-link" :to="{name: 'productsHome'}">Productos</router-link>
      <a class="nav-link">Create Product</a>
    </nav>
    <div class="account">
      <router-link @click="logout" class="button" :to="{name: 'homePage'}">Log out</router-link>
    </div>
  </header>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    this.products()
  },
  methods: {
    ...mapActions('products', {
      products: 'fetchProducts'
    }),
    ...mapActions('auth', {
      logout: 'logout'
    })

  }
}
</script>

<style scoped>

header {
  padding: 0px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1f1f1f;
  color: #ffffff;
}

nav a {
  margin: 0 10px;
}

.nav-link {
  text-decoration: none;
  color: #ffffff;
}

.button {
  border: 0;
  font-size: 16px;
  padding: 10px 30px;
  background: #ffffff;
  color: #1f1f1f;
  text-decoration: none;
}

.button:hover {
  cursor: pointer;
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  header {
    flex-direction: column;
    padding: 20px 20px;
  }

  nav {
    margin: 20px 0;
  }

  .button {
    margin-top: 20px;
  }
}
</style>
