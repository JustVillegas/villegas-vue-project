<template>
  <section>
    <h1 class="title">Log In</h1>

    <div class="form">
      <div class="fieldWrapper">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email">
      </div>
      <div class="fieldWrapper">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password">
      </div>
      <router-link class="link" :to="{name: 'registerPage'}">I don't have an account</router-link>
      <button @click="loginWithEmail" class="loginbtn">Log in</button>

      <div>
        <div class="alternative">
          <span class="hr"><hr></span>
          <span class="alt-text">Or login with</span>
          <span class="hr"><hr></span>
        </div>
        <div class="socialMedia">
          <button @click="loginWithGoogle" class="google">
            <span class="google-icon"></span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginWithEmail () {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
          this.$router.push({ name: 'productsHome' })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
        })
    },
    loginWithGoogle () {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          const user = result.user
          console.log(token, user)
          this.$router.push({ name: 'productsHome' })
        }).catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.email
          const credential = GoogleAuthProvider.credentialFromError(error)
          console.log(errorCode, errorMessage, email, credential)
        })
    }
  }
}
</script>

<style scoped>
section {
  max-width: 1280px;
}

.title {
  text-align: center;
  font-size: 2.1rem;
}

.form {
  display: flex;
  flex-flow: column nowrap;
  padding: 20px 100px;
  align-items: center;
}

label {
  margin: 10px 0;
}

input {
  height: 25px;
  width: 250px;
}

.fieldWrapper {
  display: flex;
  flex-flow: column nowrap;
}

.loginbtn {
  border: 0;
  margin: 10px;
  padding: 10px 30px;
  background-color: #2f20ff;
  color: #ffffff;
  font-size: 16px;
}

.loginbtn:hover {
  cursor: pointer;
}

.link {
  color: #2f20ff;
  text-decoration: none;
  margin: 20px 0;
}

.alternative{
  display: flex;
  padding: 20px 100px;
}

.alternative span {
  display: inline-block;
}

.alternative .hr {
  width: 50%;
}

.alternative .alt-text {
  width: 200px;
  font-size: 12px;
  color: #444444;
  margin: 0 10px;
  text-align: center;
}

.socialMedia {
  display: flex;
  justify-content: center;
}
.google {
  padding: 15px 15px;
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: space-between;
  border: 0;
  background: #dadada;
}

.google:hover {
  cursor: pointer;
}

.google-icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  background-image: url('@/assets/google-logo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

}
</style>
