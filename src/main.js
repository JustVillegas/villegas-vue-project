import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyA3NXQPspJtxTQ86M8lY0273ulL5-_g6KI',
  authDomain: 'vueproject-9707f.firebaseapp.com',
  projectId: 'vueproject-9707f',
  storageBucket: 'vueproject-9707f.appspot.com',
  messagingSenderId: '677615089288',
  appId: '1:677615089288:web:9955d68a52dee1d1c4513d',
  measurementId: 'G-TGBXBCLSGP'
}

initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
