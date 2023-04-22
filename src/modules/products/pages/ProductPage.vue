<template>
  <div class="header">
    <router-link class="back" :to="{name: 'productsHome'}">Back</router-link>
  </div>
  <div v-if="selectedProduct" class="product">
    <img class="image" :src="selectedProduct.image" :alt="selectedProduct.title">
    <div class="info">
      <h2 class="title">{{ selectedProduct.title }}</h2>
      <p class="desc">{{ selectedProduct.description }}</p>
      <p class="price">${{ selectedProduct.price }}</p>
      <button @click="togglePopup" class="edit">Edit</button>
    </div>
  </div>
  <div v-if="isActive" class="popup-bg">
    <div class="popup">
      <h3>Update Product</h3>
      <div class="wrapper">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" :placeholder="selectedProduct.title" v-model="newTitle">
      </div>
      <div class="wrapper">
        <label for="price">Price</label>
        <input type="number" name="price" id="price" min="0" :placeholder="selectedProduct.price" v-model="newPrice">
        <label for="price" class="info-price"><span class="adv info-price"></span>If you put a negative number it wont be updated</label>
      </div>
      <div class="wrapper">
        <label for="desc">Description</label>
        <input type="text" name="desc" id="desc" :placeholder="selectedProduct.description" v-model="newDesc">
      </div>
      <div class="wrapper">
        <label for="image">Image</label>
        <input type="text" name="image" id="image" placeholder="New url" v-model="newImg">
      </div>
      <div class="buttons">
        <button @click="togglePopup" class="btn cancel">Cancel</button>
        <button @click="getInfo({newTitle,newPrice,newDesc,newImg})" class="btn update">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      isActive: false,
      newTitle: '',
      newPrice: '',
      newDesc: '',
      newImg: ''
    }
  },
  created () {
    this.product(this.id)
  },
  methods: {
    ...mapActions('products', {
      product: 'fetchProductById',
      updaterProduct: 'fetchUpdateProduct'
    }),
    togglePopup () {
      if (this.isActive === false) {
        this.isActive = true
      } else if (this.isActive === true) {
        this.isActive = false
      }
    },
    getInfo ({ newTitle, newPrice, newDesc, newImg }) {
      if (newTitle === '' || newTitle === undefined) {
        this.newTitle = this.selectedProduct.title
      }
      if (newPrice === '' || newPrice === undefined || newPrice < 0) {
        this.newPrice = this.selectedProduct.price
      }
      if (newDesc === '' || newDesc === undefined) {
        this.newDesc = this.selectedProduct.description
      }
      if (newImg === '' || newImg === undefined) {
        this.newImg = this.selectedProduct.image
      }

      this.togglePopup()
      this.updaterProduct({
        id: this.id,
        title: this.newTitle,
        price: this.newPrice,
        description: this.newDesc,
        image: this.newImg
      })
    }
  },
  computed: {
    ...mapState('products', ['selectedProduct', 'udpatedProduct'])
  }
}

</script>

<style scoped>

.header {
  position: relative;
}
.product {
  display: flex;
  margin: 50px 20px;
  justify-content: center;
  align-items: center;
}

.image {
  width: 300px;
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

.header {
  width: 100vw;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.back {
  color: #ffffff;
  text-decoration: none;
  padding: 8px 15px;
  margin: 20px;
  background: #1f1f1f;
}

.edit {
  background: #db0e3a;
  border: 0;
  padding: 12px 28px;
  margin: 5px 0;
  color: #ffffff;
}

.edit:hover {
  cursor: pointer;
}

.popup-bg {
  position: absolute;
  width: 100%;
  height: calc(100vh + 20vh);
  top: 0;
  right: 0;
  background: #1f1f1f77;
  display: flex;
  justify-content: center;
  padding: 100px 0;
}

.popup {
  width: 500px;
  height: 650px;
  background: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
}

label {
  font-size: 18px;
  margin: 10px 0;
}

input {
  width: 300px;
  height: 30px;
  padding: 5px 10px;
  border: 0;
  box-shadow: -1px 3px 33px -3px rgba(0,0,0,0.25);
}

.btn {
  margin: 0 10px;
  border: 0;
  padding: 10px 20px;
  color: #ffffff;
}

.btn:hover {
  cursor: pointer;
}
.cancel {
  background: #db0e3a;
}

.update {
  background: #340edb;
}

.adv {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url('@/assets/info.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-right: 5px;
}

.info-price {
  display: flex;
  font-size: 12px;
  color: #3f3f3f;
  align-items: center;
}
</style>
